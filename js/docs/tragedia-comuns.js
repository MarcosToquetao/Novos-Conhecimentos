CONTEUDOS["tragedia-comuns"] = {
termo: "Tragédia dos comuns e a crítica de Ostrom",
area: "Economia",
subtitulo: "Um artigo de 1968 previu que recursos compartilhados sempre colapsam, e que só o Estado ou a privatização poderiam evitá-lo. Uma cientista política passou vinte anos indo a campo verificar — e encontrou centenas de comunidades que resolveram o problema sozinhas.",
prerequisitos: [
  "Nenhum pré-requisito técnico. Basta entender que uma pessoa pode ganhar com uma ação que prejudica o grupo.",
  "Para o aprofundamento: noção de que numa interação estratégica cada um decide olhando o que o outro faria."
],
conexoes: [
  { termo: "Equilíbrio de Nash", relacao: "A tragédia dos comuns é um equilíbrio de Nash que não é ótimo de Pareto — o exemplo mais citado dessa divergência." },
  { termo: "Lógica da ação coletiva (Olson)", relacao: "Olson formulou o problema geral do carona; Hardin aplicou ao caso dos recursos naturais e Ostrom mostrou as saídas institucionais." },
  { termo: "Externalidades e o teorema de Coase", relacao: "Coase argumentou que a definição clara de direitos permite negociação eficiente; Ostrom documentou empiricamente que direitos coletivos funcionam tão bem quanto privados." },
  { termo: "Externalidades", relacao: "A tragédia é o caso em que o custo da própria ação recai sobre terceiros e o benefício fica com quem age." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Garrett Hardin publicou na <em>Science</em>, em 1968, um artigo que se tornou um dos textos mais citados das ciências sociais.<sup class="cit"><a href="#f1">1</a></sup> A imagem é simples: um pasto aberto a todos os pastores de uma vila. Cada pastor, agindo racionalmente, decide acrescentar mais um animal ao rebanho.</p>

<p>A conta que ele faz é a seguinte. O benefício do animal adicional — sua carne, seu leite — é <strong>inteiramente dele</strong>. O custo — um pouco mais de pasto degradado — é <strong>dividido entre todos</strong>. Se há vinte pastores, ele arca com um vinte avos do prejuízo e fica com a totalidade do lucro. A decisão racional é clara: acrescentar o animal.</p>

<p>E é clara para todos os pastores, simultaneamente. Cada um acrescenta. O pasto colapsa. Hardin: "A ruína é o destino para o qual todos os homens correm, cada um perseguindo seu próprio interesse numa sociedade que acredita na liberdade dos bens comuns. A liberdade num bem comum traz a ruína para todos."</p>

<figure class="figura">[[FIG:comuns-matriz]]<figcaption>A estrutura de incentivos em sua forma mais simples. Explorar é a melhor resposta individual qualquer que seja a escolha do outro — e o resultado conjunto é pior para ambos do que a cooperação que nenhum dos dois consegue escolher sozinho.</figcaption></figure>

<h3>Por que o argumento é tão convincente</h3>

<p>Porque não depende de ninguém ser ganancioso, mal-intencionado ou estúpido. Ele funciona com agentes perfeitamente racionais e até com agentes de boa-fé. Basta que o benefício seja privado e o custo, socializado. É essa robustez que faz do argumento um instrumento analítico poderoso — e o que o tornou aplicável a pesca, desmatamento, aquíferos, resistência a antibióticos, congestionamento urbano e emissões de carbono.</p>

<p>Hardin extraiu daí uma conclusão política forte: como a persuasão moral não altera a estrutura de incentivos, a única saída seria a <strong>coerção mútua mutuamente acordada</strong> — regulação estatal — ou a <strong>privatização</strong>, que internaliza o custo em quem toma a decisão. Estado ou mercado. Não haveria terceira via.</p>

<h3>O que Elinor Ostrom encontrou</h3>

<p>Ostrom fez algo que o debate teórico não estava fazendo: foi verificar. Ao longo de décadas, ela e colaboradores documentaram e compararam centenas de sistemas reais de recursos compartilhados — sistemas de irrigação nas Filipinas e na Espanha, pastagens comunais na Suíça, florestas no Japão e no Nepal, pesqueiras na Turquia e no Sri Lanka.<sup class="cit"><a href="#f2">2</a></sup></p>

<p>O achado central: <strong>muitos desses sistemas funcionaram de forma sustentável por séculos</strong>, sem privatização e sem controle estatal. Os pastos comunais de Törbel, nos Alpes suíços, são geridos coletivamente com regras documentadas desde 1224. As <em>huertas</em> de Valência distribuem água por regras comunitárias que atravessaram mais de quinhentos anos e três regimes políticos.</p>

<p>Ostrom recebeu o Nobel de Economia em 2009 — a primeira mulher a recebê-lo, e uma cientista política num prêmio de economia.</p>

<div class="marca consenso">
<span class="rot">O que o achado significa, com precisão</span>
<p>Ostrom não mostrou que Hardin estava logicamente errado. O modelo dele está correto <em>para as condições que ele supõe</em>. O que ela mostrou é que essas condições — ausência de comunicação, ausência de regras acordadas, ausência de monitoramento e de sanções — descrevem um caso particular e não muito comum. Hardin modelou um <strong>recurso de acesso livre</strong> (open access) e chamou isso de "bem comum". Bens comuns reais quase sempre têm regras de acesso, e essa diferença é o que decide o resultado.</p>
</div>

<h3>A distinção que resolve metade da confusão</h3>

<div class="tabela-env">
<table>
<thead><tr><th>Regime</th><th>Quem pode usar</th><th>Existem regras internas</th><th>Exemplo</th></tr></thead>
<tbody>
<tr><td>Acesso livre</td><td>Qualquer um</td><td>Não</td><td>Alto-mar antes de tratados; atmosfera</td></tr>
<tr><td>Propriedade comum</td><td>Grupo definido</td><td>Sim, definidas pelo grupo</td><td>Pastos de Törbel; huertas de Valência</td></tr>
<tr><td>Propriedade estatal</td><td>Definido pelo Estado</td><td>Sim, definidas pelo Estado</td><td>Parques nacionais</td></tr>
<tr><td>Propriedade privada</td><td>O proprietário</td><td>Sim, do proprietário</td><td>Fazenda cercada</td></tr>
</tbody>
</table>
</div>

<p>Hardin colapsou as duas primeiras linhas numa só. A tragédia é real e severa em acesso livre. Em propriedade comum bem governada, ela frequentemente não ocorre. Confundir as duas leva a recomendações de política que destroem instituições que estavam funcionando — e isso aconteceu, repetidamente, em programas de nacionalização de florestas e pesqueiras no século XX.</p>
` },

aprofundamento: { minutos: 15, html: `
<h3>Os oito princípios de desenho institucional</h3>

<p>A contribuição mais operacional de Ostrom foi identificar regularidades nos sistemas que duraram. Não são receitas, e ela era explícita quanto a isso: são padrões recorrentes entre casos bem-sucedidos.<sup class="cit"><a href="#f2">2</a></sup></p>

<ol>
<li><strong>Fronteiras claras.</strong> Quem tem direito de uso e qual é o limite físico do recurso precisam estar definidos. Sem isso, o investimento em conservação beneficia quem não contribuiu.</li>
<li><strong>Regras ajustadas às condições locais.</strong> As regras de apropriação e de provisão devem corresponder à ecologia, à economia e à cultura do lugar. Regras importadas de outro contexto tendem a falhar.</li>
<li><strong>Arranjos de escolha coletiva.</strong> Quem é afetado pelas regras participa de sua modificação. Isso gera legitimidade e permite adaptação.</li>
<li><strong>Monitoramento.</strong> Alguém observa o cumprimento — e, crucialmente, monitores são os próprios usuários ou respondem a eles, não a uma autoridade distante.</li>
<li><strong>Sanções graduadas.</strong> A primeira infração recebe punição leve. Punição severa imediata destrói a relação social sem melhorar a conformidade.</li>
<li><strong>Mecanismos de resolução de conflitos.</strong> Rápidos, baratos e acessíveis localmente.</li>
<li><strong>Reconhecimento do direito de se organizar.</strong> Autoridades externas não podem desautorizar as regras locais. Este princípio é frequentemente o que falha.</li>
<li><strong>Governança em camadas.</strong> Para recursos grandes, instituições aninhadas em múltiplos níveis, cada uma com o escopo adequado.</li>
</ol>

<div class="marca consenso">
<span class="rot">Os dois princípios que mais importam</span>
<p>Análises posteriores sugerem que monitoramento e sanções graduadas — os itens 4 e 5 — são os mais fortemente associados ao sucesso. Isso é teoricamente coerente: eles são justamente o que altera a matriz de incentivos que Hardin descreveu. Cooperação não emerge por virtude; emerge porque a estrutura de recompensas mudou.</p>
</div>

<h3>Por que a comunicação muda tudo</h3>

<p>O resultado experimental mais robusto da economia comportamental sobre esse tema: em jogos de bens públicos de laboratório, permitir que os participantes <strong>conversem antes de decidir</strong> eleva substancialmente a cooperação. Mesmo sem qualquer mecanismo de execução — conversa sem contrato, sem punição, sem obrigação.</p>

<p>Isso é teoricamente desconcertante, porque na teoria dos jogos clássica a comunicação sem compromisso vinculante é "conversa barata" e não deveria alterar o equilíbrio. Alterar ela altera, e de forma replicável.</p>

<p>Acrescentar a possibilidade de <strong>punir</strong> quem não coopera — mesmo a custo para quem pune — eleva a cooperação ainda mais e a torna estável ao longo de muitas rodadas. Este é o achado de Fehr e Gächter sobre punição altruísta.<sup class="cit"><a href="#f3">3</a></sup></p>

<div class="marca controverso">
<span class="rot">Ponto em disputa</span>
<p>A interpretação desses resultados é debatida. Uma leitura: humanos têm preferências sociais genuínas — reciprocidade, aversão à desigualdade — que não estão no modelo do agente puramente egoísta. Outra leitura: os efeitos são fortemente dependentes de contexto experimental e demanda característica, e diminuem com repetição, anonimato e valores monetários altos. Meta-análises confirmam que os efeitos existem e são robustos, mas com tamanhos menores do que os primeiros estudos sugeriam — um padrão comum na literatura pós-crise de replicação.</p>
</div>

<h3>Onde a solução comunitária não funciona</h3>

<p>Ostrom era mais cuidadosa do que muitos de seus divulgadores. Ela identificou condições em que a autogestão tende a falhar:</p>

<ul>
<li><strong>Grupos muito grandes</strong>, em que o monitoramento mútuo se torna inviável e o anonimato protege quem burla.</li>
<li><strong>Alta rotatividade</strong> de participantes, que impede a construção de reputação e de expectativa de interação futura.</li>
<li><strong>Recursos muito móveis</strong> — peixes migratórios, aquíferos transfronteiriços — em que as fronteiras do recurso não coincidem com as fronteiras da comunidade.</li>
<li><strong>Heterogeneidade forte de interesses</strong> entre os usuários, que dificulta acordo sobre regras.</li>
<li><strong>Ausência de reconhecimento externo</strong>, quando um Estado ou empresa pode simplesmente ignorar as regras locais.</li>
</ul>

<p>Em outras palavras: a resposta correta a Hardin não é "comunidades sempre resolvem". É "existe um repertório de arranjos institucionais, e qual funciona depende de características verificáveis do recurso e do grupo".</p>
` },

extensao: { minutos: 30, html: `
<h3>O clima é o caso difícil</h3>

<p>A atmosfera parece o exemplo definitivo da tragédia: benefício privado da emissão, custo distribuído globalmente. E quase todas as condições que Ostrom identificou como favoráveis estão ausentes — o grupo tem bilhões de pessoas e quase duzentos Estados, as fronteiras do recurso não coincidem com nenhuma jurisdição, não há autoridade com poder de sanção, e os interesses são profundamente heterogêneos.</p>

<p>Ostrom, num de seus últimos trabalhos, propôs uma resposta que ela chamou de <strong>governança policêntrica</strong>: em vez de esperar um acordo global único, reconhecer que ação climática ocorre simultaneamente em cidades, empresas, regiões, países e blocos, e que esses níveis podem se reforçar mutuamente.<sup class="cit"><a href="#f4">4</a></sup></p>

<div class="marca emergente">
<span class="rot">Abordagem emergente, com evidência ainda parcial</span>
<p>A tese policêntrica é influente e informa o desenho do Acordo de Paris, com suas contribuições nacionalmente determinadas em vez de metas impostas de cima. Se ela funciona é uma questão empírica aberta e séria: críticos argumentam que a ausência de sanção deixa o problema do carona intacto e que compromissos voluntários têm sido sistematicamente insuficientes frente às metas declaradas. É honesto registrar que este é o teste em curso, não um resultado consolidado.</p>
</div>

<h3>O que a história de Hardin ensina sobre uso de modelos</h3>

<p>Este caso é um estudo exemplar de como um modelo pode ser correto e mal aplicado ao mesmo tempo — e vale extrair a lição metodológica, que transcende o tema.</p>

<p><strong>Hardin não coletou dados.</strong> O artigo de 1968 não apresenta um único caso empírico de bem comum que tenha colapsado do modo descrito. A parábola do pasto é hipotética, adaptada de um panfleto de 1833 de William Forster Lloyd. Um modelo formalmente válido foi tratado como descrição do mundo sem que a correspondência fosse verificada.</p>

<p><strong>A generalização foi imediata e política.</strong> O artigo salta do pasto hipotético para conclusões sobre população mundial, propriedade e coerção. Hardin foi explícito em defender restrições coercitivas à reprodução e restrições à imigração, e escreveu posteriormente sobre "ética do bote salva-vidas" em termos que o Southern Poverty Law Center posteriormente classificou como nacionalismo branco.<sup class="cit"><a href="#f5">5</a></sup></p>

<p><strong>O modelo teve consequências materiais.</strong> Governos usaram o argumento para nacionalizar florestas e pesqueiras geridas comunalmente, em nome da conservação. Em vários casos documentados — Nepal, Índia, África Oriental —, a nacionalização destruiu regras locais de manejo funcionais e converteu propriedade comum em acesso livre <em>de facto</em>, produzindo exatamente a degradação que se queria evitar.</p>

<div class="marca controverso">
<span class="rot">Uma qualificação necessária</span>
<p>Nada disso significa que o mecanismo de Hardin seja irreal. Colapso de pesqueiras por sobrepesca é bem documentado — o caso do bacalhau do Grand Banks, no Canadá, levou ao fim de uma indústria de quinhentos anos e ao desemprego de dezenas de milhares de pessoas em 1992, e o estoque não se recuperou plenamente. O ponto não é que Hardin errou sobre o mecanismo. É que ele errou ao tratar um caso particular como lei geral, e ao concluir que só existiam dois remédios possíveis.</p>
</div>

<h3>Um vocabulário mais útil</h3>

<p>A economia moderna classifica bens por duas propriedades independentes:</p>

<div class="tabela-env">
<table>
<thead><tr><th></th><th>Fácil excluir quem não paga</th><th>Difícil excluir</th></tr></thead>
<tbody>
<tr><td><strong>Uso de um reduz o do outro</strong></td><td>Bem privado (um pão)</td><td>Recurso comum (um estoque de peixe)</td></tr>
<tr><td><strong>Uso de um não reduz o do outro</strong></td><td>Bem de clube (streaming)</td><td>Bem público (defesa nacional, ar limpo)</td></tr>
</tbody>
</table>
</div>

<p>A tragédia dos comuns é o problema do quadrante superior direito: <strong>rival mas não excludente</strong>. Reconhecer isso ajuda a diagnosticar o problema real de um caso concreto. Congestionamento urbano é recurso comum: o espaço viário é rival e não excludente. Resistência a antibióticos também: a eficácia de um antibiótico é um estoque esgotável que ninguém consegue reservar.</p>

<p>E a distinção sugere as alavancas disponíveis. Tornar o bem excludente (pedágio urbano, cotas de pesca) é uma. Alterar o cálculo individual por monitoramento e sanção é outra. Reduzir a rivalidade por tecnologia é uma terceira. Qual delas funciona não é uma questão ideológica: é uma questão sobre as propriedades verificáveis do recurso e do grupo.</p>

<div class="marca consenso">
<span class="rot">O que segurar</span>
<p>O mecanismo de Hardin é real e explica colapsos reais em regime de acesso livre. A conclusão de que só Estado ou privatização resolvem é empiricamente falsa: Ostrom documentou centenas de arranjos comunitários duradouros e identificou os princípios que os distinguem dos que falharam. O erro metodológico a evitar é o de Hardin — tomar um modelo formalmente válido como descrição do mundo sem ir verificar.</p>
</div>
` }
},

flashcards: [
  { f: "Qual é a estrutura de incentivos da tragédia dos comuns?", v: "O benefício da ação individual é integralmente privado; o custo é dividido entre todos os usuários. Cada um ganha em explorar mais, mesmo sabendo que a exploração coletiva destrói o recurso." },
  { f: "Que distinção Hardin não fez, e que Ostrom mostrou ser decisiva?", v: "Entre acesso livre (sem regras, qualquer um usa) e propriedade comum (grupo definido, regras estabelecidas pelo grupo). A tragédia é severa no primeiro caso; frequentemente não ocorre no segundo." },
  { f: "Cite três dos princípios de desenho institucional de Ostrom.", v: "Fronteiras claras de quem pode usar; monitoramento feito pelos próprios usuários ou por quem responde a eles; sanções graduadas, começando leves. Também: regras adaptadas ao local, participação na definição das regras, resolução barata de conflitos, reconhecimento externo do direito de organizar e governança em camadas." },
  { f: "Quais princípios de Ostrom são mais associados ao sucesso e por quê?", v: "Monitoramento e sanções graduadas — porque são exatamente os mecanismos que alteram a matriz de incentivos descrita por Hardin. Cooperação não emerge de virtude, mas de estrutura de recompensas modificada." },
  { f: "Por que a comunicação prévia é teoricamente desconcertante nos jogos de bens públicos?", v: "Porque na teoria dos jogos clássica comunicação sem compromisso vinculante é 'conversa barata' e não deveria alterar o equilíbrio. Empiricamente, ela eleva a cooperação de forma robusta e replicável." },
  { f: "Em que condições a autogestão comunitária tende a falhar?", v: "Grupos muito grandes, alta rotatividade de participantes, recursos muito móveis, forte heterogeneidade de interesses e ausência de reconhecimento externo do direito de se organizar." },
  { f: "O que é governança policêntrica?", v: "A proposta de Ostrom de que a ação sobre problemas globais ocorra simultaneamente em múltiplos níveis — cidades, empresas, regiões, países — que se reforçam mutuamente, em vez de depender de um único acordo global." },
  { f: "Qual foi a consequência prática de aplicar Hardin como política pública?", v: "Nacionalizações de florestas e pesqueiras que destruíram regras locais funcionais e converteram propriedade comum em acesso livre de fato, produzindo a degradação que se queria evitar — casos documentados no Nepal, Índia e África Oriental." },
  { f: "Como se classifica um recurso comum nas duas dimensões de bens?", v: "Rival (o uso de um reduz o disponível para o outro) mas não excludente (é difícil impedir o acesso). Bem público é não rival e não excludente; bem de clube é não rival e excludente." },
  { f: "Qual é a lição metodológica do caso Hardin?", v: "Um modelo formalmente válido pode ser correto e mal aplicado ao mesmo tempo. Hardin não apresentou nenhum caso empírico, generalizou imediatamente para política, e o resultado teve consequências materiais destrutivas." }
],

prova: [
  { camada: "nucleo",
    q: "Por que o argumento de Hardin não depende de os pastores serem gananciosos?",
    alts: [
      "Porque ele supõe que todos agem por altruísmo mal calculado.",
      "Porque a estrutura de incentivos basta: benefício privado e custo socializado tornam a exploração a decisão racional mesmo para agentes de boa-fé.",
      "Porque o modelo pressupõe que os pastores não conseguem calcular consequências.",
      "Porque o colapso do pasto ocorreria de qualquer forma, por causas naturais."
    ],
    correta: 1,
    porque: "É justamente essa independência de motivação que dá força analítica ao argumento. Um agente perfeitamente racional e bem-intencionado, avaliando corretamente que arca com uma fração do custo e com a totalidade do benefício, chega à mesma decisão. Por isso persuasão moral não altera o resultado — só mudar a estrutura altera." },

  { camada: "nucleo",
    q: "Qual é a distinção central que Ostrom introduziu contra a formulação de Hardin?",
    alts: [
      "Entre recursos renováveis e não renováveis.",
      "Entre países ricos e pobres na gestão de recursos.",
      "Entre acesso livre (sem regras) e propriedade comum (grupo definido com regras próprias) — que Hardin tratava como a mesma coisa.",
      "Entre recursos naturais e recursos produzidos."
    ],
    correta: 2,
    porque: "Hardin descreveu um regime de acesso livre e o chamou de 'bem comum'. Bens comuns reais quase sempre têm fronteiras de quem pode usar e regras internas. Essa diferença decide o resultado, e confundi-las levou a políticas que destruíram instituições funcionais." },

  { camada: "nucleo",
    q: "O que Ostrom demonstrou sobre a conclusão política de Hardin de que só o Estado ou a privatização resolveriam o problema?",
    alts: [
      "Que ela está logicamente incorreta dentro do próprio modelo.",
      "Que ela é empiricamente falsa: centenas de sistemas comunitários geriram recursos de forma sustentável por séculos, alguns com regras documentadas desde o século XIII.",
      "Que a privatização é sempre pior que a gestão estatal.",
      "Que comunidades sempre resolvem o problema quando deixadas por conta própria."
    ],
    correta: 1,
    porque: "A demonstração é empírica, não lógica: o modelo de Hardin está correto para as condições que supõe. Note também que a última alternativa é o erro simétrico — Ostrom identificou explicitamente condições em que a autogestão falha, e era mais cuidadosa que muitos de seus divulgadores." },

  { camada: "aprofundamento",
    q: "Entre os oito princípios de Ostrom, quais são mais fortemente associados ao sucesso, e por quê?",
    alts: [
      "Fronteiras claras e reconhecimento externo, porque garantem legitimidade jurídica.",
      "Monitoramento e sanções graduadas, porque são os mecanismos que efetivamente alteram a matriz de incentivos.",
      "Governança em camadas e resolução de conflitos, porque reduzem custos administrativos.",
      "Regras adaptadas ao local e escolha coletiva, porque aumentam a satisfação dos participantes."
    ],
    correta: 1,
    porque: "Análises comparativas posteriores destacam monitoramento e sanções graduadas. A explicação teórica é direta: são justamente esses mecanismos que mudam o cálculo individual descrito por Hardin. A cooperação observada não decorre de virtude moral, mas de uma estrutura de recompensas modificada — o que é uma explicação mais robusta e mais generalizável." },

  { camada: "aprofundamento",
    q: "Por que o efeito da comunicação prévia em jogos de bens públicos é teoricamente interessante?",
    alts: [
      "Porque confirma exatamente a previsão da teoria dos jogos clássica.",
      "Porque na teoria clássica comunicação sem compromisso vinculante não deveria alterar o equilíbrio, e empiricamente ela eleva a cooperação de forma robusta.",
      "Porque só funciona quando há punição monetária associada.",
      "Porque o efeito desaparece completamente quando o experimento é repetido."
    ],
    correta: 1,
    porque: "É o problema da 'conversa barata': promessas não vinculantes não mudam a estrutura de payoffs e portanto não deveriam mudar o comportamento. Elas mudam. Isso pressiona o modelo do agente puramente egoísta — embora a interpretação exata continue disputada e os tamanhos de efeito tenham diminuído em replicações mais rigorosas." },

  { camada: "aprofundamento",
    q: "Ostrom identificou condições em que a autogestão comunitária tende a falhar. Qual das seguintes NÃO é uma delas?",
    alts: [
      "Grupos muito grandes, com monitoramento mútuo inviável.",
      "Recursos muito móveis, cujas fronteiras não coincidem com as da comunidade.",
      "Existência de regras locais reconhecidas por autoridades externas.",
      "Alta rotatividade de participantes, impedindo construção de reputação."
    ],
    correta: 2,
    porque: "O reconhecimento externo do direito de se organizar é justamente um dos princípios que favorecem o sucesso — e sua ausência é uma das causas de falha mais frequentes. As outras três alternativas são condições de falha corretamente identificadas por Ostrom." },

  { camada: "extensao",
    q: "Por que o problema climático é especialmente difícil sob a ótica de Ostrom?",
    alts: [
      "Porque o mecanismo de Hardin não se aplica a bens não rivais.",
      "Porque quase todas as condições favoráveis estão ausentes: grupo enorme, fronteiras do recurso sem correspondência com jurisdições, ausência de autoridade sancionadora e interesses fortemente heterogêneos.",
      "Porque não há dados suficientes sobre o recurso em questão.",
      "Porque a atmosfera é um bem privado disfarçado de bem público."
    ],
    correta: 1,
    porque: "É o pior caso possível para autogestão: escala global, ausência de fronteiras coincidentes, sem sanção efetiva e com interesses profundamente divergentes. Daí a proposta de governança policêntrica — cuja eficácia é um teste empírico em curso, informando o desenho do Acordo de Paris, e não um resultado consolidado." },

  { camada: "extensao",
    q: "Qual é a crítica metodológica mais forte ao artigo de Hardin de 1968?",
    alts: [
      "O modelo formal contém um erro de dedução.",
      "Ele apresenta um modelo hipotético sem nenhum caso empírico verificado, e salta imediatamente dele para conclusões amplas de política pública.",
      "Ele foi publicado numa revista sem revisão por pares.",
      "Ele ignora que recursos naturais são renováveis."
    ],
    correta: 1,
    porque: "A dedução está correta dadas as premissas. O problema é a ausência de verificação empírica e a generalização imediata: a parábola do pasto é hipotética, adaptada de um panfleto de 1833. Um modelo formalmente válido foi tratado como descrição do mundo, e as políticas derivadas dele destruíram instituições funcionais em vários países." },

  { camada: "extensao",
    q: "Na classificação de bens por rivalidade e exclusão, um recurso comum é:",
    alts: [
      "Não rival e não excludente.",
      "Rival e excludente.",
      "Rival e não excludente.",
      "Não rival e excludente."
    ],
    correta: 2,
    porque: "Rival porque o uso de um reduz o disponível para os outros (um peixe pescado não está mais no mar); não excludente porque é difícil impedir o acesso. Bem público é não rival e não excludente (defesa nacional); bem de clube é não rival e excludente (streaming). Diagnosticar corretamente o quadrante indica quais alavancas de política estão disponíveis." }
],

fontes: [
  { n: 1, tipo: "fonte primária", ref: "Hardin, G. 'The Tragedy of the Commons'. <em>Science</em> 162(3859):1243–1248, 1968.", url: "https://doi.org/10.1126/science.162.3859.1243" },
  { n: 2, tipo: "livro", ref: "Ostrom, E. <em>Governing the Commons: The Evolution of Institutions for Collective Action</em>. Cambridge University Press, 1990. Os oito princípios e os estudos de caso comparativos.", url: "https://doi.org/10.1017/CBO9780511807763" },
  { n: 3, tipo: "artigo", ref: "Fehr, E. &amp; Gächter, S. 'Altruistic punishment in humans'. <em>Nature</em> 415:137–140, 2002.", url: "https://doi.org/10.1038/415137a" },
  { n: 4, tipo: "artigo", ref: "Ostrom, E. 'Polycentric systems for coping with collective action and global environmental change'. <em>Global Environmental Change</em> 20(4):550–557, 2010.", url: "https://doi.org/10.1016/j.gloenvcha.2010.07.004" },
  { n: 5, tipo: "artigo", ref: "Frischmann, B., Marciano, A. &amp; Ramello, G. 'Retrospectives: Tragedy of the Commons after 50 Years'. <em>Journal of Economic Perspectives</em> 33(4):211–228, 2019 — avaliação da recepção e dos usos indevidos do artigo de Hardin.", url: "https://doi.org/10.1257/jep.33.4.211" },
  { n: 6, tipo: "artigo", ref: "Cox, M., Arnold, G. &amp; Villamayor-Tomás, S. 'A review of design principles for community-based natural resource management'. <em>Ecology and Society</em> 15(4):38, 2010 — teste empírico dos princípios de Ostrom em 91 estudos.", url: "https://doi.org/10.5751/ES-03704-150438" }
]
};
