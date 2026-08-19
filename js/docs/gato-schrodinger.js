CONTEUDOS["gato-schrodinger"] = {
termo: "Gato de Schrödinger e o problema da medição",
area: "Física",
subtitulo: "Erwin Schrödinger inventou o gato para provar que uma interpretação da física quântica levava a um absurdo, não para ilustrar que gatos podem estar vivos e mortos ao mesmo tempo. Quase um século depois, físicos já criaram versões reais e minúsculas do experimento em laboratório, e ainda assim não existe consenso sobre o que exatamente acontece no momento da medição.",
prerequisitos: [
  "Nenhum pré-requisito técnico. Basta aceitar que partículas quânticas podem existir em combinações de estados (superposição) antes de serem medidas.",
  "Para o aprofundamento: familiaridade básica com a ideia de probabilidade e com o conceito de que medir algo pode, em física quântica, mudar o próprio sistema medido."
],
conexoes: [
  { termo: "Tunelamento quântico", relacao: "Os dois casos tratam de comportamentos genuinamente quânticos que desafiam a intuição construída a partir da física do dia a dia, e ambos têm implementações tecnológicas reais fora do domínio puramente teórico." },
  { termo: "Emaranhamento quântico", relacao: "O problema da medição, que o gato de Schrödinger ilustra, está diretamente ligado a como e quando um sistema emaranhado 'decide' um resultado definido." },
  { termo: "Crise de replicação", relacao: "Como o efeito Dunning-Kruger e a cascata trófica de Yellowstone, é um caso em que a versão popular de um conceito científico se afastou bastante da intenção original de quem o formulou." },
  { termo: "Falseabilidade e demarcação (Popper)", relacao: "Diferentes interpretações da mecânica quântica (Copenhague, muitos-mundos, colapso objetivo) fazem, em muitos casos, as mesmas previsões observáveis, o que levanta a pergunta de até que ponto elas são cientificamente testáveis entre si." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Em novembro de 1935, o físico austríaco Erwin Schrödinger publicou um artigo com um experimento mental que se tornaria a imagem mais famosa da física quântica.<sup class="cit"><a href="#f1">1</a></sup> A versão popular: um gato é colocado numa caixa fechada junto de um mecanismo ligado a um átomo radioativo. Se o átomo decair, um martelo quebra um frasco de veneno e o gato morre. Se não decair, o gato continua vivo. Como o decaimento do átomo é um evento quântico, regido por probabilidade, a mecânica quântica descreveria o átomo (e, por extensão, o gato) como estando numa combinação dos dois estados, "decaído e não decaído", até que alguém abra a caixa e observe. Popularmente, isso é resumido como "o gato está vivo e morto ao mesmo tempo até ser observado".</p>

<p>Essa versão popular inverte a intenção do próprio Schrödinger. Ele não estava propondo que o gato realmente estivesse nesse estado duplo. Estava fazendo o oposto: usando o absurdo óbvio de um gato vivo-e-morto para mostrar que havia algo errado, ou pelo menos incompleto, na forma como a interpretação dominante da época (hoje chamada de interpretação de Copenhague) descrevia o que acontece entre uma medição e outra.<sup class="cit"><a href="#f1">1</a></sup> Para Schrödinger, era claro que um gato de verdade está vivo ou morto, nunca as duas coisas, quer alguém esteja olhando ou não. O experimento é, no vocabulário da lógica, uma <em>reductio ad absurdum</em>: leve uma ideia às últimas consequências para mostrar que ela não pode estar certa do jeito que foi formulada.</p>

<div class="marca consenso">
<span class="rot">O que não está em disputa</span>
<p>Que partículas subatômicas isoladas podem existir em superposição, ou seja, numa combinação matemática de mais de um estado possível ao mesmo tempo, antes de serem medidas, é um resultado experimental extremamente bem estabelecido, verificado repetidamente desde o início do século 20. O que está em disputa não é isso. É o que exatamente acontece no momento em que essa superposição "vira" um resultado definido, o chamado <strong>problema da medição</strong>, e por que sistemas grandes como gatos, pessoas e bolas de futebol nunca parecem estar em superposição observável.</p>
</div>

<h3>Por que gatos não ficam em superposição, na prática</h3>

<p>A resposta mais aceita hoje para "por que não vemos gatos em superposição" chama-se <strong>decoerência</strong>. Um átomo isolado, bem protegido de qualquer interação com o ambiente, consegue manter uma superposição por um tempo. Um gato, feito de trilhões de átomos, está constantemente trocando informação com o ar ao redor, a luz que reflete, o calor que emite. Cada uma dessas interações "vaza" um pouquinho de informação sobre o estado do gato para o ambiente, e esse vazamento destrói a superposição extremamente rápido, muito antes de qualquer observador abrir a caixa. A superposição não desaparece por mágica quando alguém olha: ela se perde por causa da complexidade e do contato do sistema com o mundo à sua volta.<sup class="cit"><a href="#f7">7</a></sup></p>

<p>Isso não resolve completamente o problema filosófico de fundo (por que existe um resultado definido no final, e não apenas uma soma de possibilidades cada vez mais complicada), mas explica bem por que a superposição de objetos grandes é, na prática, impossível de observar diretamente no dia a dia.</p>

<h3>Versões reais, em miniatura, já foram feitas em laboratório</h3>

<p>A parte que mais surpreende quem conhece só a versão popular do experimento mental: físicos já criaram, de fato, pequenas versões reais de "estados de gato" em laboratório, não com gatos, mas com átomos isolados, fótons e circuitos supercondutores colocados deliberadamente em superposição de dois estados bem distintos entre si (por exemplo, um átomo em duas posições espaciais separadas ao mesmo tempo).<sup class="cit"><a href="#f4">4</a></sup> Serge Haroche e David Wineland dividiram o Nobel de Física de 2012 justamente por técnicas que permitiram criar e observar, em tempo real, esses estados de superposição perdendo coerência aos poucos, ou seja, observar a "morte" gradual do gato quântico acontecendo diante dos instrumentos.<sup class="cit"><a href="#f5">5</a></sup></p>

<h3>Por que essa história é um bom teste de leitura científica</h3>

<p>O gato de Schrödinger é um caso valioso para praticar uma pergunta que vale para qualquer conceito científico popularizado: a versão que circula é a tese de quem formulou a ideia, ou o oposto dela, simplificado até perder o ponto principal? Aqui a resposta é clara e verificável: quem quiser saber o que Schrödinger realmente disse pode ler o artigo original, hoje traduzido e disponível. E o que ele disse foi, essencialmente, "isso soa ridículo, então algo na nossa explicação está incompleto", não "isso é como o universo realmente funciona".</p>
` },

aprofundamento: { minutos: 30, html: `
<h3>O contexto: uma resposta ao artigo EPR</h3>

<p>Schrödinger escreveu o experimento do gato como parte de uma resposta ao artigo de Albert Einstein, Boris Podolsky e Nathan Rosen, publicado alguns meses antes em 1935, que ficou conhecido como o "paradoxo EPR".<sup class="cit"><a href="#f3">3</a></sup> Einstein, Podolsky e Rosen argumentavam que a mecânica quântica, do jeito que era formulada, devia estar incompleta, porque parecia permitir que a medição de uma partícula afetasse instantaneamente outra partícula distante (o que hoje chamamos de emaranhamento quântico). Schrödinger, que trocava correspondência com Einstein sobre o tema, propôs o experimento do gato como uma forma ainda mais visceral de mostrar o mesmo desconforto: se a mecânica quântica descreve literalmente qualquer sistema isolado da mesma forma, inclusive sistemas macroscópicos, ela deveria prever superposições macroscópicas absurdas. Como isso não corresponde à experiência cotidiana, algo precisa ser adicionado ou reinterpretado.</p>

<h3>O que é, precisamente, o problema da medição</h3>

<p>Formalmente, o problema da medição é a tensão entre duas descrições da mecânica quântica que parecem incompatíveis. Enquanto não é medido, um sistema quântico evolui de forma contínua e determinística, segundo a equação de Schrödinger, permitindo superposições de múltiplos estados. No momento em que é medido, porém, o formalismo padrão diz que o sistema "colapsa" abruptamente para um único resultado definido, de forma probabilística, não determinística. A pergunta incômoda é: o que exatamente conta como "medição"? Precisa de um observador consciente? Um aparelho de medição também "conta" como sistema quântico, então por que ele não entra em superposição com o que está medindo? Não existe, dentro do formalismo matemático básico, uma definição precisa e amplamente aceita do momento ou do mecanismo em que esse colapso ocorre.<sup class="cit"><a href="#f7">7</a></sup></p>

<h3>Decoerência: uma peça do quebra-cabeça, não a solução completa</h3>

<p>A teoria da decoerência, desenvolvida principalmente por Wojciech Zurek a partir dos anos 1980, explica de forma matematicamente rigorosa por que sistemas grandes e complexos deixam de exibir efeitos de superposição observáveis: a interação com um ambiente grande e não controlado espalha a informação quântica de um jeito que, na prática, é irreversível.<sup class="cit"><a href="#f7">7</a></sup> Isso explica muito bem por que <em>não vemos</em> gatos em superposição. O que a decoerência sozinha não resolve é a chamada "questão de escolha do resultado" (por que o sistema termina num resultado definido específico, e não noutro, e o que "resultado definido" realmente significa em termos fundamentais). Por isso, mesmo com a decoerência bem estabelecida, o problema filosófico mais profundo da medição continua sem uma resposta unânime.</p>

<div class="tabela-env">
<table>
<thead><tr><th>Interpretação</th><th>Ideia central</th><th>O que "resolve" no problema da medição</th></tr></thead>
<tbody>
<tr><td>Copenhague (tradicional)</td><td>O colapso é um postulado adicional da teoria; a pergunta "o que causa o colapso" é considerada fora do escopo da física</td><td>Evita a pergunta em vez de respondê-la</td></tr>
<tr><td>Muitos-mundos (Everett)</td><td>Não há colapso: todos os resultados possíveis acontecem, cada um numa ramificação distinta do universo</td><td>Elimina o colapso, ao custo de aceitar ramificações do universo não observáveis</td></tr>
<tr><td>Colapso objetivo (ex.: GRW)</td><td>O colapso é um processo físico real, espontâneo, que fica mais provável quanto maior o sistema</td><td>Propõe um mecanismo físico testável, ainda sem confirmação experimental direta</td></tr>
<tr><td>QBism e afins</td><td>O "estado quântico" descreve o grau de crença de um observador, não uma propriedade objetiva do sistema</td><td>Reinterpreta a pergunta, tratando probabilidade quântica como informação subjetiva</td></tr>
</tbody>
</table>
</div>

<div class="marca controverso">
<span class="rot">Por que isso ainda divide fisicamente</span>
<p>Um levantamento formal de opinião entre físicos e filósofos especializados em fundamentos da mecânica quântica, conduzido por Maximilian Schlosshauer, Johannes Kofler e Anton Zeilinger em 2013, encontrou respostas divididas entre as diferentes interpretações, sem que nenhuma reunisse maioria clara entre os participantes.<sup class="cit"><a href="#f9">9</a></sup> Isso não significa que a mecânica quântica em si seja incerta: as previsões numéricas da teoria são extremamente bem testadas e concordam com o experimento em todas as situações já checadas. O que está em aberto é a interpretação sobre o que essas previsões dizem a respeito da realidade entre uma medição e outra, uma pergunta que, até o momento, as próprias previsões da teoria não conseguem decidir sozinhas.</p>
</div>
` },

extensao: { minutos: 60, html: `
<h3>Como se cria um "gato" de verdade em laboratório</h3>

<p>Vale detalhar como funciona um experimento real desse tipo, porque a técnica é elegante. Charles Monroe, Wineland e colegas prenderam um único íon de berílio numa armadilha eletromagnética, resfriaram seu movimento até perto do estado de menor energia possível, e usaram pulsos de laser cuidadosamente calibrados para colocá-lo numa superposição de duas posições espaciais separadas por uma distância minúscula, mas mensurável, funcionando como um "gato" reduzido a um único átomo em dois lugares ao mesmo tempo.<sup class="cit"><a href="#f4">4</a></sup> Já o grupo de Serge Haroche usou uma técnica diferente, de eletrodinâmica quântica de cavidades: fótons de micro-ondas presos entre dois espelhos supercondutores extremamente refletores, atravessados por átomos que interagem com o campo, permitindo observar a decoerência de uma superposição do campo eletromagnético se desenrolando passo a passo, em tempo real, à medida que mais átomos cruzavam a cavidade.<sup class="cit"><a href="#f5">5</a></sup><sup class="cit"><a href="#f6">6</a></sup></p>

<h3>Por que essa distância entre teoria e experimento persiste há quase um século</h3>

<p>Um ponto que vale destacar: não é falta de tecnologia que impede alguém de simplesmente colocar um gato de verdade em superposição para testar a interpretação de Copenhague contra a de muitos-mundos. É que a decoerência age tão rápido, e cresce tão abruptamente com o número de partículas envolvidas, que a diferença entre "manter um átomo em superposição por segundos" e "manter um gato inteiro em superposição por uma fração de segundo" não é uma questão de grau, é uma barreira prática que cresce exponencialmente com o tamanho e a complexidade do sistema.<sup class="cit"><a href="#f7">7</a></sup> Isso significa que, mesmo daqui a décadas, é bem provável que continue sendo impossível observar diretamente um objeto macroscópico em superposição, o que deixa margem para que diferentes interpretações continuem compatíveis com todos os dados observáveis, sem que nenhuma seja definitivamente eliminada por experimento.</p>

<h3>O que isso ensina sobre testabilidade em física fundamental</h3>

<p>Esse é um caso interessante para pensar sobre os limites do método científico. Duas interpretações que fazem exatamente as mesmas previsões numéricas para todo experimento realizável não podem, por definição, ser diferenciadas por nenhum experimento futuro, só pela análise filosófica de qual delas é mais econômica, mais coerente ou mais satisfatória em outros critérios que não são puramente empíricos. Isso não torna a pergunta sem sentido, mas muda sua natureza: parte da discussão sobre interpretações da mecânica quântica se aproxima mais de filosofia da física do que de física experimental no sentido estrito, o que ajuda a explicar por que o debate persiste sem se resolver do mesmo jeito que uma disputa sobre um valor numérico medido em laboratório se resolveria.</p>

<h3>De volta à imagem popular</h3>

<p>Vale fechar reconhecendo por que a versão simplificada persiste apesar de inverter a intenção original: "o gato está vivo e morto ao mesmo tempo" é uma frase de efeito muito mais memorável do que "a interpretação de Copenhague, aplicada sem qualificação a sistemas macroscópicos, gera uma previsão que não corresponde à experiência cotidiana, o que sugere que a teoria precisa de um ingrediente adicional (decoerência) ou de uma reinterpretação filosófica". O gato sobrevive na cultura popular como ilustração positiva de um princípio que Schrödinger, na verdade, estava usando para apontar um problema sem solução até hoje.</p>
` }
},

sintese: {
  definicoes: [
    { termo: "Gato de Schrödinger", def: "Experimento mental de 1935 em que Erwin Schrödinger descreveu um gato hipotético numa combinação de estados vivo e morto, para argumentar que aplicar a interpretação de Copenhague sem qualificação a objetos macroscópicos leva a um absurdo, não para propor que gatos reais possam estar nesse estado." },
    { termo: "Superposição", def: "Propriedade de sistemas quânticos de existir numa combinação matemática de múltiplos estados possíveis antes de serem medidos, bem estabelecida experimentalmente para partículas isoladas e sistemas pequenos." },
    { termo: "Problema da medição", def: "Tensão não resolvida entre a evolução contínua e determinística de um sistema quântico isolado e o 'colapso' abrupto e probabilístico que ocorre quando esse sistema é medido, sem definição amplamente aceita do que exatamente conta como medição." },
    { termo: "Decoerência", def: "Processo, bem descrito matematicamente desde os anos 1980 (Zurek e outros), pelo qual a interação de um sistema quântico com um ambiente grande e não controlado destrói rapidamente a superposição observável, explicando por que objetos macroscópicos não exibem efeitos quânticos visíveis." },
    { termo: "Interpretações da mecânica quântica", def: "Diferentes propostas filosóficas e formais (Copenhague, muitos-mundos, colapso objetivo, QBism, entre outras) para explicar o que o formalismo quântico diz sobre a realidade entre uma medição e outra, em geral compatíveis com as mesmas previsões numéricas observáveis." }
  ],
  lembrar: [
    "Schrödinger propôs o experimento do gato em 1935 como uma reductio ad absurdum contra a interpretação de Copenhague aplicada sem qualificação a objetos grandes, não como uma ilustração positiva de superposição macroscópica.",
    "O experimento foi parte de uma resposta ao artigo EPR (Einstein, Podolsky e Rosen), publicado meses antes em 1935, sobre a suposta incompletude da mecânica quântica.",
    "Superposição de partículas isoladas é um resultado experimental extremamente bem estabelecido. O que continua em disputa é o problema da medição: o que exatamente acontece, e por que, no momento em que essa superposição vira um resultado definido.",
    "Decoerência explica bem por que objetos grandes como gatos não exibem superposição observável, mas não resolve sozinha a questão filosófica de por que existe um resultado definido específico ao final do processo.",
    "Físicos já criaram versões reais e minúsculas de 'estados de gato' em laboratório, com átomos e fótons isolados. Serge Haroche e David Wineland dividiram o Nobel de Física de 2012 por técnicas relacionadas a isso.",
    "Um levantamento de 2013 (Schlosshauer, Kofler e Zeilinger) encontrou opiniões divididas entre físicos e filósofos sobre qual interpretação da mecânica quântica é correta, sem maioria clara para nenhuma.",
    "Diferentes interpretações da mecânica quântica costumam fazer as mesmas previsões numéricas observáveis, o que torna parte da discussão mais próxima de filosofia da física do que de uma disputa resolvível só por experimento."
  ],
  confusoes: [
    { erro: "Schrödinger acreditava que o gato realmente estava vivo e morto ao mesmo tempo até ser observado", correcao: "Schrödinger considerava essa conclusão 'bastante ridícula', usando-a propositalmente como um absurdo para criticar a interpretação de Copenhague aplicada sem qualificação a sistemas macroscópicos, não como uma afirmação sobre o que realmente acontece com gatos." },
    { erro: "A superposição só é destruída porque um observador consciente olha para o sistema", correcao: "A explicação mais aceita hoje, a decoerência, mostra que a superposição se perde pela interação física do sistema com um ambiente complexo (ar, luz, calor), rápido demais para depender de consciência ou observação intencional." },
    { erro: "A física quântica já resolveu completamente o problema da medição", correcao: "As previsões numéricas da mecânica quântica são extremamente bem testadas, mas a interpretação sobre o que causa o colapso e o que ele significa continua sem consenso, como mostram levantamentos formais de opinião entre especialistas." },
    { erro: "Já foi feito um experimento colocando um gato de verdade em superposição", correcao: "O que já foi feito são versões em miniatura, com átomos isolados, fótons ou circuitos supercondutores. A decoerência torna extremamente improvável observar diretamente objetos macroscópicos reais, como gatos, em superposição, mesmo com tecnologia futura." },
    { erro: "Interpretação de muitos-mundos e interpretação de Copenhague podem ser diferenciadas por algum experimento ainda não realizado", correcao: "As duas interpretações fazem, na maior parte dos casos analisados até hoje, as mesmas previsões observáveis, o que torna a escolha entre elas mais uma questão de análise filosófica e critérios como economia teórica do que de um teste experimental decisivo." }
  ],
  numeros: [
    "Schrödinger, E. 'Die gegenwärtige Situation in der Quantenmechanik'. Naturwissenschaften 23, 1935: artigo original em três partes que introduziu o experimento do gato.",
    "Einstein, Podolsky &amp; Rosen. 'Can Quantum-Mechanical Description of Physical Reality Be Considered Complete?'. Physical Review 47:777, 1935: o artigo EPR que motivou a resposta de Schrödinger.",
    "Monroe, Meekhof, King &amp; Wineland. 'A Schrödinger Cat Superposition State of an Atom'. Science 272(5265):1131-1136, 1996: primeira criação de um estado de superposição espacial num único átomo aprisionado.",
    "Serge Haroche e David Wineland dividiram o Prêmio Nobel de Física de 2012 por métodos experimentais que permitem medir e manipular sistemas quânticos individuais.",
    "Schlosshauer, Kofler &amp; Zeilinger (2013): levantamento com 33 participantes especialistas em fundamentos da mecânica quântica, sem maioria clara para nenhuma interpretação."
  ]
},

flashcards: [
  { f: "Qual era o propósito original de Schrödinger ao propor o experimento do gato, em 1935?", v: "Usar o absurdo de um gato vivo e morto ao mesmo tempo como reductio ad absurdum, para argumentar que a interpretação de Copenhague, aplicada sem qualificação a sistemas macroscópicos, levava a uma conclusão que não corresponde à experiência cotidiana." },
  { f: "O experimento do gato foi uma resposta a qual outro artigo científico de 1935?", v: "O artigo de Einstein, Podolsky e Rosen (EPR), que argumentava que a mecânica quântica devia estar incompleta." },
  { f: "O que está bem estabelecido experimentalmente sobre superposição quântica, sem disputa?", v: "Que partículas subatômicas isoladas podem existir em superposição de múltiplos estados antes de serem medidas, um resultado verificado repetidamente desde o início do século 20." },
  { f: "O que é o 'problema da medição' na mecânica quântica?", v: "A tensão não resolvida entre a evolução contínua e determinística de um sistema quântico isolado e o colapso abrupto e probabilístico que ocorre no momento da medição, sem definição amplamente aceita do que conta como medição." },
  { f: "O que é decoerência, e o que ela explica?", v: "O processo pelo qual a interação de um sistema quântico com um ambiente complexo destrói rapidamente a superposição observável. Explica bem por que objetos grandes, como gatos, não exibem efeitos quânticos visíveis no dia a dia." },
  { f: "O que a decoerência, sozinha, não resolve sobre o problema da medição?", v: "Por que o sistema termina num resultado definido específico, e não noutro, e o que 'resultado definido' significa em termos fundamentais. Essa questão continua sem resposta unânime." },
  { f: "Que tipo de experimento real, em miniatura, já foi realizado com base na ideia do gato de Schrödinger?", v: "Criação de superposições em átomos isolados, fótons e circuitos supercondutores, como o experimento de Monroe, Meekhof, King e Wineland (1996), colocando um único íon em duas posições espaciais ao mesmo tempo." },
  { f: "Por que Serge Haroche e David Wineland ganharam o Nobel de Física de 2012?", v: "Por métodos experimentais inovadores que permitem medir e manipular sistemas quânticos individuais, incluindo observar a decoerência de estados de superposição acontecendo em tempo real." },
  { f: "O que o levantamento de Schlosshauer, Kofler e Zeilinger (2013) encontrou sobre a opinião de especialistas em fundamentos da mecânica quântica?", v: "Respostas divididas entre diferentes interpretações (Copenhague, muitos-mundos, colapso objetivo e outras), sem que nenhuma reunisse maioria clara entre os participantes." },
  { f: "Por que é praticamente impossível observar diretamente um gato real em superposição, mesmo com tecnologia futura?", v: "Porque a decoerência age extremamente rápido e cresce de forma abrupta com o número de partículas envolvidas, tornando a manutenção de superposição em objetos macroscópicos uma barreira prática, não apenas tecnológica atual." },
  { f: "Por que a escolha entre diferentes interpretações da mecânica quântica é considerada, em parte, mais filosófica do que experimental?", v: "Porque interpretações como Copenhague e muitos-mundos costumam fazer as mesmas previsões numéricas observáveis, então nenhum experimento futuro pode, por definição, diferenciá-las nesses casos, restando critérios como economia teórica e coerência filosófica." },
  { f: "Qual é a lição mais ampla que o caso do gato de Schrödinger ensina sobre ler ciência popularizada?", v: "Vale sempre checar se a versão popular de uma ideia é a tese de quem a formulou originalmente ou o oposto dela, simplificado até perder o ponto principal. Nesse caso, a versão popular inverte a intenção crítica original de Schrödinger." }
],

prova: [
  { camada: "nucleo",
    q: "Qual era a intenção original de Erwin Schrödinger ao propor o experimento mental do gato, em 1935?",
    alts: [
      "Provar que gatos reais podem ficar vivos e mortos ao mesmo tempo se colocados numa caixa fechada.",
      "Usar o absurdo de um gato vivo e morto simultaneamente para criticar a interpretação de Copenhague aplicada sem qualificação a objetos macroscópicos.",
      "Demonstrar que a física quântica não tem nenhuma aplicação prática fora do laboratório.",
      "Substituir a teoria da relatividade de Einstein por um novo modelo baseado em gatos."
    ],
    correta: 1,
    porque: "Schrödinger considerava a conclusão de um gato vivo-e-morto 'bastante ridícula' e a usou deliberadamente como um absurdo lógico (reductio ad absurdum), não como uma previsão que ele endossava." },

  { camada: "nucleo",
    q: "O que está bem estabelecido experimentalmente, sem disputa, sobre a física quântica neste contexto?",
    alts: [
      "Que gatos e outros objetos macroscópicos já foram observados diretamente em superposição.",
      "Que partículas subatômicas isoladas podem existir em superposição de múltiplos estados antes de serem medidas.",
      "Que a interpretação de Copenhague foi definitivamente refutada por experimento.",
      "Que a mecânica quântica não tem nenhuma previsão numérica testável."
    ],
    correta: 1,
    porque: "Superposição de sistemas pequenos e isolados é um resultado experimental repetidamente verificado. O que está em disputa é a interpretação do que acontece no momento da medição, não a existência da superposição em si." },

  { camada: "nucleo",
    q: "Por que gatos e outros objetos macroscópicos não exibem superposição observável no dia a dia, segundo a explicação mais aceita hoje?",
    alts: [
      "Porque a consciência de um observador destrói instantaneamente qualquer superposição ao redor.",
      "Por causa da decoerência: a interação constante do objeto com um ambiente complexo (ar, luz, calor) destrói a superposição rapidamente, antes de qualquer observação intencional.",
      "Porque objetos macroscópicos nunca obedecem às leis da física quântica.",
      "Porque gatos têm uma propriedade biológica especial que os torna imunes a efeitos quânticos."
    ],
    correta: 1,
    porque: "A decoerência, e não a observação consciente, é o mecanismo físico que explica por que sistemas grandes e complexos perdem a superposição rápido demais para ser observada no cotidiano." },

  { camada: "aprofundamento",
    q: "O experimento do gato de Schrödinger foi proposto como parte de uma resposta a qual outro artigo científico?",
    alts: [
      "O artigo de Niels Bohr sobre o princípio da complementaridade.",
      "O artigo de Einstein, Podolsky e Rosen (EPR), sobre a suposta incompletude da mecânica quântica.",
      "O artigo de Werner Heisenberg sobre o princípio da incerteza.",
      "O artigo de Max Planck sobre a quantização da energia."
    ],
    correta: 1,
    porque: "Schrödinger, que correspondia com Einstein, propôs o gato como uma forma ainda mais visceral de expressar o desconforto do artigo EPR (1935) com implicações da mecânica quântica aplicadas sem qualificação." },

  { camada: "aprofundamento",
    q: "O que a teoria da decoerência, desenvolvida principalmente por Wojciech Zurek, explica, e o que ela não resolve sozinha?",
    alts: [
      "Explica tudo sobre o problema da medição, sem deixar nenhuma questão em aberto.",
      "Explica por que sistemas grandes perdem superposição observável rapidamente, mas não resolve sozinha por que o sistema termina num resultado definido específico.",
      "Explica apenas fenômenos de física clássica, sem relação com mecânica quântica.",
      "Prova definitivamente que a interpretação de muitos-mundos está correta."
    ],
    correta: 1,
    porque: "A decoerência é uma peça importante e matematicamente bem descrita do quebra-cabeça, mas a questão filosófica de por que emerge um resultado definido específico continua sem resposta unânime entre especialistas." },

  { camada: "aprofundamento",
    q: "O que Monroe, Meekhof, King e Wineland demonstraram em 1996, publicado na revista Science?",
    alts: [
      "A primeira observação direta de um gato biológico em superposição quântica.",
      "A criação de um estado de superposição espacial num único átomo aprisionado, funcionando como uma versão minúscula do 'gato' quântico.",
      "A refutação completa da teoria da decoerência.",
      "A prova de que partículas quânticas nunca podem ser observadas em superposição."
    ],
    correta: 1,
    porque: "Esse experimento colocou um único íon de berílio em superposição de duas posições espaciais separadas, uma implementação real e controlada, em escala atômica, da ideia central do experimento mental de Schrödinger." },

  { camada: "aprofundamento",
    q: "Segundo a tabela de interpretações da mecânica quântica apresentada no documento, o que a interpretação de muitos-mundos (Everett) propõe sobre o colapso?",
    alts: [
      "Que o colapso é causado exclusivamente pela consciência do observador.",
      "Que não há colapso: todos os resultados possíveis acontecem, cada um numa ramificação distinta do universo.",
      "Que o colapso é impossível de ocorrer em qualquer circunstância.",
      "Que o colapso só ocorre em sistemas biológicos, nunca em partículas isoladas."
    ],
    correta: 1,
    porque: "A interpretação de muitos-mundos elimina a necessidade de um colapso, ao custo filosófico de aceitar ramificações do universo não observáveis diretamente, uma das principais alternativas à interpretação de Copenhague." },

  { camada: "extensao",
    q: "O que o levantamento de Schlosshauer, Kofler e Zeilinger, publicado em 2013, encontrou ao entrevistar físicos e filósofos especializados em fundamentos da mecânica quântica?",
    alts: [
      "Consenso quase unânime a favor da interpretação de Copenhague.",
      "Opiniões divididas entre diferentes interpretações, sem que nenhuma reunisse maioria clara entre os participantes.",
      "Rejeição unânime de todas as interpretações existentes até aquele momento.",
      "Consenso de que o problema da medição já havia sido completamente resolvido."
    ],
    correta: 1,
    porque: "Esse levantamento formal é uma evidência direta de que a disputa sobre interpretações da mecânica quântica continua ativa entre especialistas, décadas depois do experimento mental original de Schrödinger." },

  { camada: "extensao",
    q: "Por que, segundo o documento, é considerado praticamente impossível observar diretamente um objeto macroscópico real, como um gato, em superposição, mesmo com avanços tecnológicos futuros?",
    alts: [
      "Porque leis específicas de proteção animal proíbem esse tipo de experimento em qualquer país.",
      "Porque a decoerência age muito rápido e cresce de forma abrupta com o número de partículas envolvidas, tornando a manutenção de superposição em sistemas grandes e complexos uma barreira prática que aumenta exponencialmente.",
      "Porque gatos são fisicamente incapazes de interagir com fótons ou partículas subatômicas.",
      "Porque nenhum laboratório do mundo possui equipamento sensível o suficiente para tentar esse experimento."
    ],
    correta: 1,
    porque: "O crescimento exponencial da decoerência com o tamanho e a complexidade do sistema é uma barreira física fundamental, não apenas uma limitação tecnológica atual, o que sugere que esse limite deve persistir por muito tempo." },

  { camada: "extensao",
    q: "Por que parte do debate entre interpretações da mecânica quântica é descrita, no documento, como mais próxima de filosofia da física do que de física experimental no sentido estrito?",
    alts: [
      "Porque físicos, em geral, não se interessam por filosofia.",
      "Porque interpretações diferentes, como Copenhague e muitos-mundos, costumam fazer exatamente as mesmas previsões numéricas observáveis, o que significa que nenhum experimento futuro pode, por definição, diferenciá-las nesses casos.",
      "Porque a mecânica quântica ainda não tem nenhuma previsão numérica confirmada por experimento.",
      "Porque filósofos assumiram completamente o controle da pesquisa em física quântica desde os anos 1930."
    ],
    correta: 1,
    porque: "Quando duas teorias fazem previsões observacionais idênticas, a escolha entre elas depende de critérios adicionais (economia teórica, coerência filosófica) que vão além do teste experimental direto, aproximando essa parte da discussão da filosofia da ciência." }
],

fontes: [
  { n: 1, tipo: "fonte primária", ref: "Schrödinger, E. 'Die gegenwärtige Situation in der Quantenmechanik'. <em>Naturwissenschaften</em> 23:807-812, 823-828, 844-849, 1935. Artigo original, em três partes, que introduziu o experimento do gato.", url: "https://en.wikipedia.org/wiki/Schr%C3%B6dinger's_cat" },
  { n: 2, tipo: "tradução acadêmica", ref: "Trimmer, J. D. 'The Present Situation in Quantum Mechanics: A Translation of Schrödinger's Cat Paradox Paper'. <em>Proceedings of the American Philosophical Society</em> 124:323-338, 1980.", url: "https://www.jstor.org/stable/986572" },
  { n: 3, tipo: "fonte primária", ref: "Einstein, A., Podolsky, B. &amp; Rosen, N. 'Can Quantum-Mechanical Description of Physical Reality Be Considered Complete?'. <em>Physical Review</em> 47:777, 1935.", url: "https://journals.aps.org/pr/abstract/10.1103/PhysRev.47.777" },
  { n: 4, tipo: "fonte primária", ref: "Monroe, C., Meekhof, D. M., King, B. E. &amp; Wineland, D. J. 'A Schrödinger Cat Superposition State of an Atom'. <em>Science</em> 272(5265):1131-1136, 1996.", url: "https://www.science.org/doi/10.1126/science.272.5265.1131" },
  { n: 5, tipo: "fonte primária", ref: "Myatt, C. J. et al. 'Decoherence of quantum superpositions through coupling to engineered reservoirs'. <em>Nature</em> 403:269-273, 2000.", url: "https://www.nature.com/articles/35002001" },
  { n: 6, tipo: "documento institucional", ref: "The Nobel Prize. Comunicado sobre o Prêmio Nobel de Física de 2012, concedido a Serge Haroche e David J. Wineland.", url: "https://www.nobelprize.org/prizes/physics/2012/summary/" },
  { n: 7, tipo: "revisão acadêmica", ref: "Zurek, W. H. 'Decoherence, einselection, and the quantum origins of the classical'. <em>Reviews of Modern Physics</em> 75:715, 2003.", url: "https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.75.715" },
  { n: 8, tipo: "enciclopédia", ref: "Britannica. Verbete 'Schrödinger's cat', com resumo do experimento mental e seu contexto histórico.", url: "https://www.britannica.com/science/Schrodingers-cat" },
  { n: 9, tipo: "fonte primária", ref: "Schlosshauer, M., Kofler, J. &amp; Zeilinger, A. 'A Snapshot of Foundational Attitudes Toward Quantum Mechanics'. <em>Studies in History and Philosophy of Science Part B</em> 44:222-230, 2013.", url: "https://arxiv.org/abs/1301.1069" },
  { n: 10, tipo: "divulgação", ref: "Live Science. 'Schrödinger's cat: The favorite, misunderstood pet of quantum mechanics'.", url: "https://www.livescience.com/schrodingers-cat.html" },
  { n: 11, tipo: "enciclopédia filosófica", ref: "Stanford Encyclopedia of Philosophy. Verbete sobre interpretações da mecânica quântica e o problema da medição.", url: "https://plato.stanford.edu/entries/qm/" },
  { n: 12, tipo: "fonte primária", ref: "Everett, H. '\"Relative State\" Formulation of Quantum Mechanics'. <em>Reviews of Modern Physics</em> 29:454, 1957. Artigo original da interpretação de muitos-mundos.", url: "https://journals.aps.org/rmp/abstract/10.1103/RevModPhys.29.454" },
  { n: 13, tipo: "fonte primária", ref: "Ghirardi, G. C., Rimini, A. &amp; Weber, T. 'Unified dynamics for microscopic and macroscopic systems'. <em>Physical Review D</em> 34:470, 1986. Artigo original da teoria de colapso objetivo (GRW).", url: "https://journals.aps.org/prd/abstract/10.1103/PhysRevD.34.470" },
  { n: 14, tipo: "fonte primária", ref: "Fuchs, C. A., Mermin, N. D. &amp; Schack, R. 'An introduction to QBism with an application to the locality of quantum mechanics'. <em>American Journal of Physics</em> 82:749, 2014.", url: "https://pubs.aip.org/aapt/ajp/article/82/8/749/1042162" },
  { n: 15, tipo: "divulgação", ref: "Physics World / Institute of Physics. Reportagens sobre a criação de estados de superposição em laboratório e o significado real do experimento de Schrödinger.", url: "https://physicsworld.com/a/schrodingers-cat-lives-longer-than-ever/" }
]
};

if (typeof module !== "undefined") { module.exports = { CONTEUDOS }; }
