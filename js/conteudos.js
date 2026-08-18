/* =========================================================================
   conteudos.js — GERADO por build_conteudos.py a partir de js/docs/*.js
   Não editar este arquivo à mão: as alterações serão perdidas.

   Estrutura de cada documento:
     termo, area, subtitulo, prerequisitos[], conexoes[]
     camadas: { nucleo, aprofundamento, extensao }  -> { minutos, html }
     flashcards[]  -> { f, v }
     prova[]       -> { camada, q, alts[], correta, porque }
     fontes[]      -> { n, tipo, ref, url }
   ========================================================================= */

const CONTEUDOS = {};

/* ── bayes.js ──────────────────────────────────────────────── */
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

<p>A resposta mais comum foi 95%. A resposta correta é aproximadamente 2%.<sup class="cit"><a href="#f1">1</a></sup> Quase todos erraram, e erraram na mesma direção, com um fator de quase cinquenta. O erro não vem de dificuldade aritmética: vem de uma confusão conceitual específica, e é dela que este documento trata.</p>

<h3>A pergunta que não é a mesma pergunta</h3>

<p>Existem duas perguntas parecidas e completamente diferentes:</p>

<ul>
<li><strong>Qual a chance de o exame dar positivo, se a pessoa está doente?</strong> Isso é uma propriedade do exame. Chama-se sensibilidade.</li>
<li><strong>Qual a chance de a pessoa estar doente, se o exame deu positivo?</strong> Isso é uma propriedade da <em>pessoa dentro de uma população</em>. Chama-se valor preditivo positivo.</li>
</ul>

<p>São grandezas distintas, e a segunda depende de algo que a primeira ignora: quantas pessoas naquela população têm a doença. Trocar uma pela outra é o erro. Ele tem nome (<em>inversão condicional</em>) e é tão frequente que aparece em manuais de erro médico, em decisões judiciais anuladas e em manchetes sobre testes de covid.</p>

<h3>Por que a intuição falha: o exemplo em pessoas, não em porcentagens</h3>

<p>Porcentagens condicionais são péssimas para a cognição humana. Trocar por contagens de pessoas resolve boa parte do problema: este é o achado central da linha de pesquisa sobre "frequências naturais".<sup class="cit"><a href="#f2">2</a></sup></p>

<p>Considere um rastreamento de mamografia com números realistas: 1% das mulheres na faixa etária tem câncer de mama; o exame detecta 90% dos casos reais; e dá positivo em 9% das mulheres saudáveis.</p>

<figure class="figura">[[FIG:bayes-icones]]<figcaption>Mil mulheres. Dez têm câncer; nove delas testam positivo. Das 990 saudáveis, cerca de 89 também testam positivo. Ao todo, 98 resultados positivos, e apenas 9 correspondem a doença. Os números foram calculados a partir das taxas indicadas.</figcaption></figure>

<p>Nove em noventa e oito. Aproximadamente <strong>9%</strong>. Um resultado positivo, num contexto de rastreamento populacional, deixa a mulher ainda com mais de 90% de chance de não ter a doença. Isso não significa que o exame é ruim: significa que o número que importa não é a sensibilidade do exame, é a proporção de doentes na população testada.</p>

<div class="marca consenso">
<span class="rot">Consenso estabelecido</span>
<p>O teorema de Bayes é uma identidade algébrica derivada diretamente da definição de probabilidade condicional. Não há nada a disputar sobre sua validade matemática. O que é intensamente debatido é outra coisa: se probabilidades devem ser interpretadas como graus de crença (visão bayesiana) ou como frequências de longo prazo (visão frequentista), e essa disputa é filosófica e metodológica, não matemática.</p>
</div>

<h3>O que muda quando você entende isso</h3>

<p>Três consequências práticas, todas com efeito imediato sobre como se lê uma informação:</p>

<p><strong>Um teste raramente é conclusivo sozinho.</strong> Quanto mais rara a condição procurada, mais os falsos positivos dominam os positivos totais. Por isso testes de rastreio em população geral se comportam de maneira muito diferente do mesmo teste aplicado a quem já tem sintomas: mesma tecnologia, taxa-base diferente, conclusão diferente.</p>

<p><strong>A evidência move a crença, não a determina.</strong> Bayes não diz o que acreditar: diz quanto atualizar. Você entra com uma crença anterior, a evidência a multiplica por um fator, e você sai com uma crença posterior. Se sua crença anterior for extrema, uma evidência moderada quase não a move, o que é razoável e explica por que "extraordinary claims require extraordinary evidence" é uma afirmação matematicamente precisa, não retórica.</p>

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

<p>Isso separa limpamente <strong>o que você já sabia</strong> (chance prior) de <strong>o que a evidência acrescentou</strong> (razão de verossimilhança, ou LR). O LR é a medida honesta do poder informativo de um teste, e não depende da prevalência.</p>

<p>Na mamografia: LR = 0,90 / 0,09 = 10. Chance prior = 1:99. Chance posterior = 10:99, ou seja, cerca de 9%. Repare que o teste multiplicou suas chances por dez, o que é substancial. O resultado ainda é baixo porque o ponto de partida era muito baixo.</p>

<div class="marca consenso">
<span class="rot">Regra prática defensável</span>
<p>Em medicina baseada em evidências, valores de LR são usados como referência grosseira: LR acima de 10 ou abaixo de 0,1 muda decisões clínicas de forma relevante; entre 0,5 e 2, quase nunca muda. Um teste com LR próximo de 1 é, do ponto de vista informacional, equivalente a não ter feito teste algum, independentemente de quão sofisticada seja a tecnologia envolvida.</p>
</div>

<h3>Por que a intuição falha: duas explicações concorrentes</h3>

<p>Há uma disputa empírica real sobre a origem do erro, e as duas posições têm evidência.</p>

<p><strong>Posição 1: a mente não é bayesiana.</strong> Kahneman e Tversky mostraram que as pessoas julgam por representatividade: avaliam quanto a evidência "parece" com a hipótese, ignorando a frequência de base. O erro seria um viés cognitivo estrutural.<sup class="cit"><a href="#f3">3</a></sup></p>

<p><strong>Posição 2: o formato é que é ruim.</strong> Gigerenzer e colaboradores mostraram que apresentar o mesmo problema em frequências naturais ("10 em 1.000") em vez de probabilidades condicionais ("1%") eleva drasticamente a taxa de acerto, inclusive entre médicos. O erro seria um artefato de representação, não da cognição.<sup class="cit"><a href="#f2">2</a></sup></p>

<div class="marca controverso">
<span class="rot">Ponto controverso</span>
<p>As duas posições não são inteiramente incompatíveis, e o debate segue ativo há mais de trinta anos. O que é bem estabelecido: a mudança de formato produz melhora grande e replicável. O que é disputado: se isso demonstra que a cognição é "bayesiana em frequências" por adaptação evolutiva, ou apenas que reduzir a carga de memória de trabalho ajuda em qualquer tarefa. A segunda explicação é mais parcimoniosa e tem ganhado terreno.</p>
</div>

<h3>Onde isso aparece fora da medicina</h3>

<p><strong>Tribunais.</strong> A "falácia do promotor" é a inversão condicional aplicada a evidência forense. Um perito afirma que a chance de o perfil de DNA coincidir por acaso é 1 em 10 milhões. Concluir daí que a chance de o réu ser inocente é 1 em 10 milhões é logicamente inválido: depende de quantas pessoas poderiam plausivelmente ser o autor. Em bases de dados grandes, coincidências raras tornam-se esperadas.</p>

<p><strong>Segurança e triagem.</strong> Qualquer sistema que procura eventos raros (fraude, ameaça, doença) em populações grandes produz um número de falsos positivos que supera os verdadeiros, mesmo com especificidade altíssima. Isso não é falha de implementação: é uma consequência aritmética que precisa ser projetada, não descoberta depois.</p>
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

<p>A crítica frequentista tem um alvo legítimo: se o prior é escolhido pelo pesquisador, dois analistas com os mesmos dados podem chegar a conclusões diferentes. A resposta bayesiana é que o conhecimento prévio existe de qualquer forma: a diferença é que ele fica explícito e auditável, em vez de escondido no desenho do estudo e nas escolhas de análise.</p>

<div class="marca emergente">
<span class="rot">Prática crescente e defensável</span>
<p>A postura pragmática que se consolidou em várias áreas aplicadas é a <em>análise de sensibilidade a priors</em>: reportar o posterior sob priors céticos, neutros e otimistas. Se a conclusão é estável nos três, o resultado é robusto; se depende do prior, isso é informação importante que ficaria invisível numa análise frequentista. Em ensaios clínicos adaptativos, desenhos bayesianos são hoje aceitos por agências regulatórias, o que era impensável há duas décadas.</p>
</div>

<h3>A crítica que o valor-p não sobrevive bem</h3>

<p>Um valor-p responde: <em>se a hipótese nula fosse verdadeira, qual a chance de eu ver dados tão extremos quanto estes?</em> Isso é P(dados | H₀). Quase todo mundo o lê como P(H₀ | dados). É a mesma inversão condicional do exemplo da mamografia, e é o erro mais consequente da estatística aplicada.</p>

<p>O ponto quantitativo: para um estudo com poder de 80% e nível de 5%, testando hipóteses das quais apenas 10% são verdadeiras a priori, entre os resultados "significativos" cerca de 36% são falsos positivos.<sup class="cit"><a href="#f4">4</a></sup> Não por fraude, nem por má execução: apenas por aritmética bayesiana aplicada a uma taxa-base baixa de hipóteses verdadeiras. Este é o argumento central de Ioannidis em "Why most published research findings are false", e é essencialmente o problema da mamografia transposto para a literatura científica.</p>

<h3>Uma limitação séria: Bayes não sabe nada sobre causa</h3>

<p>Atualização bayesiana opera sobre associações estatísticas. Ela responde perfeitamente a "vendo isto, o que devo esperar daquilo?" e não responde a "se eu <em>intervier</em> aqui, o que acontece ali?". Judea Pearl formalizou essa distinção em três níveis (associação, intervenção e contrafactual) e mostrou que subir de nível exige suposições causais que nenhuma quantidade de dados observacionais fornece.<sup class="cit"><a href="#f5">5</a></sup></p>

<p>Um exemplo do próprio Pearl: observar que pessoas que tomam certo remédio se recuperam mais não permite concluir que o remédio funciona, porque quem toma pode ser sistematicamente diferente de quem não toma. Bayes atualiza corretamente a crença sobre o que você <em>verá</em>; não atualiza a crença sobre o que aconteceria se você <em>mudasse</em> quem toma. Confundir os dois é a raiz de boa parte das controvérsias em epidemiologia observacional.</p>

<div class="marca controverso">
<span class="rot">Onde o entusiasmo bayesiano exagera</span>
<p>Há uma literatura crescente descrevendo o cérebro como um "motor de inferência bayesiana". As versões fortes dessa tese (de que o córtex implementa literalmente atualização bayesiana ótima) são difíceis de falsear: com liberdade suficiente na escolha do prior e da função de custo, quase qualquer comportamento pode ser reescrito como "bayesiano ótimo em relação a algum prior". Uma teoria que acomoda qualquer observação não está fazendo previsões arriscadas. As versões fracas (o cérebro combina expectativa e evidência de forma sensível à confiabilidade de cada uma) têm apoio experimental sólido em integração multissensorial.</p>
</div>

<h3>Como usar isso na prática, sem fórmula</h3>

<p>Três perguntas que fazem o trabalho pesado sem exigir nenhuma conta:</p>

<ol>
<li><strong>Qual é a taxa-base?</strong> Antes de avaliar qualquer indício, pergunte quantos casos existem na população examinada. Sem esse número, um resultado positivo é ininterpretável.</li>
<li><strong>Quão surpreendente seria essa evidência se a hipótese fosse falsa?</strong> Essa é a pergunta que produz a razão de verossimilhança. Se a evidência seria igualmente provável nos dois cenários, ela não é evidência de nada, por mais impressionante que pareça.</li>
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

