CONTEUDOS["selecao-adversa"] = {
termo: "Seleção adversa",
area: "Economia",
subtitulo: "Um vendedor de carro usado sabe se o carro é bom. O comprador não sabe. Essa diferença, sozinha, pode bastar para afundar um mercado inteiro: não porque ninguém queira negociar, mas porque o preço que os compradores estão dispostos a pagar reflete a qualidade média esperada, e a essa média os donos dos carros bons preferem não vender. George Akerlof formalizou essa ideia em 1970 num artigo recusado três vezes antes de ser publicado. Trinta e um anos depois, ganhou o Nobel por causa dele.",
prerequisitos: [
  "Nenhum pré-requisito técnico. Ajuda ter em mente uma compra que você já fez com receio de estar levando gato por lebre.",
  "Para o aprofundamento: familiaridade básica com a ideia de oferta e demanda e com o conceito de equilíbrio de mercado."
],
conexoes: [
  { termo: "Risco moral (moral hazard)", relacao: "As duas são falhas de mercado por informação assimétrica, mas em momentos diferentes: seleção adversa é sobre o que a outra parte já é antes do contrato, risco moral é sobre o que ela passa a fazer depois de estar protegida por ele." },
  { termo: "Problema agente-principal", relacao: "Descreve o desalinhamento de interesses entre quem contrata (principal) e quem executa (agente) quando o principal não consegue observar o esforço do agente. É um primo próximo do risco moral, e frequentemente confundido com seleção adversa, mas o problema central é de incentivo durante a relação, não de triagem antes dela." },
  { termo: "Sinalização (signaling)", relacao: "Resposta de quem tem a informação boa: gastar recursos numa ação cara o bastante para ser difícil de imitar por quem tem informação ruim, revelando seu tipo sem que ninguém precise investigar nada." },
  { termo: "Bens de experiência e bens de confiança", relacao: "A classificação de Philip Nelson (1970) entre bens que só se avaliam usando, bens de crença e bens que se avaliam antes de comprar ajuda a prever onde a seleção adversa é mais séria: quanto mais difícil verificar a qualidade antes da compra, maior o problema." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Em algum momento no fim dos anos 1960, um jovem economista chamado George Akerlof escreveu um artigo curto sobre o mercado de carros usados e tentou publicá-lo. A American Economic Review recusou. A Review of Economic Studies recusou. A Journal of Political Economy também recusou, e o editor teria comentado, sobre a ideia central do texto, algo como: se isso estiver certo, a economia seria diferente. Os pareceristas achavam a conclusão óbvia demais para ser interessante.<sup class="cit"><a href="#f1">1</a></sup> O artigo só saiu em 1970, na Quarterly Journal of Economics, sob o título "The Market for Lemons: Quality Uncertainty and the Market Mechanism".<sup class="cit"><a href="#f2">2</a></sup> Em 2001, essa mesma ideia rendeu a Akerlof um terço do Prêmio Nobel de Economia, dividido com Michael Spence e Joseph Stiglitz.</p>

<p>Vale começar por essa história de recusa porque ela ensina algo sobre como economistas avaliam ideias novas: a pergunta não é se um argumento soa surpreendente, é se ele identifica um mecanismo real que efeitos reais dependem dele. Os pareceristas erraram feio. O mecanismo era real, e explicava coisas que ninguém tinha juntado antes num só argumento.</p>

<h3>O que é um "lemon"</h3>

<p>Em inglês americano, um <em>lemon</em> é uma gíria para um carro usado que parece bom por fora mas é ruim por dentro: motor com problema, histórico de batida escondido, peça vital perto de quebrar. O termo já existia antes de Akerlof. O que ele fez foi perguntar: o que acontece com um mercado inteiro de carros usados se só o vendedor sabe, para cada carro específico, se ele é um bom carro ou um lemon?</p>

<p>A resposta parece, à primeira vista, otimista demais para dar problema. Existem compradores dispostos a pagar bem por um carro bom e vendedores de carros bons dispostos a vender por um preço razoável. Deveria haver negócio. O obstáculo é que o comprador, ao olhar para um carro específico à venda, não consegue distinguir se aquele carro é bom ou é lemon. Ele só sabe a proporção de carros bons e ruins no mercado como um todo. Então ele oferece um preço que reflete essa média.</p>

<p>E é aqui que o mecanismo trava. Ao preço médio, o dono de um carro genuinamente bom acha o negócio ruim: seu carro vale mais do que aquilo. Ele prefere não vender, ou guardar o carro, ou vender por outro canal. Quem aceita vender pelo preço médio são principalmente os donos de carros ruins, para quem aquele preço já é lucro. Com isso, a qualidade média dos carros efetivamente à venda cai. Os compradores, percebendo isso (ou aprendendo com a experiência), revisam sua expectativa de qualidade para baixo e passam a oferecer um preço ainda menor. O que empurra mais donos de carros razoáveis para fora do mercado, e assim por diante. No limite teórico, esse processo pode reduzir um mercado inteiro a quase nada além de lemons, ou fazê-lo desaparecer.<sup class="cit"><a href="#f2">2</a></sup></p>

<div class="marca consenso">
<span class="rot">O que é consenso entre economistas</span>
<p>O mecanismo lógico de Akerlof está correto e é aceito sem disputa: se compradores não conseguem observar a qualidade individual de um bem e só reagem à qualidade média esperada, o preço de equilíbrio tende a afastar do mercado os vendedores da parte de cima da distribuição de qualidade. Esse resultado é uma peça sólida de teoria econômica. A disputa começa em outro lugar, que é o quanto esse mecanismo teórico realmente domina mercados reais de carros usados, tema da camada de extensão.</p>
</div>

<h3>Um modelo é uma simplificação deliberada</h3>

<p>Vale parar aqui para dizer algo sobre como economistas pensam, porque isso ajuda a entender o resto do campo, não só este tópico. Um <strong>modelo econômico</strong> não tenta descrever um mercado em todo o seu detalhe. Ele isola um mecanismo, assume tudo o mais constante ou simplificado, e pergunta: só com esse ingrediente, o que acontece? Akerlof assumiu compradores que não têm nenhuma informação sobre a qualidade individual do carro, vendedores que sabem tudo sobre o próprio carro, e nada mais interferindo. Nenhum mercado real de carros usados é exatamente assim: existem mecânicos que fazem vistoria, existem garantias, existem marcas com reputação. Isso não invalida o modelo. Um modelo assim serve para mostrar que a informação assimétrica, isoladamente, já é capaz de produzir um problema sério, e para dar aos economistas um ponto de referência contra o qual comparar o que instituições do mundo real, como garantias e vistorias, efetivamente resolvem.</p>

<p>Essa distinção importa porque muita gente, ao ouvir falar do modelo dos lemons, pergunta se ele está "certo" no sentido de descrever fielmente o mercado de usados de hoje. É a pergunta errada para fazer a um modelo. A pergunta certa é: o mecanismo que ele descreve opera, ao menos em parte, e as instituições que observamos no mundo real (garantias, certificações, reputação de marca) existem, ao menos em parte, para conter justamente esse mecanismo? Para essa pergunta, a resposta é bem mais clara, e é sim.</p>

<h3>Seleção adversa em duas outras roupagens</h3>

<p>O mesmo esqueleto lógico aparece fora do mercado de carros. Numa seguradora de saúde, quem procura comprar um plano individual sabe mais sobre sua própria saúde do que a seguradora sabe sobre ele. Se a seguradora cobrasse o mesmo preço para todo mundo, o preço refletiria o risco médio da população, e pessoas saudáveis, para quem esse preço é caro demais em relação ao risco que representam, tenderiam a não comprar. Restariam desproporcionalmente as pessoas de risco mais alto, empurrando o preço médio ainda mais para cima. É por isso que seguradoras fazem perguntas de saúde antes de fechar um contrato, cobram mais de quem já teve certas condições e impõem período de carência. Não é implicância: é a resposta direta ao mesmo problema que afetava os vendedores de carro bom.</p>

<p>No mercado de crédito, quem pede um empréstimo sabe mais sobre a própria capacidade e disposição de pagar do que o banco sabe. Um banco que simplesmente cobrasse juros mais altos para compensar o risco médio de calote corre o risco de afastar os tomadores mais confiáveis, que acham a taxa cara demais para o risco real que oferecem, e atrair desproporcionalmente os tomadores mais arriscados, para quem uma taxa alta ainda compensa, dado que talvez nunca paguem de volta. Esse argumento, formalizado por Joseph Stiglitz e Andrew Weiss em 1981, ajuda a explicar por que bancos muitas vezes preferem negar crédito a certos pedidos, em vez de simplesmente cobrar juros mais altos até o mercado equilibrar sozinho.<sup class="cit"><a href="#f3">3</a></sup></p>

<h3>O que conta como evidência aqui</h3>

<p>Uma última observação sobre método, porque ela também generaliza. Mostrar que um mecanismo é logicamente consistente, como Akerlof fez, é um passo necessário, mas não é o mesmo que mostrar que ele domina um mercado específico na prática. Para isso, economistas precisam de dados reais: será que carros vendidos por donos comuns são, de fato, de qualidade pior do que carros equivalentes que continuam em uso? Será que pessoas que compram mais seguro são, de fato, as de maior risco? Essas perguntas têm respostas empíricas, e a camada de extensão mostra que, no caso específico dos carros usados, essas respostas são menos favoráveis ao modelo do que a maioria das pessoas assume.</p>
` },

aprofundamento: { minutos: 30, html: `
<h3>Definição formal e o mecanismo de desmoronamento</h3>

<p><strong>Seleção adversa</strong> é o problema que surge quando, antes de um contrato ou transação ser celebrado, uma das partes possui informação privada sobre uma característica relevante (qualidade, risco, tipo) que a outra parte não observa, e essa assimetria afeta quem participa da transação. O termo vem originalmente do mercado de seguros, onde as seguradoras notaram que a própria decisão de comprar seguro carrega informação: quem busca mais cobertura tende a ser, em média, quem sabe que precisa dela mais.</p>

<p>No modelo de Akerlof, o mecanismo às vezes chamado de <strong>unraveling</strong> (desmoronamento, ou desenrolamento) funciona por indução: se compradores só conseguem pagar o preço da qualidade média, os vendedores das unidades acima da média se retiram; isso reduz a qualidade média do que resta à venda; compradores racionais antecipam ou aprendem essa queda e reduzem sua oferta de preço; mais vendedores de qualidade relativamente alta se retiram; e assim por diante. Em versões estilizadas do modelo, com um contínuo de níveis de qualidade e vendedores dispostos a vender a qualquer preço acima do próprio valor de reserva, esse processo pode levar ao colapso quase completo do mercado, restando apenas as transações de pior qualidade, ou nenhuma transação.<sup class="cit"><a href="#f2">2</a></sup></p>

<div class="tabela-env">
<table>
<thead><tr><th>Rodada</th><th>Preço oferecido pelos compradores</th><th>Quem continua disposto a vender</th></tr></thead>
<tbody>
<tr><td>1</td><td>Reflete a qualidade média de toda a população de carros</td><td>Todo mundo cujo carro vale, para o próprio dono, menos do que esse preço</td></tr>
<tr><td>2</td><td>Revisado para baixo, porque quem ficou disposto a vender tem carros piores que a média original</td><td>Só quem tem carros ainda piores que o novo corte</td></tr>
<tr><td>3 em diante</td><td>Continua caindo a cada rodada, em geral rápido</td><td>Convergindo para os piores carros do mercado</td></tr>
</tbody>
</table>
</div>

<p>Esta é uma ilustração simplificada da lógica do processo, não uma reconstrução dos números originais do artigo de 1970, que usa uma formalização matemática com funções de utilidade e uma distribuição contínua de qualidade. A intuição, porém, é exatamente essa: um processo iterativo em que a expectativa de qualidade e a oferta de preço se retroalimentam para baixo.</p>

<figure class="figura">[[FIG:mercado-limoes]]<figcaption>O preço que os compradores oferecem reflete a qualidade média esperada dos carros à venda. A cada rodada, os donos de carros com qualidade acima desse preço médio se retiram do mercado, o que reduz a qualidade média do que resta à venda e empurra o preço seguinte para baixo. O processo pode convergir para um mercado dominado por carros ruins, ou colapsar por completo.</figcaption></figure>

<h3>Seleção adversa não é risco moral</h3>

<p>Este é o par de conceitos mais confundido em economia da informação, e vale fixar a diferença com precisão.</p>

<p><strong>Seleção adversa</strong> é um problema sobre o <em>tipo</em> de quem está do outro lado, e ocorre <em>antes</em> do contrato. A pergunta é: quem se apresenta para fazer este negócio, dado o preço ou os termos oferecidos? Exemplo: pessoas de saúde mais frágil são mais propensas a procurar comprar um seguro de saúde individual.</p>

<p><strong>Risco moral</strong> (<em>moral hazard</em>) é um problema sobre o <em>comportamento</em> de alguém depois de já estar protegido ou já ter assinado o contrato, e ocorre <em>depois</em> dele. A pergunta é: como a pessoa muda de comportamento sabendo que já está coberta? Exemplo: uma pessoa com seguro contra roubo de carro passa a ser um pouco mais displicente sobre onde estaciona, porque parte do custo de um eventual roubo já não recai só sobre ela.</p>

<div class="marca consenso">
<span class="rot">Regra prática para não confundir os dois</span>
<p>Pergunte quando a informação relevante existiria. Se a característica problemática já existe antes de qualquer contrato ser assinado (um tipo de risco, uma qualidade oculta), é seleção adversa. Se o problema é uma mudança de comportamento provocada pelo próprio contrato (menos cuidado porque agora existe proteção), é risco moral. Os dois costumam aparecer juntos no mesmo mercado de seguros, e a distinção continua sendo sobre o tempo relativo ao contrato, não sobre o assunto (saúde, carro, crédito).</p>
</div>

<h3>Seleção adversa não é o problema agente-principal</h3>

<p>O <strong>problema agente-principal</strong> descreve uma relação em que o principal (quem contrata) delega uma tarefa a um agente (quem executa), e os interesses dos dois não estão perfeitamente alinhados, e o principal não observa perfeitamente o esforço ou as escolhas do agente. Um exemplo clássico é o acionista (principal) e o executivo contratado para administrar a empresa (agente). Esse problema é, na prática, um parente próximo do risco moral: o desalinhamento se manifesta como uma ação do agente, depois de contratado, que o principal não consegue monitorar totalmente. A confusão com seleção adversa acontece porque as duas envolvem informação assimétrica e contratos, mas a seleção adversa é sobre quem aparece para contratar, e o problema agente-principal é sobre o que a pessoa já contratada faz.</p>

<h3>Mercado de seguro-saúde: por que a triagem existe</h3>

<p>Kenneth Arrow já havia notado, em 1963, que mercados de cuidado de saúde têm características particulares de incerteza que os afastam do modelo padrão de mercado competitivo, um precursor importante da literatura sobre informação em seguros.<sup class="cit"><a href="#f4">4</a></sup> A aplicação direta da lógica de Akerlof ao seguro é: se uma seguradora cobrasse um prêmio único baseado no risco médio da população, pessoas de baixo risco pagariam mais do que o valor esperado de seu próprio risco, e teriam incentivo para comprar menos cobertura ou nenhuma. As de alto risco, pelo contrário, achariam o prêmio um bom negócio. A composição de quem compra se desloca para o risco mais alto, empurrando os prêmios futuros para cima.</p>

<p>As respostas institucionais das seguradoras a esse problema incluem, entre outras: <strong>subscrição de risco</strong> (<em>underwriting</em>), que é o processo de coletar informação sobre o segurado antes de fechar contrato, por meio de questionários de saúde e exames; <strong>tabelas de risco</strong>, que ajustam o prêmio conforme fatores observáveis como idade e histórico; e <strong>período de carência</strong>, que atrasa a cobertura de certas condições logo após a contratação, especificamente para desencorajar quem já sabe que precisa de um procedimento específico de comprar o seguro só para aquilo.<sup class="cit"><a href="#f5">5</a></sup> Cada um desses mecanismos é uma tentativa de reduzir a vantagem informacional do segurado, aproximando o prêmio cobrado do risco real de cada grupo.</p>

<h3>Mercado de crédito: por que bancos racionam em vez de só subir os juros</h3>

<p>Stiglitz e Weiss (1981) mostraram um resultado que, à primeira vista, contraria a intuição de oferta e demanda comum: um banco pode preferir negar crédito a alguns tomadores dispostos a pagar juros altos, em vez de simplesmente cobrar esses juros altos e emprestar para todos que aceitarem.<sup class="cit"><a href="#f3">3</a></sup> O argumento tem duas partes.</p>

<p>O <strong>efeito de seleção adversa</strong>: ao subir a taxa de juros cobrada, o banco torna o empréstimo menos atraente para tomadores de projetos seguros, que têm margem mais apertada e desistem, e continua atraente para tomadores de projetos arriscados, que só pagam de volta se o projeto der certo, e nesse caso o retorno alto compensa a taxa alta. A composição média dos tomadores que restam piora.</p>

<p>O <strong>efeito de incentivo</strong>: mesmo entre os tomadores que ficam, uma taxa de juros mais alta reduz o retorno líquido esperado de projetos seguros mais do que o de projetos arriscados, porque quem toma empréstimo só arca com o prejuízo até o limite do que possui (responsabilidade limitada), enquanto o ganho, se o projeto arriscado der certo, não é dividido com o banco além do valor fixo do empréstimo. Isso empurra os próprios tomadores a preferir projetos mais arriscados depois de contratado o empréstimo a uma taxa mais alta.</p>

<p>Juntos, os dois efeitos implicam que, a partir de certo ponto, subir mais a taxa de juros pode reduzir o retorno esperado do banco, porque a piora na composição de quem toma o empréstimo mais do que compensa o ganho por unidade emprestada. A resposta racional do banco é fixar uma taxa abaixo daquela que equilibraria oferta e demanda pela via de preço, e simplesmente recusar uma parte dos pedidos de crédito. Esse racionamento de crédito em equilíbrio é uma das aplicações mais citadas da literatura de seleção adversa fora do mercado de bens de consumo.</p>

<h3>Mecanismos que mitigam seleção adversa</h3>

<p>A parte com informação boa nem sempre fica passiva vendo o mercado se degradar. A literatura identifica dois grandes caminhos de resposta, que respondem a perguntas diferentes: quem toma a iniciativa de revelar a informação.</p>

<p><strong>Sinalização</strong> (<em>signaling</em>), proposta por Michael Spence em 1973, parte de quem tem a informação boa. No modelo clássico de Spence, trabalhadores de alta produtividade investem em educação formal não necessariamente porque a educação em si aumenta a produtividade, mas porque ela é mais barata de obter para quem já é produtivo (aprende mais rápido, tem menos dificuldade) do que para quem não é. Se essa diferença de custo for grande o suficiente, surge um <strong>equilíbrio separador</strong>: trabalhadores de tipos diferentes escolhem níveis de educação diferentes, e o empregador, mesmo sem observar a produtividade diretamente, consegue inferi-la a partir do sinal. Quando a diferença de custo não é suficiente para separar os tipos, o resultado é um <strong>equilíbrio agrupador</strong>, em que todos escolhem o mesmo sinal e o empregador não aprende nada com ele.<sup class="cit"><a href="#f6">6</a></sup></p>

<p><strong>Triagem</strong> (<em>screening</em>), formalizada por Michael Rothschild e Joseph Stiglitz em 1976 para o mercado de seguros, parte de quem não tem a informação. Em vez de tentar adivinhar o risco de cada cliente, a seguradora oferece um <strong>menu de contratos</strong>, cada um com uma combinação diferente de prêmio e cobertura (ou franquia), desenhado de modo que clientes de tipos diferentes escolham espontaneamente contratos diferentes, revelando seu tipo pela própria escolha. Tipicamente, contratos com cobertura total e prêmio mais alto atraem clientes de risco mais alto, e contratos com cobertura parcial e prêmio mais baixo atraem os de risco mais baixo, que preferem pagar menos e aceitar carregar uma fatia do próprio risco.<sup class="cit"><a href="#f7">7</a></sup></p>

<div class="marca controverso">
<span class="rot">Uma fragilidade teórica do modelo de Rothschild-Stiglitz</span>
<p>O próprio artigo de 1976 mostra que, sob certas condições de composição da população (quando há poucos clientes de alto risco), nenhum equilíbrio separador sobrevive à entrada de uma seguradora concorrente oferecendo um contrato levemente diferente, e um equilíbrio agrupador nunca é estável nesse modelo porque atrai um concorrente disposto a roubar os clientes de baixo risco com um contrato melhor para eles. Nessas condições, o modelo não prevê nenhum equilíbrio competitivo estável. Essa lacuna gerou décadas de trabalho subsequente propondo conceitos de equilíbrio alternativos, como o de Charles Wilson (1977), que assume que concorrentes anteveem a possibilidade de retirada de contratos não lucrativos.<sup class="cit"><a href="#f8">8</a></sup> É um problema técnico real, não uma nota de rodapé, e mostra que até os modelos que resolveram parte do problema de Akerlof abriram um problema novo.</p>
</div>

<p>Além de sinalização e triagem, mercados reais recorrem a instrumentos mais informais, mas eficazes: <strong>garantias</strong> (o vendedor assume o custo de defeitos futuros, o que só é um negócio racional para ele se o produto for realmente bom, funcionando como um sinal indireto), <strong>reputação</strong> (uma concessionária ou marca que depende de vendas repetidas e de recomendação tem um incentivo de longo prazo para não vender produtos ruins como se fossem bons, o que Akerlof já discutia no próprio artigo de 1970 como um mecanismo contrário ao colapso do mercado) e <strong>certificação por terceiros</strong> (uma inspeção mecânica independente antes da compra, um selo de qualidade, uma agência de checagem de histórico do veículo, que fornecem uma fonte de informação que não depende da palavra do vendedor).</p>
` },

extensao: { minutos: 60, html: `
<h3>O modelo é mais forte como lógica do que como descrição do mercado de usados</h3>

<p>Aqui está o ponto mais importante para quem já entende o mecanismo de Akerlof e quer ir além dele: quando economistas foram a campo testar se o mercado real de carros usados exibe o padrão que o modelo prevê, os resultados saíram bem mais fracos e mais mistos do que o prestígio do modelo sugeriria.</p>

<p>Eric Bond, em 1982, conduziu um teste direto no mercado de caminhonetes usadas nos Estados Unidos, comparando taxas de problemas mecânicos entre veículos vendidos no mercado de usados e veículos da mesma idade que continuaram com o dono original. A previsão do modelo dos lemons é que os veículos vendidos deveriam apresentar taxas de defeito sistematicamente mais altas, porque donos venderiam desproporcionalmente os veículos ruins. Bond não encontrou esse padrão de forma consistente: das medidas de reparo analisadas, a maioria não mostrou diferença estatisticamente significativa entre veículos vendidos e não vendidos.<sup class="cit"><a href="#f9">9</a></sup></p>

<p>Esse não é um resultado isolado. David Genesove (1993) estudou o mercado atacadista de carros usados, no qual revendedores compram e vendem entre si em leilão, um ambiente onde a informação sobre o histórico do carro é ainda mais desigual entre as partes, e discutiu evidência de seleção adversa nesse segmento específico, mostrando que a força do efeito depende muito de qual fatia do mercado se observa.<sup class="cit"><a href="#f10">10</a></sup> Em mercados de seguro, o teste mais influente é o de Pierre-André Chiappori e Bernard Salanié (2000), que verificaram se, dentro de uma mesma categoria de risco observável, clientes que escolhem mais cobertura de fato sofrem mais sinistros depois, exatamente o que a teoria de seleção adversa prevê. No mercado de seguro automotivo francês que estudaram, não encontraram essa correlação positiva na magnitude esperada pela teoria.<sup class="cit"><a href="#f11">11</a></sup> Uma revisão ampla de Alma Cohen e Peter Siegelman (2010), cobrindo vários mercados de seguro, mostrou que a evidência é heterogênea: alguns mercados exibem o padrão de seleção adversa, e outros exibem o oposto, um fenômeno que passou a ser chamado de <strong>seleção vantajosa</strong> (<em>advantageous selection</em>), em que quem compra mais cobertura é, por outras razões, como aversão a risco geral, também quem tem menos sinistros.<sup class="cit"><a href="#f12">12</a></sup></p>

<div class="marca controverso">
<span class="rot">Como interpretar essa lacuna entre teoria e evidência</span>
<p>Não é correto concluir que Akerlof "estava errado". A lógica do mecanismo continua impecável, e ninguém a refutou. O que a evidência empírica mista sugere é que, em muitos mercados reais, outros mecanismos, sobretudo reputação, garantias, certificação e a própria repetição de transações ao longo do tempo, já neutralizam boa parte do problema antes que ele produza o colapso previsto no caso extremo do modelo. Nesse sentido, alguns economistas descrevem o artigo de 1970 mais como uma <strong>parábola poderosa</strong>, que revela um mecanismo latente em qualquer mercado com informação desigual, do que como um retrato fiel e literal do mercado de usados observado hoje, no qual esse mecanismo aparece contido por instituições. É uma diferença entre validar a lógica de um modelo e validar sua força empírica num contexto específico, e as duas coisas exigem evidências diferentes.</p>
</div>

<h3>O legado maior: uma gramática comum para muitos mercados</h3>

<p>O comunicado do Prêmio Nobel de 2001 justificou a premiação a Akerlof, Spence e Stiglitz precisamente por terem estabelecido as bases teóricas para analisar mercados com informação assimétrica de forma geral, aplicável muito além de carros e seguros: mercados de trabalho (por que discriminação estatística contra grupos sobre os quais o empregador tem menos informação pode surgir mesmo sem preconceito), mercados financeiros, e mercados de crédito em países em desenvolvimento, um dos próprios exemplos originais de Akerlof no artigo de 1970, sobre como a falta de mecanismos formais de verificação de crédito limita o financiamento disponível para pequenos empreendedores.<sup class="cit"><a href="#f13">13</a></sup></p>

<p>Em seu ensaio autobiográfico para o Nobel, Akerlof reconstrói a trajetória incomum do artigo, da rejeição inicial ao reconhecimento posterior, e reflete sobre por que uma ideia aparentemente simples levou tempo para ser aceita pela profissão.<sup class="cit"><a href="#f14">14</a></sup> Décadas depois, ele voltou ao tema em coautoria com Robert Shiller no livro "Phishing for Phools" (2015), argumentando que mercados livres, deixados sem nenhuma restrição, não apenas toleram como ativamente recompensam quem engana e manipula, e que a mesma lógica de informação assimétrica do mercado dos lemons se generaliza para publicidade enganosa, produtos financeiros complexos demais para o cliente entender, e outras formas de exploração da diferença de informação.<sup class="cit"><a href="#f15">15</a></sup></p>

<div class="marca emergente">
<span class="rot">Um debate que continua aberto</span>
<p>A extensão da lógica de seleção adversa para setores como financiamento de dívida de empresas (por que empresas com melhores perspectivas preferem financiar-se com lucros retidos a emitir ações, hipótese ligada a Stewart Myers e ao chamado "pecking order" de financiamento) e para mercados online de plataforma (por que marketplaces investem pesado em sistemas de reputação e avaliação de usuários) continua sendo território de pesquisa ativa, com resultados que variam conforme o desenho específico da plataforma e a facilidade de verificação da qualidade. Não há, hoje, um consenso fechado sobre o quanto sistemas de reputação digitais resolvem versus apenas administram o problema original identificado por Akerlof.</p>
</div>

<h3>O que o caso de Rothschild-Stiglitz ensina sobre os limites de resolver seleção adversa</h3>

<p>Vale voltar à fragilidade teórica mencionada no aprofundamento, porque ela tem uma lição geral. Mostrar que existe um mecanismo (triagem por menu de contratos) que, em princípio, poderia separar tipos de risco não é o mesmo que garantir que um mercado competitivo, com livre entrada de concorrentes, sempre convirja para esse resultado de forma estável. David de Meza e David Webb (1987) levaram essa observação ainda mais longe, mostrando que, sob certas condições realistas sobre como o risco e o retorno de projetos se relacionam, é possível que mercados de crédito com informação assimétrica sofram o problema oposto ao de Akerlof: excesso de investimento, e não escassez dele, porque os tomadores mais otimistas superestimam sistematicamente seus próprios projetos e dominam a demanda por crédito.<sup class="cit"><a href="#f16">16</a></sup> O ponto geral, que atravessa toda essa literatura, é que informação assimétrica não empurra sempre e necessariamente na mesma direção. Ela produz uma família de problemas relacionados, cuja direção e magnitude dependem dos detalhes de cada mercado, e isso é exatamente o tipo de coisa que só a combinação entre teoria cuidadosa e evidência empírica específica consegue estabelecer.</p>
` }
},

sintese: {
  definicoes: [
    { termo: "Seleção adversa", def: "Problema de informação assimétrica em que, antes de um contrato ou transação, uma das partes conhece uma característica relevante (qualidade, risco, tipo) que a outra não observa, afetando quem se dispõe a participar da transação a determinado preço ou termo." },
    { termo: "Risco moral (moral hazard)", def: "Problema de informação assimétrica em que, depois de um contrato celebrado, uma das partes muda seu comportamento de um jeito que a outra não observa perfeitamente, porque parte do custo dessa mudança agora recai sobre o parceiro contratual." },
    { termo: "Problema agente-principal", def: "Desalinhamento de interesses entre quem contrata uma tarefa (principal) e quem a executa (agente), quando o principal não observa perfeitamente o esforço ou as escolhas do agente. Tecnicamente próximo do risco moral." },
    { termo: "Sinalização (signaling)", def: "Mecanismo pelo qual quem detém a informação boa investe numa ação observável e custosa o bastante para ser mais barata para quem realmente tem o tipo bom, revelando esse tipo aos outros. Proposto por Michael Spence (1973)." },
    { termo: "Triagem (screening)", def: "Mecanismo pelo qual quem não detém a informação oferece um menu de contratos desenhado para que tipos diferentes se autosselecionem em contratos diferentes, revelando seu tipo pela própria escolha. Formalizado por Rothschild e Stiglitz (1976)." },
    { termo: "Equilíbrio separador e equilíbrio agrupador", def: "No modelo de sinalização, um equilíbrio separador é aquele em que tipos diferentes escolhem sinais diferentes e são identificados; um equilíbrio agrupador é aquele em que todos os tipos escolhem o mesmo sinal e nenhuma informação é revelada." },
    { termo: "Racionamento de crédito", def: "Situação de equilíbrio, descrita por Stiglitz e Weiss (1981), em que bancos preferem negar crédito a uma parte dos tomadores dispostos a pagar juros altos, em vez de elevar a taxa até equilibrar oferta e demanda, porque uma taxa mais alta piora a composição de risco dos tomadores restantes." }
  ],
  lembrar: [
    "Seleção adversa é sobre o tipo de quem aparece para negociar, e ocorre antes do contrato. Risco moral é sobre a mudança de comportamento de quem já está protegido pelo contrato, e ocorre depois dele.",
    "O mecanismo do modelo de Akerlof (1970) é lógico e aceito sem disputa: preço baseado na qualidade média afasta vendedores de qualidade acima da média. A força empírica desse mecanismo no mercado real de carros usados é mais fraca e mais mista do que o modelo sugere, conforme mostraram Bond (1982) e outros.",
    "Sinalização parte de quem tem a informação boa (Spence, 1973). Triagem parte de quem não tem a informação e oferece um menu de contratos (Rothschild e Stiglitz, 1976). São respostas complementares, não a mesma coisa.",
    "O racionamento de crédito de Stiglitz e Weiss (1981) combina dois efeitos ao subir os juros: seleção adversa (afasta tomadores seguros) e incentivo (empurra tomadores restantes para projetos mais arriscados).",
    "O modelo de Rothschild-Stiglitz tem uma fragilidade teórica conhecida: sob certas condições, nenhum equilíbrio competitivo estável existe nele, nem separador nem agrupador.",
    "Garantias, reputação de marca e certificação por terceiros são respostas institucionais informais ao mesmo problema, e o próprio Akerlof já discutia a reputação como mecanismo mitigador no artigo original de 1970."
  ],
  confusoes: [
    { erro: "Seleção adversa e risco moral são a mesma coisa, ou nomes diferentes para o mesmo problema", correcao: "São distintas pelo momento em relação ao contrato. Seleção adversa é sobre quem se apresenta para contratar, antes de qualquer contrato existir (ex.: pessoas doentes procuram mais seguro-saúde). Risco moral é sobre como o comportamento muda depois de o contrato já existir (ex.: alguém segurado dirige com menos cuidado). Os dois costumam coexistir no mesmo mercado, mas exigem respostas institucionais diferentes: triagem e sinalização respondem à seleção adversa, monitoramento e franquias respondem melhor ao risco moral." },
    { erro: "O estudo de Akerlof provou empiricamente que o mercado de carros usados está cheio de lemons e funciona mal", correcao: "O artigo de 1970 é um trabalho teórico que demonstra um mecanismo lógico, não um estudo empírico sobre o mercado de usados. Quando pesquisadores foram testar essa previsão diretamente, como Bond (1982) no mercado de caminhonetes, a evidência de seleção adversa saiu fraca e inconsistente. O valor do artigo está na generalização do mecanismo, não numa medição do mercado real de carros." },
    { erro: "Seleção adversa é o mesmo que o problema agente-principal", correcao: "O problema agente-principal trata do desalinhamento de interesses entre quem contrata e quem executa uma tarefa, e a dificuldade de monitorar o esforço do agente depois de contratado, o que o aproxima do risco moral. Seleção adversa é sobre quem se apresenta para o contrato antes dele existir. Os dois envolvem informação assimétrica, mas em pontos diferentes da relação." },
    { erro: "Sinalização e triagem são a mesma estratégia vista de ângulos diferentes", correcao: "A diferença está em quem toma a iniciativa. Na sinalização, quem tem a informação boa age primeiro e paga um custo para se diferenciar (um trabalhador investindo em educação). Na triagem, quem não tem a informação estrutura um menu de opções para que a outra parte se revele ao escolher (uma seguradora oferecendo contratos com franquias diferentes). São mecanismos que podem operar ao mesmo tempo no mesmo mercado, mas partem de agentes diferentes." },
    { erro: "Subir a taxa de juros sempre aumenta o lucro esperado de quem empresta, porque cada empréstimo rende mais", correcao: "Stiglitz e Weiss (1981) mostraram que, a partir de certo ponto, subir a taxa piora a composição média dos tomadores (efeito de seleção adversa) e empurra os tomadores restantes para projetos mais arriscados (efeito de incentivo), o que pode reduzir o retorno esperado do banco. É por isso que bancos racionam crédito em vez de só elevar juros indefinidamente." }
  ],
  numeros: [
    "Akerlof, 'The Market for Lemons', Quarterly Journal of Economics, volume 84, número 3, páginas 488 a 500, 1970. Recusado por três periódicos antes da publicação.",
    "Prêmio Nobel de Economia de 2001: dividido entre George Akerlof, Michael Spence e Joseph Stiglitz, 'por suas análises de mercados com informação assimétrica'.",
    "Spence, 'Job Market Signaling', Quarterly Journal of Economics, volume 87, número 3, 1973.",
    "Rothschild e Stiglitz, 'Equilibrium in Competitive Insurance Markets', Quarterly Journal of Economics, volume 90, número 4, 1976.",
    "Stiglitz e Weiss, 'Credit Rationing in Markets with Imperfect Information', American Economic Review, volume 71, número 3, páginas 393 a 410, 1981.",
    "Bond, 'A Direct Test of the Lemons Model: The Market for Used Pickup Trucks', American Economic Review, volume 72, número 4, 1982, evidência fraca ou nula de seleção adversa no mercado estudado."
  ]
},

flashcards: [
  { f: "O que é seleção adversa, em uma frase?", v: "É o problema em que, antes de um contrato ou transação, uma parte conhece algo relevante sobre qualidade ou risco que a outra parte não conhece, e isso afeta quem se dispõe a participar da negociação." },
  { f: "No modelo de Akerlof, por que o preço médio afasta os vendedores de carros bons?", v: "Porque o comprador só consegue oferecer um preço baseado na qualidade média esperada de todos os carros à venda. Ao preço médio, o dono de um carro genuinamente bom considera o negócio ruim, porque seu carro vale mais do que isso, e prefere não vender. Quem aceita vender são principalmente os donos de carros ruins." },
  { f: "Qual é a diferença central entre seleção adversa e risco moral?", v: "O momento em relação ao contrato. Seleção adversa é sobre o tipo de quem se apresenta para contratar, antes do contrato existir. Risco moral é sobre a mudança de comportamento de quem já está protegido pelo contrato, depois de ele existir." },
  { f: "Como o problema agente-principal se relaciona com seleção adversa e risco moral?", v: "É tecnicamente mais próximo do risco moral: trata do desalinhamento de interesses entre quem contrata (principal) e quem executa (agente), e da dificuldade do principal em observar o esforço do agente depois de já contratado. Não é o mesmo problema que seleção adversa, que ocorre antes do contrato." },
  { f: "O que é sinalização (signaling) e quem a propôs?", v: "É o mecanismo, proposto por Michael Spence em 1973, pelo qual quem tem a informação boa investe numa ação observável e custosa, mais barata para quem de fato tem o tipo bom, revelando esse tipo aos outros. O exemplo clássico é educação sinalizando produtividade no mercado de trabalho." },
  { f: "O que é triagem (screening) e quem a formalizou?", v: "É o mecanismo, formalizado por Rothschild e Stiglitz em 1976 para seguros, pelo qual quem não tem a informação oferece um menu de contratos com combinações diferentes de prêmio e cobertura, desenhado para que clientes de tipos diferentes se autosselecionem, revelando seu risco pela própria escolha." },
  { f: "Qual é a diferença entre equilíbrio separador e equilíbrio agrupador na sinalização?", v: "No equilíbrio separador, tipos diferentes escolhem níveis de sinal diferentes e o observador consegue identificá-los. No equilíbrio agrupador, todos os tipos escolhem o mesmo sinal, e o sinal não carrega nenhuma informação nova." },
  { f: "Por que seguradoras de saúde usam questionários, tabelas de risco e período de carência?", v: "Para reduzir a vantagem informacional do segurado sobre seu próprio risco de saúde, aproximando o prêmio cobrado do risco real de cada grupo e desencorajando quem compraria o seguro só para cobrir uma necessidade já conhecida no momento da contratação." },
  { f: "Segundo Stiglitz e Weiss (1981), por que um banco pode preferir racionar crédito a simplesmente subir os juros?", v: "Subir os juros combina um efeito de seleção adversa (afasta tomadores de projetos seguros e mantém os de projetos arriscados) com um efeito de incentivo (empurra os tomadores restantes a assumir mais risco). A partir de certo ponto, isso pode reduzir o retorno esperado do banco, tornando racional recusar parte dos pedidos em vez de subir mais a taxa." },
  { f: "O que Eric Bond (1982) encontrou ao testar o modelo dos lemons no mercado de caminhonetes usadas?", v: "Evidência fraca e inconsistente. A maioria das medidas de problema mecânico comparadas entre veículos vendidos e não vendidos não mostrou diferença estatisticamente significativa, contrariando a previsão direta do modelo de Akerlof para esse mercado específico." },
  { f: "Por que alguns economistas chamam o artigo de Akerlof de 'parábola poderosa' em vez de descrição literal do mercado de usados?", v: "Porque a evidência empírica em mercados reais de carros e de seguros é mista, sugerindo que mecanismos como reputação, garantias e certificação já neutralizam boa parte do problema na prática. O mecanismo lógico de Akerlof continua correto e valioso como ferramenta geral de análise, mesmo quando não domina um mercado específico observado." },
  { f: "Que fragilidade teórica o próprio artigo de Rothschild e Stiglitz (1976) reconhece?", v: "Sob certas condições de composição da população de risco, nenhum equilíbrio competitivo estável existe no modelo: equilíbrios separadores podem ser destruídos pela entrada de um concorrente, e um equilíbrio agrupador nunca é estável, porque sempre atrai um concorrente disposto a oferecer um contrato melhor só para os clientes de baixo risco." },
  { f: "Cite três mecanismos informais, além de sinalização e triagem, que mitigam seleção adversa em mercados reais.", v: "Garantias (o vendedor assume o custo de defeitos futuros, um sinal indireto de que confia na qualidade do produto), reputação (uma marca que depende de vendas repetidas tem incentivo de longo prazo para não enganar) e certificação por terceiros (uma inspeção independente ou um selo de qualidade que não depende da palavra do vendedor)." }
],

prova: [
  { camada: "nucleo",
    q: "No modelo de Akerlof, por que o preço oferecido pelos compradores tende a cair ao longo do tempo num mercado com informação assimétrica sobre qualidade?",
    alts: [
      "Porque os compradores ficam mais pobres à medida que compram mais carros.",
      "Porque, à medida que vendedores de carros bons se retiram do mercado por acharem o preço médio baixo demais, a qualidade média do que resta cai, e os compradores revisam sua oferta para baixo.",
      "Porque o governo regula o preço máximo de carros usados.",
      "Porque vendedores de carros ruins competem entre si e derrubam o preço propositalmente."
    ],
    correta: 1,
    porque: "O mecanismo central é a retroalimentação entre saída dos vendedores de qualidade acima da média e queda da qualidade média esperada. As demais alternativas descrevem processos que não fazem parte do modelo de informação assimétrica de Akerlof." },

  { camada: "nucleo",
    q: "Qual das situações abaixo é um exemplo de seleção adversa, e não de risco moral?",
    alts: [
      "Uma pessoa segurada contra roubo de carro passa a deixá-lo destrancado com mais frequência.",
      "Pessoas com problemas de saúde já conhecidos procuram comprar seguro-saúde individual com mais intensidade do que pessoas saudáveis.",
      "Um motorista com seguro completo passa a dirigir de forma mais arriscada.",
      "Um funcionário com estabilidade garantida reduz seu esforço no trabalho."
    ],
    correta: 1,
    porque: "A busca por seguro por parte de quem já sabe que tem risco de saúde mais alto ocorre antes do contrato existir, e é o tipo de problema clássico de seleção adversa. As outras três alternativas descrevem mudança de comportamento depois de já existir proteção contratual, que é risco moral." },

  { camada: "nucleo",
    q: "Por que um modelo econômico como o de Akerlof faz suposições simplificadoras, como comprador sem nenhuma informação sobre a qualidade individual do bem?",
    alts: [
      "Porque economistas não conseguem lidar com situações complexas.",
      "Porque o objetivo é isolar um mecanismo específico e mostrar o que ele produz sozinho, servindo de referência para depois avaliar o que instituições do mundo real corrigem ou não.",
      "Porque toda suposição de um modelo precisa ser literalmente verdadeira no mundo real para o modelo ter valor.",
      "Porque simplificar sempre torna a conclusão de um modelo mais persuasiva ao público."
    ],
    correta: 1,
    porque: "Modelos isolam mecanismos para entender sua lógica interna, não para descrever exaustivamente um mercado. A terceira alternativa é a armadilha mais comum: cobrar de um modelo que suas suposições sejam realistas ponto a ponto, quando o teste relevante é se o mecanismo isolado ilumina algo real, comparável depois à evidência empírica." },

  { camada: "aprofundamento",
    q: "Qual é a diferença central entre seleção adversa e o problema agente-principal?",
    alts: [
      "Não há diferença: são dois nomes para o mesmo fenômeno.",
      "Seleção adversa ocorre antes do contrato, sobre quem se apresenta para contratar; o problema agente-principal trata do desalinhamento de interesses e da dificuldade de monitorar o agente depois que ele já foi contratado.",
      "Seleção adversa só ocorre em mercados de seguro, e o problema agente-principal só ocorre em empresas.",
      "O problema agente-principal é sempre resolvido por sinalização, e a seleção adversa nunca é."
    ],
    correta: 1,
    porque: "O critério que separa os dois é o momento da relação contratual. O problema agente-principal está tecnicamente mais próximo do risco moral, por tratar de comportamento pós-contratual difícil de observar, do que da seleção adversa propriamente dita." },

  { camada: "aprofundamento",
    q: "No modelo de sinalização de Spence (1973), o que torna a educação um sinal informativo sobre a produtividade de um trabalhador?",
    alts: [
      "O fato de que a educação necessariamente aumenta a produtividade de qualquer trabalhador na mesma medida.",
      "O fato de que obter educação é mais barato ou mais fácil para trabalhadores de alta produtividade do que para os de baixa produtividade, o que permite que a escolha do nível de educação separe os dois grupos.",
      "O fato de que empregadores exigem diploma por lei em todos os setores.",
      "O fato de que trabalhadores de baixa produtividade nunca conseguem obter educação formal."
    ],
    correta: 1,
    porque: "O ponto central do modelo de Spence não é que educação cause produtividade, mas que o custo de obtê-la seja sistematicamente menor para quem já é mais produtivo, permitindo um equilíbrio separador. Se essa diferença de custo não existisse, educação não separaria tipo algum." },

  { camada: "aprofundamento",
    q: "Como o modelo de triagem de Rothschild e Stiglitz (1976) tenta resolver o problema de seleção adversa em seguros?",
    alts: [
      "Proibindo seguradoras de venderem para clientes de alto risco.",
      "Oferecendo um único contrato padronizado para todos os clientes, eliminando a diferenciação.",
      "Oferecendo um menu de contratos com combinações diferentes de prêmio e cobertura, desenhado para que clientes de risco diferente se autosselecionem em contratos diferentes.",
      "Exigindo que o governo fixe o prêmio de todos os contratos de seguro."
    ],
    correta: 2,
    porque: "A ideia de triagem por menu de contratos é a contribuição central do artigo: em vez de perguntar diretamente o risco do cliente, a seguradora estrutura opções cuja escolha revela o tipo. A segunda alternativa descreveria um equilíbrio agrupador, que o próprio artigo mostra ser instável nesse modelo." },

  { camada: "aprofundamento",
    q: "Segundo Stiglitz e Weiss (1981), qual é o 'efeito de incentivo' que acompanha um aumento na taxa de juros cobrada por um banco?",
    alts: [
      "Os tomadores de empréstimo passam a pagar suas dívidas mais rapidamente.",
      "Uma taxa mais alta reduz mais o retorno líquido esperado de projetos seguros do que o de projetos arriscados, dado que o tomador só arca com o prejuízo até certo limite, o que empurra os tomadores restantes a preferir projetos mais arriscados.",
      "Bancos concorrentes são incentivados a reduzir suas próprias taxas.",
      "Tomadores de empréstimo passam a exigir mais garantias reais do banco."
    ],
    correta: 1,
    porque: "O efeito de incentivo é distinto do efeito de seleção adversa (que afasta tomadores seguros do pool de solicitantes): ele opera mesmo entre os que permanecem, mudando o tipo de projeto que escolhem financiar depois de contratado o empréstimo a uma taxa mais alta." },

  { camada: "extensao",
    q: "O que Eric Bond (1982) encontrou ao testar diretamente o modelo dos lemons no mercado de caminhonetes usadas?",
    alts: [
      "Confirmação forte e inequívoca do modelo: veículos vendidos apresentavam taxas de defeito muito maiores.",
      "Evidência fraca e inconsistente: a maioria das medidas de reparo comparadas não mostrou diferença estatisticamente significativa entre veículos vendidos e não vendidos.",
      "Que o mercado de caminhonetes usadas havia colapsado completamente, restando só veículos ruins à venda.",
      "Que compradores pagavam, em média, mais por caminhonetes vendidas do que por caminhonetes retidas pelo dono original."
    ],
    correta: 1,
    porque: "O achado de Bond é um dos exemplos mais citados de evidência empírica mais fraca do que o modelo teórico sugeriria, o que motivou décadas de discussão sobre o quanto o mecanismo de Akerlof, sendo logicamente correto, de fato domina esse mercado específico na prática." },

  { camada: "extensao",
    q: "O que significa dizer que o artigo de Akerlof funciona mais como uma 'parábola poderosa' do que como descrição literal do mercado de carros usados atual?",
    alts: [
      "Que o mecanismo lógico do modelo está errado e foi refutado pela evidência empírica.",
      "Que o mecanismo lógico permanece correto e valioso como ferramenta geral de análise, mas que, na prática, mecanismos como reputação, garantias e certificação frequentemente contêm boa parte do problema antes que ele produza o colapso extremo previsto no caso limite do modelo.",
      "Que o artigo nunca teve nenhuma aplicação prática fora da sala de aula.",
      "Que a expressão só se aplica a mercados de países em desenvolvimento."
    ],
    correta: 1,
    porque: "A distinção crucial é entre validade lógica de um mecanismo e força empírica desse mecanismo num mercado específico. A evidência mista não invalida a lógica de Akerlof, mas mostra que instituições reais frequentemente neutralizam boa parte do efeito antes do colapso total previsto no caso extremo." },

  { camada: "extensao",
    q: "Qual fragilidade teórica o próprio artigo de Rothschild e Stiglitz (1976) reconhece sobre seu modelo de triagem em seguros?",
    alts: [
      "Que o modelo só funciona se existir apenas uma seguradora no mercado.",
      "Que, sob certas condições de composição de risco na população, nenhum equilíbrio competitivo estável existe no modelo, nem separador nem agrupador.",
      "Que seguradoras nunca conseguem observar nenhuma característica dos clientes.",
      "Que o modelo exige que o governo fixe os prêmios de todos os contratos."
    ],
    correta: 1,
    porque: "Essa é uma lacuna teórica genuína, e não um detalhe técnico menor: em certas condições, equilíbrios separadores são destruídos pela entrada de um concorrente, e equilíbrios agrupadores nunca são estáveis nesse modelo específico, o que motivou propostas alternativas de equilíbrio, como a de Wilson (1977)." },

  { camada: "extensao",
    q: "Segundo a revisão de Cohen e Siegelman (2010) sobre evidência empírica em mercados de seguro, o que é 'seleção vantajosa' (advantageous selection)?",
    alts: [
      "Um sinônimo para seleção adversa usado em alguns países europeus.",
      "Um padrão em que quem compra mais cobertura de seguro é, por outras razões como maior aversão a risco em geral, também quem tem menos sinistros, o oposto do que a seleção adversa clássica prevê.",
      "Uma política pública que subsidia seguros para pessoas de baixo risco.",
      "Um tipo de fraude em que o segurado mente sobre seu histórico de saúde."
    ],
    correta: 1,
    porque: "A revisão de Cohen e Siegelman mostrou que a direção da correlação entre cobertura escolhida e risco varia entre mercados de seguro estudados, e nomeou o padrão oposto ao previsto pela teoria clássica de seleção vantajosa, evidência de que informação assimétrica não empurra sempre na mesma direção." }
],

fontes: [
  { n: 1, tipo: "divulgação", ref: "Editage Insights. '\"If it is correct, economics would be different\": The story of a rejected paper that won the Nobel Prize'. Relato da recusa do artigo de Akerlof por três periódicos antes da publicação em 1970.", url: "https://www.editage.com/insights/if-it-is-correct-economics-would-be-different" },
  { n: 2, tipo: "fonte primária", ref: "Akerlof, G. A. 'The Market for \"Lemons\": Quality Uncertainty and the Market Mechanism'. Quarterly Journal of Economics 84(3):488–500, 1970. O artigo seminal sobre seleção adversa no mercado de carros usados.", url: "https://doi.org/10.2307/1879431" },
  { n: 3, tipo: "fonte primária", ref: "Stiglitz, J. E. &amp; Weiss, A. 'Credit Rationing in Markets with Imperfect Information'. American Economic Review 71(3):393–410, 1981. Modelo de racionamento de crédito por seleção adversa e efeito de incentivo.", url: "https://ideas.repec.org/a/aea/aecrev/v71y1981i3p393-410.html" },
  { n: 4, tipo: "fonte primária", ref: "Arrow, K. J. 'Uncertainty and the Welfare Economics of Medical Care'. American Economic Review 53(5):941–973, 1963. Precursor sobre incerteza e informação em mercados de saúde.", url: "https://www.jstor.org/stable/1812044" },
  { n: 5, tipo: "revisão", ref: "Cutler, D. M. &amp; Zeckhauser, R. J. 'The Anatomy of Health Insurance'. NBER Working Paper 7176, 1999, publicado em Handbook of Health Economics, vol. 1, 2000. Discussão de subscrição de risco, tabelas de risco e desenho de contratos de seguro-saúde.", url: "https://www.nber.org/papers/w7176" },
  { n: 6, tipo: "fonte primária", ref: "Spence, A. M. 'Job Market Signaling'. Quarterly Journal of Economics 87(3):355–374, 1973. Modelo original de sinalização e equilíbrios separador e agrupador.", url: "https://academic.oup.com/qje/article-abstract/87/3/355/1909092" },
  { n: 7, tipo: "fonte primária", ref: "Rothschild, M. &amp; Stiglitz, J. 'Equilibrium in Competitive Insurance Markets: An Essay on the Economics of Imperfect Information'. Quarterly Journal of Economics 90(4):629–649, 1976. Modelo de triagem por menu de contratos em seguros.", url: "https://academic.oup.com/qje/article-abstract/90/4/629/1886620" },
  { n: 8, tipo: "artigo", ref: "Wilson, C. 'A Model of Insurance Markets with Incomplete Information'. Journal of Economic Theory 16(2):167–207, 1977. Proposta de conceito de equilíbrio alternativo diante da não existência de equilíbrio no modelo de Rothschild-Stiglitz.", url: "https://ideas.repec.org/a/eee/jetheo/v16y1977i2p167-207.html" },
  { n: 9, tipo: "artigo", ref: "Bond, E. W. 'A Direct Test of the \"Lemons\" Model: The Market for Used Pickup Trucks'. American Economic Review 72(4):836–840, 1982. Teste empírico com evidência fraca de seleção adversa.", url: "https://ideas.repec.org/a/aea/aecrev/v72y1982i4p836-40.html" },
  { n: 10, tipo: "artigo", ref: "Genesove, D. 'Adverse Selection in the Wholesale Used Car Market'. Journal of Political Economy 101(4):644–665, 1993. Teste empírico no mercado atacadista de carros usados.", url: "https://www.journals.uchicago.edu/doi/10.1086/261891" },
  { n: 11, tipo: "artigo", ref: "Chiappori, P.-A. &amp; Salanié, B. 'Testing for Asymmetric Information in Insurance Markets'. Journal of Political Economy 108(1):56–78, 2000. Teste empírico influente no mercado de seguro automotivo francês.", url: "https://www.journals.uchicago.edu/doi/abs/10.1086/262111" },
  { n: 12, tipo: "revisão", ref: "Cohen, A. &amp; Siegelman, P. 'Testing for Adverse Selection in Insurance Markets'. Journal of Risk and Insurance 77(1):39–84, 2010. Revisão da evidência mista, incluindo o conceito de seleção vantajosa.", url: "https://www.nber.org/papers/w15586" },
  { n: 13, tipo: "prêmio", ref: "The Sveriges Riksbank Prize in Economic Sciences in Memory of Alfred Nobel 2001. Comunicado oficial e informação popular sobre a premiação de Akerlof, Spence e Stiglitz por análises de mercados com informação assimétrica.", url: "https://www.nobelprize.org/prizes/economic-sciences/2001/summary/" },
  { n: 14, tipo: "fonte primária", ref: "Akerlof, G. A. 'Writing the \"The Market for 'Lemons'\": A Personal and Interpretive Essay'. Ensaio autobiográfico publicado pela Fundação Nobel, 2003.", url: "https://www.nobelprize.org/prizes/economic-sciences/2001/akerlof/article/" },
  { n: 15, tipo: "livro", ref: "Akerlof, G. A. &amp; Shiller, R. J. Phishing for Phools: The Economics of Manipulation and Deception. Princeton University Press, 2015. Extensão da lógica de informação assimétrica para manipulação de mercado em geral.", url: "https://press.princeton.edu/books/hardcover/9780691168319/phishing-for-phools" },
  { n: 16, tipo: "artigo", ref: "de Meza, D. &amp; Webb, D. C. 'Too Much Investment: A Problem of Asymmetric Information'. Quarterly Journal of Economics 102(2):281–292, 1987. Mostra que informação assimétrica pode produzir excesso, e não escassez, de crédito, dependendo das condições do mercado.", url: "https://academic.oup.com/qje/article-abstract/102/2/281/1931149" },
  { n: 17, tipo: "referência", ref: "Nobel Prize Outreach. 'Popular Information: Trade in Markets with Asymmetric Information'. Explicação de divulgação sobre as contribuições de Akerlof, Spence e Stiglitz.", url: "https://www.nobelprize.org/prizes/economic-sciences/2001/popular-information/" }
]
};
