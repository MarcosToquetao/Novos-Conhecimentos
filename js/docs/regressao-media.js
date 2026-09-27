CONTEUDOS["regressao-media"] = {
termo: "Regressão à média",
area: "Estatística",
subtitulo: "Quando uma medida extrema tende a parecer menos extrema na segunda vez, só por acaso. Isso engana quem avalia tratamento, desempenho e política pública, e a saída é comparar com um grupo que não recebeu nada.",
prerequisitos: [
 "Saber o que é média de um conjunto de medidas e o que é variabilidade em torno dela. Ajuda ter visto a ideia de que uma medição carrega erro, não só o valor verdadeiro."
],
conexoes: [
 {
  "termo": "O que o valor-p realmente significa",
  "relacao": "Sem grupo controle, a queda de um valor extremo vira um valor-p pequeno e a conclusão de que o tratamento funcionou, quando a mudança podia ser só regressão à média."
 },
 {
  "termo": "Viés de seleção e sobrevivência",
  "relacao": "Escolher para o estudo só os casos mais extremos é uma seleção que, sozinha, cria a melhora na segunda medida."
 },
 {
  "termo": "Paradoxo de Simpson",
  "relacao": "Os dois mostram como um número que parece descrever um efeito pode virar do avesso quando se olha de outra forma ou se compara com o grupo certo."
 },
 {
  "termo": "Inferência causal e a escada de Pearl",
  "relacao": "A regressão à média é a razão pela qual medir antes e depois no mesmo grupo não sustenta uma afirmação causal."
 }
],

camadas: {

nucleo: { minutos: 4, html: `
<p class="abre">Um instrutor de voo observa um cadete fazer uma manobra perfeita, elogia, e na tentativa seguinte o cadete vai pior. Noutro dia, grita com um cadete que errou feio, e na próxima tentativa o desempenho melhora. A conclusão que salta aos olhos: elogio atrapalha, bronca ajuda. O psicólogo Daniel Kahneman conta que ouviu exatamente esse argumento de um instrutor experiente e percebeu que a explicação era outra<sup class="cit"><a href="#f1">1</a></sup>.</p>

[[FOTO:1]]<p>O que acontece é um fenômeno estatístico chamado regressão à média. Quando você escolhe pessoas por terem um resultado extremo, parte daquele extremo veio de sorte ou azar. Na medição seguinte, a sorte raramente se repete, e o grupo tende a ficar mais perto da média geral. No voo, quem fez a manobra perfeita estava provavelmente entre os que tiveram um bom dia. Quem errou feio estava entre os que tiveram um dia ruim. Na segunda tentativa, os dois grupos tendem a convergir para o desempenho habitual de cada um<sup class="cit"><a href="#f1">1</a></sup>.</p><h3>A ideia central</h3><p>Imagine uma turma fazendo uma prova de verdadeiro ou falso em que todos chutam. Cada aluno tem, em média, metade dos acertos. Alguns acertam muito mais por puro acaso. Se você pegar só os 10% melhores e der outra prova de chute, a média desse grupo volta para perto de 50%<sup class="cit"><a href="#f1">1</a></sup>. Não há habilidade envolvida, então não há nada para manter o resultado alto.</p><p>Em situações reais, o resultado mistura habilidade e acaso. Quem foi bem pode ter habilidade e também sorte. Na repetição, a habilidade permanece, mas a sorte some. Por isso o grupo que foi muito bem tende a cair um pouco, e o grupo que foi muito mal tende a subir. A regressão é mais forte quanto maior o peso do acaso na medida<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p><p>Isso não significa que o acaso compensa o resultado anterior. Significa apenas que um resultado extremo é uma mistura de valor verdadeiro e ruído, e o ruído não se repete<sup class="cit"><a href="#f1">1</a></sup>.</p><div class="marca consenso"><span class="rot">Consenso</span><p>A regressão à média é um fenômeno estatístico estabelecido desde Francis Galton, no século XIX, e não descreve uma causa. Ela aparece sempre que se seleciona um grupo por um valor extremo de uma variável medida com erro e depois se mede a mesma variável de novo<sup class="cit"><a href="#f3">3</a></sup><sup class="cit"><a href="#f4">4</a></sup><sup class="cit"><a href="#f5">5</a></sup>.</p></div><h3>Onde ela engana</h3><p>O caso clássico está na medicina. Um ensaio clínico publicado no Journal of American College of Cardiology testou transplante de células-tronco em pacientes com miocardiopatia isquêmica, usando fração de ejeção como medida<sup class="cit"><a href="#f6">6</a></sup>. O grupo controle, que não recebeu células, teve aumento médio de 7% na fração de ejeção sem que nada fosse feito. Se os autores tivessem medido só antes e depois nos pacientes tratados, teriam atribuído toda a melhora ao tratamento<sup class="cit"><a href="#f6">6</a></sup>.</p><p>O mesmo vale para estudos de pressão arterial e colesterol. Quando você seleciona pessoas com valores anormalmente altos, a segunda medida tende a ser mais baixa mesmo sem intervenção alguma<sup class="cit"><a href="#f6">6</a></sup>. Em dor crônica, pacientes que procuram tratamento durante uma crise melhoram em média sem que o tratamento tenha efeito específico, porque a crise passa e o valor volta ao patamar habitual<sup class="cit"><a href="#f7">7</a></sup>. Em osteoporose, mulheres com maior perda de densidade óssea no primeiro ano de tratamento foram as mais propensas a ganhar densidade no segundo ano, mesmo continuando o mesmo tratamento<sup class="cit"><a href="#f8">8</a></sup>.</p><p>Esse engano não se limita à saúde. Um professor de estatística chamado Horace Secrist publicou em 1933 um livro com montanhas de dados para provar que os lucros das empresas competitivas tendem à média ao longo do tempo<sup class="cit"><a href="#f1">1</a></sup>. Não existe tal efeito: a variação dos lucros é praticamente constante. Secrist descreveu apenas a regressão à média<sup class="cit"><a href="#f1">1</a></sup>.</p><h3>O que fazer com isso</h3><p>A forma mais direta de escapar do engano é comparar um grupo que recebeu a intervenção com outro que não recebeu, formado por sorteio<sup class="cit"><a href="#f6">6</a></sup><sup class="cit"><a href="#f9">9</a></sup>. Os dois grupos passam pela mesma regressão, e a diferença entre eles mostra o efeito real. Sem isso, uma melhora estatisticamente significativa entre antes e depois não prova nada<sup class="cit"><a href="#f9">9</a></sup><sup class="cit"><a href="#f10">10</a></sup>.</p><p>Em estudos observacionais, nos quais não há sorteio, é possível estimar o tamanho da regressão e descontá-lo<sup class="cit"><a href="#f11">11</a></sup>. Uma alternativa é olhar para a correlação entre as duas medidas: quanto menor a correlação, maior a regressão esperada<sup class="cit"><a href="#f2">2</a></sup>. Mas nenhum ajuste substitui o grupo controle<sup class="cit"><a href="#f1">1</a></sup>.</p>
` },

aprofundamento: { minutos: 4, html: `
<p>A regressão à média nasceu na genética. Francis Galton mediu a altura de centenas de pessoas e notou que pais muito altos tendiam a ter filhos menos altos que eles, e pais muito baixos tendiam a ter filhos mais altos<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f4">4</a></sup>. Ele chamou isso de regressão à mediocridade e estimou que, para a altura, o desvio dos filhos era cerca de dois terços do desvio dos pais<sup class="cit"><a href="#f1">1</a></sup>. O termo regressão vem daí, do latim para voltar<sup class="cit"><a href="#f4">4</a></sup>.</p>

[[FOTO:3]]<p>Galton também deu uma explicação visual. Imaginou pelotas caindo por um tabuleiro inclinado que forma a distribuição normal, e depois perguntou de onde vinham as pelotas que chegaram a um ponto extremo<sup class="cit"><a href="#f1">1</a></sup>. A resposta não é de cima do mesmo ponto, porque há mais pelotas no meio que poderiam ter desviado para lá. É a ideia de que a distribuição tem mais massa no centro, então valores extremos são, em média, visitados por quem veio do centro<sup class="cit"><a href="#f1">1</a></sup>.</p>

[[FOTO:4]]<p>A formulação estatística moderna parte da reta de regressão. Se duas medidas têm correlação menor que um, o valor previsto da segunda é puxado em direção à média<sup class="cit"><a href="#f1">1</a></sup>. Numa reta ajustada por mínimos quadrados, a inclinação é a razão entre a covariância e a variância, e o valor previsto para um ponto extremo fica mais perto da média do que o valor observado<sup class="cit"><a href="#f1">1</a></sup>. Sem correlação perfeita, há regressão.</p><p>Três propriedades costumam confundir. Primeira: a média do grupo extremo se move para perto da média geral, mas a dispersão dos indivíduos em torno de suas novas previsões continua parecida<sup class="cit"><a href="#f1">1</a></sup>. Segunda: a regressão funciona nos dois sentidos. Quem foi o melhor na segunda medida provavelmente foi pior na primeira<sup class="cit"><a href="#f1">1</a></sup>. Terceira: a regressão não é o mesmo que a lei dos grandes números nem que a falácia do apostador. Depois de dez caras seguidas numa moeda honesta, a próxima sequência tende a ser menos extrema, mas a moeda não fica devendo coroas<sup class="cit"><a href="#f1">1</a></sup>.</p><p>Na prática, o tamanho do efeito depende de dois fatores. Quanto maior o erro de medição, maior a regressão. E quanto mais extremo o corte que define o grupo, maior a regressão<sup class="cit"><a href="#f3">3</a></sup>. Se o grupo é escolhido por um valor da mesma variável que se quer medir depois, o efeito é ainda mais forte<sup class="cit"><a href="#f2">2</a></sup>.</p><table><thead><tr><th>Situação</th><th>O que se observa</th><th>Por quê</th></tr></thead><tbody><tr><td>Moeda honesta após dez caras</td><td>A próxima sequência tende a ser menos extrema</td><td>Regressão à média: a sorte não se repete<sup class="cit"><a href="#f1">1</a></sup></td></tr><tr><td>Pressão alta medida de novo</td><td>Média do grupo cai, sem tratamento</td><td>Seleção pelo valor extremo com erro de medida<sup class="cit"><a href="#f6">6</a></sup><sup class="cit"><a href="#f2">2</a></sup></td></tr><tr><td>Pressão alta com grupo controle</td><td>Só conta a diferença entre os grupos</td><td>Os dois grupos regridem igual; a diferença isola o efeito<sup class="cit"><a href="#f6">6</a></sup><sup class="cit"><a href="#f9">9</a></sup></td></tr><tr><td>Lucros de empresas ao longo do tempo</td><td>Parece haver convergência, mas não há</td><td>Secrist confundiu regressão com efeito real<sup class="cit"><a href="#f1">1</a></sup></td></tr></tbody></table><p>Na ecologia, biólogos usam métodos para corrigir o efeito quando não têm grupo controle. Pássaros que alimentam filhotes perdem peso, e os inicialmente mais pesados perdem mais. Isso é esperado pela regressão, porque aves mais pesadas tinham mais margem para perder<sup class="cit"><a href="#f12">12</a></sup>. Em seleção sexual, machos que ficaram sem par no primeiro ano tendem a melhorar no segundo, em parte porque eram menos atraentes e em parte porque tiveram azar<sup class="cit"><a href="#f12">12</a></sup>.</p><p>Na economia, Lant Pritchett e Lawrence Summers mostraram que a regressão à média é a característica mais robusta dos dados de crescimento. Países que crescem muito rápido raramente mantêm o ritmo, e os que crescem devagar tendem a acelerar. Isso não impede que haja diferenças reais entre países, mas mostra que a extrapolação de crescimento recente é frágil<sup class="cit"><a href="#f13">13</a></sup>.</p><p>Em estudos de diferenças em diferenças, um desenho comum em economia da saúde, parear unidades por valores do período anterior pode introduzir viés justamente por causa da regressão. Jamie Daw e Laura Hatfield mostraram por simulação que, quando o nível anterior está correlacionado com a atribuição ao tratamento, o pareamento produz estimativas enviesadas, e o viés cresce quando a correlação entre as medidas ao longo do tempo é fraca<sup class="cit"><a href="#f14">14</a></sup>.</p>
` },

extensao: { minutos: 3, html: `
<p>Quem trabalha com melhoria de qualidade em serviços de saúde convive com a regressão à média o tempo todo. Programas que selecionam os pacientes de maior custo ou maior risco para intervenção e depois medem o custo ou o risco de novo quase sempre encontram melhora, mesmo quando a intervenção não faz nada<sup class="cit"><a href="#f11">11</a></sup>. A conclusão correta exige comparar com um grupo de risco parecido que não recebeu a intervenção, ou estimar o tamanho esperado da regressão e descontá-lo<sup class="cit"><a href="#f11">11</a></sup>.</p><p>No esporte, o efeito explica por que o melhor novato raramente repete a temporada de estreia e por que jogadores com média de rebatida muito alta no meio da temporada tendem a cair, enquanto os de média baixa tendem a subir<sup class="cit"><a href="#f1">1</a></sup>. Isso não significa que o talento desapareceu, nem que o esforço extra funcionou. É a parte aleatória do desempenho que não se repete. Jornalistas chamam de maldição da capa ou maldição do videogame, mas é a mesma estatística<sup class="cit"><a href="#f1">1</a></sup>.</p><p>Na gestão, a análise de mudanças organizacionais precisa separar o efeito da mudança da regressão. Um estudo sobre mudanças de formato em estações de rádio nos Estados Unidos mostrou que a mudança tende a prejudicar o desempenho, mas esse efeito é moderado pelo tamanho da organização e pelo desempenho anterior. Para organizações que iam mal, a mudança pode ajudar; para as grandes e bem-sucedidas, tende a atrapalhar<sup class="cit"><a href="#f15">15</a></sup>. Sem levar em conta a regressão, seria fácil confundir a queda natural de quem estava no topo com o efeito da mudança.</p><p>Na educação, o erro aparece quando se avaliam escolas ou alunos por testes padronizados. Escolas com médias muito baixas em um ano tendem a subir no ano seguinte, e escolas com médias muito altas tendem a cair, mesmo sem nenhuma política nova<sup class="cit"><a href="#f1">1</a></sup>. Em Massachusetts, nos anos 2000, metas de melhoria por escola produziram esse padrão: as piores escolas pareciam ter cumprido metas, e algumas das melhores pareciam ter falhado. O caso foi debatido, mas as notas de melhoria deixaram de ser divulgadas depois<sup class="cit"><a href="#f1">1</a></sup>.</p><p>O que todas essas situações têm em comum é o desenho do estudo. Sempre que se seleciona um grupo por um valor extremo e se mede a mesma variável de novo, a regressão à média é uma explicação concorrente que precisa ser descartada antes de qualquer afirmação sobre causa<sup class="cit"><a href="#f3">3</a></sup><sup class="cit"><a href="#f10">10</a></sup>. A regra prática é simples: se não há grupo de comparação adequado, não há como separar o efeito real da volta ao centro.</p>
` }

},

sintese: {
 "definicoes": [
  {
   "termo": "Regressão à média",
   "def": "Fenômeno estatístico em que um grupo selecionado por um valor extremo de uma variável medida com erro tende a apresentar, na medição seguinte, valores mais próximos da média geral."
  },
  {
   "termo": "Acaso na medida",
   "def": "Parte do resultado de uma pessoa que vem de sorte ou azar do momento, e que não se repete na medição seguinte."
  },
  {
   "termo": "Grupo controle",
   "def": "Grupo formado por sorteio que não recebe a intervenção. Os dois grupos passam pela mesma regressão, e a diferença entre eles isola o efeito real."
  },
  {
   "termo": "Correlação entre medidas",
   "def": "Grau de associação entre a primeira e a segunda medição. Quanto menor a correlação, maior a regressão esperada."
  },
  {
   "termo": "Reta de regressão",
   "def": "Reta ajustada por mínimos quadrados que prevê a segunda medida a partir da primeira. Com correlação menor que um, a previsão de um valor extremo fica mais perto da média."
  },
  {
   "termo": "Erro de medição",
   "def": "Imprecisão da medida. Quanto maior o erro, maior a regressão à média."
  }
 ],
 "lembrar": [
  "A regressão à média não descreve uma causa. Ela aparece sempre que se seleciona um grupo por um valor extremo de uma variável medida com erro e depois se mede a mesma variável de novo.",
  "Um resultado extremo é uma mistura de valor verdadeiro e ruído. Na repetição, a habilidade permanece, mas a sorte some, e o grupo tende a voltar para perto da média.",
  "O tamanho da regressão depende de dois fatores: quanto maior o erro de medição e quanto mais extremo o corte que define o grupo, maior a regressão.",
  "Sem grupo controle, uma melhora estatisticamente significativa entre antes e depois não prova nada. Os dois grupos regridem igual, e só a diferença entre eles mostra o efeito real.",
  "A regressão funciona nos dois sentidos: quem foi o melhor na segunda medida provavelmente foi pior na primeira.",
  "A regressão não é a lei dos grandes números nem a falácia do apostador. Depois de dez caras seguidas numa moeda honesta, a próxima sequência tende a ser menos extrema, mas a moeda não fica devendo coroas."
 ],
 "confusoes": [
  {
   "erro": "Concluir que elogio atrapalha e bronca ajuda, porque quem foi elogiado piorou e quem foi repreendido melhorou.",
   "correcao": "Os dois grupos regridem para perto da média. Quem fez a manobra perfeita estava entre os que tiveram um bom dia, e quem errou feio estava entre os que tiveram um dia ruim. A sorte não se repete."
  },
  {
   "erro": "Atribuir ao tratamento a melhora de um grupo selecionado por valores anormais, como pressão alta, colesterol ou dor crônica.",
   "correcao": "A segunda medida tende a ser mais baixa mesmo sem intervenção alguma, porque foi a primeira medição extrema que motivou a seleção."
  },
  {
   "erro": "Achar que o acaso compensa o resultado anterior, como se a moeda ficasse devendo coroas depois de dez caras.",
   "correcao": "O acaso não compensa nada. Apenas a parte aleatória do resultado extremo não se repete, e o grupo volta para perto do patamar habitual."
  },
  {
   "erro": "Ver convergência real nos lucros das empresas competitivas, como Horace Secrist publicou em 1933.",
   "correcao": "A variação dos lucros é praticamente constante. Secrist descreveu apenas a regressão à média."
  },
  {
   "erro": "Achar que o efeito é fraco ou incomum, um detalhe de estatística.",
   "correcao": "Para Pritchett e Summers, a regressão à média é a característica mais robusta dos dados de crescimento econômico. Ela aparece em medicina, economia, ecologia, esporte e educação."
  }
 ],
 "numeros": [
  "No ensaio clínico com miocardiopatia isquêmica, o grupo controle teve aumento médio de 7% na fração de ejeção sem que nada fosse feito.",
  "Galton estimou que, para a altura, o desvio dos filhos era cerca de dois terços do desvio dos pais.",
  "Numa prova de verdadeiro ou falso em que todos chutam, a média de acertos é metade, e os 10% melhores voltam para perto de 50% na segunda prova.",
  "Depois de dez caras seguidas numa moeda honesta, a próxima sequência tende a ser menos extrema, mas a moeda continua honesta.",
  "Em Massachusetts, nos anos 2000, metas de melhoria por escola produziram o padrão de regressão: as piores escolas pareciam cumprir metas, e algumas das melhores pareciam falhar."
 ]
},

flashcards: [
 {
  "f": "O que é regressão à média?",
  "v": "É o fenômeno em que um grupo selecionado por um valor extremo de uma variável medida com erro tende, na medição seguinte, a ficar mais perto da média geral."
 },
 {
  "f": "Por que um resultado extremo tende a não se repetir?",
  "v": "Porque o resultado extremo mistura valor verdadeiro e ruído. Na repetição, a habilidade permanece, mas a sorte ou o azar do momento some."
 },
 {
  "f": "Qual a diferença entre regressão à média e a falácia do apostador?",
  "v": "Na regressão, a sequência seguinte tende a ser menos extrema porque a sorte não se repete. Na falácia do apostador, a pessoa acredita que o acaso vai compensar o resultado anterior, como se a moeda ficasse devendo coroas."
 },
 {
  "f": "Quais dois fatores aumentam o tamanho da regressão?",
  "v": "Quanto maior o erro de medição e quanto mais extremo o corte que define o grupo, maior a regressão."
 },
 {
  "f": "Por que o grupo controle resolve o problema?",
  "v": "Os dois grupos, o que recebeu a intervenção e o que não recebeu, passam pela mesma regressão. A diferença entre eles isola o efeito real."
 },
 {
  "f": "Como o tamanho da correlação entre duas medidas se relaciona com a regressão?",
  "v": "Quanto menor a correlação entre a primeira e a segunda medida, maior a regressão esperada. Sem correlação perfeita, há regressão."
 },
 {
  "f": "O que Galton observou ao medir a altura de pais e filhos?",
  "v": "Pais muito altos tendiam a ter filhos menos altos que eles, e pais muito baixos tendiam a ter filhos mais altos. Ele chamou isso de regressão à mediocridade."
 },
 {
  "f": "Por que o grupo controle de um ensaio com células-tronco melhorou sem receber células?",
  "v": "Os pacientes foram selecionados por terem fração de ejeção baixa. Na segunda medida, o grupo todo tendeu a subir, mesmo sem intervenção, pela regressão à média."
 },
 {
  "f": "Qual foi o erro de Horace Secrist ao estudar lucros de empresas?",
  "v": "Ele viu convergência nos dados e concluiu que os lucros tendem à média. Na verdade a variação dos lucros é praticamente constante, e ele descreveu apenas a regressão à média."
 },
 {
  "f": "O que a regressão à média prevê para a temporada seguinte de um novato destaque?",
  "v": "O melhor novato raramente repete a temporada de estreia. Isso não significa que o talento desapareceu: é a parte aleatória do desempenho que não se repete."
 },
 {
  "f": "Como a regressão à média pode enganar quem avalia escolas por testes padronizados?",
  "v": "Escolas com médias muito baixas em um ano tendem a subir no ano seguinte, e as muito altas tendem a cair, mesmo sem política nova. As piores parecem cumprir metas, e as melhores parecem falhar."
 },
 {
  "f": "Por que parear unidades por valores do período anterior pode enviesar um estudo?",
  "v": "Quando o nível anterior está correlacionado com a atribuição ao tratamento, o pareamento introduz viés por causa da regressão, e o viés cresce quando a correlação entre as medidas ao longo do tempo é fraca."
 }
],

prova: [
 {
  "camada": "nucleo",
  "q": "Um instrutor elogia um cadete que fez uma manobra perfeita e o cadete piora na tentativa seguinte. O que explica esse padrão?",
  "alts": [
   "O elogio desconcentra o cadete e atrapalha o aprendizado.",
   "Quem fez a manobra perfeita estava entre os que tiveram um bom dia, e a sorte não se repetiu.",
   "O cadete relaxou porque já tinha provado o que sabia.",
   "A manobra anterior era fácil demais para o nível dele."
  ],
  "correta": 1,
  "porque": "A regressão à média explica o padrão: o resultado extremo misturava habilidade e sorte, e a parte aleatória não se repete. A primeira alternativa é a leitura do instrutor, e é justamente o engano que Kahneman percebeu."
 },
 {
  "camada": "nucleo",
  "q": "O que define a regressão à média?",
  "alts": [
   "Uma causa que empurra os resultados extremos de volta ao centro.",
   "Um erro de cálculo dos instrumentos de medida.",
   "Um fenômeno estatístico que aparece quando se seleciona um grupo por um valor extremo de uma variável medida com erro.",
   "Uma lei que garante que o desempenho de todos tende a ser igual no longo prazo."
  ],
  "correta": 2,
  "porque": "A regressão é um fenômeno estatístico e não descreve causa. A primeira alternativa descreve a intuição errada: nada empurra os resultados, o ruído apenas não se repete."
 },
 {
  "camada": "nucleo",
  "q": "Numa prova de verdadeiro ou falso em que todos os alunos chutam, os 10% melhores são selecionados e fazem outra prova de chute. O que se espera da média do grupo?",
  "alts": [
   "Mantém o resultado alto, porque os melhores têm mais habilidade.",
   "Volta para perto de 50%, porque não há habilidade envolvida.",
   "Sobe ainda mais, porque o grupo ganhou prática.",
   "Cai para perto de zero, porque a sorte acaba."
  ],
  "correta": 1,
  "porque": "Sem habilidade envolvida, não há nada para manter o resultado alto. A sorte que levou o grupo acima da média não se repete, e a média volta para perto de 50%. A primeira alternativa ignora que, no chute puro, não existe habilidade."
 },
 {
  "camada": "nucleo",
  "q": "Por que, sem grupo controle, uma melhora significativa entre antes e depois não prova que o tratamento funcionou?",
  "alts": [
   "Porque o teste estatístico sempre erra quando a amostra é pequena.",
   "Porque os pacientes podem ter mentido sobre os sintomas.",
   "Porque o grupo todo passa pela regressão à média, e a melhora pode ser só a volta ao patamar habitual.",
   "Porque a significância estatística só vale para amostras grandes."
  ],
  "correta": 2,
  "porque": "O grupo selecionado por um valor extremo tende a voltar para perto da média, com ou sem intervenção. Só a comparação com um grupo que não recebeu o tratamento separa o efeito real da regressão. As outras alternativas tratam de problemas diferentes, que não são a explicação central."
 },
 {
  "camada": "nucleo",
  "q": "Em que situação o desenho do estudo está mais protegido contra a ilusão criada pela regressão à média?",
  "alts": [
   "Medir os mesmos pacientes antes e depois do tratamento.",
   "Selecionar os piores casos e acompanhá-los por um ano.",
   "Comparar o grupo tratado com um grupo formado por sorteio que não recebeu a intervenção.",
   "Perguntar aos pacientes se sentiram melhora."
  ],
  "correta": 2,
  "porque": "Com dois grupos sorteados, os dois passam pela mesma regressão, e a diferença entre eles mostra o efeito real. Medir antes e depois, ou acompanhar os piores casos, expõe o estudo à regressão, porque não há grupo de comparação."
 },
 {
  "camada": "nucleo",
  "q": "Pacientes procuram tratamento para dor crônica durante uma crise e melhoram em média, mesmo sem efeito específico do tratamento. Por quê?",
  "alts": [
   "A dor crônica sempre melhora com o tempo, independentemente da crise.",
   "Quem procura tratamento durante a crise está num pico de dor, e a medida seguinte tende a voltar ao patamar habitual.",
   "O tratamento tem efeito placebo garantido nesses casos.",
   "A crise faz o corpo produzir analgésicos naturais."
  ],
  "correta": 1,
  "porque": "O grupo foi selecionado por um valor extremo, a pior dor, medida com erro. A segunda medida tende a ser mais baixa porque a crise passa e o valor volta ao patamar habitual. As outras alternativas atribuem a melhora a um mecanismo real, que é justamente o que a regressão torna difícil afirmar."
 },
 {
  "camada": "aprofundamento",
  "q": "Qual foi a contribuição de Galton para o conceito de regressão à média?",
  "alts": [
   "Mostrou que a altura dos filhos é sempre igual à média dos pais.",
   "Notou que pais muito altos tendem a ter filhos menos altos que eles, e pais muito baixos tendem a ter filhos mais altos.",
   "Provou que a altura depende só do ambiente, não da genética.",
   "Calculou a correlação perfeita entre a altura de pais e filhos."
  ],
  "correta": 1,
  "porque": "Galton observou que os filhos de pais extremos ficavam mais perto da média geral, e chamou isso de regressão à mediocridade. Ele não encontrou igualdade nem correlação perfeita: a correlação menor que um é justamente o que produz a regressão."
 },
 {
  "camada": "aprofundamento",
  "q": "Como a reta de regressão explica o valor previsto para um ponto extremo?",
  "alts": [
   "O valor previsto é sempre igual ao valor observado, se a correlação for alta.",
   "A previsão fica mais perto da média do que o valor observado, quando a correlação é menor que um.",
   "A previsão fica mais extrema que o valor observado, para compensar o erro.",
   "A previsão só existe quando a correlação é perfeita."
  ],
  "correta": 1,
  "porque": "Numa reta ajustada por mínimos quadrados, sem correlação perfeita há regressão, e o valor previsto de um ponto extremo é puxado em direção à média. A primeira alternativa descreve o caso da correlação perfeita, que é exceção, não regra."
 },
 {
  "camada": "aprofundamento",
  "q": "Pritchett e Summers estudaram dados de crescimento econômico. O que eles encontraram?",
  "alts": [
   "Países que crescem rápido mantêm o ritmo por décadas.",
   "A regressão à média é a característica mais robusta dos dados de crescimento.",
   "O crescimento dos países é completamente aleatório.",
   "Países pobres nunca alcançam os ricos."
  ],
  "correta": 1,
  "porque": "Eles mostraram que países que crescem muito rápido raramente mantêm o ritmo, e os que crescem devagar tendem a acelerar. Isso não impede diferenças reais entre países, mas mostra que extrapolar o crescimento recente é frágil. A primeira alternativa é a expectativa que a regressão desmente."
 },
 {
  "camada": "aprofundamento",
  "q": "Por que parear unidades por valores do período anterior pode enviesar um estudo de diferenças em diferenças?",
  "alts": [
   "Porque o pareamento reduz o tamanho da amostra.",
   "Porque, quando o nível anterior está correlacionado com a atribuição ao tratamento, o pareamento produz estimativas enviesadas.",
   "Porque o pareamento impede o uso de grupo controle.",
   "Porque a regressão à média desaparece quando há pareamento."
  ],
  "correta": 1,
  "porque": "Daw e Hatfield mostraram por simulação que o viés surge quando o nível anterior está correlacionado com a atribuição ao tratamento, e cresce quando a correlação entre as medidas ao longo do tempo é fraca. A regressão, nesse caso, atrapalha o desenho em vez de proteger."
 },
 {
  "camada": "extensao",
  "q": "Um programa de saúde seleciona os pacientes de maior custo para intervenção e, depois, encontra redução de custo. Qual é a leitura correta?",
  "alts": [
   "A intervenção certamente funcionou, porque o custo caiu.",
   "A redução pode ser regressão à média, e é preciso comparar com um grupo de risco parecido que não recebeu a intervenção.",
   "O custo sempre cai quando se acompanha o paciente por mais tempo.",
   "Pacientes de maior custo sempre melhoram sem ajuda."
  ],
  "correta": 1,
  "porque": "Selecionar pelo maior custo é selecionar por um valor extremo. A medida seguinte tende a cair mesmo sem intervenção, então a conclusão exige grupo de comparação adequado. A primeira alternativa é o engano que o desenho sem controle produz."
 },
 {
  "camada": "extensao",
  "q": "No esporte, jornalistas falam de maldição da capa quando um atleta destaque cai de rendimento no ano seguinte. O que está por trás desse padrão?",
  "alts": [
   "A pressão da fama prejudica o desempenho de todos os atletas.",
   "O atleta relaxa depois de ser reconhecido.",
   "A parte aleatória do desempenho que produziu o auge não se repete.",
   "Os adversários passam a treinar mais para vencê-lo."
  ],
  "correta": 2,
  "porque": "O destaque foi selecionado por um resultado extremo, que misturava talento e sorte. Na temporada seguinte, a sorte não se repete, e a média cai. As outras alternativas propõem causas reais, que podem existir, mas não são necessárias para explicar o padrão."
 }
],

fontes: [
 {
  "n": 1,
  "tipo": "enciclopédia",
  "ref": "Wikipédia (inglês), verbete 'Regression toward the mean'. Consultado em 27/09/2026.",
  "url": "https://en.wikipedia.org/wiki/Regression_toward_the_mean"
 },
 {
  "n": 2,
  "tipo": "artigo",
  "ref": "John M. Bland, Douglas G. Altman. 'Statistics Notes: Some examples of regression towards the mean'. <em>BMJ</em>, 1994.",
  "url": "https://doi.org/10.1136/bmj.309.6957.780"
 },
 {
  "n": 3,
  "tipo": "artigo",
  "ref": "Adrian Gerard Barnett. 'Regression to the mean: what it is and how to deal with it'. <em>International Journal of Epidemiology</em>, 2004.",
  "url": "https://doi.org/10.1093/ije/dyh299"
 },
 {
  "n": 4,
  "tipo": "artigo",
  "ref": "J Martin Bland, Doug G. Altman. 'Statistic Notes: Regression towards the mean'. <em>BMJ</em>, 1994.",
  "url": "https://doi.org/10.1136/bmj.308.6942.1499"
 },
 {
  "n": 5,
  "tipo": "artigo",
  "ref": "Stephen M. Stigler. 'Regression towards the mean, historically considered'. <em>Statistical Methods in Medical Research</em>, 1997.",
  "url": "https://doi.org/10.1177/096228029700600202"
 },
 {
  "n": 6,
  "tipo": "enciclopédia",
  "ref": "Wikipédia (português), verbete 'Regressão à média'. Consultado em 27/09/2026.",
  "url": "https://pt.wikipedia.org/wiki/Regress%C3%A3o_%C3%A0_m%C3%A9dia"
 },
 {
  "n": 7,
  "tipo": "artigo",
  "ref": "Coralyn W. Whitney, Michael Von Korff. 'Regression to the mean in treated versus untreated chronic pain'. <em>Pain</em>, 1992.",
  "url": "https://doi.org/10.1016/0304-3959(92)90032-7"
 },
 {
  "n": 8,
  "tipo": "artigo",
  "ref": "Steven R. Cummings. 'Monitoring Osteoporosis Therapy With Bone Densitometry Misleading Changes and Regression to the Mean'. <em>JAMA</em>, 2000.",
  "url": "https://doi.org/10.1001/jama.283.10.1318"
 },
 {
  "n": 9,
  "tipo": "artigo",
  "ref": "CLARENCE E. DAVIS. 'THE EFFECT OF REGRESSION TO THE MEAN IN EPIDEMIOLOGIC AND CLINICAL STUDIES'. <em>American Journal of Epidemiology</em>, 1976.",
  "url": "https://doi.org/10.1093/oxfordjournals.aje.a112321"
 },
 {
  "n": 10,
  "tipo": "artigo",
  "ref": "Veronica Morton, David J Torgerson. 'Effect of regression to the mean on decision making in health care'. <em>BMJ</em>, 2003.",
  "url": "https://doi.org/10.1136/bmj.326.7398.1083"
 },
 {
  "n": 11,
  "tipo": "artigo",
  "ref": "Ariel Linden. 'Assessing regression to the mean effects in health care initiatives'. <em>BMC Medical Research Methodology</em>, 2013.",
  "url": "https://doi.org/10.1186/1471-2288-13-119"
 },
 {
  "n": 12,
  "tipo": "artigo",
  "ref": "Colleen Kelly, Trevor D. Price. 'Correcting for Regression to the Mean in Behavior and Ecology'. <em>The American Naturalist</em>, 2005.",
  "url": "https://doi.org/10.1086/497402"
 },
 {
  "n": 13,
  "tipo": "artigo",
  "ref": "Lant H. Pritchett, Lawrence H. Summers. 'Asiaphoria Meets Regression to the Mean'. <em>National Bureau of Economic Research</em>, 2014.",
  "url": "https://doi.org/10.3386/w20573"
 },
 {
  "n": 14,
  "tipo": "artigo",
  "ref": "Jamie R. Daw, Laura A. Hatfield. 'Matching and Regression to the Mean in Difference‐in‐Differences Analysis'. <em>Health Services Research</em>, 2018.",
  "url": "https://doi.org/10.1111/1475-6773.12993"
 },
 {
  "n": 15,
  "tipo": "artigo",
  "ref": "Henrich R. Greve. 'The Effect of Core Change on Performance: Inertia and Regression toward the Mean'. <em>Administrative Science Quarterly</em>, 1999.",
  "url": "https://doi.org/10.2307/2666963"
 }
],

fronteira: [{"tema": "Câmeras de velocidade e queda de acidentes", "html": "<p>Estatísticos apontam que parte da redução de acidentes graves após a instalação de câmeras em pontos críticos pode ser regressão à média, porque os pontos foram escolhidos justamente por terem muitos acidentes. Há indícios de que o efeito protetor existe, mas o tamanho é debatido: sem um grupo de comparação, a queda observada mistura efeito real e regressão<sup class=\"cit\"><a href=\"#f1\">1</a></sup>.</p>"}],

fotos: [{"n": 1, "arquivo": "img/c/regressao-media/1.webp", "legenda": "Um instrutor de voo orienta um aluno sentado na cabine de um planador antes da decolagem.", "alt": "Um instrutor em pé conversando com um aluno sentado na cabine de um planador.", "autor": "Richard Johnson, Hernando County Composite Squadron, Civil Air Patrol", "licenca": "Public domain", "pagina": "https://commons.wikimedia.org/wiki/File:Civil_Air_Patrol_Orientation_Flight_Glider.jpg", "gif": false, "w": 800, "h": 544}, {"n": 3, "arquivo": "img/c/regressao-media/3.webp", "legenda": "O cientista Francis Galton, pioneiro no estudo da hereditariedade e do fenômeno da regressão à média.", "alt": "Retrato de perfil de Francis Galton.", "autor": "Eveleen Myers (née Tennant)", "licenca": "Public domain", "pagina": "https://commons.wikimedia.org/wiki/File:Sir_Francis_Galton,_1890s.jpg", "gif": false, "w": 800, "h": 1194}, {"n": 4, "arquivo": "img/c/regressao-media/4.webp", "legenda": "Esquema ilustrando o funcionamento do tabuleiro de Galton, onde bolas caindo formam uma distribuição estatística em sino.", "alt": "Ilustração esquemática de um tabuleiro de Galton mostrando bolinhas caindo e formando colunas em formato de sino.", "autor": "Svjo", "licenca": "CC BY-SA 3.0", "pagina": "https://commons.wikimedia.org/wiki/File:Galton_board.png", "gif": false, "w": 322, "h": 520}],
};
