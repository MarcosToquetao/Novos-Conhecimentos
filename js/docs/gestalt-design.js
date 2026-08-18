CONTEUDOS["gestalt-design"] = {
termo: "Princípios da Gestalt no design visual",
area: "Design",
subtitulo: "Regras de percepção descritas por psicólogos alemães nos anos 1920 governam, sem você notar, toda interface que você usa. Elas explicam por que um espaçamento de oito pixels comunica mais que uma borda, e por que a maior parte do que se ensina sobre elas é imprecisa.",
prerequisitos: [
  "Nenhum. O texto usa demonstrações visuais, não teoria prévia.",
  "Ajuda ter olhado para qualquer formulário, planilha ou aplicativo nas últimas 24 horas."
],
conexoes: [
  { termo: "Affordances e design de interação", relacao: "Gestalt explica como o usuário agrupa o que vê; affordance explica o que ele acha que pode fazer com aquilo. São camadas sucessivas do mesmo problema." },
  { termo: "Atenção seletiva e cegueira desatencional", relacao: "O agrupamento gestáltico é pré-atencional: acontece antes de você decidir olhar. É isso que o torna tão poderoso e tão difícil de contornar." },
  { termo: "Cérebro preditivo e codificação preditiva", relacao: "A explicação teórica contemporânea mais discutida para o agrupamento perceptivo, substituindo os 'campos de força cerebrais' postulados originalmente pelos gestaltistas." },
  { termo: "Sistemas de grid e o estilo suíço", relacao: "O grid é a aplicação sistemática de proximidade e alinhamento como método de projeto." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Em 1912, Max Wertheimer observou algo aparentemente banal num brinquedo óptico: duas luzes piscando em alternância, na cadência certa, não são vistas como duas luzes. São vistas como <em>uma luz que se move</em>. Não há movimento algum no estímulo. O movimento é produzido pelo sistema visual.</p>

<p>A conclusão que a escola da Gestalt tirou disso foi radical para a psicologia da época: a percepção não monta o mundo somando sensações elementares. Ela organiza, agrupa e impõe estrutura antes que você tenha qualquer chance de intervir conscientemente. O todo tem propriedades que as partes não têm.</p>

<h3>Por que isso interessa a quem projeta qualquer coisa</h3>

<p>Porque significa que você não escolhe se o usuário vai agrupar elementos. Ele vai. A única escolha é se o agrupamento que o sistema visual dele produzir corresponde ao agrupamento lógico da informação, ou se contradiz.</p>

<p>Quando um rótulo está a doze pixels do campo de cima e a quatro do campo de baixo, nenhuma quantidade de instrução escrita corrige a leitura: o rótulo pertence ao campo de baixo, e ponto. A percepção não negocia.</p>

<figure class="figura">[[FIG:gestalt-principios]]<figcaption>Seis princípios de agrupamento. Em cada painel, os elementos são idênticos: o que muda é apenas a relação espacial ou de forma entre eles. Repare que você não consegue "desver" os agrupamentos, mesmo sabendo que são arbitrários.</figcaption></figure>

<h3>Os princípios, e o que cada um faz de fato</h3>

<p><strong>Proximidade.</strong> Elementos próximos são vistos como um grupo. É o mais forte de todos, e o mais subutilizado. Boa parte das bordas, caixas e linhas divisórias em interfaces existe apenas para consertar espaçamentos mal resolvidos. Remova o ruído, ajuste as distâncias, e a estrutura aparece sozinha.</p>

<p><strong>Similaridade.</strong> Elementos que compartilham forma, cor, tamanho ou orientação são vistos como pertencentes à mesma categoria. É o que permite ao usuário aprender uma vez que "azul sublinhado é link" e aplicar essa regra ao produto inteiro.</p>

<p><strong>Fechamento.</strong> O sistema visual completa contornos ausentes. É por isso que três formas recortadas produzem um triângulo que não existe, e por isso logotipos podem sugerir formas com muito menos traço do que pareceria necessário.</p>

<p><strong>Continuidade.</strong> Preferimos ler traçados que seguem em curva suave a traçados que fazem quinas. É a base do alinhamento: uma coluna de elementos alinhados é lida como uma unidade porque o olho segue a linha implícita.</p>

<p><strong>Região comum.</strong> Elementos dentro de uma mesma fronteira fechada formam grupo, e este princípio <em>sobrepõe-se à proximidade</em>. É a razão de existirem cards: uma moldura pode reagrupar elementos contra a distância entre eles.</p>

<p><strong>Destino comum.</strong> Elementos que se movem juntos são agrupados. Só passou a importar de fato com interfaces animadas. É o princípio que faz uma transição bem feita explicar de onde um painel veio.</p>

<h3>Figura e fundo</h3>

<p>Antes de agrupar, o sistema visual decide o que é objeto e o que é espaço vazio. Essa decisão é involuntária, quase sempre inequívoca e ocasionalmente ambígua: o vaso de Rubin, que alterna entre taça e dois perfis, é o exemplo clássico.</p>

<p>Em interface, o que determina a leitura de figura é sobretudo: área menor tende a virar figura; região cercada tende a virar figura; e a parte que aparenta estar à frente ganha. Sombra, elevação e contraste são as ferramentas com que se manipula isso.</p>

<div class="marca consenso">
<span class="rot">Consenso estabelecido</span>
<p>Que os fenômenos de agrupamento existem, são robustos e ocorrem cedo no processamento visual é consenso amplo, sustentado por um século de psicofísica e confirmado por neuroimagem e registro eletrofisiológico. Você pode contar com eles. O que <em>não</em> é consenso é a explicação teórica de por que ocorrem. Disso trata a próxima camada.</p>
</div>
` },

aprofundamento: { minutos: 15, html: `
<h3>A hierarquia entre princípios: o que a pesquisa mediu</h3>

<p>O ensino comum apresenta os princípios como uma lista de itens equivalentes. Não são. Eles têm forças diferentes, competem entre si e há resultados experimentais sobre quem ganha.</p>

<p>A revisão mais completa da área, publicada em dois volumes no <em>Psychological Bulletin</em> em 2012, sintetiza um século de pesquisa e é explícita: os princípios interagem, e formulá-los como regras independentes é uma simplificação didática que não corresponde aos dados.<sup class="cit"><a href="#f1">1</a></sup></p>

<p>Regularidades razoavelmente estabelecidas:</p>

<ul>
<li><strong>Região comum supera proximidade.</strong> Uma moldura reagrupa elementos mesmo contra a distância entre eles. Por isso um card mal desenhado é pior que nenhum card: ele impõe um agrupamento errado com força.</li>
<li><strong>Proximidade supera similaridade</strong> na maioria dos arranjos. Elementos próximos e diferentes tendem a ser lidos como um grupo antes que elementos distantes e iguais.</li>
<li><strong>Conexão física é o mais forte de todos.</strong> Uma linha ligando dois elementos vence proximidade, similaridade e até região comum. É por isso que fluxogramas funcionam.</li>
</ul>

<p>Além disso, os princípios operam simultaneamente sobre <em>níveis diferentes</em> de organização. A mesma tela pode ter proximidade agrupando campos dentro de uma seção e região comum separando seções. É justamente a hierarquia entre esses níveis que produz a sensação de layout "limpo" ou "confuso".</p>

<h3>A teoria original está morta</h3>

<p>Os gestaltistas não pararam na descrição. Wolfgang Köhler propôs uma explicação neurofisiológica: campos elétricos contínuos no córtex que se organizariam por dinâmica de campo, produzindo isomorfismo entre a estrutura da experiência e a estrutura da atividade cerebral.</p>

<p>Essa hipótese foi refutada experimentalmente nos anos 1950. Lashley, Sperry e colaboradores inseriram lâminas metálicas e fios condutores no córtex visual de animais para curto-circuitar os campos hipotéticos. A percepção permaneceu intacta.<sup class="cit"><a href="#f2">2</a></sup></p>

<div class="marca consenso">
<span class="rot">Uma distinção que vale carregar para outros temas</span>
<p>As descrições fenomenológicas da Gestalt sobreviveram; a teoria explicativa não. Isso é comum na história da ciência e não desqualifica o programa: Kepler descreveu órbitas elípticas corretamente com uma explicação causal errada. Distinguir "o fenômeno é real" de "a explicação proposta é correta" é uma das operações de leitura crítica mais úteis que existem, e a maioria dos textos de design sobre Gestalt não a faz: trata a teoria dos campos como se ainda estivesse de pé.</p>
</div>

<h3>O que substituiu a explicação</h3>

<p>Três programas concorrentes, nenhum vitorioso:</p>

<div class="tabela-env">
<table>
<thead><tr><th>Abordagem</th><th>Tese central</th><th>Estado</th></tr></thead>
<tbody>
<tr><td>Estatística ecológica</td><td>O sistema aprendeu regularidades de imagens naturais: bordas contínuas e superfícies coerentes são estatisticamente prováveis no mundo</td><td>Suporte empírico bom; medidas em bancos de imagens naturais confirmam as correlações previstas</td></tr>
<tr><td>Codificação preditiva</td><td>O córtex gera previsões descendentes e agrupa o que confirma; a percepção é a hipótese que melhor explica a entrada</td><td>Popular e abrangente; criticada por dificuldade de falsear</td></tr>
<tr><td>Simplicidade / mínima descrição</td><td>O sistema escolhe a interpretação com a descrição mais curta (versão formal da 'boa forma')</td><td>Elegante e formalizável; disputa aberta sobre se compete ou coincide com a estatística ecológica</td></tr>
</tbody>
</table>
</div>

<div class="marca controverso">
<span class="rot">Ponto controverso</span>
<p>A disputa entre simplicidade e probabilidade tem mais de setenta anos e não foi resolvida. Há argumentos formais de que, sob certas condições, as duas fazem previsões equivalentes, o que sugere que a pergunta pode estar mal colocada. Para quem projeta interfaces isso não muda nada de prático; mas importa para não repetir como fato explicações que são hipóteses em disputa.</p>
</div>

<h3>Aplicação: diagnosticar uma tela em três passos</h3>

<ol>
<li><strong>Aperte os olhos até desfocar.</strong> Isso remove detalhe e deixa apenas a estrutura de agrupamento. O que sobra é o que o usuário vê no primeiro décimo de segundo. Se os blocos que aparecem não correspondem à estrutura lógica da informação, o problema é de layout, não de rótulo.</li>
<li><strong>Conte as distâncias.</strong> Meça o espaçamento entre elementos relacionados e entre elementos não relacionados. Se o primeiro não for claramente menor que o segundo, a proximidade está trabalhando contra você.</li>
<li><strong>Remova toda borda e teste de novo.</strong> Bordas frequentemente mascaram espaçamento ruim. Se a estrutura sobrevive sem elas, você pode devolvê-las por outros motivos; se desaba, o espaçamento precisa ser corrigido antes.</li>
</ol>
` },

extensao: { minutos: 30, html: `
<h3>O que não sobreviveu: a "boa forma"</h3>

<p>O princípio da <em>Prägnanz</em> (que a percepção tende à organização mais simples, regular e estável possível) era a lei suprema da Gestalt, a que supostamente unificava todas as outras. É também a mais problemática.</p>

<p>O problema é a circularidade. "Simples" nunca foi definido independentemente do resultado percebido. Se percebemos X, diz-se que X era a organização mais simples; se percebêssemos Y, Y seria declarada a mais simples. Sem uma métrica de simplicidade fixada antes da observação, o princípio não faz previsão alguma e não pode ser falseado.</p>

<p>Tentativas formais de resolver isso existem (teoria da codificação estrutural, comprimento mínimo de descrição) e produzem previsões testáveis em domínios restritos. Mas a versão que circula em livros de design, "o cérebro prefere a forma mais simples", permanece vazia como enunciada.</p>

<div class="marca controverso">
<span class="rot">Uma crítica que vale generalizar</span>
<p>Um princípio que explica qualquer resultado possível não explica nada. Sempre que você encontrar uma "lei" formulada de modo que nenhuma observação poderia contradizê-la, essa é razão suficiente para desconfiar, independentemente da área. A pergunta diagnóstica é simples: <em>que observação, se ocorresse, mostraria que esse princípio está errado?</em> Se não houver resposta, você está diante de uma descrição disfarçada de explicação.</p>
</div>

<h3>Limites culturais e individuais</h3>

<p>Os gestaltistas apresentaram os princípios como universais e inatos. A situação empírica é mais matizada.</p>

<p><strong>O que parece robusto entre culturas:</strong> proximidade, similaridade e fechamento aparecem em populações muito diversas, incluindo grupos com pouca exposição a mídia visual ocidental. São bons candidatos a mecanismos perceptivos básicos.</p>

<p><strong>O que varia:</strong> a direção da leitura molda expectativas de sequência e de progressão temporal. Interfaces desenhadas para leitura da esquerda para a direita exigem mais que espelhamento quando adaptadas para árabe ou hebraico: a hierarquia de leitura, o sentido de "avançar" e a ancoragem visual mudam junto.</p>

<p><strong>O que varia mais ainda:</strong> a chamada percepção holística versus analítica. Uma literatura influente sugeria que participantes do Leste Asiático processam cenas de forma mais contextual e ocidentais de forma mais focada no objeto.</p>

<div class="marca controverso">
<span class="rot">Estado atual dessa literatura</span>
<p>Estudos originais relataram efeitos grandes. Replicações posteriores, com amostras maiores e pré-registro, encontraram efeitos consistentemente menores e às vezes ausentes. O padrão é o mesmo de várias áreas da psicologia social e cognitiva após a crise de replicação: o fenômeno provavelmente existe, mas com magnitude bem menor e mais dependente de tarefa do que os primeiros artigos sugeriam. Tratar esses achados como base para decisões de localização de produto é, hoje, difícil de sustentar.</p>
</div>

<h3>Onde a Gestalt não ajuda</h3>

<p>É importante delimitar o alcance, porque design é rotineiramente vendido como se a Gestalt resolvesse mais do que resolve.</p>

<ul>
<li><strong>Ela é sobre organização, não sobre significado.</strong> Agrupar corretamente não faz o usuário entender o que o grupo significa. Um formulário perfeitamente agrupado com rótulos incompreensíveis continua incompreensível.</li>
<li><strong>Ela não diz nada sobre prioridade.</strong> Saber que quatro botões formam um grupo não indica qual deles é a ação principal. Isso é hierarquia visual (contraste, tamanho, posição), outro conjunto de mecanismos.</li>
<li><strong>Ela não substitui teste com usuários.</strong> Os princípios preveem agrupamento perceptivo. Não preveem compreensão, memória, motivação ou conclusão da tarefa, que são o que geralmente se quer medir.</li>
<li><strong>Ela não resolve acessibilidade.</strong> Agrupamento visual não é transmitido a leitores de tela. Um layout gestalticamente impecável pode ser completamente inutilizável se a estrutura semântica do documento não replicar o agrupamento visual.</li>
</ul>

<div class="marca emergente">
<span class="rot">Um desdobramento contemporâneo</span>
<p>Modelos computacionais de visão hoje reproduzem vários efeitos de agrupamento gestáltico sem terem sido programados para isso: o agrupamento emerge do treinamento em imagens naturais. Isso é evidência indireta interessante para a hipótese da estatística ecológica: se regularidades do mundo bastam para produzir os efeitos, talvez não seja preciso postular princípios inatos. A ressalva é séria: redes também apresentam falhas de agrupamento que humanos não cometem, e semelhança de comportamento não demonstra semelhança de mecanismo.</p>
</div>

<h3>O resumo operacional</h3>

<p>Se for guardar uma frase: <strong>o espaço em branco é o instrumento de agrupamento mais forte, mais barato e mais ignorado do design</strong>. Antes de acrescentar uma borda, uma cor de fundo, um separador ou um ícone, verifique se o problema não se resolve mudando distâncias. Quase sempre se resolve, e o resultado é mais limpo, mais rápido de renderizar e mais robusto a mudanças de conteúdo.</p>

<p>E, se for guardar uma segunda: os princípios são descrições confiáveis de <em>o que acontece</em> e explicações contestadas de <em>por que acontece</em>. Use-os como ferramenta de projeto com confiança. Cite-os como teoria da mente com cautela.</p>
` }
},

flashcards: [
  { f: "Qual foi a observação de Wertheimer em 1912 e o que ela mostrou?", v: "Duas luzes piscando em alternância são vistas como uma luz em movimento. Não há movimento no estímulo: ele é produzido pelo sistema visual, o que indica que a percepção organiza em vez de somar sensações elementares." },
  { f: "Qual princípio de agrupamento é o mais forte, e qual é o mais subutilizado em design?", v: "Conexão física (uma linha ligando elementos) é o mais forte de todos. Proximidade é o mais subutilizado: boa parte das bordas em interfaces existe apenas para compensar espaçamentos mal resolvidos." },
  { f: "Por que região comum é especialmente perigosa em design de interface?", v: "Porque ela supera a proximidade: uma moldura reagrupa elementos mesmo contra a distância entre eles. Um card mal desenhado é pior que nenhum card, pois impõe um agrupamento errado com força." },
  { f: "O que aconteceu com a explicação neurofisiológica original da Gestalt?", v: "Köhler propôs campos elétricos corticais contínuos. Lashley e Sperry inseriram condutores no córtex visual para curto-circuitá-los nos anos 1950 e a percepção permaneceu intacta. A hipótese foi refutada." },
  { f: "Qual é o problema lógico do princípio da Prägnanz (boa forma)?", v: "Circularidade: 'simples' nunca foi definido independentemente do que se percebe. Sem métrica fixada antes da observação, o princípio não faz previsão falseável: explica qualquer resultado e portanto nenhum." },
  { f: "Quais são as três explicações concorrentes atuais para o agrupamento perceptivo?", v: "Estatística ecológica (o sistema aprendeu regularidades de imagens naturais), codificação preditiva (percepção como hipótese que melhor explica a entrada) e simplicidade/mínima descrição. Nenhuma venceu." },
  { f: "Como diagnosticar rapidamente problemas de agrupamento numa tela?", v: "Desfoque a visão até restar só a estrutura: os blocos que aparecem são o que o usuário vê no primeiro instante. Depois meça as distâncias entre elementos relacionados e não relacionados. Depois remova todas as bordas e veja se a estrutura sobrevive." },
  { f: "O que os princípios da Gestalt NÃO resolvem?", v: "Significado (agrupar não é compreender), prioridade dentro do grupo (isso é hierarquia visual), validação com usuários e acessibilidade. Agrupamento visual não chega a leitores de tela sem estrutura semântica correspondente." },
  { f: "Qual é o estado da literatura sobre percepção holística versus analítica entre culturas?", v: "Efeitos originais grandes, replicações posteriores com efeitos menores ou ausentes. O fenômeno provavelmente existe, mas com magnitude bem menor e mais dependente de tarefa do que os primeiros estudos indicavam." },
  { f: "Qual distinção metodológica o caso da Gestalt ilustra bem?", v: "Que descrições fenomenológicas podem sobreviver enquanto a teoria explicativa proposta é refutada. Kepler descreveu órbitas elípticas corretamente com causa errada. 'O fenômeno é real' e 'a explicação está correta' são afirmações independentes." }
],

prova: [
  { camada: "nucleo",
    q: "Um formulário tem rótulos igualmente distantes do campo acima e do campo abaixo. Qual é o problema, na ótica da Gestalt?",
    alts: [
      "Nenhum, desde que os rótulos sejam textualmente claros.",
      "A proximidade não indica a qual campo cada rótulo pertence, e a leitura fica ambígua independentemente do texto.",
      "O problema é apenas estético e não afeta o uso.",
      "Faltam bordas separando cada linha do formulário."
    ],
    correta: 1,
    porque: "O agrupamento por proximidade é pré-atencional: acontece antes de qualquer leitura do texto. Se as distâncias não desambiguam, o usuário hesita mesmo com rótulos perfeitos. E acrescentar bordas é a solução errada: trata o sintoma sem corrigir a causa, que é o espaçamento." },

  { camada: "nucleo",
    q: "Qual princípio explica que três formas recortadas produzam a percepção de um triângulo que não está desenhado?",
    alts: ["Similaridade", "Destino comum", "Fechamento", "Região comum"],
    correta: 2,
    porque: "O fechamento faz o sistema visual completar contornos ausentes, produzindo uma figura que não existe no estímulo. É o mesmo mecanismo que permite logotipos sugerirem formas com muito menos traço do que pareceria necessário." },

  { camada: "nucleo",
    q: "Por que se diz que o agrupamento perceptivo 'não negocia'?",
    alts: [
      "Porque os princípios são leis físicas invioláveis.",
      "Porque o agrupamento ocorre antes da atenção voluntária: você não escolhe se vai agrupar, apenas se o agrupamento corresponde à lógica da informação.",
      "Porque usuários treinados conseguem ignorá-lo com prática.",
      "Porque os princípios foram demonstrados matematicamente."
    ],
    correta: 1,
    porque: "É a característica que dá poder prático aos princípios: eles operam cedo no processamento visual, antes de decisão consciente. Isso significa que nenhuma instrução textual corrige um agrupamento espacial errado. A única correção possível é mudar o próprio arranjo." },

  { camada: "aprofundamento",
    q: "Segundo a evidência experimental sobre competição entre princípios, o que acontece quando uma moldura agrupa elementos que estão espacialmente distantes entre si?",
    alts: [
      "Proximidade vence: os elementos continuam sendo lidos como separados.",
      "Região comum vence: a moldura reagrupa os elementos apesar da distância.",
      "Os dois princípios se cancelam e o agrupamento fica indefinido.",
      "O resultado depende inteiramente da cultura do observador."
    ],
    correta: 1,
    porque: "Região comum supera proximidade. Isso tem consequência de projeto direta: cards e caixas são ferramentas potentes e por isso perigosas. Se agruparem a coisa errada, impõem essa leitura com mais força do que o espaçamento consegue desfazer." },

  { camada: "aprofundamento",
    q: "O experimento de Lashley e Sperry nos anos 1950 é relevante porque:",
    alts: [
      "Confirmou a hipótese de campos elétricos corticais de Köhler.",
      "Refutou essa hipótese: inserir condutores no córtex visual para curto-circuitar os campos não alterou a percepção.",
      "Demonstrou que os princípios de agrupamento não existem.",
      "Mostrou que o agrupamento ocorre na retina, não no córtex."
    ],
    correta: 1,
    porque: "A explicação teórica original da Gestalt foi refutada experimentalmente, enquanto as descrições fenomenológicas permaneceram válidas. Essa dissociação entre fenômeno real e explicação errada é o ponto metodológico mais transferível do documento, e a maior parte da literatura de design a ignora." },

  { camada: "aprofundamento",
    q: "Você precisa avaliar rapidamente se o layout de uma tela comunica a estrutura correta. Qual é o primeiro teste mais informativo?",
    alts: [
      "Ler todos os rótulos em voz alta verificando a clareza do texto.",
      "Desfocar a visão até restar apenas a estrutura de blocos e verificar se ela corresponde à organização lógica da informação.",
      "Contar quantas cores diferentes estão em uso.",
      "Medir o contraste de cada elemento contra o fundo."
    ],
    correta: 1,
    porque: "Desfocar remove o detalhe e revela o que o sistema visual entrega no primeiro instante, antes de leitura. Se os blocos que sobram não correspondem à estrutura lógica, o problema é de agrupamento, e nenhuma melhoria de texto, cor ou contraste vai corrigi-lo." },

  { camada: "extensao",
    q: "Qual é a objeção mais forte ao princípio da Prägnanz como formulado classicamente?",
    alts: [
      "Ele foi refutado por experimentos de neuroimagem.",
      "Ele é circular: 'simples' não é definido independentemente do que se percebe, de modo que nenhuma observação poderia contradizê-lo.",
      "Ele só se aplica a estímulos bidimensionais.",
      "Ele contradiz o princípio da proximidade."
    ],
    correta: 1,
    porque: "Sem métrica de simplicidade fixada antes da observação, o princípio acomoda qualquer resultado, e um princípio que explica tudo não explica nada. Formalizações posteriores (comprimento mínimo de descrição) resolvem isso em domínios restritos, mas a versão que circula em livros de design permanece vazia." },

  { camada: "extensao",
    q: "Um livro de design afirma: 'o cérebro forma campos elétricos que organizam a percepção em boas formas'. Qual é a avaliação correta?",
    alts: [
      "Está correto e é o consenso atual da psicologia da percepção.",
      "Repete uma hipótese explicativa refutada nos anos 1950, embora os fenômenos descritivos que ela pretendia explicar sejam reais.",
      "Está errado porque a percepção ocorre inteiramente na retina.",
      "Está correto, mas aplica-se apenas à visão periférica."
    ],
    correta: 1,
    porque: "Os fenômenos de agrupamento são sólidos; a teoria dos campos corticais foi testada e falhou. Repetir a explicação obsoleta como se fosse consenso é o erro mais comum na literatura popular de design, e ilustra por que vale distinguir sempre o achado da explicação proposta para ele." },

  { camada: "extensao",
    q: "Qual das limitações abaixo é uma restrição real dos princípios da Gestalt para o trabalho de design?",
    alts: [
      "Eles não funcionam em telas digitais, apenas em mídia impressa.",
      "Eles preveem agrupamento perceptivo, mas não compreensão, prioridade dentro do grupo, nem acessibilidade para leitores de tela.",
      "Eles são invalidados por variação cultural, não se aplicando fora da Europa.",
      "Eles só valem para elementos gráficos, não para texto."
    ],
    correta: 1,
    porque: "O alcance é organização perceptiva. Hierarquia (qual é a ação principal) exige contraste, tamanho e posição; compreensão exige linguagem e modelo mental; acessibilidade exige estrutura semântica que replique o agrupamento visual, já que leitores de tela não veem espaçamento. Quanto à cultura, proximidade, similaridade e fechamento se mostram robustos entre populações diversas." }
],

fontes: [
  { n: 1, tipo: "revisão", ref: "Wagemans, J. et al. 'A century of Gestalt psychology in visual perception: I. Perceptual grouping and figure-ground organization'. <em>Psychological Bulletin</em> 138(6):1172–1217, 2012.", url: "https://pubmed.ncbi.nlm.nih.gov/22845751/" },
  { n: 2, tipo: "revisão", ref: "Wagemans, J. et al. 'A century of Gestalt psychology in visual perception: II. Conceptual and theoretical foundations'. <em>Psychological Bulletin</em> 138(6):1218–1252, 2012. Discute a refutação da teoria dos campos e as explicações concorrentes atuais.", url: "https://eric.ed.gov/?id=EJ986090" },
  { n: 3, tipo: "fonte primária", ref: "Wertheimer, M. 'Untersuchungen zur Lehre von der Gestalt II'. <em>Psychologische Forschung</em> 4:301–350, 1923. O artigo que enuncia os princípios de agrupamento.", url: "" },
  { n: 4, tipo: "livro", ref: "Ware, C. <em>Information Visualization: Perception for Design</em>. 4ª ed., Morgan Kaufmann, 2020. Tradução dos achados perceptivos em recomendações de projeto, com atenção a limites.", url: "" },
  { n: 5, tipo: "livro", ref: "Palmer, S. E. <em>Vision Science: Photons to Phenomenology</em>. MIT Press, 1999. Tratamento acadêmico de agrupamento, figura-fundo e da hierarquia entre princípios.", url: "" },
  { n: 6, tipo: "livro", ref: "Johnson, J. <em>Designing with the Mind in Mind</em>. 3ª ed., Morgan Kaufmann, 2020. Aplicação direta ao design de interface, com cuidado ao separar achado de explicação.", url: "" }
]
};
