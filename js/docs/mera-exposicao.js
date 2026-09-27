CONTEUDOS["mera-exposicao"] = {
termo: "Efeito de mera exposição",
area: "Marketing",
subtitulo: "Quanto mais vemos uma coisa, mais gostamos dela, mesmo sem lembrar de tê-la visto. O efeito explica por que jingles, slogans e rostos repetidos viram preferência antes de qualquer argumento.",
prerequisitos: [
 "Nenhum conhecimento prévio de psicologia é necessário. Basta aceitar que parte do que chamamos de gosto pode ter origem em algo que nem percebemos.",
 "Ajuda saber o que é um experimento controlado: dois grupos idênticos, uma única diferença entre eles, e uma medida de preferência no final."
],
conexoes: [
 {
  "termo": "Prova social e influência (Cialdini)",
  "relacao": "A exposição repetida cria familiaridade silenciosa, e Cialdini mostra que a familiaridade é um dos gatilhos de conformidade que levam a pessoa a seguir o que já viu antes."
 },
 {
  "termo": "Disponibilidade mental e estruturas de memória",
  "relacao": "O efeito depende de uma memória que registra a exposição sem que a pessoa consiga recuperá-la de forma consciente, o mesmo mecanismo que faz certos exemplos virem à cabeça mais fácil."
 },
 {
  "termo": "Ancoragem e precificação psicológica",
  "relacao": "Em experimentos de propaganda, consumidores expostos a uma marca repetida se dispuseram a pagar mais pelo produto do que os não expostos, ligando a familiaridade ao valor percebido."
 },
 {
  "termo": "Posicionamento de marca",
  "relacao": "O efeito dá a base empírica de por que marcas novas se beneficiam de repetição: a preferência cresce mais forte quando o produto é desconhecido do que quando já é familiar."
 },
 {
  "termo": "Heurísticas e vieses (Kahneman e Tversky)",
  "relacao": "A preferência pelo que já se viu funciona como atalho mental: a pessoa decide com base na sensação de facilidade e não em uma avaliação deliberada dos atributos."
 }
],

camadas: {

nucleo: { minutos: 3, html: `
<p class="abre">Imagine que você entra em uma sala e vê, no fundo, um saco preto grande com apenas dois pés aparecendo embaixo. Alunos de uma turma passaram por isso em uma experiência na Universidade Estadual do Oregon: um estudante ficava dentro de um saco preto durante as aulas. No começo, o saco causou hostilidade. Depois virou curiosidade. No fim do curso, tratavam o saco como amigo<sup class="cit"><a href="#f1">1</a></sup>. Nada foi dito sobre o saco. Ele apenas estava lá, toda aula.</p><p>Isso é o efeito de mera exposição: a simples repetição de um estímulo faz a pessoa gostar mais dele, sem reforço, sem prêmio, sem argumento. Robert Zajonc ficou conhecido por demonstrar o efeito a partir dos anos 1960. Ele expôs participantes a palavras, polígonos, desenhos, fotografias de expressões e palavras sem sentido, e em todos os casos o que aparecia mais era avaliado de forma mais positiva<sup class="cit"><a href="#f1">1</a></sup>. Zajonc resumiu a ideia em uma frase: as preferências não precisam de inferências. A pessoa não conclui que gosta. Ela gosta e depois procura motivos.</p><h3>Como o cérebro produz esse gostar</h3><p>A explicação mais aceita hoje junta dois passos. Primeiro, a exposição repetida aumenta a fluência perceptiva, a facilidade com que o cérebro processa o estímulo. Ver algo já visto custa menos esforço do que ver algo novo<sup class="cit"><a href="#f1">1</a></sup>. Segundo, essa facilidade é interpretada como uma sensação boa e vira a base do julgamento<sup class="cit"><a href="#f2">2</a></sup>. A pessoa não sente «processei isso mais rápido». Sente «gostei disso».</p><p>Essa mistura aparece em experimentos com imagens mostradas por tempo curto demais para serem percebidas. Bornstein e D'Agostino compararam estímulos apresentados por 5 milésimos de segundo com os mostrados por 500 milésimos e encontraram efeitos maiores para os que ninguém tinha consciência de ter visto<sup class="cit"><a href="#f3">3</a></sup>. O mesmo resultado aparece em banners de propaganda na tela de um computador: estudantes que leram um artigo enquanto anúncios piscavam no topo avaliaram melhor o banner que apareceu mais vezes, mesmo sem prestar atenção nele<sup class="cit"><a href="#f1">1</a></sup>.</p><div class="marca consenso"><span class="rot">Efeito robusto, mas com limites</span><p>Uma metanálise de 208 experimentos confirmou que o efeito é forte e confiável, com tamanho de efeito r = 0,26<sup class="cit"><a href="#f1">1</a></sup>. Ele costuma atingir o máximo entre 10 e 20 apresentações. Depois disso, a preferência pode cair, porque o tédio entra em cena<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f4">4</a></sup>. O intervalo entre a exposição e a medida de gosto tende a aumentar o efeito, não a reduzi-lo<sup class="cit"><a href="#f1">1</a></sup>.</p></div><h3>O que faz o efeito crescer e o que faz encolher</h3><p>O efeito é maior com estímulos novos do que com os já conhecidos. Ele também é mais fraco em crianças, e mais fraco para desenhos e pinturas do que para outros tipos de estímulo<sup class="cit"><a href="#f1">1</a></sup>. Um experimento na Universidade de Michigan mostrou que, quando os participantes já odiavam alguém antes, mais exposição àquela pessoa os fazia odiá-la ainda mais. Familiaridade vira afeição quando o ponto de partida é neutro. Quando é hostil, ela pode amplificar a hostilidade<sup class="cit"><a href="#f1">1</a></sup>.</p><p>Há também um limite no tipo de estímulo. Delplanque e colegas expuseram participantes a odores neutros, levemente agradáveis, muito agradáveis e desagradáveis. Apenas os neutros e os levemente agradáveis ficaram mais agradáveis com a repetição. Os que já eram muito bons ou ruins não mudaram<sup class="cit"><a href="#f5">5</a></sup>. O efeito parece agir onde a opinião ainda não está formada, empurrando o julgamento para o lado positivo.</p><p>O que a pessoa acha que sente ao ver o estímulo não é o motor do efeito. Titchener descreveu um «calor» diante do familiar, mas a hipótese caiu quando os resultados mostraram que o aumento de preferência não dependia das impressões subjetivas de familiaridade dos participantes<sup class="cit"><a href="#f1">1</a></sup>. Ou seja, não é preciso sentir que algo é familiar para passar a gostar mais dele.</p>
` },

aprofundamento: { minutos: 4, html: `
<p>O modo de pensar da área gira em torno de uma pergunta teimosa: o gosto precisa de pensamento antes? Zajonc apostou que não, e propôs a hipótese da primazia afetiva, segundo a qual reações afetivas podem ser despertadas com uma quantidade mínima de informação<sup class="cit"><a href="#f1">1</a></sup>. A evidência que ele reuniu vem de estímulos que a pessoa não reconhece conscientemente e de respostas mais rápidas de gosto para esses estímulos do que para os vistos com consciência<sup class="cit"><a href="#f1">1</a></sup>.</p><p>O debate seguinte foi sobre o que, exatamente, a repetição aumenta. A explicação por fluência perceptiva somada a atribuição diz que a pessoa percebe a facilidade de processar e erroneamente atribui essa facilidade ao objeto. Se ela souber que a facilidade vem do procedimento de familiarização do experimento, o efeito diminui<sup class="cit"><a href="#f2">2</a></sup>. Se for desencorajada a fazer essa atribuição, o efeito aumenta<sup class="cit"><a href="#f2">2</a></sup>. Esse modelo prevê que o reconhecimento consciente deve reduzir o efeito, porque a pessoa desconta a facilidade. Os experimentos de Newell e Shanks com rostos e polígonos testaram a previsão e encontraram o contrário: o efeito só apareceu quando o reconhecimento estava no nível mais alto, e gosto e reconhecimento caminharam juntos<sup class="cit"><a href="#f6">6</a></sup>.</p><p>Stafford e Grimes, usando logos de marca, repetiram o padrão: reconhecer o estímulo, inclusive reconhecer errado, aumentou a chance de gostar dele<sup class="cit"><a href="#f7">7</a></sup>. Hansen e Wänke mostraram algo mais fino: a atitude aumentou independentemente do nível de distração durante a apresentação, e se correlacionou com a familiaridade inconsciente, não com o reconhecimento consciente<sup class="cit"><a href="#f8">8</a></sup>. É uma distinção útil. Existem dois componentes de memória em jogo, e eles influenciam a preferência de formas diferentes.</p><p>A fisiologia dá apoio à ideia de que a repetição mexe com afeto, não só com memória. Harmon-Jones e Allen mediram atividade do músculo zigomático, aquele que puxa o canto da boca para cima, enquanto participantes olhavam rostos repetidos e novos. Os rostos familiares foram avaliados como mais simpáticos e evocaram mais atividade nesse músculo do que os novos<sup class="cit"><a href="#f9">9</a></sup>. Pessoas com menos afeto positivo na linha de base mostraram maior reação a estímulos familiares, o que sugere que a familiaridade pode compensar um ponto de partida mais baixo<sup class="cit"><a href="#f9">9</a></sup>.</p><p>O efeito também não é uma marca da espécie humana isolada. Filhotes de galinha ainda dentro do ovo ouviram tons de duas frequências diferentes. Depois de nascer, escolheram consistentemente o tom que ouviram antes de sair do ovo<sup class="cit"><a href="#f1">1</a></sup>. Em macacos, Zola-Morgan mostrou que lesões na amígdala prejudicam o funcionamento afetivo mas preservam os processos cognitivos, e que lesões no hipocampo fazem o inverso<sup class="cit"><a href="#f1">1</a></sup>. Isso apoia a separação entre circuitos de afeto e de memória que Zajonc defendia.</p>

[[FOTO:3]]<p>Duas metanálises dão a forma da curva. Bornstein revisou 208 experimentos e encontrou força máxima com estímulos novos apresentados brevemente, com pico entre 10 e 20 apresentações e possível queda depois<sup class="cit"><a href="#f1">1</a></sup>. Montoya e colegas examinaram 268 curvas de 81 artigos e confirmaram a curva em U invertido: gosto sobe, atinge um topo e desce<sup class="cit"><a href="#f10">10</a></sup>. O detalhe curioso é que essas curvas apareceram para estímulos visuais, mas não para auditivos, e para exposições muito curtas ou muito longas<sup class="cit"><a href="#f10">10</a></sup>.</p><p>Em propaganda, o resultado é menos limpo do que se costuma dizer. Um estudo com banners apoiou o efeito<sup class="cit"><a href="#f1">1</a></sup>. Outro encontrou que níveis mais altos de exposição na mídia se associam a reputações piores para as empresas, mesmo quando a exposição é positiva, porque ela traz muitas associações, boas e ruins<sup class="cit"><a href="#f1">1</a></sup>. Uma revisão concluiu que talvez não exista um nível ótimo de exposição, e que a exposição ajuda mais quando a empresa ou o produto é novo e desconhecido<sup class="cit"><a href="#f1">1</a></sup>.</p>

[[FOTO:4]]<table><thead><tr><th>Modelo</th><th>O que aumenta</th><th>Previsão sobre reconhecimento</th><th>Resultado experimental</th></tr></thead><tbody><tr><tr><td>Fluência perceptiva e atribuição</td><td>Facilidade de processar, atribuída ao objeto</td><td>Reconhecer reduz o efeito</td><td>Contrariado: efeito maior com reconhecimento alto<sup class="cit"><a href="#f6">6</a></sup><sup class="cit"><a href="#f7">7</a></sup></td></tr><tr><td>Fluência hedônica</td><td>Reação afetiva espontânea à facilidade</td><td>Afeto independe do reconhecimento</td><td>Apoiado em propaganda<sup class="cit"><a href="#f11">11</a></sup></td></tr><tr><td>Redução de incerteza</td><td>Preferência pelo que é familiar e seguro</td><td>Confiança e familiaridade aumentam o gosto</td><td>Apoiado: efeito no afeto, não na cognição<sup class="cit"><a href="#f12">12</a></sup></td></tr></tbody></table><p>Essa tabela resume o estado da questão. O modelo de atribuição ainda é ensinado, mas seus experimentos decisivos não se sustentaram. Hoje a explicação que ganha força combina uma reação afetiva rápida e reflexa com um processamento cognitivo mais controlado do conteúdo do estímulo, como descreve a revisão de Bornstein e Craver-Lemley<sup class="cit"><a href="#f13">13</a></sup>.</p>
` },

extensao: { minutos: 3, html: `
<p>O efeito de mera exposição aparece em decisões que as pessoas atribuiriam à razão. Uma análise estatística de padrões de voto encontrou efeito forte da exposição dos candidatos sobre o número de votos, separado da popularidade das propostas<sup class="cit"><a href="#f1">1</a></sup>. Investidores tendem a comprar ações de empresas do próprio país só porque são mais familiares, mesmo quando mercados internacionais oferecem alternativas parecidas ou melhores<sup class="cit"><a href="#f1">1</a></sup>. Acadêmicos que publicaram ou revisaram para uma revista avaliam essa revista de forma muito mais alta do que colegas que nunca tiveram contato com ela<sup class="cit"><a href="#f1">1</a></sup>.</p><p>Na publicidade, a lição prática tem duas faces. Repetição basta para criar uma marca na cabeça do consumidor, e um pesquisador descreveu essas tendências de aproximação como «pré-atitudinais»: não exigem o processamento deliberado que forma uma atitude de marca<sup class="cit"><a href="#f1">1</a></sup>. Um experimento mostrou que consumidores com sede, expostos antes a um rosto sorridente, compraram mais bebidas e se dispuseram a pagar mais do que os expostos a um rosto desagradável<sup class="cit"><a href="#f1">1</a></sup>. Ao mesmo tempo, repetir demais pode virar tédio<sup class="cit"><a href="#f4">4</a></sup> ou reunir associações negativas<sup class="cit"><a href="#f1">1</a></sup>. A recomendação que sai da evidência é concentrar repetição em produtos novos e desconhecidos, onde há espaço para o gosto subir.</p><p>A extensão para convivência entre grupos é menos otimista. Há resultados mistos sobre se a mera exposição melhora relações entre grupos diferentes. Quando os grupos já têm atitudes negativas entre si, mais exposição pode aumentar a hostilidade<sup class="cit"><a href="#f1">1</a></sup>. O efeito é um amplificador do ponto de partida, não um corretor de julgamentos.</p><p>Há ainda uma consequência sobre o que a pessoa sente. O efeito funciona mesmo quando ela não percebe a familiaridade que o gerou<sup class="cit"><a href="#f8">8</a></sup>. Isso cria uma assimetria desconfortável: uma sensação de gosto sem origem identificável, que a pessoa vai justificar com atributos do objeto. É por isso que marcas investem em presença visual repetida e em argumentos. E é por isso que um slogan chato pode virar preferido. A repetição faz o trabalho antes que a pessoa decida se gosta.</p><p>Para quem estuda marketing, a leitura útil é que a exposição não persuade. Ela prepara o terreno para que a persuasão funcione. O modelo de dois passos, reação afetiva rápida seguida de processamento controlado, dá o roteiro: primeiro a pessoa sente que gosta, depois procura os motivos<sup class="cit"><a href="#f13">13</a></sup>. Cabe a quem comunica fornecer os motivos antes que ela invente outros.</p>
` }

},

sintese: {
 "definicoes": [
  {
   "termo": "Efeito de mera exposição",
   "def": "A simples repetição de um estímulo faz a pessoa gostar mais dele, sem reforço, prêmio ou argumento."
  },
  {
   "termo": "Fluência perceptiva",
   "def": "A facilidade com que o cérebro processa um estímulo. Ver algo já visto custa menos esforço do que ver algo novo."
  },
  {
   "termo": "Primazia afetiva",
   "def": "Hipótese de Zajonc segundo a qual reações afetivas podem ser despertadas com uma quantidade mínima de informação."
  },
  {
   "termo": "Pré-atitudinais",
   "def": "Tendências de aproximação criadas pela repetição que não exigem o processamento deliberado que forma uma atitude de marca."
  },
  {
   "termo": "Curva em U invertido",
   "def": "O gosto sobe com a repetição, atinge um topo e depois desce, com pico entre 10 e 20 apresentações."
  },
  {
   "termo": "Músculo zigomático",
   "def": "Músculo que puxa o canto da boca para cima. Sua atividade aumenta diante de rostos familiares."
  }
 ],
 "lembrar": [
  "A repetição de um estímulo faz a pessoa gostar mais dele sem que ela perceba a familiaridade que gerou o gosto.",
  "A explicação mais aceita junta fluência perceptiva e interpretação dessa facilidade como sensação boa.",
  "O efeito atinge o máximo entre 10 e 20 apresentações e depois pode cair por causa do tédio.",
  "Familiaridade vira afeição quando o ponto de partida é neutro. Quando é hostil, pode amplificar a hostilidade.",
  "O efeito age onde a opinião ainda não está formada. Estímulos já muito bons ou ruins não mudam com repetição.",
  "Em propaganda, a exposição ajuda mais quando o produto ou a empresa é novo e desconhecido."
 ],
 "confusoes": [
  {
   "erro": "Achar que o efeito depende de a pessoa sentir que o estímulo é familiar.",
   "correcao": "O aumento de preferência não depende das impressões subjetivas de familiaridade. O efeito funciona mesmo sem a pessoa perceber a familiaridade."
  },
  {
   "erro": "Pensar que reconhecer conscientemente o estímulo reduz o efeito.",
   "correcao": "O modelo de atribuição previa isso, mas os experimentos encontraram o contrário: o efeito só apareceu quando o reconhecimento estava no nível mais alto."
  },
  {
   "erro": "Supor que mais exposição sempre melhora a avaliação.",
   "correcao": "Passado o pico entre 10 e 20 apresentações, a preferência pode cair por tédio. Repetir demais também pode reunir associações negativas."
  },
  {
   "erro": "Acreditar que a repetição corrige julgamentos negativos.",
   "correcao": "O efeito amplifica o ponto de partida. Quem já odiava alguém passa a odiar mais com mais exposição."
  },
  {
   "erro": "Tratar o efeito como persuasão.",
   "correcao": "A exposição não persuade. Ela prepara o terreno. A pessoa primeiro sente que gosta e depois procura motivos."
  }
 ],
 "numeros": [
  "Uma metanálise de 208 experimentos encontrou tamanho de efeito r = 0,26.",
  "O efeito costuma atingir o máximo entre 10 e 20 apresentações.",
  "Bornstein e D'Agostino compararam estímulos apresentados por 5 milésimos de segundo com os mostrados por 500 milésimos.",
  "Montoya e colegas examinaram 268 curvas de 81 artigos e confirmaram a curva em U invertido."
 ]
},

flashcards: [
 {
  "f": "O que é o efeito de mera exposição?",
  "v": "É a tendência de gostar mais de um estímulo só porque ele foi repetido. Não precisa de prêmio, reforço ou argumento."
 },
 {
  "f": "O que é fluência perceptiva?",
  "v": "É a facilidade com que o cérebro processa um estímulo já visto. Ver algo já visto custa menos esforço do que ver algo novo."
 },
 {
  "f": "Como a fluência perceptiva vira gosto?",
  "v": "A pessoa interpreta a facilidade de processar como uma sensação boa. Ela não sente que processou mais rápido, sente que gostou."
 },
 {
  "f": "O efeito funciona mesmo sem a pessoa perceber o estímulo?",
  "v": "Sim. Imagens mostradas por tempo curto demais para serem percebidas produziram efeitos maiores do que as vistas com consciência."
 },
 {
  "f": "Em que ponto a repetição para de ajudar?",
  "v": "O gosto atinge o máximo entre 10 e 20 apresentações. Depois pode cair, porque o tédio entra em cena."
 },
 {
  "f": "O que acontece quando a pessoa já odeia o estímulo?",
  "v": "Mais exposição a faz odiar ainda mais. Familiaridade vira afeição quando o ponto de partida é neutro, mas amplifica a hostilidade quando é hostil."
 },
 {
  "f": "O efeito muda estímulos já muito agradáveis ou desagradáveis?",
  "v": "Não. Em odores, apenas os neutros e os levemente agradáveis ficaram mais agradáveis com a repetição."
 },
 {
  "f": "Reconhecer o estímulo reduz o efeito?",
  "v": "Os experimentos mostraram o contrário. O efeito só apareceu quando o reconhecimento estava no nível mais alto, e gosto e reconhecimento caminharam juntos."
 },
 {
  "f": "O que a atividade do músculo zigomático mostra?",
  "v": "Rostos familiares foram avaliados como mais simpáticos e evocaram mais atividade nesse músculo do que os novos. A repetição mexe com afeto, não só com memória."
 },
 {
  "f": "O efeito é exclusivo dos seres humanos?",
  "v": "Não. Filhotes de galinha ainda dentro do ovo, depois de nascer, escolheram o tom que ouviram antes de sair do ovo."
 },
 {
  "f": "A repetição sempre melhora a reputação de uma empresa?",
  "v": "Não. Níveis mais altos de exposição na mídia podem se associar a reputações piores, porque trazem associações boas e ruins."
 },
 {
  "f": "Qual a recomendação prática para propaganda?",
  "v": "Concentrar repetição em produtos novos e desconhecidos, onde há espaço para o gosto subir. A exposição prepara o terreno para a persuasão."
 }
],

prova: [
 {
  "camada": "nucleo",
  "q": "O que define o efeito de mera exposição?",
  "alts": [
   "A simples repetição de um estímulo faz a pessoa gostar mais dele, sem reforço nem argumento.",
   "A pessoa gosta mais de um estímulo depois de receber um prêmio por ele.",
   "A repetição faz a pessoa lembrar melhor do estímulo e por isso avaliá-lo melhor.",
   "A exposição repetida muda a opinião da pessoa por meio de argumentos persuasivos."
  ],
  "correta": 0,
  "porque": "O efeito não precisa de reforço, prêmio ou argumento. A alternativa C confunde o efeito com memória, mas o aumento de preferência não depende da lembrança consciente."
 },
 {
  "camada": "nucleo",
  "q": "Como a explicação mais aceita descreve o mecanismo do efeito?",
  "alts": [
   "A repetição aumenta a fluência perceptiva e essa facilidade é interpretada como sensação boa.",
   "A repetição faz o cérebro criar uma memória consciente forte que vira preferência.",
   "A repetição reduz o tédio e por isso o estímulo parece mais agradável.",
   "A repetição ativa o sistema de recompensa por meio de prêmios associados ao estímulo."
  ],
  "correta": 0,
  "porque": "A pessoa sente a facilidade de processar e a atribui ao objeto, sem perceber que ela vem da repetição. A alternativa A erra ao colocar a memória consciente como motor, que é justamente o que os experimentos não confirmaram."
 },
 {
  "camada": "nucleo",
  "q": "Em que faixa de repetições o gosto costuma atingir o máximo?",
  "alts": [
   "Entre 2 e 5 apresentações.",
   "Entre 10 e 20 apresentações.",
   "Entre 50 e 100 apresentações.",
   "O gosto sobe indefinidamente com a repetição."
  ],
  "correta": 1,
  "porque": "O pico fica entre 10 e 20 apresentações e depois pode cair, porque o tédio entra em cena. A alternativa D ignora a curva em U invertido confirmada pelas metanálises."
 },
 {
  "camada": "nucleo",
  "q": "O que acontece quando os participantes já odiavam alguém antes de mais exposição?",
  "alts": [
   "Passam a gostar da pessoa, porque a familiaridade corrige o julgamento.",
   "Ficam indiferentes, porque a exposição só age em estímulos neutros.",
   "Passam a odiar a pessoa ainda mais.",
   "Mudam de opinião apenas se receberem informação positiva sobre ela."
  ],
  "correta": 2,
  "porque": "A familiaridade vira afeição quando o ponto de partida é neutro, mas amplifica a hostilidade quando o ponto de partida é hostil. A alternativa A trata o efeito como corretor de julgamentos, o que ele não é."
 },
 {
  "camada": "nucleo",
  "q": "O efeito de mera exposição exige que a pessoa sinta familiaridade?",
  "alts": [
   "Sim, a sensação subjetiva de familiaridade é o motor do efeito.",
   "Não, o aumento de preferência não depende das impressões subjetivas de familiaridade.",
   "Sim, mas apenas para estímulos visuais.",
   "Não, porque o efeito só aparece com estímulos que a pessoa nunca viu."
  ],
  "correta": 1,
  "porque": "Os resultados mostraram que o aumento de preferência não dependia das impressões subjetivas de familiaridade dos participantes. A alternativa A descreve a hipótese do calor diante do familiar, que caiu."
 },
 {
  "camada": "nucleo",
  "q": "O que os experimentos com odores mostraram sobre o efeito?",
  "alts": [
   "Todos os odores ficaram mais agradáveis com a repetição.",
   "Apenas os odores neutros e os levemente agradáveis ficaram mais agradáveis.",
   "Os odores desagradáveis ficaram agradáveis com muita repetição.",
   "Os odores muito agradáveis ficaram ainda melhores com a repetição."
  ],
  "correta": 1,
  "porque": "O efeito parece agir onde a opinião ainda não está formada. Estímulos já muito bons ou ruins não mudaram, o que derruba a alternativa A."
 },
 {
  "camada": "aprofundamento",
  "q": "O que a hipótese da primazia afetiva de Zajonc propõe?",
  "alts": [
   "Que reações afetivas podem ser despertadas com uma quantidade mínima de informação.",
   "Que o afeto sempre precisa de inferência cognitiva antes de aparecer.",
   "Que a memória consciente é a base de toda preferência.",
   "Que o reconhecimento do estímulo reduz o efeito de exposição."
  ],
  "correta": 0,
  "porque": "Zajonc apostou que o gosto não precisa de pensamento antes. A alternativa A contradiz essa hipótese ao exigir inferência cognitiva prévia."
 },
 {
  "camada": "aprofundamento",
  "q": "O que as lesões cerebrais em macacos mostraram sobre afeto e memória?",
  "alts": [
   "Lesões na amígdala prejudicam o funcionamento afetivo e lesões no hipocampo preservam os processos cognitivos.",
   "Lesões na amígdala e no hipocampo afetam igualmente afeto e memória.",
   "Lesões no hipocampo prejudicam o afeto e lesões na amígdala preservam a memória.",
   "Lesões na amígdala prejudicam o afeto, e lesões no hipocampo fazem o inverso, preservando o afeto."
  ],
  "correta": 3,
  "porque": "Zola-Morgan mostrou que lesões na amígdala prejudicam o afeto mas preservam a cognição, e lesões no hipocampo fazem o inverso. A alternativa A troca os efeitos das duas estruturas."
 },
 {
  "camada": "extensao",
  "q": "Qual a leitura útil do efeito para quem trabalha com comunicação?",
  "alts": [
   "A exposição persuade diretamente e substitui a necessidade de argumentos.",
   "A exposição prepara o terreno para a persuasão, e a pessoa primeiro sente que gosta, depois procura motivos.",
   "A repetição sempre melhora a reputação, mesmo em níveis altos.",
   "A repetição só funciona para produtos já conhecidos pelo público."
  ],
  "correta": 1,
  "porque": "O modelo de dois passos orienta fornecer os motivos antes que a pessoa invente outros. A alternativa A trata a exposição como persuasão, papel que ela não cumpre."
 },
 {
  "camada": "extensao",
  "q": "O que a evidência sugere sobre a exposição entre grupos com atitudes negativas?",
  "alts": [
   "A exposição sempre melhora as relações entre os grupos.",
   "A exposição não tem nenhum efeito sobre relações entre grupos.",
   "Quando os grupos já têm atitudes negativas, mais exposição pode aumentar a hostilidade.",
   "A exposição só funciona se houver prêmio para os grupos."
  ],
  "correta": 2,
  "porque": "Os resultados são mistos, e o efeito amplifica o ponto de partida em vez de corrigir julgamentos. A alternativa A ignora esse caráter de amplificador."
 }
],

fontes: [
 {
  "n": 1,
  "tipo": "enciclopédia",
  "ref": "Wikipédia (inglês), verbete 'Mere-exposure effect'. Consultado em 27/09/2026.",
  "url": "https://en.wikipedia.org/wiki/Mere-exposure_effect"
 },
 {
  "n": 2,
  "tipo": "artigo",
  "ref": "Robert F. Bornstein, Paul R. D’Agostino. 'The Attribution and Discounting of Perceptual Fluency: Preliminary Tests of a Perceptual Fluency/Attributional Model of the Mere Exposure Effect'. <em>Social Cognition</em>, 1994.",
  "url": "https://doi.org/10.1521/soco.1994.12.2.103"
 },
 {
  "n": 3,
  "tipo": "artigo",
  "ref": "Robert F. Bornstein, Paul R. D’Agostino. 'Stimulus recognition and the mere exposure effect.'. <em>Journal of Personality and Social Psychology</em>, 1992.",
  "url": "https://doi.org/10.1037//0022-3514.63.4.545"
 },
 {
  "n": 4,
  "tipo": "artigo",
  "ref": "Robert F. Bornstein, Amy R. Kale, Karen R. Cornell. 'Boredom as a limiting condition on the mere exposure effect.'. <em>Journal of Personality and Social Psychology</em>, 1990.",
  "url": "https://doi.org/10.1037/0022-3514.58.5.791"
 },
 {
  "n": 5,
  "tipo": "artigo",
  "ref": "Sylvain Delplanque, Géraldine Coppin, Laurène Bloesch, Isabelle Cayeux et al.. 'The mere exposure effect depends on an odor’s initial pleasantness'. <em>Frontiers in Psychology</em>, 2015.",
  "url": "https://doi.org/10.3389/fpsyg.2015.00920"
 },
 {
  "n": 6,
  "tipo": "artigo",
  "ref": "Ben Rhodri Newell, David R. Shanks. 'Recognising what you like: Examining the relation between the mere-exposure effect and recognition'. <em>The European Journal of Cognitive Psychology</em>, 2006.",
  "url": "https://doi.org/10.1080/09541440500487454"
 },
 {
  "n": 7,
  "tipo": "artigo",
  "ref": "Tom Stafford, Anthony Grimes. 'Memory Enhances the Mere Exposure Effect'. <em>Psychology and Marketing</em>, 2012.",
  "url": "https://doi.org/10.1002/mar.20581"
 },
 {
  "n": 8,
  "tipo": "artigo",
  "ref": "Jochim Hansen, Michaela Wänke. 'Liking What's Familiar: The Importance of Unconscious Familiarity in the Mere-Exposure Effect'. <em>Social Cognition</em>, 2009.",
  "url": "https://doi.org/10.1521/soco.2009.27.2.161"
 },
 {
  "n": 9,
  "tipo": "artigo",
  "ref": "Eddie Harmon‐Jones, John J. B. Allen. 'The Role of Affect in the Mere Exposure Effect: Evidence from Psychophysiological and Individual Differences Approaches'. <em>Personality and Social Psychology Bulletin</em>, 2001.",
  "url": "https://doi.org/10.1177/0146167201277011"
 },
 {
  "n": 10,
  "tipo": "artigo",
  "ref": "R. Matthew Montoya, Robert S. Horton, Jack L. Vevea, Martyna Citkowicz et al.. 'A re-examination of the mere exposure effect: The influence of repeated exposure on recognition, familiarity, and liking.'. <em>Psychological Bulletin</em>, 2017.",
  "url": "https://doi.org/10.1037/bul0000085"
 },
 {
  "n": 11,
  "tipo": "artigo",
  "ref": "Xiang Fang, Surendra Singh, Rohini Ahluwalia. 'An Examination of Different Explanations for the Mere Exposure Effect'. <em>Journal of Consumer Research</em>, 2007.",
  "url": "https://doi.org/10.1086/513050"
 },
 {
  "n": 12,
  "tipo": "artigo",
  "ref": "Angela Yuson Lee. 'The Mere Exposure Effect: An Uncertainty Reduction Explanation Revisited'. <em>Personality and Social Psychology Bulletin</em>, 2001.",
  "url": "https://doi.org/10.1177/01461672012710002"
 },
 {
  "n": 13,
  "tipo": "capítulo",
  "ref": "Robert F. Bornstein, Catherine Craver-Lemley. 'Mere exposure effect'. 2022.",
  "url": "https://doi.org/10.4324/9781003154730-18"
 }
],

fronteira: [{"tema": "Mera exposição e relações entre grupos", "html": "<p>Se a exposição repetida pode melhorar relações entre grupos que já se veem com hostilidade é uma questão em aberto. Os resultados são mistos: em alguns casos a exposição adicional aumenta a hostilidade em vez de reduzi-la<sup class=\"cit\"><a href=\"#f1\">1</a></sup>. Ainda não está claro em que condições o efeito vira aproximação e em que condições vira rejeição.</p>"}, {"tema": "Existe um nível ótimo de exposição publicitária?", "html": "<p>Uma revisão da pesquisa sobre propaganda concluiu que talvez não exista um nível ótimo de exposição, e que níveis mais altos de exposição na mídia se associam a reputações piores para as empresas, mesmo quando a exposição é positiva<sup class=\"cit\"><a href=\"#f1\">1</a></sup>. É uma linha de investigação em andamento, não um resultado fechado, e depende do tipo de produto e do contexto.</p>"}],

fotos: [{"n": 3, "arquivo": "img/c/mera-exposicao/3.webp", "legenda": "Pintinhos recém-nascidos em uma incubadora com ovos.", "alt": "Vários pintinhos recém-nascidos entre ovos em uma incubadora", "autor": "Otwarte Klatki", "licenca": "CC BY 2.0", "pagina": "https://commons.wikimedia.org/wiki/File:Newly-hatched_chickens.jpg", "gif": false, "w": 800, "h": 623}, {"n": 4, "arquivo": "img/c/mera-exposicao/4.webp", "legenda": "Exemplo de banner publicitário exibido em páginas de sites na internet.", "alt": "Banner publicitário vertical da Wikipedia em um site.", "autor": "autor desconhecido", "licenca": "CC BY-SA 3.0", "pagina": "https://commons.wikimedia.org/wiki/File:Wikipedia_anzeige2c_en.jpg", "gif": false, "w": 795, "h": 3500}],
};
