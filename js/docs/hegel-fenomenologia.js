CONTEUDOS["hegel-fenomenologia"] = {
termo: "Fenomenologia do espírito e dialética em Hegel",
area: "Filosofia",
subtitulo: "O livro mais difícil da filosofia moderna propõe algo simples de enunciar e desconcertante de aceitar: que a verdade tem história, e que o erro é parte do caminho até ela, não um desvio dele.",
prerequisitos: [
  "Saber, em linhas gerais, que Kant afirmou haver limites ao que podemos conhecer: as coisas 'em si' seriam inacessíveis.",
  "Nenhum conhecimento prévio de Hegel. O texto começa desfazendo a versão popular dele, que provavelmente é a que você já ouviu."
],
conexoes: [
  { termo: "Paradigmas e revoluções científicas", relacao: "Kuhn descreve a ciência mudando por rupturas internas às próprias práticas, uma estrutura formalmente próxima da dialética, embora Kuhn não a reconhecesse como dívida." },
  { termo: "Indústria cultural e a Escola de Frankfurt", relacao: "Adorno e Horkheimer são herdeiros diretos do método hegeliano, aplicado como crítica imanente da cultura." },
  { termo: "O problema difícil da consciência", relacao: "Hegel trata a consciência como processo histórico e social, não como propriedade de um cérebro individual: um contraponto radical à formulação contemporânea." },
  { termo: "Existência precede a essência (Sartre)", relacao: "Sartre reescreve a dialética hegeliana em chave individual e ateia; a dívida é explícita e a divergência também." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Comecemos por desfazer o que você provavelmente já ouviu. Se alguém lhe disse que Hegel pensa em "tese, antítese e síntese", essa pessoa lhe passou uma informação que Hegel não escreveu. A fórmula vem de Fichte, foi popularizada por Chalybäus e por comentadores do século XIX, e não aparece na descrição que Hegel faz da própria filosofia.<sup class="cit"><a href="#f1">1</a></sup></p>

<p>Isso não é preciosismo acadêmico. A fórmula tríade sugere um esquema mecânico, aplicável de fora a qualquer conteúdo: pegue uma ideia, invente o oposto, combine. O procedimento real de Hegel é quase o inverso, e é essa diferença que separa entender Hegel de repetir um slogan sobre ele.</p>

<h3>O problema que Hegel herdou de Kant</h3>

<p>Kant havia estabelecido algo perturbador: nós conhecemos os fenômenos, o modo como as coisas nos aparecem, moldado pelas estruturas da nossa própria mente. As coisas <em>em si</em>, independentes de nós, seriam inacessíveis por princípio. Há uma barreira, e ela é intransponível.</p>

<p>A objeção de Hegel é elegante. Para afirmar que existe um limite, você precisa de algum modo já estar do outro lado dele, ou pelo menos saber o suficiente sobre o outro lado para reconhecê-lo como outro lado. Traçar uma fronteira do conhecimento é um ato de conhecimento. Se a barreira fosse absoluta, seria impossível saber que ela existe.</p>

<p>A saída de Hegel: em vez de investigar previamente <em>se</em> podemos conhecer, acompanhar o conhecimento em ação e observar como ele corrige a si mesmo. É isso que a <em>Fenomenologia do Espírito</em> (1807) faz. Ela não é um sistema de conclusões: é a narrativa de uma sequência de tentativas fracassadas de conhecer, cada uma fracassando de um modo específico que gera a tentativa seguinte.</p>

<h3>Como o movimento realmente funciona</h3>

<figure class="figura">[[FIG:hegel-movimento]]<figcaption>O ciclo real. Não há um "opositor externo" que traz a antítese. A contradição surge de dentro: a consciência aplica o seu próprio critério e descobre que o objeto que ela mesma constituiu não o satisfaz.</figcaption></figure>

<p>Cada etapa da Fenomenologia é uma "figura da consciência": uma forma de saber que traz consigo <strong>um critério do que conta como verdade</strong> e <strong>um objeto correspondente</strong>. A consciência então testa o objeto pelo próprio critério. E descobre, repetidamente, que não fecha.</p>

<p>O ponto crucial é que a crítica é <em>imanente</em>. Hegel não avalia cada figura por um padrão externo que ele possua e ela não. Ele deixa cada figura falir pelos seus próprios termos. É por isso que o método não pode ser aplicado mecanicamente: o conteúdo específico de cada figura determina o modo específico de seu colapso.</p>

<h3>Negação determinada: por que o erro produz algo</h3>

<p>Se você nega uma afirmação de forma abstrata, sobra o nada. Se você nega de forma <em>determinada</em>, sobra algo específico: não um vazio, mas exatamente o resultado daquele fracasso, com o conteúdo que aquele fracasso produziu.</p>

<p>É a diferença entre um experimento que não funcionou e um experimento que revelou por que a hipótese estava errada. O segundo não devolve você ao ponto de partida: devolve você a um ponto mais informado. Hegel generaliza isso e transforma em motor do pensamento.</p>

<p>O termo alemão para o resultado é <em>Aufhebung</em>: uma palavra que, no uso comum, significa simultaneamente cancelar, preservar e elevar. Hegel explora deliberadamente essa ambiguidade. A figura seguinte cancela a anterior enquanto conserva o que ela tinha de correto, num nível mais abrangente.</p>

<div class="marca controverso">
<span class="rot">Onde as traduções atrapalham</span>
<p><em>Aufhebung</em> é traduzida em português por "suprassunção", "superação" e "supressão", e nenhuma carrega os três sentidos simultaneamente. "Superação" perde o cancelamento; "supressão" perde a conservação. Ao ler comentários sobre Hegel, vale sempre checar qual sentido o autor está privilegiando. Muitas divergências interpretativas se dissolvem quando se percebe que os intérpretes traduziram a palavra de modos diferentes.</p>
</div>

<h3>Um exemplo que você conhece: senhor e escravo</h3>

<p>A passagem mais lida do livro. Duas autoconsciências se encontram e cada uma quer ser reconhecida pela outra. Segue um confronto; uma cede por medo da morte, e se estabelece a relação senhor-servo.</p>

<p>Aí o movimento se inverte, e a inversão é o ponto. O senhor obtém reconhecimento, mas de alguém que ele mesmo tratou como não plenamente humano. Reconhecimento vindo de quem você não reconhece não vale nada. O senhor conquistou exatamente o que não queria.</p>

<p>O servo, enquanto isso, trabalha. Ao transformar a matéria, imprime nela sua própria forma, vê-se objetivado no mundo e desenvolve autoconsciência efetiva. A dependência se inverte: o senhor depende do servo para tudo, inclusive para a própria identidade.</p>

<p>Nenhuma "antítese" foi trazida de fora. A posição do senhor fracassou por conter, desde o início, a condição do próprio fracasso.</p>

<div class="marca consenso">
<span class="rot">Ponto de consenso entre intérpretes</span>
<p>Que a dialética hegeliana funciona por negação determinada e crítica imanente, e não pelo esquema tríade importado de Fichte, é aceito por praticamente toda a literatura especializada contemporânea. O que permanece em disputa é bem mais profundo: o que Hegel entende por "espírito", se o sistema é metafísico ou epistemológico, e se a Fenomenologia é introdução ao sistema ou parte dele.</p>
</div>
` },

aprofundamento: { minutos: 15, html: `
<h3>O problema do critério, e a solução de Hegel</h3>

<p>Há uma dificuldade lógica que Hegel enfrenta na Introdução da Fenomenologia e que vale acompanhar de perto, porque é a peça técnica do livro.</p>

<p>Para saber se um conhecimento é verdadeiro, você precisa compará-lo com o objeto. Mas você só tem acesso ao objeto <em>como ele aparece para você</em>, ou seja, já dentro do conhecimento. Comparar o conhecimento com o objeto parece exigir sair do conhecimento, o que é impossível. Este é o problema do critério, e ele é genuinamente sério.</p>

<p>A solução de Hegel é que a consciência já carrega os dois lados dentro de si. Ela tem uma noção do objeto (o "em si") e uma noção do seu saber sobre o objeto (o "para ela"). A comparação não precisa de nada externo: acontece entre dois momentos da própria consciência.</p>

<p>E há uma consequência que Hegel sublinha: quando a comparação falha, não muda apenas o saber, muda também o objeto. Porque o que a consciência tomava como objeto era, o tempo todo, um objeto constituído pelo seu próprio critério. Mudou o critério, mudou o que conta como objeto. Por isso cada figura não é apenas uma opinião diferente sobre a mesma coisa: é um mundo diferente.</p>

<h3>A abertura do livro: a certeza sensível</h3>

<p>Vale ver o método em operação no caso mais simples. A primeira figura é a "certeza sensível": a convicção de que o conhecimento mais imediato e mais rico é o que aponta diretamente para o aqui e agora, sem conceitos intermediários. Parece inatacável.</p>

<p>Hegel pede que ela se expresse. Escreva: "agora é noite". Guarde o papel. Ao meio-dia, leia. A proposição está falsa, mas a palavra "agora" continua funcionando perfeitamente. Ou seja: o que o "agora" preserva não é o instante particular, mas algo <em>universal</em>, que vale para qualquer instante. O mesmo vale para "aqui" e "isto".</p>

<p>Conclusão: a certeza sensível pretendia ser o saber do puramente particular e, ao tentar dizer o que sabe, só consegue enunciar universais. Ela fracassa pelo seu próprio padrão. E note o que resta: não o nada, mas a descoberta de que percepção envolve mediação por universais, o que é exatamente a figura seguinte.</p>

<div class="marca consenso">
<span class="rot">Por que este exemplo é importante</span>
<p>Ele mostra que a "contradição" hegeliana não é violação da lógica formal. Ninguém está afirmando A e não-A simultaneamente no mesmo sentido. É uma inadequação performativa: uma posição que não consegue sustentar, ao ser articulada, aquilo que ela pretende ser. Confundir isso com rejeição do princípio de não contradição é o mal-entendido mais comum sobre Hegel entre leitores de formação analítica.</p>
</div>

<h3>O que "espírito" significa, e o que não significa</h3>

<p><em>Geist</em> é o termo mais mal compreendido do vocabulário hegeliano. Não é fantasma, não é alma individual, não é entidade sobrenatural. A leitura hoje dominante entre comentadores anglófonos, associada a Pippin, Pinkard e Brandom, é que <em>Geist</em> designa o espaço de normas, práticas e reconhecimento mútuo constituído coletivamente por sujeitos.<sup class="cit"><a href="#f2">2</a></sup></p>

<p>Nesta leitura, dizer que o espírito se realiza na história é dizer que as normas pelas quais os humanos se avaliam mutuamente são produto histórico e se transformam quando entram em contradição com a prática efetiva. Não é uma tese de metafísica pesada. É uma tese sobre a estrutura social da racionalidade.</p>

<div class="marca controverso">
<span class="rot">Disputa interpretativa em curso</span>
<p>Essa leitura "não metafísica" é vigorosamente contestada. Críticos argumentam que ela higieniza Hegel, transformando-o num pragmatista aceitável e ignorando que a <em>Ciência da Lógica</em> faz afirmações ontológicas explícitas e ambiciosas sobre a estrutura do real. A disputa é hoje a principal fratura dos estudos hegelianos, e um leitor iniciante deveria saber que qualquer exposição segura sobre "o que Hegel realmente quis dizer" está tomando partido sem avisar.</p>
</div>

<h3>Por que o livro é tão difícil, tecnicamente</h3>

<p>Quatro razões, e nenhuma delas é obscurantismo deliberado:</p>

<ul>
<li><strong>Sem metalinguagem.</strong> Hegel se recusa a descrever de fora o que está fazendo, porque isso pressuporia um ponto de vista externo ao processo, exatamente o que ele nega existir. O leitor precisa acompanhar o movimento em vez de receber um mapa.</li>
<li><strong>Termos que mudam de sentido.</strong> Conceitos como "ser", "essência" e "conceito" adquirem significados sucessivamente mais determinados ao longo do texto. Fixar uma definição no capítulo 2 e carregá-la até o fim leva a contradições aparentes.</li>
<li><strong>Condições de escrita.</strong> Hegel entregou o manuscrito em partes ao editor enquanto ainda escrevia, sob pressão financeira e com Napoleão tomando Jena. A estrutura da segunda metade é notoriamente menos controlada que a da primeira, e isso é reconhecido inclusive por seus defensores.</li>
<li><strong>Densidade referencial.</strong> Boa parte das figuras alude a posições filosóficas, religiosas e literárias específicas do período: estoicismo, ceticismo, Iluminismo francês, Antígona, o Terror jacobino, quase nunca nomeadas.</li>
</ul>
` },

extensao: { minutos: 30, html: `
<h3>A arquitetura do livro</h3>

<p>A Fenomenologia percorre uma sequência que vai do mais individual ao mais coletivo:</p>

<div class="tabela-env">
<table>
<thead><tr><th>Seção</th><th>Pergunta central</th><th>Como fracassa</th></tr></thead>
<tbody>
<tr><td>Consciência</td><td>Como conheço um objeto fora de mim?</td><td>O objeto revela-se constituído pelas categorias do sujeito</td></tr>
<tr><td>Autoconsciência</td><td>Como me conheço a mim mesmo?</td><td>Exige reconhecimento por outro que eu reconheça como igual</td></tr>
<tr><td>Razão</td><td>Como o pensamento e o mundo se correspondem?</td><td>A correspondência supõe uma comunidade que já a pratique</td></tr>
<tr><td>Espírito</td><td>Como normas coletivas se sustentam?</td><td>Formas históricas concretas entram em contradição consigo mesmas</td></tr>
<tr><td>Religião e Saber Absoluto</td><td>Como a comunidade compreende a si mesma?</td><td>Termina em autoconsciência do próprio processo</td></tr>
</tbody>
</table>
</div>

<p>"Saber absoluto" é outro termo que engana. Não significa onisciência, nem posse de todas as verdades. Significa o ponto em que a consciência compreende que o próprio processo de formação era o objeto: não havia um "em si" atrás do percurso, esperando ser alcançado. É reflexivo, não enciclopédico.</p>

<h3>As três grandes críticas, e o que sobrevive delas</h3>

<p><strong>Kierkegaard: o indivíduo não cabe no sistema.</strong> A objeção mais afiada. O sistema hegeliano subsume o particular no universal, mas a existência concreta, isto é, esta angústia, esta escolha, esta morte, não é um caso de nada. Kierkegaard acusa Hegel de construir um palácio conceitual e viver num barraco ao lado. A crítica atinge menos o método e mais a pretensão de completude.</p>

<p><strong>Marx: a dialética está de cabeça para baixo.</strong> Marx mantém a estrutura, contradição interna gerando transformação, e troca o motor: não são figuras da consciência que se contradizem, são relações materiais de produção. A crítica é interna e produtiva, e gerou uma tradição de pesquisa inteira. Vale notar, porém, que a leitura de Marx sobre Hegel é ela mesma uma interpretação disputada.</p>

<p><strong>Popper: historicismo e irracionalismo.</strong> Em <em>A Sociedade Aberta e seus Inimigos</em>, Popper acusa Hegel de rejeitar a lógica formal, de justificar o Estado prussiano e de fundar o totalitarismo moderno. É a crítica mais influente no mundo anglófono e a menos bem sustentada textualmente.</p>

<div class="marca controverso">
<span class="rot">Sobre a crítica de Popper</span>
<p>Historiadores da filosofia, inclusive não hegelianos, documentaram que Popper trabalhou com citações truncadas, atribuiu a Hegel posições de discípulos e ignorou o contexto de passagens políticas. A acusação de que Hegel rejeita o princípio de não contradição é insustentável: a "contradição" hegeliana é inadequação performativa, não conjunção de A e não-A. Isso não significa que Hegel esteja livre de crítica política: sua filosofia do direito tem passagens genuinamente problemáticas, e há debate sério sobre elas. Significa apenas que a versão de Popper não é uma boa fonte para saber o que Hegel disse.</p>
</div>

<h3>Por que ainda se lê isso</h3>

<p>Três contribuições que sobreviveram independentemente do sistema:</p>

<p><strong>Reconhecimento como estrutura social básica.</strong> A tese de que a identidade se constitui por reconhecimento mútuo, e não por introspecção solitária, é hoje central em teoria social, de Honneth a Taylor e Fraser, e em discussões sobre políticas de identidade, dignidade e direitos. É provavelmente a herança mais viva.</p>

<p><strong>Crítica imanente como método.</strong> Avaliar uma prática pelos padrões que ela mesma declara, em vez de aplicar um critério externo, é o procedimento padrão da teoria crítica e reaparece em análise institucional, crítica de ideologia e até em auditoria de coerência de programas de pesquisa. É uma ferramenta metodológica destacável do sistema.</p>

<p><strong>Historicidade das categorias.</strong> A ideia de que os próprios conceitos com que pensamos têm história, e que isso não os torna arbitrários, atravessa Kuhn, Foucault, Koselleck e a história conceitual. É a resposta hegeliana ao dilema entre absolutismo e relativismo, e continua sendo uma das poucas tentativas sérias de escapar dos dois.</p>

<h3>Como ler, se você decidir tentar</h3>

<p>Um conselho prático e recorrente em introduções ao livro, como a de Houlgate:<sup class="cit"><a href="#f6">6</a></sup> <strong>não comece pelo Prefácio</strong>. Ele foi escrito por último, é um dos textos mais densos da filosofia ocidental e pressupõe o livro inteiro. Comece pela Introdução, que apresenta o método, e depois pela Certeza Sensível, onde o método aparece funcionando num caso simples.</p>

<p>O segundo conselho: leia com um comentário ao lado desde o início. Isso não é fraqueza: a densidade referencial do texto torna a leitura solitária improdutiva para quem não conhece o contexto de 1807. Terceiro: aceite não entender partes inteiras na primeira passagem. O próprio movimento do livro pressupõe que o leitor refaça o percurso.</p>

<div class="marca especulacao">
<span class="rot">Uma observação especulativa, marcada como tal</span>
<p>Existe uma literatura recente que aproxima a dialética hegeliana de processos de aprendizado por correção de erro, incluindo em sistemas artificiais: um modelo com um critério interno que gera previsões, falha, e reorganiza o critério a partir do modo específico do fracasso. A analogia estrutural é sugestiva e ocasionalmente iluminadora. Mas é analogia, não continuidade histórica nem tese demonstrada. Hegel insiste que o processo é normativo e social, não algorítmico, e é precisamente aí que a comparação se rompe.</p>
</div>
` }
},

flashcards: [
  { f: "Hegel usa a fórmula 'tese, antítese, síntese'?", v: "Não. A fórmula vem de Fichte e foi popularizada por Chalybäus e comentadores do século XIX. Hegel não a adota para descrever a própria filosofia, embora a use ao expor Kant em aulas." },
  { f: "Qual é a objeção de Hegel ao limite kantiano do conhecimento?", v: "Que traçar uma fronteira do conhecimento já é um ato de conhecimento: para saber que há um limite, é preciso saber algo do outro lado. Um limite absoluto seria, por isso, incognoscível como limite." },
  { f: "O que é negação determinada?", v: "Negar uma posição de modo específico, de forma que do fracasso reste um conteúdo positivo, não o nada. É o que permite ao processo avançar em vez de recomeçar do zero." },
  { f: "O que significa Aufhebung?", v: "Cancelar, preservar e elevar simultaneamente. A figura seguinte suprime a anterior mantendo o que ela tinha de correto, num nível mais abrangente. Nenhuma tradução única em português carrega os três sentidos." },
  { f: "Por que a crítica hegeliana é chamada de imanente?", v: "Porque cada figura é avaliada pelo critério que ela própria estabelece, não por um padrão externo. É isso que impede o método de ser aplicado mecanicamente a qualquer conteúdo." },
  { f: "Qual é a inversão na dialética do senhor e do servo?", v: "O senhor obtém reconhecimento de alguém que ele não reconhece como igual: reconhecimento sem valor. O servo, pelo trabalho que transforma a matéria, desenvolve autoconsciência efetiva, e a dependência se inverte." },
  { f: "Como a 'certeza sensível' fracassa?", v: "Ela pretende conhecer o puramente particular e imediato, mas ao tentar dizer o que sabe ('agora', 'aqui', 'isto') só consegue enunciar universais que valem para qualquer instante e lugar. Fracassa pelo próprio padrão." },
  { f: "O que Hegel entende por 'espírito' (Geist)?", v: "Na leitura hoje dominante (Pippin, Pinkard, Brandom), o espaço de normas e práticas de reconhecimento mútuo constituído coletivamente, não alma individual nem entidade sobrenatural. Essa leitura é contestada por quem sustenta um Hegel metafísico." },
  { f: "O que significa 'saber absoluto'?", v: "Não onisciência, mas o ponto em que a consciência compreende que o próprio processo de formação era o objeto: que não havia um 'em si' escondido atrás do percurso. É reflexivo, não enciclopédico." },
  { f: "Qual é o problema central da crítica de Popper a Hegel?", v: "Ela se apoia em citações truncadas e atribui a Hegel posições de discípulos. A acusação de rejeição da não contradição é insustentável: a contradição hegeliana é inadequação performativa, não conjunção de A e não-A." }
],

prova: [
  { camada: "nucleo",
    q: "Qual é o problema com a fórmula 'tese, antítese, síntese' aplicada a Hegel?",
    alts: [
      "Nenhum: é a formulação canônica que ele usa na Fenomenologia.",
      "A fórmula é de Fichte, popularizada por comentadores, e sugere um esquema mecânico externo, quando o procedimento de Hegel é a falência interna de cada posição pelo seu próprio critério.",
      "O problema é apenas de tradução: em alemão a fórmula tem outro sentido.",
      "A fórmula está correta para a Lógica, mas não para a Fenomenologia."
    ],
    correta: 1,
    porque: "Além de não ser de Hegel, a fórmula distorce o método: ela sugere que se pega uma ideia, se inventa o oposto e se combina. O movimento real é imanente: a contradição emerge de dentro da posição, quando ela aplica seu próprio critério ao objeto que ela mesma constituiu." },

  { camada: "nucleo",
    q: "Por que Hegel considera insustentável a afirmação kantiana de que as coisas em si são inacessíveis?",
    alts: [
      "Porque a ciência experimental já provou o contrário.",
      "Porque traçar um limite do conhecimento já é um ato de conhecimento: reconhecer algo como limite exige saber algo do que está além.",
      "Porque Kant não definiu com precisão o que entendia por 'coisa em si'.",
      "Porque a distinção entre fenômeno e coisa em si é uma invenção posterior dos comentadores."
    ],
    correta: 1,
    porque: "É um argumento estrutural, não empírico. Se a barreira fosse verdadeiramente absoluta, seria impossível saber que ela existe, e o próprio ato de demarcá-la mostra que o pensamento já a transcendeu de algum modo. Daí a mudança de estratégia: acompanhar o conhecimento em ação em vez de investigar previamente seus limites." },

  { camada: "nucleo",
    q: "Na dialética do senhor e do servo, por que a posição do senhor fracassa?",
    alts: [
      "Porque o servo se rebela e o derrota pela força.",
      "Porque um terceiro personagem intervém e desfaz a relação.",
      "Porque o reconhecimento que ele obtém vem de alguém que ele próprio reduziu à condição de não-igual, e portanto não tem valor.",
      "Porque a relação senhor-servo é economicamente insustentável a longo prazo."
    ],
    correta: 2,
    porque: "É a estrutura da negação determinada: a posição contém, desde o início, a condição do próprio fracasso. Nenhum agente externo é necessário. O senhor conquista exatamente aquilo que anula o que ele buscava, e o servo, pelo trabalho, desenvolve a autoconsciência que o senhor não alcança." },

  { camada: "aprofundamento",
    q: "Como Hegel resolve o problema do critério (a impossibilidade de comparar o conhecimento com o objeto de fora do conhecimento)?",
    alts: [
      "Postulando que existe uma intuição intelectual capaz de acessar o objeto diretamente.",
      "Mostrando que a consciência já contém os dois lados, a noção do objeto e a noção do seu saber sobre ele, de modo que a comparação é interna.",
      "Recorrendo à verificação experimental como árbitro externo.",
      "Concluindo que o conhecimento objetivo é impossível e que resta apenas a coerência interna."
    ],
    correta: 1,
    porque: "A comparação acontece entre dois momentos da própria consciência, sem necessidade de um ponto de vista externo. E a consequência que Hegel destaca é decisiva: quando a comparação falha, muda também o objeto, porque o objeto era constituído pelo critério que acabou de cair." },

  { camada: "aprofundamento",
    q: "A 'certeza sensível' fracassa porque:",
    alts: [
      "Os sentidos são notoriamente enganosos e produzem ilusões.",
      "Ela pretende saber o puramente particular, mas ao articular o que sabe ('agora', 'aqui', 'isto') só consegue enunciar universais.",
      "Ela depende de instrumentos de medição imprecisos.",
      "Ela pressupõe a existência de um sujeito transcendental que Hegel rejeita."
    ],
    correta: 1,
    porque: "O argumento não é sobre ilusão de sentidos: é performativo. Escreva 'agora é noite', leia ao meio-dia: a proposição é falsa, mas a palavra 'agora' segue funcionando, o que revela que ela nomeia um universal. A figura falha pelo padrão que ela mesma adotou." },

  { camada: "aprofundamento",
    q: "Sobre a 'contradição' na dialética hegeliana, qual afirmação é correta?",
    alts: [
      "Hegel rejeita o princípio de não contradição e admite que A e não-A sejam simultaneamente verdadeiros.",
      "Trata-se de inadequação performativa: uma posição que não consegue sustentar, ao ser articulada, aquilo que pretende ser.",
      "É uma contradição meramente aparente, dissolvida por análise linguística.",
      "É um recurso retórico sem função argumentativa no sistema."
    ],
    correta: 1,
    porque: "Este é o mal-entendido mais comum entre leitores de formação analítica. Ninguém afirma A e não-A no mesmo sentido: o que se mostra é que uma figura da consciência, ao tentar cumprir sua própria pretensão, produz o oposto do que pretendia. Popper construiu boa parte de sua crítica sobre essa confusão." },

  { camada: "extensao",
    q: "O que significa 'saber absoluto' na Fenomenologia?",
    alts: [
      "A posse de todas as verdades sobre o mundo natural e histórico.",
      "O ponto em que a consciência compreende que o próprio processo de formação era o objeto, sem um 'em si' escondido atrás do percurso.",
      "A superação definitiva da filosofia pela ciência positiva.",
      "O acesso direto às coisas em si, contra Kant."
    ],
    correta: 1,
    porque: "É um resultado reflexivo, não enciclopédico. A expressão soa a onisciência e não é isso. Interpretá-la como acúmulo total de conhecimento produz a caricatura de um sistema fechado que 'explica tudo', leitura que a literatura especializada contemporânea rejeita." },

  { camada: "extensao",
    q: "Qual é a avaliação mais defensável da crítica de Popper a Hegel?",
    alts: [
      "É a análise definitiva, e por isso Hegel deixou de ser levado a sério na filosofia.",
      "É textualmente problemática: citações truncadas, atribuição de posições de discípulos, leitura equivocada da noção de contradição. Isso não isenta Hegel de crítica política séria por outras vias.",
      "É irrelevante porque Popper não era filósofo político.",
      "É correta quanto à lógica, mas equivocada quanto à política."
    ],
    correta: 1,
    porque: "Historiadores da filosofia, inclusive não hegelianos, documentaram os problemas de método de Popper nesse ponto específico. Mas a resposta correta não é apologética: há passagens genuinamente problemáticas na filosofia política de Hegel, e a discussão sobre elas é legítima. Apenas não é a que Popper fez." },

  { camada: "extensao",
    q: "Qual das contribuições hegelianas abaixo é hoje mais claramente destacável do sistema e ativa em teoria social contemporânea?",
    alts: [
      "A tese de que a história tem um fim necessário e determinado.",
      "A doutrina do Estado prussiano como forma racional acabada.",
      "A tese de que a identidade se constitui por reconhecimento mútuo, e não por introspecção solitária.",
      "A demonstração de que a lógica formal é inadequada ao pensamento."
    ],
    correta: 2,
    porque: "A teoria do reconhecimento é retomada por Honneth, Taylor e Fraser, e estrutura debates atuais sobre dignidade, identidade e redistribuição. As duas primeiras alternativas são justamente as teses mais criticadas e menos sustentáveis; a última repousa no mal-entendido sobre contradição." }
],

fontes: [
  { n: 1, tipo: "enciclopédia", ref: "Maybee, J. E. 'Hegel's Dialectics'. <em>Stanford Encyclopedia of Philosophy</em>. Documenta que Hegel não adota a linguagem de tese-antítese-síntese e expõe a negação determinada.", url: "https://plato.stanford.edu/entries/hegel-dialectics/" },
  { n: 2, tipo: "enciclopédia", ref: "Redding, P. 'Georg Wilhelm Friedrich Hegel'. <em>Stanford Encyclopedia of Philosophy</em>. Panorama do sistema e do estado das disputas interpretativas.", url: "https://plato.stanford.edu/entries/hegel/" },
  { n: 3, tipo: "fonte primária", ref: "Hegel, G. W. F. <em>Fenomenologia do Espírito</em> (1807). Tradução brasileira de Paulo Meneses, Vozes/Universidade São Francisco. Edição bilíngue de referência em português.", url: "" },
  { n: 4, tipo: "comentário", ref: "Pippin, R. <em>Hegel's Idealism: The Satisfactions of Self-Consciousness</em>. Cambridge University Press, 1989. Formulação clássica da leitura não metafísica.", url: "" },
  { n: 5, tipo: "comentário", ref: "Pinkard, T. <em>Hegel's Phenomenology: The Sociality of Reason</em>. Cambridge University Press, 1994. Comentário seção a seção, com ênfase na dimensão social das normas.", url: "" },
  { n: 6, tipo: "comentário", ref: "Houlgate, S. <em>The Hegel Reader</em> e <em>An Introduction to Hegel</em>. Blackwell. Entrada acessível que discute explicitamente as distorções mais comuns, inclusive a de Popper.", url: "" }
]
};