/* ── fourier.js ────────────────────────────────────────────── */
CONTEUDOS["fourier"] = {
termo: "Transformada de Fourier",
area: "Matemática",
subtitulo: "A ideia de que qualquer coisa que oscila pode ser escrita como uma soma de coisas que oscilam de forma simples — e por que isso reorganizou a engenharia, a física e a biologia estrutural.",
prerequisitos: [
  "Saber o que é uma função seno e que ela tem frequência e amplitude. Nada além disso é necessário no núcleo.",
  "Para o aprofundamento: noção de integral como 'área acumulada' e de número complexo como ponto no plano."
],
conexoes: [
  { termo: "Entropia de Shannon e compressão", relacao: "MP3 e JPEG só funcionam porque a informação perceptualmente irrelevante fica visível no domínio da frequência." },
  { termo: "Efeito Doppler", relacao: "Deslocamento de frequência só é um conceito operacional se você tem uma forma de medir frequência num sinal real." },
  { termo: "Decomposição em valores singulares", relacao: "Ambas são mudanças de base que revelam estrutura escondida; Fourier é a base fixa, SVD é a base aprendida dos dados." },
  { termo: "Caos determinístico", relacao: "O espectro de potência é a primeira ferramenta para distinguir um sinal periódico de um caótico." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Em 1807, Joseph Fourier entregou à Academia de Ciências de Paris um trabalho sobre um problema mundano: como o calor se espalha dentro de uma barra de metal. O trabalho foi rejeitado. Lagrange, Laplace e Legendre, três dos maiores matemáticos da época, estavam na banca. Lagrange objetou a uma afirmação que Fourier fazia de passagem e que parecia absurda: que <em>qualquer</em> função, inclusive uma com quinas e saltos, pode ser escrita como uma soma de senos e cossenos, que são as curvas mais suaves que existem.<sup class="cit"><a href="#f1">1</a></sup></p>

<p>Fourier estava errado na formulação exata (o "qualquer" precisava de condições) e certo no que importava. Quinze anos depois publicou o resultado como livro,<sup class="cit"><a href="#f2">2</a></sup> e a ideia se tornou uma das ferramentas mais usadas da ciência aplicada. Vale a pena entender por quê, e o motivo não é matemático: é conceitual.</p>

<h3>A ideia central em uma frase</h3>

<p>Um som complicado, uma imagem, um sinal de rádio, a vibração de uma ponte: todos podem ser reconstruídos somando oscilações puras de frequências diferentes, cada uma com sua intensidade e seu atraso. A transformada de Fourier é o procedimento que descobre <em>quais</em> oscilações puras estão lá dentro e <em>com que peso</em>.</p>

<figure class="figura">[[FIG:fourier-decomp]]<figcaption>Uma onda quadrada, toda quina e nada de suave, sendo construída a partir de senos. Com 1 termo você tem só uma ondulação. Com 3, algo já parece um degrau. Com 9, o degrau está quase lá. Essas curvas foram calculadas, não desenhadas: são as somas parciais reais da série.</figcaption></figure>

<p>A metáfora que costuma ser usada é o prisma. Luz branca entra, e do outro lado saem as cores separadas. O prisma não <em>acrescenta</em> as cores: elas já estavam lá, misturadas, e o prisma apenas as organizou por frequência. A transformada de Fourier faz o mesmo com qualquer sinal.</p>

<div class="marca controverso">
<span class="rot">Onde a metáfora do prisma engana</span>
<p>O prisma sugere que a decomposição é um fato físico sobre a luz. Não é o caso da transformada. Decompor em senos é uma <em>escolha</em> de sistema de coordenadas, não uma descoberta sobre a natureza do sinal. Você poderia decompor o mesmo sinal em ondaletas (wavelets), em polinômios de Chebyshev ou em qualquer outra base. Senos venceram porque têm uma propriedade especial que a próxima seção explica, não porque são "o que o sinal realmente é".</p>
</div>

<h3>Dois retratos do mesmo objeto</h3>

<p>Pense num acorde tocado ao piano. Um microfone registra uma única curva ondulada: pressão do ar em função do tempo. Essa curva contém tudo, mas não responde diretamente à pergunta "quais notas foram tocadas?". A transformada devolve outro retrato do mesmo evento: quais frequências estão presentes e com que força.</p>

<figure class="figura">[[FIG:fourier-dominios]]<figcaption>Em cima, o sinal como o tempo o entrega. Embaixo, o mesmo sinal como frequências. Nenhuma informação foi perdida nem criada: são duas coordenadas do mesmo ponto. A transformada inversa reconstrói o de cima a partir do de baixo, exatamente.</figcaption></figure>

<p>O ponto que costuma passar despercebido é este: <strong>não há perda</strong>. As duas representações são equivalentes, e você pode ir e voltar entre elas quantas vezes quiser. É o mesmo sinal, escrito em outra língua, não um resumo dele.</p>

<h3>Por que isso é útil, e não apenas elegante</h3>

<p>A utilidade vem de um padrão que se repete em toda a ciência aplicada: <strong>operações difíceis num domínio ficam triviais no outro</strong>. Filtrar ruído é o exemplo mais direto: no domínio do tempo, separar o chiado de 8 kHz da voz é um problema espinhoso, mas no domínio da frequência é uma tesoura, basta apagar a coluna de 8 kHz e voltar. Comprimir funciona pelo mesmo caminho: o ouvido humano não distingue certos detalhes de alta frequência, e o olho ainda menos, então MP3 e JPEG transformam, descartam o que a percepção não usa e guardam o resto; a compressão não acontece no sinal original, acontece no espectro. Resolver equações diferenciais também muda de categoria: derivar, no domínio da frequência, vira multiplicar por um número. Foi por isso que Fourier chegou a tudo isso: ele queria resolver a equação do calor, e a transformada converteu uma equação diferencial numa conta de multiplicação. E há a estrutura que fica invisível no domínio original: um sinal biológico que parece ruído pode revelar um pico limpo em 1 ciclo por 24 horas, o que equivale a detectar um ritmo circadiano sem saber que se estava procurando por ele.</p>

<h3>O caso mais bonito: você já viu uma transformada de Fourier</h3>

<p>Quando raios X atravessam um cristal, o padrão de manchas que aparece no detector <em>é</em>, com boa aproximação, a transformada de Fourier da distribuição de densidade eletrônica do cristal.<sup class="cit"><a href="#f3">3</a></sup> A natureza faz a transformada; o cristalógrafo precisa apenas fazer a inversa para recuperar a estrutura da molécula. A imagem 51 de Rosalind Franklin, que mostrou a hélice do DNA, é literalmente um espectro de Fourier: o padrão em X é a assinatura de uma hélice no domínio da frequência espacial.</p>

<div class="marca consenso">
<span class="rot">Consenso estabelecido</span>
<p>Que sinais razoavelmente bem-comportados admitem representação por senos e cossenos, e que a transformada é inversível, é matemática rigorosamente demonstrada desde o século XIX. Não há disputa. As controvérsias reais estão em <em>quando</em> usar essa representação, não em se ela existe.</p>
</div>

<h3>O que segurar antes de seguir</h3>

<p>Se você fechar o texto aqui, o essencial é isto: transformar é mudar de coordenadas, não resumir. A utilidade vem de multiplicar, filtrar e derivar mudarem de dificuldade conforme o domínio. E senos não são a única base possível; a próxima camada mostra por que eles ganharam.</p>
` },

aprofundamento: { minutos: 15, html: `
<h3>A fórmula, símbolo por símbolo</h3>

<p>A transformada de Fourier de um sinal contínuo costuma ser escrita assim:</p>

<div class="formula">
F(ξ) = ∫ f(t) · e<sup>−2πiξt</sup> dt
<span class="leg">integral sobre todo o eixo do tempo</span>
</div>

<p>Traduzindo cada parte:</p>

<ul>
<li><strong>f(t)</strong> é o sinal original: pressão sonora, voltagem, intensidade luminosa, em função do tempo.</li>
<li><strong>ξ</strong> (a letra grega csi) é a frequência que você está testando: "quanto de oscilação a 440 Hz existe aqui dentro?".</li>
<li><strong>e<sup>−2πiξt</sup></strong> é a peça central. Pela identidade de Euler, essa expressão equivale a cos(2πξt) − i·sen(2πξt): é um ponto girando no círculo unitário com frequência ξ. É a "onda de teste".</li>
<li><strong>A integral</strong> é uma soma contínua. Ela mede o quanto o sinal e a onda de teste "andam juntos" ao longo de todo o tempo.</li>
<li><strong>F(ξ)</strong> é um número complexo. Seu módulo diz a amplitude daquela frequência; seu ângulo diz a fase, isto é, o atraso.</li>
</ul>

<h3>A intuição que realmente importa: enrolar o sinal</h3>

<p>Existe uma leitura geométrica que dispensa manipulação algébrica. Imagine pegar o gráfico do sinal e <em>enrolá-lo</em> em torno de um ponto, a uma velocidade angular que você escolhe. Depois calcule onde fica o centro de massa dessa figura enrolada.</p>

<p>Quando a velocidade de enrolamento é qualquer uma, os picos do sinal caem espalhados pelo círculo, e o centro de massa fica perto da origem: resultado próximo de zero. Mas quando a velocidade de enrolamento coincide com uma frequência que existe no sinal, todos os picos caem alinhados do mesmo lado, e o centro de massa dispara para longe da origem. A transformada é exatamente esse centro de massa em função da velocidade de enrolamento.<sup class="cit"><a href="#f4">4</a></sup></p>

<p>Isso explica por que senos e exponenciais complexas venceram como base: elas são as <strong>autofunções da derivada</strong> e das operações de deslocamento. Derivar e<sup>iωt</sup> devolve o mesmo e<sup>iωt</sup> multiplicado por iω. Nenhuma outra família de funções tem essa propriedade tão limpa: é isso que converte cálculo em aritmética.</p>

<h3>A regra de ouro: convolução vira multiplicação</h3>

<div class="formula">
F{ f ∗ g } = F{f} · F{g}
<span class="leg">a operação mais cara do domínio do tempo é a mais barata do domínio da frequência</span>
</div>

<p>Convolução é o que acontece quando um sinal atravessa um sistema físico: uma sala com eco, uma lente desfocada, um filtro eletrônico. É uma operação computacionalmente pesada. No domínio da frequência ela vira multiplicação ponto a ponto. Praticamente todo processamento de sinal e imagem em produção explora esse teorema.</p>

<h3>O preço: você não pode ter as duas coisas</h3>

<p>Há um limite que não é técnico, é matemático. Um sinal muito localizado no tempo tem espectro necessariamente espalhado, e vice-versa. Uma nota tocada por um instante muito curto não tem altura bem definida, e isso não é limitação do equipamento: é uma propriedade da representação.</p>

<div class="formula">
Δt · Δξ ≥ 1 / 4π
<span class="leg">princípio da incerteza, na sua forma puramente matemática</span>
</div>

<div class="marca consenso">
<span class="rot">Consenso estabelecido, com uma confusão comum</span>
<p>Este é o <em>mesmo</em> teorema matemático que aparece na mecânica quântica como princípio da incerteza de Heisenberg. A diferença é interpretativa, não formal: em mecânica quântica, posição e momento são pares de Fourier porque a função de onda é definida assim. Confundir a matemática (um fato sobre pares de transformadas) com a física (uma afirmação sobre o que pode ser medido) é um erro frequente em textos de divulgação.</p>
</div>

<h3>Do contínuo ao computador: DFT, FFT e amostragem</h3>

<p>Um computador não vê funções contínuas: vê listas de números amostrados. A versão discreta, a DFT, calcula o mesmo conceito para N amostras. O problema é o custo: feita ingenuamente, ela exige da ordem de N² operações. Para um segundo de áudio a 44,1 kHz, isso é cerca de 2 bilhões de operações.</p>

<p>Em 1965, Cooley e Tukey publicaram um algoritmo que reduz isso a N·log N (de 2 bilhões para cerca de 700 mil operações).<sup class="cit"><a href="#f5">5</a></sup> É a FFT. Sem ela, praticamente nada do processamento digital de sinais existiria na forma atual. O algoritmo já havia sido descoberto por Gauss em 1805 e ficou esquecido por 160 anos, o que é um bom lembrete de como o conhecimento se perde.</p>

<p>Amostrar tem uma condição: se você medir menos que duas vezes por ciclo da frequência mais alta presente, frequências altas se disfarçam de baixas irreversivelmente. É o <em>aliasing</em>, a razão pela qual rodas de carroça giram para trás no cinema e pela qual áudio digital de qualidade usa 44,1 kHz para representar até 22 kHz.</p>
` },

extensao: { minutos: 30, html: `
<h3>A objeção de Lagrange estava certa</h3>

<p>Vale voltar ao ponto de partida, porque a história raramente é contada com honestidade. Lagrange não era um velho teimoso: ele identificou um problema real. Somar infinitas funções contínuas e obter uma função descontínua exige definir com precisão o que "somar infinitas coisas" significa, e essa definição não existia em 1807. Levou o século XIX inteiro, com Dirichlet, Riemann e Lebesgue, para tornar rigoroso o que Fourier havia afirmado por intuição física.</p>

<p>Dirichlet, em 1829, deu as primeiras condições suficientes para a convergência. A teoria moderna reformula tudo em termos de espaços L²: a série converge <em>em média quadrática</em>, o que é mais fraco do que convergir ponto a ponto, mas é exatamente o que engenharia e física precisam.</p>

<h3>O fenômeno de Gibbs: um erro que não some</h3>

<figure class="figura">[[FIG:fourier-gibbs]]<figcaption>Aproximação de um salto com 9 e com 49 harmônicos. A largura do erro encolhe. A altura do pico, não: ela estaciona em cerca de 9% do salto e permanece lá para sempre.</figcaption></figure>

<p>Perto de uma descontinuidade, as somas parciais sempre ultrapassam o valor correto. Aumentar o número de termos estreita a região do erro, mas não reduz a altura do sobressinal, que converge para aproximadamente 8,95% da altura do salto.<sup class="cit"><a href="#f6">6</a></sup></p>

<p>Isso tem consequência prática direta: filtros aplicados de forma abrupta no domínio da frequência produzem oscilações em torno de bordas na imagem reconstruída. Em ressonância magnética isso aparece como <em>ringing artifact</em>; em áudio, como um "pré-eco". Por isso, na prática, se usam janelas suaves em vez de cortes retos.</p>

<div class="marca controverso">
<span class="rot">Ponto frequentemente mal compreendido</span>
<p>O fenômeno de Gibbs é às vezes descrito como "falha da série de Fourier". Não é. A série converge corretamente no sentido L², e converge para o valor médio nos pontos de salto. O que não converge <em>uniformemente</em> é a sequência de somas parciais. A diferença entre modos de convergência não é preciosismo: é o que separa uma expectativa correta de uma incorreta sobre o que o algoritmo vai devolver.</p>
</div>

<h3>Onde Fourier é a ferramenta errada</h3>

<p>A transformada clássica pressupõe <strong>estacionariedade</strong>: que o conteúdo de frequência não muda ao longo do tempo. Ela integra sobre todo o eixo temporal e devolve um retrato global. Para uma nota sustentada de órgão isso é perfeito. Para fala, música, sismogramas, ECG ou qualquer coisa em que o interesse é justamente <em>quando</em> cada frequência aparece, é inadequado.</p>

<p>As respostas construídas para isso:</p>

<div class="tabela-env">
<table>
<thead><tr><th>Método</th><th>Ideia</th><th>Limitação</th></tr></thead>
<tbody>
<tr><td>STFT / espectrograma</td><td>Aplicar Fourier em janelas curtas e deslizantes</td><td>Resolução fixa: janela curta perde precisão em frequência, janela longa perde no tempo</td></tr>
<tr><td>Ondaletas (wavelets)</td><td>Base com resolução adaptativa — fina no tempo para altas frequências, fina em frequência para baixas</td><td>Escolha da ondaleta-mãe é arbitrária e afeta o resultado</td></tr>
<tr><td>Transformada de Hilbert-Huang</td><td>Decomposição empírica adaptada ao próprio sinal</td><td>Método sem fundamentação teórica completa; reprodutibilidade discutida</td></tr>
</tbody>
</table>
</div>

<div class="marca emergente">
<span class="rot">Abordagem emergente</span>
<p>Redes neurais que aprendem a base de decomposição diretamente dos dados (em vez de assumir senos) têm superado métodos clássicos em algumas tarefas de áudio e imagem. O ganho é real e mensurável; o custo é a perda de interpretabilidade: a base aprendida raramente tem significado físico, e isso importa quando o objetivo é entender um sistema, não apenas prever sua saída.</p>
</div>

<h3>Uma armadilha estatística: espectros de ruído</h3>

<p>Aplicar uma FFT a qualquer série temporal sempre produz picos. Ruído branco gera um espectro plano <em>em média</em>, mas qualquer realização finita tem flutuações que parecem picos. Interpretar um pico do periodograma como "periodicidade descoberta" sem teste estatístico é um erro clássico.</p>

<p>Historicamente isso produziu literatura inteira sobre ciclos econômicos, climáticos e biológicos que não sobreviveram a testes de significância adequados. Duas salvaguardas mínimas: comparar o pico contra a distribuição esperada sob a hipótese nula de ruído (frequentemente ruído vermelho, não branco, em séries naturais) e corrigir para o fato de que você está testando muitas frequências simultaneamente.</p>

<div class="marca controverso">
<span class="rot">Controvérsia metodológica real</span>
<p>Em análise de séries temporais biológicas, como expressão gênica circadiana, há disputa ativa sobre quais métodos de detecção de periodicidade controlam adequadamente o erro tipo I. Estudos comparativos mostram que diferentes algoritmos aplicados aos mesmos dados produzem listas de genes rítmicos que se sobrepõem muito menos do que se esperaria. O problema não é a transformada: é o teste de significância construído em cima dela.</p>
</div>

<h3>Fechando o círculo: o que a transformada realmente é</h3>

<p>Em linguagem de álgebra linear, a transformada de Fourier é uma <strong>mudança de base num espaço vetorial de funções</strong>. Os senos e cossenos formam uma base ortonormal; o valor F(ξ) é a projeção do sinal sobre o elemento de base de frequência ξ. Ir e voltar entre domínios é trocar de sistema de coordenadas, do mesmo modo que descrever um ponto por coordenadas cartesianas ou polares.</p>

<p>Essa formulação torna óbvio o que a intuição do prisma esconde: <strong>não existe base privilegiada</strong>. A base de Fourier é ótima para sistemas invariantes no tempo, e sistemas físicos lineares em geral são assim, o que explica seu domínio. Quando essa hipótese cai, a base perde sua vantagem e outra representação passa a fazer mais sentido. Antes de aplicar a transformada, vale checar se o sistema em questão é de fato invariante no tempo: essa checagem decide se o resultado tem interpretação física ou não.</p>
` }
},

flashcards: [
  { f: "Qual é a afirmação central da análise de Fourier?", v: "Que sinais bem-comportados podem ser escritos como soma de oscilações puras (senos e cossenos) de frequências diferentes, cada uma com amplitude e fase próprias — e que essa representação é inversível, sem perda de informação." },
  { f: "Por que passar para o domínio da frequência é útil na prática?", v: "Porque operações caras ou difíceis num domínio ficam baratas no outro: filtrar vira apagar colunas, convolução vira multiplicação ponto a ponto e derivar vira multiplicar por iω." },
  { f: "O que diz o teorema da convolução?", v: "Que a transformada de uma convolução é o produto das transformadas. É a base computacional de quase todo processamento de sinal e imagem." },
  { f: "Por que exponenciais complexas são a base 'certa' para sistemas físicos lineares?", v: "Porque são autofunções da derivada e do deslocamento: derivar e^(iωt) devolve a mesma função vezes iω. Isso converte equações diferenciais em equações algébricas." },
  { f: "O que é o princípio da incerteza na versão matemática?", v: "A impossibilidade de um sinal ser simultaneamente muito concentrado no tempo e muito concentrado em frequência. É um fato sobre pares de transformadas, do qual a versão quântica é um caso particular." },
  { f: "O que a FFT resolveu, e qual o ganho?", v: "Reduziu o custo da transformada discreta de N² para N·log N (Cooley e Tukey, 1965). Para 44.100 amostras, cerca de 2 bilhões de operações caem para ~700 mil." },
  { f: "O que é o fenômeno de Gibbs?", v: "O sobressinal de cerca de 9% da altura do salto que aparece perto de descontinuidades e não desaparece por mais termos que se acrescente — só fica mais estreito." },
  { f: "Quando a transformada de Fourier clássica é a ferramenta errada?", v: "Quando o sinal é não estacionário, isto é, quando o conteúdo de frequência muda ao longo do tempo. Ela devolve um retrato global e perde o 'quando'. Alternativas: STFT/espectrograma e ondaletas." },
  { f: "Qual é o erro estatístico clássico ao usar FFT em séries temporais?", v: "Interpretar picos do periodograma como periodicidade real sem testar contra a hipótese nula de ruído e sem corrigir para múltiplas frequências testadas. Ruído gera picos aparentes." },
  { f: "Em uma frase de álgebra linear, o que é a transformada de Fourier?", v: "Uma mudança de base num espaço de funções: os senos e cossenos formam base ortonormal, e F(ξ) é a projeção do sinal sobre o elemento de frequência ξ." }
],

prova: [
  { camada: "nucleo",
    q: "Um colega afirma: 'a transformada de Fourier resume o sinal, ficando com o que é mais importante'. Qual é o problema dessa afirmação?",
    alts: [
      "Nenhum: é exatamente o que ela faz, descartando as frequências fracas.",
      "A transformada não descarta nada — é uma representação equivalente e inversível do mesmo sinal; o descarte é uma decisão posterior e separada.",
      "O problema é que ela guarda apenas as frequências, perdendo a informação de fase.",
      "O problema é que ela só funciona para sinais periódicos, então não 'resume' nada."
    ],
    correta: 1,
    porque: "A transformada é uma mudança de coordenadas: nada é perdido nem criado, e a transformada inversa reconstrói o sinal exatamente. Compressão (MP3, JPEG) descarta informação — mas isso é um passo adicional tomado <em>depois</em> da transformada, não parte dela. A alternativa sobre fase é falsa: F(ξ) é complexo, e o ângulo carrega justamente a fase." },

  { camada: "nucleo",
    q: "Por que a filtragem de ruído é mais simples no domínio da frequência?",
    alts: [
      "Porque o ruído tem sempre amplitude menor que o sinal, então basta cortar valores pequenos.",
      "Porque no domínio da frequência o sinal fica mais curto, exigindo menos cálculos.",
      "Porque componentes que estão misturados ao longo de todo o tempo aparecem separados por frequência, e remover um deles vira uma operação local.",
      "Porque a transformada elimina automaticamente componentes aleatórios."
    ],
    correta: 2,
    porque: "O ganho é de separabilidade, não de tamanho nem de magnitude. Um chiado de 8 kHz está entrelaçado com a voz em cada instante do sinal temporal, mas ocupa uma região distinta do espectro. A alternativa sobre amplitude é uma heurística que falha sempre que o ruído é forte." },

  { camada: "nucleo",
    q: "O padrão de difração de raios X de um cristal é descrito no texto como um caso especial. Por quê?",
    alts: [
      "Porque a natureza executa fisicamente a transformada, e o cristalógrafo precisa apenas aplicar a inversa para recuperar a estrutura.",
      "Porque cristais são os únicos objetos cuja estrutura é periódica o bastante para admitir análise de Fourier.",
      "Porque raios X são a única radiação cuja frequência pode ser medida diretamente.",
      "Porque a difração produz o espectro de potência, que é mais informativo que a transformada completa."
    ],
    correta: 0,
    porque: "O padrão de manchas é, com boa aproximação, a transformada de Fourier da densidade eletrônica do cristal. A alternativa sobre 'únicos objetos periódicos' é falsa, e a última inverte a realidade: a difração mede intensidades e <em>perde</em> a fase — o chamado problema da fase, que é justamente a maior dificuldade da cristalografia." },

  { camada: "aprofundamento",
    q: "Na expressão e^(−2πiξt), qual é o papel dessa exponencial complexa?",
    alts: [
      "Garantir que o resultado seja sempre um número real positivo.",
      "Ser uma onda de teste que gira a uma frequência escolhida, permitindo medir o quanto o sinal 'anda junto' com aquela frequência.",
      "Normalizar a integral para que a área total seja igual a 1.",
      "Converter o sinal do domínio contínuo para o discreto."
    ],
    correta: 1,
    porque: "Pela identidade de Euler, ela equivale a cos − i·sen: um ponto girando no círculo unitário à frequência ξ. A integral do produto mede a correlação entre o sinal e essa onda de teste. O resultado, aliás, é complexo — não real positivo — e é justamente isso que permite carregar amplitude e fase simultaneamente." },

  { camada: "aprofundamento",
    q: "Qual é a consequência prática mais importante do teorema da convolução?",
    alts: [
      "Permite comprimir arquivos sem perda de qualidade.",
      "Garante que a transformada é inversível.",
      "Transforma a operação computacionalmente cara de convolução em uma multiplicação ponto a ponto no domínio da frequência.",
      "Permite calcular a transformada de sinais infinitos."
    ],
    correta: 2,
    porque: "Convolução — o que acontece quando um sinal atravessa um sistema físico — é cara no domínio do tempo. O teorema permite transformar, multiplicar e voltar, o que junto com a FFT torna a operação viável em tempo real. A inversibilidade é um resultado separado, e a compressão sem perda não decorre daqui." },

  { camada: "aprofundamento",
    q: "Um pesquisador amostra um sinal que contém componentes de até 30 kHz usando uma taxa de 40 mil amostras por segundo. O que acontece?",
    alts: [
      "Nada de especial: 40 mil amostras por segundo é mais do que suficiente para 30 kHz.",
      "As componentes acima de 20 kHz aparecem disfarçadas como frequências mais baixas, de forma irreversível.",
      "As componentes acima de 20 kHz simplesmente somem do registro, sem afetar o resto.",
      "O sinal fica com ruído aleatório uniforme adicionado em todas as frequências."
    ],
    correta: 1,
    porque: "É aliasing. A condição de amostragem exige mais de duas amostras por ciclo da frequência mais alta presente: 40 kHz cobre até 20 kHz. Acima disso, as componentes não desaparecem — elas se dobram sobre frequências baixas e se tornam indistinguíveis do conteúdo legítimo. Por isso filtros anti-aliasing analógicos vêm <em>antes</em> do conversor, não depois." },

  { camada: "aprofundamento",
    q: "Sobre o princípio da incerteza na forma Δt · Δξ ≥ 1/4π, qual afirmação é correta?",
    alts: [
      "É um fenômeno quântico que aparece por analogia na análise de sinais.",
      "É uma limitação dos instrumentos de medida atuais, que deve ser superada com melhor tecnologia.",
      "É um teorema matemático sobre pares de transformadas, do qual o princípio de Heisenberg é uma aplicação física.",
      "Só se aplica a sinais estacionários."
    ],
    correta: 2,
    porque: "A relação é puramente matemática: qualquer par de funções relacionadas por transformada de Fourier obedece a ela. Em mecânica quântica, posição e momento são um par desses, e daí vem Heisenberg. Tratar a versão matemática como consequência da física inverte a dependência lógica — e sugerir que melhor tecnologia resolveria é um erro categorial." },

  { camada: "extensao",
    q: "Sobre o fenômeno de Gibbs, qual é a descrição correta?",
    alts: [
      "O erro perto da descontinuidade some conforme se acrescentam termos, apenas lentamente.",
      "A região do erro estreita com mais termos, mas a altura do sobressinal estaciona em cerca de 9% do salto.",
      "A série de Fourier simplesmente não converge para funções com salto.",
      "O efeito só aparece na versão discreta (DFT), sendo artefato de amostragem."
    ],
    correta: 1,
    porque: "Essa é a característica contraintuitiva: convergência em L² e nos pontos de continuidade, mas sem convergência uniforme. Por isso o pico não encolhe. Na prática, é a origem dos artefatos de ringing em ressonância magnética e do pré-eco em áudio, e a razão de se usarem janelas suaves em vez de cortes retos no espectro." },

  { camada: "extensao",
    q: "Você precisa analisar um eletrocardiograma para identificar em que momento surgem componentes de alta frequência associadas a uma arritmia. Por que a transformada de Fourier clássica é inadequada?",
    alts: [
      "Porque ela não consegue lidar com frequências altas.",
      "Porque o sinal de ECG não é periódico.",
      "Porque ela integra sobre todo o tempo e devolve um retrato global, perdendo a informação de quando cada frequência ocorreu.",
      "Porque o ruído fisiológico impede qualquer análise espectral em sinais biológicos."
    ],
    correta: 2,
    porque: "O problema é a hipótese de estacionariedade. A transformada clássica diz <em>o que</em> existe no sinal, não <em>quando</em>. Para localizar no tempo, usa-se espectrograma (STFT) ou ondaletas, aceitando o compromisso imposto pela relação de incerteza entre resolução temporal e espectral." },

  { camada: "extensao",
    q: "Um pesquisador aplica FFT a uma série temporal de expressão gênica, encontra um pico em 24 horas e conclui que descobriu um gene circadiano. Qual é a crítica metodológica mais forte?",
    alts: [
      "Nenhuma: um pico bem definido no periodograma é evidência suficiente de periodicidade.",
      "Ruído gera picos aparentes; sem teste contra uma hipótese nula adequada e sem correção para múltiplas frequências testadas, o pico pode ser artefato.",
      "A FFT não pode ser aplicada a dados biológicos porque eles não são contínuos.",
      "O período de 24 horas é longo demais para a resolução da FFT."
    ],
    correta: 1,
    porque: "Toda realização finita de ruído produz flutuações que parecem picos, e séries biológicas frequentemente têm ruído correlacionado (vermelho), que concentra energia em baixas frequências e agrava o problema. A crítica de revisor previsível é exatamente essa: qual foi a hipótese nula, e houve correção para múltiplos testes?" }
],

fontes: [
  { n: 1, tipo: "livro", ref: "Grattan-Guinness, I. &amp; Ravetz, J. R. <em>Joseph Fourier, 1768–1830</em>. MIT Press, 1972. Reconstrói a rejeição de 1807 e as objeções de Lagrange a partir dos documentos da Academia.", url: "" },
  { n: 2, tipo: "fonte primária", ref: "Fourier, J. <em>Théorie analytique de la chaleur</em>. Paris, 1822. Texto integral digitalizado.", url: "https://archive.org/details/thorieanalytiq00four" },
  { n: 3, tipo: "livro", ref: "Rupp, B. <em>Biomolecular Crystallography: Principles, Practice, and Application to Structural Biology</em>. Garland Science, 2009 — capítulos sobre a relação de Fourier entre densidade eletrônica e padrão de difração.", url: "" },
  { n: 4, tipo: "vídeo", ref: "Sanderson, G. (3Blue1Brown). <em>But what is the Fourier Transform? A visual introduction</em>. A intuição do 'enrolamento' e do centro de massa vem desta exposição.", url: "https://www.3blue1brown.com/lessons/fourier-transforms" },
  { n: 5, tipo: "artigo", ref: "Cooley, J. W. &amp; Tukey, J. W. 'An algorithm for the machine calculation of complex Fourier series'. <em>Mathematics of Computation</em> 19(90):297–301, 1965.", url: "https://doi.org/10.1090/S0025-5718-1965-0178586-1" },
  { n: 6, tipo: "curso", ref: "Osgood, B. <em>The Fourier Transform and its Applications</em> (EE261), Stanford University — notas de aula completas, incluindo tratamento do fenômeno de Gibbs e da amostragem.", url: "https://see.stanford.edu/Course/EE261" },
  { n: 7, tipo: "livro", ref: "Bracewell, R. <em>The Fourier Transform and Its Applications</em>. 3ª ed., McGraw-Hill, 2000. Referência padrão em engenharia, com tratamento cuidadoso de convolução e amostragem.", url: "" }
]
};

/* ── gestalt-design.js ─────────────────────────────────────── */
CONTEUDOS["gestalt-design"] = {
termo: "Princípios da Gestalt no design visual",
area: "Design",
subtitulo: "Regras de percepção descritas por psicólogos alemães nos anos 1920 governam, sem você notar, toda interface que você usa. Elas explicam por que um espaçamento de oito pixels comunica mais que uma borda — e por que a maior parte do que se ensina sobre elas é imprecisa.",
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
  { f: "Qual foi a observação de Wertheimer em 1912 e o que ela mostrou?", v: "Duas luzes piscando em alternância são vistas como uma luz em movimento. Não há movimento no estímulo — ele é produzido pelo sistema visual, o que indica que a percepção organiza em vez de somar sensações elementares." },
  { f: "Qual princípio de agrupamento é o mais forte, e qual é o mais subutilizado em design?", v: "Conexão física (uma linha ligando elementos) é o mais forte de todos. Proximidade é o mais subutilizado: boa parte das bordas em interfaces existe apenas para compensar espaçamentos mal resolvidos." },
  { f: "Por que região comum é especialmente perigosa em design de interface?", v: "Porque ela supera a proximidade: uma moldura reagrupa elementos mesmo contra a distância entre eles. Um card mal desenhado é pior que nenhum card, pois impõe um agrupamento errado com força." },
  { f: "O que aconteceu com a explicação neurofisiológica original da Gestalt?", v: "Köhler propôs campos elétricos corticais contínuos. Lashley e Sperry inseriram condutores no córtex visual para curto-circuitá-los nos anos 1950 e a percepção permaneceu intacta. A hipótese foi refutada." },
  { f: "Qual é o problema lógico do princípio da Prägnanz (boa forma)?", v: "Circularidade: 'simples' nunca foi definido independentemente do que se percebe. Sem métrica fixada antes da observação, o princípio não faz previsão falseável — explica qualquer resultado e portanto nenhum." },
  { f: "Quais são as três explicações concorrentes atuais para o agrupamento perceptivo?", v: "Estatística ecológica (o sistema aprendeu regularidades de imagens naturais), codificação preditiva (percepção como hipótese que melhor explica a entrada) e simplicidade/mínima descrição. Nenhuma venceu." },
  { f: "Como diagnosticar rapidamente problemas de agrupamento numa tela?", v: "Desfoque a visão até restar só a estrutura: os blocos que aparecem são o que o usuário vê no primeiro instante. Depois meça as distâncias entre elementos relacionados e não relacionados. Depois remova todas as bordas e veja se a estrutura sobrevive." },
  { f: "O que os princípios da Gestalt NÃO resolvem?", v: "Significado (agrupar não é compreender), prioridade dentro do grupo (isso é hierarquia visual), validação com usuários e acessibilidade — agrupamento visual não chega a leitores de tela sem estrutura semântica correspondente." },
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
    porque: "O agrupamento por proximidade é pré-atencional: acontece antes de qualquer leitura do texto. Se as distâncias não desambiguam, o usuário hesita mesmo com rótulos perfeitos. E acrescentar bordas é a solução errada — trata o sintoma sem corrigir a causa, que é o espaçamento." },

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
    porque: "É a característica que dá poder prático aos princípios: eles operam cedo no processamento visual, antes de decisão consciente. Isso significa que nenhuma instrução textual corrige um agrupamento espacial errado — a única correção possível é mudar o próprio arranjo." },

  { camada: "aprofundamento",
    q: "Segundo a evidência experimental sobre competição entre princípios, o que acontece quando uma moldura agrupa elementos que estão espacialmente distantes entre si?",
    alts: [
      "Proximidade vence: os elementos continuam sendo lidos como separados.",
      "Região comum vence: a moldura reagrupa os elementos apesar da distância.",
      "Os dois princípios se cancelam e o agrupamento fica indefinido.",
      "O resultado depende inteiramente da cultura do observador."
    ],
    correta: 1,
    porque: "Região comum supera proximidade. Isso tem consequência de projeto direta: cards e caixas são ferramentas potentes e por isso perigosas — se agruparem a coisa errada, impõem essa leitura com mais força do que o espaçamento consegue desfazer." },

  { camada: "aprofundamento",
    q: "O experimento de Lashley e Sperry nos anos 1950 é relevante porque:",
    alts: [
      "Confirmou a hipótese de campos elétricos corticais de Köhler.",
      "Refutou essa hipótese: inserir condutores no córtex visual para curto-circuitar os campos não alterou a percepção.",
      "Demonstrou que os princípios de agrupamento não existem.",
      "Mostrou que o agrupamento ocorre na retina, não no córtex."
    ],
    correta: 1,
    porque: "A explicação teórica original da Gestalt foi refutada experimentalmente, enquanto as descrições fenomenológicas permaneceram válidas. Essa dissociação — fenômeno real, explicação errada — é o ponto metodológico mais transferível do documento, e a maior parte da literatura de design a ignora." },

  { camada: "aprofundamento",
    q: "Você precisa avaliar rapidamente se o layout de uma tela comunica a estrutura correta. Qual é o primeiro teste mais informativo?",
    alts: [
      "Ler todos os rótulos em voz alta verificando a clareza do texto.",
      "Desfocar a visão até restar apenas a estrutura de blocos e verificar se ela corresponde à organização lógica da informação.",
      "Contar quantas cores diferentes estão em uso.",
      "Medir o contraste de cada elemento contra o fundo."
    ],
    correta: 1,
    porque: "Desfocar remove o detalhe e revela o que o sistema visual entrega no primeiro instante, antes de leitura. Se os blocos que sobram não correspondem à estrutura lógica, o problema é de agrupamento — e nenhuma melhoria de texto, cor ou contraste vai corrigi-lo." },

  { camada: "extensao",
    q: "Qual é a objeção mais forte ao princípio da Prägnanz como formulado classicamente?",
    alts: [
      "Ele foi refutado por experimentos de neuroimagem.",
      "Ele é circular: 'simples' não é definido independentemente do que se percebe, de modo que nenhuma observação poderia contradizê-lo.",
      "Ele só se aplica a estímulos bidimensionais.",
      "Ele contradiz o princípio da proximidade."
    ],
    correta: 1,
    porque: "Sem métrica de simplicidade fixada antes da observação, o princípio acomoda qualquer resultado — e um princípio que explica tudo não explica nada. Formalizações posteriores (comprimento mínimo de descrição) resolvem isso em domínios restritos, mas a versão que circula em livros de design permanece vazia." },

  { camada: "extensao",
    q: "Um livro de design afirma: 'o cérebro forma campos elétricos que organizam a percepção em boas formas'. Qual é a avaliação correta?",
    alts: [
      "Está correto e é o consenso atual da psicologia da percepção.",
      "Repete uma hipótese explicativa refutada nos anos 1950, embora os fenômenos descritivos que ela pretendia explicar sejam reais.",
      "Está errado porque a percepção ocorre inteiramente na retina.",
      "Está correto, mas aplica-se apenas à visão periférica."
    ],
    correta: 1,
    porque: "Os fenômenos de agrupamento são sólidos; a teoria dos campos corticais foi testada e falhou. Repetir a explicação obsoleta como se fosse consenso é o erro mais comum na literatura popular de design — e ilustra por que vale distinguir sempre o achado da explicação proposta para ele." },

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

/* ── hegel-fenomenologia.js ────────────────────────────────── */
CONTEUDOS["hegel-fenomenologia"] = {
termo: "Fenomenologia do espírito e dialética em Hegel",
area: "Filosofia",
subtitulo: "O livro mais difícil da filosofia moderna propõe algo simples de enunciar e desconcertante de aceitar: que a verdade tem história, e que o erro é parte do caminho até ela — não um desvio dele.",
prerequisitos: [
  "Saber, em linhas gerais, que Kant afirmou haver limites ao que podemos conhecer: as coisas 'em si' seriam inacessíveis.",
  "Nenhum conhecimento prévio de Hegel. O texto começa desfazendo a versão popular dele, que provavelmente é a que você já ouviu."
],
conexoes: [
  { termo: "Paradigmas e revoluções científicas", relacao: "Kuhn descreve a ciência mudando por rupturas internas às próprias práticas — uma estrutura formalmente próxima da dialética, embora Kuhn não a reconhecesse como dívida." },
  { termo: "Indústria cultural e a Escola de Frankfurt", relacao: "Adorno e Horkheimer são herdeiros diretos do método hegeliano, aplicado como crítica imanente da cultura." },
  { termo: "O problema difícil da consciência", relacao: "Hegel trata a consciência como processo histórico e social, não como propriedade de um cérebro individual — um contraponto radical à formulação contemporânea." },
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
<li><strong>Densidade referencial.</strong> Boa parte das figuras alude a posições filosóficas, religiosas e literárias específicas do período — estoicismo, ceticismo, Iluminismo francês, Antígona, o Terror jacobino — quase nunca nomeadas.</li>
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

<p><strong>Kierkegaard: o indivíduo não cabe no sistema.</strong> A objeção mais afiada. O sistema hegeliano subsume o particular no universal, mas a existência concreta — esta angústia, esta escolha, esta morte — não é um caso de nada. Kierkegaard acusa Hegel de construir um palácio conceitual e viver num barraco ao lado. A crítica atinge menos o método e mais a pretensão de completude.</p>

<p><strong>Marx: a dialética está de cabeça para baixo.</strong> Marx mantém a estrutura — contradição interna gerando transformação — e troca o motor: não são figuras da consciência que se contradizem, são relações materiais de produção. A crítica é interna e produtiva, e gerou uma tradição de pesquisa inteira. Vale notar, porém, que a leitura de Marx sobre Hegel é ela mesma uma interpretação disputada.</p>

<p><strong>Popper: historicismo e irracionalismo.</strong> Em <em>A Sociedade Aberta e seus Inimigos</em>, Popper acusa Hegel de rejeitar a lógica formal, de justificar o Estado prussiano e de fundar o totalitarismo moderno. É a crítica mais influente no mundo anglófono e a menos bem sustentada textualmente.</p>

<div class="marca controverso">
<span class="rot">Sobre a crítica de Popper</span>
<p>Historiadores da filosofia, inclusive não hegelianos, documentaram que Popper trabalhou com citações truncadas, atribuiu a Hegel posições de discípulos e ignorou o contexto de passagens políticas. A acusação de que Hegel rejeita o princípio de não contradição é insustentável: a "contradição" hegeliana é inadequação performativa, não conjunção de A e não-A. Isso não significa que Hegel esteja livre de crítica política: sua filosofia do direito tem passagens genuinamente problemáticas, e há debate sério sobre elas. Significa apenas que a versão de Popper não é uma boa fonte para saber o que Hegel disse.</p>
</div>

<h3>Por que ainda se lê isso</h3>

<p>Três contribuições que sobreviveram independentemente do sistema:</p>

<p><strong>Reconhecimento como estrutura social básica.</strong> A tese de que a identidade se constitui por reconhecimento mútuo, e não por introspecção solitária, é hoje central em teoria social — Honneth, Taylor, Fraser — e em discussões sobre políticas de identidade, dignidade e direitos. É provavelmente a herança mais viva.</p>

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
  { f: "Hegel usa a fórmula 'tese, antítese, síntese'?", v: "Não. A fórmula vem de Fichte e foi popularizada por Chalybäus e comentadores do século XIX. Hegel não a adota para descrever a própria filosofia — embora a use ao expor Kant em aulas." },
  { f: "Qual é a objeção de Hegel ao limite kantiano do conhecimento?", v: "Que traçar uma fronteira do conhecimento já é um ato de conhecimento: para saber que há um limite, é preciso saber algo do outro lado. Um limite absoluto seria, por isso, incognoscível como limite." },
  { f: "O que é negação determinada?", v: "Negar uma posição de modo específico, de forma que do fracasso reste um conteúdo positivo — não o nada. É o que permite ao processo avançar em vez de recomeçar do zero." },
  { f: "O que significa Aufhebung?", v: "Cancelar, preservar e elevar simultaneamente. A figura seguinte suprime a anterior mantendo o que ela tinha de correto, num nível mais abrangente. Nenhuma tradução única em português carrega os três sentidos." },
  { f: "Por que a crítica hegeliana é chamada de imanente?", v: "Porque cada figura é avaliada pelo critério que ela própria estabelece, não por um padrão externo. É isso que impede o método de ser aplicado mecanicamente a qualquer conteúdo." },
  { f: "Qual é a inversão na dialética do senhor e do servo?", v: "O senhor obtém reconhecimento de alguém que ele não reconhece como igual — reconhecimento sem valor. O servo, pelo trabalho que transforma a matéria, desenvolve autoconsciência efetiva, e a dependência se inverte." },
  { f: "Como a 'certeza sensível' fracassa?", v: "Ela pretende conhecer o puramente particular e imediato, mas ao tentar dizer o que sabe ('agora', 'aqui', 'isto') só consegue enunciar universais que valem para qualquer instante e lugar. Fracassa pelo próprio padrão." },
  { f: "O que Hegel entende por 'espírito' (Geist)?", v: "Na leitura hoje dominante (Pippin, Pinkard, Brandom), o espaço de normas e práticas de reconhecimento mútuo constituído coletivamente — não alma individual nem entidade sobrenatural. Essa leitura é contestada por quem sustenta um Hegel metafísico." },
  { f: "O que significa 'saber absoluto'?", v: "Não onisciência, mas o ponto em que a consciência compreende que o próprio processo de formação era o objeto — que não havia um 'em si' escondido atrás do percurso. É reflexivo, não enciclopédico." },
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
    porque: "Além de não ser de Hegel, a fórmula distorce o método: ela sugere que se pega uma ideia, se inventa o oposto e se combina. O movimento real é imanente — a contradição emerge de dentro da posição, quando ela aplica seu próprio critério ao objeto que ela mesma constituiu." },

  { camada: "nucleo",
    q: "Por que Hegel considera insustentável a afirmação kantiana de que as coisas em si são inacessíveis?",
    alts: [
      "Porque a ciência experimental já provou o contrário.",
      "Porque traçar um limite do conhecimento já é um ato de conhecimento: reconhecer algo como limite exige saber algo do que está além.",
      "Porque Kant não definiu com precisão o que entendia por 'coisa em si'.",
      "Porque a distinção entre fenômeno e coisa em si é uma invenção posterior dos comentadores."
    ],
    correta: 1,
    porque: "É um argumento estrutural, não empírico. Se a barreira fosse verdadeiramente absoluta, seria impossível saber que ela existe — e o próprio ato de demarcá-la mostra que o pensamento já a transcendeu de algum modo. Daí a mudança de estratégia: acompanhar o conhecimento em ação em vez de investigar previamente seus limites." },

  { camada: "nucleo",
    q: "Na dialética do senhor e do servo, por que a posição do senhor fracassa?",
    alts: [
      "Porque o servo se rebela e o derrota pela força.",
      "Porque um terceiro personagem intervém e desfaz a relação.",
      "Porque o reconhecimento que ele obtém vem de alguém que ele próprio reduziu à condição de não-igual, e portanto não tem valor.",
      "Porque a relação senhor-servo é economicamente insustentável a longo prazo."
    ],
    correta: 2,
    porque: "É a estrutura da negação determinada: a posição contém, desde o início, a condição do próprio fracasso. Nenhum agente externo é necessário. O senhor conquista exatamente aquilo que anula o que ele buscava — e o servo, pelo trabalho, desenvolve a autoconsciência que o senhor não alcança." },

  { camada: "aprofundamento",
    q: "Como Hegel resolve o problema do critério (a impossibilidade de comparar o conhecimento com o objeto de fora do conhecimento)?",
    alts: [
      "Postulando que existe uma intuição intelectual capaz de acessar o objeto diretamente.",
      "Mostrando que a consciência já contém os dois lados — a noção do objeto e a noção do seu saber sobre ele — de modo que a comparação é interna.",
      "Recorrendo à verificação experimental como árbitro externo.",
      "Concluindo que o conhecimento objetivo é impossível e que resta apenas a coerência interna."
    ],
    correta: 1,
    porque: "A comparação acontece entre dois momentos da própria consciência, sem necessidade de um ponto de vista externo. E a consequência que Hegel destaca é decisiva: quando a comparação falha, muda também o objeto — porque o objeto era constituído pelo critério que acabou de cair." },

  { camada: "aprofundamento",
    q: "A 'certeza sensível' fracassa porque:",
    alts: [
      "Os sentidos são notoriamente enganosos e produzem ilusões.",
      "Ela pretende saber o puramente particular, mas ao articular o que sabe ('agora', 'aqui', 'isto') só consegue enunciar universais.",
      "Ela depende de instrumentos de medição imprecisos.",
      "Ela pressupõe a existência de um sujeito transcendental que Hegel rejeita."
    ],
    correta: 1,
    porque: "O argumento não é sobre ilusão de sentidos — é performativo. Escreva 'agora é noite', leia ao meio-dia: a proposição é falsa, mas a palavra 'agora' segue funcionando, o que revela que ela nomeia um universal. A figura falha pelo padrão que ela mesma adotou." },

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
    porque: "É um resultado reflexivo, não enciclopédico. A expressão soa a onisciência e não é isso. Interpretá-la como acúmulo total de conhecimento produz a caricatura de um sistema fechado que 'explica tudo' — leitura que a literatura especializada contemporânea rejeita." },

  { camada: "extensao",
    q: "Qual é a avaliação mais defensável da crítica de Popper a Hegel?",
    alts: [
      "É a análise definitiva, e por isso Hegel deixou de ser levado a sério na filosofia.",
      "É textualmente problemática — citações truncadas, atribuição de posições de discípulos, leitura equivocada da noção de contradição — o que não isenta Hegel de crítica política séria por outras vias.",
      "É irrelevante porque Popper não era filósofo político.",
      "É correta quanto à lógica, mas equivocada quanto à política."
    ],
    correta: 1,
    porque: "Historiadores da filosofia, inclusive não hegelianos, documentaram os problemas de método de Popper nesse ponto específico. Mas a resposta correta não é apologética: há passagens genuinamente problemáticas na filosofia política de Hegel, e a discussão sobre elas é legítima — apenas não é a que Popper fez." },

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

/* ── indice-glicemico.js ───────────────────────────────────── */
CONTEUDOS["indice-glicemico"] = {
termo: "Índice glicêmico e resposta metabólica",
area: "Nutrição",
subtitulo: "Um número que classifica alimentos pela velocidade com que elevam a glicemia. A definição é precisa, a medição é padronizada, e mesmo assim o mesmo pão branco medido em 63 pessoas produziu valores que vão de 35 a 103. Um caso exemplar de leitura crítica de evidência nutricional.",
prerequisitos: [
  "Saber que carboidratos elevam a glicose no sangue e que a insulina a reduz. Nada além disso.",
  "Para o aprofundamento: entender que 'área sob a curva' significa acumular um efeito ao longo do tempo."
],
conexoes: [
  { termo: "Por que estudos de nutrição se contradizem", relacao: "O índice glicêmico é um caso concreto das limitações metodológicas gerais da epidemiologia nutricional." },
  { termo: "NNT e risco relativo versus absoluto", relacao: "Reduções de HbA1c precisam ser lidas em magnitude absoluta e relevância clínica, não apenas em significância estatística." },
  { termo: "Teorema de Bayes", relacao: "Um teste com alta variabilidade intraindividual tem baixo poder informativo — o mesmo raciocínio de razão de verossimilhança se aplica a biomarcadores." },
  { termo: "Alimentos ultraprocessados e a classificação NOVA", relacao: "Duas tentativas concorrentes de reduzir a complexidade alimentar a uma classificação operacional, com forças e fraquezas diferentes." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Em 1981, David Jenkins e colaboradores publicaram no <em>American Journal of Clinical Nutrition</em> uma ideia com aparência de avanço claro: em vez de tratar carboidratos como uma categoria única, medir experimentalmente quanto cada alimento eleva a glicemia.<sup class="cit"><a href="#f1">1</a></sup> Nascia o índice glicêmico.</p>

<h3>Como se mede, exatamente</h3>

<p>O protocolo é rigoroso, e vale conhecê-lo porque quase todas as limitações vêm dele.</p>

<ul>
<li>Voluntários em jejum consomem uma porção do alimento contendo <strong>50 gramas de carboidrato disponível</strong> — não 50 g do alimento.</li>
<li>Mede-se a glicemia em intervalos ao longo de duas horas.</li>
<li>Calcula-se a <strong>área incremental sob a curva</strong> — o acúmulo de glicose acima do valor de jejum.</li>
<li>Divide-se pela área obtida com um alimento de referência (glicose pura, valor 100) na mesma pessoa.</li>
<li>Repete-se com dez ou mais pessoas e toma-se a média.</li>
</ul>

<figure class="figura">[[FIG:gi-curvas]]<figcaption>O índice glicêmico é a razão entre áreas, não entre picos. Dois alimentos com picos muito diferentes podem ter o mesmo índice se as curvas acumularem a mesma área em duas horas.</figcaption></figure>

<p>Convencionou-se classificar em baixo (≤55), médio (56–69) e alto (≥70).</p>

<h3>O primeiro problema: 50 g de carboidrato não é uma porção</h3>

<p>A melancia tem índice glicêmico alto, em torno de 72. Mas para ingerir 50 g de carboidrato de melancia seria preciso comer cerca de 700 gramas de polpa. Uma fatia normal quase não move a glicemia.</p>

<p>Para corrigir isso criou-se a <strong>carga glicêmica</strong>, que multiplica o índice pela quantidade de carboidrato efetivamente presente na porção:</p>

<div class="formula">
CG = IG × (gramas de carboidrato na porção) ÷ 100
<span class="leg">melancia: 72 × 11 ÷ 100 ≈ 8 — carga baixa, apesar do índice alto</span>
</div>

<p>Já aqui aparece uma lição: o índice glicêmico sozinho, sem a carga, produz recomendações erradas com regularidade. E é o índice, não a carga, que aparece em aplicativos e listas.</p>

<h3>O problema sério: o número não descreve quase ninguém</h3>

<p>Em 2016, Nirupa Matthan e colaboradores fizeram algo que a literatura anterior não tinha feito com esse rigor: mediram o índice glicêmico do mesmo pão branco, sob protocolo padronizado, em 63 adultos saudáveis, com repetições na mesma pessoa.<sup class="cit"><a href="#f2">2</a></sup></p>

<figure class="figura">[[FIG:gi-dispersao]]<figcaption>Cada ponto é uma pessoa. A média oficial — 62, classificação "médio" — descreve razoavelmente bem uma minoria dos participantes. O mesmo alimento foi simultaneamente de baixo, médio e alto índice glicêmico, dependendo de quem comeu.</figcaption></figure>

<p>Os resultados:</p>

<ul>
<li>Média de 62, que corresponde à classificação "médio".</li>
<li>Variação <strong>dentro da mesma pessoa</strong> em repetições: cerca de 20%.</li>
<li>Variação <strong>entre pessoas</strong>: cerca de 25%.</li>
<li>Valores individuais indo de 35 a 103 — cobrindo as três categorias inteiras.</li>
<li>22 participantes seriam classificados como "baixo", 23 como "intermediário" e 18 como "alto" para o mesmo pão.</li>
</ul>

<p>A conclusão dos autores foi direta: o índice glicêmico tem utilidade limitada como ferramenta para prever o efeito de um alimento sobre a glicemia, e é impraticável para rotulagem ou para diretrizes no nível individual.</p>

<div class="marca controverso">
<span class="rot">Como ler esse resultado com precisão</span>
<p>Isso não significa que o índice glicêmico seja uma invenção sem base. O conceito subjacente — alimentos diferem na velocidade de digestão e absorção — é fisiologicamente correto e bem estabelecido. O que o estudo mostra é que a <em>medida</em> tem ruído da mesma ordem de grandeza que o <em>sinal</em> que se quer detectar. Uma quantidade com essa relação sinal-ruído pode ser útil para comparar categorias amplas de alimentos e é inadequada para decidir entre dois itens específicos.</p>
</div>
` },

aprofundamento: { minutos: 15, html: `
<h3>Por que a variabilidade é tão grande</h3>

<p>As fontes de ruído são conhecidas e, em boa parte, incontroláveis:</p>

<div class="tabela-env">
<table>
<thead><tr><th>Fonte</th><th>Efeito</th></tr></thead>
<tbody>
<tr><td>Composição da refeição</td><td>Gordura e proteína retardam o esvaziamento gástrico e achatam a curva</td></tr>
<tr><td>Processamento e cocção</td><td>Macarrão al dente e macarrão bem cozido têm índices distintos; o mesmo vale para batata</td></tr>
<tr><td>Amido resistente</td><td>Arroz e batata resfriados após o cozimento retrogradam o amido e reduzem a resposta</td></tr>
<tr><td>Refeição anterior</td><td>O chamado 'efeito da segunda refeição': o que se comeu antes altera a resposta seguinte</td></tr>
<tr><td>Hora do dia</td><td>Sensibilidade à insulina é maior de manhã na maioria das pessoas</td></tr>
<tr><td>Exercício recente</td><td>Aumenta a captação muscular de glicose por horas, independentemente de insulina</td></tr>
<tr><td>Sono e estresse</td><td>Privação de sono reduz mensuravelmente a sensibilidade à insulina</td></tr>
<tr><td>Microbiota</td><td>Associada a diferenças de resposta; magnitude e causalidade em disputa</td></tr>
</tbody>
</table>
</div>

<p>Note que quase nenhuma dessas variáveis é controlada na vida real, e várias delas nem no laboratório. Um valor de tabela é uma média de médias sob condições que ninguém reproduz ao comer.</p>

<h3>A promessa da nutrição personalizada</h3>

<p>Se a resposta varia tanto entre pessoas, a saída óbvia seria personalizar. Em 2015, Zeevi e colaboradores publicaram na <em>Cell</em> um estudo com cerca de 800 participantes, monitoramento contínuo de glicose e um modelo de aprendizado de máquina que incorporava dados clínicos, antropométricos e de microbiota.<sup class="cit"><a href="#f3">3</a></sup></p>

<p>O modelo previa respostas glicêmicas individuais melhor que a contagem de carboidratos, e uma intervenção-piloto com dietas personalizadas mostrou melhora em relação a dietas convencionais. O trabalho é frequentemente citado como fundação da nutrição de precisão — e deu origem a uma indústria de serviços comerciais baseados em sensores contínuos de glicose.</p>

<div class="marca controverso">
<span class="rot">A crítica metodológica é séria</span>
<p>Uma crítica publicada no <em>AJCN</em> em 2024, sob o título "garbage in → garbage out", questiona a base do empreendimento a partir de um achado específico: Hengist e colaboradores mostraram que sensores contínuos de glicose fornecem respostas <strong>não confiáveis a refeições idênticas apresentadas em duplicata</strong> em adultos sem diabetes.<sup class="cit"><a href="#f4">4</a></sup> Se o instrumento de medida não reproduz o próprio resultado com a mesma refeição na mesma pessoa, um modelo treinado sobre esses dados está aprendendo, em parte, ruído. O argumento não refuta a ideia de personalização — mas coloca um ônus de prova sobre quem vende produtos baseados nela.</p>
</div>

<h3>O que os ensaios clínicos mostram</h3>

<p>Deixando de lado a medida e olhando o desfecho: dietas de baixo índice glicêmico melhoram algum resultado clínico?</p>

<p>Em diabetes tipo 2, revisões sistemáticas com meta-análise indicam redução de hemoglobina glicada da ordem de 0,3 a 0,5 ponto percentual em comparação com dietas de alto índice glicêmico. É um efeito real, estatisticamente consistente e clinicamente modesto: menor que o de vários medicamentos e menor que o obtido com perda de peso relevante.</p>

<p>Em prevenção de doença cardiovascular e em controle de peso na população geral, a evidência é mais fraca e menos consistente. Estudos observacionais mostram associações; ensaios randomizados mostram efeitos pequenos e frequentemente não significativos.</p>

<div class="marca consenso">
<span class="rot">Consenso razoável</span>
<p>Que dietas de baixo índice glicêmico produzem melhora modesta do controle glicêmico em pessoas com diabetes tipo 2 é aceito por diretrizes de várias sociedades. Que o índice glicêmico deva ser a base da orientação alimentar para a população geral não é aceito, e várias diretrizes optaram explicitamente por não usá-lo como critério central — justamente pela variabilidade da medida e pela confusão com outros atributos dos alimentos.</p>
</div>

<h3>O confundimento que quase invalida a interpretação causal</h3>

<p>Este é o ponto que um revisor levantaria primeiro. Alimentos de baixo índice glicêmico são, em larguíssima maioria, também alimentos ricos em fibras, minimamente processados, mais saciantes e com maior densidade de micronutrientes. Leguminosas, verduras, grãos integrais e frutas inteiras.</p>

<p>Quando um estudo observa melhor desfecho em quem come alimentos de baixo índice glicêmico, existem pelo menos quatro explicações concorrentes: a resposta glicêmica mais lenta, o teor de fibra, o menor grau de processamento, ou a saciedade maior que reduz a ingestão total. Essas variáveis andam juntas, e separá-las exige desenhos experimentais que raramente são executados — dietas isocalóricas com fibra controlada e diferença isolada de índice glicêmico.</p>
` },

extensao: { minutos: 30, html: `
<h3>Um exercício de leitura crítica sobre o próprio conceito</h3>

<p>Vale usar este caso como treino, porque a estrutura do problema se repete em quase toda a nutrição.</p>

<p>O conceito é fisiologicamente plausível? Sim: a velocidade de digestão e absorção varia entre alimentos, e picos glicêmicos maiores exigem resposta insulínica maior. Essa plausibilidade mecanística é o ponto mais forte do índice glicêmico.</p>

<p>A medida é confiável? Parcialmente. Coeficientes de variação de 20% dentro da mesma pessoa e 25% entre pessoas significam que o valor de tabela carrega incerteza comparável à diferença entre as categorias que ele define.</p>

<p>A medida prevê o desfecho que importa? Modestamente, e num subgrupo específico. Glicemia pós-prandial é um marcador intermediário; o que interessa clinicamente são eventos, mortalidade e qualidade de vida, e marcadores intermediários frequentemente respondem sem que os desfechos duros acompanhem.</p>

<p>O efeito é atribuível ao mecanismo proposto? Difícil de afirmar, pelo confundimento com fibra, processamento e saciedade.</p>

<div class="marca consenso">
<span class="rot">Uma armadilha geral</span>
<p>A sequência "mecanismo plausível → marcador que se move → conclusão sobre saúde" é uma das rotas mais confiáveis para erro em ciência biomédica. Há casos célebres em que o marcador melhorou e o desfecho piorou: antiarrítmicos que suprimiam arritmias e aumentaram a mortalidade no ensaio CAST; terapia hormonal que melhorava perfil lipídico e não reduziu eventos cardiovasculares nos ensaios randomizados. Plausibilidade mecanística é condição para investigar, nunca substituto de desfecho medido.</p>
</div>

<h3>Onde o índice glicêmico continua sendo útil</h3>

<p>Rejeitá-lo por completo seria o erro simétrico. Usos defensáveis:</p>

<ul>
<li>Para comparar categorias amplas de alimentos: que leguminosas produzem resposta mais lenta que pão branco é verdadeiro, replicável e maior que o ruído da medida.</li>
<li>Como ferramenta educacional, explica de forma tangível por que "carboidrato" não é uma categoria útil e por que a forma física do alimento importa (suco de laranja e laranja inteira não são equivalentes).</li>
<li>No manejo individual com medição própria: uma pessoa com diabetes que mede a própria glicemia identifica suas respostas particulares. Aqui o valor de tabela é irrelevante; o que conta é a medição individual.</li>
<li>Em contextos específicos, como ajuste fino de carboidrato em esporte e em diabetes tipo 1 com contagem, onde a resposta é monitorada de perto.</li>
</ul>

<h3>O que a evidência sustenta como orientação prática</h3>

<p>A convergência de diretrizes de diferentes países aponta para recomendações que são, notavelmente, independentes do índice glicêmico:</p>

<ol>
<li>A unidade de evidência mais robusta em nutrição é o padrão alimentar completo, não o índice de um alimento isolado.</li>
<li>A forma física do alimento importa: grão inteiro versus farinha, fruta inteira versus suco. A estrutura da matriz alimentar altera a resposta metabólica de forma consistente, mais que a variabilidade do índice.</li>
<li>A fibra tem evidência mais sólida que o índice glicêmico: a relação entre ingestão de fibras e desfechos cardiometabólicos é mais consistente entre estudos, e a medida é muito mais estável.</li>
<li>O contexto da refeição altera tudo. Combinar carboidrato com proteína, gordura ou fibra achata a curva de forma previsível, o que torna o índice de um alimento isolado ainda menos informativo sobre o que acontece numa refeição real.</li>
</ol>

<div class="marca emergente">
<span class="rot">O que é emergente e ainda não decidido</span>
<p>Uso de sensores contínuos de glicose por pessoas sem diabetes é um mercado em expansão rápida, com promessa de otimização metabólica individualizada. O que se sabe: os aparelhos medem glicose intersticial com atraso e erro em relação à glicemia plasmática, e a reprodutibilidade em refeições duplicadas é baixa em pessoas sem diabetes. O que não se sabe: se decisões alimentares guiadas por essas leituras melhoram qualquer desfecho de saúde em pessoas metabolicamente saudáveis. Não há ensaio randomizado com desfecho duro respondendo a isso. Um consumidor bem informado deveria tratar essa categoria de produto como hipótese comercial, não como intervenção validada.</p>
</div>

<h3>O que segurar deste caso</h3>

<p>Três coisas, e a terceira vale muito além da nutrição.</p>

<p>Primeira: o índice glicêmico é um conceito fisiologicamente correto cuja medida tem ruído da ordem do sinal. Serve para comparar categorias amplas, não para escolher entre dois alimentos específicos.</p>

<p>Segunda: o efeito clínico documentado é modesto e concentrado em diabetes tipo 2, com confundimento substancial por fibra e processamento.</p>

<p>Terceira, e a mais transferível: <strong>a pergunta decisiva sobre qualquer medida não é se ela é precisa, mas se a variabilidade dela é menor que a diferença que se quer detectar</strong>. Um instrumento com coeficiente de variação de 20% não consegue distinguir dois alimentos que diferem 15% — por mais rigoroso que seja o protocolo, por mais bem publicada que esteja a tabela, e por mais plausível que seja o mecanismo. Essa pergunta se aplica igualmente a biomarcadores, a escalas psicométricas, a métricas de desempenho e a qualquer indicador que alguém proponha usar para decidir alguma coisa.</p>
` }
},

flashcards: [
  { f: "Como o índice glicêmico é medido?", v: "Área incremental sob a curva glicêmica em 2 horas após ingerir 50 g de carboidrato disponível do alimento, dividida pela área do alimento de referência (glicose = 100) na mesma pessoa, em média de 10 ou mais voluntários." },
  { f: "Qual é a diferença entre índice glicêmico e carga glicêmica?", v: "O índice usa uma porção fixa de 50 g de carboidrato, que pode ser irreal. A carga corrige pela quantidade efetivamente presente: CG = IG × carboidrato da porção ÷ 100. Melancia tem IG ~72 e CG ~8." },
  { f: "O que Matthan et al. (2016) encontraram ao medir o IG do mesmo pão branco em 63 pessoas?", v: "Média 62, mas variação de ~20% dentro da mesma pessoa e ~25% entre pessoas, com valores individuais de 35 a 103. O mesmo pão foi classificado como baixo para 22, intermediário para 23 e alto para 18 participantes." },
  { f: "Por que a variabilidade do IG é tão grande?", v: "Composição da refeição, cocção, amido resistente após resfriamento, efeito da refeição anterior, hora do dia, exercício recente, sono, estresse e microbiota. Quase nenhuma dessas variáveis é controlada na vida real." },
  { f: "Qual é a crítica central à nutrição personalizada baseada em sensores contínuos de glicose?", v: "Que os sensores fornecem respostas não reprodutíveis a refeições idênticas apresentadas em duplicata em adultos sem diabetes (Hengist et al.). Modelos treinados sobre dados assim aprendem, em parte, ruído." },
  { f: "Qual é o efeito clínico documentado de dietas de baixo IG?", v: "Redução de HbA1c da ordem de 0,3 a 0,5 ponto percentual em diabetes tipo 2 — real, consistente e modesto. Em prevenção cardiovascular e controle de peso na população geral, a evidência é fraca e inconsistente." },
  { f: "Qual é o principal confundimento na interpretação causal do IG?", v: "Alimentos de baixo IG são também ricos em fibra, minimamente processados e mais saciantes. Melhores desfechos podem vir de qualquer um desses atributos, e separá-los exige dietas isocalóricas com fibra controlada." },
  { f: "Por que 'mecanismo plausível + marcador que melhora' não basta?", v: "Porque há casos célebres em que o marcador melhorou e o desfecho piorou — antiarrítmicos no ensaio CAST, terapia hormonal e perfil lipídico. Plausibilidade mecanística justifica investigar, não concluir." },
  { f: "Em que situações o índice glicêmico continua útil?", v: "Comparação entre categorias amplas de alimentos, uso educacional para mostrar que 'carboidrato' não é categoria útil, e manejo individual com medição própria — caso em que o valor de tabela é irrelevante." },
  { f: "Qual é a pergunta decisiva sobre qualquer medida, ilustrada por este caso?", v: "Não se ela é precisa, mas se sua variabilidade é menor que a diferença que se quer detectar. Um instrumento com CV de 20% não distingue alimentos que diferem 15%, por melhor que seja o protocolo." }
],

prova: [
  { camada: "nucleo",
    q: "A melancia tem índice glicêmico alto (~72), mas carga glicêmica baixa (~8). O que isso significa?",
    alts: [
      "Que as duas medidas se contradizem e uma delas está errada.",
      "Que o carboidrato da melancia é absorvido rapidamente, mas há tão pouco dele numa porção real que o efeito sobre a glicemia é pequeno.",
      "Que a melancia deve ser evitada por diabéticos.",
      "Que o índice glicêmico da melancia foi medido com metodologia inadequada."
    ],
    correta: 1,
    porque: "O IG usa uma porção fixa de 50 g de carboidrato, o que exigiria cerca de 700 g de polpa. A carga corrige pela quantidade real da porção. É o exemplo canônico de por que usar o índice sem a carga gera recomendações erradas — e é justamente o índice, não a carga, que aparece em aplicativos." },

  { camada: "nucleo",
    q: "No estudo de Matthan et al. (2016), o índice glicêmico do mesmo pão branco medido em 63 pessoas variou de 35 a 103. Qual é a implicação mais precisa?",
    alts: [
      "O conceito de índice glicêmico não tem base fisiológica.",
      "O estudo foi mal conduzido, já que o protocolo padronizado deveria eliminar a variação.",
      "A medida tem ruído da mesma ordem do sinal, o que a torna inadequada para decidir entre alimentos específicos no nível individual.",
      "Pessoas diferentes digerem pão branco de formas fundamentalmente distintas por causa da genética."
    ],
    correta: 2,
    porque: "A distinção importa: o conceito subjacente é fisiologicamente correto. O que falha é a medida como instrumento de decisão individual, porque a variabilidade cobre as três categorias de classificação. Atribuir a variação exclusivamente à genética também extrapola — o estudo mostra variação alta dentro da mesma pessoa, não apenas entre pessoas." },

  { camada: "nucleo",
    q: "O índice glicêmico é calculado a partir de qual grandeza?",
    alts: [
      "O valor máximo de glicemia atingido após a refeição.",
      "A área incremental sob a curva de glicemia em duas horas, relativa a um alimento de referência.",
      "O tempo até a glicemia voltar ao valor de jejum.",
      "A quantidade de insulina liberada após a refeição."
    ],
    correta: 1,
    porque: "É razão entre áreas, não entre picos. Dois alimentos com picos bem diferentes podem ter índices iguais se acumularem a mesma área em duas horas. A resposta insulínica é uma grandeza relacionada mas distinta — o índice insulinêmico é outra medida, que não coincide sempre com o glicêmico." },

  { camada: "aprofundamento",
    q: "Arroz cozido e depois resfriado produz resposta glicêmica menor que arroz recém-cozido. Por quê?",
    alts: [
      "Porque o resfriamento destrói parte do amido.",
      "Porque parte do amido retrograda e passa a se comportar como amido resistente, menos disponível para digestão.",
      "Porque o arroz frio é mastigado mais lentamente.",
      "Porque a temperatura baixa reduz a atividade da amilase salivar."
    ],
    correta: 1,
    porque: "A retrogradação reorganiza as cadeias de amido numa estrutura menos acessível às enzimas digestivas, aumentando a fração de amido resistente. É um dos vários fatores de preparo que fazem o valor de tabela de um alimento não corresponder ao que acontece no prato real." },

  { camada: "aprofundamento",
    q: "Qual é a crítica central do artigo 'garbage in → garbage out' à nutrição personalizada por predição glicêmica?",
    alts: [
      "Que os modelos de aprendizado de máquina usados são simples demais.",
      "Que sensores contínuos de glicose não reproduzem respostas a refeições idênticas em duplicata em adultos sem diabetes, de modo que os modelos treinam parcialmente sobre ruído.",
      "Que a microbiota não tem relação alguma com resposta glicêmica.",
      "Que os estudos não incluíram participantes com diabetes."
    ],
    correta: 1,
    porque: "É uma crítica sobre a qualidade dos dados de entrada, e por isso mais fundamental do que uma crítica ao modelo. Se o instrumento não reproduz o próprio resultado sob a mesma condição, o teto de desempenho de qualquer modelo treinado sobre ele fica limitado. Isso não refuta a personalização — desloca o ônus da prova." },

  { camada: "aprofundamento",
    q: "Um estudo observacional encontra menor risco cardiovascular em pessoas que consomem mais alimentos de baixo índice glicêmico. Qual é o confundimento mais forte?",
    alts: [
      "Essas pessoas podem ter maior renda.",
      "Alimentos de baixo IG são também ricos em fibra, minimamente processados e mais saciantes — qualquer um desses atributos pode explicar o desfecho.",
      "O índice glicêmico não foi medido nos próprios participantes.",
      "A glicemia pós-prandial não foi aferida."
    ],
    correta: 1,
    porque: "As variáveis andam juntas quase perfeitamente: leguminosas, verduras, grãos integrais e frutas inteiras são simultaneamente de baixo IG, ricas em fibra e pouco processadas. Separar as explicações exige ensaios isocalóricos com fibra controlada e diferença isolada de IG — desenho raramente executado. Renda é confundimento real, porém menos específico." },

  { camada: "extensao",
    q: "Por que a sequência 'mecanismo plausível → marcador melhora → conclusão sobre saúde' é perigosa?",
    alts: [
      "Porque mecanismos fisiológicos raramente são compreendidos corretamente.",
      "Porque há casos documentados em que o marcador melhorou e o desfecho clínico piorou — antiarrítmicos no ensaio CAST, por exemplo.",
      "Porque marcadores intermediários não podem ser medidos com precisão.",
      "Porque a plausibilidade mecanística é sempre construída depois dos dados."
    ],
    correta: 1,
    porque: "O ensaio CAST é o caso clássico: os fármacos suprimiam arritmias, o marcador escolhido, e aumentaram a mortalidade. A lição é geral e vale muito além da nutrição — plausibilidade mecanística é condição para investigar, nunca substituto de desfecho medido em ensaio adequado." },

  { camada: "extensao",
    q: "Qual das orientações abaixo é mais sustentada pela evidência atual, segundo a convergência de diretrizes?",
    alts: [
      "Escolher alimentos consultando o índice glicêmico de tabelas.",
      "Priorizar padrão alimentar completo, forma física do alimento e ingestão de fibras — critérios com evidência mais consistente e medidas mais estáveis que o índice glicêmico.",
      "Usar sensor contínuo de glicose para otimizar cada refeição, mesmo sem diabetes.",
      "Eliminar todos os carboidratos de alto índice glicêmico da dieta."
    ],
    correta: 1,
    porque: "A unidade de evidência mais robusta em nutrição é o padrão alimentar, não o índice de um alimento isolado — e a relação entre fibra e desfechos cardiometabólicos é mais consistente e baseada em medida muito mais estável. Sensores em pessoas sem diabetes não têm ensaio com desfecho duro que os sustente." },

  { camada: "extensao",
    q: "Qual é a pergunta metodológica mais transferível que este caso ensina sobre qualquer medida?",
    alts: [
      "Se a medida foi publicada em revista de alto fator de impacto.",
      "Se a variabilidade da medida é menor que a diferença que se pretende detectar com ela.",
      "Se o mecanismo fisiológico subjacente é conhecido.",
      "Se o protocolo de medição é padronizado internacionalmente."
    ],
    correta: 1,
    porque: "Protocolo padronizado e mecanismo conhecido são ambos verdadeiros para o índice glicêmico e não bastam. Um instrumento com coeficiente de variação de 20% não distingue alimentos que diferem 15%, por mais rigoroso que seja o método. A mesma pergunta se aplica a biomarcadores, escalas psicométricas e qualquer indicador usado para decidir algo." }
],

fontes: [
  { n: 1, tipo: "fonte primária", ref: "Jenkins, D. J. A. et al. 'Glycemic index of foods: a physiological basis for carbohydrate exchange'. <em>American Journal of Clinical Nutrition</em> 34(3):362–366, 1981.", url: "https://doi.org/10.1093/ajcn/34.3.362" },
  { n: 2, tipo: "artigo", ref: "Matthan, N. R. et al. 'Estimating the reliability of glycemic index values and potential sources of methodological and biological variability'. <em>American Journal of Clinical Nutrition</em> 104(4):1004–1013, 2016.", url: "https://pubmed.ncbi.nlm.nih.gov/27604773/" },
  { n: 3, tipo: "artigo", ref: "Zeevi, D. et al. 'Personalized Nutrition by Prediction of Glycemic Responses'. <em>Cell</em> 163(5):1079–1094, 2015.", url: "https://www.cell.com/fulltext/S0092-8674(15)01481-6" },
  { n: 4, tipo: "artigo", ref: "'Personalized nutrition by prediction of glycemic responses: garbage in → garbage out'. <em>American Journal of Clinical Nutrition</em>, 2024 — crítica baseada na baixa reprodutibilidade de sensores contínuos em refeições duplicadas (Hengist et al.).", url: "https://pubmed.ncbi.nlm.nih.gov/39755431/" },
  { n: 5, tipo: "artigo", ref: "Hengist, A. et al. 'Imprecision nutrition? Intraindividual variability of glucose responses to duplicate presented meals in adults without diabetes'. <em>American Journal of Clinical Nutrition</em>, 2024.", url: "https://ajcn.nutrition.org/article/S0002-9165(24)00814-1/abstract" },
  { n: 6, tipo: "crítica", ref: "Wolever, T. M. S. 'Personalized nutrition by prediction of glycaemic responses: fact or fantasy?'. <em>European Journal of Clinical Nutrition</em> 70:411–413, 2016.", url: "https://www.nature.com/articles/ejcn201631" }
]
};

