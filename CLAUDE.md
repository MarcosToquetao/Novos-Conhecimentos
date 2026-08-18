# Novos Conhecimentos — guia do projeto para o Claude Code

Este arquivo é o ponto de entrada para qualquer sessão do Claude Code que trabalhe nesta pasta. Ele documenta a arquitetura, as convenções de conteúdo, o sistema visual e o estado atual do projeto, incluindo o que ficou pendente na sessão anterior (rodada num ambiente Cowork/cloud, sem acesso de push ao GitHub). Leia isto inteiro antes de editar qualquer arquivo.

## O que é o app

Um PWA de estudo por sorteio, em português. O fluxo: a pessoa escolhe quanto tempo tem (15/30/60 min), o app sorteia um conceito que ela não escolheu (evitando repetição recente e priorizando o que está vencido para revisão espaçada), ela lê o documento pelo tempo definido, e faz uma prova de múltipla escolha com o documento fechado. Tudo roda no navegador, sem backend: o progresso fica em `localStorage`.

O diferencial pedagógico do projeto é a **marcação epistêmica**: cada afirmação relevante no texto é rotulada como consenso científico, abordagem emergente, ponto controverso ou especulação, com citação numerada apontando para a fonte. A pessoa que lê sobre um assunto fora da sua área não tem base para desconfiar do texto sozinha; a defesa embutida no produto é o texto declarar seu próprio grau de certeza.

**Site publicado:** https://marcostoquetao.github.io/Novos-Conhecimentos/ — mas veja a seção **Estado do deploy** abaixo, porque o publicado está atrasado em relação a esta pasta.

## Arquitetura e pipeline de build

```
index.html            estrutura das telas (HTML puro, sem framework)
css/estilo.css         toda a aparência (temas claro e escuro) — ver seção Sistema visual
fonts/*.woff2          Noticia Text e Inter, self-hosted para funcionar 100% offline
manifest.json, sw.js   PWA: instalação e cache offline (service worker cache-first)
js/app.js              motor: sorteio, cronômetro, leitor, prova, histórico, revisão espaçada
js/catalogo.js         347 conceitos — SÓ os termos (id, termo, area, dificuldade, gancho)
js/docs/<id>.js         um arquivo por documento de estudo completo — É A FONTE DA VERDADE
js/conteudos.js        GERADO por build_conteudos.py a partir de js/docs/*.js — NÃO editar à mão
js/figuras.js          GERADO por build_figuras.py — NÃO editar à mão
build_conteudos.py     concatena js/docs/*.js → js/conteudos.js
build_figuras.py       calcula e gera os SVGs → js/figuras.js
teste.js, qa_figuras.js  scripts de QA em Chromium headless (dev only, não fazem parte do app publicado)
termos-novos-para-revisar.md  histórico de decisões editoriais sobre o catálogo (o que entrou, o que foi recusado e por quê)
README.md              guia de publicação e visão geral, ligeiramente desatualizado — este CLAUDE.md tem prioridade sobre ele quando divergirem
```

**Regra de ouro:** o sorteio (`js/app.js`) só sorteia conceitos que existem em `CONTEUDOS` (ou seja, que têm arquivo em `js/docs/`). Ter uma entrada em `js/catalogo.js` sem documento correspondente é normal e esperado: é o reservatório de termos aprovados esperando para virar documento. Hoje há 347 conceitos no catálogo e **20 documentos escritos**.

Depois de criar ou editar qualquer arquivo em `js/docs/`, é obrigatório rodar:

```bash
python3 build_conteudos.py
```

Depois de criar ou editar qualquer figura em `build_figuras.py`, é obrigatório rodar:

```bash
python3 build_figuras.py
```

Ambos os scripts têm `node --check` implícito de validação no final (imprimem contagem/tamanho); depois de rodá-los, valide manualmente com `node --check js/conteudos.js` e `node --check js/figuras.js`.

