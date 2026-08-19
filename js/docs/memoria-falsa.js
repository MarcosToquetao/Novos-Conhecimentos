CONTEUDOS["memoria-falsa"] = {
termo: "Memória falsa e o paradigma DRM",
area: "Psicologia",
subtitulo: "É possível fazer uma pessoa lembrar, com confiança e detalhes, de uma palavra que nunca foi dita, ou de um episódio da infância que nunca aconteceu. Isso já foi demonstrado centenas de vezes em laboratório, mudou como tribunais tratam depoimentos, e ainda gera debate metodológico sério sobre como medir e classificar o próprio fenômeno.",
prerequisitos: [
  "Nenhum pré-requisito técnico. Basta aceitar que lembrar não é reproduzir uma gravação, é reconstruir algo a partir de fragmentos.",
  "Para o aprofundamento: familiaridade com a ideia de que testemunhos de memória são usados como evidência em processos judiciais."
],
conexoes: [
  { termo: "Efeito Dunning-Kruger", relacao: "Outro caso em que uma descoberta real e sólida de laboratório circula popularmente numa versão exagerada, o que exige separar o achado técnico da narrativa simplificada." },
  { termo: "Cérebro dividido: o experimento e a releitura", relacao: "Os dois casos mostram como a interpretação de um achado neuropsicológico ou cognitivo pode evoluir bastante nas décadas seguintes à publicação original, sem que o dado bruto mude." },
  { termo: "Crise de replicação", relacao: "O debate atual sobre como contar e classificar memórias falsas no paradigma 'perdido no shopping' é um exemplo direto de disputa metodológica ainda ativa sobre um efeito já bem estabelecido." },
  { termo: "Reconsolidação da memória", relacao: "Ambos os temas mostram que a memória humana não é um arquivo estático: ela pode ser alterada tanto no momento da lembrança (reconsolidação) quanto no momento da própria formação (memória falsa)." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Peça a alguém para memorizar uma lista de palavras como "cama, descanso, acordado, cansado, sonho, desperto, cochilo, paz, bocejo, soneca, cobertor, escuro". Depois de um tempo, peça que ela diga quais palavras estavam na lista. É muito comum que a pessoa diga, com confiança, que a palavra "sono" estava lá. Ela nunca esteve. Nenhuma das palavras da lista é "sono", mas todas apontam fortemente para esse conceito, e a mente da pessoa preenche a lacuna sozinha, criando uma lembrança de algo que nunca foi apresentado.</p>

<p>Esse procedimento é conhecido como <strong>paradigma DRM</strong>, sigla que junta os nomes de James Deese, que descreveu o efeito pela primeira vez em 1959,<sup class="cit"><a href="#f1">1</a></sup> e de Henry Roediger e Kathleen McDermott, que o retomaram e popularizaram em 1995, num artigo hoje clássico da psicologia cognitiva.<sup class="cit"><a href="#f2">2</a></sup> O achado central: memória falsa não é algo raro, exótico, que só acontece em circunstâncias extremas. Ela pode ser produzida de forma confiável, em minutos, com listas de palavras cuidadosamente escolhidas, em praticamente qualquer pessoa.</p>

<div class="marca consenso">
<span class="rot">O que é bem estabelecido</span>
<p>Que memórias falsas, no sentido de lembranças de algo que não aconteceu (ou não aconteceu do jeito lembrado), podem ser criadas de forma sistemática e replicável em laboratório, com alto grau de confiança subjetiva por parte de quem lembra, é um dos achados mais replicados da psicologia cognitiva desde 1995. Isso vale tanto para itens simples, como uma palavra isolada, quanto, em estudos posteriores, para episódios inteiros da vida da pessoa.</p>
</div>

<h3>Do laboratório para a vida real: o estudo do shopping</h3>

<p>Elizabeth Loftus, já conhecida por décadas de pesquisa sobre a maleabilidade do testemunho ocular, e Jacqueline Pickrell foram além das palavras isoladas: tentaram implantar, em adultos, a lembrança de um episódio inteiro que nunca aconteceu, ficar perdido num shopping center por volta dos 5 anos de idade.<sup class="cit"><a href="#f3">3</a></sup> Usando um parente mais velho para "confirmar" o episódio fictício junto com três lembranças reais, uma fração relevante dos participantes passou a relatar, com detalhes próprios inventados, uma lembrança do episódio que jamais existiu.<sup class="cit"><a href="#f3">3</a></sup></p>

<p>O motivo declarado da pesquisa não era um exercício acadêmico abstrato. Nos anos 1980 e 1990, tribunais nos Estados Unidos viram uma onda de processos baseados em "memórias recuperadas" de abuso na infância, muitas vezes emergidas durante terapia. Loftus queria testar, com rigor experimental, se era possível implantar uma lembrança inteira e falsa em alguém, como forma de questionar se toda memória "recuperada" em terapia era necessariamente confiável.<sup class="cit"><a href="#f3">3</a></sup></p>

<div class="marca controverso">
<span class="rot">Um ponto que exige cuidado</span>
<p>Loftus foi explícita ao afirmar que o estudo do shopping não provava que toda memória de abuso infantil relatada em terapia fosse falsa. O estudo mostrava que é possível implantar uma lembrança inteiramente inventada em algumas pessoas, sob condições específicas, não que memórias de eventos traumáticos reais sejam, em geral, pouco confiáveis. Usar esse estudo para descartar automaticamente qualquer relato de abuso é uma extrapolação que vai além do que a pesquisa demonstrou, e foi, de fato, um uso indevido comum do achado em disputas judiciais daquela época.</p>
</div>

<h3>Por que isso importa fora do laboratório</h3>

<p>O paradigma DRM e o estudo do shopping mudaram, de forma concreta, como sistemas de justiça tratam depoimentos. Protocolos de entrevista policial e psicológica passaram a levar mais a sério o risco de "contaminar" uma testemunha com perguntas sugestivas, e cortes em vários países passaram a admitir, com mais frequência, peritos especializados em confiabilidade de memória. A lição central, para além do laboratório: confiança subjetiva ao lembrar de algo não é, por si só, prova de que aquilo realmente aconteceu daquele jeito.</p>
` },

aprofundamento: { minutos: 30, html: `
<h3>Como o efeito DRM funciona, mecanicamente</h3>

<p>Roediger e McDermott usaram listas de 12 a 15 palavras, cada uma associada semanticamente a uma palavra "crítica" que nunca aparece na lista (no exemplo do núcleo, "sono"). Em seus experimentos, participantes "lembravam" da palavra crítica em cerca de 40% a 55% dos casos, taxa comparável, em alguns testes, à taxa de lembrança de palavras que realmente estavam na lista.<sup class="cit"><a href="#f2">2</a></sup> A explicação mais aceita é que, ao processar cada palavra da lista, a mente ativa automaticamente conceitos relacionados na memória semântica, e essa ativação da palavra crítica, mesmo sem ela ter sido apresentada, é forte o bastante para ser confundida, na hora de recordar, com uma lembrança real de tê-la visto ou ouvido.</p>

<h3>O desenho experimental do estudo do shopping</h3>

<p>Loftus e Pickrell recrutaram 24 participantes, cada um pareado com um parente mais velho (geralmente um dos pais ou um irmão mais velho) que ajudava a fornecer detalhes de três episódios reais da infância do participante. Um quarto episódio, fictício (perder-se num shopping por volta dos 5 anos, chorar, ser ajudado por uma senhora mais velha e finalmente reencontrar a família), era inserido junto dos três reais, sempre "confirmado" pelo parente como tendo de fato acontecido. Em entrevistas subsequentes, cerca de um quarto dos participantes passou a relatar lembrar do episódio fictício, alguns acrescentando detalhes sensoriais e emocionais próprios que não faziam parte da história original fornecida pelos pesquisadores.<sup class="cit"><a href="#f3">3</a></sup></p>

<div class="tabela-env">
<table>
<thead><tr><th>Estudo</th><th>O que testou</th><th>Achado principal</th></tr></thead>
<tbody>
<tr><td>Deese (1959)</td><td>Intrusões de palavras não apresentadas em listas de recordação imediata</td><td>Primeira descrição sistemática do efeito, décadas antes de ser retomado</td></tr>
<tr><td>Roediger &amp; McDermott (1995)</td><td>Retomada e expansão sistemática do paradigma de Deese com listas associativas</td><td>Taxas de falsa lembrança de 40% a 55%, comparáveis à lembrança de itens reais</td></tr>
<tr><td>Loftus &amp; Pickrell (1995)</td><td>Implantação de um episódio inteiro e fictício da infância, com apoio de um parente</td><td>Cerca de um quarto dos participantes passou a 'lembrar' do episódio fictício</td></tr>
<tr><td>Murphy et al. (2023)</td><td>Réplica pré-registrada, com amostra cinco vezes maior, do estudo de Loftus e Pickrell</td><td>Cerca de 35% desenvolveram alguma crença ou memória falsa do episódio</td></tr>
</tbody>
</table>
</div>

<h3>O que conta como "memória falsa", precisamente</h3>

<p>Vale diferenciar dois níveis de efeito que a literatura às vezes trata como sinônimos, mas não são idênticos: acreditar que um evento aconteceu (crença) e ter uma lembrança subjetiva, com detalhes sensoriais e narrativos, de tê-lo vivido (memória). Nem todo participante que passa a acreditar no evento fictício desenvolve uma "lembrança" no sentido mais forte, com riqueza de detalhes reconstituídos. Distinguir esses dois níveis é importante para não superestimar, a partir das taxas gerais relatadas, quantas pessoas de fato "lembram" versus quantas apenas "acreditam" ter acontecido.<sup class="cit"><a href="#f4">4</a></sup></p>
` },

extensao: { minutos: 60, html: `
<h3>Uma disputa metodológica que segue ativa</h3>

<p>Décadas depois do estudo original, pesquisadores continuam debatendo, em periódicos especializados, como exatamente contar e classificar memórias falsas no paradigma "perdido no shopping". Um artigo de 2025 na revista <em>Applied Cognitive Psychology</em>, provocativamente intitulado "Quem se perdeu no shopping? Desafios em contar e classificar memórias falsas", questiona os critérios usados por diferentes equipes de pesquisa para decidir se um participante "de fato" desenvolveu uma memória falsa ou apenas concordou, de forma superficial, com uma sugestão do entrevistador.<sup class="cit"><a href="#f5">5</a></sup> Outro artigo do mesmo número da revista chega a perguntar se é hora de "deixar o shopping center para trás", apontando falhas de mensuração e limites de validade externa do paradigma clássico.<sup class="cit"><a href="#f6">6</a></sup></p>

<div class="marca emergente">
<span class="rot">O que essa disputa muda, e o que não muda</span>
<p>Essa discussão recente não questiona se memórias falsas podem ser criadas, isso continua bem estabelecido, replicado inclusive com amostra cinco vezes maior por Murphy e colegas em 2023.<sup class="cit"><a href="#f4">4</a></sup> O que está em disputa é a precisão dos números específicos frequentemente citados ("um quarto das pessoas", "35% das pessoas"), que dependem bastante de como cada equipe de pesquisa define o que conta como uma memória falsa genuína, versus uma concordância superficial ou uma crença sem detalhes reconstituídos. É um lembrete de que, mesmo em efeitos bem replicados, a porcentagem exata citada numa manchete de divulgação científica merece ser lida com a mesma cautela reservada a qualquer outro número isolado.</p>
</div>

<h3>Implicações para terapia e para o sistema de justiça</h3>

<p>A pesquisa sobre memória falsa alimentou, nos anos 1990, um movimento conhecido como "Síndrome da Falsa Memória", que questionava terapias baseadas em recuperação de memórias reprimidas de abuso. Esse movimento também gerou controvérsia própria: críticos apontaram que ele foi por vezes usado, em processos judiciais, para desacreditar sistematicamente relatos verdadeiros de abuso, indo além do que a pesquisa de laboratório realmente sustenta.<sup class="cit"><a href="#f7">7</a></sup> A leitura mais equilibrada, hoje, reconhece duas coisas ao mesmo tempo: memórias podem ser distorcidas ou implantadas sob condições específicas de sugestão repetida, e a maioria dos relatos de eventos autobiográficos, incluindo eventos traumáticos, não é fabricada. A pesquisa sobre memória falsa serve para melhorar protocolos de entrevista (evitando perguntas sugestivas e repetição indutora), não para descartar relatos de memória em bloco.</p>

<h3>Por que a mente cria memórias falsas em primeiro lugar</h3>

<p>Do ponto de vista da neurociência cognitiva, memória não funciona como um arquivo de vídeo armazenado intacto e reproduzido sob demanda. Ela é reconstruída a cada lembrança, a partir de fragmentos armazenados de forma distribuída e de expectativas, esquemas e associações ativas no momento em que a pessoa tenta lembrar. Esse mesmo mecanismo que permite generalizar, inferir e completar informação ausente de forma útil na vida cotidiana (por exemplo, "lembrar" corretamente do sentido geral de uma conversa longa sem guardar cada palavra) é o que também abre espaço para preencher lacunas com informação plausível, mas errada, quando as pistas apontam fortemente na direção de algo que não aconteceu.</p>
` }
},

sintese: {
  definicoes: [
    { termo: "Paradigma DRM (Deese-Roediger-McDermott)", def: "Procedimento experimental em que listas de palavras associadas a um conceito ausente (a 'palavra crítica') induzem, de forma confiável, a falsa lembrança dessa palavra ausente, com alta confiança subjetiva." },
    { termo: "Memória falsa", def: "Lembrança de um evento, detalhe ou item que não ocorreu, ou que ocorreu de forma diferente da lembrada, mantida com graus variados de confiança e riqueza de detalhes reconstituídos." },
    { termo: "Técnica 'perdido no shopping' (lost-in-the-mall)", def: "Procedimento em que um episódio autobiográfico fictício é apresentado a um participante, com apoio de um parente que 'confirma' sua ocorrência, testando se é possível implantar a lembrança de um evento inteiro que nunca aconteceu." },
    { termo: "Síndrome da Falsa Memória", def: "Movimento e conceito, surgido nos anos 1990, questionando a confiabilidade de memórias de abuso 'recuperadas' em terapia, controverso por ter sido usado, em alguns casos, para descartar relatos verdadeiros." },
    { termo: "Memória reconstrutiva", def: "Modelo, dominante na psicologia cognitiva, segundo o qual a memória não é reproduzida como uma gravação intacta, mas reconstruída a cada lembrança a partir de fragmentos, esquemas e associações ativas no momento da recordação." }
  ],
  lembrar: [
    "James Deese descreveu o efeito pela primeira vez em 1959, mas ele só se popularizou depois de ser retomado por Henry Roediger e Kathleen McDermott em 1995.",
    "No paradigma DRM, listas de palavras associadas a uma palavra ausente induzem falsa lembrança dessa palavra em 40% a 55% dos casos, taxa comparável à de itens que realmente estavam na lista.",
    "Elizabeth Loftus e Jacqueline Pickrell (1995) implantaram, num estudo com apoio de parentes, a lembrança de um episódio inteiro e fictício (perder-se num shopping na infância) em cerca de um quarto dos participantes.",
    "Uma réplica pré-registrada de 2023, com amostra cinco vezes maior (Murphy e colegas), encontrou cerca de 35% dos participantes desenvolvendo alguma crença ou memória falsa do episódio.",
    "Loftus foi explícita ao afirmar que o estudo não provava que memórias de abuso infantil recuperadas em terapia fossem falsas, apenas que é possível implantar uma memória inteira sob condições específicas.",
    "Artigos de 2024 e 2025 em periódicos especializados debatem ativamente como contar e classificar memórias falsas nesse paradigma, questionando a precisão dos números específicos costumeiramente citados.",
    "A pesquisa sobre memória falsa mudou protocolos de entrevista policial e psicológica, tornando-os mais cautelosos com perguntas sugestivas, sem, no entanto, invalidar relatos de memória em geral."
  ],
  confusoes: [
    { erro: "O estudo do shopping de Loftus e Pickrell prova que a maioria dos relatos de abuso infantil recuperados em terapia é falsa", correcao: "Loftus foi explícita ao afirmar o contrário: o estudo mostra que é possível implantar uma memória fictícia inteira sob condições experimentais específicas, não que memórias de eventos traumáticos reais sejam, em geral, pouco confiáveis." },
    { erro: "Memória falsa só ocorre com informações triviais, como palavras isoladas, nunca com eventos autobiográficos importantes", correcao: "O estudo 'perdido no shopping' e réplicas posteriores mostram que episódios inteiros da vida de uma pessoa, com detalhes emocionais e sensoriais, também podem ser implantados sob condições de sugestão repetida." },
    { erro: "A confiança com que alguém relata uma lembrança é uma boa medida de quão precisa essa lembrança é", correcao: "Um dos achados centrais dessa linha de pesquisa é justamente o oposto: pessoas relatam memórias falsas com o mesmo grau de confiança subjetiva, e às vezes mais riqueza de detalhes, do que memórias verdadeiras." },
    { erro: "Como pesquisas recentes questionam os números exatos do estudo do shopping, isso significa que memórias falsas não podem realmente ser implantadas", correcao: "A disputa metodológica atual é sobre como contar e classificar precisamente o fenômeno, não sobre se ele existe. A réplica de 2023, com amostra maior, continuou encontrando uma proporção substancial de participantes desenvolvendo crenças ou memórias falsas." },
    { erro: "O paradigma DRM e a técnica 'perdido no shopping' são a mesma coisa", correcao: "São procedimentos relacionados, mas diferentes: o DRM testa falsa lembrança de palavras isoladas a partir de associação semântica; a técnica do shopping testa a implantação de um episódio autobiográfico inteiro, com apoio social de um parente." }
  ],
  numeros: [
    "Deese, J. (1959), Journal of Experimental Psychology 58(1):17: primeira descrição sistemática do efeito de intrusão de palavras não apresentadas.",
    "Roediger, H. L. &amp; McDermott, K. B. (1995), Journal of Experimental Psychology: Learning, Memory, and Cognition 21(4):803-814: taxas de falsa lembrança de 40% a 55% no paradigma DRM.",
    "Loftus, E. F. &amp; Pickrell, J. E. (1995), Psychiatric Annals 25:720-725: cerca de um quarto de 24 participantes desenvolveu memória do episódio fictício de estar perdido num shopping.",
    "Murphy, G. et al. (2023), Memory 31(6):818-830: réplica pré-registrada com amostra cinco vezes maior, encontrando cerca de 35% de crenças ou memórias falsas do mesmo episódio.",
    "Artigos de 2024 e 2025 na revista Applied Cognitive Psychology questionam ativamente os critérios de contagem e classificação de memórias falsas no paradigma clássico."
  ]
},

flashcards: [
  { f: "O que é o paradigma DRM, e de onde vem o nome?", v: "Procedimento em que listas de palavras associadas a uma palavra ausente ('crítica') induzem falsa lembrança dessa palavra. O nome vem de Deese (1959), que o descreveu primeiro, e Roediger e McDermott (1995), que o retomaram e popularizaram." },
  { f: "Qual é a taxa típica de falsa lembrança da palavra crítica no paradigma DRM, segundo Roediger e McDermott?", v: "Entre 40% e 55% dos casos, taxa comparável, em alguns testes, à taxa de lembrança de palavras que realmente estavam na lista." },
  { f: "O que Loftus e Pickrell (1995) testaram no estudo conhecido como 'perdido no shopping'?", v: "Se era possível implantar, em adultos, com apoio de um parente mais velho, a lembrança de um episódio inteiro e fictício da infância (ficar perdido num shopping por volta dos 5 anos)." },
  { f: "Quantos participantes, aproximadamente, desenvolveram a memória do episódio fictício no estudo original de Loftus e Pickrell?", v: "Cerca de um quarto dos 24 participantes, alguns acrescentando detalhes sensoriais e emocionais próprios não fornecidos pelos pesquisadores." },
  { f: "Por que Loftus conduziu esse estudo, historicamente?", v: "Para testar, com rigor experimental, se memórias inteiras e falsas podiam ser implantadas, num contexto de debate sobre 'memórias recuperadas' de abuso infantil em terapia nos anos 1980 e 1990." },
  { f: "O estudo do shopping prova que relatos de abuso infantil recuperados em terapia são geralmente falsos?", v: "Não. A própria Loftus foi explícita: o estudo mostra que é possível implantar uma memória fictícia sob condições específicas, não que memórias de eventos traumáticos reais sejam, em geral, pouco confiáveis." },
  { f: "O que a réplica pré-registrada de Murphy e colegas (2023) encontrou, com uma amostra cinco vezes maior?", v: "Cerca de 35% dos participantes desenvolveram alguma crença ou memória falsa do episódio fictício, confirmando o efeito geral, com uma proporção diferente da do estudo original." },
  { f: "Qual é a distinção importante entre 'acreditar' que um evento aconteceu e 'lembrar' dele?", v: "Nem todo participante que passa a acreditar no evento fictício desenvolve uma lembrança subjetiva rica em detalhes sensoriais e narrativos reconstituídos; são dois níveis diferentes de efeito, muitas vezes tratados como sinônimos na divulgação." },
  { f: "Sobre o que exatamente é a disputa metodológica atual (2024-2025) em torno do paradigma 'perdido no shopping'?", v: "Sobre como diferentes equipes de pesquisa definem e contam o que conta como uma memória falsa genuína, versus uma concordância superficial ou crença sem detalhes reconstituídos, questionando a precisão de números específicos costumeiramente citados." },
  { f: "Essa disputa metodológica significa que memórias falsas não podem ser implantadas?", v: "Não. A existência do efeito continua bem estabelecida. O que está em disputa é a precisão dos números exatos, que variam conforme os critérios de classificação usados." },
  { f: "Por que a confiança subjetiva ao lembrar de algo não é, por si só, prova de precisão?", v: "Porque memórias falsas costumam ser relatadas com o mesmo grau de confiança, e às vezes mais riqueza de detalhes reconstituídos, do que memórias verdadeiras, um dos achados centrais dessa linha de pesquisa." },
  { f: "Segundo o modelo de memória reconstrutiva, por que a mente cria memórias falsas?", v: "Porque a memória não é reproduzida como uma gravação intacta, mas reconstruída a cada lembrança a partir de fragmentos, esquemas e associações ativas no momento da recordação, o que permite preencher lacunas com informação plausível, mas às vezes errada." }
],

prova: [
  { camada: "nucleo",
    q: "O que é o paradigma DRM?",
    alts: [
      "Um teste de inteligência geral usado para medir QI.",
      "Um procedimento experimental em que listas de palavras associadas a uma palavra ausente induzem, de forma confiável, a falsa lembrança dessa palavra ausente.",
      "Uma técnica de hipnose usada para recuperar memórias reprimidas.",
      "Um exame de imagem cerebral usado para detectar mentiras."
    ],
    correta: 1,
    porque: "O paradigma DRM demonstra que memória falsa pode ser produzida de forma sistemática e replicável com listas de palavras cuidadosamente escolhidas, sem precisar de nenhuma técnica exótica." },

  { camada: "nucleo",
    q: "O que Loftus e Pickrell testaram no estudo 'perdido no shopping' (1995)?",
    alts: [
      "Se pessoas conseguem se orientar melhor em shoppings grandes do que em shoppings pequenos.",
      "Se era possível implantar, em adultos, a lembrança de um episódio inteiro e fictício da infância, com apoio de um parente mais velho.",
      "Se crianças perdidas em shoppings sofrem trauma permanente.",
      "Se lojas de shopping influenciam decisões de compra por meio de propaganda subliminar."
    ],
    correta: 1,
    porque: "O estudo testou diretamente a possibilidade de implantar um episódio autobiográfico completamente fictício, indo além de itens isolados como palavras, para episódios inteiros da vida da pessoa." },

  { camada: "nucleo",
    q: "O que aconteceu com uma fração relevante dos participantes do estudo original de Loftus e Pickrell?",
    alts: [
      "Nenhum participante acreditou no episódio fictício.",
      "Cerca de um quarto dos participantes passou a relatar lembrar do episódio fictício, alguns com detalhes próprios inventados.",
      "Todos os participantes identificaram corretamente o episódio como falso.",
      "Os participantes se recusaram a continuar o experimento."
    ],
    correta: 1,
    porque: "Esse resultado, replicado depois em outros estudos, é a demonstração central de que memórias autobiográficas inteiras, não só palavras isoladas, podem ser implantadas sob condições experimentais específicas." },

  { camada: "aprofundamento",
    q: "Segundo o documento, qual é a distinção importante entre 'acreditar' que um evento aconteceu e efetivamente 'lembrar' dele?",
    alts: [
      "Não existe distinção real entre os dois conceitos, eles são sempre idênticos.",
      "Acreditar é apenas concordar que algo pode ter acontecido, enquanto lembrar envolve uma lembrança subjetiva rica em detalhes sensoriais e narrativos reconstituídos; nem todo participante que acredita desenvolve essa lembrança mais forte.",
      "Lembrar é sempre mais confiável do que acreditar, sem exceção.",
      "A distinção só se aplica a memórias de infância, nunca a memórias de eventos recentes."
    ],
    correta: 1,
    porque: "Diferenciar esses dois níveis é importante para não superestimar, a partir de taxas gerais relatadas, quantas pessoas realmente desenvolvem uma memória rica em detalhes versus quantas apenas concordam superficialmente com a sugestão." },

  { camada: "aprofundamento",
    q: "Qual foi o achado da réplica pré-registrada de Murphy e colegas, publicada em 2023, com uma amostra cinco vezes maior que a original?",
    alts: [
      "Nenhum participante desenvolveu qualquer crença ou memória falsa, refutando o estudo original.",
      "Cerca de 35% dos participantes desenvolveram alguma crença ou memória falsa do episódio fictício, uma proporção diferente, mas na mesma direção geral do estudo original.",
      "Todos os participantes desenvolveram memórias falsas idênticas às do estudo original.",
      "A réplica não conseguiu ser concluída por problemas metodológicos insuperáveis."
    ],
    correta: 1,
    porque: "A réplica, com metodologia mais rigorosa e amostra maior, confirmou o efeito geral de implantação de memória falsa, ainda que com uma taxa numérica diferente da relatada no estudo original de 1995." },

  { camada: "aprofundamento",
    q: "Por que Elizabeth Loftus foi explícita ao afirmar que o estudo do shopping não provava que memórias de abuso infantil recuperadas em terapia fossem falsas?",
    alts: [
      "Porque ela nunca se interessou pelo tema de memórias recuperadas.",
      "Porque o estudo demonstrava apenas que é possível implantar uma memória inteiramente fictícia sob condições experimentais específicas, o que é diferente de provar que memórias de eventos traumáticos reais sejam, em geral, pouco confiáveis.",
      "Porque o estudo foi conduzido antes de qualquer debate sobre memórias recuperadas existir.",
      "Porque ela acreditava que todas as memórias de abuso eram automaticamente verdadeiras."
    ],
    correta: 1,
    porque: "Extrapolar do estudo (memórias podem ser implantadas sob condições específicas) para a conclusão de que relatos de abuso são geralmente falsos vai além do que a pesquisa efetivamente demonstrou, um uso indevido comum do achado em disputas judiciais da época." },

  { camada: "aprofundamento",
    q: "Segundo a tabela cronológica apresentada no documento, o que Deese descreveu em 1959, antes de o efeito ser retomado por Roediger e McDermott?",
    alts: [
      "A implantação de episódios autobiográficos inteiros e fictícios.",
      "A primeira descrição sistemática de intrusões de palavras não apresentadas em listas de recordação imediata.",
      "A técnica 'perdido no shopping'.",
      "O conceito de Síndrome da Falsa Memória."
    ],
    correta: 1,
    porque: "Deese descreveu o fenômeno básico de intrusão de palavras associadas décadas antes de o paradigma ser expandido e popularizado por Roediger e McDermott em 1995." },

  { camada: "extensao",
    q: "Sobre o que trata a disputa metodológica ativa, discutida em artigos de 2024 e 2025 na revista Applied Cognitive Psychology, sobre o paradigma 'perdido no shopping'?",
    alts: [
      "Sobre se memórias falsas podem, em princípio, ser criadas, questão ainda totalmente em aberto.",
      "Sobre como diferentes equipes de pesquisa definem e contam o que conta como uma memória falsa genuína, questionando a precisão dos números específicos costumeiramente citados.",
      "Sobre se o estudo original de Loftus e Pickrell foi conduzido de forma antiética.",
      "Sobre se shoppings centers são um ambiente representativo de eventos autobiográficos comuns."
    ],
    correta: 1,
    porque: "A disputa é sobre critérios de mensuração e classificação, não sobre a existência do fenômeno, que continua bem estabelecida e replicada, inclusive pela própria réplica de 2023 com amostra maior." },

  { camada: "extensao",
    q: "Qual é a leitura mais equilibrada, segundo o documento, sobre a relação entre pesquisa de memória falsa e relatos de abuso infantil em terapia?",
    alts: [
      "Todo relato de abuso recuperado em terapia deve ser automaticamente descartado como memória falsa.",
      "Memórias podem ser distorcidas ou implantadas sob condições específicas de sugestão repetida, mas a maioria dos relatos de eventos autobiográficos, incluindo traumáticos, não é fabricada; a pesquisa serve para melhorar protocolos de entrevista, não para descartar relatos em bloco.",
      "Nenhuma memória humana pode ser confiada, então testemunhos nunca deveriam ser usados em processos judiciais.",
      "Memórias implantadas em laboratório são idênticas, em todos os aspectos, a memórias de eventos traumáticos reais."
    ],
    correta: 1,
    porque: "Essa leitura equilibrada reconhece tanto a maleabilidade real da memória sob certas condições quanto a confiabilidade geral da maioria dos relatos autobiográficos, evitando os dois extremos de credulidade total e ceticismo total." },

  { camada: "extensao",
    q: "Segundo o modelo de memória reconstrutiva discutido no documento, por que a mesma capacidade que permite generalizar e inferir informação também abre espaço para memórias falsas?",
    alts: [
      "Porque a memória é armazenada como uma gravação de vídeo intacta que às vezes é copiada incorretamente.",
      "Porque a memória é reconstruída a cada lembrança a partir de fragmentos, esquemas e associações ativas no momento da recordação, o que permite preencher lacunas com informação plausível, mas por vezes errada.",
      "Porque o cérebro humano não tem nenhuma capacidade de armazenar informação de forma confiável.",
      "Porque memórias falsas só ocorrem em pessoas com algum tipo de comprometimento cognitivo diagnosticado."
    ],
    correta: 1,
    porque: "O mesmo mecanismo reconstrutivo que permite completar informação ausente de forma útil no dia a dia (como lembrar do sentido geral de uma conversa) é o que, sob certas condições, produz preenchimentos incorretos indistinguíveis subjetivamente de lembranças verdadeiras." }
],

fontes: [
  { n: 1, tipo: "fonte primária", ref: "Deese, J. 'On the prediction of occurrence of particular verbal intrusions in immediate recall'. <em>Journal of Experimental Psychology</em> 58(1):17-22, 1959.", url: "https://pubmed.ncbi.nlm.nih.gov/13664879/" },
  { n: 2, tipo: "fonte primária", ref: "Roediger, H. L. &amp; McDermott, K. B. 'Creating false memories: Remembering words not presented in lists'. <em>Journal of Experimental Psychology: Learning, Memory, and Cognition</em> 21(4):803-814, 1995.", url: "http://psychnet.wustl.edu/memory/wp-content/uploads/2018/04/Roediger-McDermott-1995_JEPLMC.pdf" },
  { n: 3, tipo: "fonte primária", ref: "Loftus, E. F. &amp; Pickrell, J. E. 'The Formation of False Memories'. <em>Psychiatric Annals</em> 25(12):720-725, 1995.", url: "https://journals.healio.com/doi/10.3928/0048-5713-19951201-07" },
  { n: 4, tipo: "réplica", ref: "Murphy, G. et al. 'Lost in the mall again: a preregistered replication and extension of Loftus &amp; Pickrell (1995)'. <em>Memory</em> 31(6):818-830, 2023.", url: "https://pubmed.ncbi.nlm.nih.gov/37312574/" },
  { n: 5, tipo: "crítica", ref: "Murphy, G. et al. 'Who Got Lost in the Mall? Challenges in Counting and Classifying False Memories'. <em>Applied Cognitive Psychology</em>, 2025.", url: "https://onlinelibrary.wiley.com/doi/10.1002/acp.70044" },
  { n: 6, tipo: "crítica", ref: "Szojka, Z. A. et al. 'Is It Time to Leave the Shopping Mall Behind? Measurement Flaws, Plausibility, and External Validity of False Memory Research'. <em>Applied Cognitive Psychology</em>, 2025.", url: "https://onlinelibrary.wiley.com/doi/10.1002/acp.70083" },
  { n: 7, tipo: "reportagem", ref: "Mad in America. 'The False Memory Syndrome at 30: How Flawed Science Turned into Conventional Wisdom', sobre a controvérsia em torno do movimento de síndrome da falsa memória.", url: "https://www.madinamerica.com/2021/02/false-memory-syndrome/" },
  { n: 8, tipo: "revisão acadêmica", ref: "Wade, K. A. et al. 'Still Lost in the Mall: False Memories Happen and That's What Matters'. <em>Applied Cognitive Psychology</em>, 2025.", url: "https://onlinelibrary.wiley.com/doi/full/10.1002/acp.70028" },
  { n: 9, tipo: "revisão acadêmica", ref: "'The Deese-Roediger-McDermott (DRM) Task: A Simple Cognitive Paradigm to Investigate False Memories in the Laboratory'.", url: "https://pubmed.ncbi.nlm.nih.gov/28190038/" },
  { n: 10, tipo: "enciclopédia", ref: "Wikipedia. Verbete 'Deese-Roediger-McDermott paradigm', com resumo técnico do procedimento e variações usadas na literatura.", url: "https://en.wikipedia.org/wiki/Deese%E2%80%93Roediger%E2%80%93McDermott_paradigm" },
  { n: 11, tipo: "enciclopédia", ref: "Wikipedia. Verbete 'Lost in the mall technique', com histórico do estudo e réplicas posteriores.", url: "https://en.wikipedia.org/wiki/Lost_in_the_mall_technique" },
  { n: 12, tipo: "divulgação", ref: "The Skeptic. 'Replicating a classic false memory study: Lost in the mall again', cobertura acessível da réplica de 2023.", url: "https://www.skeptic.org.uk/2023/05/replicating-a-classic-false-memory-study-lost-in-the-mall-again/" },
  { n: 13, tipo: "crítica", ref: "Andrews, B. et al. 'Lost in the Mall? Interrogating Judgements of False Memory'. <em>Applied Cognitive Psychology</em>, 2024.", url: "https://onlinelibrary.wiley.com/doi/10.1002/acp.70012" },
  { n: 14, tipo: "reportagem acadêmica", ref: "'Current state of \"lost in the mall\": implications for expert testimony and forensic assessment of memory'.", url: "https://www.tandfonline.com/doi/full/10.1080/13218719.2025.2556461" },
  { n: 15, tipo: "divulgação", ref: "Medium (Jeff Barlatier). '\"Lost in the Mall\": How a Simple Story Shook Our Confidence in Memory', resumo acessível do histórico do estudo e seu impacto cultural.", url: "https://medium.com/@jeffreybarlatier/lost-in-the-mall-how-a-simple-story-shook-our-confidence-in-memory-db0299312d48" }
]
};

if (typeof module !== "undefined") { module.exports = { CONTEUDOS }; }
