CONTEUDOS["convergencia-evolutiva"] = {
termo: "Convergência evolutiva",
area: "Biologia",
subtitulo: "Quando linhagens diferentes chegam à mesma solução, a seleção natural revela que nem tudo é arbitrário na evolução. Entender convergência é separar parentesco de função.",
prerequisitos: [
 "Noções básicas de evolução: seleção natural, ancestral comum e árvore filogenética.",
 "Distinção entre homologia (mesma origem) e analogia (mesma função, origens diferentes)."
],
conexoes: [
 {
  "termo": "Teoria endossimbiótica",
  "relacao": "A convergência de funções metabólicas em simbiontes de insetos mostra como linhagens distantes podem chegar ao mesmo arranjo de vias biossintéticas."
 },
 {
  "termo": "Deriva genética e efeito fundador",
  "relacao": "A convergência é mais facilmente detectada quando a deriva é forte e as populações pequenas, pois restringe a variação disponível e favorece soluções semelhantes."
 },
 {
  "termo": "Seleção de parentesco e a regra de Hamilton",
  "relacao": "A convergência de comportamentos sociais em corvídeos e primatas sugere que a seleção de parentesco pode moldar soluções cognitivas análogas."
 },
 {
  "termo": "Evo-devo: evolução e desenvolvimento",
  "relacao": "O gene optix, que controla padrões de asas em borboletas miméticas, exemplifica como a evolução convergente pode recrutar os mesmos genes reguladores."
 }
],

camadas: {

nucleo: { minutos: 4, html: `
<p class="abre">O olho do polvo e o olho humano têm lentes, íris e retina capazes de formar imagens nítidas. Mas seus últimos ancestrais comuns tinham, no máximo, uma mancha fotossensível. Os dois olhos do tipo câmera surgiram de forma independente, um no ramo dos moluscos e outro no ramo dos vertebrados. Isso não é coincidência: a seleção natural encontrou a mesma solução para o problema de detectar luz e formar imagens. Essa é a convergência evolutiva, e ela revela que nem toda semelhança vem de parentesco.</p>

<h3>O que é convergência</h3>
<p>Convergência evolutiva é quando linhagens diferentes desenvolvem características semelhantes de forma independente, não presentes no ancestral comum. As estruturas resultantes são chamadas análogas: têm a mesma função, mas origens distintas. Já estruturas homólogas compartilham a mesma origem, mesmo que a função seja diferente. As asas dos morcegos e das aves são análogas como mecanismos de voo, mas os ossos dos membros anteriores são homólogos.</p>
<p>O mecanismo por trás da convergência é a seleção natural. Ambientes ou modos de vida semelhantes impõem pressões seletivas parecidas. Mutações que conferem vantagem reprodutiva em um dado contexto tendem a se espalhar, e linhagens distintas podem acabar convergindo para soluções funcionais equivalentes<sup class="cit"><a href="#f1">1</a></sup>. Isso não significa que a evolução seja previsível em todos os detalhes, mas mostra que existem restrições ambientais e físicas que canalizam a variação. A convergência não é um caso raro: ela aparece em todos os grandes grupos de seres vivos, de olhos a enzimas.</p>
<p>Um ponto central é que a semelhança não implica parentesco próximo. Duas espécies podem se parecer muito porque enfrentam os mesmos desafios ecológicos, e não porque herdaram a mesma solução de um ancestral comum. Essa distinção entre homologia e analogia é a base para reconstruir a história evolutiva.</p>

<h3>Exemplos que mostram o mecanismo</h3>
<p>Mamíferos placentários e marsupiais oferecem um dos casos mais claros. Após se separarem há cerca de 125 milhões de anos, linhagens na Austrália e em outros continentes enfrentaram pressões semelhantes. O tigre-dentes-de-sabre placentário (Smilodon) e o marsupial Thylacosmilus desenvolveram caninos enormes para matar presas rapidamente, apesar de serem parentes distantes<sup class="cit"><a href="#f1">1</a></sup>. O lobo-da-tasmânia (tilacino), um marsupial, tinha forma corporal e hábitos de predação semelhantes aos lobos placentários do gênero Canis<sup class="cit"><a href="#f1">1</a></sup>.</p>
<p>Na água, o corpo fusiforme de golfinhos, ictiossauros e peixes resulta de adaptações para nadar em alta velocidade em meio viscoso. Golfinhos são mamíferos cujos ancestrais tinham membros terrestres; ictiossauros eram répteis; peixes já eram aquáticos. As nadadeiras surgiram de órgãos diferentes, mas a forma hidrodinâmica convergiu<sup class="cit"><a href="#f1">1</a></sup>.</p>
<p>O voo também surgiu independentemente em insetos, aves, morcegos e pterossauros extintos<sup class="cit"><a href="#f2">2</a></sup>. As asas dos morcegos são membranas entre dedos alongados, enquanto as das aves são feitas de penas presas a ossos fundidos. A função é a mesma, a construção é distinta.</p>
<p>Outro caso clássico é a ecolocalização, que apareceu independentemente em morcegos e cetáceos, e até dentro de alguns grupos de morcegos<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Em plantas, a fotossíntese C4, um modo mais eficiente de fixar carbono em ambientes quentes e secos, surgiu independentemente até 40 vezes em plantas com flores, abrangendo cerca de 7.600 espécies<sup class="cit"><a href="#f2">2</a></sup>.</p>

<div class="marca consenso"><span class="rot">Consenso</span><p>Convergência evolutiva é um fenômeno bem documentado em todos os grandes grupos de seres vivos. A distinção entre homologia e analogia é central na biologia comparada e na sistemática filogenética. A seleção natural é o principal mecanismo que explica a repetição de soluções semelhantes em linhagens independentes<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p></div>

<h3>Convergência, divergência e paralelismo</h3>
<p>Divergência é o oposto: linhagens com ancestral comum acumulam diferenças ao ocupar nichos distintos. Os tentilhões de Galápagos, estudados por Darwin, são um exemplo clássico. A partir de uma espécie ancestral, surgiram 14 espécies com bicos adaptados a diferentes alimentos, um caso de irradiação adaptativa<sup class="cit"><a href="#f1">1</a></sup>.</p>
<p>Paralelismo é quando linhagens aparentadas, com ancestrais semelhantes, adquirem independentemente o mesmo caráter. A fronteira entre paralelismo e convergência é gradual; quando os ancestrais são desconhecidos ou a semelhança é parcial, a distinção fica menos nítida<sup class="cit"><a href="#f2">2</a></sup>.</p>
<p>Na classificação biológica, a convergência pode enganar. Cracas e lapas se parecem morfologicamente, mas as cracas são crustáceos e as lapas são moluscos. Um agrupamento baseado só em semelhança as uniria; a filogenia mostra que cracas são mais próximas de lagostas<sup class="cit"><a href="#f1">1</a></sup>. Por isso os cladistas rejeitam grupos polifiléticos, que agrupam descendentes de ancestrais diferentes com base em homoplasias.</p>
` },

aprofundamento: { minutos: 4, html: `
<p>A convergência é uma ferramenta para entender como a seleção natural molda a variação e quais restrições existem. A área desenvolveu métodos para distinguir convergência de outros padrões e para testar se forças seletivas semelhantes atuaram em linhagens distintas.</p>

<h3>Como se detecta convergência</h3>
<p>O primeiro passo é reconstruir a filogenia, assumindo inicialmente que a evolução ocorreu sem convergência. Depois, compara-se a semelhança fenotípica com a distância filogenética. Se linhagens distantemente relacionadas são muito parecidas num caráter, isso sugere convergência. Métodos mais recentes quantificam a força da convergência e tentam separar convergência verdadeira de estase evolutiva, que é a ausência de mudança ao longo do tempo<sup class="cit"><a href="#f2">2</a></sup>.</p>
<p>Há duas abordagens principais: medidas baseadas em padrão, que olham a semelhança de traços ao longo da filogenia; e medidas baseadas em processo, que ajustam modelos de seleção (como o processo de Ornstein-Uhlenbeck) para testar se as mesmas forças seletivas atuaram em linhagens diferentes<sup class="cit"><a href="#f2">2</a></sup>. A escolha depende da pergunta e dos dados disponíveis.</p>

<h3>Convergência em moléculas e genomas</h3>
<p>No nível molecular, a convergência é surpreendentemente comum. Enzimas chamadas proteases evoluíram pelo menos 20 vezes com o mesmo arranjo de tríade catalítica, usando aminoácidos diferentes para a mesma função química<sup class="cit"><a href="#f2">2</a></sup>. Isso mostra que restrições físico-químicas canalizam a evolução para soluções equivalentes.</p>
<p>Genomas de mamíferos marinhos, como a orca, a morsa e o peixe-boi, acumularam substituições de aminoácidos convergentes em genes ligados a adaptações ao meio aquático. Porém, um estudo comparativo encontrou níveis ainda maiores de convergência em pares de espécies terrestres próximas, sugerindo que convergência molecular adaptativa ligada a fenótipos é relativamente rara<sup class="cit"><a href="#f3">3</a></sup>.</p>
<p>Em insetos, a resistência a esteroides cardiotônicos, como os produzidos por plantas, evoluiu por substituições em posições específicas da proteína Na+,K+-ATPase. Entre 21 espécies adaptadas, 58 de 76 substituições ocorreram em paralelo em pelo menos duas linhagens, e 30 delas em apenas dois sítios da proteína<sup class="cit"><a href="#f2">2</a></sup>.</p>
<p>Em plantas, a cafeína surgiu independentemente em café, cacau e chá. A análise do genoma do café mostrou que os genes N-metiltransferase se expandiram por duplicações em tandem, sem relação com os de cacau e chá, indicando origem polifilética<sup class="cit"><a href="#f4">4</a></sup>.</p>
<p>O gene optix, um fator de transcrição, controla variações de padrão de asas em várias espécies de borboletas Heliconius que imitam umas às outras. A mesma região reguladora foi recrutada repetidamente, o que borra a fronteira entre convergência e homologia<sup class="cit"><a href="#f5">5</a></sup>.</p>

<h3>Convergência em ecologia e comportamento</h3>
<p>C4 fotossíntese, um modo mais eficiente de fixar carbono em ambientes quentes e secos, surgiu independentemente até 40 vezes em plantas com flores, abrangendo cerca de 7.600 espécies<sup class="cit"><a href="#f2">2</a></sup>. A dispersão de sementes por formigas evoluiu mais de 100 vezes, em mais de 11.000 espécies<sup class="cit"><a href="#f2">2</a></sup>. Plantas carnívoras surgiram pelo menos 7 vezes, com armadilhas diferentes, mas convergindo em enzimas digestivas<sup class="cit"><a href="#f1">1</a></sup>.</p>

[[FOTO:1]]
<p>Em animais, a ecolocalização apareceu independentemente em morcegos e cetáceos, e até dentro de alguns grupos de morcegos<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Ratos-cangurus de desertos na Austrália, América do Norte e África desenvolveram corpo arredondado, patas traseiras longas, cauda fina e hábitos noturnos, tudo de forma convergente<sup class="cit"><a href="#f1">1</a></sup>.</p>

[[FOTO:2]]
<p>Corvos e chimpanzés, grupos distantemente relacionados, apresentam habilidades cognitivas complexas como fabricação de ferramentas e cognição social. A semelhança sugere que a inteligência avançada evoluiu independentemente para resolver problemas socioecológicos similares, apesar de cérebros com estruturas muito diferentes<sup class="cit"><a href="#f6">6</a></sup>.</p>

<h3>Tabela comparativa de exemplos</h3>
<table>
<thead>
<tr><th>Caráter</th><th>Linhagens</th><th>Origem independente</th><th>Nível</th></tr>
</thead>
<tbody>
<tr><td>Olho tipo câmera</td><td>Cefalópodes e vertebrados</td><td>Sim, ancestral comum tinha só mancha fotossensível</td><td>Morfológico</td></tr>
<tr><td>Voo motorizado</td><td>Insetos, aves, morcegos, pterossauros</td><td>Sim, asas com estruturas diferentes</td><td>Morfológico</td></tr>
<tr><td>Corpo fusiforme</td><td>Peixes, golfinhos, ictiossauros</td><td>Sim, ancestrais terrestres ou aquáticos distintos</td><td>Morfológico</td></tr>
<tr><td>C4 fotossíntese</td><td>Muitas famílias de angiospermas</td><td>Até 40 vezes</td><td>Bioquímico</td></tr>
<tr><td>Resistência a cardiotônicos</td><td>Insetos de seis ordens</td><td>Sim, mesmas posições na Na+,K+-ATPase</td><td>Molecular</td></tr>
<tr><td>Cafeína</td><td>Café, cacau, chá</td><td>Sim, genes NMT distintos</td><td>Genético</td></tr>
</tbody>
</table>
` },

extensao: { minutos: 3, html: `
<p>Entender convergência ajuda a interpretar desde a classificação de espécies até o desenvolvimento de remédios. Na sistemática, a convergência é um fator de confusão: agrupar espécies apenas por semelhança pode levar a grupos artificiais. Por isso a filogenia molecular se tornou padrão para reconstruir parentesco<sup class="cit"><a href="#f1">1</a></sup>.</p>
<p>Na medicina, a convergência aparece na resistência a tratamentos. Células de câncer colorretal tratadas com anticorpos anti-EGFR podem desenvolver resistência por mutações em genes diferentes (KRAS, NRAS, BRAF, ERBB2, MET). Apesar da heterogeneidade genética, essas alterações convergem bioquimicamente em poucas vias de sinalização, o que orienta a busca por terapias combinadas<sup class="cit"><a href="#f7">7</a></sup>.</p>
<p>Na agricultura, a domesticação de plantas em diferentes regiões do mundo seguiu caminhos convergentes. Caracteres como a perda de dispersão de sementes e o aumento do tamanho da semente evoluíram de forma independente em várias espécies cultivadas, com taxas de mudança semelhantes ao longo de séculos a milênios<sup class="cit"><a href="#f8">8</a></sup>.</p>
<p>Em microbiologia, o microbioma de esponjas marinhas globais mostra que linhagens hospedeiras distintas montam comunidades microbianas com estrutura e interações semelhantes, sugerindo forças convergentes de seleção ecológica<sup class="cit"><a href="#f9">9</a></sup>. Bactérias simbiontes de insetos, como Sulcia e Hodgkinia, que divergiram há mais de 200 milhões de anos, convergiram em conjuntos de genes para síntese de aminoácidos essenciais, complementando-se<sup class="cit"><a href="#f10">10</a></sup>.</p>
<p>Até mesmo a inteligência artificial pode se beneficiar: ao estudar como a evolução encontrou repetidamente soluções eficientes para problemas como voo e visão, engenheiros buscam inspiração em designs que a seleção natural testou por milhões de anos. A convergência mostra que certas soluções são tão vantajosas que a evolução as encontra repetidamente, independentemente do ponto de partida.</p>
` }

},

sintese: {
 "definicoes": [
  {
   "termo": "Convergência evolutiva",
   "def": "Quando linhagens diferentes desenvolvem características semelhantes de forma independente, sem que elas estivessem no ancestral comum."
  },
  {
   "termo": "Estruturas análogas",
   "def": "Estruturas com a mesma função, mas origens distintas. As asas de morcegos e de aves são um exemplo."
  },
  {
   "termo": "Estruturas homólogas",
   "def": "Estruturas que compartilham a mesma origem, mesmo quando a função é diferente. Os ossos dos membros anteriores de morcegos e aves são homólogos."
  },
  {
   "termo": "Divergência",
   "def": "Linhagens com ancestral comum acumulam diferenças ao ocupar nichos distintos, como os tentilhões de Galápagos."
  },
  {
   "termo": "Paralelismo",
   "def": "Linhagens aparentadas, com ancestrais semelhantes, adquirem independentemente o mesmo caráter."
  },
  {
   "termo": "Estase evolutiva",
   "def": "Ausência de mudança ao longo do tempo, que os métodos precisam separar da convergência verdadeira."
  }
 ],
 "lembrar": [
  "O olho do polvo e o olho humano têm lentes, íris e retina que formam imagens nítidas, mas seus últimos ancestrais comuns tinham, no máximo, uma mancha fotossensível.",
  "A seleção natural é o principal mecanismo que explica por que linhagens independentes chegam a soluções semelhantes.",
  "Semelhança não implica parentesco próximo: duas espécies podem se parecer porque enfrentam os mesmos desafios ecológicos.",
  "Para detectar convergência, primeiro se reconstrói a filogenia e depois se compara a semelhança fenotípica com a distância filogenética.",
  "Cracas são crustáceos e lapas são moluscos, apesar de se parecerem; por isso os cladistas rejeitam grupos polifiléticos.",
  "A convergência aparece em todos os grandes grupos de seres vivos, de olhos a enzimas."
 ],
 "confusoes": [
  {
   "erro": "Pensar que toda semelhança entre espécies indica parentesco próximo.",
   "correcao": "Semelhança pode vir de convergência: linhagens distantes chegam à mesma solução porque enfrentam pressões seletivas parecidas."
  },
  {
   "erro": "Tratar analogia e homologia como sinônimos.",
   "correcao": "Análogas têm a mesma função e origens distintas; homólogas compartilham a mesma origem, mesmo com funções diferentes."
  },
  {
   "erro": "Achar que convergência é um caso raro ou uma exceção.",
   "correcao": "Ela aparece em todos os grandes grupos de seres vivos, de olhos a enzimas, e é comum também no nível molecular."
  },
  {
   "erro": "Supor que convergência significa que a evolução é previsível em todos os detalhes.",
   "correcao": "Ela mostra que restrições ambientais e físicas canalizam a variação, mas isso não torna a evolução previsível em cada detalhe."
  },
  {
   "erro": "Confundir convergência com estase evolutiva ao comparar linhagens.",
   "correcao": "Estase é ausência de mudança ao longo do tempo; os métodos precisam separá-la da convergência verdadeira."
  }
 ],
 "numeros": [
  "A fotossíntese C4 surgiu independentemente até 40 vezes em plantas com flores, abrangendo cerca de 7.600 espécies.",
  "A dispersão de sementes por formigas evoluiu mais de 100 vezes, em mais de 11.000 espécies.",
  "Proteases evoluíram pelo menos 20 vezes com o mesmo arranjo de tríade catalítica.",
  "Entre 21 espécies de insetos adaptadas a cardiotônicos, 58 de 76 substituições ocorreram em paralelo em pelo menos duas linhagens.",
  "Mamíferos placentários e marsupiais se separaram há cerca de 125 milhões de anos."
 ]
},

flashcards: [
 {
  "f": "O que é convergência evolutiva?",
  "v": "É quando linhagens diferentes desenvolvem características semelhantes de forma independente, sem que elas estivessem no ancestral comum."
 },
 {
  "f": "Qual a diferença entre estruturas análogas e homólogas?",
  "v": "Análogas têm a mesma função e origens distintas. Homólogas compartilham a mesma origem, mesmo que a função seja diferente."
 },
 {
  "f": "Qual mecanismo explica a convergência evolutiva?",
  "v": "A seleção natural. Ambientes ou modos de vida semelhantes impõem pressões seletivas parecidas em linhagens distintas."
 },
 {
  "f": "O que o olho do polvo e o olho humano mostram?",
  "v": "Os dois surgiram de forma independente, um no ramo dos moluscos e outro no dos vertebrados, a partir de ancestrais que tinham no máximo uma mancha fotossensível."
 },
 {
  "f": "O que é divergência evolutiva?",
  "v": "É quando linhagens com ancestral comum acumulam diferenças ao ocupar nichos distintos, como os tentilhões de Galápagos."
 },
 {
  "f": "O que é paralelismo?",
  "v": "É quando linhagens aparentadas, com ancestrais semelhantes, adquirem independentemente o mesmo caráter."
 },
 {
  "f": "Como se detecta convergência?",
  "v": "Primeiro se reconstrói a filogenia, assumindo inicialmente que não houve convergência. Depois se compara a semelhança fenotípica com a distância filogenética."
 },
 {
  "f": "O que os métodos precisam separar da convergência verdadeira?",
  "v": "A estase evolutiva, que é a ausência de mudança ao longo do tempo."
 },
 {
  "f": "Como a convergência pode enganar a classificação biológica?",
  "v": "Agrupar espécies só por semelhança pode formar grupos artificiais; por isso os cladistas rejeitam grupos polifiléticos baseados em homoplasias."
 },
 {
  "f": "A cafeína surgiu como, em plantas?",
  "v": "Independentemente em café, cacau e chá. No café, os genes N-metiltransferase se expandiram por duplicações em tandem, sem relação com os de cacau e chá."
 },
 {
  "f": "Por que corvos e chimpanzés são um exemplo de convergência?",
  "v": "Os dois apresentam habilidades cognitivas complexas, como fabricação de ferramentas, apesar de serem grupos distantemente relacionados e de terem cérebros com estruturas muito diferentes."
 },
 {
  "f": "Como a convergência aparece na resistência a tratamentos de câncer?",
  "v": "Células de câncer colorretal podem desenvolver resistência por mutações em genes diferentes, mas essas alterações convergem bioquimicamente em poucas vias de sinalização."
 }
],

prova: [
 {
  "camada": "nucleo",
  "q": "Qual mecanismo explica por que linhagens independentes chegam a soluções semelhantes?",
  "alts": [
   "A seleção natural, que favorece mutações vantajosas em contextos parecidos",
   "A herança direta de um ancestral comum recente",
   "O acaso, sem qualquer restrição ambiental",
   "A migração constante entre linhagens distantes"
  ],
  "correta": 0,
  "porque": "Ambientes ou modos de vida semelhantes impõem pressões seletivas parecidas. A alternativa da herança direta é tentadora, mas a convergência ocorre sem ancestral comum recente com essa característica."
 },
 {
  "camada": "nucleo",
  "q": "O que distingue estruturas análogas das homólogas?",
  "alts": [
   "As análogas têm a mesma função e origens distintas; as homólogas compartilham a mesma origem",
   "As análogas compartilham a mesma origem; as homólogas têm funções distintas",
   "As duas sempre têm a mesma origem e a mesma função",
   "As duas nunca aparecem em linhagens próximas"
  ],
  "correta": 0,
  "porque": "Analogia é mesma função com origens distintas, e homologia é mesma origem. A alternativa que fala só de origem ou de função troca os dois critérios."
 },
 {
  "camada": "nucleo",
  "q": "Por que o olho do polvo e o olho humano são um caso clássico de convergência?",
  "alts": [
   "Porque os dois têm lentes, íris e retina, mas seus últimos ancestrais comuns tinham no máximo uma mancha fotossensível",
   "Porque os dois herdaram o mesmo olho de um ancestral comum",
   "Porque os dois não formam imagens nítidas",
   "Porque só um dos dois detecta luz"
  ],
  "correta": 0,
  "porque": "São olhos tipo câmera que surgiram de forma independente, um no ramo dos moluscos e outro no dos vertebrados. A alternativa da herança cai justamente no erro que a convergência desfaz."
 },
 {
  "camada": "nucleo",
  "q": "O que é divergência evolutiva?",
  "alts": [
   "Linhagens com ancestral comum acumulam diferenças ao ocupar nichos distintos",
   "Linhagens distantes desenvolvem a mesma característica de forma independente",
   "Duas espécies param de mudar ao longo do tempo",
   "Um grupo é formado só por semelhança morfológica"
  ],
  "correta": 0,
  "porque": "Divergência parte de um ancestral comum e leva a diferenças, como nos tentilhões de Galápagos. A alternativa sobre linhagens distantes descreve convergência."
 },
 {
  "camada": "nucleo",
  "q": "Por que cracas e lapas enganam a classificação baseada só na aparência?",
  "alts": [
   "Porque se parecem, mas cracas são crustáceos e lapas são moluscos",
   "Porque são exatamente da mesma espécie",
   "Porque nenhuma das duas tem concha",
   "Porque ambas são crustáceos"
  ],
  "correta": 0,
  "porque": "A semelhança morfológica é uma homoplasia; a filogenia mostra que cracas são mais próximas de lagostas. Dizer que ambas são crustáceos ignora a origem distinta das lapas."
 },
 {
  "camada": "nucleo",
  "q": "Qual restrição física e ambiental a convergência sugere sobre a evolução?",
  "alts": [
   "Que existem restrições físicas e ambientais que canalizam a variação",
   "Que a evolução é totalmente previsível em cada detalhe",
   "Que não existe seleção natural",
   "Que todas as linhagens têm o mesmo ancestral"
  ],
  "correta": 0,
  "porque": "A convergência mostra que ambientes semelhantes canalizam a variação, mas isso não implica previsibilidade total. A alternativa da previsibilidade detalhada exagera o que os dados sustentam."
 },
 {
  "camada": "aprofundamento",
  "q": "Como os insetos desenvolveram resistência a esteroides cardiotônicos de plantas?",
  "alts": [
   "Por substituições em posições específicas da Na+,K+-ATPase, muitas delas em paralelo",
   "Por perda total da proteína Na+,K+-ATPase",
   "Por um único evento de mutação em todas as ordens",
   "Por absorção direta do veneno sem alteração proteica"
  ],
  "correta": 0,
  "porque": "Entre 21 espécies adaptadas, 58 de 76 substituições ocorreram em paralelo em pelo menos duas linhagens. Achar que foi um evento único ignora a repetição independente."
 },
 {
  "camada": "aprofundamento",
  "q": "O que o estudo do gene optix em borboletas Heliconius mostra?",
  "alts": [
   "Que a mesma região reguladora foi recrutada repetidamente, borrando a fronteira entre convergência e homologia",
   "Que o padrão de asas não tem relação com genes",
   "Que todas as Heliconius têm o mesmo padrão de asas",
   "Que o gene optix só existe em morcegos"
  ],
  "correta": 0,
  "porque": "O recrutamento repetido da mesma região reguladora mistura convergência e homologia. Negar a relação com genes contradiz o achado."
 },
 {
  "camada": "aprofundamento",
  "q": "Como a convergência aparece na resistência a tratamentos de câncer colorretal?",
  "alts": [
   "Mutações em genes diferentes convergem bioquimicamente em poucas vias de sinalização",
   "Todas as células desenvolvem a mesma mutação exata",
   "Os tumores deixam de ter vias de sinalização",
   "A resistência surge sem qualquer alteração genética"
  ],
  "correta": 0,
  "porque": "Mutações em KRAS, NRAS, BRAF, ERBB2 e MET convergem em poucas vias, o que orienta terapias combinadas. Supor uma mutação única contradiz a heterogeneidade descrita."
 },
 {
  "camada": "extensao",
  "q": "O que a domesticação de plantas em diferentes regiões revela?",
  "alts": [
   "Caracteres como perda de dispersão de sementes evoluíram de forma independente, com taxas de mudança semelhantes",
   "Todas as plantas cultivadas descendem de uma única espécie",
   "A domesticação ocorreu sem seleção humana",
   "As plantas cultivadas perderam todos os caracteres convergentes"
  ],
  "correta": 0,
  "porque": "A perda de dispersão e o aumento do tamanho da semente surgiram independentemente, com taxas parecidas ao longo de séculos a milênios. Não há ancestral cultivado único."
 },
 {
  "camada": "extensao",
  "q": "Por que engenheiros olham para a convergência evolutiva?",
  "alts": [
   "Porque certas soluções, como voo e visão, foram encontradas repetidamente e podem inspirar designs",
   "Porque a evolução é sempre mais lenta que a engenharia",
   "Porque a convergência prova que o design é impossível",
   "Porque só insetos resolvem problemas de voo"
  ],
  "correta": 0,
  "porque": "Soluções que a evolução encontrou repetidamente, como voo e visão, servem de inspiração. A alternativa que restringe o voo a insetos ignora os vários grupos que voaram."
 }
],

fontes: [
 {
  "n": 1,
  "tipo": "enciclopédia",
  "ref": "Wikipédia (português), verbete 'Convergência evolutiva'. Consultado em 27/09/2026.",
  "url": "https://pt.wikipedia.org/wiki/Converg%C3%AAncia_evolutiva"
 },
 {
  "n": 2,
  "tipo": "enciclopédia",
  "ref": "Wikipédia (inglês), verbete 'Convergent evolution'. Consultado em 27/09/2026.",
  "url": "https://en.wikipedia.org/wiki/Convergent_evolution"
 },
 {
  "n": 3,
  "tipo": "artigo",
  "ref": "Andrew David Foote, Yue Liu, Gregg W.C. Thomas, Tomáš Vinař et al.. 'Convergent evolution of the genomes of marine mammals'. <em>Nature Genetics</em>, 2015.",
  "url": "https://doi.org/10.1038/ng.3198"
 },
 {
  "n": 4,
  "tipo": "artigo",
  "ref": "France Denœud, Lorenzo Carretero‐Paulet, Alexis Dereeper, Gaëtan Droc et al.. 'The coffee genome provides insight into the convergent evolution of caffeine biosynthesis'. <em>Science</em>, 2014.",
  "url": "https://doi.org/10.1126/science.1255274"
 },
 {
  "n": 5,
  "tipo": "artigo",
  "ref": "Robert D. Reed, Riccardo Papa, Arnaud Martin, Heather M. Hines et al.. 'optix Drives the Repeated Convergent Evolution of Butterfly Wing Pattern Mimicry'. <em>Science</em>, 2011.",
  "url": "https://doi.org/10.1126/science.1208227"
 },
 {
  "n": 6,
  "tipo": "artigo",
  "ref": "Nathan J. Emery, Nicola Susan Clayton. 'The Mentality of Crows: Convergent Evolution of Intelligence in Corvids and Apes'. <em>Science</em>, 2004.",
  "url": "https://doi.org/10.1126/science.1098410"
 },
 {
  "n": 7,
  "tipo": "artigo",
  "ref": "Sandra Misale, Federica Di Nicolantonio, Andrea Sartore Bianchi, Salvatore Siena et al.. 'Resistance to Anti-EGFR Therapy in Colorectal Cancer: From Heterogeneity to Convergent Evolution'. <em>Cancer Discovery</em>, 2014.",
  "url": "https://doi.org/10.1158/2159-8290.cd-14-0462"
 },
 {
  "n": 8,
  "tipo": "artigo",
  "ref": "Dorian Q. Fuller, Tim P. Denham, Manuel Arroyo‐Kalin, Leilani Lucas et al.. 'Convergent evolution and parallelism in plant domestication revealed by an expanding archaeological record'. <em>Proceedings of the National Academy of Sciences</em>, 2014.",
  "url": "https://doi.org/10.1073/pnas.1308937110"
 },
 {
  "n": 9,
  "tipo": "artigo",
  "ref": "Torsten Thomas, Lucas Moitinho‐Silva, Miguel Lurgi, Johannes R. Björk et al.. 'Diversity, structure and convergent evolution of the global sponge microbiome'. <em>Nature Communications</em>, 2016.",
  "url": "https://doi.org/10.1038/ncomms11870"
 },
 {
  "n": 10,
  "tipo": "artigo",
  "ref": "John P. McCutcheon, Bradon R. McDonald, Nancy A. Moran. 'Convergent evolution of metabolic roles in bacterial co-symbionts of insects'. <em>Proceedings of the National Academy of Sciences</em>, 2009.",
  "url": "https://doi.org/10.1073/pnas.0906424106"
 }
],

fronteira: [{"tema": "Convergência e a previsibilidade da evolução", "html": "<p>Stephen Jay Gould argumentou que, se pudéssemos rebobinar a fita da vida, a evolução tomaria rumos muito diferentes. Simon Conway Morris discorda e defende que a convergência é tão comum que certos resultados, como a inteligência, seriam inevitáveis. Essa é uma questão em aberto. Os dados atuais mostram que a convergência é frequente em nível molecular e morfológico, mas não há consenso sobre se isso implica previsibilidade forte ou se é apenas consequência de restrições ambientais e físicas<sup class=\"cit\"><a href=\"#f2\">2</a></sup>.</p>"}, {"tema": "Transferência horizontal de genes e convergência", "html": "<p>Em alguns casos, semelhanças entre moléculas de linhagens distantes podem resultar de transferência horizontal de genes, e não de convergência verdadeira. Um exemplo é a insulina do caracol marinho Conus geographus, mais parecida com a de peixes do que com a de moluscos próximos. A hipótese de transferência horizontal é uma linha de pesquisa ativa, sem confirmação definitiva<sup class=\"cit\"><a href=\"#f2\">2</a></sup>.</p>"}, {"tema": "Adaptação versus deriva na convergência molecular", "html": "<p>Nem toda substituição convergente de aminoácidos é adaptativa. Estudo com mamíferos marinhos encontrou mais convergência em pares de espécies terrestres próximas do que nas linhagens aquáticas, sugerindo que convergência molecular pode surgir por deriva ou por restrições mutacionais, sem relação direta com adaptação fenotípica. Distinguir os dois casos é um desafio metodológico atual<sup class=\"cit\"><a href=\"#f3\">3</a></sup>.</p>"}],

fotos: [{"n": 1, "arquivo": "img/c/convergencia-evolutiva/1.webp", "legenda": "Rato-canguru em seu habitat desértico, um dos exemplos clássicos de adaptação ao ambiente seco.", "alt": "Um rato-canguru em um ambiente arenoso.", "autor": "autor desconhecido", "licenca": "Public domain", "pagina": "https://commons.wikimedia.org/wiki/File:Kangaroo-rat.jpg", "gif": false, "w": 733, "h": 488}, {"n": 2, "arquivo": "img/c/convergencia-evolutiva/2.webp", "legenda": "Chimpanzé utilizando um objeto como ferramenta para quebrar uma noz sobre uma base de pedra.", "alt": "Um chimpanzé usando um objeto cúbico para quebrar uma noz sobre uma pedra.", "autor": "Cornelia Schrauf, Josep Call, Koki Fuwa and Satoshi Hirata", "licenca": "CC BY-SA 2.5", "pagina": "https://commons.wikimedia.org/wiki/File:Common_Chimpanzee_uses_cuboid_tool_in_the_lab.png", "gif": false, "w": 800, "h": 712}],
};