Antes de qualquer publicação, é obrigatório subir a constante `VERSAO` em `sw.js` (hoje `"nc-v4"`), senão os aparelhos que já instalaram o PWA continuam servindo a versão antiga do cache.

## Estado do deploy — leia isto com atenção

Esta pasta **não é um repositório git** (`git status` retorna "not a git repository"). O trabalho até agora rodou num ambiente cloud sem acesso de push ao GitHub (proxy bloqueava `api.github.com` e o fluxo OAuth), então toda publicação foi feita manualmente pelo usuário, arrastando arquivos pela interface web do GitHub ou usando `github.dev`. Isso é frágil: já causou pelo menos um incidente em que arquivos essenciais (`sw.js`) foram apagados sem querer no `github.dev`.

**Isso é exatamente o problema que rodar no Claude Code local resolve.** Se esta pasta for aberta com acesso normal a `git`/`gh` e a um remote autenticado, o caminho certo é:

1. `git init` (se ainda não houver `.git`), `git add .`, primeiro commit.
2. Configurar o remote apontando para `https://github.com/MarcosToquetao/Novos-Conhecimentos.git` (confirme com o usuário antes, pois não é certo que o repositório remoto atual tenha o mesmo conteúdo desta pasta — pelo contrário, é quase certo que **está desatualizado**: o conteúdo local aqui tem 10 documentos novos, o CSS redesenhado e a seção de síntese que o repositório publicado ainda não tem).
3. Antes do primeiro push a partir daqui, comparar o que está publicado com o que está local (ex.: `git remote add origin ...`, `git fetch`, e olhar o diff, ou simplesmente perguntar ao usuário se o remoto pode ser sobrescrito pelo conteúdo desta pasta, que é a versão mais avançada).
4. Depois disso, cada mudança de conteúdo vira commit e push normal — nada de drag-and-drop manual.

## Convenções de conteúdo — schema de `js/docs/<id>.js`

Cada arquivo define `CONTEUDOS["<id>"] = { ... }` e, no final, `if (typeof module !== "undefined") { module.exports = { CONTEUDOS }; }` (necessário para os scripts Node de build e QA). Use qualquer arquivo em `js/docs/` como referência de formato exato; `split-brain.js` e `dunning-kruger.js` são os exemplos mais recentes e mais alinhados com as regras atuais.

Campos obrigatórios:

- `termo`, `area` — espelham a entrada em `catalogo.js`.
- `subtitulo` — uma ou duas frases de abertura, sem travessão (ver regra de escrita abaixo).
- `prerequisitos` — array de strings curtas.
- `conexoes` — array de `{ termo, relacao }`, ligando o conceito a outros do catálogo.
- `camadas.nucleo`, `camadas.aprofundamento`, `camadas.extensao` — cada uma `{ minutos, html }`. `minutos` é indicativo (o app recalcula o tempo real de leitura a partir da contagem de palavras, a ~110 palavras/minuto); `html` é uma template string com o HTML do corpo. Ver registro de voz por camada abaixo.
- `sintese` — objeto obrigatório, renderizado pelo app como seção final da página (ver `js/app.js` linha ~188, função `htmlDocumento`). Sub-campos:
  - `definicoes`: array de `{ termo, def }` → renderiza como `<dl class="sintese-defs">`.
  - `lembrar`: array de strings → `<ul class="sintese-lista">`, título "O que precisa ser lembrado".
  - `confusoes`: array de `{ erro, correcao }` → `<ul class="sintese-conf">`, título "Onde a intuição erra".
  - `numeros`: array de strings → `<ul class="sintese-lista">`, título "Números e nomes que ancoram".
  Todos os quatro sub-campos são opcionais individualmente (o app só renderiza o `<h3>` correspondente se o array existir e tiver itens), mas na prática todo documento deve preencher os quatro.
