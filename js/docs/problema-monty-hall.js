CONTEUDOS["problema-monty-hall"] = {
termo: "Problema de Monty Hall",
area: "Matemática",
subtitulo: "Três portas, um prêmio, duas cabras. Trocar de porta dobra a chance de ganhar, e a explicação desafia a intuição até de matemáticos experientes.",
prerequisitos: [
 "Noções básicas de probabilidade: espaço amostral, eventos independentes e probabilidade condicional.",
 "Vontade de reconsiderar uma intuição forte quando ela conflita com o cálculo."
],
conexoes: [
 {
  "termo": "Teorema de Bayes",
  "relacao": "A solução rigorosa do problema de Monty Hall é uma aplicação direta do teorema de Bayes, que atualiza a probabilidade de achar o carro após o apresentador abrir uma porta."
 },
 {
  "termo": "Falácia do promotor e probabilidade condicional",
  "relacao": "O erro comum de achar que as duas portas restantes têm 50% cada é um caso de confundir probabilidade condicional com probabilidade incondicional, a mesma confusão por trás da falácia do promotor."
 },
 {
  "termo": "Heurísticas e vieses (Kahneman e Tversky)",
  "relacao": "A resistência a trocar de porta ilustra a heurística de representatividade e o viés de status quo, estudados por Kahneman e Tversky."
 },
 {
  "termo": "Viés de confirmação",
  "relacao": "Muitos leitores da coluna de Marilyn vos Savant recusaram a resposta correta mesmo diante de provas e simulações, buscando argumentos que confirmassem sua intuição inicial."
 }
],

camadas: {

nucleo: { minutos: 4, html: `
<p class="abre">Em 1990, a revista Parade publicou uma pergunta de um leitor chamado Craig F. Whitaker. O apresentador de um programa de TV oferece três portas. Atrás de uma está um carro; atrás das outras duas, cabras. Você escolhe a porta 1. O apresentador, que sabe onde está o carro, abre a porta 3 e revela uma cabra. Ele pergunta se você quer trocar para a porta 2. Trocar aumenta suas chances? A colunista Marilyn vos Savant respondeu que sim, e recebeu quase dez mil cartas, muitas de doutores, dizendo que ela estava errada<sup class="cit"><a href="#f1">1</a></sup>. A resposta certa é mesmo trocar, e a razão é mais sutil do que parece.</p>

<h3>O que o apresentador sabe muda tudo</h3>
<p>O ponto central é que o apresentador não abre uma porta ao acaso. Ele sabe onde está o carro e nunca abre a porta premiada<sup class="cit"><a href="#f2">2</a></sup><sup class="cit"><a href="#f1">1</a></sup>. Quando você escolheu a porta 1, a chance de ter acertado era de 1/3. A chance de o carro estar em uma das outras duas portas era de 2/3. O apresentador abre uma dessas duas portas, e escolhe uma que tem cabra. Essa ação não muda a probabilidade de a porta 1 estar certa: continua 1/3. Mas as probabilidades das outras duas portas se concentram na porta que permanece fechada, a porta 2. Então, a chance de o carro estar na porta 2 é de 2/3.</p>
<p>Pense em termos de duas estratégias fixas: sempre ficar ou sempre trocar. Se você sempre fica com a escolha inicial, ganha o carro apenas quando acerta de primeira, o que acontece em 1/3 das vezes. Se você sempre troca, ganha quando errou de primeira, o que acontece em 2/3 das vezes. Isso porque, se você escolheu uma cabra, o apresentador é obrigado a abrir a outra cabra e a porta que sobra esconde o carro. Trocar acerta sempre que você errou no início<sup class="cit"><a href="#f1">1</a></sup>.</p>

<h3>Por que a intuição erra</h3>
<p>A maioria das pessoas pensa que, depois de uma porta ser aberta, restam duas portas e um prêmio, então cada uma tem 50% de chance. Esse raciocínio seria correto se o apresentador abrisse uma porta ao acaso. Mas ele não faz isso: ele usa o conhecimento dele para escolher uma porta com cabra. A porta aberta depende da sua escolha inicial, então os eventos não são independentes<sup class="cit"><a href="#f1">1</a></sup>. Um estudo com 228 participantes mostrou que apenas 13% escolheram trocar de porta<sup class="cit"><a href="#f2">2</a></sup><sup class="cit"><a href="#f1">1</a></sup>.</p>
<p>Marilyn vos Savant sugeriu uma versão com um milhão de portas para tornar a resposta mais clara. Você escolhe a porta 1. O apresentador, que sabe onde está o prêmio, abre 999.998 portas com cabras, deixando fechada apenas a porta 1 e a porta 777.777. Agora, parece óbvio que a chance de você ter escolhido a porta certa de primeira é de uma em um milhão, e que a porta 777.777 quase certamente esconde o carro<sup class="cit"><a href="#f1">1</a></sup>.</p>

<div class="marca consenso"><span class="rot">Consenso</span><p>Sob as suposições padrão (o carro é colocado aleatoriamente; o apresentador sempre abre uma porta com cabra entre as não escolhidas; e sempre oferece a troca), a estratégia de trocar ganha o carro com probabilidade 2/3, enquanto ficar ganha com probabilidade 1/3. Isso é aceito em livros-texto e revisões<sup class="cit"><a href="#f2">2</a></sup><sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f3">3</a></sup>.</p></div>

<h3>O papel das suposições</h3>
<p>A resposta de 2/3 depende de como o apresentador se comporta. Se ele puder escolher qual porta abrir quando você acertou de primeira, e se tiver preferência por uma porta específica, a probabilidade condicional de ganhar trocando pode mudar<sup class="cit"><a href="#f1">1</a></sup>. Por exemplo, se o apresentador sempre abre a porta da direita quando tem escolha, e ele abriu a porta 3, então as chances se tornam 1/2 para cada porta restante<sup class="cit"><a href="#f1">1</a></sup>. No entanto, mesmo nesse caso, trocar nunca é pior do que ficar: a probabilidade de ganhar trocando é sempre pelo menos 1/2<sup class="cit"><a href="#f1">1</a></sup>.</p>
<p>Em 1975, Steve Selvin publicou o problema na revista American Statistician, e o nome Monty Hall veio do apresentador do programa Let's Make a Deal<sup class="cit"><a href="#f2">2</a></sup><sup class="cit"><a href="#f1">1</a></sup>. O problema é matematicamente equivalente ao problema dos três prisioneiros, de Martin Gardner, de 1959<sup class="cit"><a href="#f2">2</a></sup><sup class="cit"><a href="#f1">1</a></sup>.</p>
` },

aprofundamento: { minutos: 5, html: `
<p>O problema de Monty Hall é um caso em que a resposta correta é fácil de verificar, mas o raciocínio que leva a ela exige cuidado. A área de probabilidade trata o problema como um exercício de modelagem: as suposições sobre o comportamento do apresentador precisam ser explicitadas, porque a resposta depende delas. Marilyn vos Savant e Steve Selvin definiram claramente essas suposições: o apresentador sempre abre uma porta não escolhida, sempre revela uma cabra, e sempre oferece a troca. Além disso, assume-se que o carro é colocado aleatoriamente e que, se o jogador escolheu o carro inicialmente, o apresentador escolhe qual porta abrir de forma aleatória<sup class="cit"><a href="#f2">2</a></sup><sup class="cit"><a href="#f1">1</a></sup>.</p>

<h3>O cálculo pela probabilidade condicional</h3>
<p>Para ver de onde vem o 2/3, podemos usar o teorema de Bayes. Suponha que você escolheu a porta 1 e o apresentador abriu a porta 3. Queremos a probabilidade de o carro estar na porta 2 dado que a porta 3 foi aberta. Antes de qualquer ação, a probabilidade de o carro estar em cada porta é 1/3. Se o carro está na porta 1 (probabilidade 1/3), o apresentador pode abrir a porta 2 ou a 3 com igual chance, então a probabilidade de ele abrir a porta 3 é 1/2. Se o carro está na porta 2 (probabilidade 1/3), o apresentador é obrigado a abrir a porta 3, então a probabilidade de abrir a porta 3 é 1. Se o carro está na porta 3, o apresentador nunca abriria a porta 3. Assim, a probabilidade de o apresentador abrir a porta 3 é (1/3 * 1/2) + (1/3 * 1) = 1/6 + 1/3 = 1/2. A probabilidade de o carro estar na porta 2 e o apresentador abrir a porta 3 é 1/3. Portanto, a probabilidade condicional de o carro estar na porta 2 dado que a porta 3 foi aberta é (1/3) / (1/2) = 2/3<sup class="cit"><a href="#f1">1</a></sup>.</p>
<p>Essa análise mostra que a informação trazida pela porta aberta não é simétrica. O apresentador tinha liberdade para escolher qual porta abrir se você acertou de primeira, mas não tinha se você errou. Essa diferença é o que faz a probabilidade se concentrar na porta não escolhida e não aberta.</p>

<h3>Críticas às soluções simples</h3>
<p>Muitos livros-texto apresentam uma solução "simples": como a chance de o carro estar nas duas portas não escolhidas é 2/3, e o apresentador revela uma cabra, a porta restante fica com essa probabilidade. Essa explicação chega à resposta correta, mas alguns autores argumentam que ela é incompleta ou enganosa<sup class="cit"><a href="#f1">1</a></sup>. O ponto é que a probabilidade de 2/3 se aplica à estratégia de sempre trocar, calculada antes de saber qual porta o apresentador abriu. A pergunta feita no momento da decisão é sobre a probabilidade condicional dado que uma porta específica foi aberta. Em geral, essas duas probabilidades coincidem sob as suposições padrão, mas podem diferir se o comportamento do apresentador não for aleatório<sup class="cit"><a href="#f1">1</a></sup>.</p>
<p>Em 1990, Morgan et al. publicaram um artigo no The American Statistician argumentando que Savant deu o conselho certo (trocar) mas usou um argumento errado, porque a probabilidade condicional poderia variar entre 1/2 e 1 dependendo de como o apresentador escolhe a porta quando tem opção<sup class="cit"><a href="#f1">1</a></sup>. Outros autores defenderam Savant, e a discussão continua na literatura<sup class="cit"><a href="#f1">1</a></sup>. Em 2011, Richard Gill argumentou que a melhor razão para trocar está no teorema minimax da teoria dos jogos, e não no teorema de Bayes<sup class="cit"><a href="#f4">4</a></sup>.</p>

<h3>Evidência experimental e aplicações</h3>
<p>O problema é usado em cursos de probabilidade e estatística, inclusive em universidades como Harvard e Princeton<sup class="cit"><a href="#f2">2</a></sup>. Experimentos mostram que as pessoas resistem a trocar. Um estudo com 228 participantes encontrou apenas 13% de trocas<sup class="cit"><a href="#f2">2</a></sup><sup class="cit"><a href="#f1">1</a></sup>. Outro estudo mostrou que, após jogar uma simulação com cartas, os participantes passaram a trocar mais, mas não necessariamente entenderam o motivo<sup class="cit"><a href="#f5">5</a></sup>. Pesquisas indicam que a dificuldade envolve a memória de trabalho e a tendência a igualar probabilidades entre opções desconhecidas<sup class="cit"><a href="#f1">1</a></sup>.</p>
<p>Em 2003, Krauß e Wang mostraram que reformular o problema com frequências naturais e mudança de perspectiva aumenta muito a taxa de acertos<sup class="cit"><a href="#f6">6</a></sup>. Em 2004, Kluger e Wyatt usaram o problema de Monty Hall em um mercado experimental e descobriram que, quando todos os participantes cometem o erro, os preços refletem o erro; mas a presença de poucos participantes sem viés já é suficiente para corrigir os preços<sup class="cit"><a href="#f7">7</a></sup>.</p>

<table>
<thead>
<tr><th>Porta escolhida</th><th>Carro atrás da porta 1</th><th>Carro atrás da porta 2</th><th>Carro atrás da porta 3</th></tr>
</thead>
<tbody>
<tr><td>Probabilidade inicial</td><td>1/3</td><td>1/3</td><td>1/3</td></tr>
<tr><td>Apresentador abre</td><td>Porta 2 ou 3 (1/2 cada)</td><td>Porta 3 (obrigatório)</td><td>Porta 2 (obrigatório)</td></tr>
<tr><td>Probabilidade de abrir a porta 3</td><td>1/6</td><td>1/3</td><td>0</td></tr>
<tr><td>Probabilidade condicional do carro estar na porta 2 após abrir a 3</td><td>1/6 / (1/6+1/3) = 1/3</td><td>1/3 / (1/6+1/3) = 2/3</td><td>0</td></tr>
</tbody>
</table>

<p>Esses resultados mostram que o problema de Monty Hall expõe como as pessoas processam informação probabilística e como decisões enviesadas podem afetar mercados.</p>
` },

extensao: { minutos: 3, html: `
<p>O problema de Monty Hall aparece em várias áreas. Na psicologia, ele é usado para estudar heurísticas e vieses. A dificuldade em aceitar a resposta correta está ligada ao viés de status quo (preferência por manter a escolha inicial), ao efeito de posse (supervalorizar o que já se tem) e à aversão a erros por ação versus omissão<sup class="cit"><a href="#f1">1</a></sup>. Esses mecanismos foram confirmados experimentalmente: pessoas que trocaram de caixa em uma versão do jogo valorizaram mais o prêmio recebido do que as que ficaram<sup class="cit"><a href="#f8">8</a></sup>.</p>
<p>Na teoria da decisão e economia, o problema ilustra como crenças individuais podem ou não se refletir nos preços de mercado. Kluger e Wyatt mostraram que, em um mercado experimental, a presença de poucos traders sem viés é suficiente para eliminar o erro de precificação<sup class="cit"><a href="#f7">7</a></sup>. Isso tem implicações para a formação de preços de ativos e para a hipótese de mercados eficientes.</p>
<p>Na computação e física, existem versões quânticas do problema. Flitney e Abbott (2002) formularam um jogo quântico em que os jogadores podem usar estratégias quânticas; com emaranhamento, um jogador pode obter vantagem<sup class="cit"><a href="#f9">9</a></sup>. D'Ariano et al. (2002) também estudaram uma versão quântica, mostrando que o apresentador pode se beneficiar de um "bloco de notas" quântico completamente emaranhado<sup class="cit"><a href="#f10">10</a></sup>. Essas versões não mudam a solução clássica, mas exploram como a informação é codificada.</p>
<p>Na educação, o problema é um exemplo clássico para ensinar probabilidade condicional e o teorema de Bayes. A resistência inicial dos alunos pode ser usada para discutir a importância de explicitar suposições e de testar intuições com simulações<sup class="cit"><a href="#f6">6</a></sup><sup class="cit"><a href="#f3">3</a></sup>.</p>
<p>Por fim, o problema tem uma lição prática: quando uma decisão envolve informação assimétrica e um agente que sabe mais do que você, a ação desse agente pode conter mais informação do que parece. Trocar de porta é a escolha racional sob as suposições padrão, e entender por quê ajuda a reconhecer situações semelhantes na vida real.</p>
` }

},

sintese: {
 "definicoes": [
  {
   "termo": "Problema de Monty Hall",
   "def": "Jogo com três portas, um carro e duas cabras. Você escolhe uma porta, o apresentador sabe onde está o carro, abre uma porta com cabra e oferece a troca."
  },
  {
   "termo": "Probabilidade condicional",
   "def": "Chance de um evento dado que outro já aconteceu. Aqui, a chance de o carro estar na porta restante depois que o apresentador abriu uma porta com cabra."
  },
  {
   "termo": "Estratégia de sempre trocar",
   "def": "Ignorar a escolha inicial e ficar sempre com a outra porta fechada. Ganha o carro quando você errou de primeira."
  },
  {
   "termo": "Estratégia de sempre ficar",
   "def": "Manter a porta escolhida no começo. Ganha o carro apenas quando acerta de primeira."
  },
  {
   "termo": "Frequências naturais",
   "def": "Reformular o problema contando casos em vez de frações. Aumenta muito a taxa de acertos nos experimentos."
  },
  {
   "termo": "Viés de status quo",
   "def": "Preferência por manter a escolha inicial. Ajuda a explicar por que tanta gente recusa a troca."
  }
 ],
 "lembrar": [
  "Trocar de porta ganha o carro em 2/3 das vezes; ficar ganha em 1/3.",
  "O apresentador não abre uma porta ao acaso: ele sabe onde está o carro e nunca abre a porta premiada.",
  "A chance de a porta escolhida no início estar certa continua 1/3 depois que uma porta com cabra é aberta.",
  "Se você escolheu uma cabra, o apresentador é obrigado a abrir a outra cabra, e a porta que sobra esconde o carro.",
  "A resposta de 2/3 depende de suposições: carro colocado ao acaso, apresentador sempre abre uma porta com cabra e sempre oferece a troca.",
  "No estudo com 228 participantes, apenas 13% escolheram trocar de porta."
 ],
 "confusoes": [
  {
   "erro": "Depois que uma porta é aberta, restam duas portas com um prêmio, então cada uma tem 50%.",
   "correcao": "Isso valeria se o apresentador abrisse uma porta ao acaso. Ele escolhe a porta com base no que sabe, então os eventos não são independentes e a chance continua 1/3 para a porta inicial."
  },
  {
   "erro": "A probabilidade de 2/3 é a chance da porta 2 naquele instante, com a porta 3 já aberta.",
   "correcao": "2/3 é a chance da estratégia de sempre trocar, calculada antes de saber qual porta foi aberta. Se o apresentador tiver preferência por uma porta, a probabilidade condicional pode mudar."
  },
  {
   "erro": "Se o apresentador tem preferência por uma porta, trocar pode ser pior que ficar.",
   "correcao": "Mesmo nesse caso, trocar nunca é pior. A probabilidade de ganhar trocando é sempre pelo menos 1/2."
  },
  {
   "erro": "A dificuldade do problema é só falta de atenção à pergunta.",
   "correcao": "Pesquisas ligam a dificuldade à memória de trabalho e à tendência a igualar probabilidades entre opções desconhecidas."
  },
  {
   "erro": "O apresentador abre uma porta sem usar conhecimento.",
   "correcao": "A porta aberta depende da sua escolha inicial e do que o apresentador sabe. Essa informação extraída da ação dele é o que faz a probabilidade se concentrar na porta não escolhida."
  }
 ],
 "numeros": [
  "Você escolhe a porta 1. A chance de acertar de primeira é 1/3, e a de o carro estar em uma das outras duas é 2/3.",
  "Na versão com um milhão de portas, o apresentador abre 999.998 portas com cabras e deixa fechadas a porta 1 e a porta 777.777.",
  "No cálculo por Bayes, a chance de o apresentador abrir a porta 3 é 1/2, e a chance de o carro estar na porta 2 dado que a porta 3 abriu é 2/3.",
  "Em um estudo com 228 participantes, apenas 13% trocaram de porta.",
  "As cartas de 1990 contra a resposta de Marilyn vos Savant chegaram a quase dez mil."
 ]
},

flashcards: [
 {
  "f": "No problema de Monty Hall, vale mais a pena trocar ou ficar com a porta escolhida?",
  "v": "Trocar. A estratégia de sempre trocar ganha o carro em 2/3 das vezes, e a de sempre ficar ganha em 1/3."
 },
 {
  "f": "Por que a chance da porta escolhida não sobe para 1/2 quando uma porta é aberta?",
  "v": "Porque o apresentador não abre uma porta ao acaso. Ele sabe onde está o carro e nunca abre a porta premiada, então a chance da porta inicial continua 1/3."
 },
 {
  "f": "Quando a estratégia de sempre trocar ganha o carro?",
  "v": "Sempre que você errou na primeira escolha. Se escolheu uma cabra, o apresentador é obrigado a abrir a outra cabra e a porta que sobra esconde o carro."
 },
 {
  "f": "Por que o raciocínio de 50% para cada porta restante está errado?",
  "v": "Esse raciocínio supõe que o apresentador abre uma porta ao acaso. Ele usa o conhecimento dele, então os eventos não são independentes."
 },
 {
  "f": "Qual é a versão com um milhão de portas sugerida por Marilyn vos Savant?",
  "v": "Você escolhe a porta 1. O apresentador abre 999.998 portas com cabras e deixa fechadas a porta 1 e a 777.777. A chance de ter acertado de primeira é de uma em um milhão."
 },
 {
  "f": "Quais suposições sustentam a resposta de 2/3?",
  "v": "O carro é colocado aleatoriamente, o apresentador sempre abre uma porta com cabra entre as não escolhidas e sempre oferece a troca. Se você acertou de primeira, ele escolhe qual porta abrir de forma aleatória."
 },
 {
  "f": "O que acontece com a probabilidade se o apresentador tiver preferência por uma porta?",
  "v": "A probabilidade condicional de ganhar trocando pode mudar, podendo chegar a 1/2. Mesmo assim, trocar nunca é pior que ficar: é sempre pelo menos 1/2."
 },
 {
  "f": "Onde a probabilidade de 2/3 se aplica, e onde está a sutileza?",
  "v": "Ela se aplica à estratégia de sempre trocar, antes de saber qual porta foi aberta. A pergunta feita no momento da decisão é sobre a probabilidade condicional dado que uma porta específica abriu."
 },
 {
  "f": "O que o cálculo por Bayes mostra nesse problema?",
  "v": "A chance de o apresentador abrir a porta 3 é 1/2, e a chance de o carro estar na porta 2 dado que a porta 3 abriu é 2/3. A informação da porta aberta não é simétrica."
 },
 {
  "f": "Que evidência experimental existe sobre a resistência a trocar?",
  "v": "Um estudo com 228 participantes encontrou apenas 13% de trocas. Após jogar uma simulação com cartas, os participantes passaram a trocar mais, mas não necessariamente entenderam o motivo."
 },
 {
  "f": "Que mecanismos psicológicos ajudam a explicar a recusa em trocar?",
  "v": "O viés de status quo, o efeito de posse e a aversão a erros por ação versus omissão. Pessoas que trocaram de caixa em uma versão do jogo valorizaram mais o prêmio recebido."
 },
 {
  "f": "Que aplicação o problema tem em economia?",
  "v": "Em um mercado experimental, os preços refletem o erro quando todos os participantes erram, mas a presença de poucos traders sem viés já é suficiente para corrigir os preços."
 }
],

prova: [
 {
  "camada": "nucleo",
  "q": "Por que trocar de porta aumenta as chances de ganhar o carro?",
  "alts": [
   "Porque o carro é colocado na porta que você não escolheu.",
   "Porque o apresentador abre uma porta ao acaso, eliminando uma opção.",
   "Porque trocar acerta sempre que você errou na primeira escolha, o que ocorre em 2/3 das vezes.",
   "Porque as duas portas fechadas passam a ter 50% cada uma."
  ],
  "correta": 2,
  "porque": "A correta é a terceira: se você escolheu uma cabra, o apresentador é obrigado a abrir a outra cabra, e a porta que sobra esconde o carro. A alternativa mais tentadora é a última, que supõe que o apresentador abre uma porta ao acaso e iguala as probabilidades, o que não acontece."
 },
 {
  "camada": "nucleo",
  "q": "O que muda o fato de o apresentador saber onde está o carro?",
  "alts": [
   "Nada, porque ele sempre abre uma porta com cabra.",
   "Ele nunca abre a porta premiada, então a porta que ele abre depende da sua escolha inicial.",
   "Ele escolhe a porta mais provável de esconder o carro.",
   "Ele abre a porta com cabra apenas quando você acertou de primeira."
  ],
  "correta": 1,
  "porque": "A correta é a segunda: o conhecimento do apresentador faz com que a porta aberta dependa da sua escolha, e os eventos deixam de ser independentes. A alternativa mais tentadora é a primeira, porque ignora que a ação dele carrega informação."
 },
 {
  "camada": "nucleo",
  "q": "Qual é a chance de ganhar o carro se você sempre fica com a escolha inicial?",
  "alts": [
   "1/2",
   "2/3",
   "1/3",
   "1/6"
  ],
  "correta": 2,
  "porque": "A correta é 1/3: ficar ganha apenas quando você acerta de primeira. A alternativa mais tentadora é 1/2, que aparece se alguém imagina que restam duas portas com chances iguais."
 },
 {
  "camada": "nucleo",
  "q": "Qual raciocínio explica por que o erro de 50% é comum?",
  "alts": [
   "As pessoas não sabem contar quantas portas existem.",
   "As pessoas tratam a porta aberta como se tivesse sido escolhida ao acaso.",
   "As pessoas confundem carro com cabra.",
   "As pessoas ignoram que o apresentador oferece a troca."
  ],
  "correta": 1,
  "porque": "A correta é a segunda: supor abertura ao acaso leva a duas portas com 50% cada. A alternativa mais tentadora é a última, mas o problema deixa claro que a troca é sempre oferecida."
 },
 {
  "camada": "nucleo",
  "q": "O que a versão com um milhão de portas mostra?",
  "alts": [
   "Que o problema só funciona com três portas.",
   "Que trocar ajuda apenas quando o número de portas é pequeno.",
   "Que é quase certo que você errou de primeira, e a porta restante quase certamente esconde o carro.",
   "Que o apresentador escolhe a porta premiada quando há muitas portas."
  ],
  "correta": 2,
  "porque": "A correta é a terceira: com um milhão de portas, a chance de acertar de primeira é de uma em um milhão. A alternativa mais tentadora é a primeira, mas a versão grande só deixa a estrutura do problema mais visível."
 },
 {
  "camada": "nucleo",
  "q": "O que o cálculo por Bayes mostra sobre a informação da porta aberta?",
  "alts": [
   "Que a porta aberta traz a mesma informação para as duas portas fechadas.",
   "Que a informação não é simétrica, porque o apresentador tinha liberdade de escolha apenas se você acertou de primeira.",
   "Que a probabilidade da porta inicial sobe para 1/2.",
   "Que o apresentador abre a porta 3 em todos os casos."
  ],
  "correta": 1,
  "porque": "A correta é a segunda: o apresentador tinha liberdade para escolher a porta aberta se você acertou de primeira, mas não tinha se você errou. A alternativa mais tentadora é a primeira, mas é justamente essa assimetria que faz a probabilidade se concentrar na porta não escolhida."
 },
 {
  "camada": "aprofundamento",
  "q": "Na análise por Bayes com escolha inicial na porta 1 e porta 3 aberta, qual é a probabilidade condicional de o carro estar na porta 2?",
  "alts": [
   "1/3",
   "1/2",
   "2/3",
   "1/6"
  ],
  "correta": 2,
  "porque": "A correta é 2/3: a chance de o apresentador abrir a porta 3 é 1/2, e a de o carro estar na porta 2 e a porta 3 abrir é 1/3, dando (1/3)/(1/2). A alternativa mais tentadora é 1/2, que viria de tratar as duas portas fechadas como simétricas."
 },
 {
  "camada": "aprofundamento",
  "q": "Por que alguns autores consideram a solução simples incompleta?",
  "alts": [
   "Porque ela chega à resposta errada.",
   "Porque ela ignora que o apresentador sempre oferece a troca.",
   "Porque o 2/3 se aplica à estratégia de sempre trocar, antes de saber qual porta foi aberta, e a pergunta no momento da decisão é condicional.",
   "Porque ela não usa o teorema de Bayes em nenhum caso."
  ],
  "correta": 2,
  "porque": "A correta é a terceira: as duas probabilidades coincidem sob as suposições padrão, mas podem diferir se o comportamento do apresentador não for aleatório. A alternativa mais tentadora é a primeira, mas a solução simples chega à resposta certa."
 },
 {
  "camada": "aprofundamento",
  "q": "Se o apresentador sempre abre a porta da direita quando tem escolha, e abriu a porta 3, qual é a chance de ganhar trocando?",
  "alts": [
   "2/3",
   "1/3",
   "1/2",
   "1"
  ],
  "correta": 2,
  "porque": "A correta é 1/2: a preferência do apresentador muda a probabilidade condicional. A alternativa mais tentadora é 2/3, que vale sob as suposições padrão com escolha aleatória do apresentador."
 },
 {
  "camada": "extensao",
  "q": "Que mecanismos psicológicos ajudam a explicar a resistência a trocar?",
  "alts": [
   "Memória de curto prazo e cansaço.",
   "Viés de status quo, efeito de posse e aversão a erros por ação versus omissão.",
   "Falta de interesse pelo prêmio e pressa.",
   "Confiança excessiva na matemática e teimosia."
  ],
  "correta": 1,
  "porque": "A correta é a segunda: esses três mecanismos foram ligados à dificuldade e confirmados em experimentos. A alternativa mais tentadora é a primeira, mas a memória de trabalho aparece como fator ligado à dificuldade, não como explicação completa."
 },
 {
  "camada": "extensao",
  "q": "Como as versões quânticas do problema de Monty Hall se relacionam com a solução clássica?",
  "alts": [
   "Elas substituem a solução clássica.",
   "Elas mostram que trocar não ajuda em nenhum caso.",
   "Elas exploram como a informação é codificada, sem mudar a solução clássica.",
   "Elas provam que o apresentador não pode usar conhecimento."
  ],
  "correta": 2,
  "porque": "A correta é a terceira: as versões de Flitney e Abbott e de D'Ariano et al. exploram estratégias e codificação da informação. A alternativa mais tentadora é a primeira, mas as versões quânticas não alteram a solução clássica."
 }
],

fontes: [
 {
  "n": 1,
  "tipo": "enciclopédia",
  "ref": "Wikipédia (inglês), verbete 'Monty Hall problem'. Consultado em 27/09/2026.",
  "url": "https://en.wikipedia.org/wiki/Monty_Hall_problem"
 },
 {
  "n": 2,
  "tipo": "enciclopédia",
  "ref": "Wikipédia (português), verbete 'Problema de Monty Hall'. Consultado em 27/09/2026.",
  "url": "https://pt.wikipedia.org/wiki/Problema_de_Monty_Hall"
 },
 {
  "n": 3,
  "tipo": "livro",
  "ref": "Jason Rosenhouse. 'The Monty Hall Problem'. 2009.",
  "url": "https://doi.org/10.1093/oso/9780195367898.001.0001"
 },
 {
  "n": 4,
  "tipo": "artigo",
  "ref": "Richard David Gill. 'The Monty Hall problem is not a probability puzzle* (It's a challenge in mathematical modelling)'. <em>Statistica Neerlandica</em>, 2011.",
  "url": "https://doi.org/10.1111/j.1467-9574.2010.00474.x"
 },
 {
  "n": 5,
  "tipo": "artigo",
  "ref": "Ana M. Franco‐Watkins, Peter L. Derks, Michael R. P. Dougherty. 'Reasoning in the Monty Hall problem: Examining choice behaviour and probability judgements'. <em>Thinking &amp; Reasoning</em>, 2003.",
  "url": "https://doi.org/10.1080/13546780244000114"
 },
 {
  "n": 6,
  "tipo": "artigo",
  "ref": "Stefan Krauß, Xiaodong WANG. 'The psychology of the Monty Hall problem: Discovering psychological mechanisms for solving a tenacious brain teaser.'. <em>Journal of Experimental Psychology General</em>, 2003.",
  "url": "https://doi.org/10.1037/0096-3445.132.1.3"
 },
 {
  "n": 7,
  "tipo": "artigo",
  "ref": "Brian D. Kluger, Steve B. Wyatt. 'Are Judgment Errors Reflected in Market Prices and Allocations? Experimental Evidence Based on the Monty Hall Problem'. <em>The Journal of Finance</em>, 2004.",
  "url": "https://doi.org/10.1111/j.1540-6261.2004.00654.x"
 },
 {
  "n": 8,
  "tipo": "artigo",
  "ref": "Thomas D. Gilovich, Victoria Husted Medvec, Serena Chen. 'Commission, Omission, and Dissonance Reduction: Coping with Regret in the \"Monty Hall\" Problem'. <em>Personality and Social Psychology Bulletin</em>, 1995.",
  "url": "https://doi.org/10.1177/0146167295212008"
 },
 {
  "n": 9,
  "tipo": "artigo",
  "ref": "Adrian P. Flitney, Derek Abbott. 'Quantum version of the Monty Hall problem'. <em>Physical Review A</em>, 2002.",
  "url": "https://doi.org/10.1103/physreva.65.062318"
 },
 {
  "n": 10,
  "tipo": "artigo",
  "ref": "Giacomo Mauro D’Ariano, Richard David Gill, Michael Keyl, Burkhard Kümmerer et al.. 'The quantum monty hall problem'. <em>Quantum Information and Computation</em>, 2002.",
  "url": "https://doi.org/10.26421/qic2.5-3"
 },
 {
  "n": 11,
  "tipo": "artigo",
  "ref": "Dariusz Kurzyk, Adam Glos. 'Quantum inferring acausal structures and the Monty Hall problem'. <em>Quantum Information Processing</em>, 2016.",
  "url": "https://doi.org/10.1007/s11128-016-1431-8"
 }
],

fronteira: [{"tema": "Interpretação do problema: condicional versus incondicional", "html": "<p>Há um debate na literatura sobre se a pergunta de Marilyn vos Savant pedia a probabilidade incondicional de ganhar sempre trocando (2/3) ou a probabilidade condicional dado que uma porta específica foi aberta. Morgan et al. argumentaram que a resposta correta para a pergunta condicional pode variar entre 1/2 e 1 dependendo do comportamento do apresentador<sup class=\"cit\"><a href=\"#f1\">1</a></sup>. Outros autores, como Behrends, consideram que ambas as análises estão corretas, mas respondem a perguntas diferentes<sup class=\"cit\"><a href=\"#f1\">1</a></sup>. A questão permanece como uma discussão sobre a formulação precisa do problema, sem consenso definitivo sobre qual interpretação é a pretendida originalmente.</p>"}, {"tema": "Versões quânticas e teoria da medição", "html": "<p>Diversos trabalhos propõem versões quânticas do problema de Monty Hall, nas quais os jogadores podem usar estratégias quânticas e o apresentador pode armazenar informação de forma quântica<sup class=\"cit\"><a href=\"#f9\">9</a></sup><sup class=\"cit\"><a href=\"#f10\">10</a></sup><sup class=\"cit\"><a href=\"#f11\">11</a></sup>. Esses modelos são exploratórios e não alteram a solução clássica, mas investigam como princípios quânticos, como emaranhamento e superposição, afetam jogos de informação assimétrica. A relevância prática dessas versões ainda é uma questão em aberto.</p>"}],
};
