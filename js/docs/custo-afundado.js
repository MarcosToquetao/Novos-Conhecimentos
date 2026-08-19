CONTEUDOS["custo-afundado"] = {
termo: "Falácia do custo afundado",
area: "Psicologia",
subtitulo: "Continuar investindo em algo só porque você já investiu muito nele é, na definição de livro-texto, um erro de raciocínio. Só que, quando pesquisadores foram checar de novo se esse comportamento é sempre irracional, mesmo em animais, a resposta ficou mais complicada do que o nome 'falácia' sugere.",
prerequisitos: [
  "Nenhum pré-requisito técnico. Basta aceitar que decisões deveriam, em teoria, olhar para frente (custos e benefícios futuros), não para trás.",
  "Para o aprofundamento: familiaridade básica com a ideia de que economistas tratam certos custos como 'irrecuperáveis' e, por isso, irrelevantes para a próxima decisão."
],
conexoes: [
  { termo: "Efeito Dunning-Kruger", relacao: "Outro viés de decisão amplamente citado, cuja versão popular também precisou de reanálise estatística cuidadosa para separar o núcleo real do exagero." },
  { termo: "Crise de replicação", relacao: "Um caso em que estudos recentes, incluindo réplicas em animais, questionaram se o mecanismo psicológico original está correto, sem negar que o padrão comportamental observado é real." },
  { termo: "Falácia do promotor e probabilidade condicional", relacao: "Outro nome popular de 'falácia' aplicado a um raciocínio que, dependendo do contexto, pode não ser tão claramente irracional quanto o rótulo sugere." },
  { termo: "Problema agente-principal", relacao: "Escalada de comprometimento com custos afundados é um problema recorrente em decisões organizacionais, onde quem decide continuar um projeto raramente é quem arca sozinho com o prejuízo de abandoná-lo." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Você comprou um ingresso não reembolsável para um filme. Na metade, percebe que o filme é ruim. Sair agora significa recuperar pelo menos o tempo que sobrou da noite; ficar até o fim não traz o dinheiro do ingresso de volta de jeito nenhum, ele já foi gasto, quer você fique ou saia. Ainda assim, boa parte das pessoas fica até o fim, citando o dinheiro já gasto como razão. Esse é o exemplo mais simples da <strong>falácia do custo afundado</strong>: deixar uma decisão futura ser influenciada por um custo passado que já não pode ser recuperado, não importa a escolha que se faça daqui para frente.</p>

<p>O nome vem da expressão em inglês <em>sunk cost</em>, custo "afundado", que já foi para o fundo e não volta à tona. A regra normativa da economia é direta: só custos e benefícios futuros deveriam entrar na decisão. O que já foi gasto é, por definição, igual em qualquer cenário a partir de agora, então não deveria pesar na balança.</p>

<h3>O experimento clássico</h3>

<p>Hal Arkes e Catherine Blumer, em 1985, testaram isso com um cenário de viagem de esqui.<sup class="cit"><a href="#f1">1</a></sup> Metade dos participantes imaginava ter comprado uma viagem de $100 não reembolsável para o Michigan, e depois descobria uma viagem melhor, por $50, para Wisconsin, no mesmo fim de semana (impossível fazer as duas). A outra metade imaginava o mesmo cenário, mas sem menção a dinheiro já gasto. Cerca de metade do primeiro grupo escolheu a viagem pior (Michigan), citando o dinheiro já investido, mesmo sabendo que aproveitariam menos.<sup class="cit"><a href="#f1">1</a></sup> O experimento se tornou a demonstração de referência do efeito.</p>

<div class="marca consenso">
<span class="rot">O que é bem documentado</span>
<p>Que pessoas, em muitos contextos diferentes (dinheiro, tempo, esforço), tendem a continuar um curso de ação por terem investido nele, mesmo quando a alternativa disponível é objetivamente melhor daqui para frente, é um padrão comportamental replicado em dezenas de estudos desde Arkes e Blumer. Isso não está em disputa.</p>
</div>

<h3>Onde a pergunta ficou mais interessante</h3>

<p>O que passou a ser questionado, mais recentemente, não é se o padrão de comportamento existe, mas se ele é sempre, e só, um <em>erro</em> de raciocínio. Pesquisadores encontraram um comportamento parecido em ratos e camundongos: animais que já haviam "investido" tempo esperando por uma recompensa continuavam esperando mais do que animais que ainda não tinham investido esse tempo, um padrão interpretado, por décadas, como evidência de que o efeito do custo afundado é tão profundo que aparece até em cérebros bem mais simples que o humano.<sup class="cit"><a href="#f4">4</a></sup></p>

<p>Um estudo de 2022 revisitou essa interpretação com um modelo computacional detalhado e encontrou algo diferente: o mesmo padrão de comportamento nos animais pode surgir de um processo de decisão inteiramente racional (continuar esperando porque, estatisticamente, o tempo já investido é informação real sobre a chance de a recompensa ainda vir), sem precisar de nenhum "viés de custo afundado" separado.<sup class="cit"><a href="#f4">4</a></sup> Isso não anula o experimento humano de Arkes e Blumer, mas mostra que atribuir automaticamente qualquer persistência após investimento a um "erro" psicológico pode estar pulando uma etapa.</p>

<h3>Como aplicar isso na prática, sem exagerar</h3>

<p>A lição prática de Arkes e Blumer continua de pé para decisões humanas explícitas e bem definidas, como a do cinema ou da viagem de esqui: se o dinheiro já foi gasto de qualquer forma, ele não deveria decidir o que fazer a seguir. Mas vale desconfiar de quem usa "isso é só a falácia do custo afundado" como resposta pronta para qualquer decisão de continuar algo em que já se investiu, porque em situações mais complexas, com informação incerta sobre o futuro, persistir depois de um investimento nem sempre é irracional, às vezes é a leitura correta de que o próprio investimento carrega informação real sobre o que vem a seguir.</p>
` },

aprofundamento: { minutos: 30, html: `
<h3>A definição normativa, com precisão</h3>

<p>Em teoria da decisão, um custo afundado é qualquer custo já incorrido que não pode ser recuperado independentemente da escolha futura. A prescrição padrão é que decisões racionais devem se basear apenas em custos e benefícios <strong>marginais</strong>, ou seja, incrementais a partir de agora, ignorando o que já foi gasto. A falácia consiste em deixar o tamanho do investimento passado influenciar a decisão sobre continuar ou não, mesmo quando esse investimento é, matematicamente, igual em todos os cenários possíveis daqui para frente.</p>

<p>Arkes e Blumer propuseram uma explicação psicológica para por que isso acontece: um desejo de não parecer ter desperdiçado o investimento original, ligado à aversão à perda e ao medo de ser visto (por si mesmo ou por outros) como alguém que "jogou dinheiro fora".<sup class="cit"><a href="#f1">1</a></sup> Esse mecanismo, de proteção da própria imagem de tomador de decisão competente, é distinto de um simples erro de cálculo: a pessoa muitas vezes sabe que o dinheiro já foi gasto e ainda assim deixa isso pesar, por razões emocionais e sociais, não por confusão aritmética.</p>

<h3>Escalada de comprometimento em organizações</h3>

<p>Uma versão organizacional relacionada, mas distinta, é a <strong>escalada de comprometimento</strong> (<em>escalation of commitment</em>), descrita por Barry Staw a partir de 1976: gestores e equipes continuam investindo recursos em projetos com desempenho ruim, às vezes aumentando o investimento justamente depois de sinais claros de fracasso, em parte para justificar a decisão original diante de superiores ou de si mesmos. Esse fenômeno amplia o problema do custo afundado individual para o nível institucional, e é agravado quando quem decide continuar não é a mesma pessoa que vai arcar com o custo final de um fracasso reconhecido publicamente.</p>

<h3>A evidência em animais, e por que ela foi reavaliada</h3>

<p>Estudos anteriores a 2022, incluindo trabalhos com camundongos e humanos em tarefas de espera por recompensa, relataram um padrão consistente: quanto mais tempo um indivíduo (humano ou animal) já havia esperado por uma recompensa incerta, mais tempo adicional ele estava disposto a esperar, mesmo quando isso não fazia sentido do ponto de vista da recompensa esperada restante.<sup class="cit"><a href="#f4">4</a></sup> Esse achado foi usado como argumento de que o efeito do custo afundado tem raízes evolutivas profundas, presentes em cérebros de mamíferos bem distantes do humano.</p>

<div class="marca emergente">
<span class="rot">A reavaliação de 2022</span>
<p>Torben Ott, Paul Masset, Thiago Gouvêa e Adam Kepecs, publicando na revista <em>Science Advances</em>, construíram um modelo computacional de um agente racional que atualiza continuamente sua estimativa de quanto tempo ainda vale a pena esperar, com base em toda a informação disponível, incluindo o próprio tempo já esperado (que, em muitas tarefas experimentais reais, é uma pista estatística genuína sobre a chance de sucesso). Esse modelo, sem qualquer 'viés de custo afundado' embutido, reproduziu o mesmo padrão de comportamento observado nos animais.<sup class="cit"><a href="#f4">4</a></sup> A conclusão dos autores não é que o custo afundado nunca influencia decisões (o experimento humano de Arkes e Blumer continua válido para o cenário que testou), mas que atribuir automaticamente qualquer persistência após investimento a um viés específico, sem descartar antes uma explicação estatística mais simples, é um erro metodológico recorrente na literatura.</p>
</div>

<div class="tabela-env">
<table>
<thead><tr><th>Explicação</th><th>Mecanismo proposto</th><th>Status</th></tr></thead>
<tbody>
<tr><td>Falácia do custo afundado (Arkes &amp; Blumer, 1985)</td><td>Aversão à perda e desejo de não parecer ter desperdiçado o investimento</td><td>Bem replicada em decisões humanas explícitas de escolha única</td></tr>
<tr><td>Escalada de comprometimento (Staw, 1976)</td><td>Justificação social e institucional de uma decisão anterior, mesmo diante de fracasso</td><td>Bem documentada em contextos organizacionais</td></tr>
<tr><td>Persistência racional dependente de informação (Ott et al., 2022)</td><td>O tempo já investido carrega informação estatística real sobre a chance de sucesso futuro</td><td>Explica parte do comportamento antes atribuído ao viés, especialmente em tarefas de espera repetida</td></tr>
</tbody>
</table>
</div>
` },

extensao: { minutos: 60, html: `
<h3>Custo afundado como dispositivo de compromisso</h3>

<p>Uma linha de pesquisa mais recente em economia comportamental propõe algo ainda mais contraintuitivo: para uma pessoa com viés de presente (que tende a subvalorizar recompensas futuras em relação a recompensas imediatas), sentir uma resistência psicológica a abandonar um investimento já feito pode funcionar como um <strong>dispositivo de compromisso</strong> útil, ajudando essa pessoa a persistir em projetos que, calculado com cuidado, valem a pena no longo prazo, mas que ela mesma abandonaria cedo demais se avaliasse cada momento isoladamente.<sup class="cit"><a href="#f5">5</a></sup> Segundo essa análise, a sensibilidade ao custo afundado tem um efeito líquido positivo sobre o bem-estar de agentes com viés de presente, mesmo reconhecendo que o mesmo mecanismo também produz os casos claros de persistência ineficiente que a literatura clássica documentou.</p>

<div class="marca controverso">
<span class="rot">Até onde essa reinterpretação vai</span>
<p>Essa linha de pesquisa não afirma que toda escalada de comprometimento é, no fundo, boa ideia disfarçada. Ela propõe que o mecanismo psicológico por trás da sensibilidade a custos afundados pode ter uma função adaptativa em certos contextos (conter o abandono precioce de projetos valiosos), ao mesmo tempo em que gera custos reais em outros (manter projetos genuinamente ruins). Separar esses dois casos na prática, sem o benefício da visão retrospectiva, continua sendo difícil, e é exatamente por isso que a etiqueta "falácia" precisa ser usada com mais cuidado do que o senso comum sugere.</p>
</div>

<h3>Por que isso importa fora do laboratório</h3>

<p>Decisões de negócio, políticas públicas e relações pessoais são repetidamente analisadas através da lente do custo afundado: continuar um projeto de infraestrutura estourado no orçamento, manter um relacionamento insatisfatório "depois de tantos anos investidos", ou insistir numa carreira depois de anos de formação específica. A distinção mais útil, à luz da pesquisa mais recente, não é perguntar apenas "estou sendo influenciado pelo que já gastei", mas separar duas perguntas diferentes: o investimento passado está me dando informação real e válida sobre as chances futuras (o que pode justificar continuar), ou estou só evitando a sensação desconfortável de admitir uma perda (o que é o núcleo do erro original de Arkes e Blumer)? A resposta muda caso a caso, e fingir que a resposta é sempre "é uma falácia, pare agora" ignora a complexidade que a pesquisa mais recente revelou.</p>

<h3>O que fica de pé, e o que precisa de mais cautela</h3>

<p>O experimento original de Arkes e Blumer, com escolhas humanas explícitas e de uma única vez (como a viagem de esqui), continua sendo evidência sólida de que pessoas se deixam influenciar por custos que, matematicamente, deveriam ser irrelevantes. O que mudou é a generalização automática desse achado para qualquer situação de persistência depois de um investimento, especialmente em cenários de decisão repetida e incerta, onde o próprio tempo ou recurso já investido pode carregar informação legítima sobre o que vem a seguir. Tratar todo caso de "continuar apesar do já gasto" como prova automática de irracionalidade é, ironicamente, o tipo de simplificação excessiva que a psicologia da decisão deveria evitar.</p>
` }
},

sintese: {
  definicoes: [
    { termo: "Custo afundado (sunk cost)", def: "Custo já incorrido que não pode ser recuperado independentemente da decisão futura, e que, segundo a teoria normativa da decisão, não deveria influenciar escolhas daqui para frente." },
    { termo: "Falácia do custo afundado", def: "Padrão de comportamento, documentado por Arkes e Blumer em 1985, de continuar um curso de ação por já ter investido nele, mesmo quando a alternativa disponível é objetivamente melhor a partir de agora." },
    { termo: "Escalada de comprometimento", def: "Versão organizacional do fenômeno, descrita por Barry Staw a partir de 1976: gestores continuam ou aumentam investimento em projetos malsucedidos, em parte para justificar a decisão original." },
    { termo: "Dispositivo de compromisso (commitment device)", def: "Mecanismo, psicológico ou institucional, que ajuda uma pessoa a manter um plano de longo prazo mesmo diante da tentação de abandoná-lo cedo demais; pesquisa recente propõe que a sensibilidade a custos afundados pode funcionar dessa forma para pessoas com viés de presente." },
    { termo: "Viés de presente (present bias)", def: "Tendência de dar peso desproporcional a recompensas imediatas em relação a recompensas futuras, mesmo quando essas últimas são objetivamente maiores." }
  ],
  lembrar: [
    "Arkes e Blumer (1985) demonstraram o efeito com o experimento da viagem de esqui: cerca de metade dos participantes escolheu a viagem pior, mas com dinheiro não reembolsável já gasto, em vez da viagem melhor e mais barata.",
    "A regra normativa da economia é que só custos e benefícios futuros deveriam entrar numa decisão; custos já incorridos são, por definição, iguais em qualquer cenário possível a partir de agora.",
    "Estudos com ratos e camundongos pareciam mostrar o mesmo padrão de comportamento, sugerindo raízes evolutivas profundas para o efeito.",
    "Um estudo de 2022 (Ott, Masset, Gouvêa e Kepecs, Science Advances) mostrou que um modelo puramente racional, sem nenhum 'viés de custo afundado', consegue reproduzir o mesmo padrão de comportamento animal, porque o tempo já investido pode carregar informação estatística real sobre a chance de sucesso.",
    "Escalada de comprometimento (Staw, 1976) é a versão organizacional do fenômeno, agravada quando quem decide continuar um projeto não é quem arca com o custo de reconhecer o fracasso.",
    "Pesquisa recente em economia comportamental propõe que a sensibilidade a custos afundados pode funcionar como dispositivo de compromisso útil para pessoas com viés de presente, sem que isso anule os casos claros de persistência ineficiente."
  ],
  confusoes: [
    { erro: "Qualquer decisão de continuar algo em que já se investiu tempo ou dinheiro é, por definição, a falácia do custo afundado", correcao: "Em decisões repetidas e incertas, o tempo ou recurso já investido pode carregar informação estatística real sobre as chances futuras, o que pode tornar a persistência uma escolha racional, não uma falácia. É preciso separar caso a caso." },
    { erro: "O experimento de Arkes e Blumer de 1985 foi refutado pela pesquisa mais recente", correcao: "O experimento humano original, com uma escolha explícita e única, continua sendo evidência sólida do efeito. O que a pesquisa recente questiona é a generalização automática desse achado para outros contextos, especialmente estudos com animais em tarefas de espera repetida." },
    { erro: "O fato de animais como ratos e camundongos apresentarem o mesmo padrão de comportamento prova que o custo afundado é um viés evolutivo profundo e universal", correcao: "Um modelo computacional puramente racional, sem nenhum viés embutido, reproduziu o mesmo padrão de comportamento animal em pelo menos um estudo (Ott et al., 2022), o que enfraquece a conclusão de que o padrão observado exige necessariamente um mecanismo de viés." },
    { erro: "Reconhecer que a persistência após investimento pode ser racional em certos contextos significa que a falácia do custo afundado não existe", correcao: "As duas coisas coexistem: o efeito psicológico de Arkes e Blumer é real e replicado em decisões humanas explícitas, e, em paralelo, parte do comportamento antes atribuído automaticamente a esse viés, especialmente em animais e em decisões repetidas, tem explicação estatística mais simples." },
    { erro: "Escalada de comprometimento e falácia do custo afundado são exatamente a mesma coisa", correcao: "São fenômenos relacionados, mas distintos: a falácia do custo afundado é um padrão individual de decisão; a escalada de comprometimento é sua versão organizacional, com a camada adicional de justificação social e institucional de decisões anteriores." }
  ],
  numeros: [
    "Arkes, H. R. &amp; Blumer, C. (1985), Organizational Behavior and Human Decision Processes 35:124-140: cerca de metade dos participantes com dinheiro já investido escolheu a opção pior no experimento da viagem de esqui.",
    "Staw, B. M. (1976): formulação original do conceito de escalada de comprometimento em contextos organizacionais.",
    "Ott, T., Masset, P., Gouvêa, T. S. &amp; Kepecs, A. (2022), Science Advances 8(6):eabi7004: modelo computacional racional reproduz o padrão de comportamento em animais sem viés de custo afundado embutido.",
    "A falácia do custo afundado é replicada em dezenas de estudos desde 1985, em contextos que envolvem dinheiro, tempo e esforço já investidos."
  ]
},

flashcards: [
  { f: "O que é um custo afundado, na definição da teoria da decisão?", v: "Um custo já incorrido que não pode ser recuperado independentemente da escolha futura, e que, segundo a regra normativa, não deveria influenciar decisões daqui para frente." },
  { f: "Descreva o experimento clássico de Arkes e Blumer (1985) sobre custo afundado.", v: "Participantes com uma viagem de esqui de $100 não reembolsável, ao descobrirem uma viagem melhor por $50, frequentemente escolhiam a viagem pior e mais cara, citando o dinheiro já investido. Cerca de metade fez essa escolha." },
  { f: "Qual é a regra normativa da economia sobre quais custos deveriam entrar numa decisão?", v: "Só custos e benefícios marginais, ou seja, incrementais a partir de agora, deveriam contar. Custos já incorridos são iguais em qualquer cenário futuro possível e, por isso, deveriam ser ignorados." },
  { f: "Que explicação psicológica Arkes e Blumer propuseram para o efeito do custo afundado?", v: "Um desejo de não parecer ter desperdiçado o investimento original, ligado à aversão à perda e ao medo de ser visto como alguém que 'jogou dinheiro fora'." },
  { f: "O que é escalada de comprometimento, e quem a descreveu originalmente?", v: "Versão organizacional do fenômeno, descrita por Barry Staw a partir de 1976: gestores continuam ou aumentam investimento em projetos malsucedidos, em parte para justificar a decisão original diante de outros." },
  { f: "Que padrão de comportamento foi observado em ratos e camundongos, e como era interpretado antes de 2022?", v: "Animais que já haviam esperado mais tempo por uma recompensa incerta continuavam esperando mais, um padrão interpretado como evidência de que o efeito do custo afundado tem raízes evolutivas profundas." },
  { f: "O que Ott, Masset, Gouvêa e Kepecs (2022) mostraram em seu estudo publicado na Science Advances?", v: "Que um modelo computacional de um agente puramente racional, usando o tempo já investido como informação estatística legítima sobre a chance de sucesso, reproduz o mesmo padrão de comportamento animal, sem precisar de nenhum viés de custo afundado embutido." },
  { f: "Isso significa que o experimento original de Arkes e Blumer, com humanos, foi refutado?", v: "Não. O experimento humano, com uma escolha explícita e única, continua sendo evidência sólida do efeito. O que foi questionado é a generalização automática para outros contextos, como tarefas de espera repetida em animais." },
  { f: "O que é a proposta de que a sensibilidade a custos afundados funciona como 'dispositivo de compromisso'?", v: "A ideia de que, para pessoas com viés de presente, resistir a abandonar um investimento já feito pode ajudar a manter projetos de longo prazo valiosos que, avaliados momento a momento, seriam abandonados cedo demais." },
  { f: "Essa proposta significa que toda escalada de comprometimento é, no fundo, uma boa decisão disfarçada?", v: "Não. A pesquisa reconhece que o mesmo mecanismo psicológico também produz os casos clássicos de persistência ineficiente, e que separar os dois casos na prática, sem visão retrospectiva, é difícil." },
  { f: "Qual é a distinção mais útil para avaliar se uma decisão de continuar algo é racional ou é a falácia do custo afundado?", v: "Perguntar se o investimento passado está dando informação real e válida sobre as chances futuras (o que pode justificar continuar) ou se a pessoa está apenas evitando a sensação desconfortável de admitir uma perda (o núcleo do erro original)." },
  { f: "Por que a escalada de comprometimento é agravada em contextos organizacionais?", v: "Porque quem decide continuar um projeto malsucedido raramente é a mesma pessoa que arcará sozinha com o custo de reconhecer publicamente o fracasso, o que cria incentivo adicional para justificar a decisão original." }
],

prova: [
  { camada: "nucleo",
    q: "O que é a falácia do custo afundado?",
    alts: [
      "A tendência de sempre escolher a opção mais barata disponível, independentemente da qualidade.",
      "Deixar uma decisão futura ser influenciada por um custo passado que já não pode ser recuperado, não importa a escolha feita a partir de agora.",
      "O hábito de nunca investir dinheiro em projetos de longo prazo.",
      "A incapacidade de calcular corretamente o valor de um investimento futuro."
    ],
    correta: 1,
    porque: "O núcleo do conceito é deixar um custo irrecuperável (que já é igual em qualquer cenário futuro) pesar numa decisão que deveria olhar só para frente." },

  { camada: "nucleo",
    q: "No experimento clássico de Arkes e Blumer (1985), o que aconteceu com participantes que tinham uma viagem de esqui de $100 não reembolsável, ao saberem de uma viagem melhor por $50?",
    alts: [
      "Todos escolheram automaticamente a viagem melhor e mais barata, sem exceção.",
      "Cerca de metade escolheu a viagem pior e mais cara, citando o dinheiro já investido como razão.",
      "Nenhum participante conseguiu decidir, e o experimento foi cancelado.",
      "Todos pediram reembolso da viagem original antes de decidir."
    ],
    correta: 1,
    porque: "Esse resultado, com cerca de metade dos participantes escolhendo a opção objetivamente pior por causa do dinheiro já gasto, é a demonstração de referência do efeito do custo afundado." },

  { camada: "nucleo",
    q: "Segundo a regra normativa da economia, quais custos deveriam influenciar uma decisão?",
    alts: [
      "Todos os custos já gastos no projeto, do início ao momento atual.",
      "Apenas custos e benefícios futuros (marginais), já que custos passados são iguais em qualquer cenário possível a partir de agora.",
      "Apenas custos emocionais, nunca custos financeiros.",
      "O custo total do projeto, dividido igualmente entre passado e futuro."
    ],
    correta: 1,
    porque: "Como o custo já incorrido não muda dependendo da escolha futura, ele não carrega informação relevante para decidir entre as opções disponíveis a partir de agora, do ponto de vista puramente normativo." },

  { camada: "aprofundamento",
    q: "O que é escalada de comprometimento, descrita por Barry Staw a partir de 1976?",
    alts: [
      "Um método de investimento financeiro que sempre aumenta o retorno ao longo do tempo.",
      "A versão organizacional do custo afundado: gestores continuam ou aumentam investimento em projetos malsucedidos, em parte para justificar a decisão original.",
      "Uma técnica de negociação salarial usada em grandes empresas.",
      "Um princípio de contabilidade que exige registrar todos os custos afundados nos relatórios financeiros."
    ],
    correta: 1,
    porque: "A escalada de comprometimento amplia o efeito individual do custo afundado para o nível institucional, agravado pela pressão de justificar decisões anteriores diante de outras pessoas." },

  { camada: "aprofundamento",
    q: "Que padrão de comportamento em ratos e camundongos foi historicamente interpretado como evidência de raízes evolutivas profundas para o custo afundado?",
    alts: [
      "Animais evitavam completamente qualquer tarefa que envolvesse espera por recompensa.",
      "Animais que já haviam esperado mais tempo por uma recompensa incerta continuavam esperando mais tempo adicional.",
      "Animais mostravam preferência aleatória entre recompensas, sem nenhum padrão consistente.",
      "Animais nunca persistiam em nenhuma tarefa além de alguns segundos."
    ],
    correta: 1,
    porque: "Esse padrão, de persistência crescente proporcional ao tempo já investido, foi por décadas interpretado como evidência de que o efeito do custo afundado é profundo e compartilhado entre espécies." },

  { camada: "aprofundamento",
    q: "O que Ott, Masset, Gouvêa e Kepecs mostraram em seu estudo de 2022, publicado na Science Advances?",
    alts: [
      "Que animais são completamente incapazes de qualquer forma de tomada de decisão racional.",
      "Que um modelo computacional de um agente puramente racional, usando o tempo já investido como informação estatística legítima, reproduz o mesmo padrão de comportamento animal, sem precisar de um viés de custo afundado.",
      "Que o experimento original de Arkes e Blumer com humanos estava completamente errado.",
      "Que ratos e camundongos nunca demonstraram nenhum padrão de persistência relacionado a tempo investido."
    ],
    correta: 1,
    porque: "O estudo propõe uma explicação alternativa e mais simples (persistência racional baseada em informação estatística) para um padrão de comportamento antes atribuído automaticamente a um viés psicológico específico." },

  { camada: "aprofundamento",
    q: "Segundo a tabela de explicações apresentada no documento, o que diferencia 'persistência racional dependente de informação' (Ott et al., 2022) da falácia clássica do custo afundado?",
    alts: [
      "Não há nenhuma diferença real entre as duas explicações.",
      "Na persistência racional, o tempo já investido carrega informação estatística real sobre a chance de sucesso futuro, enquanto na falácia clássica a pessoa é influenciada pelo desejo de não parecer ter desperdiçado o investimento, mesmo sem essa informação real.",
      "A persistência racional só se aplica a decisões financeiras, nunca a decisões de tempo.",
      "A falácia clássica só ocorre em animais, nunca em humanos."
    ],
    correta: 1,
    porque: "A distinção central é se o investimento passado carrega informação genuína e útil para a decisão futura (persistência racional) ou se influencia a decisão apenas por razões emocionais e sociais, sem informação nova (falácia clássica)." },

  { camada: "extensao",
    q: "O que a linha de pesquisa sobre custo afundado como 'dispositivo de compromisso' propõe?",
    alts: [
      "Que a falácia do custo afundado nunca existiu e é um mito da psicologia.",
      "Que, para pessoas com viés de presente, a resistência a abandonar um investimento já feito pode ajudar a manter projetos de longo prazo valiosos que, avaliados momento a momento, seriam abandonados cedo demais.",
      "Que todas as pessoas deveriam ser incentivadas a abandonar qualquer projeto assim que surgir uma alternativa melhor.",
      "Que dispositivos de compromisso só funcionam em contextos financeiros, nunca em decisões pessoais."
    ],
    correta: 1,
    porque: "Essa linha de pesquisa argumenta que o mesmo mecanismo psicológico que causa persistência ineficiente em alguns casos pode, em outros, corrigir um viés diferente (o viés de presente), com efeito líquido positivo sobre o bem-estar." },

  { camada: "extensao",
    q: "Por que o documento argumenta que a reinterpretação do custo afundado como possível dispositivo de compromisso não significa que toda escalada de comprometimento seja uma boa decisão disfarçada?",
    alts: [
      "Porque essa reinterpretação nunca foi aceita por nenhum pesquisador sério.",
      "Porque o mesmo mecanismo psicológico que pode ajudar a manter projetos valiosos também continua produzindo os casos clássicos de persistência ineficiente, e separar os dois casos na prática, sem visão retrospectiva, é difícil.",
      "Porque escalada de comprometimento é um fenômeno completamente diferente e sem relação com custo afundado.",
      "Porque dispositivos de compromisso só existem em teoria, nunca na prática real."
    ],
    correta: 1,
    porque: "A pesquisa recente propõe uma função adaptativa possível para o mecanismo, sem negar que ele também gera os custos reais documentados pela literatura clássica, o que exige cautela ao aplicar qualquer um dos dois rótulos automaticamente." },

  { camada: "extensao",
    q: "Qual é a pergunta mais útil, segundo o documento, para avaliar se uma decisão de continuar algo é racional ou é a falácia do custo afundado?",
    alts: [
      "Perguntar apenas quanto dinheiro já foi gasto no projeto até agora.",
      "Perguntar se o investimento passado está dando informação real e válida sobre as chances futuras, ou se a pessoa está apenas evitando a sensação desconfortável de admitir uma perda.",
      "Perguntar se outras pessoas aprovariam a decisão de continuar.",
      "Perguntar se o projeto já existe há mais de um ano."
    ],
    correta: 1,
    porque: "Essa distinção captura a diferença central revelada pela pesquisa mais recente: persistência baseada em informação genuína pode ser racional, enquanto persistência baseada só em evitar a sensação de desperdício é o núcleo do erro original identificado por Arkes e Blumer." }
],

fontes: [
  { n: 1, tipo: "fonte primária", ref: "Arkes, H. R. &amp; Blumer, C. 'The Psychology of Sunk Cost'. <em>Organizational Behavior and Human Decision Processes</em> 35(1):124-140, 1985.", url: "https://www.sciencedirect.com/science/article/abs/pii/0749597885900494" },
  { n: 2, tipo: "fonte primária", ref: "Staw, B. M. 'Knee-deep in the big muddy: A study of escalating commitment to a chosen course of action'. <em>Organizational Behavior and Human Performance</em> 16(1):27-44, 1976.", url: "https://www.sciencedirect.com/science/article/abs/pii/0030507376900050" },
  { n: 3, tipo: "enciclopédia", ref: "The Decision Lab. Verbete 'The Sunk Cost Fallacy', com resumo do experimento original e aplicações práticas.", url: "https://thedecisionlab.com/biases/the-sunk-cost-fallacy" },
  { n: 4, tipo: "crítica", ref: "Ott, T., Masset, P., Gouvêa, T. S. &amp; Kepecs, A. 'Apparent sunk cost effect in rational agents'. <em>Science Advances</em> 8(6):eabi7004, 2022.", url: "https://www.science.org/doi/10.1126/sciadv.abi7004" },
  { n: 5, tipo: "fonte primária", ref: "Hartig, B. 'Rethinking the Sunk Cost \"Fallacy\": A Commitment Device against Present-Bias'.", url: "https://papers.ssrn.com/sol3/Delivery.cfm/3023700.pdf?abstractid=3023700" },
  { n: 6, tipo: "divulgação", ref: "ResearchProspect. 'The Sunk Cost Fallacy: Definition &amp; How to Avoid It'.", url: "https://www.researchprospect.com/what-is-the-sunk-cost-fallacy/" },
  { n: 7, tipo: "reportagem", ref: "Cobertura jornalística sobre a réplica do estudo de Ott e colegas e suas implicações para a interpretação de comportamento animal em neurociência.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8836799/" },
  { n: 8, tipo: "enciclopédia", ref: "Verbete de referência sobre escalada de comprometimento (escalation of commitment) em contextos organizacionais.", url: "https://db.arabpsychology.com/escalation-of-commitment-2/" },
  { n: 9, tipo: "fonte primária", ref: "Thaler, R. 'Toward a Positive Theory of Consumer Choice'. <em>Journal of Economic Behavior &amp; Organization</em> 1(1):39-60, 1980. Introduziu o custo afundado como conceito de economia comportamental.", url: "https://www.sciencedirect.com/science/article/abs/pii/0167268180900517" },
  { n: 10, tipo: "fonte primária", ref: "Navarro, A. D. &amp; Fantino, E. 'The Sunk Cost Effect in Pigeons and Humans'. <em>Journal of the Experimental Analysis of Behavior</em> 83(1):1-13, 2005. Um dos estudos que relatou o padrão em animais antes da reavaliação de 2022.", url: "https://pubmed.ncbi.nlm.nih.gov/15762377/" },
  { n: 11, tipo: "fonte primária", ref: "Kahneman, D. &amp; Tversky, A. 'Prospect Theory: An Analysis of Decision under Risk'. <em>Econometrica</em> 47(2):263-291, 1979. Base teórica da aversão à perda usada para explicar o efeito do custo afundado.", url: "https://www.jstor.org/stable/1914185" },
  { n: 12, tipo: "revisão acadêmica", ref: "'The road ahead for sunk costs'. <em>Learning &amp; Behavior</em>, revisão sobre o estado da pesquisa em custo afundado em humanos e animais.", url: "https://link.springer.com/article/10.3758/s13420-019-00375-8" },
  { n: 13, tipo: "fonte primária", ref: "Pesquisa sobre custo afundado em decisões de investimento financeiro e vieses de portfólio.", url: "https://www.sciencedirect.com/science/article/pii/S0167268122002268" },
  { n: 14, tipo: "fonte primária", ref: "'Beating Irrationality: Does Delegating to IT Alleviate the Sunk Cost Effect?', estudo sobre estratégias para reduzir a influência de custos afundados em decisões de negócio.", url: "https://arxiv.org/pdf/1110.2096" },
  { n: 15, tipo: "divulgação", ref: "Leadership IQ. 'The Sunk Cost Fallacy', com exemplos aplicados a decisões organizacionais.", url: "https://www.leadershipiq.com/blogs/leadershipiq/the-sunk-cost-fallacy" }
]
};

if (typeof module !== "undefined") { module.exports = { CONTEUDOS }; }