- `flashcards` — array de `{ f, v }` (pergunta/resposta), mínimo 12.
- `prova` — array de questões de múltipla escolha, mínimo 10, formato igual ao dos arquivos existentes (copie a estrutura exata de um arquivo de referência, não invente campos novos).
- `fontes` — array de `{ n, tipo, ref, url }`, mínimo 15, com referências reais e verificáveis (não inventar DOIs, anos ou nomes de autores — sempre pesquisar antes de escrever).

**O que NÃO existe mais e não deve ser reintroduzido:** o antigo bloco "Se sobrar tempo antes da prova" que aparecia ao final de cada documento foi removido de `js/app.js` nesta sessão e substituído pela renderização de `sintese`. Não adicione de volta nenhuma variação desse texto de dica de estudo genérica — o usuário classificou isso como "sujeira" e pediu remoção explícita.

### Figuras (`[[FIG:chave]]`)

Um documento pode incluir `<figure class="figura">[[FIG:chave-do-svg]]<figcaption>...</figcaption></figure>`. O marcador `[[FIG:...]]` é substituído em tempo de execução pelo SVG correspondente em `js/figuras.js` (ver `FIGURAS["chave-do-svg"]` e a função que faz a substituição em `app.js`). Se a chave não existir em `figuras.js`, o marcador simplesmente não renderiza nada (falha silenciosa — sempre confira depois de adicionar).

Toda figura nova precisa de uma função Python correspondente em `build_figuras.py`, registrada no dicionário `FIG` no final do arquivo, e depois `python3 build_figuras.py` para regenerar `js/figuras.js`. **Os diagramas quantitativos são calculados a partir da matemática real do texto, nunca desenhados à mão** — por exemplo, as curvas de Fourier são somas parciais reais da série, e a coma pitagórica sai de `12·log₂(3/2)·1200 − 8400`. Um diagrama errado é pior que nenhum diagrama.

## Regras de escrita de conteúdo — instruções literais do usuário

Estas regras vieram diretamente do usuário em português e devem ser seguidas ao pé da letra em qualquer conteúdo novo ou editado. Cito o essencial na íntegra para não haver perda de nuance na tradução para instrução técnica.

### 1. Travessão como conector de oração: proibido, tolerância zero

O usuário rejeitou explicitamente este exemplo, aplicado ao próprio conteúdo do app:

> "Uma cientista política passou vinte anos indo a campo verificar — e encontrou centenas de comunidades que resolveram o problema sozinhas." esse '-' nao deveria estar ali. essa estrutura não pode aparecer.

Ou seja: travessão (—) usado para encadear uma explicação lateral, um contraste ou uma cauda de frase é o marcador de estilo de escrita gerada por IA mais reconhecível que existe, e não pode aparecer em **nenhum lugar do conteúdo do app** — corpo de texto, `subtitulo`, `conexoes`, `flashcards`, `prova`, `fontes`, e também nos rótulos de texto dentro de `build_figuras.py` (que viram texto renderizado em SVG). Regra prática: depois de escrever ou editar qualquer arquivo, rode

```bash
grep -o '—' arquivo.js | wc -l
```

e o resultado tem que ser exatamente `0`. Corrija reescrevendo a pontuação (duas frases separadas por ponto, vírgula, dois-pontos, ou reestruturação), nunca trocando por outro tipo de travessão (en dash, hífen duplo). A única exceção legítima é o caractere `—` usado sozinho como marcador de "estado vazio" na interface (ex.: um placeholder tipo `<b id="e-media">—</b>` que mostra travessão até haver um número calculado) — isso não é o padrão de escrita, é um símbolo de UI, e não deve ser removido.

No momento em que este arquivo foi escrito, todo o conteúdo de `js/docs/*.js`, `js/app.js` e `build_figuras.py` está limpo (0 ocorrências verificadas). **A única exceção pendente conhecida é `js/catalogo.js`**, que ainda tem cerca de 50 ocorrências nos campos `gancho` (a frase de gancho de uma linha mostrada por conceito na tela de navegação do catálogo) — ver seção Pendências.

### 2. Outros padrões de escrita de IA a evitar

