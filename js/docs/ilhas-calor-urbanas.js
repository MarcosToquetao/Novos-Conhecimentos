CONTEUDOS["ilhas-calor-urbanas"] = {
termo: "Ilhas de calor urbanas",
area: "Geografia",
subtitulo: "Cidades trocam superfícies naturais por asfalto, concreto e telhados escuros, e o resultado é um núcleo urbano que fica mais quente que o campo ao redor, sobretudo à noite. Entender esse mecanismo muda como se pensa conforto, saúde e planejamento urbano.",
prerequisitos: [
 "Ajuda saber que superfícies diferentes absorvem e devolvem calor de maneiras diferentes ao longo do dia.",
 "Ajuda ter noção básica de radiação solar e de evaporação da água."
],
conexoes: [
 {
  "termo": "Arquitetura bioclimática e conforto térmico",
  "relacao": "O mesmo balanço de energia que cria a ilha de calor orienta escolhas de materiais, sombreamento e ventilação em edifícios."
 },
 {
  "termo": "Classificação climática de Köppen",
  "relacao": "O clima de fundo da região muda como a ilha de calor se manifesta ao longo do dia e das estações."
 },
 {
  "termo": "Clima urbano e microclima",
  "relacao": "A ilha de calor é o efeito mais visível do microclima das cidades, e seu estudo se conecta diretamente aos padrões de vento, umidade e chuva locais."
 }
],

camadas: {

nucleo: { minutos: 4, html: `
<p class="abre">Ao anoitecer, quem sai do centro de São Paulo ou de Phoenix em direção à periferia sente a temperatura cair alguns graus em poucos quilômetros. Esse contraste tem nome: ilha de calor urbana. Ele aparece quando se compara a temperatura do núcleo construído com a de áreas rurais ao redor, e costuma ser maior depois do pôr do sol do que durante o dia<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p><h3>O que exatamente se mede</h3><p>A ilha de calor urbana é a diferença relativa de temperatura entre uma cidade e o campo que a cerca<sup class="cit"><a href="#f2">2</a></sup>. Nos Estados Unidos, essa diferença costuma ficar entre cerca de 0,6 e 4 °C durante o dia, e entre 1 e 3 °C à noite<sup class="cit"><a href="#f1">1</a></sup>. Existem duas coisas sendo medidas com nomes parecidos. A <strong>ilha de calor de superfície</strong> usa a temperatura do solo e das coberturas, obtida por satélite, e é mais forte de dia<sup class="cit"><a href="#f3">3</a></sup><sup class="cit"><a href="#f4">4</a></sup>. A <strong>ilha de calor de dossel</strong> usa o ar a poucos metros do chão, onde as pessoas caminham, e costuma ser mais forte de noite<sup class="cit"><a href="#f5">5</a></sup>. Confundir as duas leva a conclusões erradas sobre a cidade.</p><h3>Por que à noite a diferença cresce</h3><p>Durante o dia, a radiação solar aquece qualquer superfície. Asfalto, concreto e telhados escuros absorvem muita luz e têm grande capacidade de armazenar calor, funcionando como reservatórios térmicos<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. À noite, sem sol, o campo esfria rápido por perda radiativa para o céu. A cidade esfria devagar: as superfícies ainda quentes liberam energia para o ar, e a geometria de ruas estreitas entre prédios altos bloqueia boa parte da perda de calor para o céu. Esse é o chamado efeito de cânion urbano<sup class="cit"><a href="#f6">6</a></sup>.</p><p>Compare com o mesmo volume de ar: o concreto consegue guardar cerca de duas mil vezes mais calor<sup class="cit"><a href="#f2">2</a></sup>. Esse número explica por que o centro demora horas para esfriar depois que o subúrbio já está fresco.</p><div class="marca consenso"><span class="rot">Consenso</span><p>A causa principal da ilha de calor urbana é a modificação das superfícies, e não o calor residual das atividades humanas, que é contribuinte secundário<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p></div><h3>O que a cidade tira do lugar</h3><p>Onde havia árvores e solo úmido, agora há pavimento impermeável. Sem vegetação, some a sombra e some a evapotranspiração, que é o resfriamento causado pela água que evapora pelas folhas<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Nos Estados Unidos, cidades perdem cerca de 36 milhões de árvores por ano, segundo o Serviço Florestal<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. O vento, por sua vez, encontra prédios no caminho e circula menos, reduzindo o resfriamento por convecção<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p><p>Tudo isso se soma. A ilha de calor é o resultado líquido de vários processos competindo entre si, como mostrou a primeira modelagem numérica abrangente do fenômeno, publicada em 1969<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Entre eles, os que mais pesam são a evaporação reduzida no centro e as propriedades térmicas dos materiais de construção e pavimentação<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p><h3>A cidade que se aquece e o preço disso</h3><p>O aumento de temperatura não afeta só quem sente calor. A ilha de calor altera padrões de vento, umidade e chuva: as taxas de precipitação a favor do vento das cidades podem ser entre 48% e 116% maiores<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>, e a precipitação mensal chega a ser cerca de 28% maior em uma faixa de 32 a 64 quilômetros depois da cidade<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Uma análise de 419 grandes cidades do mundo encontrou intensidade média diurna de ilha de calor de superfície de 1,5 °C, contra 1,1 °C à noite, e não achou correlação entre as duas, sinal de que os mecanismos de dia e de noite são diferentes<sup class="cit"><a href="#f7">7</a></sup>. Em 32 cidades chinesas, o efeito se estendeu por uma área de 2,3 a 3,9 vezes o tamanho da mancha urbana, com queda exponencial em direção ao campo<sup class="cit"><a href="#f8">8</a></sup>.</p><p>Esse calor também tem consequências sociais. Um estudo com 175 áreas urbanizadas dos Estados Unidos mostrou que a intensidade da ilha de calor de superfície é maior em setores censitários onde vivem mais pessoas negras e hispânicas e mais pessoas abaixo da linha de pobreza<sup class="cit"><a href="#f9">9</a></sup>. Esses moradores costumam ter menos acesso a ar-condicionado e moradias com isolamento adequado<sup class="cit"><a href="#f2">2</a></sup>.</p><p>Mitigar exige entender o que mais pesa em cada lugar. Telhados escuros respondem por quase 40% do aumento de temperatura em relação ao entorno, e pavimentos escuros e a perda de vegetação completam o restante<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Por isso as intervenções mais eficazes atacam justamente essas superfícies, como se verá adiante.</p>
` },

aprofundamento: { minutos: 4, html: `
<p>Estudar ilha de calor exige escolher bem o que se mede. Em 1976, o climatologista T. R. Oke mostrou que misturar a temperatura do dossel urbano com a da camada limite acima da cidade produz modelos que erram<sup class="cit"><a href="#f5">5</a></sup>. A camada limite é a faixa de ar que cobre toda a cidade, mais espessa e mais lenta de responder. O dossel é a faixa entre os prédios, junto ao chão, onde o pedestre está. São fenômenos distintos, com intensidades e horários diferentes<sup class="cit"><a href="#f5">5</a></sup>.</p><h3>Como se mede</h3><p>Existem três caminhos principais. O primeiro é medir diretamente, com estações meteorológicas e torres urbanas, quando a cidade tem boa rede de observação<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. O segundo é usar sensoriamento remoto por satélite, que capta a temperatura da superfície. Landsat e MODIS respondem pela maior parte dos estudos publicados sobre ilha de calor de superfície<sup class="cit"><a href="#f3">3</a></sup>. O terceiro é simular: o ENVI-met calcula as interações entre superfícies de prédios, solo, plantas e ar<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p><p>Em 2015, a agência ambiental da Califórnia criou um índice para quantificar a intensidade da ilha de calor comparando a área estudada com pontos rurais a favor do vento, a dois metros do chão, hora a hora. As diferenças em graus Celsius são somadas e viram graus-Celsius-hora por dia médio<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. O índice foi pensado para estimar consumo de ar condicionado e emissões associadas<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Ele não considera vento, umidade ou radiação solar, o que limita a leitura de conforto percebido<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p><h3>O que os estudos comparativos mostram</h3><p>A diversidade de resultados entre cidades não é ruído: é a regra. Uma análise de 419 grandes cidades do mundo encontrou intensidade média diurna de ilha de calor de superfície de 1,5 °C, contra 1,1 °C à noite<sup class="cit"><a href="#f7">7</a></sup>. Uma diferença pequena em relação ao que se observa em medições de ar. Mais importante: não houve correlação entre as intensidades de dia e de noite, sugerindo mecanismos diferentes operando em cada período<sup class="cit"><a href="#f7">7</a></sup>. De dia, o que mais pesa é a diferença de vegetação entre cidade e subúrbio; à noite, o albedo e a iluminação urbana<sup class="cit"><a href="#f7">7</a></sup>.</p><table><thead><tr><th>Tipo</th><th>O que mede</th><th>Quando costuma ser mais forte</th><th>Exemplo</th></tr></thead><tbody><tr><td>Ilha de calor de superfície</td><td>Temperatura do solo e das coberturas, por satélite</td><td>Dia</td><td>Média de 1,5 °C em 419 cidades<sup class="cit"><a href="#f7">7</a></sup></td></tr><tr><td>Ilha de calor de dossel</td><td>Ar a poucos metros do chão</td><td>Noite</td><td>1 a 3 °C nos EUA<sup class="cit"><a href="#f1">1</a></sup></td></tr></tbody></table><p>Há também uma extensão espacial. Um estudo com 32 cidades chinesas, usando dados de 2003 a 2012, estimou que o efeito se estende por uma área de 2,3 a 3,9 vezes o tamanho da mancha urbana, com queda exponencial em direção ao campo<sup class="cit"><a href="#f8">8</a></sup>. Ignorar essa extensão subestima a intensidade na maior parte dos casos e pode até inverter a direção do resultado em algumas cidades<sup class="cit"><a href="#f8">8</a></sup>.</p><h3>O tamanho do problema metodológico</h3><p>Em 2010, uma revisão sistemática avaliou 190 estudos de ilha de calor publicados entre 1950 e 2007, com nove critérios de desenho experimental. A média de qualidade ficou em 50%, e quase metade dos valores de intensidade relatados foi considerada cientificamente indefensável. Metade dos trabalhos não controlava bem efeitos de tempo, relevo ou clima, e três quartos não descreviam instrumentos e sítios<sup class="cit"><a href="#f10">10</a></sup>. A lição é prática: números de ilha de calor precisam vir com contexto de medição, ou não significam quase nada.</p><h3>Da medição para o mecanismo</h3><p>O passo seguinte é entender por que a cidade esquenta. Em 1981, um estudo de modelo em escala comparou o resfriamento noturno de ambientes rural e urbano em condições calmas e sem nuvens. A geometria do cânion urbano, medida pela fração de céu visível de cada ponto, mostrou-se variável relevante para a intensidade da ilha de calor noturna, porque regula a perda de calor por radiação de onda longa<sup class="cit"><a href="#f6">6</a></sup>. Essa mesma geometria ajuda a explicar a relação entre tamanho da cidade e intensidade do efeito<sup class="cit"><a href="#f6">6</a></sup>. As simulações modernas incorporam esses fatores e mostram que a intensidade da ilha de calor depende do tamanho da cidade, da densidade construída e de um efeito de amplificação que os núcleos urbanos exercem uns sobre os outros<sup class="cit"><a href="#f11">11</a></sup>. Com isso, dá para estimar a intensidade a partir da estrutura urbana, algo útil para comparar cenários de crescimento<sup class="cit"><a href="#f11">11</a></sup>.</p><p>Para além da temperatura, o efeito também mexe com o ciclo da água. Vegetação e corpos d'água urbanos resfriam principalmente na camada de dossel, por evapotranspiração. No topo da camada limite, o que mais contribui é o aumento da rugosidade do terreno, que melhora a convecção<sup class="cit"><a href="#f12">12</a></sup>. Um parque isolado e grande pode ter pouco efeito no resfriamento da cidade como um todo, a depender do tamanho, da distribuição e da geometria das áreas verdes<sup class="cit"><a href="#f12">12</a></sup>.</p>
` },

extensao: { minutos: 3, html: `
<p>O conceito sai da climatologia e entra em áreas muito concretas. Na saúde pública, a ilha de calor noturna é especialmente problemática durante ondas de calor, porque tira do morador urbano o alívio fresco da madrugada<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Estudos em Hong Kong associaram menor ventilação urbana a maior mortalidade por todas as causas<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Uma combinação de observação e modelagem mostrou que ondas de calor e ilha de calor se reforçam mutuamente, gerando estresse térmico maior do que a soma dos dois efeitos isolados<sup class="cit"><a href="#f13">13</a></sup>.</p><p>A distribuição do calor não é igual dentro da cidade. Em análise de 175 áreas urbanizadas dos Estados Unidos, pessoas negras e hispânicas, em média, vivem em setores censitários com maior intensidade de ilha de calor de superfície do que brancos não hispânicos, padrão que aparece em todas menos seis dessas áreas. O mesmo vale para quem está abaixo da linha de pobreza<sup class="cit"><a href="#f9">9</a></sup>. O calor da cidade, portanto, também é um fenômeno de desigualdade.</p><p>Há efeitos na água e nos animais. Pavimento quente transfere calor para a água da chuva, que escoa para riachos. Em agosto de 2001, chuvas sobre Cedar Rapids, no Iowa, elevaram a temperatura de um córrego em 10,5 °C em uma hora, matando cerca de 188 peixes<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Espécies que colonizam bem, como a raposa voadora de cabeça cinzenta e a lagartixa doméstica, aproveitam o calor urbano para viver fora da área de distribuição original<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p><p>Do lado do orçamento, o efeito custa energia. A ilha de calor de Los Angeles representava cerca de 100 milhões de dólares por ano em energia no ano 2000<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Nos Estados Unidos, 15% da energia vai para ar condicionado de edifícios, e sistemas de ar condicionado devolvem calor residual às ruas, podendo elevar a temperatura noturna em até 1 °C<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p><p>Para reduzir, três estratégias concentram a evidência. Plantar árvores de folha caduca aumenta o albedo e o sombreamento e reduz a temperatura do ar em pelo menos 5,6 °C<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Telhados brancos ou com revestimento refletor refletem no mínimo 75% da radiação solar, contra 6% a 26% dos telhados de asfalto tradicionais<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Por fim, concreto claro reflete até 50% mais luz que o asfalto, embora a radiação refletida possa esquentar edifícios vizinhos com vidros não refletivos<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p>
` }

},

sintese: {
 "definicoes": [
  {
   "termo": "Ilha de calor urbana",
   "def": "Diferença relativa de temperatura entre uma cidade e as áreas rurais ao redor."
  },
  {
   "termo": "Ilha de calor de superfície",
   "def": "Mede a temperatura do solo e das coberturas por satélite, sendo mais forte durante o dia."
  },
  {
   "termo": "Ilha de calor de dossel",
   "def": "Mede a temperatura do ar a poucos metros do chão, onde as pessoas circulam, sendo mais forte à noite."
  },
  {
   "termo": "Efeito de cânion urbano",
   "def": "Bloqueio da perda de calor para o céu causado pela geometria de ruas estreitas entre prédios altos."
  },
  {
   "termo": "Evapotranspiração",
   "def": "Resfriamento causado pela água que evapora pelas folhas das plantas."
  }
 ],
 "lembrar": [
  "A ilha de calor urbana é mais intensa à noite do que durante o dia.",
  "A principal causa é a modificação das superfícies, e não o calor residual das atividades humanas.",
  "Superfícies como asfalto e concreto armazenam muito calor e esfriam devagar.",
  "A geometria urbana e a falta de vegetação reduzem a perda de calor e o resfriamento.",
  "A intensidade da ilha de calor varia conforme o tipo de medição: superfície ou dossel.",
  "Os efeitos da ilha de calor se estendem além da mancha urbana e afetam chuva, vento e saúde."
 ],
 "confusoes": [
  {
   "erro": "Achar que a ilha de calor é mais forte durante o dia.",
   "correcao": "A ilha de calor de dossel, que mede o ar junto ao chão, é mais forte à noite."
  },
  {
   "erro": "Pensar que o calor residual das atividades humanas é a causa principal.",
   "correcao": "A causa principal é a modificação das superfícies; o calor residual é um contribuinte secundário."
  },
  {
   "erro": "Considerar que a intensidade da ilha de calor é igual em toda a cidade.",
   "correcao": "Ela varia dentro da cidade e é maior em áreas com mais pessoas negras, hispânicas e de baixa renda."
  },
  {
   "erro": "Acreditar que a ilha de calor só afeta a temperatura.",
   "correcao": "Ela também altera padrões de vento, umidade, chuva e tem impactos sociais e ambientais."
  }
 ],
 "numeros": [
  "Nos EUA, a diferença de temperatura entre cidade e campo fica entre cerca de 0,6 e 4 °C durante o dia e entre 1 e 3 °C à noite.",
  "O concreto pode armazenar cerca de duas mil vezes mais calor que o mesmo volume de ar.",
  "Cidades dos EUA perdem cerca de 36 milhões de árvores por ano.",
  "As taxas de precipitação a favor do vento das cidades podem ser entre 48% e 116% maiores.",
  "A precipitação mensal chega a ser cerca de 28% maior em uma faixa de 32 a 64 quilômetros depois da cidade."
 ]
},

flashcards: [
 {
  "f": "O que é ilha de calor urbana?",
  "v": "É a diferença relativa de temperatura entre uma cidade e as áreas rurais ao redor."
 },
 {
  "f": "Quando a ilha de calor urbana costuma ser mais intensa?",
  "v": "Ela é mais forte à noite, especialmente a ilha de calor de dossel."
 },
 {
  "f": "Qual é a principal causa da ilha de calor urbana?",
  "v": "A modificação das superfícies, como pavimentação e construção, que alteram a capacidade de armazenar e liberar calor."
 },
 {
  "f": "O que é a ilha de calor de superfície?",
  "v": "É a diferença de temperatura medida por satélite na superfície do solo e das coberturas, mais forte durante o dia."
 },
 {
  "f": "O que é a ilha de calor de dossel?",
  "v": "É a diferença de temperatura do ar a poucos metros do chão, onde as pessoas caminham, mais forte à noite."
 },
 {
  "f": "Como a geometria urbana contribui para a ilha de calor?",
  "v": "Ruas estreitas entre prédios altos bloqueiam a perda de calor para o céu, efeito conhecido como cânion urbano."
 },
 {
  "f": "Qual o papel da vegetação na mitigação da ilha de calor?",
  "v": "A vegetação fornece sombra e aumenta a evapotranspiração, resfriando o ar."
 },
 {
  "f": "Como a ilha de calor afeta a chuva?",
  "v": "Ela pode aumentar as taxas de precipitação a favor do vento das cidades em até 116% e a precipitação mensal em cerca de 28% em uma faixa de 32 a 64 km."
 },
 {
  "f": "A ilha de calor afeta igualmente todos os moradores da cidade?",
  "v": "Não. Estudos mostram que áreas com mais pessoas negras, hispânicas e de baixa renda tendem a ter maior intensidade de ilha de calor."
 },
 {
  "f": "Quais estratégias ajudam a reduzir a ilha de calor?",
  "v": "Plantar árvores de folha caduca, instalar telhados brancos ou refletores e usar concreto claro em vez de asfalto escuro."
 },
 {
  "f": "Como a ilha de calor afeta o consumo de energia?",
  "v": "Ela aumenta o uso de ar condicionado; nos EUA, 15% da energia vai para ar condicionado de edifícios."
 },
 {
  "f": "Qual foi a conclusão de Oke em 1976 sobre medições de ilha de calor?",
  "v": "Que misturar a temperatura do dossel urbano com a da camada limite acima da cidade produz modelos que erram."
 }
],

prova: [
 {
  "camada": "nucleo",
  "q": "Quando a ilha de calor urbana costuma ser mais intensa?",
  "alts": [
   "Durante o dia",
   "À noite",
   "No início da manhã",
   "No final da tarde"
  ],
  "correta": 1,
  "porque": "A ilha de calor de dossel, que mede o ar junto ao chão, é mais forte à noite. A alternativa 'durante o dia' se aplica à ilha de calor de superfície, que é um conceito diferente."
 },
 {
  "camada": "nucleo",
  "q": "Qual é a principal causa da ilha de calor urbana?",
  "alts": [
   "O calor residual das atividades humanas",
   "A modificação das superfícies",
   "A poluição do ar",
   "A altitude da cidade"
  ],
  "correta": 1,
  "porque": "A principal causa é a modificação das superfícies, como asfalto e concreto, que armazenam mais calor. O calor residual das atividades humanas é um contribuinte secundário."
 },
 {
  "camada": "nucleo",
  "q": "O que caracteriza a ilha de calor de superfície?",
  "alts": [
   "Mede a temperatura do ar a poucos metros do chão e é mais forte à noite.",
   "Mede a temperatura do solo e das coberturas por satélite e é mais forte durante o dia.",
   "Mede a diferença de temperatura entre bairros ricos e pobres.",
   "Mede a temperatura da água dos rios urbanos."
  ],
  "correta": 1,
  "porque": "A ilha de calor de superfície usa sensoriamento remoto para medir a temperatura da superfície e é mais intensa durante o dia. As outras alternativas descrevem outros conceitos ou aspectos."
 },
 {
  "camada": "nucleo",
  "q": "Por que a cidade demora mais para esfriar após o pôr do sol?",
  "alts": [
   "Porque tem mais árvores que o campo",
   "Porque o concreto e o asfalto armazenam muito calor",
   "Porque chove mais na cidade",
   "Porque o vento é mais forte no centro"
  ],
  "correta": 1,
  "porque": "Materiais como concreto e asfalto têm grande capacidade de armazenar calor e liberam essa energia lentamente. A presença de árvores ou vento forte não explica esse fenômeno."
 },
 {
  "camada": "nucleo",
  "q": "O que é o efeito de cânion urbano?",
  "alts": [
   "A formação de nuvens sobre as cidades",
   "O bloqueio da perda de calor para o céu devido à geometria das ruas",
   "A canalização do vento entre prédios",
   "A absorção de calor pelas árvores"
  ],
  "correta": 1,
  "porque": "O efeito de cânion urbano ocorre quando ruas estreitas entre prédios altos reduzem a perda de calor por radiação para o céu, mantendo a cidade mais quente à noite."
 },
 {
  "camada": "nucleo",
  "q": "Qual das seguintes é uma consequência da ilha de calor urbana?",
  "alts": [
   "Aumento da evapotranspiração",
   "Redução da precipitação a favor do vento",
   "Aumento das taxas de precipitação a favor do vento",
   "Diminuição da temperatura noturna"
  ],
  "correta": 2,
  "porque": "A ilha de calor pode aumentar as taxas de precipitação a favor do vento das cidades. As outras alternativas são incorretas: a evapotranspiração diminui, a precipitação aumenta e a temperatura noturna sobe."
 },
 {
  "camada": "aprofundamento",
  "q": "Por que uma análise de 419 cidades não encontrou correlação entre as intensidades de ilha de calor de dia e de noite?",
  "alts": [
   "Porque os dados eram imprecisos",
   "Porque os mecanismos que atuam de dia e de noite são diferentes",
   "Porque as cidades estudadas eram muito pequenas",
   "Porque o efeito só ocorre à noite"
  ],
  "correta": 1,
  "porque": "A falta de correlação sugere que os processos que causam a ilha de calor durante o dia (principalmente diferenças de vegetação) são distintos dos que atuam à noite (albedo e iluminação)."
 },
 {
  "camada": "aprofundamento",
  "q": "Qual é o papel da geometria urbana na intensidade da ilha de calor noturna?",
  "alts": [
   "A geometria não influencia a ilha de calor noturna.",
   "A geometria regula a perda de calor por radiação de onda longa, afetando a intensidade.",
   "A geometria aumenta a evapotranspiração.",
   "A geometria diminui a rugosidade do terreno."
  ],
  "correta": 1,
  "porque": "A geometria do cânion urbano, medida pela fração de céu visível, controla a perda de calor por radiação de onda longa, influenciando diretamente a intensidade da ilha de calor noturna."
 },
 {
  "camada": "aprofundamento",
  "q": "O que a revisão sistemática de 2010 sobre estudos de ilha de calor concluiu?",
  "alts": [
   "Que a maioria dos estudos tinha qualidade excelente.",
   "Que quase metade dos valores de intensidade era cientificamente indefensável.",
   "Que todos os estudos usavam métodos padronizados.",
   "Que a ilha de calor não existe."
  ],
  "correta": 1,
  "porque": "A revisão avaliou 190 estudos e concluiu que a qualidade média era de 50% e que quase metade dos valores de intensidade carecia de validade científica, destacando a necessidade de contexto de medição."
 },
 {
  "camada": "extensao",
  "q": "Como a ilha de calor urbana pode afetar a saúde pública?",
  "alts": [
   "Reduzindo a mortalidade durante ondas de calor.",
   "Aumentando o estresse térmico e a mortalidade, especialmente à noite.",
   "Diminuindo a poluição do ar.",
   "Melhorando a qualidade do sono."
  ],
  "correta": 1,
  "porque": "A ilha de calor noturna impede o alívio fresco da madrugada, agravando o estresse térmico durante ondas de calor e associando-se a maior mortalidade."
 },
 {
  "camada": "extensao",
  "q": "Qual das seguintes estratégias é eficaz para mitigar a ilha de calor urbana?",
  "alts": [
   "Aumentar a pavimentação escura",
   "Plantar árvores de folha caduca",
   "Reduzir a refletividade dos telhados",
   "Diminuir a ventilação urbana"
  ],
  "correta": 1,
  "porque": "Plantar árvores de folha caduca aumenta o albedo e o sombreamento, reduzindo a temperatura do ar. As outras alternativas aumentariam a ilha de calor."
 }
],

fontes: [
 {
  "n": 1,
  "tipo": "enciclopédia",
  "ref": "Wikipédia (português), verbete 'Ilha de calor'. Consultado em 27/09/2026.",
  "url": "https://pt.wikipedia.org/wiki/Ilha_de_calor"
 },
 {
  "n": 2,
  "tipo": "enciclopédia",
  "ref": "Wikipédia (inglês), verbete 'Urban heat island'. Consultado em 27/09/2026.",
  "url": "https://en.wikipedia.org/wiki/Urban_heat_island"
 },
 {
  "n": 3,
  "tipo": "artigo",
  "ref": "Decheng Zhou, Jingfeng Xiao, Stefania Bonafoni, Christian R. Berger et al.. 'Satellite Remote Sensing of Surface Urban Heat Islands: Progress, Challenges, and Perspectives'. <em>Remote Sensing</em>, 2018.",
  "url": "https://doi.org/10.3390/rs11010048"
 },
 {
  "n": 4,
  "tipo": "artigo",
  "ref": "Matthias Roth, T. R. Oke, William J. Emery. 'Satellite-derived urban heat islands from three coastal cities and the utilization of such data in urban climatology'. <em>International Journal of Remote Sensing</em>, 1989.",
  "url": "https://doi.org/10.1080/01431168908904002"
 },
 {
  "n": 5,
  "tipo": "artigo",
  "ref": "T. R. Oke. 'The distinction between canopy and boundary‐layer urban heat islands'. <em>Atmosphere</em>, 1976.",
  "url": "https://doi.org/10.1080/00046973.1976.9648422"
 },
 {
  "n": 6,
  "tipo": "artigo",
  "ref": "T. R. Oke. 'Canyon geometry and the nocturnal urban heat island: Comparison of scale model and field observations'. <em>Journal of Climatology</em>, 1981.",
  "url": "https://doi.org/10.1002/joc.3370010304"
 },
 {
  "n": 7,
  "tipo": "artigo",
  "ref": "Shushi Peng, Shilong Piao, Philippe Ciais, Pierre Friedlingstein et al.. 'Surface Urban Heat Island Across 419 Global Big Cities'. <em>Environmental Science &amp; Technology</em>, 2011.",
  "url": "https://doi.org/10.1021/es2030438"
 },
 {
  "n": 8,
  "tipo": "artigo",
  "ref": "Decheng Zhou, Shuqing Zhao, Liangxia Zhang, Ge Sun et al.. 'The footprint of urban heat island effect in China'. <em>Scientific Reports</em>, 2015.",
  "url": "https://doi.org/10.1038/srep11160"
 },
 {
  "n": 9,
  "tipo": "artigo",
  "ref": "Angel Hsu, Glenn David Sheriff, TC Chakraborty, Diego Manya. 'Disproportionate exposure to urban heat island intensity across major US cities'. <em>Nature Communications</em>, 2021.",
  "url": "https://doi.org/10.1038/s41467-021-22799-5"
 },
 {
  "n": 10,
  "tipo": "revisão",
  "ref": "Iain D. Stewart. 'A systematic review and scientific critique of methodology in modern urban heat island literature'. <em>International Journal of Climatology</em>, 2010.",
  "url": "https://doi.org/10.1002/joc.2141"
 },
 {
  "n": 11,
  "tipo": "artigo",
  "ref": "Yunfei Li, Sebastian Schubert, Jürgen P. Kropp, Diego Rybski. 'On the influence of density and morphology on the Urban Heat Island intensity'. <em>Nature Communications</em>, 2020.",
  "url": "https://doi.org/10.1038/s41467-020-16461-9"
 },
 {
  "n": 12,
  "tipo": "artigo",
  "ref": "Kanchane Gunawardena, M.J. Wells, Tristan Kershaw. 'Utilising green and bluespace to mitigate urban heat island intensity'. <em>The Science of The Total Environment</em>, 2017.",
  "url": "https://doi.org/10.1016/j.scitotenv.2017.01.158"
 },
 {
  "n": 13,
  "tipo": "artigo",
  "ref": "Dan Li, Elie R. Bou-Zeid. 'Synergistic Interactions between Urban Heat Islands and Heat Waves: The Impact in Cities Is Larger than the Sum of Its Parts'. <em>Journal of Applied Meteorology and Climatology</em>, 2013.",
  "url": "https://doi.org/10.1175/jamc-d-13-02.1"
 }
],

fronteira: [{"tema": "A ilha de calor afeta o clima global?", "html": "<p>Uma comparação de 1999 sugeriu que as ilhas de calor têm pouca influência nas tendências globais de temperatura média, mas outros pesquisadores levantaram a hipótese de que elas afetam o clima global por meio da corrente de jato<sup class=\"cit\"><a href=\"#f1\">1</a></sup><sup class=\"cit\"><a href=\"#f2\">2</a></sup>. É uma questão em aberto, não um resultado firmado.</p>"}, {"tema": "Variabilidade sazonal da ilha de calor", "html": "<p>A variação ao longo do dia é bem descrita, mas a variação entre estações é menos compreendida. As relações entre chuva, vegetação, radiação solar e materiais de superfície em diferentes zonas climáticas ainda estão sendo investigadas<sup class=\"cit\"><a href=\"#f1\">1</a></sup><sup class=\"cit\"><a href=\"#f2\">2</a></sup>.</p>"}, {"tema": "Quanto a arborização urbana realmente resfria", "html": "<p>Uma meta-análise de 2024, reunindo 110 cidades, aponta resfriamento diurno típico de cerca de 1 a 2 °C com aumento de copa de árvores, mas os efeitos variam com clima, densidade da copa e forma urbana<sup class=\"cit\"><a href=\"#f2\">2</a></sup>. É evidência recente, ainda sem estabilização em valores de referência.</p>"}],
};
