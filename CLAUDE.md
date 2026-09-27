# Novos Conhecimentos: guia do projeto

Ponto de entrada para qualquer sessão de agente nesta pasta. Leia inteiro antes de editar.

## O que é o app

PWA em português, sem backend, para quem tem curiosidade e poucos minutos no celular. A cada dia existe uma **ficha do dia**, a mesma para todo mundo. A ficha abre uma **lição curta** (6 a 9 telas, 3 a 5 min, com perguntas no meio). Quem quiser mais abre **Aprofundar**, o documento longo com prova. No fim da lição, **«Próxima: X»** abre um vizinho no grafo (de preferência o que o fecho anunciou), e a pessoa segue uma trilha de curiosidade além da ficha do dia. Cada conceito lido acende um nó no **Acervo**, um mapa de todo o catálogo agrupado em regiões, áreas e subáreas. O progresso fica em `localStorage`.

Estado atual: protótipo para validar com amigos se as pessoas voltam. A fase social (ligas, amigos, Supabase) vem depois. Streak, XP e nível foram **recusados** pelo usuário para o protótipo: não reintroduza sem pedido. Imagem e vídeo gerados por IA (há um conector Higgsfield) ficam para depois da validação, por custo.

Site publicado: https://marcostoquetao.github.io/Novos-Conhecimentos/ (GitHub Pages, branch `main`). Commit e push sem perguntar estão combinados neste repositório.

## Regra editorial central: só conhecimento com respaldo

O usuário não quer temas controversos ou especulativos: dão a impressão de que o app espalha informação sem base. Os conceitos devem ser curiosos **e** estabelecidos na área.

- Tema novo só entra se o núcleo for conhecimento aceito (livro-texto, evidência replicada, fato documentado).
- Lições só usam as marcas `consenso` e `emergente`. `build.js` e `gerar.py` barram as outras.
- `python pipeline/gerar.py triagem` pede ao JEV uma nota para cada termo do catálogo. O editor decide o que sai na aba «Curadoria do catálogo» da tela de revisão, e as decisões vão para `pipeline/curadoria.jsonl`. **Ainda não foram aplicadas.**
- No Aprofundar, o que não é garantido mora só na seção final **«Onde a ciência ainda pesquisa»** (campo `fronteira: [{tema, html}]`), com carimbo «Em pesquisa» e aviso explícito. O build barra caixas `marca controverso`/`marca especulacao` no corpo. `python pipeline/gerar.py fronteira <id>` converte: ressalva estabelecida vira `consenso`, questão em aberto vai para a seção (na dúvida, vai para a seção). Os 32 documentos já foram convertidos.

## Arquitetura

```
index.html              telas: Hoje, Lição, Resultado, Aprofundar, Prova, Nota, Acervo, Histórico
css/estilo.css          identidade Fichário (tokens claro/escuro, peças, leitura)
fonts/*.woff2           Fraunces, Literata, IBM Plex Mono, auto-hospedadas (offline)
js/app.js               motor: ficha do dia, navegação por hash, lição, prova, revisão espaçada, histórico, métricas
js/licao.js             toca uma lição (usado pelo app E pela tela de revisão)
js/acervo.js            desenha o mapa do acervo em SVG (câmera e zoom semântico)
js/catalogo.js          347 termos (id, termo, area, dificuldade, gancho): o reservatório
js/docs/<id>.js         um documento por conceito: FONTE DA VERDADE (inclui o campo licao)
js/grafo.json           subárea e ligações de cada termo (gerado por gerar.py grafo, revisável no diff)
js/figuras.js           GERADO por build_figuras.py
build.js                valida docs, gera dados/, calcula o layout do mapa, atualiza VERSAO do sw.js
dados/indice.json       GERADO: catálogo + macro-regiões + arestas + posições do mapa
dados/c/<id>.json       GERADO: documento com figuras embutidas, baixado sob demanda
sw.js                   cache offline (cache-first); não registra em localhost
pipeline/               geração barata de conteúdo (ver abaixo)
```

Depois de mexer em `js/docs/`, `js/catalogo.js` ou `js/grafo.json`: `node build.js`. Para só validar: `node build.js --checar`. Depois de mexer em `build_figuras.py`: `python build_figuras.py && node build.js`. Neste Windows use `python`, não `python3`.

A macro-região de cada área (e a cor dela) fica em `MACROS` no `build.js`. Área nova no catálogo exige entrada ali, senão o build falha.

## Pipeline de conteúdo (`pipeline/`)

Chaves em `.env` na raiz (no `.gitignore`): `DEEPSEEK_API_KEY`, `OPENROUTER_API_KEY`.