/* ── quatro-forcas.js ──────────────────────────────────────── */
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

/* ── sapir-whorf.js ────────────────────────────────────────── */
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

<p>Isso não é detalhe bibliográfico. A hipótese entrou na cultura já como uma caricatura, e é essa caricatura que a maioria das pessoas conhece, inclusive muitos dos que a defendem.</p>

<h3>As duas versões</h3>

<p><strong>Determinismo linguístico (versão forte):</strong> a língua determina o pensamento; o que sua língua não codifica, você não pode pensar. Categorias linguísticas seriam prisões cognitivas.</p>

<p><strong>Relatividade linguística (versão fraca):</strong> a língua influencia certos processos cognitivos, em particular categorização, memória e atenção, tornando mais fáceis ou mais habituais certas discriminações.</p>

<p>A versão forte está morta, e por razões simples. Falantes aprendem conceitos que sua língua não codifica, o tempo todo. Línguas incorporam palavras novas quando precisam. Bebês categorizam antes de falar. E a própria formulação é autorrefutante: se a língua determinasse os limites do pensável, seria impossível descrever, em português, um conceito que o português não tem — coisa que este parágrafo acabou de fazer.</p>

<div class="marca consenso">
<span class="rot">Consenso estabelecido</span>
<p>Nenhum linguista ou psicólogo cognitivo relevante defende hoje o determinismo linguístico forte. Quando um texto de divulgação apresenta "a hipótese Sapir-Whorf" como controvérsia viva entre defensores e críticos da versão forte, ele está descrevendo um debate encerrado há décadas. A discussão real é sobre a magnitude e o alcance dos efeitos fracos.</p>
</div>

