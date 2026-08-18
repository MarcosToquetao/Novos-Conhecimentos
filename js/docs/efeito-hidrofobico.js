CONTEUDOS["efeito-hidrofobico"] = {
termo: "Efeito hidrofóbico",
area: "Química",
subtitulo: "A explicação escolar diz que moléculas apolares repelem a água. Não existe repulsão nenhuma ali. Dissolver metano em água até libera calor. O que impede a mistura é o preço que a água paga em desordem para abrir espaço, e o troco que ela recebe de volta quando as moléculas apolares se juntam.",
prerequisitos: [
  "Nenhum pré-requisito de laboratório. Basta saber que a água é feita de moléculas que se atraem entre si e que estão em movimento constante.",
  "Para o aprofundamento: a ideia de que um processo pode ocorrer sozinho mesmo consumindo energia, desde que compense em desordem.",
  "Para a extensão: noção de que uma proteína é uma cadeia longa que assume uma forma tridimensional definida."
],
conexoes: [
  { termo: "Segunda lei da termodinâmica", relacao: "O efeito hidrofóbico é o caso didático mais nítido de um processo espontâneo dirigido por entropia, e não por energia. A separação de fases aumenta a desordem total apesar de organizar o soluto." },
  { termo: "Energia livre de Gibbs", relacao: "Toda a análise vive na conta entre entalpia e entropia. O efeito hidrofóbico é o exemplo em que o termo entrópico domina o sinal do resultado à temperatura ambiente." },
  { termo: "Ligação de hidrogênio", relacao: "A rede de ligações de hidrogênio da água é a estrutura que impõe o custo. Sem essa rede, um líquido apolar dissolve outro líquido apolar sem drama." },
  { termo: "Forças de van der Waals", relacao: "São atrações diretas entre moléculas e existem em qualquer solvente. O efeito hidrofóbico não é uma força direta: some junto com a água." },
  { termo: "Dobramento de proteínas", relacao: "O enterramento de cadeias laterais apolares no interior da estrutura é o principal termo favorável do dobramento, identificado por Kauzmann em 1959." },
  { termo: "Tensão superficial", relacao: "Para solutos apolares grandes, acima de cerca de um nanômetro, o custo de solvatação passa a escalar com a área da interface e se aproxima do regime governado pela tensão superficial da água." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Coloque azeite na água e espere. As duas fases se separam, o azeite sobe, a fronteira fica nítida. A explicação que quase todo mundo recebe na escola é que moléculas apolares e moléculas de água se repelem, ou que uma "odeia" a outra. Essa explicação está errada em um ponto verificável: não existe repulsão entre elas. Uma molécula de metano e uma molécula de água se atraem, fracamente, como quaisquer duas moléculas vizinhas.</p>

<p>Há um fato experimental que derruba a versão escolar de uma vez. Dissolver metano em água a 25 graus <strong>libera calor</strong>. O processo é exotérmico. Se energia fosse o único critério, o metano deveria se dissolver com prazer. Ele não se dissolve: a solubilidade do metano em água é ridícula. Alguma outra coisa está cobrando o preço.</p>

<h3>Como químicos decidem se algo acontece sozinho</h3>

<p>A intuição comum é que processos espontâneos são os que liberam energia. Uma pedra cai, uma fogueira queima. Essa intuição funciona em muitos casos e falha em outros: gelo derrete a 20 graus mesmo absorvendo calor, e sal se dissolve em água esfriando o copo.</p>

<p>A regra completa tem duas parcelas. A primeira é o calor trocado. A segunda é a contagem de <strong>quantos arranjos diferentes o sistema pode assumir</strong>, o que se chama entropia. Um baralho embaralhado tem muito mais arranjos possíveis do que um baralho ordenado, e é por isso que embaralhar é fácil e desembaralhar não é. Um processo acontece sozinho quando a soma das duas parcelas fecha a favor, contando o sistema inteiro e não só a parte que interessa.</p>

<p>A palavra decisiva é <em>inteiro</em>. Quem faz a conta olhando só para o soluto erra de sinal. No caso do azeite na água, a parcela que decide não está no azeite. Está na água.</p>

<h3>O que acontece com a água ao redor</h3>

<p>Uma molécula de água no meio do líquido está cercada por outras moléculas de água e forma ligações de hidrogênio com as vizinhas. Essas ligações não são fixas: elas se quebram e se refazem em picossegundos, e cada molécula tem uma grande variedade de orientações compatíveis com manter suas ligações. Muitos arranjos disponíveis significa entropia alta.</p>

<p>Agora coloque uma molécula de metano no meio. O metano não faz ligação de hidrogênio. Ele ocupa espaço e não oferece nada em troca. As moléculas de água que ficam ao redor não perdem suas ligações: elas se ajeitam de modo a apontar todas as ligações para os lados, mantendo a rede intacta contornando o intruso. Só que essa acomodação exige orientações mais específicas. O leque de arranjos possíveis encolhe.</p>

<p>Henry Frank e Marjorie Evans descreveram isso em 1945 e deram um apelido que pegou: a água ao redor do soluto apolar formaria pequenos "icebergs", regiões mais organizadas do que a água comum.<sup class="cit"><a href="#f1">1</a></sup> A imagem é boa como intuição inicial e problemática como descrição literal, e voltaremos a isso.</p>

<div class="marca consenso">
<span class="rot">O ponto central</span>
<p>Dissolver uma molécula apolar em água não custa energia. Custa entropia da água. O sistema perde arranjos disponíveis porque uma camada de moléculas de água precisa se acomodar em orientações mais restritas para preservar sua rede de ligações. É esse custo, e não uma repulsão, que mantém as fases separadas à temperatura ambiente.</p>
</div>

<h3>Por que a agregação é favorável</h3>

<p>Suponha duas moléculas de azeite separadas na água. Cada uma tem sua camada de água restrita ao redor. Junte as duas: elas passam a compartilhar uma única camada, e a superfície total exposta à água diminui. Menos superfície significa menos moléculas de água presas em orientações restritas.</p>

<p>As moléculas de água liberadas voltam para o volume do líquido e recuperam sua liberdade de orientação. A entropia total sobe. O processo acontece sozinho.</p>

<p>Repare em quem ganha o quê. As moléculas de azeite ficaram <em>mais</em> organizadas, agrupadas em vez de espalhadas. Isso é uma perda de entropia do soluto. O ganho está na água, e é maior. A separação de fases é um caso em que o solvente empurra o soluto, não um caso em que o soluto se atrai.</p>

<p>Essa é a inversão que a explicação escolar esconde. Não há uma força hidrofóbica puxando as gotas de óleo uma para a outra. Há um sistema procurando o arranjo com mais possibilidades, e esse arranjo é aquele em que a menor quantidade possível de água está presa contornando algo que ela não consegue ligar.</p>

<h3>Onde isso importa</h3>

<ul>
<li><strong>Proteínas.</strong> Cerca de metade dos aminoácidos que compõem uma proteína tem cadeias laterais apolares. Quando a cadeia se dobra, essas cadeias laterais se escondem no interior da estrutura e as cadeias polares ficam expostas à água. Walter Kauzmann propôs em 1959 que esse enterramento é o principal termo favorável do dobramento.<sup class="cit"><a href="#f2">2</a></sup></li>
<li><strong>Membranas.</strong> Os lipídios que formam a membrana de toda célula têm uma cabeça que gosta de água e duas caudas apolares. Em água eles se organizam sozinhos numa bicamada, com as caudas escondidas no meio. Ninguém precisa montar a membrana: a água a monta.<sup class="cit"><a href="#f3">3</a></sup></li>
<li><strong>Sabão.</strong> Detergentes funcionam porque formam micelas, pequenas esferas que escondem a gordura no interior e mostram para a água apenas superfície polar.</li>
<li><strong>Remédios.</strong> Boa parte da afinidade entre uma molécula de fármaco e seu alvo vem de encaixar superfície apolar contra superfície apolar, expulsando a água que estava entre as duas.</li>
</ul>

<p>É o mesmo efeito nos quatro casos, e nos quatro a contabilidade que decide está do lado da água.</p>
` },

aprofundamento: { minutos: 30, html: `
<h3>A conta explícita</h3>

<p>A condição de espontaneidade a temperatura e pressão constantes é o sinal da variação de energia livre de Gibbs. Ela reúne as duas parcelas discutidas no núcleo:</p>

<div class="formula">
ΔG = ΔH − TΔS
<span class="leg">ΔG é a variação de energia livre de Gibbs (negativa para processos espontâneos). ΔH é a variação de entalpia, que a temperatura e pressão constantes corresponde ao calor trocado (negativa quando o processo libera calor). T é a temperatura absoluta em kelvin. ΔS é a variação de entropia, a medida do número de microestados acessíveis (positiva quando o sistema ganha arranjos possíveis). O produto TΔS tem unidade de energia e entra com sinal trocado.</span>
</div>

<p>O termo <strong>solvatação</strong> designa a transferência de uma molécula do estado gasoso isolado para dentro do solvente. É a grandeza mais limpa de medir e a que compara solventes diferentes sem contaminação por interações soluto-soluto. Os dados abaixo são valores experimentais de hidratação a 25 graus Celsius, compilados por Ben-Naim e Marcus e reproduzidos em tabulações recentes.<sup class="cit"><a href="#f7">7</a></sup><sup class="cit"><a href="#f8">8</a></sup> Converti de kcal/mol para kJ/mol.</p>

<div class="tabela-env">
<table>
<thead><tr><th>Soluto (gás para água, 25 °C)</th><th>ΔG (kJ/mol)</th><th>ΔH (kJ/mol)</th><th>−TΔS (kJ/mol)</th></tr></thead>
<tbody>
<tr><td>Metano</td><td>+8,3</td><td>−11,5</td><td>+19,8</td></tr>
<tr><td>Etano</td><td>+7,7</td><td>−17,5</td><td>+25,1</td></tr>
<tr><td>Butano</td><td>+8,7</td><td>−23,7</td><td>+32,3</td></tr>
<tr><td>Benzeno</td><td>−3,6</td><td>−29,6</td><td>+26,0</td></tr>
</tbody>
</table>
</div>

<figure class="figura">[[FIG:hidrofobico-termo]]<figcaption>Decomposição da energia livre de hidratação de hidrocarbonetos a 25 graus Celsius. A entalpia é negativa em todos os casos: colocar a molécula em água libera calor. A oposição inteira vem do termo −TΔS, positivo e grande. Para o metano, uma entalpia favorável de −11,5 kJ/mol é sobrepujada por um custo entrópico de +19,8 kJ/mol.</figcaption></figure>

<p>Leia a linha do metano com cuidado, porque ela contém a tese toda. A entalpia é <em>favorável</em>: −11,5 kJ/mol. A energia livre é <em>desfavorável</em>: +8,3 kJ/mol. A diferença inteira, +19,8 kJ/mol, está no termo entrópico. Em ΔS isso equivale a aproximadamente −66 J mol⁻¹ K⁻¹, uma perda de entropia comparável à de congelar alguns mols de água.</p>

<p>A linha do benzeno serve de vacina contra leitura preguiçosa. O ΔG de hidratação do benzeno é negativo: benzeno gasoso <em>se dissolve</em> em água espontaneamente, porque seu sistema de elétrons π interage bem com a água e a entalpia é fortemente favorável. Mesmo assim o termo entrópico continua desfavorável em +26,0 kJ/mol. A assinatura hidrofóbica está no termo entrópico, não necessariamente no sinal de ΔG de hidratação. Quando o que interessa é a separação de fases, a comparação relevante é entre estar em água e estar num líquido apolar, e aí o benzeno perde: sua solubilidade em água é baixa.</p>

<div class="marca consenso">
<span class="rot">Consolidado</span>
<p>Que a dissolução de solutos apolares pequenos em água à temperatura ambiente seja oposta por um termo entrópico grande, com entalpia pequena ou favorável, é medida calorimétrica reprodutível desde os anos 1940 e não está em disputa.<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f9">9</a></sup> O que continua em discussão é o retrato microscópico que produz esse número, não o número.</p>
</div>

<h3>Dependência de temperatura</h3>

<p>Um sistema em que a entropia domina tem uma assinatura previsível: os parâmetros mudam muito com a temperatura. O responsável é a <strong>capacidade calorífica de solvatação</strong>, ΔCp, que mede quanto a entalpia varia por grau. Para solutos apolares em água, ΔCp é grande e positivo, o que é incomum e é considerado o marcador experimental mais confiável de hidratação hidrofóbica.</p>

<div class="formula">
dΔH/dT = ΔCp&nbsp;&nbsp;&nbsp;&nbsp;dΔS/dT = ΔCp/T
<span class="leg">Com ΔCp positivo, aquecer torna ΔH menos favorável (mais positivo) e ΔS menos desfavorável (menos negativo). Os dois termos caminham em sentidos opostos, e por isso o efeito muda de natureza conforme a temperatura, mesmo quando ΔG varia pouco.</span>
</div>

<p>Robert Baldwin combinou dados calorimétricos precisos de transferência de seis hidrocarbonetos líquidos para a água e extrapolou a temperatura em que a entropia de transferência se anula. O resultado é notavelmente uniforme entre os seis: <strong>Ts = 112,8 ± 2,2 °C</strong>.<sup class="cit"><a href="#f6">6</a></sup> A conclusão dele, na formulação do próprio artigo, é que a interação hidrofóbica passa de dirigida por entropia a 22 °C para dirigida por entalpia a 113 °C.</p>

<p>Isso obriga a uma reformulação da tese. A afirmação correta não é "o efeito hidrofóbico é entrópico". É "o efeito hidrofóbico é dominantemente entrópico na faixa de temperatura em que a vida acontece". Perto de 113 graus o mesmo fenômeno persiste com magnitude parecida em ΔG, mas por razão termodinâmica oposta.</p>

<p>Há uma consequência geométrica: como dΔG/dT = −ΔS e ΔS é negativo abaixo de Ts, o ΔG de transferência <em>cresce</em> com a temperatura até 113 °C e decresce depois. O efeito hidrofóbico tem um máximo. Ele enfraquece tanto ao aquecer acima desse ponto quanto ao resfriar abaixo dele. O segundo ramo é a base física da desnaturação a frio, tratada na extensão.</p>

<h3>Escalas de comprimento</h3>

<p>David Chandler organizou a área em torno de uma distinção que muda o mecanismo, não só a magnitude.<sup class="cit"><a href="#f4">4</a></sup><sup class="cit"><a href="#f5">5</a></sup></p>

<p><strong>Solutos pequenos</strong>, com dimensão bem abaixo de um nanômetro (metano, argônio, uma cadeia lateral de valina). A rede de ligações de hidrogênio consegue contorná-los sem quebrar ligações. A água se reorienta, paga em entropia e mantém a conectividade. O custo escala aproximadamente com o <strong>volume excluído</strong>, ou seja, com a probabilidade de encontrar espontaneamente uma cavidade daquele tamanho no líquido. O regime é entrópico.</p>

<p><strong>Solutos grandes</strong>, acima de cerca de um nanômetro, ou superfícies estendidas. Já não é geometricamente possível manter todas as ligações contornando o objeto. Ligações de hidrogênio são quebradas, forma-se uma interface semelhante a uma interface água-vapor, e a água na vizinhança fica <em>menos</em> densa. O custo passa a escalar com a <strong>área</strong> e se aproxima do produto da área pela tensão superficial da água (cerca de 72 mJ/m² a 25 °C). O regime é entálpico.</p>

<div class="tabela-env">
<table>
<thead><tr><th></th><th>Regime pequeno</th><th>Regime grande</th></tr></thead>
<tbody>
<tr><td>Escala</td><td>Abaixo de ~1 nm</td><td>Acima de ~1 nm</td></tr>
<tr><td>Rede de ligações de hidrogênio</td><td>Preservada, contorna o soluto</td><td>Rompida, forma interface</td></tr>
<tr><td>ΔG escala com</td><td>Volume</td><td>Área</td></tr>
<tr><td>Termo dominante</td><td>Entropia</td><td>Entalpia</td></tr>
<tr><td>Densidade da água vizinha</td><td>Igual ou maior</td><td>Menor (secagem parcial)</td></tr>
<tr><td>Exemplo</td><td>Metano, gás nobre, cadeia lateral isolada</td><td>Superfície de uma proteína, gota de óleo, membrana</td></tr>
</tbody>
</table>
</div>

<p>A travessia entre os dois regimes ocorre na escala do nanômetro, valor que aparece tanto na teoria de Lum, Chandler e Weeks quanto em medidas Raman de camadas de hidratação de álcoois de cadeia crescente.<sup class="cit"><a href="#f5">5</a></sup><sup class="cit"><a href="#f14">14</a></sup> É uma faixa incômoda para a biologia, porque proteínas e complexos moleculares vivem exatamente ali, com pedaços de superfície de cada lado da fronteira.</p>

<h3>Efeito hidrofóbico e van der Waals não são a mesma coisa</h3>

<p>Confundir os dois é o erro técnico mais comum depois da história da repulsão. As diferenças são estruturais:</p>

<ul>
<li><strong>Origem.</strong> Van der Waals, no sentido de dispersão de London, é uma atração eletrostática direta entre dipolos instantâneos. Existe entre quaisquer duas moléculas, no vácuo inclusive. O efeito hidrofóbico é uma energia livre mediada pelo solvente: retire a água e ele desaparece integralmente.</li>
<li><strong>Cancelamento.</strong> Numa transferência de um líquido apolar para a água, as interações de dispersão do soluto com o meio existem dos dois lados e em boa medida se cancelam. O que não cancela é a reorganização da água.</li>
<li><strong>Assinatura térmica.</strong> Dispersão é entálpica, fracamente dependente da temperatura. O efeito hidrofóbico troca de sinal entrópico ao longo de cem graus e tem ΔCp grande.</li>
<li><strong>Estatuto.</strong> Van der Waals é uma força no sentido mecânico. O efeito hidrofóbico é um potencial de força média, uma energia livre efetiva obtida depois de somar sobre todas as configurações do solvente. Chamá-lo de força é abreviação conveniente e ontologicamente enganosa.</li>
</ul>

<p>Em números, a atração de dispersão entre duas moléculas pequenas é da ordem de 1 kJ/mol. O custo de hidratação do metano é oito vezes maior. Em água, o efeito hidrofóbico domina.</p>

<div class="marca controverso">
<span class="rot">Em disputa: o "iceberg" literal</span>
<p>A imagem de Frank e Evans de 1945 é uma inferência termodinâmica, não uma observação. Eles mediram entropia e propuseram estrutura para explicá-la. Setenta anos de espectroscopia produziram um quadro dividido. Grdadolnik, Merzel e Avbelj mediram o deslocamento para o vermelho do estiramento O−D de HDO perto de metano, etano, criptônio e xenônio, encontraram cerca de 60 cm⁻¹ (compatível com gelo e clatratos) e estimaram 10 a 15 ligações de hidrogênio do tipo gelo por molécula de metano, concluindo que confirmam a visão clássica.<sup class="cit"><a href="#f13">13</a></sup> Davis e colaboradores, com Raman de curva resolvida em toda a faixa de 0 a 100 °C, encontraram ordem tetraédrica aumentada apenas em temperaturas baixas, com o efeito desaparecendo ao aquecer e sendo substituído por desordem acima de cerca de 1 nm de cadeia.<sup class="cit"><a href="#f14">14</a></sup> Difração de nêutrons em mistura concentrada de metanol e água atribuiu a anomalia entrópica a mistura incompleta e retenção da rede tridimensional da água, e não a gaiolas rígidas.<sup class="cit"><a href="#f15">15</a></sup> Ressonância magnética mostrou retardo real da dinâmica da água perto de xenônio, mas de magnitude modesta.<sup class="cit"><a href="#f16">16</a></sup> O sinal termodinâmico não está em dúvida. A metáfora do gelo está.</p>
</div>

<h3>Um mecanismo alternativo para o mesmo número</h3>

<p>Byungkook Lee argumentou que a baixa solubilidade de solutos apolares em água não exige ordenamento especial nenhum.<sup class="cit"><a href="#f11">11</a></sup> O argumento é geométrico: a molécula de água é pequena e o líquido é denso, o que torna estatisticamente raro encontrar uma cavidade grande o suficiente para acomodar um soluto. Abrir essa cavidade custa caro em qualquer líquido de moléculas pequenas, e a água é o exemplo extremo. Nessa leitura, a entropia perdida é entropia de <em>empacotamento</em>, e não de orientação.</p>

<p>Os dois mecanismos não se excluem e provavelmente coexistem em proporções que dependem do tamanho do soluto e da temperatura. Southall, Dill e Haymet defenderam que uma descrição completa precisa dos dois, com pesos que mudam ao longo da escala de comprimento.<sup class="cit"><a href="#f10">10</a></sup>
` },

extensao: { minutos: 60, html: `
<h3>Kauzmann e o interior das proteínas</h3>

<p>Em 1959 a explicação corrente para a estabilidade de proteínas eram as ligações de hidrogênio internas. Walter Kauzmann fez uma objeção simples: a cadeia desdobrada também faz ligações de hidrogênio, com a água. Trocar uma ligação de hidrogênio com água por uma ligação de hidrogênio interna é aproximadamente empate. O ganho tem de vir de outro lugar.<sup class="cit"><a href="#f2">2</a></sup></p>

<p>A proposta dele foi que o ganho vem do enterramento de grupos apolares. Uma cadeia lateral de leucina exposta à água impõe à água o custo entrópico descrito no aprofundamento. Escondida no núcleo da proteína, não impõe custo nenhum. Kauzmann previu, a partir disso, que a estabilidade de proteínas deveria depender da temperatura de modo peculiar e que solventes orgânicos deveriam desnaturar proteínas por eliminar o efeito. Ambas as previsões se confirmaram.</p>

<p>O quanto isso vale, quantitativamente, ainda é matéria de estimativa. Uma via clássica: o ΔCp de desdobramento medido por calorimetria diferencial é grande e positivo, e correlaciona-se bem com a área apolar que fica exposta ao desdobrar. Como ΔCp positivo é a assinatura de hidratação hidrofóbica, a correlação é usada como termômetro de quanta superfície apolar estava enterrada.</p>

<div class="marca consenso">
<span class="rot">Consolidado</span>
<p>Que o enterramento de superfície apolar seja o maior termo favorável isolado no dobramento de proteínas globulares é aceito desde os anos 1960 e sustentado por três linhas independentes: a correlação entre ΔCp de desdobramento e área apolar enterrada, a composição observada dos núcleos proteicos (fortemente enriquecidos em resíduos apolares) e o efeito desnaturante de solventes que reduzem o custo de expor grupos apolares.</p>
</div>

<p>Duas ressalvas honestas. Primeira: o efeito hidrofóbico dá a direção geral do colapso, mas não determina qual estrutura específica se forma. Ligações de hidrogênio, pontes salinas e o empacotamento estérico decidem a geometria fina. Uma proteína colapsada só por hidrofobicidade seria um glóbulo fundido, não uma estrutura definida. Segunda: os números continuam em disputa. Estimativas de energia livre por área apolar enterrada variam por um fator de dois entre métodos, e a escolha do modelo de referência (transferência de qual solvente para qual solvente) muda o resultado.</p>

<h3>Bicamadas lipídicas</h3>

<p>Um fosfolipídio tem uma cabeça polar e duas caudas de hidrocarboneto com dezesseis a vinte carbonos. Jogado em água, ele não fica disperso. Acima de uma concentração limiar os lipídios se organizam em bicamadas: duas fileiras de moléculas com as caudas voltadas para dentro, cabeças para a água dos dois lados.<sup class="cit"><a href="#f3">3</a></sup></p>

<p>Charles Tanford insistiu num ponto que costuma ser mal contado. A bicamada não se forma porque as caudas se atraem. As caudas em contato interagem por dispersão de London mais ou menos como interagiam com a água. O que muda é a quantidade de água presa contornando superfície apolar, que despenca. A membrana é uma estrutura mantida por um efeito estatístico do solvente.</p>

<p>Isso explica propriedades que uma visão de "atração entre caudas" não explicaria:</p>

<ul>
<li>A bicamada se automonta e se autorrepara. Um furo expõe caudas à água, o que é caro, e a estrutura se fecha sozinha.</li>
<li>Não existe ligação química entre lipídios vizinhos. Cada molécula difunde lateralmente com rapidez, trocando de vizinho milhões de vezes por segundo, sem que a membrana se desfaça.</li>
<li>A concentração micelar crítica de um detergente cai por um fator de cerca de três para cada carbono acrescentado à cauda. Mais superfície apolar, mais água a economizar, agregação mais fácil. A regularidade dessa progressão é uma das evidências quantitativas mais limpas do efeito.</li>
</ul>

<h3>Desnaturação a frio</h3>

<p>Aquecer uma proteína a desnatura, o que ninguém acha estranho. Resfriar também desnatura, o que é estranho e é previsto pela termodinâmica descrita acima.<sup class="cit"><a href="#f12">12</a></sup></p>

<p>A origem é o ΔCp grande e positivo do desdobramento. Como ΔG de estabilidade tem curvatura imposta por ΔCp, a curva de ΔG contra temperatura é uma parábola de boca para baixo. Ela cruza o zero duas vezes. O cruzamento superior é a desnaturação térmica familiar, tipicamente entre 40 e 80 graus. O cruzamento inferior fica em geral abaixo de zero grau, e é a desnaturação a frio.</p>

<p>O mecanismo, em linguagem do efeito hidrofóbico: ao resfriar, o termo TΔS encolhe porque T encolhe, e além disso ΔS se torna menos negativo pela relação dΔS/dT = ΔCp/T. O custo entrópico de expor superfície apolar à água diminui. O motor que segurava o núcleo da proteína perde tração, e a estrutura se abre. É a mesma física que dá o máximo de ΔG de transferência em torno de 113 graus, olhada pelo outro ramo da curva.</p>

<p>Peter Privalov e outros observaram o fenômeno diretamente em várias proteínas, usando pressão, agentes desnaturantes suaves ou pH para deslocar a temperatura de desnaturação a frio para uma faixa acessível sem congelar a amostra. A previsão saiu antes da observação, o que é um bom argumento a favor do arcabouço.</p>

<h3>O que continua disputado no modelo microscópico</h3>

<p>O nível termodinâmico está resolvido. O nível molecular tem quatro frentes abertas.</p>

<p><strong>Primeira: a água ao redor está mais ordenada, e quanto.</strong> A revisão espectroscópica é o assunto mais movimentado da área. Grdadolnik e colaboradores encontraram ligações de hidrogênio nitidamente fortalecidas perto de metano, etano, criptônio e xenônio, com deslocamento de cerca de 60 cm⁻¹ no estiramento O−D e 10 a 15 ligações do tipo gelo por metano, e afirmaram no próprio resumo que confirmam a visão clássica.<sup class="cit"><a href="#f13">13</a></sup> Davis, Gierszal, Wang e Ben-Amotz encontraram ordem tetraédrica aumentada em temperaturas baixas, sumindo ao aquecer e cedendo lugar a desordem para cadeias acima de aproximadamente 1 nm.<sup class="cit"><a href="#f14">14</a></sup> Difração de nêutrons em metanol e água concentrados apontou mistura incompleta e retenção da rede de bulk como origem da anomalia.<sup class="cit"><a href="#f15">15</a></sup> Medidas de dinâmica por ressonância magnética perto de xenônio detectaram retardo real mas modesto.<sup class="cit"><a href="#f16">16</a></sup> A leitura mais defensável hoje é que existe ordenamento, que ele é fraco, transiente, dependente de temperatura e restrito a solutos pequenos, e que "iceberg" superestima a rigidez implicada.</p>

<div class="marca controverso">
<span class="rot">Em disputa</span>
<p>Se a expressão "água estruturada" ou "formador de estrutura" deve continuar em uso é uma controvérsia genuína, e não apenas semântica. Quem defende o uso aponta os deslocamentos espectroscópicos e a ordem tetraédrica medida. Quem se opõe aponta que a mesma termodinâmica é reproduzida por modelos sem ordenamento orientacional algum, baseados apenas no custo de abrir cavidade num líquido de moléculas pequenas.<sup class="cit"><a href="#f11">11</a></sup> Um número termodinâmico não determina de forma única o retrato molecular que o produz, e essa subdeterminação é o cerne do impasse.</p>
</div>

<p><strong>Segunda: onde exatamente fica a fronteira entre os regimes de escala.</strong> A teoria localiza a travessia "na escala do nanômetro", sem um valor afiado, e o número real depende da geometria, da rugosidade e da presença de grupos polares na vizinhança. Superfícies proteicas reais são heterogêneas: manchas apolares de poucos angstroms separadas por grupos carregados. Qual regime se aplica a uma mancha dessas é uma pergunta em aberto, com consequências práticas para previsão de afinidade em desenho de fármacos.</p>

<div class="marca emergente">
<span class="rot">Emergente</span>
<p>Simulações desde os anos 2000 preveem que superfícies apolares estendidas induzem "secagem" parcial, com a água recuando e a densidade caindo na vizinhança imediata, e que essa secagem pode acelerar dramaticamente o colapso de duas superfícies apolares grandes quando se aproximam. O fenômeno é robusto em modelos e foi detectado experimentalmente em superfícies construídas para isso. O quanto ocorre em interfaces proteína-proteína reais, com sua mistura de grupos polares e apolares, é o ponto de teste corrente e ainda não tem resposta consensual.<sup class="cit"><a href="#f4">4</a></sup><sup class="cit"><a href="#f17">17</a></sup></p>
</div>

<p><strong>Terceira: compensação entalpia-entropia.</strong> Em séries de compostos relacionados, ΔH e ΔS mudam juntos de modo que ΔG quase não muda. Isso é observado com frequência incômoda e atrapalha o desenho racional de moléculas: melhorar o contato entálpico com o alvo costuma vir acompanhado de perda entrópica que come o ganho. Há debate sobre quanto dessa compensação é um fenômeno físico da água e quanto é artefato estatístico de estimar dois parâmetros correlacionados a partir dos mesmos dados.</p>

<p><strong>Quarta: fidelidade dos campos de força.</strong> Simulações de dinâmica molecular reproduzem ΔG de hidratação com erro típico da ordem de 1 kcal/mol, mas erram sistematicamente mais em ΔH e ΔS separadamente, porque acertar a soma é mais fácil que acertar as parcelas.<sup class="cit"><a href="#f8">8</a></sup> Enquanto as parcelas não forem reproduzidas com confiança, testar hipóteses sobre o mecanismo microscópico por simulação continua limitado pelo modelo de água escolhido.</p>

<h3>O que segurar</h3>

<div class="marca consenso">
<span class="rot">Resumo do estado da questão</span>
<p>Não há repulsão entre água e moléculas apolares: a dissolução de hidrocarbonetos pequenos em água é exotérmica. A oposição vem inteira do termo −TΔS, positivo e grande à temperatura ambiente, associado à restrição imposta às moléculas de água vizinhas. A agregação de solutos apolares é favorável porque libera essa água. O domínio entrópico vale na faixa fisiológica: por volta de 113 graus o efeito passa a ser entálpico, com magnitude parecida. Solutos acima de cerca de um nanômetro operam por outro mecanismo, com quebra de ligações de hidrogênio e custo proporcional à área. A imagem do iceberg de 1945 acertou o sinal e a ordem de grandeza da entropia, e continua sob revisão quanto à estrutura que propõe.</p>
</div>
` }
},

sintese: {
  definicoes: [
    { termo: "Efeito hidrofóbico", def: "Tendência de moléculas apolares a se agregarem em meio aquoso, dirigida não por atração entre elas mas pelo ganho de entropia da água liberada quando a superfície apolar exposta ao solvente diminui." },
    { termo: "Entropia de solvatação", def: "Variação de entropia ao transferir uma molécula do vácuo para dentro do solvente. Para solutos apolares em água a 25 °C é fortemente negativa, da ordem de −66 J mol⁻¹ K⁻¹ para o metano." },
    { termo: "Gaiola de solvatação (modelo do iceberg)", def: "Camada de moléculas de água ao redor de um soluto apolar que preserva sua rede de ligações de hidrogênio contornando o intruso, ao custo de orientações mais restritas. Proposta por Frank e Evans em 1945." },
    { termo: "Capacidade calorífica de solvatação (ΔCp)", def: "Taxa de variação da entalpia de solvatação com a temperatura. Grande e positiva para solutos apolares em água, é o marcador experimental mais confiável de hidratação hidrofóbica." },
    { termo: "Temperatura de entropia nula (Ts)", def: "Temperatura em que a entropia de transferência de um hidrocarboneto para a água se anula, extrapolada em 112,8 ± 2,2 °C por Baldwin em 1986. Acima dela o efeito passa a ser dirigido por entalpia." },
    { termo: "Travessia de escala de comprimento", def: "Mudança de mecanismo na escala do nanômetro: abaixo dela a água contorna o soluto sem quebrar ligações e o custo escala com o volume; acima dela forma-se interface, ligações são quebradas e o custo escala com a área." }
  ],
  lembrar: [
    "Não existe repulsão entre água e moléculas apolares. Dissolver metano em água libera calor.",
    "A oposição está inteira no termo −TΔS. O sinal de ΔG é decidido pela água, não pelo soluto.",
    "Agregar solutos apolares reduz a superfície exposta, libera moléculas de água restritas e aumenta a entropia total, mesmo com o soluto ficando mais ordenado.",
    "O domínio entrópico é uma afirmação sobre temperatura ambiente. Perto de 113 °C o mesmo efeito é entálpico.",
    "Solutos acima de cerca de um nanômetro funcionam por outro mecanismo: ligações de hidrogênio são quebradas e o custo escala com área, não com volume.",
    "O efeito hidrofóbico não é uma força. É uma energia livre mediada pelo solvente, que desaparece se a água for retirada."
  ],
  confusoes: [
    { erro: "Óleo e água se repelem.", correcao: "Não há repulsão. Uma molécula de água e uma de hidrocarboneto se atraem fracamente, e a hidratação de hidrocarbonetos pequenos é exotérmica. A separação vem do custo entrópico imposto à água, não de uma força entre os dois." },
    { erro: "Moléculas apolares se atraem em água (existe uma força hidrofóbica).", correcao: "O que se chama de força hidrofóbica é um potencial de força média: uma energia livre efetiva depois de somar sobre todas as configurações do solvente. A atração direta entre as moléculas apolares é dispersão de London, existe em qualquer solvente e é várias vezes menor." },
    { erro: "O efeito hidrofóbico é entrópico, ponto final.", correcao: "É dominantemente entrópico à temperatura ambiente e para solutos pequenos. A entropia de transferência se anula por volta de 113 °C e o efeito passa a ser entálpico. Para solutos acima de cerca de um nanômetro o regime já é entálpico na temperatura ambiente." },
    { erro: "A água ao redor de um soluto apolar congela numa gaiola rígida de gelo.", correcao: "O termo iceberg é uma metáfora de 1945 inferida da termodinâmica. A evidência espectroscópica moderna é dividida: há ordem tetraédrica aumentada em temperatura baixa e para solutos pequenos, mas transiente e bem menos rígida que a palavra sugere, e difração de nêutrons em misturas concentradas aponta mistura incompleta em vez de gaiolas." },
    { erro: "Uma proteína se dobra porque as partes hidrofóbicas se atraem.", correcao: "A direção do colapso vem do ganho de entropia da água ao enterrar superfície apolar. A estrutura específica que resulta é decidida por ligações de hidrogênio, pontes salinas e empacotamento estérico. Só com hidrofobicidade obtém-se um glóbulo fundido, não uma estrutura definida." }
  ],
  numeros: [
    "Metano em água a 25 °C: ΔG = +8,3 kJ/mol, ΔH = −11,5 kJ/mol, −TΔS = +19,8 kJ/mol. A entalpia é favorável e o processo mesmo assim não ocorre.",
    "Entropia de hidratação do metano a 25 °C: cerca de −66 J mol⁻¹ K⁻¹.",
    "Temperatura em que a entropia de transferência de hidrocarbonetos líquidos para a água se anula: 112,8 ± 2,2 °C, uniforme entre seis hidrocarbonetos (Baldwin, 1986).",
    "Travessia entre os regimes de solvatação pequeno e grande: escala do nanômetro.",
    "Ligações de hidrogênio do tipo gelo estimadas por infravermelho ao redor de uma molécula de metano: 10 a 15 (Grdadolnik e colaboradores, 2017).",
    "Tensão superficial da água a 25 °C, o limite para o qual tende o custo de solvatação de superfícies grandes: cerca de 72 mJ/m²."
  ]
},

flashcards: [
  { f: "Dissolver metano em água libera ou absorve calor, e o que isso implica?", v: "Libera. A hidratação do metano a 25 °C tem ΔH de cerca de −11,5 kJ/mol. Implica que a baixa solubilidade não pode ser explicada por energia: a oposição vem do termo entrópico, +19,8 kJ/mol, que sobrepuja a entalpia favorável e deixa ΔG em +8,3 kJ/mol." },
  { f: "Por que a água ao redor de um soluto apolar perde entropia?", v: "Porque o soluto não faz ligação de hidrogênio. As moléculas de água vizinhas se reorientam para manter todas as suas ligações apontando para outras águas, contornando o intruso. Isso preserva a rede mas restringe o leque de orientações compatíveis, reduzindo o número de arranjos acessíveis." },
  { f: "Se agregar moléculas apolares as deixa mais organizadas, por que o processo é espontâneo?", v: "Porque a entropia contabilizada é a do sistema inteiro. A agregação reduz a superfície apolar exposta, libera moléculas de água que estavam em orientações restritas, e o ganho entrópico da água supera a perda entrópica do soluto." },
  { f: "Qual é a assinatura termodinâmica do efeito hidrofóbico a 25 °C?", v: "ΔG positivo para a dissolução, ΔH pequeno ou até favorável (negativo), TΔS fortemente desfavorável, e ΔCp grande e positivo. O ΔCp positivo é considerado o marcador experimental mais confiável." },
  { f: "O que Baldwin encontrou em 1986 sobre a temperatura?", v: "Extrapolando dados calorimétricos de transferência de seis hidrocarbonetos líquidos para a água, a temperatura em que a entropia de transferência se anula é 112,8 ± 2,2 °C, notavelmente uniforme entre eles. A interação hidrofóbica passa de dirigida por entropia a 22 °C para dirigida por entalpia a 113 °C." },
  { f: "Por que o efeito hidrofóbico enfraquece ao resfriar?", v: "Porque ΔCp é grande e positivo, e portanto dΔS/dT = ΔCp/T. Ao resfriar, ΔS se torna menos negativo e o produto TΔS encolhe também porque T encolhe. O custo de expor superfície apolar cai. É a base física da desnaturação a frio." },
  { f: "Qual é a distinção de escala de comprimento proposta por Chandler?", v: "Abaixo de cerca de 1 nm a rede de ligações de hidrogênio contorna o soluto sem se romper, o custo escala com o volume e o regime é entrópico. Acima disso a rede se rompe, forma-se uma interface parecida com água-vapor, o custo escala com a área e tende ao produto área vezes tensão superficial, e o regime é entálpico." },
  { f: "Como distinguir efeito hidrofóbico de interação de van der Waals?", v: "Van der Waals é atração direta entre moléculas, existe no vácuo, é entálpica e pouco dependente de temperatura. O efeito hidrofóbico é uma energia livre mediada pelo solvente que some sem água, troca de assinatura entrópica ao longo de cem graus e tem ΔCp grande. Numa transferência entre solventes, as contribuições de dispersão em boa medida se cancelam." },
  { f: "Qual foi a objeção de Kauzmann em 1959 à explicação por ligações de hidrogênio?", v: "Que a cadeia desdobrada também faz ligações de hidrogênio, com a água. Trocar uma ligação com a água por uma ligação interna é aproximadamente empate, então o ganho tem de vir de outro lugar: do enterramento de grupos apolares." },
  { f: "O que o modelo do iceberg de Frank e Evans acertou e o que está sob revisão?", v: "Acertou o sinal e a ordem de grandeza da perda de entropia, inferidos da termodinâmica. Está sob revisão a estrutura implicada: espectroscopia moderna mostra ordem tetraédrica aumentada apenas em temperatura baixa e para solutos pequenos, transiente e menos rígida do que a palavra iceberg sugere, e difração de nêutrons em misturas concentradas aponta mistura incompleta em vez de gaiolas." },
  { f: "Qual é o mecanismo alternativo de Lee para o mesmo custo entrópico?", v: "Que a água tem moléculas pequenas e o líquido é denso, tornando estatisticamente raro encontrar uma cavidade grande o suficiente para acomodar o soluto. Nessa leitura a entropia perdida é de empacotamento, não de orientação, e nenhum ordenamento especial é necessário para reproduzir a termodinâmica." },
  { f: "Por que uma bicamada lipídica se automonta e se autorrepara?", v: "Porque não há ligação química entre lipídios vizinhos: a estrutura é mantida pelo custo de expor caudas apolares à água. Um furo expõe superfície apolar, o que é caro, e o sistema se fecha sozinho ao buscar o arranjo com menos água presa." },
  { f: "Por que resfriar pode desnaturar uma proteína?", v: "O ΔCp de desdobramento é grande e positivo, o que dá à curva de estabilidade contra temperatura a forma de parábola de boca para baixo. Ela cruza o zero duas vezes: a desnaturação térmica usual e a desnaturação a frio, em geral abaixo de 0 °C. Ao resfriar, o custo entrópico de expor superfície apolar diminui e o motor do dobramento perde tração." }
],

prova: [
  { camada: "nucleo",
    q: "Dissolver metano em água a 25 °C é um processo exotérmico, e mesmo assim a solubilidade do metano em água é muito baixa. O que explica isso?",
    alts: [
      "A água e o metano se repelem eletrostaticamente, e a repulsão supera o calor liberado.",
      "O processo impõe às moléculas de água vizinhas uma restrição de orientação que reduz a entropia, e o custo entrópico supera a entalpia favorável.",
      "A entalpia medida está correta, mas o processo é lento demais para atingir o equilíbrio.",
      "As moléculas de metano se atraem entre si com força maior que sua atração pela água."
    ],
    correta: 1,
    porque: "A entalpia de hidratação do metano é cerca de −11,5 kJ/mol e o termo −TΔS é +19,8 kJ/mol, deixando ΔG em +8,3 kJ/mol. A alternativa mais tentadora é a última, porque reproduz a intuição de que o óleo se junta por atração mútua. A atração de dispersão entre moléculas apolares existe, mas é da ordem de 1 kJ/mol e existiria em qualquer solvente. O que decide é o que acontece com a água." },

  { camada: "nucleo",
    q: "Ao juntar duas gotículas de óleo em água, as moléculas de óleo passam a estar mais agrupadas, portanto mais ordenadas. Como o processo pode ser espontâneo por aumento de entropia?",
    alts: [
      "Porque a entropia do próprio soluto aumenta ao se agrupar.",
      "Porque o processo é dirigido por entalpia, não por entropia.",
      "Porque a entropia contabilizada é a do sistema inteiro: a redução da superfície exposta libera moléculas de água restritas, e o ganho da água supera a perda do soluto.",
      "Porque a segunda lei não se aplica a sistemas com mais de uma fase."
    ],
    correta: 2,
    porque: "O balanço é sobre o sistema inteiro. A perda entrópica do soluto é real e menor que o ganho da água liberada. A alternativa mais tentadora é a segunda, porque é verdade que existe alguma contribuição entálpica na agregação; mas a 25 °C a parcela dominante é entrópica, e o erro conceitual central é olhar apenas para o soluto." },

  { camada: "nucleo",
    q: "Qual foi a contribuição de Frank e Evans em 1945?",
    alts: [
      "Fotografaram por difração a estrutura de gelo formada ao redor de moléculas de metano.",
      "Mediram a entropia de solvatação de solutos apolares e propuseram, para explicá-la, que a água vizinha formaria regiões mais organizadas, apelidadas de icebergs.",
      "Demonstraram que a repulsão entre grupos apolares e água tem origem eletrostática.",
      "Mostraram que o dobramento de proteínas é dirigido pelo enterramento de grupos apolares."
    ],
    correta: 1,
    porque: "O trabalho é termodinâmico: mediram entropia e inferiram estrutura para explicá-la. A alternativa mais tentadora é a primeira, porque o nome iceberg sugere observação direta de estrutura. Não houve observação: essa é exatamente a razão pela qual a imagem continua em revisão. A última alternativa descreve Kauzmann em 1959." },

  { camada: "aprofundamento",
    q: "Na expressão ΔG = ΔH − TΔS aplicada à hidratação de hidrocarbonetos a 25 °C, qual conjunto de sinais corresponde ao efeito hidrofóbico?",
    alts: [
      "ΔG positivo, ΔH positivo e grande, TΔS positivo.",
      "ΔG positivo, ΔH pequeno ou negativo, TΔS negativo e de módulo grande.",
      "ΔG negativo, ΔH negativo, TΔS positivo.",
      "ΔG positivo, ΔH negativo, TΔS positivo."
    ],
    correta: 1,
    porque: "Para o metano: ΔG = +8,3, ΔH = −11,5 e TΔS = −19,8 kJ/mol, de modo que −TΔS entra como +19,8. A alternativa mais tentadora é a primeira, que reproduz a expectativa de que um processo desfavorável deva ser endotérmico. Essa expectativa é justamente o que os dados desmentem, e é o que torna o caso interessante." },

  { camada: "aprofundamento",
    q: "Baldwin extrapolou de dados calorimétricos que a entropia de transferência de hidrocarbonetos líquidos para a água se anula em torno de 112,8 °C. Qual é a consequência conceitual?",
    alts: [
      "Acima dessa temperatura o efeito hidrofóbico deixa de existir.",
      "A afirmação de que o efeito é entrópico vale para a faixa de temperatura ambiente; perto de 113 °C ele persiste com magnitude parecida em ΔG mas passa a ser dirigido por entalpia.",
      "Isso mostra que as medidas de entropia a 25 °C estavam erradas.",
      "Significa que o ΔCp de solvatação é nulo nessa faixa."
    ],
    correta: 1,
    porque: "O que se anula é a entropia de transferência, não o efeito: em torno de 113 °C o ΔG de transferência atinge seu máximo e a oposição à dissolução passa a vir da entalpia. A alternativa mais tentadora é a primeira, que confunde anular uma das parcelas com anular a soma. A quarta é o oposto do fato: a existência de um Ts bem definido depende justamente de ΔCp ser grande e aproximadamente constante." },

  { camada: "aprofundamento",
    q: "Segundo a distinção de escala de comprimento de Chandler, o que muda ao passar de solutos abaixo de 1 nm para superfícies apolares maiores?",
    alts: [
      "Apenas a magnitude: o mecanismo é o mesmo, escalado pelo tamanho.",
      "A rede de ligações de hidrogênio deixa de conseguir contornar o soluto, ligações são quebradas, forma-se uma interface, e o custo passa a escalar com a área e a ser dominado por entalpia.",
      "A água passa a formar gaiolas mais rígidas e o custo entrópico aumenta proporcionalmente ao volume.",
      "O efeito hidrofóbico se converte em interação de van der Waals."
    ],
    correta: 1,
    porque: "O mecanismo muda, não só a escala: abaixo de 1 nm a rede é preservada e o custo é entrópico e proporcional ao volume excluído; acima, ela se rompe, a água vizinha fica menos densa e o custo tende ao produto área vezes tensão superficial. A alternativa mais tentadora é a primeira, porque a maior parte da literatura didática apresenta o efeito como um fenômeno único que apenas cresce com o tamanho." },

  { camada: "aprofundamento",
    q: "Qual afirmação distingue corretamente o efeito hidrofóbico de uma interação de van der Waals?",
    alts: [
      "O efeito hidrofóbico é mais forte porque envolve cargas formais, enquanto van der Waals envolve dipolos instantâneos.",
      "O efeito hidrofóbico é uma energia livre mediada pelo solvente e desaparece sem a água, enquanto van der Waals é uma atração direta que existe até no vácuo.",
      "São o mesmo fenômeno descrito em vocabulários diferentes: químicos usam um termo, físicos usam o outro.",
      "Van der Waals depende fortemente da temperatura, enquanto o efeito hidrofóbico é praticamente independente dela."
    ],
    correta: 1,
    porque: "A diferença é de estatuto: van der Waals é uma força no sentido mecânico, presente em qualquer meio; o efeito hidrofóbico é um potencial de força média, obtido depois de somar sobre as configurações do solvente. A quarta alternativa inverte os fatos: é o efeito hidrofóbico que tem forte dependência de temperatura, com ΔCp grande e troca de assinatura entrópica ao longo de cem graus." },

  { camada: "extensao",
    q: "Qual foi o argumento de Kauzmann em 1959 contra atribuir a estabilidade de proteínas a ligações de hidrogênio internas?",
    alts: [
      "Que ligações de hidrogênio são fracas demais para estabilizar qualquer estrutura.",
      "Que a cadeia desdobrada também faz ligações de hidrogênio, com a água, de modo que a troca é aproximadamente empate e o ganho tem de vir de outro lugar.",
      "Que proteínas mantêm sua estrutura em solventes orgânicos, onde não há ligações de hidrogênio.",
      "Que a estrutura é mantida exclusivamente por pontes dissulfeto."
    ],
    correta: 1,
    porque: "O argumento é de balanço: o estado desdobrado não é privado de ligações de hidrogênio, apenas as faz com o solvente. A terceira alternativa é tentadora porque menciona solventes orgânicos, que de fato são relevantes ao tema, mas com o sinal invertido: solventes orgânicos desnaturam proteínas justamente por eliminarem o custo de expor grupos apolares." },

  { camada: "extensao",
    q: "Por que uma proteína pode desnaturar ao ser resfriada?",
    alts: [
      "Porque o gelo formado dentro da estrutura a rompe mecanicamente.",
      "Porque a viscosidade aumentada da água impede que a cadeia mantenha sua conformação.",
      "Porque o ΔCp de desdobramento é grande e positivo, o que dá à curva de estabilidade forma de parábola de boca para baixo com dois cruzamentos do zero; ao resfriar, o custo entrópico de expor superfície apolar diminui e o motor do dobramento perde tração.",
      "Porque a baixas temperaturas as ligações de hidrogênio internas se rompem preferencialmente."
    ],
    correta: 2,
    porque: "É a mesma física do máximo de ΔG de transferência perto de 113 °C, vista pelo outro ramo da curva: com ΔCp positivo, dΔS/dT = ΔCp/T, e resfriar torna ΔS menos negativo enquanto T também encolhe. A primeira alternativa é tentadora e falsa: a desnaturação a frio é observada em solução sem congelamento, usando pressão, pH ou desnaturantes suaves para deslocar a temperatura de transição para a faixa acessível." },

  { camada: "extensao",
    q: "Como descrever com honestidade o estado atual da evidência sobre o modelo do iceberg?",
    alts: [
      "A evidência espectroscópica refutou definitivamente o modelo, e a entropia de solvatação foi reatribuída a outra causa.",
      "A evidência confirmou o modelo em sua forma literal, incluindo gaiolas de gelo estáveis ao redor dos solutos.",
      "O sinal termodinâmico não está em disputa; o retrato microscópico está: há medidas de infravermelho compatíveis com ligações fortalecidas, medidas Raman que só encontram ordem aumentada em temperatura baixa e abaixo de cerca de 1 nm, e difração de nêutrons que atribui a anomalia a mistura incompleta.",
      "A questão não pode ser investigada experimentalmente e permanece filosófica."
    ],
    correta: 2,
    porque: "A perda de entropia é medida calorimétrica reprodutível; a estrutura que a produz é subdeterminada pelos dados termodinâmicos, e diferentes técnicas espectroscópicas apontam em direções parcialmente distintas. A segunda alternativa é tentadora porque o trabalho de infravermelho de 2017 afirma no próprio resumo confirmar a visão clássica; citar apenas esse estudo e omitir os resultados Raman e de nêutrons seria seleção conveniente de evidência." }
],

fontes: [
  { n: 1, tipo: "fonte primária", ref: "Frank, H. S. &amp; Evans, M. W. 'Free Volume and Entropy in Condensed Systems III. Entropy in Binary Liquid Mixtures; Partial Molal Entropy in Dilute Solutions; Structure and Thermodynamics in Aqueous Electrolytes'. <em>The Journal of Chemical Physics</em> 13(11):507–532, 1945. O artigo que introduz a imagem do iceberg.", url: "https://doi.org/10.1063/1.1723985" },
  { n: 2, tipo: "fonte primária", ref: "Kauzmann, W. 'Some Factors in the Interpretation of Protein Denaturation'. <em>Advances in Protein Chemistry</em> 14:1–63, 1959. Aplicação ao dobramento de proteínas.", url: "https://doi.org/10.1016/S0065-3233(08)60608-7" },
  { n: 3, tipo: "artigo", ref: "Tanford, C. 'The Hydrophobic Effect and the Organization of Living Matter'. <em>Science</em> 200(4345):1012–1018, 1978. Micelas, bicamadas e automontagem.", url: "https://doi.org/10.1126/science.653353" },
  { n: 4, tipo: "revisão", ref: "Chandler, D. 'Interfaces and the driving force of hydrophobic assembly'. <em>Nature</em> 437:640–647, 2005. A síntese moderna em torno de escalas de comprimento e interfaces.", url: "https://doi.org/10.1038/nature04162" },
  { n: 5, tipo: "artigo", ref: "Lum, K., Chandler, D. &amp; Weeks, J. D. 'Hydrophobicity at Small and Large Length Scales'. <em>The Journal of Physical Chemistry B</em> 103(22):4570–4577, 1999. A teoria da travessia na escala do nanômetro.", url: "https://doi.org/10.1021/jp984327m" },
  { n: 6, tipo: "artigo", ref: "Baldwin, R. L. 'Temperature dependence of the hydrophobic interaction in protein folding'. <em>PNAS</em> 83(21):8069–8072, 1986. Origem do valor Ts = 112,8 ± 2,2 °C.", url: "https://doi.org/10.1073/pnas.83.21.8069" },
  { n: 7, tipo: "fonte de dados", ref: "Ben-Naim, A. &amp; Marcus, Y. 'Solvation thermodynamics of nonionic solutes'. <em>The Journal of Chemical Physics</em> 81(4):2016–2027, 1984. Fonte experimental dos valores de hidratação usados na tabela.", url: "https://doi.org/10.1063/1.447824" },
  { n: 8, tipo: "artigo", ref: "Jorgensen, W. L. 'Enthalpies and entropies of hydration from Monte Carlo simulations'. <em>Physical Chemistry Chemical Physics</em> 26:8141–8147, 2024. Tabulação recente dos valores experimentais e discussão do erro de simulação nas parcelas separadas.", url: "https://doi.org/10.1039/D4CP00297K" },
  { n: 9, tipo: "revisão", ref: "Blokzijl, W. &amp; Engberts, J. B. F. N. 'Hydrophobic Effects. Opinions and Facts'. <em>Angewandte Chemie International Edition in English</em> 32(11):1545–1579, 1993. Separação cuidadosa entre o que é medida e o que é interpretação.", url: "https://doi.org/10.1002/anie.199315451" },
  { n: 10, tipo: "revisão", ref: "Southall, N. T., Dill, K. A. &amp; Haymet, A. D. J. 'A View of the Hydrophobic Effect'. <em>The Journal of Physical Chemistry B</em> 106(3):521–533, 2002.", url: "https://doi.org/10.1021/jp015514e" },
  { n: 11, tipo: "artigo", ref: "Lee, B. 'The physical origin of the low solubility of nonpolar solutes in water'. <em>Biopolymers</em> 24(5):813–823, 1985. O argumento de que o custo é de empacotamento, não de orientação.", url: "https://doi.org/10.1002/bip.360240507" },
  { n: 12, tipo: "revisão", ref: "Privalov, P. L. 'Cold Denaturation of Protein'. <em>Critical Reviews in Biochemistry and Molecular Biology</em> 25(4):281–306, 1990.", url: "https://doi.org/10.3109/10409239009090612" },
  { n: 13, tipo: "artigo", ref: "Grdadolnik, J., Merzel, F. &amp; Avbelj, F. 'Origin of hydrophobicity and enhanced water hydrogen bond strength near purely hydrophobic solutes'. <em>PNAS</em> 114(2):322–327, 2017. Infravermelho do estiramento O−D; conclui a favor da visão clássica.", url: "https://doi.org/10.1073/pnas.1612480114" },
  { n: 14, tipo: "artigo", ref: "Davis, J. G., Gierszal, K. P., Wang, P. &amp; Ben-Amotz, D. 'Water structural transformation at molecular hydrophobic interfaces'. <em>Nature</em> 491:582–585, 2012. Raman de curva resolvida de 0 a 100 °C; ordem tetraédrica só em temperatura baixa e abaixo de cerca de 1 nm.", url: "https://doi.org/10.1038/nature11570" },
  { n: 15, tipo: "artigo", ref: "Dixit, S., Crain, J., Poon, W. C. K., Finney, J. L. &amp; Soper, A. K. 'Molecular segregation observed in a concentrated alcohol–water solution'. <em>Nature</em> 416:829–832, 2002. Difração de nêutrons; atribui a anomalia entrópica a mistura incompleta e retenção da rede de bulk.", url: "https://doi.org/10.1038/416829a" },
  { n: 16, tipo: "artigo", ref: "Haselmeier, R., Holz, M., Marbach, W. &amp; Weingärtner, H. 'Water Dynamics near a Dissolved Noble Gas. First Direct Experimental Evidence for a Retardation Effect'. <em>The Journal of Physical Chemistry</em> 99(8):2243–2246, 1995.", url: "https://doi.org/10.1021/j100008a001" },
  { n: 17, tipo: "revisão", ref: "Ben-Amotz, D. 'Water-Mediated Hydrophobic Interactions'. <em>Annual Review of Physical Chemistry</em> 67:617–638, 2016. Estado da questão sobre o retrato microscópico.", url: "https://doi.org/10.1146/annurev-physchem-040215-112412" }
]
};
