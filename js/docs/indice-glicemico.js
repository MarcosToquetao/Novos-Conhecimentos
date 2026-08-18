CONTEUDOS["indice-glicemico"] = {
termo: "Índice glicêmico e resposta metabólica",
area: "Nutrição",
subtitulo: "Um número que classifica alimentos pela velocidade com que elevam a glicemia. A definição é precisa, a medição é padronizada, e mesmo assim o mesmo pão branco medido em 63 pessoas produziu valores que vão de 35 a 103. Um caso exemplar de leitura crítica de evidência nutricional.",
prerequisitos: [
  "Saber que carboidratos elevam a glicose no sangue e que a insulina a reduz. Nada além disso.",
  "Para o aprofundamento: entender que 'área sob a curva' significa acumular um efeito ao longo do tempo."
],
conexoes: [
  { termo: "Por que estudos de nutrição se contradizem", relacao: "O índice glicêmico é um caso concreto das limitações metodológicas gerais da epidemiologia nutricional." },
  { termo: "NNT e risco relativo versus absoluto", relacao: "Reduções de HbA1c precisam ser lidas em magnitude absoluta e relevância clínica, não apenas em significância estatística." },
  { termo: "Teorema de Bayes", relacao: "Um teste com alta variabilidade intraindividual tem baixo poder informativo. O mesmo raciocínio de razão de verossimilhança se aplica a biomarcadores." },
  { termo: "Alimentos ultraprocessados e a classificação NOVA", relacao: "Duas tentativas concorrentes de reduzir a complexidade alimentar a uma classificação operacional, com forças e fraquezas diferentes." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Em 1981, David Jenkins e colaboradores publicaram no <em>American Journal of Clinical Nutrition</em> uma ideia com aparência de avanço claro: em vez de tratar carboidratos como uma categoria única, medir experimentalmente quanto cada alimento eleva a glicemia.<sup class="cit"><a href="#f1">1</a></sup> Nascia o índice glicêmico.</p>

<h3>Como se mede, exatamente</h3>

<p>O protocolo é rigoroso, e vale conhecê-lo porque quase todas as limitações vêm dele.</p>

<ul>
<li>Voluntários em jejum consomem uma porção do alimento contendo <strong>50 gramas de carboidrato disponível</strong>, não 50 g do alimento.</li>
<li>Mede-se a glicemia em intervalos ao longo de duas horas.</li>
<li>Calcula-se a <strong>área incremental sob a curva</strong>: o acúmulo de glicose acima do valor de jejum.</li>
<li>Divide-se pela área obtida com um alimento de referência (glicose pura, valor 100) na mesma pessoa.</li>
<li>Repete-se com dez ou mais pessoas e toma-se a média.</li>
</ul>

<figure class="figura">[[FIG:gi-curvas]]<figcaption>O índice glicêmico é a razão entre áreas, não entre picos. Dois alimentos com picos muito diferentes podem ter o mesmo índice se as curvas acumularem a mesma área em duas horas.</figcaption></figure>

<p>Convencionou-se classificar em baixo (≤55), médio (56 a 69) e alto (≥70).</p>

<h3>O primeiro problema: 50 g de carboidrato não é uma porção</h3>

<p>A melancia tem índice glicêmico alto, em torno de 72. Mas para ingerir 50 g de carboidrato de melancia seria preciso comer cerca de 700 gramas de polpa. Uma fatia normal quase não move a glicemia.</p>

<p>Para corrigir isso criou-se a <strong>carga glicêmica</strong>, que multiplica o índice pela quantidade de carboidrato efetivamente presente na porção:</p>

<div class="formula">
CG = IG × (gramas de carboidrato na porção) ÷ 100
<span class="leg">melancia: 72 × 11 ÷ 100 ≈ 8, carga baixa, apesar do índice alto</span>
</div>

<p>Já aqui aparece uma lição: o índice glicêmico sozinho, sem a carga, produz recomendações erradas com regularidade. E é o índice, não a carga, que aparece em aplicativos e listas.</p>

<h3>O problema sério: o número não descreve quase ninguém</h3>

<p>Em 2016, Nirupa Matthan e colaboradores fizeram algo que a literatura anterior não tinha feito com esse rigor: mediram o índice glicêmico do mesmo pão branco, sob protocolo padronizado, em 63 adultos saudáveis, com repetições na mesma pessoa.<sup class="cit"><a href="#f2">2</a></sup></p>

<figure class="figura">[[FIG:gi-dispersao]]<figcaption>Cada ponto é uma pessoa. A média oficial, 62, classificação "médio", descreve razoavelmente bem uma minoria dos participantes. O mesmo alimento foi simultaneamente de baixo, médio e alto índice glicêmico, dependendo de quem comeu.</figcaption></figure>

<p>Os resultados:</p>

<ul>
<li>Média de 62, que corresponde à classificação "médio".</li>
<li>Variação <strong>dentro da mesma pessoa</strong> em repetições: cerca de 20%.</li>
<li>Variação <strong>entre pessoas</strong>: cerca de 25%.</li>
<li>Valores individuais indo de 35 a 103, cobrindo as três categorias inteiras.</li>
<li>22 participantes seriam classificados como "baixo", 23 como "intermediário" e 18 como "alto" para o mesmo pão.</li>
</ul>

<p>A conclusão dos autores foi direta: o índice glicêmico tem utilidade limitada como ferramenta para prever o efeito de um alimento sobre a glicemia, e é impraticável para rotulagem ou para diretrizes no nível individual.</p>

<div class="marca controverso">
<span class="rot">Como ler esse resultado com precisão</span>
<p>Isso não significa que o índice glicêmico seja uma invenção sem base. O conceito subjacente, segundo o qual alimentos diferem na velocidade de digestão e absorção, é fisiologicamente correto e bem estabelecido. O que o estudo mostra é que a <em>medida</em> tem ruído da mesma ordem de grandeza que o <em>sinal</em> que se quer detectar. Uma quantidade com essa relação sinal-ruído pode ser útil para comparar categorias amplas de alimentos e é inadequada para decidir entre dois itens específicos.</p>
</div>
` },

aprofundamento: { minutos: 15, html: `
<h3>Por que a variabilidade é tão grande</h3>

<p>As fontes de ruído são conhecidas e, em boa parte, incontroláveis:</p>

<div class="tabela-env">
<table>
<thead><tr><th>Fonte</th><th>Efeito</th></tr></thead>
<tbody>
<tr><td>Composição da refeição</td><td>Gordura e proteína retardam o esvaziamento gástrico e achatam a curva</td></tr>
<tr><td>Processamento e cocção</td><td>Macarrão al dente e macarrão bem cozido têm índices distintos; o mesmo vale para batata</td></tr>
<tr><td>Amido resistente</td><td>Arroz e batata resfriados após o cozimento retrogradam o amido e reduzem a resposta</td></tr>
<tr><td>Refeição anterior</td><td>O chamado 'efeito da segunda refeição': o que se comeu antes altera a resposta seguinte</td></tr>
<tr><td>Hora do dia</td><td>Sensibilidade à insulina é maior de manhã na maioria das pessoas</td></tr>
<tr><td>Exercício recente</td><td>Aumenta a captação muscular de glicose por horas, independentemente de insulina</td></tr>
<tr><td>Sono e estresse</td><td>Privação de sono reduz mensuravelmente a sensibilidade à insulina</td></tr>
<tr><td>Microbiota</td><td>Associada a diferenças de resposta; magnitude e causalidade em disputa</td></tr>
</tbody>
</table>
</div>

<p>Note que quase nenhuma dessas variáveis é controlada na vida real, e várias delas nem no laboratório. Um valor de tabela é uma média de médias sob condições que ninguém reproduz ao comer.</p>

<h3>A promessa da nutrição personalizada</h3>

<p>Se a resposta varia tanto entre pessoas, a saída óbvia seria personalizar. Em 2015, Zeevi e colaboradores publicaram na <em>Cell</em> um estudo com cerca de 800 participantes, monitoramento contínuo de glicose e um modelo de aprendizado de máquina que incorporava dados clínicos, antropométricos e de microbiota.<sup class="cit"><a href="#f3">3</a></sup></p>

<p>O modelo previa respostas glicêmicas individuais melhor que a contagem de carboidratos, e uma intervenção-piloto com dietas personalizadas mostrou melhora em relação a dietas convencionais. O trabalho é frequentemente citado como fundação da nutrição de precisão. Deu origem, ainda, a uma indústria de serviços comerciais baseados em sensores contínuos de glicose.</p>

<div class="marca controverso">
<span class="rot">A crítica metodológica é séria</span>
<p>Uma crítica publicada no <em>AJCN</em> em 2024, sob o título "garbage in → garbage out", questiona a base do empreendimento a partir de um achado específico: Hengist e colaboradores mostraram que sensores contínuos de glicose fornecem respostas <strong>não confiáveis a refeições idênticas apresentadas em duplicata</strong> em adultos sem diabetes.<sup class="cit"><a href="#f4">4</a></sup> Se o instrumento de medida não reproduz o próprio resultado com a mesma refeição na mesma pessoa, um modelo treinado sobre esses dados está aprendendo, em parte, ruído. O argumento não refuta a ideia de personalização, mas coloca um ônus de prova sobre quem vende produtos baseados nela.</p>
</div>

<h3>O que os ensaios clínicos mostram</h3>

<p>Deixando de lado a medida e olhando o desfecho: dietas de baixo índice glicêmico melhoram algum resultado clínico?</p>

<p>Em diabetes tipo 2, revisões sistemáticas com meta-análise indicam redução de hemoglobina glicada da ordem de 0,3 a 0,5 ponto percentual em comparação com dietas de alto índice glicêmico. É um efeito real, estatisticamente consistente e clinicamente modesto: menor que o de vários medicamentos e menor que o obtido com perda de peso relevante.</p>

<p>Em prevenção de doença cardiovascular e em controle de peso na população geral, a evidência é mais fraca e menos consistente. Estudos observacionais mostram associações; ensaios randomizados mostram efeitos pequenos e frequentemente não significativos.</p>

<div class="marca consenso">
<span class="rot">Consenso razoável</span>
<p>Que dietas de baixo índice glicêmico produzem melhora modesta do controle glicêmico em pessoas com diabetes tipo 2 é aceito por diretrizes de várias sociedades. Que o índice glicêmico deva ser a base da orientação alimentar para a população geral não é aceito, e várias diretrizes optaram explicitamente por não usá-lo como critério central, justamente pela variabilidade da medida e pela confusão com outros atributos dos alimentos.</p>
</div>

<h3>O confundimento que quase invalida a interpretação causal</h3>

<p>Este é o ponto que um revisor levantaria primeiro. Alimentos de baixo índice glicêmico são, em larguíssima maioria, também alimentos ricos em fibras, minimamente processados, mais saciantes e com maior densidade de micronutrientes. Leguminosas, verduras, grãos integrais e frutas inteiras.</p>

<p>Quando um estudo observa melhor desfecho em quem come alimentos de baixo índice glicêmico, existem pelo menos quatro explicações concorrentes: a resposta glicêmica mais lenta, o teor de fibra, o menor grau de processamento, ou a saciedade maior que reduz a ingestão total. Essas variáveis andam juntas, e separá-las exige desenhos experimentais que raramente são executados: dietas isocalóricas com fibra controlada e diferença isolada de índice glicêmico.</p>
` },

extensao: { minutos: 30, html: `
<h3>Um exercício de leitura crítica sobre o próprio conceito</h3>

<p>Vale usar este caso como treino, porque a estrutura do problema se repete em quase toda a nutrição.</p>

<p>O conceito é fisiologicamente plausível? Sim: a velocidade de digestão e absorção varia entre alimentos, e picos glicêmicos maiores exigem resposta insulínica maior. Essa plausibilidade mecanística é o ponto mais forte do índice glicêmico.</p>

<p>A medida é confiável? Parcialmente. Coeficientes de variação de 20% dentro da mesma pessoa e 25% entre pessoas significam que o valor de tabela carrega incerteza comparável à diferença entre as categorias que ele define.</p>

<p>A medida prevê o desfecho que importa? Modestamente, e num subgrupo específico. Glicemia pós-prandial é um marcador intermediário; o que interessa clinicamente são eventos, mortalidade e qualidade de vida, e marcadores intermediários frequentemente respondem sem que os desfechos duros acompanhem.</p>

<p>O efeito é atribuível ao mecanismo proposto? Difícil de afirmar, pelo confundimento com fibra, processamento e saciedade.</p>

<div class="marca consenso">
<span class="rot">Uma armadilha geral</span>
<p>A sequência "mecanismo plausível → marcador que se move → conclusão sobre saúde" é uma das rotas mais confiáveis para erro em ciência biomédica. Há casos célebres em que o marcador melhorou e o desfecho piorou: antiarrítmicos que suprimiam arritmias e aumentaram a mortalidade no ensaio CAST; terapia hormonal que melhorava perfil lipídico e não reduziu eventos cardiovasculares nos ensaios randomizados. Plausibilidade mecanística é condição para investigar, nunca substituto de desfecho medido.</p>
</div>

<h3>Onde o índice glicêmico continua sendo útil</h3>

<p>Rejeitá-lo por completo seria o erro simétrico. Usos defensáveis:</p>

<ul>
<li>Para comparar categorias amplas de alimentos: que leguminosas produzem resposta mais lenta que pão branco é verdadeiro, replicável e maior que o ruído da medida.</li>
<li>Como ferramenta educacional, explica de forma tangível por que "carboidrato" não é uma categoria útil e por que a forma física do alimento importa (suco de laranja e laranja inteira não são equivalentes).</li>
<li>No manejo individual com medição própria: uma pessoa com diabetes que mede a própria glicemia identifica suas respostas particulares. Aqui o valor de tabela é irrelevante; o que conta é a medição individual.</li>
<li>Em contextos específicos, como ajuste fino de carboidrato em esporte e em diabetes tipo 1 com contagem, onde a resposta é monitorada de perto.</li>
</ul>

<h3>O que a evidência sustenta como orientação prática</h3>

<p>A convergência de diretrizes de diferentes países aponta para recomendações que são, notavelmente, independentes do índice glicêmico:</p>

<ol>
<li>A unidade de evidência mais robusta em nutrição é o padrão alimentar completo, não o índice de um alimento isolado.</li>
<li>A forma física do alimento importa: grão inteiro versus farinha, fruta inteira versus suco. A estrutura da matriz alimentar altera a resposta metabólica de forma consistente, mais que a variabilidade do índice.</li>
<li>A fibra tem evidência mais sólida que o índice glicêmico: a relação entre ingestão de fibras e desfechos cardiometabólicos é mais consistente entre estudos, e a medida é muito mais estável.</li>
<li>O contexto da refeição altera tudo. Combinar carboidrato com proteína, gordura ou fibra achata a curva de forma previsível, o que torna o índice de um alimento isolado ainda menos informativo sobre o que acontece numa refeição real.</li>
</ol>

<div class="marca emergente">
<span class="rot">O que é emergente e ainda não decidido</span>
<p>Uso de sensores contínuos de glicose por pessoas sem diabetes é um mercado em expansão rápida, com promessa de otimização metabólica individualizada. O que se sabe: os aparelhos medem glicose intersticial com atraso e erro em relação à glicemia plasmática, e a reprodutibilidade em refeições duplicadas é baixa em pessoas sem diabetes. O que não se sabe: se decisões alimentares guiadas por essas leituras melhoram qualquer desfecho de saúde em pessoas metabolicamente saudáveis. Não há ensaio randomizado com desfecho duro respondendo a isso. Um consumidor bem informado deveria tratar essa categoria de produto como hipótese comercial, não como intervenção validada.</p>
</div>

<h3>O que segurar deste caso</h3>

<p>Três coisas, e a terceira vale muito além da nutrição.</p>

<p>Primeira: o índice glicêmico é um conceito fisiologicamente correto cuja medida tem ruído da ordem do sinal. Serve para comparar categorias amplas, não para escolher entre dois alimentos específicos.</p>

<p>Segunda: o efeito clínico documentado é modesto e concentrado em diabetes tipo 2, com confundimento substancial por fibra e processamento.</p>

<p>Terceira, e a mais transferível: <strong>a pergunta decisiva sobre qualquer medida não é se ela é precisa, mas se a variabilidade dela é menor que a diferença que se quer detectar</strong>. Um instrumento com coeficiente de variação de 20% não consegue distinguir dois alimentos que diferem 15%, por mais rigoroso que seja o protocolo, por mais bem publicada que esteja a tabela, e por mais plausível que seja o mecanismo. Essa pergunta se aplica igualmente a biomarcadores, a escalas psicométricas, a métricas de desempenho e a qualquer indicador que alguém proponha usar para decidir alguma coisa.</p>
` }
},

flashcards: [
  { f: "Como o índice glicêmico é medido?", v: "Área incremental sob a curva glicêmica em 2 horas após ingerir 50 g de carboidrato disponível do alimento, dividida pela área do alimento de referência (glicose = 100) na mesma pessoa, em média de 10 ou mais voluntários." },
  { f: "Qual é a diferença entre índice glicêmico e carga glicêmica?", v: "O índice usa uma porção fixa de 50 g de carboidrato, que pode ser irreal. A carga corrige pela quantidade efetivamente presente: CG = IG × carboidrato da porção ÷ 100. Melancia tem IG ~72 e CG ~8." },
  { f: "O que Matthan et al. (2016) encontraram ao medir o IG do mesmo pão branco em 63 pessoas?", v: "Média 62, mas variação de ~20% dentro da mesma pessoa e ~25% entre pessoas, com valores individuais de 35 a 103. O mesmo pão foi classificado como baixo para 22, intermediário para 23 e alto para 18 participantes." },
  { f: "Por que a variabilidade do IG é tão grande?", v: "Composição da refeição, cocção, amido resistente após resfriamento, efeito da refeição anterior, hora do dia, exercício recente, sono, estresse e microbiota. Quase nenhuma dessas variáveis é controlada na vida real." },
  { f: "Qual é a crítica central à nutrição personalizada baseada em sensores contínuos de glicose?", v: "Que os sensores fornecem respostas não reprodutíveis a refeições idênticas apresentadas em duplicata em adultos sem diabetes (Hengist et al.). Modelos treinados sobre dados assim aprendem, em parte, ruído." },
  { f: "Qual é o efeito clínico documentado de dietas de baixo IG?", v: "Redução de HbA1c da ordem de 0,3 a 0,5 ponto percentual em diabetes tipo 2: um efeito real, consistente e modesto. Em prevenção cardiovascular e controle de peso na população geral, a evidência é fraca e inconsistente." },
  { f: "Qual é o principal confundimento na interpretação causal do IG?", v: "Alimentos de baixo IG são também ricos em fibra, minimamente processados e mais saciantes. Melhores desfechos podem vir de qualquer um desses atributos, e separá-los exige dietas isocalóricas com fibra controlada." },
  { f: "Por que 'mecanismo plausível + marcador que melhora' não basta?", v: "Porque há casos célebres em que o marcador melhorou e o desfecho piorou: antiarrítmicos no ensaio CAST, terapia hormonal e perfil lipídico. Plausibilidade mecanística justifica investigar, não concluir." },
  { f: "Em que situações o índice glicêmico continua útil?", v: "Comparação entre categorias amplas de alimentos, uso educacional para mostrar que 'carboidrato' não é categoria útil, e manejo individual com medição própria, caso em que o valor de tabela é irrelevante." },
  { f: "Qual é a pergunta decisiva sobre qualquer medida, ilustrada por este caso?", v: "Não se ela é precisa, mas se sua variabilidade é menor que a diferença que se quer detectar. Um instrumento com CV de 20% não distingue alimentos que diferem 15%, por melhor que seja o protocolo." }
],

prova: [
  { camada: "nucleo",
    q: "A melancia tem índice glicêmico alto (~72), mas carga glicêmica baixa (~8). O que isso significa?",
    alts: [
      "Que as duas medidas se contradizem e uma delas está errada.",
      "Que o carboidrato da melancia é absorvido rapidamente, mas há tão pouco dele numa porção real que o efeito sobre a glicemia é pequeno.",
      "Que a melancia deve ser evitada por diabéticos.",
      "Que o índice glicêmico da melancia foi medido com metodologia inadequada."
    ],
    correta: 1,
    porque: "O IG usa uma porção fixa de 50 g de carboidrato, o que exigiria cerca de 700 g de polpa. A carga corrige pela quantidade real da porção. É o exemplo canônico de por que usar o índice sem a carga gera recomendações erradas, e é justamente o índice, não a carga, que aparece em aplicativos." },

  { camada: "nucleo",
    q: "No estudo de Matthan et al. (2016), o índice glicêmico do mesmo pão branco medido em 63 pessoas variou de 35 a 103. Qual é a implicação mais precisa?",
    alts: [
      "O conceito de índice glicêmico não tem base fisiológica.",
      "O estudo foi mal conduzido, já que o protocolo padronizado deveria eliminar a variação.",
      "A medida tem ruído da mesma ordem do sinal, o que a torna inadequada para decidir entre alimentos específicos no nível individual.",
      "Pessoas diferentes digerem pão branco de formas fundamentalmente distintas por causa da genética."
    ],
    correta: 2,
    porque: "A distinção importa: o conceito subjacente é fisiologicamente correto. O que falha é a medida como instrumento de decisão individual, porque a variabilidade cobre as três categorias de classificação. Atribuir a variação exclusivamente à genética também extrapola: o estudo mostra variação alta dentro da mesma pessoa, não apenas entre pessoas." },

  { camada: "nucleo",
    q: "O índice glicêmico é calculado a partir de qual grandeza?",
    alts: [
      "O valor máximo de glicemia atingido após a refeição.",
      "A área incremental sob a curva de glicemia em duas horas, relativa a um alimento de referência.",
      "O tempo até a glicemia voltar ao valor de jejum.",
      "A quantidade de insulina liberada após a refeição."
    ],
    correta: 1,
    porque: "É razão entre áreas, não entre picos. Dois alimentos com picos bem diferentes podem ter índices iguais se acumularem a mesma área em duas horas. A resposta insulínica é uma grandeza relacionada mas distinta: o índice insulinêmico é outra medida, que não coincide sempre com o glicêmico." },

  { camada: "aprofundamento",
    q: "Arroz cozido e depois resfriado produz resposta glicêmica menor que arroz recém-cozido. Por quê?",
    alts: [
      "Porque o resfriamento destrói parte do amido.",
      "Porque parte do amido retrograda e passa a se comportar como amido resistente, menos disponível para digestão.",
      "Porque o arroz frio é mastigado mais lentamente.",
      "Porque a temperatura baixa reduz a atividade da amilase salivar."
    ],
    correta: 1,
    porque: "A retrogradação reorganiza as cadeias de amido numa estrutura menos acessível às enzimas digestivas, aumentando a fração de amido resistente. É um dos vários fatores de preparo que fazem o valor de tabela de um alimento não corresponder ao que acontece no prato real." },

  { camada: "aprofundamento",
    q: "Qual é a crítica central do artigo 'garbage in → garbage out' à nutrição personalizada por predição glicêmica?",
    alts: [
      "Que os modelos de aprendizado de máquina usados são simples demais.",
      "Que sensores contínuos de glicose não reproduzem respostas a refeições idênticas em duplicata em adultos sem diabetes, de modo que os modelos treinam parcialmente sobre ruído.",
      "Que a microbiota não tem relação alguma com resposta glicêmica.",
      "Que os estudos não incluíram participantes com diabetes."
    ],
    correta: 1,
    porque: "É uma crítica sobre a qualidade dos dados de entrada, e por isso mais fundamental do que uma crítica ao modelo. Se o instrumento não reproduz o próprio resultado sob a mesma condição, o teto de desempenho de qualquer modelo treinado sobre ele fica limitado. Isso não refuta a personalização, mas desloca o ônus da prova." },

  { camada: "aprofundamento",
    q: "Um estudo observacional encontra menor risco cardiovascular em pessoas que consomem mais alimentos de baixo índice glicêmico. Qual é o confundimento mais forte?",
    alts: [
      "Essas pessoas podem ter maior renda.",
      "Alimentos de baixo IG são também ricos em fibra, minimamente processados e mais saciantes. Qualquer um desses atributos pode explicar o desfecho.",
      "O índice glicêmico não foi medido nos próprios participantes.",
      "A glicemia pós-prandial não foi aferida."
    ],
    correta: 1,
    porque: "As variáveis andam juntas quase perfeitamente: leguminosas, verduras, grãos integrais e frutas inteiras são simultaneamente de baixo IG, ricas em fibra e pouco processadas. Separar as explicações exige ensaios isocalóricos com fibra controlada e diferença isolada de IG, desenho raramente executado. Renda é confundimento real, porém menos específico." },

  { camada: "extensao",
    q: "Por que a sequência 'mecanismo plausível → marcador melhora → conclusão sobre saúde' é perigosa?",
    alts: [
      "Porque mecanismos fisiológicos raramente são compreendidos corretamente.",
      "Porque há casos documentados em que o marcador melhorou e o desfecho clínico piorou: antiarrítmicos no ensaio CAST, por exemplo.",
      "Porque marcadores intermediários não podem ser medidos com precisão.",
      "Porque a plausibilidade mecanística é sempre construída depois dos dados."
    ],
    correta: 1,
    porque: "O ensaio CAST é o caso clássico: os fármacos suprimiam arritmias, o marcador escolhido, e aumentaram a mortalidade. A lição é geral e vale muito além da nutrição: plausibilidade mecanística é condição para investigar, nunca substituto de desfecho medido em ensaio adequado." },

  { camada: "extensao",
    q: "Qual das orientações abaixo é mais sustentada pela evidência atual, segundo a convergência de diretrizes?",
    alts: [
      "Escolher alimentos consultando o índice glicêmico de tabelas.",
      "Priorizar padrão alimentar completo, forma física do alimento e ingestão de fibras, critérios com evidência mais consistente e medidas mais estáveis que o índice glicêmico.",
      "Usar sensor contínuo de glicose para otimizar cada refeição, mesmo sem diabetes.",
      "Eliminar todos os carboidratos de alto índice glicêmico da dieta."
    ],
    correta: 1,
    porque: "A unidade de evidência mais robusta em nutrição é o padrão alimentar, não o índice de um alimento isolado, e a relação entre fibra e desfechos cardiometabólicos é mais consistente e baseada em medida muito mais estável. Sensores em pessoas sem diabetes não têm ensaio com desfecho duro que os sustente." },

  { camada: "extensao",
    q: "Qual é a pergunta metodológica mais transferível que este caso ensina sobre qualquer medida?",
    alts: [
      "Se a medida foi publicada em revista de alto fator de impacto.",
      "Se a variabilidade da medida é menor que a diferença que se pretende detectar com ela.",
      "Se o mecanismo fisiológico subjacente é conhecido.",
      "Se o protocolo de medição é padronizado internacionalmente."
    ],
    correta: 1,
    porque: "Protocolo padronizado e mecanismo conhecido são ambos verdadeiros para o índice glicêmico e não bastam. Um instrumento com coeficiente de variação de 20% não distingue alimentos que diferem 15%, por mais rigoroso que seja o método. A mesma pergunta se aplica a biomarcadores, escalas psicométricas e qualquer indicador usado para decidir algo." }
],

fontes: [
  { n: 1, tipo: "fonte primária", ref: "Jenkins, D. J. A. et al. 'Glycemic index of foods: a physiological basis for carbohydrate exchange'. <em>American Journal of Clinical Nutrition</em> 34(3):362-366, 1981.", url: "https://doi.org/10.1093/ajcn/34.3.362" },
  { n: 2, tipo: "artigo", ref: "Matthan, N. R. et al. 'Estimating the reliability of glycemic index values and potential sources of methodological and biological variability'. <em>American Journal of Clinical Nutrition</em> 104(4):1004-1013, 2016.", url: "https://pubmed.ncbi.nlm.nih.gov/27604773/" },
  { n: 3, tipo: "artigo", ref: "Zeevi, D. et al. 'Personalized Nutrition by Prediction of Glycemic Responses'. <em>Cell</em> 163(5):1079-1094, 2015.", url: "https://www.cell.com/fulltext/S0092-8674(15)01481-6" },
  { n: 4, tipo: "artigo", ref: "'Personalized nutrition by prediction of glycemic responses: garbage in → garbage out'. <em>American Journal of Clinical Nutrition</em>, 2024, crítica baseada na baixa reprodutibilidade de sensores contínuos em refeições duplicadas (Hengist et al.).", url: "https://pubmed.ncbi.nlm.nih.gov/39755431/" },
  { n: 5, tipo: "artigo", ref: "Hengist, A. et al. 'Imprecision nutrition? Intraindividual variability of glucose responses to duplicate presented meals in adults without diabetes'. <em>American Journal of Clinical Nutrition</em>, 2024.", url: "https://ajcn.nutrition.org/article/S0002-9165(24)00814-1/abstract" },
  { n: 6, tipo: "crítica", ref: "Wolever, T. M. S. 'Personalized nutrition by prediction of glycaemic responses: fact or fantasy?'. <em>European Journal of Clinical Nutrition</em> 70:411-413, 2016.", url: "https://www.nature.com/articles/ejcn201631" }
]
};