<h3>O mito das palavras para neve</h3>

<p>A afirmação de que os inuítes têm dezenas ou centenas de palavras para neve é o exemplo mais citado e é falsa em quase todas as suas versões.</p>

<p>A história foi rastreada por Laura Martin e popularizada por Geoffrey Pullum em <em>The Great Eskimo Vocabulary Hoax</em>.<sup class="cit"><a href="#f1">1</a></sup> Boas menciona quatro raízes em 1911; a cada recontagem o número cresceu, chegando a "quatrocentas" em jornais dos anos 1980, sem nenhuma fonte nova. Ninguém foi conferir.</p>

<p>Há dois problemas adicionais. Línguas inuítes são polissintéticas: formam palavras longas por aglutinação, de modo que "contar palavras" é uma operação sem significado claro: em português também dizemos neve fresca, neve compactada, neve granulada. E mesmo que o número fosse alto, isso mostraria apenas que pessoas desenvolvem vocabulário para o que lhes é relevante, o que é trivial e não diz nada sobre pensamento.</p>

<h3>O experimento que virou emblema</h3>

<p>O russo não tem uma palavra genérica para "azul": distingue obrigatoriamente <em>sinij</em> (azul-escuro) de <em>goluboj</em> (azul-claro), como o português distingue vermelho de rosa.</p>