Frases de importância inflada ("é crucial", "vale ressaltar", "é importante notar"), listas de três itens artificiais, começos de parágrafo repetitivos, negrito excessivo, títulos em title case (usar frase normal, só a primeira letra maiúscula), emojis, aspas curvas tipográficas (usar aspas retas ou francesas « »), linguagem de vendas, disclaimers desnecessários tipo "não sou capaz de...", finais genéricos tipo "em resumo, isso mostra a importância de...", framing histórico raso ("a história nos ensina que..."), falsa objetividade ou tom falsamente confiante sobre pontos disputados.

### 3. Registro de linguagem por camada

- **Núcleo (15 min):** linguagem acessível para leigo. O objetivo não é só explicar o conceito isolado, mas familiarizar quem lê com **o modo de pensar da própria disciplina** — o que conta como evidência naquele campo, como se avalia um método, o que diferencia uma correlação de uma explicação mecanística. Jargão só aparece já explicado na primeira ocorrência.
- **Aprofundamento (30 min):** pode e deve usar terminologia técnica correta e precisa, com explicações canônicas fiéis à literatura da área.
- **Extensão (60 min, quando existir):** aprofundamento adicional, debates atuais, limitações metodológicas, fronteira do que ainda não se sabe.

### 4. Marcação epistêmica

Use `<div class="marca consenso">`, `<div class="marca emergente">`, `<div class="marca controverso">` ou `<div class="marca especulacao">`, com `<span class="rot">Rótulo curto da caixa</span>` como primeiro filho. Classifique com rigor: não dê status de consenso a algo disputado só porque é popular, e não trate como especulação algo que já tem base empírica sólida. Esse rigor é o produto — é o que diferencia este app de um resumo genérico.

### 5. Síntese obrigatória ao final

Todo documento precisa do campo `sintese` completo (ver schema acima). É isso que substitui qualquer necessidade de um bloco de "dica de estudo" solto no final.

## Sistema visual — identidade "Vocabulary"

O app passou por um redesenho visual nesta sessão para se aproximar deliberadamente da identidade do app de referência **thevocabulary.app** (fontes, paleta, forma dos ícones, distribuição), depois que uma primeira tentativa foi julgada "tímida demais" pelo usuário. Os valores abaixo foram extraídos por introspecção real do CSS computado do site de referência, não aproximados de memória.

### Tokens (definidos em `css/estilo.css`, bloco `:root` e `[data-tema="escuro"]`)

```css
--papel:        #F0EBE1;   /* fundo casca-de-ovo, NUNCA branco puro */
--papel-2:      #FFFFFF;
--papel-3:      #E6DFD1;
--tinta:        #0F0F0F;   /* quase preto, não #000 puro */
--tinta-media:  #4A4B52;
--tinta-suave:  #85817A;
--linha:        #DCD3C2;
--acento:       #337F7F;
--acento-suave: #DCEAE7;

--sage:      #93C1C1;
--coral:     #F2A093;
--limao:     #FFF6C2;
--lavanda:   #D5CCF2;
--indigo:    #160042;

--consenso:     #2F7A63;
--emergente:    #3A3A8C;
--controverso:  #A8623A;
--especulacao:  #6B4FA8;

--serif: "Noticia Text", ui-serif, Georgia, "Times New Roman", serif;
--sans:  "Inter", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;

--raio:   20px;   /* azulejos e painéis */
--raio-g: 28px;   /* superfícies grandes */
--raio-p: 12px;   /* botões de ícone, chips pequenos */
```

Modo escuro tem seu próprio conjunto sob `[data-tema="escuro"]`, sempre mantendo o mesmo espírito (nunca preto puro `#000`, nunca branco puro no texto).

Fontes: Noticia Text (serifada, títulos e leitura longa) e Inter (sans, interface) são **self-hosted** em `fonts/*.woff2`, baixadas diretamente dos arquivos do Google Fonts (não via `<link>` para fonts.googleapis.com), justamente para preservar o funcionamento 100% offline do PWA. Qualquer fonte nova precisa seguir o mesmo padrão: baixar o `.woff2`, colocar em `fonts/`, declarar `@font-face` local em `estilo.css`, e adicionar o caminho à lista `ARQUIVOS` em `sw.js` para entrar no cache do service worker.

