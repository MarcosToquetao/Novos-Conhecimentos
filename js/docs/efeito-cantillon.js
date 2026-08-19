CONTEUDOS["efeito-cantillon"] = {
termo: "Efeito Cantillon",
area: "Economia",
subtitulo: "A ideia de que dinheiro novo não chega a todo mundo ao mesmo tempo, e de que quem recebe primeiro sai ganhando, tem quase trezentos anos. Hoje ela vive sobretudo em dois lugares específicos, a economia austríaca e o debate sobre criptomoedas, e quase nenhum deles é o centro do consenso acadêmico em macroeconomia. Isso não a torna falsa. Torna necessário perguntar sempre de onde vem a versão que você está ouvindo.",
prerequisitos: [
  "Nenhum pré-requisito técnico. Basta aceitar que dinheiro novo (impresso, criado por um banco central, ou minerado) entra na economia por algum ponto específico, não do céu igualmente para todos.",
  "Para o aprofundamento: familiaridade básica com a ideia de que bancos centrais compram ativos financeiros (títulos, ações) como forma de expandir a quantidade de moeda em circulação."
],
conexoes: [
  { termo: "Doença holandesa", relacao: "Outro caso em que a distribuição, não só o tamanho agregado, de um choque econômico determina quem ganha e quem perde dentro da mesma economia." },
  { termo: "Armadilha da liquidez", relacao: "Os dois conceitos tratam de situações em que a política monetária deixa de afetar todo mundo por igual, algo que a teoria de livro-texto mais simples costuma assumir que não acontece." },
  { termo: "Seleção adversa", relacao: "Outro conceito econômico em que a posição relativa de cada participante, ali a informação privada, aqui a proximidade à fonte de moeda nova, decide o resultado da transação, não apenas a soma total envolvida." },
  { termo: "Crise de replicação", relacao: "Como o efeito Dunning-Kruger e a cascata trófica de Yellowstone, este é um caso em que separar o núcleo teórico sólido da versão popularizada exige perguntar quem está fazendo a afirmação, e com que tipo de evidência." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Imagine que um banco central decide criar dinheiro novo. Ele não aparece igualmente na conta de todo mundo ao mesmo tempo, como se fosse um depósito uniforme. Ele entra na economia por um ponto específico, geralmente comprando títulos financeiros de bancos e grandes investidores, e a partir dali se espalha aos poucos, de mão em mão, até eventualmente chegar a quem vende pão ou recebe salário fixo. A tese conhecida como <strong>efeito Cantillon</strong> é simples de enunciar: enquanto esse dinheiro se espalha, quem o recebe primeiro consegue comprar bens e ativos a preços ainda antigos, e quem o recebe por último só o recebe depois que boa parte dos preços já subiu. O resultado, segundo essa tese, é uma transferência real de poder de compra dos últimos para os primeiros, embora ninguém tenha assinado contrato nenhum para isso acontecer.</p>

<p>Essa ideia tem quase trezentos anos. Quem a formulou primeiro foi Richard Cantillon, um banqueiro irlandês radicado em Paris, num livro chamado <em>Essai sur la Nature du Commerce en Général</em>, escrito por volta de 1730. Cantillon nunca viu seu livro publicado: foi assassinado em 1734 por um ex-cozinheiro demitido, que roubou e incendiou sua casa. O manuscrito sobreviveu por pouco e só foi publicado, postumamente, em 1755.<sup class="cit"><a href="#f1">1</a></sup></p>

<h3>Contra qual ideia essa tese se choca</h3>

<p>Para entender por que essa ideia é interessante, ajuda saber contra o que ela se choca: a suposição de <strong>moeda neutra</strong>. Numa versão simplificada de livro-texto, dobrar a quantidade de dinheiro na economia simplesmente dobra todos os preços, na mesma hora, para todo mundo, sem mudar nada de real (quem era rico continua rico na mesma proporção, quem era pobre continua pobre na mesma proporção). Cantillon apontou que isso ignora o tempo e o caminho: a moeda nova não chove igualmente sobre a economia inteira num instante só, ela é gasta por alguém primeiro, depois por outro alguém, e assim por diante, e cada parada dessa cadeia é uma chance de ganhar ou perder poder de compra real.</p>

<div class="marca consenso">
<span class="rot">A parte estreita que tem apoio amplo</span>
<p>Que dinheiro não é perfeitamente neutro no curto prazo, ou seja, que mudanças na quantidade de moeda podem ter efeitos reais (não só sobre os preços) enquanto a economia se ajusta, é aceito por boa parte da macroeconomia atual, inclusive por modelos padrão de bancos centrais. Isso é diferente, porém, de aceitar a história completa do efeito Cantillon, com sua ênfase específica em quem recebe o dinheiro primeiro como o mecanismo central da desigualdade. A parte estreita (moeda não é perfeitamente neutra) é bem mais aceita do que a versão ampla (redistribuição sistemática dos últimos para os primeiros como efeito dominante da política monetária).</p>
</div>

<h3>Onde essa ideia vive hoje</h3>

<p>Vale nomear onde o efeito Cantillon é discutido com mais frequência, porque isso ajuda a calibrar o quanto ele representa consenso acadêmico ou posição de escola de pensamento. Ele é um pilar central da <strong>escola austríaca de economia</strong>, tradição que inclui Ludwig von Mises e Friedrich Hayek, e que constrói toda uma teoria de ciclos econômicos em cima da ideia de que expansão de crédito distorce investimentos antes que os preços se ajustem por completo.<sup class="cit"><a href="#f4">4</a></sup><sup class="cit"><a href="#f5">5</a></sup> Mais recentemente, ele também virou argumento central da comunidade de criptomoedas, especialmente entre defensores do Bitcoin, que apontam o fornecimento fixo de 21 milhões de moedas como uma forma de eliminar esse problema, num contraste às vezes chamado de "efeito Nakamoto" contra o efeito Cantillon do dinheiro estatal.<sup class="cit"><a href="#f11">11</a></sup><sup class="cit"><a href="#f12">12</a></sup></p>

<div class="marca controverso">
<span class="rot">O que está em disputa</span>
<p>Fora desses dois círculos (economia austríaca e comunidade cripto), o efeito Cantillon raramente aparece como vocabulário padrão em cursos de macroeconomia de universidades ou em modelos de bancos centrais, que preferem falar em "canais de transmissão da política monetária" e "efeitos distributivos", sem necessariamente adotar o enquadramento específico de Cantillon nem a conclusão de que isso torna a política monetária, no fundo, uma forma de transferência de renda para quem está mais perto do poder. Isso não significa que a ideia esteja errada. Significa que ela circula muito mais como posição de escola de pensamento do que como resultado testado e aceito de forma ampla, e que boa parte do que se lê sobre ela online vem de fontes já comprometidas com uma dessas duas tradições.</p>
</div>

<h3>Como avaliar essa afirmação quando ela aparece</h3>

<p>Quando alguém invoca "efeito Cantillon" numa discussão, vale perguntar duas coisas. Primeiro: essa pessoa está fazendo uma afirmação técnica restrita (política monetária afeta diferentes grupos de forma diferente, dependendo de como o dinheiro entra na economia), que tem apoio empírico real, ou uma afirmação ideológica ampla (toda expansão monetária é, no fundo, um mecanismo de espoliação dos pobres em favor de quem está perto do poder), que é uma inferência adicional e carregada de valor? Segundo: de que tradição intelectual específica vem essa versão, e ela reconhece isso, ou apresenta a ideia como se fosse consenso neutro da ciência econômica?</p>
` },

aprofundamento: { minutos: 30, html: `
<h3>O mecanismo, passo a passo</h3>

<p>A versão formal do argumento de Cantillon segue uma cadeia lógica. A moeda nova entra na economia por um ponto de injeção específico, historicamente a corte, os bancos e grandes comerciantes; hoje, tipicamente, o sistema financeiro, via compra de títulos por um banco central. Quem recebe essa moeda primeiro (bancos, grandes investidores, o governo) gasta ou investe a preços ainda não afetados pela expansão. Essa demanda extra eleva os preços dos bens e ativos que esse primeiro grupo compra. Os vendedores desses bens, agora com mais dinheiro, gastam por sua vez, espalhando o efeito para o próximo elo da cadeia, e assim sucessivamente. Só ao final desse processo, muitas vezes já bem depois do início da expansão, é que trabalhadores com salário fixo e famílias de renda mais baixa veem seus custos de vida subirem, sem terem recebido a moeda nova em nenhum ponto anterior da cadeia.</p>

<div class="tabela-env">
<table>
<thead><tr><th>Canal de injeção</th><th>Quem recebe primeiro</th><th>O que sobe de preço primeiro</th></tr></thead>
<tbody>
<tr><td>Compra de títulos públicos e privados por banco central (afrouxamento quantitativo)</td><td>Bancos, fundos de investimento, grandes detentores de ativos financeiros</td><td>Preços de ações, imóveis e títulos</td></tr>
<tr><td>Crédito bancário expandido a juros baixos</td><td>Empresas e investidores que tomam empréstimo para investir</td><td>Bens de capital, insumos industriais</td></tr>
<tr><td>Transferência fiscal direta a famílias (auxílio emergencial, "helicóptero de dinheiro")</td><td>Famílias de baixa e média renda</td><td>Bens de consumo cotidiano</td></tr>
</tbody>
</table>
</div>

<p>Vale notar, olhando essa tabela, que o canal mais comum de expansão monetária contemporânea (compra de ativos financeiros por bancos centrais) é justamente o que, segundo a lógica de Cantillon, beneficiaria primeiro quem já detém ativos financeiros, tipicamente famílias de renda mais alta. Isso conecta a teoria histórica a um debate bem atual sobre política de banco central.</p>

<h3>A teoria austríaca do ciclo econômico</h3>

<p>Ludwig von Mises e Friedrich Hayek construíram, a partir dessa lógica, uma explicação para booms e crises econômicas: expansão artificial de crédito baratearia os juros abaixo do que o mercado escolheria livremente, levando empresas a investir em projetos que só parecem lucrativos por causa dos juros artificialmente baixos (o chamado "mau investimento", ou <em>malinvestment</em>). Quando o efeito Cantillon se esgota e os preços terminam de se ajustar, esses investimentos se revelam insustentáveis, e o boom vira crise.<sup class="cit"><a href="#f4">4</a></sup> Essa teoria, conhecida como teoria austríaca do ciclo econômico, é uma posição minoritária dentro da macroeconomia acadêmica contemporânea, mas influente em círculos de política econômica e investimento ligados à tradição libertária.</p>

<h3>O que um banco central encontrou quando foi medir isso de verdade</h3>

<p>Em 2012, o Banco da Inglaterra publicou uma análise própria dos efeitos distributivos de seu programa de compra de ativos (a versão britânica de afrouxamento quantitativo, ou <em>quantitative easing</em>) desde 2009. A instituição não usa o termo "efeito Cantillon", mas mediu exatamente o tipo de efeito que a teoria prevê: os 10% mais ricos da população britânica tiveram um ganho patrimonial estimado em cerca de £350.000 por domicílio, nos primeiros cinco anos do programa, mais de 100 vezes o ganho estimado para os 10% mais pobres, via valorização de ações e títulos que os mais ricos detinham em maior proporção.<sup class="cit"><a href="#f6">6</a></sup> Um estudo da Resolution Foundation, instituto de pesquisa britânico, chegou a uma conclusão na mesma direção: cerca de 40% do ganho agregado em preços de ativos durante o período foi capturado pelos 10% mais ricos.<sup class="cit"><a href="#f7">7</a></sup></p>

<p>O próprio Banco da Inglaterra, porém, resiste à leitura de que isso prova que a política monetária é, no fundo, uma transferência para os ricos: argumenta que, sem a compra de ativos, o desemprego e as falências teriam sido maiores, o que teria prejudicado desproporcionalmente quem tem menos patrimônio para amortecer uma recessão. A instituição concluiu que, somando efeitos de renda e de patrimônio, a maioria da população provavelmente saiu ganhando com o programa, mesmo que de forma desigual.<sup class="cit"><a href="#f6">6</a></sup> Essa é exatamente a peça que a versão popular do efeito Cantillon costuma deixar de fora: o contrafactual (o que aconteceria sem a expansão monetária) importa tanto quanto a distribuição observada.</p>

<div class="marca emergente">
<span class="rot">Uma versão rigorosa e recente da mesma intuição</span>
<p>Desde meados dos anos 2010, um ramo da macroeconomia acadêmica conhecido como modelos HANK (Heterogeneous Agent New Keynesian, ou novo-keynesiano de agentes heterogêneos) passou a modelar explicitamente como famílias com diferentes níveis de renda, patrimônio e liquidez respondem de forma diferente à política monetária, algo que os modelos anteriores, que tratavam a economia como se fosse uma única família representativa, simplesmente não conseguiam capturar. O artigo mais citado dessa literatura, de Greg Kaplan, Benjamin Moll e Giovanni Violante, publicado na <em>American Economic Review</em> em 2018, mostra que boa parte do efeito da política monetária sobre o consumo passa por canais indiretos e desiguais entre famílias, não por um ajuste uniforme de preços.<sup class="cit"><a href="#f8">8</a></sup> Isso não é uma confirmação do efeito Cantillon na forma como a escola austríaca o descreve, mas é um reconhecimento, feito com ferramentas matemáticas rigorosas e publicado no principal periódico da profissão, de que política monetária afeta diferentes grupos de forma diferente, o núcleo da intuição de Cantillon, quase trezentos anos depois.</p>
</div>
` },

extensao: { minutos: 60, html: `
<h3>Por que a macroeconomia de bancada demorou tanto para levar isso a sério</h3>

<p>Vale entender por que uma intuição de 1730 ficou décadas fora do centro da macroeconomia acadêmica do século 20. Os modelos macroeconômicos dominantes de meados do século 20 até os anos 2000, tanto na tradição novo-clássica quanto na novo-keynesiana inicial, em geral usavam o que se chama de "agente representativo": toda a economia é modelada como se fosse uma única família média, sem diferenças de renda, patrimônio ou acesso a crédito entre indivíduos. Um modelo assim é matematicamente mais simples de resolver, mas por construção não consegue gerar nenhum efeito distributivo, porque não existe "distribuição" nenhuma dentro dele, só uma média.<sup class="cit"><a href="#f8">8</a></sup> Modelar economias com milhares de famílias heterogêneas, cada uma reagindo de forma diferente, exigia poder computacional e técnicas matemáticas que só amadureceram para uso prático em macroeconomia a partir dos anos 2010, o que ajuda a explicar por que os modelos HANK são recentes, não porque a pergunta fosse nova.</p>

<h3>Duas comunidades muito diferentes usando o mesmo termo</h3>

<p>É interessante notar como duas comunidades politicamente distantes chegam a versões parecidas dessa crítica por caminhos diferentes. A crítica de "por que Wall Street recebe socorro financeiro e você não", publicada por pesquisadores ligados à Universidade de Chicago em tom de análise de política pública, usa a lógica do efeito Cantillon para questionar resgates a instituições financeiras em crises, um argumento que atravessa o espectro político e aparece tanto em críticas de esquerda a bancos quanto em críticas libertárias ao Estado.<sup class="cit"><a href="#f13">13</a></sup> Já a comunidade de criptomoedas usa a mesma lógica de um jeito propositivo: se o problema é que alguém controla o ponto de injeção de dinheiro novo, uma moeda com oferta matematicamente fixa e sem autoridade central emissora, como o Bitcoin, eliminaria estruturalmente esse ponto de injeção privilegiado.<sup class="cit"><a href="#f11">11</a></sup></p>

<div class="marca controverso">
<span class="rot">O limite dessa proposta específica</span>
<p>Vale registrar, com o mesmo ceticismo aplicado ao resto deste documento, que a promessa de que uma oferta fixa de moeda "resolve" o efeito Cantillon também merece escrutínio. Ela troca o problema da distribuição de moeda nova pelo problema da distribuição inicial de posse do ativo (quem já possui a criptomoeda antes de sua adoção ampla se beneficia de forma estruturalmente parecida a quem estava perto do ponto de injeção num sistema tradicional), e não elimina outros canais de desigualdade econômica que não têm relação com a oferta de moeda. Essa proposta específica não tem, até o momento, corpo de evidência empírica independente comparável ao que existe para o caso da política monetária de bancos centrais tradicionais.</p>
</div>

<h3>Por que isolar o efeito puro é difícil</h3>

<p>Um obstáculo técnico real explica por que a macroeconomia levou tanto tempo para tratar essa questão com rigor: separar o efeito Cantillon "puro" de outros canais de transmissão de política monetária (mudanças em taxa de juros, expectativas de inflação futura, taxa de câmbio, confiança do consumidor) exige dados detalhados sobre quem exatamente recebeu dinheiro em cada etapa da cadeia, algo que só ficou disponível em escala e granularidade suficientes com o avanço de bases de dados administrativas e de mercado financeiro nas últimas duas décadas. Antes disso, a discussão ficava quase inteiramente no nível teórico, o que ajuda a explicar por que ela prosperou mais como posição de escola de pensamento (onde a lógica dedutiva basta) do que como resultado empírico testável (que precisa de dado).</p>

<h3>Onde isso deixa a pergunta original</h3>

<p>A leitura mais honesta hoje separa duas afirmações que a expressão "efeito Cantillon" costuma embaralhar. A afirmação estreita, de que política monetária tem efeitos distributivos mensuráveis dependendo de quem recebe o dinheiro primeiro, tem hoje respaldo tanto de análises de bancos centrais quanto da literatura acadêmica mais recente com modelos de agentes heterogêneos. A afirmação ampla, de que isso prova que expansão monetária é fundamentalmente um mecanismo de captura pelos mais próximos do poder, e de que uma solução técnica de oferta fixa resolveria o problema de forma limpa, permanece uma posição de escola de pensamento específica, não um resultado estabelecido de consenso amplo. Tratar as duas como a mesma coisa é o erro mais comum ao encontrar esse termo fora de um curso de economia.</p>
` }
},

sintese: {
  definicoes: [
    { termo: "Efeito Cantillon", def: "Tese, formulada por Richard Cantillon por volta de 1730, de que a expansão da quantidade de moeda numa economia não afeta todos os preços e todas as pessoas ao mesmo tempo, e que quem recebe o dinheiro novo primeiro ganha poder de compra real às custas de quem o recebe por último." },
    { termo: "Moeda neutra", def: "Suposição simplificadora, presente em modelos econômicos básicos, de que uma mudança na quantidade de moeda afeta todos os preços na mesma proporção e ao mesmo tempo, sem gerar nenhum efeito real ou distributivo." },
    { termo: "Teoria austríaca do ciclo econômico (ABCT)", def: "Explicação, formulada por Ludwig von Mises e desenvolvida por Friedrich Hayek, de que expansão artificial de crédito distorce investimentos (gerando 'mau investimento'), o que leva a booms seguidos de crises quando os preços terminam de se ajustar." },
    { termo: "Modelos HANK (Heterogeneous Agent New Keynesian)", def: "Ramo recente da macroeconomia acadêmica que modela explicitamente famílias com diferentes níveis de renda, patrimônio e liquidez, permitindo capturar efeitos distributivos da política monetária que modelos de 'agente representativo' não conseguem gerar." },
    { termo: "Efeito Nakamoto", def: "Termo usado na comunidade de criptomoedas para descrever o argumento de que uma moeda com oferta matematicamente fixa, como o Bitcoin, eliminaria o ponto de injeção privilegiado que caracteriza o efeito Cantillon em moedas emitidas por autoridades centrais." }
  ],
  lembrar: [
    "Richard Cantillon formulou a ideia por volta de 1730, num livro publicado só postumamente em 1755, depois de ele ser assassinado por um ex-empregado que incendiou sua casa.",
    "A tese se choca com a suposição simplificadora de 'moeda neutra', segundo a qual dinheiro novo afetaria todos os preços igualmente e ao mesmo tempo, sem gerar vencedores nem perdedores.",
    "Hoje o efeito Cantillon é discutido sobretudo em dois círculos específicos: a escola austríaca de economia (Mises, Hayek) e a comunidade de criptomoedas, especialmente defensores do Bitcoin.",
    "Fora desses círculos, cursos de macroeconomia de universidades e bancos centrais raramente usam esse termo específico, preferindo falar em 'canais de transmissão' e 'efeitos distributivos' da política monetária.",
    "O Banco da Inglaterra mediu, em 2012, que os 10% mais ricos da população britânica ganharam cerca de £350.000 por domicílio nos primeiros cinco anos de seu programa de compra de ativos, mais de 100 vezes o ganho dos 10% mais pobres, mas argumenta que a maioria da população saiu ganhando ao considerar também os efeitos sobre emprego.",
    "Desde 2018, modelos acadêmicos chamados HANK (com destaque para o artigo de Kaplan, Moll e Violante na American Economic Review) formalizam, com ferramentas matemáticas rigorosas, que política monetária afeta diferentes famílias de forma desigual, uma versão mainstream e testável da intuição original de Cantillon.",
    "A crítica ao efeito Cantillon feita pela comunidade cripto (moeda de oferta fixa resolveria o problema) ainda carece de corpo de evidência empírica independente comparável ao que existe para bancos centrais tradicionais."
  ],
  confusoes: [
    { erro: "O efeito Cantillon é um resultado comprovado e amplamente aceito pela ciência econômica, como a lei da oferta e da demanda", correcao: "A versão estreita (moeda não é perfeitamente neutra no curto prazo) tem apoio amplo. A versão ampla, com a ênfase específica de Cantillon em quem recebe o dinheiro primeiro como motor central da desigualdade, circula principalmente como posição de escola de pensamento (austríaca) ou de comunidades específicas (cripto), não como consenso de currículo universitário padrão." },
    { erro: "Como bancos centrais não usam o termo 'efeito Cantillon', isso prova que o fenômeno não existe", correcao: "O Banco da Inglaterra, sem usar esse termo, mediu exatamente o tipo de efeito distributivo que a teoria prevê (ganhos concentrados nos mais ricos via valorização de ativos). A ausência do termo específico não significa ausência do fenômeno medido, só reflete que instituições oficiais preferem vocabulário próprio, menos associado a uma escola ideológica." },
    { erro: "Uma moeda de oferta fixa, como o Bitcoin, elimina completamente o problema descrito pelo efeito Cantillon", correcao: "Isso troca o problema da distribuição de moeda nova pelo problema da distribuição inicial de posse do ativo: quem já possuía a moeda antes de sua adoção ampla se beneficia de forma estruturalmente parecida a quem estava perto da fonte de emissão num sistema tradicional." },
    { erro: "A teoria austríaca do ciclo econômico, construída sobre o efeito Cantillon, é a explicação padrão de crises econômicas na macroeconomia acadêmica", correcao: "É uma posição minoritária dentro da macroeconomia acadêmica contemporânea, influente em círculos de política econômica e investimento ligados à tradição libertária, mas não a explicação dominante em periódicos e currículos de referência." },
    { erro: "Reconhecer que política monetária tem efeitos distributivos desiguais é o mesmo que endossar a interpretação austríaca completa do efeito Cantillon", correcao: "Modelos acadêmicos recentes (HANK) confirmam a existência de efeitos distributivos desiguais usando métodos e premissas bem diferentes dos da escola austríaca, sem adotar a teoria do ciclo econômico nem as conclusões de política que a tradição austríaca costuma tirar disso." }
  ],
  numeros: [
    "Cantillon, R. Essai sur la Nature du Commerce en Général, escrito por volta de 1730, publicado postumamente em 1755.",
    "Banco da Inglaterra (2012): 10% mais ricos ganharam cerca de £350.000 por domicílio nos primeiros cinco anos do programa de compra de ativos (2009 a 2014), mais de 100 vezes o ganho dos 10% mais pobres.",
    "Resolution Foundation: cerca de 40% do ganho agregado em preços de ativos durante o período de afrouxamento quantitativo britânico foi capturado pelos 10% mais ricos.",
    "Kaplan, G., Moll, B. &amp; Violante, G. L. (2018), American Economic Review 108(3):697-743: artigo de referência dos modelos HANK sobre efeitos distributivos da política monetária.",
    "Bitcoin: oferta máxima fixa de 21 milhões de moedas, citada por defensores como solução estrutural ao efeito Cantillon do dinheiro emitido por autoridades centrais."
  ]
},

flashcards: [
  { f: "O que o efeito Cantillon afirma, em termos simples?", v: "Que dinheiro novo não chega a todo mundo ao mesmo tempo. Quem o recebe primeiro compra a preços ainda antigos; quem o recebe por último já enfrenta preços mais altos, resultando numa transferência real de poder de compra dos últimos para os primeiros." },
  { f: "Quem formulou o efeito Cantillon, e quando?", v: "Richard Cantillon, banqueiro irlandês radicado em Paris, por volta de 1730, num livro publicado apenas postumamente em 1755, depois de o autor ser assassinado por um ex-empregado que incendiou sua casa." },
  { f: "Contra qual suposição simplificadora o efeito Cantillon se opõe?", v: "Contra a suposição de 'moeda neutra': a ideia de que uma mudança na quantidade de moeda afeta todos os preços igualmente e ao mesmo tempo, sem gerar vencedores nem perdedores reais." },
  { f: "Em quais dois círculos o efeito Cantillon é discutido com mais frequência hoje?", v: "Na escola austríaca de economia (Mises, Hayek) e na comunidade de criptomoedas, especialmente entre defensores do Bitcoin." },
  { f: "Por que o fato de bancos centrais não usarem o termo 'efeito Cantillon' não significa que o fenômeno correlato não exista?", v: "Porque instituições como o Banco da Inglaterra mediram, sem usar esse termo, efeitos distributivos consistentes com a lógica de Cantillon (ganhos concentrados nos mais ricos via valorização de ativos financeiros)." },
  { f: "O que o Banco da Inglaterra encontrou, em 2012, sobre os efeitos distributivos de seu programa de compra de ativos?", v: "Que os 10% mais ricos da população britânica ganharam cerca de £350.000 por domicílio nos primeiros cinco anos do programa, mais de 100 vezes o ganho dos 10% mais pobres, via valorização de ações e títulos." },
  { f: "Como o próprio Banco da Inglaterra qualifica essa desigualdade de ganhos?", v: "Argumenta que, sem o programa, desemprego e falências teriam sido maiores, o que prejudicaria desproporcionalmente quem tem menos patrimônio, e que a maioria da população provavelmente saiu ganhando ao somar efeitos de renda e patrimônio, ainda que de forma desigual." },
  { f: "O que são modelos HANK, e por que são relevantes para o efeito Cantillon?", v: "Modelos acadêmicos de macroeconomia (Heterogeneous Agent New Keynesian) que representam famílias com diferentes níveis de renda e patrimônio, em vez de uma única 'família representativa'. Formalizam, com métodos rigorosos, que política monetária afeta diferentes grupos de forma desigual, uma versão mainstream e testável da intuição de Cantillon." },
  { f: "Quem escreveu o artigo mais citado da literatura de modelos HANK, e onde foi publicado?", v: "Greg Kaplan, Benjamin Moll e Giovanni Violante, publicado na American Economic Review em 2018." },
  { f: "Por que a macroeconomia acadêmica demorou tanto para tratar efeitos distributivos de política monetária com rigor?", v: "Porque os modelos dominantes de meados do século 20 até os anos 2000 usavam 'agente representativo' (toda a economia como uma família média), que por construção não gera nenhum efeito distributivo. Modelar famílias heterogêneas exigiu poder computacional e técnicas que só amadureceram nos anos 2010." },
  { f: "O que é o 'efeito Nakamoto', e como ele se relaciona ao efeito Cantillon?", v: "Termo da comunidade cripto para o argumento de que uma moeda de oferta fixa, como o Bitcoin, eliminaria o ponto de injeção privilegiado que caracteriza o efeito Cantillon em moedas emitidas por autoridades centrais." },
  { f: "Qual é a principal fragilidade apontada na proposta de que uma criptomoeda de oferta fixa 'resolve' o efeito Cantillon?", v: "Ela troca o problema da distribuição de moeda nova pelo problema da distribuição inicial de posse do ativo: quem já possuía a moeda antes da adoção ampla se beneficia de forma parecida a quem estava perto da fonte de emissão num sistema tradicional." },
  { f: "Qual é a distinção mais importante para avaliar uma afirmação sobre 'efeito Cantillon' encontrada fora de um curso de economia?", v: "Separar a afirmação estreita (política monetária tem efeitos distributivos mensuráveis, com respaldo empírico razoável) da afirmação ampla (isso prova que expansão monetária é fundamentalmente captura pelos poderosos, uma posição de escola de pensamento específica, não consenso amplo)." }
],

prova: [
  { camada: "nucleo",
    q: "Segundo o efeito Cantillon, o que acontece quando um banco central cria dinheiro novo?",
    alts: [
      "O dinheiro aparece igualmente nas contas de todas as pessoas ao mesmo tempo.",
      "O dinheiro entra por um ponto específico da economia, e quem o recebe primeiro compra a preços ainda antigos, enquanto quem o recebe por último já enfrenta preços mais altos.",
      "O dinheiro novo nunca afeta os preços de nenhum bem ou serviço.",
      "O dinheiro novo é distribuído por sorteio entre bancos centrais de diferentes países."
    ],
    correta: 1,
    porque: "Esse é o mecanismo central da tese: a moeda nova se espalha aos poucos, por uma cadeia de transações, e a ordem em que cada pessoa a recebe determina se ela ganha ou perde poder de compra real durante esse processo." },

  { camada: "nucleo",
    q: "Quem formulou originalmente a ideia por trás do efeito Cantillon, e em que contexto?",
    alts: [
      "John Maynard Keynes, num artigo de 1936 sobre desemprego.",
      "Richard Cantillon, banqueiro irlandês radicado em Paris, num livro escrito por volta de 1730 e publicado postumamente em 1755.",
      "Adam Smith, em 'A Riqueza das Nações', publicado em 1776.",
      "Milton Friedman, em textos sobre monetarismo dos anos 1960."
    ],
    correta: 1,
    porque: "Cantillon formulou a ideia quase um século antes de Adam Smith, e o livro só foi publicado depois de sua morte, quando ele foi assassinado por um ex-empregado que incendiou sua casa." },

  { camada: "nucleo",
    q: "Em quais dois círculos específicos o efeito Cantillon é discutido com mais frequência atualmente?",
    alts: [
      "Bancos centrais e o Fundo Monetário Internacional.",
      "A escola austríaca de economia e a comunidade de criptomoedas.",
      "Departamentos de economia comportamental e psicologia econômica.",
      "Organizações sindicais e movimentos trabalhistas."
    ],
    correta: 1,
    porque: "Fora desses dois círculos, o termo raramente aparece como vocabulário padrão em cursos universitários de macroeconomia ou em documentos de bancos centrais, que preferem falar em 'efeitos distributivos' ou 'canais de transmissão' da política monetária." },

  { camada: "aprofundamento",
    q: "Segundo a tabela de canais de injeção monetária apresentada no documento, quem tende a se beneficiar primeiro quando um banco central expande a moeda comprando títulos financeiros (afrouxamento quantitativo)?",
    alts: [
      "Famílias de baixa renda que recebem transferências fiscais diretas.",
      "Bancos, fundos de investimento e grandes detentores de ativos financeiros.",
      "Trabalhadores com salário mínimo em setores de serviços.",
      "Aposentados que vivem exclusivamente de renda fixa em poupança."
    ],
    correta: 1,
    porque: "Compra de títulos por banco central injeta dinheiro primeiro no sistema financeiro, beneficiando quem já detém ou negocia ativos financeiros, tipicamente famílias e instituições de maior patrimônio." },

  { camada: "aprofundamento",
    q: "O que o Banco da Inglaterra encontrou, em sua análise de 2012 sobre os efeitos distributivos de seu programa de compra de ativos?",
    alts: [
      "Que o programa não teve nenhum efeito mensurável sobre a distribuição de patrimônio.",
      "Que os 10% mais ricos da população ganharam cerca de £350.000 por domicílio nos primeiros cinco anos, mais de 100 vezes o ganho dos 10% mais pobres, mas que a maioria da população provavelmente saiu ganhando ao considerar também efeitos sobre emprego.",
      "Que os 10% mais pobres foram o grupo que mais se beneficiou do programa.",
      "Que o programa beneficiou exclusivamente o governo britânico, sem afetar famílias."
    ],
    correta: 1,
    porque: "A instituição mediu um efeito distributivo consistente com a lógica de Cantillon (concentração de ganhos nos mais ricos via valorização de ativos), mas argumentou que o contrafactual (sem o programa) teria sido pior para a maioria, especialmente para quem tem menos patrimônio." },

  { camada: "aprofundamento",
    q: "O que caracteriza a teoria austríaca do ciclo econômico (ABCT), construída por Mises e Hayek a partir da lógica de Cantillon?",
    alts: [
      "É a explicação padrão de crises econômicas ensinada na maioria dos currículos universitários de macroeconomia.",
      "Propõe que expansão artificial de crédito gera 'mau investimento' (malinvestment) que se revela insustentável quando os preços terminam de se ajustar, causando booms seguidos de crises; é uma posição minoritária na macroeconomia acadêmica atual.",
      "Afirma que crises econômicas são causadas exclusivamente por choques externos, sem relação com política monetária.",
      "Foi desenvolvida nos anos 2010 a partir dos modelos HANK."
    ],
    correta: 1,
    porque: "A ABCT é uma tradição de pensamento influente em círculos de política e investimento ligados ao libertarianismo, mas ocupa posição minoritária dentro da macroeconomia acadêmica contemporânea, que em geral prefere outros modelos de ciclo econômico." },

  { camada: "aprofundamento",
    q: "Por que modelos macroeconômicos de 'agente representativo', dominantes até os anos 2000, não conseguiam gerar nenhum efeito distributivo de política monetária?",
    alts: [
      "Porque eram baseados exclusivamente em dados de países em desenvolvimento.",
      "Porque, por construção, tratavam toda a economia como uma única família média, sem diferenças de renda, patrimônio ou acesso a crédito entre indivíduos, então não existia distribuição nenhuma dentro do modelo.",
      "Porque não incluíam nenhuma variável monetária.",
      "Porque eram usados apenas para prever taxas de câmbio, não política monetária doméstica."
    ],
    correta: 1,
    porque: "Um modelo de agente representativo simplifica a economia para uma única família média, o que o torna mais fácil de resolver matematicamente, mas elimina por definição a possibilidade de capturar qualquer efeito distributivo entre grupos diferentes." },

  { camada: "extensao",
    q: "O que os modelos HANK (Heterogeneous Agent New Keynesian), com destaque para o artigo de Kaplan, Moll e Violante (2018) na American Economic Review, representam para o debate sobre o efeito Cantillon?",
    alts: [
      "Uma confirmação completa da teoria austríaca do ciclo econômico, incluindo suas conclusões de política.",
      "Um reconhecimento recente, feito com ferramentas matemáticas rigorosas e publicado no principal periódico da profissão, de que política monetária afeta diferentes famílias de forma desigual, sem adotar a teoria específica ou as conclusões da escola austríaca.",
      "Uma refutação definitiva de qualquer efeito distributivo da política monetária.",
      "Um modelo desenvolvido especificamente para justificar a adoção de criptomoedas por bancos centrais."
    ],
    correta: 1,
    porque: "Os modelos HANK validam o núcleo estreito da intuição de Cantillon (efeitos distributivos desiguais) usando métodos e premissas completamente diferentes dos da escola austríaca, sem endossar a teoria do ciclo econômico nem as conclusões políticas que essa tradição costuma tirar." },

  { camada: "extensao",
    q: "Qual é a principal fragilidade, apontada no documento, na proposta de que uma criptomoeda de oferta fixa, como o Bitcoin, 'resolveria' o efeito Cantillon?",
    alts: [
      "Criptomoedas não têm nenhuma relação com política monetária.",
      "A proposta troca o problema da distribuição de moeda nova pelo problema da distribuição inicial de posse do ativo: quem já possuía a moeda antes da adoção ampla se beneficia de forma estruturalmente parecida a quem estava perto da fonte de emissão num sistema tradicional.",
      "Bitcoin tem oferta ilimitada, o que tornaria a comparação inválida.",
      "Bancos centrais já adotaram amplamente o Bitcoin como reserva, eliminando a comparação."
    ],
    correta: 1,
    porque: "O documento aponta que resolver o problema de 'quem recebe moeda nova primeiro' não elimina o problema análogo de 'quem já possuía o ativo antes de sua valorização', que produz uma dinâmica de concentração de benefícios estruturalmente parecida." },

  { camada: "extensao",
    q: "Segundo o documento, qual é a distinção mais importante para avaliar uma afirmação que invoca 'efeito Cantillon' fora de um curso formal de economia?",
    alts: [
      "Se a pessoa que faz a afirmação tem um diploma de economia ou não.",
      "Separar a afirmação estreita e empiricamente respaldada (política monetária tem efeitos distributivos desiguais, dependendo do canal de transmissão) da afirmação ampla e ideológica (isso prova que expansão monetária é fundamentalmente um mecanismo de captura pelos poderosos), que é posição de escola de pensamento, não consenso estabelecido.",
      "Se a afirmação menciona ou não o Bitcoin explicitamente.",
      "Se a afirmação é feita em português ou em inglês."
    ],
    correta: 1,
    porque: "Essa é a síntese central do documento: o núcleo técnico do efeito Cantillon tem respaldo empírico crescente (bancos centrais, modelos HANK), mas a extrapolação ideológica ampla, comum em discursos austríacos e cripto, vai além do que essa evidência estabelece por si só." }
],

fontes: [
  { n: 1, tipo: "fonte primária", ref: "Cantillon, R. <em>Essai sur la Nature du Commerce en Général</em>. Escrito por volta de 1730, publicado postumamente em 1755. Tradução inglesa de Henry Higgs, 1931.", url: "https://www.econlib.org/library/NPDBooks/Cantillon/cntNT.html" },
  { n: 2, tipo: "biografia acadêmica", ref: "Murphy, A. E. <em>Richard Cantillon: Entrepreneur and Economist</em>. Oxford: Clarendon Press, 1986.", url: "https://academic.oup.com/ahr/article-abstract/94/3/711/130777" },
  { n: 3, tipo: "enciclopédia", ref: "Britannica Money. Verbete 'Richard Cantillon', com associação explícita à tradição da escola austríaca.", url: "https://www.britannica.com/money/Richard-Cantillon" },
  { n: 4, tipo: "posição de escola de pensamento", ref: "Mises Institute. 'Cantillon Effects: Why Inflation Helps Some and Hurts Others', exposição do enquadramento austríaco do conceito.", url: "https://mises.org/mises-wire/cantillon-effects-why-inflation-helps-some-and-hurts-others" },
  { n: 5, tipo: "posição de escola de pensamento", ref: "Mises Institute. 'The Theory of the Bottom 99 Percent: The Cantillon Effect'.", url: "https://mises.org/mises-wire/theory-bottom-99-percent-cantillon-effect" },
  { n: 6, tipo: "documento oficial", ref: "Bank of England. 'The Distributional Effects of Asset Purchases'. <em>Quarterly Bulletin</em>, 2012 Q3.", url: "https://www.bankofengland.co.uk/quarterly-bulletin/2012/q3/the-distributional-effects-of-asset-purchases" },
  { n: 7, tipo: "fonte primária institucional", ref: "Resolution Foundation. 'Quantitative (displ)easing?', relatório sobre os efeitos distributivos do afrouxamento quantitativo no Reino Unido.", url: "https://www.resolutionfoundation.org/app/uploads/2019/09/Quantitative-displeasing-FINAL-VERSION.pdf" },
  { n: 8, tipo: "fonte primária acadêmica", ref: "Kaplan, G., Moll, B. &amp; Violante, G. L. 'Monetary Policy According to HANK'. <em>American Economic Review</em> 108(3):697-743, 2018.", url: "https://www.aeaweb.org/articles?id=10.1257/aer.20160042" },
  { n: 9, tipo: "enciclopédia", ref: "Econlib. Verbete 'New Keynesian Economics', sobre não neutralidade da moeda no curto prazo em modelos macroeconômicos padrão.", url: "https://www.econlib.org/library/Enc/NewKeynesianEconomics.html" },
  { n: 10, tipo: "documento institucional", ref: "Federal Reserve Bank of Minneapolis. 'Are Prices Sticky and Does It Matter?'.", url: "https://www.minneapolisfed.org/article/2016/are-prices-sticky-and-does-it-matter" },
  { n: 11, tipo: "reportagem", ref: "Cointelegraph. 'From cash to crypto: The Cantillon effect vs. the Nakamoto effect'.", url: "https://cointelegraph.com/explained/from-cash-to-crypto-the-cantillon-effect-vs-the-nakamoto-effect" },
  { n: 12, tipo: "divulgação", ref: "Swan Bitcoin. 'What is Cantillon Effect?', exposição do argumento da comunidade cripto.", url: "https://www.swanbitcoin.com/economics/cantillon-effect/" },
  { n: 13, tipo: "reportagem", ref: "ProMarket (Stigler Center, University of Chicago Booth School of Business). 'The Cantillon Effect: Why Wall Street Gets a Bailout and You Don't'.", url: "https://www.promarket.org/2020/04/13/the-cantillon-effect-why-wall-street-gets-a-bailout-and-you-dont/" },
  { n: 14, tipo: "divulgação", ref: "Positive Money. 'QE or not to QE? Soaring inequality shows it's time for a new macroeconomic approach'.", url: "https://positivemoney.org/uk/archive/qe-or-not-to-qe-soaring-inequality-proves-its-time-for-a-new-macroeconomic-approach/" },
  { n: 15, tipo: "reportagem institucional", ref: "International Monetary Fund, Finance &amp; Development. 'The Very Model of Modern Monetary Policy', sobre a repercussão do trabalho de Kaplan, Moll e Violante.", url: "https://www.imf.org/en/publications/fandd/issues/2023/03/modern-monetary-policy-kaplan-moll-violante" }
]
};

if (typeof module !== "undefined") { module.exports = { CONTEUDOS }; }
