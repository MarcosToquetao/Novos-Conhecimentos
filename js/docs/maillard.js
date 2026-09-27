CONTEUDOS["maillard"] = {
termo: "Reação de Maillard",
area: "Química",
subtitulo: "Quando o calor encontra açúcares e proteínas, nasce o dourado, o aroma de pão e o sabor de carne grelhada. É a reação de Maillard, a química que transforma a comida e também envelhece o corpo.",
prerequisitos: [
 "Não é necessário saber química orgânica. Basta entender que moléculas se encontram e reagem quando recebem energia na forma de calor.",
 "Saber que aminoácidos são as peças que formam as proteínas e que açúcares redutores são moléculas de açúcar capazes de reagir."
],
conexoes: [
 {
  "termo": "Catálise e energia de ativação",
  "relacao": "A reação de Maillard só começa quando as moléculas têm energia suficiente para superar a barreira de ativação; o calor do forno ou da frigideira fornece essa energia, e a reação acelera em pH alcalino porque mais moléculas ficam disponíveis para reagir."
 }
],

camadas: {

nucleo: { minutos: 3, html: `
<p class="abre">Aquele cheiro de pão saindo do forno, a casquinha dourada do frango assado, o sabor de um bife grelhado. Todos vêm de uma mesma família de reações químicas que acontece quando o calor encontra proteínas e açúcares. É a reação de Maillard, descrita pelo químico francês Louis-Camille Maillard em 1912<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p><p>Ela funciona como uma rede de reações que começa quando o grupo amino de um aminoácido (a peça básica das proteínas) encontra o grupo carbonila de um açúcar redutor<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Dessa união nascem compostos instáveis que se rearranjam e se fragmentam em centenas de moléculas diferentes. São essas moléculas que dão cor, aroma e sabor aos alimentos<sup class="cit"><a href="#f2">2</a></sup>.</p><p>O processo acelera entre 140 °C e 165 °C, faixa em que a maioria das receitas de forno e frigideira opera<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Em temperaturas mais altas, a caramelização (escurecimento dos açúcares, um processo separado) e depois a pirólise (quebra final que queima a comida) tomam a frente<sup class="cit"><a href="#f1">1</a></sup>.</p><p>O que torna a reação tão versátil é a quantidade de variáveis. A depender dos aminoácidos e açúcares presentes, da temperatura, do tempo e da presença de ar, o resultado muda. Pães, cafés, chocolates, cervejas e carnes grelhadas ganham aromas distintos porque cada alimento tem uma combinação própria de reagentes<sup class="cit"><a href="#f2">2</a></sup>. Um exemplo: a 6-acetil-2,3,4,5-tetrahidropiridina dá o cheiro de biscoito e pipoca, enquanto a 2-acetil-1-pirrolina, estruturalmente parecida, aparece no arroz cozido e na folha de pandan<sup class="cit"><a href="#f2">2</a></sup>.</p><h3>O que a reação faz nos alimentos</h3><p>Quando você grelha um bife, a reação de Maillard produz melanoidinas, polímeros castanhos que dão a cor escura e o sabor intenso<sup class="cit"><a href="#f2">2</a></sup>. O mesmo acontece ao torrar malte para uísque, ao dourar cebolas, ao assar cookies e ao tostar marshmallows<sup class="cit"><a href="#f2">2</a></sup>. A indústria de aromatizantes usa essa química há décadas para criar sabores artificiais, e a maioria das patentes se refere a aromas de carne<sup class="cit"><a href="#f2">2</a></sup>. O químico Jean-Marie Lehn, ganhador do Nobel de Química, disse que a de Maillard é de longe a reação química mais praticada no mundo<sup class="cit"><a href="#f2">2</a></sup>.</p><p>Nem tudo é benéfico. Em temperaturas altas, a reação pode formar acrilamida, uma substância provavelmente cancerígena<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. A formação pode ser reduzida aquecendo em temperatura mais baixa, adicionando asparaginase ou injetando dióxido de carbono<sup class="cit"><a href="#f1">1</a></sup>. A acrilamida se forma principalmente a partir da asparagina, um aminoácido comum em muitos alimentos<sup class="cit"><a href="#f2">2</a></sup>.</p><div class="marca consenso"><span class="rot">Consenso</span><p>A reação de Maillard é uma forma de escurecimento não enzimático que ocorre entre aminoácidos e açúcares redutores, tipicamente entre 140 °C e 165 °C, e é responsável pela cor, aroma e sabor de alimentos grelhados, assados e torrados<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. O mecanismo geral foi estabelecido por John E. Hodge em 1953 e é aceito até hoje<sup class="cit"><a href="#f2">2</a></sup>.</p></div><h3>A mesma reação dentro do corpo</h3><p>Nos anos 1980 e 1990, pesquisadores mostraram que a reação de Maillard não fica restrita à cozinha. Ela acontece lentamente dentro do organismo, entre açúcares como a glicose e proteínas de longa duração, como o colágeno<sup class="cit"><a href="#f3">3</a></sup>. Quanto mais tempo uma proteína vive no corpo, mais produtos de Maillard se acumulam nela<sup class="cit"><a href="#f3">3</a></sup>.</p><p>Em pessoas com diabetes, a glicose alta acelera esse processo. Estudos mediram produtos de Maillard no colágeno da pele de pacientes diabéticos e encontraram níveis até três vezes maiores do que em não diabéticos<sup class="cit"><a href="#f4">4</a></sup>. O acúmulo se correlaciona com complicações como retinopatia e nefropatia<sup class="cit"><a href="#f5">5</a></sup>. A descrição do diabetes como uma doença de envelhecimento químico acelerado vem dessas medições<sup class="cit"><a href="#f4">4</a></sup>.</p><p>O mesmo tipo de modificação aparece em doenças neurodegenerativas. Em tecidos cerebrais de pacientes com Alzheimer, anticorpos contra dois produtos de Maillard, pirralina e pentosidina, marcaram as placas senis e os emaranhados neurofibrilares característicos da doença<sup class="cit"><a href="#f6">6</a></sup>. Neurônios saudáveis do mesmo cérebro praticamente não reagiram<sup class="cit"><a href="#f6">6</a></sup>.</p>
` },

aprofundamento: { minutos: 5, html: `
<p>A reação de Maillard é conhecida há mais de um século, mas entender o mecanismo exigiu décadas de trabalho. Louis-Camille Maillard descreveu o fenômeno em 1912, enquanto tentava reproduzir a síntese de proteínas no laboratório<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Ele percebeu que aminoácidos e açúcares reagiam quando aquecidos, mas não sabia como. Em 1953, o químico John E. Hodge, do Departamento de Agricultura dos Estados Unidos, propôs o mecanismo que ainda hoje é a base do entendimento da reação<sup class="cit"><a href="#f2">2</a></sup>.</p><p>O esquema de Hodge começa com o grupo carbonila do açúcar reagindo com o grupo amino do aminoácido, formando uma glicosilamina N-substituída e liberando água<sup class="cit"><a href="#f2">2</a></sup>. Essa molécula é instável e passa por um rearranjo conhecido como rearranjo de Amadori, virando uma cetosamina<sup class="cit"><a href="#f2">2</a></sup>. A partir daí, a reação se ramifica em múltiplos caminhos. As cetosaminas podem produzir redutonas, fragmentos curtos como diacetil e piruvaldeído, ou polímeros castanhos chamados melanoidinas<sup class="cit"><a href="#f2">2</a></sup>.</p><p>Um ponto central são os dicarbonilos, intermediários que se formam pela desidratação e desaminação dos produtos de Amadori<sup class="cit"><a href="#f2">2</a></sup>. Eles são muito mais reativos que a glicose. Estudos mostram que alfa-oxoaldeídos, como o glioxal e o glicolaldeído, podem ser até 20.000 vezes mais reativos que a glicose em processos de glicação<sup class="cit"><a href="#f7">7</a></sup>. Isso significa que pequenas quantidades desses intermediários podem modificar proteínas rapidamente, formando os produtos finais de glicação avançada, os AGEs<sup class="cit"><a href="#f7">7</a></sup>.</p><p>Os dicarbonilos reagem com aminas e produzem aldeídos de Strecker, numa etapa conhecida como degradação de Strecker<sup class="cit"><a href="#f2">2</a></sup>. É dessa ramificação que saem muitos dos aromas característicos de alimentos assados e torrados. A reação também pode formar acrilamida, especialmente quando há asparagina disponível<sup class="cit"><a href="#f2">2</a></sup>.</p><h3>Como se estuda a reação</h3><p>Como a reação de Maillard envolve centenas de compostos e caminhos paralelos, isolar cada passo é difícil. Os cientistas usam sistemas-modelo, soluções simples com apenas um açúcar e um aminoácido, para controlar as variáveis e medir a cinética<sup class="cit"><a href="#f8">8</a></sup>. Um estudo clássico usou frutose e lisina em solução aquosa a 100 °C, variando o pH de 4 a 12, e monitorou o consumo dos reagentes e o desenvolvimento de cor<sup class="cit"><a href="#f8">8</a></sup>.</p><p>Esse tipo de experimento revelou que o pH tem papel decisivo. Em ambiente alcalino, os grupos amino perdem prótons e ficam mais nucleofílicos, ou seja, mais reativos<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. É por isso que pretzels são mergulhados em solução de lixívia antes de assar: a alcalinidade acelera o escurecimento<sup class="cit"><a href="#f1">1</a></sup>. O mesmo estudo mostrou que a caramelização da frutose, um processo separado, pode responder por mais de 40% da absorbância ultravioleta e de 10% a 36% da cor marrom em sistemas com frutose e lisina<sup class="cit"><a href="#f8">8</a></sup>. Sem separar os dois processos, é fácil superestimar a contribuição da reação de Maillard.</p><p>Outra ferramenta é medir produtos específicos no colágeno de tecidos. A carboximetil-lisina (CML) e a pentosidina são marcadores usados para quantificar o avanço da reação em organismos vivos<sup class="cit"><a href="#f4">4</a></sup><sup class="cit"><a href="#f9">9</a></sup>. Em um estudo com 39 pacientes diabéticos tipo 1 e 52 controles, a CML e a pentosidina no colágeno da pele aumentaram cinco vezes entre 20 e 85 anos em não diabéticos, e até duas vezes mais em diabéticos<sup class="cit"><a href="#f4">4</a></sup>. Um estudo separado com 39 diabéticos tipo 1 relacionou o aumento desses marcadores com retinopatia e nefropatia<sup class="cit"><a href="#f5">5</a></sup>.</p><table><thead><tr><th>Contexto</th><th>Reagentes principais</th><th>Condições típicas</th><th>Produtos marcadores</th></tr></thead><tbody><tr><td>Cozimento de alimentos</td><td>Aminoácidos e açúcares redutores</td><td>140-165 °C, pH variável</td><td>Melanoidinas, pirazinas, tióis, acrilamida<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup><sup class="cit"><a href="#f10">10</a></sup></td></tr><tr><td>Corpo humano (envelhecimento)</td><td>Glicose e proteínas de longa duração</td><td>37 °C, pH fisiológico, décadas</td><td>CML, pentosidina, hidroimidazolonas<sup class="cit"><a href="#f4">4</a></sup><sup class="cit"><a href="#f7">7</a></sup></td></tr><tr><td>Diabetes</td><td>Glicose elevada e colágeno</td><td>37 °C, glicemia alta crônica</td><td>CML, pentosidina, fluorescência<sup class="cit"><a href="#f4">4</a></sup><sup class="cit"><a href="#f5">5</a></sup></td></tr></tbody></table><p>A reação em organismos vivos avança por caminhos que dependem de oxidação. Estudos com colágeno de tendão de rato mostraram que antioxidantes inibem a formação de produtos de glicoxidação e a ligação cruzada entre proteínas, sem afetar a glicação inicial<sup class="cit"><a href="#f9">9</a></sup>. Isso indica que a oxidação é um passo separado dentro da reação de Maillard, e que o controle do estresse oxidativo pode desacelerar o acúmulo de danos<sup class="cit"><a href="#f9">9</a></sup>.</p><p>No corpo, os produtos de Maillard se acumulam em proteínas de vida longa. Quanto maior a meia-vida da proteína, maior a quantidade de produtos encontrados<sup class="cit"><a href="#f3">3</a></sup>. O colágeno, que dura anos, é um dos principais alvos. A glicação do colágeno aumenta apenas 33% entre 20 e 85 anos em não diabéticos, mas os produtos finais da reação, como CML e pentosidina, aumentam cinco vezes no mesmo período<sup class="cit"><a href="#f4">4</a></sup>. Isso mostra que a simples ligação do açúcar não causa dano; o avanço da reação ao longo do tempo causa.</p><p>Além dos efeitos no corpo, a reação de Maillard é usada deliberadamente na indústria de alimentos. Proteínas podem ser ligadas covalentemente a polissacarídeos por meio da reação, sem adição de reagentes químicos, para melhorar propriedades como emulsificação, textura e solubilidade<sup class="cit"><a href="#f11">11</a></sup><sup class="cit"><a href="#f12">12</a></sup>. Esses conjugados são estudados como ingredientes funcionais<sup class="cit"><a href="#f11">11</a></sup>.</p><p>As estratégias para controlar a reação em alimentos incluem adição de polifenóis e vitaminas, uso de enzimas, ajuste de temperatura, tempo, pH e umidade<sup class="cit"><a href="#f13">13</a></sup>. Cada abordagem tem efeitos colaterais potenciais, e a revisão dessas estratégias mostra que o controle fino ainda é um desafio<sup class="cit"><a href="#f13">13</a></sup>.</p><p>A reação de Maillard também aparece em contextos inesperados. Em turfeiras ácidas, corpos preservados passam por um processo semelhante, com escurecimento da pele e mudança da cor do cabelo para ruivo, embora de forma muito lenta<sup class="cit"><a href="#f2">2</a></sup>. Em silagem, o excesso de calor faz a reação consumir aminoácidos, reduzindo o valor nutritivo do alimento para o gado<sup class="cit"><a href="#f2">2</a></sup>.</p>
` },

extensao: { minutos: 3, html: `
<p>Entender a reação de Maillard muda a forma de cozinhar. Secar bem a superfície da carne antes de grelhar, por exemplo, ajuda porque a reação precisa de calor direto e a água ferve a 100 °C, abaixo da faixa de 140 °C a 165 °C em que ela acelera<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Ajustar o pH também funciona: passar uma solução alcalina na superfície, como se faz com pretzels, aumenta a reatividade dos grupos amino e intensifica o dourado<sup class="cit"><a href="#f1">1</a></sup>.</p><p>Na indústria, a reação é usada para criar aromas e sabores. A maioria das patentes de aromatizantes se refere a sabores de carne, e a reação é a base de muitos produtos<sup class="cit"><a href="#f2">2</a></sup>. Também é usada para modificar proteínas alimentares, ligando-as a açúcares para melhorar emulsificação, textura e solubilidade, sem aditivos químicos<sup class="cit"><a href="#f11">11</a></sup><sup class="cit"><a href="#f12">12</a></sup>. Isso permite criar ingredientes funcionais a partir de proteínas comuns<sup class="cit"><a href="#f11">11</a></sup>.</p><p>Na saúde, a reação é um elo entre a química dos alimentos e o envelhecimento. A descoberta de que ela ocorre no corpo levou à investigação de seus produtos como possíveis toxinas alimentares e também como compostos com efeitos positivos<sup class="cit"><a href="#f14">14</a></sup>. Alguns produtos de Maillard têm atividade antioxidante, enquanto outros estão associados a danos. A revisão dessa dualidade mostra que o efeito depende do tipo de composto e da quantidade<sup class="cit"><a href="#f14">14</a></sup>.</p><p>Na nutrição animal, a reação pode reduzir a qualidade da silagem e de rações, diminuindo a digestibilidade de aminoácidos<sup class="cit"><a href="#f2">2</a></sup>. No diagnóstico, produtos de Maillard no colágeno são usados como marcadores de controle glicêmico e de complicações do diabetes<sup class="cit"><a href="#f4">4</a></sup><sup class="cit"><a href="#f5">5</a></sup>.</p><p>Na arqueologia, o mesmo mecanismo explica a preservação de corpos em turfeiras e de coprólitos antigos, com o escurecimento da pele e a mudança da cor do cabelo<sup class="cit"><a href="#f2">2</a></sup>.</p><p>Para quem quer se aprofundar, o próximo passo é entender a diferença entre a reação de Maillard e a caramelização. São processos distintos: a primeira envolve aminoácidos, a segunda é a quebra de açúcares pelo calor<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Em muitos alimentos, os dois acontecem ao mesmo tempo, e separar as contribuições exige experimentos controlados<sup class="cit"><a href="#f8">8</a></sup>.</p>
` }

},

sintese: {
 "definicoes": [
  {
   "termo": "Reação de Maillard",
   "def": "Rede de reações entre o grupo amino de um aminoácido e o grupo carbonila de um açúcar redutor, que gera cor, aroma e sabor em alimentos aquecidos."
  },
  {
   "termo": "Melanoidinas",
   "def": "Polímeros castanhos formados na reação de Maillard, responsáveis pela cor escura e pelo sabor intenso de alimentos grelhados, torrados e assados."
  },
  {
   "termo": "Produtos finais de glicação avançada (AGEs)",
   "def": "Compostos que se acumulam em proteínas de longa duração no corpo, como o colágeno, formados quando intermediários reativos modificam proteínas."
  },
  {
   "termo": "Carboximetil-lisina (CML)",
   "def": "Marcador usado para medir o avanço da reação de Maillard no colágeno de tecidos vivos."
  },
  {
   "termo": "Acrilamida",
   "def": "Substância provavelmente cancerígena que pode se formar na reação de Maillard em temperaturas altas, principalmente a partir da asparagina."
  },
  {
   "termo": "Caramelização",
   "def": "Processo separado da reação de Maillard, em que os açúcares escurecem pelo calor sem participação de aminoácidos."
  }
 ],
 "lembrar": [
  "A reação de Maillard começa quando o grupo amino de um aminoácido encontra o grupo carbonila de um açúcar redutor.",
  "Ela acelera entre 140 °C e 165 °C, faixa em que a maioria das receitas de forno e frigideira opera.",
  "O mecanismo geral foi proposto por John E. Hodge em 1953 e é aceito até hoje.",
  "A reação não fica restrita à cozinha: acontece lentamente no corpo, entre glicose e proteínas de longa duração como o colágeno.",
  "Em pessoas com diabetes, a glicose alta acelera o acúmulo de produtos de Maillard no colágeno da pele, com níveis até três vezes maiores que em não diabéticos.",
  "A reação é usada na indústria para criar aromas e para ligar proteínas a açúcares, melhorando emulsificação, textura e solubilidade."
 ],
 "confusoes": [
  {
   "erro": "Achar que a reação de Maillard e a caramelização são a mesma coisa.",
   "correcao": "São processos distintos: a reação de Maillard envolve aminoácidos e açúcares redutores, enquanto a caramelização é a quebra de açúcares pelo calor. Em muitos alimentos, os dois acontecem ao mesmo tempo."
  },
  {
   "erro": "Pensar que qualquer temperatura alta é melhor para dourar alimentos.",
   "correcao": "A reação acelera entre 140 °C e 165 °C. Em temperaturas mais altas, a caramelização e depois a pirólise tomam a frente, queimando a comida."
  },
  {
   "erro": "Acreditar que a ligação do açúcar à proteína, por si só, causa dano no corpo.",
   "correcao": "A glicação do colágeno aumenta apenas 33% entre 20 e 85 anos em não diabéticos, mas os produtos finais como CML e pentosidina aumentam cinco vezes no mesmo período. O dano vem do avanço da reação ao longo do tempo."
  },
  {
   "erro": "Supor que o escurecimento observado em alimentos com frutose e lisina vem todo da reação de Maillard.",
   "correcao": "A caramelização da frutose pode responder por mais de 40% da absorbância ultravioleta e de 10% a 36% da cor marrom nesses sistemas. Sem separar os dois processos, é fácil superestimar a contribuição da reação de Maillard."
  },
  {
   "erro": "Imaginar que produtos de Maillard são sempre prejudiciais.",
   "correcao": "Alguns produtos de Maillard têm atividade antioxidante, enquanto outros estão associados a danos. O efeito depende do tipo de composto e da quantidade."
  }
 ],
 "numeros": [
  "A reação de Maillard acelera entre 140 °C e 165 °C.",
  "Louis-Camille Maillard descreveu o fenômeno em 1912, e John E. Hodge propôs o mecanismo em 1953.",
  "Estudos encontraram níveis até três vezes maiores de produtos de Maillard no colágeno da pele de pacientes diabéticos em comparação com não diabéticos.",
  "Alfa-oxoaldeídos como o glioxal e o glicolaldeído podem ser até 20.000 vezes mais reativos que a glicose.",
  "Em um estudo com 39 pacientes diabéticos tipo 1 e 52 controles, a CML e a pentosidina no colágeno da pele aumentaram cinco vezes entre 20 e 85 anos em não diabéticos, e até duas vezes mais em diabéticos."
 ]
},

flashcards: [
 {
  "f": "O que dá início à reação de Maillard?",
  "v": "O encontro entre o grupo amino de um aminoácido e o grupo carbonila de um açúcar redutor, quando há calor."
 },
 {
  "f": "Em que faixa de temperatura a reação de Maillard acelera?",
  "v": "Entre 140 °C e 165 °C, faixa em que a maioria das receitas de forno e frigideira opera."
 },
 {
  "f": "Quem descreveu a reação de Maillard e em que ano?",
  "v": "O químico francês Louis-Camille Maillard, em 1912."
 },
 {
  "f": "Quem propôs o mecanismo da reação de Maillard aceito até hoje?",
  "v": "John E. Hodge, em 1953, do Departamento de Agricultura dos Estados Unidos."
 },
 {
  "f": "O que são melanoidinas?",
  "v": "Polímeros castanhos formados na reação de Maillard que dão cor escura e sabor intenso aos alimentos."
 },
 {
  "f": "Qual a diferença entre reação de Maillard e caramelização?",
  "v": "A reação de Maillard envolve aminoácidos e açúcares redutores; a caramelização é a quebra de açúcares pelo calor, sem aminoácidos."
 },
 {
  "f": "Como a reação de Maillard acontece dentro do corpo?",
  "v": "Lentamente, entre açúcares como a glicose e proteínas de longa duração, como o colágeno. Quanto mais tempo a proteína vive, mais produtos se acumulam nela."
 },
 {
  "f": "O que foi observado no colágeno da pele de pacientes diabéticos?",
  "v": "Níveis de produtos de Maillard até três vezes maiores que em não diabéticos, correlacionados com complicações como retinopatia e nefropatia."
 },
 {
  "f": "Quais marcadores são usados para medir o avanço da reação de Maillard no corpo?",
  "v": "A carboximetil-lisina (CML) e a pentosidina, medidas no colágeno de tecidos."
 },
 {
  "f": "O que é acrilamida e como sua formação pode ser reduzida?",
  "v": "Substância provavelmente cancerígena formada em temperaturas altas, principalmente a partir da asparagina. Pode ser reduzida aquecendo em temperatura mais baixa, adicionando asparaginase ou injetando dióxido de carbono."
 },
 {
  "f": "Por que pretzels são mergulhados em solução de lixívia antes de assar?",
  "v": "Porque a alcalinidade torna os grupos amino mais nucleofílicos e reativos, acelerando o escurecimento pela reação de Maillard."
 },
 {
  "f": "Como a reação de Maillard é usada na indústria de alimentos além de aromas?",
  "v": "Para ligar proteínas a polissacarídeos sem aditivos químicos, melhorando emulsificação, textura e solubilidade de ingredientes."
 }
],

prova: [
 {
  "camada": "nucleo",
  "q": "O que precisa se encontrar para a reação de Maillard começar?",
  "alts": [
   "Grupo amino de um aminoácido e grupo carbonila de um açúcar redutor",
   "Duas moléculas de glicose aquecidas",
   "Água e gordura em alta temperatura",
   "Oxigênio e proteínas em temperatura ambiente"
  ],
  "correta": 0,
  "porque": "A reação começa quando o grupo amino de um aminoácido encontra o grupo carbonila de um açúcar redutor. A alternativa do oxigênio parece tentadora porque o ar influencia o resultado, mas não é o gatilho da reação."
 },
 {
  "camada": "nucleo",
  "q": "Em que faixa de temperatura a reação de Maillard acelera?",
  "alts": [
   "Entre 40 °C e 60 °C",
   "Entre 80 °C e 100 °C",
   "Entre 140 °C e 165 °C",
   "Acima de 200 °C"
  ],
  "correta": 2,
  "porque": "A reação acelera entre 140 °C e 165 °C, faixa em que a maioria das receitas de forno e frigideira opera. Acima disso, caramelização e pirólise tomam a frente."
 },
 {
  "camada": "nucleo",
  "q": "Por que os alimentos grelhados, assados e torrados ganham cores e aromas diferentes entre si?",
  "alts": [
   "Porque cada alimento tem uma combinação própria de aminoácidos e açúcares",
   "Porque a reação só acontece em alimentos de origem animal",
   "Porque o tempo de cozimento é sempre o mesmo",
   "Porque a reação depende apenas da temperatura do forno"
  ],
  "correta": 0,
  "porque": "A depender dos aminoácidos e açúcares presentes, da temperatura, do tempo e da presença de ar, o resultado muda. Cada alimento tem uma combinação própria de reagentes."
 },
 {
  "camada": "nucleo",
  "q": "O que a reação de Maillard produz em um bife grelhado que dá a cor escura?",
  "alts": [
   "Caramelo de açúcar",
   "Melanoidinas",
   "Acrilamida",
   "Pentosidina"
  ],
  "correta": 1,
  "porque": "As melanoidinas são os polímeros castanhos que dão a cor escura e o sabor intenso. A acrilamida é uma substância que pode se formar em temperaturas altas, mas não é a responsável pela cor."
 },
 {
  "camada": "nucleo",
  "q": "Como a reação de Maillard se comporta dentro do corpo humano?",
  "alts": [
   "Não acontece, pois o corpo não tem açúcares redutores",
   "Acontece rapidamente, em minutos",
   "Acontece lentamente entre glicose e proteínas de longa duração",
   "Acontece apenas em pessoas com diabetes"
  ],
  "correta": 2,
  "porque": "Ela acontece lentamente no organismo, entre açúcares como a glicose e proteínas de longa duração, como o colágeno. Em pessoas com diabetes, a glicose alta acelera esse processo."
 },
 {
  "camada": "nucleo",
  "q": "O que foi observado em tecidos cerebrais de pacientes com Alzheimer em relação à reação de Maillard?",
  "alts": [
   "Nenhuma marcação foi encontrada",
   "Anticorpos contra pirralina e pentosidina marcaram as placas senis e os emaranhados neurofibrilares",
   "Os neurônios saudáveis reagiram mais que os doentes",
   "A reação de Maillard não tem relação com doenças neurodegenerativas"
  ],
  "correta": 1,
  "porque": "Anticorpos contra dois produtos de Maillard, pirralina e pentosidina, marcaram as placas senis e os emaranhados neurofibrilares. Neurônios saudáveis do mesmo cérebro praticamente não reagiram."
 },
 {
  "camada": "aprofundamento",
  "q": "Qual foi a contribuição de John E. Hodge para o estudo da reação de Maillard?",
  "alts": [
   "Descreveu o fenômeno pela primeira vez",
   "Propôs o mecanismo que é a base do entendimento até hoje",
   "Criou a asparaginase",
   "Descobriu a acrilamida nos alimentos"
  ],
  "correta": 1,
  "porque": "Hodge propôs em 1953 o mecanismo que ainda hoje é a base do entendimento da reação, começando com a formação de glicosilamina e passando pelo rearranjo de Amadori. Louis-Camille Maillard descreveu o fenômeno antes, em 1912."
 },
 {
  "camada": "aprofundamento",
  "q": "O que são dicarbonilos no contexto da reação de Maillard?",
  "alts": [
   "Moléculas que impedem a reação",
   "Intermediários muito mais reativos que a glicose",
   "O produto final da reação",
   "Enzimas que aceleram a reação"
  ],
  "correta": 1,
  "porque": "Os dicarbonilos são intermediários que se formam pela desidratação e desaminação dos produtos de Amadori e podem ser até 20.000 vezes mais reativos que a glicose, modificando proteínas rapidamente."
 },
 {
  "camada": "aprofundamento",
  "q": "Por que sistemas-modelo são usados para estudar a reação de Maillard?",
  "alts": [
   "Porque a reação não acontece em alimentos reais",
   "Porque envolvem centenas de compostos e isolar cada passo é difícil",
   "Porque permitem controlar as variáveis e medir a cinética em soluções simples",
   "Porque a reação é idêntica em qualquer condição"
  ],
  "correta": 2,
  "porque": "Como a reação envolve centenas de compostos e caminhos paralelos, os cientistas usam soluções simples com apenas um açúcar e um aminoácido para controlar as variáveis e medir a cinética."
 },
 {
  "camada": "aprofundamento",
  "q": "O que estudos com colágeno de tendão de rato mostraram sobre o papel da oxidação na reação de Maillard?",
  "alts": [
   "A oxidação não tem relação com a reação",
   "Antioxidantes inibem a formação de produtos de glicoxidação e a ligação cruzada entre proteínas, sem afetar a glicação inicial",
   "A oxidação acelera a glicação inicial",
   "A oxidação só ocorre em alimentos"
  ],
  "correta": 1,
  "porque": "Os antioxidantes inibiram a formação de produtos de glicoxidação e a ligação cruzada entre proteínas, sem afetar a glicação inicial. Isso indica que a oxidação é um passo separado dentro da reação de Maillard."
 },
 {
  "camada": "extensao",
  "q": "Por que secar bem a superfície da carne antes de grelhar ajuda a dourar?",
  "alts": [
   "Porque a água impede a formação de melanoidinas",
   "Porque a reação precisa de calor direto e a água ferve a 100 °C, abaixo da faixa de 140 °C a 165 °C",
   "Porque a água acelera a reação",
   "Porque a umidade aumenta a reatividade dos aminoácidos"
  ],
  "correta": 1,
  "porque": "A reação precisa de calor direto e a água ferve a 100 °C, abaixo da faixa em que a reação acelera. Sem água, a superfície atinge a temperatura necessária mais rápido."
 },
 {
  "camada": "extensao",
  "q": "Como a reação de Maillard é usada para modificar proteínas alimentares na indústria?",
  "alts": [
   "Ligando proteínas a polissacarídeos sem adição de reagentes químicos",
   "Adicionando corantes artificiais",
   "Removendo aminoácidos das proteínas",
   "Congelando as proteínas em temperaturas baixas"
  ],
  "correta": 0,
  "porque": "Proteínas podem ser ligadas covalentemente a polissacarídeos por meio da reação, sem adição de reagentes químicos, para melhorar propriedades como emulsificação, textura e solubilidade."
 }
],

fontes: [
 {
  "n": 1,
  "tipo": "enciclopédia",
  "ref": "Wikipédia (português), verbete 'Reação de Maillard'. Consultado em 27/09/2026.",
  "url": "https://pt.wikipedia.org/wiki/Rea%C3%A7%C3%A3o_de_Maillard"
 },
 {
  "n": 2,
  "tipo": "enciclopédia",
  "ref": "Wikipédia (inglês), verbete 'Maillard reaction'. Consultado em 27/09/2026.",
  "url": "https://en.wikipedia.org/wiki/Maillard_reaction"
 },
 {
  "n": 3,
  "tipo": "artigo",
  "ref": "Franz Ledl, Erwin D. Schleicher. 'New Aspects of the Maillard Reaction in Foods and in the Human Body'. <em>Angewandte Chemie International Edition in English</em>, 1990.",
  "url": "https://doi.org/10.1002/anie.199005653"
 },
 {
  "n": 4,
  "tipo": "artigo",
  "ref": "D G Dyer, JOHN ASHER DUNN, Susan R. Thorpe, K. Bailie et al.. 'Accumulation of Maillard reaction products in skin collagen in diabetes and aging.'. <em>Journal of Clinical Investigation</em>, 1993.",
  "url": "https://doi.org/10.1172/jci116481"
 },
 {
  "n": 5,
  "tipo": "artigo",
  "ref": "David R. McCance, D G Dyer, JOHN ASHER DUNN, K. Bailie et al.. 'Maillard reaction products and their relation to complications in insulin-dependent diabetes mellitus.'. <em>Journal of Clinical Investigation</em>, 1993.",
  "url": "https://doi.org/10.1172/jci116482"
 },
 {
  "n": 6,
  "tipo": "artigo",
  "ref": "Mark A. Smith, Shinji Taneda, Peggy L. Richey, Satoshi Miyata et al.. 'Advanced Maillard reaction end products are associated with Alzheimer disease pathology.'. <em>Proceedings of the National Academy of Sciences</em>, 1994.",
  "url": "https://doi.org/10.1073/pnas.91.12.5710"
 },
 {
  "n": 7,
  "tipo": "artigo",
  "ref": "Paul John Thornalley. 'Dicarbonyl Intermediates in the Maillard Reaction'. <em>Annals of the New York Academy of Sciences</em>, 2005.",
  "url": "https://doi.org/10.1196/annals.1333.014"
 },
 {
  "n": 8,
  "tipo": "artigo",
  "ref": "El Hassan Ajandouz, Léopold Tchiakpe, F. Dalle Ore, A. Benajiba et al.. 'Effects of pH on Caramelization and Maillard Reaction Kinetics in Fructose‐Lysine Model Systems'. <em>Journal of Food Science</em>, 2001.",
  "url": "https://doi.org/10.1111/j.1365-2621.2001.tb08213.x"
 },
 {
  "n": 9,
  "tipo": "artigo",
  "ref": "Min-Xin Fu, Kevin J. Wells‐Knecht, James A. Blackledge, Thorpe J Lyons et al.. 'Glycation, Glycoxidation, and Cross-Linking of Collagen by Glucose: Kinetics, Mechanisms, and Inhibition of Late Stages of the Maillard Reaction'. <em>Diabetes</em>, 1994.",
  "url": "https://doi.org/10.2337/diab.43.5.676"
 },
 {
  "n": 10,
  "tipo": "artigo",
  "ref": "Małgorzata Starowicz, Henryk Zieliński. 'How Maillard Reaction Influences Sensorial Properties (Color, Flavor and Texture) of Food Products?'. <em>Food Reviews International</em>, 2019.",
  "url": "https://doi.org/10.1080/87559129.2019.1600538"
 },
 {
  "n": 11,
  "tipo": "artigo",
  "ref": "Fabíola Cristina de Oliveira, Jane Sélia dos Reis Coimbra, Eduardo Basílio de Oliveira, Abraham Damian Giraldo Zuñiga et al.. 'Food Protein-polysaccharide Conjugates Obtained via the Maillard Reaction: A Review'. <em>Critical Reviews in Food Science and Nutrition</em>, 2014.",
  "url": "https://doi.org/10.1080/10408398.2012.755669"
 },
 {
  "n": 12,
  "tipo": "artigo",
  "ref": "Christine Maree Oliver, Laurence D. Melton, Roger A Stanley. 'Creating Proteins with Novel Functionality via the Maillard Reaction: A Review'. <em>Critical Reviews in Food Science and Nutrition</em>, 2006.",
  "url": "https://doi.org/10.1080/10408690590957250"
 },
 {
  "n": 13,
  "tipo": "artigo",
  "ref": "Marianne  Nissen Lund, Colin Ray. 'Control of Maillard Reactions in Foods: Strategies and Chemical Mechanisms'. <em>Journal of Agricultural and Food Chemistry</em>, 2017.",
  "url": "https://doi.org/10.1021/acs.jafc.7b00882"
 },
 {
  "n": 14,
  "tipo": "artigo",
  "ref": "Michael Hellwig, Thomas Henle. 'Baking, Ageing, Diabetes: A Short History of the Maillard Reaction'. <em>Angewandte Chemie International Edition</em>, 2014.",
  "url": "https://doi.org/10.1002/anie.201308808"
 }
],

fronteira: [{"tema": "Produtos de Maillard como toxinas ou componentes benéficos da dieta", "html": "<p>Há um debate em aberto sobre o papel dos produtos de Maillard ingeridos na dieta. Alguns pesquisadores os tratam como glicotoxinas, associadas a riscos à saúde, enquanto outros apontam efeitos positivos, como atividade antioxidante. A revisão de Hellwig e Henle (2014) mostra que a discussão continua e que o efeito depende do tipo de composto e da quantidade<sup class=\"cit\"><a href=\"#f14\">14</a></sup>. Não há consenso sobre qual peso dar a cada lado.</p>"}, {"tema": "Contribuição da reação de Maillard para o envelhecimento normal", "html": "<p>O acúmulo de produtos de Maillard em proteínas de longa duração é bem documentado, mas o quanto ele contribui para o envelhecimento em si, e não só como marcador, ainda é uma questão em aberto. Estudos em diabetes mostram aceleração do processo, mas a ligação causal com sintomas específicos do envelhecimento ainda está sendo investigada<sup class=\"cit\"><a href=\"#f3\">3</a></sup><sup class=\"cit\"><a href=\"#f9\">9</a></sup>.</p>"}],
};