<p>Winawer e colaboradores publicaram em 2007 um experimento no PNAS.<sup class="cit"><a href="#f2">2</a></sup> Participantes viam três quadrados azuis e apontavam qual dos dois de baixo era idêntico ao de cima. Falantes de russo foram mais rápidos quando os dois tons caíam em categorias linguísticas diferentes. Falantes de inglês não mostraram esse padrão. E a vantagem russa desaparecia sob interferência verbal, sugerindo mediação linguística.</p>

<figure class="figura">[[FIG:whorf-fronteira]]<figcaption>O desenho experimental e o que aconteceu depois. O resultado de 2007 tornou-se a evidência mais citada em favor da relatividade linguística. A replicação de 2020 conta outra história.</figcaption></figure>

<div class="marca controverso">
<span class="rot">O achado não se replicou</span>
<p>Um estudo publicado na <em>Cognition</em> em 2020 tentou reproduzir o efeito e <strong>não encontrou a vantagem de tempo de reação</strong> na fronteira sinij/goluboj, nem em monolíngues nem em bilíngues.<sup class="cit"><a href="#f3">3</a></sup> Os autores concluem que os "azuis russos" são menos bem estruturados do que se supunha: a fronteira mostrou-se instável e sensível a manipulações de frequência, ao contrário da fronteira azul/verde. O efeito categórico apareceu em tarefas que exigiam categorização explícita, e não em discriminação perceptiva pura.</p>
</div>

