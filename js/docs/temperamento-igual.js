CONTEUDOS["temperamento-igual"] = {
termo: "Temperamento igual: a matemática da afinação",
area: "Música",
subtitulo: "Todo piano do mundo está desafinado de propósito, e não há alternativa: a aritmética das razões simples torna impossível afinar um instrumento de teclas de modo que todos os intervalos soem puros. O sistema atual é um compromisso deliberado com trezentos anos de disputa.",
prerequisitos: [
  "Saber que notas mais agudas correspondem a vibrações mais rápidas. Nada além disso.",
  "Para o aprofundamento: entender que dobrar a frequência dá a mesma nota uma oitava acima."
],
conexoes: [
  { termo: "Timbre e série harmônica", relacao: "As razões simples que definem consonância vêm dos harmônicos naturais presentes em qualquer som de altura definida." },
  { termo: "Transformada de Fourier", relacao: "Decompor um som em suas frequências componentes é exatamente o que permite medir batimentos e verificar afinação objetivamente." },
  { termo: "Harmonia funcional e tensão-resolução", relacao: "O temperamento igual é o que torna possível modular livremente entre tonalidades, condição para a harmonia dos séculos XIX e XX." },
  { termo: "Razão áurea: matemática e mito", relacao: "Outro caso em que uma relação matemática real na natureza convive com um conjunto de afirmações estéticas frágeis." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Existe um problema aritmético no centro da música ocidental, e ele não tem solução. Não "ainda não tem": não pode ter, pelo mesmo tipo de razão que impede que uma potência de 3 seja igual a uma potência de 2.</p>

<h3>De onde vêm as consonâncias</h3>

<p>Qualquer corda ou coluna de ar vibrando produz, além da frequência fundamental, uma série de harmônicos em múltiplos inteiros dela: 2×, 3×, 4×, 5×, e assim por diante. Dois sons soam consonantes quando seus harmônicos coincidem em boa medida, e isso acontece quando a razão entre suas frequências é dada por números inteiros pequenos.</p>

<div class="tabela-env">
<table>
<thead><tr><th>Intervalo</th><th>Razão</th><th>Sensação</th></tr></thead>
<tbody>
<tr><td>Oitava</td><td>2 : 1</td><td>Mesma nota, mais aguda</td></tr>
<tr><td>Quinta justa</td><td>3 : 2</td><td>A consonância mais estável depois da oitava</td></tr>
<tr><td>Quarta justa</td><td>4 : 3</td><td>Estável</td></tr>
<tr><td>Terça maior</td><td>5 : 4</td><td>Doce, define o modo maior</td></tr>
<tr><td>Terça menor</td><td>6 : 5</td><td>Define o modo menor</td></tr>
</tbody>
</table>
</div>

<p>A explicação é acústica, não convenção cultural. Quando duas notas estão em razão 3:2, muitos de seus harmônicos coincidem exatamente, e o resultado não produz batimentos. Quando a razão se afasta um pouco, aparecem pulsações lentas: aquele "uau-uau-uau" que denuncia afinação errada.</p>

<h3>O problema: as escadas não se encontram</h3>

<p>Os pitagóricos construíram a escala empilhando quintas puras. Suba doze quintas (dó, sol, ré, lá, mi, si, fá♯, dó♯, sol♯, ré♯, lá♯, mi♯) e você deveria voltar ao dó, sete oitavas acima. É o "círculo das quintas".</p>

<p>Só que não fecha. Doze quintas puras dão (3/2)¹² e sete oitavas dão 2⁷. Fazendo a conta:</p>

<div class="formula">
(3/2)<sup>12</sup> = 129,746…&nbsp;&nbsp;&nbsp;&nbsp; 2<sup>7</sup> = 128
<span class="leg">a razão entre os dois é 1,01364, cerca de 23,46 cents de excesso</span>
</div>

<p>A diferença chama-se <strong>coma pitagórica</strong>. Ela é pequena, mas perfeitamente audível: cerca de um quarto de semitom, muito acima do limiar de percepção humana para notas sustentadas.</p>

<figure class="figura">[[FIG:temperamento-comma]]<figcaption>Empilhando quintas puras, a trajetória é uma espiral, não um círculo. Ela passa do ponto de partida por 23,46 cents. Nenhum ajuste esperto resolve isso: é consequência de 3 e 2 serem primos entre si.</figcaption></figure>

<p>O problema não para aí. Quatro quintas puras deveriam dar uma terça maior pura, e também não dão: a diferença é a <strong>coma sintônica</strong>, de cerca de 21,5 cents. Os erros não se cancelam entre si; eles se acumulam de formas diferentes conforme o caminho.</p>

<h3>A escolha: onde esconder o erro</h3>

<p>Como o erro não pode ser eliminado, todo sistema de afinação decide <em>onde colocá-lo</em>. Três estratégias marcaram a história:</p>

<p>Entonação justa: deixa alguns intervalos perfeitamente puros, e por isso outros ficam horrendos. Existe um intervalo, o "lobo", tão desafinado que é inutilizável. Funciona se você tocar sempre na mesma tonalidade.</p>

<p>Temperamentos desiguais: distribuem o erro de forma desigual, deixando as tonalidades mais usadas quase puras e empurrando o erro para as raras. Cada tonalidade ganha um caráter sonoro distinto. Dominaram os séculos XVII e XVIII.</p>

<p>Temperamento igual: divide a oitava em doze partes exatamente iguais. Cada semitom passa a ser a raiz duodécima de 2:</p>

<div class="formula">
razão de um semitom = <sup>12</sup>√2 ≈ 1,059463
<span class="leg">um número irracional: nenhum intervalo, exceto a oitava, é uma razão de inteiros</span>
</div>

<p>O erro fica espalhado igualmente por todos os intervalos. Nenhum fica puro, nenhum fica intolerável, e todas as vinte e quatro tonalidades soam idênticas em qualidade. Essa uniformidade tornou possível modular livremente entre tonalidades. Sem modulação livre, a música do século XIX não existiria na forma que existe.</p>

<div class="marca consenso">
<span class="rot">Consenso estabelecido</span>
<p>A impossibilidade aritmética é um fato matemático demonstrável, não uma questão de gosto. Que o temperamento igual é um compromisso, e não uma afinação "correta", também é consenso entre teóricos musicais e acústicos. A disputa começa quando se discute se o compromisso valeu a pena.</p>
</div>
` },

aprofundamento: { minutos: 15, html: `
<h3>Quantificando o compromisso: a unidade cent</h3>

<p>Para comparar afinações usa-se o <em>cent</em>: um centésimo de semitom temperado, ou seja, 1/1200 de oitava. Em escala logarítmica:</p>

<div class="formula">
cents = 1200 · log<sub>2</sub>(f<sub>2</sub> / f<sub>1</sub>)
<span class="leg">converte razões de frequência em uma escala aditiva e perceptualmente uniforme</span>
</div>

<p>A escala é logarítmica porque a percepção de altura é aproximadamente logarítmica: o que o ouvido percebe como "mesma distância" são razões iguais, não diferenças iguais de frequência.</p>

<figure class="figura">[[FIG:temperamento-cents]]<figcaption>Desvio de cada intervalo do temperamento igual em relação à entonação justa. Os valores foram calculados diretamente das razões. Note a assimetria: quintas e quartas quase acertam, terças erram muito.</figcaption></figure>

<p>Os números que importam:</p>

<div class="tabela-env">
<table>
<thead><tr><th>Intervalo</th><th>Justo (cents)</th><th>Temperado</th><th>Erro</th></tr></thead>
<tbody>
<tr><td>Oitava</td><td>1200,00</td><td>1200</td><td>0</td></tr>
<tr><td>Quinta justa</td><td>701,96</td><td>700</td><td>−1,96</td></tr>
<tr><td>Quarta justa</td><td>498,04</td><td>500</td><td>+1,96</td></tr>
<tr><td>Terça maior</td><td>386,31</td><td>400</td><td><strong>+13,69</strong></td></tr>
<tr><td>Terça menor</td><td>315,64</td><td>300</td><td><strong>−15,64</strong></td></tr>
<tr><td>Sexta maior</td><td>884,36</td><td>900</td><td>+15,64</td></tr>
</tbody>
</table>
</div>

<p>A quinta erra por menos de 2 cents, praticamente inaudível. A terça maior erra por quase 14 cents, o que é claramente audível em acordes sustentados. Como a terça define se o acorde é maior ou menor, o temperamento igual sacrifica o intervalo de maior carga expressiva para preservar a quinta.</p>

<div class="marca consenso">
<span class="rot">Limiares perceptivos</span>
<p>Ouvintes treinados detectam diferenças de altura da ordem de 5 a 6 cents em notas sustentadas puras. Em contexto musical real (com vibrato, ataque, timbre complexo e mascaramento), o limiar sobe consideravelmente. Isso explica por que a maioria dos ouvintes não percebe conscientemente os 14 cents da terça temperada, mas músicos frequentemente relatam que acordes de piano soam "mais tensos" que os mesmos acordes num coro, que ajusta a afinação em tempo real e canta terças puras naturalmente.</p>
</div>

<h3>O que se perdeu: caráter de tonalidade</h3>

<p>Nos temperamentos desiguais, cada tonalidade tinha uma sonoridade própria e reconhecível, porque a distribuição do erro variava entre elas. Ré maior era brilhante; lá bemol maior, sombrio e tenso. Compositores dos séculos XVII e XVIII escolhiam tonalidades por essa razão, e tratados da época descrevem os afetos associados a cada uma.</p>

<p>No temperamento igual, todas as tonalidades são transposições exatas umas das outras. A diferença de caráter que ouvintes ainda relatam entre tonalidades tem outras causas: registro dos instrumentos, ressonância de cordas soltas, tessitura vocal. Não é mais a estrutura interválica.</p>

<h3>A crítica de Duffin, e o que responder a ela</h3>

<p>Ross Duffin argumentou, em <em>How Equal Temperament Ruined Harmony</em>, que a adoção universal do temperamento igual empobreceu a harmonia ocidental e que a prática histórica é hoje mal representada mesmo por conjuntos que se dizem "historicamente informados".<sup class="cit"><a href="#f2">2</a></sup></p>

<div class="marca controverso">
<span class="rot">Ponto controverso</span>
<p>A parte histórica do argumento, que o temperamento igual não era padrão antes do século XIX e que sua adoção foi gradual e disputada, é bem documentada e amplamente aceita. A parte estética, que a harmonia foi "arruinada", é uma avaliação de valor, e críticos apontam que ela subestima o que se ganhou: a modulação irrestrita e o cromatismo que definem Chopin, Wagner e tudo que veio depois. Vale distinguir a tese historiográfica, forte, da tese estética, que é opinião informada e não resultado.</p>
</div>
` },

extensao: { minutos: 30, html: `
<h3>O caso Bach: um mito persistente</h3>

<p>Quase todo programa de concerto afirma que <em>O Cravo Bem Temperado</em> foi escrito para demonstrar o temperamento igual. A afirmação não se sustenta.</p>

<p>Em alemão, <em>wohltemperiert</em> ("bem temperado") designava uma família de temperamentos <strong>desiguais</strong> nos quais todas as vinte e quatro tonalidades são utilizáveis, ainda que com caracteres distintos. O temperamento igual era chamado de <em>gleichschwebend</em>, "de batimento igual". São termos diferentes para coisas diferentes, e Bach usou o primeiro.</p>

<p>O que Bach demonstrava com as 24 tonalidades era que <em>todas eram tocáveis</em>, o que temperamentos anteriores não permitiam. Isso é compatível com temperamento igual e também com vários temperamentos desiguais.</p>

<div class="marca controverso">
<span class="rot">Estado atual da questão</span>
<p>Qual temperamento Bach usava permanece sem resposta consensual.<sup class="cit"><a href="#f3">3</a></sup> Bradley Lehman propôs em 2005 que o ornamento decorativo na folha de rosto do manuscrito codifica uma prescrição de afinação; a proposta recebeu tanto elogios quanto críticas severas. John O'Donnell (2006) e John Francis (2007) leram o mesmo ornamento de maneiras diferentes, chegando a temperamentos distintos. Há inclusive disputa sobre se o ornamento codifica alguma coisa. Não sabemos, e a divergência entre especialistas é grande.</p>
</div>

<h3>Quem realmente toca em temperamento igual</h3>

<p>Menos gente do que se imagina. O temperamento igual é uma necessidade de instrumentos de afinação fixa: piano, órgão, harpa, trastes de violão. Instrumentos de afinação contínua e vozes não estão presos a ele.</p>

<div class="tabela-env">
<table>
<thead><tr><th>Conjunto</th><th>O que acontece na prática</th></tr></thead>
<tbody>
<tr><td>Coro <em>a cappella</em></td><td>Tende espontaneamente à entonação justa; cantores ajustam terças para eliminar batimentos</td></tr>
<tr><td>Quarteto de cordas</td><td>Ajusta continuamente; frequentemente afina notas de tendência mais agudas ou graves conforme a função harmônica</td></tr>
<tr><td>Naipe de metais</td><td>Ajusta com embocadura e válvulas de compensação para acordes puros</td></tr>
<tr><td>Piano solo</td><td>Temperamento igual, com <em>stretch</em> nas oitavas (ver abaixo)</td></tr>
<tr><td>Voz com piano</td><td>Conflito real: o cantor tende ao justo e o piano impõe o temperado</td></tr>
</tbody>
</table>
</div>

<p>Pianos não são afinados em temperamento igual exato. Cordas reais têm rigidez, e por isso seus harmônicos não caem em múltiplos exatos da fundamental (fenômeno chamado inarmonicidade). Para que os harmônicos das notas graves batam com as fundamentais das agudas, afinadores esticam a escala: graves ficam um pouco mais graves e agudos um pouco mais agudos que o cálculo teórico. Num piano de cauda esse desvio chega a mais de 30 cents nos extremos.</p>

<div class="marca consenso">
<span class="rot">Uma implicação interessante</span>
<p>A afinação "correta" de um piano depende da física daquele instrumento específico, medida pelo afinador. Dois pianos de modelos diferentes, ambos perfeitamente afinados, têm curvas de afinação diferentes. A ideia de uma afinação padrão universal é, mesmo dentro do temperamento igual, uma idealização.</p>
</div>

<h3>O sistema não é universal</h3>

<p>Dividir a oitava em doze partes iguais é uma solução, não <em>a</em> solução. Outras tradições fizeram escolhas diferentes, com bases igualmente coerentes:</p>

<ul>
<li><strong>Música árabe e turca</strong> usa intervalos menores que o semitom: os <em>maqamat</em> incluem graus que caem entre as teclas do piano, e sistemas teóricos dividem a oitava em 24 ou 53 partes.</li>
<li><strong>Gamelão indonésio</strong> usa as escalas <em>slendro</em> e <em>pelog</em>, cujos intervalos não correspondem a razões simples nem ao temperamento igual e variam de conjunto para conjunto (cada gamelão é afinado como uma unidade, e instrumentos não são intercambiáveis entre grupos).</li>
<li><strong>Música clássica indiana</strong> teoriza 22 <em>shrutis</em> por oitava, com entonação ajustada ao contexto do raga.</li>
</ul>

<div class="marca controverso">
<span class="rot">Sobre universalidade</span>
<p>Há um debate empírico sobre quanto da preferência por consonância é biológico e quanto é aprendido. Um estudo de 2016 com os Tsimane', na Amazônia boliviana, relatou que participantes com pouca exposição à música ocidental não mostraram preferência por consonância sobre dissonância, embora distinguissem os estímulos. O resultado é frequentemente citado como evidência de que a preferência é cultural. Vale registrar as ressalvas: amostra pequena, dificuldade de tradução de tarefas e discussão metodológica ativa sobre o que exatamente foi medido. O que parece razoavelmente firme é que a <em>capacidade de discriminar</em> razões simples tem base perceptiva, enquanto a <em>preferência</em> por elas é modulada por exposição.</p>
</div>

<h3>O resumo, e o que ele ensina fora da música</h3>

<p>Três fatos e uma lição.</p>

<p>Primeiro fato: potências de 3 nunca coincidem com potências de 2, e por isso quintas puras e oitavas puras são incompatíveis. Segundo: todo sistema de afinação decide onde colocar um erro que não pode ser eliminado. Terceiro: o temperamento igual distribui o erro uniformemente, sacrificando as terças (~14 cents) para preservar as quintas (~2 cents), e paga com a perda do caráter de tonalidade o preço da modulação irrestrita.</p>

<p>A lição transferível: quando uma restrição é matemática, não técnica, a pergunta produtiva deixa de ser "como eliminar o erro" e passa a ser "onde é menos custoso concentrá-lo". Trocar um problema de otimização impossível por um problema de alocação de erro aparece em compressão de dados, em projeto estrutural, em amostragem estatística e em política pública. Reconhecer isso como o mesmo movimento é boa parte do valor de estudar este assunto.</p>
` }
},

flashcards: [
  { f: "Por que consonâncias correspondem a razões de inteiros pequenos?", v: "Porque sons de altura definida contêm harmônicos em múltiplos inteiros da fundamental. Quando a razão entre duas frequências é simples, muitos harmônicos coincidem e não há batimentos." },
  { f: "O que é a coma pitagórica e quanto vale?", v: "A diferença entre doze quintas puras (3/2)¹² = 129,746 e sete oitavas 2⁷ = 128. Equivale a cerca de 23,46 cents, aproximadamente um quarto de semitom, claramente audível." },
  { f: "Por que o problema da afinação não tem solução?", v: "Porque 3 e 2 são primos entre si: nenhuma potência de 3/2 é igual a uma potência de 2. É impossibilidade aritmética, não limitação técnica." },
  { f: "Qual é a razão de frequência de um semitom no temperamento igual?", v: "A raiz duodécima de 2, aproximadamente 1,059463. É irracional, o que significa que nenhum intervalo além da oitava é uma razão de inteiros." },
  { f: "Quanto o temperamento igual erra na quinta e na terça maior?", v: "A quinta erra apenas −1,96 cents (praticamente inaudível). A terça maior erra +13,69 cents, claramente audível em acordes sustentados. O sistema sacrifica a terça para preservar a quinta." },
  { f: "O que é um cent e por que a escala é logarítmica?", v: "Um centésimo de semitom temperado, ou 1/1200 de oitava: cents = 1200·log₂(f₂/f₁). É logarítmica porque a percepção de altura também é logarítmica: distâncias iguais correspondem a razões iguais, não a diferenças iguais de frequência." },
  { f: "O que se ganhou e o que se perdeu com o temperamento igual?", v: "Ganhou-se modulação irrestrita entre as 24 tonalidades, condição para o cromatismo do século XIX. Perdeu-se o caráter sonoro distinto de cada tonalidade, que existia nos temperamentos desiguais." },
  { f: "'O Cravo Bem Temperado' foi escrito para o temperamento igual?", v: "Não há evidência disso. 'Wohltemperiert' designa temperamentos desiguais em que todas as tonalidades são utilizáveis; temperamento igual era 'gleichschwebend'. Qual afinação Bach usava permanece sem consenso musicológico." },
  { f: "Por que pianos não são afinados em temperamento igual exato?", v: "Por causa da inarmonicidade: cordas reais têm rigidez e seus harmônicos não caem em múltiplos exatos. Afinadores esticam a escala, tornando os graves mais graves e os agudos mais agudos, chegando a mais de 30 cents de desvio nos extremos." },
  { f: "Que conjuntos musicais não usam temperamento igual na prática?", v: "Coros a cappella, quartetos de cordas e naipes de metais ajustam continuamente para entonação justa. O temperamento igual é uma necessidade de instrumentos de afinação fixa: piano, órgão, harpa, trastes." }
],

prova: [
  { camada: "nucleo",
    q: "Por que o 'círculo das quintas' não fecha de fato?",
    alts: [
      "Porque instrumentos reais têm imprecisões de fabricação que se acumulam.",
      "Porque doze quintas puras somam 23,46 cents a mais que sete oitavas, e nenhuma potência de 3/2 é igual a uma potência de 2.",
      "Porque a percepção humana de altura é imprecisa e distorce a sequência.",
      "Porque a escala ocidental tem sete notas e não doze."
    ],
    correta: 1,
    porque: "É impossibilidade aritmética. (3/2)¹² = 129,746 enquanto 2⁷ = 128. A discrepância, chamada coma pitagórica, não decorre de imprecisão de instrumento nem de percepção: decorre de 3 e 2 serem primos entre si, e nenhum refinamento técnico a elimina." },

  { camada: "nucleo",
    q: "O que caracteriza o temperamento igual em relação aos sistemas anteriores?",
    alts: [
      "Ele elimina completamente o erro de afinação usando razões mais precisas.",
      "Ele divide a oitava em doze partes exatamente iguais, espalhando o erro uniformemente por todos os intervalos.",
      "Ele mantém puras as terças, sacrificando as quintas.",
      "Ele varia a afinação conforme a tonalidade da peça."
    ],
    correta: 1,
    porque: "Nenhum sistema elimina o erro: a impossibilidade é matemática. O temperamento igual escolhe distribuí-lo igualmente, de modo que nenhum intervalo fica puro (exceto a oitava) e nenhum fica intolerável. A última alternativa descreve os temperamentos desiguais, que é justamente o que ele substituiu." },

  { camada: "nucleo",
    q: "Qual foi a principal consequência musical da adoção do temperamento igual?",
    alts: [
      "Os instrumentos passaram a soar mais puros e consonantes.",
      "Tornou-se possível modular livremente entre todas as tonalidades, ao custo de perder o caráter sonoro distinto de cada uma.",
      "As terças passaram a soar melhor do que nos sistemas anteriores.",
      "A afinação deixou de precisar de manutenção periódica."
    ],
    correta: 1,
    porque: "É a troca central. Nos temperamentos desiguais, cada tonalidade tinha sonoridade própria porque o erro se distribuía de forma diferente. Uniformizar apagou essa diferença e liberou a modulação irrestrita, sem a qual o cromatismo de Chopin e Wagner seria impraticável." },

  { camada: "aprofundamento",
    q: "Um cent é definido como:",
    alts: [
      "Um hertz de diferença de frequência.",
      "Um centésimo de semitom temperado, ou 1/1200 de oitava, em escala logarítmica.",
      "Um centésimo da frequência da nota de referência.",
      "A menor diferença de altura perceptível pelo ouvido humano."
    ],
    correta: 1,
    porque: "A definição é logarítmica: cents = 1200·log₂(f₂/f₁). Isso é necessário porque a percepção de altura é aproximadamente logarítmica: 100 Hz de diferença são enormes no grave e imperceptíveis no agudo. O limiar de discriminação (5 a 6 cents em notas sustentadas para ouvintes treinados) é outra grandeza." },

  { camada: "aprofundamento",
    q: "No temperamento igual, qual intervalo apresenta o maior desvio em relação à entonação justa, e por que isso importa?",
    alts: [
      "A quinta justa, com quase 14 cents de erro, o que compromete a estabilidade harmônica.",
      "A oitava, que precisa ser alargada para compensar a coma.",
      "A terça maior, com +13,69 cents, justamente o intervalo que define o caráter maior ou menor do acorde.",
      "A quarta justa, com erro superior a 20 cents."
    ],
    correta: 2,
    porque: "A quinta erra apenas −1,96 cents; a terça maior erra +13,69 e a terça menor −15,64. O sistema preserva o intervalo estruturalmente mais estável e sacrifica o de maior carga expressiva. A oitava é o único intervalo que permanece exatamente puro." },

  { camada: "aprofundamento",
    q: "Como avaliar a tese de Ross Duffin de que o temperamento igual 'arruinou a harmonia'?",
    alts: [
      "É integralmente demonstrada: medições acústicas confirmam a deterioração.",
      "A parte historiográfica (o temperamento igual não era padrão antes do século XIX) é bem documentada; a parte estética é avaliação de valor e subestima o ganho da modulação irrestrita.",
      "É inteiramente equivocada, pois o temperamento igual sempre foi o padrão desde Bach.",
      "É irrelevante porque o temperamento igual é matematicamente ótimo."
    ],
    correta: 1,
    porque: "Separar as duas teses é o movimento crítico correto. A afirmação histórica é factual e amplamente aceita; a avaliação estética é opinião informada, e a resposta padrão é que o preço pago comprou uma expansão harmônica que definiu dois séculos de repertório. E 'matematicamente ótimo' não faz sentido sem especificar a função de custo." },

  { camada: "extensao",
    q: "A afirmação de que 'O Cravo Bem Temperado' demonstra o temperamento igual é problemática porque:",
    alts: [
      "Bach nunca escreveu peças em todas as 24 tonalidades.",
      "'Wohltemperiert' designava temperamentos desiguais em que todas as tonalidades eram utilizáveis; temperamento igual tinha outro nome em alemão, e qual afinação Bach usava permanece sem consenso.",
      "A obra foi composta antes de o temperamento igual ser matematicamente formulado.",
      "O manuscrito original foi perdido, impedindo qualquer análise."
    ],
    correta: 1,
    porque: "'Wohltemperiert' e 'gleichschwebend' são termos distintos para coisas distintas. Escrever nas 24 tonalidades demonstra que todas eram tocáveis, compatível tanto com temperamento igual quanto com vários desiguais. As propostas de Lehman, O'Donnell e Francis, todas baseadas no mesmo ornamento da folha de rosto, chegam a resultados diferentes." },

  { camada: "extensao",
    q: "Por que pianos são afinados com 'stretch' nas oitavas?",
    alts: [
      "Para compensar a coma pitagórica.",
      "Por tradição estética, sem justificativa física.",
      "Por causa da inarmonicidade: cordas reais têm rigidez, e seus harmônicos não caem em múltiplos exatos da fundamental.",
      "Para que o instrumento soe mais alto em salas grandes."
    ],
    correta: 2,
    porque: "É um efeito físico das cordas reais. Para que os harmônicos das notas graves batam com as fundamentais das agudas, os extremos são esticados, mais de 30 cents num piano de cauda. Consequência interessante: a afinação correta depende do instrumento específico, medido pelo afinador, e não de uma tabela universal." },

  { camada: "extensao",
    q: "Sobre o estudo com os Tsimane' e a universalidade da preferência por consonância, qual é a leitura mais defensável?",
    alts: [
      "Prova definitivamente que a preferência por consonância é inteiramente cultural.",
      "Prova que a preferência é biológica, já que os participantes distinguiram os estímulos.",
      "Sugere que a preferência é modulada por exposição, enquanto a capacidade de discriminar razões simples parece ter base perceptiva, com ressalvas de amostra e metodologia ainda em discussão.",
      "É irrelevante porque foi conduzido fora de laboratório."
    ],
    correta: 2,
    porque: "Distinguir 'discriminar' de 'preferir' é o ponto. Os participantes ouviram a diferença sem manifestar preferência, o que aponta para modulação cultural da valoração e não da percepção. A amostra pequena e as dificuldades de tradução de tarefas justificam cautela: descartar o estudo ou tratá-lo como prova definitiva são os dois erros simétricos." }
],

fontes: [
  { n: 1, tipo: "livro", ref: "Barbour, J. M. <em>Tuning and Temperament: A Historical Survey</em>. Michigan State College Press, 1951 (reed. Dover). Levantamento histórico de referência sobre sistemas de afinação.", url: "" },
  { n: 2, tipo: "livro", ref: "Duffin, R. W. <em>How Equal Temperament Ruined Harmony (and Why You Should Care)</em>. W. W. Norton, 2007.", url: "" },
  { n: 3, tipo: "artigo", ref: "'The Ongoing Quest for Bach's Temperament'. <em>The Juilliard Journal</em>: panorama das propostas de Lehman (2005), O'Donnell (2006) e Francis (2007) e do estado não consensual da questão.", url: "https://journal.juilliard.edu/journal/ongoing-quest-bachs-temperament" },
  { n: 4, tipo: "livro", ref: "Sethares, W. A. <em>Tuning, Timbre, Spectrum, Scale</em>. 2ª ed., Springer, 2005. Relação formal entre espectro do instrumento e escala consonante, incluindo tradições não ocidentais.", url: "" },
  { n: 5, tipo: "artigo", ref: "McDermott, J. H., Schultz, A. F., Undurraga, E. A. &amp; Godoy, R. A. 'Indifference to dissonance in native Amazonians reveals cultural variation in music perception'. <em>Nature</em> 535:547–550, 2016.", url: "https://doi.org/10.1038/nature18635" },
  { n: 6, tipo: "livro", ref: "Isacoff, S. <em>Temperamento: Como a Música se Tornou um Campo de Batalha</em>. Record, 2001. História acessível da disputa sobre afinação, com viés declaradamente favorável ao temperamento igual.", url: "" }
]
};
