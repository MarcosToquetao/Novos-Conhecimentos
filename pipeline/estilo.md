# Guia de estilo do Novos Conhecimentos

Este arquivo é lido inteiro pelo modelo antes de cada geração. Ele muda com o tempo: a seção "Regras aprendidas" cresce a partir das revisões do editor (`python pipeline/gerar.py aprender`). Tudo aqui vale para qualquer texto que aparece na tela do app.

## Para quem se escreve

Uma pessoa curiosa, no celular, que abriu o app por alguns minutos e não é da área. Ela não tem como desconfiar sozinha do que lê. Por isso o texto declara o próprio grau de certeza, e por isso cada afirmação importante aponta para uma fonte.

O objetivo de uma lição não é resumir o conceito. É deixar a pessoa com uma ideia que ela consegue explicar para outra no jantar, e com vontade de saber o que vem depois.

## Formato da lição

A lição é vista no celular, uma tela por vez, como stories. **Texto corrido desmotiva: a lição mostra antes de explicar.** São de 6 a 9 telas no total (perguntas incluídas), lidas em 3 a 5 minutos. Conte antes de responder: o array `telas` tem **no máximo 9 itens**. Se o assunto pede mais, corte o secundário; a lição não precisa cobrir o documento inteiro.

- O `gancho` é um fato concreto, uma situação cotidiana ou uma pergunta que a intuição responde errado. Nada de definição.
- **Pelo menos metade das telas é visual** (tipos abaixo, exceto texto e pergunta). Escolha o tipo que mostra o mecanismo do conceito; texto só quando nenhum visual serve.
- Tela de `texto`: uma ideia, no máximo 40 palavras.
- `legenda` de tela visual: no máximo 25 palavras, dizendo o que o desenho mostra.
- De 2 a 3 telas que valem ponto (`pergunta` ou `ordenar`). A pergunta testa entendimento do mecanismo, não memória de nome ou data. Três alternativas plausíveis; a errada mais tentadora é a da intuição leiga. O `porque` explica em uma ou duas frases.
- Tela com afirmação empírica relevante leva `marca` e `fonte` (o número n da fonte do documento).
- **Todo número numa tela visual (resposta de estimar, valor de pontos, ano de linha do tempo) tem de estar escrito no documento.** Nada de número aproximado de cabeça.
- O `fecho` aponta para um conceito vizinho do acervo, despertando a próxima curiosidade. Não é resumo.

### Tipos de tela

| tipo | campos | quando usar |
|---|---|---|
| `texto` | `html` | uma ideia que nenhum visual mostra melhor |
| `pergunta` | `q`, `alts` (3), `correta` (0 a 2), `porque` | checar entendimento |
| `foto` | `foto` (número da foto do documento), `legenda` | o documento traz fotos ou GIFs reais (a lista vem na mensagem): mostrar o próprio organismo, objeto ou fenômeno |
| `estimar` | `q`, `unidade`, `min`, `max`, `escala` ("linear" ou "log"), `resposta`, `legenda` | um número surpreendente: a pessoa chuta antes de ver |
| `etapas` | `etapas` [{`nome`, `texto`}] (3 a 6), `legenda` | processo em sequência; o app anima uma etapa por vez |
| `camadas` | `camadas` [{`nome`, `nota`}] (2 a 5, de cima para baixo), `eixo` {`topo`, `base`}, `legenda` | estrutura em níveis, gradiente, corte |
| `pontos` | `valor` (0 a 100), `frase` (completa "N de cada 100 ..."), `legenda` | proporção |
| `ordenar` | `q`, `itens` (3 a 6, já na ordem certa), `porque` | sequência que vale a pena reconstruir; vale ponto |
| `comparar` | `a`, `b` (títulos das colunas), `linhas` [{`aspecto`, `a`, `b`}] (2 a 4), `legenda` | contraste entre duas situações |
| `linha_tempo` | `eventos` [{`ano` (número; negativo é a.C.), `texto`}] (3 a 6), `legenda` | história de uma descoberta |
| `ciclo` | `etapas` [texto curto] (3 a 6), `legenda` | processo que volta ao começo |
| `curva` | `forma` ("exponencial", "saturacao", "sino", "queda", "u", "logistica", "linear"), `eixo_x`, `eixo_y`, `marco` {`x` de 0 a 1, `rotulo`}, `legenda` | tendência qualitativa, sem números |

Qualquer tela pode levar `marca` e `fonte`.

**Escolher o tipo certo importa mais que variar.** Um visual que não combina com o conteúdo é pior que uma tela de texto.

