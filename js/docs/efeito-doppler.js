CONTEUDOS["efeito-doppler"] = {
termo: "Efeito Doppler e expansão do universo",
area: "Física",
subtitulo: "O tom da sirene muda porque as frentes de onda se comprimem ou se espaçam conforme a fonte se move. A mesma conta, aplicada à luz das galáxias, mostrou que o universo se expande.",
prerequisitos: [
 "Saber que som e luz são ondas, com frequência e comprimento de onda.",
 "Noções básicas de velocidade, distância e tempo."
],
conexoes: [
 {
  "termo": "Relatividade restrita e dilatação temporal",
  "relacao": "Quando a fonte ou o observador se move perto da velocidade da luz, a fórmula clássica do efeito Doppler precisa ser corrigida pelo fator relativístico, e o desvio transversal que sobra é uma consequência direta da dilatação temporal."
 },
 {
  "termo": "Energia escura e a expansão acelerada",
  "relacao": "O desvio para o vermelho medido com o efeito Doppler e a lei de Hubble é o dado bruto que, décadas depois, mostrou que a expansão do universo não desacelera, e sim acelera."
 },
 {
  "termo": "Escada de distâncias cósmicas",
  "relacao": "Para ligar o desvio para o vermelho a uma distância, é preciso saber a distância da galáxia por velas padrão; o efeito Doppler fornece a velocidade, a escada de distâncias fornece o afastamento."
 }
],

camadas: {

nucleo: { minutos: 4, html: `
<p class="abre">Uma ambulância passa na rua com a sirene ligada. Enquanto ela se aproxima, o som parece mais agudo. No instante em que cruza por você, o tom é o mesmo que ela emitiria parada. Depois que se afasta, fica mais grave. Nada mudou no aparelho que produz o som. O que mudou foi a posição de onde cada frente de onda saiu.</p><p>Esse é o efeito descrito por Christian Doppler em 1842. Ele percebeu que a frequência recebida depende do movimento relativo entre fonte e observador<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. A primeira comprovação experimental veio em 1845, quando Buys Ballot colocou trompetistas num vagão puxado por uma locomotiva e ouviu o tom subir na aproximação e cair no afastamento<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. O experimento mostrou que a ideia estava certa: o tom percebido acompanha o movimento, não uma mudança na fonte.</p><h3>Por que o tom muda</h3><p>O som é uma onda, e cada crista dela sai de um ponto do espaço. Se a fonte está parada, as cristas saem todas do mesmo lugar e chegam ao observador com intervalos iguais. Se a fonte se move na direção do observador, cada crista nova sai de um ponto um pouco mais perto dele do que a anterior. O intervalo entre uma chegada e a próxima diminui, então a frequência percebida sobe<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p><p>Se a fonte se afasta, cada crista sai de um ponto mais distante, o intervalo entre chegadas aumenta e a frequência cai. A velocidade da onda no meio não muda. O que muda é a taxa com que as cristas chegam<sup class="cit"><a href="#f2">2</a></sup>. Esse ponto é importante: a onda continua viajando na mesma velocidade no ar, mas o espaçamento entre as cristas que chegam ao ouvido é que se altera.</p><p>Para o som, a conta depende do meio, porque a onda precisa de ar para se propagar. Isso significa que o movimento da fonte e o do observador são medidos em relação ao ar<sup class="cit"><a href="#f2">2</a></sup>. A fórmula tem a forma f = f₀ vezes (v ± v_r) dividido por (v ∓ v_s), em que v é a velocidade do som, v_r a do receptor e v_s a da fonte<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Quando as velocidades são pequenas comparadas à da onda, a diferença de frequência é proporcional à velocidade relativa<sup class="cit"><a href="#f1">1</a></sup>.</p><p>Há um detalhe que muitas vezes passa despercebido. A velocidade que importa para o efeito é a componente ao longo da linha que liga a fonte ao observador. É por isso que a sirene não pula de um tom para outro de uma vez: conforme o carro passa, o ângulo entre a linha de visada e a direção do movimento gira, e a componente radial varia de forma contínua. Se o carro passasse exatamente por cima do observador, o tom permaneceria agudo até o instante da passagem e então cairia de repente<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p><h3>O caso da luz</h3><p>A luz também é uma onda, mas não precisa de meio. Hippolyte Fizeau descobriu, de forma independente, em 1848, que o efeito vale para ondas eletromagnéticas<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Por isso ele às vezes é chamado de efeito Doppler-Fizeau<sup class="cit"><a href="#f1">1</a></sup>.</p>

[[FOTO:1]]<p>Na luz, a frequência percebida maior significa cor deslocada para o azul, e a menor, para o vermelho. Uma estrela que se aproxima mostra suas linhas espectrais deslocadas para o azul. Uma que se afasta mostra as mesmas linhas deslocadas para o vermelho<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Como cada elemento químico emite linhas em frequências conhecidas com precisão, dá para saber o quanto a linha se moveu e, com isso, a velocidade da estrela ou da galáxia<sup class="cit"><a href="#f2">2</a></sup>.</p>

[[FOTO:2]]<p>Essa medida é a base de várias coisas em astronomia: detectar se uma estrela que parece única é na verdade um par próximo, medir a rotação de estrelas e galáxias e encontrar planetas fora do sistema solar<sup class="cit"><a href="#f2">2</a></sup>.</p><p>O mesmo raciocínio que explica a sirene se aplica a objetos que giram ou vibram. Em vez de um único desvio constante, aparecem modulações no sinal devolvido, e isso permite distinguir partes móveis de um alvo. Em radar, esse efeito é chamado de micro-Doppler e foi modelado e verificado experimentalmente<sup class="cit"><a href="#f3">3</a></sup>.</p><p>Também há usos em que a fonte e o observador se movem de forma mais complicada. Em um exame de ultrassom com Doppler, o aparelho mede a velocidade do sangue usando a componente do movimento ao longo do feixe. O feixe precisa ficar o mais paralelo possível ao fluxo, porque só a componente na direção dele conta para o desvio<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p><div class="marca consenso"><span class="rot">Consenso</span><p>O efeito Doppler é um fenômeno estabelecido e medido em laboratório para som, luz e outras ondas. A fórmula clássica e a versão relativística estão em livros-texto e são usadas rotineiramente em radar, medicina e astronomia<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p></div>
` },

aprofundamento: { minutos: 3, html: `
<p>A parte que costuma confundir é a seguinte: a fórmula clássica mede a velocidade da fonte e do observador em relação ao meio. Para o som, isso faz sentido, porque o ar existe. Para a luz, não existe meio, e só importa a velocidade relativa entre fonte e observador<sup class="cit"><a href="#f2">2</a></sup>. Por isso, quando a velocidade é alta, entra a versão relativística, que dá o mesmo resultado para quem se move: fonte ou observador.</p><p>Uma consequência estranha aparece quando a fonte passa a se mover na transversal, perpendicular à linha de visada. A fórmula clássica prevê frequência igual. A relatividade prevê um deslocamento pequeno, causado pela dilatação do tempo. Em 1963, Walter Kündig usou uma centrífuga girando rápido e o efeito Mössbauer para medir esse deslocamento transversal em um sistema acelerado. O resultado bateu com a previsão relativística dentro de 1,1 por cento<sup class="cit"><a href="#f4">4</a></sup>.</p><table><thead><tr><th>Situação</th><th>O que se mede</th><th>Exemplo</th></tr></thead><tbody><tr><td>Fonte se aproxima</td><td>Frequência maior, comprimento de onda menor</td><td>Sirene mais aguda<sup class="cit"><a href="#f1">1</a></sup></td></tr><tr><td>Fonte se afasta</td><td>Frequência menor, comprimento de onda maior</td><td>Sirene mais grave<sup class="cit"><a href="#f1">1</a></sup></td></tr><tr><td>Passagem de perto</td><td>Tom alto e cai de forma abrupta</td><td>Ambulância passando na calçada<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup></td></tr><tr><td>Passagem distante</td><td>Tom alto e cai de forma gradual</td><td>Ambulância em rua paralela<sup class="cit"><a href="#f2">2</a></sup></td></tr></tbody></table><p>O motivo de a sirene deslizar o tom em vez de pular de uma vez é geométrico. A velocidade que importa para o efeito é a componente ao longo da linha que liga fonte e observador, dada por v vezes o cosseno do ângulo entre essa linha e a direção do movimento<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Quando a fonte está longe, o ângulo quase não muda, e o tom varia devagar. Quando passa perto, o ângulo gira rápido e o tom cai depressa<sup class="cit"><a href="#f2">2</a></sup>.</p><p>Em astronomia, a mesma ideia se aplica, mas com uma ressalva importante. O desvio para o vermelho das galáxias distantes tem origem diferente de um movimento simples da fonte pelo espaço. Em cosmologia, o desvio para o vermelho da expansão é tratado como um fenômeno separado dos desvios causados por gravidade ou por movimento Doppler<sup class="cit"><a href="#f2">2</a></sup>. As galáxias também têm movimentos próprios, diferentes da recessão cosmológica, e essas velocidades peculiares geram distorções quando se usam os desvios para estimar distâncias<sup class="cit"><a href="#f2">2</a></sup>.</p><p>Outra coisa que a astronomia aprendeu é que o efeito Doppler aparece em escalas menores. Em 2003, Loeb e Gaudi calcularam que o movimento reflexo de uma estrela por causa de um planeta ao redor dela produz uma variação periódica de fluxo, com amplitude proporcional à velocidade radial<sup class="cit"><a href="#f5">5</a></sup>. Para planetas com período menor que cerca de 0,2 ano, esse sinal pode competir com a luz refletida pelo próprio planeta<sup class="cit"><a href="#f5">5</a></sup>.</p><p>O efeito também aparece em rotação e vibração, além da aproximação e do afastamento. Em radar, quando um alvo tem partes que vibram ou giram, além do desvio constante do corpo inteiro, aparecem modulações no sinal devolvido. Isso é chamado de efeito micro-Doppler, e modelos foram desenvolvidos e verificados com dados reais<sup class="cit"><a href="#f3">3</a></sup>.</p><p>Na medicina, o ecocardiograma usa o efeito para medir direção e velocidade do sangue e do tecido do coração<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Uma limitação prática é que o feixe de ultrassom deve ficar o mais paralelo possível ao fluxo, porque a componente que importa é a da linha de visada<sup class="cit"><a href="#f2">2</a></sup>. Em muitos equipamentos médicos, o que se mede de fato é a mudança de fase do sinal recebido<sup class="cit"><a href="#f2">2</a></sup>.</p>
` },

extensao: { minutos: 3, html: `
<p>O mesmo princípio aparece longe da física de ondas. No peixe-zebra, durante a formação dos somitos, ondas de expressão gênica varrem o tecido e um novo somito se forma quando uma onda chega à extremidade anterior. Medições em tempo real mostraram que o período só das oscilações genéticas não explica o ritmo da segmentação. O encurtamento do tecido faz a extremidade se mover em direção às ondas, e esse movimento encurta o período efetivo, como um efeito Doppler. O ritmo final surge da combinação das oscilações, da mudança de perfil e do encurtamento do tecido<sup class="cit"><a href="#f6">6</a></sup>.</p><p>Em engenharia, o efeito aparece como problema e como ferramenta. Satélites em órbita rápida produzem desvios de dezenas de quilo-hertz no sinal recebido por uma estação na Terra, e as comunicações precisam compensar isso continuamente<sup class="cit"><a href="#f2">2</a></sup>. Em CubeSats, testes com modulação LoRa mostraram grande imunidade ao efeito Doppler em órbitas acima de 550 km. Abaixo disso, quando o satélite passa direto sobre a estação, o desvio muda rápido demais e o canal se rompe no modo de maior espalhamento espectral<sup class="cit"><a href="#f7">7</a></sup>. Uma solução estudada é usar superfícies reconfiguráveis que ajustam a propagação em tempo real para reduzir as flutuações causadas pelo movimento do receptor<sup class="cit"><a href="#f8">8</a></sup>.</p><p>Na medição de fluidos, instrumentos como o velocímetro laser Doppler e o perfilador acústico Doppler emitem um feixe e medem o desvio nas reflexões das partículas que se movem com o fluxo. Isso permite medir vazão sem introduzir nada no tubo, com precisão e alta frequência<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>. Há ainda a versão fotoacústica, em que partículas absorvem luz e geram onda de som; o desvio medido é metade do que se veria no ultrassom Doppler e não depende da direção da luz<sup class="cit"><a href="#f9">9</a></sup>.</p><p>Para quem quiser ir além, o caminho natural é a relatividade restrita: lá as fórmulas do efeito Doppler ganham o fator que corrige os casos de alta velocidade, e o desvio transversal aparece como consequência da dilatação do tempo.</p>
` }

},

sintese: {
 "definicoes": [
  {
   "termo": "Efeito Doppler",
   "def": "Mudança na frequência percebida de uma onda quando há movimento relativo entre a fonte e o observador. O tom sobe na aproximação e cai no afastamento."
  },
  {
   "termo": "Componente radial",
   "def": "Parte da velocidade que conta para o efeito: a que aponta ao longo da linha que liga a fonte ao observador. É dada por v vezes o cosseno do ângulo entre essa linha e a direção do movimento."
  },
  {
   "termo": "Desvio para o azul e para o vermelho",
   "def": "Na luz, frequência percebida maior desloca as linhas para o azul; frequência menor desloca para o vermelho. Serve para medir a velocidade de estrelas e galáxias."
  },
  {
   "termo": "Efeito Doppler transversal",
   "def": "Deslocamento pequeno previsto pela relatividade quando a fonte se move perpendicular à linha de visada, causado pela dilatação do tempo. A fórmula clássica prevê frequência igual."
  },
  {
   "termo": "Micro-Doppler",
   "def": "Modulações no sinal devolvido por partes de um alvo que vibram ou giram, além do desvio constante do corpo inteiro. Usado em radar."
  },
  {
   "termo": "Velocidade peculiar",
   "def": "Movimento próprio de uma galáxia pelo espaço, diferente da recessão cosmológica. Gera distorções quando se usam desvios para estimar distâncias."
  }
 ],
 "lembrar": [
  "O efeito vale para som, luz e outras ondas, e foi descrito por Christian Doppler em 1842.",
  "A velocidade da onda no meio não muda. O que muda é a taxa com que as cristas chegam ao observador.",
  "Para o som, as velocidades da fonte e do observador são medidas em relação ao ar. Para a luz não existe meio, e só importa a velocidade relativa.",
  "O tom desliza em vez de pular porque a componente radial varia de forma contínua conforme o ângulo gira.",
  "Cada elemento químico emite linhas em frequências conhecidas, e o quanto a linha se desloca revela a velocidade da estrela ou galáxia.",
  "Em alta velocidade entra a versão relativística, e o desvio transversal aparece como consequência da dilatação do tempo."
 ],
 "confusoes": [
  {
   "erro": "Achar que o aparelho que produz o som muda quando a ambulância passa.",
   "correcao": "Nada muda na fonte. O que muda é a posição de onde cada frente de onda saiu, e isso altera o intervalo entre as chegadas."
  },
  {
   "erro": "Pensar que a onda acelera ou desacelera quando a fonte se move.",
   "correcao": "A velocidade da onda no meio continua a mesma. O que se altera é o espaçamento entre as cristas que chegam ao ouvido."
  },
  {
   "erro": "Tratar o desvio para o vermelho das galáxias distantes como um movimento simples da fonte pelo espaço.",
   "correcao": "Em cosmologia, o desvio da expansão é tratado como fenômeno separado dos desvios por gravidade ou por movimento Doppler."
  },
  {
   "erro": "Usar a velocidade total da fonte sem olhar a direção.",
   "correcao": "Só conta a componente ao longo da linha que liga a fonte ao observador, e é por isso que o tom cai de forma gradual ou abrupta conforme a passagem."
  },
  {
   "erro": "Medir fluxo com ultrassom Doppler em qualquer ângulo.",
   "correcao": "O feixe precisa ficar o mais paralelo possível ao fluxo, porque só a componente na direção dele conta para o desvio."
  }
 ],
 "numeros": [
  "Christian Doppler descreveu o efeito em 1842, e a primeira comprovação experimental veio em 1845, com trompetistas num vagão puxado por uma locomotiva.",
  "Hippolyte Fizeau descobriu de forma independente, em 1848, que o efeito vale para ondas eletromagnéticas.",
  "Em 1963, Walter Kündig mediu o deslocamento transversal numa centrífuga e o resultado bateu com a previsão relativística dentro de 1,1 por cento.",
  "Em 2003, Loeb e Gaudi calcularam que, para planetas com período menor que cerca de 0,2 ano, o sinal do movimento reflexo da estrela pode competir com a luz refletida pelo planeta.",
  "Satélites em órbita rápida produzem desvios de dezenas de quilo-hertz no sinal recebido na Terra, e CubeSats mostraram imunidade ao efeito Doppler em órbitas acima de 550 km."
 ]
},

flashcards: [
 {
  "f": "Por que a sirene fica mais aguda quando a ambulância se aproxima?",
  "v": "Cada crista nova da onda sai de um ponto um pouco mais perto do observador do que a anterior. O intervalo entre chegadas diminui, e a frequência percebida sobe."
 },
 {
  "f": "O que muda na onda quando a fonte se move?",
  "v": "Muda a taxa com que as cristas chegam ao observador. A velocidade da onda no meio continua a mesma."
 },
 {
  "f": "Que velocidade importa para o efeito Doppler?",
  "v": "A componente ao longo da linha que liga a fonte ao observador, dada por v vezes o cosseno do ângulo entre essa linha e a direção do movimento."
 },
 {
  "f": "Por que o tom desliza em vez de pular de uma vez quando o carro passa?",
  "v": "Conforme o carro passa, o ângulo entre a linha de visada e a direção do movimento gira. A componente radial varia de forma contínua, e o tom acompanha."
 },
 {
  "f": "Qual a diferença entre o efeito Doppler no som e na luz?",
  "v": "No som, a onda precisa de ar, e as velocidades são medidas em relação ao meio. Na luz não existe meio, e só importa a velocidade relativa entre fonte e observador."
 },
 {
  "f": "Como o desvio das linhas espectrais revela a velocidade de uma estrela?",
  "v": "Cada elemento químico emite linhas em frequências conhecidas com precisão. O quanto a linha se moveu indica a velocidade da estrela ou galáxia."
 },
 {
  "f": "O que é o efeito Doppler transversal?",
  "v": "É um deslocamento pequeno previsto pela relatividade quando a fonte se move perpendicular à linha de visada. Vem da dilatação do tempo, e a fórmula clássica não o prevê."
 },
 {
  "f": "O que Kündig mediu em 1963?",
  "v": "Usou uma centrífuga girando rápido e o efeito Mössbauer para medir o deslocamento transversal. O resultado bateu com a previsão relativística dentro de 1,1 por cento."
 },
 {
  "f": "O desvio para o vermelho das galáxias distantes é efeito Doppler?",
  "v": "Em cosmologia, o desvio da expansão é tratado como fenômeno separado dos desvios causados por gravidade ou por movimento Doppler. As galáxias também têm velocidades peculiares."
 },
 {
  "f": "O que é micro-Doppler?",
  "v": "Modulações no sinal devolvido por partes de um alvo que vibram ou giram, além do desvio constante do corpo inteiro. Foi modelado e verificado com dados reais."
 },
 {
  "f": "Por que o feixe do ultrassom Doppler precisa ser paralelo ao fluxo?",
  "v": "Porque só a componente na direção do feixe conta para o desvio. Quanto mais paralelo, mais confiável é a medida da velocidade do sangue."
 },
 {
  "f": "Como o efeito Doppler aparece na formação dos somitos do peixe-zebra?",
  "v": "Ondas de expressão gênica varrem o tecido, e o encurtamento do tecido faz a extremidade se mover em direção às ondas. Esse movimento encurta o período efetivo, como um efeito Doppler."
 }
],

prova: [
 {
  "camada": "nucleo",
  "q": "Por que o som da sirene parece mais agudo enquanto a ambulância se aproxima?",
  "alts": [
   "A fonte passa a emitir uma frequência maior quando acelera",
   "As cristas da onda saem de pontos cada vez mais próximos do observador, diminuindo o intervalo entre chegadas",
   "A velocidade do som no ar aumenta com o movimento da fonte",
   "O ouvido humano distorce o tom quando a fonte se move"
  ],
  "correta": 1,
  "porque": "O aparelho não muda: cada crista nova sai de um ponto mais perto do observador, e o intervalo entre chegadas diminui. A alternativa A erra ao supor mudança na fonte, e C erra porque a velocidade da onda no meio não muda."
 },
 {
  "camada": "nucleo",
  "q": "O que permanece igual quando a fonte do som se move em relação ao observador?",
  "alts": [
   "A frequência percebida",
   "O espaçamento entre as cristas que chegam",
   "A velocidade da onda no meio",
   "O comprimento de onda percebido"
  ],
  "correta": 2,
  "porque": "A onda continua viajando na mesma velocidade no ar. O que se altera é a taxa com que as cristas chegam, o que muda frequência percebida e espaçamento entre elas."
 },
 {
  "camada": "nucleo",
  "q": "Qual grandeza determina o tamanho do desvio Doppler?",
  "alts": [
   "A velocidade total da fonte, sem considerar a direção",
   "A componente da velocidade ao longo da linha que liga a fonte ao observador",
   "A distância entre a fonte e o observador",
   "A massa da fonte que emite a onda"
  ],
  "correta": 1,
  "porque": "O que conta é a componente radial, dada por v vezes o cosseno do ângulo entre a linha de visada e a direção do movimento. A alternativa A ignora a direção e por isso é a mais tentadora, mas está errada."
 },
 {
  "camada": "nucleo",
  "q": "O que o deslocamento das linhas espectrais de uma estrela permite medir?",
  "alts": [
   "A temperatura da superfície da estrela",
   "A composição química exata da estrela",
   "A velocidade da estrela em relação ao observador",
   "O tamanho do planeta que orbita a estrela"
  ],
  "correta": 2,
  "porque": "Como cada elemento emite linhas em frequências conhecidas, o quanto a linha se moveu revela a velocidade da estrela. A composição aparece nas linhas, mas o desvio mede velocidade."
 },
 {
  "camada": "nucleo",
  "q": "Por que o tom da sirene desliza em vez de pular de uma vez quando o carro passa?",
  "alts": [
   "Porque o motor varia de rotação durante a passagem",
   "Porque o ângulo entre a linha de visada e o movimento gira, mudando a componente radial de forma contínua",
   "Porque a velocidade do som muda com a temperatura",
   "Porque o ouvido leva tempo para se adaptar ao novo tom"
  ],
  "correta": 1,
  "porque": "A componente radial varia de forma contínua conforme o ângulo gira durante a passagem. Se o carro passasse exatamente por cima, o tom permaneceria agudo até a passagem e cairia de repente."
 },
 {
  "camada": "nucleo",
  "q": "No caso da luz, o que significa frequência percebida menor?",
  "alts": [
   "Cor deslocada para o azul",
   "Cor deslocada para o vermelho",
   "A luz deixa de se propagar",
   "A velocidade da luz diminui"
  ],
  "correta": 1,
  "porque": "Frequência menor desloca as linhas para o vermelho, e frequência maior, para o azul. A velocidade da luz não muda com o movimento da fonte."
 },
 {
  "camada": "aprofundamento",
  "q": "Por que a versão relativística do efeito Doppler é necessária quando as velocidades são altas?",
  "alts": [
   "Porque a fórmula clássica mede velocidades em relação ao meio, e a luz não tem meio",
   "Porque a luz muda de velocidade quando a fonte se move",
   "Porque o som também precisa de correção relativística em qualquer velocidade",
   "Porque a frequência da luz não depende do movimento relativo"
  ],
  "correta": 0,
  "porque": "A fórmula clássica usa velocidades em relação ao meio, o que funciona para o som. Para a luz não existe meio, e só importa a velocidade relativa. A alternativa B erra porque a velocidade da luz não muda por causa do movimento da fonte."
 },
 {
  "camada": "aprofundamento",
  "q": "O que a relatividade prevê para a fonte que se move perpendicular à linha de visada?",
  "alts": [
   "Frequência igual, como na fórmula clássica",
   "Um deslocamento pequeno causado pela dilatação do tempo",
   "Um deslocamento grande para o azul",
   "Nenhum efeito, porque não há aproximação nem afastamento"
  ],
  "correta": 1,
  "porque": "A fórmula clássica prevê frequência igual, mas a relatividade prevê um deslocamento pequeno causado pela dilatação do tempo. Kündig mediu esse deslocamento em 1963 dentro de 1,1 por cento."
 },
 {
  "camada": "aprofundamento",
  "q": "O desvio para o vermelho das galáxias distantes pode ser tratado como um movimento Doppler simples?",
  "alts": [
   "Sim, é exatamente o mesmo efeito da sirene",
   "Não, em cosmologia o desvio da expansão é tratado como fenômeno separado dos desvios por gravidade ou movimento",
   "Sim, porque as galáxias se afastam pelo espaço como estrelas próximas",
   "Não, porque galáxias distantes não emitem luz"
  ],
  "correta": 1,
  "porque": "Em cosmologia, o desvio da expansão é um fenômeno separado. As galáxias também têm velocidades peculiares, e essas distorções afetam estimativas de distância."
 },
 {
  "camada": "aprofundamento",
  "q": "O que é o efeito micro-Doppler em radar?",
  "alts": [
   "Um desvio de frequência causado pela rotação da Terra",
   "Modulações no sinal devolvido por partes de um alvo que vibram ou giram",
   "Um erro de medida causado pelo movimento do radar",
   "Um desvio que só aparece em alvos parados"
  ],
  "correta": 1,
  "porque": "Além do desvio constante do corpo inteiro, partes que vibram ou giram geram modulações no sinal devolvido. Isso permite distinguir partes móveis de um alvo."
 },
 {
  "camada": "extensao",
  "q": "Como o efeito Doppler aparece na formação dos somitos do peixe-zebra?",
  "alts": [
   "As ondas genéticas mudam de frequência porque o tecido se aquece",
   "O encurtamento do tecido faz a extremidade se mover em direção às ondas, encurtando o período efetivo",
   "Cada somito emite som que é captado pelo tecido vizinho",
   "As oscilações genéticas sozinhas explicam todo o ritmo da segmentação"
  ],
  "correta": 1,
  "porque": "Medições em tempo real mostraram que só as oscilações genéticas não explicam o ritmo. O encurtamento do tecido aproxima a extremidade das ondas, e o ritmo final surge da combinação dos fatores."
 },
 {
  "camada": "extensao",
  "q": "Por que comunicações com satélites precisam compensar o efeito Doppler?",
  "alts": [
   "Porque o satélite muda de frequência de transmissão ao entrar em órbita",
   "Porque a velocidade do satélite produz desvios de dezenas de quilo-hertz no sinal recebido na Terra",
   "Porque a atmosfera absorve parte do sinal",
   "Porque as antenas da estação giram junto com o satélite"
  ],
  "correta": 1,
  "porque": "Satélites em órbita rápida produzem desvios de dezenas de quilo-hertz, e as comunicações compensam isso continuamente. Testes com CubeSats mostraram imunidade em órbitas acima de 550 km, mas rompimento abaixo disso em passagens diretas."
 }
],

fontes: [
 {
  "n": 1,
  "tipo": "enciclopédia",
  "ref": "Wikipédia (português), verbete 'Efeito Doppler'. Consultado em 27/09/2026.",
  "url": "https://pt.wikipedia.org/wiki/Efeito_Doppler"
 },
 {
  "n": 2,
  "tipo": "enciclopédia",
  "ref": "Wikipédia (inglês), verbete 'Doppler effect'. Consultado em 27/09/2026.",
  "url": "https://en.wikipedia.org/wiki/Doppler_effect"
 },
 {
  "n": 3,
  "tipo": "artigo",
  "ref": "V.C. Chen, Fayin Li, Shen-Shyang Ho, Harry Wechsler. 'Micro-doppler effect in radar: phenomenon, model, and simulation study'. <em>IEEE Transactions on Aerospace and Electronic Systems</em>, 2006.",
  "url": "https://doi.org/10.1109/taes.2006.1603402"
 },
 {
  "n": 4,
  "tipo": "artigo",
  "ref": "Walter Kündig. 'Measurement of the Transverse Doppler Effect in an Accelerated System'. <em>Physical Review</em>, 1963.",
  "url": "https://doi.org/10.1103/physrev.129.2371"
 },
 {
  "n": 5,
  "tipo": "artigo",
  "ref": "Abraham Loeb, B. Scott Gaudi. 'Periodic Flux Variability of Stars due to the Reflex Doppler Effect Induced by Planetary Companions'. <em>The Astrophysical Journal</em>, 2003.",
  "url": "https://doi.org/10.1086/375551"
 },
 {
  "n": 6,
  "tipo": "artigo",
  "ref": "Daniele Soroldoni, David J. Jörg, Luis G. Morelli, David Richmond et al.. 'A Doppler effect in embryonic pattern formation'. <em>Science</em>, 2014.",
  "url": "https://doi.org/10.1126/science.1253089"
 },
 {
  "n": 7,
  "tipo": "artigo",
  "ref": "Alexander A. Doroshkin, Alexander M. Zadorozhny, Олег Николаевич Кусь, Vitaliy Yu. Prokopyev et al.. 'Experimental Study of LoRa Modulation Immunity to Doppler Effect in CubeSat Radio Communications'. <em>IEEE Access</em>, 2019.",
  "url": "https://doi.org/10.1109/access.2019.2919274"
 },
 {
  "n": 8,
  "tipo": "artigo",
  "ref": "Ertuğrul Başar. 'Reconfigurable Intelligent Surfaces for Doppler Effect and Multipath Fading Mitigation'. <em>Frontiers in Communications and Networks</em>, 2021.",
  "url": "https://doi.org/10.3389/frcmn.2021.672857"
 },
 {
  "n": 9,
  "tipo": "artigo",
  "ref": "Hui Fang, Konstantin Maslov, Lihong V. Wang. 'Photoacoustic Doppler Effect from Flowing Small Light-Absorbing Particles'. <em>Physical Review Letters</em>, 2007.",
  "url": "https://doi.org/10.1103/physrevlett.99.184501"
 },
 {
  "n": 10,
  "tipo": "artigo",
  "ref": "Nigel Seddon, T. Bearpark. 'Observation of the Inverse Doppler Effect'. <em>Science</em>, 2003.",
  "url": "https://doi.org/10.1126/science.1089342"
 },
 {
  "n": 11,
  "tipo": "artigo",
  "ref": "Sam Hyeon Lee, Choon Mahn Park, Yong Mun Seo, Chul Koo Kim. 'Reversed Doppler effect in double negative metamaterials'. <em>Physical Review B</em>, 2010.",
  "url": "https://doi.org/10.1103/physrevb.81.241102"
 },
 {
  "n": 12,
  "tipo": "artigo",
  "ref": "Evan J. Reed, Marin Soljačić, John D. Joannopoulos. 'Reversed Doppler Effect in Photonic Crystals'. <em>Physical Review Letters</em>, 2003.",
  "url": "https://doi.org/10.1103/physrevlett.91.133901"
 },
 {
  "n": 13,
  "tipo": "artigo",
  "ref": "Davide Ramaccia, Dimitrios L. Sounas, Andrea Alu, Alessandro Toscano et al.. 'Phase-Induced Frequency Conversion and Doppler Effect With Time-Modulated Metasurfaces'. <em>IEEE Transactions on Antennas and Propagation</em>, 2019.",
  "url": "https://doi.org/10.1109/tap.2019.2952469"
 },
 {
  "n": 14,
  "tipo": "artigo",
  "ref": "S. N. Gordienko, Alexander Pukhov, O. A. Shorokhov, T. Baeva. 'Relativistic Doppler Effect: Universal Spectra and Zeptosecond Pulses'. <em>Physical Review Letters</em>, 2004.",
  "url": "https://doi.org/10.1103/physrevlett.93.115002"
 },
 {
  "n": 15,
  "tipo": "artigo",
  "ref": "Hailong Zhou, Dongzhi Fu, Jianji Dong, Pei Zhang et al.. 'Orbital angular momentum complex spectrum analyzer for vortex light based on the rotational Doppler effect'. <em>Light Science &amp; Applications</em>, 2016.",
  "url": "https://doi.org/10.1038/lsa.2016.251"
 },
 {
  "n": 16,
  "tipo": "artigo",
  "ref": "Bruce A. Garetz. 'Angular Doppler effect'. <em>Journal of the Optical Society of America</em>, 1981.",
  "url": "https://doi.org/10.1364/josa.71.000609"
 }
],

fronteira: [{"tema": "Efeito Doppler inverso", "html": "<p>Em materiais com refração negativa, a teoria prevê que o desvio Doppler pode funcionar ao contrário: a frequência cair na aproximação e subir no afastamento. Isso foi observado em 2003 por Seddon e Bearpark, refletindo uma onda em uma descontinuidade móvel de uma linha de transmissão<sup class=\"cit\"><a href=\"#f10\">10</a></sup>, e depois em metamateriais acústicos de índice negativo<sup class=\"cit\"><a href=\"#f11\">11</a></sup>. O assunto segue como linha de pesquisa em óptica e fotônica, com propostas que incluem cristais fotônicos<sup class=\"cit\"><a href=\"#f12\">12</a></sup> e superfícies moduladas no tempo<sup class=\"cit\"><a href=\"#f13\">13</a></sup>. Ainda não é um efeito frequente em situações do dia a dia, e as aplicações práticas continuam em estudo.</p>"}, {"tema": "Medições em escalas extremas", "html": "<p>Há propostas para usar o efeito em regimes muito diferentes dos usuais. Um exemplo é a geração de pulsos de zeptossegundos pela reflexão de laser ultraintenso em uma fronteira de plasma oscilante, o que exigiria o efeito Doppler relativístico<sup class=\"cit\"><a href=\"#f14\">14</a></sup>. Outro é o uso do efeito Doppler rotacional para analisar o momento angular orbital da luz<sup class=\"cit\"><a href=\"#f15\">15</a></sup><sup class=\"cit\"><a href=\"#f16\">16</a></sup>. São resultados numéricos ou de laboratório especializado, e ainda não fazem parte de um conjunto consolidado de aplicações.</p>"}],

fotos: [{"n": 1, "arquivo": "img/c/efeito-doppler/1.webp", "legenda": "O físico Hippolyte Fizeau, pioneiro nos estudos sobre a aplicação do efeito Doppler em ondas eletromagnéticas.", "alt": "Retrato do físico Hippolyte Fizeau.", "autor": "Charles Reutlinger, b.1816", "licenca": "Public domain", "pagina": "https://commons.wikimedia.org/wiki/File:Hippolyte_Fizeau.jpg", "gif": false, "w": 400, "h": 470}, {"n": 2, "arquivo": "img/c/efeito-doppler/2.webp", "legenda": "O espectro de luz de uma estrela muda para o azul ou vermelho conforme ela se move.", "alt": "Uma estrela orbitada por um planeta com o espectro de luz alterando-se para o azul e o vermelho.", "autor": "Amitchell125", "licenca": "CC BY-SA 4.0", "pagina": "https://commons.wikimedia.org/wiki/File:Doppler_shift_due_to_an_exoplanet.gif", "gif": true, "w": 480, "h": 264}],
};
