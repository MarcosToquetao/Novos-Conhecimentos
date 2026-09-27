CONTEUDOS["nnt-risco"] = {
termo: "NNT e risco relativo versus absoluto",
area: "Medicina",
subtitulo: "Quando uma manchete diz que um remédio reduz o risco de um evento, o número que importa pode ser outro. NNT e risco absoluto mostram quantas pessoas precisam ser tratadas para evitar um evento, e isso muda a decisão.",
prerequisitos: "Entender que um estudo compara dois grupos e que risco é a proporção de pessoas que sofre um desfecho. Ajuda saber que uma diferença pode ser estatisticamente significativa e ainda assim pequena na prática.",
conexoes: [
 {
  "termo": "Efeito placebo e nocebo",
  "relacao": "O grupo controle pode receber placebo, e a resposta ao placebo afeta o risco basal e, portanto, o NNT calculado."
 },
 {
  "termo": "Por que estudos de nutrição se contradizem",
  "relacao": "Muitos estudos relatam só risco relativo, o que exagera efeitos pequenos e ajuda a explicar contradições aparentes."
 },
 {
  "termo": "O que o valor-p realmente significa",
  "relacao": "O valor-p diz se a diferença provavelmente se deve ao acaso; o NNT traz a informação sobre o tamanho prático do efeito."
 },
 {
  "termo": "Poder estatístico e estudos subdimensionados",
  "relacao": "Estudos pequenos têm intervalos de confiança largos para o NNT, e o NNT pode parecer preciso quando não é."
 },
 {
  "termo": "Rastreamento e sobrediagnóstico",
  "relacao": "Em rastreamento, o NNT para evitar uma morte é alto, e é preciso considerar diagnósticos que nunca causariam sintomas."
 }
],

camadas: {

nucleo: { minutos: 4, html: `
<p class="abre">Um anúncio diz que certo remédio reduz o risco de infarto em 36%. A pessoa pensa: 'um terço a menos, muito bom'. Mas o estudo que gerou esse número tinha 2,67% de eventos no grupo controle e 1,65% no grupo tratado, durante 3,3 anos<sup class="cit"><a href="#f1">1</a></sup>. A queda relativa é de 36%, mas a queda absoluta é de pouco mais de 1 ponto percentual. Para evitar um infarto, foi preciso tratar 98 pessoas por 3,3 anos<sup class="cit"><a href="#f1">1</a></sup>. O número 98 é o NNT, e ele muda a conversa.</p><h3>O que o risco relativo esconde</h3><p>O risco relativo compara a taxa de eventos entre dois grupos. Se o grupo controle tem 2,67% de eventos e o tratado tem 1,65%, a razão é 1,65 dividido por 2,67, que dá 0,62. A conta simples dá uma redução relativa de 38%; o estudo informou 36%, calculado por outro método<sup class="cit"><a href="#f1">1</a></sup>. O número parece grande, mas não diz quantas pessoas precisam ser tratadas. O risco absoluto é a diferença direta: 2,67% menos 1,65% é igual a 1,02 ponto percentual<sup class="cit"><a href="#f1">1</a></sup>. Essa diferença é a redução absoluta do risco. O NNT é o inverso dela: 1 dividido por 0,0102, que dá 98,04<sup class="cit"><a href="#f1">1</a></sup>. Arredonda-se para 98. Ou seja, 98 pessoas tratadas por 3,3 anos para evitar um evento cardiovascular.</p><p>O mesmo remédio, se aplicado a uma população com risco basal maior, teria NNT menor. Se o risco de infarto no controle fosse 20% e a redução relativa se mantivesse em 36%, a redução absoluta seria 7,2 pontos percentuais, e o NNT cairia para cerca de 14. Por isso o NNT não é uma propriedade fixa do remédio: depende do risco de base da pessoa<sup class="cit"><a href="#f2">2</a></sup>.</p><h3>Como o NNT é calculado e o que ele significa</h3><p>O NNT é definido como o inverso da redução absoluta do risco. A fórmula usa a incidência no grupo controle (Iu) e no grupo tratado (Ie): NNT = 1 / (Iu - Ie)<sup class="cit"><a href="#f1">1</a></sup>. O resultado é o número médio de pacientes que precisam ser tratados para evitar um desfecho ruim adicional. Quanto maior o NNT, menos eficaz é o tratamento<sup class="cit"><a href="#f1">1</a></sup>.</p><p>Um exemplo com números redondos: se um remédio reduz a mortalidade de 10% para 5%, a redução absoluta é 5 pontos percentuais, e o NNT é 20. Isso quer dizer que, em média, 20 pessoas precisam tomar o remédio para que uma sobreviva além do que sobreviveria sem ele. As outras 19 tomam o remédio sem ganhar o benefício, e algumas podem ter efeitos colaterais.</p><p>O NNT foi descrito em 1988 por Laupacis, Sackett e Roberts, e desde então é usado para comunicar eficácia de intervenções<sup class="cit"><a href="#f1">1</a></sup>. Ele também tem um análogo para danos, o NNH (number needed to harm), que indica quantas pessoas precisam ser tratadas para causar um evento adverso adicional<sup class="cit"><a href="#f1">1</a></sup>.</p><div class="marca consenso"><span class="rot">Consenso</span><p>A redução absoluta do risco e o NNT são medidas aceitas para expressar o efeito de um tratamento. O NNT é o inverso da diferença entre as taxas de eventos do grupo controle e do grupo tratado, e depende do risco de base da população estudada<sup class="cit"><a href="#f1">1</a></sup><sup class="cit"><a href="#f2">2</a></sup>.</p></div><h3>Um número, muitos contextos</h3><p>O NNT pode variar com o tempo de observação. No tratamento do AVC com ativador de plasminogênio tecidual, o NNT para benefício foi de 3,6 quando a terapia começou até 90 minutos após os sintomas, mas subiu para 19,3 quando iniciada entre 271 e 360 minutos<sup class="cit"><a href="#f3">3</a></sup>. O mesmo tratamento, em janelas de tempo diferentes, tem relações benefício-dano muito distintas.</p><p>O NNT também ajuda a comparar benefícios e riscos. Em estudos de antidepressivos, o NNT para resposta foi 8 para vilazodona, e o NNH para descontinuação por efeito adverso foi 27<sup class="cit"><a href="#f4">4</a></sup>. A razão NNH/NNT, chamada de probabilidade de ser ajudado ou prejudicado, foi de 27 dividido por 8, aproximadamente 3,4, indicando que o benefício era mais provável que o dano naquele contexto<sup class="cit"><a href="#f4">4</a></sup>. Em outro exemplo, aripiprazol adjuvante teve NNT para resposta entre 7 e 14, e NNH para acatisia de 6<sup class="cit"><a href="#f5">5</a></sup>.</p><p>Esses números não decidem sozinhos. Eles informam a conversa entre médico e paciente, que considera gravidade do desfecho, preferências e custos<sup class="cit"><a href="#f1">1</a></sup>. Mas sem eles, a decisão fica baseada apenas no risco relativo, que costuma ser mais impressionante e menos informativo.</p>
` },

aprofundamento: { minutos: 5, html: `
<p>O modo de pensar da área parte de uma pergunta simples: se eu tratar um grupo de pessoas, quantas se beneficiam? O risco relativo responde a uma pergunta diferente: o tratamento muda a proporção de eventos em quantos por cento? As duas respostas podem parecer contraditórias quando o risco basal é baixo. Um remédio que reduz o risco de 1 em 100 para 0,5 em 100 tem redução relativa de 50%, mas redução absoluta de 0,5 ponto percentual, e NNT de 200. A manchete diria 'reduz pela metade', e a pessoa tratada teria grande chance de não se beneficiar.</p><p>Para calcular o NNT a partir de um estudo, é preciso ter as taxas de eventos nos dois grupos. Muitos artigos publicam apenas o risco relativo ou a razão de chances. Em uma revisão de cinco grandes revistas médicas, entre 359 ensaios clínicos com efeito significativo, apenas 8 reportaram o NNT, e 18 reportaram a redução absoluta do risco<sup class="cit"><a href="#f6">6</a></sup>. A maioria usou apenas medidas relativas. Isso dificulta a avaliação do impacto real.</p><p>Quando o desfecho é o tempo até um evento, o cálculo do NNT fica mais complexo. A redução absoluta não é constante ao longo do tempo; ela depende do tempo de seguimento e da taxa de eventos em cada instante. Por isso, métodos específicos para dados de sobrevivência foram desenvolvidos para estimar o NNT em diferentes pontos no tempo<sup class="cit"><a href="#f7">7</a></sup>. O NNT calculado no final do estudo pode não valer para o primeiro mês, por exemplo.</p><p>Outro problema aparece quando se tenta combinar resultados de vários estudos em uma meta-análise. Se os ensaios têm riscos basais muito diferentes, somar os grupos como se fossem um único estudo pode levar a resultados enganosos. Um exemplo mostrou que a direção do efeito pode até se inverter, um caso da paradoxo de Simpson<sup class="cit"><a href="#f8">8</a></sup>. A recomendação é usar medidas relativas, como risco relativo ou razão de chances, e aplicá-las a diferentes níveis de risco basal para gerar um NNT específico<sup class="cit"><a href="#f8">8</a></sup>.</p><p>O NNT também não tem uma única definição. A fórmula clássica 1/(Iu - Ie) assume que o tratamento não pode prejudicar ninguém, ou seja, que não há pessoas que pioram por causa dele. Na prática, alguns podem ser beneficiados e outros prejudicados. Nesse caso, o inverso da diferença de riscos dá apenas um limite superior para o NNT verdadeiro<sup class="cit"><a href="#f1">1</a></sup>. A abordagem moderna usa a probabilidade de necessidade e suficiência (PNS, na sigla em inglês), que estima a chance de uma pessoa melhorar se tratada e não melhorar se não tratada. A partir do PNS, calcula-se o NNT como seu inverso, mas, por envolver cenários contrafactuais, só é possível obter limites, não um valor exato<sup class="cit"><a href="#f1">1</a></sup>.</p><p>O intervalo de confiança do NNT é outro ponto delicado. Como o NNT é o inverso de uma diferença, quando a diferença se aproxima de zero, o NNT tende ao infinito, e o intervalo de confiança pode ficar sem sentido prático. Alguns métodos propostos para calcular esses intervalos foram avaliados e considerados equivocados<sup class="cit"><a href="#f9">9</a></sup>. Por isso, alguns autores defendem que é melhor reportar a redução absoluta do risco e o risco basal em vez do NNT<sup class="cit"><a href="#f9">9</a></sup>.</p><table><thead><tr><th>Medida</th><th>O que expressa</th><th>Limitação principal</th></tr></thead><tbody><tr><td>Risco relativo</td><td>Quantas vezes o risco muda em termos proporcionais</td><td>Ignora o risco de base; pode exagerar efeitos pequenos</td></tr><tr><td>Redução absoluta do risco</td><td>Diferença direta entre as taxas de eventos</td><td>Pode ser pequena e parecer desanimadora</td></tr><tr><td>NNT</td><td>Quantas pessoas tratar para evitar um evento</td><td>Depende do tempo e do risco basal; intervalo de confiança problemático</td></tr></tbody></table><p>Para o clínico, o NNT é mais intuitivo que a redução absoluta. Um estudo mostrou que o NNT pode ser facilmente calculado com um nomograma, o que facilita o uso à beira do leito<sup class="cit"><a href="#f10">10</a></sup>. No entanto, o mesmo artigo alerta que o NNT não deve ser usado quando não se sabe se a redução relativa é constante para todos os níveis de risco, nem para períodos maiores que os estudados<sup class="cit"><a href="#f10">10</a></sup>.</p><p>Em meta-análises, a suposição de risco relativo constante foi testada. Em 55 meta-análises, comparou-se o risco relativo de cada ensaio com o risco relativo agrupado dos demais. A concordância foi alta, acima de 82%, mesmo quando o risco basal variava bastante<sup class="cit"><a href="#f11">11</a></sup>. Isso dá algum suporte à prática de individualizar o NNT aplicando o risco relativo ao risco esperado do paciente, mas não é uma garantia universal.</p><p>O NNT não é uma medida isolada. Ele ganha sentido quando acompanhado do NNH e do tempo de tratamento. A razão entre NNH e NNT, chamada de probabilidade de ser ajudado ou prejudicado, resume o balanço<sup class="cit"><a href="#f12">12</a></sup><sup class="cit"><a href="#f4">4</a></sup><sup class="cit"><a href="#f5">5</a></sup>. Por exemplo, se o NNT é 10 e o NNH é 30, a razão é 3, indicando que o benefício é três vezes mais provável que o dano<sup class="cit"><a href="#f12">12</a></sup>. Mas essa razão também depende do desfecho escolhido e do tempo.</p>
` },

extensao: { minutos: 3, html: `
<p>Ler NNT e risco absoluto muda como você consome notícias de saúde. Uma manchete que diz 'novo remédio reduz risco de câncer de pulmão em 20%' pode se referir a uma queda de 5% para 4%, com NNT de 100. Saber disso não torna o remédio inútil, mas coloca a decisão em outra escala. O mesmo vale para decisões de políticas públicas: um programa de rastreamento com NNT alto para evitar uma morte pode gerar muitos diagnósticos e tratamentos desnecessários, um fenômeno conhecido como sobrediagnóstico.</p><p>Na farmacoeconomia, o NNT é usado para decidir se um medicamento caro vale a pena ser reembolsado. Se o desfecho é grave e o NNT é alto, ainda pode ser indicado; se o desfecho é leve, um NNT alto pode levar à recusa de cobertura<sup class="cit"><a href="#f1">1</a></sup>. Seguradoras e sistemas de saúde usam essas medidas para comparar intervenções.</p><p>Para quem lê um artigo científico, a recomendação é procurar as taxas de eventos nos dois grupos, calcular a diferença e o inverso. Se o artigo não traz esses números, desconfie. A ausência de redução absoluta e NNT é comum, mesmo em revistas de alto impacto<sup class="cit"><a href="#f6">6</a></sup>. Aprender a fazer essa conta simples devolve o poder de julgar o tamanho real de um efeito.</p><p>O conceito também se conecta ao valor-p e ao poder estatístico. Um resultado estatisticamente significativo pode ter NNT enorme, e um estudo pequeno pode ter intervalo de confiança tão largo que o NNT real pode ser muito incerto. Entender isso evita conclusões exageradas.</p>
` }

},

sintese: {
 "definicoes": [
  {
   "termo": "Risco relativo",
   "def": "Razão entre a taxa de eventos do grupo tratado e a do grupo controle. Diz quantas vezes o risco muda em termos proporcionais, mas ignora o risco de base."
  },
  {
   "termo": "Redução absoluta do risco",
   "def": "Diferença direta entre a taxa de eventos do grupo controle e a do grupo tratado. É o quanto o risco cai em pontos percentuais."
  },
  {
   "termo": "NNT",
   "def": "Número necessário para tratar. É o inverso da redução absoluta do risco: quantas pessoas precisam ser tratadas para evitar um evento adicional."
  },
  {
   "termo": "NNH",
   "def": "Número necessário para causar dano. Indica quantas pessoas precisam ser tratadas para provocar um evento adverso adicional."
  },
  {
   "termo": "Probabilidade de ser ajudado ou prejudicado",
   "def": "Razão entre NNH e NNT. Resume o balanço entre a chance de benefício e a de dano em determinado contexto."
  },
  {
   "termo": "Sobrediagnóstico",
   "def": "Diagnósticos e tratamentos desnecessários gerados por programas de rastreamento com NNT alto para evitar um desfecho grave."
  }
 ],
 "lembrar": [
  "O risco relativo compara proporções e pode parecer grande mesmo quando a queda absoluta é pequena.",
  "A redução absoluta do risco é a diferença direta entre as taxas de eventos dos dois grupos.",
  "O NNT é o inverso da redução absoluta do risco e depende do risco de base da população.",
  "O NNT muda com o tempo de observação: o mesmo tratamento tem NNT de 3,6 até 90 minutos e 19,3 entre 271 e 360 minutos no AVC.",
  "O NNT ganha sentido quando acompanhado do NNH e do tempo de tratamento.",
  "Muitos ensaios publicam só medidas relativas, o que dificulta avaliar o impacto real."
 ],
 "confusoes": [
  {
   "erro": "Pensar que uma redução relativa de 36% significa evitar um terço dos eventos em qualquer pessoa.",
   "correcao": "A redução relativa não diz quantas pessoas precisam ser tratadas. Nesse caso, a queda absoluta foi de pouco mais de 1 ponto percentual e o NNT foi 98."
  },
  {
   "erro": "Achar que o NNT é uma propriedade fixa do remédio.",
   "correcao": "O NNT depende do risco de base. Se o risco no controle fosse 20% e a redução relativa se mantivesse em 36%, o NNT cairia para cerca de 14."
  },
  {
   "erro": "Somar resultados de estudos com riscos basais muito diferentes como se fossem um único estudo.",
   "correcao": "Isso pode levar a resultados enganosos e até inverter a direção do efeito, um caso do paradoxo de Simpson."
  },
  {
   "erro": "Usar o NNT como valor exato, mesmo quando a diferença de riscos se aproxima de zero.",
   "correcao": "Quando a diferença se aproxima de zero, o NNT tende ao infinito e o intervalo de confiança perde sentido prático."
  },
  {
   "erro": "Concluir que um resultado estatisticamente significativo indica benefício grande.",
   "correcao": "Um resultado significativo pode ter NNT enorme, e um estudo pequeno pode ter intervalo de confiança tão largo que o NNT real fica incerto."
  }
 ],
 "numeros": [
  "No estudo do anúncio, o grupo controle teve 2,67% de eventos e o tratado 1,65%, com redução absoluta de 1,02 ponto percentual e NNT de 98.",
  "No AVC tratado com ativador de plasminogênio tecidual, o NNT foi 3,6 até 90 minutos, mas subiu para 19,3 entre 271 e 360 minutos.",
  "Em estudos de vilazodona, o NNT para resposta foi 8 e o NNH para descontinuação por efeito adverso foi 27, com razão de aproximadamente 3,4.",
  "O aripiprazol adjuvante teve NNT para resposta entre 7 e 14 e NNH para acatisia de 6.",
  "Entre 359 ensaios clínicos com efeito significativo em cinco grandes revistas, apenas 8 reportaram o NNT e 18 reportaram a redução absoluta do risco."
 ]
},

flashcards: [
 {
  "f": "O que o risco relativo mede?",
  "v": "Mede quantas vezes o risco muda em termos proporcionais, comparando a taxa de eventos entre dois grupos. Ele ignora o risco de base."
 },
 {
  "f": "O que é a redução absoluta do risco?",
  "v": "É a diferença direta entre a taxa de eventos do grupo controle e a do grupo tratado, em pontos percentuais."
 },
 {
  "f": "Como se calcula o NNT?",
  "v": "O NNT é o inverso da redução absoluta do risco: 1 dividido pela diferença entre a incidência no controle e no tratado."
 },
 {
  "f": "O que significa um NNT de 98?",
  "v": "Significa que 98 pessoas precisam ser tratadas para evitar um evento adicional no período estudado. Muitas tomam o remédio sem ganhar o benefício."
 },
 {
  "f": "O NNT é uma propriedade fixa do remédio?",
  "v": "Não. Ele depende do risco de base da população e do tempo de observação."
 },
 {
  "f": "Como o risco de base altera o NNT?",
  "v": "Quanto maior o risco de base, menor o NNT para a mesma redução relativa, porque a redução absoluta fica maior."
 },
 {
  "f": "O que é o NNH?",
  "v": "É o análogo do NNT para danos: quantas pessoas precisam ser tratadas para causar um evento adverso adicional."
 },
 {
  "f": "O que a razão entre NNH e NNT indica?",
  "v": "Indica a probabilidade de ser ajudado ou prejudicado. Se o NNT é 10 e o NNH é 30, o benefício é três vezes mais provável que o dano naquele contexto."
 },
 {
  "f": "Por que o tempo de observação importa para o NNT?",
  "v": "Porque a redução absoluta não é constante ao longo do tempo. No AVC, o NNT foi 3,6 até 90 minutos e 19,3 entre 271 e 360 minutos."
 },
 {
  "f": "Qual o problema de calcular o NNT em uma meta-análise?",
  "v": "Se os ensaios têm riscos basais muito diferentes, somar os grupos como se fossem um único estudo pode levar a resultados enganosos."
 },
 {
  "f": "O que é o paradoxo de Simpson no contexto do NNT?",
  "v": "É quando a direção do efeito se inverte ao combinar estudos com riscos basais diferentes. Por isso a recomendação é aplicar medidas relativas a cada nível de risco."
 },
 {
  "f": "O que o NNT representa em termos de benefício individual?",
  "v": "Que a maioria das pessoas tratadas não ganha o benefício, e algumas podem ter efeitos colaterais. O NNT descreve a média, não o destino de cada pessoa."
 }
],

prova: [
 {
  "camada": "nucleo",
  "q": "Um estudo mostra risco de 2,67% no grupo controle e 1,65% no grupo tratado. O que a redução relativa de 36% informa?",
  "alts": [
   "Quantas pessoas precisam ser tratadas para evitar um evento",
   "Quanto o risco caiu em pontos percentuais",
   "Quantas vezes o risco mudou em termos proporcionais",
   "O número de eventos adversos causados pelo tratamento"
  ],
  "correta": 2,
  "porque": "O risco relativo compara as taxas de forma proporcional. Ele não diz quantas pessoas tratar nem a queda em pontos percentuais, que foi de 1,02."
 },
 {
  "camada": "nucleo",
  "q": "Por que o NNT de um mesmo remédio pode ser menor em uma população com risco de base mais alto?",
  "alts": [
   "Porque a redução relativa aumenta automaticamente",
   "Porque a redução absoluta fica maior quando o risco de base é maior",
   "Porque o tempo de tratamento diminui",
   "Porque o número de efeitos colaterais cai"
  ],
  "correta": 1,
  "porque": "Com risco de base maior, a mesma redução relativa produz redução absoluta maior, e o NNT, sendo o inverso dela, fica menor. A redução relativa não aumenta sozinha."
 },
 {
  "camada": "nucleo",
  "q": "O que o NNT representa?",
  "alts": [
   "A proporção de pessoas que se beneficiam do tratamento",
   "O número médio de pessoas que precisam ser tratadas para evitar um evento adicional",
   "O risco de evento no grupo controle",
   "A diferença entre o NNH e o NNT"
  ],
  "correta": 1,
  "porque": "O NNT é o inverso da redução absoluta do risco: quantas pessoas tratar para evitar um evento adicional. Ele não é a proporção de beneficiados, que pode ser bem menor."
 },
 {
  "camada": "nucleo",
  "q": "Como o NNH se compara ao NNT?",
  "alts": [
   "O NNH mede o benefício e o NNT mede o dano",
   "O NNH indica quantas pessoas tratar para causar um evento adverso adicional",
   "O NNH é sempre maior que o NNT",
   "O NNH só se aplica a desfechos fatais"
  ],
  "correta": 1,
  "porque": "O NNH é o análogo do NNT para danos: quantas pessoas precisam ser tratadas para causar um evento adverso adicional. Não há relação fixa de tamanho entre eles."
 },
 {
  "camada": "nucleo",
  "q": "Um remédio reduz a mortalidade de 10% para 5%. Qual é o NNT?",
  "alts": [
   "5",
   "10",
   "20",
   "50"
  ],
  "correta": 2,
  "porque": "A redução absoluta é de 5 pontos percentuais, ou 0,05. O NNT é 1 dividido por 0,05, igual a 20. As outras alternativas não correspondem ao inverso da diferença."
 },
 {
  "camada": "nucleo",
  "q": "Qual é a principal limitação do risco relativo para o paciente?",
  "alts": [
   "Ele só pode ser calculado em estudos pequenos",
   "Ele ignora o risco de base e pode exagerar efeitos pequenos",
   "Ele depende do tempo de seguimento",
   "Ele não pode ser usado em meta-análises"
  ],
  "correta": 1,
  "porque": "O risco relativo compara proporções e não informa o risco de base, então um efeito absoluto pequeno pode parecer grande. Ele pode ser usado em meta-análises, o problema é outro."
 },
 {
  "camada": "aprofundamento",
  "q": "Por que o NNT calculado no final de um estudo pode não valer para o primeiro mês?",
  "alts": [
   "Porque a redução absoluta não é constante ao longo do tempo",
   "Porque o NNT só pode ser calculado com dados de sobrevivência",
   "Porque o risco relativo muda de sinal",
   "Porque o NNH é sempre maior no início"
  ],
  "correta": 0,
  "porque": "A redução absoluta varia com o tempo de seguimento, então o NNT depende do momento analisado. Métodos específicos para dados de sobrevivência foram desenvolvidos por isso."
 },
 {
  "camada": "aprofundamento",
  "q": "Qual é o problema de combinar em uma meta-análise ensaios com riscos basais muito diferentes?",
  "alts": [
   "O risco relativo deixa de ser calculável",
   "O resultado pode ser enganoso e a direção do efeito pode se inverter",
   "O NNT passa a ser sempre maior que o NNH",
   "O intervalo de confiança desaparece"
  ],
  "correta": 1,
  "porque": "Somar grupos com riscos basais distintos pode levar ao paradoxo de Simpson. A recomendação é usar medidas relativas e aplicá-las a cada nível de risco basal."
 },
 {
  "camada": "aprofundamento",
  "q": "Por que o intervalo de confiança do NNT é problemático?",
  "alts": [
   "Porque o NNT não tem erro de estimativa",
   "Porque quando a diferença de riscos se aproxima de zero o NNT tende ao infinito",
   "Porque o NNT só existe em estudos observacionais",
   "Porque o NNH nunca tem intervalo de confiança"
  ],
  "correta": 1,
  "porque": "Como o NNT é o inverso de uma diferença, quando ela se aproxima de zero o NNT tende ao infinito e o intervalo pode perder sentido prático. Alguns autores defendem reportar a redução absoluta e o risco basal."
 },
 {
  "camada": "extensao",
  "q": "Uma manchete diz que um remédio reduz o risco de câncer de pulmão em 20%, com queda de 5% para 4%. Qual é o NNT?",
  "alts": [
   "20",
   "25",
   "50",
   "100"
  ],
  "correta": 3,
  "porque": "A redução absoluta é de 1 ponto percentual, ou 0,01. O NNT é 1 dividido por 0,01, igual a 100. O valor 20 confunde a redução relativa com o número necessário para tratar."
 },
 {
  "camada": "extensao",
  "q": "Como o NNT pode ser usado em farmacoeconomia?",
  "alts": [
   "Para decidir se um medicamento caro vale a pena ser reembolsado conforme o desfecho",
   "Para substituir a análise de custo-efetividade",
   "Para estimar a prevalência da doença na população",
   "Para definir a dose do medicamento"
  ],
  "correta": 0,
  "porque": "O NNT ajuda a comparar intervenções e a decidir cobertura conforme a gravidade do desfecho. Ele não substitui a análise de custo-efetividade nem estima prevalência."
 }
],

fontes: [
 {
  "n": 1,
  "tipo": "enciclopédia",
  "ref": "Wikipédia (inglês), verbete 'Number needed to treat'. Consultado em 27/09/2026.",
  "url": "https://en.wikipedia.org/wiki/Number_needed_to_treat"
 },
 {
  "n": 2,
  "tipo": "artigo",
  "ref": "Richard J. Cook, David L Sackett. 'The number needed to treat: a clinically useful measure of treatment effect'. <em>BMJ</em>, 1995.",
  "url": "https://doi.org/10.1136/bmj.310.6977.452"
 },
 {
  "n": 3,
  "tipo": "artigo",
  "ref": "Maarten G. Lansberg, Maarten Schrooten, Erich Bluhmki, Vincent Thijs et al.. 'Treatment Time-Specific Number Needed to Treat Estimates for Tissue Plasminogen Activator Therapy in Acute Stroke Based on Shifts Over the Entire Range of the Modified Rankin Scale'. <em>Stroke</em>, 2009.",
  "url": "https://doi.org/10.1161/strokeaha.108.540708"
 },
 {
  "n": 4,
  "tipo": "revisão",
  "ref": "Leslie Citrome. 'Vilazodone for major depressive disorder: a systematic review of the efficacy and safety profile for this newly approved antidepressant - what is the number needed to treat, number needed to harm and likelihood to be helped or harmed?'. <em>International Journal of Clinical Practice</em>, 2012.",
  "url": "https://doi.org/10.1111/j.1742-1241.2011.02885.x"
 },
 {
  "n": 5,
  "tipo": "artigo",
  "ref": "Leslie Citrome. 'Adjunctive Aripiprazole, Olanzapine, or Quetiapine for Major Depressive Disorder: An Analysis of Number Needed to Treat, Number Needed to Harm, and Likelihood to be Helped or Harmed'. <em>Postgraduate Medicine</em>, 2010.",
  "url": "https://doi.org/10.3810/pgm.2010.07.2174"
 },
 {
  "n": 6,
  "tipo": "artigo",
  "ref": "Jim Nuovo. 'Reporting Number Needed to Treat and Absolute Risk Reduction in Randomized Controlled Trials'. <em>JAMA</em>, 2002.",
  "url": "https://doi.org/10.1001/jama.287.21.2813"
 },
 {
  "n": 7,
  "tipo": "artigo",
  "ref": "Douglas G. Altman, Per Kragh Andersen. 'Calculating the number needed to treat for trials where the outcome is time to an event'. <em>BMJ</em>, 1999.",
  "url": "https://doi.org/10.1136/bmj.319.7223.1492"
 },
 {
  "n": 8,
  "tipo": "artigo",
  "ref": "Christopher J Cates. 'Simpson's paradox and calculation of number needed to treat from meta-analysis'. <em>BMC Medical Research Methodology</em>, 2002.",
  "url": "https://doi.org/10.1186/1471-2288-2-1"
 },
 {
  "n": 9,
  "tipo": "artigo",
  "ref": "Jane L. Hutton. 'Number needed to treat and number needed to harm are not the best way to report and assess the results of randomised clinical trials'. <em>British Journal of Haematology</em>, 2009.",
  "url": "https://doi.org/10.1111/j.1365-2141.2009.07707.x"
 },
 {
  "n": 10,
  "tipo": "artigo",
  "ref": "Gilles Châtellier, Éric Zapletal, David Lemaitre, Joel Menard et al.. 'The number needed to treat: a clinically useful nomogram in its proper context'. <em>BMJ</em>, 1996.",
  "url": "https://doi.org/10.1136/bmj.312.7028.426"
 },
 {
  "n": 11,
  "tipo": "artigo",
  "ref": "Toshi A. Furukawa, Gordon Henry Guyatt, Lauren E. Griffith. 'Can we individualize the ‘number needed to treat’? An empirical study of summary effect measures in meta-analyses'. <em>International Journal of Epidemiology</em>, 2002.",
  "url": "https://doi.org/10.1093/ije/31.1.72"
 },
 {
  "n": 12,
  "tipo": "artigo",
  "ref": "Leslie Citrome, Terence A. Ketter. 'When does a difference make a difference? Interpretation of number needed to treat, number needed to harm, and likelihood to be helped or harmed'. <em>International Journal of Clinical Practice</em>, 2013.",
  "url": "https://doi.org/10.1111/ijcp.12142"
 }
],

fronteira: [{"tema": "Estimativa do NNT sem a suposição de monotonicidade", "html": "<p>A fórmula clássica do NNT assume que o tratamento não pode piorar ninguém. Na vida real, alguns podem se beneficiar e outros se prejudicar. A abordagem moderna usa probabilidades contrafactuais para estimar o NNT verdadeiro, mas, a partir de um ensaio clínico isolado, só é possível obter limites, não um valor exato. Hoje, isso é uma linha de pesquisa metodológica, com avanços teóricos, mas ainda sem aplicação rotineira na prática clínica<sup class=\"cit\"><a href=\"#f1\">1</a></sup>.</p>"}, {"tema": "Como reportar NNT versus redução absoluta do risco", "html": "<p>Há um debate sobre qual medida é mais adequada para comunicar resultados. Alguns autores argumentam que o NNT é intuitivo, mas tem problemas com intervalos de confiança e dependência do tempo. Outros defendem que a redução absoluta do risco acompanhada do risco basal é mais informativa e menos sujeita a erros. Não há consenso definitivo sobre qual é a melhor forma de reportar<sup class=\"cit\"><a href=\"#f9\">9</a></sup>.</p>"}],
};
