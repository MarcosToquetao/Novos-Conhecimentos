CONTEUDOS["micorrizas"] = {
termo: "Micorrizas e a 'wood wide web'",
area: "Sustentabilidade",
subtitulo: "A associação entre fungos do solo e raízes de plantas é um dos fatos mais bem estabelecidos da ecologia terrestre. A ideia de que árvores adultas usam essa rede para enviar açúcar e avisos às mudas passou por uma revisão dura em 2023, e as duas coisas precisam ser separadas com cuidado.",
prerequisitos: [
  "Nenhum pré-requisito técnico. Basta saber que plantas fazem fotossíntese e retiram nutrientes minerais do solo pelas raízes.",
  "Para o aprofundamento: noção de que um elemento químico tem isótopos e que a proporção entre eles pode ser medida."
],
conexoes: [
  { termo: "Simbiose e mutualismo", relacao: "A micorriza é o exemplo mais extenso de mutualismo em biomassa e em área de superfície na biosfera, e serve de caso-teste para modelos de estabilidade de cooperação entre espécies." },
  { termo: "Mercados biológicos", relacao: "A troca de fósforo por carbono foi modelada como um mercado com recompensa recíproca, em que cada parceiro dirige recursos a quem oferece mais, sem que nenhum dos dois precise de intenção." },
  { termo: "Viés de publicação e crise de replicação", relacao: "O caso das redes micorrízicas comuns é um exemplo documentado de viés de citação positiva, em que resultados fracos ou nulos vão sendo citados como se fossem robustos." },
  { termo: "Ciclo do carbono no solo", relacao: "O micélio micorrízico é uma das principais portas de entrada de carbono fotossintético no solo, com estimativas globais na casa de dezenas de gigatoneladas de CO2 equivalente por ano." },
  { termo: "Tragédia dos comuns e a crítica de Ostrom", relacao: "Nos dois casos, um modelo elegante circulou como descrição do mundo antes de a verificação de campo ser feita, com consequências para política pública." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Uma raiz fina de planta tem cerca de 0,2 a 2 milímetros de diâmetro. Uma hifa de fungo, o filamento que forma o corpo do fungo no solo, tem entre 2 e 10 micrômetros, cerca de cem vezes mais fina. Essa diferença de escala é o começo da história. O fósforo se difunde muito devagar no solo, e a raiz esgota rapidamente o fósforo disponível na fina camada de terra ao seu redor. Além dessa zona esgotada, a raiz não alcança. A hifa alcança.</p>

<p>Praticamente todas as plantas terrestres resolvem esse problema terceirizando a busca. Elas alojam fungos dentro ou em volta das raízes e pagam por isso em carboidrato produzido na fotossíntese. A estrutura formada pela raiz e pelo fungo juntos se chama <strong>micorriza</strong>, palavra que junta o grego para fungo e para raiz.</p>

<h3>O que cada parceiro entrega</h3>

<p>O fungo entrega fósforo e nitrogênio. Ele explora um volume de solo muito maior do que a raiz conseguiria, tem hifas finas o bastante para entrar em poros inacessíveis à raiz, e produz enzimas que liberam nutrientes presos em matéria orgânica. Estimativas de síntese indicam que até 80% do nitrogênio e do fósforo de uma planta podem chegar por essa via.<sup class="cit"><a href="#f7">7</a></sup></p>

<p>A planta entrega carbono. Ela fixa CO2 na folha e envia açúcares e lipídios para o fungo, que não faz fotossíntese e depende inteiramente dessa fonte. A conta agregada é grande: uma síntese de quase duzentos conjuntos de dados estimou que plantas terrestres direcionam algo em torno de 13,12 gigatoneladas de CO2 equivalente por ano para fungos micorrízicos, ordem de grandeza comparável a uma fração substancial das emissões anuais de combustíveis fósseis.<sup class="cit"><a href="#f9">9</a></sup></p>

<div class="marca consenso">
<span class="rot">O que está bem estabelecido</span>
<p>A simbiose micorrízica existe, é antiga, é quase universal entre plantas terrestres e envolve troca bidirecional de nutrientes minerais por carbono fotossintético. Isso foi demonstrado em laboratório e em campo, com isótopos, com microscopia, com genética molecular dos dois parceiros, e é aceito sem controvérsia relevante. Estimativas correntes falam de cerca de 50 mil espécies de fungos associadas a cerca de 250 mil espécies de plantas.<sup class="cit"><a href="#f7">7</a></sup></p>
</div>

<h3>Por que isso importa fora da botânica</h3>

<p>Três consequências práticas seguem direto da simbiose, sem depender de nenhuma afirmação sobre redes conectando árvores.</p>

<ul>
<li><strong>Fertilizante.</strong> O fósforo é um recurso mineral finito e sua aplicação em excesso escorre para rios e lagos. Uma planta bem colonizada por fungos micorrízicos extrai fósforo com mais eficiência do estoque que já está no solo.</li>
<li><strong>Estrutura do solo.</strong> As hifas percorrem e ligam partículas minerais, e compostos que elas liberam ajudam a formar agregados. Solo agregado retém mais água e resiste melhor à erosão.</li>
<li><strong>Carbono.</strong> O micélio é uma via importante de entrada de carbono no solo, e parte desse carbono permanece lá por tempo relevante para o clima.</li>
</ul>

<h3>Onde entra a "wood wide web"</h3>

<p>Como um mesmo fungo pode colonizar mais de uma planta ao mesmo tempo, é fisicamente possível que duas árvores estejam ligadas pelo mesmo micélio. A esse arranjo se dá o nome técnico de <strong>rede micorrízica comum</strong>. A expressão "wood wide web" apareceu em 1997, na capa da revista <em>Nature</em>, acompanhando um estudo de Suzanne Simard e colegas.<sup class="cit"><a href="#f2">2</a></sup></p>

<p>O experimento de 1997 marcou bétulas com carbono-13 e carbono-14 e pseudotsugas (o Douglas-fir) com o outro isótopo, em campo, e mediu quanto de cada marca aparecia na planta vizinha. Houve movimento nos dois sentidos, com saldo líquido a favor da pseudotsuga, correspondendo em média a cerca de 6% do carbono que ela havia captado por fotossíntese. O artigo é real, o resultado foi publicado e o dado existe.</p>

<p>O que aconteceu depois foi a expansão dessa observação em uma narrativa muito maior: árvores-mãe reconhecendo suas mudas, enviando açúcar para as filhotes, transmitindo sinais de alerta contra insetos, uma floresta funcionando como um organismo cooperativo. Essa narrativa circulou em livros de grande público, documentários e palestras.</p>

<h3>Como se testa uma afirmação dessas no campo</h3>

<p>Vale acompanhar o raciocínio, porque ele é o mesmo em qualquer ciência de campo. A afirmação a testar é: <em>a muda cresce melhor porque recebe recursos de uma árvore adulta através do micélio compartilhado</em>. Para sustentá-la, é preciso descartar as outras explicações possíveis para o mesmo dado.</p>

<ul>
<li>O nutriente pode ter saído da árvore, ido para a água do solo e sido absorvido pela muda diretamente, sem passar por hifa nenhuma.</li>
<li>O fungo pode ter absorvido carbono e nutrientes e simplesmente crescido em direção à muda, sem que exista um filamento contínuo ligando as duas plantas.</li>
<li>Raízes de plantas da mesma espécie podem se fundir por enxertia natural, um caminho que não é micorrízico.</li>
<li>O carbono marcado pode ter caído no solo em folhas ou raízes mortas e sido reciclado por microrganismos.</li>
</ul>

<p>Para separar essas hipóteses, ecólogos usam barreiras físicas. Sacos e cilindros de malha de nylon com poros de dezenas de micrômetros deixam hifas passarem e barram raízes. Malhas com poros abaixo de um micrômetro barram as duas coisas e ainda dificultam o fluxo de água. Comparar os tratamentos deveria isolar o efeito da rede. O problema, e é dele que trata a revisão de 2023, é que essa separação é bem menos limpa do que parece.</p>

<h3>A revisão de 2023</h3>

<p>Justine Karst, Melanie Jones e Jason Hoeksema publicaram em 2023 na <em>Nature Ecology &amp; Evolution</em> uma revisão que fez duas coisas. Primeiro, foi atrás da evidência de campo para as três afirmações mais repetidas sobre redes micorrízicas comuns em florestas. Segundo, rastreou como os artigos originais vinham sendo citados ao longo de vinte e cinco anos.<sup class="cit"><a href="#f1">1</a></sup></p>

<div class="tabela-env">
<table>
<thead><tr><th>Afirmação</th><th>Evidência de campo encontrada</th><th>Estado</th></tr></thead>
<tbody>
<tr><td>Redes micorrízicas comuns são generalizadas em florestas</td><td>Cinco estudos de genotipagem, em dois tipos florestais, com duas espécies de árvore e três espécies de fungo</td><td>Insuficiente para generalizar</td></tr>
<tr><td>A rede transfere recursos que melhoram o desempenho das mudas</td><td>Vinte e seis estudos de campo, com resultados positivos, neutros e negativos, dependentes de espécie, solo, distância e luz</td><td>Não sustentada de forma consistente</td></tr>
<tr><td>Árvores adultas enviam preferencialmente recursos e sinais de defesa para sua própria prole</td><td>Nenhum estudo de campo revisado por pares</td><td>Sem evidência publicada</td></tr>
</tbody>
</table>
</div>

<p>Sobre o segundo ponto, a revisão examinou 593 artigos que citavam sete trabalhos sobre a estrutura dessas redes e 1.083 artigos que citavam onze trabalhos sobre a função delas. A proporção de citações que atribuíam ao trabalho original uma conclusão que ele não sustentava cresceu ao longo do tempo, chegando a cerca de um quarto no caso da estrutura e a cerca de metade no caso da função.</p>

<div class="marca controverso">
<span class="rot">A distinção a manter</span>
<p>Nada disso põe em dúvida a simbiose. A troca de nutrientes minerais por carbono entre uma planta e seu fungo é consenso. O que está em disputa é outra coisa: se existe uma rede contínua e persistente ligando árvores em pé no campo, e se o fluxo de recursos por ela é grande o bastante para mudar o destino de uma muda. Sobre isso, a evidência de campo é escassa, os resultados variam de positivos a negativos, e os autores da revisão concluem que o conhecimento atual é esparso demais para orientar decisões de manejo florestal.</p>
</div>

<div class="marca especulacao">
<span class="rot">O degrau seguinte</span>
<p>A leitura de que árvores "conversam", "reconhecem parentes" ou "cuidam" das mudas atribui intenção e direcionamento a um sistema para o qual nem sequer se demonstrou o fluxo. É uma hipótese que ninguém testou em campo com controle adequado, não um achado. Um grupo grande de fisiologistas vegetais e engenheiros florestais publicou em 2024 uma crítica direta a esse vocabulário, argumentando que a personificação de plantas custa objetividade sem ganho real de compreensão.<sup class="cit"><a href="#f4">4</a></sup></p>
</div>
` },

aprofundamento: { minutos: 30, html: `
<h3>Dois tipos de micorriza, com ecologias diferentes</h3>

<p>A palavra micorriza cobre associações de origens evolutivas distintas. Duas dominam em biomassa e importância, e confundi-las gera erros no debate sobre redes.</p>

<p><strong>Micorrizas arbusculares</strong>, abreviadas como AM. O fungo penetra a parede celular da raiz e forma dentro da célula uma estrutura ramificada chamada <em>arbúsculo</em> (do latim para arbustinho), que é a superfície onde a troca acontece. Os fungos envolvidos pertencem ao grupo Glomeromycotina, são poucas centenas de espécies descritas, e não sobrevivem sem hospedeiro. Predominam em gramíneas, culturas agrícolas, florestas tropicais e boa parte das plantas herbáceas. Um levantamento global publicado em 2026 estimou que fungos arbusculares se associam a cerca de 70% das espécies de plantas e que os solos superficiais do planeta contêm da ordem de 1,1 x 10^17 quilômetros de hifas vivas, com biomassa em torno de 300 megatoneladas.<sup class="cit"><a href="#f10">10</a></sup></p>

<p><strong>Ectomicorrizas</strong>, abreviadas como ECM. O fungo não entra na célula. Ele envolve a ponta da raiz com um <em>manto</em> de hifas e cresce entre as células da raiz formando a chamada <em>rede de Hartig</em>. Os fungos são majoritariamente Basidiomycota e Ascomycota, incluindo boa parte dos cogumelos visíveis de floresta temperada. São milhares de espécies, associadas a uma fração pequena das plantas em número de espécies mas enorme em biomassa: pinheiros, abetos, faias, carvalhos, bétulas, eucaliptos, dipterocarpáceas.<sup class="cit"><a href="#f13">13</a></sup></p>

<div class="tabela-env">
<table>
<thead><tr><th></th><th>Arbuscular (AM)</th><th>Ectomicorrízica (ECM)</th></tr></thead>
<tbody>
<tr><td>Local da troca</td><td>Arbúsculo, dentro da célula da raiz</td><td>Rede de Hartig, entre células, mais manto externo</td></tr>
<tr><td>Grupo fúngico</td><td>Glomeromycotina</td><td>Basidiomycota e Ascomycota, origens múltiplas</td></tr>
<tr><td>Nutriente principal fornecido</td><td>Fósforo inorgânico, também zinco e cobre</td><td>Nitrogênio, inclusive de formas orgânicas, e fósforo</td></tr>
<tr><td>Capacidade enzimática sobre matéria orgânica</td><td>Baixa</td><td>Considerável em vários grupos</td></tr>
<tr><td>Onde domina</td><td>Trópicos, campos, agricultura</td><td>Florestas temperadas e boreais</td></tr>
</tbody>
</table>
</div>

<p>Quase toda a discussão sobre árvores-mãe e transferência entre adultos e mudas se dá em florestas ectomicorrízicas temperadas, e mais especificamente em florestas de pseudotsuga e bétula no noroeste da América do Norte. Isso já delimita o alcance de qualquer generalização.</p>

<h3>Marcação isotópica: o que ela mede e o que não mede</h3>

<p>Isótopos são átomos do mesmo elemento com número diferente de nêutrons. O carbono tem o 12C, que é a esmagadora maioria, o 13C, estável e raro, e o 14C, radioativo. Um experimento de transferência funciona assim: aplica-se à árvore doadora um pulso de CO2 enriquecido em 13C ou 14C, espera-se um intervalo, e mede-se a abundância desse isótopo em tecidos da planta receptora. Para nitrogênio, usa-se 15N.</p>

<p>O método é poderoso e é o único disponível para rastrear fluxos de elementos em ecossistemas. Mas ele tem três fragilidades que a revisão de Henriksson e colegas detalha.<sup class="cit"><a href="#f3">3</a></sup></p>

<ol>
<li><strong>Os sinais são minúsculos.</strong> A discriminação isotópica em processos biológicos é pequena e os limites de detecção são baixos. Diferenças de poucos por mil na abundância isotópica podem ser lidas como transferência quando poderiam vir de variação natural entre indivíduos, de mudança na fonte de água, ou do próprio manuseio.</li>
<li><strong>O isótopo marca o elemento, não o caminho.</strong> Um átomo de 13C encontrado na muda pode ter chegado por hifa contínua, por solução do solo, por exsudação da raiz doadora seguida de absorção, por decomposição de raiz fina morta, ou por respiração e refixação do CO2 marcado sob o dossel. O traçador não distingue essas rotas por si só.</li>
<li><strong>Carbono no tecido não é carbono útil.</strong> Boa parte do 13C detectado em raízes de plantas receptoras está no compartimento fúngico, isto é, no manto e nas hifas aderidas à raiz, e não no citoplasma da planta. Lavar a raiz não separa isso. Sem separar, mede-se transferência para o fungo e chama-se de transferência para a planta.</li>
</ol>

<h3>O desenho das barreiras, e o que ele confunde</h3>

<p>O tratamento padrão usa cilindros ou sacos de malha de nylon enterrados. Malhas com poros de 20 a 250 micrômetros permitem entrada de hifas e barram raízes. Malhas abaixo de 1 micrômetro barram as duas. A comparação entre os dois tratamentos, mais um controle sem malha, deveria isolar o efeito da rede.</p>

<p>Karst, Jones e Hoeksema apontam dois problemas com esse arranjo.<sup class="cit"><a href="#f1">1</a></sup></p>

<p>Primeiro, um saco de malha grossa não garante que exista uma rede micorrízica comum lá dentro. Ele garante que hifas entraram. Hifas podem entrar, colonizar a muda e continuar ligadas ao doador, ou podem ter se desprendido, ou podem ser de outro fungo qualquer que colonizou a muda de forma independente. Entre os dezoito estudos de campo que usaram esse tipo de barreira, a suposição de que a malha grossa equivale a uma rede quase nunca foi testada diretamente.</p>

<p>Segundo, o tratamento de malha grossa não retira só as raízes: ele retira a competição das raízes vizinhas. Uma muda dentro de um cilindro que exclui raízes de árvores adultas está livre da disputa por água e nutrientes com o vizinho grande. Se ela cresce mais, isso pode ser alívio de competição e não presente vindo pela rede. Quando os autores olharam apenas os estudos que incluíam também um tratamento sem malha alguma, capaz de estimar esse efeito de raiz, restaram treze estudos e vinte e oito experimentos. Em cinco deles, algo em torno de 18%, apareceu efeito positivo significativo atribuível à rede e não integralmente anulado pelo efeito negativo das raízes.</p>

<div class="marca controverso">
<span class="rot">O ponto metodológico central</span>
<p>A dificuldade não é medir se algo se move. É atribuir causalmente o desempenho da muda à passagem de recursos por um micélio compartilhado, quando o tratamento experimental que supostamente isola a rede altera simultaneamente a competição radicular, a estrutura física do solo, o fluxo de água e a comunidade fúngica local. Enquanto essas variáveis mudarem juntas, o experimento não separa a hipótese das alternativas.</p>
</div>

<h3>Quanta rede existe, afinal</h3>

<p>Mostrar que duas árvores estão conectadas exige demonstrar que o mesmo indivíduo fúngico, o mesmo genótipo, coloniza as duas, e que o micélio entre elas é contínuo e persiste. Isso se faz por genotipagem de micélio e de pontas de raiz. A revisão de 2023 localizou cinco estudos que mapearam genótipos fúngicos dessa forma, cobrindo dois tipos florestais, duas espécies de árvore e três espécies de fungo ectomicorrízico, num mundo com dezenas de milhares de espécies arbóreas. Mesmo nesses casos, os autores notam que a tecnologia atual não confirma que a conexão miceliana seja contínua e não transitória em campo.</p>

<p>Isso não significa que redes não existam. Significa que a afirmação "redes micorrízicas comuns são generalizadas em florestas" foi tratada como fato estabelecido com uma base amostral que não a sustenta.</p>

<h3>Viés de citação positiva</h3>

<p>A segunda metade do artigo de 2023 é sobre a literatura, não sobre a floresta. Os autores selecionaram trabalhos originais influentes e leram como cada citação posterior representava aquele trabalho, classificando a citação como apoiada ou não apoiada pelo conteúdo do original.</p>

<p>Foram 593 artigos citando sete trabalhos sobre estrutura de rede e 1.083 artigos citando onze trabalhos sobre função. As citações não apoiadas aumentaram com o tempo, na direção de cerca de 25% para estrutura e cerca de 50% para função, com o modelo indicando aproximadamente 1,03 vez mais citações não apoiadas a cada ano adicional no caso da função.</p>

<p>O mecanismo é conhecido em outras áreas. Um resultado preliminar ou condicional é citado por um segundo artigo em forma ligeiramente mais forte, o terceiro cita o segundo em vez do original, e depois de várias gerações de citação a qualificação desapareceu e a afirmação virou fundo consensual. Uma cadeia de citações não gera evidência nova, mas produz a impressão de que existe.</p>

<h3>Os contra-argumentos</h3>

<p>A disputa não terminou, e é honesto registrar as respostas.</p>

<p>Simard, Ryan e Perry publicaram em 2025 uma réplica em que argumentam que as buscas bibliográficas dos críticos foram estreitas, que estudos sobre estabelecimento de plântulas ficaram de fora, que seus trabalhos sempre reconheceram múltiplas vias de transferência abaixo do solo, e que suas conclusões se referiam a florestas temperadas de pseudotsuga e não a florestas em geral.<sup class="cit"><a href="#f5">5</a></sup></p>

<p>Uma linha independente vem das plantas <em>micoheterotróficas</em>, espécies sem clorofila que vivem inteiramente do carbono obtido de fungos micorrízicos, que por sua vez o obtêm de árvores vizinhas. Merckx e colegas argumentam em 2024 que essas plantas são prova natural de que redes existem e de que carbono se move por elas entre plantas diferentes.<sup class="cit"><a href="#f6">6</a></sup></p>

<div class="marca emergente">
<span class="rot">Quanto o argumento micoheterotrófico resolve</span>
<p>Ele é forte para uma parte da questão e fraco para outra. Estabelece que carbono chega a uma planta através de fungo compartilhado, o que já é um resultado relevante. Não estabelece que esse fluxo tenha magnitude ecologicamente significativa entre duas árvores fotossintetizantes, nem que seja direcionado, nem que beneficie a receptora. A planta micoheterotrófica é um parasita da rede, um dreno sem contrapartida, e por isso é justamente o tipo de caso em que se espera fluxo grande. Generalizar dela para mudas de árvore com folhas verdes é um salto.</p>
</div>
` },

extensao: { minutos: 60, html: `
<h3>O que isso implica para manejo florestal</h3>

<p>A narrativa das árvores-mãe entrou em recomendações concretas: preservar árvores grandes específicas em cortes seletivos porque elas seriam nós da rede e alimentariam a regeneração, evitar corte raso pelo rompimento das conexões, escolher mudas por parentesco com as adultas remanescentes.</p>

<p>Vale separar duas coisas nessas recomendações. Preservar árvores grandes e maduras é justificável por razões amplamente documentadas: estrutura de habitat, estoque de carbono, sombreamento, banco de sementes, umidade do microclima, propágulos fúngicos no solo, continuidade genética. Nenhuma dessas razões depende de transferência pela rede. A conclusão dos autores da revisão de 2023 é explícita neste ponto: o conhecimento sobre redes micorrízicas comuns é atualmente esparso e instável demais para informar manejo florestal.<sup class="cit"><a href="#f1">1</a></sup></p>

<p>O risco prático de usar uma justificativa frágil para uma prática boa é conhecido. Se a justificativa cai, a prática cai junto, mesmo quando havia outras razões melhores sustentando-a. Um argumento de conservação amarrado a um mecanismo contestado fica refém do resultado do teste.</p>

<div class="marca consenso">
<span class="rot">O que continua valendo em manejo, independentemente da disputa</span>
<p>A comunidade de fungos micorrízicos do solo é um recurso real e degradável. Corte raso, revolvimento de solo, compactação por maquinário, fogo intenso e conversão para monocultura reduzem a diversidade e a biomassa de inóculo fúngico, e a recuperação é lenta. Mudas plantadas em solo empobrecido de propágulos compatíveis estabelecem pior. Isso é bem documentado e não depende de nenhuma afirmação sobre transferência entre árvores.</p>
</div>

<h3>Restauração e agricultura: o que funciona e o que se vende</h3>

<p>Se fungos micorrízicos são úteis, a ideia de simplesmente aplicá-los ao solo é atraente. O histórico é misto e vale conhecer os números.</p>

<p>Um ensaio de larga escala na Suíça inoculou fungos arbusculares em 54 lavouras de milho. A resposta de crescimento variou de menos 12% a mais 40%, ou seja, houve casos de prejuízo. Os autores conseguiram prever 86% dessa variação a partir de poucos parâmetros de solo, sobretudo indicadores do microbioma, e o melhor preditor isolado não foi a disponibilidade de nutrientes, e sim a abundância de fungos patogênicos no solo, que explicou cerca de 33%.<sup class="cit"><a href="#f11">11</a></sup> A leitura: a inoculação ajuda principalmente onde o solo está biologicamente comprometido, e é inútil ou contraproducente onde já existe uma comunidade fúngica funcional.</p>

<p>Do lado dos produtos comerciais, uma meta-análise de 2025 avaliou ensaios com inoculantes micorrízicos vendidos no mercado global e encontrou desempenho muito abaixo do prometido, com boa parte dos produtos falhando em produzir colonização detectável nas raízes, em contraste com inoculantes produzidos sob controle de pesquisa.<sup class="cit"><a href="#f12">12</a></sup> Um produto que não contém propágulos viáveis não pode funcionar por via micorrízica, seja qual for o efeito observado.</p>

<div class="marca emergente">
<span class="rot">Onde a aplicação está mais promissora</span>
<p>Restauração de áreas severamente degradadas (mineração, solos decapitados, terraplenagem) e sistemas agrícolas de baixo insumo em solos pobres em fósforo são os contextos com melhor razão teórica e melhor evidência. Inóculo de origem local, com fungos adaptados às condições do sítio, tende a superar formulações genéricas. A área carece de ensaios de campo grandes, longos e pré-registrados, e é justamente nela que a promessa comercial corre bem à frente do dado.</p>
</div>

<h3>O fungo não é um encanamento neutro</h3>

<p>A imagem de rede sugere infraestrutura passiva, um cabo por onde recursos trafegam segundo a vontade das árvores. O fungo é um organismo sob seleção natural, com interesse próprio, e essa é uma das objeções teóricas mais fortes à hipótese da árvore-mãe.</p>

<p>Um experimento clássico com raízes em cultura mostrou que a troca funciona como um mercado com recompensa recíproca: a planta direciona mais carbono para o fungo que entrega mais fósforo, e o fungo direciona mais fósforo para a raiz que paga melhor, com discriminação em ambos os sentidos e em escalas espaciais finas.<sup class="cit"><a href="#f8">8</a></sup> Não há intenção envolvida. Há um mecanismo em que a alocação segue o retorno, e é isso que estabiliza o mutualismo contra parceiros que só tomam.</p>

<p>Sob esse enquadramento, um fungo que retirasse carbono de uma árvore grande e produtiva para entregá-lo de graça a uma muda pequena e improdutiva estaria fazendo um péssimo negócio. Henriksson e colegas colocam a objeção de forma direta: o papel de cano de carbono entre árvores é difícil de conciliar com qualquer vantagem adaptativa para o fungo.<sup class="cit"><a href="#f3">3</a></sup></p>

<p>Há um cenário alternativo que é mais compatível com a biologia do fungo e que raramente aparece nas versões populares. O fungo pode se comportar como parasita parcial: colonizar a muda sombreada, que produz pouco carbono, e usá-la como ponto de acesso enquanto se sustenta com o carbono das árvores grandes. Nesse caso, a muda conectada não recebe subsídio; ela paga um custo. Robinson e colegas notam que o padrão de campo mais comum, mudas indo mal perto de árvores grandes, é consistente tanto com competição direta quanto com esse cenário, e não com o de subsídio.<sup class="cit"><a href="#f4">4</a></sup></p>

<div class="marca especulacao">
<span class="rot">Sobre "comunicação" entre árvores</span>
<p>Existem trabalhos de laboratório e de casa de vegetação em que plantas atacadas por herbívoros parecem induzir respostas de defesa em plantas vizinhas conectadas por micélio. A revisão de 2023 não encontrou evidência de campo revisada por pares de que árvores adultas transmitam sinais de defesa preferencialmente à própria prole. Além disso, mesmo que a indução ocorra, chamar de comunicação exige demonstrar que o sinal é emitido, que a emissão é vantajosa para quem emite, e que o receptor evoluiu para respondê-lo. Nenhuma dessas três condições foi estabelecida para árvores em floresta. Compostos que vazam de um tecido danificado e são detectados por outro organismo são vazamento, não mensagem.</p>
</div>

<h3>O que resolveria a disputa</h3>

<p>A questão é empírica e tem caminho de solução. Um programa capaz de fechá-la teria estes componentes.</p>

<ul>
<li><strong>Mapear redes em escala.</strong> Genotipagem de micélio e de pontas de raiz em muitos sítios, espécies e biomas, com amostragem espacial densa o bastante para estabelecer continuidade, e repetida no tempo para estabelecer persistência. Cinco estudos em dois tipos florestais não bastam.</li>
<li><strong>Traçadores que marquem a rota e não só o elemento.</strong> Marcadores incorporados especificamente à biomassa fúngica, como ácidos graxos de assinatura ou compostos específicos de hifa, permitem distinguir o carbono que passou pelo fungo do que passou pela solução do solo.</li>
<li><strong>Separar o compartimento fúngico do vegetal na medida.</strong> Sem isso, transferência para o manto fúngico continua sendo contada como transferência para a planta.</li>
<li><strong>Controles que dissociem exclusão de raiz de exclusão de hifa.</strong> Incluir sempre tratamento sem malha, e testar diretamente se o tratamento de malha grossa de fato contém rede compartilhada, em vez de supor.</li>
<li><strong>Medir desfecho demográfico, não só sinal isotópico.</strong> A afirmação relevante para ecologia e para manejo é sobre sobrevivência, crescimento e recrutamento ao longo de anos, não sobre alguns por mil de enriquecimento em 13C num tecido.</li>
<li><strong>Pré-registro e publicação de resultados nulos.</strong> O viés de citação documentado no caso se alimenta de uma literatura em que o resultado positivo é publicável e o nulo não é.</li>
</ul>

<h3>A lição que sobra sobre como a ciência circula</h3>

<p>Este caso é útil para além de fungos. Um resultado real, obtido num sistema específico, com magnitude modesta e condicionada a variáveis de contexto, foi progressivamente reescrito por citações sucessivas até virar uma afirmação geral sobre florestas do mundo. A reescrita não aconteceu por fraude e nem exige má-fé de ninguém em particular: cada passo individual foi uma simplificação pequena e defensável, e o acúmulo é que produziu a distorção.</p>

<p>A imagem também tinha apelo. Uma floresta cooperativa, com mães cuidando de filhas, é mais atraente do que uma floresta de competição por luz e nutrientes mediada por fungos que negociam com quem paga melhor. Quando um resultado científico confirma uma narrativa que as pessoas querem que seja verdadeira, a checagem afrouxa em todas as pontas: nos revisores, nos jornalistas, nos leitores e nos próprios pesquisadores.</p>

<div class="marca consenso">
<span class="rot">O que segurar</span>
<p>A simbiose micorrízica é consenso sólido: fungos entregam fósforo e nitrogênio, plantas entregam carbono, e o volume envolvido é grande o suficiente para importar ao ciclo global do carbono e à agricultura. A existência de redes conectando árvores em campo está documentada em pouquíssimos sistemas. A transferência de recursos por essas redes em magnitude que altere o destino de uma muda não está sustentada pela evidência de campo disponível. A transferência preferencial de árvores adultas para sua própria prole não tem estudo de campo revisado por pares. Essas quatro afirmações estão em níveis de evidência diferentes e devem ser citadas em níveis diferentes.</p>
</div>
` }
},

sintese: {
  definicoes: [
    { termo: "Micorriza", def: "Associação simbiótica entre um fungo do solo e a raiz de uma planta, na qual o fungo fornece nutrientes minerais, sobretudo fósforo e nitrogênio, e recebe carbono fotossintético." },
    { termo: "Hifa e micélio", def: "A hifa é o filamento fúngico, com poucos micrômetros de diâmetro; o micélio é o conjunto ramificado de hifas que constitui o corpo do fungo no solo." },
    { termo: "Micorriza arbuscular (AM)", def: "Tipo em que o fungo penetra a célula da raiz e forma o arbúsculo, superfície de troca; envolve fungos Glomeromycotina e predomina em culturas agrícolas, campos e trópicos." },
    { termo: "Ectomicorriza (ECM)", def: "Tipo em que o fungo envolve a ponta da raiz com um manto e cresce entre as células formando a rede de Hartig; predomina em florestas temperadas e boreais." },
    { termo: "Rede micorrízica comum (CMN)", def: "Situação em que o micélio de um mesmo indivíduo fúngico coloniza duas ou mais plantas simultaneamente, criando uma via física potencial entre elas." },
    { termo: "Viés de citação positiva", def: "Tendência de a literatura citar preferencialmente resultados positivos e de reforçar a afirmação a cada geração de citação, até que qualificações do trabalho original desapareçam." }
  ],
  lembrar: [
    "A simbiose micorrízica e a troca de nutrientes minerais por carbono são consenso; a rede como canal de transferência entre árvores adultas e mudas é contestada. São afirmações distintas com níveis de evidência distintos.",
    "O experimento de 1997 de Simard e colegas é real e mediu movimento bidirecional de carbono entre bétula e pseudotsuga, com saldo líquido em torno de 6% do carbono fixado pela receptora. A narrativa popular ampliou esse dado muito além do que ele mostra.",
    "Isótopos marcam o elemento, não o caminho percorrido por ele. Carbono marcado numa muda pode ter chegado por hifa, pela solução do solo, por exsudação, por decomposição ou por refixação de CO2.",
    "O tratamento experimental de malha grossa exclui raízes ao mesmo tempo em que supostamente preserva a rede, e portanto altera competição radicular junto com conectividade. Sem um tratamento sem malha, os dois efeitos ficam confundidos.",
    "Fungos micorrízicos estão sob seleção natural e alocam recursos segundo retorno, como num mercado com recompensa recíproca. Um fungo que subsidiasse mudas improdutivas com carbono de árvores produtivas estaria agindo contra o próprio interesse.",
    "Preservar árvores grandes tem justificativas amplamente documentadas que não dependem de transferência pela rede. Amarrar uma prática defensável a um mecanismo contestado torna a prática refém do resultado do teste."
  ],
  confusoes: [
    { erro: "Árvores enviam açúcar para as mudas pela rede micorrízica", correcao: "A revisão de 2023 encontrou 26 estudos de campo com resultados positivos, neutros e negativos. Entre os que incluíam controle sem malha, apenas cerca de 18% dos experimentos mostraram efeito positivo atribuível à rede e não anulado pelo efeito das raízes. O fluxo pode existir em alguns sistemas; a generalização não se sustenta." },
    { erro: "Karst e colegas mostraram que micorrizas não funcionam ou que a wood wide web é fraude", correcao: "A revisão não questiona a simbiose, que segue como consenso sólido. Ela avalia três afirmações específicas sobre redes micorrízicas comuns em florestas e documenta viés de citação positiva na literatura que as difundiu." },
    { erro: "Encontrar carbono marcado na muda prova transferência pela rede", correcao: "Prova que o elemento chegou. Solução do solo, exsudação radicular, decomposição de raízes finas e refixação de CO2 produzem o mesmo sinal. Além disso, boa parte do carbono medido na raiz receptora está no manto fúngico e não no tecido vegetal." },
    { erro: "Árvores se comunicam e reconhecem parentes", correcao: "Não há estudo de campo revisado por pares sustentando transferência preferencial de recursos ou sinais de defesa de árvores adultas para a própria prole. Chamar de comunicação exigiria mostrar que o sinal é emitido, que emitir é vantajoso para quem emite e que o receptor evoluiu para respondê-lo." },
    { erro: "Aplicar inoculante micorrízico melhora qualquer cultivo", correcao: "Em 54 lavouras suíças de milho a resposta variou de menos 12% a mais 40%, com o benefício concentrado em solos biologicamente comprometidos. E uma meta-análise de 2025 encontrou que boa parte dos inoculantes comerciais sequer produz colonização detectável." }
  ],
  numeros: [
    "Até 80% do nitrogênio e do fósforo de uma planta podem ser fornecidos por fungos micorrízicos; cerca de 50 mil espécies de fungos associadas a cerca de 250 mil espécies de plantas.",
    "Cerca de 13,12 gigatoneladas de CO2 equivalente por ano direcionadas por plantas terrestres a fungos micorrízicos, sendo 9,07 para ectomicorrízicos, 3,93 para arbusculares e 0,12 para ericoides.",
    "Karst, Jones e Hoeksema 2023: 26 estudos de campo sobre desempenho de mudas; 13 com tratamento sem malha, totalizando 28 experimentos, dos quais 5 (cerca de 18%) com efeito positivo da rede não anulado pelo efeito radicular.",
    "Apenas 5 estudos genotiparam redes em campo, cobrindo 2 tipos florestais, 2 espécies de árvore e 3 espécies de fungo ectomicorrízico.",
    "Análise de citação: 593 artigos citando 7 trabalhos sobre estrutura e 1.083 artigos citando 11 trabalhos sobre função; citações não apoiadas chegando a cerca de 25% e 50% respectivamente.",
    "Simard et al. 1997: ganho líquido de carbono pela pseudotsuga equivalente, em média, a cerca de 6% do carbono captado por ela na fotossíntese."
  ]
},

flashcards: [
  { f: "Por que uma planta terceiriza a captação de fósforo para um fungo?", v: "O fósforo se difunde muito devagar no solo e a raiz esgota rapidamente a zona ao seu redor. As hifas fúngicas, cerca de cem vezes mais finas que uma raiz fina, alcançam poros e volumes de solo que a raiz não atinge, e o custo dessa exploração em carbono é menor que construir raiz equivalente." },
  { f: "O que cada parceiro entrega na simbiose micorrízica?", v: "O fungo entrega principalmente fósforo e nitrogênio captados de um volume de solo maior, e em alguns grupos liberados de matéria orgânica por enzimas. A planta entrega carbono fixado na fotossíntese, na forma de açúcares e lipídios. Estimativas indicam que até 80% do N e do P da planta podem vir por essa via." },
  { f: "Diferença estrutural entre micorriza arbuscular e ectomicorriza.", v: "Na arbuscular o fungo penetra a parede celular da raiz e forma o arbúsculo, superfície de troca dentro da célula; o grupo fúngico é Glomeromycotina. Na ectomicorriza o fungo não entra na célula: forma um manto em volta da ponta da raiz e a rede de Hartig entre as células, com fungos Basidiomycota e Ascomycota." },
  { f: "O que é uma rede micorrízica comum?", v: "A situação em que o micélio de um mesmo indivíduo fúngico coloniza duas ou mais plantas ao mesmo tempo, criando uma via física potencial entre elas. Existir a via não implica que haja fluxo de recursos ecologicamente relevante por ela." },
  { f: "Quais foram as três afirmações avaliadas por Karst, Jones e Hoeksema em 2023, e com que resultado?", v: "Que redes micorrízicas comuns são generalizadas em florestas (base amostral insuficiente: 5 estudos de genotipagem, 2 tipos florestais, 2 espécies de árvore); que a rede transfere recursos melhorando o desempenho de mudas (resultados de campo positivos, neutros e negativos, sem sustentar generalização); e que adultos enviam preferencialmente recursos e sinais de defesa à própria prole (sem nenhum estudo de campo revisado por pares)." },
  { f: "Por que marcar carbono com 13C e encontrá-lo na muda não prova transferência pela rede?", v: "O isótopo marca o elemento, não a rota. O carbono pode ter chegado pela solução do solo, por exsudação da raiz doadora, por decomposição de raízes finas mortas ou por refixação de CO2 marcado. E parte do sinal medido na raiz receptora está no manto fúngico, não no tecido da planta." },
  { f: "Qual é o problema do tratamento de malha de 20 a 250 micrômetros?", v: "Ele permite passagem de hifas e barra raízes, mas não garante que exista rede compartilhada dentro do cilindro, e ao excluir raízes vizinhas também alivia a competição radicular sobre a muda. Crescimento maior pode ser alívio de competição, não subsídio pela rede. Por isso é preciso incluir também um tratamento sem malha." },
  { f: "O que a análise de citações de 2023 encontrou?", v: "Em 593 artigos citando 7 trabalhos sobre estrutura de rede e 1.083 citando 11 trabalhos sobre função, a proporção de citações não apoiadas pelo conteúdo original cresceu com o tempo, chegando a cerca de 25% para estrutura e cerca de 50% para função. Uma cadeia de citações produz impressão de evidência sem gerar evidência nova." },
  { f: "Por que o interesse evolutivo do fungo enfraquece a hipótese da árvore-mãe?", v: "O fungo está sob seleção natural e aloca recursos segundo retorno, como num mercado com recompensa recíproca demonstrado por Kiers e colegas em 2011. Transportar carbono de uma árvore produtiva para subsidiar de graça uma muda improdutiva não traz vantagem adaptativa ao fungo. Um cenário mais compatível é o do fungo colonizando a muda sombreada e se sustentando com carbono das árvores grandes." },
  { f: "Que argumento a favor das redes vem das plantas micoheterotróficas?", v: "Plantas sem clorofila vivem do carbono obtido de fungos micorrízicos que o recebem de árvores vizinhas, o que mostra que carbono se move entre plantas por fungo compartilhado. O argumento não estabelece magnitude ecologicamente relevante entre duas árvores fotossintetizantes, porque a micoheterotrófica é um dreno parasitário sem contrapartida." },
  { f: "O que dizem os dados de campo sobre inoculação com fungos micorrízicos em agricultura?", v: "Em 54 lavouras suíças de milho, a resposta ao inóculo variou de menos 12% a mais 40%; 86% dessa variação foi previsível a partir de indicadores do microbioma do solo, e o melhor preditor isolado foi a abundância de fungos patogênicos, não a disponibilidade de nutrientes. O benefício se concentra em solos biologicamente comprometidos." },
  { f: "Quais razões para preservar árvores grandes não dependem da hipótese da rede?", v: "Estrutura de habitat, estoque de carbono, sombreamento e microclima, banco de sementes, manutenção de propágulos fúngicos no solo e continuidade genética. Amarrar essas práticas a um mecanismo contestado torna a recomendação refém do resultado do teste." }
],

prova: [
  { camada: "nucleo",
    q: "Qual é a vantagem física central que o fungo oferece à planta na simbiose micorrízica?",
    alts: [
      "Ele fixa nitrogênio atmosférico e o converte em amônia para a planta.",
      "Suas hifas, muito mais finas que raízes, exploram volume de solo e poros inacessíveis à raiz, alcançando fósforo além da zona já esgotada.",
      "Ele produz açúcares por fotossíntese e os cede à planta em períodos de sombra.",
      "Ele impermeabiliza a raiz, reduzindo perda de água para o solo."
    ],
    correta: 1,
    porque: "A limitação real é geométrica e de difusão: o fósforo se move pouco no solo e a raiz esgota o entorno imediato. Hifas de poucos micrômetros ampliam enormemente a superfície e o alcance. A alternativa sobre fixação de nitrogênio é a mais tentadora porque confunde micorrizas com a simbiose entre leguminosas e rizóbios, que são bactérias e fazem fixação de N2, coisa que fungos micorrízicos não fazem." },

  { camada: "nucleo",
    q: "Qual das afirmações abaixo é consenso científico sólido?",
    alts: [
      "Árvores adultas transferem carbono preferencialmente para suas próprias mudas por meio de redes fúngicas.",
      "Redes micorrízicas comuns foram mapeadas e confirmadas na maior parte dos tipos florestais do planeta.",
      "Fungos micorrízicos fornecem fósforo e nitrogênio às plantas e recebem carbono fotossintético em troca.",
      "Árvores emitem sinais de alerta contra herbívoros que suas vizinhas conectadas evoluíram para interpretar."
    ],
    correta: 2,
    porque: "A troca bidirecional de nutrientes minerais por carbono é demonstrada em laboratório e em campo, com isótopos, microscopia e genética, sem controvérsia relevante. A alternativa sobre mapeamento das redes é a mais tentadora porque a existência de redes é plausível e às vezes real, mas a genotipagem de campo cobre apenas cinco estudos, dois tipos florestais, duas espécies de árvore e três espécies de fungo." },

  { camada: "nucleo",
    q: "O que o experimento de Simard e colegas de 1997 mediu, de fato?",
    alts: [
      "Que árvores-mãe reconhecem geneticamente suas mudas e priorizam o envio de recursos a elas.",
      "Movimento bidirecional de carbono entre bétula e pseudotsuga em campo, com saldo líquido a favor da pseudotsuga equivalente a cerca de 6% do carbono que ela fixou.",
      "Que o corte raso rompe redes micorrízicas e reduz a sobrevivência de mudas em florestas boreais.",
      "Que fungos ectomicorrízicos transportam nitrogênio orgânico em toda a comunidade florestal."
    ],
    correta: 1,
    porque: "O artigo é real e o dado existe, com marcação recíproca de 13C e 14C em campo e efeito modulado pela luz. A primeira alternativa é a mais tentadora porque é exatamente a versão que circulou depois na divulgação; o reconhecimento de parentesco e a priorização não foram medidos ali nem em nenhum estudo de campo revisado por pares localizado pela revisão de 2023." },

  { camada: "aprofundamento",
    q: "Por que encontrar 13C numa muda vizinha não basta para atribuir o resultado à rede micorrízica?",
    alts: [
      "Porque o 13C é radioativo e decai rapidamente antes da medição.",
      "Porque o isótopo marca o elemento e não a rota: solução do solo, exsudação radicular, decomposição de raízes finas e refixação de CO2 produzem sinal equivalente, e parte do carbono detectado está no manto fúngico e não no tecido vegetal.",
      "Porque a espectrometria de massa não distingue 13C de 12C com precisão suficiente em tecidos vegetais.",
      "Porque plantas não incorporam carbono vindo de outras plantas em nenhuma circunstância."
    ],
    correta: 1,
    porque: "O problema é de atribuição causal, não de instrumentação. Várias rotas geram o mesmo sinal, e a separação entre compartimento fúngico e vegetal na raiz receptora quase nunca é feita. A alternativa sobre precisão analítica é tentadora porque os sinais realmente são minúsculos, mas a limitação não é o detector: é o desenho que não distingue caminhos." },

  { camada: "aprofundamento",
    q: "Qual é a confusão embutida no tratamento experimental com malha de 20 a 250 micrômetros?",
    alts: [
      "A malha impede a entrada de água, alterando o estado hídrico da muda.",
      "A malha permite hifas e barra raízes, então ao mesmo tempo em que supostamente preserva a rede também elimina a competição radicular das árvores vizinhas sobre a muda.",
      "A malha seleciona apenas fungos arbusculares, excluindo os ectomicorrízicos.",
      "A malha impede a passagem de esporos, zerando a colonização da muda."
    ],
    correta: 1,
    porque: "Os dois efeitos mudam juntos, e crescimento maior dentro do cilindro pode ser alívio de competição em vez de subsídio pela rede. Por isso Karst e colegas restringiram a análise aos estudos que incluíam também tratamento sem malha, chegando a 13 estudos e 28 experimentos, dos quais cerca de 18% mostraram efeito positivo da rede não anulado pelo efeito radicular. A alternativa sobre água descreve a malha submicrométrica, que barra tudo, e não a de poro grosso." },

  { camada: "aprofundamento",
    q: "O que a análise de citações de Karst, Jones e Hoeksema mostrou?",
    alts: [
      "Que os trabalhos originais sobre redes micorrízicas continham erros de análise estatística.",
      "Que a proporção de citações que atribuíam aos trabalhos originais conclusões não sustentadas por eles cresceu com o tempo, chegando a cerca de 25% para estrutura e 50% para função.",
      "Que artigos sobre micorrizas são citados menos do que artigos de outras áreas da ecologia.",
      "Que autores dos trabalhos originais se autocitaram acima da média da área."
    ],
    correta: 1,
    porque: "A análise foi sobre a representação dos trabalhos na literatura posterior, cobrindo 593 artigos que citavam 7 trabalhos sobre estrutura e 1.083 que citavam 11 sobre função. A primeira alternativa é a mais tentadora porque parece a acusação natural, mas os autores não sustentam que os originais estejam errados: sustentam que foram citados como dizendo mais do que dizem." },

  { camada: "aprofundamento",
    q: "Qual é a diferença entre micorriza arbuscular e ectomicorriza que mais importa para o debate sobre redes em floresta?",
    alts: [
      "A arbuscular é encontrada apenas em plantas aquáticas, e portanto é irrelevante para florestas.",
      "A ectomicorrízica predomina em florestas temperadas e boreais, e é nesse tipo de floresta, com pouquíssimas espécies de árvore e de fungo estudadas, que quase toda a discussão sobre árvores-mãe se concentra.",
      "A arbuscular forma manto e rede de Hartig, e a ectomicorrízica forma arbúsculos dentro das células.",
      "Somente a arbuscular consegue conectar duas plantas ao mesmo tempo."
    ],
    correta: 1,
    porque: "A questão de alcance importa: o corpo empírico central vem de florestas de pseudotsuga e bétula no noroeste norte-americano, o que limita fortemente qualquer generalização para florestas do mundo. A terceira alternativa é tentadora por ser uma inversão exata das definições, e vale fixar: arbúsculo dentro da célula é arbuscular, manto e rede de Hartig é ectomicorriza." },

  { camada: "extensao",
    q: "Por que o interesse evolutivo do fungo é uma objeção teórica à hipótese da árvore-mãe?",
    alts: [
      "Porque fungos micorrízicos não conseguem transportar carbono por distâncias maiores que poucos milímetros.",
      "Porque o fungo aloca recursos segundo retorno, como num mercado com recompensa recíproca, e transportar carbono de uma árvore produtiva para subsidiar de graça uma muda improdutiva não lhe traz vantagem adaptativa.",
      "Porque fungos são organismos haploides e por isso não estão sujeitos à seleção natural.",
      "Porque o fungo obtém todo o seu carbono da decomposição de matéria orgânica, sem depender da planta."
    ],
    correta: 1,
    porque: "Kiers e colegas mostraram discriminação em ambos os sentidos: a planta paga mais o fungo que entrega mais fósforo, e o fungo entrega mais fósforo a quem paga melhor. Um cenário mais compatível com essa biologia é o do fungo usando a muda sombreada como ponto de acesso e se sustentando com carbono das árvores grandes, ou seja, custo para a muda e não subsídio. A alternativa sobre distância é tentadora, mas o transporte por micélio a distâncias de dezenas de centímetros e mais está documentado." },

  { camada: "extensao",
    q: "O que os ensaios de campo com inoculação de fungos arbusculares em agricultura mostram?",
    alts: [
      "Ganho consistente de rendimento em qualquer solo, entre 20% e 40%.",
      "Resposta altamente variável, de menos 12% a mais 40% em 54 lavouras de milho, com o melhor preditor isolado sendo a abundância de fungos patogênicos no solo e não a disponibilidade de nutrientes.",
      "Ausência total de efeito em todos os solos testados.",
      "Efeito positivo apenas em solos já ricos em fósforo e em fungos nativos."
    ],
    correta: 1,
    porque: "A variação inclui casos de prejuízo, e 86% dela foi prevista a partir de poucos parâmetros de solo, sobretudo indicadores de microbioma. A leitura prática é que o inóculo ajuda onde a comunidade fúngica do solo está comprometida. A última alternativa inverte exatamente o resultado, e é tentadora porque parece intuitivo que o inóculo pegue melhor em solo saudável." },

  { camada: "extensao",
    q: "Qual conjunto de medidas resolveria de forma mais direta a disputa sobre transferência entre árvores?",
    alts: [
      "Mais estudos de laboratório com plântulas em vasos, que permitem controle total das condições.",
      "Genotipagem de redes em muitos sítios e espécies, traçadores que marquem a rota fúngica e não só o elemento, separação do compartimento fúngico do vegetal na medida, controles sem malha e desfechos demográficos medidos ao longo de anos.",
      "Modelagem computacional do fluxo de carbono a partir dos dados de campo já publicados.",
      "Levantamento de opinião entre ecólogos florestais sobre a plausibilidade da hipótese."
    ],
    correta: 1,
    porque: "A disputa é sobre atribuição causal em campo, e cada item da lista ataca um confundidor específico identificado nas revisões. A primeira alternativa é a mais tentadora porque o controle em vaso é de fato maior, mas é justamente a extrapolação de resultados de vaso e casa de vegetação para floresta que está em questão; o que falta é evidência de campo com controles adequados, não mais evidência controlada fora do campo." }
],

fontes: [
  { n: 1, tipo: "artigo", ref: "Karst, J., Jones, M.D. &amp; Hoeksema, J.D. 'Positive citation bias and overinterpreted results lead to misinformation on common mycorrhizal networks in forests'. <em>Nature Ecology &amp; Evolution</em> 7:501-511, 2023. Revisão das três afirmações e análise de citações.", url: "https://doi.org/10.1038/s41559-023-01986-1" },
  { n: 2, tipo: "fonte primária", ref: "Simard, S.W., Perry, D.A., Jones, M.D., Myrold, D.D., Durall, D.M. &amp; Molina, R. 'Net transfer of carbon between ectomycorrhizal tree species in the field'. <em>Nature</em> 388:579-582, 1997. O artigo que originou a expressão 'wood wide web'.", url: "https://doi.org/10.1038/41557" },
  { n: 3, tipo: "artigo", ref: "Henriksson, N., Marshall, J., Högberg, M.N., Högberg, P., Polle, A., Franklin, O. &amp; Näsholm, T. 'Re-examining the evidence for the mother tree hypothesis: resource sharing among trees via ectomycorrhizal networks'. <em>New Phytologist</em> 239(1):19-28, 2023.", url: "https://doi.org/10.1111/nph.18935" },
  { n: 4, tipo: "artigo", ref: "Robinson, D.G. et al. (35 autores) 'Mother trees, altruistic fungi, and the perils of plant personification'. <em>Trends in Plant Science</em> 29(1):20-31, 2024.", url: "https://doi.org/10.1016/j.tplants.2023.08.010" },
  { n: 5, tipo: "artigo", ref: "Simard, S.W., Ryan, T.L. &amp; Perry, D.A. 'Opinion: Response to questions about common mycorrhizal networks'. <em>Frontiers in Forests and Global Change</em> 7, 2025. A réplica dos autores criticados.", url: "https://doi.org/10.3389/ffgc.2024.1512518" },
  { n: 6, tipo: "artigo", ref: "Merckx, V.S.F.T., Gomes, S.I.F., Wang, D., Verbeek, C., Jacquemyn, H., Zahn, F.E., Gebauer, G. &amp; Bidartondo, M.I. 'Mycoheterotrophy in the wood-wide web'. <em>Nature Plants</em> 10:710-718, 2024.", url: "https://doi.org/10.1038/s41477-024-01677-0" },
  { n: 7, tipo: "revisão", ref: "van der Heijden, M.G.A., Martin, F.M., Selosse, M.-A. &amp; Sanders, I.R. 'Mycorrhizal ecology and evolution: the past, the present, and the future'. <em>New Phytologist</em> 205:1406-1423, 2015.", url: "https://doi.org/10.1111/nph.13288" },
  { n: 8, tipo: "artigo", ref: "Kiers, E.T. et al. 'Reciprocal rewards stabilize cooperation in the mycorrhizal symbiosis'. <em>Science</em> 333:880-882, 2011. A troca modelada como mercado biológico.", url: "https://doi.org/10.1126/science.1208473" },
  { n: 9, tipo: "artigo", ref: "Hawkins, H.-J., Cargill, R.I.M., Van Nuland, M.E., Hagen, S.C., Field, K.J., Sheldrake, M., Soudzilovskaia, N.A. &amp; Kiers, E.T. 'Mycorrhizal mycelium as a global carbon pool'. <em>Current Biology</em> 33(11):R560-R573, 2023.", url: "https://doi.org/10.1016/j.cub.2023.02.027" },
  { n: 10, tipo: "artigo", ref: "Stewart, J.D. et al. 'Global density and biomass of arbuscular mycorrhizal fungal networks'. <em>Science</em> 392:1171-1176, 2026.", url: "https://doi.org/10.1126/science.adu4373" },
  { n: 11, tipo: "artigo", ref: "Lutz, S. et al. 'Soil microbiome indicators can predict crop growth response to large-scale inoculation with arbuscular mycorrhizal fungi'. <em>Nature Microbiology</em> 8:2277-2289, 2023. Ensaio em 54 lavouras suíças.", url: "https://doi.org/10.1038/s41564-023-01520-w" },
  { n: 12, tipo: "artigo", ref: "Koziol, L., McKenna, T.P. &amp; Bever, J.D. 'Meta-analysis reveals globally sourced commercial mycorrhizal inoculants fall short'. <em>New Phytologist</em> 246:821-827, 2025.", url: "https://doi.org/10.1111/nph.20278" },
  { n: 13, tipo: "revisão", ref: "Brundrett, M.C. &amp; Tedersoo, L. 'Evolutionary history of mycorrhizal symbioses and global host plant diversity'. <em>New Phytologist</em> 220:1108-1115, 2018. Distribuição dos tipos de micorriza entre as plantas.", url: "https://doi.org/10.1111/nph.14976" }
]
};
