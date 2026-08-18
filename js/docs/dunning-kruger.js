CONTEUDOS["dunning-kruger"] = {
termo: "Efeito Dunning-Kruger",
area: "Psicologia",
subtitulo: "O gráfico da 'curva da confiança' com o pico do Monte Estúpido, que circula pela internet há anos, não existe no artigo original de 1999. E quando estatísticos foram checar o achado com métodos melhores, descobriram que boa parte dele (não todo) é o que acontece quando você mede qualquer coisa com ruído e depois calcula um desvio a partir dela.",
prerequisitos: [
  "Nenhum pré-requisito técnico. Basta aceitar que existe diferença entre o quanto uma pessoa acha que sabe algo e o quanto ela realmente sabe.",
  "Para o aprofundamento: alguma familiaridade com correlação, percentil e a ideia de que uma medida repetida do mesmo fenômeno pode variar por acaso."
],
conexoes: [
  { termo: "Regressão à média", relacao: "É o mecanismo estatístico central da crítica: quando uma medida é imperfeita, valores extremos numa direção tendem a se aproximar da média quando a mesma coisa é medida de novo, mesmo sem nenhuma mudança real." },
  { termo: "Viés do otimismo comparativo", relacao: "A maioria das pessoas se avalia acima da média em tarefas fáceis e comuns, um padrão distinto do efeito Dunning-Kruger, mas frequentemente confundido com ele." },
  { termo: "Crise de replicação", relacao: "O efeito Dunning-Kruger é um dos casos mais claros de um achado psicológico real, mas cuja divulgação popular exagerou a magnitude muito além do que os dados sustentam." },
  { termo: "Metacognição", relacao: "O artigo original propõe que a mesma competência necessária para executar uma tarefa é parcialmente necessária para julgar quão bem ela foi executada, uma tese sobre monitoramento cognitivo de segunda ordem." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Você provavelmente já viu o gráfico. Um eixo mostra "competência", o outro mostra "confiança", e a linha sobe até um pico chamado "Monte Estúpido", despenca num "Vale do Desespero" e sobe de novo devagar até um "Platô da Sustentabilidade". A ideia: gente que sabe pouco de um assunto acha que sabe muito, e só quem realmente entende do assunto reconhece o próprio limite.</p>

<p>Esse gráfico não está no artigo de David Dunning e Justin Kruger, publicado em 1999 no <em>Journal of Personality and Social Psychology</em>.<sup class="cit"><a href="#f1">1</a></sup> Ele não aparece em nenhum artigo científico sobre o tema. Foi desenhado por um consultor de gestão, Joseph Paris, num post de blog de 2014, como ilustração didática de senso comum.<sup class="cit"><a href="#f2">2</a></sup> A imagem pegou porque parece científica e porque confirma uma suspeita que todo mundo já teve sobre alguém: que a pessoa mais confiante da sala é, com frequência, a menos informada.</p>

<p>Isso não significa que não exista nada de real por trás da ideia. Significa que vale a pena separar três coisas que a cultura popular embaralhou: o que o estudo de 1999 mediu, o que esse estudo realmente encontrou, e o quanto desse achado sobrevive quando você o testa com ferramentas estatísticas melhores.</p>

<h3>O que Kruger e Dunning realmente fizeram</h3>

<p>Eles não mediram "inteligência geral" nem deram um teste de QI. Fizeram quatro estudos pequenos e específicos com estudantes de graduação em Cornell: um sobre reconhecer o que é engraçado, dois sobre raciocínio lógico e um sobre gramática.<sup class="cit"><a href="#f1">1</a></sup> Em cada um, a pessoa fazia o teste e depois estimava duas coisas: em que percentil ela achava que tinha ficado (comparada aos outros participantes) e quantas questões achava que tinha acertado.</p>

<p>Aí vem o passo metodológico que importa entender, porque é a raiz de toda a discussão que veio depois. Os pesquisadores não plotaram cada pessoa individualmente. Eles dividiram os participantes em quatro grupos, do quarto de desempenho mais baixo ao mais alto, tiraram a média de desempenho real e a média de autoavaliação dentro de cada grupo, e compararam essas quatro médias.</p>

<p>O resultado clássico, no estudo de humor: quem ficou no grupo de desempenho mais baixo (percentil 12, em média) estimou estar por volta do percentil 58. Quem ficou no grupo mais alto (percentil 88, em média) estimou estar por volta do percentil 62, uma leve subestimação.<sup class="cit"><a href="#f1">1</a></sup> Padrões parecidos, com números um pouco diferentes, apareceram nos estudos de lógica e gramática.</p>

<div class="marca consenso">
<span class="rot">O que o estudo original mostrou, com precisão</span>
<p>Pessoas com desempenho baixo em uma tarefa tendem a superestimar bastante o próprio desempenho nela, e pessoas com desempenho alto tendem a subestimar levemente o próprio desempenho, quando os grupos são comparados por médias. Isso é diferente de "quanto pior alguém é, mais confiante fica" e diferente de "os incompetentes acham que são os melhores de todos". Ninguém no estudo, em nenhum grupo, estimou estar acima do percentil 70 em média. O grupo mais fraco não achava que era genial. Achava que era mediano.</p>
</div>

<h3>Por que uma correlação simples pode enganar aqui</h3>

<p>Isso é o tipo de raciocínio que vale entender além deste caso específico, porque aparece toda vez que alguém compara "o que a pessoa disse que fez" com "o que ela realmente fez".</p>

<p>Imagine que você mede a altura de cem pessoas duas vezes, com uma fita métrica ruim que erra um pouco para cima ou para baixo, ao acaso, a cada medição. Agora pegue as pessoas que saíram mais baixas na primeira medição. Em média, na segunda medição elas vão aparecer um pouco mais altas, não porque cresceram, mas porque uma medição baixa por acaso tem mais chance de ter sido um erro para baixo do que uma medição alta de verdade. O oposto acontece com quem saiu mais alto na primeira medição. Isso é regressão à média, descrita pela primeira vez por Francis Galton no século 19, e é pura estatística: acontece com qualquer medida imperfeita, sem nenhum fenômeno psicológico por trás.</p>

<p>Agora troque "altura medida duas vezes por uma fita ruim" por "desempenho real numa prova" e "desempenho que a pessoa acha que teve". A autoavaliação é uma medida barulhenta: depende de humor, de quanto a pessoa gosta de se gabar, de quão bem ela entende a própria prova, de fatores que nada têm a ver com competência real. Se você pegar quem tirou nota baixa na prova de verdade e comparar com o que essas mesmas pessoas disseram sobre si, uma parte do "elas se acharam melhores do que são" pode ser só esse mesmo efeito de régua ruim, e não um traço psicológico chamado "os incompetentes não se conhecem".</p>

<div class="marca controverso">
<span class="rot">O ponto em disputa, resumido para quem está começando</span>
<p>Ninguém discute que o gráfico popular do Monte Estúpido é uma invenção sem base nos dados. O que está em disputa, entre pesquisadores sérios, é quanto do padrão que Kruger e Dunning mediram em 1999 reflete algo real sobre como as pessoas julgam a própria competência, e quanto é um artefato de como a comparação foi calculada e desenhada. A resposta, com base no que se sabe hoje, é: uma parte é real, mas bem menor do que a fama do efeito sugere, e uma parte considerável é artefato estatístico.</p>
</div>

<h3>Como isso deveria mudar a forma de ler manchetes de ciência do comportamento</h3>

<p>Três perguntas resolvem grande parte do problema, aqui e em qualquer outro estudo sobre autoavaliação. Que exatamente foi medido, separado da frase de efeito usada para descrevê-lo? Quantas pessoas participaram, e o resultado foi calculado em cima de indivíduos ou de médias de grupo? E existe uma explicação estatística chata, tipo erro de medição, que sozinha já produziria um padrão parecido, mesmo sem nenhum comportamento humano interessante envolvido?</p>

<p>No caso do efeito Dunning-Kruger, aplicar essas três perguntas não faz o fenômeno desaparecer. Faz ele encolher para um tamanho mais defensável, e essa é uma vitória do método, não uma decepção.</p>
` },

aprofundamento: { minutos: 30, html: `
<h3>O desenho experimental completo dos quatro estudos</h3>

<p>Kruger e Dunning testaram a hipótese de que a mesma incompetência que produz erros também compromete a capacidade metacognitiva de reconhecer esses erros, o que chamaram de <strong>déficit duplo</strong>: incompetente na tarefa e incompetente em avaliar a própria incompetência na tarefa.<sup class="cit"><a href="#f1">1</a></sup></p>

<div class="tabela-env">
<table>
<thead><tr><th>Estudo</th><th>Tarefa</th><th>N</th><th>Quartil inferior: desempenho real vs. estimado</th><th>Quartil superior: desempenho real vs. estimado</th></tr></thead>
<tbody>
<tr><td>1</td><td>Avaliar humor de piadas (calibrado contra humoristas profissionais)</td><td>65</td><td>percentil 12 vs. ~58 estimado</td><td>percentil 88 vs. ~62 estimado</td></tr>
<tr><td>2</td><td>Raciocínio lógico, 20 itens de estilo LSAT</td><td>45</td><td>percentil 12 vs. ~68 estimado</td><td>percentil 86 vs. ~74 estimado</td></tr>
<tr><td>3</td><td>Gramática, 20 itens de estilo concurso de professores</td><td>84</td><td>percentil 10 vs. ~67 estimado</td><td>percentil 89 vs. ~72 estimado</td></tr>
<tr><td>4</td><td>Lógica, problemas de seleção de Wason, com condição de treino</td><td>140</td><td>percentil 13 vs. ~55 estimado (antes do treino)</td><td>consistente com os anteriores</td></tr>
</tbody>
</table>
</div>

<p>O Estudo 3 teve uma segunda etapa, quatro a seis semanas depois: os mesmos participantes corrigiram provas de colegas e depois reavaliaram a si mesmos. O grupo de desempenho alto ajustou a autoavaliação para cima ao ver o quanto tinha ido melhor que os outros. O grupo de desempenho baixo, mesmo depois de corrigir provas melhores que a própria, manteve a autoavaliação praticamente inalterada. Esse é o achado que mais sustenta a leitura metacognitiva: não é só que erraram a estimativa uma vez, é que a evidência nova não corrigiu o erro.</p>

<p>O Estudo 4 acrescentou uma condição de treino em raciocínio lógico. Participantes do quartil inferior que passaram por um treino breve melhoraram tanto o desempenho quanto a calibração da autoavaliação; os que não passaram pelo treino, não. Kruger e Dunning usam esse resultado como argumento contra a explicação puramente estatística: se fosse só ruído de medição, treinar a habilidade não deveria consertar a calibração de forma tão específica.</p>

<h3>A primeira réplica crítica: Krueger e Mueller, 2002</h3>

<p>Joachim Krueger e Ross Mueller replicaram o desenho básico e propuseram uma explicação alternativa: regressão à média combinada com o <strong>viés do otimismo comparativo</strong> (a tendência geral de a maioria das pessoas se achar acima da média, em qualquer tarefa comum), sem necessidade de invocar um déficit metacognitivo específico dos incompetentes.<sup class="cit"><a href="#f3">3</a></sup></p>

<p>Kruger e Dunning responderam ponto a ponto.<sup class="cit"><a href="#f4">4</a></sup> Reconheceram que erro de medição contribui, mas argumentaram que não explica tudo: no Estudo 4, usando um teste de alta confiabilidade (correlação Spearman-Brown de 0,93 entre metades do teste), o quartil inferior ainda superestimava o próprio percentil em cerca de 40 pontos, mesmo depois de descontar estatisticamente o efeito da não confiabilidade. E lembraram que a métrica de Krueger e Mueller (correlação entre confiança e acerto) mede algo diferente de calibração absoluta: é possível ter correlação perfeita entre confiança e acerto e, ainda assim, estar sistematicamente superconfiante em todos os níveis, do mesmo jeito que um previsor do tempo pode acertar sempre a ordem dos dias mais e menos chuvosos e mesmo assim errar a probabilidade absoluta de chuva todo santo dia.</p>

<h3>A crítica que mudou o debate: ruído puro produz o mesmo gráfico</h3>

<p>A virada veio de um grupo liderado por Edward Nuhfer, geólogo e pesquisador de ensino de ciências, com colaboradores incluindo o estatístico Christopher Cogan e Steven Fleisher, numa dupla de artigos na revista <em>Numeracy</em>, em 2016 e 2017.<sup class="cit"><a href="#f5">5</a></sup><sup class="cit"><a href="#f6">6</a></sup></p>

<p>A demonstração é direta e pode ser refeita por qualquer pessoa com uma planilha. Gere dois conjuntos de números aleatórios, sem nenhuma relação causal entre si: chame um de "desempenho real simulado" e outro de "autoavaliação simulada". Divida os casos simulados em quartis pelo primeiro número, como Kruger e Dunning fizeram, e calcule a média do segundo número dentro de cada quartil. O gráfico que sai daí, usando dados que não têm absolutamente nenhuma psicologia dentro, se parece de forma incômoda com o gráfico de 1999.</p>

<div class="marca consenso">
<span class="rot">Por que isso acontece: autocorrelação e regressão à média combinadas</span>
<p>O mecanismo tem duas camadas. Primeiro, dividir por quartis de desempenho real e depois comparar com a média de autoavaliação dentro de cada grupo introduz uma forma de autocorrelação: você está selecionando os grupos por uma variável (desempenho) e depois olhando outra variável medida com erro (autoavaliação) dentro desses mesmos grupos selecionados. Segundo, como qualquer medida imperfeita regride em direção à média quando comparada a si mesma ou a outra medida correlacionada, quem foi selecionado por estar no extremo baixo de uma medida tende a aparecer mais perto da média na outra, e vice-versa no extremo alto. O resultado combinado é exatamente o padrão de "os de baixo superestimam, os de cima subestimam levemente", sem que nenhuma mente precise ter julgado mal coisa nenhuma.</p>
</div>

<p>Patrick McKnight, estatístico da George Mason University, refez a simulação de forma independente em R e chegou ao mesmo padrão, chamando a atenção para um ponto contraintuitivo: o efeito simulado fica <strong>mais forte</strong> quanto mais ruído de medição você adiciona aos dados aleatórios.<sup class="cit"><a href="#f7">7</a></sup> Isso é um sinal de alerta metodológico sério, porque nenhuma descoberta científica genuína deveria ficar mais visível quando a qualidade da medição piora. Erro de medição melhora achados só quando o achado é, ao menos em parte, o próprio erro de medição.</p>

<h3>O gráfico que esconde e o gráfico que revela</h3>

<p>Nuhfer e colegas mostram que grande parte do problema é de escolha de visualização, não só de estatística. Plotar a <em>diferença</em> entre autoavaliação e desempenho real (o "erro") no eixo vertical, contra o desempenho real no eixo horizontal, quase garante um padrão de inclinação, porque a variável do eixo horizontal está algebricamente embutida também no eixo vertical: se erro = autoavaliação − desempenho, e desempenho está nos dois lados da equação com sinais opostos, uma correlação negativa aparente entre "erro" e "desempenho" pode surgir mesmo sem relação real entre autoavaliação e desempenho. É esse tipo de gráfico derivado que domina a literatura de divulgação e mesmo parte da literatura acadêmica sobre o tema. Os autores recomendam, em vez disso, o gráfico direto de autoavaliação (eixo y) contra desempenho real (eixo x), pessoa por pessoa ou por médias bem calculadas, com a linha de identidade y = x marcada para referência.</p>

<h3>Gignac e Zajenkowski, 2020: testando com métodos que não têm esse problema</h3>

<p>Gilles Gignac e Marcin Zajenkowski atacaram a questão de outro ângulo, com uma amostra de 929 adultos que fizeram um teste de inteligência fluida (Matrizes Progressivas Avançadas de Raven) e se autoavaliaram quanto à própria inteligência.<sup class="cit"><a href="#f8">8</a></sup> Em vez de dividir em quartis, usaram duas ferramentas que não sofrem do problema de autocorrelação: o teste de Glejser para heterocedasticidade (que testaria se o erro de autoavaliação varia sistematicamente conforme o nível de habilidade, como a hipótese de Dunning-Kruger prevê) e regressão não linear (quadrática), para checar se a relação entre inteligência real e autoavaliada tem a curvatura que o efeito popular sugere.</p>

<p>Não encontraram heterocedasticidade estatisticamente significativa, e a relação entre inteligência medida e autoavaliada saiu essencialmente linear, sem a curvatura prevista pela versão forte da hipótese. A conclusão dos autores, na formulação exata do título do artigo: o efeito é <strong>"mostly a statistical artefact"</strong>, majoritariamente um artefato estatístico, embora reconheçam que alguma versão mais modesta do fenômeno pode ser real para certas habilidades.</p>

<h3>A réplica que veio depois, e por que ela é a peça mais equilibrada do quebra-cabeça</h3>

<p>Esse não foi o fim da história. Oliver Dunkel e colegas, em 2023, apontaram limitações na amostra e no método de Gignac e Zajenkowski, refizeram a análise com dados próprios e com técnicas estatísticas ajustadas, e <strong>encontraram um efeito Dunning-Kruger estatisticamente significativo</strong>, na direção prevista pela hipótese original.<sup class="cit"><a href="#f9">9</a></sup></p>

<div class="marca emergente">
<span class="rot">A síntese mais defensável hoje</span>
<p>Juntando Nuhfer, Gignac e Zajenkowski, e Dunkel e colegas, o quadro que emerge não é "o efeito é real como a fama diz" nem "o efeito não existe". É: existe um viés metacognitivo genuíno, na direção de pessoas com desempenho baixo superestimarem mais do que pessoas com desempenho alto subestimam, mas o <strong>tamanho de efeito</strong> é pequeno, o suficiente para os próprios autores de 2023 escreverem que "a magnitude do efeito era mínima, o que põe em questão sua relevância prática". Isso é compatível com boa parte do que a divulgação popular descreve ser, na verdade, artefato de método somado a um núcleo real bem mais discreto do que o anunciado.</p>
</div>

<h3>O que Dunning e Kruger próprios dizem sobre a fama do efeito</h3>

<p>Vale registrar que David Dunning nunca defendeu a versão "burro demais para saber que é burro" que circula por aí. Em textos de divulgação posteriores ele enfatizou que o achado é sobre todo mundo, não sobre um grupo de pessoas hipoteticamente estúpidas: a dificuldade de avaliar a própria competência num domínio que a pessoa mal conhece é uma característica geral da cognição humana, não um defeito de uma minoria.<sup class="cit"><a href="#f10">10</a></sup> Isso não resolve a disputa estatística, mas mostra que parte da distância entre o efeito como praticado na pesquisa e o efeito como consumido na cultura vem também de uma leitura popular mais dura e mais moralista do que o próprio autor jamais propôs.</p>
` },

extensao: { minutos: 60, html: `
<h3>Por que corrigir o artefato não faz o problema sumir por completo</h3>

<p>Um ceticismo preguiçoso diria: "é tudo estatística, esqueça". Isso erra por excesso, do mesmo jeito que o meme popular erra por excesso na direção contrária. Há pelo menos três linhas de evidência que sobrevivem depois de controlar autocorrelação e regressão à média.</p>

<p>Primeiro, o resultado de treino do Estudo 4 original: melhorar a habilidade real melhorou a calibração de forma específica, algo que ruído de medição sozinho não deveria produzir. Segundo, o resultado de feedback do Estudo 3: ver o desempenho de outras pessoas corrigiu a autoavaliação de quem tinha ido bem e não corrigiu a de quem tinha ido mal, uma assimetria que também não é prevista por regressão à média pura, que deveria puxar ambos os grupos de volta para a média de forma simétrica. Terceiro, a réplica de Dunkel e colegas com métodos livres de autocorrelação ainda encontrou um efeito, ainda que pequeno.<sup class="cit"><a href="#f9">9</a></sup></p>

<p>A leitura mais cuidadosa, portanto, não é "artefato versus efeito real", como se fosse só um dos dois. É uma soma: um artefato estatístico real, que infla a aparência do fenômeno quando o desenho analítico é o de 1999, mais um núcleo metacognitivo genuíno, que é bem menor do que a soma total costuma sugerir.</p>

<h3>O papel da assimetria: por que "os de baixo erram mais" não é simétrico a "os de cima acertam mais"</h3>

<p>Um ponto que se perde com frequência: mesmo nas leituras mais céticas quanto ao tamanho do efeito, a assimetria entre subestimação e superestimação tende a aparecer de novo em meta-análises sobre calibração e sobre o efeito difícil-fácil (<em>hard-easy effect</em>), descrito por Sarah Lichtenstein e Baruch Fischhoff já nos anos 1970: em tarefas difíceis, as pessoas em geral tendem à superconfiança; em tarefas fáceis, à subconfiança.<sup class="cit"><a href="#f11">11</a></sup> Isso é um fenômeno anterior e mais amplo do que o desenho específico de Kruger e Dunning, e ajuda a explicar por que uma versão modesta e assimétrica do padrão continua aparecendo mesmo em análises que eliminam a autocorrelação: pessoas com baixo desempenho estão, quase por definição, enfrentando uma tarefa que se revelou difícil para elas, o que empurra a confiança para cima por um mecanismo diferente do "déficit metacognitivo específico dos incompetentes".</p>

<div class="marca controverso">
<span class="rot">Debate em aberto</span>
<p>Não há consenso sobre quanto do "núcleo genuíno" que sobra depois de remover o artefato de autocorrelação é, na verdade, uma manifestação do efeito difícil-fácil mais geral, e quanto é algo específico sobre competência e metacognição como Kruger e Dunning propuseram originalmente. Separar as duas coisas exigiria desenhos experimentais que ainda não foram feitos de forma definitiva, e é uma das perguntas abertas mais interessantes da área.</p>
</div>

<h3>O problema da amostra: só estudantes universitários dos Estados Unidos</h3>

<p>Os quatro estudos originais usaram exclusivamente estudantes de graduação de Cornell, uma população extremamente específica: jovem, com alta escolaridade, de um país e de uma cultura particulares.<sup class="cit"><a href="#f1">1</a></sup> Isso importa porque existe uma literatura ampla, separada da linha de pesquisa de Dunning e Kruger, mostrando que a tendência geral de autoavaliação positiva (o chamado viés do otimismo comparativo, ou <em>better-than-average effect</em>) varia por cultura: é forte e bem documentada em amostras norte-americanas e da Europa Ocidental, e mais fraca, ausente ou até invertida em algumas amostras do Leste Asiático, onde normas culturais de modéstia favorecem o autoapagamento (<em>self-effacement</em>) em vez do autoengrandecimento.<sup class="cit"><a href="#f12">12</a></sup></p>

<div class="marca emergente">
<span class="rot">O que se pode e o que não se pode concluir daqui</span>
<p>Essa literatura não é sobre o desenho exato de Kruger e Dunning, e réplicas do efeito Dunning-Kruger especificamente fora de amostras ocidentais e universitárias são escassas. O que dá para dizer com segurança é que a generalização "isso vale para qualquer ser humano em qualquer cultura" nunca foi testada de forma adequada pelos estudos originais, e que a literatura vizinha sobre autoavaliação sugere que seria arriscado assumir isso sem checar.</p>
</div>

<h3>O que o formato do gráfico ensina sobre ler ciência do comportamento em geral</h3>

<p>Esse caso é um bom treino para uma habilidade que vale muito além da psicologia: notar quando uma variável aparece dos dois lados de um cálculo. Sempre que um "efeito" é definido como a diferença ou a razão entre duas medidas que compartilham uma delas (autoavaliação menos desempenho, plotado contra o próprio desempenho; lucro por ação dividido por preço, plotado contra o próprio preço; ganho de peso dividido pelo peso inicial, plotado contra o peso inicial), existe risco de autocorrelação matemática produzindo um padrão que parece um achado substantivo. A pergunta de verificação é sempre a mesma: se eu gerar números aleatórios sem nenhuma relação causal e aplicar a mesma conta, o padrão aparece do mesmo jeito? Se aparece, o gráfico não está mostrando o que a legenda diz que está mostrando, pelo menos não sozinho.</p>

<h3>Por que o mito sobrevive mesmo depois de desmentido tantas vezes</h3>

<p>Vale nomear, com honestidade, por que a versão exagerada do efeito Dunning-Kruger é tão resistente a correção. Ela funciona como uma ferramenta social: permite descartar a opinião de quem discorda de você atribuindo a discordância a um déficit cognitivo presumido, sem examinar o argumento em si. Isso não é uma crítica exclusiva a quem usa o termo de forma errada; é uma tendência geral de como ideias psicológicas populares evoluem para caber em disputas cotidianas, e vale a pena reconhecer esse uso quando alguém, incluindo você mesmo, invoca o efeito Dunning-Kruger numa discussão. A pergunta útil não é "essa pessoa está no Monte Estúpido", que é uma imagem que nunca existiu nos dados. É "essa pessoa teve acesso a feedback de qualidade sobre a própria competência nessa tarefa específica, e reagiu a ele".</p>

<div class="marca consenso">
<span class="rot">O que segurar</span>
<p>O gráfico popular da curva de confiança com o Monte Estúpido é uma invenção de 2014, sem base em nenhum artigo científico. O estudo original de 1999, com quatro amostras pequenas de estudantes de Cornell, encontrou que grupos de baixo desempenho superestimam bastante a própria posição relativa e grupos de alto desempenho a subestimam de leve, usando uma comparação de médias por quartil. Uma parte substancial dessa assinatura estatística reaparece em dados inteiramente aleatórios, por autocorrelação e regressão à média, o que Nuhfer e colegas demonstraram de forma direta e reprodutível, e Gignac e Zajenkowski reforçaram com métodos livres desse problema. Ainda assim, réplicas mais recentes com técnicas que evitam a autocorrelação, como a de Dunkel e colegas em 2023, continuam encontrando um efeito real na direção prevista, só que pequeno. A conclusão mais honesta hoje: existe um viés metacognitivo genuíno de avaliação da própria competência, mas ele é modesto, provavelmente entrelaçado com o efeito difícil-fácil mais geral, pouco testado fora de amostras universitárias ocidentais, e muito menor do que a versão que vira meme.</p>
</div>
` }
},

sintese: {
  definicoes: [
    { termo: "Efeito Dunning-Kruger", def: "Achado de Kruger e Dunning (1999): em comparações por grupos de desempenho, quem tem desempenho baixo numa tarefa tende a superestimar bastante a própria posição relativa, e quem tem desempenho alto tende a subestimá-la de leve." },
    { termo: "Autocorrelação (neste contexto)", def: "Distorção estatística que surge quando uma variável usada para formar grupos ou calcular uma diferença aparece, direta ou indiretamente, nos dois lados da comparação, produzindo um padrão aparente mesmo sem relação causal real." },
    { termo: "Regressão à média", def: "Tendência de valores extremos numa medida imperfeita se aproximarem da média quando a mesma quantidade é medida de novo ou comparada a outra medida correlacionada, por efeito puramente estatístico, descrita por Francis Galton." },
    { termo: "Viés do otimismo comparativo (better-than-average effect)", def: "Tendência geral da maioria das pessoas de se avaliar acima da média em tarefas comuns e desejáveis, fenômeno distinto do efeito Dunning-Kruger, embora frequentemente confundido com ele." },
    { termo: "Efeito difícil-fácil (hard-easy effect)", def: "Padrão descrito por Lichtenstein e Fischhoff nos anos 1970: as pessoas tendem à superconfiança em tarefas difíceis e à subconfiança em tarefas fáceis, independentemente de nível geral de competência." },
    { termo: "Heterocedasticidade", def: "Situação em que a variabilidade (ou o erro) de uma medida não é constante ao longo dos valores de outra variável; testá-la é uma forma mais rigorosa de checar se o erro de autoavaliação muda sistematicamente com o nível de habilidade." }
  ],
  lembrar: [
    "O gráfico do 'Monte Estúpido', com pico de confiança e platô de sustentabilidade, não está em nenhum artigo científico. Foi criado por um consultor de gestão em 2014, como ilustração de senso comum, não como resumo de dados.",
    "O estudo de 1999 usou quatro amostras pequenas de estudantes de Cornell (entre 45 e 140 pessoas cada), comparadas por médias de quartil, não indivíduo por indivíduo, e nenhum grupo médio se autoavaliou acima do percentil 74.",
    "Boa parte do padrão observado reaparece em dados totalmente aleatórios, sem nenhuma psicologia envolvida, por causa de autocorrelação estatística e regressão à média. Isso foi demonstrado de forma reprodutível por Nuhfer e colegas.",
    "Gignac e Zajenkowski (2020), com métodos que evitam esse problema, não encontraram a curvatura prevista pela versão forte da hipótese e chamaram o efeito de 'majoritariamente um artefato estatístico'.",
    "Isso não é a palavra final: Dunkel e colegas (2023), replicando com amostra e métodos ajustados, encontraram um efeito real e estatisticamente significativo, mas de magnitude pequena o bastante para questionar sua relevância prática.",
    "A leitura mais defensável hoje é uma soma, não uma escolha: existe artefato estatístico relevante e existe um núcleo metacognitivo genuíno, e o núcleo genuíno é bem menor do que a fama popular do efeito sugere.",
    "Os quatro estudos originais só usaram estudantes universitários dos Estados Unidos. Generalizar para 'qualquer pessoa em qualquer cultura' nunca foi testado pelos dados originais."
  ],
  confusoes: [
    { erro: "O efeito Dunning-Kruger diz que pessoas muito incompetentes acham que são gênios ou especialistas", correcao: "Nos dados de 1999, o grupo de desempenho mais baixo se estimava por volta da média (percentil 55 a 68), não perto do topo. O erro é achar que se acha ótimo; o erro real medido é achar que está na média quando, na verdade, está muito abaixo dela." },
    { erro: "O gráfico da curva com o 'Monte Estúpido' vem do estudo de Dunning e Kruger", correcao: "Foi criado por um consultor de gestão, Joseph Paris, num post de blog de 2014, sem relação com dados de pesquisa. Não existe esse gráfico em nenhum artigo científico sobre o tema." },
    { erro: "O estudo mostra que quanto mais burra a pessoa, mais confiante ela fica, numa escala contínua", correcao: "O desenho original compara apenas quatro grupos (quartis) por médias, não modela uma curva contínua de confiança versus competência. A ideia de uma curva com pico e vale é uma extrapolação visual posterior, não algo estimado a partir dos dados." },
    { erro: "A crítica estatística mostrou que o efeito Dunning-Kruger não existe", correcao: "A crítica mais rigorosa (Nuhfer et al., Gignac e Zajenkowski) mostrou que boa parte do padrão clássico é artefato de método. Mas uma réplica posterior com métodos livres desse artefato (Dunkel et al., 2023) ainda encontrou um efeito real, pequeno mas estatisticamente significativo." },
    { erro: "O termo se aplica a qualquer pessoa confiante que discorda de você numa discussão", correcao: "Usar o efeito dessa forma pressupõe medir competência e autoavaliação de forma pareada e comparável, o que uma discussão informal não faz. O próprio Dunning enfatizou que o achado é sobre uma dificuldade geral da cognição humana, não um rótulo para desqualificar interlocutores específicos." }
  ],
  numeros: [
    "Kruger, J. & Dunning, D. (1999), Journal of Personality and Social Psychology, vol. 77, no. 6, p. 1121-1134, publicado por pesquisadores de Cornell.",
    "Quatro estudos: humor (N=65), lógica com itens estilo LSAT (N=45), gramática (N=84), lógica com problemas de seleção de Wason e condição de treino (N=140).",
    "Quartil inferior no estudo de humor: desempenho real no percentil 12, autoavaliação em torno do percentil 58; quartil superior: percentil 88 real contra cerca de 62 estimado.",
    "Gráfico do 'Monte Estúpido': criado por Joseph Paris em post de blog de 11 de setembro de 2014, sem base em dados de pesquisa.",
    "Nuhfer, Cogan, Fleisher e colegas: artigos de 2016 e 2017 na revista Numeracy, usando simulações com números aleatórios e uma amostra real de 1.154 pessoas em ciência literácia.",
    "Gignac & Zajenkowski (2020), Intelligence: amostra de 929 adultos, teste de Matrizes Progressivas Avançadas de Raven, conclusão de que o efeito é 'mostly a statistical artefact'.",
    "Dunkel et al. (2023), Intelligence: réplica e resposta a Gignac e Zajenkowski, encontrando efeito real, estatisticamente significativo, porém de magnitude pequena."
  ]
},

flashcards: [
  { f: "O gráfico popular do 'Monte Estúpido' (confiança vs. competência) aparece no artigo original de Dunning e Kruger?", v: "Não. Não existe em nenhum artigo científico sobre o tema. Foi criado por Joseph Paris, um consultor de gestão, num post de blog de 2014, como ilustração de senso comum." },
  { f: "Quantos estudos compõem o artigo original de 1999, e que tarefas usaram?", v: "Quatro estudos com estudantes de Cornell: um de humor (avaliar piadas contra o julgamento de humoristas profissionais), dois de raciocínio lógico e um de gramática." },
  { f: "Como os pesquisadores compararam desempenho real e autoavaliação no desenho original?", v: "Dividiram os participantes em quatro grupos por quartil de desempenho real e compararam a média de desempenho de cada grupo com a média de autoavaliação dentro do mesmo grupo, não indivíduo por indivíduo." },
  { f: "No estudo de humor, qual foi o resultado do quartil de desempenho mais baixo?", v: "Desempenho real no percentil 12, em média, contra autoavaliação em torno do percentil 58. O grupo se via como mediano, não como excelente." },
  { f: "Qual é a explicação estatística (autocorrelação e regressão à média) que ameaça o achado clássico?", v: "Selecionar grupos por uma medida imperfeita (desempenho) e depois comparar com outra medida imperfeita e correlacionada (autoavaliação) tende a produzir, por si só, o padrão de 'baixo desempenho superestima, alto desempenho subestima', mesmo em dados totalmente aleatórios, sem nenhum viés psicológico real." },
  { f: "O que Nuhfer e colegas demonstraram usando números aleatórios?", v: "Que gerar dois conjuntos de números sem nenhuma relação causal, dividi-los em quartis do mesmo jeito que Kruger e Dunning fizeram, produz um gráfico visualmente parecido com o gráfico de 1999, mostrando que parte do padrão é artefato de método." },
  { f: "O que McKnight observou sobre o efeito e o ruído de medição, e por que isso é um sinal de alerta?", v: "O padrão simulado ficava mais forte quanto mais ruído de medição era adicionado aos dados aleatórios. Isso é suspeito porque nenhuma descoberta científica genuína deveria ficar mais evidente quando a qualidade da medição piora." },
  { f: "O que Gignac e Zajenkowski (2020) fizeram de diferente metodologicamente, e o que encontraram?", v: "Usaram teste de heterocedasticidade e regressão quadrática, em vez de comparação por quartis, com 929 adultos e um teste real de inteligência fluida. Não encontraram a curvatura prevista pela hipótese, e concluíram que o efeito é majoritariamente um artefato estatístico." },
  { f: "O que Dunkel e colegas (2023) encontraram ao replicar e responder a Gignac e Zajenkowski?", v: "Com amostra e métodos ajustados, encontraram um efeito Dunning-Kruger real e estatisticamente significativo, na direção prevista, mas de magnitude pequena, o suficiente para questionarem sua relevância prática." },
  { f: "Qual é a leitura mais defensável hoje sobre o efeito Dunning-Kruger, juntando as críticas e as réplicas?", v: "Existe artefato estatístico relevante inflando o achado clássico, e existe também um núcleo metacognitivo genuíno, real mas pequeno, provavelmente entrelaçado com o efeito difícil-fácil mais geral. Não é 'tudo estatística' nem 'o efeito é exatamente como a fama descreve'." },
  { f: "Que evidência dentro do próprio estudo de 1999 argumenta contra a explicação puramente estatística?", v: "No Estudo 4, treinar participantes de baixo desempenho em raciocínio lógico melhorou tanto o desempenho quanto a calibração da autoavaliação, de forma específica ao treino recebido. Regressão à média sozinha não prevê esse tipo de melhora ligada a uma intervenção específica." },
  { f: "Por que a amostra dos estudos originais limita a generalização do efeito?", v: "Os quatro estudos usaram só estudantes universitários dos Estados Unidos. Há literatura mostrando que a tendência geral de autoavaliação positiva varia por cultura, sendo mais fraca ou ausente em algumas amostras do Leste Asiático, e réplicas específicas do desenho de Dunning-Kruger fora de amostras ocidentais são escassas." }
],

prova: [
  { camada: "nucleo",
    q: "O famoso gráfico da 'curva de confiança' com o pico do Monte Estúpido:",
    alts: [
      "É a Figura 1 do artigo original de Kruger e Dunning de 1999.",
      "Foi criado por um consultor de gestão em 2014, sem base em dados de pesquisa, e não aparece em nenhum artigo científico sobre o tema.",
      "É uma média das quatro figuras dos quatro estudos originais.",
      "Foi desenhado por David Dunning para uma palestra de divulgação em 2005."
    ],
    correta: 1,
    porque: "O gráfico foi publicado por Joseph Paris num post de blog de 2014, como ilustração de senso comum, e nunca teve origem em dados de pesquisa. Confundir essa imagem com o conteúdo do artigo original é o erro mais comum sobre o tema." },

  { camada: "nucleo",
    q: "No estudo de humor de Kruger e Dunning (1999), o que o grupo de desempenho mais baixo (quartil inferior) estimou sobre sua própria posição?",
    alts: [
      "Estar entre os melhores, próximo do percentil 90.",
      "Estar próximo da mediana, em torno do percentil 58, apesar de ter ficado no percentil real 12.",
      "Estar exatamente no percentil correto, sem erro de calibração.",
      "Estar abaixo da média, reconhecendo corretamente seu baixo desempenho."
    ],
    correta: 1,
    porque: "O achado clássico é superestimação para uma posição mediana, não para o topo. Nenhum grupo médio, em nenhum dos quatro estudos, se autoavaliou acima do percentil 74. A ideia popular de que os piores 'se acham os melhores de todos' não corresponde aos números do artigo." },

  { camada: "nucleo",
    q: "Por que uma comparação simples entre 'desempenho real' e 'quanto a pessoa disse que fez' pode enganar, mesmo sem nenhum viés psicológico real?",
    alts: [
      "Porque pessoas sempre mentem em autoavaliações.",
      "Porque a autoavaliação é uma medida imperfeita e, ao selecionar grupos por uma medida e compará-los com outra medida correlacionada e com erro, a regressão à média tende a produzir o padrão de 'quem estava embaixo aparenta subir, quem estava em cima aparenta descer', por estatística pura.",
      "Porque testes de desempenho nunca têm erro de medição.",
      "Porque a amostra de 1999 era grande demais para captar variação individual."
    ],
    correta: 1,
    porque: "Esse é o mecanismo de regressão à média, descrito originalmente por Galton: ele afeta qualquer medida imperfeita comparada a si mesma ou a outra medida correlacionada, e não depende de nenhuma mentira ou traço psicológico. É a base da crítica estatística ao desenho clássico." },

  { camada: "aprofundamento",
    q: "Qual foi a demonstração central de Nuhfer e colegas nos artigos de 2016 e 2017 na revista Numeracy?",
    alts: [
      "Que estudantes universitários mentem sistematicamente em autoavaliações.",
      "Que gerar dois conjuntos de números aleatórios sem nenhuma relação causal, e dividi-los em quartis do mesmo modo que Kruger e Dunning fizeram, produz um gráfico visualmente semelhante ao de 1999.",
      "Que o efeito Dunning-Kruger só aparece em testes de lógica, não em testes de humor ou gramática.",
      "Que o efeito desaparece completamente ao aumentar o tamanho da amostra."
    ],
    correta: 1,
    porque: "A força dessa demonstração é justamente não depender de nenhum dado humano: dados puramente aleatórios, processados com o mesmo procedimento de quartis, reproduzem boa parte do padrão visual clássico, o que aponta para autocorrelação e regressão à média como explicação parcial, não para mentira ou variação por domínio de teste." },

  { camada: "aprofundamento",
    q: "Patrick McKnight observou que a versão simulada do efeito Dunning-Kruger, com dados aleatórios, ficava mais forte quando:",
    alts: [
      "O tamanho da amostra aumentava.",
      "O ruído de medição na autoavaliação simulada aumentava.",
      "O número de quartis usados na divisão diminuía para dois.",
      "Os dados eram gerados com distribuição normal em vez de uniforme."
    ],
    correta: 1,
    porque: "Mais ruído de medição tornava o padrão mais visível, o que é um sinal de alerta: nenhuma descoberta científica genuína deveria ficar mais forte quando a qualidade da medição piora. Isso indica que o próprio ruído, e não um fenômeno substantivo, está gerando parte do padrão observado." },

  { camada: "aprofundamento",
    q: "O que Gignac e Zajenkowski (2020) fizeram de diferente em relação ao desenho clássico por quartis, e o que concluíram?",
    alts: [
      "Usaram uma amostra menor e um teste de humor, concluindo que o efeito é ainda maior do que se pensava.",
      "Usaram teste de heterocedasticidade e regressão quadrática com dados individuais e um teste real de inteligência, não encontrando a curvatura prevista, e concluindo que o efeito é majoritariamente um artefato estatístico.",
      "Repetiram exatamente o desenho de 1999 com uma amostra maior e confirmaram integralmente o resultado original.",
      "Usaram apenas entrevistas qualitativas, sem nenhuma medida quantitativa de desempenho."
    ],
    correta: 1,
    porque: "A escolha metodológica evita o problema de autocorrelação da divisão por quartis. Sem heterocedasticidade significativa e com relação essencialmente linear entre inteligência real e autoavaliada, os autores concluíram que a versão forte do efeito não se sustenta, chamando-o de majoritariamente artefato estatístico." },

  { camada: "aprofundamento",
    q: "Qual evidência, dentro do próprio artigo de 1999, é usada para argumentar que o resultado não é só regressão à média?",
    alts: [
      "O fato de os quatro estudos terem sido feitos na mesma universidade.",
      "O resultado do Estudo 4, em que treinar o quartil inferior em raciocínio lógico melhorou tanto o desempenho quanto a calibração da autoavaliação, de forma específica ao treino.",
      "O fato de a amostra ter sido dividida em quartis em vez de tercis.",
      "O uso de testes de humor em vez de testes de lógica."
    ],
    correta: 1,
    porque: "Regressão à média sozinha não prevê que uma intervenção específica (treino em lógica) melhore a calibração de forma proporcional à melhora de habilidade. Esse resultado experimental é um dos argumentos mais fortes de Kruger e Dunning contra a explicação puramente estatística, embora não resolva a questão do tamanho do artefato nos dados observacionais." },

  { camada: "extensao",
    q: "O que Dunkel e colegas (2023) encontraram ao replicar e responder à crítica de Gignac e Zajenkowski?",
    alts: [
      "Confirmaram que o efeito não existe de forma alguma.",
      "Encontraram um efeito Dunning-Kruger estatisticamente significativo, mas de magnitude pequena, questionando sua relevância prática.",
      "Encontraram um efeito maior do que o relatado originalmente em 1999.",
      "Não conseguiram coletar dados suficientes para qualquer conclusão."
    ],
    correta: 1,
    porque: "Esse resultado é a peça que equilibra o quadro: nem o artefato explica tudo, nem o efeito é do tamanho da fama popular. Existe um núcleo real, pequeno e estatisticamente detectável com métodos que evitam autocorrelação." },

  { camada: "extensao",
    q: "Por que o efeito difícil-fácil (hard-easy effect) de Lichtenstein e Fischhoff é relevante para entender o que resta do efeito Dunning-Kruger depois de remover o artefato estatístico?",
    alts: [
      "Porque ele mostra que a superconfiança em tarefas difíceis é um padrão mais amplo e anterior ao desenho específico de 1999, o que dificulta separar quanto do 'núcleo genuíno' é um déficit metacognitivo específico de baixo desempenho e quanto é esse padrão geral.",
      "Porque ele prova que pessoas com baixo desempenho sempre estão certas sobre si mesmas.",
      "Porque ele elimina qualquer necessidade de considerar autocorrelação nos dados.",
      "Porque ele só se aplica a testes de humor, o único domínio testado por Kruger e Dunning que envolve julgamento subjetivo."
    ],
    correta: 0,
    porque: "Quem tem baixo desempenho está, quase por definição, lidando com uma tarefa que se revelou difícil para ele, o que por si só empurra a confiança para cima segundo o efeito difícil-fácil, independente de qualquer défice metacognitivo específico sobre a própria competência. Separar essas duas explicações é uma pergunta de pesquisa em aberto." },

  { camada: "extensao",
    q: "Qual é a limitação de generalização mais direta dos quatro estudos originais de Kruger e Dunning?",
    alts: [
      "Usaram apenas testes de matemática, um domínio pouco relevante fora da sala de aula.",
      "A amostra era formada inteiramente por estudantes universitários dos Estados Unidos, e a literatura sobre autoavaliação sugere variação cultural relevante nesse tipo de viés, pouco testada com o desenho específico de Dunning-Kruger.",
      "Os estudos não tinham nenhuma medida objetiva de desempenho.",
      "Os participantes sabiam de antemão qual hipótese estava sendo testada."
    ],
    correta: 1,
    porque: "As quatro amostras eram de graduandos de Cornell. Isso não invalida os achados dentro dessa população, mas torna a extrapolação para 'qualquer pessoa em qualquer cultura' uma inferência não testada, especialmente à luz de evidências de que o viés geral de autoavaliação positiva varia entre culturas ocidentais e não ocidentais." },

  { camada: "extensao",
    q: "Do ponto de vista metodológico geral, qual é o alerta que o caso do efeito Dunning-Kruger ensina sobre gráficos derivados, como 'erro' (autoavaliação menos desempenho) plotado contra o próprio desempenho?",
    alts: [
      "Que gráficos derivados são sempre mais informativos que gráficos diretos.",
      "Que, quando uma variável aparece nos dois lados de um cálculo (por exemplo, subtraída de outra e também usada como eixo), pode surgir um padrão aparente por pura autocorrelação matemática, mesmo sem relação causal real, e o teste de sanidade é ver se dados aleatórios reproduzem o mesmo padrão.",
      "Que gráficos derivados só são um problema em estudos com amostras pequenas.",
      "Que esse problema é exclusivo da psicologia e não aparece em outras áreas."
    ],
    correta: 1,
    porque: "O princípio vale muito além da psicologia, aparecendo em economia, biologia e outras áreas sempre que uma diferença ou razão compartilha uma variável com um dos eixos do gráfico. O teste de sanidade descrito, aplicar o mesmo cálculo a dados aleatórios sem relação causal, é exatamente o que Nuhfer e colegas fizeram para expor o problema no caso Dunning-Kruger." }
],

fontes: [
  { n: 1, tipo: "fonte primária", ref: "Kruger, J. &amp; Dunning, D. 'Unskilled and Unaware of It: How Difficulties in Recognizing One's Own Incompetence Lead to Inflated Self-Assessments'. <em>Journal of Personality and Social Psychology</em> 77(6):1121-1134, 1999.", url: "https://doi.org/10.1037/0022-3514.77.6.1121" },
  { n: 2, tipo: "reportagem", ref: "McGill Office for Science and Society. 'The Dunning-Kruger Effect Is Probably Not Real'. Artigo de Jonathan Jarry sobre a origem do gráfico do 'Monte Estúpido' e a crítica estatística ao efeito.", url: "https://www.mcgill.ca/oss/article/critical-thinking/dunning-kruger-effect-probably-not-real" },
  { n: 3, tipo: "crítica", ref: "Krueger, J. &amp; Mueller, R. A. 'Unskilled, unaware, or both? The better-than-average heuristic and statistical regression predict errors in estimates of own performance'. <em>Journal of Personality and Social Psychology</em> 82(2):180-188, 2002.", url: "https://doi.org/10.1037/0022-3514.82.2.180" },
  { n: 4, tipo: "réplica", ref: "Kruger, J. &amp; Dunning, D. 'Unskilled and unaware, but why? A reply to Krueger and Mueller (2002)'. <em>Journal of Personality and Social Psychology</em> 82(2):189-192, 2002.", url: "https://sites.lsa.umich.edu/sasi/wp-content/uploads/sites/275/2015/11/krugerdunning02.pdf" },
  { n: 5, tipo: "artigo", ref: "Nuhfer, E., Cogan, C., Fleisher, S., Gaze, E. &amp; Wirth, K. 'Random Number Simulations Reveal How Random Noise Affects the Measurements and Graphical Portrayals of Self-Assessed Competency'. <em>Numeracy</em> 9(1), Art. 4, 2016.", url: "https://digitalcommons.usf.edu/numeracy/vol9/iss1/art4/" },
  { n: 6, tipo: "artigo", ref: "Nuhfer, E., Fleisher, S., Cogan, C., Wirth, K. &amp; Gaze, E. 'How Random Noise and a Graphical Convention Subverted Behavioral Scientists' Explanations of Self-Assessment Data: Numeracy Underlies Better Alternatives'. <em>Numeracy</em> 10(1), Art. 4, 2017.", url: "https://digitalcommons.usf.edu/numeracy/vol10/iss1/art4/" },
  { n: 7, tipo: "divulgação", ref: "Arel-Bundock, V. 'Is Dunning-Kruger a statistical artefact?', com referência à réplica em R de Patrick McKnight sobre o efeito em dados puramente aleatórios.", url: "https://arelbundock.com/posts/dunning_kruger/" },
  { n: 8, tipo: "artigo", ref: "Gignac, G. E. &amp; Zajenkowski, M. 'The Dunning-Kruger effect is (mostly) a statistical artefact: Valid approaches to testing the hypothesis with individual differences data'. <em>Intelligence</em> 80, 101449, 2020.", url: "https://doi.org/10.1016/j.intell.2020.101449" },
  { n: 9, tipo: "réplica", ref: "Dunkel, C. S., Kim, J. &amp; van der Linden, D. et al. 'Reevaluating the Dunning-Kruger effect: A response to and replication of Gignac and Zajenkowski (2020)'. <em>Intelligence</em> 96, 101719, 2023.", url: "https://doi.org/10.1016/j.intell.2022.101719" },
  { n: 10, tipo: "entrevista", ref: "Dunning, D. 'We Are All Confident Idiots'. <em>Pacific Standard</em>, 2014. Ensaio de divulgação em que Dunning descreve o efeito como uma característica geral da cognição humana, não um traço de um grupo de pessoas incompetentes.", url: "https://psmag.com/social-justice/confident-idiots-92793" },
  { n: 11, tipo: "artigo", ref: "Lichtenstein, S. &amp; Fischhoff, B. 'Do those who know more also know more about how much they know?'. <em>Organizational Behavior and Human Performance</em> 20(2):159-183, 1977. Descrição original do efeito difícil-fácil na calibração de confiança.", url: "https://doi.org/10.1016/0030-5073(77)90001-0" },
  { n: 12, tipo: "artigo", ref: "Heine, S. J. &amp; Hamamura, T. 'In Search of East Asian Self-Enhancement'. <em>Personality and Social Psychology Review</em> 11(1):4-27, 2007. Meta-análise sobre variação cultural do viés de autoavaliação positiva.", url: "https://doi.org/10.1177/1088868306294587" },
  { n: 13, tipo: "enciclopédia", ref: "Britannica. Verbete 'Dunning-Kruger effect', com resumo do desenho experimental original e da recepção do conceito.", url: "https://www.britannica.com/science/Dunning-Kruger-effect" },
  { n: 14, tipo: "vídeo", ref: "IFLScience. 'The Dunning-Kruger Effect: How Does It Affect Us, And Does It Even Exist?'. Cobertura de divulgação científica sobre a controvérsia estatística.", url: "https://www.iflscience.com/the-dunningkruger-effect-how-does-it-affect-us-and-does-it-even-exist-60281" },
  { n: 15, tipo: "notícia institucional", ref: "The Decision Lab. Verbete sobre o efeito Dunning-Kruger, com resumo do estudo original e de críticas metodológicas posteriores.", url: "https://thedecisionlab.com/biases/dunning-kruger-effect" },
  { n: 16, tipo: "documento oficial", ref: "American Psychological Association PsycNET. Registro do artigo original de Kruger e Dunning (1999) e de sua réplica de 2002 na base de dados oficial da APA.", url: "https://psycnet.apa.org/record/1999-15054-002" }
]
};