### O sistema de duas linguagens visuais (importante, não misturar)

Esta é a decisão de design mais recente e mais deliberada do projeto, resultado direto deste pedido do usuário:

> Tente ajustar a estetica do texto e das caixas de texto à estetica nova. Essas caixas com bordas arredondadas são muito padrão de IA e deixa muito obvio que foi gerado sem muito cuidado.

A solução adotada foi **não** aplicar um único vocabulário visual a tudo, e sim separar dois registros conscientemente:

1. **"Azulejo" (chrome de interface):** botões, badges, painéis, chips, o selo de marca. Usa `--raio`/`--raio-g`/`--raio-p`, cantos arredondados generosos, seguindo fielmente a referência Vocabulary. Isso é intencional e não deve mudar.
2. **"Fio" (conteúdo/documento):** tudo que é conteúdo de leitura — `.marca` (caixas epistêmicas), `.formula`, `.figura`, `.bloco-meta` — foi convertido de "caixa arredondada com fundo colorido" (o padrão genérico de IA que o usuário rejeitou) para **linhas de regra editorial flat**: `border-top`/`border-bottom` finos, sem `border-radius`, sem `background-fill`. As quatro variantes epistêmicas (`.marca.consenso/.emergente/.controverso/.especulacao`) hoje só mudam a cor do texto (`color`), não mais a cor de fundo da caixa. A nova seção `.sintese` segue o mesmo espírito: `.sintese-defs` é uma lista de definição (`<dl>`) tipográfica, `.sintese-lista` é lista simples, `.sintese-conf` usa uma borda esquerda fina (`border-left: 2px solid var(--controverso)`) para os pares erro/correção, sem caixa fechada em nenhum caso.

Se o usuário pedir mais mudanças visuais no futuro, mantenha essa separação: chrome de interface pode continuar arredondado como a referência manda, conteúdo de leitura deve continuar em registro editorial flat. Não reintroduza caixas com fundo colorido e cantos arredondados no corpo dos documentos — foi exatamente isso que o usuário pediu para eliminar.

## Pendências conhecidas ao final desta sessão

Em ordem de prioridade sugerida:

1. **Travessões em `js/catalogo.js`.** Cerca de 50 ocorrências no campo `gancho` (a frase de uma linha exibida por conceito), seguindo o mesmo padrão rejeitado pelo usuário (ex.: `"...é uma soma de ondas simples — a ideia que sustenta MP3, MRI e Wi-Fi."`). É texto visível na tela de navegação do catálogo, então conta como conteúdo, não como comentário de código. Aplique a mesma regra da seção 1 acima: reescreva a pontuação preservando o sentido, não invente conteúdo novo. Depois de terminar, `node --check js/catalogo.js` e `grep -o '—' js/catalogo.js | wc -l` deve dar `0`. Como `js/catalogo.js` alimenta `js/conteudos.js` apenas indiretamente (os dois são independentes: `catalogo.js` é a lista de termos, `conteudos.js` é gerado só a partir de `js/docs/`), não é necessário rodar nenhum build depois — a mudança em `catalogo.js` é direta.

2. **Quatro figuras referenciadas mas ainda não implementadas.** Os documentos abaixo têm marcador `[[FIG:...]]` sem função correspondente em `build_figuras.py`, então a figura aparece vazia hoje:
   - `efeito-hidrofobico.js` → `[[FIG:hidrofobico-termo]]`
   - `split-brain.js` → `[[FIG:split-brain-campos]]`
   - `selecao-adversa.js` → `[[FIG:mercado-limoes]]`
   - `linguas-de-sinais.js` → `[[FIG:sinais-parametros]]`
   Para cada uma: ler o trecho do documento ao redor do marcador para entender o que a figura precisa mostrar, escrever uma função `fig_<nome>()` em `build_figuras.py` seguindo o padrão das funções existentes (usar os helpers `svg()`, `path()`, `txt()`, `eixo()` já definidos no topo do arquivo, e as classes CSS `svg-a-linha`/`svg-l-linha`/`svg-t-linha`/`svg-rot`/`svg-rot-p`), registrar no dicionário `FIG` no final, rodar `python3 build_figuras.py`, validar com `node --check js/figuras.js`.

