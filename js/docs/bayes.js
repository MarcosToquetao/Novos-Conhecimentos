CONTEUDOS["bayes"] = {
termo: "Teorema de Bayes",
area: "Matemática",
subtitulo: "Uma identidade algébrica de uma linha que descreve como uma crença deveria mudar diante de evidência — e por que quase todo mundo, inclusive médicos e juízes, erra sistematicamente ao aplicá-la.",
prerequisitos: [
  "Saber o que é uma porcentagem e o que significa 'a probabilidade de A dado B'. Nada mais.",
  "Para o aprofundamento: familiaridade com a ideia de que probabilidades de eventos mutuamente exclusivos somam."
],
conexoes: [
  { termo: "Falácia do promotor", relacao: "É o erro de inversão bayesiana aplicado em tribunal: confundir P(evidência | inocente) com P(inocente | evidência)." },
  { termo: "Heurísticas e vieses", relacao: "A negligência da taxa-base é o achado empírico que mostra que a intuição humana não é bayesiana por padrão." },
  { termo: "Rastreamento e sobrediagnóstico", relacao: "O valor preditivo positivo de qualquer exame de rastreio depende da prevalência — que é exatamente o termo que a intuição ignora." },
  { termo: "Inferência causal e a escada de Pearl", relacao: "Bayes atualiza crenças sobre associações; a escada de Pearl mostra por que isso não basta para afirmações causais." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Em 1978, pesquisadores de Harvard fizeram uma pergunta a 60 médicos e estudantes de medicina do próprio hospital. Um exame detecta uma doença que atinge 1 em cada 1.000 pessoas. O exame nunca deixa de detectar quem tem a doença, mas dá positivo em 5% de quem não tem. Uma pessoa escolhida ao acaso testa positivo. Qual a chance de ela ter a doença?</p>

<p>A resposta mais comum foi 95%. A resposta correta é aproximadamente 2%.<sup class="cit"><a href="#f1">1</a></sup> Quase todos erraram, e erraram na mesma direção, com um fator de quase cinquenta. O erro não vem de dificuldade aritmética — vem de uma confusão conceitual específica, e é dela que este documento trata.</p>

<h3>A pergunta que não é a mesma pergunta</h3>

<p>Existem duas perguntas parecidas e completamente diferentes:</p>

<ul>
<li><strong>Qual a chance de o exame dar positivo, se a pessoa está doente?</strong> — isso é uma propriedade do exame. Chama-se sensibilidade.</li>
<li><strong>Qual a chance de a pessoa estar doente, se o exame deu positivo?</strong> — isso é uma propriedade da <em>pessoa dentro de uma população</em>. Chama-se valor preditivo positivo.</li>
</ul>

<p>São grandezas distintas, e a segunda depende de algo que a primeira ignora: quantas pessoas naquela população têm a doença. Trocar uma pela outra é o erro. Ele tem nome — <em>inversão condicional</em> — e é tão frequente que aparece em manuais de erro médico, em decisões judiciais anuladas e em manchetes sobre testes de covid.</p>

<h3>Por que a intuição falha: o exemplo em pessoas, não em porcentagens</h3>

<p>Porcentagens condicionais são péssimas para a cognição humana. Trocar por contagens de pessoas resolve boa parte do problema — este é o achado central da linha de pesquisa sobre "frequências naturais".<sup class="cit"><a href="#f2">2</a></sup></p>

<p>Considere um rastreamento de mamografia com números realistas: 1% das mulheres na faixa etária tem câncer de mama; o exame detecta 90% dos casos reais; e dá positivo em 9% das mulheres saudáveis.</p>

<figure class="figura">[[FIG:bayes-icones]]<figcaption>Mil mulheres. Dez têm câncer; nove delas testam positivo. Das 990 saudáveis, cerca de 89 também testam positivo. Ao todo, 98 resultados positivos — e apenas 9 correspondem a doença. Os números foram calculados a partir das taxas indicadas.</figcaption></figure>

<p>Nove em noventa e oito. Aproximadamente <strong>9%</strong>. Um resultado positivo, num contexto de rastreamento populacional, deixa a mulher ainda com mais de 90% de chance de não ter a doença. Isso não significa que o exame é ruim — significa que o número que importa não é a sensibilidade do exame, é a proporção de doentes na população testada.</p>

<div class="marca consenso">
<span class="rot">Consenso estabelecido</span>
<p>O teorema de Bayes é uma identidade algébrica derivada diretamente da definição de probabilidade condicional. Não há nada a disputar sobre sua validade matemática. O que é intensamente debatido é outra coisa: se probabilidades devem ser interpretadas como graus de crença (visão bayesiana) ou como frequências de longo prazo (visão frequentista) — e essa disputa é filosófica e metodológica, não matemática.</p>
</div>

<h3>O que muda quando você entende isso</h3>

<p>Três consequências práticas, todas com efeito imediato sobre como se lê uma informação:</p>

<p><strong>Um teste raramente é conclusivo sozinho.</strong> Quanto mais rara a condição procurada, mais os falsos positivos dominam os positivos totais. Por isso testes de rastreio em população geral se comportam de maneira muito diferente do mesmo teste aplicado a quem já tem sintomas — mesma tecnologia, taxa-base diferente, conclusão diferente.</p>

<p><strong>A evidência move a crença, não a determina.</strong> Bayes não diz o que acreditar: diz quanto atualizar. Você entra com uma crença anterior, a evidência a multiplica por um fator, e você sai com uma crença posterior. Se sua crença anterior for extrema, uma evidência moderada quase não a move — o que é razoável, e explica por que "extraordinary claims require extraordinary evidence" é uma afirmação matematicamente precisa, não retórica.</p>

<p><strong>Ignorar a taxa-base é o erro mais barato de evitar.</strong> Diante de qualquer afirmação da forma "o teste/algoritmo/indício aponta X", a pergunta produtiva é sempre: <em>quantos X existem na população que está sendo examinada?</em></p>
` },

aprofundamento: { minutos: 15, html: `
<h3>A fórmula, símbolo por símbolo</h3>

<div class="formula">
P(H | E) = P(E | H) · P(H) / P(E)
<span class="leg">a probabilidade da hipótese depois de ver a evidência</span>
</div>

<ul>
<li><strong>P(H)</strong> — o <em>prior</em>: quanto você acreditava em H antes de olhar a evidência. No exemplo da mamografia, a prevalência de 1%.</li>
<li><strong>P(E | H)</strong> — a <em>verossimilhança</em>: quão provável seria observar essa evidência se H fosse verdadeira. É a sensibilidade do exame.</li>
<li><strong>P(E)</strong> — a probabilidade total da evidência, sob todas as hipóteses. É o termo que a intuição esquece, e o que garante que o resultado seja uma probabilidade legítima.</li>
<li><strong>P(H | E)</strong> — o <em>posterior</em>: sua crença atualizada.</li>
</ul>

<p>O denominador é onde mora a taxa-base. Ele se expande assim:</p>

<div class="formula">
P(E) = P(E | H) · P(H) + P(E | não-H) · P(não-H)
<span class="leg">positivos verdadeiros + positivos falsos</span>
</div>

<p>Substituindo os números da mamografia: P(E) = 0,90 × 0,01 + 0,09 × 0,99 = 0,009 + 0,0891 = 0,0981. E então P(H|E) = 0,009 / 0,0981 ≈ 0,092. Os 9% da figura, agora por álgebra.</p>

<h3>A forma que revela a estrutura: razão de chances</h3>

<p>Existe uma reescrita muito mais informativa. Dividindo a fórmula aplicada a H pela mesma fórmula aplicada a não-H, o denominador se cancela:</p>

<div class="formula">
chance posterior = chance prior × razão de verossimilhança
<span class="leg">LR = P(E | H) / P(E | não-H)</span>
</div>

<p>Isso separa limpamente <strong>o que você já sabia</strong> (chance prior) de <strong>o que a evidência acrescentou</strong> (razão de verossimilhança, ou LR). O LR é a medida honesta do poder informativo de um teste — e não depende da prevalência.</p>

<p>Na mamografia: LR = 0,90 / 0,09 = 10. Chance prior = 1:99. Chance posterior = 10:99, ou seja, cerca de 9%. Repare que o teste multiplicou suas chances por dez — o que é substancial. O resultado ainda é baixo porque o ponto de partida era muito baixo.</p>

<div class="marca consenso">
<span class="rot">Regra prática defensável</span>
<p>Em medicina baseada em evidências, valores de LR são usados como referência grosseira: LR acima de 10 ou abaixo de 0,1 muda decisões clínicas de forma relevante; entre 0,5 e 2, quase nunca muda. Um teste com LR próximo de 1 é, do ponto de vista informacional, equivalente a não ter feito teste algum — independentemente de quão sofisticada seja a tecnologia envolvida.</p>
</div>

<h3>Por que a intuição falha: duas explicações concorrentes</h3>

<p>Há uma disputa empírica real sobre a origem do erro, e as duas posições têm evidência.</p>

<p><strong>Posição 1 — a mente não é bayesiana.</strong> Kahneman e Tversky mostraram que as pessoas julgam por representatividade: avaliam quanto a evidência "parece" com a hipótese, ignorando a frequência de base. O erro seria um viés cognitivo estrutural.<sup class="cit"><a href="#f3">3</a></sup></p>

<p><strong>Posição 2 — o formato é que é ruim.</strong> Gigerenzer e colaboradores mostraram que apresentar o mesmo problema em frequências naturais ("10 em 1.000") em vez de probabilidades condicionais ("1%") eleva drasticamente a taxa de acerto, inclusive entre médicos. O erro seria um artefato de representação, não da cognição.<sup class="cit"><a href="#f2">2</a></sup></p>

<div class="marca controverso">
<span class="rot">Ponto controverso</span>
<p>As duas posições não são inteiramente incompatíveis, e o debate segue ativo há mais de trinta anos. O que é bem estabelecido: a mudança de formato produz melhora grande e replicável. O que é disputado: se isso demonstra que a cognição é "bayesiana em frequências" por adaptação evolutiva, ou apenas que reduzir a carga de memória de trabalho ajuda em qualquer tarefa. A segunda explicação é mais parcimoniosa e tem ganhado terreno.</p>
</div>

<h3>Onde isso aparece fora da medicina</h3>

<p><strong>Tribunais.</strong> A "falácia do promotor" é a inversão condicional aplicada a evidência forense. Um perito afirma que a chance de o perfil de DNA coincidir por acaso é 1 em 10 milhões. Concluir daí que a chance de o réu ser inocente é 1 em 10 milhões é logicamente inválido: depende de quantas pessoas poderiam plausivelmente ser o autor. Em bases de dados grandes, coincidências raras tornam-se esperadas.</p>

<p><strong>Segurança e triagem.</strong> Qualquer sistema que procura eventos raros — fraude, ameaça, doença — em populações grandes produz um número de falsos positivos que supera os verdadeiros, mesmo com especificidade altíssima. Isso não é falha de implementação: é uma consequência aritmética que precisa ser projetada, não descoberta depois.</p>
` },

extensao: { minutos: 30, html: `
<h3>A briga que existe de verdade: bayesianos e frequentistas</h3>

<p>O teorema é incontroverso. A <em>interpretação da probabilidade</em> não é, e a diferença tem consequências práticas em como se desenha e analisa um estudo.</p>

<div class="tabela-env">
<table>
<thead><tr><th></th><th>Frequentista</th><th>Bayesiano</th></tr></thead>
<tbody>
<tr><td>O que é probabilidade</td><td>Frequência limite em repetições</td><td>Grau de crença racional</td></tr>
<tr><td>Um parâmetro (ex.: efeito de um remédio)</td><td>É um valor fixo e desconhecido; não tem probabilidade</td><td>Tem distribuição, que expressa incerteza</td></tr>
<tr><td>Resultado típico</td><td>Valor-p, intervalo de confiança</td><td>Distribuição posterior, intervalo de credibilidade</td></tr>
<tr><td>Papel do conhecimento prévio</td><td>Fora do cálculo (entra no desenho)</td><td>Explícito, no prior</td></tr>
<tr><td>Crítica principal que recebe</td><td>Responde a uma pergunta que ninguém fez</td><td>Prior é subjetivo e pode ser escolhido para agradar</td></tr>
</tbody>
</table>
</div>

<p>A crítica frequentista tem um alvo legítimo: se o prior é escolhido pelo pesquisador, dois analistas com os mesmos dados podem chegar a conclusões diferentes. A resposta bayesiana é que o conhecimento prévio existe de qualquer forma — a diferença é que ele fica explícito e auditável, em vez de escondido no desenho do estudo e nas escolhas de análise.</p>

<div class="marca emergente">
<span class="rot">Prática crescente e defensável</span>
<p>A postura pragmática que se consolidou em várias áreas aplicadas é a <em>análise de sensibilidade a priors</em>: reportar o posterior sob priors céticos, neutros e otimistas. Se a conclusão é estável nos três, o resultado é robusto; se depende do prior, isso é informação importante que ficaria invisível numa análise frequentista. Em ensaios clínicos adaptativos, desenhos bayesianos são hoje aceitos por agências regulatórias, o que era impensável há duas décadas.</p>
</div>

<h3>A crítica que o valor-p não sobrevive bem</h3>

<p>Um valor-p responde: <em>se a hipótese nula fosse verdadeira, qual a chance de eu ver dados tão extremos quanto estes?</em> Isso é P(dados | H₀). Quase todo mundo o lê como P(H₀ | dados). É a mesma inversão condicional do exemplo da mamografia, e é o erro mais consequente da estatística aplicada.</p>

<p>O ponto quantitativo: para um estudo com poder de 80% e nível de 5%, testando hipóteses das quais apenas 10% são verdadeiras a priori, entre os resultados "significativos" cerca de 36% são falsos positivos.<sup class="cit"><a href="#f4">4</a></sup> Não por fraude, nem por má execução — apenas por aritmética bayesiana aplicada a uma taxa-base baixa de hipóteses verdadeiras. Este é o argumento central de Ioannidis em "Why most published research findings are false", e é essencialmente o problema da mamografia transposto para a literatura científica.</p>

<h3>Uma limitação séria: Bayes não sabe nada sobre causa</h3>

<p>Atualização bayesiana opera sobre associações estatísticas. Ela responde perfeitamente a "vendo isto, o que devo esperar daquilo?" e não responde a "se eu <em>intervier</em> aqui, o que acontece ali?". Judea Pearl formalizou essa distinção em três níveis — associação, intervenção e contrafactual — e mostrou que subir de nível exige suposições causais que nenhuma quantidade de dados observacionais fornece.<sup class="cit"><a href="#f5">5</a></sup></p>

<p>Um exemplo do próprio Pearl: observar que pessoas que tomam certo remédio se recuperam mais não permite concluir que o remédio funciona, porque quem toma pode ser sistematicamente diferente de quem não toma. Bayes atualiza corretamente a crença sobre o que você <em>verá</em>; não atualiza a crença sobre o que aconteceria se você <em>mudasse</em> quem toma. Confundir os dois é a raiz de boa parte das controvérsias em epidemiologia observacional.</p>

<div class="marca controverso">
<span class="rot">Onde o entusiasmo bayesiano exagera</span>
<p>Há uma literatura crescente descrevendo o cérebro como um "motor de inferência bayesiana". As versões fortes dessa tese — de que o córtex implementa literalmente atualização bayesiana ótima — são difíceis de falsear: com liberdade suficiente na escolha do prior e da função de custo, quase qualquer comportamento pode ser reescrito como "bayesiano ótimo em relação a algum prior". Uma teoria que acomoda qualquer observação não está fazendo previsões arriscadas. As versões fracas (o cérebro combina expectativa e evidência de forma sensível à confiabilidade de cada uma) têm apoio experimental sólido em integração multissensorial.</p>
</div>

<h3>Como usar isso na prática, sem fórmula</h3>

<p>Três perguntas que fazem o trabalho pesado sem exigir nenhuma conta:</p>

<ol>
<li><strong>Qual é a taxa-base?</strong> Antes de avaliar qualquer indício, pergunte quantos casos existem na população examinada. Sem esse número, um resultado positivo é ininterpretável.</li>
<li><strong>Quão surpreendente seria essa evidência se a hipótese fosse falsa?</strong> Essa é a pergunta que produz a razão de verossimilhança. Se a evidência seria igualmente provável nos dois cenários, ela não é evidência de nada — por mais impressionante que pareça.</li>
<li><strong>Estou invertendo a condicional?</strong> Sempre que ler "a chance disso acontecer por acaso é 1 em X", verifique se a conclusão apresentada é sobre a hipótese ou sobre os dados. Quase sempre, o texto desliza de uma para a outra.</li>
</ol>

<p>Essa terceira pergunta é, isoladamente, o retorno mais alto por unidade de esforço deste documento inteiro.</p>
` }
},

flashcards: [
  { f: "Qual é a diferença entre sensibilidade e valor preditivo positivo?", v: "Sensibilidade = P(teste positivo | doente): propriedade do exame. Valor preditivo positivo = P(doente | teste positivo): depende da prevalência na população testada. Confundi-las é a inversão condicional." },
  { f: "Por que um teste muito bom pode ter valor preditivo positivo baixo?", v: "Porque quando a condição é rara, o número absoluto de falsos positivos (uma pequena fração de uma população enorme de saudáveis) supera o de verdadeiros positivos (uma grande fração de um grupo minúsculo de doentes)." },
  { f: "Escreva o teorema de Bayes e nomeie cada termo.", v: "P(H|E) = P(E|H)·P(H)/P(E). P(H) é o prior, P(E|H) é a verossimilhança, P(E) é a probabilidade total da evidência e P(H|E) é o posterior." },
  { f: "O que é a razão de verossimilhança (LR) e por que ela é útil?", v: "LR = P(E|H)/P(E|não-H). Ela mede o poder informativo do teste separadamente da prevalência: chance posterior = chance prior × LR. LR próximo de 1 significa que o teste não informa nada." },
  { f: "O que são frequências naturais e qual seu efeito?", v: "Apresentar o problema em contagens de pessoas ('10 em 1.000') em vez de probabilidades condicionais ('1%'). Eleva substancialmente a taxa de acerto, inclusive entre médicos (Gigerenzer)." },
  { f: "O que é a falácia do promotor?", v: "Confundir P(evidência | inocente) com P(inocente | evidência) em contexto forense. 'A chance de coincidir por acaso é 1 em 10 milhões' não implica que a chance de inocência seja 1 em 10 milhões." },
  { f: "Qual é a relação entre valor-p e inversão condicional?", v: "O valor-p é P(dados tão extremos | H₀ verdadeira) e é rotineiramente lido como P(H₀ | dados). É o mesmo erro do exemplo da mamografia, aplicado à literatura científica." },
  { f: "Qual é a limitação fundamental de Bayes quanto a causalidade?", v: "Bayes atualiza crenças sobre associações — responde 'vendo X, o que espero de Y'. Não responde 'se eu intervier em X, o que acontece com Y'. Subir esse degrau exige suposições causais externas aos dados (Pearl)." },
  { f: "Qual a diferença central entre a visão frequentista e a bayesiana?", v: "Frequentista: probabilidade é frequência limite, e um parâmetro é um valor fixo sem distribuição. Bayesiana: probabilidade é grau de crença, e o parâmetro tem distribuição que expressa incerteza." }
],

prova: [
  { camada: "nucleo",
    q: "Um exame tem sensibilidade de 99% e especificidade de 99%. Ele é aplicado a uma população em que 1 em cada 10.000 pessoas tem a doença. Uma pessoa testa positivo. A probabilidade de ela estar doente é aproximadamente:",
    alts: ["99%", "50%", "1%", "Não é possível saber sem mais informação"],
    correta: 2,
    porque: "Em 10.000 pessoas: 1 doente, que quase certamente testa positivo. Dos 9.999 saudáveis, 1% dá falso positivo, ou seja, cerca de 100 pessoas. Total de positivos ≈ 101, dos quais 1 está doente: cerca de 1%. Um exame excelente, aplicado a uma condição rara, produz esmagadora maioria de falsos positivos. Essa é a aritmética que a intuição de 99% ignora." },

  { camada: "nucleo",
    q: "Qual das perguntas abaixo corresponde à sensibilidade de um exame?",
    alts: [
      "Se a pessoa testou positivo, qual a chance de estar doente?",
      "Se a pessoa está doente, qual a chance de o exame dar positivo?",
      "Qual a proporção de doentes na população?",
      "Qual a chance de o exame errar em qualquer direção?"
    ],
    correta: 1,
    porque: "Sensibilidade é P(positivo | doente) — uma propriedade do exame, medida em pessoas sabidamente doentes. A primeira alternativa é o valor preditivo positivo, que é uma grandeza diferente e depende da prevalência. Trocar as duas é exatamente o erro que os médicos de Harvard cometeram em 1978." },

  { camada: "nucleo",
    q: "Por que o resultado de um mesmo exame deve ser interpretado de forma diferente num rastreamento populacional e num paciente com sintomas típicos?",
    alts: [
      "Porque a sensibilidade do exame muda conforme o paciente tem ou não sintomas.",
      "Porque a taxa-base (probabilidade prévia de doença) é muito maior no paciente sintomático, elevando o valor preditivo do positivo.",
      "Porque exames de rastreio usam tecnologia menos precisa.",
      "Porque o médico tende a ser mais cuidadoso com pacientes sintomáticos."
    ],
    correta: 1,
    porque: "A tecnologia e suas propriedades (sensibilidade, especificidade) são as mesmas. O que muda é o prior: sintomas típicos elevam a probabilidade prévia, e com prior mais alto o mesmo LR produz um posterior muito mais alto. É a razão pela qual testar indiscriminadamente é epistemicamente diferente de testar sob suspeita clínica." },

  { camada: "aprofundamento",
    q: "Um teste tem P(E|H) = 0,60 e P(E|não-H) = 0,60. O que se pode concluir?",
    alts: [
      "O teste é moderadamente informativo, com 60% de acerto.",
      "A razão de verossimilhança é 1: o teste não altera a crença prévia, sendo informacionalmente inútil.",
      "O teste é inconclusivo apenas quando a prevalência é baixa.",
      "Faltam dados: é preciso conhecer o prior para avaliar o teste."
    ],
    correta: 1,
    porque: "LR = 0,60/0,60 = 1, e chance posterior = chance prior × 1 = chance prior. A evidência é igualmente provável sob as duas hipóteses, portanto não discrimina entre elas. Note que o LR é independente do prior — é justamente essa separação que torna a formulação em razão de chances tão esclarecedora." },

  { camada: "aprofundamento",
    q: "No denominador P(E) = P(E|H)·P(H) + P(E|não-H)·P(não-H), qual é o papel do segundo termo?",
    alts: [
      "Corrigir erros de arredondamento da fórmula.",
      "Representar os falsos positivos: casos em que a evidência aparece sem que a hipótese seja verdadeira.",
      "Garantir que o prior some 1.",
      "Ajustar para o tamanho da amostra."
    ],
    correta: 1,
    porque: "É exatamente o termo dos falsos positivos, e é ele que carrega a taxa-base através de P(não-H). Quando a condição é rara, P(não-H) é próximo de 1 e esse termo domina o denominador — o que empurra o posterior para baixo mesmo com boa sensibilidade. Ignorar esse termo é a forma algébrica de negligenciar a taxa-base." },

  { camada: "aprofundamento",
    q: "Sobre o debate entre Kahneman/Tversky e Gigerenzer a respeito da negligência da taxa-base, qual afirmação é mais precisa?",
    alts: [
      "Gigerenzer demonstrou que o viés não existe e que Kahneman estava errado.",
      "Reformular o problema em frequências naturais melhora substancialmente o desempenho; o que segue disputado é se isso revela uma cognição adaptada a frequências ou apenas menor carga de memória de trabalho.",
      "O efeito do formato só aparece em leigos, não em profissionais treinados.",
      "O debate foi encerrado por meta-análises que confirmaram a posição de Kahneman."
    ],
    correta: 1,
    porque: "O efeito do formato é robusto e replicável, inclusive com médicos — isso é consenso. A interpretação continua aberta: a explicação evolutiva de Gigerenzer é mais ambiciosa e mais difícil de testar do que a explicação por carga cognitiva, que é mais parcimoniosa. Dizer que o viés 'não existe' extrapola o que os dados sustentam." },

  { camada: "extensao",
    q: "Um perito declara em juízo: 'a probabilidade de este perfil de DNA coincidir por acaso é de 1 em 10 milhões'. O promotor conclui: 'logo, a probabilidade de o réu ser inocente é de 1 em 10 milhões'. Qual é o erro?",
    alts: [
      "Nenhum, desde que o laboratório seja acreditado.",
      "O perito deveria ter usado intervalo de confiança em vez de probabilidade pontual.",
      "O promotor inverteu a condicional: P(coincidência | inocente) não é P(inocente | coincidência); a segunda depende de quantas pessoas poderiam plausivelmente ser o autor.",
      "O erro é usar DNA como prova única, que é proibido."
    ],
    correta: 2,
    porque: "É a falácia do promotor. Se a busca foi feita numa base de milhões de perfis, coincidências raras tornam-se esperadas, e o prior de culpa daquele indivíduo específico pode ser baixíssimo. A magnitude do erro depende inteiramente do tamanho da população de suspeitos plausíveis — um número que a afirmação do perito não contém." },

  { camada: "extensao",
    q: "Considere estudos com poder de 80% e nível de significância de 5%, num campo onde apenas 10% das hipóteses testadas são verdadeiras. Entre os resultados estatisticamente significativos, a proporção de falsos positivos é aproximadamente:",
    alts: ["5%", "20%", "36%", "80%"],
    correta: 2,
    porque: "Em 1.000 hipóteses: 100 verdadeiras, das quais 80 são detectadas; 900 falsas, das quais 45 (5%) dão significativas. Total de significativos = 125, dos quais 45 são falsos: cerca de 36%. É o argumento central de Ioannidis, e é estruturalmente idêntico ao problema da mamografia — apenas com 'hipótese verdadeira' no lugar de 'doente'." },

  { camada: "extensao",
    q: "Qual é a limitação de Bayes apontada por Judea Pearl?",
    alts: [
      "Que a fórmula só vale para eventos independentes.",
      "Que a atualização bayesiana opera sobre associações e não distingue observação de intervenção; afirmações causais exigem suposições que os dados observacionais não fornecem.",
      "Que priors subjetivos tornam o método não científico.",
      "Que a fórmula não funciona quando há mais de duas hipóteses."
    ],
    correta: 1,
    porque: "Pearl separa três níveis: associação (ver), intervenção (fazer) e contrafactual (imaginar). Bayes é uma máquina completa para o primeiro. Subir para o segundo exige um modelo causal explícito — um grafo, suposições de não-confundimento — que não está contido nos dados. As outras alternativas descrevem críticas diferentes (algumas falsas: a fórmula vale para qualquer número de hipóteses)." }
],

fontes: [
  { n: 1, tipo: "artigo", ref: "Casscells, W., Schoenberger, A. &amp; Graboys, T. B. 'Interpretation by physicians of clinical laboratory results'. <em>New England Journal of Medicine</em> 299:999–1001, 1978.", url: "https://doi.org/10.1056/NEJM197811022991808" },
  { n: 2, tipo: "artigo", ref: "Gigerenzer, G. &amp; Hoffrage, U. 'How to improve Bayesian reasoning without instruction: frequency formats'. <em>Psychological Review</em> 102(4):684–704, 1995.", url: "https://doi.org/10.1037/0033-295X.102.4.684" },
  { n: 3, tipo: "livro", ref: "Kahneman, D. <em>Rápido e Devagar: Duas Formas de Pensar</em>. Objetiva, 2012 — capítulos sobre representatividade e negligência da taxa-base.", url: "" },
  { n: 4, tipo: "artigo", ref: "Ioannidis, J. P. A. 'Why most published research findings are false'. <em>PLoS Medicine</em> 2(8):e124, 2005.", url: "https://doi.org/10.1371/journal.pmed.0020124" },
  { n: 5, tipo: "livro", ref: "Pearl, J. &amp; Mackenzie, D. <em>The Book of Why: The New Science of Cause and Effect</em>. Basic Books, 2018 — a escada da causalidade e os limites da inferência associativa.", url: "" },
  { n: 6, tipo: "livro", ref: "McGrayne, S. B. <em>The Theory That Would Not Die</em>. Yale University Press, 2011 — história do teorema, de Bayes e Laplace a Turing e à estatística contemporânea.", url: "" }
]
};