- `foto`: se o documento traz fotos ou GIFs reais, use de 1 a 3 delas, sobretudo logo depois do gancho, para a pessoa ver do que se está falando. GIF é ótimo para movimento. A `legenda` diz o que se vê e liga ao que a tela ensina.
- `figura`: se o documento traz figuras prontas (a lista vem na mensagem), prefira-as. São desenhos calculados e revisados; use `fig` com a chave exata e escreva a `legenda`.
- `etapas`: só para coisas que acontecem uma depois da outra no tempo ou num procedimento.
- `ciclo`: só se a última etapa leva de volta à primeira. Processo que começa e termina é `etapas`.
- `camadas`: só para níveis físicos ou espaciais (de cima para baixo, de fora para dentro) ou um gradiente. Nunca para uma lista de ideias ou uma sequência.
- `curva`: só se o documento descreve essa forma de relação entre duas grandezas. Não force uma curva onde o texto não fala de tendência.
- `comparar`: duas coisas do mesmo tipo, contrastadas nos mesmos aspectos.
- `estimar` e `pontos`: só com número que está no documento.

A lição ensina o núcleo estabelecido do conceito. Não construa a lição em torno de um mito a desmentir nem de uma disputa entre especialistas: isso fica no documento completo, na seção «Onde a ciência ainda pesquisa».

## Critério de tema: só conhecimento com respaldo

O app ensina coisas curiosas **e garantidas**. A pessoa precisa sair com a certeza de que aprendeu algo verdadeiro, não uma teoria da moda.

- Entra: conceito cujo núcleo é conhecimento estabelecido na área, em livro-texto e revisões, com evidência replicada. Em áreas não experimentais (história, música, filosofia, direito), fato documentado ou estrutura bem descrita, não interpretação disputada.
- Não entra: tema cujo núcleo é controverso (especialistas competentes discordam), especulativo (hipótese sem teste decisivo), afirmação popular sem base, ou tema que só existe para desmentir um mito.
- Curioso não é sinônimo de polêmico. O interesse vem do mecanismo surpreendente, do exemplo concreto, da consequência inesperada.

## Marcação epistêmica

Numa lição só existem duas marcas:

- `consenso`: amplamente replicado, aceito na área, presente em revisões e livros-texto.
- `emergente`: evidência séria e replicada em mais de um estudo independente, mas recente. Use pouco.

Afirmação controversa ou especulativa não entra na lição, nem com marca. No documento de aprofundamento ela só pode aparecer na seção final «Onde a ciência ainda pesquisa» (campo `fronteira`), dita claramente como linha de pesquisa, hipótese ou dado sem confirmação, com a evidência que existe hoje. Se o documento de origem tem um trecho assim, deixe-o de fora. Classifique com rigor: popularidade não é consenso.

## Registro de linguagem

- Frases curtas. Uma oração principal por frase na maior parte do tempo.
- Verbo concreto, sujeito concreto. "As células do fundo param de crescer", não "ocorre uma redução da atividade proliferativa".
- Jargão só aparece já explicado na primeira ocorrência, e só se a pessoa vai precisar dele.
- Um exemplo concreto vale mais que três adjetivos.
- Mostre o modo de pensar da área: o que conta como evidência ali, como se sabe o que se sabe.

## Proibido

- Travessão (—) em qualquer lugar. Nem como conector, nem como aposto, nem como cauda de frase. Reescreva com ponto, vírgula ou dois-pontos. Também não vale trocar por "–" ou "--".
- Aspas curvas tipográficas. Use aspas retas ou « ».
- Emoji.
- Negrito em mais de uma expressão por tela.
- Título em Title Case.
- Listas de três itens artificiais ("rápido, eficiente e seguro").
- A estrutura "não é X, mas Y" (ou "não é X, é Y"). Diga direto o que é.
- Termo técnico que o leitor não vai usar de novo (nome de teorema secundário, sigla de modelo). A lição fica no mecanismo central.
- Conta com mais de dois números na mesma tela.
- Começar telas seguidas do mesmo jeito.
- Final genérico do tipo "isso mostra a importância de...".
- Framing histórico raso ("desde sempre a humanidade...").
- Tom falsamente confiante sobre ponto disputado.

## Expressões proibidas

Qualquer texto que contenha uma destas expressões é barrado automaticamente (comparação sem diferenciar maiúsculas).

- é crucial
- é fundamental
- vale ressaltar
- vale destacar
- é importante notar
- é importante destacar
- é importante ressaltar
- cabe destacar
- nesse sentido
- em suma
- em resumo
- no cenário atual
- no mundo atual
- nos dias de hoje
- mergulhar
- desvendar
- fascinante
- intrigante
- jornada
- revolucionário
- de forma geral
- um verdadeiro
- não apenas
- mas também
- desempenha um papel

## Exemplo de lição aprovada

Conceito: Biofilmes (Biologia). Fontes do documento usadas: 1 Stewart e Costerton, 2 estimativas CDC/NIH, 3 mecanismos de tolerância.

