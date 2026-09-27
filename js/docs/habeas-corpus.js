CONTEUDOS["habeas-corpus"] = {
termo: "Habeas corpus: origem e função",
area: "Direito",
subtitulo: "O habeas corpus é uma ação judicial que obriga qualquer autoridade a apresentar a razão de uma prisão. Criado na Inglaterra, virou cláusula pétrea no Brasil e protege a liberdade de ir e vir de qualquer pessoa.",
prerequisitos: [
 "Saber o que é uma ação judicial e um direito fundamental. Não precisa de conhecimento jurídico prévio."
],
conexoes: [
 {
  "termo": "Devido processo legal",
  "relacao": "O habeas corpus nasceu como um instrumento para forçar o Estado a seguir o devido processo antes de prender alguém, e os dois conceitos se confundem na origem inglesa."
 },
 {
  "termo": "Ônus da prova e presunção de inocência",
  "relacao": "No habeas corpus, cabe à autoridade que prende provar que a prisão é legal, não ao preso provar que é inocente."
 },
 {
  "termo": "Princípio da legalidade penal (nullum crimen sine lege)",
  "relacao": "O habeas corpus só é concedido quando a prisão viola a lei, ou seja, quando não há previsão legal para aquela restrição da liberdade."
 },
 {
  "termo": "Contraditório e ampla defesa",
  "relacao": "O procedimento do habeas corpus é rápido e pode ouvir o preso antes da decisão, mas abre mão de uma fase de provas para ganhar velocidade."
 },
 {
  "termo": "Coisa julgada",
  "relacao": "Quando o habeas corpus é concedido, a decisão se torna imutável; quando é negado, pode ser repetido com novos fundamentos."
 }
],

camadas: {

nucleo: { minutos: 5, html: `
<p class="abre">Imagine que alguém é preso sem que ninguém explique por quê. Não há juiz, não há acusação formal, não há prazo para soltar. Em muitos lugares do mundo, a pessoa pode pedir à Justiça uma ordem simples: que o responsável pela prisão apresente o corpo do preso e diga, na frente de um juiz, qual é a base legal daquela detenção. Se não houver base, o preso sai livre. Essa ordem é o habeas corpus.</p>

<h3>O que a expressão significa</h3>

<p>A frase é latim: <em>habeas corpus</em> quer dizer "que tenhas o corpo"<sup class="cit"><a href="#f1">1</a></sup>. A ordem manda trazer a pessoa presa fisicamente à presença do juiz, em vez de aceitar um papel dizendo que ela está detida. O juiz quer ver a pessoa e ouvir a autoridade que a mantém sob custódia. A ideia é que a liberdade de ir e vir não pode depender de um documento anônimo ou de uma decisão sem explicação.</p>

<p>O habeas corpus é uma ação judicial, não um pedido informal. Qualquer pessoa pode entrar com ela, mesmo sem advogado, e não precisa ser o próprio preso<sup class="cit"><a href="#f1">1</a></sup>. Um amigo, um parente, um desconhecido ou até um juiz, de ofício, podem pedir a ordem em nome de quem está detido. No Brasil, a Constituição de 1988 garante esse direito no artigo 5º, inciso LXVIII<sup class="cit"><a href="#f1">1</a></sup>.</p>

<div class="marca consenso"><span class="rot">Consenso</span><p>O habeas corpus protege a liberdade de locomoção contra violência ou coação ilegal, praticada por ilegalidade ou abuso de poder. É uma garantia presente em tratados internacionais, como o artigo 8º da Declaração Universal dos Direitos Humanos de 1948<sup class="cit"><a href="#f1">1</a></sup>, e no Brasil é cláusula pétrea: não pode ser abolida nem por emenda constitucional<sup class="cit"><a href="#f1">1</a></sup>.</p></div>

<h3>Como o mecanismo funciona</h3>

<p>O habeas corpus não julga se a pessoa é culpada ou inocente. Ele examina apenas uma coisa: a prisão é legal? Se a resposta for não, o juiz ordena a soltura imediata ou impede que a prisão aconteça. O Código de Processo Penal brasileiro lista sete situações em que a coação é considerada ilegal, entre elas: não há justa causa para a acusação, alguém está preso por mais tempo do que a lei permite, quem ordenou a prisão não tinha competência para isso, ou o motivo que justificava a prisão já cessou<sup class="cit"><a href="#f1">1</a></sup>.</p>

<p>Há duas formas principais. O habeas corpus preventivo é pedido antes da prisão, quando há uma ameaça concreta e atual, como um mandado expedido. Se concedido, o juiz emite um salvo-conduto, que impede a detenção<sup class="cit"><a href="#f1">1</a></sup>. O habeas corpus repressivo, também chamado de liberatório, é pedido depois que a pessoa já está presa. Nesse caso, a ordem manda soltar<sup class="cit"><a href="#f1">1</a></sup>.</p>

<p>O procedimento é rápido e simples. Não há uma fase separada para produzir provas: os documentos devem ser apresentados junto com o pedido, e o juiz pode pedir diligências se precisar<sup class="cit"><a href="#f1">1</a></sup>. Das decisões no habeas corpus cabe recurso em cinco dias<sup class="cit"><a href="#f1">1</a></sup>.</p>

<h3>Onde a história começa</h3>

<p>A origem exata é disputada. Há duas hipóteses mais citadas: o Capítulo XXIX da Magna Carta de 1215, na Inglaterra, ou o Habeas Corpus Act de 1679<sup class="cit"><a href="#f1">1</a></sup>. Outros historiadores vão mais longe e situam as raízes na Assize de Clarendon de 1166, no reinado de Henrique II, e que a ligação com a Magna Carta é um erro comum<sup class="cit"><a href="#f2">2</a></sup>.</p>

<p>O que se sabe com mais segurança é que o Habeas Corpus Act de 1679 foi o primeiro texto a codificar o procedimento<sup class="cit"><a href="#f2">2</a></sup>. Ele surgiu num confronto direto entre o rei Carlos II e o Parlamento, dominado pelo nascente partido Whig. Os líderes whigs temiam ser presos pelo rei e viram no habeas corpus uma proteção para si mesmos<sup class="cit"><a href="#f2">2</a></sup>. O Parlamento que aprovou a lei foi dissolvido logo depois e ficou conhecido como o Parlamento do Habeas Corpus<sup class="cit"><a href="#f2">2</a></sup>.</p>

<p>Antes disso, o habeas corpus era um instrumento do próprio rei. O historiador Paul Halliday, citado em resenhas da obra <em>Habeas Corpus: From England to Empire</em>, mostrou que, nos primeiros séculos, os juízes usavam o writ para controlar autoridades locais e garantir que elas não ultrapassassem os poderes que o rei lhes tinha delegado. O foco não era a liberdade do preso, e sim o possível abuso de quem prendia<sup class="cit"><a href="#f3">3</a></sup><sup class="cit"><a href="#f4">4</a></sup>. A inversão veio depois, quando o habeas corpus passou a ser visto como proteção do indivíduo contra o Estado.</p>

<h3>O habeas corpus no Brasil</h3>

<p>No Brasil, a Constituição de 1891 garantiu o habeas corpus de forma explícita, inspirada no modelo norte-americano<sup class="cit"><a href="#f1">1</a></sup>. O texto era tão amplo que o Supremo Tribunal Federal passou a usá-lo para proteger outros direitos além da liberdade de locomoção, desde que a restrição a essa liberdade fosse o meio de ofender outro direito. Essa leitura ficou conhecida como a doutrina brasileira do habeas corpus<sup class="cit"><a href="#f1">1</a></sup>. Em 1926, uma reforma constitucional restringiu o remédio de volta ao seu conceito tradicional, mantido até hoje<sup class="cit"><a href="#f1">1</a></sup>.</p>

<p>A garantia nunca sumiu dos textos constitucionais, mas sua eficácia variou. Durante a ditadura, o AI-5 suspendeu o habeas corpus para crimes políticos, contra a segurança nacional, a ordem econômica e social e a economia popular<sup class="cit"><a href="#f1">1</a></sup>. Com a Constituição de 1988, o habeas corpus voltou em plenitude e virou cláusula pétrea<sup class="cit"><a href="#f1">1</a></sup>.</p>
` },

aprofundamento: { minutos: 5, html: `
<p>Quem estuda habeas corpus aprende que a história oficial nem sempre bate com os arquivos. Durante muito tempo, o writ foi descrito como o "grande writ da liberdade", um instrumento que protegia o súdito do arbítrio real desde tempos imemoriais. Essa versão foi popularizada por juristas whigs a partir do fim do século XVII e consolidada por William Blackstone, que chamou o Habeas Corpus Act de 1679 de "segunda Magna Carta"<sup class="cit"><a href="#f5">5</a></sup>.</p>

<p>O trabalho de Paul Halliday mudou essa leitura. Ele examinou arquivos judiciais ingleses de mais de quinhentos anos e mostrou que, no começo, o habeas corpus era um instrumento de poder real, não de liberdade individual. Os juízes o usavam para verificar se autoridades locais, carcereiros e tribunais inferiores estavam agindo dentro dos limites que o rei lhes tinha dado. O que importava era o possível erro de quem prendia, e não o direito do preso à liberdade<sup class="cit"><a href="#f3">3</a></sup><sup class="cit"><a href="#f4">4</a></sup>. Só mais tarde o foco se deslocou para a proteção da pessoa detida.</p>

<p>Essa revisão histórica tem consequências práticas. Ela mostra que o habeas corpus foi uma construção política, e não uma garantia natural que sempre existiu. O Habeas Corpus Act de 1679, por exemplo, ao mesmo tempo que protegia, também sujeitou o writ ao controle do Parlamento: o que o Parlamento dava, o Parlamento podia tirar<sup class="cit"><a href="#f3">3</a></sup>. Foi essa lógica que abriu espaço para as suspensões em tempos de guerra e emergência.</p>

<p>A suspensão é uma invenção parlamentar inglesa. A primeira lei desse tipo foi o Habeas Corpus Suspension Act de 1794, na Grã-Bretanha, seguido por outro em 1863 nos Estados Unidos<sup class="cit"><a href="#f2">2</a></sup>. Em 1817, o governo britânico voltou a suspender a garantia para prender líderes de sociedades radicais que pediam reforma parlamentar<sup class="cit"><a href="#f6">6</a></sup>. A suspensão não significava que o habeas corpus deixava de existir tecnicamente, mas que o preso não podia obter soltura enquanto a lei estivesse em vigor.</p>

<p>Os Estados Unidos adotaram o modelo inglês e inscreveram a garantia na Constituição de 1787, na Cláusula de Suspensão: "O privilégio do writ de habeas corpus não será suspenso, salvo em casos de rebelião ou invasão, quando a segurança pública o exigir"<sup class="cit"><a href="#f2">2</a></sup>. Essa cláusula foi usada, ou contornada, em vários momentos. Abraham Lincoln e Ulysses Grant suspenderam a garantia durante a Guerra Civil e a Reconstrução. Franklin Roosevelt fez o mesmo na Segunda Guerra Mundial. George W. Bush tentou manter os presos de Guantánamo fora do alcance do habeas corpus, mas a Suprema Corte derrubou a medida no caso <em>Boumediene v. Bush</em><sup class="cit"><a href="#f2">2</a></sup>.</p>

<p>Os historiadores mostram que o habeas corpus nos Estados Unidos sempre teve uma dimensão política forte. Justin Wert argumenta que a garantia foi usada por diferentes regimes para desfazer heranças de antecessores e impor sua própria visão de governo. Ela cresceu e encolheu conforme os interesses da maioria política no Congresso, na Presidência e nos estados<sup class="cit"><a href="#f7">7</a></sup>.</p>

<p>Para entender como o habeas corpus se espalhou, os juristas comparam sistemas. A tabela abaixo reúne exemplos de como diferentes países tratam a garantia:</p>

<table>
<thead>
<tr><th>País</th><th>Dispositivo principal</th><th>Quem pode pedir</th></tr>
</thead>
<tbody>
<tr><td>Brasil</td><td>Constituição de 1988, art. 5º, LXVIII; CPP, arts. 647 e seguintes</td><td>Qualquer pessoa, mesmo sem advogado; o juiz pode conceder de ofício<sup class="cit"><a href="#f1">1</a></sup></td></tr>
<tr><td>Estados Unidos</td><td>Constituição, Cláusula de Suspensão (Artigo I, Seção 9)</td><td>O preso ou alguém em seu nome; desde 1867, presos estaduais também podem pedir em corte federal<sup class="cit"><a href="#f2">2</a></sup></td></tr>
<tr><td>Canadá</td><td>Carta de Direitos e Liberdades, seção 10(c)</td><td>Qualquer pessoa presa ou detida<sup class="cit"><a href="#f2">2</a></sup></td></tr>
<tr><td>Índia</td><td>Constituição, arts. 32 e 226</td><td>O preso ou qualquer pessoa; a Suprema Corte e os Tribunais Superiores podem emitir a ordem<sup class="cit"><a href="#f2">2</a></sup></td></tr>
<tr><td>Portugal</td><td>Constituição, art. 31</td><td>O preso ou qualquer cidadão no gozo dos direitos políticos<sup class="cit"><a href="#f2">2</a></sup></td></tr>
</tbody>
</table>

<p>O caso canadense ilustra como o ônus da prova funciona. A Suprema Corte do Canadá estabeleceu, no caso <em>Mission Institution v Khela</em>, três passos: primeiro, o preso deve mostrar que foi privado da liberdade; depois, deve apresentar um motivo legítimo para duvidar da legalidade da prisão; por fim, o ônus passa para a autoridade, que precisa provar que a detenção é legal<sup class="cit"><a href="#f2">2</a></sup>. Essa inversão é uma característica antiga do habeas corpus: no common law, o dever de justificar a prisão sempre recaiu sobre o responsável pela custódia<sup class="cit"><a href="#f2">2</a></sup>.</p>

<p>No Brasil, o procedimento tem particularidades. A legitimação para entrar com o pedido é amplíssima: qualquer pessoa física ou jurídica, nacional ou estrangeira, mesmo sem interesse direto na locomoção discutida, independentemente de capacidade civil, idade, sexo ou grau de instrução<sup class="cit"><a href="#f1">1</a></sup>. Membros do Ministério Público também podem impetrar, mas nesse caso o paciente deve ser ouvido antes<sup class="cit"><a href="#f1">1</a></sup>. O foro competente varia conforme a autoridade que ordenou a coação: pode ser o Supremo Tribunal Federal, o Superior Tribunal de Justiça, um Tribunal Regional Federal, a Justiça Federal ou a Justiça do Trabalho<sup class="cit"><a href="#f1">1</a></sup>.</p>

<p>A liminar em habeas corpus é uma construção jurisprudencial. A lei não prevê expressamente, mas os tribunais aceitam conceder medida provisória quando há urgência e plausibilidade nas alegações, para evitar que a demora no julgamento cause dano irreparável à liberdade<sup class="cit"><a href="#f8">8</a></sup>. Estudos sobre o tema apontam que a morosidade do Judiciário torna a liminar necessária em muitos casos<sup class="cit"><a href="#f8">8</a></sup>.</p>

<p>Quando o habeas corpus é negado, a decisão não faz coisa julgada. Isso significa que o preso pode entrar com um novo pedido, desde que apresente novas provas ou novos fundamentos<sup class="cit"><a href="#f1">1</a></sup>. A lógica é que a liberdade não pode ser definitivamente barrada por uma única decisão, se surgirem elementos novos.</p>
` },

extensao: { minutos: 3, html: `
<p>O habeas corpus não serve só para soltar presos. Historicamente, ele foi usado para libertar pessoas mantidas em situações que hoje chamaríamos de trabalho análogo à escravidão, soldados recrutados à força, pacientes internados compulsoriamente em hospitais e crianças mantidas em custódia irregular por parentes<sup class="cit"><a href="#f9">9</a></sup>. Na Índia, o instrumento foi acionado por pais que discordavam de casamentos por escolha dos filhos, com tribunais decidindo se a pessoa estava detida contra a vontade ou apenas vivendo com quem escolheu<sup class="cit"><a href="#f10">10</a></sup>. Em 2006, na Nova Zelândia, um pai usou o habeas corpus para exigir que a Justiça localizasse o filho, supostamente levado pelo avô materno após uma disputa de guarda<sup class="cit"><a href="#f2">2</a></sup>.</p>

<p>Essa capacidade de adaptação vem da estrutura do pedido. O habeas corpus não pergunta "esta pessoa merece estar presa?", mas "quem a mantém sob custódia tem autoridade legal para isso?". Qualquer forma de confinamento pode ser questionada nesses termos, de uma cela de delegacia a um navio negreiro. Os autores de <em>The Law of Habeas Corpus</em> observam que o writ se estende além do muro da prisão e já foi usado para libertar escravos, trabalhadores sob contrato e pessoas detidas na guerra ao terror<sup class="cit"><a href="#f9">9</a></sup>.</p>

<p>No Brasil, o habeas corpus é usado em situações que vão além da prisão penal. Ele combate, por exemplo, restrições inválidas à entrada e saída do território nacional e a retenção de pacientes em hospitais<sup class="cit"><a href="#f1">1</a></sup>. Isso mostra que a liberdade de locomoção, embora seja o núcleo protegido, tem desdobramentos em várias áreas da vida.</p>

<p>Para quem estuda direito, o habeas corpus é uma porta de entrada para entender como o Judiciário controla o poder de prender. Ele concentra várias ideias ao mesmo tempo: presunção de inocência, ônus da prova sobre a autoridade, devido processo legal e supremacia constitucional. Quando um juiz concede a ordem, ele não está dizendo que o preso é inocente. Está dizendo que o Estado falhou em justificar a prisão com base na lei.</p>

<p>Essa é uma distinção que costuma escapar ao público. O habeas corpus não decide o mérito da culpa; ele verifica um requisito anterior, que é a legalidade da custódia. Se a lei autoriza a prisão, o habeas corpus não prospera, mesmo que o preso se declare inocente. O caminho, nesse caso, é outro: o processo penal comum, a apelação, a revisão criminal.</p>

<p>Em tempos de emergência, o habeas corpus é uma das primeiras garantias a ser restringida. A história inglesa, americana e brasileira mostra que governos pressionados por guerras ou crises internas tendem a suspender o writ para deter suspeitos sem julgamento<sup class="cit"><a href="#f2">2</a></sup><sup class="cit"><a href="#f11">11</a></sup>. Por isso, juristas o consideram um termômetro do estado de direito: quando o habeas corpus está enfraquecido, os outros direitos costumam estar em risco.</p>

<p>A história do writ também ensina que a garantia não é automática. Ela depende de juízes dispostos a enfrentar o poder de quem prende. No Brasil, o acervo do Supremo Tribunal Federal tinha mais de quatro mil habeas corpus em tramitação em 2018, o equivalente a uma parcela significativa dos processos originários da Corte<sup class="cit"><a href="#f1">1</a></sup>. O número alto mostra que o instrumento é usado em escala industrial, tanto para corrigir erros quanto para testar limites da lei. Saber o que ele é, e o que ele não é, ajuda a não esperar dele o que ele não pode entregar.</p>
` }

},

sintese: {
 "definicoes": [
  {
   "termo": "Habeas corpus",
   "def": "Ação judicial que pede a um juiz que a autoridade responsável por uma prisão apresente o preso e mostre a base legal da detenção. Se não houver base, o preso sai livre."
  },
  {
   "termo": "Habeas corpus preventivo",
   "def": "Pedido feito antes da prisão, quando existe ameaça concreta e atual, como um mandado expedido. Se concedido, o juiz emite um salvo-conduto que impede a detenção."
  },
  {
   "termo": "Habeas corpus repressivo",
   "def": "Também chamado de liberatório. É pedido depois que a pessoa já está presa, e a ordem manda soltar."
  },
  {
   "termo": "Cláusula pétrea",
   "def": "Disposição constitucional que não pode ser abolida nem por emenda. No Brasil, o habeas corpus tem essa proteção desde a Constituição de 1988."
  },
  {
   "termo": "Salvo-conduto",
   "def": "Documento emitido pelo juiz quando concede habeas corpus preventivo. Impede que a prisão ameaçada aconteça."
  },
  {
   "termo": "Suspensão do habeas corpus",
   "def": "Lei que impede o preso de obter soltura enquanto estiver em vigor, sem eliminar tecnicamente a garantia. Invenção parlamentar inglesa, usada em guerras e emergências."
  }
 ],
 "lembrar": [
  "O habeas corpus não julga culpa ou inocência. Ele examina apenas se a prisão é legal.",
  "Qualquer pessoa pode entrar com o pedido, mesmo sem advogado, e não precisa ser o próprio preso. Um juiz também pode conceder de ofício.",
  "O pedido pergunta quem mantém a pessoa sob custódia e se essa autoridade tem base legal para isso. Não pergunta se a pessoa merece estar presa.",
  "O procedimento é rápido e não tem fase separada de provas. Os documentos vão junto com o pedido, e decisões cabem recurso em cinco dias.",
  "A garantia nasceu como instrumento do próprio rei para controlar autoridades locais, e só depois passou a ser vista como proteção do indivíduo contra o Estado.",
  "Quando o habeas corpus é negado, a decisão não faz coisa julgada. O preso pode entrar com novo pedido se apresentar novas provas ou novos fundamentos."
 ],
 "confusoes": [
  {
   "erro": "Achar que o habeas corpus decide se o preso é culpado ou inocente.",
   "correcao": "Ele verifica só a legalidade da custódia. Se a lei autoriza a prisão, a ordem não prospera, mesmo que o preso se declare inocente. O caminho nesse caso é o processo penal comum."
  },
  {
   "erro": "Pensar que só o preso ou um advogado pode pedir.",
   "correcao": "Qualquer pessoa física ou jurídica, nacional ou estrangeira, mesmo sem interesse direto, pode entrar com o pedido. Um juiz também pode conceder de ofício."
  },
  {
   "erro": "Supor que o habeas corpus sempre existiu como proteção da liberdade individual.",
   "correcao": "Nos primeiros séculos, era um instrumento do rei para verificar se autoridades locais agiam dentro dos poderes delegados. A inversão para proteção do indivíduo veio depois."
  },
  {
   "erro": "Acreditar que a suspensão do habeas corpus elimina a garantia.",
   "correcao": "A suspensão impede que o preso obtenha soltura enquanto a lei estiver em vigor, mas o habeas corpus continua existindo tecnicamente."
  },
  {
   "erro": "Tratar a liminar em habeas corpus como algo previsto em lei.",
   "correcao": "A lei não prevê expressamente. Os tribunais aceitam conceder medida provisória quando há urgência e plausibilidade nas alegações, para evitar dano irreparável à liberdade."
  }
 ],
 "numeros": [
  "O Código de Processo Penal brasileiro lista sete situações em que a coação é considerada ilegal.",
  "A Magna Carta é de 1215, e o Habeas Corpus Act é de 1679.",
  "As raízes apontadas pelo verbete em inglês estariam na Assize de Clarendon de 1166, no reinado de Henrique II.",
  "A Declaração Universal dos Direitos Humanos é de 1948, e o artigo 8º trata da garantia.",
  "O acervo do Supremo Tribunal Federal tinha mais de quatro mil habeas corpus em tramitação em 2018."
 ]
},

flashcards: [
 {
  "f": "O que o habeas corpus examina?",
  "v": "Apenas se a prisão é legal. Ele não julga se a pessoa é culpada ou inocente."
 },
 {
  "f": "Quem pode entrar com habeas corpus no Brasil?",
  "v": "Qualquer pessoa, mesmo sem advogado, e não precisa ser o próprio preso. Um juiz também pode conceder de ofício."
 },
 {
  "f": "Qual a diferença entre habeas corpus preventivo e repressivo?",
  "v": "O preventivo é pedido antes da prisão, diante de ameaça concreta, e gera salvo-conduto. O repressivo é pedido depois que a pessoa já está presa, e a ordem manda soltar."
 },
 {
  "f": "O que significa a expressão habeas corpus?",
  "v": "A frase é latim e quer dizer \"que tenhas o corpo\". Manda trazer a pessoa presa fisicamente à presença do juiz."
 },
 {
  "f": "Por que o habeas corpus não faz coisa julgada quando negado?",
  "v": "Porque o preso pode entrar com novo pedido se apresentar novas provas ou novos fundamentos. A liberdade não pode ser definitivamente barrada por uma única decisão."
 },
 {
  "f": "Qual foi o primeiro texto a codificar o procedimento do habeas corpus?",
  "v": "O Habeas Corpus Act de 1679, na Inglaterra. A origem exata é disputada, e há quem aponte a Magna Carta de 1215 ou a Assize de Clarendon de 1166."
 },
 {
  "f": "Como funcionava o habeas corpus antes de virar proteção do indivíduo?",
  "v": "Era um instrumento do próprio rei. Os juízes o usavam para controlar autoridades locais e verificar se elas ultrapassavam os poderes delegados."
 },
 {
  "f": "O que a liminar em habeas corpus permite?",
  "v": "Conceder medida provisória quando há urgência e plausibilidade nas alegações, para evitar que a demora no julgamento cause dano irreparável à liberdade."
 },
 {
  "f": "O que é a Cláusula de Suspensão dos Estados Unidos?",
  "v": "Está na Constituição de 1787 e diz que o privilégio do writ não será suspenso, salvo em casos de rebelião ou invasão, quando a segurança pública o exigir."
 },
 {
  "f": "Quais três passos a Suprema Corte do Canadá estabeleceu no caso Mission Institution v Khela?",
  "v": "Primeiro o preso mostra que foi privado da liberdade. Depois apresenta motivo legítimo para duvidar da legalidade da prisão. Por fim o ônus passa para a autoridade, que precisa provar que a detenção é legal."
 },
 {
  "f": "O habeas corpus serve só para soltar presos?",
  "v": "Não. Historicamente foi usado para libertar pessoas em trabalho análogo à escravidão, soldados recrutados à força, pacientes internados compulsoriamente e crianças em custódia irregular."
 },
 {
  "f": "Por que o habeas corpus é considerado um termômetro do estado de direito?",
  "v": "Porque em tempos de emergência costuma ser uma das primeiras garantias a ser restringida. Quando ele está enfraquecido, os outros direitos tendem a estar em risco."
 }
],

prova: [
 {
  "camada": "nucleo",
  "q": "O que o habeas corpus pede a um juiz?",
  "alts": [
   "Que declare a inocência do preso.",
   "Que a autoridade responsável apresente o preso e mostre a base legal da detenção.",
   "Que reduza a pena do condenado.",
   "Que anule o processo penal inteiro."
  ],
  "correta": 1,
  "porque": "O habeas corpus manda trazer a pessoa presa à presença do juiz e exige que a autoridade explique a base legal da custódia. A alternativa mais tentadora é a primeira, mas o habeas corpus não julga culpa nem inocência."
 },
 {
  "camada": "nucleo",
  "q": "Quem pode entrar com habeas corpus no Brasil?",
  "alts": [
   "Somente o próprio preso.",
   "Somente advogado com procuração.",
   "Qualquer pessoa, mesmo sem advogado, e um juiz pode conceder de ofício.",
   "Somente membros do Ministério Público."
  ],
  "correta": 2,
  "porque": "A legitimação é amplíssima: qualquer pessoa física ou jurídica, nacional ou estrangeira, mesmo sem interesse direto, pode pedir. A alternativa mais tentadora é a primeira, mas o pedido não precisa ser feito pelo próprio preso."
 },
 {
  "camada": "nucleo",
  "q": "Qual a diferença principal entre habeas corpus preventivo e repressivo?",
  "alts": [
   "O preventivo é pedido antes da prisão, diante de ameaça concreta. O repressivo é pedido depois que a pessoa já está presa.",
   "O preventivo só vale para crimes políticos. O repressivo vale para todos.",
   "O preventivo é decidido por juiz de primeira instância. O repressivo, só pelo Supremo.",
   "O preventivo dispensa advogado. O repressivo exige."
  ],
  "correta": 0,
  "porque": "O preventivo é pedido antes da prisão e gera salvo-conduto. O repressivo, também chamado liberatório, é pedido depois da prisão e manda soltar. A alternativa mais tentadora é a terceira, mas o foro depende da autoridade que ordenou a coação, não do tipo de pedido."
 },
 {
  "camada": "nucleo",
  "q": "O habeas corpus julga o mérito da culpa?",
  "alts": [
   "Sim, ele decide se o preso é culpado.",
   "Sim, mas só em casos de flagrante.",
   "Não, ele verifica apenas a legalidade da custódia.",
   "Não, mas produz provas para o processo principal."
  ],
  "correta": 2,
  "porque": "O habeas corpus examina um requisito anterior, que é a legalidade da prisão. Se a lei autoriza a prisão, a ordem não prospera, mesmo que o preso se declare inocente. A alternativa mais tentadora é a primeira, que confunde a garantia com o processo penal."
 },
 {
  "camada": "nucleo",
  "q": "Por que o procedimento do habeas corpus é rápido?",
  "alts": [
   "Porque dispensa juiz e vai direto ao tribunal.",
   "Porque não tem fase separada para produzir provas: os documentos vão junto com o pedido.",
   "Porque só aceita casos de flagrante.",
   "Porque a decisão é sempre oral e imediata."
  ],
  "correta": 1,
  "porque": "Não há fase separada de produção de provas. Os documentos devem ser apresentados junto com o pedido, e o juiz pode pedir diligências se precisar. A alternativa mais tentadora é a primeira, mas o habeas corpus é uma ação judicial e passa por juiz."
 },
 {
  "camada": "aprofundamento",
  "q": "Segundo Paul Halliday, qual era a função inicial do habeas corpus?",
  "alts": [
   "Proteger o súdito do arbítrio real desde tempos imemoriais.",
   "Garantir a liberdade individual contra qualquer prisão.",
   "Servir de instrumento do rei para controlar autoridades locais.",
   "Substituir o julgamento penal comum."
  ],
  "correta": 2,
  "porque": "Halliday examinou arquivos ingleses de mais de quinhentos anos e mostrou que o writ era um instrumento de poder real, usado para verificar se autoridades locais agiam dentro dos limites delegados. A alternativa mais tentadora é a primeira, que é a versão popularizada por juristas whigs e por Blackstone."
 },
 {
  "camada": "aprofundamento",
  "q": "O que a Cláusula de Suspensão dos Estados Unidos permite?",
  "alts": [
   "Suspender o writ em casos de rebelião ou invasão, quando a segurança pública o exigir.",
   "Abolir o habeas corpus por emenda constitucional.",
   "Suspender o writ apenas para crimes comuns.",
   "Impedir que presos estaduais peçam habeas corpus em corte federal."
  ],
  "correta": 0,
  "porque": "A cláusula está na Constituição de 1787 e autoriza a suspensão em casos de rebelião ou invasão, quando a segurança pública o exigir. A alternativa mais tentadora é a segunda, mas a cláusula não trata de abolição por emenda."
 },
 {
  "camada": "aprofundamento",
  "q": "Como funciona o ônus da prova no caso Mission Institution v Khela, da Suprema Corte do Canadá?",
  "alts": [
   "O preso deve provar sua inocência desde o início.",
   "A autoridade deve provar a legalidade da prisão desde o início.",
   "O preso mostra a privação da liberdade e um motivo para duvidar da legalidade. Depois o ônus passa para a autoridade.",
   "O juiz decide sem que nenhuma das partes apresente argumentos."
  ],
  "correta": 2,
  "porque": "São três passos: privação da liberdade, motivo legítimo para duvidar da legalidade, e então o ônus passa para a autoridade, que precisa provar que a detenção é legal. A alternativa mais tentadora é a segunda, mas a autoridade não começa com o ônus."
 },
 {
  "camada": "aprofundamento",
  "q": "O que a suspensão do habeas corpus significa tecnicamente?",
  "alts": [
   "Que a garantia deixa de existir no ordenamento.",
   "Que o preso não pode obter soltura enquanto a lei estiver em vigor.",
   "Que o writ só vale para crimes políticos.",
   "Que o preso perde o direito a advogado."
  ],
  "correta": 1,
  "porque": "A suspensão não elimina tecnicamente a garantia, mas impede que o preso obtenha soltura enquanto a lei estiver em vigor. A alternativa mais tentadora é a primeira, que confunde suspensão com abolição."
 },
 {
  "camada": "extensao",
  "q": "Por que o habeas corpus já foi usado em situações fora da prisão penal?",
  "alts": [
   "Porque a lei brasileira o obriga a cobrir todos os direitos.",
   "Porque sua estrutura pergunta se quem mantém a custódia tem autoridade legal, e isso vale para qualquer forma de confinamento.",
   "Porque os tribunais internacionais exigiram essa ampliação.",
   "Porque a Constituição de 1988 estendeu o pedido a qualquer direito."
  ],
  "correta": 1,
  "porque": "O pedido não pergunta se a pessoa merece estar presa, mas se quem a mantém sob custódia tem autoridade legal. Qualquer confinamento pode ser questionado nesses termos. A alternativa mais tentadora é a quarta, mas a Constituição brasileira de 1988 restringe o habeas corpus à liberdade de locomoção."
 },
 {
  "camada": "extensao",
  "q": "O que a história do habeas corpus ensina sobre a garantia?",
  "alts": [
   "Que ela é automática e sempre funcionou.",
   "Que ela depende de juízes dispostos a enfrentar o poder de quem prende.",
   "Que ela nunca foi restringida em nenhum país.",
   "Que ela só existe em sistemas de common law."
  ],
  "correta": 1,
  "porque": "A garantia não é automática e depende de juízes dispostos a enfrentar o poder de quem prende. Em tempos de emergência costuma ser restringida. A alternativa mais tentadora é a quarta, mas o Brasil e Portugal, que não seguem o common law, também adotam o habeas corpus."
 }
],

fontes: [
 {
  "n": 1,
  "tipo": "enciclopédia",
  "ref": "Wikipédia (português), verbete 'Habeas corpus'. Consultado em 27/09/2026.",
  "url": "https://pt.wikipedia.org/wiki/Habeas_corpus"
 },
 {
  "n": 2,
  "tipo": "enciclopédia",
  "ref": "Wikipédia (inglês), verbete 'Habeas corpus'. Consultado em 27/09/2026.",
  "url": "https://en.wikipedia.org/wiki/Habeas_corpus"
 },
 {
  "n": 3,
  "tipo": "artigo",
  "ref": "John V. Orth. 'Habeas Corpus: From England to Empire'. <em>Journal of American History</em>, 2011.",
  "url": "https://doi.org/10.1093/jahist/jar018"
 },
 {
  "n": 4,
  "tipo": "artigo",
  "ref": ". 'Habeas corpus: from England to empire'. <em>Choice Reviews Online</em>, 2010.",
  "url": "https://doi.org/10.5860/choice.48-2297"
 },
 {
  "n": 5,
  "tipo": "artigo",
  "ref": "Michael Lobban. 'Habeas Corpus: from England to Empire'. <em>International Journal of Law in Context</em>, 2011.",
  "url": "https://doi.org/10.1017/s1744552311000085"
 },
 {
  "n": 6,
  "tipo": "artigo",
  "ref": "Katrina Navickas. '‘A Reformer's Wife ought to be an Heroine’: Gender, Family and English Radicals Imprisoned under the Suspension of Habeas Corpus Act of 1817'. <em>History</em>, 2016.",
  "url": "https://doi.org/10.1111/1468-229x.12227"
 },
 {
  "n": 7,
  "tipo": "artigo",
  "ref": ". 'Habeas corpus in America: the politics of individual rights'. <em>Choice Reviews Online</em>, 2011.",
  "url": "https://doi.org/10.5860/choice.49-1758"
 },
 {
  "n": 8,
  "tipo": "artigo",
  "ref": "Bárbara Maria Moreira Dante Santaguida, Gisanne de Oliveira Marinho, Juliana de Fátima Dos Santos Santiago, Athena De Albuquerque Farias. 'A Medida Liminar em Habeas Corpus'. <em>ID on line REVISTA DE PSICOLOGIA</em>, 2018.",
  "url": "https://doi.org/10.14295/idonline.v12i41.1252"
 },
 {
  "n": 9,
  "tipo": "livro",
  "ref": "Judith Farbey, Robert J. Sharpe, Simon Atrill. 'The Law of Habeas Corpus'. <em>Oxford University Press eBooks</em>, 2011.",
  "url": "https://doi.org/10.1093/acprof:oso/9780199248247.001.0001"
 },
 {
  "n": 10,
  "tipo": "artigo",
  "ref": "Pratiksha Baxi. 'Habeas Corpus in the Realm of Love: Litigating Marriages of Choice in India'. <em>Australian Feminist Law Journal</em>, 2006.",
  "url": "https://doi.org/10.1080/13200968.2006.10854361"
 },
 {
  "n": 11,
  "tipo": "livro",
  "ref": "Amanda L. Tyler. 'Habeas Corpus in Wartime'. <em>Oxford University Press eBooks</em>, 2017.",
  "url": "https://doi.org/10.1093/oso/9780199856664.001.0001"
 },
 {
  "n": 12,
  "tipo": "artigo",
  "ref": "Jonathan Hafetz. 'Habeas corpus after 9/11: confronting America's new global detention system'. <em>Choice Reviews Online</em>, 2011.",
  "url": "https://doi.org/10.5860/choice.48-6580"
 }
],

fronteira: [{"tema": "Alcance do habeas corpus em zonas de conflito e prisões fora do território nacional", "html": "<p>Uma linha de pesquisa ativa discute como o habeas corpus se aplica a pessoas detidas fora do território de um país, como na base de Guantánamo. O caso <em>Boumediene v. Bush</em>, decidido pela Suprema Corte dos Estados Unidos em 2008, reconheceu o direito de presos de Guantánamo a pedir habeas corpus em cortes federais<sup class=\"cit\"><a href=\"#f2\">2</a></sup><sup class=\"cit\"><a href=\"#f4\">4</a></sup><sup class=\"cit\"><a href=\"#f12\">12</a></sup>. O que ainda se debate é se essa decisão cria uma regra geral para detenções extraterritoriais ou se vale apenas para situações específicas. A resposta hoje depende do tribunal e das circunstâncias da prisão, e não há consenso internacional.</p>"}, {"tema": "Limites do habeas corpus contra particulares", "html": "<p>No Brasil, a doutrina diverge sobre a possibilidade de usar habeas corpus contra pessoas privadas que restringem a liberdade de alguém, como em casos de cárcere privado ou disputas de guarda. A Constituição e o Código de Processo Penal falam em \"ilegalidade ou abuso de poder\", expressão que a maioria associa a autoridades públicas<sup class=\"cit\"><a href=\"#f1\">1</a></sup>. Alguns juristas defendem que o remédio também cabe contra particulares; outros sustentam que, nesses casos, o caminho é outro. A questão segue em aberto na doutrina e na jurisprudência.</p>"}],
};
