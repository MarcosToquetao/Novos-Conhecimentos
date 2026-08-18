CONTEUDOS["split-brain"] = {
termo: "Cérebro dividido: o experimento e a releitura",
area: "Neurociência",
subtitulo: "Cortar a ponte entre os dois hemisférios para tratar epilepsia grave produziu pacientes que pareciam abrigar dois sujeitos num crânio só. Cinquenta anos depois, um teste com desenho melhor, aplicado a dois desses pacientes, sugeriu algo diferente: a percepção se divide, a consciência talvez não. O campo não convergiu.",
prerequisitos: [
  "Nenhum pré-requisito técnico. Basta aceitar que o cérebro tem duas metades e que elas normalmente conversam.",
  "Para o aprofundamento: alguma familiaridade com a ideia de que um experimento pode ter resultado sólido e interpretação disputada."
],
conexoes: [
  { termo: "Problema difícil da consciência", relacao: "O caso dos pacientes calosotomizados é um dos poucos lugares em que teorias sobre a unidade da experiência encostam em dados empíricos concretos." },
  { termo: "Confabulação", relacao: "O intérprete do hemisfério esquerdo, proposto por Gazzaniga, é uma forma de confabulação: o sistema verbal produz uma explicação coerente para uma ação cuja causa real ele não conhece." },
  { termo: "Método da dupla dissociação", relacao: "A leitura clássica do cérebro dividido depende de mostrar que campo visual e via de resposta se cruzam de forma seletiva. É exatamente essa interação que o estudo de 2017 não encontrou." },
  { termo: "Crise de replicação", relacao: "Poucos pacientes, cirurgias heterogêneas e ausência de protocolo padronizado tornam a literatura clássica frágil pelos critérios metodológicos de hoje." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Em 1962, um paciente conhecido na literatura como W.J. passou por uma cirurgia rara. Ele tinha crises epilépticas graves que nenhum medicamento controlava, e as crises se espalhavam de um hemisfério do cérebro para o outro. Os cirurgiões Joseph Bogen e Philip Vogel cortaram a estrutura que faz a ligação entre as duas metades. A ideia era conter o incêndio elétrico em um lado só. Funcionou: as crises diminuíram muito. E, no exame clínico comum, W.J. parecia a mesma pessoa de antes.<sup class="cit"><a href="#f1">1</a></sup></p>

<p>Foi quando Roger Sperry e Michael Gazzaniga começaram a testá-lo com um desenho experimental feito sob medida que apareceu algo estranho.</p>

<h3>A anatomia mínima, em quatro fatos</h3>

<p><strong>Primeiro: o corpo caloso.</strong> É um feixe espesso de fibras nervosas, da ordem de duzentos milhões de axônios, que liga o hemisfério esquerdo ao direito.<sup class="cit"><a href="#f2">2</a></sup> É a maior via de comunicação entre as duas metades do cérebro. A cirurgia que o secciona chama-se calosotomia (quando também se cortam outras comissuras, fala-se em comissurotomia). O objetivo terapêutico é impedir que uma descarga epiléptica atravesse de um lado para o outro.</p>

<p><strong>Segundo: os campos visuais não são os olhos.</strong> Este ponto engana quase todo mundo na primeira vez. A divisão não é olho esquerdo contra olho direito. É a seguinte: fixe o olhar num ponto. Tudo o que estiver à esquerda desse ponto, visto por qualquer um dos dois olhos, projeta-se no hemisfério direito. Tudo o que estiver à direita projeta-se no hemisfério esquerdo. A troca acontece porque metade das fibras de cada olho cruza para o outro lado no quiasma óptico. Cada hemisfério recebe a metade oposta do mundo visual, não um olho inteiro.</p>

<p><strong>Terceiro: a linguagem falada é lateralizada.</strong> Na grande maioria das pessoas, a maquinaria que produz fala fica no hemisfério esquerdo. Entre destros, algo como 95 a 99% têm dominância esquerda para linguagem; entre canhotos, cerca de 70%.<sup class="cit"><a href="#f3">3</a></sup> Isso significa que, num cérebro dividido, o hemisfério direito pode compreender bastante coisa e mesmo assim não conseguir dizer nada.</p>

<p><strong>Quarto: as mãos também cruzam.</strong> A mão esquerda é controlada principalmente pelo hemisfério direito, e a mão direita pelo esquerdo. Isso dá ao experimentador duas vias de resposta separadas, uma para cada metade do cérebro.</p>

<figure class="figura">[[FIG:split-brain-campos]]<figcaption>O caminho da informação visual num cérebro intacto e num cérebro calosotomizado. Com o olhar fixo no ponto central, o que aparece à esquerda chega ao hemisfério direito e o que aparece à direita chega ao esquerdo. No cérebro intacto, o corpo caloso reúne as duas metades quase instantaneamente. Seccionado o corpo caloso, essa transferência cortical direta deixa de existir, e cada hemisfério fica com sua metade do campo visual.</figcaption></figure>

<h3>O desenho experimental clássico</h3>

<p>Junte os quatro fatos e o experimento se monta sozinho. O paciente fixa um ponto no centro de uma tela. Uma palavra ou uma figura pisca por uma fração de segundo em um dos lados, rápido demais para que o olho tenha tempo de se mover até lá. Depois pergunta-se o que ele viu, ou pede-se que ele apanhe um objeto com uma das mãos, atrás de um anteparo que impede que ele o veja.</p>

<p>O resultado que ficou nos livros didáticos:</p>

<ul>
<li>Palavra piscada no <strong>campo visual direito</strong> (portanto no hemisfério esquerdo, o que fala): o paciente lê a palavra em voz alta sem dificuldade.</li>
<li>Palavra piscada no <strong>campo visual esquerdo</strong> (portanto no hemisfério direito, mudo): o paciente diz que não viu nada. Mas, se pedirem que ele apanhe com a <strong>mão esquerda</strong> o objeto correspondente entre vários escondidos da vista, a mão escolhe o objeto certo. E a boca continua dizendo que não sabe por quê.</li>
</ul>

<p>Um lado do cérebro sabia. O outro lado, o que fala, não sabia, e mesmo assim respondia à pergunta com convicção. Sperry recebeu o Nobel de Fisiologia ou Medicina de 1981 por esse programa de pesquisa. Na conferência do Nobel, ele resumiu: "cada metade do cérebro parecia ter seu próprio domínio cognitivo, em grande medida separado, com suas próprias experiências privadas de percepção, aprendizagem e memória".<sup class="cit"><a href="#f4">4</a></sup></p>

<div class="marca consenso">
<span class="rot">O que está fora de disputa</span>
<p>A dissociação comportamental é um dos achados mais replicados da neuropsicologia. Pacientes com o corpo caloso seccionado nomeiam com facilidade o que aparece no campo visual direito, falham em nomear o que aparece no campo visual esquerdo, e demonstram com a mão esquerda que a informação chegou. Ninguém no debate atual contesta isso. A discussão é sobre o que esse padrão implica a respeito da experiência consciente do paciente.</p>
</div>

<h3>Como neurocientistas raciocinam a partir de uma lesão</h3>

<p>O método aqui é velho e continua central. Se uma estrutura é danificada e uma função desaparece, aquela estrutura provavelmente participa daquela função. É assim que Broca, em 1861, associou uma região frontal esquerda à produção da fala.</p>

<p>O passo mais forte é a <strong>dissociação dupla</strong>. Se a lesão A elimina a função 1 e preserva a 2, e a lesão B elimina a 2 e preserva a 1, então as duas funções dependem de máquinas parcialmente distintas. Isso é bem mais informativo do que observar uma única perda, porque afasta a explicação preguiçosa de que uma das tarefas é simplesmente mais difícil.</p>

<p>No cérebro dividido, o padrão esperado é uma dissociação cruzada entre campo visual e via de resposta: estímulo à direita responde bem pela fala e pela mão direita, estímulo à esquerda responde bem pela mão esquerda e mal pela fala. Guarde essa previsão. Ela é o eixo de tudo o que veio depois.</p>

<p>Duas cautelas que acompanham qualquer inferência por lesão. A primeira: mostrar que uma estrutura é necessária não é o mesmo que mostrar que ela é a sede da função. Cortar o cabo de força apaga a lâmpada sem que o cabo produza luz. A segunda: cérebros lesionados se reorganizam. O que se mede anos depois da cirurgia inclui tudo o que o paciente aprendeu a fazer para compensar.</p>

<div class="marca controverso">
<span class="rot">Onde começa a interpretação</span>
<p>De "os dois hemisférios processam informação separadamente" para "existem duas consciências dentro deste crânio" há um salto grande. O primeiro enunciado descreve dados. O segundo é uma tese sobre experiência subjetiva, e experiência subjetiva não é medida diretamente: ela é inferida a partir de relato verbal e de comportamento. Como um dos hemisférios não fala, o relato verbal só vem de um lado. A leitura das duas consciências foi dominante por décadas e continua defendida por pesquisadores sérios, mas é interpretação, não observação.</p>
</div>

<h3>Sobre os pacientes</h3>

<p>Vale dizer com sobriedade quem são essas pessoas. São pouquíssimas, com epilepsia refratária a medicação, submetidas a uma cirurgia de último recurso quando as crises ameaçavam a vida ou a possibilidade de ter uma vida. A calosotomia completa hoje é rara: técnicas melhores de mapeamento, ressecções focais, estimulação do nervo vago e calosotomias parciais cobrem a maior parte dos casos. Toda a literatura clássica repousa sobre um número de pacientes bem estudados que cabe numa mão e meia.<sup class="cit"><a href="#f5">5</a></sup> Eles cooperaram por décadas com equipes de pesquisa. Isso é ao mesmo tempo a origem do valor científico do material e a origem de seu limite principal.</p>
` },

aprofundamento: { minutos: 30, html: `
<h3>O aparato: apresentação taquistoscópica</h3>

<p><strong>Taquistoscópio</strong> é o nome do aparelho que expõe uma imagem por um intervalo controlado e muito curto. Nos estudos modernos ele virou um monitor com controle preciso de tempo, mas a lógica é a mesma e a exigência temporal é rígida.</p>

<p>Por que a pressa importa: um movimento voluntário dos olhos (uma sacada) leva algo em torno de 200 ms para ser iniciado e executado. Se o estímulo permanece na tela mais tempo que isso, o paciente move o olhar, e o estímulo passa a ocupar os dois campos visuais. A lateralização se perde e o experimento não mede nada. Por isso as apresentações ficam abaixo de 150 ms. Nos estudos recentes acrescenta-se rastreamento ocular, e as tentativas em que a fixação escorregou são descartadas.<sup class="cit"><a href="#f6">6</a></sup></p>

<p>O termo <strong>campo visual contralateral</strong> descreve a regra anatômica já apresentada: cada hemisfério recebe a metade do campo visual do lado oposto. Isso resulta do arranjo do quiasma óptico, em que as fibras da hemirretina nasal de cada olho cruzam a linha média e as da hemirretina temporal seguem sem cruzar. A consequência funcional é que cada hemisfério monta uma representação da metade oposta do mundo, e no cérebro intacto o corpo caloso costura as duas em algo que parece contínuo.</p>

<h3>O intérprete do hemisfério esquerdo</h3>

<p>O achado que mais viajou para fora da neurociência veio de um teste de conceitos simultâneos. Ao paciente P.S. mostrou-se, no mesmo instante, uma imagem diferente para cada hemisfério: uma pata de galinha no campo visual direito (hemisfério esquerdo) e uma cena de nevasca no campo visual esquerdo (hemisfério direito). Diante de um conjunto de figuras visíveis a ambos, ele deveria escolher com cada mão a que combinava.</p>

<p>A mão direita apontou uma galinha. A mão esquerda apontou uma pá. Escolhas corretas, cada uma para o hemisfério que tinha visto o estímulo. Perguntado por que escolheu aquilo, o paciente, falando pelo hemisfério esquerdo, que só tinha visto a pata de galinha, respondeu que a pata de galinha combina com a galinha e que é preciso uma pá para limpar o galinheiro.</p>

<p>Gazzaniga extraiu daí a proposta do <strong>intérprete</strong>: um mecanismo do hemisfério esquerdo que constrói, de forma imediata e sem esforço, teorias sobre a relação entre eventos percebidos, ações e sentimentos.<sup class="cit"><a href="#f7">7</a></sup> Ele não tinha acesso à causa real do gesto da mão esquerda. Produziu uma causa plausível e a apresentou com a mesma confiança de uma lembrança.</p>

<div class="marca emergente">
<span class="rot">Por que a tese do intérprete é interessante além do caso clínico</span>
<p>Se um sistema verbal produz explicações confiantes para ações cujas causas ele não conhece, isso não deveria acontecer só depois de uma cirurgia. A cirurgia apenas cria a condição rara em que o experimentador conhece a causa verdadeira e pode flagrar a explicação errada. A extensão da ideia para cérebros intactos é convergente com literatura sobre confabulação, sobre justificativa pós-hoc de escolhas e sobre limites da introspecção, mas é extrapolação, e a força da evidência varia bastante de um domínio para outro.</p>
</div>

<h3>O estudo de Pinto e colaboradores, 2017</h3>

<p>Yair Pinto, Edward de Haan, Victor Lamme e colegas testaram dois pacientes italianos com calosotomia completa, identificados como DDC e DDV, operados havia bastante tempo (as sessões ocorreram entre 10 e 23 anos depois das cirurgias). Foram cinco experimentos.<sup class="cit"><a href="#f6">6</a></sup></p>

<p>A inovação está na estrutura fatorial. Em vez de perguntar apenas se o paciente acerta, eles cruzaram sistematicamente <strong>três modos de resposta</strong> (relato verbal, mão esquerda, mão direita) com o <strong>campo visual</strong> em que o estímulo apareceu, e mediram tarefas distintas: detecção, localização, comparação entre estímulos, identificação e nomeação.</p>

<p>A previsão do modelo clássico é precisa. Deveria existir uma <strong>interação entre modo de resposta e campo visual</strong>: um estímulo à esquerda deveria ser bem relatado pela mão esquerda e mal pela fala e pela mão direita, e o inverso para um estímulo à direita. Interação, em termos estatísticos, quer dizer que o efeito de um fator depende do nível do outro. É exatamente isso que "dois agentes conscientes independentes, cada um comandando um lado" prevê.</p>

<div class="tabela-env">
<table>
<thead><tr><th>Medida</th><th>Resultado</th><th>Leitura</th></tr></thead>
<tbody>
<tr><td>Detecção de um círculo em qualquer posição do campo</td><td>DDV: 100% de acertos, 0% de alarmes falsos. DDC: 97,5% de acertos, 7,7% de alarmes falsos</td><td>Detecção preservada nos dois hemicampos, com qualquer via de resposta</td></tr>
<tr><td>Comparar dois estímulos dentro do mesmo hemicampo</td><td>90,4% de acerto</td><td>Comparação intra-hemisférica intacta</td></tr>
<tr><td>Comparar dois estímulos atravessando a linha média</td><td>55,4%, indistinguível do acaso</td><td>Percepção dividida, confirmada</td></tr>
<tr><td>Nomear figura em voz alta</td><td>92,1% no campo direito contra 73,4% no campo esquerdo</td><td>Vantagem esquerda para linguagem, como esperado</td></tr>
<tr><td>Casar figura sem falar</td><td>95,5% no campo esquerdo contra 73% no campo direito</td><td>Vantagem direita para a tarefa não verbal</td></tr>
<tr><td>Interação modo de resposta por campo visual</td><td>Nunca observada, em nenhum experimento</td><td>O achado central e o ponto em disputa</td></tr>
</tbody>
</table>
</div>

<p>Leia a tabela com cuidado, porque ela contém duas coisas de sinais opostos. Os efeitos de hemicampo existem e são grandes: os pacientes falham em comparar através da linha média, e nomeiam melhor à direita do que à esquerda. Percepção dividida, portanto, está confirmada. O que não aparece é a dissociação cruzada por via de resposta. O paciente detecta e localiza o estímulo do campo esquerdo falando, e detecta e localiza o do campo direito com a mão esquerda.</p>

<p>Os autores acrescentaram <strong>julgamentos de confiança</strong> em dois experimentos. O motivo é afastar a hipótese de visão cega (<em>blindsight</em>), em que uma pessoa acerta acima do acaso sobre estímulos que relata não ver. Se as respostas certas viessem de processamento sem consciência, a confiança não deveria acompanhar o acerto. Ela acompanhou: nas tentativas de alta confiança o desempenho subiu, dos dois lados. Isso é evidência de acesso consciente, não de acerto cego.</p>

<p>A conclusão do artigo é contida e vale citar no original: "seccionar as conexões corticais entre os dois hemisférios não parece levar a dois agentes conscientes independentes dentro de um cérebro".<sup class="cit"><a href="#f6">6</a></sup></p>

<h3>As objeções, que são boas</h3>

<p>A resposta veio rápido e de gente que conhece o material melhor do que ninguém.</p>

<p><strong>Objeção 1: sinalização cruzada (<em>cross-cueing</em>).</strong> Lukas Volz e Michael Gazzaniga argumentaram que os hemisférios desconectados aprendem, ao longo de anos, a trocar informação por fora do cérebro.<sup class="cit"><a href="#f8">8</a></sup> Um pequeno movimento dos olhos, uma contração facial, a direção da atenção, o próprio som da resposta que a boca acabou de dar: qualquer um desses canais pode informar o hemisfério que não viu o estímulo. Os pacientes de Pinto estavam operados havia uma década ou mais, tempo de sobra para desenvolver essas estratégias. A observação de Volz e Gazzaniga é fina: pacientes conseguem transmitir com facilidade a presença de um estímulo e com dificuldade a sua localização, o que é o perfil esperado de um canal de baixa capacidade, e não de transferência neural direta.</p>

<p><strong>Objeção 2: vias subcorticais.</strong> Michael Corballis, Paul Corballis, Giovanni Berlucchi e Carlo Marzi propuseram uma terceira via.<sup class="cit"><a href="#f9">9</a></sup> O corpo caloso liga os córtices, mas não é a única ponte. Estruturas subcorticais como os colículos superiores e o pulvinar continuam intactas depois da cirurgia e participam de um sistema visual mais grosseiro, ligado a localização, movimento e orientação espacial. Esse sistema explicaria a unidade comportamental observada sem exigir unidade da consciência.</p>

<p><strong>Objeção 3: a evidência do outro lado.</strong> Volz, Hillyard, Miller e Gazzaniga lembraram que há resultados que apoiam duas correntes conscientes, entre eles o desempenho de pacientes calosotomizados em tarefas duplas, superior ao de controles intactos, como se dois processadores realmente rodassem em paralelo.<sup class="cit"><a href="#f10">10</a></sup></p>

<h3>As réplicas de Pinto</h3>

<p>Pinto, Lamme e de Haan responderam ponto a ponto.<sup class="cit"><a href="#f11">11</a></sup></p>

<ul>
<li><strong>Se houvesse sinalização cruzada eficaz, os efeitos de hemicampo teriam sumido.</strong> Eles não sumiram: a comparação através da linha média ficou no acaso e as vantagens de hemicampo por tipo de tarefa apareceram com clareza. Um canal capaz de sustentar detecção e localização precisas deveria também resolver a comparação.</li>
<li><strong>Tempo.</strong> As diferenças de tempo de reação entre condições congruentes e incongruentes ficaram, em média, abaixo de 200 ms, curtas demais para acomodar uma sinalização cruzada aberta, que envolveria mover olhos ou músculos e ler o próprio sinal.</li>
<li><strong>Estímulos equiluminantes.</strong> Num dos experimentos os estímulos tinham a mesma luminância do fundo, condição que reduz muito a contribuição das vias subcorticais, sensíveis sobretudo a contraste de luminância. A interação continuou ausente.</li>
<li><strong>Falseabilidade.</strong> A crítica metodológica mais dura: sinalização cruzada não tem definição operacional precisa. Sem especificar que canais, com que capacidade e em que prazo, a hipótese explica qualquer resultado depois do fato e não proíbe nenhum antes.</li>
</ul>

<div class="marca controverso">
<span class="rot">Estado da disputa</span>
<p>Em 2020, doze pesquisadores dos dois lados, incluindo Pinto, de Haan, Lamme, Corballis, Volz, Marzi, Bayne e Seth, assinaram uma revisão conjunta. O que conseguiram acordar: a percepção é claramente dividida, o controle da resposta parece amplamente unificado, e "o conjunto de evidências é insuficiente" para decidir se a consciência se divide ou não.<sup class="cit"><a href="#f5">5</a></sup> Eles fecham pedindo paradigmas novos e testagem padronizada enquanto ainda houver pacientes disponíveis para estudo. Um artigo de revisão que termina admitindo que a questão central está aberta é um sinal de saúde do campo, não de fraqueza.</p>
</div>

<p>Uma última observação sobre o que <em>não</em> está em disputa entre as partes: nenhum dos lados afirma que o hemisfério esquerdo é lógico e o direito é criativo. Essa não é uma das posições do debate. É uma deformação popular, e o aprofundamento seguinte mostra de onde ela veio.</p>
` },

extensao: { minutos: 60, html: `
<h3>O caso encosta em duas teorias da consciência</h3>

<p>Teorias da consciência sofrem de um problema crônico: costumam ser compatíveis com quase qualquer dado. O cérebro dividido é uma das poucas situações em que duas das principais teorias fazem previsões razoavelmente claras, e onde as previsões podem estar erradas.</p>

<p><strong>Teoria do espaço de trabalho global.</strong> Formulada por Bernard Baars e desenvolvida experimentalmente por Stanislas Dehaene e colegas, ela propõe que um conteúdo se torna consciente quando é difundido (transmitido em <em>broadcast</em>) para uma rede ampla de áreas corticais, com participação forte de regiões frontoparietais, ficando disponível para relato, memória e controle. Num cérebro dividido, cada hemisfério tem o seu próprio conjunto frontoparietal. Cada um pode difundir para si mesmo. A previsão razoável é que existam dois espaços de trabalho, portanto duas consciências.<sup class="cit"><a href="#f5">5</a></sup></p>

<p><strong>Teoria da informação integrada.</strong> Proposta por Giulio Tononi, ela identifica consciência com a quantidade de informação que um sistema integra como um todo, além do que suas partes integram separadamente, quantidade designada por phi. O critério tem uma consequência direta e pouco intuitiva: se dois subsistemas trocam pouquíssima informação entre si, o phi de cada um isoladamente supera o phi do conjunto, e a teoria diz que cada subsistema constitui um sujeito consciente próprio. Num cérebro calosotomizado, a conectividade dentro de cada hemisfério é muito maior que a conectividade entre eles. A previsão também é de divisão.<sup class="cit"><a href="#f5">5</a></sup></p>

<p>As duas teorias divergem em quase tudo e convergem aqui. Isso torna o caso analiticamente estranho e vale nomear com precisão o que ele pode e o que não pode fazer:</p>

<ul>
<li>O caso <strong>não discrimina</strong> entre espaço de trabalho global e informação integrada. Ambas preveem o mesmo.</li>
<li>Se a leitura de Pinto estiver correta, o caso <strong>pressiona as duas ao mesmo tempo</strong>. Um cérebro cujas metades quase não trocam informação, mas que abriga um único sujeito consciente, é um problema para qualquer teoria que faça da conectividade global a condição da unidade.</li>
<li>Se a explicação por sinalização cruzada ou por vias subcorticais estiver correta, nenhuma das duas teorias precisa mudar nada, e o resultado de Pinto vira um episódio metodológico.</li>
</ul>

<div class="marca especulacao">
<span class="rot">Onde a filosofia entra, e onde deve parar</span>
<p>Há posições intermediárias sérias na literatura filosófica: modelos de alternância (a consciência unificada oscilaria entre os hemisférios conforme a tarefa), modelos de unidade parcial ou em camadas, e a tese de que a pergunta "quantos sujeitos existem aí?" pode não ter resposta determinada. Nenhuma dessas propostas gerou até agora uma previsão experimental que as separe umas das outras nos dados disponíveis. São contribuições legítimas para clarificar o que a pergunta significa, e não devem ser lidas como resultados.</p>
</div>

<h3>Quantos pacientes sustentam tudo isso</h3>

<p>A literatura clássica de cérebro dividido é construída sobre cerca de dez pacientes bem documentados, identificados por iniciais: W.J., L.B., N.G., A.A., R.Y., C.C., M.E., J.W. e, mais recentemente, D.D.C. e D.D.V.<sup class="cit"><a href="#f12">12</a></sup> Uma parte substancial das afirmações que aparecem em livros didáticos de psicologia com o tom de fato consolidado vem de estudos de caso único ou de duplas.</p>

<p>Os problemas de generalização se acumulam em camadas.</p>

<p><strong>Heterogeneidade cirúrgica.</strong> Nem toda calosotomia é igual. Algumas são completas, outras poupam o esplênio ou a porção anterior. Em alguns pacientes a comissura anterior também foi seccionada, em outros não. Comparar resultados entre pacientes exige saber exatamente o que foi cortado em cada um, e esse dado nem sempre está disponível com precisão nos estudos antigos.</p>

<p><strong>Epilepsia grave desde cedo.</strong> Esses pacientes tiveram, por anos ou décadas antes da cirurgia, crises que se propagavam pelos dois hemisférios. Um cérebro assim já se organizou de modo atípico. Padrões incomuns de lateralização de linguagem são mais frequentes nessa população do que na geral. O que se mede depois da cirurgia é o efeito de cortar o corpo caloso <em>naquele</em> cérebro, não num cérebro típico.</p>

<p><strong>Tempo pós-operatório e reorganização.</strong> A maioria das medidas foi obtida anos ou décadas depois da operação. Nesse intervalo o paciente aprendeu estratégias compensatórias, algumas conscientes e outras não. Essa é a substância real da objeção da sinalização cruzada, e ela vale mesmo para quem duvida da versão forte da hipótese.</p>

<p><strong>Viés de seleção e viés de publicação.</strong> Pacientes que produzem demonstrações vistosas são testados mais e aparecem mais. Efeitos que não replicam num segundo paciente têm menos chance de virar artigo do que o achado original teve.</p>

<div class="marca consenso">
<span class="rot">Uma descoberta recente que reorganiza o problema</span>
<p>Em 2025, uma equipe com Tyler Santander, Michael Miller, Lukas Volz e Michael Gazzaniga entre os autores publicou um estudo de conectividade em pacientes calosotomizados.<sup class="cit"><a href="#f13">13</a></sup> Num caso, o cirurgião precisou interromper a secção antes do fim por causa de uma complicação vascular e deixou cerca de um centímetro de fibras posteriores intactas. Esse paciente apresentou conectividade funcional inter-hemisférica típica e nenhum sinal comportamental de síndrome de desconexão. Só os pacientes com calosotomia completa mostraram as rupturas extensas de organização de rede associadas ao quadro clássico. A conclusão dos autores: a integração inter-hemisférica plena pode ser sustentada por uma pequena proporção de fibras calosas posteriores. A implicação prática é que "cérebro dividido" não é um estado binário, e que comparar pacientes sem descrever com precisão o que restou de corpo caloso em cada um é comparar coisas diferentes.</p>
</div>

<h3>De onde veio o mito do cérebro esquerdo lógico e do direito criativo</h3>

<p>Aqui é preciso ser direto, porque este é o subproduto cultural mais duradouro dessa literatura e ele é falso.</p>

<p>A genealogia tem duas raízes. A primeira é a década de 1860, com Paul Broca e Carl Wernicke associando a fala a regiões do hemisfério esquerdo. Isso estabeleceu a ideia de um hemisfério "dominante" e de um hemisfério "menor", vocabulário que persistiu por um século. A segunda raiz é justamente a pesquisa de cérebro dividido dos anos 1960 e 1970, cujos achados sobre capacidades espaciais do hemisfério direito foram lidos, fora da neurociência, como uma tese sobre tipos de pessoa.<sup class="cit"><a href="#f3">3</a></sup></p>

<p>A tradução popular chegou depressa. Livros de autoajuda criativa, o mais influente deles publicado em 1979 propondo desenhar "com o lado direito do cérebro", programas de treinamento corporativo, testes de perfil e um segmento inteiro de material pedagógico dito "baseado no cérebro" difundiram a ideia de que cada pessoa tem um hemisfério dominante que determina seu estilo cognitivo e sua personalidade. Michael Corballis, que pesquisou lateralização a vida inteira e foi um dos críticos de Pinto, escreveu que essas polaridades "devem mais ao poder do mito do que à evidência científica".<sup class="cit"><a href="#f3">3</a></sup></p>

<div class="marca consenso">
<span class="rot">Por que a afirmação é falsa, e não apenas simplificada</span>
<p>Em 2013, Jared Nielsen, Jeffrey Anderson e colegas testaram diretamente a hipótese com ressonância magnética funcional em estado de repouso: 1.011 pessoas de 7 a 29 anos, com o cérebro dividido em 7.266 regiões e a lateralização de conectividade calculada para cada uma.<sup class="cit"><a href="#f14">14</a></sup> Se existisse gente "de cérebro esquerdo" e gente "de cérebro direito", as redes lateralizadas de um indivíduo deveriam se alinhar num mesmo sentido, e indivíduos deveriam se distribuir ao longo desse eixo. Não foi o que apareceu. Os autores concluíram que os dados "não são consistentes com um fenótipo de cérebro inteiro de maior força de rede à esquerda ou à direita entre indivíduos". Lateralização é uma propriedade local de circuitos específicos, não um traço global da pessoa. A hipótese foi testada com o desenho apropriado e falhou.</p>
</div>

<h3>O que de fato é lateralizado</h3>

<p>Descartar o mito não é descartar a lateralização, que é real, mensurável e interessante. O ponto é que ela tem outra forma.</p>

<div class="tabela-env">
<table>
<thead><tr><th>Afirmação popular</th><th>O que a evidência sustenta</th></tr></thead>
<tbody>
<tr><td>O hemisfério esquerdo é a sede da lógica</td><td>O esquerdo é dominante para produção de fala e processamento gramatical na maioria das pessoas. Raciocínio, lógica formal e matemática recrutam redes bilaterais e distribuídas</td></tr>
<tr><td>O hemisfério direito é a sede da criatividade</td><td>Não existe uma sede da criatividade. Tarefas criativas recrutam redes amplas nos dois hemisférios, com forte participação da rede de modo padrão, que tem núcleos dos dois lados</td></tr>
<tr><td>Cada pessoa tem um hemisfério dominante que define seu estilo</td><td>Nenhum suporte empírico. As assimetrias de conectividade não se agrupam num fator individual único<sup class="cit"><a href="#f14">14</a></sup></td></tr>
<tr><td>Há uma única dimensão de assimetria cerebral</td><td>Análises fatoriais identificam pelo menos quatro dimensões mutuamente não correlacionadas: linguagem, visão, pensamento interno e atenção<sup class="cit"><a href="#f3">3</a></sup></td></tr>
<tr><td>Canhotos têm linguagem à direita</td><td>Cerca de 70% dos canhotos têm dominância esquerda para linguagem, contra 95 a 99% dos destros. A correlação com destreza manual existe, mas é fraca<sup class="cit"><a href="#f3">3</a></sup></td></tr>
</tbody>
</table>
</div>

<p>O estudo de Nielsen encontrou assimetrias locais bem definidas: núcleos com conectividade lateralizada à esquerda em regiões da rede de modo padrão e nas áreas clássicas de linguagem, e núcleos lateralizados à direita em regiões de controle atencional, como o sulco intraparietal lateral, a ínsula anterior e os campos oculares frontais.<sup class="cit"><a href="#f14">14</a></sup> Assimetria de circuito, distribuída por funções específicas. Não tipo de pessoa.</p>

<h3>Como avaliar afirmações desse gênero</h3>

<p>Três perguntas que funcionam bem além deste tema.</p>

<p><strong>Que fenômeno exatamente foi observado, separado da narrativa?</strong> No cérebro dividido, o fenômeno é uma dissociação de desempenho entre campo visual e via de resposta. A narrativa das duas consciências é uma camada por cima. Quando o desenho experimental mudou, a dissociação central prevista pela narrativa não apareceu, sem que nada da observação original tivesse sido falsificado.</p>

<p><strong>Em quantos indivíduos, e quão parecidos eles são com a população sobre a qual se está falando?</strong> Cerca de dez pacientes com epilepsia refratária, operados de formas diferentes, testados décadas depois. Extrapolar disso para "o cérebro humano" é uma inferência que precisa ser declarada e defendida, não pressuposta.</p>

<p><strong>A hipótese alternativa proíbe alguma observação?</strong> A objeção de sinalização cruzada é o exemplo instrutivo. Ela aponta um mecanismo real e documentado, e ainda assim, sem uma especificação de capacidade e de tempo, ela não proíbe nada, o que a torna difícil de testar. Notar isso não é rejeitar a objeção. É pedir a versão dela que pode dar errado.</p>

<div class="marca consenso">
<span class="rot">O que segurar</span>
<p>A dissociação comportamental em pacientes calosotomizados é sólida e replicada: a percepção visual se divide entre os hemisférios e a comparação através da linha média se perde. A leitura de que existem duas consciências separadas é interpretação, foi dominante por décadas, e permanece em disputa desde 2017, quando um desenho com resposta lateralizada cruzada não encontrou a interação que ela prevê. As objeções por sinalização cruzada e por vias subcorticais são sérias e não foram descartadas. Uma revisão assinada pelos dois lados em 2020 registra que a evidência disponível não decide a questão. O mito do hemisfério esquerdo lógico e do direito criativo não é parte desse debate: é uma derivação popular que foi testada diretamente em mais de mil pessoas e falhou.</p>
</div>
` }
},

sintese: {
  definicoes: [
    { termo: "Corpo caloso", def: "Feixe de aproximadamente duzentos milhões de fibras nervosas que liga os dois hemisférios cerebrais e é a principal via de comunicação entre eles." },
    { termo: "Calosotomia", def: "Secção cirúrgica do corpo caloso, feita como último recurso em epilepsia refratária a medicação, para impedir que a descarga epiléptica se propague de um hemisfério ao outro." },
    { termo: "Campo visual contralateral", def: "Regra anatômica pela qual tudo o que aparece à esquerda do ponto de fixação, em ambos os olhos, projeta-se no hemisfério direito, e tudo o que aparece à direita projeta-se no esquerdo." },
    { termo: "Apresentação taquistoscópica", def: "Exposição de um estímulo por menos de cerca de 150 ms, curto demais para que o olho se mova até ele, garantindo que a informação chegue a um só hemisfério." },
    { termo: "Intérprete do hemisfério esquerdo", def: "Mecanismo proposto por Gazzaniga: o sistema verbal do hemisfério esquerdo constrói explicações coerentes e confiantes para ações cujas causas reais ele não conhece." },
    { termo: "Sinalização cruzada", def: "Troca de informação entre hemisférios desconectados por canais externos ao cérebro, como pequenos movimentos oculares, contrações faciais ou a escuta da própria resposta verbal." }
  ],
  lembrar: [
    "A dissociação observada é consenso: informação no campo visual esquerdo não é nomeada pela fala, mas é demonstrada pela mão esquerda. A tese das duas consciências é interpretação e continua disputada.",
    "A previsão testável do modelo clássico é uma interação entre campo visual e via de resposta. Pinto e colaboradores (2017) não encontraram essa interação em nenhum dos cinco experimentos, ao mesmo tempo que confirmaram a divisão perceptual.",
    "As objeções principais são sinalização cruzada (Volz e Gazzaniga) e integração por vias subcorticais como colículo superior e pulvinar (Corballis, Berlucchi e Marzi). Nenhuma foi descartada.",
    "Espaço de trabalho global e informação integrada preveem ambas a divisão da consciência. O caso pressiona as duas juntas, mas não separa uma da outra.",
    "Toda a literatura clássica repousa sobre cerca de dez pacientes, com cirurgias heterogêneas, epilepsia grave prévia e décadas de reorganização pós-operatória.",
    "Cortar o corpo caloso não é um estado binário: um centímetro de fibras posteriores preservadas foi suficiente, num caso de 2025, para conectividade inter-hemisférica típica e ausência de síndrome de desconexão."
  ],
  confusoes: [
    { erro: "O cérebro esquerdo é lógico e o direito é criativo, e cada pessoa tem um lado dominante", correcao: "Falso, e testado diretamente. Nielsen e colegas mediram lateralização de conectividade em 7.266 regiões de 1.011 pessoas e não encontraram nenhum fenótipo individual de cérebro esquerdo ou direito. Lateralização é propriedade local de circuitos específicos, sobretudo linguagem à esquerda e controle atencional à direita, e não um traço de personalidade. Essa afirmação não é nem sequer uma das posições em debate entre os pesquisadores da área." },
    { erro: "A divisão é entre olho esquerdo e olho direito", correcao: "É entre metades do campo visual. Cada olho envia informação para os dois hemisférios: as fibras da hemirretina nasal cruzam no quiasma óptico e as da temporal não. Tapar um olho não reproduz o experimento." },
    { erro: "O hemisfério direito não entende linguagem", correcao: "Sperry registrou na conferência do Nobel que o hemisfério direito desconectado não era surdo nem cego para palavras. Ele compreende bastante, sobretudo substantivos concretos. O que ele não tem, na maioria das pessoas, é a maquinaria que produz fala." },
    { erro: "O estudo de 2017 provou que a consciência não se divide", correcao: "Ele mostrou que uma previsão central do modelo clássico não se confirmou em dois pacientes, com um desenho melhor. Existem explicações alternativas em pé e uma revisão de 2020 assinada pelos dois lados registra que a evidência é insuficiente para decidir." },
    { erro: "Pacientes calosotomizados vivem visivelmente divididos no dia a dia", correcao: "Fora do laboratório eles se comportam, na maior parte do tempo, de forma coordenada e relatam uma experiência única. É justamente esse contraste com os achados de laboratório que gerou o problema teórico." }
  ],
  numeros: [
    "Corpo caloso: da ordem de 200 milhões de axônios mielinizados.",
    "Sperry recebeu o Nobel de Fisiologia ou Medicina em 1981; o primeiro relato do grupo de Caltech sobre o paciente W.J. é de 1962.",
    "Pinto et al. 2017: 2 pacientes (DDC e DDV), 5 experimentos, estímulos abaixo de 150 ms, testagem entre 10 e 23 anos depois da cirurgia; comparação de estímulos com 90,4% de acerto dentro do mesmo hemicampo contra 55,4% atravessando a linha média, que é o nível do acaso.",
    "Nielsen et al. 2013: 1.011 pessoas de 7 a 29 anos, 7.266 regiões cerebrais, nenhum fenótipo lateralizado individual.",
    "Dominância esquerda para linguagem: 95 a 99% dos destros e cerca de 70% dos canhotos."
  ]
},

flashcards: [
  { f: "Por que a divisão do campo visual não é a mesma coisa que a divisão entre os olhos?", v: "Porque cada olho envia informação para os dois hemisférios. No quiasma óptico, as fibras da hemirretina nasal cruzam a linha média e as da temporal não. O resultado é que tudo à esquerda do ponto de fixação vai para o hemisfério direito e tudo à direita vai para o esquerdo, independentemente do olho." },
  { f: "Descreva o resultado clássico do experimento de cérebro dividido.", v: "Palavra piscada no campo visual direito (hemisfério esquerdo, que fala): o paciente lê em voz alta. Palavra piscada no campo visual esquerdo (hemisfério direito, mudo): o paciente diz não ter visto nada, mas a mão esquerda seleciona corretamente o objeto correspondente entre vários escondidos da vista." },
  { f: "Por que a apresentação precisa durar menos de cerca de 150 ms?", v: "Porque uma sacada voluntária leva em torno de 200 ms. Com exposição mais longa o paciente move os olhos, o estímulo passa a ocupar os dois campos visuais e a lateralização se perde." },
  { f: "O que é o intérprete do hemisfério esquerdo e em que observação se baseia?", v: "É o mecanismo proposto por Gazzaniga pelo qual o sistema verbal esquerdo constrói teorias sobre relações entre eventos, ações e sentimentos. Baseia-se no teste de conceitos simultâneos: pata de galinha à direita e cena de nevasca à esquerda; a mão esquerda escolhe uma pá, e o paciente, falando pelo hemisfério esquerdo, explica que a pá serve para limpar o galinheiro." },
  { f: "Qual foi a inovação de desenho no estudo de Pinto et al. 2017?", v: "Cruzar sistematicamente três modos de resposta (fala, mão esquerda, mão direita) com o campo visual de apresentação, em cinco experimentos, com rastreamento ocular e julgamentos de confiança. Isso permitiu testar diretamente a interação entre modo de resposta e campo visual que o modelo clássico prevê." },
  { f: "O que Pinto et al. encontraram, e o que não encontraram?", v: "Encontraram a divisão perceptual: comparação através da linha média no nível do acaso (55,4% contra 90,4% dentro do mesmo hemicampo) e vantagens de hemicampo por tipo de tarefa. Não encontraram, em nenhum experimento, a interação entre modo de resposta e campo visual prevista por dois agentes conscientes independentes." },
  { f: "Para que serviram os julgamentos de confiança no estudo de 2017?", v: "Para afastar a hipótese de visão cega, em que a pessoa acerta acima do acaso sobre estímulos que relata não ver. Se o acerto fosse inconsciente, a confiança não deveria acompanhá-lo. Ela acompanhou, dos dois lados, o que indica acesso consciente." },
  { f: "O que é sinalização cruzada e por que ela é uma objeção forte?", v: "É a troca de informação entre hemisférios desconectados por canais externos ao cérebro: pequenos movimentos oculares, contrações faciais, direção da atenção, escuta da própria fala. É forte porque os pacientes tiveram uma década ou mais para desenvolver essas estratégias, e porque explica o perfil observado de transmitir presença com facilidade e localização com dificuldade." },
  { f: "Qual é a réplica de Pinto à objeção de sinalização cruzada?", v: "Quatro pontos: os efeitos de hemicampo permaneceram grandes, o que um canal eficaz teria apagado; as diferenças de tempo de reação ficaram abaixo de 200 ms, curtas demais; com estímulos equiluminantes a interação continuou ausente; e a hipótese, sem definição operacional de capacidade e prazo, não proíbe nenhuma observação." },
  { f: "O que espaço de trabalho global e teoria da informação integrada preveem para o cérebro dividido?", v: "Ambas preveem divisão da consciência. Na primeira, cada hemisfério tem seu próprio núcleo frontoparietal capaz de difundir informação. Na segunda, subsistemas que trocam pouca informação têm phi individual maior que o phi do conjunto. Como convergem, o caso não separa as duas teorias, mas pressiona as duas se a leitura de Pinto estiver correta." },
  { f: "Por que o mito do cérebro esquerdo lógico e direito criativo é falso, e não apenas simplificado?", v: "Porque foi testado com o desenho apropriado e falhou. Nielsen e colegas (2013) mediram lateralização de conectividade em 7.266 regiões de 1.011 pessoas e não encontraram nenhum fenótipo individual lateralizado. A lateralização existe, mas é local e específica por função, não um traço global da pessoa." },
  { f: "Que problemas de generalização afetam a literatura de cérebro dividido?", v: "Cerca de dez pacientes bem documentados; cirurgias heterogêneas (completas, parciais, com ou sem comissura anterior); epilepsia grave prévia que já reorganizou o cérebro e torna lateralização atípica mais frequente; décadas de compensação pós-operatória antes das medidas; e viés de seleção em favor de pacientes que produzem demonstrações vistosas." }
],

prova: [
  { camada: "nucleo",
    q: "Num experimento de cérebro dividido, uma palavra é piscada por 100 ms no campo visual esquerdo. O que se espera observar?",
    alts: [
      "O paciente lê a palavra em voz alta sem dificuldade.",
      "O paciente diz que não viu nada, mas a mão esquerda seleciona corretamente o objeto correspondente entre vários escondidos da vista.",
      "O paciente não consegue responder por nenhuma via, verbal ou manual.",
      "O paciente lê a palavra, mas só depois de fechar o olho direito."
    ],
    correta: 1,
    porque: "O campo visual esquerdo projeta no hemisfério direito, que na maioria das pessoas não produz fala e controla a mão esquerda. Daí a negativa verbal acompanhada de uma escolha manual correta. A última alternativa é a tentadora, porque parte da confusão mais comum: a divisão é entre metades do campo visual, não entre olhos, e cada olho envia informação para os dois hemisférios." },

  { camada: "nucleo",
    q: "Qual das afirmações abaixo descreve uma observação, e não uma interpretação?",
    alts: [
      "Existem dois sujeitos conscientes dentro de um cérebro calosotomizado.",
      "O hemisfério direito tem uma vida mental própria da qual o esquerdo não participa.",
      "Pacientes calosotomizados falham em comparar estímulos apresentados em hemicampos opostos.",
      "A unidade da consciência depende do corpo caloso."
    ],
    correta: 2,
    porque: "A falha em comparar através da linha média é um desempenho medido, replicado, aceito por todos os lados do debate. As outras três alternativas são teses sobre experiência subjetiva ou sobre a base neural da unidade, inferidas a partir do comportamento. Distinguir as duas camadas é o que permite acompanhar a disputa sem se perder nela." },

  { camada: "nucleo",
    q: "Por que a duração da apresentação do estímulo é crítica nesses experimentos?",
    alts: [
      "Porque estímulos longos causam fadiga retiniana e reduzem a acuidade.",
      "Porque uma sacada leva cerca de 200 ms, e exposições mais longas permitem que o olhar se desloque e leve o estímulo aos dois campos visuais.",
      "Porque o corpo caloso transmite informação com atraso de aproximadamente 150 ms.",
      "Porque a memória de trabalho retém a imagem por no máximo 150 ms."
    ],
    correta: 1,
    porque: "Todo o desenho depende de que a informação chegue a um só hemisfério, e isso só se garante impedindo o movimento ocular. A terceira alternativa é atraente porque menciona o corpo caloso e um número plausível, mas a transferência calosa é bem mais rápida que isso, e nos pacientes ela nem existe: o motivo do limite temporal é a sacada." },

  { camada: "aprofundamento",
    q: "Qual previsão específica do modelo clássico o estudo de Pinto et al. (2017) testou e não confirmou?",
    alts: [
      "Que pacientes calosotomizados teriam desempenho reduzido em qualquer tarefa visual.",
      "Que existiria uma interação entre modo de resposta e campo visual: estímulos à esquerda relatados bem pela mão esquerda e mal pela fala, e o inverso à direita.",
      "Que a comparação de estímulos através da linha média ficaria no nível do acaso.",
      "Que o hemisfério direito seria incapaz de compreender substantivos concretos."
    ],
    correta: 1,
    porque: "A interação entre modo de resposta e campo visual é exatamente o que dois agentes independentes, cada um comandando um lado do corpo, preveem. Ela não apareceu em nenhum dos cinco experimentos. A terceira alternativa é a mais tentadora, porque a comparação através da linha média realmente ficou no acaso (55,4%), só que esse resultado confirma o modelo em vez de contrariá-lo: é a divisão perceptual, que o próprio estudo sustenta." },

  { camada: "aprofundamento",
    q: "Os julgamentos de confiança incluídos no estudo de 2017 serviram para descartar qual hipótese alternativa?",
    alts: [
      "Que os pacientes estivessem adivinhando ao acaso.",
      "Que houvesse um efeito de aprendizagem ao longo das sessões.",
      "Que os acertos viessem de visão cega, ou seja, processamento sem acesso consciente.",
      "Que os experimentadores estivessem induzindo respostas involuntariamente."
    ],
    correta: 2,
    porque: "Em visão cega a pessoa acerta acima do acaso sobre estímulos que relata não ver, e o desempenho não deveria acompanhar a confiança relatada. No estudo ele acompanhou, dos dois lados do campo visual, o que aponta para acesso consciente. A primeira alternativa é tentadora, mas adivinhação já é excluída pelas taxas de acerto muito acima do acaso, sem necessidade de medir confiança." },

  { camada: "aprofundamento",
    q: "Qual é a crítica metodológica mais forte de Pinto e colaboradores à hipótese de sinalização cruzada?",
    alts: [
      "Que os canais propostos (movimentos oculares, contrações faciais) nunca foram observados em paciente algum.",
      "Que a hipótese, sem especificação de quais canais, com que capacidade e em que prazo, explica qualquer resultado depois do fato e não proíbe nenhum antes.",
      "Que a sinalização cruzada exigiria fibras calosas remanescentes, ausentes nesses pacientes.",
      "Que o efeito só apareceria em pacientes operados havia menos de cinco anos."
    ],
    correta: 1,
    porque: "O problema é de falseabilidade, não de plausibilidade: sinalização cruzada é um fenômeno real e documentado. Justamente por isso a primeira alternativa está errada. A objeção de Pinto é que, sem definição operacional, a hipótese acomoda qualquer padrão de dados, o que a torna difícil de testar. Ele acrescenta argumentos empíricos, entre eles diferenças de tempo de reação abaixo de 200 ms." },

  { camada: "aprofundamento",
    q: "Corballis, Berlucchi e Marzi propuseram uma explicação alternativa para a unidade observada. Qual é?",
    alts: [
      "Que fibras calosas anteriores teriam sido poupadas nas cirurgias.",
      "Que o hemisfério direito teria desenvolvido linguagem após a operação.",
      "Que vias subcorticais preservadas, envolvendo colículos superiores e pulvinar, integrariam informação espacial grosseira sem exigir unidade da consciência.",
      "Que os pacientes memorizaram as respostas ao longo de anos de testagem."
    ],
    correta: 2,
    porque: "O corpo caloso liga os córtices, mas estruturas subcorticais continuam intactas e sustentam um sistema visual mais grosseiro, ligado a localização, movimento e orientação. A primeira alternativa é plausível de partida, mas os pacientes DDC e DDV tinham calosotomia completa documentada, e num deles também a comissura anterior foi seccionada. Pinto respondeu à objeção subcortical com estímulos equiluminantes, condição que reduz muito a contribuição dessas vias." },

  { camada: "extensao",
    q: "Por que o caso do cérebro dividido não serve para escolher entre a teoria do espaço de trabalho global e a teoria da informação integrada?",
    alts: [
      "Porque nenhuma das duas faz previsões sobre pacientes calosotomizados.",
      "Porque as duas preveem o mesmo resultado, a divisão da consciência, ainda que por razões distintas.",
      "Porque as duas foram formuladas depois dos experimentos clássicos e já os incorporam.",
      "Porque a informação integrada trata apenas de sistemas artificiais."
    ],
    correta: 1,
    porque: "Cada hemisfério tem seu próprio núcleo frontoparietal capaz de difundir informação, e a conectividade dentro de cada hemisfério supera em muito a conectividade entre eles. Ambas as teorias, por caminhos diferentes, preveem divisão. Por isso o caso pressiona as duas juntas caso a leitura de Pinto se sustente, mas não separa uma da outra. A primeira alternativa é tentadora porque as teorias raramente fazem previsões nítidas, o que torna esta exceção notável." },

  { camada: "extensao",
    q: "Uma pessoa afirma que é 'de cérebro direito' e por isso mais criativa que analítica. Qual é a resposta apoiada em evidência?",
    alts: [
      "A afirmação é correta, mas vale só para canhotos, cuja lateralização é invertida.",
      "A afirmação é uma simplificação aceitável de uma diferença real de dominância hemisférica.",
      "A afirmação foi testada diretamente e falhou: em 1.011 pessoas e 7.266 regiões cerebrais não se encontrou nenhum fenótipo individual de maior força de rede à esquerda ou à direita.",
      "A afirmação seria verdadeira apenas em pacientes com o corpo caloso seccionado."
    ],
    correta: 2,
    porque: "O estudo de Nielsen e colegas (2013) testou exatamente essa hipótese com o desenho apropriado e não encontrou o padrão. Lateralização existe, mas é local: linguagem à esquerda, controle atencional à direita, entre outros circuitos, sem que essas assimetrias se agrupem num traço global da pessoa. A segunda alternativa é a mais tentadora porque soa conciliadora, mas não há dominância hemisférica global de que ela seria a simplificação: a afirmação é falsa, não aproximada." },

  { camada: "extensao",
    q: "O estudo de 2025 sobre integração inter-hemisférica encontrou que um paciente com cerca de um centímetro de fibras calosas posteriores preservadas apresentava conectividade típica e nenhuma síndrome de desconexão. Qual é a implicação metodológica principal?",
    alts: [
      "Que a calosotomia é ineficaz como tratamento da epilepsia refratária.",
      "Que 'cérebro dividido' não é um estado binário, e comparar pacientes sem descrever com precisão o que restou de corpo caloso em cada um é comparar coisas diferentes.",
      "Que o corpo caloso não participa da integração inter-hemisférica.",
      "Que a síndrome de desconexão é um artefato dos testes de laboratório."
    ],
    correta: 1,
    porque: "No mesmo estudo, os pacientes com calosotomia completa mostraram as rupturas extensas de organização de rede associadas ao quadro clássico, o que descarta a terceira e a quarta alternativas. O achado atinge diretamente o problema de heterogeneidade cirúrgica: uma parte da variação entre pacientes na literatura pode refletir o que restou de fibras, e não diferenças individuais de consciência." }
],

fontes: [
  { n: 1, tipo: "fonte primária", ref: "Gazzaniga, M. S., Bogen, J. E. &amp; Sperry, R. W. 'Some functional effects of sectioning the cerebral commissures in man'. <em>PNAS</em> 48(10):1765–1769, 1962. O primeiro relato do grupo de Caltech sobre o paciente W.J.", url: "https://doi.org/10.1073/pnas.48.10.1765" },
  { n: 2, tipo: "referência", ref: "Goldstein, A., Covington, B. P., Mahabadi, N. &amp; Mesfin, F. B. 'Neuroanatomy, Corpus Callosum'. <em>StatPearls</em>, NCBI Bookshelf. Anatomia e estimativa do número de fibras.", url: "https://www.ncbi.nlm.nih.gov/books/NBK448209/" },
  { n: 3, tipo: "artigo", ref: "Corballis, M. C. 'Left brain, right brain: facts and fantasies'. <em>PLoS Biology</em> 12(1):e1001767, 2014. Origem histórica do mito da lateralização de personalidade e o que de fato é lateralizado.", url: "https://doi.org/10.1371/journal.pbio.1001767" },
  { n: 4, tipo: "fonte primária", ref: "Sperry, R. W. 'Some Effects of Disconnecting the Cerebral Hemispheres'. Conferência do Nobel, 8 de dezembro de 1981.", url: "https://www.nobelprize.org/prizes/medicine/1981/sperry/25059-roger-w-sperry-nobel-lecture-1981/" },
  { n: 5, tipo: "revisão", ref: "de Haan, E. H. F., Corballis, P. M., Hillyard, S. A., Marzi, C. A., Seth, A., Lamme, V. A. F., Volz, L., Fabri, M., Schechter, E., Bayne, T., Corballis, M. &amp; Pinto, Y. 'Split-Brain: What We Know Now and Why This is Important for Understanding Consciousness'. <em>Neuropsychology Review</em> 30(2):224–233, 2020. Revisão assinada por pesquisadores dos dois lados da disputa.", url: "https://doi.org/10.1007/s11065-020-09439-3" },
  { n: 6, tipo: "fonte primária", ref: "Pinto, Y., Neville, D. A., Otten, M., Corballis, P. M., Lamme, V. A. F., de Haan, E. H. F., Foschi, N. &amp; Fabri, M. 'Split brain: divided perception but undivided consciousness'. <em>Brain</em> 140(5):1231–1237, 2017.", url: "https://doi.org/10.1093/brain/aww358" },
  { n: 7, tipo: "revisão", ref: "Gazzaniga, M. S. 'Cerebral specialization and interhemispheric communication: Does the corpus callosum enable the human condition?'. <em>Brain</em> 123(7):1293–1326, 2000. Formulação do intérprete do hemisfério esquerdo.", url: "https://doi.org/10.1093/brain/123.7.1293" },
  { n: 8, tipo: "revisão", ref: "Volz, L. J. &amp; Gazzaniga, M. S. 'Interaction in isolation: 50 years of insights from split-brain research'. <em>Brain</em> 140(7):2051–2060, 2017. Argumento da sinalização cruzada.", url: "https://doi.org/10.1093/brain/awx139" },
  { n: 9, tipo: "artigo", ref: "Corballis, M. C., Corballis, P. M., Berlucchi, G. &amp; Marzi, C. A. 'Perceptual unity in the split brain: the role of subcortical connections'. <em>Brain</em> 141(6):e46, 2018.", url: "https://doi.org/10.1093/brain/awy085" },
  { n: 10, tipo: "artigo", ref: "Volz, L. J., Hillyard, S. A., Miller, M. B. &amp; Gazzaniga, M. S. 'Unifying control over the body: consciousness and cross-cueing in split-brain patients'. <em>Brain</em> 141(3):e15, 2018.", url: "https://doi.org/10.1093/brain/awx359" },
  { n: 11, tipo: "artigo", ref: "Pinto, Y., Lamme, V. A. F. &amp; de Haan, E. H. F. 'Cross-cueing cannot explain unified control in split-brain patients'. <em>Brain</em> 140(11):e68, 2017. Réplica às objeções.", url: "https://doi.org/10.1093/brain/awx235" },
  { n: 12, tipo: "revisão", ref: "Pinto, Y., de Haan, E. H. F. &amp; Lamme, V. A. F. 'The Split-Brain phenomenon revisited: A single conscious agent with split perception'. <em>Trends in Cognitive Sciences</em> 21(11):835–851, 2017. Inclui o levantamento dos pacientes bem documentados.", url: "https://doi.org/10.1016/j.tics.2017.09.003" },
  { n: 13, tipo: "artigo", ref: "Santander, T., Bekir, S., Paul, T., Simonson, J. M., Wiemer, V. M., Skinner, H. E., Hopf, J. L., Rada, A., Woermann, F. G., Kalbhenn, T., Giesbrecht, B., Bien, C. G., Sporns, O., Gazzaniga, M. S., Volz, L. J. &amp; Miller, M. B. 'Full interhemispheric integration sustained by a fraction of posterior callosal fibers'. <em>PNAS</em> 122(43):e2520190122, 2025.", url: "https://doi.org/10.1073/pnas.2520190122" },
  { n: 14, tipo: "artigo", ref: "Nielsen, J. A., Zielinski, B. A., Ferguson, M. A., Lainhart, J. E. &amp; Anderson, J. S. 'An Evaluation of the Left-Brain vs. Right-Brain Hypothesis with Resting State Functional Connectivity Magnetic Resonance Imaging'. <em>PLoS ONE</em> 8(8):e71275, 2013. Teste direto do mito da lateralização de personalidade.", url: "https://doi.org/10.1371/journal.pone.0071275" }
]
};
