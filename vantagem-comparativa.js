CONTEUDOS["vantagem-comparativa"] = {
termo: "Vantagem comparativa",
area: "Economia",
subtitulo: "Uma demonstração de duas páginas, publicada em 1817, mostrando que dois países ganham comerciando mesmo quando um deles produz tudo melhor. É contraintuitiva, é logicamente correta — e é rotineiramente usada para justificar conclusões que ela não sustenta.",
prerequisitos: [
  "Saber o que é uma troca comercial. Nada mais é necessário para o núcleo.",
  "Para o aprofundamento: entender que produzir uma coisa significa deixar de produzir outra com os mesmos recursos."
],
conexoes: [
  { termo: "Custo de oportunidade", relacao: "A vantagem comparativa é, literalmente, custo de oportunidade aplicado a países. Sem esse conceito, o argumento não existe." },
  { termo: "Externalidades", relacao: "Ganhos de comércio calculados sem contabilizar custos ambientais e sociais são ganhos superestimados por construção." },
  { termo: "Salário mínimo: o debate empírico", relacao: "Outro caso em que um modelo teórico simples e elegante foi confrontado com dados naturais e teve que ser qualificado." },
  { termo: "Assimetria de informação", relacao: "Ambos mostram que os teoremas de eficiência do mercado dependem de premissas que raramente se verificam integralmente." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">O matemático Stanislaw Ulam certa vez desafiou Paul Samuelson a apontar uma proposição em todas as ciências sociais que fosse simultaneamente verdadeira e não trivial. Samuelson levou anos e respondeu: a vantagem comparativa. "Que ela é logicamente verdadeira não precisa ser argumentado diante de um matemático; que não é trivial é atestado por milhares de homens importantes e inteligentes que nunca conseguiram compreendê-la sozinhos ou acreditar nela depois de explicada."<sup class="cit"><a href="#f1">1</a></sup></p>

<h3>O erro que todo mundo comete primeiro</h3>

<p>A intuição natural diz: se o país A produz tudo mais barato que o país B, então A não tem o que ganhar comerciando com B. B seria apenas um parceiro inferior.</p>

<p>Essa intuição está errada, e o motivo é que ela compara a coisa errada. O que decide a especialização não é quanto custa produzir algo <em>em termos absolutos</em>, e sim quanto você deixa de produzir de outra coisa ao produzi-la. Custo de oportunidade, não custo absoluto.</p>

<h3>O exemplo de Ricardo, com os números originais</h3>

<p>David Ricardo usou dois países e dois produtos. Suponha que, para produzir uma unidade, sejam necessárias as seguintes horas de trabalho:</p>

<div class="tabela-env">
<table>
<thead><tr><th></th><th>Vinho</th><th>Tecido</th></tr></thead>
<tbody>
<tr><td><strong>Portugal</strong></td><td>80 horas</td><td>90 horas</td></tr>
<tr><td><strong>Inglaterra</strong></td><td>120 horas</td><td>100 horas</td></tr>
</tbody>
</table>
</div>

<p>Portugal é melhor nos dois. Produz vinho com menos horas e tecido com menos horas. Pela intuição do parágrafo anterior, não haveria motivo para comerciar.</p>

<p>Agora faça a pergunta certa. Em Portugal, produzir uma unidade de vinho custa 80 horas — que poderiam ter feito 80/90 ≈ 0,89 unidade de tecido. Na Inglaterra, uma unidade de vinho custa 120 horas, que fariam 120/100 = 1,2 unidade de tecido.</p>

<p>Vinho é mais barato em Portugal e tecido é mais barato na Inglaterra, em termos do que cada um sacrifica. Portugal sacrifica menos tecido para fazer vinho; a Inglaterra sacrifica menos vinho para fazer tecido.</p>

<figure class="figura">[[FIG:ricardo-ppf]]<figcaption>O que cada país consegue produzir com 100 horas. A reta de Portugal está inteiramente acima e à direita: ele é melhor nos dois. Mas as inclinações são diferentes, e é a inclinação, não a altura, que determina quem deve se especializar em quê.</figcaption></figure>

<h3>A conta que mostra o ganho</h3>

<p>Suponha que cada país tenha 200 horas de trabalho e divida igualmente entre os dois produtos.</p>

<p><strong>Sem comércio:</strong> Portugal faz 100/80 = 1,25 vinho e 100/90 ≈ 1,11 tecido. A Inglaterra faz 100/120 ≈ 0,83 vinho e 100/100 = 1 tecido. <em>Total mundial: 2,08 vinho e 2,11 tecido.</em></p>

<p><strong>Com especialização completa:</strong> Portugal dedica as 200 horas ao vinho: 2,5 unidades. A Inglaterra dedica as 200 ao tecido: 2 unidades. <em>Total mundial: 2,5 vinho e 2 tecido.</em></p>

<p>Comparando: o mundo ganhou 0,42 unidade de vinho e perdeu 0,11 de tecido. A qualquer taxa de troca entre 0,89 e 1,2 tecido por vinho, existe um acordo que deixa os dois países com mais dos dois produtos do que teriam sozinhos. O ganho não veio de trabalhar mais nem de tecnologia nova; veio apenas de reorganizar quem faz o quê.</p>

<div class="marca consenso">
<span class="rot">Consenso estabelecido</span>
<p>O teorema é matematicamente válido e não há controvérsia sobre sua correção interna. Dadas as premissas do modelo, a conclusão segue necessariamente. É um dos poucos resultados formais da economia que praticamente nenhum economista contesta <em>como teorema</em>.</p>
</div>

<div class="marca controverso">
<span class="rot">E onde a controvérsia realmente está</span>
<p>Quase toda a disputa sobre comércio internacional é sobre as <em>premissas</em>, não sobre a lógica. O modelo de Ricardo supõe pleno emprego, trabalho que se realoca sem custo entre setores, capital imóvel entre países, tecnologia fixa e ausência de economias de escala. Cada uma dessas suposições falha em algum grau no mundo real, e a magnitude dessas falhas é uma questão empírica, não ideológica.</p>
</div>

<h3>O que o teorema realmente afirma</h3>

<p>Vale ser preciso, porque a imprecisão aqui é a origem de metade das discussões inúteis sobre o tema. O teorema afirma que o comércio aumenta o <strong>produto agregado</strong> e que existe uma distribuição desse ganho que deixaria todos melhores.</p>

<p>Ele <em>não</em> afirma que essa distribuição de fato ocorre. Ele não diz nada sobre quem dentro de cada país ganha e quem perde. Ele não diz nada sobre a velocidade do ajuste, nem sobre o que acontece com quem trabalhava no setor que encolheu. Essas são perguntas separadas, e são exatamente as que importam politicamente.</p>
` },

aprofundamento: { minutos: 15, html: `
<h3>Formalizando: a condição de vantagem comparativa</h3>

<p>Com <em>a</em> denotando horas por unidade, país 1 tem vantagem comparativa no bem X quando:</p>

<div class="formula">
a<sub>1X</sub> / a<sub>1Y</sub> &lt; a<sub>2X</sub> / a<sub>2Y</sub>
<span class="leg">a razão entre os custos internos, não os custos em si</span>
</div>

<p>Repare que os níveis absolutos desaparecem completamente. Multiplique todos os custos de Portugal por dez, tornando-o dez vezes menos produtivo em tudo: a desigualdade não muda, e o padrão de especialização também não. Isso captura formalmente a ideia central: produtividade absoluta é irrelevante para o padrão de comércio.</p>

<p>Produtividade absoluta determina outra coisa, e é importante não confundir: ela determina o <strong>nível de salários</strong>. Um país menos produtivo em tudo não fica sem comércio: ele comercia com salários mais baixos. Essa é a resposta padrão a duas objeções simétricas e ambas equivocadas: "não podemos competir com países de mão de obra barata" e "países pobres não têm o que oferecer".</p>

<h3>Quem ganha e quem perde dentro do país</h3>

<p>Aqui entra o resultado que a versão popular do argumento omite. O <strong>teorema de Stolper-Samuelson</strong> (1941) mostra que a abertura comercial aumenta a remuneração real do fator de produção usado intensivamente no setor exportador e <em>reduz</em> a do fator usado intensivamente no setor que compete com importações.</p>

<p>Ou seja: não é que "o país ganha". É que dentro do país há ganhadores e perdedores identificáveis, e a teoria os prevê. Um país rico em capital que se abre ao comércio com um país rico em trabalho tende a ver a remuneração do capital subir e a do trabalho de baixa qualificação cair, em termos reais.</p>

<div class="marca consenso">
<span class="rot">Consenso técnico frequentemente omitido no debate público</span>
<p>Que o comércio produz perdedores concentrados e ganhadores difusos não é uma crítica heterodoxa ao modelo: é um resultado do próprio arcabouço padrão, demonstrado há mais de oitenta anos. A defesa habitual ("os ganhadores poderiam compensar os perdedores") é logicamente correta e empiricamente frágil: a compensação raramente é implementada em escala suficiente, e o teorema não oferece nenhum mecanismo que a garanta.</p>
</div>

<h3>O que os dados mostraram: o "China Shock"</h3>

<p>Durante décadas, a economia do comércio operou com um pressuposto de ajuste relativamente rápido: trabalhadores deslocados encontrariam emprego em setores em expansão dentro de poucos anos. Autor, Dorn e Hanson testaram isso empiricamente para o caso da entrada da China no comércio mundial a partir dos anos 1990.<sup class="cit"><a href="#f3">3</a></sup></p>

<p>Os achados centrais, medidos em mercados de trabalho locais dos Estados Unidos mais expostos à concorrência chinesa: perda de emprego industrial persistente, queda de salários, aumento de dependência de benefícios e, o ponto crítico, ajuste muito mais lento do que os modelos supunham, com efeitos ainda visíveis uma década depois. A mobilidade geográfica dos trabalhadores afetados foi menor do que a teoria previa.</p>

<div class="marca emergente">
<span class="rot">Como o campo respondeu</span>
<p>Esta literatura reorientou o debate. O consenso atual entre economistas do comércio não é que Ricardo esteja errado, e sim que os ganhos agregados são reais mas os custos de ajuste foram sistematicamente subestimados, e que sua concentração geográfica e setorial tem consequências políticas que os modelos não capturavam. Um consenso teórico de décadas foi qualificado por evidência empírica cuidadosa: é o que se espera de uma ciência funcionando.</p>
</div>

<h3>A ressalva do próprio Samuelson</h3>

<p>Em 2004, Samuelson, que havia dedicado a carreira a defender o livre comércio, publicou um artigo mostrando que existe um caso em que um país pode ficar <strong>permanentemente pior</strong> com o comércio.<sup class="cit"><a href="#f2">2</a></sup></p>

<p>O mecanismo: se o país B tem um ganho de produtividade justamente no setor em que o país A tinha vantagem comparativa, os termos de troca de A pioram. A perde mais com a deterioração dos preços relativos do que ganha com os produtos mais baratos. Não é um argumento protecionista: Samuelson observa que barreiras comerciais tornariam a situação ainda pior. É um argumento sobre os limites de uma afirmação que vinha sendo feita de forma incondicional.</p>
` },

extensao: { minutos: 30, html: `
<h3>As premissas, uma a uma</h3>

<div class="tabela-env">
<table>
<thead><tr><th>Premissa do modelo</th><th>Quão realista</th><th>Consequência da falha</th></tr></thead>
<tbody>
<tr><td>Pleno emprego</td><td>Falsa em recessões</td><td>Trabalhador deslocado pode ficar desempregado, não realocado</td></tr>
<tr><td>Mobilidade interna do trabalho sem custo</td><td>Fortemente violada</td><td>Custos de ajuste altos, persistentes e regionalmente concentrados</td></tr>
<tr><td>Capital imóvel entre países</td><td>Obsoleta desde os anos 1980</td><td>Empresas podem mover produção, não apenas comerciar produtos</td></tr>
<tr><td>Tecnologia dada e fixa</td><td>Falsa: tecnologia é endógena</td><td>Especializar-se em setores de baixo aprendizado pode travar o desenvolvimento</td></tr>
<tr><td>Retornos constantes de escala</td><td>Falsa em indústria e software</td><td>Vantagens podem ser criadas, não apenas descobertas</td></tr>
<tr><td>Concorrência perfeita</td><td>Falsa em muitos setores</td><td>Ganhos podem ser capturados por poucas empresas</td></tr>
</tbody>
</table>
</div>

<h3>A crítica mais séria: especialização e desenvolvimento</h3>

<p>Se a tecnologia fosse realmente fixa, a especialização segundo a vantagem comparativa atual seria sempre ótima. Mas ela não é. Setores diferem enormemente em potencial de aprendizado, de ganhos de produtividade e de transbordamento tecnológico.</p>

<p>Um país com vantagem comparativa em extração de minério e outro em semicondutores não estão apenas produzindo coisas diferentes: estão em trajetórias de aprendizado diferentes. Especializar-se conforme a vantagem <em>presente</em> pode consolidar uma estrutura produtiva que impede o desenvolvimento de vantagens <em>futuras</em>.</p>

<p>Este é o núcleo do argumento da indústria nascente, formulado já por Alexander Hamilton e Friedrich List no século XIX, e retomado por Ha-Joon Chang e Dani Rodrik.<sup class="cit"><a href="#f4">4</a></sup></p>

<div class="marca controverso">
<span class="rot">Controvérsia empírica genuína, ainda aberta</span>
<p>Os defensores do argumento apontam que Reino Unido, Estados Unidos, Alemanha, Japão e Coreia do Sul industrializaram-se sob proteção substancial, e só depois adotaram o livre comércio. Os críticos apontam viés de seleção: para cada Coreia do Sul há vários casos de substituição de importações que produziram indústrias ineficientes e permanentemente dependentes de subsídio. A questão empírica real não é "proteção funciona?", mas "sob quais condições institucionais a proteção produz aprendizado em vez de captura de renda?" Essa pergunta não tem resposta consensual.</p>
</div>

<h3>Nova teoria do comércio: por que países parecidos comerciam tanto</h3>

<p>O modelo ricardiano prevê que o comércio ocorre entre países <em>diferentes</em>: quanto maior a diferença de custos relativos, maior o ganho. Mas o maior volume de comércio mundial acontece entre países ricos e similares: Alemanha e França trocam carros por carros.</p>

<p>Paul Krugman formalizou a explicação nos anos 1980, o que lhe rendeu o Nobel de 2008. Com <strong>economias de escala</strong> e <strong>preferência por variedade</strong>, dois países idênticos ainda ganham comerciando: cada um se especializa em algumas variedades, produz em escala maior com custo unitário menor, e ambos os consumidores acessam mais variedades.</p>

<p>A implicação conceitual é forte: neste modelo, o padrão de especialização é <strong>indeterminado</strong>. Quem produz o quê pode ser resultado de acidente histórico, e depois se consolida por retornos crescentes. Vantagem comparativa deixa de ser algo que se descobre e passa a ser algo que se constrói. Isso muda inteiramente as implicações de política.</p>

<h3>Como avaliar um argumento sobre comércio</h3>

<p>Cinco perguntas que separam análise de retórica, em qualquer direção:</p>

<ol>
<li><strong>Agregado ou distributivo?</strong> Ganho agregado e distribuição do ganho são afirmações distintas. Um argumento que responde à segunda pergunta com evidência sobre a primeira está mudando de assunto.</li>
<li><strong>Qual horizonte temporal?</strong> Ganhos de comércio são difusos e permanentes; custos de ajuste são concentrados e temporários, mas "temporário" pode significar uma década, o que é boa parte de uma carreira.</li>
<li><strong>Estático ou dinâmico?</strong> A análise considera apenas a alocação atual de recursos, ou também o efeito sobre a capacidade produtiva futura?</li>
<li><strong>O que está fora da contabilidade?</strong> Custos ambientais, condições de trabalho e transferência de tecnologia raramente entram no cálculo de ganhos.</li>
<li><strong>Qual é a alternativa concreta?</strong> Mostrar que o livre comércio tem custos não estabelece que a política proposta em seu lugar tenha custos menores. Comparar uma política real com um ideal é o erro simétrico mais comum.</li>
</ol>

<div class="marca consenso">
<span class="rot">O que segurar</span>
<p>A vantagem comparativa é um teorema correto sobre custos de oportunidade, não uma doutrina política. Ela estabelece que existem ganhos agregados do comércio e que produtividade absoluta não determina o padrão de especialização. Ela não estabelece que o comércio beneficia todos, que o ajuste é rápido, que a especialização atual é a melhor para o futuro, nem que qualquer acordo comercial concreto é bom. Confundir o teorema com essas conclusões adicionais é o uso indevido mais frequente. Isso acontece, com igual frequência, dos dois lados do debate.</p>
</div>
` }
},

flashcards: [
  { f: "Qual é a diferença entre vantagem absoluta e vantagem comparativa?", v: "Vantagem absoluta é produzir com menos recursos em termos absolutos. Vantagem comparativa é ter menor custo de oportunidade — sacrificar menos de outro bem para produzir aquele. Só a segunda determina o padrão de comércio." },
  { f: "No exemplo de Ricardo, por que Portugal comercia com a Inglaterra mesmo sendo melhor em tudo?", v: "Porque produzir vinho custa a Portugal ~0,89 tecido e à Inglaterra 1,2 tecido. Portugal sacrifica menos para fazer vinho; a Inglaterra sacrifica menos para fazer tecido. As inclinações diferem, e é isso que gera ganho." },
  { f: "O que acontece com o padrão de comércio se um país fica dez vezes menos produtivo em tudo?", v: "Nada: as razões de custo interno não mudam, então a especialização é a mesma. O que muda é o nível de salários — produtividade absoluta determina remuneração, não padrão de comércio." },
  { f: "O que diz o teorema de Stolper-Samuelson?", v: "Que a abertura comercial eleva a remuneração real do fator usado intensivamente no setor exportador e reduz a do fator usado intensivamente no setor que compete com importações. Perdedores são previstos pela própria teoria." },
  { f: "O que a literatura do 'China Shock' mostrou?", v: "Que os ganhos agregados do comércio são reais, mas os custos de ajuste foram subestimados: perda de emprego persistente, queda de salários e mobilidade dos trabalhadores muito menor do que os modelos supunham (Autor, Dorn e Hanson)." },
  { f: "Qual ressalva Samuelson publicou em 2004?", v: "Que um ganho de produtividade do parceiro comercial justamente no setor em que o país tinha vantagem comparativa pode piorar seus termos de troca a ponto de deixá-lo permanentemente pior — sem que barreiras comerciais sejam a solução." },
  { f: "Qual é o argumento da indústria nascente?", v: "Que a tecnologia não é fixa: especializar-se conforme a vantagem comparativa presente pode consolidar uma estrutura produtiva que impede o desenvolvimento de vantagens futuras, já que setores diferem em potencial de aprendizado." },
  { f: "Por que países ricos e similares comerciam tanto entre si?", v: "Economias de escala e preferência por variedade (Krugman). Cada país se especializa em algumas variedades, produz em escala maior e ambos acessam mais opções — mesmo sem diferença de custos relativos." },
  { f: "Qual é a implicação mais forte da nova teoria do comércio?", v: "Que o padrão de especialização pode ser indeterminado: quem produz o quê pode resultar de acidente histórico consolidado por retornos crescentes. Vantagem comparativa passa a ser construída, não apenas descoberta." },
  { f: "O que o teorema da vantagem comparativa NÃO afirma?", v: "Não afirma que a distribuição dos ganhos beneficia todos, nem que o ajuste é rápido, nem que a especialização presente é ótima para o futuro, nem que qualquer acordo comercial concreto é bom." }
],

prova: [
  { camada: "nucleo",
    q: "O país A produz tanto arroz quanto software com menos recursos que o país B. O que a teoria da vantagem comparativa prevê?",
    alts: [
      "Que A não tem ganho em comerciar com B.",
      "Que A deve produzir os dois bens e B deve importar ambos.",
      "Que ainda há ganho mútuo, desde que os custos de oportunidade internos difiram entre os dois países.",
      "Que o comércio só ocorrerá se B subsidiar suas exportações."
    ],
    correta: 2,
    porque: "Vantagem absoluta em tudo não elimina o ganho. O que importa é a razão entre custos internos: se A sacrifica menos software para produzir arroz do que B, cada um se especializa e ambos consomem mais. Só quando os custos de oportunidade são idênticos nos dois países é que não há ganho." },

  { camada: "nucleo",
    q: "Nos números de Ricardo (Portugal: 80h vinho, 90h tecido; Inglaterra: 120h vinho, 100h tecido), qual é o custo de oportunidade de uma unidade de vinho na Inglaterra?",
    alts: ["0,83 unidade de tecido", "1,2 unidade de tecido", "120 horas de trabalho", "0,89 unidade de tecido"],
    correta: 1,
    porque: "As 120 horas gastas em vinho poderiam produzir 120/100 = 1,2 unidade de tecido. Em Portugal, o mesmo cálculo dá 80/90 ≈ 0,89. Como 0,89 < 1,2, Portugal tem vantagem comparativa no vinho. A resposta '120 horas' confunde custo absoluto com custo de oportunidade — exatamente o erro que o teorema corrige." },

  { camada: "nucleo",
    q: "Qual afirmação o teorema da vantagem comparativa efetivamente sustenta?",
    alts: [
      "Que o comércio livre beneficia todos os indivíduos dentro de cada país.",
      "Que o comércio aumenta o produto agregado e existe uma distribuição desse ganho que deixaria todos melhores.",
      "Que países devem eliminar todas as barreiras comerciais imediatamente.",
      "Que o ajuste dos trabalhadores deslocados ocorre rapidamente."
    ],
    correta: 1,
    porque: "O teorema é sobre o agregado e sobre a existência de uma distribuição melhoradora — não sobre sua realização efetiva. Distribuição, velocidade de ajuste e desenho de política são questões separadas, e atribuí-las ao teorema é o uso indevido mais comum, praticado nos dois lados do debate." },

  { camada: "aprofundamento",
    q: "Se todos os custos de produção de Portugal fossem multiplicados por 10, o que aconteceria com o padrão de especialização?",
    alts: [
      "Portugal deixaria de exportar e passaria a importar ambos os bens.",
      "Nada mudaria no padrão: as razões de custo interno permanecem iguais, embora os salários portugueses caiam.",
      "O padrão se inverteria completamente.",
      "Portugal só poderia comerciar mediante subsídios."
    ],
    correta: 1,
    porque: "A condição de vantagem comparativa depende de a₁X/a₁Y comparado a a₂X/a₂Y — os níveis absolutos se cancelam. Produtividade absoluta determina o nível de salários, não o padrão de comércio. É a resposta padrão às objeções simétricas 'não podemos competir com mão de obra barata' e 'países pobres não têm o que oferecer'." },

  { camada: "aprofundamento",
    q: "O teorema de Stolper-Samuelson é relevante porque:",
    alts: [
      "Refuta a vantagem comparativa mostrando que o comércio reduz o produto agregado.",
      "Demonstra, dentro do próprio arcabouço padrão, que a abertura comercial cria perdedores identificáveis dentro de cada país.",
      "Prova que a compensação dos perdedores sempre ocorre na prática.",
      "Mostra que o comércio só beneficia países desenvolvidos."
    ],
    correta: 1,
    porque: "Não é crítica externa: é resultado do modelo padrão, de 1941. O fator usado intensivamente no setor que compete com importações perde em termos reais. A defesa 'os ganhadores poderiam compensar' é logicamente válida, mas o teorema não fornece mecanismo algum que garanta a compensação." },

  { camada: "aprofundamento",
    q: "Qual foi o principal achado empírico da literatura sobre o 'China Shock'?",
    alts: [
      "Que o comércio com a China reduziu o produto agregado dos Estados Unidos.",
      "Que os ganhos do comércio não existem quando o parceiro tem salários baixos.",
      "Que os ganhos agregados são reais, mas os custos de ajuste foram subestimados: efeitos persistentes sobre emprego e salários locais, com mobilidade menor que a prevista.",
      "Que trabalhadores deslocados migram rapidamente para regiões em expansão, confirmando os modelos."
    ],
    correta: 2,
    porque: "Autor, Dorn e Hanson encontraram perda de emprego industrial persistente e maior dependência de benefícios em mercados locais expostos, com efeitos visíveis uma década depois. O resultado não refuta Ricardo — qualifica a hipótese de ajuste rápido, que era premissa auxiliar e não parte do teorema." },

  { camada: "extensao",
    q: "Qual é o núcleo do argumento da indústria nascente?",
    alts: [
      "Que o comércio internacional sempre reduz o bem-estar de países pobres.",
      "Que a tecnologia não é fixa: especializar-se conforme a vantagem presente pode impedir o desenvolvimento de vantagens futuras, já que setores diferem em potencial de aprendizado.",
      "Que países pobres não têm vantagem comparativa em nada.",
      "Que tarifas aumentam a arrecadação e por isso devem ser mantidas."
    ],
    correta: 1,
    porque: "O argumento ataca uma premissa específica do modelo — tecnologia dada — e não a lógica do teorema. A questão empírica que permanece aberta não é 'proteção funciona?', mas sob quais condições institucionais ela produz aprendizado em vez de captura de renda por setores permanentemente subsidiados." },

  { camada: "extensao",
    q: "Por que o modelo ricardiano tem dificuldade em explicar o comércio entre Alemanha e França?",
    alts: [
      "Porque ambos são membros da União Europeia, o que anula os efeitos de vantagem comparativa.",
      "Porque o modelo prevê comércio entre países com custos relativos diferentes, e o maior volume mundial ocorre entre países ricos e similares que trocam bens da mesma categoria.",
      "Porque o modelo não se aplica a bens industrializados.",
      "Porque a distância geográfica curta invalida o cálculo de custos de oportunidade."
    ],
    correta: 1,
    porque: "É a motivação da nova teoria do comércio de Krugman. Com economias de escala e preferência por variedade, dois países idênticos ainda ganham comerciando — cada um produzindo algumas variedades em escala maior. A implicação conceitual forte é que o padrão de especialização pode ser indeterminado e historicamente contingente." },

  { camada: "extensao",
    q: "Alguém argumenta: 'estudos mostram que o comércio com a China custou empregos industriais, logo o livre comércio é ruim'. Qual é a falha mais clara nesse raciocínio?",
    alts: [
      "Não há falha: perda de empregos é evidência suficiente contra o livre comércio.",
      "Os estudos citados são metodologicamente inválidos.",
      "Ele confunde evidência sobre distribuição e custos de ajuste com evidência sobre efeito agregado, e não compara a política atual com uma alternativa concreta.",
      "Ele ignora que empregos industriais não importam para o bem-estar."
    ],
    correta: 2,
    porque: "A evidência sobre custos concentrados é sólida e relevante — mas não estabelece que o efeito agregado seja negativo, nem que a alternativa proposta produziria resultado melhor. Comparar uma política real com um ideal não especificado é o erro simétrico ao de tratar o teorema como aval automático de qualquer acordo comercial." }
],

fontes: [
  { n: 1, tipo: "fonte primária", ref: "Ricardo, D. <em>On the Principles of Political Economy and Taxation</em>, cap. VII, 1817. O exemplo original de Portugal e Inglaterra.", url: "https://www.econlib.org/library/Ricardo/ricP.html" },
  { n: 2, tipo: "artigo", ref: "Samuelson, P. A. 'Where Ricardo and Mill rebut and confirm arguments of mainstream economists supporting globalization'. <em>Journal of Economic Perspectives</em> 18(3):135–146, 2004.", url: "https://www.aeaweb.org/articles?id=10.1257/0895330042162403" },
  { n: 3, tipo: "artigo", ref: "Autor, D., Dorn, D. &amp; Hanson, G. 'The China Shock: Learning from Labor-Market Adjustment to Large Changes in Trade'. <em>Annual Review of Economics</em> 8:205–240, 2016.", url: "https://www.nber.org/papers/w21906" },
  { n: 4, tipo: "livro", ref: "Chang, H.-J. <em>Chutando a Escada: A Estratégia do Desenvolvimento em Perspectiva Histórica</em>. Editora Unesp, 2004 — defesa histórica do argumento da indústria nascente.", url: "" },
  { n: 5, tipo: "artigo", ref: "Krugman, P. 'Ricardo's Difficult Idea', 1996 — ensaio sobre por que a vantagem comparativa é tão persistentemente mal compreendida, inclusive por intelectuais.", url: "https://web.mit.edu/krugman/www/ricardo.htm" },
  { n: 6, tipo: "livro", ref: "Rodrik, D. <em>Straight Talk on Trade</em>. Princeton University Press, 2017 — avaliação crítica e interna à profissão sobre o que a teoria sustenta e o que não sustenta.", url: "" }
]
};
