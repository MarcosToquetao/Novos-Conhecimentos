CONTEUDOS["paradoxo-fermi"] = {
termo: "Paradoxo de Fermi e o Grande Filtro",
area: "Astronomia",
subtitulo: "A galáxia tem centenas de bilhões de estrelas e, pelas contas mais otimistas, deveria ter sido colonizada várias vezes antes de a Terra sequer existir. Não vemos nenhum sinal disso. A tensão entre essas duas frases não tem solução aceita, e quase tudo que se propõe para resolvê-la é hipótese, não achado.",
prerequisitos: [
  "Nenhum pré-requisito técnico. Ajuda aceitar que a Via Láctea tem bilhões de estrelas e que boa parte delas tem planetas.",
  "Para o aprofundamento, familiaridade com a ideia de multiplicar frações para estimar uma probabilidade composta ajuda, mas é explicada no texto."
],
conexoes: [
  { termo: "Teorema de Bayes", relacao: "A equação de Drake e o Grande Filtro são exercícios de raciocinar sob incerteza extrema. A lógica de atualizar uma estimativa quando cada termo tem margem de várias ordens de grandeza é a mesma lógica bayesiana, aplicada a um caso em que quase não há dado para atualizar." },
  { termo: "Falseabilidade e demarcação (Popper)", relacao: "Boa parte das soluções propostas para o paradoxo, como a hipótese do zoológico, não proíbe nenhuma observação futura específica. Isso não as torna falsas, mas as deixa fora do tipo de afirmação que a ciência consegue testar hoje." },
  { termo: "Teoria endossimbiótica", relacao: "A transição de célula procarionte para eucarionte é um dos candidatos mais citados a etapa do Grande Filtro. Levou cerca de 1,5 a 2 bilhões de anos para acontecer na Terra depois que a vida simples já existia, o que sugere que pode ser rara." },
  { termo: "Convergência evolutiva", relacao: "Se traços complexos como olhos ou voo surgiram de forma independente várias vezes na Terra, isso é um argumento fraco a favor de que inteligência técnica também poderia surgir em outros lugares. O argumento é debatido, porque n=1 planeta não permite generalizar com segurança." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Em 1950, numa tarde de verão em Los Alamos, quatro físicos caminhavam para o almoço no refeitório da Fuller Lodge. Iam a pé: Enrico Fermi, Emil Konopinski, Edward Teller e Herbert York. No caminho, a conversa passou por uma tira de humor sobre discos voadores e por um cálculo sobre a viabilidade de viagem mais rápida que a luz. Já sentados à mesa, no meio de outro assunto qualquer, Fermi perguntou, aparentemente do nada: "onde está todo mundo?". Os outros três entenderam na hora do que ele estava falando, mesmo sem ele ter dito a palavra "alienígenas". A cena só foi registrada por escrito décadas depois, quando o físico Eric Jones entrevistou os sobreviventes daquele almoço e publicou um relatório do Laboratório Nacional de Los Alamos reconstituindo o episódio a partir da memória de cada um deles, que divergia em detalhes menores.<sup class="cit"><a href="#f1">1</a></sup></p>

<p>Essa pergunta informal virou, com o tempo, o nome de um problema real. Hoje ele é chamado de <strong>paradoxo de Fermi</strong>: não é bem um paradoxo lógico, no sentido de uma contradição interna, mas uma tensão entre duas coisas que parecem verdadeiras ao mesmo tempo e não deveriam ser.</p>

<h3>As duas metades da tensão</h3>

<p>De um lado, a galáxia é enorme e velha. A Via Láctea tem mais de 200 bilhões de estrelas e cerca de 13 bilhões de anos. Sabemos hoje, graças a telescópios como Kepler e TESS, que planetas em torno de outras estrelas não são exceção: são a regra. Já foram confirmados mais de 6 mil exoplanetas.<sup class="cit"><a href="#f12">12</a></sup> Se mesmo uma fração minúscula desses mundos abrigasse vida, e uma fração minúscula dessa vida chegasse a desenvolver tecnologia capaz de viajar entre estrelas, e essa tecnologia levasse "apenas" alguns milhões de anos para se espalhar pela galáxia (o que, numa galáxia de 13 bilhões de anos, é rápido), a conclusão natural seria que a Via Láctea já deveria estar cheia de civilizações, ou pelo menos cheia de sinais delas.</p>

<p>Do outro lado está a observação. Décadas de buscas por rádio, levantamentos do céu em luz visível e infravermelha, e a simples ausência de qualquer sonda, estrutura artificial ou transmissão de origem inequivocamente não humana. Isso é fato, não interpretação: até hoje, nenhuma busca científica encontrou um sinal confirmado de inteligência extraterrestre.</p>

<div class="marca consenso">
<span class="rot">O que é fato, sem margem para debate</span>
<p>Duas coisas aqui não são hipóteses: existem mais de 6 mil exoplanetas confirmados, o que mostra que planetas são comuns, e nenhuma busca científica jamais confirmou um sinal, sonda ou estrutura de origem extraterrestre. Tudo o que vem depois disso é tentativa de explicar essa combinação, e nenhuma explicação tem status de fato estabelecido.</p>
</div>

<h3>O que significa "estimar" quando não se sabe quase nada</h3>

<p>Um jeito de organizar essa tensão apareceu em 1961, quando o radioastrônomo Frank Drake propôs, para uma reunião informal em Green Bank, na Virgínia Ocidental, uma forma de quebrar a pergunta "quantas civilizações detectáveis existem na nossa galáxia agora?" em pedaços menores e mais fáceis de pensar separadamente: quantas estrelas se formam por ano, que fração tem planetas, quantos desses planetas poderiam abrigar vida, que fração da vida evolui para inteligência, que fração dessa inteligência desenvolve tecnologia detectável, e por quanto tempo essa tecnologia continua emitindo sinal antes de desaparecer.<sup class="cit"><a href="#f9">9</a></sup></p>

<p>É importante entender o que essa ferramenta é e o que ela não é. A <strong>equação de Drake</strong> não é uma fórmula que se resolve e devolve um número confiável, como calcular a área de um retângulo. É uma lista de perguntas organizadas em sequência multiplicativa. Alguns dos seus termos hoje têm boa base observacional, como a fração de estrelas com planetas. Outros continuam sendo, na prática, chutes educados, porque conhecemos exatamente um caso de vida na história do universo: a nossa. Quando um cientista multiplica seis ou sete números e pelo menos quatro deles são chutes que podem variar por várias ordens de grandeza cada um, o resultado final também varia por dezenas de ordens de grandeza. Trocar um palpite otimista por um pessimista em cada termo já é suficiente para a "resposta" da equação saltar de "estamos completamente sozinhos na galáxia" para "a galáxia deveria estar transbordando de civilizações". A equação não decide qual desses extremos é verdade. Ela só deixa claro, com uma precisão incômoda, exatamente onde está a nossa ignorância.</p>

<p>Isso é diferente de dizer que a estimativa não serve para nada. Uma boa estimativa em astronomia declara sua incerteza junto com o número, algo como "entre uma dúzia e um milhão", e é honesta sobre por que a faixa é tão larga. Um chute disfarçado de estimativa apresenta um número único, sem faixa de erro, como se fosse conhecido com precisão. Grande parte da confusão popular em torno do paradoxo de Fermi vem de tratar chutes como estimativas.</p>

<h3>O Grande Filtro</h3>

<p>Em 1998, o economista e físico Robin Hanson propôs uma forma diferente, e mais inquietante, de organizar o mesmo problema.<sup class="cit"><a href="#f4">4</a></sup> A ideia é a seguinte: para uma estrela virar, com o tempo, uma civilização que se espalha pela galáxia, é preciso passar por uma sequência de etapas difíceis, começando pela química que origina a primeira molécula capaz de se replicar e terminando na expansão interestelar. Como a galáxia parece vazia de civilizações expansivas, deve existir, nessa sequência, pelo menos uma etapa extraordinariamente improvável, um gargalo que quase nenhum planeta consegue atravessar. Hanson chamou esse gargalo de <strong>Grande Filtro</strong>.</p>

<p>A pergunta que interessa de verdade não é só "existe um filtro?". É: <strong>onde ele está</strong>, em relação a nós. Se o filtro já ficou para trás, alguma das etapas iniciais é que era a barreira rara, e o fato de já a termos vencido é um golpe de sorte. Nesse caso, o futuro é relativamente aberto: já passamos pela parte difícil. Se o filtro ainda está à nossa frente, algo entre onde estamos agora e a colonização interestelar é o obstáculo quase intransponível, o que sugere que a maioria das civilizações tecnológicas não sobrevive para atravessá-lo, e nós talvez também não sobrevivamos.</p>

<div class="marca controverso">
<span class="rot">Por que isso importa e por que ninguém sabe a resposta</span>
<p>Não existe hoje forma de medir diretamente onde está o Grande Filtro. As duas hipóteses, filtro atrás e filtro à frente, são compatíveis com todos os dados que temos até agora, porque os dados até agora se resumem a "não vimos ninguém". Qualquer afirmação categórica de que "certamente já passamos" ou "certamente ainda vem por aí" está indo além do que a evidência sustenta.</p>
</div>

<h3>Ausência de evidência não é evidência de ausência, mas também não é nada</h3>

<p>Uma frase repetida em ciência diz que "ausência de evidência não é evidência de ausência". É verdade no sentido estrito: não observar algo não prova logicamente que ele não existe, porque a busca pode ter sido curta, mal direcionada ou simplesmente incapaz de detectar o que procurava. Mas essa frase é frequentemente usada como se significasse "a ausência de evidência não conta nada", o que é um exagero na direção oposta. Se você procura durante décadas, com instrumentos cada vez melhores, em cada vez mais lugares, e continua sem achar nada, isso é informação real. Ela restringe o espaço de hipóteses plausíveis, mesmo sem eliminar nenhuma por completo. É esse tipo de raciocínio gradual, e não uma resposta definitiva, que o paradoxo de Fermi pede de quem tenta pensar sobre ele com cuidado.</p>
` },

aprofundamento: { minutos: 30, html: `
<h3>A equação de Drake, termo a termo</h3>

<p>A reunião de novembro de 1961 em Green Bank, organizada pelo Observatório Nacional de Radioastronomia dos Estados Unidos, reuniu cerca de dez pesquisadores, entre eles Carl Sagan, para discutir a possibilidade de detectar sinais de rádio de civilizações extraterrestres. Frank Drake escreveu no quadro-negro, como roteiro da discussão, a expressão que ficou conhecida como <strong>equação de Drake</strong>:<sup class="cit"><a href="#f9">9</a></sup></p>

<div class="formula">N = R* · f<sub>p</sub> · n<sub>e</sub> · f<sub>l</sub> · f<sub>i</sub> · f<sub>c</sub> · L
<span class="leg">N é o número estimado de civilizações na Via Láctea cujos sinais eletromagnéticos estariam, agora, ao alcance de detecção.</span>
</div>

<p>Vale a pena passar por cada termo e notar a diferença de solidez entre eles.</p>

<p><strong>R*</strong>, a taxa de formação de novas estrelas na galáxia por ano. É o termo mais bem medido de todos: hoje há boas estimativas observacionais, algo em torno de uma a poucas estrelas novas por ano na Via Láctea.</p>

<p><strong>f<sub>p</sub></strong>, a fração dessas estrelas que tem planetas. Em 1961 isso era pura especulação. Depois das missões Kepler e TESS, sabemos que a maioria das estrelas tem pelo menos um planeta. Este termo passou de chute para estimativa razoavelmente sólida em cinquenta anos, o que é um bom lembrete de que partes de uma equação especulativa podem, com o tempo, virar ciência observacional.</p>

<p><strong>n<sub>e</sub></strong>, o número médio de planetas por sistema que ficam na chamada <strong>zona habitável</strong>, a faixa de distância da estrela em que a temperatura permitiria água líquida na superfície de um planeta rochoso. Esse termo também melhorou muito com dados de exoplanetas, embora "zona habitável" seja uma simplificação: ela usa como referência a água líquida por ser o solvente da química da vida na Terra, mas não garante habitabilidade real, que depende também de atmosfera, campo magnético, atividade geológica e outros fatores.</p>

<p><strong>f<sub>l</sub></strong>, a fração desses planetas onde a vida de fato surge. Aqui a solidez desaba. Temos exatamente uma amostra, a Terra, onde a vida surgiu. Não sabemos se isso é comum ou extraordinariamente raro, porque não temos como comparar com nenhum outro caso.</p>

<p><strong>f<sub>i</sub></strong>, a fração dos planetas com vida que desenvolve inteligência. De novo, uma amostra de um. E dentro dessa única amostra, a inteligência técnica surgiu uma única vez em cerca de 4 bilhões de anos de história da vida na Terra, entre milhões de espécies.</p>

<p><strong>f<sub>c</sub></strong>, a fração das espécies inteligentes que desenvolve tecnologia capaz de produzir sinais detectáveis a distância, como ondas de rádio. Também sem base empírica além do próprio caso humano.</p>

<p><strong>L</strong>, o tempo, em anos, durante o qual essa civilização continua emitindo sinais detectáveis antes de desaparecer, se destruir, parar de transmitir ou mudar de tecnologia de um jeito que deixe de ser detectável do modo que buscamos hoje. É o termo mais especulativo de todos, porque depende de prever o futuro de civilizações tecnológicas, algo que nem sequer conseguimos fazer com segurança para a nossa própria.</p>

<div class="marca especulacao">
<span class="rot">Por que o resultado final varia tanto</span>
<p>R*, f<sub>p</sub> e n<sub>e</sub> hoje têm base observacional razoável. f<sub>l</sub>, f<sub>i</sub>, f<sub>c</sub> e L continuam sendo, essencialmente, palpites, cada um podendo variar por várias ordens de grandeza dependendo de quem faz a conta. Multiplicar sete números, dos quais quatro têm incerteza de várias ordens de grandeza cada, produz um resultado final cuja incerteza é maior do que a soma das partes. Diferentes astrônomos, usando a mesma equação e sendo igualmente racionais, chegam a estimativas de N que vão de "menos de um" a "milhões". Isso não é falha da equação: é a equação mostrando com fidelidade o tamanho da nossa ignorância.</p>
</div>

<h3>Biossinatura e tecnossinatura</h3>

<p>Dois termos técnicos organizam a busca observacional de hoje. <strong>Biossinatura</strong> é qualquer característica detectável, como a composição química de uma atmosfera, que sugira presença de vida, sem exigir que essa vida seja inteligente: oxigênio e metano coexistindo numa atmosfera em quantidade que a química sozinha não sustentaria por muito tempo, por exemplo, seria um candidato interessante. <strong>Tecnossinatura</strong> é mais restrita: um sinal que só faria sentido como produto de tecnologia, como uma transmissão de rádio de banda estreita, um padrão de luz artificial ou o excesso de radiação infravermelha que uma megaestrutura produziria ao capturar energia estelar. A distinção importa porque uma busca pode, em princípio, encontrar biossinaturas relativamente em breve, com telescópios que já existem ou estão em construção, enquanto tecnossinaturas exigem supor não só vida, mas tecnologia.</p>

<h3>As nove etapas do Grande Filtro, segundo Hanson</h3>

<p>No ensaio original de 1998, Hanson organizou a trajetória de uma estrela até uma civilização espacial em cerca de nove etapas evolutivas: um sistema estelar com os ingredientes certos, moléculas capazes de replicação como RNA primitivo, células procariontes simples, células eucariontes complexas, reprodução sexuada com organismos multicelulares, animais com uso de ferramentas e inteligência, uma civilização com potencial de colonização, uma explosão de colonização, e por fim expansão interstelar sustentada.<sup class="cit"><a href="#f4">4</a></sup> A lista é uma proposta de organização, não um inventário definitivo: outros autores dividem as etapas de formas diferentes, e o próprio Hanson trata a lista como esquema de trabalho.</p>

<p>Dois candidatos a "etapa mais difícil" aparecem com frequência na literatura, e vale notar o status de cada um.</p>

<p><strong>Origem da vida (abiogênese).</strong> A transição de química sem vida para o primeiro sistema capaz de se replicar e evoluir por seleção natural. Continua sem explicação completa aceita, apesar de décadas de pesquisa em química pré-biótica. Um argumento levantado por David Kipping em 2020, usando análise bayesiana sobre o momento em que a vida surgiu na Terra em relação à idade do planeta, sugere que a vida apareceu relativamente cedo na história terrestre, o que é fracamente compatível com abiogênese não sendo extremamente rara, mas o próprio autor descreve o resultado como uma evidência fraca, sensível às suposições do modelo, e não como prova de que a vida seja comum.<sup class="cit"><a href="#f13">13</a></sup></p>

<p><strong>De procarionte a eucarionte.</strong> Células procariontes, sem núcleo definido, dominaram a Terra por cerca de 1,5 a 2 bilhões de anos antes do surgimento das primeiras células eucariontes, com núcleo e organelas internas, entre elas as mitocôndrias de origem endossimbiótica. Esse intervalo enorme, e o fato de a transição parecer ter acontecido uma única vez na história da vida terrestre, tornou a eucariogênese um candidato citado com frequência a etapa rara do filtro. É um argumento por ausência de repetição num único histórico evolutivo, o que é uma evidência bem mais fraca do que replicação experimental, e continua sendo hipótese, não conclusão estabelecida.</p>

<h3>Candidatos a filtro à frente</h3>

<p>Do lado do futuro, os candidatos mais discutidos envolvem algum tipo de autodestruição: guerra nuclear ou biológica, colapso ambiental, ou riscos tecnológicos ainda não plenamente compreendidos, como os associados a formas avançadas de inteligência artificial. Nenhum desses cenários tem estatuto de previsão científica sobre o destino da humanidade. São extrapolações de riscos já discutidos por outros motivos, reaproveitadas aqui como resposta possível ao silêncio observado no céu. A honestidade exige dizer que não há como testar, hoje, se algum desses riscos é de fato "o" filtro, porque isso exigiria observar o destino de outras civilizações tecnológicas, e não temos nenhuma outra para observar.</p>
` },

extensao: { minutos: 60, html: `
<h3>O catálogo de soluções propostas, e por que nenhuma tem consenso</h3>

<p>Desde os anos 1970 uma quantidade grande de propostas tentou resolver o paradoxo de Fermi. Vale passar por elas com uma régua comum: o que cada uma prevê, e se essa previsão poderia, em princípio, ser testada.</p>

<p><strong>Hipótese da Terra rara.</strong> Proposta pelo paleontólogo Peter Ward e pelo astrônomo Donald Brownlee no livro <em>Rare Earth</em>, de 2000, argumenta que vida microbiana simples pode ser relativamente comum no universo, mas que vida complexa exige uma combinação improvável de fatores astrofísicos e geológicos: posição adequada na galáxia, uma estrela estável, um planeta do tamanho certo, uma lua grande o suficiente para estabilizar o eixo de rotação, campo magnético protetor, placas tectônicas ativas, entre outros.<sup class="cit"><a href="#f8">8</a></sup> A crítica mais recorrente é que a lista descreve as condições da Terra e depois as declara necessárias, um raciocínio que corre o risco de circularidade: como só conhecemos um planeta com vida complexa, não há como saber quais dessas condições são de fato indispensáveis e quais são só acidentes locais. Descobertas de exoplanetas rochosos em zonas habitáveis, mais numerosos do que se esperava em 2000, também enfraqueceram parte do argumento original, embora a discussão sobre luas grandes e placas tectônicas continue em aberto.</p>

<p><strong>Hipótese do zoológico.</strong> Proposta pelo radioastrônomo John Ball em 1973, sugere que civilizações avançadas existem, sabem da nossa existência, e escolhem deliberadamente não interferir, como quem observa um parque protegido sem entrar nele.<sup class="cit"><a href="#f7">7</a></sup> É uma hipótese popular na cultura, e também uma das piores do ponto de vista de testabilidade: ela pode acomodar qualquer resultado de busca futuro, porque uma civilização suficientemente avançada e decidida a se esconder sempre pode ser descrita como tendo escondido melhor. Sem uma previsão que ela proíba, a hipótese é difícil de diferenciar de pura especulação, por mais que seja logicamente possível.</p>

<p><strong>Autodestruição tecnológica.</strong> A ideia de que civilizações tecnológicas tendem a se destruir antes de conseguir colonizar o espaço, seja por guerra, colapso ambiental ou outro risco associado à própria tecnologia que as tornou detectáveis. Ganhou força depois da Guerra Fria, quando a possibilidade de aniquilação nuclear tornou o cenário concreto e não apenas hipotético. Continua sem evidência direta: não temos nenhum outro caso de civilização tecnológica para observar se ela se destrói ou não.</p>

<p><strong>Sinais caros e breves.</strong> Argumenta que transmissões de rádio de alta potência, do tipo que buscas de SETI conseguem detectar a grandes distâncias, são caras de manter e que uma civilização tecnológica pode passar rapidamente para tecnologias mais eficientes e menos "ruidosas", como comunicação de baixa potência ou meios que não vazam sinal para o espaço. Nesse cenário, a janela de tempo em que uma civilização seria detectável por rádio poderia ser curta, o que reduziria drasticamente as chances de duas civilizações estarem "ouvindo" simultaneamente. É plausível, mas também não testável diretamente com os dados atuais.</p>

<h3>O argumento de Hart e Tipler sobre sondas autorreplicantes</h3>

<p>Em 1975, o astrofísico Michael Hart publicou um argumento influente: mesmo com naves relativamente lentas, muito abaixo da velocidade da luz, uma civilização decidida a colonizar a galáxia levaria algo entre alguns milhões e algumas dezenas de milhões de anos para alcançar todos os sistemas estelares, um intervalo pequeno frente aos bilhões de anos de idade da galáxia.<sup class="cit"><a href="#f5">5</a></sup> Em 1980, o físico Frank Tipler estendeu o argumento propondo que bastaria uma única civilização enviar sondas capazes de se autorreplicar usando material dos sistemas que visitam, as chamadas <strong>sondas de von Neumann</strong>, para que a colonização se espalhasse de forma exponencial e cobrisse a galáxia inteira num piscar de olhos em escala cósmica.<sup class="cit"><a href="#f6">6</a></sup> A conclusão de Tipler, que deu nome ao que hoje se chama de conjectura de Hart-Tipler, foi que a ausência completa de qualquer sonda ou vestígio de colonização é evidência de que não existem, e talvez nunca tenham existido, outras civilizações tecnológicas inteligentes na galáxia.</p>

<div class="marca controverso">
<span class="rot">Por que essa conclusão forte é contestada</span>
<p>Críticos apontam vários pontos fracos: o argumento supõe que colonizar é um objetivo universal de qualquer civilização avançada, o que é uma suposição sobre motivação, não um fato físico; supõe que sondas autorreplicantes são tecnicamente viáveis em qualquer escala temporal razoável, o que ninguém provou nem refutou; e supõe que colonização, uma vez iniciada, seria total e permanente, sem colapsos, pausas ou desistências no meio do caminho. Nenhuma dessas suposições é absurda, mas nenhuma é estabelecida, e a conclusão de Tipler depende de todas elas se sustentarem ao mesmo tempo.</p>
</div>

<h3>Grabby aliens: a proposta de Hanson e colegas em 2021</h3>

<p>Em 2021, Robin Hanson, junto com Daniel Martin, Calvin McCarter e Jonathan Paulson, publicou um modelo diferente, apelidado informalmente de "grabby aliens" (algo como "alienígenas que tomam posse do espaço").<sup class="cit"><a href="#f10">10</a></sup> A observação de partida é que a humanidade parece ter surgido "cedo demais" na história do universo, num momento em que a maioria das estrelas que algum dia vão existir ainda nem se formou. O modelo propõe que existem dois tipos de civilizações: "silenciosas", como a humanidade até agora, e "ruidosas" ou expansionistas, que colonizam volumes enormes de espaço de forma visível e, ao fazer isso, impedem que novas civilizações silenciosas surjam dentro do território que já ocuparam.</p>

<p>Se esse tipo de expansão em grande escala é real, o modelo prevê que civilizações silenciosas só conseguem surgir em "bolhas" de espaço ainda não tomadas por vizinhos expansionistas, e que o fato de existirmos agora, relativamente cedo, é exatamente o que se esperaria observar sob essa hipótese, porque civilizações que surgem tarde demais já encontrariam o espaço ocupado. O modelo é matematicamente elegante e gerou previsões numéricas específicas sobre quando a humanidade poderia esperar encontrar sinais de expansão alienígena, algo entre alguns milhões e um bilhão de anos no futuro, segundo os próprios autores.</p>

<div class="marca especulacao">
<span class="rot">O que levar a sério, e o que não</span>
<p>O modelo de Hanson e colegas é um argumento estatístico bem construído, publicado em revista com revisão por pares, mas repousa sobre suposições fortes: que expansão cósmica em grande escala e de forma permanentemente visível é o comportamento padrão de civilizações avançadas, e que a nossa posição temporal no universo deve ser tratada como uma amostra aleatória para fins de inferência (um tipo de raciocínio antrópico). Ambas as suposições são discutíveis. Tratar o resultado como previsão confiável sobre quando "eles" vão aparecer seria dar a um modelo especulativo um peso que a comunidade científica, incluindo os próprios autores, não afirma que ele tenha.</p>
</div>

<h3>O que a busca observacional real já fez, e o que não encontrou</h3>

<p>Vale separar especulação teórica de esforço observacional concreto, porque os dois às vezes se misturam na cabeça de quem está aprendendo o tema.</p>

<p>A busca por rádio começou de forma sistemática em 1960, com o Projeto Ozma, conduzido pelo próprio Frank Drake no radiotelescópio de Green Bank, apontado para as estrelas próximas Tau Ceti e Épsilon Eridani. Desde então, dezenas de projetos de <strong>SETI</strong> (sigla em inglês para busca de inteligência extraterrestre) escutaram faixas de rádio em busca de sinais de banda estreita, um tipo de assinatura que a natureza não produz sozinha. O evento mais citado de toda essa história é o chamado "sinal Wow!", captado em 1977 por um radiotelescópio em Ohio, um pico de intensidade forte e breve, nunca repetido nem explicado com certeza, e nunca confirmado como artificial.</p>

<p>Desde 2015, o programa <strong>Breakthrough Listen</strong>, financiado pelo investidor Yuri Milner, é o esforço de SETI mais bem financiado e mais amplo em escopo já realizado, usando radiotelescópios como o de Green Bank e o Parkes, na Austrália, além de buscas ópticas por pulsos de laser. O programa já produziu dezenas de artigos técnicos, incluindo buscas recentes em arquivos de dados históricos com métodos de aprendizado de máquina e observações direcionadas a alvos específicos, como o objeto interestelar 3I/ATLAS, de passagem pelo sistema solar.<sup class="cit"><a href="#f15">15</a></sup> Até hoje, nenhuma dessas buscas produziu um sinal confirmado.</p>

<p>Fora do rádio, uma busca notável foi conduzida pelo astrônomo Jason Wright e colegas entre 2014 e 2015, o projeto <strong>Ĝ</strong> (G-HAT, de "Glimpsing Heat from Alien Technologies"). A ideia partiu de um raciocínio de Freeman Dyson dos anos 1960: uma civilização que capturasse grande parte da energia de sua estrela para sustentar seu próprio crescimento, uma megaestrutura hoje chamada informalmente de <strong>esfera de Dyson</strong>, deveria reemitir essa energia como calor, detectável como excesso de radiação infravermelha incomum para o tipo de estrela observada. Wright e colegas vasculharam dados do satélite WISE cobrindo cerca de 100 mil galáxias em busca desse excesso de calor anômalo.<sup class="cit"><a href="#f11">11</a></sup> Não encontraram nenhuma candidata inequívoca a civilização de escala galáctica (o que corresponderia, na classificação informal de Kardashev, a uma civilização de "Tipo III"). Alguns objetos com sinais parcialmente anômalos apareceram e foram investigados, mas em todos os casos até agora explicações astrofísicas convencionais, como poeira quente natural, permaneceram plausíveis ou mais prováveis.</p>

<div class="marca consenso">
<span class="rot">Resumo do estado observacional</span>
<p>Décadas de busca por rádio, uma busca ampla por megaestruturas em cerca de 100 mil galáxias, e o programa de SETI mais bem financiado da história não produziram, até hoje, nenhum sinal, estrutura ou vestígio confirmado de origem tecnológica não humana. Isso é evidência real, que restringe hipóteses, sem provar de forma definitiva nenhuma delas.</p>
</div>

<h3>Os limites epistêmicos do próprio campo</h3>

<p>Um ponto que separa astrobiologia de outras ciências observacionais é o tamanho da amostra: n=1. Conhecemos exatamente um planeta com vida, um histórico evolutivo, uma espécie que desenvolveu tecnologia. Qualquer generalização sobre "como a vida costuma se comportar" ou "quanto tempo civilizações costumam durar" está, na verdade, extrapolando de um único caso, o que estatisticamente é o pior tipo possível de amostra para generalizar. Isso não significa que o raciocínio seja inútil, mas significa que a incerteza é estrutural e não vai desaparecer só com mais anos de reflexão teórica. Ela só diminui com dados novos: mais exoplanetas caracterizados, atmosferas analisadas em busca de biossinaturas por telescópios como o James Webb e seus sucessores, e buscas cada vez mais sensíveis por tecnossinaturas.</p>

<p>Os termos da equação de Drake ligados à astronomia, R*, f<sub>p</sub> e n<sub>e</sub>, saíram de chute para estimativa com base observacional nos últimos vinte anos, graças ao Kepler e ao TESS. Isso é um exemplo raro e animador de um problema originalmente especulativo virando ciência mensurável aos poucos. Os termos ligados à biologia e à sociologia de civilizações tecnológicas, f<sub>l</sub>, f<sub>i</sub>, f<sub>c</sub> e L, continuam praticamente onde estavam em 1961: sem dado direto algum. Enquanto isso não mudar, o paradoxo de Fermi continuará sendo uma pergunta genuinamente aberta, e qualquer pessoa que apresente uma resposta como definitiva, para qualquer lado, está dizendo mais do que os dados permitem dizer.</p>
` }
},

sintese: {
  definicoes: [
    { termo: "Paradoxo de Fermi", def: "A tensão entre a alta probabilidade, sugerida por raciocínios do tipo equação de Drake, de existirem civilizações tecnológicas na galáxia e a ausência completa de qualquer evidência observada delas até hoje." },
    { termo: "Equação de Drake", def: "Ferramenta proposta por Frank Drake em 1961 que organiza a estimativa do número de civilizações detectáveis na galáxia como produto de sete fatores, dos quais só os primeiros três têm hoje base observacional razoável." },
    { termo: "Grande Filtro", def: "Conceito proposto por Robin Hanson em 1998: algum obstáculo extremamente improvável na trajetória de origem química da vida até civilização espacial avançada, que explicaria por que a galáxia parece vazia. Pode estar no passado (já superado) ou no futuro (ainda por vir), com implicações opostas para o destino humano." },
    { termo: "Zona habitável", def: "Faixa de distância de uma estrela em que um planeta rochoso poderia manter água líquida na superfície. É um critério de referência simplificado, não uma garantia de habitabilidade real." },
    { termo: "Biossinatura e tecnossinatura", def: "Biossinatura é uma característica detectável que sugere presença de vida, mesmo simples, como certos desequilíbrios químicos numa atmosfera. Tecnossinatura é um sinal que só faria sentido como produto de tecnologia, como uma transmissão de rádio artificial." },
    { termo: "Sondas de von Neumann", def: "Sondas hipotéticas capazes de se autorreplicar usando material dos sistemas estelares que visitam, propostas por Frank Tipler em 1980 como mecanismo que tornaria a colonização de toda a galáxia rápida em escala cósmica, a partir de uma única civilização de origem." }
  ],
  lembrar: [
    "O paradoxo de Fermi nasceu de uma pergunta informal de Enrico Fermi num almoço em Los Alamos em 1950, registrada por escrito só décadas depois por Eric Jones, a partir da memória dos outros presentes.",
    "A equação de Drake, de 1961, é uma ferramenta para organizar incertezas em pedaços, não uma fórmula que devolve uma resposta confiável. Seus três primeiros termos (taxa de formação estelar, fração de estrelas com planetas, planetas em zona habitável) hoje têm base observacional. Os outros quatro continuam sendo essencialmente chutes.",
    "O Grande Filtro, de Robin Hanson (1998), propõe que existe uma etapa extremamente rara entre origem química da vida e civilização espacial. Se ela já ficou para trás, fomos sortudos. Se ainda está à frente, a maioria das civilizações tecnológicas não sobrevive a ela, o que é um mau presságio para o nosso próprio futuro.",
    "Nenhuma das soluções propostas para o paradoxo (zoológico, Terra rara, autodestruição, sinais caros e breves, sondas de von Neumann, grabby aliens) tem status de consenso científico. A maioria não é sequer testável com os dados de hoje.",
    "Décadas de busca por SETI, o programa Breakthrough Listen desde 2015 e a busca por megaestruturas de Jason Wright em cerca de 100 mil galáxias não encontraram nenhum sinal, estrutura ou vestígio confirmado de origem extraterrestre.",
    "Astrobiologia trabalha com amostra n=1: só conhecemos um caso de vida, na Terra. Isso limita estruturalmente qualquer generalização sobre quão comum ou rara a vida, a inteligência ou a tecnologia detectável devem ser no universo."
  ],
  confusoes: [
    { erro: "O paradoxo de Fermi prova que estamos sozinhos no universo", correcao: "Não prova nada disso. É uma tensão não resolvida entre uma expectativa teórica e uma observação. As explicações vão desde 'estamos realmente sozinhos, ou quase' até 'existem civilizações, mas por algum motivo não as detectamos ainda', passando por dezenas de variações. Nenhuma tem evidência suficiente para ser chamada de solução." },
    { erro: "A equação de Drake calcula quantas civilizações existem", correcao: "A equação organiza a pergunta em fatores multiplicativos. Ela não calcula nada sozinha, porque pelo menos quatro dos sete fatores não têm valor conhecido, apenas palpites que variam por várias ordens de grandeza. O resultado depende inteiramente de quais números a pessoa escolhe colocar." },
    { erro: "O Grande Filtro é necessariamente algo no nosso futuro, como uma ameaça existencial", correcao: "O Grande Filtro pode estar no passado (por exemplo, a origem da vida ou a transição para células complexas, que podem ser eventos extremamente raros que já superamos) ou no futuro. Ninguém sabe qual das duas opções é a correta, e essa incerteza é o próprio ponto central do conceito, não um detalhe secundário." },
    { erro: "A ausência de sinal detectado não significa nada, porque o espaço é imenso", correcao: "O tamanho do espaço explica por que a busca é difícil, mas décadas de busca cada vez mais ampla e sensível, sem nenhum resultado positivo, são informação real. Elas não provam ausência de vida inteligente em nenhum lugar, mas restringem o conjunto de cenários plausíveis, o que é diferente de não dizer nada." },
    { erro: "A hipótese do zoológico ou a de grabby aliens são teorias científicas estabelecidas, no mesmo nível de, digamos, a existência de exoplanetas", correcao: "Exoplanetas são detectados diretamente por métodos observacionais replicáveis. As soluções do paradoxo de Fermi, incluindo essas duas, são hipóteses especulativas ou modelos estatísticos baseados em suposições fortes e não testadas, publicados em revistas científicas mas sem confirmação observacional independente. Misturar os dois níveis de confiança é o erro mais comum ao falar do tema." }
  ],
  numeros: [
    "1950: ano do almoço em Los Alamos em que Fermi teria perguntado 'onde está todo mundo'. O relato só foi publicado por escrito em 1985, por Eric Jones, relatório LA-10311-MS do Laboratório Nacional de Los Alamos.",
    "1961: ano da reunião de Green Bank em que Frank Drake propôs a equação que leva seu nome.",
    "1973: John Ball propõe a hipótese do zoológico. 1975: Michael Hart publica o argumento sobre tempo de colonização galáctica. 1980: Frank Tipler estende o argumento com sondas de von Neumann.",
    "1998: Robin Hanson propõe o conceito de Grande Filtro. 2000: Peter Ward e Donald Brownlee publicam a hipótese da Terra rara. 2021: Hanson e colegas publicam o modelo de grabby aliens.",
    "Mais de 6.000 exoplanetas confirmados até 2026, segundo o NASA Exoplanet Archive, contra zero sinais confirmados de origem extraterrestre em qualquer busca já realizada.",
    "A busca de megaestruturas conduzida por Jason Wright e colegas (2014-2015) cobriu cerca de 100 mil galáxias, sem candidata inequívoca a civilização de escala galáctica."
  ]
},

flashcards: [
  { f: "Quem, quando e onde teria feito a pergunta que originou o paradoxo de Fermi, e como esse episódio chegou até nós?", v: "Enrico Fermi, em 1950, num almoço em Los Alamos com Emil Konopinski, Edward Teller e Herbert York. O episódio só foi documentado por escrito décadas depois, quando Eric Jones entrevistou os sobreviventes e publicou um relatório do Laboratório Nacional de Los Alamos reconstituindo a cena a partir da memória de cada um." },
  { f: "O que a equação de Drake é, e o que ela não é?", v: "É uma ferramenta de 1961, de Frank Drake, que organiza a estimativa do número de civilizações detectáveis como produto de sete fatores. Não é uma fórmula que resolve sozinha e devolve um número confiável, porque vários de seus termos não têm valor conhecido." },
  { f: "Quais termos da equação de Drake têm hoje base observacional razoável, e quais continuam sendo essencialmente chutes?", v: "R* (taxa de formação estelar), f_p (fração de estrelas com planetas) e n_e (planetas em zona habitável) melhoraram muito com dados do Kepler e do TESS. f_l (fração onde surge vida), f_i (fração que desenvolve inteligência), f_c (fração que desenvolve tecnologia detectável) e L (duração da emissão de sinal) continuam sem base empírica direta." },
  { f: "O que é o Grande Filtro, e quem propôs o conceito?", v: "Proposto por Robin Hanson em 1998: um obstáculo extremamente improvável em algum ponto da trajetória entre a origem química da vida e a civilização capaz de expansão espacial, que explicaria por que a galáxia parece vazia de civilizações visíveis." },
  { f: "Por que a localização do Grande Filtro, no passado ou no futuro, muda completamente a implicação sobre o destino humano?", v: "Se o filtro já ficou para trás, alguma etapa inicial (como a origem da vida ou a transição para células complexas) é que era rara, e o futuro segue relativamente aberto. Se o filtro ainda está à frente, algo entre a nossa civilização atual e a expansão interestelar tende a impedir a maioria das civilizações de continuar, o que é um mau presságio para nós." },
  { f: "Qual é a hipótese da Terra rara e qual é a crítica mais comum a ela?", v: "Proposta por Ward e Brownlee em 2000: vida simples pode ser comum, mas vida complexa exigiria uma combinação improvável de fatores astrofísicos e geológicos específicos da Terra. A crítica principal é que a lista de condições foi construída a partir do único exemplo conhecido, correndo risco de circularidade, já que não há como saber quais condições são realmente necessárias e quais são coincidências locais." },
  { f: "Em que consiste a hipótese do zoológico, e por que ela é considerada fraca do ponto de vista de testabilidade?", v: "Proposta por John Ball em 1973: civilizações avançadas existiriam e escolheriam deliberadamente não interferir conosco. É fraca porque não proíbe nenhuma observação futura específica: qualquer resultado de busca pode ser reinterpretado como 'eles se escondem ainda melhor', o que a torna difícil de testar ou refutar." },
  { f: "Qual é o argumento de Hart (1975) e a extensão de Tipler (1980) sobre colonização galáctica?", v: "Hart argumentou que mesmo com naves lentas a colonização de toda a galáxia levaria apenas alguns milhões de anos, pouco frente à idade da galáxia. Tipler estendeu isso propondo sondas de von Neumann, capazes de se autorreplicar, que tornariam essa expansão ainda mais rápida. A ausência de qualquer vestígio de colonização seria, para eles, evidência de que não existem outras civilizações tecnológicas na galáxia." },
  { f: "Quais são os pontos fracos apontados no argumento de Hart-Tipler?", v: "Ele supõe que colonizar a galáxia é objetivo universal de qualquer civilização avançada, que sondas autorreplicantes são tecnicamente viáveis, e que a expansão, uma vez iniciada, seria total e permanente. Nenhuma dessas suposições é comprovada nem refutada." },
  { f: "O que o modelo de grabby aliens, de Hanson e colegas (2021), propõe para explicar por que a humanidade parece ter surgido cedo na história do universo?", v: "Propõe que civilizações 'ruidosas' ou expansionistas ocupam grandes volumes de espaço de forma visível e impedem novas civilizações 'silenciosas' de surgirem dentro desse território. Civilizações silenciosas só surgiriam em regiões ainda não ocupadas, e observar-se num momento relativamente cedo do universo seria exatamente o esperado sob essa hipótese." },
  { f: "O que foi o projeto Ĝ (G-HAT) de Jason Wright e colegas, e o que ele encontrou?", v: "Uma busca, entre 2014 e 2015, por excesso de radiação infravermelha em cerca de 100 mil galáxias, usando dados do satélite WISE, procurando sinal de megaestruturas do tipo esfera de Dyson que capturassem grande parte da energia estelar de uma civilização avançada. Não encontrou nenhuma candidata inequívoca a civilização de escala galáctica." },
  { f: "Por que a astrobiologia trabalha com um problema estrutural de amostra, e o que isso significa na prática?", v: "Porque conhecemos exatamente um caso de vida no universo, a Terra: n=1. Qualquer generalização sobre quão comum é a vida, a inteligência ou a tecnologia detectável está extrapolando de uma única amostra, o pior caso possível para generalização estatística. A incerteza só diminui com dados novos, como caracterização de atmosferas de exoplanetas e buscas mais sensíveis por sinais." }
],

prova: [
  { camada: "nucleo",
    q: "O que exatamente o paradoxo de Fermi descreve?",
    alts: [
      "A prova matemática de que a vida inteligente não pode existir fora da Terra.",
      "A tensão entre a expectativa, baseada em raciocínios sobre o número de estrelas e planetas, de que civilizações tecnológicas deveriam ser detectáveis, e a ausência completa de evidência observada delas.",
      "Um cálculo exato do número de civilizações extraterrestres existentes hoje na galáxia.",
      "A descoberta de um sinal de rádio não explicado, captado em 1977."
    ],
    correta: 1,
    porque: "O paradoxo é uma tensão entre expectativa e observação, não uma prova em nenhuma direção nem um cálculo exato. A quarta alternativa descreve o sinal Wow!, um evento real, mas isolado, e não é o que define o paradoxo em si." },

  { camada: "nucleo",
    q: "Segundo o relato mais aceito, quando e onde Fermi teria feito a pergunta que deu origem ao nome do paradoxo?",
    alts: [
      "Numa conferência pública sobre exobiologia em 1961.",
      "Num artigo científico publicado por ele em 1950.",
      "Numa conversa informal durante um almoço em Los Alamos, em 1950, documentada por escrito só décadas depois.",
      "Numa entrevista de rádio concedida pouco antes de sua morte."
    ],
    correta: 2,
    porque: "O episódio é uma lembrança informal, reconstituída por Eric Jones a partir de entrevistas com os outros presentes no almoço, e publicada só décadas depois. Fermi nunca publicou nada sobre o assunto." },

  { camada: "nucleo",
    q: "Qual das afirmações abaixo é fato estabelecido, e não hipótese ou interpretação?",
    alts: [
      "A vida inteligente é extremamente rara no universo.",
      "Já existem mais de 6 mil exoplanetas confirmados, e nenhuma busca científica jamais confirmou um sinal de origem extraterrestre.",
      "O Grande Filtro está localizado na transição entre células simples e complexas.",
      "Civilizações tecnológicas tendem a se autodestruir antes de colonizar o espaço."
    ],
    correta: 1,
    porque: "A contagem de exoplanetas e a ausência de sinal confirmado são observações diretas. As outras três alternativas são hipóteses debatidas, sem evidência que as estabeleça como fato." },

  { camada: "nucleo",
    q: "Por que a expressão 'ausência de evidência não é evidência de ausência' pode enganar se levada longe demais?",
    alts: [
      "Porque, na verdade, ausência de evidência sempre prova ausência do fenômeno.",
      "Porque décadas de busca cada vez mais ampla e sensível, sem resultado positivo, constituem informação real que restringe hipóteses plausíveis, mesmo sem provar nada de forma definitiva.",
      "Porque a frase se aplica só a fenômenos biológicos, não a sinais de rádio.",
      "Porque o paradoxo de Fermi já foi resolvido e a frase não se aplica mais a ele."
    ],
    correta: 1,
    porque: "A frase é logicamente correta no sentido estrito, mas usada para sugerir que buscas sem resultado 'não dizem nada' exagera na direção oposta. Busca extensa e sem sucesso é evidência fraca, porém real, contra certas hipóteses." },

  { camada: "aprofundamento",
    q: "Qual é a diferença de solidez entre os termos R*, f_p, n_e e os termos f_l, f_i, f_c, L na equação de Drake?",
    alts: [
      "Não há diferença: todos os sete termos são igualmente especulativos desde 1961.",
      "R*, f_p e n_e hoje têm base observacional razoável, sobretudo depois de missões como Kepler e TESS, enquanto f_l, f_i, f_c e L continuam sendo essencialmente palpites, sem dado direto.",
      "Todos os sete termos já têm hoje medição direta e precisa.",
      "f_l, f_i, f_c e L são os termos mais bem medidos, porque dependem só de biologia terrestre conhecida."
    ],
    correta: 1,
    porque: "Os três primeiros termos são astronômicos e se beneficiaram diretamente da revolução dos exoplanetas. Os quatro últimos dependem de biologia e sociologia de civilizações, e a amostra disponível continua sendo um único caso, a Terra." },

  { camada: "aprofundamento",
    q: "O que o conceito de Grande Filtro, de Robin Hanson (1998), propõe?",
    alts: [
      "Que existe uma barreira física real no espaço que impede viagens interestelares.",
      "Que deve existir alguma etapa extremamente improvável na trajetória entre a origem química da vida e uma civilização de expansão espacial, e que essa etapa pode estar no nosso passado ou no nosso futuro.",
      "Que todas as civilizações tecnológicas se destroem em guerra nuclear.",
      "Que a NASA filtra deliberadamente informações sobre vida extraterrestre."
    ],
    correta: 1,
    porque: "O Grande Filtro é um conceito estatístico sobre a raridade de alguma etapa evolutiva ou tecnológica, não uma barreira física nem uma afirmação sobre encobrimento de informação. A localização da etapa rara, passado ou futuro, é justamente o que não se sabe." },

  { camada: "aprofundamento",
    q: "Por que a transição de célula procarionte para eucarionte é citada como candidata a etapa do Grande Filtro?",
    alts: [
      "Porque nunca foi observada acontecer em laboratório.",
      "Porque levou cerca de 1,5 a 2 bilhões de anos para ocorrer na história da Terra depois que a vida simples já existia, e parece ter acontecido uma única vez.",
      "Porque células eucariontes são fisicamente maiores que procariontes.",
      "Porque só ocorre em ambientes com oxigênio abundante."
    ],
    correta: 1,
    porque: "O intervalo longo e a aparente unicidade do evento na história evolutiva terrestre sugerem que pode ser uma transição rara, embora esse seja um argumento por ausência de repetição num único histórico, evidência mais fraca do que replicação experimental." },

  { camada: "aprofundamento",
    q: "Qual é a diferença entre biossinatura e tecnossinatura?",
    alts: [
      "São sinônimos usados por diferentes grupos de pesquisa para o mesmo conceito.",
      "Biossinatura indica presença de vida, mesmo simples, como desequilíbrios químicos numa atmosfera; tecnossinatura é um sinal que só faria sentido como produto de tecnologia.",
      "Biossinatura só pode ser detectada por rádio, enquanto tecnossinatura só pode ser detectada por luz visível.",
      "Tecnossinatura é um termo usado exclusivamente para descrever sondas de von Neumann."
    ],
    correta: 1,
    porque: "A distinção separa evidência de vida em geral (biossinatura) de evidência específica de tecnologia (tecnossinatura), e importa porque telescópios atuais já podem, em princípio, buscar biossinaturas em atmosferas de exoplanetas, um alvo mais alcançável no curto prazo." },

  { camada: "extensao",
    q: "Por que a hipótese do zoológico é considerada fraca do ponto de vista de testabilidade, mesmo sendo logicamente possível?",
    alts: [
      "Porque contraria diretamente dados observacionais já coletados.",
      "Porque não proíbe nenhuma observação futura específica: qualquer resultado de busca pode ser reinterpretado como uma civilização se escondendo ainda melhor.",
      "Porque nenhum cientista sério já a discutiu em publicação revisada por pares.",
      "Porque ela pressupõe que a Terra é o único planeta habitado da galáxia."
    ],
    correta: 1,
    porque: "O problema não é contradizer dados, é não gerar previsão que possa falhar. Uma hipótese que acomoda qualquer resultado de busca, passado ou futuro, é difícil de diferenciar de pura especulação, ainda que seja logicamente coerente." },

  { camada: "extensao",
    q: "O que o argumento de Hart (1975), estendido por Tipler (1980) com sondas de von Neumann, conclui, e qual é a fragilidade central desse argumento?",
    alts: [
      "Conclui que a colonização da galáxia levaria bilhões de anos, tempo maior que a idade do universo; a fragilidade é ignorar a expansão do universo.",
      "Conclui que a ausência de vestígios de colonização é evidência de que não existem outras civilizações tecnológicas na galáxia; a fragilidade é depender de suposições não comprovadas, como colonização ser objetivo universal e sondas autorreplicantes serem viáveis.",
      "Conclui que sondas de von Neumann já foram detectadas no sistema solar; a fragilidade é a falta de imagens dessas sondas.",
      "Conclui que a Terra é o resultado de uma colonização anterior; a fragilidade é contrariar a datação geológica do planeta."
    ],
    correta: 1,
    porque: "O argumento de Hart-Tipler é sobre escala de tempo de colonização versus ausência observada de colonizadores, e sua conclusão forte depende de suposições sobre motivação e viabilidade tecnológica que ninguém provou nem refutou." },

  { camada: "extensao",
    q: "O modelo de 'grabby aliens' de Hanson e colegas (2021) parte de qual observação para construir seu argumento?",
    alts: [
      "A detecção de um sinal de rádio não identificado em 2020.",
      "O fato de a humanidade parecer ter surgido relativamente cedo na história do universo, num momento em que a maioria das estrelas ainda não se formou.",
      "A ausência de água líquida detectada em exoplanetas próximos.",
      "O resultado do projeto Ĝ (G-HAT) sobre megaestruturas."
    ],
    correta: 1,
    porque: "O ponto de partida do modelo é essa 'precocidade' cósmica da humanidade, tratada como um dado a explicar. O modelo propõe que civilizações expansionistas ocupam regiões do espaço e impedem novas civilizações silenciosas de surgirem ali, o que tornaria surgir cedo mais provável sob essa hipótese específica." },

  { camada: "extensao",
    q: "O que a busca do projeto Ĝ (G-HAT), liderada por Jason Wright, procurava, e o que ela encontrou em cerca de 100 mil galáxias examinadas?",
    alts: [
      "Procurava sinais de rádio de banda estreita, e encontrou um candidato ainda em investigação.",
      "Procurava excesso de radiação infravermelha compatível com megaestruturas do tipo esfera de Dyson, e não encontrou nenhuma candidata inequívoca a civilização de escala galáctica.",
      "Procurava exoplanetas em zona habitável, e confirmou milhares de novos candidatos.",
      "Procurava evidência de guerra nuclear em civilizações extintas, através de espectroscopia estelar."
    ],
    correta: 1,
    porque: "O projeto Ĝ usou dados infravermelhos do satélite WISE para procurar o calor residual que uma civilização capturando grande parte da energia de sua estrela deveria produzir. Não achou nenhuma candidata inequívoca, embora alguns objetos anômalos tenham sido investigados e, até agora, explicações astrofísicas convencionais permaneçam mais prováveis." }
],

fontes: [
  { n: 1, tipo: "fonte primária", ref: "Jones, E. M. '\"Where is everybody?\" An account of Fermi's question'. Los Alamos National Laboratory, relatório técnico LA-10311-MS, 1985. Reconstituição do almoço de 1950 em Los Alamos a partir de entrevistas com Teller, York e Konopinski.", url: "https://sgp.fas.org/othergov/doe/lanl/la-10311-ms.pdf" },
  { n: 2, tipo: "artigo", ref: "Gray, R. H. 'The Fermi Paradox Is Neither Fermi's Nor a Paradox'. <em>Astrobiology</em> 15(3):195-199, 2015. Reconstrução histórica e crítica do nome e da formulação popular do paradoxo.", url: "https://arxiv.org/abs/1605.09187" },
  { n: 3, tipo: "recurso", ref: "SETI Institute. 'Drake Equation'. Página de referência institucional sobre a origem e os termos da equação.", url: "https://www.seti.org/research/seti-101/drake-equation/" },
  { n: 4, tipo: "fonte primária", ref: "Hanson, R. 'The Great Filter, Are We Almost Past It?'. Ensaio de working paper, George Mason University, setembro de 1998. Formulação original do conceito de Grande Filtro.", url: "https://mason.gmu.edu/~rhanson/greatfilter.html" },
  { n: 5, tipo: "fonte primária", ref: "Hart, M. H. 'An Explanation for the Absence of Extraterrestrials on Earth'. <em>Quarterly Journal of the Royal Astronomical Society</em> 16:128-135, 1975. Argumento sobre a escala de tempo da colonização galáctica.", url: "https://articles.adsabs.harvard.edu/pdf/1975QJRAS..16..128H" },
  { n: 6, tipo: "fonte primária", ref: "Tipler, F. J. 'Extraterrestrial Intelligent Beings Do Not Exist'. <em>Quarterly Journal of the Royal Astronomical Society</em> 21:267-281, 1980. Extensão do argumento de Hart com sondas de von Neumann; origem da conjectura de Hart-Tipler.", url: "https://articles.adsabs.harvard.edu/pdf/1980QJRAS..21..267T" },
  { n: 7, tipo: "fonte primária", ref: "Ball, J. A. 'The zoo hypothesis'. <em>Icarus</em> 19(3):347-349, 1973. Formulação original da hipótese do zoológico.", url: "https://www.sciencedirect.com/science/article/abs/pii/0019103573901115" },
  { n: 8, tipo: "livro", ref: "Ward, P. &amp; Brownlee, D. <em>Rare Earth: Why Complex Life Is Uncommon in the Universe</em>. Copernicus Books, 2000. Formulação da hipótese da Terra rara.", url: "https://en.wikipedia.org/wiki/Rare_Earth_hypothesis" },
  { n: 9, tipo: "revisão", ref: "Burchell, M. J. 'W(h)ither the Drake equation?'. <em>International Journal of Astrobiology</em> 5(3):243-250, 2006. Contexto histórico da reunião de Green Bank de 1961 e discussão crítica dos termos da equação.", url: "https://doi.org/10.1017/S1473550406003107" },
  { n: 10, tipo: "artigo", ref: "Hanson, R., Martin, D., McCarter, C. &amp; Paulson, J. 'If Loud Aliens Explain Human Earliness, Quiet Aliens Are Also Rare'. <em>The Astrophysical Journal</em> 922(2):182, 2021. Modelo de 'grabby aliens'.", url: "https://arxiv.org/abs/2102.01522" },
  { n: 11, tipo: "artigo", ref: "Wright, J. T., Griffith, R. L., Sigurdsson, S., Povich, M. S. &amp; Mullan, B. 'The Ĝ Infrared Search for Extraterrestrial Civilizations with Large Energy Supplies. II. Framework, Strategy, and First Result'. <em>The Astrophysical Journal</em> 792(1):27, 2014. Busca por megaestruturas em cerca de 100 mil galáxias usando dados do WISE.", url: "https://iopscience.iop.org/article/10.1088/0004-637X/792/1/27" },
  { n: 12, tipo: "recurso", ref: "NASA Exoplanet Archive, Caltech/IPAC. Página de contagem de exoplanetas confirmados, consultada em agosto de 2026: mais de 6.000 exoplanetas confirmados.", url: "https://exoplanetarchive.ipac.caltech.edu/docs/counts_detail.html" },
  { n: 13, tipo: "artigo", ref: "Kipping, D. 'An objective Bayesian analysis of life's early start and our late arrival'. <em>Proceedings of the National Academy of Sciences</em> 117(22):11995-12003, 2020. Análise bayesiana sobre a raridade da abiogênese a partir do momento em que a vida surgiu na Terra.", url: "https://doi.org/10.1073/pnas.1921655117" },
  { n: 14, tipo: "artigo", ref: "Haqq-Misra, J., Kopparapu, R. K. &amp; Schwieterman, E. W. 'Observational Constraints on the Great Filter'. <em>Astrobiology</em> 20(11):1350-1355, 2020. Proposta de usar biossinaturas e tecnossinaturas futuras para restringir onde está o Grande Filtro.", url: "https://doi.org/10.1089/ast.2019.2154" },
  { n: 15, tipo: "artigo", ref: "Equipe do Breakthrough Listen. 'A Novel Technosignature Search in the Breakthrough Listen Green Bank Telescope Archive'. <em>The Astronomical Journal</em>, 2025. Exemplo de busca recente de tecnossinaturas com métodos de aprendizado de máquina.", url: "https://iopscience.iop.org/article/10.3847/1538-3881/adbc5e" },
  { n: 16, tipo: "revisão", ref: "Wikipedia. 'Great Filter'. Verbete de referência geral sobre as nove etapas evolutivas propostas por Hanson e candidatos discutidos na literatura.", url: "https://en.wikipedia.org/wiki/Great_Filter" }
]
};
