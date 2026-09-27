CONTEUDOS["relogio-circadiano"] = {
termo: "Relógio circadiano molecular",
area: "Biologia",
subtitulo: "O relógio circadiano molecular é um oscilador bioquímico interno que mantém ritmos de aproximadamente 24 horas em quase todas as células, permitindo antecipar mudanças ambientais. Entender esse mecanismo revela por que o horário importa para saúde, metabolismo e comportamento.",
prerequisitos: [
 "Noções básicas de biologia celular: genes, proteínas e feedback.",
 "Ideia de ritmos biológicos diários, como sono e vigília."
],
conexoes: [
 {
  "termo": "Sono e consolidação de memória",
  "relacao": "O relógio circadiano regula o ciclo sono-vigília, e a fase circadiana influencia quando o cérebro consolida memórias."
 },
 {
  "termo": "Neuroplasticidade: alcance e limites",
  "relacao": "A plasticidade sináptica varia ao longo do dia, e o relógio molecular controla a expressão de genes envolvidos nesses processos."
 },
 {
  "termo": "Microbioma intestinal: o que se sabe de fato",
  "relacao": "O microbioma intestinal também segue ritmos diários, e sua interação com o relógio do hospedeiro afeta o metabolismo."
 },
 {
  "termo": "Telômeros e senescência celular",
  "relacao": "O envelhecimento celular é influenciado pelo relógio circadiano, que regula a expressão de genes ligados à senescência e à manutenção dos telômeros."
 }
],

camadas: {

nucleo: { minutos: 4, html: `
<p class="abre">Se você isolar uma célula humana em um ambiente constante, sem luz, sem comida em horários fixos, ela continua a expressar certos genes em ciclos de aproximadamente 24 horas. Esse é o relógio circadiano molecular, um oscilador bioquímico interno que cada célula carrega. Em 2017, Jeffrey Hall, Michael Rosbash e Michael Young ganharam o Nobel de Medicina por descrever como ele funciona em moscas-da-fruta<sup class="cit"><a href="#f1">1</a></sup>.</p><h3>O que é um relógio molecular</h3><p>O relógio circadiano molecular é um conjunto de proteínas que interagem para gerar um ciclo de cerca de 24 horas. Ele tem três partes: um oscilador bioquímico central que marca o tempo, vias de entrada que ajustam o relógio ao ambiente (principalmente a luz) e vias de saída que controlam ritmos em processos celulares<sup class="cit"><a href="#f1">1</a></sup>. A palavra circadiano vem do latim circa diem, que significa «cerca de um dia». Quando isolados de pistas externas, os relógios humanos em laboratório chegam a rodar em média 24,2 horas por dia, em vez de exatamente 24<sup class="cit"><a href="#f1">1</a></sup>.</p><p>Em mamíferos, o relógio central fica no núcleo supraquiasmático (SCN), um grupo de cerca de 20.000 neurônios no hipotálamo. O SCN recebe sinais luminosos diretamente da retina e sincroniza os relógios periféricos presentes em quase todos os tecidos<sup class="cit"><a href="#f1">1</a></sup>. Cada célula do corpo tem seu próprio oscilador, que funciona de forma autônoma mas é ajustado pelo relógio central<sup class="cit"><a href="#f1">1</a></sup>. O SCN envia sinais a outros núcleos do hipotálamo e à glândula pineal por meio de mensageiros como o peptídeo intestinal vasoativo, modulando a temperatura corpórea e a produção de hormônios como cortisol e melatonina. Esses hormônios entram na circulação e induzem efeitos dependentes do relógio em todo o organismo<sup class="cit"><a href="#f1">1</a></sup>.</p>

[[FOTO:1]]<h3>Como o mecanismo funciona</h3><p>O coração do relógio molecular é uma alça de feedback transcricional-traducional. Duas proteínas, CLOCK e BMAL1, se unem e ativam a transcrição de genes como Period (PER1, PER2, PER3) e Cryptochrome (CRY1, CRY2). As proteínas PER e CRY se acumulam no citoplasma, formam complexos e voltam ao núcleo para inibir a atividade de CLOCK:BMAL1, freando sua própria produção<sup class="cit"><a href="#f1">1</a></sup>. Esse ciclo leva cerca de 24 horas para se completar. Uma segunda alça envolve os receptores nucleares REV-ERBα e RORα, que competem para regular a expressão de Bmal1, adicionando mais controle ao sistema<sup class="cit"><a href="#f1">1</a></sup>.</p><p>Em moscas-da-fruta, o gene cycle (CYC) é o equivalente de BMAL1, e timeless (TIM) faz o papel dos CRYs de mamíferos, embora a CRY da mosca funcione como fotorreceptor<sup class="cit"><a href="#f1">1</a></sup>. Em plantas, os componentes são completamente diferentes, mas a lógica de alças interligadas se mantém: as proteínas CCA1 e LHY têm pico ao amanhecer e reprimem TOC1, que por sua vez regula as primeiras<sup class="cit"><a href="#f2">2</a></sup>.</p>

[[FOTO:2]]<p>Além da transcrição, modificações pós-traducionais como fosforilação, ubiquitinação e sumoilação são essenciais para ajustar a precisão do período. Por exemplo, a fosforilação de PER e CRY por caseína quinases (CSNK1D e CSNK1E) controla sua estabilidade e localização nuclear, e mutações nesses genes estão ligadas a distúrbios do sono em humanos<sup class="cit"><a href="#f1">1</a></sup>. A ubiquitinação de BMAL1 pela enzima UBE3A também regula sua degradação e afeta o ritmo circadiano<sup class="cit"><a href="#f3">3</a></sup>.</p><p>Em humanos, uma variante específica do gene Bmal1, chamada hBmal1a, atua como regulador negativo do relógio. Diferente da forma canônica hBmal1b, essa variante não entra no núcleo e interfere com a ativação transcricional, demonstrando que o relógio humano tem complexidades adicionais<sup class="cit"><a href="#f4">4</a></sup>.</p><h3>Por que cada célula precisa de um relógio</h3><p>Os osciladores circadianos estão presentes em quase todos os tecidos do corpo, onde são sincronizados por sinais internos e externos para regular a atividade de transcrição de forma específica de cada tecido<sup class="cit"><a href="#f1">1</a></sup>. O relógio está entrelaçado com a maior parte dos processos metabólicos celulares e é afetado pelo envelhecimento do organismo<sup class="cit"><a href="#f1">1</a></sup>.</p><p>Isso significa que a mesma célula pode responder de maneira diferente a um estímulo dependendo da hora do dia. Em células progenitoras cardíacas humanas, por exemplo, o relógio molecular controla a proliferação celular, a tolerância ao estresse e a liberação de fatores de crescimento, com diferenças grandes entre os picos e os vales do ciclo<sup class="cit"><a href="#f5">5</a></sup>. Em células progenitoras de cartilagem, a carga mecânica cíclica sincroniza o relógio e aumenta a produção de matriz cartilaginosa, mostrando que pistas físicas também ajustam o oscilador<sup class="cit"><a href="#f6">6</a></sup>.</p><p>A ideia central é que o relógio não é um acessório: ele organiza o tempo interno das células para que cada processo aconteça no momento mais adequado do dia<sup class="cit"><a href="#f1">1</a></sup>.</p><div class="marca consenso"><span class="rot">Consenso</span><p>O relógio circadiano molecular é um oscilador celular autônomo baseado em alças de feedback transcricional-traducional, conservado em muitos organismos, e sincronizado principalmente pela luz. Esse mecanismo foi amplamente replicado e é aceito na área<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f7">7</a></sup>.</p></div>
` },

aprofundamento: { minutos: 3, html: `
<p>O estudo do relógio circadiano molecular combina genética, bioquímica e biologia de sistemas. A descoberta inicial veio de triagens genéticas em Drosophila melanogaster, que identificaram o locus period (per) em 1971 por Ron Konopka e Seymour Benzer<sup class="cit"><a href="#f1">1</a></sup>. A partir daí, mutantes de genes relógio revelaram que o mecanismo depende de alças de feedback positiva e negativa<sup class="cit"><a href="#f1">1</a></sup>. Em mamíferos, experimentos com camundongos knockout e análises genômicas comparativas identificaram os componentes principais, e a maioria deles é de ativadores ou repressores transcricionais que modulam estabilidade proteica e translocação nuclear<sup class="cit"><a href="#f1">1</a></sup>.</p><p>Um ponto crucial é a existência de oscilações independentes de transcrição. Em cianobactérias, Kondo e colegas mostraram que o relógio pode funcionar sem transcrição, e o sistema foi reconstituído in vitro com as proteínas KaiA, KaiB e KaiC mais ATP<sup class="cit"><a href="#f1">1</a></sup>. Em 2011, o laboratório de Reddy descobriu ritmos circadianos em peroxirredoxinas (proteínas redox) em glóbulos vermelhos humanos, que não têm núcleo e, portanto, não realizam transcrição<sup class="cit"><a href="#f1">1</a></sup>. Essas oscilações redox foram vistas em eucariotos, bactérias e arquéias, sugerindo que relógios redox são ancestrais e os circuitos genéticos são uma camada adicional<sup class="cit"><a href="#f1">1</a></sup>.</p><p>Em mamíferos, a precisão do relógio depende também de modificações pós-transcricionais. A metilação de adenosinas internas no mRNA (m6A) regula o período circadiano: inibir a enzima Mettl3 alonga dramaticamente o período, enquanto sua superexpressão o encurta<sup class="cit"><a href="#f1">1</a></sup>. Apenas cerca de 22% dos genes com mRNA cíclico são dirigidos por transcrição de novo, indicando que mecanismos pós-transcricionais são importantes<sup class="cit"><a href="#f1">1</a></sup>.</p><p>A regulação do relógio envolve também vias de sinalização. A via p38 MAPK, por exemplo, pode modular o relógio de forma dependente do tipo celular, e sua inibição afeta a expressão de genes relógio em células de glioma<sup class="cit"><a href="#f8">8</a></sup>. A sincronização por pistas externas como alimentação e temperatura também foi demonstrada: em peixes, a hora da alimentação altera a expressão de genes relógio no cérebro e no fígado<sup class="cit"><a href="#f9">9</a></sup>.</p><p>Manipulações farmacológicas e genéticas combinadas mostraram que o relógio do núcleo supraquiasmático tem uma faixa de operação notavelmente ampla, com períodos sustentados que vão de menos de 17 horas a mais de 42 horas, tanto no nível da rede quanto no nível de células individuais<sup class="cit"><a href="#f7">7</a></sup>. Isso indica que o relógio é robusto e também elástico. Compostos químicos que inibem CRY1/2 foram identificados por triagem de mais de 1000 moléculas e atenuam a oscilação circadiana em fibroblastos, mostrando que a maquinaria do relógio pode ser modulada por pequenas moléculas<sup class="cit"><a href="#f10">10</a></sup>.</p><p>Métodos de biologia de sistemas, como a Análise de Rede de Dosagem Gênica (GDNA), usam siRNA para perturbar genes relógio em células humanas e revelam mecanismos de compensação e robustez<sup class="cit"><a href="#f1">1</a></sup>. Esses estudos mostram que o relógio é uma rede interconectada com funções celulares diversas. Modelos matemáticos também contribuíram: um modelo de 1999 mostrou que oscilações circadianas podem emergir de alças de feedback com atraso na síntese proteica e interações não lineares fortes, mesmo quando as constantes de tempo são muito menores que 24 horas<sup class="cit"><a href="#f11">11</a></sup>.</p><table><thead><tr><th>Organismo</th><th>Componente central</th><th>Característica</th></tr></thead><tbody><tr><td>Mamíferos</td><td>CLOCK, BMAL1, PER, CRY</td><td>Alças de feedback transcricional e pós-traducional<sup class="cit"><a href="#f1">1</a></sup></td></tr><tr><td>Drosophila</td><td>CLK, CYC, PER, TIM</td><td>Similar, com CRY atuando como fotorreceptor<sup class="cit"><a href="#f1">1</a></sup></td></tr><tr><td>Plantas</td><td>CCA1, LHY, TOC1</td><td>Componentes diferentes, lógica similar<sup class="cit"><a href="#f2">2</a></sup></td></tr><tr><td>Cianobactérias</td><td>KaiA, KaiB, KaiC</td><td>Relógio reconstituído in vitro<sup class="cit"><a href="#f1">1</a></sup></td></tr></tbody></table><p>Esses estudos mostram que o conhecimento foi estabelecido por uma combinação de genética, bioquímica e modelos matemáticos, com validação em múltiplos organismos.</p>
` },

extensao: { minutos: 3, html: `
<p>O relógio circadiano molecular tem implicações em várias áreas. Na medicina, a cronoterapia busca administrar medicamentos no momento em que o alvo é mais expresso ou sensível. Por exemplo, a pressão arterial e a secreção hormonal variam ao longo do dia, e o relógio regula esses processos<sup class="cit"><a href="#f2">2</a></sup>. Distúrbios do ritmo circadiano, como os causados por trabalho em turnos, estão associados a obesidade, diabetes tipo 2 e doenças cardiovasculares<sup class="cit"><a href="#f12">12</a></sup>.</p><p>No metabolismo, o tecido adiposo mostra ritmos diários na lipólise, captação de glicose e secreção de adipocinas. O exercício físico pode interagir com o relógio para melhorar a sensibilidade à insulina, e a hora do dia em que se exercita pode influenciar o efeito metabólico<sup class="cit"><a href="#f12">12</a></sup>. A alimentação em horários irregulares também desregula o relógio hepático e contribui para esteatose e resistência à insulina<sup class="cit"><a href="#f13">13</a></sup>.</p><p>Na pesquisa com células-tronco, células progenitoras cardíacas possuem um relógio funcional que controla proliferação, tolerância ao estresse e liberação de fatores de crescimento. Considerar o ritmo circadiano pode melhorar a reprodutibilidade e o resultado de terapias celulares<sup class="cit"><a href="#f5">5</a></sup>. Em condrócitos, a carga mecânica cíclica sincroniza o relógio molecular e aumenta a produção de matriz cartilaginosa, sugerindo aplicações em engenharia de tecidos<sup class="cit"><a href="#f6">6</a></sup>.</p><p>No câncer, a desregulação do relógio pode afetar a expressão do oncogene MYC, e a inibição de MYC pode restaurar a função do relógio em células tumorais<sup class="cit"><a href="#f14">14</a></sup>. A cronoterapia também está sendo explorada para reduzir a toxicidade de tratamentos oncológicos.</p><p>Além disso, o relógio influencia a resposta a medicamentos, a tolerância a insultos e a progressão de doenças. Entender como o relógio molecular funciona em diferentes tecidos permite intervenções mais precisas e personalizadas.</p>
` }

},

sintese: {
 "definicoes": [
  {
   "termo": "Relógio circadiano molecular",
   "def": "Conjunto de proteínas que interagem dentro da célula e geram um ciclo de aproximadamente 24 horas, mesmo sem pistas externas."
  },
  {
   "termo": "Alça de feedback transcricional-traducional",
   "def": "Ciclo em que proteínas ativam a produção de outras proteínas que voltam ao núcleo e freiam a própria ativação, fechando o ciclo de cerca de 24 horas."
  },
  {
   "termo": "Núcleo supraquiasmático (SCN)",
   "def": "Grupo de cerca de 20.000 neurônios no hipotálamo que funciona como relógio central em mamíferos e sincroniza os relógios dos outros tecidos."
  },
  {
   "termo": "Relógio periférico",
   "def": "Oscilador presente em quase todos os tecidos, que funciona de forma autônoma mas é ajustado pelo relógio central."
  },
  {
   "termo": "Cronoterapia",
   "def": "Estratégia de administrar medicamentos no horário em que o alvo é mais expresso ou sensível, aproveitando os ritmos do corpo."
  },
  {
   "termo": "Circadiano",
   "def": "Palavra vinda do latim circa diem, que significa «cerca de um dia»."
  }
 ],
 "lembrar": [
  "Cada célula do corpo tem um oscilador interno que continua funcionando quando a célula é isolada de luz e comida em horários fixos.",
  "O relógio tem três partes: o oscilador central que marca o tempo, vias de entrada que o ajustam ao ambiente e vias de saída que controlam ritmos celulares.",
  "No núcleo, CLOCK e BMAL1 ativam a produção de PER e CRY, que se acumulam e voltam para inibir CLOCK:BMAL1, freando a própria produção.",
  "Em humanos isolados de pistas externas, o relógio roda em média 24,2 horas por dia, um pouco mais que as 24 horas do dia solar.",
  "A mesma célula pode responder de modo diferente a um estímulo dependendo da hora do dia, porque o relógio organiza o tempo interno dos processos.",
  "O mecanismo foi descrito em moscas-da-fruta por Hall, Rosbash e Young, que receberam o Nobel de Medicina em 2017."
 ],
 "confusoes": [
  {
   "erro": "O relógio circadiano existe só no cérebro.",
   "correcao": "Quase todos os tecidos têm relógio próprio. O do cérebro, no núcleo supraquiasmático, sincroniza os relógios periféricos, mas cada célula tem seu oscilador autônomo."
  },
  {
   "erro": "O ciclo dura exatamente 24 horas.",
   "correcao": "Ele dura cerca de 24 horas. Em humanos isolados de pistas externas, a média medida é 24,2 horas por dia, e a luz ajusta o relógio diariamente."
  },
  {
   "erro": "O relógio molecular funciona só por transcrição de genes.",
   "correcao": "Existem oscilações independentes de transcrição. Glóbulos vermelhos humanos, que não têm núcleo, mostram ritmos em proteínas redox."
  },
  {
   "erro": "O relógio é igual em todos os organismos.",
   "correcao": "A lógica de alças interligadas se mantém, mas os componentes mudam. Plantas usam CCA1, LHY e TOC1, e cianobactérias usam KaiA, KaiB e KaiC."
  },
  {
   "erro": "O relógio é um acessório da célula, sem efeito prático.",
   "correcao": "Ele está entrelaçado com a maior parte do metabolismo celular e controla processos como proliferação, tolerância ao estresse e liberação de fatores de crescimento."
  }
 ],
 "numeros": [
  "Quando isolados de pistas externas, os relógios humanos em laboratório chegam a rodar em média 24,2 horas por dia.",
  "O relógio central em mamíferos fica em um grupo de cerca de 20.000 neurônios no hipotálamo, o núcleo supraquiasmático.",
  "Manipulações no núcleo supraquiasmático mostraram períodos sustentados de menos de 17 horas a mais de 42 horas.",
  "Apenas cerca de 22% dos genes com mRNA cíclico são dirigidos por transcrição de novo, o que mostra o peso dos mecanismos pós-transcricionais.",
  "Compostos que inibem CRY1/2 foram achados em uma triagem de mais de 1000 moléculas e atenuam a oscilação em fibroblastos."
 ]
},

flashcards: [
 {
  "f": "O que é o relógio circadiano molecular?",
  "v": "É um conjunto de proteínas que interagem dentro da célula e geram um ciclo de aproximadamente 24 horas. Ele funciona mesmo sem luz ou comida em horários fixos."
 },
 {
  "f": "Quais são as três partes de um relógio circadiano?",
  "v": "Um oscilador bioquímico central que marca o tempo, vias de entrada que o ajustam ao ambiente e vias de saída que controlam ritmos celulares."
 },
 {
  "f": "Como funciona a alça de feedback central do relógio?",
  "v": "CLOCK e BMAL1 ativam a transcrição de PER e CRY. As proteínas PER e CRY se acumulam, voltam ao núcleo e inibem CLOCK:BMAL1, freando a própria produção. O ciclo leva cerca de 24 horas."
 },
 {
  "f": "Qual é o papel do núcleo supraquiasmático?",
  "v": "É o relógio central em mamíferos, com cerca de 20.000 neurônios no hipotálamo. Ele recebe sinais luminosos da retina e sincroniza os relógios periféricos dos tecidos."
 },
 {
  "f": "O que acontece se uma célula humana for isolada de pistas externas?",
  "v": "Ela continua a expressar certos genes em ciclos de aproximadamente 24 horas. Isso mostra que o oscilador é interno e autônomo."
 },
 {
  "f": "O relógio depende só de transcrição de genes?",
  "v": "Não. Existem oscilações independentes de transcrição, como os ritmos redox vistos em glóbulos vermelhos humanos, que não têm núcleo."
 },
 {
  "f": "O que é uma segunda alça do relógio em mamíferos?",
  "v": "REV-ERBα e RORα competem para regular a expressão de Bmal1, adicionando mais controle ao sistema."
 },
 {
  "f": "Como as modificações pós-traducionais ajustam o relógio?",
  "v": "Fosforilação, ubiquitinação e sumoilação ajustam a precisão do período. A fosforilação de PER e CRY por caseína quinases controla sua estabilidade e entrada no núcleo."
 },
 {
  "f": "O relógio funciona igual em plantas e cianobactérias?",
  "v": "A lógica de alças interligadas se mantém, mas os componentes são diferentes. Plantas usam CCA1, LHY e TOC1, e cianobactérias usam KaiA, KaiB e KaiC."
 },
 {
  "f": "Por que a mesma célula pode responder diferente ao mesmo estímulo em horas distintas?",
  "v": "Porque o relógio organiza o tempo interno dos processos celulares. A resposta depende do ponto do ciclo em que a célula está."
 },
 {
  "f": "O que é cronoterapia?",
  "v": "É administrar medicamentos no momento em que o alvo é mais expresso ou sensível. Ela aproveita as variações diárias do corpo, como pressão arterial e secreção hormonal."
 },
 {
  "f": "Por que considerar o relógio em terapias com células-tronco?",
  "v": "Células progenitoras têm relógio funcional que controla proliferação, tolerância ao estresse e liberação de fatores de crescimento. Respeitar o ritmo melhora a reprodutibilidade e o resultado."
 }
],

prova: [
 {
  "camada": "nucleo",
  "q": "Por que dizemos que o oscilador circadiano é interno e autônomo?",
  "alts": [
   "Porque ele só funciona quando a célula recebe luz direta.",
   "Porque ele continua funcionando em ciclos de cerca de 24 horas mesmo quando a célula é isolada de pistas externas.",
   "Porque ele depende de sinais do núcleo supraquiasmático para existir.",
   "Porque ele só aparece em células com núcleo."
  ],
  "correta": 1,
  "porque": "Osciladores isolados de luz e comida em horários fixos mantêm ciclos de aproximadamente 24 horas. A alternativa A confunde o relógio com um sistema que depende de luz, que serve para ajustá-lo, não para fazê-lo funcionar."
 },
 {
  "camada": "nucleo",
  "q": "Como a alça de feedback central do relógio se fecha?",
  "alts": [
   "CLOCK e BMAL1 inibem PER e CRY, que por sua vez ativam CLOCK:BMAL1.",
   "PER e CRY ativam a transcrição de CLOCK e BMAL1 em ciclo contínuo.",
   "CLOCK e BMAL1 ativam PER e CRY, que se acumulam e voltam ao núcleo para inibir CLOCK:BMAL1.",
   "REV-ERBα ativa Bmal1 enquanto RORα o reprime diretamente no citoplasma."
  ],
  "correta": 2,
  "porque": "O ciclo começa com CLOCK:BMAL1 ativando PER e CRY, cujas proteínas inibem depois o próprio ativador. A alternativa A inverte o sentido da alça, o que quebraria o mecanismo."
 },
 {
  "camada": "nucleo",
  "q": "Qual é a função do núcleo supraquiasmático?",
  "alts": [
   "Produzir diretamente a melatonina que circula no sangue.",
   "Receber sinais luminosos da retina e sincronizar os relógios periféricos dos tecidos.",
   "Guardar cópias de todos os genes do relógio para distribuí-las às células.",
   "Armazenar energia para o ciclo circadiano."
  ],
  "correta": 1,
  "porque": "O SCN é o relógio central: recebe luz pela retina e sincroniza os osciladores dos outros tecidos. A alternativa A erra porque a melatonina é produzida pela glândula pineal, embora o SCN module sua produção."
 },
 {
  "camada": "nucleo",
  "q": "Por que as modificações pós-traducionais são importantes para o relógio?",
  "alts": [
   "Porque substituem a transcrição dos genes do relógio.",
   "Porque ajustam a precisão do período, afetando a estabilidade e a entrada nuclear de proteínas como PER e CRY.",
   "Porque impedem que o relógio seja sincronizado pela luz.",
   "Porque eliminam a necessidade de alças de feedback."
  ],
  "correta": 1,
  "porque": "Fosforilação, ubiquitinação e sumoilação ajustam a precisão do ciclo e o comportamento das proteínas. A alternativa A erra porque essas modificações agem depois da tradução, não no lugar da transcrição."
 },
 {
  "camada": "nucleo",
  "q": "O que a existência de ritmos redox em glóbulos vermelhos humanos mostra?",
  "alts": [
   "Que o relógio depende de transcrição de novo para funcionar.",
   "Que existem oscilações independentes de transcrição, já que glóbulos vermelhos não têm núcleo.",
   "Que o relógio é exclusivo de mamíferos.",
   "Que os glóbulos vermelhos produzem melatonina."
  ],
  "correta": 1,
  "porque": "Glóbulos vermelhos não têm núcleo nem fazem transcrição, mas mostram ritmos em peroxirredoxinas. A alternativa A contradiz justamente o dado que esses ritmos revelam."
 },
 {
  "camada": "nucleo",
  "q": "Por que o mesmo estímulo pode ter efeitos diferentes em uma célula dependendo da hora do dia?",
  "alts": [
   "Porque o relógio muda o DNA da célula ao longo do dia.",
   "Porque o relógio organiza o tempo interno dos processos celulares, e a resposta varia entre os picos e os vales do ciclo.",
   "Porque a célula perde o relógio quando é estimulada.",
   "Porque a temperatura corpórea é constante e isso altera as proteínas."
  ],
  "correta": 1,
  "porque": "O relógio posiciona cada processo no momento adequado, e a célula responde de modo diferente ao longo do ciclo. A alternativa A erra porque o relógio não altera a sequência do DNA."
 },
 {
  "camada": "aprofundamento",
  "q": "O que os experimentos com cianobactérias mostraram sobre o relógio?",
  "alts": [
   "Que o relógio exige transcrição em todos os organismos.",
   "Que as proteínas KaiA, KaiB e KaiC mais ATP podem gerar oscilação in vitro, sem transcrição.",
   "Que cianobactérias não têm relógio.",
   "Que o relógio de cianobactérias usa CLOCK e BMAL1."
  ],
  "correta": 1,
  "porque": "O sistema foi reconstituído in vitro com KaiA, KaiB, KaiC e ATP, mostrando oscilação sem transcrição. A alternativa A generaliza o que o experimento refutou ao menos nesse sistema."
 },
 {
  "camada": "aprofundamento",
  "q": "O que a metilação m6A no mRNA faz com o período circadiano?",
  "alts": [
   "Não tem efeito sobre o relógio.",
   "Inibir a enzima Mettl3 encurta o período, e superexpressá-la o alonga.",
   "Inibir a enzima Mettl3 alonga o período, e superexpressá-la o encurta.",
   "A metilação elimina o ciclo de 24 horas."
  ],
  "correta": 2,
  "porque": "Inibir Mettl3 alonga o período; superexpressá-la o encurta. A alternativa B inverte os dois efeitos observados."
 },
 {
  "camada": "aprofundamento",
  "q": "O que as manipulações no relógio do núcleo supraquiasmático revelaram sobre sua faixa de operação?",
  "alts": [
   "Que ele só funciona em períodos exatamente de 24 horas.",
   "Que ele tem faixa ampla, com períodos sustentados de menos de 17 horas a mais de 42 horas.",
   "Que ele perde o ritmo quando manipulado.",
   "Que ele funciona apenas no nível de células isoladas, nunca de rede."
  ],
  "correta": 1,
  "porque": "O relógio mostrou ser robusto e elástico, com períodos de menos de 17 horas a mais de 42 horas, tanto na rede quanto em células individuais. A alternativa A ignora o ajuste diário que ocorre em condições normais."
 },
 {
  "camada": "aprofundamento",
  "q": "Como modelos matemáticos contribuíram para o entendimento do relógio?",
  "alts": [
   "Demonstrando que alças de feedback com atraso e interações não lineares podem gerar oscilações circadianas.",
   "Provando que o relógio não tem base bioquímica.",
   "Mostrando que o relógio depende apenas de luz.",
   "Determinando a sequência exata do DNA de todos os genes do relógio."
  ],
  "correta": 0,
  "porque": "Um modelo de 1999 mostrou que oscilações circadianas podem emergir de alças com atraso e interações não lineares, mesmo com constantes de tempo bem menores que 24 horas. A alternativa B contradiz a função dos modelos no campo."
 },
 {
  "camada": "extensao",
  "q": "O que a cronoterapia busca fazer?",
  "alts": [
   "Eliminar os ritmos circadianos durante o tratamento.",
   "Administrar medicamentos no momento em que o alvo é mais expresso ou sensível.",
   "Usar a luz para substituir medicamentos.",
   "Tratar só doenças do sono."
  ],
  "correta": 1,
  "porque": "A cronoterapia alinha o horário do medicamento ao ponto do ciclo em que o alvo responde melhor. A alternativa D reduz o campo aos distúrbios do sono, mas a cronoterapia é explorada também no câncer e em doenças cardiovasculares."
 },
 {
  "camada": "extensao",
  "q": "Como o exercício físico se relaciona com o relógio no metabolismo?",
  "alts": [
   "O exercício anula o relógio hepático permanentemente.",
   "O exercício pode interagir com o relógio para melhorar a sensibilidade à insulina, e a hora do dia influencia o efeito metabólico.",
   "O exercício só afeta o relógio se for feito à noite.",
   "O exercício não tem relação com o relógio."
  ],
  "correta": 1,
  "porque": "O exercício interage com o relógio e melhora a sensibilidade à insulina, e o horário influencia o efeito. A alternativa C afirma uma regra fixa de horário que o documento não sustenta."
 }
],

fontes: [
 {
  "n": 1,
  "tipo": "enciclopédia",
  "ref": "Wikipédia (inglês), verbete 'Circadian clock'. Consultado em 27/09/2026.",
  "url": "https://en.wikipedia.org/wiki/Circadian_clock"
 },
 {
  "n": 2,
  "tipo": "enciclopédia",
  "ref": "Wikipédia (português), verbete 'Ritmo circadiano'. Consultado em 27/09/2026.",
  "url": "https://pt.wikipedia.org/wiki/Ritmo_circadiano"
 },
 {
  "n": 3,
  "tipo": "artigo",
  "ref": "Nicole Gossan, Feng Zhang, Baoqiang Guo, Ding Jun Jin et al.. 'The E3 ubiquitin ligase UBE3A is an integral component of the molecular circadian clock through regulating the BMAL1 transcription factor'. <em>Nucleic Acids Research</em>, 2014.",
  "url": "https://doi.org/10.1093/nar/gku225"
 },
 {
  "n": 4,
  "tipo": "artigo",
  "ref": "Ji‐Won Lee, Eonyoung Park, Ga Hye Kim, Ilmin Kwon et al.. 'A splice variant of human Bmal1 acts as a negative regulator of the molecular circadian clock'. <em>Experimental &amp; Molecular Medicine</em>, 2018.",
  "url": "https://doi.org/10.1038/s12276-018-0187-x"
 },
 {
  "n": 5,
  "tipo": "artigo",
  "ref": "Bastiaan C. du Pré, Evelyne J. Demkes, Dries A. M. Feyen, Pieterjan Dierickx et al.. 'SCA1 + Cells from the Heart Possess a Molecular Circadian Clock and Display Circadian Oscillations in Cellular Functions'. <em>Stem Cell Reports</em>, 2017.",
  "url": "https://doi.org/10.1016/j.stemcr.2017.07.010"
 },
 {
  "n": 6,
  "tipo": "artigo",
  "ref": "Judit Vágó, Éva Katona, Roland Takács, Klaudia Dócs et al.. 'Cyclic uniaxial mechanical load enhances chondrogenesis through entraining the molecular circadian clock'. <em>Journal of Pineal Research</em>, 2022.",
  "url": "https://doi.org/10.1111/jpi.12827"
 },
 {
  "n": 7,
  "tipo": "artigo",
  "ref": "Andrew P. Patton, Johanna Elizabeth Chesham, Michael Harvey Hastings. 'Combined Pharmacological and Genetic Manipulations Unlock Unprecedented Temporal Elasticity and Reveal Phase-Specific Modulation of the Molecular Circadian Clock of the Mouse Suprachiasmatic Nucleus'. <em>Journal of Neuroscience</em>, 2016.",
  "url": "https://doi.org/10.1523/jneurosci.0958-16.2016"
 },
 {
  "n": 8,
  "tipo": "artigo",
  "ref": "Charles S. Goldsmith, Sam Moon Kim, Nirmala Karunarathna, Nichole Neuendorff et al.. 'Inhibition of p38 MAPK activity leads to cell type-specific effects on the molecular circadian clock and time-dependent reduction of glioma cell invasiveness'. <em>BMC Cancer</em>, 2018.",
  "url": "https://doi.org/10.1186/s12885-017-3896-y"
 },
 {
  "n": 9,
  "tipo": "artigo",
  "ref": "Luisa María Vera, Pietro Negrini, C. Zagatti, Elena Frigato et al.. 'Light and feeding entrainment of the molecular circadian clock in a marine teleost (Sparus aurata)'. <em>Chronobiology International</em>, 2013.",
  "url": "https://doi.org/10.3109/07420528.2013.775143"
 },
 {
  "n": 10,
  "tipo": "artigo",
  "ref": "Sung Kook Chun, Jaebong Jang, Sooyoung Chung, Hwayoung Yun et al.. 'Identification and Validation of Cryptochrome Inhibitors That Modulate the Molecular Circadian Clock'. <em>ACS Chemical Biology</em>, 2014.",
  "url": "https://doi.org/10.1021/cb400752k"
 },
 {
  "n": 11,
  "tipo": "artigo",
  "ref": "Tjeerd V. olde Scheper, Don Klinkenberg, Jaap van Pelt, Cyriel M. A. Pennartz. 'A Model of Molecular Circadian Clocks: Multiple Mechanisms for Phase Shifting and a Requirement for Strong Nonlinear Interactions'. <em>Journal of Biological Rhythms</em>, 1999.",
  "url": "https://doi.org/10.1177/074873099129000623"
 },
 {
  "n": 12,
  "tipo": "artigo",
  "ref": "Lucile Dollet, Juleen Rae Zierath. 'Interplay between diet, exercise and the molecular circadian clock in orchestrating metabolic adaptations of adipose tissue'. <em>The Journal of Physiology</em>, 2019.",
  "url": "https://doi.org/10.1113/jp276488"
 },
 {
  "n": 13,
  "tipo": "artigo",
  "ref": "Uduak S. Udoh, Jennifer A. Valcin, Karen L. Gamble, Shannon M. Bailey. 'The Molecular Circadian Clock and Alcohol-Induced Liver Injury'. <em>Biomolecules</em>, 2015.",
  "url": "https://doi.org/10.3390/biom5042504"
 },
 {
  "n": 14,
  "tipo": "artigo",
  "ref": "Jamison B. Burchett, Amelia Clark, Brian James Altman. 'MYC Ran Up the Clock: The Complex Interplay between MYC and the Molecular Circadian Clock in Cancer'. <em>International Journal of Molecular Sciences</em>, 2021.",
  "url": "https://doi.org/10.3390/ijms22147761"
 }
],

fronteira: [{"tema": "Sinais de sincronização periférica", "html": "<p>Não está claro exatamente qual sinal (ou sinais) faz a sincronização principal dos relógios periféricos no corpo. A alimentação, a temperatura e o oxigênio já foram mostrados como capazes de ajustar relógios periféricos e até de desacoplá-los do relógio central<sup class=\"cit\"><a href=\"#f1\">1</a></sup>. No entanto, a hierarquia e a integração desses sinais em condições normais ainda são questões em aberto.</p>"}, {"tema": "Relógios redox versus transcricionais", "html": "<p>A descoberta de oscilações redox em células sem núcleo sugere que relógios redox podem ser mais ancestrais que os circuitos transcricionais<sup class=\"cit\"><a href=\"#f1\">1</a></sup>. A interação entre esses dois sistemas e sua contribuição relativa para o ritmo geral em diferentes tecidos ainda é objeto de pesquisa ativa.</p>"}, {"tema": "Variação do período em diferentes organismos", "html": "<p>Embora a maioria dos organismos tenha um relógio de aproximadamente 24 horas, alguns apresentam períodos anômalos. Algumas aranhas têm relógios de 18,5 horas, e viúvas-negras são arrítmicas<sup class=\"cit\"><a href=\"#f1\">1</a></sup>. As implicações funcionais e evolutivas dessas variações não são totalmente compreendidas.</p>"}],

fotos: [{"n": 1, "arquivo": "img/c/relogio-circadiano/1.webp", "legenda": "Esquema mostrando a localização do hipotálamo, núcleo supraquiasmático e glândula pineal no cérebro humano.", "alt": "Representação esquemática do cérebro humano em corte sagital, destacando a localização do hipotálamo, núcleo supraquiasmático e glândula pineal, com legendas em inglês.", "autor": "黄雨伞", "licenca": "CC BY-SA 3.0", "pagina": "https://commons.wikimedia.org/wiki/File:Suprachiasmatic_Nucleus.jpg", "gif": false, "w": 800, "h": 492}, {"n": 2, "arquivo": "img/c/relogio-circadiano/2.webp", "legenda": "Mosca-da-fruta Drosophila melanogaster, organismo modelo usado em estudos do relógio circadiano.", "alt": "Um exemplar macho de Drosophila melanogaster visto de perfil com reflexo em superfície.", "autor": "André Karwath aka Aka", "licenca": "CC BY-SA 2.5", "pagina": "https://commons.wikimedia.org/wiki/File:Drosophila_melanogaster_-_side_(aka).jpg", "gif": false, "w": 546, "h": 424}],
};
