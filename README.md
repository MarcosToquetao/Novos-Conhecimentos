# Novos Conhecimentos

Protótipo de aplicativo de estudo por sorteio. Você escolhe quanto tempo tem, sorteia um conceito que não escolheu, estuda pelo tempo definido e faz uma prova de múltipla escolha com o documento fechado.

**Site:** [marcostoquetao.github.io/Novos-Conhecimentos](https://marcostoquetao.github.io/Novos-Conhecimentos/)

**Estado atual:** 202 conceitos publicados no catálogo (mais 75 em revisão em `termos-novos-para-revisar.md`, ainda não aprovados), 10 com documento completo escrito. O sorteio só cai nos que já têm documento.

---

## Publicar no GitHub Pages

Isso é o que faz o app abrir no seu celular. São cinco passos, uma vez só.

**1. Crie o repositório.** No GitHub, botão `New`. Nome sugerido: `novos-conhecimentos`. Marque **Public** (o GitHub Pages gratuito exige repositório público). Não marque "Add a README" — o projeto já tem um.

**2. Suba os arquivos.** Pela interface web, sem terminal: na página do repositório vazio, clique em `uploading an existing file` e arraste **o conteúdo da pasta** — `index.html`, e as pastas `css/`, `js/`, `icons/`, mais `manifest.json`, `sw.js` e `.nojekyll`. Não arraste a pasta inteira por cima: o `index.html` precisa ficar na raiz do repositório.

Se preferir terminal, dentro da pasta do projeto:

```bash
git init
git add .
git commit -m "Protótipo Novos Conhecimentos"
git branch -M main
git remote add origin https://github.com/SEU_USUARIO/novos-conhecimentos.git
git push -u origin main
```

**3. Ligue o Pages.** No repositório: `Settings` → `Pages` → em *Source*, escolha `Deploy from a branch` → branch `main`, pasta `/ (root)` → `Save`.

**4. Espere e abra.** Em um ou dois minutos a URL aparece na mesma página: `https://SEU_USUARIO.github.io/novos-conhecimentos/`.

**5. Instale no celular.** Abra a URL no celular e adicione à tela inicial:

- **Android/Chrome:** menu de três pontos → *Adicionar à tela inicial*
- **iPhone/Safari:** botão de compartilhar → *Adicionar à Tela de Início*

Instalado, ele abre em tela cheia, sem barra de navegador, e o service worker mantém tudo em cache — funciona sem sinal depois do primeiro carregamento.

---

## Acrescentar conceitos novos

O conteúdo é dado, não código. Dois arquivos importam:

**`js/catalogo.js`** — a lista de termos. Para acrescentar um conceito ao reservatório, basta uma linha:

```js
{ id:"entropia", termo:"Entropia e a segunda lei", area:"Física", dificuldade:3,
  gancho:"A única lei da física que sabe distinguir passado de futuro." },
```

**`js/docs/<id>.js`** — o documento de estudo. Crie o arquivo copiando a estrutura de qualquer um dos dez existentes. Depois rode:

```bash
python3 build_conteudos.py   # junta js/docs/*.js em js/conteudos.js
```

Se o documento novo tiver diagramas, acrescente a função em `build_figuras.py` e rode `python3 build_figuras.py`.

Antes de publicar, suba o número da versão em `sw.js` (`const VERSAO = "nc-v2"`), senão o celular continuará servindo a versão antiga do cache.

---

## Estrutura do projeto

```
index.html            estrutura das telas
css/estilo.css        toda a aparência (temas claro e escuro)
fonts/*.woff2         Noticia Text e Inter, embutidas para funcionar offline
js/catalogo.js        202 conceitos — só os termos
js/docs/*.js          um arquivo por documento de estudo (fonte)
js/conteudos.js       GERADO — não editar à mão
js/figuras.js         GERADO — não editar à mão
js/app.js             sorteio, cronômetro, leitor, prova, histórico
build_conteudos.py    js/docs/*.js  →  js/conteudos.js
build_figuras.py      diagramas SVG →  js/figuras.js
teste.js              percorre o fluxo inteiro em Chromium e salva capturas
qa_figuras.js         renderiza todas as figuras nos dois temas
manifest.json, sw.js  instalação e cache offline (PWA)
```

Os diagramas quantitativos são **calculados**, não desenhados: as curvas de Fourier são somas parciais reais da série, o gráfico do índice glicêmico usa os valores publicados por Matthan et al. (2016), e a coma pitagórica sai de `12·log₂(3/2)·1200 − 8400`. Um diagrama errado é pior que diagrama nenhum, e a única forma de garantir que ele não está errado é derivá-lo da mesma matemática que o texto descreve.

---

## Decisões de desenho

**Camadas em vez de tamanho único.** Cada documento tem núcleo (sem formalismo), aprofundamento (com formalismo traduzido termo a termo) e extensão. O tempo escolhido determina quantas camadas aparecem. Os minutos indicados são calculados do próprio texto a ~110 palavras por minuto — o ritmo de leitura atenta de material conceitual denso, bem abaixo da leitura corrida.

**Prova com o documento fechado.** É a única parte do fluxo que produz aprendizado mensurável. Releitura gera fluência subjetiva e pouca retenção; recuperação ativa gera o contrário. Por isso a prova é obrigatória para encerrar a sessão e o documento fica indisponível durante ela.

**Marcação epistêmica.** Cada afirmação relevante vem rotulada como consenso, abordagem emergente, ponto controverso ou especulação, com citação numerada no ponto onde aparece. Num assunto fora da sua área, você não tem base para desconfiar do texto — a única defesa é o texto declarar seu próprio grau de certeza e apontar para onde verificar.

**Anti-repetição e revisão espaçada.** O sorteio evita o que você acabou de ver e prioriza o que está vencido para revisão. Depois de cada prova, o conceito é reagendado em 1, 3, 7, 21 ou 60 dias conforme o desempenho. Nota abaixo de 70% zera o nível.

**Estado só no aparelho.** Nada é enviado a lugar nenhum: histórico, notas e agenda de revisão ficam no `localStorage` do navegador. Some se você limpar os dados do site — por isso existe o botão de exportar progresso em JSON.

---

## Limitações conhecidas

- **Múltipla escolha superestima o aprendizado.** Reconhecer a resposta certa é mais fácil que produzi-la. As alternativas erradas foram escritas para serem plausíveis, mas a prova ainda mede menos do que uma resposta escrita mediria. O bloco antes da prova sugere explicar o conceito em voz alta primeiro — é aí que está o ganho real.
- **Dez documentos esgotam em poucas semanas** de uso diário. O catálogo de 202 termos existe para ser convertido em documentos ao longo do tempo.
- **Sem sincronização entre aparelhos.** Estudar no celular e no computador cria dois históricos separados.
- **As fontes não são verificadas automaticamente.** Links podem quebrar; DOIs são mais estáveis que URLs.