```json
{
 "gancho": "Um antibiótico que mata uma bactéria no laboratório em minutos pode falhar contra a mesma bactéria dentro de um cateter. Mesma espécie, mesmo remédio, resultado oposto.",
 "telas": [
  {
   "tipo": "texto",
   "html": "<p>A placa que se forma nos dentes depois de um dia sem escovar é um <strong>biofilme</strong>: bactérias que grudam numa superfície e se envolvem numa gosma que elas mesmas produzem.</p>"
  },
  {
   "tipo": "estimar",
   "q": "Num cateter, quantas vezes mais tobramicina é preciso para vencer a Pseudomonas em biofilme, comparada à mesma bactéria solta?",
   "unidade": "vezes",
   "min": 1,
   "max": 10000,
   "escala": "log",
   "resposta": 1000,
   "legenda": "Cerca de mil vezes. E a bactéria não mudou de genes: mudou de jeito de viver.",
   "marca": "consenso",
   "fonte": 1
  },
  {
   "tipo": "camadas",
   "camadas": [
    {
     "nome": "Superfície",
     "nota": "muito oxigênio, células se dividindo"
    },
    {
     "nome": "Meio",
     "nota": "menos oxigênio, crescimento lento"
    },
    {
     "nome": "Fundo",
     "nota": "quase sem oxigênio, células quase paradas"
    }
   ],
   "eixo": {
    "topo": "mais oxigênio",
    "base": "menos oxigênio"
   },
   "legenda": "Muitos antibióticos atacam células em divisão. As do fundo quase não se dividem e passam ilesas.",
   "marca": "consenso",
   "fonte": 3
  },
  {
   "tipo": "pergunta",
   "q": "Por que essas bactérias aguentam tanto antibiótico?",
   "alts": [
    "Sofreram mutações que as tornaram resistentes",
    "O modo de vida em comunidade as protege, e a proteção some se forem separadas",
    "O antibiótico não consegue entrar em nenhuma parte do biofilme"
   ],
   "correta": 1,
   "porque": "Separe as bactérias do biofilme e elas voltam a morrer com a dose normal. A proteção é do arranjo, não dos genes."
  },
  {
   "tipo": "pontos",
   "valor": 65,
   "frase": "infecções microbianas estão associadas a biofilmes.",
   "legenda": "Estimativa do CDC e do NIH, agências de saúde dos Estados Unidos.",
   "marca": "consenso",
   "fonte": 2
  },
  {
   "tipo": "comparar",
   "a": "Solta",
   "b": "Em biofilme",
   "linhas": [
    {
     "aspecto": "Antibiótico",
     "a": "morre com a dose normal",
     "b": "aguenta doses muito maiores"
    },
    {
     "aspecto": "Crescimento",
     "a": "todas se dividem",
     "b": "o fundo quase para"
    },
    {
     "aspecto": "Proteção",
     "a": "nenhuma",
     "b": "matriz de açúcares, proteínas e DNA"
    }
   ],
   "legenda": "Mesma espécie nas duas colunas."
  },
  {
   "tipo": "pergunta",
   "q": "Uma infecção numa prótese de quadril volta sempre que o antibiótico acaba. O que isso sugere?",
   "alts": [
    "A dose foi baixa e basta aumentar",
    "Um biofilme na prótese protege células que sobrevivem ao tratamento",
    "A bactéria é de uma espécie nova"
   ],
   "correta": 1,
   "porque": "O antibiótico mata as células ativas, mas as do fundo, quase paradas, sobrevivem e repovoam tudo. Muitas vezes é preciso retirar a prótese."
  }
 ],
 "fecho": "Como bactérias soltas sabem que chegou a hora de virar comunidade? Elas contam umas às outras. Isso tem nome: quorum sensing."
}
```

## Regras aprendidas

Regras extraídas das revisões do editor. Valem tanto quanto as de cima.

<!-- 27/09/2026, a partir das 4 primeiras revisões (acidificação dos oceanos, agente-principal, Bauhaus, Bayes) -->
- Toda pergunta tem de poder ser respondida só com o gancho e as telas anteriores a ela. Se a resposta depende de algo que a lição ainda não mostrou, mostre antes ou troque a pergunta.
- A pergunta não pode ser óbvia: a alternativa certa não pode ser adivinhada pelo senso comum, pelo tamanho ou pelo tom das alternativas. As erradas são erros que alguém que leu com pressa cometeria.
- O gancho desperta curiosidade e também diz, em uma frase simples, de que fenômeno o conceito trata. Pergunta solta, sem dizer do que se vai falar, não serve.
- Linguagem de leigo, mesmo em matemática, economia e política: nada de notação, fórmula ou conta de cabeça na lição. Mostre com um caso concreto, com pessoas e números redondos que o documento traz.
- Conceito abstrato (economia, política, estatística, filosofia) começa por uma situação prática que qualquer pessoa reconhece, com quem faz o quê e o que acontece. A definição vem depois do exemplo, nunca antes.
- Cada lição tem pelo menos 5 telas visuais. Se o documento traz fotos ou figuras, use-as; quando não traz, prefira comparar, etapas e estimar a telas de texto.
