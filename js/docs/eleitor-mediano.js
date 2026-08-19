CONTEUDOS["eleitor-mediano"] = {
termo: "Teorema do eleitor mediano",
area: "Ciência Política",
subtitulo: "Sob um conjunto específico de condições, dois candidatos competindo por votos deveriam convergir para exatamente a mesma posição, a do eleitor do meio da distribuição. Isso é matematicamente demonstrável. O problema é que as condições exigidas quase nunca se aplicam ao mundo real, e entender exatamente onde elas falham explica boa parte da polarização política que o teorema, na sua forma pura, não prevê.",
prerequisitos: [
  "Nenhum pré-requisito técnico. Basta aceitar que eleitores podem ser ordenados, aproximadamente, ao longo de um espectro político de um extremo a outro.",
  "Para o aprofundamento: familiaridade básica com a ideia de que modelos matemáticos em ciências sociais fazem suposições simplificadoras para tornar um problema tratável."
],
conexoes: [
  { termo: "Tragédia dos comuns", relacao: "Ambos são modelos formais influentes de ciência política e economia que descrevem um resultado teórico preciso sob condições específicas, condições que a realidade só cumpre parcialmente." },
  { termo: "Seleção adversa", relacao: "Os dois são exemplos de como um modelo simplificado, isolando um mecanismo específico, pode revelar uma lógica real e importante sem pretender descrever perfeitamente qualquer situação concreta." },
  { termo: "Falseabilidade e demarcação (Popper)", relacao: "O teorema do eleitor mediano é um caso interessante para pensar sobre testabilidade: suas previsões dependem de premissas (unidimensionalidade, informação completa) que raramente são satisfeitas, complicando testes empíricos diretos." },
  { termo: "Efeito Cantillon", relacao: "Ambos os temas envolvem teorias formais de ciências sociais com origem específica e clara, cuja aplicação e alcance real fora do modelo original geram debate contínuo entre especialistas." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Imagine uma eleição com apenas um tema em disputa, algo que pode ser representado como uma linha reta, do "mais à esquerda" ao "mais à direita" nesse tema específico. Cada eleitor tem uma posição preferida nessa linha, e vota no candidato cuja posição está mais próxima da sua. Se existem exatamente dois candidatos competindo por votos, e ambos querem maximizar o número de votos recebidos, o que cada um deveria fazer?</p>

<p>A resposta, formalizada pela primeira vez de forma completa pelo economista escocês Duncan Black em 1948, é contraintuitiva à primeira vista: os dois candidatos deveriam convergir exatamente para a mesma posição, a do <strong>eleitor mediano</strong>, aquele que está bem no meio da distribuição de eleitores ao longo da linha (com exatamente metade dos eleitores à sua esquerda e metade à sua direita).<sup class="cit"><a href="#f2">2</a></sup> Qualquer candidato posicionado à esquerda dessa posição mediana perde para um oponente que se posicione um pouco mais perto do meio, porque esse oponente conquista todos os eleitores entre as duas posições, mais a metade que já estava a favor de cada lado. O mesmo raciocínio, aplicado repetidamente, empurra os dois candidatos para o centro exato da distribuição.</p>

<h3>De onde vem essa ideia</h3>

<p>A intuição matemática por trás do teorema já havia sido explorada por Harold Hotelling em 1929, num contexto diferente: por que duas lojas de doces, numa mesma rua reta, tendem a se instalar lado a lado, bem no meio da rua, em vez de se espalharem para atender melhor cada ponta da rua separadamente?<sup class="cit"><a href="#f1">1</a></sup> A resposta é a mesma lógica: cada loja, ao se mover em direção ao centro, "rouba" clientes do lado adversário sem perder nenhum cliente do próprio lado. Duncan Black formalizou essa lógica especificamente para votação por maioria em 1948, e Anthony Downs, em seu livro de 1957 <em>Uma Teoria Econômica da Democracia</em>, popularizou a aplicação do teorema à competição eleitoral entre partidos políticos, prevendo que partidos racionais deveriam convergir para posições centristas semelhantes.<sup class="cit"><a href="#f3">3</a></sup></p>

<div class="marca consenso">
<span class="rot">O que é matematicamente sólido</span>
<p>Sob as condições exatas do modelo (uma única dimensão de disputa, eleitores com preferências bem comportadas ao longo dessa dimensão, dois candidatos, informação completa sobre as preferências dos eleitores, e nenhum outro fator interferindo na decisão de voto além da posição no espectro), o resultado de convergência para o eleitor mediano é uma conclusão matemática rigorosamente demonstrada, não uma hipótese vaga. A disputa não é sobre se a matemática está correta dentro do modelo. É sobre o quanto o modelo, com suas condições específicas, corresponde a eleições reais.</p>
</div>

<h3>Por que a política real raramente parece assim</h3>

<p>Se o teorema estivesse certo sobre o mundo real sem qualificação, seria de esperar que partidos concorrentes em qualquer democracia bipartidária convergissem para posições quase idênticas, moderadas e centristas. Isso claramente não descreve boa parte da política contemporânea, marcada, em muitos países, por polarização crescente entre partidos, não convergência. A explicação não é que o teorema esteja "errado" matematicamente, é que as condições que ele exige raramente se aplicam com exatidão à política real, algo que também ajuda a explicar muita coisa sobre por que ela funciona do jeito que funciona.</p>
` },

aprofundamento: { minutos: 30, html: `
<h3>A primeira condição que costuma falhar: mais de uma dimensão</h3>

<p>Eleições reais quase nunca envolvem um único tema em disputa. Um eleitor forma sua decisão considerando, simultaneamente, política econômica, política externa, questões sociais, meio ambiente, segurança pública, e dezenas de outros eixos, cada um dos quais poderia, isoladamente, ser representado como uma linha do "mais a favor" ao "mais contra". Quando o espaço de decisão tem duas ou mais dimensões independentes, o resultado matemático muda de forma dramática: Richard McKelvey demonstrou, em 1976, o que ficou conhecido como <strong>teorema do caos</strong>, mostrando que, em espaços multidimensionais, geralmente não existe nenhuma posição estável de equilíbrio (nenhum "eleitor mediano" multidimensional bem definido), e que é possível, em princípio, movimentar a política de qualquer posição para qualquer outra através de uma sequência específica de votações por maioria.<sup class="cit"><a href="#f4">4</a></sup> Isso significa que, assim que mais de um eixo relevante entra em jogo, a previsão clara e única de convergência ao centro deixa de valer de forma automática.</p>

<h3>Outras condições que raramente se sustentam</h3>

<p>Além da multidimensionalidade, várias outras premissas do modelo original são, na melhor das hipóteses, aproximações grosseiras da realidade política. Candidatos não têm informação perfeita sobre a distribuição exata de preferências dos eleitores, e frequentemente atuam sob incerteza considerável. Eleitores nem sempre votam de forma puramente instrumental, baseada apenas na proximidade ideológica; identidade partidária, lealdade histórica, e fatores não ideológicos (carisma, competência percebida, questões de caráter) também pesam na decisão. E o pressuposto de exatamente dois candidatos concorrendo por todos os votos simplifica demais sistemas com mais de dois partidos relevantes, comuns na maioria das democracias fora dos Estados Unidos.</p>

<div class="tabela-env">
<table>
<thead><tr><th>Premissa do modelo original</th><th>Situação na política real</th></tr></thead>
<tbody>
<tr><td>Uma única dimensão de disputa</td><td>Múltiplas dimensões simultâneas (economia, cultura, política externa, etc.), gerando instabilidade segundo o teorema do caos de McKelvey</td></tr>
<tr><td>Informação completa sobre preferências dos eleitores</td><td>Incerteza considerável sobre a distribuição real de opinião, mesmo com pesquisas de opinião modernas</td></tr>
<tr><td>Voto puramente baseado em proximidade ideológica</td><td>Identidade partidária, carisma, competência percebida e outros fatores não ideológicos também pesam</td></tr>
<tr><td>Exatamente dois candidatos competindo</td><td>Muitos sistemas eleitorais têm mais de dois partidos relevantes, mudando a dinâmica de convergência prevista</td></tr>
</tbody>
</table>
</div>

<h3>O papel específico das eleições primárias</h3>

<p>Uma explicação popular para a polarização política é que eleições primárias (em que apenas eleitores de um partido escolhem seu candidato, tipicamente mais ideológicos que o eleitorado geral) empurrariam candidatos para posições mais extremas do que a lógica do eleitor mediano geral preveria. A pesquisa mais recente sobre esse mecanismo específico, porém, mostra um quadro mais nuançado: primárias sozinhas não são suficientes para gerar polarização, sendo necessária a presença de outros fatores complementares (como eleitores motivados por posição ideológica, não apenas por probabilidade de vitória) para que esse efeito apareça de forma robusta.<sup class="cit"><a href="#f6">6</a></sup></p>
` },

extensao: { minutos: 60, html: `
<h3>O teorema do caos, com mais detalhe</h3>

<p>O resultado de McKelvey merece atenção extra porque é surpreendentemente forte, e não apenas "o modelo simples deixa de funcionar direito". Em espaços de decisão com duas ou mais dimensões, e usando regras de votação por maioria simples, o teorema mostra que, partindo de qualquer posição de política pública, existe uma sequência de propostas, cada uma vencendo a anterior por maioria de votos, que consegue levar o resultado final a qualquer outra posição imaginável no espaço de políticas, incluindo posições extremamente distantes ou até absurdas para a maioria dos eleitores individualmente.<sup class="cit"><a href="#f5">5</a></sup> Isso sugere que, em princípio, sistemas de votação majoritária multidimensional são, matematicamente, muito mais instáveis e manipuláveis do que a intuição sugere, algo que ajuda a explicar por que instituições políticas reais (regras de agenda, comitês, procedimentos legislativos formais) desempenham um papel crucial em produzir estabilidade que a votação majoritária pura, sozinha, não garante.</p>

<div class="marca controverso">
<span class="rot">Se o modelo simples falha tanto, ele ainda serve para algo?</span>
<p>Existe debate genuíno sobre quanto valor explicativo resta ao teorema do eleitor mediano, dado que suas condições ideais quase nunca se aplicam integralmente. Uma posição argumenta que o teorema continua sendo uma ferramenta útil como caso de referência, um ponto de partida teórico que ajuda a entender, por contraste, por que a política real diverge dele (e por quanto), do mesmo jeito que um físico usa um modelo de "atrito zero" mesmo sabendo que o atrito real nunca é zero. Outra posição, mais cética, argumenta que, uma vez que as condições do modelo falham de forma tão sistemática (multidimensionalidade quase sempre presente, informação sempre incompleta), o teorema tem pouco poder preditivo real sobre comportamento eleitoral concreto, servindo mais como exercício de elegância matemática do que como ferramenta empírica. Não há consenso definitivo sobre qual dessas leituras é mais correta.</p>
</div>

<h3>Reduzindo dimensões: por que a política às vezes parece mais simples do que a teoria prevê</h3>

<p>Um fato empírico interessante amortece um pouco a severidade do teorema do caos: em muitas democracias reais, apesar de existirem dezenas de questões politicamente relevantes, o comportamento de voto de boa parte dos eleitores e partidos pode ser razoavelmente bem descrito por uma única dimensão dominante (geralmente rotulada de "esquerda-direita"), porque posições em diferentes temas tendem a andar correlacionadas na prática (quem é mais à esquerda em política econômica tende a ser mais à esquerda também em outras questões, com frequência maior do que a independência estatística pura preveria). Essa correlação empírica entre dimensões, quando forte o suficiente, aproxima o comportamento observado do previsto por um modelo unidimensional simplificado, mesmo que a estrutura teórica subjacente seja, de fato, multidimensional. Isso não elimina o problema teórico apontado por McKelvey, mas explica por que a política real nem sempre se comporta com o caos completo que o teorema, em sua forma mais geral, permite.</p>

<h3>Implicações práticas para quem observa eleições</h3>

<p>A lição mais útil do teorema do eleitor mediano, hoje, não é prever que dois candidatos vão convergir automaticamente para o centro (eles frequentemente não convergem). É oferecer uma pergunta de diagnóstico: quando um sistema político não converge para o centro como o modelo simples preveria, vale perguntar qual das premissas está falhando naquele caso específico. É multidimensionalidade real (questões culturais e econômicas se descolando)? É informação incompleta sobre o eleitorado? É a presença de mais de dois competidores relevantes? É o papel de identidade partidária superando cálculo puramente ideológico? Cada resposta aponta para um mecanismo político diferente, e o próprio teorema, mesmo "falhando" como previsão literal, continua útil como estrutura para fazer essa pergunta de forma precisa.</p>
` }
},

sintese: {
  definicoes: [
    { termo: "Teorema do eleitor mediano", def: "Resultado formal, demonstrado por Duncan Black em 1948, segundo o qual, sob condições específicas (uma dimensão de disputa, dois candidatos, informação completa), candidatos competindo por votos convergem para a posição do eleitor mediano, aquele com exatamente metade do eleitorado de cada lado." },
    { termo: "Eleitor mediano", def: "O eleitor posicionado exatamente no meio da distribuição de preferências ao longo de uma dimensão de disputa política, com metade dos demais eleitores à sua esquerda e metade à sua direita." },
    { termo: "Teorema do caos (McKelvey-Schofield)", def: "Resultado demonstrado por Richard McKelvey em 1976, mostrando que, em espaços de decisão com duas ou mais dimensões, votação por maioria geralmente não tem posição de equilíbrio estável, e qualquer política pode, em princípio, ser alcançada a partir de qualquer outra por uma sequência de votações." },
    { termo: "Modelo espacial de competição", def: "Representação de candidatos e eleitores como pontos ao longo de uma ou mais dimensões, usada para modelar formalmente a decisão de voto e a escolha de posicionamento estratégico dos candidatos, com origem no trabalho de Harold Hotelling (1929) sobre competição entre firmas." },
    { termo: "Convergência (na competição eleitoral)", def: "Tendência prevista pelo modelo espacial simples de que candidatos concorrentes adotem posições políticas cada vez mais semelhantes entre si, aproximando-se do centro da distribuição de preferências dos eleitores." }
  ],
  lembrar: [
    "A intuição matemática do teorema vem de Harold Hotelling (1929), aplicada a competição entre firmas; Duncan Black (1948) formalizou a versão para votação por maioria; Anthony Downs (1957) popularizou a aplicação à competição entre partidos políticos.",
    "Sob as condições exatas do modelo (uma dimensão, dois candidatos, informação completa, voto puramente ideológico), a convergência para o eleitor mediano é uma conclusão matematicamente rigorosa, não uma hipótese vaga.",
    "A política real raramente satisfaz essas condições: eleições envolvem múltiplas dimensões, informação incompleta, mais de dois candidatos relevantes em muitos sistemas, e fatores de voto além da proximidade ideológica pura.",
    "Richard McKelvey (1976) provou o 'teorema do caos': em espaços multidimensionais, votação por maioria geralmente não tem posição de equilíbrio estável, o que explica boa parte de por que a política real não converge como o modelo simples preveria.",
    "Pesquisa recente mostra que eleições primárias, sozinhas, não são suficientes para gerar polarização; fatores complementares (como motivação ideológica dos eleitores) também precisam estar presentes.",
    "Em muitas democracias reais, posições em diferentes dimensões políticas tendem a estar correlacionadas (quem é mais à esquerda numa questão tende a ser mais à esquerda em outras), o que aproxima o comportamento observado do previsto por um modelo unidimensional simplificado, mesmo sem eliminar o problema teórico multidimensional.",
    "Existe debate genuíno, sem consenso definitivo, sobre quanto valor explicativo resta ao teorema quando suas condições ideais raramente se aplicam por completo."
  ],
  confusoes: [
    { erro: "O teorema do eleitor mediano prevê, de forma confiável, que candidatos em qualquer eleição real vão convergir para posições centristas quase idênticas", correcao: "A convergência só é matematicamente garantida sob condições específicas (uma dimensão, dois candidatos, informação completa) que raramente se aplicam integralmente à política real, onde múltiplas dimensões e outros fatores costumam impedir essa convergência." },
    { erro: "Como a política real frequentemente não converge para o centro, o teorema do eleitor mediano está matematicamente errado", correcao: "A matemática do teorema está correta dentro das condições do modelo. O que falha, na maior parte dos casos reais, são as premissas do modelo (unidimensionalidade, informação completa), não a lógica matemática em si." },
    { erro: "O teorema do caos de McKelvey (1976) mostra que qualquer resultado de política pública é igualmente provável em qualquer eleição multidimensional", correcao: "O teorema mostra que, em princípio, qualquer posição pode ser alcançada a partir de qualquer outra por uma sequência de votações majoritárias, mas isso é uma afirmação sobre possibilidade teórica, não sobre o que de fato acontece quando instituições reais (regras de agenda, procedimentos legislativos) restringem essas sequências." },
    { erro: "Eleições primárias são, sozinhas, a causa principal e suficiente da polarização política observada em muitos países", correcao: "Pesquisa mais recente mostra que primárias sozinhas não são suficientes para gerar polarização; é necessária a presença de fatores complementares, como eleitores motivados por posição ideológica além de probabilidade de vitória." },
    { erro: "Como as condições do modelo raramente se aplicam por completo, o teorema do eleitor mediano não tem nenhuma utilidade prática hoje", correcao: "Mesmo 'falhando' como previsão literal em muitos casos, o teorema continua útil como ferramenta de diagnóstico: perguntar qual premissa específica está falhando num sistema político real ajuda a identificar mecanismos concretos (multidimensionalidade, identidade partidária, número de competidores) por trás da não convergência observada." }
  ],
  numeros: [
    "Hotelling, H. (1929), Economic Journal 39:41-57: origem da intuição matemática de competição espacial, aplicada originalmente a firmas concorrentes.",
    "Black, D. (1948), Journal of Political Economy 56(1):23-34: primeira formalização completa do teorema do eleitor mediano para votação por maioria.",
    "Downs, A. An Economic Theory of Democracy, 1957: popularização da aplicação do teorema à competição entre partidos políticos.",
    "McKelvey, R. (1976): demonstração do teorema do caos, mostrando instabilidade geral de equilíbrio em espaços de decisão multidimensionais sob votação majoritária."
  ]
},

flashcards: [
  { f: "O que o teorema do eleitor mediano prevê, sob suas condições ideais?", v: "Que, numa disputa com uma única dimensão política e dois candidatos, ambos deveriam convergir para a posição do eleitor mediano, aquele com exatamente metade do eleitorado de cada lado." },
  { f: "Quem formalizou completamente o teorema do eleitor mediano, e em que ano?", v: "Duncan Black, em 1948, num artigo publicado no Journal of Political Economy." },
  { f: "De onde veio a intuição matemática original por trás do teorema, antes de sua formalização para votação?", v: "De Harold Hotelling, em 1929, num contexto de competição espacial entre firmas (por que duas lojas numa mesma rua tendem a se instalar lado a lado, no meio da rua)." },
  { f: "Quem popularizou a aplicação do teorema à competição entre partidos políticos, e em que obra?", v: "Anthony Downs, em seu livro de 1957, 'Uma Teoria Econômica da Democracia'." },
  { f: "Por que a convergência ao centro, prevista pelo teorema, raramente se observa em eleições reais?", v: "Porque as condições exigidas pelo modelo (uma única dimensão de disputa, informação completa, dois candidatos, voto puramente ideológico) raramente se aplicam integralmente à política real." },
  { f: "O que é o teorema do caos, demonstrado por Richard McKelvey em 1976?", v: "A demonstração de que, em espaços de decisão com duas ou mais dimensões, votação por maioria geralmente não tem posição de equilíbrio estável, e qualquer política pode, em princípio, ser alcançada a partir de qualquer outra por uma sequência de votações." },
  { f: "O que a existência do teorema do caos implica sobre a instabilidade de sistemas políticos multidimensionais?", v: "Que, matematicamente, esses sistemas são muito mais instáveis do que a intuição sugere, o que ajuda a explicar por que instituições reais (regras de agenda, procedimentos legislativos) são cruciais para produzir estabilidade que a votação majoritária pura não garante sozinha." },
  { f: "O que pesquisa recente mostra sobre o papel de eleições primárias na polarização política?", v: "Que primárias sozinhas não são suficientes para gerar polarização; são necessários fatores complementares, como eleitores motivados por posição ideológica, além de simples probabilidade de vitória." },
  { f: "Por que, apesar do teorema do caos, a política real às vezes se comporta de forma mais próxima ao modelo unidimensional simples?", v: "Porque posições em diferentes dimensões políticas tendem a estar correlacionadas na prática (quem é mais à esquerda numa questão tende a ser mais à esquerda em outras), aproximando o comportamento observado do previsto por um modelo unidimensional, mesmo sem eliminar o problema teórico multidimensional." },
  { f: "Quais são as principais premissas do modelo original que raramente se sustentam na política real, segundo a tabela do documento?", v: "Uma única dimensão de disputa, informação completa sobre preferências dos eleitores, voto puramente baseado em proximidade ideológica, e exatamente dois candidatos competindo." },
  { f: "Existe consenso sobre quanto valor explicativo resta ao teorema, dado que suas condições raramente se aplicam integralmente?", v: "Não. Uma posição defende que ele continua útil como caso de referência teórico; outra, mais cética, argumenta que tem pouco poder preditivo real sobre comportamento eleitoral concreto." },
  { f: "Qual é a utilidade prática mais defensável do teorema do eleitor mediano hoje, segundo o documento?", v: "Servir como ferramenta de diagnóstico: quando um sistema político não converge para o centro como o modelo simples preveria, perguntar qual premissa específica está falhando ajuda a identificar mecanismos políticos concretos por trás da não convergência." }
],

prova: [
  { camada: "nucleo",
    q: "O que o teorema do eleitor mediano prevê, sob suas condições ideais (uma dimensão, dois candidatos, informação completa)?",
    alts: [
      "Que candidatos deveriam se posicionar nos extremos opostos do espectro político para maximizar votos.",
      "Que dois candidatos competindo por votos deveriam convergir para a mesma posição, a do eleitor mediano.",
      "Que apenas um candidato pode vencer uma eleição, independentemente de sua posição política.",
      "Que eleitores sempre votam aleatoriamente, sem nenhuma lógica previsível."
    ],
    correta: 1,
    porque: "Esse é o resultado central do teorema: sob as condições específicas do modelo, a lógica competitiva empurra os dois candidatos para convergir exatamente na posição do eleitor do meio da distribuição." },

  { camada: "nucleo",
    q: "Quem formalizou completamente o teorema do eleitor mediano para votação por maioria, e em que ano?",
    alts: [
      "Anthony Downs, em 1957.",
      "Duncan Black, em 1948.",
      "Harold Hotelling, em 1929.",
      "Richard McKelvey, em 1976."
    ],
    correta: 1,
    porque: "Duncan Black formalizou a versão completa do teorema em 1948, embora a intuição matemática básica já existisse desde o trabalho de Hotelling em 1929, num contexto de competição entre firmas." },

  { camada: "nucleo",
    q: "Por que a convergência ao centro, prevista pelo teorema, raramente se observa em eleições reais?",
    alts: [
      "Porque eleitores nunca votam de forma racional em nenhuma circunstância.",
      "Porque as condições exigidas pelo modelo (uma única dimensão, informação completa, dois candidatos, voto puramente ideológico) raramente se aplicam integralmente à política real.",
      "Porque o teorema nunca foi matematicamente demonstrado de forma correta.",
      "Porque candidatos políticos são proibidos por lei de mudar de posição durante uma campanha."
    ],
    correta: 1,
    porque: "A matemática do teorema é sólida dentro de suas condições; o que falha, na maior parte dos casos reais, são as premissas simplificadoras do modelo, não a lógica interna da demonstração." },

  { camada: "aprofundamento",
    q: "O que é o teorema do caos, demonstrado por Richard McKelvey em 1976?",
    alts: [
      "A demonstração de que eleições sempre produzem resultados aleatórios e imprevisíveis.",
      "A demonstração de que, em espaços de decisão com duas ou mais dimensões, votação por maioria geralmente não tem posição de equilíbrio estável.",
      "Um teorema sobre a física do caos aplicado a sistemas climáticos, sem relação com ciência política.",
      "A prova de que o teorema do eleitor mediano é sempre válido, mesmo em múltiplas dimensões."
    ],
    correta: 1,
    porque: "Esse resultado mostra que, ao contrário do caso unidimensional simples, espaços multidimensionais de decisão política geralmente carecem de qualquer posição de equilíbrio estável sob votação majoritária pura." },

  { camada: "aprofundamento",
    q: "Segundo a tabela apresentada no documento, qual é a diferença entre a premissa de 'informação completa' do modelo original e a situação real?",
    alts: [
      "Não existe diferença nenhuma: candidatos sempre têm informação perfeita sobre as preferências dos eleitores.",
      "O modelo assume informação completa sobre preferências dos eleitores, enquanto na realidade existe incerteza considerável, mesmo com pesquisas de opinião modernas.",
      "A informação completa só existe em eleições com mais de dois candidatos.",
      "A premissa de informação completa nunca foi parte do modelo original de Hotelling, Black ou Downs."
    ],
    correta: 1,
    porque: "Essa é uma das premissas simplificadoras que mais claramente diverge da realidade política, onde candidatos e partidos operam sob incerteza considerável sobre a distribuição exata de opinião do eleitorado." },

  { camada: "aprofundamento",
    q: "O que pesquisa recente mostra sobre o papel isolado de eleições primárias na geração de polarização política?",
    alts: [
      "Que primárias são, sozinhas, suficientes e a causa principal de toda polarização política observada.",
      "Que primárias sozinhas não são suficientes para gerar polarização; são necessários fatores complementares, como eleitores motivados por posição ideológica.",
      "Que primárias nunca têm nenhum efeito sobre o posicionamento de candidatos.",
      "Que primárias só existem em sistemas políticos com mais de cinco partidos relevantes."
    ],
    correta: 1,
    porque: "A relação entre primárias e polarização é mais nuançada do que a explicação popular sugere: primárias por si só, sem fatores complementares, não produzem de forma robusta o efeito de polarização frequentemente atribuído a elas." },

  { camada: "aprofundamento",
    q: "Por que a correlação entre diferentes dimensões políticas (por exemplo, posição econômica e posição em questões culturais) é relevante para entender por que a política real nem sempre exibe o caos completo previsto por McKelvey?",
    alts: [
      "Porque essa correlação elimina completamente qualquer problema teórico apontado pelo teorema do caos.",
      "Porque, quando posições em diferentes dimensões tendem a andar juntas na prática, o comportamento observado se aproxima do previsto por um modelo unidimensional simplificado, mesmo que a estrutura subjacente seja multidimensional.",
      "Porque a correlação entre dimensões só ocorre em sistemas eleitorais com apenas um partido.",
      "Porque McKelvey provou que a correlação entre dimensões é sempre impossível na prática."
    ],
    correta: 1,
    porque: "Essa correlação empírica não elimina o problema teórico da multidimensionalidade, mas explica por que a política real, na prática, frequentemente se comporta de forma mais próxima e previsível do que o teorema do caos, em sua forma mais geral, permitiria." },

  { camada: "extensao",
    q: "Segundo o documento, existe consenso definitivo sobre quanto valor explicativo resta ao teorema do eleitor mediano, dado que suas condições ideais raramente se aplicam por completo à política real?",
    alts: [
      "Sim, há consenso total de que o teorema não tem nenhuma utilidade e deveria ser abandonado.",
      "Não. Uma posição defende que ele continua útil como caso de referência teórico; outra, mais cética, argumenta que tem pouco poder preditivo real, sem que haja consenso definitivo entre essas leituras.",
      "Sim, há consenso total de que o teorema descreve perfeitamente qualquer eleição real, sem exceção.",
      "A pergunta nunca foi discutida por nenhum cientista político."
    ],
    correta: 1,
    porque: "Esse é um debate genuíno e em aberto na ciência política, sem resolução unânime, sobre o valor de modelos formais simplificados cujas premissas divergem sistematicamente da realidade que pretendem descrever." },

  { camada: "extensao",
    q: "Qual é a utilidade prática mais defensável do teorema do eleitor mediano hoje, segundo a conclusão do documento?",
    alts: [
      "Nenhuma: o teorema deveria ser completamente descartado da ciência política moderna.",
      "Servir como ferramenta de diagnóstico: quando um sistema político não converge para o centro como o modelo simples preveria, perguntar qual premissa específica está falhando ajuda a identificar mecanismos políticos concretos.",
      "Prever com exatidão o resultado de qualquer eleição futura em qualquer país do mundo.",
      "Substituir completamente pesquisas de opinião pública como método de análise eleitoral."
    ],
    correta: 1,
    porque: "Mesmo 'falhando' como previsão literal em muitos casos reais, usar o teorema como ponto de referência para perguntar por que a convergência não ocorreu continua sendo uma ferramenta analítica útil e precisa." },

  { camada: "extensao",
    q: "Por que o teorema do caos de McKelvey (1976) é considerado um resultado 'surpreendentemente forte', segundo o documento, e não apenas uma limitação leve do modelo simples?",
    alts: [
      "Porque ele mostra que, em espaços multidimensionais, uma sequência de votações majoritárias pode, em princípio, levar o resultado de qualquer posição inicial a qualquer outra posição imaginável, incluindo posições extremas.",
      "Porque ele prova que eleições multidimensionais são sempre mais justas que eleições unidimensionais.",
      "Porque ele foi o primeiro teorema da história a usar qualquer forma de matemática aplicada à política.",
      "Porque ele mostra que apenas ditaduras sofrem do problema de instabilidade multidimensional, nunca democracias."
    ],
    correta: 1,
    porque: "A força do resultado está em sua generalidade: não é apenas que o equilíbrio simples desaparece, é que a instabilidade se torna tão completa que, em princípio, qualquer resultado de política pública se torna alcançável por manipulação sequencial de votações." }
],

fontes: [
  { n: 1, tipo: "fonte primária", ref: "Hotelling, H. 'Stability in Competition'. <em>The Economic Journal</em> 39(153):41-57, 1929.", url: "https://www.jstor.org/stable/2224214" },
  { n: 2, tipo: "fonte primária", ref: "Black, D. 'On the Rationale of Group Decision-Making'. <em>Journal of Political Economy</em> 56(1):23-34, 1948.", url: "https://www.journals.uchicago.edu/doi/10.1086/256633" },
  { n: 3, tipo: "fonte primária", ref: "Downs, A. <em>An Economic Theory of Democracy</em>. Harper &amp; Row, 1957.", url: "https://pages.uoregon.edu/myagkov/medianvot.pdf" },
  { n: 4, tipo: "fonte primária", ref: "McKelvey, R. D. 'Intransitivities in multidimensional voting models and some implications for agenda control'. <em>Journal of Economic Theory</em>, 1976.", url: "https://en.wikipedia.org/wiki/McKelvey%E2%80%93Schofield_chaos_theorem" },
  { n: 5, tipo: "revisão acadêmica", ref: "'On the instability of majority decision-making: testing the implications of the chaos theorems in a laboratory experiment'. <em>Theory and Decision</em>.", url: "https://link.springer.com/article/10.1007/s11238-019-09741-4" },
  { n: 6, tipo: "fonte primária", ref: "'Primaries and Candidate Polarization: Behavioral Theory and Experimental Evidence'. <em>American Political Science Review</em>.", url: "https://www.cambridge.org/core/journals/american-political-science-review/article/abs/primaries-and-candidate-polarization-behavioral-theory-and-experimental-evidence/1C1D65F65256F07A47B01BF990822A2B" },
  { n: 7, tipo: "revisão acadêmica", ref: "Congleton, R. D. 'The Median Voter Model'. Encyclopedia of Public Choice.", url: "https://pages.uoregon.edu/myagkov/medianvot.pdf" },
  { n: 8, tipo: "fonte primária", ref: "'Polarization, abstention, and the median voter theorem'. <em>Humanities and Social Sciences Communications</em>.", url: "https://www.nature.com/articles/s41599-022-01056-0" },
  { n: 9, tipo: "fonte primária", ref: "'No Polarization in Spite of Primaries: A Median Voter Theorem with Competitive Nominations'.", url: "https://link.springer.com/chapter/10.1007/978-3-319-15551-7_11" },
  { n: 10, tipo: "divulgação", ref: "Notes On Liberty. 'Can Median Voter Theorem explain political polarization?'.", url: "https://notesonliberty.com/2017/03/20/can-median-voter-theorem-explain-political-polarization/" },
  { n: 11, tipo: "enciclopédia", ref: "Oxford Reference. Verbete 'Median voter'.", url: "https://www.oxfordreference.com/display/10.1093/oi/authority.20110803100146688" },
  { n: 12, tipo: "fonte primária", ref: "'Testing the accuracy of the Downs' spatial voter model on forecasting the winners of the French parliamentary elections in May-June 2007'.", url: "https://www.sciencedirect.com/science/article/abs/pii/S0169207009000478" },
  { n: 13, tipo: "enciclopédia", ref: "Wikipedia. Verbete 'Median voter theorem', com panorama histórico e das principais críticas ao modelo.", url: "https://en.wikipedia.org/wiki/Median_voter_theorem" },
  { n: 14, tipo: "fonte primária", ref: "'Beyond the Median Voter Theorem: A New Framework for Ideological Positioning'.", url: "https://arxiv.org/pdf/2502.06562" },
  { n: 15, tipo: "fonte primária", ref: "'A walk down the middle lane of the Median Voter Theorem's Origins', revisão histórica sobre a origem e desenvolvimento do teorema.", url: "https://wiredspace.wits.ac.za/bitstreams/dca16f0f-5103-478d-ade5-87cf4be6911e/download" }
]
};

if (typeof module !== "undefined") { module.exports = { CONTEUDOS }; }