```
python pipeline/gerar.py conceito <id>...          documento novo: dossiê de fontes reais → Flash escreve → checagens + JEV → js/docs
python pipeline/gerar.py dossie <id>...            só baixa o dossiê (Wikipédia pt/en + OpenAlex, filtrado pelo JEV) em pipeline/dossies/
python pipeline/gerar.py imagens <id>...           fotos e GIFs livres do Wikimedia Commons, escolhidos por modelo de visão (google/gemini-3.1-flash-lite)
python pipeline/gerar.py licao <id>... | --todas   Flash gera, checagens barram, JEV fiscaliza, V4 Pro reescreve o que foi sinalizado
python pipeline/gerar.py grafo                     subáreas e ligações do acervo (JEV corta as fracas)
python pipeline/gerar.py triagem                   JEV marca termos sem respaldo suficiente
python pipeline/gerar.py fronteira <id>|--todas    caixas controverso/especulação → seção «Onde a ciência ainda pesquisa»
python pipeline/gerar.py aprender                  notas do editor viram regras no estilo.md
python pipeline/gerar.py status | teste            fila, sequência, custo | autoteste das checagens
python pipeline/revisar.py                         http://localhost:8766/pipeline/revisar.html
```

- **Modelos.** `deepseek-flash` gera. `deepseek-v4-pro` reescreve só o que foi sinalizado. `typesafe/jev-1.13` (OpenRouter, Decisions API) responde perguntas tipadas: se soa como IA, se a marca bate, se o gabarito é ambíguo, o interesse do gancho, se a ligação do grafo é real. A DeepSeek cobra preço cheio só de 01 a 04h e de 06 a 10h UTC, em dias úteis.
- **Custo real medido.** Cerca de US$0,007 por lição, com reescrita, e US$0,001 sem reescrita. O grafo inteiro custou menos de US$0,05. O acumulado fica em `pipeline/custos.jsonl`.
- **Conceito novo (`conceito`).**
  - O dossiê reúne os verbetes da Wikipédia (pt e en, títulos sugeridos pelo Flash e sem busca de reserva) e os trabalhos mais citados do OpenAlex com a expressão no título. O JEV corta os que não tratam do tema.
  - O modelo só cita itens do dossiê por [n]. As referências saem dos metadados, nunca do modelo, e todo número acima de 10 precisa aparecer no dossiê (até 3 rodadas de correção).
  - A síntese e a prova são escritas a partir do texto pronto. O JEV confere o status do núcleo e o gabarito de cada questão.
  - O documento passa pelo `build.js --checar` antes de ficar. O que o modelo escreveu fica em `pipeline/dossies/<id>.saida.json`, e o resultado em `pipeline/conceitos.jsonl`.
  - Custo medido: cerca de US$0,01 por documento.
- **Estilo vivo.** `pipeline/estilo.md` é lido inteiro a cada geração. Ele traz a lista de expressões proibidas, a lição de exemplo e a seção «Regras aprendidas».
- **Checagens determinísticas** (`checar_licao`):
  - nada de travessão, aspas curvas, emoji, [n] no texto ou a estrutura «não é X, mas Y»;
  - expressões proibidas;
  - de 6 a 9 telas e de 2 a 3 perguntas;
  - cada fonte citada existe;
  - gabarito válido.
- **Revisão supervisionada.** O editor dá notas de 1 a 5 para curadoria, estética, escrita e interesse, e decide entre aprovar, editar ou rejeitar. Tudo vai para `pipeline/avaliacoes.jsonl`. Aprovar publica no `js/docs/<id>.js` e roda o build. Rejeitar apaga o rascunho, que volta a ser gerado no próximo `--todas`.
- **Aprendizado sem fine-tuning.**
  - As aprovadas de primeira com melhor nota viram exemplos no prompt.
  - `aprender` transforma notas e edições em regras.
- **Graduação.** Depois de 9 aprovações seguidas de primeira, a publicação automática é liberada (ainda não implementada). Uma rejeição volta tudo para o modo supervisionado.

## Esquema de `js/docs/<id>.js`

`CONTEUDOS["<id>"] = { ... };` seguido do guard `module.exports`. Campos:

- `termo`, `area`, `subtitulo`, `prerequisitos[]`, `conexoes[{termo, relacao}]`;
- `camadas.{nucleo, aprofundamento, extensao}.{minutos, html}`;
- `sintese.{definicoes[{termo,def}], lembrar[], confusoes[{erro,correcao}], numeros[]}`;
- `flashcards[{f,v}]` (mín. 12), `prova[{camada,q,alts[],correta,porque}]` (mín. 10), `fontes[{n,tipo,ref,url}]` (mín. 15, reais e verificáveis);
- `fronteira` (uma linha JSON, opcional): `[{tema, html}]`, as linhas de pesquisa em aberto, renderizadas depois das camadas;
- `fotos` (uma linha JSON, escrita por `gerar.py imagens`): `[{n, arquivo, legenda, alt, autor, licenca, pagina, gif, w, h}]`. Os arquivos WebP ficam em `img/c/<id>/`, e o GIF vira WebP animado. No html, `[[FOTO:n]]` vira figura com crédito no build. Só entram licenças livres (domínio público, CC0, CC BY, CC BY-SA), e o crédito é obrigatório.
- `licao` (uma linha JSON, escrita pelo pipeline): `{ gancho, telas: [...], fecho }`.

