CONTEUDOS["quatro-forcas"] = {
termo: "As quatro interações fundamentais",
area: "Física",
subtitulo: "Tudo que acontece no universo — de uma reação química ao colapso de uma estrela — é mediado por quatro tipos de interação. Três delas foram unificadas numa mesma descrição matemática. A quarta resiste há cem anos.",
prerequisitos: [
  "Saber que a matéria é feita de átomos, e átomos de núcleo e elétrons. Nada além disso no núcleo do texto.",
  "Para o aprofundamento: noção de que forças caem com a distância e de que energia e massa se relacionam."
],
conexoes: [
  { termo: "Supercondutividade", relacao: "O mecanismo que dá massa aos bósons W e Z é matematicamente o mesmo que expulsa o campo magnético de um supercondutor." },
  { termo: "Termodinâmica de buracos negros", relacao: "É o ponto exato onde gravidade e mecânica quântica precisam ser conciliadas e não são." },
  { termo: "Matéria escura", relacao: "Se existe, interage gravitacionalmente e talvez pela força fraca — mas não eletromagneticamente, o que é o motivo de ser invisível." },
  { termo: "Leis de escala e alometria", relacao: "A hierarquia de intensidade entre as forças define quais delas dominam em cada escala de tamanho." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Você está sentado. Não afunda no chão. O motivo mais imediato não é a solidez da cadeira: é que os elétrons das moléculas do seu corpo repelem eletricamente os elétrons das moléculas da cadeira. Sólidos são, em volume, quase inteiramente vazios. O que impede a matéria de atravessar a matéria é uma interação, não uma substância.</p>

<p>A física do século XX chegou a um inventário notavelmente curto: <strong>quatro</strong> tipos de interação dão conta de tudo o que já foi observado. Não quatro mil, não quarenta. Quatro.</p>

<h3>O inventário</h3>

<p><strong>Interação forte.</strong> Mantém quarks unidos dentro de prótons e nêutrons, e prótons e nêutrons unidos dentro do núcleo. É a mais intensa das quatro, mas tem alcance minúsculo: pouco mais que o diâmetro de um núcleo atômico. Como prótons têm carga positiva e se repelem furiosamente a essa distância, sem a força forte nenhum núcleo com mais de um próton existiria, e o universo seria feito só de hidrogênio.</p>

<p><strong>Interação eletromagnética.</strong> Responde por toda a química, por toda a biologia, pela luz, pela eletricidade, pelo atrito, pelo som e pela solidez da cadeira. Tem alcance infinito, mas com uma peculiaridade decisiva: existem duas cargas, positiva e negativa, e elas se cancelam. Objetos grandes são eletricamente neutros, e por isso a eletromagnética não domina em escala astronômica apesar de ser bilhões de bilhões de vezes mais forte que a gravidade.</p>

<p><strong>Interação fraca.</strong> A menos intuitiva. Ela não "empurra" nem "puxa" de forma perceptível: ela <em>transforma</em> um tipo de partícula em outro. É o que permite a um nêutron virar próton, e é por isso que existe decaimento radioativo beta. Sem ela, o Sol não brilharia: o primeiro passo da fusão do hidrogênio depende de converter um próton em nêutron, e só a força fraca faz isso.</p>

<p><strong>Gravidade.</strong> A mais familiar e, de longe, a mais fraca (cerca de 10³⁸ vezes menos intensa que a forte). Domina o cosmo por dois motivos: alcance infinito e ausência de cancelamento. Não existe massa negativa, então gravidade só acumula. Some um número grande o suficiente de átomos e ela vence todas as outras.</p>

<figure class="figura">[[FIG:forcas-alcance]]<figcaption>Alcance de cada interação em escala logarítmica. Cada divisão vale um fator de dez mil. A diferença entre 10⁻¹⁸ metros e o infinito é o que determina qual força governa qual escala do universo.</figcaption></figure>

<h3>A ideia que organiza tudo: forças são trocas</h3>

<p>Na descrição moderna, uma força não é uma influência misteriosa atravessando o vazio. É uma <strong>troca de partículas mediadoras</strong>. Duas partículas interagem porque trocam entre si um quantum do campo correspondente.</p>

<div class="tabela-env">
<table>
<thead><tr><th>Interação</th><th>Mediador</th><th>Alcance</th><th>Intensidade relativa</th></tr></thead>
<tbody>
<tr><td>Forte</td><td>glúon</td><td>~10⁻¹⁵ m</td><td>1</td></tr>
<tr><td>Eletromagnética</td><td>fóton</td><td>infinito</td><td>~10⁻²</td></tr>
<tr><td>Fraca</td><td>bósons W e Z</td><td>~10⁻¹⁸ m</td><td>~10⁻⁶</td></tr>
<tr><td>Gravitacional</td><td>gráviton (hipotético)</td><td>infinito</td><td>~10⁻³⁸</td></tr>
</tbody>
</table>
</div>

<p><strong>O alcance de uma força é determinado pela massa do seu mediador.</strong> Mediadores sem massa (fóton, glúon) permitem alcance infinito em princípio. Mediadores pesados produzem alcance curtíssimo. Os bósons W e Z são cerca de 80 a 90 vezes mais pesados que um próton, e é exatamente por isso que a força fraca é fraca e curta: não porque a interação seja intrinsecamente débil, mas porque criar o mediador é caro.</p>

<div class="marca consenso">
<span class="rot">Consenso estabelecido</span>
<p>As três primeiras interações estão descritas pelo Modelo Padrão da física de partículas, testado com precisão extraordinária: algumas previsões conferidas até a décima segunda casa decimal. Os bósons W e Z foram detectados em 1983, e o bóson de Higgs em 2012, ambos com massas próximas do previsto. Não há resultado experimental sólido que contradiga o Modelo Padrão dentro de seu domínio de aplicação.</p>
</div>

<div class="marca controverso">
<span class="rot">Onde a linguagem engana</span>
<p>Chamar a gravidade de "força" é, na relatividade geral, uma imprecisão. Einstein a descreve como curvatura do espaço-tempo: um corpo em queda livre não sofre força alguma, apenas segue a trajetória mais reta disponível num espaço curvo. Contar quatro forças é uma classificação prática, não uma afirmação de que os quatro fenômenos são do mesmo tipo ontológico. Essa diferença de estatuto é exatamente o núcleo do problema de unificação.</p>
</div>
` },

aprofundamento: { minutos: 15, html: `
<h3>A grande vitória: a unificação eletrofraca</h3>

<p>Nos anos 1960, Glashow, Weinberg e Salam mostraram algo inesperado: eletromagnetismo e força fraca não são duas interações, são <strong>duas faces da mesma</strong>. Acima de uma certa energia (cerca de 100 GeV, correspondente a temperaturas que o universo teve nos primeiros 10⁻¹² segundos), elas se comportam como uma única interação eletrofraca, com quatro mediadores sem massa e simétricos entre si.</p>

<p>Abaixo dessa energia, a simetria "quebra". O campo de Higgs assume um valor não nulo em todo o espaço, três dos quatro mediadores adquirem massa (tornando-se W⁺, W⁻ e Z⁰) e um permanece sem massa (o fóton). O resultado é que, no universo frio de hoje, vemos duas forças com propriedades radicalmente diferentes, e a diferença é um acidente de temperatura, não uma distinção fundamental.</p>

<div class="marca consenso">
<span class="rot">Confirmação experimental</span>
<p>A teoria eletrofraca previu a existência e a massa aproximada dos bósons W e Z antes de eles serem observados. Foram detectados no CERN em 1983, com massas de aproximadamente 80 e 91 GeV/c². O mecanismo de Higgs que explica essas massas exigia uma partícula adicional, encontrada em 2012, também no CERN. Poucas previsões teóricas na história da ciência foram confirmadas de forma tão direta.</p>
</div>

<h3>Por que a força forte se comporta ao contrário de tudo</h3>

<p>A força forte tem uma propriedade que inverte a intuição construída com gravidade e eletromagnetismo: ela <strong>aumenta com a distância</strong>. Quarks muito próximos quase não interagem: é o fenômeno chamado <em>liberdade assintótica</em>, descoberto por Gross, Politzer e Wilczek em 1973. À medida que se afastam, a atração cresce.</p>

<p>A consequência é que quarks não podem ser isolados. Ao tentar separar dois quarks, você bombeia energia no campo entre eles; quando essa energia atinge o equivalente à massa de um par quark-antiquark, o par se materializa e você acaba com dois pares ligados em vez de dois quarks livres. É o <em>confinamento</em>: nenhum quark livre jamais foi observado, e a teoria diz que nenhum será.</p>

<p>Isso tem uma consequência que costuma surpreender. A massa de um próton é cerca de 938 MeV/c². A soma das massas dos três quarks que o compõem é cerca de 9 MeV/c² (aproximadamente 1%). Os outros 99% são <strong>energia do campo forte</strong>, convertida em massa por E = mc². Praticamente toda a massa do seu corpo não vem de "matéria" no sentido intuitivo: vem de energia de ligação.</p>

<h3>A gravidade e o abismo</h3>

<p>Nenhuma das outras três forças é descrita pela relatividade geral, e a gravidade não é descrita pela mecânica quântica. As duas teorias são as mais bem testadas da física e são mutuamente incompatíveis em regime extremo.</p>

<p>O problema técnico central: quando se tenta quantizar a gravidade da forma que funcionou para as outras forças, as contas divergem. Aparecem infinitos que, ao contrário do que acontece no Modelo Padrão, não podem ser absorvidos por um número finito de parâmetros ajustáveis. A teoria é <em>não renormalizável</em>, o que significa que perde poder preditivo em energias altas.</p>

<div class="marca controverso">
<span class="rot">Ponto de disputa ativa</span>
<p>Não há acordo sobre o que isso significa. Uma leitura: a gravidade quântica exige uma estrutura nova (cordas, gravidade quântica em loop, geometria não comutativa). Outra leitura: a relatividade geral é uma teoria efetiva perfeitamente válida abaixo da escala de Planck, e a busca por "quantizar a gravidade" pode ser uma pergunta mal formulada. Nenhuma das propostas fez, até hoje, uma previsão testável e distintiva que tenha sido verificada.</p>
</div>

<h3>Quanto a gravidade é fraca, concretamente</h3>

<p>A comparação abstrata de 10³⁸ é difícil de sentir. Uma versão concreta: um ímã de geladeira, de poucos gramas, vence a atração gravitacional de <em>todo o planeta Terra</em> sobre um clipe de papel. Massa terrestre inteira de um lado, alguns gramas de ferro magnetizado do outro, e o ímã ganha com folga.</p>

<p>Por que, então, a gravidade parece a força dominante da nossa experiência? Porque a eletromagnética se anula. Sua massa e a da Terra se somam; suas cargas elétricas se cancelam quase perfeitamente. Uma força fraquíssima que sempre acumula acaba superando uma força intensíssima que quase sempre se neutraliza.</p>
` },

extensao: { minutos: 30, html: `
<h3>O programa de unificação: onde ele está de fato</h3>

<p>A unificação eletrofraca criou uma expectativa razoável: se duas forças se revelaram uma só em alta energia, talvez as três do Modelo Padrão também sejam. Essa é a ideia das <strong>Teorias de Grande Unificação</strong> (GUTs), propostas a partir dos anos 1970.</p>

<p>A intensidade das três interações não é constante: varia com a energia da interação. Extrapolando as medições, as três curvas se aproximam em torno de 10¹⁶ GeV, uma energia treze ordens de grandeza acima do que o LHC alcança, o que torna o teste direto inviável por qualquer tecnologia concebível.</p>

<p>Mas GUTs fazem uma previsão indireta e testável: se quarks e léptons pertencem a uma mesma família, deve existir um processo que converta um no outro. Isso implica que o <strong>próton decai</strong>.</p>

<div class="marca controverso">
<span class="rot">Onde a previsão foi testada — e falhou</span>
<p>O modelo GUT mais simples, o SU(5) mínimo de Georgi e Glashow (1974), previa um tempo de vida do próton em torno de 10³¹ anos. O detector Super-Kamiokande buscou o canal dominante previsto (próton → pósitron + píon neutro) e não observou nenhum evento, estabelecendo um limite inferior superior a 10³³ anos.<sup class="cit"><a href="#f2">2</a></sup> O SU(5) mínimo está <strong>experimentalmente excluído</strong>. Versões supersimétricas e outras variantes preveem tempos de vida mais longos e permanecem em aberto — mas décadas de busca sem detecção positiva enfraqueceram consideravelmente o entusiasmo original.</p>
</div>

<p>É um exemplo do funcionamento normal da ciência: uma teoria motivada por razões estéticas e estruturais fortes fez uma previsão arriscada e específica. A previsão foi testada. Falhou. A teoria foi descartada: não reinterpretada até caber nos dados.</p>

<h3>As perguntas que o Modelo Padrão não responde</h3>

<p>É importante separar "o Modelo Padrão está errado" de "o Modelo Padrão está incompleto". A primeira afirmação não tem suporte experimental; a segunda é aceita por praticamente todos os físicos da área. As lacunas conhecidas:</p>

<ul>
<li><strong>Gravidade não está incluída.</strong> A mais óbvia e a mais difícil.</li>
<li><strong>Matéria escura.</strong> Evidência gravitacional independente e convergente (curvas de rotação de galáxias, lentes gravitacionais, radiação cósmica de fundo) indica cerca de cinco vezes mais matéria do que a visível. Nenhuma partícula do Modelo Padrão é candidata a explicá-la.</li>
<li><strong>Energia escura.</strong> A expansão do universo acelera, e nada no Modelo Padrão explica isso de forma satisfatória.</li>
<li><strong>Massa dos neutrinos.</strong> O Modelo Padrão original os previa sem massa. A observação de oscilação de neutrinos (Nobel de 2015) mostrou que têm massa, pequena mas não nula. É a única contradição experimental direta, e foi acomodada com extensões, ao custo de novos parâmetros livres.</li>
<li><strong>Assimetria matéria-antimatéria.</strong> O Big Bang deveria ter produzido quantidades iguais. A violação de simetria CP presente no Modelo Padrão é ordens de grandeza pequena demais para explicar o desequilíbrio observado.</li>
<li><strong>Dezenove parâmetros livres.</strong> Massas, ângulos de mistura e constantes de acoplamento são medidos, não derivados. Uma teoria fundamental idealmente derivaria alguns deles.</li>
</ul>

<h3>O problema da hierarquia, e por que ele é filosoficamente interessante</h3>

<p>Por que a gravidade é 10³⁸ vezes mais fraca? Ou, na formulação técnica: por que a massa do Higgs é tão pequena comparada à escala de Planck, quando correções quânticas deveriam empurrá-la para cima?</p>

<p>Manter o Higgs leve exige que parâmetros distintos se cancelem com precisão de dezenas de casas decimais. Isso é possível, mas parece um acidente extraordinário, e físicos desconfiam de coincidências assim.</p>

<p>A supersimetria foi a resposta favorita por três décadas: novas partículas cancelariam as correções automaticamente, sem ajuste fino. O LHC procurou essas partículas nas faixas de massa previstas e não as encontrou.</p>

<div class="marca especulacao">
<span class="rot">Especulação, explicitamente</span>
<p>A ausência de supersimetria no LHC reabriu argumentos antrópicos: talvez existam muitos universos com valores diferentes de parâmetros, e observadores só possam existir naqueles em que os valores permitem química e estrutura. O problema epistemológico é sério: se a teoria não faz previsões testáveis distintivas, resta discutir se ela é ciência ou metafísica. Esse debate está ativo e não resolvido, e envolve gente séria dos dois lados.</p>
</div>

<h3>Onde as quatro forças aparecem na sua escala</h3>

<p>Uma forma de organizar tudo isso é perguntar qual força governa o quê:</p>

<div class="tabela-env">
<table>
<thead><tr><th>Escala</th><th>Força dominante</th><th>Fenômeno</th></tr></thead>
<tbody>
<tr><td>10⁻¹⁵ m (núcleo)</td><td>Forte</td><td>Estabilidade nuclear, fissão, fusão</td></tr>
<tr><td>10⁻¹⁸ m, eventos raros</td><td>Fraca</td><td>Decaimento beta, primeiro passo da fusão solar</td></tr>
<tr><td>10⁻¹⁰ m a metros</td><td>Eletromagnética</td><td>Química, biologia, materiais, luz</td></tr>
<tr><td>10⁶ m e acima</td><td>Gravitacional</td><td>Planetas, estrelas, galáxias, cosmologia</td></tr>
</tbody>
</table>
</div>

<p>Note que a vida ocupa quase inteiramente a faixa eletromagnética. Toda a bioquímica (ligações covalentes, pontes de hidrogênio, interações hidrofóbicas, dobramento de proteínas, pareamento de bases) é eletromagnetismo em regimes diferentes. As outras três aparecem indiretamente: a forte porque forneceu os núcleos, a fraca porque acende as estrelas, a gravidade porque manteve a atmosfera e a água na superfície do planeta.</p>

<div class="marca consenso">
<span class="rot">O que segurar</span>
<p>Quatro interações, três unificadas parcialmente e uma fora do esquema. O alcance é ditado pela massa do mediador. A intensidade aparente na escala humana depende tanto da intensidade intrínseca quanto de haver ou não cancelamento de cargas. E a fronteira aberta mais importante da física fundamental é exatamente a incompatibilidade entre a descrição quântica das três e a descrição geométrica da quarta.</p>
</div>
` }
},

flashcards: [
  { f: "Quais são as quatro interações fundamentais e seus mediadores?", v: "Forte (glúon), eletromagnética (fóton), fraca (bósons W e Z) e gravitacional (gráviton, hipotético e nunca detectado)." },
  { f: "O que determina o alcance de uma interação?", v: "A massa da partícula mediadora. Mediadores sem massa (fóton, glúon) permitem alcance infinito; mediadores pesados (W e Z, ~80–91 GeV/c²) produzem alcance curtíssimo." },
  { f: "Por que a gravidade domina o cosmo se é 10³⁸ vezes mais fraca que a força forte?", v: "Porque tem alcance infinito e não há cancelamento: não existe massa negativa. A eletromagnética, muito mais intensa, se neutraliza porque cargas opostas se cancelam em objetos grandes." },
  { f: "O que é a unificação eletrofraca?", v: "Acima de ~100 GeV, eletromagnetismo e força fraca são uma única interação simétrica. O campo de Higgs quebra essa simetria em energias baixas, dando massa aos bósons W e Z e deixando o fóton sem massa." },
  { f: "O que é liberdade assintótica e confinamento?", v: "A força forte enfraquece a curtíssimas distâncias (liberdade assintótica) e cresce com a separação, de modo que quarks nunca aparecem isolados (confinamento). Tentar separá-los cria novos pares em vez de quarks livres." },
  { f: "De onde vem 99% da massa de um próton?", v: "Da energia do campo forte entre os quarks, convertida em massa por E = mc². A soma das massas dos três quarks é apenas cerca de 1% da massa do próton." },
  { f: "Por que a força fraca é indispensável para a existência do Sol?", v: "Porque o primeiro passo da fusão do hidrogênio exige converter um próton em nêutron, e apenas a interação fraca realiza essa transformação de sabor." },
  { f: "Qual previsão das GUTs foi testada e falhou?", v: "O decaimento do próton. O SU(5) mínimo previa vida de ~10³¹ anos; o Super-Kamiokande estabeleceu limite acima de 10³³ anos sem detectar eventos, excluindo o modelo mais simples." },
  { f: "Por que é impreciso chamar a gravidade de 'força' na relatividade geral?", v: "Porque ela é descrita como curvatura do espaço-tempo: um corpo em queda livre não sofre força alguma, apenas segue a geodésica. Isso torna seu estatuto teórico diferente das outras três." },
  { f: "Cite três lacunas reconhecidas do Modelo Padrão.", v: "Não inclui a gravidade; não oferece candidato a matéria escura; não explica a assimetria matéria-antimatéria observada. Somam-se a massa dos neutrinos e os 19 parâmetros livres não derivados." }
],

prova: [
  { camada: "nucleo",
    q: "Por que a interação eletromagnética, sendo cerca de 10³⁶ vezes mais intensa que a gravitacional, não domina em escala astronômica?",
    alts: [
      "Porque o alcance dela é finito, ao contrário da gravidade.",
      "Porque existem cargas positivas e negativas que se cancelam, tornando corpos grandes praticamente neutros — enquanto massa apenas acumula.",
      "Porque ela deixa de operar acima de certa distância crítica.",
      "Porque no vácuo do espaço não há meio para propagar campos elétricos."
    ],
    correta: 1,
    porque: "Ambas têm alcance infinito e caem com 1/r². A diferença decisiva é o cancelamento: a matéria comum é eletricamente neutra em larga escala, então a força intensíssima se anula. A gravidade, sem massa negativa, sempre soma — e vence pela acumulação, não pela intensidade." },

  { camada: "nucleo",
    q: "A interação fraca é descrita no texto como a menos intuitiva. Por quê?",
    alts: [
      "Porque é a mais fraca das quatro, quase impossível de detectar.",
      "Porque atua apenas dentro de estrelas.",
      "Porque não atrai nem repele de forma perceptível: ela transforma um tipo de partícula em outro.",
      "Porque seu mediador ainda não foi detectado."
    ],
    correta: 2,
    porque: "A fraca muda o sabor de partículas — permite a um nêutron virar próton, o que produz decaimento beta e viabiliza a fusão solar. Não é a mais fraca (a gravidade é), não atua só em estrelas, e seus mediadores W e Z foram detectados em 1983." },

  { camada: "nucleo",
    q: "Qual é a relação entre a massa do mediador e o alcance de uma interação?",
    alts: [
      "Mediadores mais pesados produzem alcance maior.",
      "Mediadores sem massa permitem alcance infinito; mediadores pesados produzem alcance curto.",
      "A massa do mediador determina a intensidade, não o alcance.",
      "Não há relação: o alcance depende apenas da carga envolvida."
    ],
    correta: 1,
    porque: "É a relação central da tabela: fóton e glúon não têm massa; W e Z têm cerca de 80 a 91 GeV/c², e a força fraca tem alcance de ~10⁻¹⁸ m. O glúon é o caso curioso — sem massa, mas confinado, o que limita o alcance efetivo da força forte por outro mecanismo." },

  { camada: "aprofundamento",
    q: "O que significa dizer que a simetria eletrofraca é 'quebrada' no universo atual?",
    alts: [
      "Que a teoria eletrofraca foi refutada por experimentos.",
      "Que em energias baixas o campo de Higgs assume valor não nulo, dando massa a três mediadores e deixando o fóton sem massa — o que faz duas forças parecerem distintas.",
      "Que a força fraca deixou de existir depois do Big Bang.",
      "Que eletromagnetismo e força fraca nunca foram realmente unificados, apenas descritos com a mesma notação."
    ],
    correta: 1,
    porque: "Acima de ~100 GeV as duas interações são uma só, com mediadores simétricos e sem massa. O mecanismo de Higgs quebra essa simetria em baixas energias. A distinção que observamos hoje é consequência da temperatura atual do universo, não uma diferença fundamental." },

  { camada: "aprofundamento",
    q: "Por que quarks livres nunca são observados?",
    alts: [
      "Porque decaem quase instantaneamente ao serem produzidos.",
      "Porque a força forte cresce com a distância; ao tentar separá-los, a energia investida materializa novos pares quark-antiquark.",
      "Porque são pequenos demais para qualquer detector existente.",
      "Porque a força eletromagnética os reagrupa antes que possam ser detectados."
    ],
    correta: 1,
    porque: "É o confinamento, consequência da liberdade assintótica descoberta em 1973. A energia bombeada no campo entre dois quarks que se afastam acaba excedendo a massa de um par, que se materializa. O resultado da tentativa de isolar um quark é sempre mais hádrons, nunca um quark solto." },

  { camada: "aprofundamento",
    q: "A massa de um próton (~938 MeV/c²) comparada à soma das massas de seus três quarks (~9 MeV/c²) mostra que:",
    alts: [
      "A medição da massa do próton tem grande margem de erro.",
      "Existem quarks adicionais ainda não identificados dentro do próton.",
      "Cerca de 99% da massa vem da energia do campo forte, convertida em massa por E = mc².",
      "Os quarks ganham massa ao se ligarem, por efeito do campo de Higgs."
    ],
    correta: 2,
    porque: "A esmagadora maioria da massa da matéria comum é energia de ligação, não 'quantidade de substância'. O Higgs dá massa aos quarks individualmente, mas essa contribuição é o 1%. Esse é um dos resultados menos intuitivos e mais bem estabelecidos da física de partículas." },

  { camada: "extensao",
    q: "O SU(5) mínimo previa que o próton decairia em cerca de 10³¹ anos. O Super-Kamiokande estabeleceu limite acima de 10³³ anos sem detecções. O que se conclui?",
    alts: [
      "Que o experimento não foi sensível o suficiente e nada se conclui.",
      "Que o SU(5) mínimo está experimentalmente excluído, embora variantes com tempos de vida maiores permaneçam em aberto.",
      "Que todas as teorias de grande unificação foram refutadas.",
      "Que o próton é definitivamente estável."
    ],
    correta: 1,
    porque: "O limite experimental está duas ordens de grandeza acima da previsão do modelo, o que o exclui. Isso não elimina o programa GUT inteiro: versões supersimétricas preveem vidas mais longas e seguem testáveis. E 'estável' não foi demonstrado — apenas que a vida média excede 10³³ anos." },

  { camada: "extensao",
    q: "Qual é a única contradição experimental direta entre observação e o Modelo Padrão em sua formulação original?",
    alts: [
      "A existência de matéria escura.",
      "A aceleração da expansão do universo.",
      "A massa não nula dos neutrinos, revelada pela oscilação de sabor.",
      "A ausência de supersimetria no LHC."
    ],
    correta: 2,
    porque: "O Modelo Padrão original previa neutrinos sem massa; a oscilação observada (Nobel de 2015) exige massa não nula. Matéria escura e energia escura são lacunas — fenômenos que o modelo não cobre — e não contradições internas. A ausência de supersimetria contraria uma extensão proposta, não o Modelo Padrão." },

  { camada: "extensao",
    q: "Sobre o problema da hierarquia, qual descrição é mais precisa?",
    alts: [
      "É a dificuldade de ordenar as quatro forças por intensidade, já que as medições variam com a energia.",
      "É a questão de por que a massa do Higgs permanece pequena quando correções quânticas deveriam empurrá-la para a escala de Planck, exigindo cancelamentos de precisão extrema.",
      "É a impossibilidade de detectar o gráviton com a tecnologia atual.",
      "É a incompatibilidade entre relatividade geral e mecânica quântica."
    ],
    correta: 1,
    porque: "O problema é de ajuste fino: manter o Higgs leve exige cancelamentos com dezenas de casas decimais de precisão, o que parece um acidente improvável. A supersimetria era a solução preferida e não apareceu no LHC. A incompatibilidade entre RG e MQ é um problema distinto — o da gravidade quântica." }
],

fontes: [
  { n: 1, tipo: "instituição", ref: "CERN — <em>The Standard Model</em> e <em>Unified forces</em>: exposição oficial sobre as interações fundamentais e o estado do programa de unificação.", url: "https://home.cern/science/physics/standard-model" },
  { n: 2, tipo: "experimento", ref: "Super-Kamiokande Collaboration — busca por decaimento do próton no canal p → e⁺π⁰; limites de vida média e implicações para GUTs.", url: "http://hep.bu.edu/~superk/pdk.html" },
  { n: 3, tipo: "referência", ref: "Particle Data Group. <em>Review of Particle Physics</em>. Compilação de referência com massas, acoplamentos e limites experimentais atualizados.", url: "https://pdg.lbl.gov/" },
  { n: 4, tipo: "livro", ref: "Griffiths, D. <em>Introduction to Elementary Particles</em>. 2ª ed., Wiley-VCH, 2008 — tratamento didático da unificação eletrofraca e da cromodinâmica quântica.", url: "" },
  { n: 5, tipo: "livro", ref: "Wilczek, F. <em>The Lightness of Being: Mass, Ether, and the Unification of Forces</em>. Basic Books, 2008 — sobre a origem da massa dos hádrons, por um dos autores da liberdade assintótica.", url: "" },
  { n: 6, tipo: "divulgação", ref: "Carroll, S. <em>The Particle at the End of the Universe</em>. Dutton, 2012 — mecanismo de Higgs e quebra de simetria em linguagem acessível, com honestidade sobre o que segue em aberto.", url: "" }
]
};
