CONTEUDOS["el-nino"] = {
termo: "El Niño e a Oscilação Sul",
area: "Geografia",
subtitulo: "El Niño e a Oscilação Sul formam um único fenômeno no Pacífico tropical que muda a temperatura do mar e a pressão do ar, e com isso reorganiza chuva e seca em vários continentes. Entender o mecanismo ajuda a separar o que é previsível do que ainda é incerto.",
prerequisitos: [
 "Saber que os ventos alísios sopram de leste para oeste na faixa equatorial.",
 "Noções básicas de que a água quente é menos densa e que a atmosfera circula entre regiões de alta e baixa pressão."
],
conexoes: [
 {
  "termo": "Correntes oceânicas e a circulação termohalina",
  "relacao": "Os ventos alísios empurram água superficial para oeste; a água profunda que sobe no Pacífico leste faz parte da circulação oceânica mais ampla."
 },
 {
  "termo": "Monções",
  "relacao": "O ENOS altera a pressão sobre a Indonésia e a Índia, o que mexe com a chuva da monção de verão indiana."
 },
 {
  "termo": "Classificação climática de Köppen",
  "relacao": "As teleconexões do ENOS deslocam faixas de chuva e seca, o que aparece como mudança de tipo climático em regiões tropicais e subtropicais."
 },
 {
  "termo": "Desertificação",
  "relacao": "Secas prolongadas ligadas a fases do ENOS agravam a degradação do solo em áreas marginais, como no nordeste do Brasil e no sul da África."
 }
],

camadas: {

nucleo: { minutos: 4, html: `
<p class="abre">Em 1892, o capitão Camilo Carrillo contou em Lima que pescadores peruanos chamavam de El Niño a corrente quente que aparecia perto da costa no fim do ano, por chegar perto do Natal<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Aquele nome virou o rótulo de um dos fenômenos climáticos mais estudados do planeta: uma mudança na temperatura do Pacífico equatorial que mexe com a chuva e a seca em quatro continentes.</p>

[[FOTO:1]]<h3>O que é o El Niño-Oscilação do Sul</h3><p>O El Niño-Oscilação do Sul (ENOS) é um fenômeno único que oscila entre três fases: neutra, El Niño e La Niña<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. A fase quente se chama El Niño; a fria, La Niña<sup class="cit"><a href="#f1">1</a></sup>. A parte atmosférica é a Oscilação Sul, medida pela diferença de pressão entre o Taiti e Darwin, na Austrália<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p><p>Em condições normais, os ventos alísios sopram de leste para oeste e empurram a água quente para o Pacífico ocidental, perto da Indonésia. Lá a superfície chega a 28-30 °C, enquanto na costa da América do Sul fica perto de 20 °C<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Esse acúmulo faz o nível do mar perto da Indonésia cerca de meio metro mais alto que perto do Peru<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. A termoclina, camada de transição entre água quente e fria, fica a cerca de 140 metros no oeste e a cerca de 30 metros no leste<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p>

[[FOTO:2]]<p>Quando os alísios enfraquecem, menos água sobe do fundo no Pacífico leste, e a água quente se espalha para leste. É o El Niño<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Quando os alísios ficam mais fortes, o Pacífico oeste esquenta mais e o leste esfria: é a La Niña<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p>

[[FOTO:3]]<p>As duas fases duram cerca de um ano cada e ocorrem em intervalos irregulares de dois a sete anos, com períodos neutros intercalados<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Eventos El Niño podem ser mais intensos, mas os de La Niña podem se repetir e durar mais<sup class="cit"><a href="#f1">1</a></sup>. Quase metade dos anos está em fase neutra<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p><h3>O mecanismo que se alimenta sozinho</h3><p>Em 1969, Jacob Bjerknes descreveu um ciclo de retroalimentação positiva: o enfraquecimento dos alísios aquece o Pacífico leste; esse aquecimento reduz a diferença de temperatura entre leste e oeste; a diferença menor enfraquece ainda mais os ventos<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. O ciclo se reforça até que a água quente acumulada no oeste se esgote e as condições voltem ao normal<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p><p>Esse mecanismo é o feedback de Bjerknes. Ele não explica sozinho por que o ENOS muda de fase; teorias propõem que o próprio sistema gera retroalimentações negativas ou que fenômenos externos, como rajadas de vento ocidental, disparam a transição<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p><h3>O que muda no mundo</h3><p>Durante o El Niño, a Circulação de Walker, que normalmente sobe sobre o Pacífico oeste e desce sobre o leste, enfraquece ou inverte<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. A chuva diminui na Indonésia, na Índia e no norte da Austrália, e aumenta sobre o Pacífico tropical<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p>

[[FOTO:4]]<p>Estudos com mais de 1700 estações mostraram padrões regionais de chuva ligados ao ENOS em várias partes do globo, não só no Pacífico<sup class="cit"><a href="#f3">3</a></sup>. Na América do Norte, por exemplo, chuvas acima do normal ocorreram em 18 de 22 casos na estação que vai de outubro do ano do ENOS a março do ano seguinte<sup class="cit"><a href="#f4">4</a></sup>.</p><p>Os efeitos também aparecem no hemisfério sul. No inverno, um trem de ondas se estende da Austrália pelo Pacífico Sul até a América do Sul; no verão, as anomalias de circulação são mais simétricas em relação aos paralelos e mais estáveis<sup class="cit"><a href="#f5">5</a></sup>.</p><p>Os eventos duram cerca de um ano e ocorrem em intervalos irregulares de dois a sete anos<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Entre 1900 e 2024, estima-se que houve pelo menos 30 eventos El Niño, com os de 1982-83, 1997-98 e 2014-16 entre os mais fortes já registrados<sup class="cit"><a href="#f1">1</a></sup>.</p><div class="marca consenso"><span class="rot">Consenso</span><p>O ENOS é o principal modo de variabilidade climática de um ano para o outro. As fases quente e fria duram cerca de um ano e se alternam em intervalos irregulares de dois a sete anos. El Niño aquece temporariamente a média global; La Niña resfria<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p></div>
` },

aprofundamento: { minutos: 3, html: `
<p>O ENOS não é uma oscilação simples como um pêndulo. Ele envolve o oceano e a atmosfera acoplados, e a comunidade científica mede isso de várias formas. O Índice de Oscilação Sul (IOS) compara a pressão ao nível do mar entre o Taiti e Darwin<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Como esses dois pontos ficam bem ao sul do Equador, a relação com o ENOS é indireta. Por isso foi criado o Índice de Oscilação Equatorial do Sul (IOES), com regiões centradas no Equador, mas os dados desse índice só vão até 1949<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p><p>Para captar melhor o fenômeno, Klaus Wolter e Michael Timlin desenvolveram o Índice Multivariado do ENOS (MEI), que combina várias variáveis oceânicas e atmosféricas em um único número, permitindo comparações desde 1871<sup class="cit"><a href="#f6">6</a></sup>. Esses índices mostram que o ENOS passou por um período de atividade mais baixa no início e meados do século XX, mas era tão frequente um século atrás quanto nas décadas recentes<sup class="cit"><a href="#f6">6</a></sup>.</p><p>Medir a fase não é trivial. Cada país usa um limiar diferente para declarar um evento<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Os Estados Unidos monitoram a região Niño 3.4 e consideram El Niño quando a temperatura média de três meses fica 0,5 °C acima do normal<sup class="cit"><a href="#f2">2</a></sup>. A Austrália olha ventos, IOS e modelos<sup class="cit"><a href="#f2">2</a></sup>. O Japão exige desvio de 0,5 °C na região Niño 3 por seis meses seguidos<sup class="cit"><a href="#f2">2</a></sup>. O Peru usa a região Niño 1+2 e limiar de 0,4 °C por três meses<sup class="cit"><a href="#f2">2</a></sup>.</p><table><thead><tr><th>Fase</th><th>Temperatura no Pacífico leste</th><th>Pressão no Pacífico oeste</th><th>Ventos alísios</th></tr></thead><tbody><tr><td>El Niño</td><td>Acima da média</td><td>Alta</td><td>Mais fracos ou invertidos<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup></td></tr><tr><td>Neutra</td><td>Dentro de 0,5 °C da média</td><td>Próxima do normal</td><td>Próximos do normal<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup></td></tr><tr><td>La Niña</td><td>Abaixo da média (3-5 °C mais frio)</td><td>Baixa</td><td>Mais fortes<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup></td></tr></tbody></table><p>O conhecimento foi construído aos poucos. Gilbert Walker descreveu a Oscilação Sul no início do século XX, mas a ligação com o El Niño oceânico só foi reconhecida no fim dos anos 1960<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup><sup class="cit"><a href="#f7">7</a></sup>. A revisão de Rasmusson e Wallace em 1983 mostrou que o episódio de 1982-83 foi o mais bem documentado até então e ajudou a consolidar a visão acoplada<sup class="cit"><a href="#f7">7</a></sup>.</p><p>Para ir além do registro instrumental, cientistas usam corais com bandas de crescimento anual. Um estudo com corais da Papua-Nova Guiné mostrou que o ENOS existe há pelo menos 130 mil anos, operando até em períodos glaciais<sup class="cit"><a href="#f8">8</a></sup>. Outro, com corais das Ilhas Line, cobrindo 7000 anos, encontrou grande variabilidade sem tendência sistemática; a variação do século XX é alta, mas não sem precedentes<sup class="cit"><a href="#f9">9</a></sup>.</p>

[[FOTO:5]]<p>Os efeitos vão além da chuva e da temperatura. Um estudo de 1997 mostrou que o ENOS está correlacionado com a temperatura da superfície do mar no Atlântico tropical, com aquecimento ocorrendo 4 a 5 meses após o pico dos eventos quentes no Pacífico<sup class="cit"><a href="#f10">10</a></sup>. No hemisfério sul, o ENOS altera a circulação atmosférica, com padrões mais estáveis no verão do que no inverno<sup class="cit"><a href="#f5">5</a></sup>.</p>
` },

extensao: { minutos: 3, html: `
<p>O ENOS não fica só na climatologia. Ele serve de ponte para várias áreas.</p><p>Na saúde, um estudo de 2000 mostrou que a incidência de cólera em Bangladesh tem um componente de variação anual na frequência dominante do ENOS<sup class="cit"><a href="#f11">11</a></sup>. Isso conecta padrões oceânicos a surtos de doença.</p><p>Na ecologia, pesquisadores usam índices climáticos globais como o ENOS para relacionar variações ambientais a processos biológicos, como reprodução e migração de animais<sup class="cit"><a href="#f12">12</a></sup>. A ideia é que um índice global pode prever melhor do que uma medida local isolada.</p><p>Na agricultura e na pesca, os países mais afetados são os em desenvolvimento que fazem fronteira com o Pacífico e dependem dessas atividades<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Secas e enchentes ligadas ao ENOS podem afetar safras e estoques pesqueiros.</p><p>No oceano Austral, mudanças na extensão do gelo marinho na península Antártica e no mar de Ross foram associadas a mudanças decadais no ENOS e no modo anular sul<sup class="cit"><a href="#f13">13</a></sup>.</p><p>Na Europa, os efeitos do ENOS são mais controversos, mas revisões mostram que ele afeta o clima europeu, com modulação sazonal e possível não-estacionariedade<sup class="cit"><a href="#f14">14</a></sup>.</p><p>Essas conexões mostram que entender o ENOS ajuda a pensar desde a previsão de safras até a dinâmica de doenças infecciosas.</p>
` }

},

sintese: {
 "definicoes": [
  {
   "termo": "ENOS",
   "def": "Fenômeno único que oscila entre três fases (neutra, El Niño e La Niña), envolvendo o oceano e a atmosfera no Pacífico equatorial."
  },
  {
   "termo": "El Niño",
   "def": "Fase quente do ENOS, em que os ventos alísios enfraquecem e a água quente se espalha para leste, aquecendo o Pacífico leste."
  },
  {
   "termo": "La Niña",
   "def": "Fase fria do ENOS, em que os alísios ficam mais fortes e o Pacífico leste esfria."
  },
  {
   "termo": "Oscilação Sul",
   "def": "Parte atmosférica do ENOS, medida pela diferença de pressão entre o Taiti e Darwin, na Austrália."
  },
  {
   "termo": "Circulação de Walker",
   "def": "Circulação atmosférica que sobe sobre o Pacífico oeste e desce sobre o leste; enfraquece ou inverte durante o El Niño."
  },
  {
   "termo": "Feedback de Bjerknes",
   "def": "Ciclo de retroalimentação positiva descrito em 1969: o enfraquecimento dos alísios aquece o Pacífico leste, o que reduz a diferença de temperatura e enfraquece ainda mais os ventos."
  }
 ],
 "lembrar": [
  "O ENOS alterna entre fase neutra, El Niño e La Niña, com duração de cerca de um ano cada e intervalos irregulares de dois a sete anos.",
  "Em condições normais, os alísios empurram água quente para o Pacífico ocidental, deixando a superfície perto de 28-30 °C na Indonésia e cerca de 20 °C na costa da América do Sul.",
  "A termoclina fica a cerca de 140 metros no oeste e a cerca de 30 metros no leste do Pacífico.",
  "No El Niño, a Circulação de Walker enfraquece ou inverte, diminuindo a chuva na Indonésia, na Índia e no norte da Austrália e aumentando sobre o Pacífico tropical.",
  "Entre 1900 e 2024, estima-se que houve pelo menos 30 eventos El Niño, com os de 1982-83, 1997-98 e 2014-16 entre os mais fortes já registrados.",
  "Cada país usa um limiar diferente para declarar um evento: os EUA consideram 0,5 °C acima do normal na região Niño 3.4; o Peru usa 0,4 °C na região Niño 1+2 por três meses."
 ],
 "confusoes": [
  {
   "erro": "O ENOS funciona como um pêndulo regular, alternando fases em intervalos fixos.",
   "correcao": "Os intervalos são irregulares, de dois a sete anos, e quase metade dos anos está em fase neutra."
  },
  {
   "erro": "O El Niño é só um aquecimento do oceano, sem relação com a atmosfera.",
   "correcao": "O ENOS envolve oceano e atmosfera acoplados; a Oscilação Sul é a parte atmosférica, medida pela diferença de pressão entre Taiti e Darwin."
  },
  {
   "erro": "Os efeitos do ENOS ficam restritos ao Pacífico.",
   "correcao": "Estudos com mais de 1700 estações mostraram padrões regionais de chuva ligados ao ENOS em várias partes do globo."
  },
  {
   "erro": "O El Niño é sempre mais intenso e duradouro que a La Niña.",
   "correcao": "Eventos El Niño podem ser mais intensos, mas os de La Niña podem se repetir e durar mais."
  },
  {
   "erro": "Existe um único índice e um único limiar para definir a fase do ENOS.",
   "correcao": "Há vários índices, como o IOS, o IOES e o MEI, e cada país usa um limiar diferente para declarar um evento."
  }
 ],
 "numeros": [
  "A superfície do Pacífico ocidental chega a 28-30 °C, enquanto na costa da América do Sul fica perto de 20 °C.",
  "O nível do mar perto da Indonésia é cerca de meio metro mais alto que perto do Peru.",
  "A termoclina fica a cerca de 140 metros no oeste e a cerca de 30 metros no leste.",
  "As fases duram cerca de um ano cada e ocorrem em intervalos irregulares de dois a sete anos.",
  "Entre 1900 e 2024, estima-se que houve pelo menos 30 eventos El Niño."
 ]
},

flashcards: [
 {
  "f": "O que significa a sigla ENOS?",
  "v": "El Niño-Oscilação do Sul. É um fenômeno único que oscila entre três fases: neutra, El Niño e La Niña."
 },
 {
  "f": "Quais são as três fases do ENOS?",
  "v": "Neutra, El Niño (fase quente) e La Niña (fase fria)."
 },
 {
  "f": "O que é a Oscilação Sul?",
  "v": "É a parte atmosférica do ENOS, medida pela diferença de pressão entre o Taiti e Darwin, na Austrália."
 },
 {
  "f": "O que acontece com os ventos alísios no El Niño?",
  "v": "Eles enfraquecem ou invertem, fazendo menos água subir do fundo no Pacífico leste e a água quente se espalhar para leste."
 },
 {
  "f": "O que acontece com os alísios na La Niña?",
  "v": "Eles ficam mais fortes, o Pacífico oeste esquenta mais e o leste esfria."
 },
 {
  "f": "O que é a Circulação de Walker?",
  "v": "É a circulação atmosférica que normalmente sobe sobre o Pacífico oeste e desce sobre o leste. No El Niño, ela enfraquece ou inverte."
 },
 {
  "f": "O que é o feedback de Bjerknes?",
  "v": "É um ciclo de retroalimentação positiva: o enfraquecimento dos alísios aquece o Pacífico leste, o que reduz a diferença de temperatura e enfraquece ainda mais os ventos."
 },
 {
  "f": "Quanto tempo dura cada fase do ENOS?",
  "v": "Cerca de um ano cada, com intervalos irregulares de dois a sete anos."
 },
 {
  "f": "O que é a termoclina e como ela varia no Pacífico?",
  "v": "É a camada de transição entre água quente e fria. Fica a cerca de 140 metros no oeste e a cerca de 30 metros no leste."
 },
 {
  "f": "Como os países definem um evento El Niño?",
  "v": "Cada país usa um limiar diferente. Os EUA consideram 0,5 °C acima do normal na região Niño 3.4; o Peru usa 0,4 °C na região Niño 1+2 por três meses."
 },
 {
  "f": "O que o estudo com corais da Papua-Nova Guiné mostrou sobre o ENOS?",
  "v": "Que o ENOS existe há pelo menos 130 mil anos, operando até em períodos glaciais."
 },
 {
  "f": "Quais foram os eventos El Niño mais fortes já registrados?",
  "v": "Os de 1982-83, 1997-98 e 2014-16 estão entre os mais fortes. Entre 1900 e 2024, estima-se que houve pelo menos 30 eventos El Niño."
 }
],

prova: [
 {
  "camada": "nucleo",
  "q": "O que caracteriza a fase El Niño do ENOS?",
  "alts": [
   "Os ventos alísios ficam mais fortes e o Pacífico leste esfria.",
   "Os alísios enfraquecem, menos água sobe do fundo no Pacífico leste e a água quente se espalha para leste.",
   "A pressão sobe no Pacífico oeste e a chuva aumenta na Indonésia.",
   "A termoclina fica mais rasa no oeste e mais profunda no leste."
  ],
  "correta": 1,
  "porque": "A fase quente é marcada pelo enfraquecimento dos alísios e pelo espalhamento da água quente para leste. A alternativa 0 descreve a La Niña, e a 2 inverte os efeitos esperados."
 },
 {
  "camada": "nucleo",
  "q": "Qual é a parte atmosférica do ENOS e como ela é medida?",
  "alts": [
   "A Circulação de Walker, medida pela temperatura da superfície do mar.",
   "A Oscilação Sul, medida pela diferença de pressão entre o Taiti e Darwin.",
   "O Índice Multivariado do ENOS, medido pela chuva na Indonésia.",
   "O Índice de Oscilação Equatorial do Sul, medido pela pressão em Lima."
  ],
  "correta": 1,
  "porque": "A Oscilação Sul é a parte atmosférica, medida pela diferença de pressão entre Taiti e Darwin. O MEI e o IOES são outros índices, não a definição da Oscilação Sul."
 },
 {
  "camada": "nucleo",
  "q": "Em condições normais, como se distribui a água quente no Pacífico equatorial?",
  "alts": [
   "Uniformemente, com a mesma temperatura em toda a faixa equatorial.",
   "Acumulada no Pacífico leste, perto da costa da América do Sul.",
   "Acumulada no Pacífico ocidental, perto da Indonésia.",
   "Concentrada no hemisfério sul, longe do Equador."
  ],
  "correta": 2,
  "porque": "Os alísios empurram a água quente para o oeste, onde a superfície chega a 28-30 °C. No leste, perto da América do Sul, fica perto de 20 °C."
 },
 {
  "camada": "nucleo",
  "q": "O que acontece com a chuva durante o El Niño?",
  "alts": [
   "Aumenta na Indonésia, na Índia e no norte da Austrália.",
   "Diminui na Indonésia, na Índia e no norte da Austrália, e aumenta sobre o Pacífico tropical.",
   "Fica igual em todo o globo, sem mudança regional.",
   "Aumenta apenas na costa da América do Sul, sem efeito em outros continentes."
  ],
  "correta": 1,
  "porque": "Com o enfraquecimento ou inversão da Circulação de Walker, a chuva diminui no oeste do Pacífico e aumenta sobre o Pacífico tropical. A alternativa 0 inverte o padrão."
 },
 {
  "camada": "nucleo",
  "q": "Com que frequência e duração ocorrem as fases do ENOS?",
  "alts": [
   "Duram cerca de cinco anos e ocorrem a cada dez anos.",
   "Duram cerca de um ano e ocorrem em intervalos irregulares de dois a sete anos.",
   "Duram cerca de um mês e ocorrem todo ano no mesmo período.",
   "Duram cerca de três anos e ocorrem em intervalos regulares de cinco anos."
  ],
  "correta": 1,
  "porque": "Cada fase dura cerca de um ano, e os intervalos são irregulares, de dois a sete anos. Quase metade dos anos está em fase neutra."
 },
 {
  "camada": "nucleo",
  "q": "Qual é o papel do feedback de Bjerknes no ENOS?",
  "alts": [
   "Explica sozinho por que o ENOS muda de fase.",
   "Descreve um ciclo de retroalimentação positiva que se reforça até a água quente acumulada no oeste se esgotar.",
   "Mostra que o ENOS é independente da atmosfera.",
   "Indica que o ENOS ocorre em intervalos regulares."
  ],
  "correta": 1,
  "porque": "O feedback de Bjerknes é um ciclo de retroalimentação positiva que se reforça até as condições voltarem ao normal. Ele não explica sozinho a mudança de fase, e a alternativa 0 ignora isso."
 },
 {
  "camada": "aprofundamento",
  "q": "O que o estudo com corais das Ilhas Line, cobrindo 7000 anos, encontrou sobre o ENOS?",
  "alts": [
   "Que o ENOS começou há 7000 anos e tem aumentado constantemente.",
   "Que há grande variabilidade sem tendência sistemática, e a variação do século XX é alta, mas não sem precedentes.",
   "Que o ENOS não existia antes de 130 mil anos atrás.",
   "Que o ENOS opera apenas em períodos interglaciais."
  ],
  "correta": 1,
  "porque": "O estudo encontrou grande variabilidade sem tendência sistemática, com a variação do século XX alta, mas não sem precedentes. A alternativa 0 acrescenta uma tendência que o estudo não encontrou."
 },
 {
  "camada": "aprofundamento",
  "q": "Como o ENOS se relaciona com a temperatura do Atlântico tropical?",
  "alts": [
   "Não há relação documentada entre os dois.",
   "Há correlação, com aquecimento no Atlântico tropical ocorrendo 4 a 5 meses após o pico dos eventos quentes no Pacífico.",
   "O Atlântico tropical esfria 4 a 5 meses antes do pico do El Niño.",
   "A relação é instantânea, sem defasagem."
  ],
  "correta": 1,
  "porque": "Um estudo de 1997 mostrou correlação, com o aquecimento no Atlântico tropical ocorrendo 4 a 5 meses após o pico dos eventos quentes no Pacífico."
 },
 {
  "camada": "extensao",
  "q": "Qual é uma aplicação do ENOS na saúde, segundo o documento?",
  "alts": [
   "A previsão de epidemias de dengue na Europa.",
   "A relação entre a incidência de cólera em Bangladesh e a frequência dominante do ENOS.",
   "O controle de vetores na Antártica.",
   "A erradicação da malária na Indonésia."
  ],
  "correta": 1,
  "porque": "Um estudo de 2000 mostrou que a cólera em Bangladesh tem um componente de variação anual na frequência dominante do ENOS. As outras alternativas não aparecem no documento."
 },
 {
  "camada": "extensao",
  "q": "Como o ENOS pode ser usado na ecologia?",
  "alts": [
   "Para prever terremotos em zonas de subducção.",
   "Como índice climático global para relacionar variações ambientais a processos biológicos, como reprodução e migração.",
   "Para medir a salinidade do oceano Ártico.",
   "Para determinar a idade de fósseis marinhos."
  ],
  "correta": 1,
  "porque": "Pesquisadores usam índices globais como o ENOS para relacionar variações ambientais a processos biológicos, como reprodução e migração. A ideia é que um índice global pode prever melhor do que uma medida local isolada."
 }
],

fontes: [
 {
  "n": 1,
  "tipo": "enciclopédia",
  "ref": "Wikipédia (português), verbete 'El Niño'. Consultado em 27/09/2026.",
  "url": "https://pt.wikipedia.org/wiki/El_Ni%C3%B1o"
 },
 {
  "n": 2,
  "tipo": "enciclopédia",
  "ref": "Wikipédia (inglês), verbete 'El Niño–Southern Oscillation'. Consultado em 27/09/2026.",
  "url": "https://en.wikipedia.org/wiki/El_Ni%C3%B1o%E2%80%93Southern_Oscillation"
 },
 {
  "n": 3,
  "tipo": "artigo",
  "ref": "Chester F. Ropelewski, M. S. Halpert. 'Global and Regional Scale Precipitation Patterns Associated with the El Niño/Southern Oscillation'. <em>Monthly Weather Review</em>, 1987.",
  "url": "https://doi.org/10.1175/1520-0493(1987)115<1606:garspp>2.0.co;2"
 },
 {
  "n": 4,
  "tipo": "artigo",
  "ref": "Chester F. Ropelewski, M. S. Halpert. 'North American Precipitation and Temperature Patterns Associated with the El Niño/Southern Oscillation (ENSO)'. <em>Monthly Weather Review</em>, 1986.",
  "url": "https://doi.org/10.1175/1520-0493(1986)114<2352:napatp>2.0.co;2"
 },
 {
  "n": 5,
  "tipo": "artigo",
  "ref": "David John Karoly. 'Southern Hemisphere Circulation Features Associated with El Niño-Southern Oscillation Events'. <em>Journal of Climate</em>, 1989.",
  "url": "https://doi.org/10.1175/1520-0442(1989)002<1239:shcfaw>2.0.co;2"
 },
 {
  "n": 6,
  "tipo": "artigo",
  "ref": "Klaus Wolter, Michael S. Timlin. 'El Niño/Southern Oscillation behaviour since 1871 as diagnosed in an extended multivariate ENSO index (MEI.ext)'. <em>International Journal of Climatology</em>, 2011.",
  "url": "https://doi.org/10.1002/joc.2336"
 },
 {
  "n": 7,
  "tipo": "artigo",
  "ref": "Eugene M. Rasmusson, John M. Wallace. 'Meteorological Aspects of the El Niño/Southern Oscillation'. <em>Science</em>, 1983.",
  "url": "https://doi.org/10.1126/science.222.4629.1195"
 },
 {
  "n": 8,
  "tipo": "artigo",
  "ref": "Alexander W. Tudhope, Colin P. Chilcott, Malcolm T. McCulloch, Edward R. Cook et al.. 'Variability in the El Niño-Southern Oscillation Through a Glacial-Interglacial Cycle'. <em>Science</em>, 2001.",
  "url": "https://doi.org/10.1126/science.1057969"
 },
 {
  "n": 9,
  "tipo": "artigo",
  "ref": "K. M. Cobb, Niko Westphal, Hussein R. Sayani, Jordan T. Watson et al.. 'Highly Variable El Niño–Southern Oscillation Throughout the Holocene'. <em>Science</em>, 2013.",
  "url": "https://doi.org/10.1126/science.1228246"
 },
 {
  "n": 10,
  "tipo": "artigo",
  "ref": "David B. Enfield, Dennis A. Mayer. 'Tropical Atlantic sea surface temperature variability and its relation to El Niño‐Southern Oscillation'. <em>Journal of Geophysical Research Atmospheres</em>, 1997.",
  "url": "https://doi.org/10.1029/96jc03296"
 },
 {
  "n": 11,
  "tipo": "artigo",
  "ref": "Mercedes Pascual, Xavier Rodó, Stephen P. Ellner, Rita R. Colwell et al.. 'Cholera Dynamics and El Niño-Southern Oscillation'. <em>Science</em>, 2000.",
  "url": "https://doi.org/10.1126/science.289.5485.1766"
 },
 {
  "n": 12,
  "tipo": "artigo",
  "ref": "Nils Chr. Stenseth, Geir Ottersen, James Wilson Hurrell, Atle Mysterud et al.. 'Review article. Studying climate effects on ecology through the use of climate indices: the North Atlantic Oscillation, El Niño Southern Oscillation and beyond'. <em>Proceedings of the Royal Society B Biological Sciences</em>, 2003.",
  "url": "https://doi.org/10.1098/rspb.2003.2415"
 },
 {
  "n": 13,
  "tipo": "artigo",
  "ref": "Sharon E. Stammerjohn, Douglas G. Martinson, Ray C. Smith, Xiaojun Yuan et al.. 'Trends in Antarctic annual sea ice retreat and advance and their relation to El Niño–Southern Oscillation and Southern Annular Mode variability'. <em>Journal of Geophysical Research Atmospheres</em>, 2008.",
  "url": "https://doi.org/10.1029/2007jc004269"
 },
 {
  "n": 14,
  "tipo": "artigo",
  "ref": "Stefan Brönnimann. 'Impact of El Niño–Southern Oscillation on European climate'. <em>Reviews of Geophysics</em>, 2007.",
  "url": "https://doi.org/10.1029/2006rg000199"
 }
],

fronteira: [{"tema": "Como o ENOS muda de fase", "html": "<p>O feedback de Bjerknes explica por que uma fase se reforça, mas não por que ela termina. Teorias propõem que o próprio sistema gera retroalimentações negativas ou que fenômenos externos, como a oscilação Madden-Julian e rajadas de vento ocidental, disparam a transição<sup class=\"cit\"><a href=\"#f1\">1</a></sup><sup class=\"cit\"><a href=\"#f2\">2</a></sup>. Os mecanismos exatos ainda são objeto de pesquisa.</p>"}, {"tema": "ENOS Modoki e suas variedades", "html": "<p>Desde os anos 1990, observou-se que alguns eventos têm anomalia de temperatura no Pacífico central, e não no leste. Chamam isso de ENOS Modoki<sup class=\"cit\"><a href=\"#f1\">1</a></sup><sup class=\"cit\"><a href=\"#f2\">2</a></sup>. Os efeitos diferem: El Niño Modoki estaria ligado a mais furacões atingindo o Atlântico, e La Niña Modoki aumentaria a chuva no noroeste da Austrália<sup class=\"cit\"><a href=\"#f1\">1</a></sup><sup class=\"cit\"><a href=\"#f2\">2</a></sup>. No entanto, há debate científico sobre a própria existência dessa distinção estatística, e alguns estudos argumentam que o registro confiável é curto demais para detectá-la<sup class=\"cit\"><a href=\"#f2\">2</a></sup>.</p>"}, {"tema": "Efeito das mudanças climáticas no ENOS", "html": "<p>As tendências futuras do ENOS devido ao aquecimento global são incertas. O IPCC de 2021 afirmou que é muito provável que a variância da precipitação relacionada ao ENOS aumente, mas há confiança média sobre o aumento da amplitude e da frequência de eventos de alta magnitude desde 1950<sup class=\"cit\"><a href=\"#f1\">1</a></sup><sup class=\"cit\"><a href=\"#f2\">2</a></sup>. Estudos recentes sugerem que as mudanças climáticas estão aumentando a frequência de El Niños extremos, mas ainda não há consenso sobre como ou se o aquecimento afetará a força ou a duração do ENOS<sup class=\"cit\"><a href=\"#f2\">2</a></sup>.</p>"}],

fotos: [{"n": 1, "arquivo": "img/c/el-nino/1.webp", "legenda": "Pescadores artesanais em barcos na costa do Peru, onde o fenômeno El Niño foi observado pela primeira vez.", "alt": "Pescadores em barcos na costa do Peru.", "autor": "nebulux76", "licenca": "CC BY 2.0", "pagina": "https://commons.wikimedia.org/wiki/File:Fishermen_in_Lima,_Peru_with_cityscape_as_background.jpg", "gif": false, "w": 800, "h": 533}, {"n": 2, "arquivo": "img/c/el-nino/2.webp", "legenda": "Mapa das variações de temperatura na superfície do Oceano Pacífico indicando áreas mais quentes e frias.", "alt": "Mapa de anomalias de temperatura no Pacífico, focando na diferença em relação à média.", "autor": "Climate.gov, NOAA Environmental Visualization Lab", "licenca": "Public domain", "pagina": "https://commons.wikimedia.org/wiki/File:Weekly_Pacific_SST_anomalies_12_December_2022_to_5_March_2023.gif", "gif": true, "w": 480, "h": 218}, {"n": 3, "arquivo": "img/c/el-nino/3.webp", "legenda": "Animação mostrando variações na temperatura da água no Oceano Pacífico durante eventos climáticos.", "alt": "Animação das anomalias de temperatura da superfície do mar no Oceano Pacífico.", "autor": "NOAA", "licenca": "Public domain", "pagina": "https://commons.wikimedia.org/wiki/File:Sstaanim_20230208_20230426.gif", "gif": true, "w": 480, "h": 288}, {"n": 4, "arquivo": "img/c/el-nino/4.webp", "legenda": "Mapa das anomalias de temperatura no Oceano Pacífico durante um evento de El Niño em 1997.", "alt": "Mapa detalhado das anomalias de temperatura da superfície do mar no Oceano Pacífico.", "autor": "Charles Thompson", "licenca": "Public domain", "pagina": "https://commons.wikimedia.org/wiki/File:El_Nino_Southern_Osscilation_1997-1998_Sea_Surface_Temperatures.png", "gif": false, "w": 800, "h": 449}, {"n": 5, "arquivo": "img/c/el-nino/5.webp", "legenda": "Cientista segura testemunho cilíndrico de coral extraído de recifes para estudos de mudanças climáticas passadas.", "alt": "Cientista segurando uma amostra de cilindro de coral retirada de recifes", "autor": "Hannes Grobe/AWI", "licenca": "CC BY 3.0", "pagina": "https://commons.wikimedia.org/wiki/File:Coral-core_hg.jpg", "gif": false, "w": 800, "h": 522}],
};