Uma lição é visual antes de ser texto (estilo stories). Pelo menos metade das telas é visual, e as telas de texto têm no máximo 40 palavras. O modelo só **preenche dados**; `js/licao.js` desenha e anima tudo em SVG.

Tipos de tela e campos (especificação completa, com quando usar cada um, em `pipeline/estilo.md`):

- `texto`, `pergunta`;
- `foto` (usa uma foto ou GIF do campo `fotos`);
- `figura` (usa uma figura pronta de `build_figuras.py`);
- `estimar` (a pessoa chuta um número antes de ver);
- `etapas` (anima uma por vez), `camadas`, `pontos` (grade 10×10), `ordenar` (vale ponto), `comparar`, `linha_tempo`, `ciclo`;
- `curva` (só forma qualitativa, sem números).

**Todo número de uma tela visual** (resposta de estimar, valor de pontos, ano) precisa aparecer no documento: `checar_licao` confere. O JEV confere, a cada tela, se o tipo visual combina com o conteúdo, se a tela gira em torno de disputa e se é técnica demais para leigo. Em cada pergunta, confere se ela pode ser respondida com as telas anteriores e se a resposta é óbvia. No gancho, confere se ele diz do que o conceito trata. A lição só ensina o núcleo estabelecido.

Figuras: `[[FIG:chave]]` no html. Toda chave precisa de uma função em `build_figuras.py`, registrada em `FIG`. Diagramas quantitativos são calculados, nunca desenhados à mão.

Os 10 documentos mais antigos estão abaixo dos mínimos (menos fontes, sem síntese). O build só avisa.

## Regras de escrita (literais do usuário, valem para todo texto do app)

1. **Travessão (—) proibido, tolerância zero.** Não vale trocar por «–» ou «--». Reescreva com ponto, vírgula ou dois-pontos. A única exceção é o `—` isolado como placeholder de interface.
2. Sem vícios de IA:
   - ênfase inflada («é crucial», «vale ressaltar»);
   - trios artificiais;
   - «não é X, mas Y»;
   - títulos em Title Case;
   - emoji;
   - aspas curvas;
   - finais genéricos;
   - framing histórico raso;
   - confiança falsa.
3. Registro: a lição é para leigo, com uma ideia por tela, exemplo concreto e o modo de pensar da área. O Aprofundar pode ser técnico.
4. Rigor epistêmico: popularidade não é consenso.

## Sistema visual: Fichário

Aprovado pelo usuário em 27/09/2026. Artifact de referência: https://claude.ai/artifact/NHgpCmKjBxJJUiCDzTaf2K

Cada conceito é uma ficha de biblioteca.

- **Tokens** em `css/estilo.css`: papel de cartão `--cartao #E3E7DE`, ficha `--ficha #F4F1E4`, tinta `--tinta #1E2A24`, fios `--regra`, acento único `--carimbo #C4382E`. As cores epistêmicas continuam. As regiões do mapa usam `--m-*`. O escuro é o «fichário à noite».
- **Tema.** Segue o sistema até a pessoa escolher; a escolha fica em `data-tema`.
- **Tipos.** Fraunces só no nome do conceito. Literata na leitura. IBM Plex Mono em botões, rótulos e números.
- **Regras de forma:**
  - interface com canto reto, fio de 1px e rótulo em mono;
  - destaque é **carimbo** (contorno girado), nunca caixa com fundo;
  - a escolha é marcada com fio mais grosso;
  - a leitura é editorial e plana.
- **Não voltar ao que o usuário rejeitou:** o azulejo arredondado, a pílula, o hero centralizado e o painel de «número grande + rótulo».

## Métricas

Ligadas desde 27/09/2026. Painel: https://novosconhecimentos.goatcounter.com. Formulário: https://forms.gle/D3anJ3VayYxtWMzz6 (botão na tela de resultado). Eventos: `primeira-visita`, `voltou-dia-N`, `licao-iniciada`, `licao-concluida`, `compartilhou`, `aprofundou`, `mais-uma-ficha`.

## Validação antes de dar por terminado

```bash
node build.js --checar
node --check js/app.js && node --check js/licao.js && node --check js/acervo.js
python pipeline/gerar.py teste
grep -c "—" js/docs/<id>.js      # deve ser 0
```

Para ver o app, rode `python -m http.server 8765` (configuração `app` em `.claude/launch.json`) e abra em viewport mobile. O service worker não registra em localhost, então não há cache velho durante o desenvolvimento.
