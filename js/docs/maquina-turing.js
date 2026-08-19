CONTEUDOS["maquina-turing"] = {
termo: "Máquina de Turing",
area: "Computação",
subtitulo: "Um dispositivo imaginário com uma fita infinita, um cabeçote de leitura e um punhado de regras simples bastou para definir, de uma vez por todas, o que significa 'computável'. Toda a teoria da computação, e boa parte do que hoje entendemos sobre os limites do que qualquer computador jamais poderá fazer, parte dessa ideia de 1936.",
prerequisitos: [
  "Nenhum pré-requisito técnico. Basta aceitar que um algoritmo é uma sequência precisa de passos para resolver um problema.",
  "Para o aprofundamento: familiaridade básica com a ideia de que alguns problemas matemáticos podem, em princípio, não ter solução algorítmica nenhuma."
],
conexoes: [
  { termo: "Teoremas da incompletude de Gödel", relacao: "Turing usou uma técnica de diagonalização muito próxima da usada por Gödel para provar seus teoremas de incompletude, aplicando-a para mostrar que certos problemas computacionais não têm solução algorítmica." },
  { termo: "Gato de Schrödinger e o problema da medição", relacao: "Ambos os casos envolvem debate sobre se a física quântica altera limites fundamentais estabelecidos por teorias anteriores, no caso da máquina de Turing, se computadores quânticos ultrapassam os limites da computabilidade clássica." },
  { termo: "Cascata trófica", relacao: "Como outros conceitos fundamentais, a máquina de Turing tem uma versão popular simplificada (o 'computador teórico que faz tudo') que esconde debates técnicos genuínos sobre seus limites exatos." },
  { termo: "Paradoxo de Fermi e o Grande Filtro", relacao: "Ambos os temas tratam de perguntas sobre limites fundamentais, o que é computável em princípio e o que é fisicamente possível, que continuam sendo território ativo de pesquisa teórica." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Em 1936, o matemático britânico Alan Turing propôs uma máquina que nunca foi construída fisicamente e nunca precisou ser: um dispositivo imaginário, hoje chamado de <strong>máquina de Turing</strong>, com uma fita infinitamente longa dividida em células, um cabeçote que lê e escreve símbolos numa célula de cada vez, e uma tabela pequena e finita de regras simples: dependendo do símbolo lido e do "estado" atual da máquina, ela escreve um novo símbolo, se move uma célula para a esquerda ou direita, e muda para outro estado.<sup class="cit"><a href="#f1">1</a></sup></p>

<p>Isso parece simples demais para importar. A descoberta central de Turing foi que esse mecanismo minúsculo, com regras tão básicas, é capaz de executar qualquer processo que mereça o nome de "cálculo" ou "algoritmo", no sentido mais geral possível. Não é uma calculadora limitada a operações aritméticas: com a fita e as regras certas, uma máquina de Turing pode, em princípio, simular qualquer procedimento passo a passo bem definido que um matemático humano conseguiria seguir com papel e lápis, dado tempo suficiente.</p>

<h3>O problema que Turing estava tentando resolver</h3>

<p>Turing não inventou essa máquina por curiosidade abstrata. Em 1928, o matemático alemão David Hilbert havia formulado o que chamou de "problema principal da lógica matemática", o <em>Entscheidungsproblem</em> (problema da decisão): existe algum procedimento mecânico, aplicável a qualquer afirmação matemática, capaz de determinar se ela é verdadeira ou falsa?<sup class="cit"><a href="#f7">7</a></sup> Para responder a essa pergunta de forma rigorosa, era preciso primeiro definir com precisão matemática o que "procedimento mecânico" sequer significa, algo que, até então, era tratado de forma intuitiva. A máquina de Turing foi a resposta: uma definição matemática exata do que significa "computar algo passo a passo", contra a qual qualquer alegação de "existe um procedimento mecânico para isso" poderia, finalmente, ser testada com rigor.</p>

<div class="marca consenso">
<span class="rot">O que é aceito sem disputa</span>
<p>Que a máquina de Turing captura corretamente a noção intuitiva de "o que é computável passo a passo", é uma afirmação chamada de tese de Church-Turing, proposta de forma independente por Alonzo Church (usando uma formalização matemática diferente, o cálculo lambda) e por Alan Turing em 1936. Não é um teorema matemático demonstrável, é uma tese sobre a correspondência entre uma noção intuitiva e uma definição formal, mas é aceita de forma praticamente unânime há quase noventa anos, sem que nenhum contraexemplo genuíno tenha resistido a escrutínio.<sup class="cit"><a href="#f2">2</a></sup></p>
</div>

<h3>Todo computador moderno é, em essência, uma máquina de Turing</h3>

<p>Aqui está a parte que costuma surpreender: o computador ou celular usado para ler este texto não consegue calcular nada que uma máquina de Turing, com fita suficiente e tempo suficiente, também não consiga calcular. A diferença entre um laptop moderno e a máquina de fita imaginária de 1936 não é de capacidade fundamental, é de velocidade e de quantidade de memória disponível. Em termos do que é, em princípio, computável, os dois são equivalentes.</p>
` },

aprofundamento: { minutos: 30, html: `
<h3>A resposta ao Entscheidungsproblem: não</h3>

<p>No mesmo artigo de 1936, "On Computable Numbers, with an Application to the Entscheidungsproblem", Turing usou sua máquina para responder à pergunta de Hilbert de forma negativa. Ele definiu um problema específico, hoje chamado de <strong>problema da parada</strong> (halting problem): dado o código de uma máquina de Turing e uma entrada, é possível, em geral, determinar de antemão se essa máquina vai eventualmente parar (chegar a um resultado) ou vai rodar para sempre sem nunca terminar? Turing provou que não existe nenhum procedimento algorítmico geral capaz de responder essa pergunta corretamente para todo par possível de máquina e entrada.<sup class="cit"><a href="#f1">1</a></sup> Como consequência direta, o Entscheidungsproblem original de Hilbert também não tem solução: não existe procedimento mecânico geral para decidir a verdade de qualquer afirmação matemática.</p>

<h3>Como se prova algo assim: a técnica da diagonalização</h3>

<p>A demonstração de Turing usa uma técnica de "diagonalização" muito parecida com a que Kurt Gödel havia usado poucos anos antes para provar seus teoremas de incompletude. A ideia central, simplificada: suponha, por absurdo, que existisse uma máquina "H" capaz de examinar o código de qualquer outra máquina mais sua entrada, e dizer com certeza se ela vai parar ou não. É possível construir uma nova máquina que usa H sobre seu próprio código, de um jeito propositalmente contraditório (fazendo o oposto do que H prevê), o que gera uma contradição lógica sempre que H tenta prever o comportamento dessa nova máquina em relação a si mesma. Como a contradição é inevitável, a suposição original (de que H existe) precisa ser falsa. É uma prova elegante de impossibilidade, não uma limitação técnica temporária que a tecnologia futura poderia superar.</p>

<h3>Relevância prática: por que engenheiros de software se importam</h3>

<p>O problema da parada não é só uma curiosidade teórica de 1936. Ele explica por que nenhuma ferramenta de análise de código consegue, de forma totalmente geral e automática, garantir que um programa qualquer nunca vai travar num loop infinito, ou detectar com certeza absoluta todo tipo possível de bug lógico em qualquer programa arbitrário. Ferramentas modernas de verificação de software contornam esse limite de formas específicas (analisando classes restritas de programas, aceitando margens de incerteza, ou exigindo que o programador escreva anotações adicionais), mas o limite teórico de fundo, estabelecido por Turing, continua valendo para o caso totalmente geral.</p>

<div class="tabela-env">
<table>
<thead><tr><th>Conceito</th><th>O que significa</th><th>Relevância</th></tr></thead>
<tbody>
<tr><td>Máquina de Turing</td><td>Modelo matemático abstrato de computação, com fita, cabeçote e regras de estado</td><td>Definição formal do que significa 'computável passo a passo'</td></tr>
<tr><td>Tese de Church-Turing</td><td>Afirmação de que essa definição formal captura corretamente a noção intuitiva de algoritmo</td><td>Base conceitual de toda a ciência da computação teórica</td></tr>
<tr><td>Máquina universal de Turing</td><td>Uma única máquina de Turing capaz de simular qualquer outra máquina de Turing, dado seu código como entrada</td><td>Fundamento teórico da ideia de computador de propósito geral, programável</td></tr>
<tr><td>Problema da parada</td><td>Pergunta sobre se um programa qualquer vai terminar ou rodar para sempre</td><td>Primeiro exemplo célebre de um problema matematicamente bem definido e comprovadamente sem solução algorítmica geral</td></tr>
</tbody>
</table>
</div>
` },

extensao: { minutos: 60, html: `
<h3>Computação quântica muda esse quadro?</h3>

<p>Uma pergunta recorrente, especialmente com o avanço recente de computadores quânticos: eles conseguem calcular coisas que uma máquina de Turing clássica não consegue calcular, em princípio? A resposta aceita hoje é não. Computadores quânticos podem, para certos problemas específicos, encontrar a resposta muito mais rápido que computadores clássicos (uma vantagem de velocidade, não de capacidade fundamental), mas não resolvem nenhum problema que seja comprovadamente indecidível para uma máquina de Turing clássica, como o problema da parada. A evidência disponível não sustenta a ideia de que tecnologias quânticas permitam "hipercomputação" (calcular além do que a tese de Church-Turing prevê como possível).<sup class="cit"><a href="#f8">8</a></sup></p>

<div class="marca controverso">
<span class="rot">A versão física da tese, ainda em debate filosófico</span>
<p>Existe uma versão mais forte e mais especulativa da tese de Church-Turing, às vezes chamada de tese de Church-Turing física, que afirma que nenhum sistema físico real, de qualquer natureza, jamais será capaz de calcular além do que uma máquina de Turing calcula. Diferente da tese original (sobre o que "algoritmo" significa matematicamente), essa versão é uma afirmação empírica sobre o universo físico, e por isso, em princípio, poderia ser falsa se alguma nova física ainda desconhecida permitisse algo diferente. Propostas de "hipercomputação" (usando processos físicos hipotéticos como tarefas supertarefa, computação com buracos negros, ou processos retrocausais) foram exploradas teoricamente, mas dependem de suposições físicas que, até hoje, carecem de qualquer evidência experimental de viabilidade, o que mantém essas propostas no território da especulação teórica, não da física estabelecida.<sup class="cit"><a href="#f4">4</a></sup></p>
</div>

<h3>Por que a discussão sobre hipercomputação continua relevante</h3>

<p>Mesmo sendo, hoje, majoritariamente especulativa, a discussão sobre hipercomputação cumpre um papel útil: obriga a distinguir com precisão duas coisas que costumam ser confundidas. Uma é matemática pura (a tese de Church-Turing original, sobre o que "algoritmo" significa como conceito abstrato, amplamente aceita e nunca seriamente contestada). A outra é uma afirmação sobre física (será que existe algum processo físico real que calcule algo além disso), que é logicamente independente da primeira e permanece, em princípio, aberta a revisão caso alguma descoberta futura em física fundamental mude o quadro. Até o momento, nenhuma descoberta desse tipo apareceu.</p>

<h3>O legado mais amplo, além da teoria da computabilidade</h3>

<p>A ideia de uma máquina universal de Turing, capaz de simular qualquer outra máquina de Turing a partir de seu código, é o antepassado teórico direto do conceito de computador de propósito geral e programável, a base de toda a indústria de tecnologia da informação moderna. Antes de Turing, "computador" era, em muitos contextos, uma palavra para descrever uma pessoa que calculava números manualmente, com uma máquina dedicada construída para um único propósito. A ideia de uma única máquina capaz de executar qualquer programa que lhe seja dado, mudando de tarefa apenas trocando o programa, sem alterar o hardware, é uma contribuição conceitual de Turing tão importante quanto o próprio resultado sobre o problema da parada.</p>
` }
},

sintese: {
  definicoes: [
    { termo: "Máquina de Turing", def: "Modelo matemático abstrato de computação, proposto por Alan Turing em 1936, com uma fita infinita, um cabeçote de leitura e escrita, e uma tabela finita de regras de estado, usado para definir formalmente o que significa 'computável'." },
    { termo: "Tese de Church-Turing", def: "Afirmação de que a definição formal de computação por máquina de Turing captura corretamente a noção intuitiva de algoritmo, proposta independentemente por Alonzo Church e Alan Turing em 1936, aceita de forma praticamente unânime." },
    { termo: "Entscheidungsproblem", def: "Problema formulado por David Hilbert em 1928: existe um procedimento mecânico geral para decidir a verdade de qualquer afirmação matemática? Turing respondeu negativamente em 1936, usando o problema da parada." },
    { termo: "Problema da parada (halting problem)", def: "Pergunta sobre se, dado o código de uma máquina de Turing e uma entrada, é possível determinar algoritmicamente se ela vai parar ou rodar para sempre. Turing provou que não existe solução algorítmica geral para essa pergunta." },
    { termo: "Tese de Church-Turing física", def: "Versão mais forte e especulativa da tese original, afirmando que nenhum sistema físico real será capaz de calcular além do que uma máquina de Turing calcula; diferente da tese matemática original, é uma afirmação empírica sobre o universo físico." }
  ],
  lembrar: [
    "Alan Turing propôs a máquina de Turing em 1936, num artigo que respondia ao Entscheidungsproblem de David Hilbert, formulado em 1928.",
    "A máquina de Turing é um modelo matemático abstrato (fita, cabeçote, regras de estado), nunca precisou ser construída fisicamente para cumprir seu papel teórico.",
    "A tese de Church-Turing, proposta independentemente por Church e Turing em 1936, afirma que esse modelo captura corretamente a noção intuitiva de algoritmo, e é aceita de forma praticamente unânime há quase noventa anos.",
    "Turing provou que o problema da parada (saber se um programa qualquer vai terminar ou rodar para sempre) não tem solução algorítmica geral, respondendo negativamente ao Entscheidungsproblem original.",
    "Todo computador moderno é, em capacidade fundamental de computação, equivalente a uma máquina de Turing: a diferença é de velocidade e memória disponível, não de poder computacional em princípio.",
    "Computadores quânticos podem resolver certos problemas mais rápido, mas não resolvem problemas comprovadamente indecidíveis, como o problema da parada; não há evidência de que permitam hipercomputação.",
    "A tese de Church-Turing física, mais forte e especulativa, é uma afirmação empírica sobre o universo, distinta da tese matemática original, e propostas de hipercomputação carecem, até hoje, de evidência experimental de viabilidade."
  ],
  confusoes: [
    { erro: "A máquina de Turing é um computador de verdade, construído fisicamente por Alan Turing", correcao: "É um modelo matemático abstrato, uma ferramenta de raciocínio teórico. Nunca precisou ser construída fisicamente para cumprir seu papel de definir formalmente o que significa 'computável'." },
    { erro: "Computadores modernos são fundamentalmente mais poderosos que uma máquina de Turing, em termos do que conseguem calcular", correcao: "Em capacidade fundamental de computação, computadores modernos são equivalentes a uma máquina de Turing com fita suficiente. A diferença é de velocidade e memória disponível, não de poder computacional em princípio." },
    { erro: "O problema da parada não tem solução hoje porque a tecnologia ainda não é boa o suficiente", correcao: "É uma prova matemática de impossibilidade, não uma limitação tecnológica temporária. Nenhum avanço futuro de hardware ou software poderá, em princípio, resolver o problema da parada de forma totalmente geral." },
    { erro: "Computadores quânticos ultrapassam os limites estabelecidos pela tese de Church-Turing, calculando coisas que máquinas de Turing clássicas não conseguem calcular em princípio", correcao: "Computadores quânticos podem ser mais rápidos para certos problemas específicos, mas a evidência disponível não sustenta que consigam resolver problemas comprovadamente indecidíveis, como o problema da parada, nem que permitam hipercomputação." },
    { erro: "A tese de Church-Turing é um teorema matemático, provado de forma definitiva", correcao: "É uma tese, não um teorema: uma afirmação sobre a correspondência entre uma noção intuitiva (algoritmo) e uma definição formal (máquina de Turing), aceita por consenso e por ausência de contraexemplos, não demonstrada por prova matemática dedutiva." }
  ],
  numeros: [
    "Turing, A. M. 'On Computable Numbers, with an Application to the Entscheidungsproblem', 1936: artigo original que propôs a máquina de Turing e provou a indecidibilidade do problema da parada.",
    "Hilbert formulou o Entscheidungsproblem em 1928, num congresso internacional de matemáticos, chamando-o de 'o problema principal da lógica matemática'.",
    "Alonzo Church chegou a uma conclusão equivalente por um caminho matemático diferente (o cálculo lambda), na mesma época que Turing, em 1936.",
    "A tese de Church-Turing é aceita há quase noventa anos, sem nenhum contraexemplo genuíno que tenha resistido a escrutínio científico."
  ]
},

flashcards: [
  { f: "O que é uma máquina de Turing, em termos básicos?", v: "Um modelo matemático abstrato de computação, com uma fita infinita, um cabeçote de leitura e escrita, e uma tabela finita de regras de estado, proposto por Alan Turing em 1936." },
  { f: "Qual problema, formulado por David Hilbert em 1928, motivou Turing a propor essa máquina?", v: "O Entscheidungsproblem: existe um procedimento mecânico geral capaz de decidir se qualquer afirmação matemática é verdadeira ou falsa?" },
  { f: "O que é a tese de Church-Turing?", v: "A afirmação de que a definição formal de computação por máquina de Turing captura corretamente a noção intuitiva de algoritmo, proposta independentemente por Alonzo Church e Alan Turing em 1936." },
  { f: "O que é o problema da parada (halting problem)?", v: "A pergunta sobre se, dado o código de uma máquina de Turing e uma entrada, é possível determinar algoritmicamente se ela vai parar ou rodar para sempre." },
  { f: "O que Turing provou sobre o problema da parada, e o que isso implica para o Entscheidungsproblem original?", v: "Que não existe solução algorítmica geral para o problema da parada, o que implica que o Entscheidungsproblem também não tem solução: não existe procedimento mecânico geral para decidir a verdade de qualquer afirmação matemática." },
  { f: "Que técnica de demonstração Turing usou, e com qual outro resultado matemático famoso ela se parece?", v: "A técnica de diagonalização, muito parecida com a usada por Kurt Gödel poucos anos antes para provar seus teoremas de incompletude." },
  { f: "Qual é a relação entre a capacidade computacional de um computador moderno e a de uma máquina de Turing?", v: "São equivalentes em capacidade fundamental de computação. A diferença entre eles é de velocidade e memória disponível, não de poder computacional em princípio." },
  { f: "Computadores quânticos conseguem resolver o problema da parada ou outros problemas comprovadamente indecidíveis?", v: "Não, segundo a evidência disponível. Eles podem ser mais rápidos para certos problemas específicos, mas não ultrapassam os limites de computabilidade estabelecidos pela tese de Church-Turing." },
  { f: "O que é a tese de Church-Turing física, e por que ela é diferente da tese original?", v: "É uma versão mais forte e especulativa, afirmando que nenhum sistema físico real calculará além do que uma máquina de Turing calcula. Diferente da tese matemática original, é uma afirmação empírica sobre o universo físico, em princípio revisável." },
  { f: "O que é hipercomputação, e qual é seu status científico atual?", v: "Propostas teóricas de processos físicos hipotéticos (supertarefas, buracos negros, processos retrocausais) que calculariam além dos limites de uma máquina de Turing. Até hoje carecem de qualquer evidência experimental de viabilidade, permanecendo especulação teórica." },
  { f: "O que é uma máquina universal de Turing?", v: "Uma única máquina de Turing capaz de simular qualquer outra máquina de Turing, dado seu código como entrada. É o antepassado teórico do conceito de computador de propósito geral e programável." },
  { f: "Por que ferramentas de análise de software não conseguem garantir, de forma totalmente geral, que um programa nunca vai travar num loop infinito?", v: "Porque isso é uma instância do problema da parada, comprovadamente sem solução algorítmica geral. Ferramentas modernas contornam esse limite analisando classes restritas de programas ou aceitando margens de incerteza." }
],

prova: [
  { camada: "nucleo",
    q: "O que é uma máquina de Turing?",
    alts: [
      "Um computador físico construído por Alan Turing em 1936 e ainda em funcionamento hoje.",
      "Um modelo matemático abstrato de computação, com fita, cabeçote de leitura e escrita, e regras de estado, usado para definir formalmente o que significa 'computável'.",
      "Um programa de inteligência artificial desenvolvido na década de 1980.",
      "Um dispositivo mecânico usado exclusivamente para decifrar códigos durante a Segunda Guerra Mundial."
    ],
    correta: 1,
    porque: "A máquina de Turing é uma ferramenta de raciocínio matemático abstrato, nunca precisou ser construída fisicamente para cumprir seu papel teórico de definir precisamente o conceito de computação." },

  { camada: "nucleo",
    q: "Qual problema, formulado por David Hilbert em 1928, motivou Alan Turing a propor sua máquina?",
    alts: [
      "O problema de encontrar todos os números primos existentes.",
      "O Entscheidungsproblem: existe um procedimento mecânico geral capaz de decidir se qualquer afirmação matemática é verdadeira ou falsa?",
      "O problema de calcular a órbita exata dos planetas do sistema solar.",
      "O problema de provar a existência de números irracionais."
    ],
    correta: 1,
    porque: "Para responder a essa pergunta com rigor, era preciso primeiro definir com precisão matemática o que 'procedimento mecânico' significa, e foi exatamente isso que a máquina de Turing fez." },

  { camada: "nucleo",
    q: "Qual é a relação entre a capacidade computacional de um computador moderno e a de uma máquina de Turing?",
    alts: [
      "Computadores modernos são infinitamente mais poderosos, capazes de calcular coisas impossíveis para uma máquina de Turing.",
      "São equivalentes em capacidade fundamental de computação; a diferença entre eles é de velocidade e memória disponível, não de poder computacional em princípio.",
      "Máquinas de Turing são mais poderosas que qualquer computador já construído.",
      "Não existe nenhuma relação entre os dois conceitos."
    ],
    correta: 1,
    porque: "Esse é um dos pontos mais surpreendentes do tema: em termos do que é, em princípio, computável, um laptop moderno e a máquina de fita imaginária de 1936 têm exatamente o mesmo poder." },

  { camada: "aprofundamento",
    q: "O que é o problema da parada (halting problem), e o que Turing provou sobre ele?",
    alts: [
      "É a pergunta sobre quanto tempo um computador demora para ligar, e Turing provou que sempre demora menos de um segundo.",
      "É a pergunta sobre se, dado o código de uma máquina de Turing e uma entrada, é possível determinar se ela vai parar ou rodar para sempre, e Turing provou que não existe solução algorítmica geral para essa pergunta.",
      "É a pergunta sobre quando a indústria de computadores vai parar de crescer, e Turing previu a resposta com precisão.",
      "É um problema já resolvido por computadores quânticos modernos."
    ],
    correta: 1,
    porque: "Essa é uma prova matemática de impossibilidade, não uma limitação tecnológica temporária, e tem implicações diretas para os limites de qualquer ferramenta de análise automática de programas." },

  { camada: "aprofundamento",
    q: "Que técnica de demonstração Turing usou para provar a indecidibilidade do problema da parada, e com qual outro resultado famoso ela se parece?",
    alts: [
      "Indução matemática simples, sem relação com nenhum outro resultado famoso.",
      "A técnica de diagonalização, muito parecida com a usada por Kurt Gödel poucos anos antes para provar seus teoremas de incompletude.",
      "Um experimento físico realizado em laboratório com máquinas reais.",
      "Uma pesquisa estatística com centenas de programadores voluntários."
    ],
    correta: 1,
    porque: "Ambas as provas (de Gödel e de Turing) usam uma versão da técnica de diagonalização, construindo uma contradição lógica a partir da suposição de que um procedimento geral e completo existiria." },

  { camada: "aprofundamento",
    q: "O que é a tese de Church-Turing, e qual é seu status epistemológico (é um teorema ou uma tese)?",
    alts: [
      "É um teorema matemático, demonstrado por prova dedutiva formal, sem nenhuma dúvida possível.",
      "É uma tese, não um teorema: uma afirmação sobre a correspondência entre a noção intuitiva de algoritmo e a definição formal de máquina de Turing, aceita por consenso e ausência de contraexemplos.",
      "É uma lei física, comparável às leis de Newton, testável apenas em laboratório.",
      "É uma hipótese já refutada pela computação quântica moderna."
    ],
    correta: 1,
    porque: "Diferente de um teorema, a tese de Church-Turing não pode ser 'provada' no sentido matemático estrito, porque conecta um conceito intuitivo e informal (algoritmo) a uma definição formal precisa; sua aceitação vem do consenso e da ausência de contraexemplos em quase noventa anos." },

  { camada: "aprofundamento",
    q: "Segundo a tabela apresentada no documento, o que é uma máquina universal de Turing?",
    alts: [
      "Uma máquina de Turing capaz de resolver o problema da parada para qualquer outra máquina.",
      "Uma única máquina de Turing capaz de simular qualquer outra máquina de Turing, dado seu código como entrada, fundamento teórico do conceito de computador programável de propósito geral.",
      "A primeira máquina de Turing física, construída na década de 1940.",
      "Um tipo de máquina de Turing usada exclusivamente para cálculos financeiros."
    ],
    correta: 1,
    porque: "A ideia de uma única máquina que executa qualquer programa dado a ela, sem mudança de hardware, é o antepassado teórico direto do computador de propósito geral moderno." },

  { camada: "extensao",
    q: "Segundo a evidência disponível hoje, computadores quânticos conseguem resolver problemas comprovadamente indecidíveis para máquinas de Turing clássicas, como o problema da parada?",
    alts: [
      "Sim, essa é considerada a principal vantagem prática da computação quântica.",
      "Não. Computadores quânticos podem ser mais rápidos para certos problemas específicos, mas a evidência disponível não sustenta que ultrapassem os limites de computabilidade estabelecidos pela tese de Church-Turing.",
      "Sim, mas apenas para problemas relacionados à criptografia.",
      "A pergunta ainda não faz sentido tecnicamente, porque computadores quânticos não existem de fato."
    ],
    correta: 1,
    porque: "A vantagem da computação quântica, quando existe, é de velocidade para problemas específicos (uma vantagem de desempenho), não de capacidade fundamental de calcular algo além do que já era, em princípio, computável." },

  { camada: "extensao",
    q: "Qual é a diferença entre a tese de Church-Turing original e a tese de Church-Turing física?",
    alts: [
      "Não existe diferença real entre as duas, são apenas nomes alternativos para a mesma afirmação.",
      "A tese original é sobre o que 'algoritmo' significa matematicamente; a versão física é uma afirmação empírica sobre o universo, propondo que nenhum sistema físico real jamais calculará além do que uma máquina de Turing calcula.",
      "A tese física já foi provada matematicamente, enquanto a original continua sendo apenas uma hipótese.",
      "A tese física se aplica só a computadores quânticos, e a original só a computadores clássicos."
    ],
    correta: 1,
    porque: "Essa distinção é importante porque a versão física, sendo uma afirmação empírica sobre a natureza, é logicamente independente da tese matemática original e permanece, em princípio, revisável por descobertas futuras em física fundamental." },

  { camada: "extensao",
    q: "Qual é o status científico atual das propostas de 'hipercomputação' (processos físicos hipotéticos que calculariam além dos limites de uma máquina de Turing)?",
    alts: [
      "Já foram implementadas com sucesso em laboratórios de física quântica avançada.",
      "Permanecem especulação teórica, carecendo, até hoje, de qualquer evidência experimental de viabilidade física.",
      "Foram definitivamente refutadas e abandonadas por toda a comunidade científica.",
      "São consideradas certeza científica, apenas aguardando desenvolvimento de engenharia."
    ],
    correta: 1,
    porque: "Essas propostas dependem de suposições físicas (como supertarefas ou processos retrocausais) que não têm, até o momento, nenhum suporte experimental, o que as mantém no domínio da especulação teórica, distinta de física estabelecida." }
],

fontes: [
  { n: 1, tipo: "fonte primária", ref: "Turing, A. M. 'On Computable Numbers, with an Application to the Entscheidungsproblem'. <em>Proceedings of the London Mathematical Society</em>, 1936.", url: "https://www.jerrycards.com/news/alan-turing-1936-on-computable-numbers-birth-of-computer-science" },
  { n: 2, tipo: "enciclopédia filosófica", ref: "Stanford Encyclopedia of Philosophy. Verbete 'The Church-Turing Thesis'.", url: "https://plato.stanford.edu/entries/church-turing/" },
  { n: 3, tipo: "enciclopédia filosófica", ref: "Stanford Encyclopedia of Philosophy. Verbete 'Computability and Complexity'.", url: "https://plato.stanford.edu/entries/computability/" },
  { n: 4, tipo: "fonte primária", ref: "Copeland, B. J. &amp; Shagrir, O. 'Physical Hypercomputation and the Church-Turing Thesis'.", url: "https://www.researchgate.net/publication/227007023_Physical_Hypercomputation_and_the_Church-Turing_Thesis" },
  { n: 5, tipo: "fonte primária", ref: "'Hypercomputation and the Physical Church-Turing Thesis'. <em>The British Journal for the Philosophy of Science</em> 54(2):181, 2003.", url: "https://www.journals.uchicago.edu/doi/10.1093/bjps/54.2.181" },
  { n: 6, tipo: "divulgação", ref: "Kronecker Wallis. 'Church-Turing Thesis Explained: The Limits of Computation'.", url: "https://www.kroneckerwallis.com/church-turing-thesis-explained-the-limits-of-computation/" },
  { n: 7, tipo: "enciclopédia", ref: "Grokipedia. Verbete sobre a tese de Church-Turing, com contexto histórico do Entscheidungsproblem.", url: "https://grokipedia.com/page/Church%E2%80%93Turing_thesis" },
  { n: 8, tipo: "fonte primária", ref: "Estudo sobre hipercomputação com processos quânticos adiabáticos e seus limites teóricos.", url: "https://www.sciencedirect.com/science/article/pii/S0304397503006339" },
  { n: 9, tipo: "fonte primária", ref: "'Zeno machines and hypercomputation', sobre modelos de supertarefas e seus limites físicos.", url: "https://arxiv.org/html/cs/0412022v1" },
  { n: 10, tipo: "reportagem", ref: "Center Consulting. 'On Computable Numbers, with an Application to the Entscheidungsproblem (1936)', resumo acessível do artigo original e seu impacto histórico.", url: "https://www.centerconsulting.com/code-library/papers/turing-1936" },
  { n: 11, tipo: "enciclopédia", ref: "Wikipedia. Verbete 'Turing machine', com detalhamento técnico do formalismo e variantes.", url: "https://en.wikipedia.org/wiki/Turing_machine" },
  { n: 12, tipo: "enciclopédia", ref: "Wikipedia. Verbete 'Halting problem', com detalhamento da prova de indecidibilidade e suas aplicações.", url: "https://en.wikipedia.org/wiki/Halting_problem" },
  { n: 13, tipo: "fonte primária", ref: "Church, A. 'An Unsolvable Problem of Elementary Number Theory'. <em>American Journal of Mathematics</em> 58(2):345-363, 1936. Formulação independente e equivalente à de Turing, via cálculo lambda.", url: "https://www.jstor.org/stable/2371045" },
  { n: 14, tipo: "revisão acadêmica", ref: "'The Church-Turing thesis: Still valid after all these years?'. <em>Applied Mathematics and Computation</em>.", url: "https://www.sciencedirect.com/science/article/abs/pii/S0096300305008374" },
  { n: 15, tipo: "enciclopédia", ref: "Wikipedia. Verbete 'Church-Turing thesis', com panorama das diferentes formulações e do debate sobre hipercomputação.", url: "https://en.wikipedia.org/wiki/Church%E2%80%93Turing_thesis" }
]
};

if (typeof module !== "undefined") { module.exports = { CONTEUDOS }; }
