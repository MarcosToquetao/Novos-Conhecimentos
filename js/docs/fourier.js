CONTEUDOS["fourier"] = {
termo: "Transformada de Fourier",
area: "Matemática",
subtitulo: "A ideia de que qualquer coisa que oscila pode ser escrita como uma soma de coisas que oscilam de forma simples, e por que isso reorganizou a engenharia, a física e a biologia estrutural.",
prerequisitos: [
  "Saber o que é uma função seno e que ela tem frequência e amplitude. Nada além disso é necessário no núcleo.",
  "Para o aprofundamento: noção de integral como 'área acumulada' e de número complexo como ponto no plano."
],
conexoes: [
  { termo: "Entropia de Shannon e compressão", relacao: "MP3 e JPEG só funcionam porque a informação perceptualmente irrelevante fica visível no domínio da frequência." },
  { termo: "Efeito Doppler", relacao: "Deslocamento de frequência só é um conceito operacional se você tem uma forma de medir frequência num sinal real." },
  { termo: "Decomposição em valores singulares", relacao: "Ambas são mudanças de base que revelam estrutura escondida; Fourier é a base fixa, SVD é a base aprendida dos dados." },
  { termo: "Caos determinístico", relacao: "O espectro de potência é a primeira ferramenta para distinguir um sinal periódico de um caótico." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Em 1807, Joseph Fourier entregou à Academia de Ciências de Paris um trabalho sobre um problema mundano: como o calor se espalha dentro de uma barra de metal. O trabalho foi rejeitado. Lagrange, Laplace e Legendre, três dos maiores matemáticos da época, estavam na banca. Lagrange objetou a uma afirmação que Fourier fazia de passagem e que parecia absurda: que <em>qualquer</em> função, inclusive uma com quinas e saltos, pode ser escrita como uma soma de senos e cossenos, que são as curvas mais suaves que existem.<sup class="cit"><a href="#f1">1</a></sup></p>

<p>Fourier estava errado na formulação exata (o "qualquer" precisava de condições) e certo no que importava. Quinze anos depois publicou o resultado como livro,<sup class="cit"><a href="#f2">2</a></sup> e a ideia se tornou uma das ferramentas mais usadas da ciência aplicada. Vale a pena entender por quê, e o motivo não é matemático: é conceitual.</p>

<h3>A ideia central em uma frase</h3>

<p>Um som complicado, uma imagem, um sinal de rádio, a vibração de uma ponte: todos podem ser reconstruídos somando oscilações puras de frequências diferentes, cada uma com sua intensidade e seu atraso. A transformada de Fourier é o procedimento que descobre <em>quais</em> oscilações puras estão lá dentro e <em>com que peso</em>.</p>

<figure class="figura">[[FIG:fourier-decomp]]<figcaption>Uma onda quadrada, toda quina e nada de suave, sendo construída a partir de senos. Com 1 termo você tem só uma ondulação. Com 3, algo já parece um degrau. Com 9, o degrau está quase lá. Essas curvas foram calculadas, não desenhadas: são as somas parciais reais da série.</figcaption></figure>

<p>A metáfora que costuma ser usada é o prisma. Luz branca entra, e do outro lado saem as cores separadas. O prisma não <em>acrescenta</em> as cores: elas já estavam lá, misturadas, e o prisma apenas as organizou por frequência. A transformada de Fourier faz o mesmo com qualquer sinal.</p>

<div class="marca controverso">
<span class="rot">Onde a metáfora do prisma engana</span>
<p>O prisma sugere que a decomposição é um fato físico sobre a luz. Não é o caso da transformada. Decompor em senos é uma <em>escolha</em> de sistema de coordenadas, não uma descoberta sobre a natureza do sinal. Você poderia decompor o mesmo sinal em ondaletas (wavelets), em polinômios de Chebyshev ou em qualquer outra base. Senos venceram porque têm uma propriedade especial que a próxima seção explica, não porque são "o que o sinal realmente é".</p>
</div>

<h3>Dois retratos do mesmo objeto</h3>

<p>Pense num acorde tocado ao piano. Um microfone registra uma única curva ondulada: pressão do ar em função do tempo. Essa curva contém tudo, mas não responde diretamente à pergunta "quais notas foram tocadas?". A transformada devolve outro retrato do mesmo evento: quais frequências estão presentes e com que força.</p>

<figure class="figura">[[FIG:fourier-dominios]]<figcaption>Em cima, o sinal como o tempo o entrega. Embaixo, o mesmo sinal como frequências. Nenhuma informação foi perdida nem criada: são duas coordenadas do mesmo ponto. A transformada inversa reconstrói o de cima a partir do de baixo, exatamente.</figcaption></figure>

<p>O ponto que costuma passar despercebido é este: <strong>não há perda</strong>. As duas representações são equivalentes, e você pode ir e voltar entre elas quantas vezes quiser. É o mesmo sinal, escrito em outra língua, não um resumo dele.</p>

<h3>Por que isso é útil, e não apenas elegante</h3>

<p>A utilidade vem de um padrão que se repete em toda a ciência aplicada: <strong>operações difíceis num domínio ficam triviais no outro</strong>. Filtrar ruído é o exemplo mais direto: no domínio do tempo, separar o chiado de 8 kHz da voz é um problema espinhoso, mas no domínio da frequência é uma tesoura, basta apagar a coluna de 8 kHz e voltar. Comprimir funciona pelo mesmo caminho: o ouvido humano não distingue certos detalhes de alta frequência, e o olho ainda menos, então MP3 e JPEG transformam, descartam o que a percepção não usa e guardam o resto; a compressão não acontece no sinal original, acontece no espectro. Resolver equações diferenciais também muda de categoria: derivar, no domínio da frequência, vira multiplicar por um número. Foi por isso que Fourier chegou a tudo isso: ele queria resolver a equação do calor, e a transformada converteu uma equação diferencial numa conta de multiplicação. E há a estrutura que fica invisível no domínio original: um sinal biológico que parece ruído pode revelar um pico limpo em 1 ciclo por 24 horas, o que equivale a detectar um ritmo circadiano sem saber que se estava procurando por ele.</p>

<h3>O caso mais bonito: você já viu uma transformada de Fourier</h3>

<p>Quando raios X atravessam um cristal, o padrão de manchas que aparece no detector <em>é</em>, com boa aproximação, a transformada de Fourier da distribuição de densidade eletrônica do cristal.<sup class="cit"><a href="#f3">3</a></sup> A natureza faz a transformada; o cristalógrafo precisa apenas fazer a inversa para recuperar a estrutura da molécula. A imagem 51 de Rosalind Franklin, que mostrou a hélice do DNA, é literalmente um espectro de Fourier: o padrão em X é a assinatura de uma hélice no domínio da frequência espacial.</p>

<div class="marca consenso">
<span class="rot">Consenso estabelecido</span>
<p>Que sinais razoavelmente bem-comportados admitem representação por senos e cossenos, e que a transformada é inversível, é matemática rigorosamente demonstrada desde o século XIX. Não há disputa. As controvérsias reais estão em <em>quando</em> usar essa representação, não em se ela existe.</p>
</div>

<h3>O que segurar antes de seguir</h3>

<p>Se você fechar o texto aqui, o essencial é isto: transformar é mudar de coordenadas, não resumir. A utilidade vem de multiplicar, filtrar e derivar mudarem de dificuldade conforme o domínio. E senos não são a única base possível; a próxima camada mostra por que eles ganharam.</p>
` },

aprofundamento: { minutos: 15, html: `
<h3>A fórmula, símbolo por símbolo</h3>

<p>A transformada de Fourier de um sinal contínuo costuma ser escrita assim:</p>

<div class="formula">
F(ξ) = ∫ f(t) · e<sup>−2πiξt</sup> dt
<span class="leg">integral sobre todo o eixo do tempo</span>
</div>

<p>Traduzindo cada parte:</p>

<ul>
<li><strong>f(t)</strong> é o sinal original: pressão sonora, voltagem, intensidade luminosa, em função do tempo.</li>
<li><strong>ξ</strong> (a letra grega csi) é a frequência que você está testando: "quanto de oscilação a 440 Hz existe aqui dentro?".</li>
<li><strong>e<sup>−2πiξt</sup></strong> é a peça central. Pela identidade de Euler, essa expressão equivale a cos(2πξt) − i·sen(2πξt): é um ponto girando no círculo unitário com frequência ξ. É a "onda de teste".</li>
<li><strong>A integral</strong> é uma soma contínua. Ela mede o quanto o sinal e a onda de teste "andam juntos" ao longo de todo o tempo.</li>
<li><strong>F(ξ)</strong> é um número complexo. Seu módulo diz a amplitude daquela frequência; seu ângulo diz a fase, isto é, o atraso.</li>
</ul>

<h3>A intuição que realmente importa: enrolar o sinal</h3>

<p>Existe uma leitura geométrica que dispensa manipulação algébrica. Imagine pegar o gráfico do sinal e <em>enrolá-lo</em> em torno de um ponto, a uma velocidade angular que você escolhe. Depois calcule onde fica o centro de massa dessa figura enrolada.</p>

<p>Quando a velocidade de enrolamento é qualquer uma, os picos do sinal caem espalhados pelo círculo, e o centro de massa fica perto da origem: resultado próximo de zero. Mas quando a velocidade de enrolamento coincide com uma frequência que existe no sinal, todos os picos caem alinhados do mesmo lado, e o centro de massa dispara para longe da origem. A transformada é exatamente esse centro de massa em função da velocidade de enrolamento.<sup class="cit"><a href="#f4">4</a></sup></p>

<p>Isso explica por que senos e exponenciais complexas venceram como base: elas são as <strong>autofunções da derivada</strong> e das operações de deslocamento. Derivar e<sup>iωt</sup> devolve o mesmo e<sup>iωt</sup> multiplicado por iω. Nenhuma outra família de funções tem essa propriedade tão limpa: é isso que converte cálculo em aritmética.</p>

<h3>A regra de ouro: convolução vira multiplicação</h3>

<div class="formula">
F{ f ∗ g } = F{f} · F{g}
<span class="leg">a operação mais cara do domínio do tempo é a mais barata do domínio da frequência</span>
</div>

<p>Convolução é o que acontece quando um sinal atravessa um sistema físico: uma sala com eco, uma lente desfocada, um filtro eletrônico. É uma operação computacionalmente pesada. No domínio da frequência ela vira multiplicação ponto a ponto. Praticamente todo processamento de sinal e imagem em produção explora esse teorema.</p>

<h3>O preço: você não pode ter as duas coisas</h3>

<p>Há um limite que não é técnico, é matemático. Um sinal muito localizado no tempo tem espectro necessariamente espalhado, e vice-versa. Uma nota tocada por um instante muito curto não tem altura bem definida, e isso não é limitação do equipamento: é uma propriedade da representação.</p>

<div class="formula">
Δt · Δξ ≥ 1 / 4π
<span class="leg">princípio da incerteza, na sua forma puramente matemática</span>
</div>

<div class="marca consenso">
<span class="rot">Consenso estabelecido, com uma confusão comum</span>
<p>Este é o <em>mesmo</em> teorema matemático que aparece na mecânica quântica como princípio da incerteza de Heisenberg. A diferença é interpretativa, não formal: em mecânica quântica, posição e momento são pares de Fourier porque a função de onda é definida assim. Confundir a matemática (um fato sobre pares de transformadas) com a física (uma afirmação sobre o que pode ser medido) é um erro frequente em textos de divulgação.</p>
</div>

<h3>Do contínuo ao computador: DFT, FFT e amostragem</h3>

<p>Um computador não vê funções contínuas: vê listas de números amostrados. A versão discreta, a DFT, calcula o mesmo conceito para N amostras. O problema é o custo: feita ingenuamente, ela exige da ordem de N² operações. Para um segundo de áudio a 44,1 kHz, isso é cerca de 2 bilhões de operações.</p>

<p>Em 1965, Cooley e Tukey publicaram um algoritmo que reduz isso a N·log N (de 2 bilhões para cerca de 700 mil operações).<sup class="cit"><a href="#f5">5</a></sup> É a FFT. Sem ela, praticamente nada do processamento digital de sinais existiria na forma atual. O algoritmo já havia sido descoberto por Gauss em 1805 e ficou esquecido por 160 anos, o que é um bom lembrete de como o conhecimento se perde.</p>

<p>Amostrar tem uma condição: se você medir menos que duas vezes por ciclo da frequência mais alta presente, frequências altas se disfarçam de baixas irreversivelmente. É o <em>aliasing</em>, a razão pela qual rodas de carroça giram para trás no cinema e pela qual áudio digital de qualidade usa 44,1 kHz para representar até 22 kHz.</p>
` },

extensao: { minutos: 30, html: `
<h3>A objeção de Lagrange estava certa</h3>

<p>Vale voltar ao ponto de partida, porque a história raramente é contada com honestidade. Lagrange não era um velho teimoso: ele identificou um problema real. Somar infinitas funções contínuas e obter uma função descontínua exige definir com precisão o que "somar infinitas coisas" significa, e essa definição não existia em 1807. Levou o século XIX inteiro, com Dirichlet, Riemann e Lebesgue, para tornar rigoroso o que Fourier havia afirmado por intuição física.</p>

<p>Dirichlet, em 1829, deu as primeiras condições suficientes para a convergência. A teoria moderna reformula tudo em termos de espaços L²: a série converge <em>em média quadrática</em>, o que é mais fraco do que convergir ponto a ponto, mas é exatamente o que engenharia e física precisam.</p>

<h3>O fenômeno de Gibbs: um erro que não some</h3>

<figure class="figura">[[FIG:fourier-gibbs]]<figcaption>Aproximação de um salto com 9 e com 49 harmônicos. A largura do erro encolhe. A altura do pico, não: ela estaciona em cerca de 9% do salto e permanece lá para sempre.</figcaption></figure>

<p>Perto de uma descontinuidade, as somas parciais sempre ultrapassam o valor correto. Aumentar o número de termos estreita a região do erro, mas não reduz a altura do sobressinal, que converge para aproximadamente 8,95% da altura do salto.<sup class="cit"><a href="#f6">6</a></sup></p>

<p>Isso tem consequência prática direta: filtros aplicados de forma abrupta no domínio da frequência produzem oscilações em torno de bordas na imagem reconstruída. Em ressonância magnética isso aparece como <em>ringing artifact</em>; em áudio, como um "pré-eco". Por isso, na prática, se usam janelas suaves em vez de cortes retos.</p>

<div class="marca controverso">
<span class="rot">Ponto frequentemente mal compreendido</span>
<p>O fenômeno de Gibbs é às vezes descrito como "falha da série de Fourier". Não é. A série converge corretamente no sentido L², e converge para o valor médio nos pontos de salto. O que não converge <em>uniformemente</em> é a sequência de somas parciais. A diferença entre modos de convergência não é preciosismo: é o que separa uma expectativa correta de uma incorreta sobre o que o algoritmo vai devolver.</p>
</div>

<h3>Onde Fourier é a ferramenta errada</h3>

<p>A transformada clássica pressupõe <strong>estacionariedade</strong>: que o conteúdo de frequência não muda ao longo do tempo. Ela integra sobre todo o eixo temporal e devolve um retrato global. Para uma nota sustentada de órgão isso é perfeito. Para fala, música, sismogramas, ECG ou qualquer coisa em que o interesse é justamente <em>quando</em> cada frequência aparece, é inadequado.</p>

<p>As respostas construídas para isso:</p>

<div class="tabela-env">
<table>
<thead><tr><th>Método</th><th>Ideia</th><th>Limitação</th></tr></thead>
<tbody>
<tr><td>STFT / espectrograma</td><td>Aplicar Fourier em janelas curtas e deslizantes</td><td>Resolução fixa: janela curta perde precisão em frequência, janela longa perde no tempo</td></tr>
<tr><td>Ondaletas (wavelets)</td><td>Base com resolução adaptativa: fina no tempo para altas frequências, fina em frequência para baixas</td><td>Escolha da ondaleta-mãe é arbitrária e afeta o resultado</td></tr>
<tr><td>Transformada de Hilbert-Huang</td><td>Decomposição empírica adaptada ao próprio sinal</td><td>Método sem fundamentação teórica completa; reprodutibilidade discutida</td></tr>
</tbody>
</table>
</div>

<div class="marca emergente">
<span class="rot">Abordagem emergente</span>
<p>Redes neurais que aprendem a base de decomposição diretamente dos dados (em vez de assumir senos) têm superado métodos clássicos em algumas tarefas de áudio e imagem. O ganho é real e mensurável; o custo é a perda de interpretabilidade: a base aprendida raramente tem significado físico, e isso importa quando o objetivo é entender um sistema, não apenas prever sua saída.</p>
</div>

<h3>Uma armadilha estatística: espectros de ruído</h3>

<p>Aplicar uma FFT a qualquer série temporal sempre produz picos. Ruído branco gera um espectro plano <em>em média</em>, mas qualquer realização finita tem flutuações que parecem picos. Interpretar um pico do periodograma como "periodicidade descoberta" sem teste estatístico é um erro clássico.</p>

<p>Historicamente isso produziu literatura inteira sobre ciclos econômicos, climáticos e biológicos que não sobreviveram a testes de significância adequados. Duas salvaguardas mínimas: comparar o pico contra a distribuição esperada sob a hipótese nula de ruído (frequentemente ruído vermelho, não branco, em séries naturais) e corrigir para o fato de que você está testando muitas frequências simultaneamente.</p>

<div class="marca controverso">
<span class="rot">Controvérsia metodológica real</span>
<p>Em análise de séries temporais biológicas, como expressão gênica circadiana, há disputa ativa sobre quais métodos de detecção de periodicidade controlam adequadamente o erro tipo I. Estudos comparativos mostram que diferentes algoritmos aplicados aos mesmos dados produzem listas de genes rítmicos que se sobrepõem muito menos do que se esperaria. O problema não é a transformada: é o teste de significância construído em cima dela.</p>
</div>

<h3>Fechando o círculo: o que a transformada realmente é</h3>

<p>Em linguagem de álgebra linear, a transformada de Fourier é uma <strong>mudança de base num espaço vetorial de funções</strong>. Os senos e cossenos formam uma base ortonormal; o valor F(ξ) é a projeção do sinal sobre o elemento de base de frequência ξ. Ir e voltar entre domínios é trocar de sistema de coordenadas, do mesmo modo que descrever um ponto por coordenadas cartesianas ou polares.</p>

<p>Essa formulação torna óbvio o que a intuição do prisma esconde: <strong>não existe base privilegiada</strong>. A base de Fourier é ótima para sistemas invariantes no tempo, e sistemas físicos lineares em geral são assim, o que explica seu domínio. Quando essa hipótese cai, a base perde sua vantagem e outra representação passa a fazer mais sentido. Antes de aplicar a transformada, vale checar se o sistema em questão é de fato invariante no tempo: essa checagem decide se o resultado tem interpretação física ou não.</p>
` }
},

flashcards: [
  { f: "Qual é a afirmação central da análise de Fourier?", v: "Que sinais bem-comportados podem ser escritos como soma de oscilações puras (senos e cossenos) de frequências diferentes, cada uma com amplitude e fase próprias, e que essa representação é inversível, sem perda de informação." },
  { f: "Por que passar para o domínio da frequência é útil na prática?", v: "Porque operações caras ou difíceis num domínio ficam baratas no outro: filtrar vira apagar colunas, convolução vira multiplicação ponto a ponto e derivar vira multiplicar por iω." },
  { f: "O que diz o teorema da convolução?", v: "Que a transformada de uma convolução é o produto das transformadas. É a base computacional de quase todo processamento de sinal e imagem." },
  { f: "Por que exponenciais complexas são a base 'certa' para sistemas físicos lineares?", v: "Porque são autofunções da derivada e do deslocamento: derivar e^(iωt) devolve a mesma função vezes iω. Isso converte equações diferenciais em equações algébricas." },
  { f: "O que é o princípio da incerteza na versão matemática?", v: "A impossibilidade de um sinal ser simultaneamente muito concentrado no tempo e muito concentrado em frequência. É um fato sobre pares de transformadas, do qual a versão quântica é um caso particular." },
  { f: "O que a FFT resolveu, e qual o ganho?", v: "Reduziu o custo da transformada discreta de N² para N·log N (Cooley e Tukey, 1965). Para 44.100 amostras, cerca de 2 bilhões de operações caem para ~700 mil." },
  { f: "O que é o fenômeno de Gibbs?", v: "O sobressinal de cerca de 9% da altura do salto que aparece perto de descontinuidades e não desaparece por mais termos que se acrescente: só fica mais estreito." },
  { f: "Quando a transformada de Fourier clássica é a ferramenta errada?", v: "Quando o sinal é não estacionário, isto é, quando o conteúdo de frequência muda ao longo do tempo. Ela devolve um retrato global e perde o 'quando'. Alternativas: STFT/espectrograma e ondaletas." },
  { f: "Qual é o erro estatístico clássico ao usar FFT em séries temporais?", v: "Interpretar picos do periodograma como periodicidade real sem testar contra a hipótese nula de ruído e sem corrigir para múltiplas frequências testadas. Ruído gera picos aparentes." },
  { f: "Em uma frase de álgebra linear, o que é a transformada de Fourier?", v: "Uma mudança de base num espaço de funções: os senos e cossenos formam base ortonormal, e F(ξ) é a projeção do sinal sobre o elemento de frequência ξ." }
],

prova: [
  { camada: "nucleo",
    q: "Um colega afirma: 'a transformada de Fourier resume o sinal, ficando com o que é mais importante'. Qual é o problema dessa afirmação?",
    alts: [
      "Nenhum: é exatamente o que ela faz, descartando as frequências fracas.",
      "A transformada não descarta nada: é uma representação equivalente e inversível do mesmo sinal; o descarte é uma decisão posterior e separada.",
      "O problema é que ela guarda apenas as frequências, perdendo a informação de fase.",
      "O problema é que ela só funciona para sinais periódicos, então não 'resume' nada."
    ],
    correta: 1,
    porque: "A transformada é uma mudança de coordenadas: nada é perdido nem criado, e a transformada inversa reconstrói o sinal exatamente. Compressão (MP3, JPEG) descarta informação, mas isso é um passo adicional tomado <em>depois</em> da transformada, não parte dela. A alternativa sobre fase é falsa: F(ξ) é complexo, e o ângulo carrega justamente a fase." },

  { camada: "nucleo",
    q: "Por que a filtragem de ruído é mais simples no domínio da frequência?",
    alts: [
      "Porque o ruído tem sempre amplitude menor que o sinal, então basta cortar valores pequenos.",
      "Porque no domínio da frequência o sinal fica mais curto, exigindo menos cálculos.",
      "Porque componentes que estão misturados ao longo de todo o tempo aparecem separados por frequência, e remover um deles vira uma operação local.",
      "Porque a transformada elimina automaticamente componentes aleatórios."
    ],
    correta: 2,
    porque: "O ganho é de separabilidade, não de tamanho nem de magnitude. Um chiado de 8 kHz está entrelaçado com a voz em cada instante do sinal temporal, mas ocupa uma região distinta do espectro. A alternativa sobre amplitude é uma heurística que falha sempre que o ruído é forte." },

  { camada: "nucleo",
    q: "O padrão de difração de raios X de um cristal é descrito no texto como um caso especial. Por quê?",
    alts: [
      "Porque a natureza executa fisicamente a transformada, e o cristalógrafo precisa apenas aplicar a inversa para recuperar a estrutura.",
      "Porque cristais são os únicos objetos cuja estrutura é periódica o bastante para admitir análise de Fourier.",
      "Porque raios X são a única radiação cuja frequência pode ser medida diretamente.",
      "Porque a difração produz o espectro de potência, que é mais informativo que a transformada completa."
    ],
    correta: 0,
    porque: "O padrão de manchas é, com boa aproximação, a transformada de Fourier da densidade eletrônica do cristal. A alternativa sobre 'únicos objetos periódicos' é falsa, e a última inverte a realidade: a difração mede intensidades e <em>perde</em> a fase, o chamado problema da fase, que é justamente a maior dificuldade da cristalografia." },

  { camada: "aprofundamento",
    q: "Na expressão e^(−2πiξt), qual é o papel dessa exponencial complexa?",
    alts: [
      "Garantir que o resultado seja sempre um número real positivo.",
      "Ser uma onda de teste que gira a uma frequência escolhida, permitindo medir o quanto o sinal 'anda junto' com aquela frequência.",
      "Normalizar a integral para que a área total seja igual a 1.",
      "Converter o sinal do domínio contínuo para o discreto."
    ],
    correta: 1,
    porque: "Pela identidade de Euler, ela equivale a cos − i·sen: um ponto girando no círculo unitário à frequência ξ. A integral do produto mede a correlação entre o sinal e essa onda de teste. O resultado, aliás, é complexo, não real positivo, e é justamente isso que permite carregar amplitude e fase simultaneamente." },

  { camada: "aprofundamento",
    q: "Qual é a consequência prática mais importante do teorema da convolução?",
    alts: [
      "Permite comprimir arquivos sem perda de qualidade.",
      "Garante que a transformada é inversível.",
      "Transforma a operação computacionalmente cara de convolução em uma multiplicação ponto a ponto no domínio da frequência.",
      "Permite calcular a transformada de sinais infinitos."
    ],
    correta: 2,
    porque: "Convolução, o que acontece quando um sinal atravessa um sistema físico, é cara no domínio do tempo. O teorema permite transformar, multiplicar e voltar, o que junto com a FFT torna a operação viável em tempo real. A inversibilidade é um resultado separado, e a compressão sem perda não decorre daqui." },

  { camada: "aprofundamento",
    q: "Um pesquisador amostra um sinal que contém componentes de até 30 kHz usando uma taxa de 40 mil amostras por segundo. O que acontece?",
    alts: [
      "Nada de especial: 40 mil amostras por segundo é mais do que suficiente para 30 kHz.",
      "As componentes acima de 20 kHz aparecem disfarçadas como frequências mais baixas, de forma irreversível.",
      "As componentes acima de 20 kHz simplesmente somem do registro, sem afetar o resto.",
      "O sinal fica com ruído aleatório uniforme adicionado em todas as frequências."
    ],
    correta: 1,
    porque: "É aliasing. A condição de amostragem exige mais de duas amostras por ciclo da frequência mais alta presente: 40 kHz cobre até 20 kHz. Acima disso, as componentes não desaparecem: elas se dobram sobre frequências baixas e se tornam indistinguíveis do conteúdo legítimo. Por isso filtros anti-aliasing analógicos vêm <em>antes</em> do conversor, não depois." },

  { camada: "aprofundamento",
    q: "Sobre o princípio da incerteza na forma Δt · Δξ ≥ 1/4π, qual afirmação é correta?",
    alts: [
      "É um fenômeno quântico que aparece por analogia na análise de sinais.",
      "É uma limitação dos instrumentos de medida atuais, que deve ser superada com melhor tecnologia.",
      "É um teorema matemático sobre pares de transformadas, do qual o princípio de Heisenberg é uma aplicação física.",
      "Só se aplica a sinais estacionários."
    ],
    correta: 2,
    porque: "A relação é puramente matemática: qualquer par de funções relacionadas por transformada de Fourier obedece a ela. Em mecânica quântica, posição e momento são um par desses, e daí vem Heisenberg. Tratar a versão matemática como consequência da física inverte a dependência lógica, e sugerir que melhor tecnologia resolveria é um erro categorial." },

  { camada: "extensao",
    q: "Sobre o fenômeno de Gibbs, qual é a descrição correta?",
    alts: [
      "O erro perto da descontinuidade some conforme se acrescentam termos, apenas lentamente.",
      "A região do erro estreita com mais termos, mas a altura do sobressinal estaciona em cerca de 9% do salto.",
      "A série de Fourier simplesmente não converge para funções com salto.",
      "O efeito só aparece na versão discreta (DFT), sendo artefato de amostragem."
    ],
    correta: 1,
    porque: "Essa é a característica contraintuitiva: convergência em L² e nos pontos de continuidade, mas sem convergência uniforme. Por isso o pico não encolhe. Na prática, é a origem dos artefatos de ringing em ressonância magnética e do pré-eco em áudio, e a razão de se usarem janelas suaves em vez de cortes retos no espectro." },

  { camada: "extensao",
    q: "Você precisa analisar um eletrocardiograma para identificar em que momento surgem componentes de alta frequência associadas a uma arritmia. Por que a transformada de Fourier clássica é inadequada?",
    alts: [
      "Porque ela não consegue lidar com frequências altas.",
      "Porque o sinal de ECG não é periódico.",
      "Porque ela integra sobre todo o tempo e devolve um retrato global, perdendo a informação de quando cada frequência ocorreu.",
      "Porque o ruído fisiológico impede qualquer análise espectral em sinais biológicos."
    ],
    correta: 2,
    porque: "O problema é a hipótese de estacionariedade. A transformada clássica diz <em>o que</em> existe no sinal, não <em>quando</em>. Para localizar no tempo, usa-se espectrograma (STFT) ou ondaletas, aceitando o compromisso imposto pela relação de incerteza entre resolução temporal e espectral." },

  { camada: "extensao",
    q: "Um pesquisador aplica FFT a uma série temporal de expressão gênica, encontra um pico em 24 horas e conclui que descobriu um gene circadiano. Qual é a crítica metodológica mais forte?",
    alts: [
      "Nenhuma: um pico bem definido no periodograma é evidência suficiente de periodicidade.",
      "Ruído gera picos aparentes; sem teste contra uma hipótese nula adequada e sem correção para múltiplas frequências testadas, o pico pode ser artefato.",
      "A FFT não pode ser aplicada a dados biológicos porque eles não são contínuos.",
      "O período de 24 horas é longo demais para a resolução da FFT."
    ],
    correta: 1,
    porque: "Toda realização finita de ruído produz flutuações que parecem picos, e séries biológicas frequentemente têm ruído correlacionado (vermelho), que concentra energia em baixas frequências e agrava o problema. A crítica de revisor previsível é exatamente essa: qual foi a hipótese nula, e houve correção para múltiplos testes?" }
],

fontes: [
  { n: 1, tipo: "livro", ref: "Grattan-Guinness, I. &amp; Ravetz, J. R. <em>Joseph Fourier, 1768–1830</em>. MIT Press, 1972. Reconstrói a rejeição de 1807 e as objeções de Lagrange a partir dos documentos da Academia.", url: "" },
  { n: 2, tipo: "fonte primária", ref: "Fourier, J. <em>Théorie analytique de la chaleur</em>. Paris, 1822. Texto integral digitalizado.", url: "https://archive.org/details/thorieanalytiq00four" },
  { n: 3, tipo: "livro", ref: "Rupp, B. <em>Biomolecular Crystallography: Principles, Practice, and Application to Structural Biology</em>. Garland Science, 2009. Capítulos sobre a relação de Fourier entre densidade eletrônica e padrão de difração.", url: "" },
  { n: 4, tipo: "vídeo", ref: "Sanderson, G. (3Blue1Brown). <em>But what is the Fourier Transform? A visual introduction</em>. A intuição do 'enrolamento' e do centro de massa vem desta exposição.", url: "https://www.3blue1brown.com/lessons/fourier-transforms" },
  { n: 5, tipo: "artigo", ref: "Cooley, J. W. &amp; Tukey, J. W. 'An algorithm for the machine calculation of complex Fourier series'. <em>Mathematics of Computation</em> 19(90):297–301, 1965.", url: "https://doi.org/10.1090/S0025-5718-1965-0178586-1" },
  { n: 6, tipo: "curso", ref: "Osgood, B. <em>The Fourier Transform and its Applications</em> (EE261), Stanford University. Notas de aula completas, incluindo tratamento do fenômeno de Gibbs e da amostragem.", url: "https://see.stanford.edu/Course/EE261" },
  { n: 7, tipo: "livro", ref: "Bracewell, R. <em>The Fourier Transform and Its Applications</em>. 3ª ed., McGraw-Hill, 2000. Referência padrão em engenharia, com tratamento cuidadoso de convolução e amostragem.", url: "" }
]
};