3. **Revisão item a item da "Leva 1" do catálogo** (75 termos: Sustentabilidade, Direito, Teoria musical, História, Geografia) — está descrita em `termos-novos-para-revisar.md`, seção "Leva 1", e segue pendente de aprovação explícita do usuário desde antes desta sessão. Não é bloqueante para nada técnico, é só uma decisão editorial em aberto.

4. **Atualizar `termos-novos-para-revisar.md`** para registrar que `ikigai`, `wabi-sabi`-adjacentes... — na verdade, especificamente: `ikigai`, `efeito-hidrofobico`, `micorrizas`, `split-brain`, `dunning-kruger` (Efeito Dunning-Kruger), `selecao-adversa` (Seleção adversa), `tunelamento-quantico` (Tunelamento quântico), `paradoxo-fermi` (Paradoxo de Fermi e o Grande Filtro), `revolucao-haitiana` (Revolução Haitiana) e `linguas-de-sinais` (Línguas de sinais) — os 10 conceitos que a "Leva 2" tinha listado como catalogados mas sem documento — agora têm documento completo. Hoje o arquivo ainda descreve esses 10 como só catalogados.

5. **Bump de `VERSAO` em `sw.js`** (hoje `"nc-v4"`) antes de qualquer publicação, dado que houve mudança de conteúdo, CSS e `app.js` desde a v4.

6. **Deploy real via git**, conforme a seção "Estado do deploy" acima — provavelmente a primeira coisa que vale fazer, já que resolve de vez o processo manual frágil que causou pelo menos um incidente de arquivo apagado.

7. Opcional, baixo risco: `sw.js`, `build_conteudos.py`, `teste.js` e os comentários de cabeçalho em `css/estilo.css` ainda têm travessões, mas são comentários de código, não conteúdo visível ao usuário final — não é urgente, mas se quiser deixar 100% consistente com a regra geral, é uma limpeza rápida.

8. `README.md` está desatualizado (fala em 202 conceitos, 10 documentos, `VERSAO nc-v2`, e ainda menciona o bloco "se sobrar tempo" removido). Vale atualizar os números e a seção de decisões de desenho para refletir a síntese e o sistema visual atual, mas isso é cosmético e não bloqueia nada.

## Como validar qualquer mudança de conteúdo antes de considerar terminado

```bash
# sintaxe de um documento novo/editado
node --check js/docs/<id>.js

# zero travessões-conectores
grep -o '—' js/docs/<id>.js | wc -l   # deve ser 0

# depois de mexer em js/docs/*.js
python3 build_conteudos.py
node --check js/conteudos.js

# depois de mexer em build_figuras.py
python3 build_figuras.py
node --check js/figuras.js

# inspeção rápida de um documento carregado
node -e "
const {CONTEUDOS} = require('./js/conteudos.js');
const d = CONTEUDOS['<id>'];
console.log(Object.keys(d));
console.log('sintese?', !!d.sintese, d.sintese && Object.keys(d.sintese));
console.log('prova:', d.prova.length, 'flashcards:', d.flashcards.length, 'fontes:', d.fontes.length);
"
```

Não há suíte de testes automatizada além de `teste.js`/`qa_figuras.js` (scripts de QA visual via Playwright/Chromium, não testes unitários). Se o ambiente do Claude Code tiver Playwright disponível, esses dois scripts continuam sendo a forma mais rápida de checar visualmente uma mudança de CSS nos dois temas.