<p>Vale reter a formulação dos próprios autores: os efeitos da língua sobre a percepção "são mais fortes em tarefas que promovem categorização e mais fracos ou inexistentes em tarefas que não a exigem explicitamente". Isso não elimina a relatividade linguística, mas desloca substancialmente o que ela afirma.</p>
` },

aprofundamento: { minutos: 15, html: `
<h3>Onde a evidência é mais forte: espaço</h3>

<p>O caso mais robusto em favor de efeitos linguísticos reais não é cor: é referência espacial.</p>

<p>A maioria das línguas usa referenciais <strong>relativos</strong> (esquerda, direita, à frente, atrás) que dependem da orientação do corpo do falante. Algumas línguas usam referenciais <strong>absolutos</strong>: pontos cardeais, ou eixos geográficos como "montanha acima" e "rio abaixo". Em Guugu Yimithirr, falado no norte da Austrália, não existem palavras para esquerda e direita: uma xícara está a nordeste da colher, e o falante diz isso naturalmente.</p>

<p>Stephen Levinson e colaboradores documentaram que falantes dessas línguas mantêm orientação absoluta permanente e precisa, mesmo em ambientes fechados, em veículos e após deslocamentos complexos.<sup class="cit"><a href="#f4">4</a></sup> E o efeito não fica na fala: em tarefas <strong>não verbais</strong> de rotação e reconstrução de arranjos, esses falantes resolvem o problema em coordenadas absolutas, enquanto falantes de línguas relativas usam coordenadas centradas no corpo.</p>

