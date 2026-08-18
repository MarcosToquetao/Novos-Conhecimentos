CONTEUDOS["tunelamento-quantico"] = {
termo: "Tunelamento quântico",
area: "Física",
subtitulo: "Uma partícula com energia menor do que a altura de uma barreira tem, mesmo assim, uma chance real de aparecer do outro lado dela. A equação de Schrödinger permite isso. A física nuclear, a fabricação de chips e o funcionamento do Sol dependem disso todos os dias.",
prerequisitos: [
  "Nenhum pré-requisito técnico para o núcleo. Ajuda lembrar a diferença entre energia cinética (a do movimento) e energia potencial (a armazenada pela posição, como a de uma bola no alto de uma colina).",
  "Para o aprofundamento, familiaridade com a ideia de função de onda e com notação de derivada ajuda, mas cada termo é explicado na primeira aparição."
],
conexoes: [
  { termo: "Gato de Schrödinger e o problema da medição", relacao: "Os dois casos partem do mesmo fato incômodo: antes de uma medição, a física quântica descreve possibilidades sobrepostas, não um estado definido único. No tunelamento, a partícula não está simplesmente 'dentro' ou 'fora' da barreira até que algo a detecte." },
  { termo: "Emaranhamento quântico e desigualdades de Bell", relacao: "Ambos os fenômenos não têm equivalente clássico e ambos foram, em algum momento, tratados com desconfiança até serem confirmados por medições de precisão crescente ao longo de décadas." },
  { termo: "Supercondutividade", relacao: "A junção Josephson, usada em computadores quânticos supercondutores e em magnetômetros de altíssima precisão, é um par de supercondutores separados por uma barreira isolante fina o bastante para que pares de Cooper tunelem através dela." },
  { termo: "As quatro interações fundamentais", relacao: "O decaimento alfa combina duas forças: a força nuclear forte, que mantém a partícula alfa presa por perto, e a repulsão eletromagnética, que cria a barreira que ela precisa tunelar para escapar." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Imagine uma bola dentro de um vale cercado por duas colinas. Para sair do vale, a bola precisa de energia cinética suficiente para subir até o topo de uma das colinas. Se a energia dela for menor do que isso, ela sobe um pouco, para, e volta a descer. Ninguém discorda dessa parte: é física newtoniana comum, e ela vale para bolas, carros e planetas.</p>

<p>Partículas subatômicas, elétrons, prótons, núcleos inteiros, não obedecem exatamente essa regra. Em certas condições, uma partícula com energia menor do que a altura de uma barreira tem uma probabilidade maior que zero de aparecer do outro lado dela. Ela não ganha energia extra de lugar nenhum, e não pula por cima da colina. O resultado observável é como se ela tivesse atravessado por dentro da barreira, um caminho que a física clássica simplesmente não previa e não permite. Esse fenômeno chama-se tunelamento quântico.</p>

<h3>Duas coisas diferentes: "proibido classicamente" e "impossível"</h3>

<p>A física clássica, a de Newton, diz que a bola do exemplo não pode estar dentro da colina com energia cinética negativa: isso não faz sentido algum, energia cinética é sempre positiva ou nula. Chamamos isso de região classicamente proibida. Só que "proibido pela teoria clássica" e "impossível na natureza" são afirmações diferentes. A primeira é uma propriedade de um modelo. A segunda é uma afirmação sobre o mundo. A mecânica quântica é o modelo melhor, e ele autoriza algo que o modelo anterior não autorizava.</p>

<p>Para entender como, é preciso trocar a imagem da bola por outra. Na mecânica quântica, uma partícula não tem uma posição definida o tempo todo. Ela é descrita por uma função de onda, um objeto matemático que, ao ser elevado ao quadrado, dá a densidade de probabilidade de encontrar a partícula em cada ponto do espaço, caso alguém faça uma medição ali. "Probabilidade", nesse uso, não significa que a partícula já está num lugar certo e nós apenas não sabemos qual, como uma moeda escondida debaixo de um copo. Até onde os experimentos conseguem testar, a incerteza é uma característica da própria partícula antes da medição, não uma falha de informação de quem observa. Essa é uma das ideias mais estranhas e mais bem testadas da física do século vinte.</p>

<h3>Por que a onda não desaparece de repente</h3>

<p>A equação de Schrödinger é a regra que diz como a função de onda de uma partícula muda ao longo do espaço e do tempo, dada a energia da partícula e o formato da barreira de energia potencial que ela encontra pela frente. Fora da barreira, onde a energia da partícula é maior que a altura da barreira, a solução dessa equação oscila, sobe e desce como uma onda comum. Dentro da barreira, onde a energia é menor que a altura, a matemática muda de caráter: em vez de oscilar, a função de onda decai suavemente, como a intensidade de um sinal de rádio enfraquecendo à medida que você se afasta da antena. Ela não cai a zero instantaneamente ao cruzar a borda da barreira. Ela desce aos poucos, de forma exponencial, o que significa que perde uma fração fixa da sua amplitude a cada distância percorrida.</p>

<p>Se a barreira for espessa o suficiente, a função de onda praticamente zera antes de chegar ao outro lado, e a probabilidade de encontrar a partícula ali é irrelevante na prática. Mas se a barreira for fina, sobra uma amplitude pequena, porém diferente de zero, no lado oposto. E onde a função de onda não é zero, existe uma chance real, mensurável, de a partícula ser encontrada ali numa medição. É essa sobra de amplitude que constitui o tunelamento.</p>

<div class="marca consenso">
<span class="rot">O que está fora de disputa</span>
<p>Que partículas atravessam barreiras classicamente proibidas com probabilidade maior que zero, e que essa probabilidade depende da largura e da altura da barreira do jeito que a equação de Schrödinger prevê, é um dos resultados mais testados da física. Ele sustenta cálculos de meia-vida nuclear que batem com medições de laboratório, aparelhos de uso comercial e reações que mantêm estrelas brilhando. Não é uma hipótese em aberto.</p>
</div>

<h3>Como um físico decide que isso é real, e não ruído do aparelho</h3>

<p>Vale a pena parar aqui e notar o padrão de raciocínio, porque ele se aplica a boa parte da física experimental. Um efeito é aceito como real quando ele aparece de forma consistente em experimentos diferentes, feitos por grupos diferentes, com números que batem com o que a teoria prevê antes do experimento ser feito, não depois. No caso do tunelamento, isso aconteceu de pelo menos três formas independentes: cálculos de meia-vida de decaimento radioativo bateram com medições feitas décadas antes da teoria existir; um instrumento construído sobre o princípio do tunelamento passou a fotografar átomos individuais, algo que só funciona se o princípio estiver certo; e um tipo de componente eletrônico construído para explorar o tunelamento funciona exatamente como previsto, todos os dias, em bilhões de dispositivos. Quando uma ideia contraintuitiva permite prever números específicos que se confirmam repetidamente, e permite construir aparelhos que funcionam com base nela, ela deixa de ser uma curiosidade teórica.</p>

<h3>O quebra-cabeça do decaimento alfa</h3>

<p>O primeiro triunfo do tunelamento veio da física nuclear, em 1928. Alguns núcleos atômicos pesados, como o urânio, emitem espontaneamente uma partícula alfa (dois prótons e dois nêutrons presos juntos, essencialmente um núcleo de hélio). O problema que intrigava os físicos era o seguinte: dentro do núcleo, a partícula alfa é mantida presa pela força nuclear forte, de curtíssimo alcance. Para escapar, ela precisaria vencer a repulsão elétrica do resto do núcleo, positivamente carregado, formando uma espécie de parede de energia. Medições mostravam que a energia da partícula alfa emitida era menor do que a altura dessa parede. Pela física clássica, a partícula simplesmente não deveria conseguir sair nunca. E, no entanto, ela saía, de forma regular e previsível, em amostras de material radioativo do mundo inteiro.</p>

<p>George Gamow, de um lado, e Ronald Gurney com Edward Condon, do outro, resolveram esse quebra-cabeça de forma independente e quase simultânea em 1928, tratando a partícula alfa como uma onda quântica que tunela através da parede eletrostática em vez de precisar saltar por cima dela.<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup> A ideia explicava não só o fato de o decaimento acontecer, mas também algo que já intrigava os físicos havia quase vinte anos: por que a meia-vida (o tempo que leva para metade de uma amostra decair) varia tanto entre isótopos diferentes, de frações de segundo a bilhões de anos, para diferenças pequenas na energia da partícula alfa emitida. Hans Geiger e John Nuttall já tinham descrito essa relação empiricamente em 1911, sem explicação teórica.<sup class="cit"><a href="#f4">4</a></sup> A teoria de Gamow, Gurney e Condon mostrou por que a relação tinha exatamente aquela forma: a probabilidade de tunelamento despenca de forma exponencial quando a energia da partícula cai um pouco, o que faz a meia-vida disparar de forma igualmente violenta.</p>

<h3>Da física nuclear para a bancada e para o Sol</h3>

<p>O mesmo princípio, aplicado a situações bem diferentes, gerou depois um instrumento capaz de fotografar átomos individuais na superfície de um material (o microscópio de tunelamento de varredura, inventado em 1981), um componente eletrônico usado em rádios e sistemas de micro-ondas (o diodo de tunelamento, descoberto em 1957), e a explicação de por que o núcleo do Sol consegue fundir hidrogênio mesmo estando "frio demais" para isso segundo a física clássica. As três aplicações são tratadas com mais detalhe nas camadas seguintes.</p>

<h3>O que o tunelamento não é</h3>

<p>Vale fechar o núcleo desfazendo um mal-entendido comum e uma confusão popular. O mal-entendido: tunelamento não é a partícula "pulando por cima" da barreira, como se ela ganhasse energia emprestada por um instante. A energia da partícula continua a mesma antes e depois; o que muda é que ela apareceu do outro lado de um obstáculo que, pela lógica de uma bola numa colina, deveria tê-la barrado por completo.</p>

<p>A confusão popular: a palavra "quântico" foi sequestrada por um mercado inteiro de produtos de autoajuda, terapias alternativas e frases de efeito que prometem "tunelamento mental", "saltos quânticos de consciência" ou a capacidade de "reprogramar sua realidade" usando princípios da física quântica. Isso não tem respaldo nenhum na física. O tunelamento real depende de números muito específicos: quanto maior a massa da partícula e quanto mais larga a barreira, exponencialmente menor fica a probabilidade de tunelamento. Um elétron pode tunelar por uma barreira de um nanômetro com probabilidade apreciável. Uma pessoa, um pensamento ou uma decisão são objetos com massa e escala completamente fora desse regime: a probabilidade de qualquer coisa parecida com tunelamento afetar um cérebro inteiro, ou "viajar" entre mentes, é indistinguível de zero, e ninguém jamais mediu ou propôs um mecanismo físico plausível para isso.<sup class="cit"><a href="#f16">16</a></sup> Usar a palavra "quântico" não torna uma afirmação mais científica; no caso do tunelamento, ela tem um significado técnico preciso, e esse significado não inclui nada do que essas alegações descrevem.</p>
` },

aprofundamento: { minutos: 30, html: `
<h3>A equação de Schrödinger independente do tempo</h3>

<p>Para uma partícula de massa <em>m</em> se movendo numa dimensão, sujeita a uma energia potencial <em>V(x)</em>, a equação de Schrödinger independente do tempo relaciona a função de onda <em>ψ(x)</em> (a letra grega psi) à energia total <em>E</em> da partícula:</p>

<div class="formula">
&minus;(ħ²/2m) · d²ψ/dx² + V(x)ψ(x) = Eψ(x)
<span class="leg">ħ é a constante de Planck dividida por 2π. A equação diz como a curvatura da função de onda em cada ponto depende da diferença entre a energia total E e a energia potencial local V(x).</span>
</div>

<p>Em regiões onde <em>E</em> é maior que <em>V(x)</em> (a partícula teria energia cinética positiva ali, classicamente), a solução da equação é oscilatória: senos e cossenos, ou de forma equivalente uma exponencial complexa, exatamente o comportamento de onda que se espera de uma partícula livre. Em regiões onde <em>V(x)</em> é maior que <em>E</em>, a curvatura muda de sinal, e a solução deixa de oscilar. Ela passa a ser uma soma de duas exponenciais reais, uma crescente e uma decrescente. Fisicamente, apenas a parte decrescente sobrevive dentro de uma barreira larga (a parte crescente levaria a uma probabilidade infinita, o que não tem sentido físico), e é essa componente decrescente que carrega a amplitude de um lado da barreira até o outro.</p>

<h3>O coeficiente de decaimento e a forma qualitativa do resultado</h3>

<p>Para uma barreira retangular simples, de altura <em>V₀</em> e largura <em>L</em>, com uma partícula de energia <em>E</em> menor que <em>V₀</em> incidindo sobre ela, a amplitude da função de onda dentro da barreira decai como <em>e</em> elevado a menos <em>κx</em>, onde <em>κ</em> (a letra grega capa) é dado por:</p>

<div class="formula">
κ = √(2m(V₀ &minus; E)) / ħ
<span class="leg">κ tem unidade de inverso de comprimento. Quanto maior a massa da partícula ou maior a diferença entre a altura da barreira e a energia da partícula, mais rápido a onda decai por unidade de distância.</span>
</div>

<p>O que interessa para prever um experimento não é a amplitude da onda, mas o coeficiente de transmissão <em>T</em>: a fração da corrente de probabilidade incidente que efetivamente atravessa a barreira e continua do outro lado. Para uma barreira larga o bastante (<em>κL</em> maior que cerca de 1), esse coeficiente é dominado por um único fator exponencial:</p>

<div class="formula">
T ≈ 16 (E/V₀)(1 &minus; E/V₀) · e<sup>&minus;2κL</sup>
<span class="leg">O termo exponencial e⁻²κL domina completamente o resultado. O termo antes dele varia de forma suave e é frequentemente ignorado numa primeira estimativa qualitativa.</span>
</div>

<p>O ponto qualitativo que vale reter, e que se generaliza para barreiras de qualquer formato, é este: o coeficiente de transmissão cai exponencialmente com a largura da barreira, exponencialmente com a raiz quadrada da diferença de altura, e exponencialmente com a raiz quadrada da massa da partícula. "Exponencialmente" aqui não é força de expressão. Dobrar a largura de uma barreira típica pode reduzir a probabilidade de tunelamento por um fator de milhares ou milhões, não pela metade. É essa sensibilidade extrema que torna o tunelamento, ao mesmo tempo, um efeito decisivo em escalas atômicas e um efeito completamente irrelevante em escalas macroscópicas: um grão de areia nunca vai tunelar através de uma parede, porque sua massa torna κ absurdamente grande.</p>

<h3>Barreiras que não são retangulares: a aproximação de Gamow</h3>

<p>Barreiras reais raramente são um degrau plano. No decaimento alfa, a barreira é o potencial eletrostático entre a partícula alfa e o núcleo restante, que cai suavemente com a distância (proporcional ao inverso da distância). Para esses casos, usa-se a aproximação WKB (de Wentzel, Kramers e Brillouin, físicos que a desenvolveram de forma independente em 1926), que generaliza a fórmula de decaimento trocando <em>κL</em> por uma integral de <em>κ(x)</em> ao longo de toda a região onde <em>V(x)</em> é maior que <em>E</em>. O resultado dessa integral, aplicado à barreira coulombiana, é conhecido como fator de Gamow, e ele reproduz exatamente a forma da lei empírica de Geiger e Nuttall de 1911: o logaritmo da meia-vida de decaimento alfa varia de forma aproximadamente linear com o inverso da raiz quadrada da energia da partícula emitida.<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f4">4</a></sup> A força do resultado de Gamow, Gurney e Condon não foi apenas explicar que o decaimento acontece, foi derivar, a partir de primeiros princípios quânticos, uma relação numérica que já era conhecida experimentalmente havia dezessete anos sem explicação teórica.</p>

<p>A sensibilidade exponencial explica um número que costuma surpreender: o polônio-212 tem meia-vida de cerca de 0,3 microssegundo e emite uma partícula alfa de 8,78 MeV; o urânio-238 tem meia-vida de cerca de 4,46 bilhões de anos e emite uma partícula alfa de energia bem menor, perto de 4,2 MeV.<sup class="cit"><a href="#f12">12</a></sup> Uma diferença de pouco mais do que o dobro na energia da partícula corresponde a uma diferença de mais de vinte ordens de grandeza na meia-vida. Nenhuma outra explicação além da sensibilidade exponencial do tunelamento dá conta desse tipo de variação.</p>

<h3>O microscópio de tunelamento de varredura</h3>

<p>Em 1981, Gerd Binnig e Heinrich Rohrer, pesquisadores do laboratório da IBM em Zurique, construíram um instrumento que aproxima uma ponta metálica extremamente fina de uma superfície condutora, deixando uma lacuna de vácuo de poucos angströns (décimos de nanômetro) entre as duas.<sup class="cit"><a href="#f6">6</a></sup> Classicamente, elétrons não deveriam atravessar essa lacuna sem contato físico. Quanticamente, uma pequena corrente de elétrons tunela entre a ponta e a superfície, e essa corrente depende de forma exponencial da distância entre elas: variar a distância em menos de um angström pode mudar a corrente por um fator de dez.</p>

<p>É exatamente essa sensibilidade extrema, o mesmo traço que faz o tunelamento parecer "frágil" em outros contextos, que torna o instrumento tão preciso. Ao varrer a ponta sobre a superfície e ajustar sua altura para manter a corrente de tunelamento constante, o aparelho traça o relevo da superfície com resolução suficiente para distinguir átomos individuais. Binnig e Rohrer receberam metade do Prêmio Nobel de Física de 1986 por essa invenção, a outra metade foi para Ernst Ruska, pelo desenvolvimento anterior do microscópio eletrônico.<sup class="cit"><a href="#f5">5</a></sup></p>

<div class="marca consenso">
<span class="rot">Consenso sólido</span>
<p>O funcionamento do microscópio de tunelamento de varredura depende, ponto a ponto, da fórmula de decaimento exponencial derivada da equação de Schrödinger. Não é apenas um exemplo didático: engenheiros calculam a corrente esperada usando essa fórmula antes de construir o instrumento, e o instrumento funciona como previsto. É um dos casos mais diretos de uma equação da física básica sendo usada, todos os dias, para desenhar um produto real.</p>
</div>

<h3>O diodo de tunelamento</h3>

<p>Leo Esaki, trabalhando na Sony (então Tokyo Tsushin Kogyo) no Japão, descobriu em 1957 que junções p-n de semicondutor dopadas de forma muito intensa, com a região de depleção estreitada a poucos nanômetros, exibiam uma corrente que aumentava e depois diminuía à medida que a tensão aplicada crescia, um comportamento chamado de resistência diferencial negativa.<sup class="cit"><a href="#f8">8</a></sup> A explicação é o tunelamento direto de elétrons através da barreira de energia da junção, estreita o bastante para que a probabilidade de tunelamento seja apreciável em vez de desprezível. O componente resultante, o diodo de tunelamento (ou diodo Esaki), foi usado historicamente em osciladores e circuitos de comutação muito rápidos, porque a resposta do tunelamento não depende do tempo que os elétrons levam para se deslocar fisicamente, apenas da probabilidade quântica de atravessar. Esaki dividiu o Prêmio Nobel de Física de 1973 com Ivar Giaever, que estudou tunelamento em junções supercondutoras, e Brian Josephson, que previu teoricamente o tunelamento de pares de elétrons supercondutores (pares de Cooper) através de uma barreira isolante, hoje base da junção Josephson usada em computadores quânticos supercondutores e em magnetômetros de precisão extrema.<sup class="cit"><a href="#f7">7</a></sup></p>

<h3>Fusão nuclear no núcleo do Sol</h3>

<p>O núcleo do Sol tem temperatura de cerca de 15 milhões de kelvin. Isso corresponde a uma energia térmica média por partícula da ordem de 1 a 2 mil elétron-volts (keV). A barreira coulombiana que dois prótons precisam superar para se aproximar o bastante e serem afetados pela força nuclear forte tem altura da ordem de centenas de milhares de elétron-volts, chegando à faixa de mega-elétron-volts (MeV) na aproximação máxima. Pela física clássica, a energia térmica disponível no núcleo solar é pequena demais, por uma margem enorme, para que prótons superem essa barreira colidindo uns com os outros.<sup class="cit"><a href="#f11">11</a></sup></p>

<p>O que torna a fusão possível é a combinação de dois fatores. Primeiro, a distribuição de velocidades das partículas num gás em equilíbrio térmico (a distribuição de Maxwell-Boltzmann) tem uma cauda de partículas bem mais energéticas que a média, ainda que sejam poucas. Segundo, e aqui entra o tunelamento, mesmo essas partículas mais energéticas da cauda têm energia bem menor que a altura da barreira coulombiana, mas não precisam mais superá-la por completo: precisam apenas de energia suficiente para que a probabilidade de tunelamento, extremamente pequena mas não nula, se torne significativa quando multiplicada pelo número astronômico de colisões que ocorrem a cada segundo num volume estelar. A combinação da cauda da distribuição térmica com a curva de probabilidade de tunelamento, que cresce com a energia, produz uma janela de energia onde a reação é mais provável, conhecida como pico de Gamow, tipicamente na faixa de alguns a poucas dezenas de keV para a reação próton-próton solar.<sup class="cit"><a href="#f11">11</a></sup></p>

<div class="marca consenso">
<span class="rot">Precisão necessária aqui</span>
<p>O tunelamento é condição necessária para que a fusão solar aconteça a 15 milhões de kelvin: sem ele, a taxa de reação seria efetivamente zero, porque a fração de partículas com energia suficiente para superar a barreira classicamente é desprezível. Mas o tunelamento sozinho não define completamente a taxa observada de fusão no Sol. A primeira etapa da cadeia próton-próton (dois prótons se transformando num núcleo de deutério) exige que um dos prótons se converta num nêutron, um processo mediado pela força nuclear fraca, e essa etapa é, ela mesma, extraordinariamente rara por colisão, independentemente do tunelamento. É a combinação dos dois fatores, a probabilidade de tunelamento e a raridade da conversão pela força fraca, que explica por que o Sol converte hidrogênio em hélio de forma lenta e estável ao longo de bilhões de anos, em vez de fazê-lo de uma só vez. Essa física é bem estabelecida desde o trabalho de Hans Bethe em 1939 e confirmada desde então por modelos solares testados contra a detecção direta de neutrinos vindos do núcleo do Sol.</p>
</div>
` },

extensao: { minutos: 60, html: `
<h3>Quanto tempo leva para tunelar?</h3>

<p>A equação de Schrödinger diz com que probabilidade uma partícula atravessa uma barreira. Ela não diz, de forma direta e sem ambiguidade, quanto tempo a partícula passa dentro da barreira enquanto isso acontece. Essa pergunta parece simples e não é: como a partícula não tem uma trajetória definida dentro da região classicamente proibida, "o tempo que ela levou para atravessar" não é uma quantidade que a teoria padrão define de saída. Físicos propuseram ao longo de décadas várias definições distintas de tempo de tunelamento, entre elas o tempo de fase de Wigner, o tempo de Büttiker-Landauer e o tempo de Larmor, e essas definições nem sempre concordam entre si.</p>

<p>O debate ficou mais concreto em 1962, quando Thomas Hartman calculou que, para barreiras suficientemente espessas, o tempo de fase de tunelamento parava de crescer com a espessura da barreira, um resultado hoje chamado de efeito Hartman.<sup class="cit"><a href="#f10">10</a></sup> Levado ao extremo, isso sugeria que a velocidade efetiva de tunelamento através de uma barreira muito espessa poderia superar a velocidade da luz, o que soa como uma violação da relatividade. A resolução aceita é que esse "tempo de fase" descreve a deformação de um pacote de onda, não o deslocamento de um sinal capaz de carregar informação; a amplitude que emerge do outro lado de uma barreira espessa é tão reduzida que nenhuma comunicação mais rápida que a luz é possível na prática, o que preserva a causalidade. Ainda assim, o que exatamente esse "tempo" representa fisicamente permanece um ponto de discussão ativa entre especialistas em fundamentos da mecânica quântica.</p>

<div class="marca controverso">
<span class="rot">Debate em aberto</span>
<p>Não existe hoje uma única definição de tempo de tunelamento aceita por todos os físicos que trabalham no tema, e diferentes métodos experimentais de medição, que usam relógios físicos diferentes embutidos no próprio sistema quântico, produzem valores que não são diretamente comparáveis entre si. O que está em disputa não é se o tunelamento acontece, isso está fora de questão, mas o que significa, operacionalmente, dizer que ele "leva um tempo" quando a partícula não tem posição definida durante o processo.</p>
</div>

<p>Em 2020, Ramón Ramos, David Spierings, Isabelle Racicot e Aephraim Steinberg, da Universidade de Toronto, mediram diretamente uma dessas definições usando átomos ultrafrios de rubídio-87.<sup class="cit"><a href="#f9">9</a></sup> A técnica usa o chamado relógio de Larmor: um campo magnético fraco, presente apenas na região da barreira, faz o spin do átomo precessar (girar) a uma taxa conhecida enquanto ele está lá dentro; medir o ângulo de precessão acumulado ao final do processo permite estimar por quanto tempo, em média, o átomo esteve na região classicamente proibida. Para a energia incidente mais baixa testada, o grupo mediu um tempo de travessia de cerca de 0,61 milissegundo, um valor finito e diferente de zero, e não instantâneo como uma leitura ingênua da equação de Schrödinger poderia sugerir.</p>

<h3>Tunelamento em enzimas: o que é sólido e o que ainda se discute</h3>

<p>Fora da física nuclear e da eletrônica, o tunelamento aparece de forma bem estabelecida na transferência de elétrons dentro de proteínas, como nas cadeias de transporte de elétrons da respiração celular e da fotossíntese. Elétrons saltam entre centros redox separados por distâncias da ordem de um a dois nanômetros, dentro da estrutura da proteína, numa taxa que a teoria de Marcus, combinada com tunelamento quântico, descreve com boa precisão.<sup class="cit"><a href="#f15">15</a></sup> Essa parte é consenso na bioquímica.</p>

<p>Mais controversa é a proposta de que o tunelamento de prótons e átomos de hidrogênio, partículas bem mais pesadas que o elétron, contribui de forma relevante para a velocidade de certas reações catalisadas por enzimas, como a oxidação de álcoois por álcool desidrogenase. A evidência citada nessa linha de pesquisa, conduzida principalmente por Judith Klinman e colaboradores, vem de efeitos isotópicos cinéticos maiores do que o esperado pela teoria clássica de estado de transição, quando um átomo de hidrogênio é trocado por seu isótopo mais pesado, o deutério.<sup class="cit"><a href="#f13">13</a></sup><sup class="cit"><a href="#f14">14</a></sup></p>

<div class="marca controverso">
<span class="rot">Onde a disputa está</span>
<p>Ninguém contesta que o tunelamento de hidrogênio é fisicamente possível em reações enzimáticas: a massa do próton, ainda que muito maior que a do elétron, é pequena o bastante para tunelar por distâncias de frações de angström. A disputa é sobre magnitude e sobre atribuição causal: quanto da velocidade observada em cada reação específica vem de tunelamento propriamente dito, e quanto vem de outros efeitos, como a dinâmica vibracional da proteína que aproxima os dois átomos antes da transferência acontecer. Diferentes grupos de pesquisa, analisando as mesmas classes de reação, chegam a estimativas diferentes da contribuição relativa do tunelamento, e o debate sobre metodologia de medição de efeitos isotópicos continua ativo na literatura de bioquímica física.</p>
</div>

<h3>O que o conceito não sustenta: o mito do "tunelamento mental"</h3>

<p>Vale voltar a esse ponto com mais detalhe, porque ele é a fonte mais comum de confusão popular sobre o tema. A partir da década de 1970, um gênero de literatura de autoajuda e terapias alternativas passou a usar vocabulário da física quântica, incluindo a palavra "tunelamento", para descrever transformações pessoais, curas espirituais ou saltos de consciência, sem qualquer mecanismo físico correspondente. O físico Victor Stenger documentou e criticou extensamente esse uso em 1997, cunhando o termo "charlatanismo quântico" para a prática de emprestar vocabulário técnico da mecânica quântica para dar aparência de legitimidade científica a afirmações sem base experimental.<sup class="cit"><a href="#f16">16</a></sup></p>

<p>O motivo pelo qual essas afirmações não se sustentam não é apenas falta de evidência, é uma incompatibilidade quantitativa direta com a própria teoria que dizem invocar. Como a fórmula da camada anterior mostra, a probabilidade de tunelamento cai exponencialmente com a massa do objeto e com a largura da barreira. Um elétron, de massa extremamente pequena, tunela com probabilidade apreciável por distâncias de nanômetros. Um neurônio, uma sinapse ou um pensamento, entendidos como padrões de atividade elétrica e química envolvendo bilhões de moléculas, estão em uma escala de massa e distância onde essa probabilidade é indistinguível de zero, não porque a física proíba filosoficamente, mas porque o número resultante do cálculo é tão próximo de zero que nenhuma medição já feita, ou concebível, teria condição de detectá-lo. Nenhum estudo publicado em física ou neurociência produziu evidência de tunelamento afetando processos cognitivos em escala de neurônio ou de cérebro inteiro.</p>

<h3>Limites do que o tunelamento explica</h3>

<p>Fechando com um ponto de disciplina conceitual: tunelamento não é uma forma de violar a conservação de energia. Antes e depois do processo, a energia total da partícula é a mesma; o que muda é apenas a posição em que ela é encontrada, com uma probabilidade que a equação de Schrödinger calcula com precisão. Tunelamento também não implica que a partícula "esteja em dois lugares ao mesmo tempo" enquanto atravessa, essa é outra simplificação popular imprecisa: o que existe, durante o processo, é uma função de onda com amplitude não nula em várias regiões, e a interpretação do que isso significa sobre a "realidade" da partícula entre medições continua sendo um dos temas de fundo mais discutidos, e menos resolvidos, de toda a mecânica quântica, incluindo o próprio debate sobre tempo de tunelamento descrito acima.</p>
` }
},

sintese: {
  definicoes: [
    { termo: "Tunelamento quântico", def: "Fenômeno pelo qual uma partícula tem probabilidade maior que zero de ser encontrada do outro lado de uma barreira de energia potencial mais alta que sua própria energia cinética, algo que a física clássica proíbe." },
    { termo: "Função de onda", def: "Objeto matemático que descreve o estado de uma partícula quântica; seu módulo ao quadrado dá a densidade de probabilidade de encontrar a partícula em cada ponto, caso uma medição seja feita." },
    { termo: "Região classicamente proibida", def: "Região do espaço em que a energia potencial é maior que a energia total da partícula, o que exigiria energia cinética negativa segundo a física clássica." },
    { termo: "Coeficiente de transmissão (T)", def: "Fração da corrente de probabilidade incidente sobre uma barreira que efetivamente a atravessa e continua do outro lado. Depende exponencialmente da largura e da altura da barreira e da massa da partícula." },
    { termo: "Fator de Gamow", def: "Resultado da aplicação da aproximação WKB a uma barreira coulombiana, usado para calcular a probabilidade de tunelamento em decaimento alfa e em reações de fusão nuclear; reproduz a lei empírica de Geiger-Nuttall." },
    { termo: "Pico de Gamow", def: "Faixa de energia onde o produto entre a fração de partículas com aquela energia térmica e a probabilidade de tunelamento é máximo; é onde a maior parte das reações de fusão estelar efetivamente ocorre." }
  ],
  lembrar: [
    "Dentro de uma barreira classicamente proibida, a função de onda não cai a zero instantaneamente. Ela decai de forma exponencial com a distância. Se a barreira for fina o bastante, sobra amplitude não nula do outro lado, e essa sobra é o tunelamento.",
    "A probabilidade de tunelamento cai exponencialmente com a largura da barreira, com a raiz quadrada da diferença entre altura da barreira e energia da partícula, e com a raiz quadrada da massa da partícula. Por isso o efeito domina em escala atômica e é irrelevante em escala macroscópica.",
    "Gamow, Gurney e Condon explicaram o decaimento alfa em 1928 tratando a partícula alfa como uma onda que tunela através da barreira coulombiana. Isso derivou, a partir de princípios quânticos, a lei empírica de Geiger e Nuttall de 1911, que relaciona energia da partícula alfa e meia-vida.",
    "O microscópio de tunelamento de varredura (Binnig e Rohrer, 1981, Nobel de Física 1986) e o diodo de tunelamento (Esaki, 1957, Nobel de Física 1973) são aplicações de engenharia que dependem, ponto a ponto, da fórmula de decaimento exponencial da mecânica quântica.",
    "O tunelamento é condição necessária para a fusão de hidrogênio no núcleo do Sol a 15 milhões de kelvin, temperatura insuficiente classicamente para vencer a barreira coulombiana. Mas a taxa observada de fusão solar também depende da raridade da conversão de próton em nêutron pela força fraca, na primeira etapa da cadeia próton-próton. Tunelamento sozinho não é a explicação completa da taxa.",
    "O tempo que uma partícula passa dentro da barreira durante o tunelamento não tem uma definição única aceita por todos os físicos. Medições recentes com o relógio de Larmor (Steinberg e colaboradores, 2020) encontraram um tempo finito e não nulo, mas a interpretação física do que esse tempo representa continua em debate.",
    "Expressões como 'tunelamento mental' ou 'saltos quânticos de consciência' usadas em autoajuda não correspondem a nenhum mecanismo físico. A própria matemática do tunelamento, que faz a probabilidade cair exponencialmente com a massa e a distância, torna qualquer efeito desse tipo em escala de neurônio ou cérebro inteiro indistinguível de zero."
  ],
  confusoes: [
    { erro: "Tunelamento significa que a partícula pula por cima da barreira", correcao: "Não. A energia da partícula continua a mesma antes e depois. O que a mecânica quântica permite é que a função de onda tenha amplitude não nula dentro e depois da barreira, sem que a partícula precise ter energia cinética maior que a altura da barreira em ponto algum." },
    { erro: "A função de onda desaparece assim que entra na região proibida", correcao: "Ela decai de forma exponencial e suave, não cai a zero de uma vez. É justamente essa transição gradual que permite sobrar amplitude do outro lado quando a barreira é fina." },
    { erro: "O tunelamento viola a conservação de energia", correcao: "Não viola. A energia total medida antes e depois do processo é a mesma. O que muda é a posição em que a partícula é encontrada, com uma probabilidade calculável." },
    { erro: "O Sol funde hidrogênio só por causa do tunelamento quântico", correcao: "O tunelamento é necessário, mas não suficiente para explicar sozinho a taxa observada. A primeira etapa da cadeia próton-próton também depende da força nuclear fraca, que converte um próton em nêutron, um processo raro por colisão independentemente do tunelamento. Os dois fatores juntos explicam por que o Sol queima devagar e de forma estável por bilhões de anos." },
    { erro: "Objetos do dia a dia também tunelam, só que ninguém percebe", correcao: "A probabilidade de tunelamento cai exponencialmente com a massa do objeto. Para um objeto macroscópico, como uma bola ou uma pessoa, essa probabilidade é tão próxima de zero que é indistinguível de zero para qualquer propósito prático, ao longo de qualquer tempo razoável de observação." },
    { erro: "'Tunelamento mental' ou 'salto quântico de consciência' são extensões legítimas do conceito físico", correcao: "Não têm mecanismo físico correspondente, nem evidência experimental. São usos de vocabulário técnico emprestado sem o conteúdo matemático que dá sentido ao termo original." }
  ],
  numeros: [
    "1928: George Gamow, de um lado, e Ronald Gurney com Edward Condon, do outro, publicam de forma independente a explicação do decaimento alfa por tunelamento quântico.",
    "1911: Hans Geiger e John Nuttall publicam a relação empírica entre energia da partícula alfa e meia-vida de decaimento, mais tarde explicada pela teoria de Gamow.",
    "1957: Leo Esaki descobre o efeito de tunelamento em junções p-n muito dopadas, origem do diodo de tunelamento (diodo Esaki). Nobel de Física em 1973, dividido com Ivar Giaever e Brian Josephson.",
    "1981: Gerd Binnig e Heinrich Rohrer constroem o primeiro microscópio de tunelamento de varredura no laboratório da IBM em Zurique. Nobel de Física em 1986, dividido com Ernst Ruska.",
    "2020: Ramos, Spierings, Racicot e Steinberg medem um tempo de tunelamento de cerca de 0,61 milissegundo usando átomos ultrafrios de rubídio-87 e a técnica do relógio de Larmor.",
    "Exemplo de sensibilidade exponencial: polônio-212 (alfa de 8,78 MeV) tem meia-vida de cerca de 0,3 microssegundo; urânio-238 (alfa de cerca de 4,2 MeV) tem meia-vida de cerca de 4,46 bilhões de anos. Pouco mais que o dobro de energia corresponde a mais de vinte ordens de grandeza de diferença na meia-vida.",
    "Núcleo do Sol: temperatura de cerca de 15 milhões de kelvin, energia térmica média da ordem de 1 a 2 keV por partícula, contra uma barreira coulombiana da ordem de centenas de keV a poucos MeV entre dois prótons."
  ]
},

flashcards: [
  { f: "O que é tunelamento quântico, em uma frase?", v: "É a probabilidade maior que zero de uma partícula ser encontrada do outro lado de uma barreira de energia potencial mais alta que sua energia cinética, algo impossível na física clássica." },
  { f: "Por que a função de onda não cai a zero instantaneamente dentro de uma barreira classicamente proibida?", v: "Porque, segundo a equação de Schrödinger, dentro da barreira a função de onda passa a decair de forma exponencial e suave com a distância, em vez de oscilar como faz fora dela. Um decaimento suave deixa uma amplitude pequena, mas não nula, se a barreira for fina o bastante." },
  { f: "De que duas grandezas da barreira depende exponencialmente o coeficiente de transmissão T?", v: "Da largura da barreira e da raiz quadrada da diferença entre a altura da barreira e a energia da partícula (multiplicada pela raiz quadrada da massa da partícula). T ≈ e elevado a menos duas vezes κ vezes L, onde κ cresce com massa e com a diferença de energia." },
  { f: "Quem explicou o decaimento alfa por tunelamento, e em que ano?", v: "George Gamow, de um lado, e Ronald Gurney com Edward Condon, do outro, publicaram a explicação de forma independente em 1928, tratando a partícula alfa como uma onda que tunela através da barreira coulombiana do núcleo." },
  { f: "O que é a lei de Geiger-Nuttall, e o que a teoria de Gamow acrescentou a ela?", v: "É a relação empírica, descrita em 1911, entre a energia da partícula alfa emitida e a meia-vida de decaimento de um isótopo. A teoria de Gamow, Gurney e Condon derivou essa relação a partir de primeiros princípios quânticos, mostrando que ela vem da sensibilidade exponencial da probabilidade de tunelamento à energia da partícula." },
  { f: "Como o microscópio de tunelamento de varredura usa o tunelamento para formar imagem?", v: "Uma ponta metálica fina se aproxima de uma superfície condutora a poucos angströns de distância. Uma corrente de elétrons tunela entre os dois, e essa corrente depende de forma exponencial da distância. Ao manter a corrente constante enquanto varre a ponta, o aparelho traça o relevo atômico da superfície." },
  { f: "Quem inventou o microscópio de tunelamento de varredura, e qual foi o reconhecimento recebido?", v: "Gerd Binnig e Heinrich Rohrer, no laboratório da IBM em Zurique, em 1981. Dividiram o Prêmio Nobel de Física de 1986 com Ernst Ruska, reconhecido pelo desenvolvimento anterior do microscópio eletrônico." },
  { f: "O que é um diodo de tunelamento, e quem o descobriu?", v: "Um componente eletrônico feito de uma junção p-n de semicondutor muito dopada, com região de depleção estreita o bastante para tunelamento apreciável de elétrons, o que gera resistência diferencial negativa. Descoberto por Leo Esaki em 1957, que dividiu o Nobel de Física de 1973 com Ivar Giaever e Brian Josephson." },
  { f: "Por que a temperatura do núcleo do Sol seria insuficiente, pela física clássica, para fundir hidrogênio?", v: "A energia térmica média por partícula no núcleo solar é da ordem de 1 a 2 keV, muito menor que a altura da barreira coulombiana entre dois prótons, da ordem de centenas de keV a poucos MeV. Sem tunelamento, a fração de colisões com energia suficiente para vencer a barreira classicamente seria desprezível." },
  { f: "O tunelamento sozinho explica a taxa observada de fusão no núcleo do Sol?", v: "Não completamente. Ele é necessário, mas a primeira etapa da cadeia próton-próton também depende da força nuclear fraca, que converte um próton em nêutron, processo raro por colisão independentemente do tunelamento. Os dois fatores combinados explicam por que o Sol queima de forma lenta e estável." },
  { f: "O que o experimento de Steinberg e colaboradores (2020) mediu, e com que técnica?", v: "Mediram um tempo de tunelamento de cerca de 0,61 milissegundo para átomos ultrafrios de rubídio-87 atravessando uma barreira, usando o relógio de Larmor: um campo magnético presente só na região da barreira faz o spin do átomo precessar a uma taxa conhecida, e o ângulo de precessão acumulado indica o tempo passado ali." },
  { f: "Por que a ideia de 'tunelamento mental' ou 'salto quântico de consciência' não tem respaldo físico?", v: "Porque a probabilidade de tunelamento cai exponencialmente com a massa do objeto e a distância envolvida. Um neurônio, uma sinapse ou um cérebro inteiro estão numa escala de massa e distância em que essa probabilidade é indistinguível de zero. Nenhum mecanismo físico plausível ou evidência experimental sustenta esse uso do termo." },
  { f: "Que tipo de tunelamento é consenso sólido em bioquímica, e qual é mais controverso?", v: "O tunelamento de elétrons entre centros redox, a distâncias de um a dois nanômetros dentro de proteínas de transporte de elétrons (respiração, fotossíntese), é consenso. Mais controversa é a magnitude da contribuição do tunelamento de prótons e hidrogênio para a velocidade de certas reações catalisadas por enzimas." }
],

prova: [
  { camada: "nucleo",
    q: "Uma partícula tem energia cinética menor do que a altura de uma barreira de energia potencial à sua frente. Segundo a mecânica quântica, o que pode acontecer?",
    alts: [
      "Nada: a partícula é sempre refletida, exatamente como a física clássica prevê.",
      "A partícula ganha energia extra ao tocar a barreira e passa a ter energia suficiente para segui-la.",
      "Existe uma probabilidade maior que zero de a partícula ser encontrada do outro lado da barreira, mesmo sem ganhar energia extra.",
      "A partícula sempre atravessa, com probabilidade igual a um, desde que a barreira tenha qualquer espessura."
    ],
    correta: 2,
    porque: "Esse é o tunelamento quântico: a função de onda decai de forma exponencial, mas não necessariamente a zero, dentro da região classicamente proibida, deixando uma amplitude não nula do outro lado se a barreira for fina o bastante. A energia da partícula não muda em nenhum momento do processo." },

  { camada: "nucleo",
    q: "Qual é a diferença entre dizer que algo é 'proibido pela física clássica' e dizer que é 'impossível na natureza'?",
    alts: [
      "Não há diferença: o que é proibido classicamente é sempre impossível.",
      "'Proibido classicamente' é uma propriedade de um modelo teórico específico; 'impossível na natureza' é uma afirmação sobre o mundo, e um modelo melhor pode autorizar o que o anterior proibia.",
      "'Impossível na natureza' é sempre uma afirmação mais fraca do que 'proibido classicamente'.",
      "A distinção só faz sentido em biologia, não em física."
    ],
    correta: 1,
    porque: "O tunelamento é exatamente um caso em que a física newtoniana proíbe um resultado, por energia cinética negativa não fazer sentido, e a mecânica quântica, um modelo mais completo e mais testado, autoriza esse resultado com uma probabilidade calculável." },

  { camada: "nucleo",
    q: "Qual quebra-cabeça da física nuclear o tunelamento resolveu em 1928?",
    alts: [
      "Por que os núcleos atômicos têm carga positiva.",
      "Por que partículas alfa, com energia menor que a barreira eletrostática do núcleo, ainda assim conseguem escapar dele, com meias-vidas que variam enormemente entre isótopos.",
      "Por que os elétrons não caem em direção ao núcleo.",
      "Por que a radioatividade libera calor."
    ],
    correta: 1,
    porque: "Gamow, Gurney e Condon mostraram que a partícula alfa tunela através da barreira eletrostática que a física clássica dizia ser intransponível, e que pequenas diferenças de energia produzem diferenças enormes de meia-vida por causa da sensibilidade exponencial da probabilidade de tunelamento." },

  { camada: "aprofundamento",
    q: "Dentro de uma barreira classicamente proibida, como a equação de Schrödinger independente do tempo se comporta, comparada a fora dela?",
    alts: [
      "A solução continua oscilatória, só que com amplitude maior.",
      "A solução deixa de oscilar e passa a ser dominada por uma exponencial real decrescente.",
      "A equação deixa de valer dentro da barreira e precisa ser substituída por outra.",
      "A solução se torna uma constante, sem dependência da posição."
    ],
    correta: 1,
    porque: "Fora da barreira, onde E é maior que V(x), a curvatura da função de onda produz soluções oscilatórias. Dentro da barreira, onde V(x) é maior que E, o sinal da curvatura se inverte e a solução física relevante passa a ser uma exponencial decrescente, o que produz o decaimento gradual da amplitude." },

  { camada: "aprofundamento",
    q: "De que forma o coeficiente de transmissão T depende da largura L de uma barreira retangular?",
    alts: [
      "De forma linear: T cai à metade quando L dobra.",
      "De forma exponencial: T ≈ e elevado a menos duas vezes κ vezes L, então pequenos aumentos em L reduzem T por fatores muito grandes.",
      "T não depende de L, apenas da altura da barreira.",
      "T cresce com L, porque barreiras mais largas dão mais tempo para a partícula atravessar."
    ],
    correta: 1,
    porque: "A dependência exponencial é o ponto central: dobrar a largura de uma barreira típica pode reduzir a probabilidade de tunelamento por fatores de milhares ou milhões, e é exatamente essa sensibilidade que faz o efeito ser importante em escala atômica e irrelevante em escala macroscópica." },

  { camada: "aprofundamento",
    q: "O que é o fator de Gamow, e a que ele se aplica?",
    alts: [
      "É a energia total liberada numa reação de fusão nuclear.",
      "É o resultado de aplicar a aproximação WKB a uma barreira coulombiana, usado para calcular a probabilidade de tunelamento em decaimento alfa e fusão nuclear, e que reproduz a lei de Geiger-Nuttall.",
      "É uma constante universal que substitui a constante de Planck em física nuclear.",
      "É o nome do aparelho usado por Gamow para medir radioatividade em laboratório."
    ],
    correta: 1,
    porque: "A aproximação WKB generaliza a fórmula de decaimento exponencial para barreiras que não são retangulares, como o potencial coulombiano. Aplicada ao decaimento alfa, essa integral reproduz a relação empírica entre energia da partícula alfa e meia-vida descrita por Geiger e Nuttall em 1911." },

  { camada: "aprofundamento",
    q: "Por que a corrente elétrica num microscópio de tunelamento de varredura é tão sensível à distância entre a ponta e a superfície?",
    alts: [
      "Porque a corrente segue a lei de Ohm normal, que já é sensível à distância.",
      "Porque a corrente de tunelamento depende exponencialmente da distância, o que faz variações de menos de um angström mudarem a corrente por um fator de dez.",
      "Porque a ponta toca fisicamente a superfície durante a varredura.",
      "Porque o campo magnético da Terra interfere na medição em curtas distâncias."
    ],
    correta: 1,
    porque: "É a mesma dependência exponencial da fórmula geral de tunelamento que torna o instrumento tão sensível: pequenas mudanças na largura efetiva da barreira de vácuo produzem grandes mudanças na corrente, permitindo resolução atômica ao manter a corrente constante durante a varredura." },

  { camada: "aprofundamento",
    q: "Qual afirmação descreve com precisão o papel do tunelamento na fusão nuclear no núcleo do Sol?",
    alts: [
      "O tunelamento explica sozinho e completamente a taxa observada de fusão solar.",
      "O tunelamento é necessário para que a fusão ocorra à temperatura do núcleo solar, mas a taxa observada também depende da raridade da conversão de próton em nêutron pela força nuclear fraca.",
      "O tunelamento não tem papel relevante na fusão solar; a temperatura do núcleo já é suficiente classicamente.",
      "O tunelamento só ocorre em elementos pesados, não em prótons no núcleo do Sol."
    ],
    correta: 1,
    porque: "A energia térmica do núcleo solar é pequena demais, classicamente, para vencer a barreira coulombiana entre prótons, o que torna o tunelamento indispensável. Mas a primeira etapa da cadeia próton-próton depende também da força fraca, um processo raro por colisão à parte do tunelamento, e são os dois fatores juntos que explicam a taxa lenta e estável observada." },

  { camada: "extensao",
    q: "O que o efeito Hartman (1962) sugeriu sobre barreiras muito espessas, e como esse resultado é interpretado hoje?",
    alts: [
      "Que partículas nunca atravessam barreiras espessas, o que tornaria o tunelamento impossível acima de certa largura.",
      "Que o tempo de fase de tunelamento parava de crescer com a espessura da barreira, o que sugeria velocidade efetiva maior que a da luz; hoje entende-se que isso não permite transmitir informação mais rápido que a luz, porque a amplitude transmitida é extremamente reduzida.",
      "Que a velocidade da luz muda dentro de barreiras de tunelamento.",
      "Que barreiras espessas sempre refletem cem por cento das partículas incidentes."
    ],
    correta: 1,
    porque: "O efeito Hartman é real e gerou décadas de discussão sobre o significado físico do tempo de tunelamento. A resolução aceita preserva a causalidade: o resultado descreve a deformação de um pacote de onda, não o deslocamento de um sinal capaz de carregar informação de forma mais rápida que a luz." },

  { camada: "extensao",
    q: "O que o experimento de Ramos, Spierings, Racicot e Steinberg (2020) mediu, e qual foi um resultado central?",
    alts: [
      "Mediram a massa do fóton usando tunelamento, e encontraram um valor não nulo.",
      "Mediram, usando um relógio de Larmor com átomos ultrafrios de rubídio-87, um tempo de travessia de barreira finito e não nulo, de cerca de 0,61 milissegundo na energia mais baixa testada.",
      "Provaram que o tunelamento é instantâneo, resolvendo de vez o debate sobre tempo de tunelamento.",
      "Mostraram que elétrons tunelam mais rápido do que átomos, contrariando a teoria."
    ],
    correta: 1,
    porque: "O relógio de Larmor usa a precessão do spin do átomo dentro da região da barreira, sujeita a um campo magnético local, como indicador de tempo. O resultado foi um tempo de travessia finito e mensurável, mas a interpretação física exata do que esse tempo representa continua sendo discutida, não foi 'resolvida de vez'." },

  { camada: "extensao",
    q: "Por que expressões como 'tunelamento mental' ou 'saltos quânticos de consciência', usadas em autoajuda, não são extensões legítimas do conceito físico de tunelamento?",
    alts: [
      "Porque tunelamento só pode ocorrer em temperaturas próximas do zero absoluto.",
      "Porque a probabilidade de tunelamento cai exponencialmente com a massa do objeto e a distância envolvida, tornando qualquer efeito desse tipo em escala de neurônio ou cérebro inteiro indistinguível de zero, sem mecanismo físico proposto ou evidência experimental.",
      "Porque a palavra 'quântico' é proibida por lei em contextos não científicos.",
      "Porque a mecânica quântica só se aplica a partículas carregadas eletricamente."
    ],
    correta: 1,
    porque: "O próprio conteúdo matemático do tunelamento, a dependência exponencial da massa e da distância, é o que torna essas alegações fisicamente inviáveis, não apenas não comprovadas. É diferente de dizer que ainda não foi medido: o cálculo já diz que o efeito seria desprezível a essa escala." }
],

fontes: [
  { n: 1, tipo: "fonte primária", ref: "Gamow, G. 'Zur Quantentheorie des Atomkernes'. <em>Zeitschrift für Physik</em> 51(3-4):204-212, 1928. Primeira explicação teórica do decaimento alfa por tunelamento.", url: "https://doi.org/10.1007/BF01343196" },
  { n: 2, tipo: "fonte primária", ref: "Gurney, R. W. &amp; Condon, E. U. 'Wave Mechanics and Radioactive Disintegration'. <em>Nature</em> 122:439, 1928. Publicação independente e quase simultânea à de Gamow.", url: "https://doi.org/10.1038/122439a0" },
  { n: 3, tipo: "fonte primária", ref: "Gurney, R. W. &amp; Condon, E. U. 'Quantum Mechanics and Radioactive Disintegration'. <em>Physical Review</em> 33(2):127-140, 1929. Versão estendida do argumento de Gurney e Condon.", url: "https://doi.org/10.1103/PhysRev.33.127" },
  { n: 4, tipo: "fonte primária", ref: "Geiger, H. &amp; Nuttall, J. M. 'The ranges of the α particles from various radioactive substances and a relation between range and period of transformation'. <em>Philosophical Magazine</em> Series 6, 22(130):613-621, 1911. A relação empírica que a teoria de Gamow, Gurney e Condon explicou dezessete anos depois.", url: "https://doi.org/10.1080/14786441008637156" },
  { n: 5, tipo: "fonte primária", ref: "The Nobel Prize in Physics 1986. NobelPrize.org. Prêmio dividido entre Ernst Ruska (microscópio eletrônico) e Gerd Binnig e Heinrich Rohrer (microscópio de tunelamento de varredura).", url: "https://www.nobelprize.org/prizes/physics/1986/summary/" },
  { n: 6, tipo: "fonte primária", ref: "Binnig, G., Rohrer, H., Gerber, Ch. &amp; Weibel, E. 'Surface Studies by Scanning Tunneling Microscopy'. <em>Physical Review Letters</em> 49(1):57-61, 1982. Artigo original que apresenta o instrumento.", url: "https://doi.org/10.1103/PhysRevLett.49.57" },
  { n: 7, tipo: "fonte primária", ref: "The Nobel Prize in Physics 1973. NobelPrize.org. Prêmio dividido entre Leo Esaki e Ivar Giaever, por descobertas experimentais de tunelamento em semicondutores e supercondutores, e Brian Josephson, pela previsão teórica do tunelamento de pares de Cooper.", url: "https://www.nobelprize.org/prizes/physics/1973/summary/" },
  { n: 8, tipo: "fonte primária", ref: "Esaki, L. 'New Phenomenon in Narrow Germanium p-n Junctions'. <em>Physical Review</em> 109(2):603-604, 1958. Descoberta original do efeito de tunelamento que originou o diodo Esaki.", url: "https://doi.org/10.1103/PhysRev.109.603" },
  { n: 9, tipo: "fonte primária", ref: "Ramos, R., Spierings, D., Racicot, I. &amp; Steinberg, A. M. 'Measurement of the time spent by a tunnelling atom within the barrier region'. <em>Nature</em> 583:529-532, 2020. Medição do tempo de tunelamento com relógio de Larmor em átomos ultrafrios.", url: "https://doi.org/10.1038/s41586-020-2490-7" },
  { n: 10, tipo: "fonte primária", ref: "Hartman, T. E. 'Tunneling of a Wave Packet'. <em>Journal of Applied Physics</em> 33(12):3427-3433, 1962. Origem do efeito Hartman sobre o tempo de fase em barreiras espessas.", url: "https://doi.org/10.1063/1.1702424" },
  { n: 11, tipo: "fonte primária", ref: "Bethe, H. A. 'Energy Production in Stars'. <em>Physical Review</em> 55(5):434-456, 1939. Base teórica moderna da fusão nuclear estelar, incluindo o papel do tunelamento e da força fraca na cadeia próton-próton.", url: "https://doi.org/10.1103/PhysRev.55.434" },
  { n: 12, tipo: "referência", ref: "Nave, C. R. 'Alpha Particle Tunneling'. HyperPhysics, Georgia State University. Exemplo numérico de cálculo de meia-vida por tunelamento para o polônio-212.", url: "http://hyperphysics.phy-astr.gsu.edu/hbase/Nuclear/alptun2.html" },
  { n: 13, tipo: "revisão", ref: "Kohen, A. &amp; Klinman, J. P. 'Hydrogen tunneling in biology'. <em>Chemistry &amp; Biology</em> 6(7):R191-R198, 1999. Revisão inicial da hipótese de tunelamento de hidrogênio em catálise enzimática.", url: "https://doi.org/10.1016/S1074-5521(99)80058-1" },
  { n: 14, tipo: "revisão", ref: "Klinman, J. P. &amp; Kohen, A. 'Hydrogen Tunneling Links Protein Dynamics to Enzyme Catalysis'. <em>Annual Review of Biochemistry</em> 82:471-496, 2013. Revisão mais recente e mais cautelosa sobre magnitude do efeito.", url: "https://doi.org/10.1146/annurev-biochem-051710-133623" },
  { n: 15, tipo: "fonte primária", ref: "Moser, C. C., Keske, J. M., Warncke, K., Farid, R. S. &amp; Dutton, P. L. 'Nature of biological electron transfer'. <em>Nature</em> 355:796-802, 1992. Base do consenso sobre tunelamento de elétrons em cadeias de transporte biológico.", url: "https://doi.org/10.1038/355796a0" },
  { n: 16, tipo: "artigo de opinião", ref: "Stenger, V. J. 'Quantum Quackery'. <em>Skeptical Inquirer</em> 21(1), 1997. Crítica ao uso indevido de vocabulário quântico em pseudociência e autoajuda.", url: "https://skepticalinquirer.org/1997/01/quantum-quackery/" },
  { n: 17, tipo: "livro-texto", ref: "Griffiths, D. J. &amp; Schroeter, D. F. <em>Introduction to Quantum Mechanics</em>, 3ª edição. Cambridge University Press, 2018. Tratamento padrão da equação de Schrödinger, barreiras de potencial e coeficiente de transmissão.", url: "https://doi.org/10.1017/9781316995433" },
  { n: 18, tipo: "referência", ref: "'Uranium-238'. Wikipedia. Dados de meia-vida e energia de decaimento alfa usados no exemplo numérico de sensibilidade exponencial.", url: "https://en.wikipedia.org/wiki/Uranium-238" }
]
};
