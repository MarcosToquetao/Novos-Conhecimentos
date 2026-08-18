CONTEUDOS["cascata-trofica"] = {
termo: "Cascata trófica",
area: "Sustentabilidade",
subtitulo: "Um vídeo de cinco minutos sobre os lobos de Yellowstone tem mais de 43 milhões de visualizações e é hoje a explicação mais popular do que é uma cascata trófica. O conceito por trás dele é real e bem estabelecido. A história específica dos lobos, dos rios e dos castores é bem mais disputada do que o vídeo deixa entender, inclusive em artigos publicados em 2025 e 2026.",
prerequisitos: [
  "Nenhum pré-requisito técnico. Basta aceitar que espécies de uma cadeia alimentar interagem entre si.",
  "Para o aprofundamento: alguma familiaridade com a ideia de desenho experimental antes-depois e com a diferença entre correlação temporal e mecanismo demonstrado."
],
conexoes: [
  { termo: "Micorrizas e a rede subterrânea das árvores", relacao: "Outro caso em que uma metáfora ecológica virou fenômeno viral e depois recebeu uma revisão crítica dura na literatura, sem que a simbiose de base deixasse de ser real." },
  { termo: "Efeito Dunning-Kruger", relacao: "Outro conceito em que a versão que circula popularmente ultrapassa bastante o que os dados originais sustentam, e em que a crítica metodológica posterior encolheu o efeito sem eliminá-lo." },
  { termo: "Crise de replicação", relacao: "O caso Yellowstone mostra o mesmo padrão de fundo: um resultado inicial chamativo, réplicas e reanálises que o questionam, e uma reconciliação parcial que é mais modesta que a versão popular." },
  { termo: "Espécie-chave (keystone species)", relacao: "Cascata trófica e espécie-chave são conceitos vizinhos, mas não idênticos: uma espécie pode ser chave para a estrutura de um ecossistema sem que o mecanismo específico seja uma cascata de três níveis bem demonstrada." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Existe um vídeo chamado "How Wolves Change Rivers", com narração do jornalista George Monbiot sobre uma fala dele no TED, que já passou de 43 milhões de visualizações desde que foi publicado em fevereiro de 2014.<sup class="cit"><a href="#f3">3</a></sup> A história que ele conta: lobos foram reintroduzidos em Yellowstone em 1995, depois de 70 anos ausentes. Os lobos reduziram e amedrontaram os cervos-canadenses (elks), que pararam de pastar sem parar nas margens dos rios. As árvores voltaram a crescer. Os castores voltaram, construíram represas, e as represas mudaram o curso físico dos rios. Uma reintrodução de predador teria reorganizado uma paisagem inteira, até a geografia dela.</p>

<p>É uma história bonita, e parte dela é real. Só que a parte mais espetacular, a de que o medo dos lobos por si só mudou o comportamento dos cervos-canadenses o suficiente para salvar as árvores e desviar rios, é hoje uma das afirmações mais contestadas da ecologia, com artigos publicados discutindo isso ainda em 2025 e 2026.</p>

<h3>O conceito em si é sólido</h3>

<p>Antes de entrar na parte disputada, vale separar o que está por trás da história: o conceito de <strong>cascata trófica</strong>. Uma cadeia alimentar tem níveis, os chamados níveis tróficos: plantas, herbívoros que comem plantas, predadores que comem herbívoros. Uma cascata trófica acontece quando uma mudança num nível (normalmente a chegada ou o sumiço de um predador de topo) se propaga por pelo menos dois níveis abaixo dele, mudando também a quantidade de plantas.</p>

<p>O exemplo mais bem documentado da ciência não envolve lobos. Envolve lontras-marinhas, ouriços-do-mar e florestas de kelp (um tipo de alga gigante) na costa do Alasca. James Estes e John Palmisano compararam ilhas com e sem lontras-marinhas em 1974 e encontraram um padrão limpo: onde havia lontra, havia poucos ouriços e florestas de kelp densas; onde a lontra tinha sido caçada até sumir, os ouriços se multiplicavam sem controle e destruíam o kelp.<sup class="cit"><a href="#f2">2</a></sup> A lontra come ouriço, o ouriço come kelp, tirar a lontra da equação libera o ouriço para devastar a base da cadeia. Esse é o exemplo de referência que qualquer ecólogo usa para explicar cascata trófica, porque a comparação é direta e o mecanismo (lontra come ouriço) é fácil de observar.</p>

<div class="marca consenso">
<span class="rot">O que é consenso científico</span>
<p>Cascatas tróficas existem e já foram demonstradas de forma robusta em vários sistemas, do caso clássico das lontras-marinhas no Alasca a experimentos controlados em lagos e recifes. A própria ideia de que predadores de topo mantêm um mundo "verde", ou seja, evitam que herbívoros comam toda a vegetação disponível, é uma hipótese central da ecologia desde 1960, proposta por Nelson Hairston, Frederick Smith e Lawrence Slobodkin.<sup class="cit"><a href="#f1">1</a></sup> Isso não está em disputa.</p>
</div>

<h3>Onde a história de Yellowstone complica</h3>

<p>O problema não é se lobos podem, em princípio, desencadear uma cascata trófica. É se foi exatamente isso, e apenas isso, que aconteceu em Yellowstone, e se o mecanismo foi o medo mudando o comportamento dos cervos, como o vídeo sugere.</p>

<p>Pesquisadores que foram medir isso diretamente encontraram complicações logo de início. Um estudo de 2010 testou especificamente se os choupos-tremedores (aspens, uma árvore central na história) cresciam mais em áreas onde os cervos corriam mais risco de encontrar lobos. Não encontraram esse padrão: os choupos continuavam sendo comidos praticamente do mesmo jeito, independente do risco de predação do local, e não estavam se recuperando de forma consistente, mesmo com lobos de volta havia 15 anos.<sup class="cit"><a href="#f5">5</a></sup></p>

<p>Outro estudo, de 2013, tentou medir diretamente o quanto os cervos realmente encontravam lobos no dia a dia. Mesmo nas áreas de maior risco, um cervo cruzava com um lobo a uma distância de risco em média uma vez a cada nove dias. E, apesar de uma variação de 20 vezes na frequência desses encontros entre indivíduos, isso não tinha relação nenhuma com a quantidade de gordura corporal ou com a taxa de gravidez dos cervos.<sup class="cit"><a href="#f6">6</a></sup> Se o medo dos lobos estivesse mudando a fisiologia dos cervos na escala que a história popular sugere, esperaria-se ver esse efeito, e ele não apareceu.</p>

<div class="marca controverso">
<span class="rot">O que está em disputa</span>
<p>Ninguém discute que lobos voltaram a Yellowstone em 1995 e 1996, que a população de cervos-canadenses caiu bastante desde então, e que em algumas áreas a vegetação ribeirinha (salgueiros, choupos-tremedores) se recuperou. O que está em disputa, entre ecólogos que estudam o mesmo parque com métodos diferentes, é o mecanismo (foi o medo mudando o comportamento dos cervos, ou simplesmente menos cervos no total?) e principalmente a magnitude: o quanto essa recuperação de fato aconteceu, e se ela é tão grande quanto os artigos mais citados afirmam.</p>
</div>

<h3>O que realmente parece ter acontecido</h3>

<p>A leitura que ganhou mais força entre pesquisadores que reanalisaram o caso é mais chata do que a história do vídeo, mas mais bem sustentada: o que mudou a vegetação não foi principalmente o medo dos cervos mudando de comportamento. Foi que existiam bem menos cervos no total, por causa da soma de vários predadores (lobos, ursos, pumas) e da caça humana, não só dos lobos sozinhos.<sup class="cit"><a href="#f9">9</a></sup> Isso é uma cascata trófica de verdade, mas por um caminho mais simples (menos bocas comendo folha) do que "os cervos ficaram com medo e mudaram de hábito".</p>

<h3>Como ler uma história de "espécie salvou o ecossistema"</h3>

<p>Esse padrão se repete em várias histórias populares de conservação, e vale guardar três perguntas para testar qualquer uma delas. Existe uma comparação de verdade, com um "antes" e um "depois" medidos, e de preferência uma área de controle sem a intervenção? O que exatamente mudou: o número de indivíduos de uma espécie, ou o comportamento dela? E o achado inicial sobreviveu quando outras equipes, com outros métodos, tentaram medir a mesma coisa de novo? No caso de Yellowstone, a resposta muda a cada década desde 1995, o que por si só já é uma informação importante: histórias de ecologia complexa raramente se resolvem numa publicação só.</p>
` },

aprofundamento: { minutos: 30, html: `
<h3>Vocabulário técnico: dois caminhos para o mesmo efeito final</h3>

<p>A discussão sobre Yellowstone gira em torno de uma distinção precisa, que vale entender porque ela aparece em qualquer debate sobre efeitos indiretos de predadores. Um predador pode afetar uma planta por dois caminhos diferentes, que produzem o mesmo resultado final (menos herbivoria) por mecanismos distintos:</p>

<ul>
<li><strong>Efeito mediado por densidade (density-mediated indirect effect, DMIE):</strong> o predador mata herbívoros, existem menos herbívoros, e por isso menos planta é comida. É contagem simples.</li>
<li><strong>Efeito mediado por traço, ou "paisagem do medo" (trait-mediated indirect effect, TMIE, também chamado de cascata trófica mediada comportamentalmente, BMTC): o predador não precisa matar ninguém. A simples presença dele muda onde e como os herbívoros se comportam (ficam mais alertas, evitam certas áreas, comem menos em locais arriscados), e essa mudança de comportamento por si só já reduz a herbivoria.</li>
</ul>

<p>O vídeo de Monbiot conta essencialmente a versão TMIE: o medo, sozinho, teria bastado. A literatura científica desde 2010 tem insistido em separar essa hipótese específica da explicação mais simples de contagem populacional.</p>

<div class="tabela-env">
<table>
<thead><tr><th>Ano</th><th>Estudo</th><th>O que fez</th><th>O que encontrou</th></tr></thead>
<tbody>
<tr><td>1995 a 1996</td><td>Reintrodução</td><td>31 lobos soltos em Yellowstone: 14 de Alberta em 1995, 17 da Colúmbia Britânica em 1996</td><td>Primeira população reprodutiva de lobos no parque em quase 70 anos</td></tr>
<tr><td>2004 a 2012</td><td>Ripple &amp; Beschta</td><td>Séries de artigos propondo a "paisagem do medo" como mecanismo central</td><td>Correlação entre presença de lobos, mudança no comportamento dos cervos e recuperação de choupos e salgueiros<sup class="cit"><a href="#f4">4</a></sup></td></tr>
<tr><td>2010</td><td>Kauffman, Brodie &amp; Jules</td><td>Testou diretamente se choupos cresciam mais em locais de maior risco de predação</td><td>Sem relação clara entre risco e recuperação; choupos ainda não se recuperavam de forma consistente<sup class="cit"><a href="#f5">5</a></sup></td></tr>
<tr><td>2013</td><td>Middleton e colegas</td><td>Rastreou lobos e cervos simultaneamente por GPS, mediu gordura corporal e gravidez</td><td>Encontros raros (1 a cada 9 dias em média) e sem efeito detectável sobre condição física dos cervos<sup class="cit"><a href="#f6">6</a></sup></td></tr>
<tr><td>2011 a 2014</td><td>Baril e colegas; Christianson &amp; Creel</td><td>Mediu colônias de castor e recrutamento de cervos ao longo de duas décadas</td><td>Colônias de castor subiram de 1 para 12 entre 1996 e 2009<sup class="cit"><a href="#f8">8</a></sup>; recrutamento de cervos caiu 35% onde os lobos se estabeleceram<sup class="cit"><a href="#f7">7</a></sup></td></tr>
<tr><td>2024</td><td>Brice, Larsen, Stahler &amp; MacNulty</td><td>Reanalisou décadas de dados de choupos, cervos e predadores juntos</td><td>O motor principal foi a queda no número total de cervos (efeito de densidade), não o medo mudando o comportamento deles<sup class="cit"><a href="#f9">9</a></sup></td></tr>
</tbody>
</table>
</div>

<h3>O papel dos outros predadores, e da caça</h3>

<p>Um ponto que a história popular quase sempre deixa de fora: os lobos nunca foram os únicos predadores relevantes de cervos-canadenses jovens em Yellowstone. Ursos-pardos, ursos-negros e pumas também predam bastante filhotes de cervo, e a caça esportiva fora dos limites do parque também remove uma parte do rebanho todo inverno. O estudo de Christianson e Creel, usando dados de 33 anos em doze subpopulações diferentes de cervo, estimou que, mesmo supondo que toda a mortalidade por predação fosse aditiva (ou seja, que nenhum desses cervos morreria de outra causa de qualquer forma), a predação por lobos sozinha explicaria no máximo 52% da queda observada na razão entre filhotes e fêmeas adultas.<sup class="cit"><a href="#f7">7</a></sup> A conta não fecha só com lobo.</p>

<div class="marca emergente">
<span class="rot">A síntese que vem se firmando</span>
<p>Juntando Kauffman (2010), Middleton (2013) e a reanálise de Brice, Larsen, Stahler e MacNulty (2024), o quadro que emerge é: existe, sim, uma cascata trófica ligada à volta dos lobos, mas o motor principal é a queda no número absoluto de cervos-canadenses, resultado da soma de vários predadores e da caça, não um efeito comportamental de medo funcionando sozinho. O "landscape of fear" pode contribuir um pouco, mas a evidência direta de que ele seja o motor principal é fraca, apesar de ter sido a explicação mais divulgada por mais de uma década.<sup class="cit"><a href="#f9">9</a></sup></p>
</div>

<h3>O que de fato mudou, sem disputa sobre a direção</h3>

<p>Vale separar o que é medido com razoável confiança (a direção da mudança) do que é disputado (a força exata da mudança e o mecanismo). O censo de inverno da população de cervos-canadenses na parte norte do parque caiu de 19.045 animais em 1994, ano anterior à soltura dos lobos, para uma mínima de 3.915 em 2013.<sup class="cit"><a href="#f17">17</a></sup> O número de colônias de castor na mesma região subiu de 1 em 1996 para 12 em 2009, à medida que salgueiros voltaram a crescer o suficiente para servir de alimento e material de construção.<sup class="cit"><a href="#f8">8</a></sup> Essas duas direções (menos cervo, mais castor) não são contestadas. O que é contestado é o quanto disso é atribuível especificamente aos lobos, versus a outros predadores, à caça e a mudanças climáticas que também afetam o crescimento de salgueiro e choupo de forma independente.</p>
` },

extensao: { minutos: 60, html: `
<h3>A disputa mais recente: dois artigos de 2025 discordando sobre o mesmo parque</h3>

<p>Se alguém espera que "a ciência já resolveu isso", vale registrar que, enquanto este texto era escrito, o debate seguia ativo em tempo real, com respostas publicadas em 2025 e 2026. Isso não é sinal de que a ecologia é uma ciência fraca. É o processo normal de uma disciplina que estuda sistemas grandes e lentos, em que um único parque nacional não pode ser repetido em laboratório.</p>

<p>Em 2025, Luke Painter, Robert Beschta e William Ripple, os mesmos autores que popularizaram a hipótese da "paisagem do medo", publicaram um novo levantamento da estrutura dos choupos-tremedores em Yellowstone, relatando um aumento de 152 vezes na densidade de mudas de choupo desde a reintrodução dos lobos, um número apresentado como evidência de uma cascata trófica excepcionalmente forte.<sup class="cit"><a href="#f10">10</a></sup></p>

<p>Uma equipe liderada por Daniel MacNulty, da Utah State University, publicou um comentário direto sobre esse artigo. Segundo eles, o cálculo da densidade de base (o "antes" da comparação) estava equivocado, o que inflava artificialmente a razão relatada: a razão real de aumento, recalculada, seria de cerca de 17,5 vezes, não 152 vezes. Além disso, apontaram que o estudo tratou medições repetidas dos mesmos trechos de floresta como se fossem amostras independentes, o que infla os tamanhos de efeito relatados em 30% a 40%.<sup class="cit"><a href="#f11">11</a></sup> Painter, Beschta e Ripple responderam defendendo a validade da conclusão original, num artigo intitulado, sem meias palavras, como resposta ao comentário.</p>

<h3>Uma segunda disputa em paralelo, sobre os salgueiros</h3>

<p>Ao mesmo tempo, um estudo separado, com dados de 20 anos (2001 a 2020) sobre o volume de copa dos salgueiros ribeirinhos, relatou um aumento médio de aproximadamente 1.500% no volume de copa, com uma razão logarítmica (log10) de 1,21, valor que os autores compararam a uma meta-análise global de cascatas tróficas em vários ecossistemas do planeta, posicionando Yellowstone entre os 18% mais fortes do mundo em magnitude de cascata.<sup class="cit"><a href="#f12">12</a></sup> Outro grupo de pesquisadores publicou um comentário argumentando que a evidência sustenta a existência de uma cascata trófica em Yellowstone, mas não sustenta a magnitude relatada, apontando problemas de análise estatística semelhantes aos do caso dos choupos.<sup class="cit"><a href="#f13">13</a></sup></p>

<div class="marca controverso">
<span class="rot">Por que registrar uma disputa sem resolução</span>
<p>Duas equipes de ecólogos respeitados, estudando o mesmo parque com dados em parte sobrepostos, chegaram a estimativas de magnitude que diferem por um fator de quase dez (152 vezes contra 17,5 vezes, no caso dos choupos). Isso não significa que um lado está mentindo. Mostra como decisões de análise estatística, aparentemente técnicas (como contar uma medição repetida do mesmo local, ou como calcular uma linha de base), podem mudar drasticamente o tamanho de um efeito relatado. A pessoa que só assistiu ao vídeo de 2014 não tem como saber que esse debate de magnitude segue em aberto onze anos depois.</p>
</div>

<h3>Por que a versão popular resiste tão bem</h3>

<p>Vale nomear por que a história do vídeo continua sendo repetida quase sem qualificação, mais de uma década depois das primeiras críticas técnicas. Ela é visualmente satisfatória (rios mudando de curso por causa de um predador), moralmente clara (reintroduzir uma espécie é bom e conserta um erro humano anterior) e curta o suficiente para caber num vídeo de cinco minutos. Nenhuma dessas três qualidades tem relação com o quanto a afirmação central é sustentada pelos dados. A crítica de Kauffman é de 2010, a de Middleton é de 2013, e o vídeo, publicado em 2014, já nasceu depois das duas, sem incorporá-las.</p>

<p>Isso também tem uma consequência prática fora da ecologia pura: a história de Yellowstone é usada com frequência como argumento a favor de reintroduções de grandes predadores em outros lugares do mundo, da Escócia à América do Sul. Se o mecanismo real é principalmente "menos herbívoros no total", e não "efeito comportamental do medo", a expectativa sobre o que uma reintrodução específica vai realmente produzir em outro ecossistema, com outra densidade de predadores concorrentes e outra pressão de caça, deveria ser mais modesta e mais dependente do contexto local do que o vídeo sugere.</p>

<h3>O que ainda não se sabe</h3>

<p>Não existe, até o momento, um estudo experimental controlado que isole completamente o efeito de densidade do efeito comportamental em Yellowstone, porque não é possível remover lobos de metade do parque como controle depois que a reintrodução já aconteceu em escala real. O que existe são reanálises estatísticas cada vez mais sofisticadas dos mesmos dados de longo prazo, e esse tipo de disputa sobre magnitude, ao contrário de uma disputa sobre existência ou não do fenômeno, tende a ser resolvido devagar, ao longo de várias rodadas de comentário e réplica na literatura, exatamente como está acontecendo agora.</p>
` }
},

sintese: {
  definicoes: [
    { termo: "Cascata trófica", def: "Efeito indireto em que uma mudança num nível de uma cadeia alimentar (tipicamente a presença ou ausência de um predador de topo) se propaga por pelo menos dois níveis abaixo dele, alterando também a quantidade de vegetação." },
    { termo: "Hipótese do mundo verde", def: "Ideia proposta por Hairston, Smith e Slobodkin em 1960: o mundo é verde porque predadores controlam populações de herbívoros, que de outro modo consumiriam a vegetação disponível." },
    { termo: "Efeito mediado por densidade (DMIE)", def: "Mecanismo em que um predador reduz o número de indivíduos de uma presa (matando-os), e essa redução numérica, por si só, diminui o consumo total de plantas." },
    { termo: "Efeito mediado por traço, ou paisagem do medo (TMIE / BMTC)", def: "Mecanismo em que a simples presença de um predador muda o comportamento da presa (vigilância, uso do espaço), reduzindo o consumo de plantas sem necessariamente reduzir o número de indivíduos." },
    { termo: "Espécie-chave (keystone species)", def: "Espécie cujo papel ecológico é desproporcional ao seu tamanho populacional; conceito relacionado, mas distinto de cascata trófica, que se refere especificamente ao efeito propagado por três ou mais níveis da cadeia alimentar." }
  ],
  lembrar: [
    "O vídeo 'How Wolves Change Rivers' (2014), com mais de 43 milhões de visualizações, populariza a versão de que o medo dos cervos pelos lobos, sozinho, teria reorganizado a vegetação e até o curso dos rios de Yellowstone.",
    "O conceito de cascata trófica em si é bem estabelecido cientificamente, com o caso das lontras-marinhas, ouriços-do-mar e kelp no Alasca (Estes & Palmisano, 1974) como exemplo de referência, muito mais direto que o caso de Yellowstone.",
    "Estudos diretos (Kauffman et al., 2010; Middleton et al., 2013) não encontraram evidência forte de que o medo dos lobos, isoladamente, mudasse o comportamento dos cervos o suficiente para explicar a recuperação da vegetação.",
    "Uma reanálise de 2024 (Brice, Larsen, Stahler e MacNulty) concluiu que o motor principal foi a queda no número total de cervos, por causa de vários predadores e da caça combinados, não o efeito comportamental do medo.",
    "A população de cervos-canadenses na parte norte do parque caiu de 19.045 (1994) para uma mínima de 3.915 (2013). As colônias de castor subiram de 1 (1996) para 12 (2009). Essas duas direções não são disputadas.",
    "O que é disputado é a magnitude exata: artigos de 2025 chegaram a estimativas de recuperação de choupos-tremedores que diferem por um fator de quase dez (152 vezes contra 17,5 vezes), dependendo de decisões de análise estatística.",
    "Essa disputa sobre magnitude seguia ativa em 2025 e 2026, com comentários e réplicas publicados quase uma década depois das primeiras críticas ao mecanismo do medo."
  ],
  confusoes: [
    { erro: "O vídeo dos lobos é uma descrição fiel do consenso científico sobre Yellowstone", correcao: "O vídeo é de 2014 e conta a versão da 'paisagem do medo' sem incorporar as críticas metodológicas que já existiam desde 2010 (Kauffman et al.) e que se acumularam depois, inclusive reanálises de 2024 apontando outro mecanismo como principal." },
    { erro: "Os lobos foram o único fator por trás da queda na população de cervos-canadenses", correcao: "Ursos-pardos, ursos-negros, pumas e a caça esportiva fora do parque também predam ou removem cervos. Um estudo com 33 anos de dados estimou que a predação por lobos sozinha explica, no máximo, cerca de metade da queda observada no recrutamento de filhotes." },
    { erro: "Se a vegetação se recuperou depois da volta dos lobos, isso prova que foi o medo dos cervos que causou a recuperação", correcao: "Correlação temporal não distingue os dois mecanismos possíveis. É preciso medir diretamente se o comportamento dos cervos mudou em função do risco de predação, o que estudos específicos não confirmaram de forma robusta." },
    { erro: "A cascata trófica de Yellowstone é a prova de que reintroduzir predadores sempre reorganiza ecossistemas inteiros do mesmo jeito", correcao: "Mesmo dentro do próprio caso de Yellowstone o mecanismo e a magnitude são disputados. Extrapolar para outros ecossistemas, com outra densidade de predadores concorrentes e outra pressão de caça, é uma inferência adicional que carece de teste próprio em cada local." },
    { erro: "Como o efeito é contestado, cascata trófica é um conceito sem base científica", correcao: "O conceito geral tem décadas de sustentação sólida em outros sistemas, como o caso das lontras-marinhas. O que é disputado é a aplicação específica e a magnitude exata no caso particular de Yellowstone, não a existência do fenômeno em geral." }
  ],
  numeros: [
    "Estes, J. A. & Palmisano, J. F. (1974), Science 185(4156):1058-1060: o estudo de referência sobre lontras-marinhas, ouriços-do-mar e kelp no Alasca.",
    "31 lobos foram reintroduzidos em Yellowstone: 14 vindos de Alberta em 1995 e 17 da Colúmbia Britânica em 1996.",
    "Censo de inverno de cervos-canadenses na parte norte do parque: 19.045 em 1994 (antes da reintrodução) contra uma mínima de 3.915 em 2013.",
    "Colônias de castor na parte norte do parque: de 1 em 1996 para 12 em 2009 (Baril et al., 2011).",
    "Middleton et al. (2013): encontros entre lobo e cervo em zona de risco ocorreram, em média, uma vez a cada 9 dias, sem efeito detectável sobre gordura corporal ou gravidez.",
    "Christianson & Creel (2014): recrutamento de cervos caiu 35% em rebanhos colonizados por lobos; predação por lobos explicaria no máximo 52% dessa queda.",
    "Disputa de 2025: Painter, Beschta e Ripple relataram aumento de 152 vezes na densidade de mudas de choupo; MacNulty e colegas recalcularam para cerca de 17,5 vezes.",
    "Disputa paralela de 2025: aumento relatado de ~1.500% no volume de copa de salgueiros ao longo de 20 anos (2001-2020), com razão log10 de 1,21, também contestado quanto à magnitude."
  ]
},

flashcards: [
  { f: "O que o vídeo 'How Wolves Change Rivers' (2014) afirma ser o mecanismo central da mudança em Yellowstone?", v: "Que o medo dos cervos-canadenses pelos lobos, sozinho, mudou o comportamento deles o suficiente para permitir a recuperação da vegetação ribeirinha e, por consequência, mudar o curso físico dos rios." },
  { f: "Qual é o exemplo de cascata trófica mais bem estabelecido cientificamente, usado como referência pelos ecólogos?", v: "Lontras-marinhas, ouriços-do-mar e florestas de kelp no Alasca, documentado por Estes e Palmisano em 1974: onde há lontra, há poucos ouriços e kelp abundante; sem lontra, ouriços se multiplicam e destroem o kelp." },
  { f: "Quem propôs a hipótese do 'mundo verde', e qual é sua ideia central?", v: "Nelson Hairston, Frederick Smith e Lawrence Slobodkin, em 1960. A ideia é que o mundo é verde porque predadores controlam populações de herbívoros, que de outro modo consumiriam toda a vegetação disponível." },
  { f: "Qual é a diferença entre efeito mediado por densidade (DMIE) e efeito mediado por traço ou 'paisagem do medo' (TMIE)?", v: "DMIE é quando o predador mata presas, reduzindo o número delas, e por isso reduz o consumo de plantas. TMIE é quando a mera presença do predador muda o comportamento da presa (mais vigilância, evitar certas áreas), reduzindo o consumo de plantas sem matar ninguém." },
  { f: "O que o estudo de Kauffman, Brodie e Jules (2010) testou, e o que encontrou?", v: "Testaram diretamente se choupos-tremedores cresciam mais em locais onde os cervos corriam mais risco de encontrar lobos. Não encontraram essa relação, e os choupos ainda não se recuperavam de forma consistente mesmo 15 anos após a reintrodução dos lobos." },
  { f: "O que Middleton e colegas (2013) mediram, e qual foi o resultado mais marcante?", v: "Rastrearam lobos e cervos por GPS simultaneamente. Encontraram que, mesmo em áreas de alto risco, o encontro entre lobo e cervo acontecia em média só uma vez a cada 9 dias, e a frequência de encontros não tinha relação com gordura corporal ou gravidez dos cervos." },
  { f: "Segundo a reanálise de Brice, Larsen, Stahler e MacNulty (2024), qual foi o motor principal da recuperação da vegetação em Yellowstone?", v: "A queda no número total de cervos-canadenses (efeito de densidade), causada pela soma de vários predadores e da caça, não o efeito comportamental do medo isoladamente." },
  { f: "Além dos lobos, que outros fatores contribuem para a queda na população de cervos-canadenses em Yellowstone?", v: "Predação por ursos-pardos, ursos-negros e pumas, além da caça esportiva fora dos limites do parque. Um estudo estimou que a predação por lobos sozinha explica no máximo cerca de metade da queda no recrutamento de filhotes." },
  { f: "Como a população de cervos-canadenses e o número de colônias de castor mudaram na parte norte de Yellowstone desde 1994?", v: "Os cervos caíram de 19.045 (censo de 1994) para uma mínima de 3.915 (2013). As colônias de castor subiram de 1 (1996) para 12 (2009)." },
  { f: "O que a disputa de 2025 entre Painter, Beschta e Ripple e a equipe de MacNulty envolve, especificamente?", v: "Painter, Beschta e Ripple relataram um aumento de 152 vezes na densidade de mudas de choupo. MacNulty e colegas apontaram erro no cálculo da linha de base e tratamento indevido de medições repetidas como independentes, recalculando o aumento real para cerca de 17,5 vezes." },
  { f: "Existe uma segunda disputa, em paralelo, sobre outro tipo de vegetação em Yellowstone. Qual é?", v: "Uma disputa sobre salgueiros ribeirinhos: um estudo de 20 anos relatou aumento de cerca de 1.500% no volume de copa, comparado a uma meta-análise global de cascatas tróficas, e outro grupo publicou um comentário questionando a magnitude relatada, embora reconhecendo que alguma cascata trófica de fato ocorreu." },
  { f: "Por que a existência dessa disputa em 2025 e 2026 não é, por si só, um sinal de que a ecologia é uma ciência fraca?", v: "Porque estudar um único parque nacional ao longo de décadas não permite repetição controlada em laboratório. Disputas sobre magnitude exata, ao contrário de disputas sobre a existência do fenômeno, costumam se resolver devagar, por rodadas sucessivas de reanálise, comentário e réplica na literatura." },
  { f: "Por que a versão popular do vídeo continua sendo repetida mais de uma década depois das primeiras críticas técnicas?", v: "Porque é visualmente satisfatória, moralmente clara e curta, qualidades que não têm relação com o quanto a afirmação é sustentada pelos dados. O vídeo, de 2014, já nasceu depois das críticas de Kauffman (2010) sem incorporá-las." }
],

prova: [
  { camada: "nucleo",
    q: "O vídeo 'How Wolves Change Rivers', com mais de 43 milhões de visualizações, apresenta como mecanismo central da mudança em Yellowstone:",
    alts: [
      "A queda no número total de cervos-canadenses, causada por vários predadores e pela caça.",
      "O medo dos cervos pelos lobos, sozinho, mudando o comportamento deles o suficiente para salvar a vegetação e até mudar rios.",
      "Uma doença que reduziu diretamente a população de castores antes da chegada dos lobos.",
      "A reintrodução simultânea de ursos-pardos junto com os lobos em 1995."
    ],
    correta: 1,
    porque: "Esse é o mecanismo de 'paisagem do medo' (landscape of fear) popularizado pelo vídeo, que a literatura científica posterior tratou como uma hipótese específica a ser testada, não como um fato já demonstrado." },

  { camada: "nucleo",
    q: "Qual é o exemplo de cascata trófica mais citado como referência sólida pela ciência, e por quê?",
    alts: [
      "Lobos e cervos em Yellowstone, por ser o caso mais estudado no mundo.",
      "Lontras-marinhas, ouriços-do-mar e kelp no Alasca, porque a comparação entre áreas com e sem lontra é direta e o mecanismo é fácil de observar.",
      "Abelhas e flores em jardins urbanos, por ser o exemplo mais fácil de replicar em sala de aula.",
      "Peixes e corais em recifes de água doce."
    ],
    correta: 1,
    porque: "Estes e Palmisano (1974) documentaram esse caso de forma clara: onde há lontra, poucos ouriços e kelp abundante; sem lontra, ouriços se multiplicam e destroem o kelp. É o exemplo de referência em livros-texto de ecologia." },

  { camada: "nucleo",
    q: "Por que o fato de a vegetação de Yellowstone ter se recuperado depois da volta dos lobos não prova, por si só, que o medo dos cervos foi a causa?",
    alts: [
      "Porque a vegetação de Yellowstone nunca se recuperou de fato.",
      "Porque correlação temporal (lobos voltaram, vegetação melhorou) não distingue entre o efeito de menos cervos no total e o efeito de cervos com medo mudando de comportamento; é preciso medir cada mecanismo separadamente.",
      "Porque os lobos reintroduzidos em 1995 não sobreviveram até os anos 2000.",
      "Porque a vegetação de Yellowstone é medida apenas por satélite, sem verificação em campo."
    ],
    correta: 1,
    porque: "Esse é o ponto metodológico central do caso: dois mecanismos diferentes (menos cervos vs. cervos com medo) podem produzir o mesmo resultado final (menos herbivoria), e só é possível diferenciá-los medindo comportamento e densidade diretamente, não só observando que a vegetação melhorou." },

  { camada: "aprofundamento",
    q: "Qual é a diferença entre um efeito mediado por densidade (DMIE) e um efeito mediado por traço, ou 'paisagem do medo' (TMIE)?",
    alts: [
      "DMIE afeta só plantas, TMIE afeta só animais.",
      "DMIE é quando o predador reduz o número de presas, diminuindo o consumo de plantas por contagem simples; TMIE é quando a presença do predador muda o comportamento da presa, reduzindo o consumo de plantas sem matar ninguém.",
      "DMIE só ocorre em ambientes marinhos, TMIE só em ambientes terrestres.",
      "Não existe diferença real, os dois termos descrevem o mesmo mecanismo."
    ],
    correta: 1,
    porque: "Essa distinção é central na literatura sobre cascatas tróficas: os dois mecanismos produzem o mesmo resultado final (menos herbivoria), mas por caminhos diferentes, um numérico e outro comportamental, e diferenciá-los exige medições específicas." },

  { camada: "aprofundamento",
    q: "O que o estudo de Kauffman, Brodie e Jules (2010) testou especificamente, e o que encontrou?",
    alts: [
      "Testaram se lobos preferiam caçar em áreas com mais choupos, e encontraram que sim.",
      "Testaram se choupos-tremedores cresciam mais em locais de maior risco de predação para os cervos, e não encontraram essa relação; os choupos ainda não se recuperavam de forma consistente.",
      "Testaram a genética dos lobos reintroduzidos e encontraram baixa diversidade genética.",
      "Testaram se turistas afetavam o comportamento dos cervos, e encontraram forte efeito do turismo."
    ],
    correta: 1,
    porque: "Esse foi um teste direto e landscape-level da hipótese da 'paisagem do medo' aplicada aos choupos. A ausência de relação entre risco de predação e recuperação da árvore foi uma das primeiras evidências contra a versão forte da hipótese do medo." },

  { camada: "aprofundamento",
    q: "O que Middleton e colegas (2013) encontraram ao rastrear lobos e cervos simultaneamente por GPS?",
    alts: [
      "Que cervos e lobos nunca ocupam a mesma área do parque.",
      "Que, mesmo em áreas de alto risco, encontros entre lobo e cervo eram raros (cerca de uma vez a cada 9 dias em média) e não tinham relação com gordura corporal ou gravidez dos cervos.",
      "Que os cervos passaram a caçar lobos jovens em retaliação.",
      "Que a presença de lobos aumentou a taxa de natalidade dos cervos."
    ],
    correta: 1,
    porque: "A raridade dos encontros, mesmo em áreas de risco, e a ausência de efeito sobre condição física dos cervos, apesar de 20 vezes de variação na frequência de encontros, é um dos argumentos mais fortes contra o medo como mecanismo dominante." },

  { camada: "aprofundamento",
    q: "Segundo Christianson e Creel (2014), qual é o limite máximo da contribuição da predação por lobos, isoladamente, para a queda no recrutamento de cervos-canadenses?",
    alts: [
      "Cerca de 100%, ou seja, os lobos sozinhos explicam toda a queda.",
      "Cerca de 52%, mesmo supondo que toda mortalidade por predação fosse aditiva; o restante vem de outros predadores e da caça.",
      "Cerca de 5%, um efeito quase desprezível.",
      "Os lobos não têm nenhuma relação com o recrutamento de cervos."
    ],
    correta: 1,
    porque: "Usando 33 anos de dados de doze subpopulações, os autores calcularam esse teto de 52% mesmo na suposição mais favorável ao papel dos lobos, o que deixa claro que ursos, pumas e caça humana também são parte relevante da explicação." },

  { camada: "extensao",
    q: "Em 2025, uma disputa pública envolveu Painter, Beschta e Ripple de um lado e uma equipe liderada por MacNulty de outro. Sobre o que exatamente?",
    alts: [
      "Sobre se lobos deveriam continuar sendo protegidos legalmente em Yellowstone.",
      "Sobre a magnitude do aumento na densidade de mudas de choupo-tremedor: 152 vezes segundo o primeiro grupo, recalculado para cerca de 17,5 vezes pelo segundo, por causa de erro na linha de base e tratamento inadequado de medições repetidas.",
      "Sobre se os castores retornaram por causa dos lobos ou por causa de uma reintrodução direta de castores.",
      "Sobre o número exato de lobos que ainda vivem no parque hoje."
    ],
    correta: 1,
    porque: "Essa disputa de 2025 e 2026 mostra como decisões técnicas de análise estatística (cálculo de linha de base, tratamento de medições repetidas) podem alterar radicalmente a magnitude relatada de um efeito, mesmo quando os dois lados concordam que algum efeito existe." },

  { camada: "extensao",
    q: "Por que a existência de uma disputa científica ativa sobre Yellowstone em 2025 e 2026, décadas depois da reintrodução dos lobos, não deveria ser lida como sinal de que a ecologia é uma ciência fraca?",
    alts: [
      "Porque disputas científicas sempre significam que um dos lados está mentindo deliberadamente.",
      "Porque um único parque nacional, estudado ao longo de décadas, não pode ser replicado em laboratório com um grupo controle isolado, e disputas sobre magnitude exata de um efeito real tendem a se resolver devagar, por rodadas de reanálise e réplica.",
      "Porque a ecologia, ao contrário de outras ciências, não usa nenhum tipo de dado quantitativo.",
      "Porque o parque de Yellowstone é grande demais para qualquer estudo ser considerado válido."
    ],
    correta: 1,
    porque: "A persistência do debate reflete a dificuldade real de isolar mecanismos causais num sistema de campo de larga escala e longo prazo, não uma falha da disciplina. É o processo normal de autocorreção da ciência acontecendo de forma visível." },

  { camada: "extensao",
    q: "Que consequência prática, fora da ecologia pura, o texto associa à distinção entre 'efeito de densidade' e 'efeito do medo' em Yellowstone?",
    alts: [
      "Nenhuma: a distinção é puramente acadêmica e sem aplicação prática.",
      "Ela afeta a expectativa sobre o que reintroduções de grandes predadores em outros lugares do mundo realmente produziriam, já que o mecanismo real (menos herbívoros no total) depende do contexto local de outros predadores e da pressão de caça, ao contrário de um efeito comportamental supostamente mais universal.",
      "Ela determina exclusivamente o preço do turismo de observação de vida selvagem no parque.",
      "Ela só importa para decidir o nome científico correto da espécie de cervo envolvida."
    ],
    correta: 1,
    porque: "Se o mecanismo real depende de quantos predadores concorrentes e quanta caça existem localmente, e não de um efeito comportamental universal do medo, então usar Yellowstone como garantia de que reintroduzir um predador em outro lugar terá o mesmo resultado é uma extrapolação mais frágil do que a história popular sugere." },

  { camada: "extensao",
    q: "O que diferencia 'cascata trófica' de 'espécie-chave' (keystone species), segundo a síntese do documento?",
    alts: [
      "São exatamente o mesmo conceito, usados como sinônimos em qualquer contexto.",
      "Cascata trófica é um efeito propagado por pelo menos três níveis de uma cadeia alimentar; espécie-chave é qualquer espécie com papel ecológico desproporcional ao seu tamanho populacional, o que pode ou não envolver uma cascata de três níveis bem demonstrada.",
      "Espécie-chave só se aplica a plantas, nunca a animais.",
      "Cascata trófica só pode envolver predadores marinhos, nunca terrestres."
    ],
    correta: 1,
    porque: "Os dois conceitos são vizinhos e às vezes coexistem no mesmo exemplo, mas não são idênticos: uma espécie pode ser ecologicamente central sem que o efeito específico documentado seja uma cascata de três ou mais níveis tróficos plenamente demonstrada." }
],

fontes: [
  { n: 1, tipo: "fonte primária", ref: "Hairston, N. G., Smith, F. E. &amp; Slobodkin, L. B. 'Community Structure, Population Control, and Competition'. <em>American Naturalist</em> 94(879):421-425, 1960.", url: "https://www.journals.uchicago.edu/doi/abs/10.1086/282146" },
  { n: 2, tipo: "fonte primária", ref: "Estes, J. A. &amp; Palmisano, J. F. 'Sea Otters: Their Role in Structuring Nearshore Communities'. <em>Science</em> 185(4156):1058-1060, 1974.", url: "https://www.science.org/doi/10.1126/science.185.4156.1058" },
  { n: 3, tipo: "divulgação", ref: "Monbiot, G. 'How Wolves Change Rivers'. Vídeo produzido por Sustainable Human a partir de uma fala TED de Monbiot, publicado em fevereiro de 2014, com mais de 43 milhões de visualizações.", url: "https://www.monbiot.com/2014/02/13/how-wolves-change-rivers/" },
  { n: 4, tipo: "fonte primária", ref: "Ripple, W. J. &amp; Beschta, R. L. 'Trophic cascades in Yellowstone: The first 15 years after wolf reintroduction'. <em>Biological Conservation</em> 145(1):205-213, 2012.", url: "https://www.sciencedirect.com/science/article/abs/pii/S0006320711004046" },
  { n: 5, tipo: "crítica", ref: "Kauffman, M. J., Brodie, J. F. &amp; Jules, E. S. 'Are wolves saving Yellowstone's aspen? A landscape-level test of a behaviorally mediated trophic cascade'. <em>Ecology</em> 91(9):2742-2755, 2010.", url: "https://pubmed.ncbi.nlm.nih.gov/20957967/" },
  { n: 6, tipo: "crítica", ref: "Middleton, A. D. et al. 'Linking anti-predator behaviour to prey demography reveals limited risk effects of an actively hunting large carnivore'. <em>Ecology Letters</em> 16(8):1023-1030, 2013.", url: "https://onlinelibrary.wiley.com/doi/abs/10.1111/ele.12133" },
  { n: 7, tipo: "fonte primária", ref: "Christianson, D. &amp; Creel, S. 'Ecosystem Scale Declines in Elk Recruitment and Population Growth with Wolf Colonization: A Before-After-Control-Impact Approach'. <em>PLOS ONE</em> 9(7):e102330, 2014.", url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0102330" },
  { n: 8, tipo: "fonte primária", ref: "Baril, L. M., Hansen, A. J., Renkin, R. &amp; Lawrence, R. 'Songbird response to increased willow (Salix spp.) growth in Yellowstone's northern range'. <em>Ecological Applications</em> 21(6):2283-2296, 2011.", url: "https://esajournals.onlinelibrary.wiley.com/doi/abs/10.1890/10-0169.1" },
  { n: 9, tipo: "fonte primária", ref: "Brice, E. M., Larsen, E. J., Stahler, D. R. &amp; MacNulty, D. R. et al. 'The primacy of density-mediated indirect effects in a community of wolves, elk, and aspen'. <em>Ecological Monographs</em>, 2024.", url: "https://esajournals.onlinelibrary.wiley.com/doi/full/10.1002/ecm.1627" },
  { n: 10, tipo: "fonte primária", ref: "Painter, L. E., Beschta, R. L. &amp; Ripple, W. J. 'Changing aspen stand structure following large carnivore restoration in Yellowstone'. <em>Forest Ecology and Management</em> 594:122941, 2025.", url: "https://doi.org/10.1016/j.foreco.2025.122941" },
  { n: 11, tipo: "crítica", ref: "MacNulty, D. R. et al. 'Overstating trophic cascade strength following large carnivore restoration in Yellowstone: A comment on Painter et al. (2025)'. <em>Forest Ecology and Management</em>, 2025/2026.", url: "https://ecoevorxiv.org/repository/view/10699/" },
  { n: 12, tipo: "fonte primária", ref: "Ripple, W. J. et al. 'The strength of the Yellowstone trophic cascade after wolf reintroduction'. <em>Global Ecology and Conservation</em>, 2025.", url: "https://www.sciencedirect.com/science/article/pii/S2351989425000290" },
  { n: 13, tipo: "crítica", ref: "'Flawed analysis invalidates claim of a strong Yellowstone trophic cascade after wolf reintroduction: A comment on Ripple et al. (2025)'. <em>Global Ecology and Conservation</em>, 2025.", url: "https://www.sciencedirect.com/science/article/pii/S2351989425005001" },
  { n: 14, tipo: "enciclopédia", ref: "Britannica. Verbete 'Trophic cascade', com definição e exemplos adicionais do fenômeno.", url: "https://www.britannica.com/science/trophic-cascade" },
  { n: 15, tipo: "notícia institucional", ref: "Oregon State University Newsroom. 'Yellowstone transformed 15 years after the return of wolves', sobre o trabalho de Ripple e Beschta.", url: "https://news.oregonstate.edu/news/yellowstone-transformed-15-years-after-return-wolves" },
  { n: 16, tipo: "reportagem", ref: "Science.org. 'Predation, not fear of wolves, keeps elk from denuding Yellowstone', cobertura do estudo de Brice, Larsen, Stahler e MacNulty (2024).", url: "https://www.science.org/content/article/predation-not-fear-wolves-keeps-elk-denuding-yellowstone" },
  { n: 17, tipo: "fonte primária", ref: "'History and Status of Wild Ungulate Populations on the Northern Yellowstone Range'. Síntese de censos oficiais de inverno da população de cervos-canadenses, incluindo a contagem de 19.045 em 1994 e a mínima de 3.915 em 2013.", url: "https://www.sciencedirect.com/science/article/pii/S0190052818300750" }
]
};

if (typeof module !== "undefined") { module.exports = { CONTEUDOS }; }