<div class="marca consenso">
<span class="rot">Por que este caso é mais convincente</span>
<p>Três razões metodológicas. Primeira: o efeito aparece em tarefas não linguísticas, o que enfraquece a explicação de que é apenas estratégia verbal. Segunda: os tamanhos de efeito são grandes e comportamentalmente visíveis, não diferenças de dezenas de milissegundos. Terceira: foi replicado em populações independentes em vários continentes. Compare com o caso da cor (efeitos pequenos, dependentes de tarefa, com replicação instável) e a diferença de qualidade de evidência fica clara.</p>
</div>

<div class="marca controverso">
<span class="rot">A objeção da direção causal</span>
<p>Mesmo aqui, resta uma dúvida séria: a língua causa o hábito cognitivo, ou ambos derivam do ambiente e da prática cultural? Comunidades com referencial absoluto vivem tipicamente em terreno aberto com marcos geográficos estáveis, e a navegação é parte da vida diária. A língua pode ser consequência da prática, não causa do modo de pensar. Separar essas hipóteses exigiria variação natural entre língua e ecologia que raramente existe. Isso torna a inferência causal genuinamente difícil, não apenas incerta.</p>
</div>

<h3>Um efeito robusto e um caso mal contado</h3>

<p><strong>Gênero gramatical.</strong> Falantes de línguas com gênero atribuem adjetivos correlacionados ao gênero da palavra: "ponte" é feminina em alemão e masculina em espanhol, e falantes descrevem pontes com adjetivos estereotipicamente correspondentes. O efeito é replicável, mas há discussão sobre quanto depende de a tarefa ser conduzida em inglês, forçando tradução, o que introduz ativação linguística explícita.</p>

<p><strong>Números em pirahã.</strong> A língua pirahã, na Amazônia, teria apenas termos para "um", "dois" e "muitos", ou, segundo análise posterior, apenas termos relativos de quantidade. Peter Gordon relatou em 2004 que falantes falhavam em tarefas de correspondência exata acima de três, e o caso foi amplamente divulgado como demonstração de determinismo linguístico.</p>

<div class="marca controverso">
<span class="rot">O que esse caso realmente mostra</span>
<p>Trabalhos posteriores complicam a leitura simples. Frank e colaboradores (2008) mostraram que os pirahã executam bem tarefas de correspondência um-a-um; o que falta é a capacidade de <em>memorizar</em> cardinalidades exatas sem rótulos: é uma tese sobre ferramentas de memória, não sobre limites do pensamento. Some-se a isso que praticamente toda a documentação da língua vem de um único pesquisador, cujas afirmações teóricas mais amplas são contestadas por outros linguistas de campo. É um caso em que a base empírica é fina demais para sustentar o peso que lhe foi atribuído.</p>
</div>

<h3>Os quatro problemas metodológicos recorrentes</h3>

<ol>
<li><strong>Confundir competência e desempenho.</strong> Uma tarefa mais lenta não é uma tarefa impossível. Efeitos de 30 milissegundos são interessantes e não indicam limite cognitivo.</li>
<li><strong>Confundir língua e cultura.</strong> Grupos que falam línguas diferentes também diferem em escolaridade, prática, ambiente e economia. Isolar o efeito da língua exige controles que raramente existem.</li>
<li><strong>Direção causal indeterminada.</strong> Falantes de línguas com muitos termos para neve podem tê-los porque neve importa, não porque pensam de modo diferente por causa deles.</li>
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
<p>Um estudo de 2013 relatou que falantes de línguas que não marcam gramaticalmente o futuro poupam mais e cuidam melhor da saúde, e o resultado teve enorme repercussão. Reanálises posteriores mostraram que línguas não são observações independentes: elas se agrupam por famílias e por proximidade geográfica, e quando se corrige a estrutura filogenética e o parentesco cultural, a associação enfraquece drasticamente ou desaparece. É o problema de Galton, formulado na antropologia no século XIX e redescoberto periodicamente. Vale como alerta geral para qualquer correlação entre traço linguístico e comportamento agregado.</p>
</div>

<h3>Por que a hipótese é tão atraente</h3>

<p>Vale examinar isso, porque a resposta é mais interessante que a hipótese.</p>

<p>Ela promete explicar diferenças culturais por um mecanismo único e elegante. Cria a impressão gratificante de que aprender uma língua abre um modo de pensar inacessível de outra forma. E é praticamente inverificável em conversa: qualquer exemplo pontual parece confirmá-la, porque o interlocutor raramente tem em mãos o contraexemplo.</p>

<p>Esse é o perfil típico de uma ideia que se propaga bem independentemente de sua base empírica: alto valor narrativo, baixo custo de verificação, e confirmação aparente disponível em qualquer conversa. Reconhecer esse perfil é uma habilidade transferível: aparece igualmente em neurociência popular, em nutrição e em teorias de gestão.</p>

<h3>A posição defensável hoje</h3>

<p>Uma síntese razoável do que a evidência sustenta:</p>

<p><strong>A língua não determina o pensamento.</strong> Nenhum conceito é impensável por falta de palavra; conceitos novos são aprendidos e nomeados quando necessário.</p>

<p><strong>A língua torna certas distinções obrigatórias.</strong> Esta é provavelmente a formulação mais precisa, e vem de Roman Jakobson: línguas diferem menos no que <em>podem</em> expressar do que no que <em>devem</em> expressar. Em português você não pode dizer "eu fui" sem marcar tempo; em mandarim, pode. Se você é obrigado a codificar algo toda vez que fala, é plausível que preste mais atenção nisso, e há evidência de que essa atenção habitual afeta memória e julgamento.</p>

<p><strong>Os efeitos são modestos, dependentes de tarefa e reversíveis.</strong> Aparecem em tempos de reação e em vieses de julgamento, não em capacidades. Somem sob interferência verbal em vários casos. Mudam quando a pessoa muda de língua ou de contexto.</p>

<p><strong>A direção causal raramente é estabelecida.</strong> Língua, cultura, ecologia e prática variam juntas, e desemaranhá-las exige desenhos que quase nunca estão disponíveis.</p>

<div class="marca emergente">
<span class="rot">Um desenvolvimento recente</span>
<p>Uma linha crescente de trabalho reformula a questão em termos de <em>pensar para falar</em> (Slobin): a língua não molda o pensamento em geral, mas organiza a atenção no momento em que se prepara um enunciado. Isso explicaria por que os efeitos aparecem em tarefas com componente verbal e somem sem ele. É uma reformulação mais modesta e mais testável (uma virtude) e vem acumulando suporte. Ainda não é consenso.</p>
</div>

<h3>Como avaliar qualquer afirmação whorfiana</h3>

<p>Cinco perguntas que resolvem a maior parte dos casos:</p>

<ol>
<li><strong>A tarefa é verbal ou não verbal?</strong> Efeitos que só aparecem em tarefas verbais podem ser estratégia de nomeação, não estrutura cognitiva.</li>
<li><strong>O efeito sobrevive à interferência verbal?</strong> Se ocupar a linguagem interna do participante elimina o efeito, ele era mediado por rótulos.</li>
<li><strong>Cultura e ambiente foram controlados?</strong> Ou os grupos diferem em tudo, e a língua é apenas a diferença mais visível?</li>
<li><strong>Qual é o tamanho do efeito?</strong> Dezenas de milissegundos são um achado. Não são uma prisão conceitual.</li>
<li><strong>Foi replicado por um grupo independente?</strong> Depois de 2020, esta pergunta deixou de ser opcional em qualquer área da psicologia. No caso mais famoso desta literatura, a resposta foi negativa.</li>
</ol>

<div class="marca consenso">
<span class="rot">O que segurar</span>
<p>A versão forte está morta e a versão fraca sobrevive com efeitos reais, modestos e desiguais entre domínios: sólidos em referência espacial, frágeis em cor. A formulação mais precisa não é que a língua limita o que se pode pensar, e sim que ela torna obrigatório prestar atenção a certas distinções toda vez que se fala. E o caso é um exemplo de algo mais geral: uma ideia com alto valor narrativo pode sobreviver décadas à erosão da evidência que originalmente a sustentava.</p>
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

/* ── temperamento-igual.js ─────────────────────────────────── */
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
  { termo: "Harmonia funcional e tensão-resolução", relacao: "O temperamento igual é o que torna possível modular livremente entre tonalidades — condição para a harmonia dos séculos XIX e XX." },
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
<span class="leg">a razão entre os dois é 1,01364 — cerca de 23,46 cents de excesso</span>
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
<span class="leg">um número irracional — nenhum intervalo, exceto a oitava, é uma razão de inteiros</span>
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
  { f: "O que é a coma pitagórica e quanto vale?", v: "A diferença entre doze quintas puras (3/2)¹² = 129,746 e sete oitavas 2⁷ = 128. Equivale a cerca de 23,46 cents — aproximadamente um quarto de semitom, claramente audível." },
  { f: "Por que o problema da afinação não tem solução?", v: "Porque 3 e 2 são primos entre si: nenhuma potência de 3/2 é igual a uma potência de 2. É impossibilidade aritmética, não limitação técnica." },
  { f: "Qual é a razão de frequência de um semitom no temperamento igual?", v: "A raiz duodécima de 2, aproximadamente 1,059463. É irracional, o que significa que nenhum intervalo além da oitava é uma razão de inteiros." },
  { f: "Quanto o temperamento igual erra na quinta e na terça maior?", v: "A quinta erra apenas −1,96 cents (praticamente inaudível). A terça maior erra +13,69 cents, claramente audível em acordes sustentados. O sistema sacrifica a terça para preservar a quinta." },
  { f: "O que é um cent e por que a escala é logarítmica?", v: "Um centésimo de semitom temperado, ou 1/1200 de oitava: cents = 1200·log₂(f₂/f₁). É logarítmica porque a percepção de altura o é — distâncias iguais correspondem a razões iguais, não a diferenças iguais de frequência." },
  { f: "O que se ganhou e o que se perdeu com o temperamento igual?", v: "Ganhou-se modulação irrestrita entre as 24 tonalidades, condição para o cromatismo do século XIX. Perdeu-se o caráter sonoro distinto de cada tonalidade, que existia nos temperamentos desiguais." },
  { f: "'O Cravo Bem Temperado' foi escrito para o temperamento igual?", v: "Não há evidência disso. 'Wohltemperiert' designa temperamentos desiguais em que todas as tonalidades são utilizáveis; temperamento igual era 'gleichschwebend'. Qual afinação Bach usava permanece sem consenso musicológico." },
  { f: "Por que pianos não são afinados em temperamento igual exato?", v: "Por causa da inarmonicidade: cordas reais têm rigidez e seus harmônicos não caem em múltiplos exatos. Afinadores esticam a escala — graves mais graves, agudos mais agudos — chegando a mais de 30 cents de desvio nos extremos." },
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
    porque: "É impossibilidade aritmética. (3/2)¹² = 129,746 enquanto 2⁷ = 128. A discrepância — a coma pitagórica — não decorre de imprecisão de instrumento nem de percepção: decorre de 3 e 2 serem primos entre si, e nenhum refinamento técnico a elimina." },

  { camada: "nucleo",
    q: "O que caracteriza o temperamento igual em relação aos sistemas anteriores?",
    alts: [
      "Ele elimina completamente o erro de afinação usando razões mais precisas.",
      "Ele divide a oitava em doze partes exatamente iguais, espalhando o erro uniformemente por todos os intervalos.",
      "Ele mantém puras as terças, sacrificando as quintas.",
      "Ele varia a afinação conforme a tonalidade da peça."
    ],
    correta: 1,
    porque: "Nenhum sistema elimina o erro — a impossibilidade é matemática. O temperamento igual escolhe distribuí-lo igualmente, de modo que nenhum intervalo fica puro (exceto a oitava) e nenhum fica intolerável. A última alternativa descreve os temperamentos desiguais, que é justamente o que ele substituiu." },

  { camada: "nucleo",
    q: "Qual foi a principal consequência musical da adoção do temperamento igual?",
    alts: [
      "Os instrumentos passaram a soar mais puros e consonantes.",
      "Tornou-se possível modular livremente entre todas as tonalidades, ao custo de perder o caráter sonoro distinto de cada uma.",
      "As terças passaram a soar melhor do que nos sistemas anteriores.",
      "A afinação deixou de precisar de manutenção periódica."
    ],
    correta: 1,
    porque: "É a troca central. Nos temperamentos desiguais, cada tonalidade tinha sonoridade própria porque o erro se distribuía de forma diferente. Uniformizar apagou essa diferença e liberou a modulação irrestrita — sem a qual o cromatismo de Chopin e Wagner seria impraticável." },

  { camada: "aprofundamento",
    q: "Um cent é definido como:",
    alts: [
      "Um hertz de diferença de frequência.",
      "Um centésimo de semitom temperado, ou 1/1200 de oitava, em escala logarítmica.",
      "Um centésimo da frequência da nota de referência.",
      "A menor diferença de altura perceptível pelo ouvido humano."
    ],
    correta: 1,
    porque: "A definição é logarítmica: cents = 1200·log₂(f₂/f₁). Isso é necessário porque a percepção de altura é aproximadamente logarítmica — 100 Hz de diferença são enormes no grave e imperceptíveis no agudo. O limiar de discriminação (5 a 6 cents em notas sustentadas para ouvintes treinados) é outra grandeza." },

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
    porque: "'Wohltemperiert' e 'gleichschwebend' são termos distintos para coisas distintas. Escrever nas 24 tonalidades demonstra que todas eram tocáveis — compatível tanto com temperamento igual quanto com vários desiguais. As propostas de Lehman, O'Donnell e Francis, todas baseadas no mesmo ornamento da folha de rosto, chegam a resultados diferentes." },

  { camada: "extensao",
    q: "Por que pianos são afinados com 'stretch' nas oitavas?",
    alts: [
      "Para compensar a coma pitagórica.",
      "Por tradição estética, sem justificativa física.",
      "Por causa da inarmonicidade: cordas reais têm rigidez, e seus harmônicos não caem em múltiplos exatos da fundamental.",
      "Para que o instrumento soe mais alto em salas grandes."
    ],
    correta: 2,
    porque: "É um efeito físico das cordas reais. Para que os harmônicos das notas graves batam com as fundamentais das agudas, os extremos são esticados — mais de 30 cents num piano de cauda. Consequência interessante: a afinação correta depende do instrumento específico, medido pelo afinador, e não de uma tabela universal." },

  { camada: "extensao",
    q: "Sobre o estudo com os Tsimane' e a universalidade da preferência por consonância, qual é a leitura mais defensável?",
    alts: [
      "Prova definitivamente que a preferência por consonância é inteiramente cultural.",
      "Prova que a preferência é biológica, já que os participantes distinguiram os estímulos.",
      "Sugere que a preferência é modulada por exposição, enquanto a capacidade de discriminar razões simples parece ter base perceptiva — com ressalvas de amostra e metodologia ainda em discussão.",
      "É irrelevante porque foi conduzido fora de laboratório."
    ],
    correta: 2,
    porque: "Distinguir 'discriminar' de 'preferir' é o ponto. Os participantes ouviram a diferença sem manifestar preferência, o que aponta para modulação cultural da valoração e não da percepção. A amostra pequena e as dificuldades de tradução de tarefas justificam cautela — descartar o estudo ou tratá-lo como prova definitiva são os dois erros simétricos." }
],

