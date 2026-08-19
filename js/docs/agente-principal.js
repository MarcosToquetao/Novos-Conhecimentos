CONTEUDOS["agente-principal"] = {
termo: "Problema agente-principal",
area: "Economia",
subtitulo: "Sempre que alguém contrata outra pessoa para agir em seu nome, existe o risco de que essa pessoa persiga seus próprios interesses em vez dos interesses de quem contratou. Adam Smith já notava isso em 1776. A ferramenta que a economia moderna desenvolveu para resolver o problema, pagar executivos com base no desempenho da empresa, virou ela mesma um objeto de disputa sobre se está resolvendo o problema ou apenas mudando sua forma.",
prerequisitos: [
  "Nenhum pré-requisito técnico. Basta aceitar que, quando uma pessoa (o agente) age em nome de outra (o principal), os interesses das duas nem sempre coincidem.",
  "Para o aprofundamento: familiaridade básica com a ideia de que empresas de capital aberto têm donos (acionistas) que não são as mesmas pessoas que administram o dia a dia (executivos)."
],
conexoes: [
  { termo: "Seleção adversa", relacao: "Os dois são os problemas centrais da economia da informação: seleção adversa trata de informação escondida antes de um contrato ser fechado, o problema agente-principal trata de ação escondida depois do contrato fechado." },
  { termo: "Efeito Cantillon", relacao: "Ambos os temas tratam de situações em que quem toma uma decisão não é necessariamente quem arca com todas as suas consequências, um desalinhamento de incentivos que aparece em contextos econômicos muito diferentes." },
  { termo: "Falácia do custo afundado", relacao: "Escalada de comprometimento com projetos malsucedidos é um problema recorrente de agência: quem decide continuar um projeto raramente é quem sozinho arca com o custo de reconhecer seu fracasso." },
  { termo: "Doença holandesa", relacao: "Outro caso econômico em que a estrutura de incentivos de quem decide (governos, gestores de fundos soberanos) pode divergir do interesse de longo prazo de quem é afetado pela decisão (a população, os acionistas)." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Em 1776, Adam Smith já havia notado um problema que hoje tem nome técnico. Escrevendo sobre empresas de capital aberto, ele observou que os diretores, "sendo administradores do dinheiro alheio, e não do próprio, não se pode esperar que vigiem esse dinheiro com o mesmo cuidado ansioso com que os sócios de uma sociedade privada costumam vigiar o seu".<sup class="cit"><a href="#f3">3</a></sup> Essa frase, escrita quase dois séculos antes de a economia formalizar o conceito, descreve exatamente o que hoje se chama de <strong>problema agente-principal</strong>: sempre que uma pessoa (o <em>agente</em>) age em nome de outra (o <em>principal</em>), e o agente tem informação ou controle que o principal não tem, existe o risco de o agente perseguir seus próprios interesses às custas de quem ele deveria representar.</p>

<p>O caso mais estudado é o de executivos de empresas versus acionistas. Os acionistas são donos da empresa, mas não a administram no dia a dia. Quem administra são executivos contratados, que têm informação privilegiada sobre as operações reais da empresa e podem, em princípio, tomar decisões que beneficiam mais a si mesmos (bônus, prestígio, segurança do próprio emprego) do que aos donos do negócio.</p>

<h3>Por que isso não é um problema de má-fé individual</h3>

<p>Vale entender uma coisa importante sobre esse conceito: ele não pressupõe que executivos sejam pessoas desonestas. O problema existe mesmo quando todos os envolvidos agem de boa-fé, porque decorre da própria estrutura da relação: o principal não consegue observar diretamente todo esforço, toda decisão e toda informação que o agente tem, então não há como garantir, só por confiança, que os interesses dos dois vão sempre coincidir. É um problema estrutural de desenho institucional, não de caráter pessoal.</p>

<div class="marca consenso">
<span class="rot">O que é bem estabelecido</span>
<p>Que existe um desalinhamento potencial de interesses sempre que uma parte age em nome de outra sob informação assimétrica, e que isso gera custos reais (chamados de custos de agência), é um resultado central e amplamente aceito da teoria econômica, formalizado principalmente por Michael Jensen e William Meckling em 1976.<sup class="cit"><a href="#f1">1</a></sup> Isso não está em disputa.</p>
</div>

<h3>A solução clássica, e por que ela também gera controvérsia</h3>

<p>A solução mais discutida na teoria e na prática de governança corporativa é alinhar os incentivos do agente aos do principal: pagar executivos com uma parte relevante ligada ao desempenho da empresa (bônus por metas, ações, opções de compra de ações), para que ganhar mais dinheiro para os acionistas também signifique ganhar mais para o próprio executivo.</p>

<p>Só que essa solução também virou, ela mesma, objeto de debate. Alguns pesquisadores argumentam que a forma como os pacotes de remuneração executiva são de fato negociados na prática, muitas vezes com o próprio executivo tendo influência considerável sobre o conselho que aprova seu salário, reproduz o mesmo problema de agência que a remuneração vinculada ao desempenho deveria resolver, só que num nível mais alto.<sup class="cit"><a href="#f4">4</a></sup></p>
` },

aprofundamento: { minutos: 30, html: `
<h3>A formalização teórica: de Ross a Jensen e Meckling</h3>

<p>A primeira formalização explícita do "problema do principal" na economia é geralmente atribuída a Stephen Ross, num artigo curto de 1973 que batizou formalmente os termos "principal" e "agente" no vocabulário econômico.<sup class="cit"><a href="#f2">2</a></sup> Michael Jensen e William Meckling, três anos depois, num dos artigos mais citados da história da economia financeira, desenvolveram a teoria de forma mais completa, aplicando-a especificamente à relação entre acionistas e executivos, e introduzindo o conceito de <strong>custos de agência</strong>: a soma dos custos de monitoramento (o principal verificando o que o agente faz), dos custos de barganha ou vinculação (o agente se comprometendo contratualmente a certos limites) e da perda residual (o desalinhamento que sobra mesmo depois de todo o resto).<sup class="cit"><a href="#f1">1</a></sup></p>

<div class="tabela-env">
<table>
<thead><tr><th>Tipo de custo de agência</th><th>O que é</th><th>Exemplo</th></tr></thead>
<tbody>
<tr><td>Custo de monitoramento</td><td>Recursos gastos pelo principal para observar e verificar o comportamento do agente</td><td>Auditorias externas, conselhos de administração, relatórios financeiros obrigatórios</td></tr>
<tr><td>Custo de vinculação (bonding)</td><td>Recursos gastos pelo próprio agente para se comprometer contratualmente a certos limites</td><td>Cláusulas contratuais, garantias, remuneração diferida sujeita a metas de longo prazo</td></tr>
<tr><td>Perda residual</td><td>Desalinhamento que persiste mesmo depois de todo o monitoramento e vinculação possíveis</td><td>Decisões subótimas que nenhum contrato ou fiscalização consegue eliminar por completo</td></tr>
</tbody>
</table>
</div>

<h3>Além de executivos: onde mais o problema aparece</h3>

<p>O problema agente-principal não é exclusivo de empresas de capital aberto. Ele aparece em qualquer relação de delegação sob informação assimétrica: eleitores (principal) e políticos eleitos (agente); pacientes (principal) e médicos (agente, que decide procedimentos que também afetam sua própria remuneração); seguradoras (principal) e segurados (agente, cujo comportamento de risco a seguradora não observa por completo, um caso que se sobrepõe com risco moral); e clientes (principal) e advogados ou consultores contratados por hora (agente, que pode ter incentivo para prolongar o trabalho além do necessário).</p>

<h3>A remuneração vinculada ao desempenho, na prática</h3>

<p>A teoria prevê que vincular parte da remuneração de um executivo ao desempenho da empresa (via bônus, ações ou opções) deveria alinhar seus incentivos aos dos acionistas. A evidência empírica sobre se isso realmente funciona como previsto é mista: estudos encontram que a sensibilidade entre remuneração e desempenho varia de forma sistemática conforme o risco da empresa, mas há pouca evidência direta e consistente de que contratos de incentivo, por si só, produzam melhor desempenho corporativo de forma confiável em todos os contextos estudados.<sup class="cit"><a href="#f5">5</a></sup></p>
` },

extensao: { minutos: 60, html: `
<h3>A crítica do "poder gerencial"</h3>

<p>Lucian Bebchuk e Jesse Fried, num livro influente de 2004, propuseram uma leitura alternativa e mais cética da remuneração executiva vinculada a desempenho, chamada de teoria do <strong>poder gerencial</strong> (<em>managerial power</em>).<sup class="cit"><a href="#f4">4</a></sup> Segundo essa visão, em muitas empresas de capital pulverizado, o executivo principal tem influência real sobre a composição e o funcionamento do próprio conselho de administração, o órgão que formalmente deveria fiscalizá-lo e negociar sua remuneração de forma independente. Nesses casos, os pacotes de remuneração, mesmo vinculados nominalmente a metas de desempenho, tenderiam a refletir menos um contrato ótimo negociado a distância e mais o limite do que o próprio executivo consegue extrair sem gerar indignação pública ou de acionistas, o que os autores chamam de "restrição de indignação" (<em>outrage constraint</em>).</p>

<div class="marca controverso">
<span class="rot">Duas leituras concorrentes, ambas com apoio empírico parcial</span>
<p>A teoria de agência clássica (Jensen e Meckling) trata a remuneração vinculada a desempenho como solução ao problema de agência entre acionistas e executivos. A teoria do poder gerencial (Bebchuk e Fried) trata boa parte dessa mesma remuneração como sintoma de um problema de agência mais profundo, entre acionistas e o próprio conselho de administração que deveria representá-los. As duas leituras não são mutuamente excludentes: é possível que a remuneração vinculada a desempenho funcione parcialmente como alinhamento de incentivos e, ao mesmo tempo, seja parcialmente capturada pelo poder de influência do executivo sobre seu próprio processo de avaliação. Separar quanto de cada mecanismo está em jogo, numa empresa específica, é uma pergunta empírica difícil, não resolvida de forma unânime pela literatura.</p>
</div>

<h3>Por que o problema nunca desaparece por completo</h3>

<p>Um ponto conceitual importante, que ajuda a entender por que o problema agente-principal é tratado como estrutural e não como algo "consertável" de uma vez por todas: monitoramento perfeito seria caro demais para valer a pena (o custo de vigiar cada decisão de um agente pode superar o benefício de evitar pequenos desvios), e contratos perfeitos, que preveem toda situação futura possível e alinham incentivos em cada uma delas, são praticamente impossíveis de escrever para relações complexas e de longo prazo. Por isso a teoria não promete eliminar a perda residual, apenas reduzi-la a um nível que valha o custo de fazer isso.</p>

<h3>Aplicações fora do mundo corporativo</h3>

<p>A mesma lógica estrutural ajuda a explicar desenhos institucionais em áreas bem distantes de finanças corporativas. Por que sistemas de saúde pública costumam ter auditorias independentes de procedimentos médicos? Por que contratos de construção civil costumam vincular parte do pagamento à entrega final, e não só ao número de horas trabalhadas? Por que órgãos reguladores costumam ter mandatos fixos e proteção contra demissão arbitrária? Em cada caso, o desenho institucional está, ainda que implicitamente, tentando reduzir uma versão do mesmo problema: como fazer com que quem decide, e tem informação que quem é afetado pela decisão não tem, aja de um jeito que sirva a quem ele deveria representar.</p>
` }
},

sintese: {
  definicoes: [
    { termo: "Problema agente-principal", def: "Situação em que uma parte (o agente) age em nome de outra (o principal) sob informação assimétrica, criando risco de que o agente persiga interesses próprios em detrimento dos interesses do principal, mesmo sem má-fé individual." },
    { termo: "Custos de agência", def: "Conceito formalizado por Jensen e Meckling (1976): a soma dos custos de monitoramento, custos de vinculação (bonding) e perda residual associados a uma relação de agência." },
    { termo: "Perda residual", def: "Desalinhamento de interesses entre agente e principal que persiste mesmo depois de aplicados todo o monitoramento e toda a vinculação contratual economicamente viáveis." },
    { termo: "Teoria do poder gerencial (managerial power)", def: "Leitura alternativa, proposta por Bebchuk e Fried (2004), segundo a qual a remuneração executiva vinculada a desempenho pode refletir, em parte, a influência do próprio executivo sobre o conselho que deveria fiscalizá-lo, e não apenas um contrato ótimo de alinhamento de incentivos." },
    { termo: "Restrição de indignação (outrage constraint)", def: "Na teoria do poder gerencial, o limite prático até onde um executivo consegue extrair remuneração sem gerar reação negativa pública ou de acionistas suficiente para forçar mudança." }
  ],
  lembrar: [
    "Adam Smith já descrevia, em 1776, o problema de diretores administrarem 'o dinheiro alheio' sem o mesmo cuidado que teriam com o próprio dinheiro.",
    "Stephen Ross (1973) cunhou formalmente os termos 'principal' e 'agente' na economia; Jensen e Meckling (1976) desenvolveram a teoria completa e o conceito de custos de agência.",
    "O problema agente-principal não pressupõe má-fé individual: é um problema estrutural que surge da própria assimetria de informação entre quem decide e quem é afetado pela decisão.",
    "A solução clássica é vincular parte da remuneração do agente ao desempenho medido a favor do principal, mas a evidência empírica sobre a eficácia dessa solução é mista.",
    "Bebchuk e Fried (2004) propuseram a teoria do poder gerencial, segundo a qual parte da remuneração executiva vinculada a desempenho reflete a influência do próprio executivo sobre o conselho, não um contrato ótimo negociado de forma independente.",
    "As duas leituras (alinhamento de incentivos e poder gerencial) não são mutuamente excludentes, e separar quanto cada uma explica numa empresa específica é uma questão empírica difícil.",
    "O problema agente-principal aparece bem além de empresas: em política (eleitores e políticos), saúde (pacientes e médicos), seguros (seguradoras e segurados) e serviços profissionais em geral."
  ],
  confusoes: [
    { erro: "O problema agente-principal significa que agentes são, em geral, pessoas desonestas ou de má-fé", correcao: "O problema existe mesmo quando todos agem de boa-fé, porque decorre da estrutura da relação (informação assimétrica), não do caráter das pessoas envolvidas." },
    { erro: "Vincular a remuneração de um executivo ao desempenho da empresa resolve completamente o problema de agência", correcao: "A evidência empírica sobre a eficácia dessa solução é mista, e a teoria do poder gerencial argumenta que, em muitos casos, a própria negociação da remuneração vinculada a desempenho pode ser capturada pela influência do executivo sobre o conselho." },
    { erro: "A teoria do poder gerencial de Bebchuk e Fried provou que toda remuneração executiva vinculada a desempenho é ilegítima ou manipulada", correcao: "A teoria propõe que parte da remuneração pode refletir captura de poder, não que isso explique toda remuneração em toda empresa. As duas leituras (alinhamento genuíno e captura de poder) coexistem em graus variados conforme o caso." },
    { erro: "O problema agente-principal só se aplica a relações entre acionistas e executivos de empresas", correcao: "É um problema estrutural que aparece em qualquer relação de delegação sob informação assimétrica, incluindo política, saúde, seguros e serviços profissionais contratados por hora." },
    { erro: "É possível, com monitoramento e contratos suficientemente detalhados, eliminar completamente o problema de agência", correcao: "Monitoramento perfeito costuma custar mais do que vale a pena, e contratos que preveem toda situação futura são praticamente impossíveis de escrever, por isso a teoria trata a perda residual como algo a ser reduzido, não eliminado por completo." }
  ],
  numeros: [
    "Smith, A. A Riqueza das Nações, 1776, Livro V, Capítulo 1: primeira descrição histórica do problema, aplicada a diretores de companhias por ações.",
    "Ross, S. A. (1973), American Economic Review 63(2):134-139: primeira formalização explícita dos termos 'principal' e 'agente' na economia.",
    "Jensen, M. C. &amp; Meckling, W. H. (1976), Journal of Financial Economics 3(4):305-360: um dos artigos mais citados da história da economia financeira, com quase 100 mil citações, introduzindo o conceito de custos de agência.",
    "Bebchuk, L. A. &amp; Fried, J. M. Pay without Performance: The Unfulfilled Promise of Executive Compensation, Harvard University Press, 2004: formulação da teoria do poder gerencial."
  ]
},

flashcards: [
  { f: "O que é o problema agente-principal, em termos simples?", v: "Situação em que uma parte (o agente) age em nome de outra (o principal) sob informação assimétrica, criando risco de o agente perseguir interesses próprios em detrimento dos interesses do principal." },
  { f: "Que observação de Adam Smith, em 1776, já antecipava esse conceito?", v: "Que diretores de companhias por ações, administrando 'o dinheiro alheio' e não o próprio, não vigiariam esse dinheiro com o mesmo cuidado que teriam com seus próprios recursos." },
  { f: "Quem cunhou formalmente os termos 'principal' e 'agente' na economia, e em que ano?", v: "Stephen Ross, em 1973, num artigo publicado na American Economic Review." },
  { f: "Quem desenvolveu a teoria completa do problema de agência, aplicada a acionistas e executivos, e introduziu o conceito de custos de agência?", v: "Michael Jensen e William Meckling, em 1976, num dos artigos mais citados da história da economia financeira." },
  { f: "Quais são os três componentes dos custos de agência, segundo Jensen e Meckling?", v: "Custos de monitoramento (o principal verificando o agente), custos de vinculação ou bonding (o agente se comprometendo contratualmente), e perda residual (o desalinhamento que sobra mesmo depois disso tudo)." },
  { f: "Por que o problema agente-principal não pressupõe má-fé individual?", v: "Porque ele existe mesmo quando todos agem de boa-fé, decorrendo da própria estrutura da relação (assimetria de informação), não do caráter pessoal dos envolvidos." },
  { f: "Qual é a solução clássica proposta pela teoria de agência para reduzir o desalinhamento entre executivos e acionistas?", v: "Vincular parte da remuneração do executivo ao desempenho da empresa, por meio de bônus, ações ou opções de compra de ações, alinhando seus incentivos aos dos donos do negócio." },
  { f: "O que a evidência empírica mostra sobre a eficácia dessa solução clássica?", v: "É mista: há pouca evidência direta e consistente de que contratos de incentivo, por si só, produzam melhor desempenho corporativo de forma confiável em todos os contextos estudados." },
  { f: "O que é a teoria do poder gerencial, proposta por Bebchuk e Fried em 2004?", v: "A ideia de que, em muitas empresas, o executivo tem influência real sobre o conselho que deveria fiscalizá-lo, fazendo com que a remuneração vinculada a desempenho reflita, em parte, captura de poder, não apenas um contrato ótimo de alinhamento." },
  { f: "As teorias de alinhamento de incentivos e de poder gerencial são mutuamente excludentes?", v: "Não. É possível que a remuneração vinculada a desempenho funcione parcialmente como alinhamento genuíno e, ao mesmo tempo, seja parcialmente capturada pelo poder de influência do executivo, numa proporção que varia caso a caso." },
  { f: "Por que o problema agente-principal é tratado como estrutural, e não como algo eliminável por completo?", v: "Porque monitoramento perfeito costuma custar mais do que vale a pena, e contratos que preveem toda situação futura possível são praticamente impossíveis de escrever para relações complexas e de longo prazo." },
  { f: "Cite três exemplos de relações agente-principal fora do contexto de empresas de capital aberto.", v: "Eleitores e políticos eleitos; pacientes e médicos; seguradoras e segurados. O padrão também aparece em qualquer contratação de serviço profissional sob informação assimétrica." }
],

prova: [
  { camada: "nucleo",
    q: "O que é o problema agente-principal?",
    alts: [
      "A dificuldade de encontrar um bom advogado para representar uma empresa em tribunal.",
      "A situação em que uma parte (agente) age em nome de outra (principal) sob informação assimétrica, criando risco de o agente perseguir interesses próprios em detrimento do principal.",
      "Um método contábil para calcular o lucro líquido de uma empresa.",
      "A obrigação legal de toda empresa ter pelo menos dois diretores executivos."
    ],
    correta: 1,
    porque: "Esse é o núcleo do conceito: sempre que alguém age em nome de outra pessoa e tem informação ou controle que essa pessoa não tem, existe risco estrutural de desalinhamento de interesses." },

  { camada: "nucleo",
    q: "Que observação histórica de Adam Smith, em 1776, antecipa o problema agente-principal?",
    alts: [
      "Que o comércio internacional sempre beneficia igualmente todos os países envolvidos.",
      "Que diretores de companhias por ações, administrando dinheiro alheio, não vigiariam esse dinheiro com o mesmo cuidado que teriam com seus próprios recursos.",
      "Que o preço de qualquer bem é determinado exclusivamente pelo custo de produção.",
      "Que trabalhadores sempre preferem salários mais altos a qualquer outra forma de compensação."
    ],
    correta: 1,
    porque: "Essa observação de Smith, sobre diretores administrando 'o dinheiro alheio', é considerada uma descrição precoce e precisa do problema que a economia formalizaria dois séculos depois." },

  { camada: "nucleo",
    q: "Por que o problema agente-principal não pressupõe que agentes sejam pessoas desonestas?",
    alts: [
      "Porque agentes são sempre supervisionados por auditorias externas obrigatórias.",
      "Porque o problema decorre da estrutura da relação (informação assimétrica), existindo mesmo quando todos os envolvidos agem de boa-fé.",
      "Porque a lei proíbe qualquer forma de conflito de interesse em contratos comerciais.",
      "Porque agentes nunca têm interesses próprios distintos dos do principal."
    ],
    correta: 1,
    porque: "É um problema estrutural de desenho institucional: a assimetria de informação, por si só, já cria o risco de desalinhamento, independentemente do caráter das pessoas envolvidas." },

  { camada: "aprofundamento",
    q: "Quem formalizou explicitamente os termos 'principal' e 'agente' na economia, e em que ano?",
    alts: [
      "Adam Smith, em 1776.",
      "Stephen Ross, em 1973.",
      "John Maynard Keynes, em 1936.",
      "Milton Friedman, em 1962."
    ],
    correta: 1,
    porque: "Embora Adam Smith já tivesse descrito o fenômeno em termos gerais, foi Ross, num artigo curto de 1973, que cunhou formalmente essa terminologia específica na literatura econômica." },

  { camada: "aprofundamento",
    q: "Segundo a tabela de custos de agência apresentada no documento, o que é 'perda residual'?",
    alts: [
      "O lucro líquido de uma empresa após o pagamento de todos os impostos.",
      "O desalinhamento de interesses que persiste mesmo depois de aplicados todo o monitoramento e toda a vinculação contratual economicamente viáveis.",
      "O valor total gasto em auditorias externas contratadas por uma empresa.",
      "A diferença entre o salário de um executivo e o salário médio dos demais funcionários."
    ],
    correta: 1,
    porque: "A perda residual é o componente dos custos de agência que reconhece que nenhuma combinação de monitoramento e contrato elimina completamente o desalinhamento entre agente e principal." },

  { camada: "aprofundamento",
    q: "O que a evidência empírica mostra sobre a eficácia de vincular a remuneração de executivos ao desempenho da empresa?",
    alts: [
      "É uma solução comprovadamente perfeita, sem nenhuma controvérsia na literatura acadêmica.",
      "É mista: há pouca evidência direta e consistente de que contratos de incentivo, por si só, produzam melhor desempenho corporativo de forma confiável em todos os contextos.",
      "É completamente ineficaz, sem nenhum efeito mensurável sobre o comportamento de executivos.",
      "Só funciona em empresas com menos de dez funcionários."
    ],
    correta: 1,
    porque: "A mistura de evidências reflete a complexidade real de medir e isolar o efeito de contratos de incentivo sobre desempenho corporativo, um tema ainda ativo de pesquisa empírica." },

  { camada: "aprofundamento",
    q: "Além de empresas de capital aberto, cite um exemplo de relação agente-principal mencionado no documento.",
    alts: [
      "A relação entre duas empresas concorrentes no mesmo setor.",
      "A relação entre eleitores (principal) e políticos eleitos (agente).",
      "A relação entre dois países que não mantêm nenhum tipo de comércio.",
      "A relação entre um produto e seu preço de mercado."
    ],
    correta: 1,
    porque: "O documento cita política, saúde e seguros como exemplos de relações agente-principal fora do contexto corporativo, todos compartilhando a mesma estrutura de informação assimétrica sob delegação." },

  { camada: "extensao",
    q: "O que a teoria do poder gerencial, proposta por Bebchuk e Fried em 2004, argumenta sobre a remuneração executiva vinculada a desempenho?",
    alts: [
      "Que essa remuneração é sempre um contrato perfeitamente ótimo, sem nenhum problema.",
      "Que, em muitas empresas, o executivo tem influência real sobre o conselho que deveria fiscalizá-lo, fazendo com que parte dessa remuneração reflita captura de poder, não apenas alinhamento genuíno de incentivos.",
      "Que executivos nunca deveriam receber nenhuma forma de remuneração vinculada a desempenho.",
      "Que apenas empresas familiares sofrem do problema de poder gerencial."
    ],
    correta: 1,
    porque: "Essa teoria propõe uma leitura mais cética de um mecanismo geralmente visto como solução ao problema de agência, argumentando que ele pode, em parte, reproduzir o mesmo problema num nível institucional mais alto." },

  { camada: "extensao",
    q: "Por que o documento argumenta que as teorias de alinhamento de incentivos e de poder gerencial não são mutuamente excludentes?",
    alts: [
      "Porque as duas teorias tratam de fenômenos econômicos completamente não relacionados.",
      "Porque é possível que a remuneração vinculada a desempenho funcione parcialmente como alinhamento genuíno e, ao mesmo tempo, seja parcialmente capturada pelo poder de influência do executivo, numa proporção que varia caso a caso.",
      "Porque uma das duas teorias já foi definitivamente refutada pela pesquisa mais recente.",
      "Porque apenas uma das duas teorias já foi testada empiricamente até hoje."
    ],
    correta: 1,
    porque: "Reconhecer que os dois mecanismos podem coexistir em graus variados, sem que um exclua o outro, é uma leitura mais precisa do estado atual da pesquisa do que escolher uma teoria única e descartar a outra." },

  { camada: "extensao",
    q: "Por que o problema agente-principal é tratado, na teoria econômica, como algo a ser reduzido, e não eliminado por completo?",
    alts: [
      "Porque nenhuma lei permite a criação de contratos que reduzam esse problema.",
      "Porque monitoramento perfeito costuma custar mais do que vale a pena, e contratos que preveem toda situação futura possível são praticamente impossíveis de escrever para relações complexas e de longo prazo.",
      "Porque o problema agente-principal só existe em teoria, nunca se manifestando na prática real.",
      "Porque apenas governos, nunca empresas privadas, têm capacidade de reduzir esse tipo de problema."
    ],
    correta: 1,
    porque: "Esse é um princípio central da teoria: o custo de eliminar toda perda residual normalmente supera o benefício de fazê-lo, então o desenho institucional realista busca um equilíbrio, não uma solução perfeita e completa." }
],

fontes: [
  { n: 1, tipo: "fonte primária", ref: "Jensen, M. C. &amp; Meckling, W. H. 'Theory of the Firm: Managerial Behavior, Agency Costs and Ownership Structure'. <em>Journal of Financial Economics</em> 3(4):305-360, 1976.", url: "https://www.kellogg.northwestern.edu/faculty/hubbard/ec174/lectures/7JENSEN.htm" },
  { n: 2, tipo: "fonte primária", ref: "Ross, S. A. 'The Economic Theory of Agency: The Principal's Problem'. <em>American Economic Review</em> 63(2):134-139, 1973.", url: "https://www.jstor.org/stable/1817064" },
  { n: 3, tipo: "fonte primária", ref: "Smith, A. <em>An Inquiry into the Nature and Causes of the Wealth of Nations</em>, Livro V, Capítulo 1, Parte III, 1776.", url: "https://www.marxists.org/reference/archive/smith-adam/works/wealth-of-nations/book05/ch01c.htm" },
  { n: 4, tipo: "fonte primária", ref: "Bebchuk, L. A. &amp; Fried, J. M. <em>Pay without Performance: The Unfulfilled Promise of Executive Compensation</em>. Harvard University Press, 2004.", url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=537783" },
  { n: 5, tipo: "revisão acadêmica", ref: "'Executive Compensation: A Survey of Theory and Evidence'.", url: "https://corpgov.law.harvard.edu/2017/09/06/executive-compensation-a-survey-of-theory-and-evidence/" },
  { n: 6, tipo: "crítica", ref: "Bebchuk, L. A. &amp; Fried, J. M. 'Executive Compensation as an Agency Problem'. NBER Working Paper 9813.", url: "https://www.nber.org/system/files/working_papers/w9813/w9813.pdf" },
  { n: 7, tipo: "crítica", ref: "'Optimal Executive Compensation vs. Managerial Power: A Review of Lucian Bebchuk and Jesse Fried's Pay without Performance'. NBER Working Paper 12798.", url: "https://www.nber.org/system/files/working_papers/w12798/w12798.pdf" },
  { n: 8, tipo: "reportagem", ref: "ProMarket (Stigler Center, University of Chicago Booth School of Business). 'The Famous Article on the Theory of the Firm is Widely Misunderstood', sobre a recepção e interpretações do artigo de Jensen e Meckling.", url: "https://www.promarket.org/2021/04/04/theory-firm-misunderstood-michael-jensen-william-meckling/" },
  { n: 9, tipo: "fonte primária", ref: "Estudo sobre sensibilidade entre remuneração executiva e desempenho corporativo, e sua relação com o risco idiossincrático e sistemático da empresa.", url: "https://sciencedirect.com/science/article/pii/S0148296396002834" },
  { n: 10, tipo: "enciclopédia", ref: "Wikipedia. Verbete 'Pay Without Performance', com resumo dos argumentos centrais do livro de Bebchuk e Fried.", url: "https://en.wikipedia.org/wiki/Pay_Without_Performance" },
  { n: 11, tipo: "revisão acadêmica", ref: "Harvard Law School Forum on Corporate Governance. 'Optimal CEO Compensation with Search: Theory and Empirical Evidence'.", url: "https://corpgov.law.harvard.edu/2013/07/15/optimal-ceo-compensation-with-search-theory-and-empirical-evidence/" },
  { n: 12, tipo: "fonte primária", ref: "Estudo sobre a relação entre controle do CEO sobre o conselho, desempenho corporativo e sensibilidade de remuneração ao desempenho.", url: "https://www.sciencedirect.com/science/article/abs/pii/S0167268114002054" },
  { n: 13, tipo: "fonte primária", ref: "'Understanding CEO pay: A test of two pay-to-performance sensitivity measures with alternative measures of alignment and influence'.", url: "https://sciencedirect.com/science/article/pii/S0148296396002834" },
  { n: 14, tipo: "enciclopédia", ref: "Wikipedia. Verbete 'Principal-agent problem', com panorama geral das aplicações do conceito em diferentes áreas.", url: "https://en.wikipedia.org/wiki/Principal%E2%80%93agent_problem" },
  { n: 15, tipo: "fonte primária", ref: "'Search for Optimal CEO Compensation: Theory and Empirical Evidence', sobre desenho de contratos de remuneração executiva em mercados com fricções de busca.", url: "https://econen.sufe.edu.cn/_upload/article/files/d3/34/c6aa75294353b29e32728df8b04e/072e1daf-06de-46bb-896b-95366a75c171.pdf" }
]
};

if (typeof module !== "undefined") { module.exports = { CONTEUDOS }; }
