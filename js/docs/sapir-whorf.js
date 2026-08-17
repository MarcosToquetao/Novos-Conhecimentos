CONTEUDOS["sapir-whorf"] = {
termo: "Relatividade linguística (hipótese Sapir-Whorf)",
area: "Linguística",
subtitulo: "A língua que você fala molda o modo como você pensa? A versão forte foi abandonada, a versão fraca tem evidência real mas modesta, e o achado mais famoso da área não se replicou. Um caso de estudo sobre como uma ideia sobrevive à evidência que a sustentava.",
prerequisitos: [
  "Nenhum. O texto discute experimentos concretos, não teoria linguística.",
  "Ajuda ter alguma familiaridade com a diferença entre 'os dados apoiam X' e 'X é verdade'."
],
conexoes: [
  { termo: "Crise de replicação na psicologia", relacao: "O caso dos 'azuis russos' é um exemplo didático de achado célebre que não sobreviveu a uma replicação rigorosa." },
  { termo: "Gramática universal e o debate inatista", relacao: "É a posição teórica oposta: se a estrutura linguística é universal e inata, há pouco espaço para relatividade." },
  { termo: "Signo linguístico e arbitrariedade (Saussure)", relacao: "A arbitrariedade do signo é o pressuposto estruturalista que torna a hipótese formulável." },
  { termo: "Viés de confirmação", relacao: "A longevidade da hipótese apesar de evidência fraca é um caso de estudo sobre como narrativas atraentes selecionam a evidência que as confirma." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Comecemos pelo problema de atribuição. Nem Edward Sapir nem Benjamin Lee Whorf formularam algo que eles chamassem de "hipótese Sapir-Whorf". Os dois nunca coescreveram sobre o tema. O rótulo foi cunhado por terceiros nos anos 1950, e a formulação nítida em "versão forte" e "versão fraca" também é obra de comentadores posteriores.</p>

<p>Isso não é detalhe bibliográfico. A hipótese entrou na cultura já como uma caricatura, e é essa caricatura que a maioria das pessoas conhece — inclusive muitos dos que a defendem.</p>

<h3>As duas versões</h3>

<p><strong>Determinismo linguístico (versão forte):</strong> a língua determina o pensamento; o que sua língua não codifica, você não pode pensar. Categorias linguísticas seriam prisões cognitivas.</p>

<p><strong>Relatividade linguística (versão fraca):</strong> a língua influencia certos processos cognitivos — em particular categorização, memória e atenção — tornando mais fáceis ou mais habituais certas discriminações.</p>

<p>A versão forte está morta, e por razões simples. Falantes aprendem conceitos que sua língua não codifica, o tempo todo. Línguas incorporam palavras novas quando precisam. Bebês categorizam antes de falar. E a própria formulação é autorrefutante: se a língua determinasse os limites do pensável, seria impossível descrever, em português, um conceito que o português não tem — coisa que este parágrafo acabou de fazer.</p>

<div class="marca consenso">
<span class="rot">Consenso estabelecido</span>
<p>Nenhum linguista ou psicólogo cognitivo relevante defende hoje o determinismo linguístico forte. Quando um texto de divulgação apresenta "a hipótese Sapir-Whorf" como controvérsia viva entre defensores e críticos da versão forte, ele está descrevendo um debate encerrado há décadas. A discussão real é sobre a magnitude e o alcance dos efeitos fracos.</p>
</div>

<h3>O mito das palavras para neve</h3>

<p>A afirmação de que os inuítes têm dezenas ou centenas de palavras para neve é o exemplo mais citado e é falsa em quase todas as suas versões.</p>

<p>A história foi rastreada por Laura Martin e popularizada por Geoffrey Pullum em <em>The Great Eskimo Vocabulary Hoax</em>.<sup class="cit"><a href="#f1">1</a></sup> Boas menciona quatro raízes em 1911; a cada recontagem o número cresceu, chegando a "quatrocentas" em jornais dos anos 1980, sem nenhuma fonte nova. Ninguém foi conferir.</p>

<p>Há dois problemas adicionais. Línguas inuítes são polissintéticas: formam palavras longas por aglutinação, de modo que "contar palavras" é uma operação sem significado claro — em português também podemos dizer neve fresca, neve compactada, neve granulada. E mesmo que o número fosse alto, isso mostraria apenas que pessoas desenvolvem vocabulário para o que lhes é relevante, o que é trivial e não diz nada sobre pensamento.</p>

<h3>O experimento que virou emblema</h3>

<p>O russo não tem uma palavra genérica para "azul": distingue obrigatoriamente <em>sinij</em> (azul-escuro) de <em>goluboj</em> (azul-claro), como o português distingue vermelho de rosa.</p>

<p>Winawer e colaboradores publicaram em 2007 um experimento no PNAS.<sup class="cit"><a href="#f2">2</a></sup> Participantes viam três quadrados azuis e apontavam qual dos dois de baixo era idêntico ao de cima. Falantes de russo foram mais rápidos quando os dois tons caíam em categorias linguísticas diferentes. Falantes de inglês não mostraram esse padrão. E a vantagem russa desaparecia sob interferência verbal, sugerindo mediação linguística.</p>

<figure class="figura">[[FIG:whorf-fronteira]]<figcaption>O desenho experimental e o que aconteceu depois. O resultado de 2007 tornou-se a evidência mais citada em favor da relatividade linguística. A replicação de 2020 conta outra história.</figcaption></figure>

<div class="marca controverso">
<span class="rot">O achado não se replicou</span>
<p>Um estudo publicado na <em>Cognition</em> em 2020 tentou reproduzir o efeito e <strong>não encontrou a vantagem de tempo de reação</strong> na fronteira sinij/goluboj, nem em monolíngues nem em bilíngues.<sup class="cit"><a href="#f3">3</a></sup> Os autores concluem que os "azuis russos" são menos bem estruturados do que se supunha: a fronteira mostrou-se instável e sensível a manipulações de frequência, ao contrário da fronteira azul/verde. O efeito categórico apareceu em tarefas que exigiam categorização explícita, e não em discriminação perceptiva pura.</p>
</div>

<p>Vale reter a formulação dos próprios autores: os efeitos da língua sobre a percepção "são mais fortes em tarefas que promovem categorização e mais fracos ou inexistentes em tarefas que não a exigem explicitamente". Isso não elimina a relatividade linguística — mas desloca substancialmente o que ela afirma.</p>
` },

aprofundamento: { minutos: 15, html: `
<h3>Onde a evidência é mais forte: espaço</h3>

<p>O caso mais robusto em favor de efeitos linguísticos reais não é cor: é referência espacial.</p>

<p>A maioria das línguas usa referenciais <strong>relativos</strong> — esquerda, direita, à frente, atrás — que dependem da orientação do corpo do falante. Algumas línguas usam referenciais <strong>absolutos</strong>: pontos cardeais, ou eixos geográficos como "montanha acima" e "rio abaixo". Em Guugu Yimithirr, falado no norte da Austrália, não existem palavras para esquerda e direita: uma xícara está a nordeste da colher, e o falante diz isso naturalmente.</p>

<p>Stephen Levinson e colaboradores documentaram que falantes dessas línguas mantêm orientação absoluta permanente e precisa, mesmo em ambientes fechados, em veículos e após deslocamentos complexos.<sup class="cit"><a href="#f4">4</a></sup> E o efeito não fica na fala: em tarefas <strong>não verbais</strong> de rotação e reconstrução de arranjos, esses falantes resolvem o problema em coordenadas absolutas, enquanto falantes de línguas relativas usam coordenadas centradas no corpo.</p>

<div class="marca consenso">
<span class="rot">Por que este caso é mais convincente</span>
<p>Três razões metodológicas. Primeira: o efeito aparece em tarefas não linguísticas, o que enfraquece a explicação de que é apenas estratégia verbal. Segunda: os tamanhos de efeito são grandes e comportamentalmente visíveis, não diferenças de dezenas de milissegundos. Terceira: foi replicado em populações independentes em vários continentes. Compare com o caso da cor — efeitos pequenos, dependentes de tarefa e de replicação instável — e a diferença de qualidade de evidência fica clara.</p>
</div>

<div class="marca controverso">
<span class="rot">A objeção da direção causal</span>
<p>Mesmo aqui, resta uma dúvida séria: a língua causa o hábito cognitivo, ou ambos derivam do ambiente e da prática cultural? Comunidades com referencial absoluto vivem tipicamente em terreno aberto com marcos geográficos estáveis, e a navegação é parte da vida diária. A língua pode ser consequência da prática, não causa do modo de pensar. Separar essas hipóteses exigiria variação natural entre língua e ecologia que raramente existe — o que torna a inferência causal genuinamente difícil, não apenas incerta.</p>
</div>

<h3>Um efeito robusto e um caso mal contado</h3>

<p><strong>Gênero gramatical.</strong> Falantes de línguas com gênero atribuem adjetivos correlacionados ao gênero da palavra: "ponte" é feminina em alemão e masculina em espanhol, e falantes descrevem pontes com adjetivos estereotipicamente correspondentes. O efeito é replicável, mas há discussão sobre quanto depende de a tarefa ser conduzida em inglês, forçando tradução — o que introduz ativação linguística explícita.</p>

<p><strong>Números em pirahã.</strong> A língua pirahã, na Amazônia, teria apenas termos para "um", "dois" e "muitos" — ou, segundo análise posterior, apenas termos relativos de quantidade. Peter Gordon relatou em 2004 que falantes falhavam em tarefas de correspondência exata acima de três, e o caso foi amplamente divulgado como demonstração de determinismo linguístico.</p>

<div class="marca controverso">
<span class="rot">O que esse caso realmente mostra</span>
<p>Trabalhos posteriores complicam a leitura simples. Frank e colaboradores (2008) mostraram que os pirahã executam bem tarefas de correspondência um-a-um; o que falta é a capacidade de <em>memorizar</em> cardinalidades exatas sem rótulos — o que é uma tese sobre ferramentas de memória, não sobre limites do pensamento. Some-se a isso que praticamente toda a documentação da língua vem de um único pesquisador, cujas afirmações teóricas mais amplas são contestadas por outros linguistas de campo. É um caso em que a base empírica é fina demais para sustentar o peso que lhe foi atribuído.</p>
</div>

<h3>Os quatro problemas metodológicos recorrentes</h3>

<ol>
<li><strong>Confundir competência e desempenho.</strong> Uma tarefa mais lenta não é uma tarefa impossível. Efeitos de 30 milissegundos são interessantes e não indicam limite cognitivo.</li>
<li><strong>Confundir língua e cultura.</strong> Grupos que falam línguas diferentes também diferem em escolaridade, prática, ambiente e economia. Isolar o efeito da língua exige controles que raramente existem.</li>
<li><strong>Direção causal indeterminada.</strong> Falantes de línguas com muitos termos para neve podem tê-los porque neve importa — não pensar diferente por tê-los.</li>
<li><strong>Codificação verbal durante a tarefa.</strong> Se o participante nomeia mentalmente os estímulos, o efeito pode refletir estratégia momentânea, não estrutura cognitiva. Testes com interferência verbal existem justamente para isolar isso, e nem sempre são aplicados.</li>
</ol>
` },

extensao: { minutos: 30, html: `
<h3>O estado atual, área por área</h3>

<div class="tabela-env">
<table>
<thead><tr><th>Domínio</th><th>Qualidade da evidência</th><th>Avaliação</th></tr></thead>
<tbody>
<tr><td>Referência espacial</td><td>Boa: efeitos grandes, tarefas não verbais, replicações independentes</td><td>Efeito provavelmente real; direção causal ainda discutível</td></tr>
<tr><td>Cor</td><td>Fraca: efeitos pequenos, dependentes de tarefa, replicação falhou em 2020</td><td>Efeito, se existe, é modesto e restrito a tarefas categoriais</td></tr>
<tr><td>Gênero gramatical</td><td>Moderada: replicável, mas sensível à língua da tarefa</td><td>Efeito real sobre associações; alcance conceitual limitado</td></tr>
<tr><td>Número</td><td>Fraca: poucos casos, dependência de um único pesquisador</td><td>Efeito sobre memória exata, não sobre capacidade de pensar quantidade</td></tr>
<tr><td>Tempo</td><td>Mista: metáforas espaciais de tempo variam e afetam gestos e julgamentos</td><td>Efeitos consistentes em tarefas de julgamento; magnitude modesta</td></tr>
<tr><td>Comportamento econômico</td><td>Contestada: correlação entre marcação de futuro e poupança</td><td>Ver quadro abaixo</td></tr>
</tbody>
</table>
</div>

<div class="marca controverso">
<span class="rot">Um caso instrutivo de correlação transcultural</span>
<p>Um estudo de 2013 relatou que falantes de línguas que não marcam gramaticalmente o futuro poupam mais e cuidam melhor da saúde, e o resultado teve enorme repercussão. Reanálises posteriores mostraram que línguas não são observações independentes: elas se agrupam por famílias e por proximidade geográfica, e quando se corrige a estrutura filogenética e o parentesco cultural, a associação enfraquece drasticamente ou desaparece. É o problema de Galton, formulado na antropologia no século XIX e redescoberto periodicamente — e vale como alerta geral para qualquer correlação entre traço linguístico e comportamento agregado.</p>
</div>

<h3>Por que a hipótese é tão atraente</h3>

<p>Vale examinar isso, porque a resposta é mais interessante que a hipótese.</p>

<p>Ela promete explicar diferenças culturais por um mecanismo único e elegante. Cria a impressão gratificante de que aprender uma língua abre um modo de pensar inacessível de outra forma. E é praticamente inverificável em conversa: qualquer exemplo pontual parece confirmá-la, porque o interlocutor raramente tem em mãos o contraexemplo.</p>

<p>Esse é o perfil típico de uma ideia que se propaga bem independentemente de sua base empírica: alto valor narrativo, baixo custo de verificação, e confirmação aparente disponível em qualquer conversa. Reconhecer esse perfil é uma habilidade transferível — ele aparece igualmente em neurociência popular, em nutrição e em teorias de gestão.</p>

<h3>A posição defensável hoje</h3>

<p>Uma síntese razoável do que a evidência sustenta:</p>

<p><strong>A língua não determina o pensamento.</strong> Nenhum conceito é impensável por falta de palavra; conceitos novos são aprendidos e nomeados quando necessário.</p>

<p><strong>A língua torna certas distinções obrigatórias.</strong> Esta é provavelmente a formulação mais precisa, e vem de Roman Jakobson: línguas diferem menos no que <em>podem</em> expressar do que no que <em>devem</em> expressar. Em português você não pode dizer "eu fui" sem marcar tempo; em mandarim, pode. Se você é obrigado a codificar algo toda vez que fala, é plausível que preste mais atenção nisso — e há evidência de que essa atenção habitual afeta memória e julgamento.</p>

<p><strong>Os efeitos são modestos, dependentes de tarefa e reversíveis.</strong> Aparecem em tempos de reação e em vieses de julgamento, não em capacidades. Somem sob interferência verbal em vários casos. Mudam quando a pessoa muda de língua ou de contexto.</p>

<p><strong>A direção causal raramente é estabelecida.</strong> Língua, cultura, ecologia e prática variam juntas, e desemaranhá-las exige desenhos que quase nunca estão disponíveis.</p>

<div class="marca emergente">
<span class="rot">Um desenvolvimento recente</span>
<p>Uma linha crescente de trabalho reformula a questão em termos de <em>pensar para falar</em> (Slobin): a língua não molda o pensamento em geral, mas organiza a atenção no momento em que se prepara um enunciado. Isso explicaria por que os efeitos aparecem em tarefas com componente verbal e somem sem ele. É uma reformulação mais modesta e mais testável — o que é uma virtude — e vem acumulando suporte. Ainda não é consenso.</p>
</div>

<h3>Como avaliar qualquer afirmação whorfiana</h3>

<p>Cinco perguntas que resolvem a maior parte dos casos:</p>

<ol>
<li><strong>A tarefa é verbal ou não verbal?</strong> Efeitos que só aparecem em tarefas verbais podem ser estratégia de nomeação, não estrutura cognitiva.</li>
<li><strong>O efeito sobrevive à interferência verbal?</strong> Se ocupar a linguagem interna do participante elimina o efeito, ele era mediado por rótulos.</li>
<li><strong>Cultura e ambiente foram controlados?</strong> Ou os grupos diferem em tudo, e a língua é apenas a diferença mais visível?</li>
<li><strong>Qual é o tamanho do efeito?</strong> Dezenas de milissegundos são um achado. Não são uma prisão conceitual.</li>
<li><strong>Foi replicado por um grupo independente?</strong> Depois de 2020, esta pergunta deixou de ser opcional em qualquer área da psicologia — e no caso mais famoso desta literatura, a resposta foi negativa.</li>
</ol>

<div class="marca consenso">
<span class="rot">O que segurar</span>
<p>A versão forte está morta e a versão fraca sobrevive com efeitos reais, modestos e desiguais entre domínios: sólidos em referência espacial, frágeis em cor. A formulação mais precisa não é que a língua limita o que se pode pensar, e sim que ela torna obrigatório prestar atenção a certas distinções toda vez que se fala. E o caso serve como exemplar de algo mais geral: uma ideia com alto valor narrativo pode sobreviver décadas à erosão da evidência que originalmente a sustentava.</p>
</div>
` }
},

flashcards: [
  { f: "Sapir e Whorf formularam a 'hipótese Sapir-Whorf'?", v: "Não. Nunca coescreveram sobre o tema; o rótulo e a divisão em versões forte e fraca foram criados por comentadores nos anos 1950. A hipótese entrou na cultura já como caricatura." },
  { f: "Por que o determinismo linguístico forte é insustentável?", v: "Falantes aprendem conceitos que a língua não codifica, línguas incorporam palavras novas, bebês categorizam antes de falar — e a formulação é autorrefutante, já que se pode descrever numa língua um conceito que ela não tem." },
  { f: "Qual é o problema com o mito das palavras inuítes para neve?", v: "O número cresceu por recontagem sem fonte nova (Martin, Pullum). Línguas polissintéticas tornam a contagem de palavras mal definida. E mesmo se fosse alto, mostraria apenas que se desenvolve vocabulário para o que é relevante." },
  { f: "O que o estudo dos 'azuis russos' de 2007 encontrou?", v: "Falantes de russo, que distinguem obrigatoriamente sinij de goluboj, foram mais rápidos em discriminar tons que cruzavam essa fronteira. A vantagem desaparecia sob interferência verbal." },
  { f: "O que a replicação de 2020 mostrou sobre os 'azuis russos'?", v: "Não encontrou a vantagem de tempo de reação, nem em monolíngues nem em bilíngues. A fronteira sinij/goluboj mostrou-se instável, e o efeito categórico apareceu apenas em tarefas de categorização explícita." },
  { f: "Qual é o caso mais robusto de efeito linguístico, e por quê?", v: "Referência espacial absoluta (Guugu Yimithirr e outras). O efeito aparece em tarefas não verbais, tem tamanho grande e foi replicado em populações independentes — três virtudes que o caso da cor não tem." },
  { f: "Qual é a objeção causal que persiste mesmo no caso espacial?", v: "Que a língua pode ser consequência da prática de navegação e do ambiente, não causa do modo de pensar. Comunidades com referencial absoluto vivem em terreno aberto onde navegar é rotina — língua e ecologia variam juntas." },
  { f: "O que os estudos sobre número em pirahã realmente mostram?", v: "Que falta capacidade de memorizar cardinalidades exatas sem rótulos, não capacidade de pensar quantidade (Frank et al., 2008). E a documentação depende quase inteiramente de um único pesquisador contestado." },
  { f: "O que é o problema de Galton, e como ele afeta correlações transculturais?", v: "Línguas e culturas não são observações independentes: agrupam-se por família e proximidade geográfica. Correlações entre traço linguístico e comportamento agregado enfraquecem muito quando se corrige a estrutura filogenética." },
  { f: "Qual é a formulação mais defensável da relatividade linguística (Jakobson)?", v: "Línguas diferem menos no que podem expressar do que no que devem expressar. Distinções obrigatórias exigem atenção habitual, e essa atenção pode afetar memória e julgamento — com efeitos modestos e reversíveis." }
],

prova: [
  { camada: "nucleo",
    q: "Por que a versão forte da hipótese (determinismo linguístico) é considerada insustentável?",
    alts: [
      "Porque nunca foi testada experimentalmente.",
      "Porque falantes aprendem conceitos ausentes da própria língua, línguas incorporam termos novos, e a formulação é autorrefutante.",
      "Porque Sapir e Whorf a retiraram publicamente.",
      "Porque só se aplica a línguas europeias."
    ],
    correta: 1,
    porque: "As objeções são conceituais e empíricas ao mesmo tempo. A autorrefutação é a mais elegante: se a língua limitasse o pensável, seria impossível descrever nela um conceito que ela não codifica — o que fazemos rotineiramente ao explicar termos estrangeiros." },

  { camada: "nucleo",
    q: "Qual é o principal problema com o argumento das 'muitas palavras para neve'?",
    alts: [
      "O número correto é dezoito, não quatrocentas.",
      "Línguas polissintéticas tornam a contagem mal definida, o número cresceu por recontagem sem fonte, e vocabulário especializado só indica relevância prática — não modo de pensar.",
      "Os inuítes na verdade não têm nenhuma palavra específica para neve.",
      "A pesquisa original de Boas foi fraudulenta."
    ],
    correta: 1,
    porque: "São três problemas empilhados: contagem sem critério, inflação por repetição não verificada e inferência inválida. Mesmo se o número fosse alto, concluir algo sobre cognição a partir dele seria um salto — profissionais de qualquer área desenvolvem vocabulário fino para o que manejam." },

  { camada: "nucleo",
    q: "O que aconteceu com o experimento dos 'azuis russos' de Winawer et al. (2007)?",
    alts: [
      "Foi replicado diversas vezes e é hoje o achado mais sólido da área.",
      "Um estudo de 2020 na Cognition não encontrou a vantagem de tempo de reação, e observou que o efeito categórico só aparece em tarefas de categorização explícita.",
      "Foi retratado por fraude.",
      "Foi confirmado, mas apenas em bilíngues."
    ],
    correta: 1,
    porque: "A replicação falhou tanto em monolíngues quanto em bilíngues, e a fronteira sinij/goluboj mostrou-se instável sob manipulação de frequência — ao contrário da fronteira azul/verde. Não houve acusação de fraude: é o padrão comum de um efeito real porém frágil que não sobrevive a testes mais rigorosos." },

  { camada: "aprofundamento",
    q: "Por que a evidência sobre referência espacial é considerada mais forte que a evidência sobre cor?",
    alts: [
      "Porque envolve mais participantes.",
      "Porque os efeitos aparecem em tarefas não verbais, têm tamanho grande e foram replicados em populações independentes em vários continentes.",
      "Porque a percepção espacial é mais importante que a percepção de cor.",
      "Porque os estudos de cor usaram estímulos artificiais."
    ],
    correta: 1,
    porque: "As três virtudes metodológicas são justamente as que o caso da cor não tem. Efeito em tarefa não verbal enfraquece a explicação por estratégia de nomeação; efeito grande sobrevive a variação de método; e replicação independente é o teste decisivo depois de 2020." },

  { camada: "aprofundamento",
    q: "Qual é a objeção causal que persiste mesmo nos estudos sobre referência espacial absoluta?",
    alts: [
      "Que os participantes podem estar respondendo ao acaso.",
      "Que a língua pode ser consequência da prática de navegação e da ecologia, e não causa do hábito cognitivo — as duas variam juntas.",
      "Que os pesquisadores não falavam a língua estudada.",
      "Que pontos cardeais são uma imposição de categorias ocidentais."
    ],
    correta: 1,
    porque: "É o problema de confundimento estrutural: comunidades com referencial absoluto tipicamente vivem em terreno aberto onde navegar é parte da vida diária. Separar língua de ecologia exigiria variação natural entre as duas, que quase nunca existe. Isso não invalida o achado — torna a inferência causal genuinamente difícil." },

  { camada: "aprofundamento",
    q: "Um estudo relata que falantes de língua X são 40 ms mais rápidos numa tarefa perceptiva que falantes de língua Y. Qual é a interpretação mais cuidadosa?",
    alts: [
      "Falantes de Y são incapazes de fazer a discriminação.",
      "A língua determina os limites da percepção nesses grupos.",
      "Há um efeito de desempenho, possivelmente mediado por rotulação verbal, que não indica limite de capacidade — e o próximo teste deveria ser sob interferência verbal.",
      "O resultado é irrelevante por ser pequeno demais."
    ],
    correta: 2,
    porque: "Confundir competência com desempenho é o erro mais frequente nesta literatura. Diferenças de dezenas de milissegundos são achados legítimos e informativos, mas não demonstram incapacidade. O teste com interferência verbal é justamente o que distingue estratégia momentânea de estrutura cognitiva." },

  { camada: "extensao",
    q: "O que é o problema de Galton, e por que ele afeta estudos que correlacionam traços linguísticos com comportamento?",
    alts: [
      "É o viés de o pesquisador conhecer a hipótese antes de coletar dados.",
      "É o fato de línguas e culturas não serem observações independentes: agrupam-se por família e geografia, o que infla correlações que enfraquecem quando se corrige a estrutura filogenética.",
      "É a tendência de os participantes responderem o que o pesquisador espera.",
      "É a impossibilidade de traduzir tarefas experimentais entre línguas."
    ],
    correta: 1,
    porque: "Formulado na antropologia do século XIX e redescoberto periodicamente. O caso da marcação de futuro e poupança é exemplar: a associação relatada em 2013 enfraqueceu drasticamente quando reanálises corrigiram parentesco linguístico e proximidade cultural." },

  { camada: "extensao",
    q: "Qual é a formulação da relatividade linguística mais defensável à luz da evidência atual?",
    alts: [
      "A língua determina quais conceitos são pensáveis.",
      "A língua não tem qualquer efeito sobre cognição.",
      "Línguas diferem menos no que podem expressar do que no que obrigam a expressar; distinções obrigatórias produzem atenção habitual, com efeitos modestos e reversíveis.",
      "A língua afeta apenas a memória de longo prazo."
    ],
    correta: 2,
    porque: "É a formulação de Jakobson, e ela acomoda bem o padrão dos dados: efeitos aparecem onde a codificação é obrigatória, são pequenos, dependem de tarefa e frequentemente somem sob interferência verbal. As duas primeiras alternativas são os extremos, e ambos são contrariados pela evidência." },

  { camada: "extensao",
    q: "Segundo a reformulação de Slobin ('pensar para falar'), por que os efeitos linguísticos aparecem em algumas tarefas e não em outras?",
    alts: [
      "Porque só afetam falantes bilíngues.",
      "Porque a língua organiza a atenção no momento em que se prepara um enunciado, e não o pensamento em geral — daí sumirem em tarefas sem componente verbal.",
      "Porque tarefas visuais são intrinsecamente insensíveis a efeitos linguísticos.",
      "Porque os efeitos existem apenas na infância."
    ],
    correta: 1,
    porque: "A reformulação é mais modesta e mais testável — o que é uma virtude epistêmica, não uma concessão. Ela prevê exatamente o padrão observado: efeito presente quando há preparação de fala ou categorização explícita, ausente quando não há. Vem acumulando suporte, mas ainda não é consenso." }
],

fontes: [
  { n: 1, tipo: "artigo", ref: "Pullum, G. K. <em>The Great Eskimo Vocabulary Hoax and Other Irreverent Essays on the Study of Language</em>. University of Chicago Press, 1991 — baseado no rastreamento de Laura Martin (1986).", url: "" },
  { n: 2, tipo: "artigo", ref: "Winawer, J. et al. 'Russian blues reveal effects of language on color discrimination'. <em>PNAS</em> 104(19):7780–7785, 2007.", url: "https://www.pnas.org/doi/10.1073/pnas.0701644104" },
  { n: 3, tipo: "artigo", ref: "Martinović, J., Paramei, G. V. &amp; MacInnes, W. J. 'Russian blues reveal the limits of language influencing colour discrimination'. <em>Cognition</em> 201:104281, 2020. Replicação que não encontrou o efeito de tempo de reação.", url: "https://pubmed.ncbi.nlm.nih.gov/32276236/" },
  { n: 4, tipo: "livro", ref: "Levinson, S. C. <em>Space in Language and Cognition: Explorations in Cognitive Diversity</em>. Cambridge University Press, 2003. Referência sobre referenciais espaciais absolutos e tarefas não verbais.", url: "" },
  { n: 5, tipo: "artigo", ref: "Frank, M. C., Everett, D. L., Fedorenko, E. &amp; Gibson, E. 'Number as a cognitive technology: evidence from Pirahã language and cognition'. <em>Cognition</em> 108(3):819–824, 2008.", url: "https://doi.org/10.1016/j.cognition.2008.04.007" },
  { n: 6, tipo: "livro", ref: "McWhorter, J. <em>The Language Hoax: Why the World Looks the Same in Any Language</em>. Oxford University Press, 2014. Crítica sistemática, útil como contraponto declarado ao entusiasmo whorfiano.", url: "" },
  { n: 7, tipo: "livro", ref: "Deutscher, G. <em>Through the Language Glass</em>. Metropolitan Books, 2010. Exposição equilibrada da história da hipótese e da evidência sobre cor e espaço.", url: "" }
]
};