fontes: [
  { n: 1, tipo: "livro", ref: "Barbour, J. M. <em>Tuning and Temperament: A Historical Survey</em>. Michigan State College Press, 1951 (reed. Dover). Levantamento histórico de referência sobre sistemas de afinação.", url: "" },
  { n: 2, tipo: "livro", ref: "Duffin, R. W. <em>How Equal Temperament Ruined Harmony (and Why You Should Care)</em>. W. W. Norton, 2007.", url: "" },
  { n: 3, tipo: "artigo", ref: "'The Ongoing Quest for Bach's Temperament'. <em>The Juilliard Journal</em> — panorama das propostas de Lehman (2005), O'Donnell (2006) e Francis (2007) e do estado não consensual da questão.", url: "https://journal.juilliard.edu/journal/ongoing-quest-bachs-temperament" },
  { n: 4, tipo: "livro", ref: "Sethares, W. A. <em>Tuning, Timbre, Spectrum, Scale</em>. 2ª ed., Springer, 2005. Relação formal entre espectro do instrumento e escala consonante, incluindo tradições não ocidentais.", url: "" },
  { n: 5, tipo: "artigo", ref: "McDermott, J. H., Schultz, A. F., Undurraga, E. A. &amp; Godoy, R. A. 'Indifference to dissonance in native Amazonians reveals cultural variation in music perception'. <em>Nature</em> 535:547–550, 2016.", url: "https://doi.org/10.1038/nature18635" },
  { n: 6, tipo: "livro", ref: "Isacoff, S. <em>Temperamento: Como a Música se Tornou um Campo de Batalha</em>. Record, 2001. História acessível da disputa sobre afinação, com viés declaradamente favorável ao temperamento igual.", url: "" }
]
};

/* ── tragedia-comuns.js ────────────────────────────────────── */
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

<p>A conta que ele faz é a seguinte: o benefício do animal adicional (sua carne, seu leite) é inteiramente dele. O custo, um pouco mais de pasto degradado, é dividido entre todos. Se há vinte pastores, ele arca com um vinte avos do prejuízo e fica com a totalidade do lucro. A decisão racional é clara: acrescentar o animal.</p>

<p>E é clara para todos os pastores, simultaneamente. Cada um acrescenta. O pasto colapsa. Hardin: "A ruína é o destino para o qual todos os homens correm, cada um perseguindo seu próprio interesse numa sociedade que acredita na liberdade dos bens comuns. A liberdade num bem comum traz a ruína para todos."</p>

<figure class="figura">[[FIG:comuns-matriz]]<figcaption>A estrutura de incentivos em sua forma mais simples. Explorar é a melhor resposta individual qualquer que seja a escolha do outro, e o resultado conjunto é pior para ambos do que a cooperação que nenhum dos dois consegue escolher sozinho.</figcaption></figure>

<h3>Por que o argumento é tão convincente</h3>

<p>Porque não depende de ninguém ser ganancioso, mal-intencionado ou estúpido. Ele funciona com agentes perfeitamente racionais e até com agentes de boa-fé. Basta que o benefício seja privado e o custo, socializado. Essa robustez explica por que o argumento se aplica a pesca, desmatamento, aquíferos, resistência a antibióticos, congestionamento urbano e emissões de carbono.</p>

<p>Hardin extraiu daí uma conclusão política forte: como a persuasão moral não altera a estrutura de incentivos, a única saída seria a coerção mútua mutuamente acordada (regulação estatal) ou a privatização, que internaliza o custo em quem toma a decisão. Estado ou mercado, sem terceira via.</p>

<h3>O que Elinor Ostrom encontrou</h3>

<p>Ostrom fez algo que o debate teórico não estava fazendo: foi verificar. Ao longo de décadas, ela e colaboradores documentaram e compararam centenas de sistemas reais de recursos compartilhados: sistemas de irrigação nas Filipinas e na Espanha, pastagens comunais na Suíça, florestas no Japão e no Nepal, pesqueiras na Turquia e no Sri Lanka.<sup class="cit"><a href="#f2">2</a></sup></p>

<p>O achado central: <strong>muitos desses sistemas funcionaram de forma sustentável por séculos</strong>, sem privatização e sem controle estatal. Os pastos comunais de Törbel, nos Alpes suíços, são geridos coletivamente com regras documentadas desde 1224. As <em>huertas</em> de Valência distribuem água por regras comunitárias que atravessaram mais de quinhentos anos e três regimes políticos.</p>

<p>Ostrom recebeu o Nobel de Economia em 2009, a primeira mulher a recebê-lo, e uma cientista política num prêmio de economia.</p>

<div class="marca consenso">
<span class="rot">O que o achado significa, com precisão</span>
<p>Ostrom não mostrou que Hardin estava logicamente errado. O modelo dele está correto <em>para as condições que ele supõe</em>. O que ela mostrou é que essas condições (ausência de comunicação, ausência de regras acordadas, ausência de monitoramento e de sanções) descrevem um caso particular e não muito comum. Hardin modelou um recurso de acesso livre (open access) e chamou isso de "bem comum". Bens comuns reais quase sempre têm regras de acesso, e essa diferença é o que decide o resultado.</p>
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

<p>Hardin colapsou as duas primeiras linhas numa só. A tragédia é real e severa em acesso livre. Em propriedade comum bem governada, ela frequentemente não ocorre. Confundir as duas leva a recomendações de política que destroem instituições que estavam funcionando, e isso aconteceu, repetidamente, em programas de nacionalização de florestas e pesqueiras no século XX.</p>
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
<p>Análises posteriores sugerem que monitoramento e sanções graduadas (os itens 4 e 5) são os mais fortemente associados ao sucesso. Isso é teoricamente coerente: eles são justamente o que altera a matriz de incentivos que Hardin descreveu. Cooperação não emerge por virtude; emerge porque a estrutura de recompensas mudou.</p>
</div>

<h3>Por que a comunicação muda tudo</h3>

<p>O resultado experimental mais robusto da economia comportamental sobre esse tema: em jogos de bens públicos de laboratório, permitir que os participantes <strong>conversem antes de decidir</strong> eleva substancialmente a cooperação. Mesmo sem qualquer mecanismo de execução: conversa sem contrato, sem punição, sem obrigação.</p>

<p>Isso é teoricamente desconcertante, porque na teoria dos jogos clássica a comunicação sem compromisso vinculante é "conversa barata" e não deveria alterar o equilíbrio. Alterar ela altera, e de forma replicável.</p>

<p>Acrescentar a possibilidade de punir quem não coopera, mesmo a custo para quem pune, eleva a cooperação ainda mais e a torna estável ao longo de muitas rodadas. Este é o achado de Fehr e Gächter sobre punição altruísta.<sup class="cit"><a href="#f3">3</a></sup></p>

<div class="marca controverso">
<span class="rot">Ponto em disputa</span>
<p>A interpretação desses resultados é debatida. Uma leitura: humanos têm preferências sociais genuínas (reciprocidade, aversão à desigualdade) que não estão no modelo do agente puramente egoísta. Outra leitura: os efeitos são fortemente dependentes de contexto experimental e demanda característica, e diminuem com repetição, anonimato e valores monetários altos. Meta-análises confirmam que os efeitos existem e são robustos, mas com tamanhos menores do que os primeiros estudos sugeriam, um padrão comum na literatura pós-crise de replicação.</p>
</div>

<h3>Onde a solução comunitária não funciona</h3>

<p>Ostrom era mais cuidadosa do que muitos de seus divulgadores. Ela identificou condições em que a autogestão tende a falhar:</p>

<ul>
<li><strong>Grupos muito grandes</strong>, em que o monitoramento mútuo se torna inviável e o anonimato protege quem burla.</li>
<li><strong>Alta rotatividade</strong> de participantes, que impede a construção de reputação e de expectativa de interação futura.</li>
<li><strong>Recursos muito móveis</strong> (peixes migratórios, aquíferos transfronteiriços) em que as fronteiras do recurso não coincidem com as fronteiras da comunidade.</li>
<li><strong>Heterogeneidade forte de interesses</strong> entre os usuários, que dificulta acordo sobre regras.</li>
<li><strong>Ausência de reconhecimento externo</strong>, quando um Estado ou empresa pode simplesmente ignorar as regras locais.</li>
</ul>

<p>Em outras palavras: a resposta correta a Hardin não é "comunidades sempre resolvem". É "existe um repertório de arranjos institucionais, e qual funciona depende de características verificáveis do recurso e do grupo".</p>
` },

extensao: { minutos: 30, html: `
<h3>O clima é o caso difícil</h3>

<p>A atmosfera parece o exemplo definitivo da tragédia: benefício privado da emissão, custo distribuído globalmente. E quase todas as condições que Ostrom identificou como favoráveis estão ausentes: o grupo tem bilhões de pessoas e quase duzentos Estados, as fronteiras do recurso não coincidem com nenhuma jurisdição, não há autoridade com poder de sanção, e os interesses são profundamente heterogêneos.</p>

<p>Ostrom, num de seus últimos trabalhos, propôs uma resposta que ela chamou de <strong>governança policêntrica</strong>: em vez de esperar um acordo global único, reconhecer que ação climática ocorre simultaneamente em cidades, empresas, regiões, países e blocos, e que esses níveis podem se reforçar mutuamente.<sup class="cit"><a href="#f4">4</a></sup></p>

<div class="marca emergente">
<span class="rot">Abordagem emergente, com evidência ainda parcial</span>
<p>A tese policêntrica é influente e informa o desenho do Acordo de Paris, com suas contribuições nacionalmente determinadas em vez de metas impostas de cima. Se ela funciona é uma questão empírica aberta e séria: críticos argumentam que a ausência de sanção deixa o problema do carona intacto e que compromissos voluntários têm sido sistematicamente insuficientes frente às metas declaradas. É honesto registrar que este é o teste em curso, não um resultado consolidado.</p>
</div>

<h3>O que a história de Hardin ensina sobre uso de modelos</h3>

<p>Este caso mostra como um modelo pode ser correto e mal aplicado ao mesmo tempo. A lição metodológica vale para além do tema.</p>

<p>Hardin não coletou dados. O artigo de 1968 não apresenta um único caso empírico de bem comum que tenha colapsado do modo descrito. A parábola do pasto é hipotética, adaptada de um panfleto de 1833 de William Forster Lloyd. Um modelo formalmente válido foi tratado como descrição do mundo sem que a correspondência fosse verificada.</p>

<p>A generalização foi imediata e política. O artigo salta do pasto hipotético para conclusões sobre população mundial, propriedade e coerção. Hardin foi explícito em defender restrições coercitivas à reprodução e restrições à imigração, e escreveu posteriormente sobre "ética do bote salva-vidas" em termos que o Southern Poverty Law Center classificou como nacionalismo branco.<sup class="cit"><a href="#f5">5</a></sup></p>

<p>O modelo teve consequências materiais. Governos usaram o argumento para nacionalizar florestas e pesqueiras geridas comunalmente, em nome da conservação. Em vários casos documentados no Nepal, na Índia e na África Oriental, a nacionalização destruiu regras locais de manejo funcionais e converteu propriedade comum em acesso livre <em>de facto</em>, produzindo exatamente a degradação que se queria evitar.</p>

<div class="marca controverso">
<span class="rot">Uma qualificação necessária</span>
<p>Nada disso significa que o mecanismo de Hardin seja irreal. Colapso de pesqueiras por sobrepesca é bem documentado: o caso do bacalhau do Grand Banks, no Canadá, levou ao fim de uma indústria de quinhentos anos e ao desemprego de dezenas de milhares de pessoas em 1992, e o estoque não se recuperou plenamente. O ponto não é que Hardin errou sobre o mecanismo. É que ele errou ao tratar um caso particular como lei geral, e ao concluir que só existiam dois remédios possíveis.</p>
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
<p>O mecanismo de Hardin é real e explica colapsos reais em regime de acesso livre. A conclusão de que só Estado ou privatização resolvem é empiricamente falsa: Ostrom documentou centenas de arranjos comunitários duradouros e identificou os princípios que os distinguem dos que falharam. O erro metodológico a evitar é o de Hardin: tomar um modelo formalmente válido como descrição do mundo sem ir verificar.</p>
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

/* ── vantagem-comparativa.js ───────────────────────────────── */
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

if (typeof module !== "undefined") { module.exports = { CONTEUDOS }; }
