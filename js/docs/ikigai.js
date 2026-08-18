CONTEUDOS["ikigai"] = {
termo: "Ikigai: o conceito e o diagrama que o substituiu",
area: "Antropologia",
subtitulo: "O gráfico de quatro círculos que aparece em treinamento de carreira foi desenhado na Espanha em 2011 e rebatizado por um consultor britânico em 2014. O conceito japonês tem outra origem, outra estrutura e nenhuma relação com remuneração.",
prerequisitos: [
  "Nenhum. Não é preciso saber japonês nem ter estudado antropologia.",
  "Para o aprofundamento ajuda saber o que é um estudo de coorte e o que significa dizer que uma associação foi 'ajustada' para outras variáveis."
],
conexoes: [
  { termo: "Emic e etic", relacao: "A distinção entre descrever um conceito nos termos de quem o usa e descrevê-lo nos termos analíticos de quem observa. O diagrama de quatro círculos é uma construção etic vendida como emic." },
  { termo: "Método etnográfico e observação participante", relacao: "Gordon Mathews chegou ao significado de ikigai por entrevistas longas com japoneses e americanos, e não por dedução a partir da etimologia." },
  { termo: "Hipótese Sapir-Whorf", relacao: "Os dois casos tratam do mesmo problema: quanto de um conceito sobrevive quando ele muda de língua, e o que se ganha ao afirmar que uma palavra é intraduzível." },
  { termo: "Amostras WEIRD", relacao: "Medir ikigai fora do Japão com um questionário traduzido levanta o problema de invariância de medida: o instrumento pode não estar medindo a mesma coisa nos dois lugares." },
  { termo: "Confundimento e causalidade reversa", relacao: "As coortes japonesas associam ikigai a menor mortalidade, e a interpretação dessa associação depende inteiramente de como esses dois problemas são tratados." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Quatro círculos que se cruzam. Num deles, o que você ama. No segundo, aquilo em que você é bom. No terceiro, o que o mundo precisa. No quarto, aquilo pelo que te pagam. No centro, onde os quatro se sobrepõem, está escrito "ikigai", e a legenda informa que essa é a palavra japonesa para a razão pela qual você se levanta de manhã.</p>

<p>Esse diagrama não é japonês, não é antigo e não descreve o que a palavra significa em japonês. Ele foi desenhado na Espanha, tinha outro rótulo no centro e foi renomeado por outra pessoa três anos depois. A cadeia é rastreável, com datas e nomes.</p>

<h3>De onde veio o desenho</h3>

<p>Em 2011, Andrés Zuzunaga, astrólogo que dirige uma escola de astrologia em Barcelona, desenhou um gráfico de quatro círculos para explicar a ideia de propósito de vida. As legendas eram em espanhol e no centro estava escrito "propósito". O gráfico foi publicado em 2012 no livro <em>¿Qué harías si no tuvieras miedo?</em>, de Borja Vilaseca, e reapareceu nas edições seguintes até 2019.<sup class="cit"><a href="#f1">1</a></sup> Não havia nenhuma menção ao Japão.</p>

<p>Em 14 de maio de 2014, o consultor britânico Marc Winn publicou no próprio blog um post curto intitulado "What is your Ikigai?". Winn tinha assistido à palestra de Dan Buettner no TED sobre longevidade em Okinawa, onde a palavra ikigai aparece de passagem, e combinou as duas coisas: pegou o diagrama de Zuzunaga e trocou a palavra do centro.<sup class="cit"><a href="#f2">2</a></sup> "Propósito" virou "ikigai". Winn reconhece publicamente a origem e diz que o post levou cerca de quarenta e cinco minutos para ser escrito.</p>

<p>Em 2016, o diagrama já com o rótulo japonês entrou no livro <em>Ikigai: Os Segredos dos Japoneses para uma Vida Longa e Feliz</em>, de Héctor García e Francesc Miralles, que vendeu milhões de exemplares e foi traduzido para dezenas de idiomas.<sup class="cit"><a href="#f3">3</a></sup> Daí em diante o gráfico circulou como sabedoria tradicional japonesa em apresentações corporativas, cursos de carreira e material de recursos humanos.</p>

<div class="marca consenso">
<span class="rot">Fato documentado</span>
<p>A sequência Zuzunaga 2011, Winn 2014, García e Miralles 2016 está registrada em fontes datadas, inclusive nas páginas dos próprios autores. No site de sua escola, Zuzunaga mantém a nota de que o gráfico foi "creado por Andrés Zuzunaga en 2011" e que só depois "acabó asociándose al nombre de Ikigai", acrescentando que o conceito japonês "es mucho más antiguo y no tenía ningún gráfico asociado".<sup class="cit"><a href="#f1">1</a></sup> Não existe versão japonesa anterior do diagrama. A verba da Wikipédia em inglês, a reportagem do <em>Economist</em> sobre o assunto e a literatura acadêmica convergem nesse ponto.<sup class="cit"><a href="#f4">4</a></sup></p>
</div>

<h3>O que a palavra significa em japonês</h3>

<p>Ikigai (生き甲斐) junta <em>iki</em> (生き), viver, e <em>kai</em> (甲斐), que significa efeito, proveito, aquilo que compensa. O composto sonoriza o segundo elemento e vira <em>gai</em>. A tradução literal fica próxima de "aquilo que faz a vida valer a pena".</p>

<p>É uma palavra corriqueira. Aparece em conversa de família, em pesquisa de opinião, em programa de televisão. Uma pessoa diz que o neto é seu ikigai, ou a horta, ou o coral da igreja, ou a caminhada de sábado de manhã. O site oficial do governo japonês, ao explicar o termo para estrangeiros, descreve um conceito amplo: "aquilo que traz valor e alegria à vida, de pessoas, como os filhos ou os amigos, a atividades, incluindo trabalho e passatempos".<sup class="cit"><a href="#f5">5</a></sup> Trabalho está na lista, ao lado de passatempos, e nenhuma condição de remuneração aparece.</p>

<h3>Mieko Kamiya e o livro de 1966</h3>

<p>A formulação que os pesquisadores japoneses ainda citam vem de Mieko Kamiya (1914-1979), psiquiatra, tradutora e professora. Ela estudou na Europa e nos Estados Unidos, formou-se em medicina no Japão e trabalhou no sanatório de Nagashima Aiseien, onde pessoas com hanseníase viviam segregadas por força de lei. Foi ali, entrevistando pacientes ao longo de 1957 e 1958, que ela montou o material do livro <em>Ikigai ni tsuite</em> (生きがいについて), publicado pela editora Misuzu Shobō em 1966.<sup class="cit"><a href="#f6">6</a></sup></p>

<p>Duas distinções organizam o livro. A primeira separa o ikigai como <strong>objeto</strong> (aquilo que dá sentido: uma pessoa, uma tarefa, uma crença) do <strong>ikigai-kan</strong> (生きがい感), o sentimento de que a vida tem sentido. São coisas diferentes e podem se descolar: alguém pode ter muitos objetos e pouco sentimento, e o contrário também acontece.</p>

<p>A segunda distinção é o tema do livro. A pergunta de Kamiya não é como escolher uma ocupação. É como alguém que perdeu tudo reconstrói uma razão para continuar. Os capítulos centrais tratam do que rouba o ikigai (doença incurável, morte de quem se ama, ruína dos planos de vida, culpa, proximidade da morte) e de como um novo ikigai é encontrado depois.<sup class="cit"><a href="#f6">6</a></sup> Ela observou nos pacientes um padrão que a surpreendeu: quem tinha sintomas leves às vezes vivia num vazio maior do que quem estava gravemente adoecido.</p>

<h3>Como antropólogos lidam com conceitos que mudam de língua</h3>

<p>Um conceito não viaja sozinho: viaja dentro de uma pergunta. Antropólogos separam duas maneiras de descrever alguma coisa. A descrição <strong>emic</strong> usa as categorias de quem vive a prática, do jeito que essas pessoas as usam. A descrição <strong>etic</strong> usa as categorias analíticas do observador, escolhidas para comparar culturas diferentes. Nenhuma das duas é dispensável, e confundir uma com a outra é o erro típico.</p>

<p>Clifford Geertz chamou de <em>descrição densa</em> a exigência de registrar não só o comportamento, mas o significado que ele tem para quem o pratica: um piscar de olho e um sinal combinado são fisicamente iguais e socialmente opostos.<sup class="cit"><a href="#f7">7</a></sup> Talal Asad acrescentou uma observação sobre poder: a tradução entre culturas é assimétrica, porque a língua que traduz costuma ser a língua economicamente dominante, e ela reescreve o conceito de origem em termos que o público dela já entende.<sup class="cit"><a href="#f8">8</a></sup></p>

<p>É exatamente o que aconteceu aqui. O diagrama responde a uma pergunta ocidental de classe média urbana, "como encontrar um trabalho que eu ame, que eu faça bem, que sirva a alguém e que pague as contas". Essa pergunta é legítima, mas é uma pergunta etic, e a etiqueta japonesa foi colada nela depois. O conteúdo é do leitor ocidental. O selo de autenticidade veio de fora.</p>

<div class="tabela-env">
<table>
<thead><tr><th></th><th>O diagrama de quatro círculos</th><th>Ikigai em Kamiya e no uso japonês</th></tr></thead>
<tbody>
<tr><td>Origem</td><td>Barcelona, 2011, rótulo "propósito"; renomeado em 2014</td><td>Palavra de uso corrente; formulação acadêmica em 1966</td></tr>
<tr><td>Papel do dinheiro</td><td>Um dos quatro requisitos</td><td>Ausente da definição</td></tr>
<tr><td>Estrutura lógica</td><td>Interseção: exige as quatro condições ao mesmo tempo</td><td>Lista aberta: qualquer fonte de sentido conta</td></tr>
<tr><td>Quantos você pode ter</td><td>Um, no centro</td><td>Vários ao mesmo tempo, e mudam ao longo da vida</td></tr>
<tr><td>A quem se aplica</td><td>Quem está em idade produtiva e empregável</td><td>Formulado a partir de pessoas doentes, isoladas e enlutadas</td></tr>
<tr><td>Pergunta que responde</td><td>Que carreira eu escolho</td><td>O que ainda faz esta vida valer a pena</td></tr>
</tbody>
</table>
</div>

<h3>Por que a diferença importa na prática</h3>

<p>Como o diagrama define ikigai por uma interseção, ele torna a coisa condicional: sem as quatro condições simultâneas, não há centro. Sob essa definição, uma pessoa aposentada, desempregada, doente ou dedicada a cuidar de alguém não tem ikigai. É justamente a população em que Kamiya localizou o conceito. Uma ideia formulada num sanatório voltou ao mundo como critério de sucesso profissional.</p>
` },

aprofundamento: { minutos: 30, html: `
<h3>A estrutura do livro de Kamiya</h3>

<p>O sumário de <em>Ikigai ni tsuite</em> registrado pela editora mostra onze capítulos.<sup class="cit"><a href="#f6">6</a></sup> O capítulo 2, "o coração que sente ikigai", separa o sentimento (生きがい感, ikigai-kan) do reconhecimento cognitivo e do senso de missão. O capítulo 4 trata do objeto do ikigai (生きがいの対象). Do 5 ao 8, o livro trata da perda e da reconstrução: o que arranca o ikigai, o mundo mental de quem o perdeu, a busca por um novo e as formas concretas que essa substituição assume.</p>

<p>O capítulo 3, "o coração que busca ikigai", lista sete necessidades (欲求):</p>

<ol>
<li><strong>Plenitude de existir</strong> (生存充実感への欲求): sentir que se está vivendo, e não apenas passando o tempo.</li>
<li><strong>Mudança</strong> (変化への欲求).</li>
<li><strong>Futuridade</strong> (未来性への欲求): ter algo à frente.</li>
<li><strong>Reverberação</strong> (反響への欲求): que os próprios atos encontrem resposta em alguém.</li>
<li><strong>Liberdade</strong> (自由への欲求).</li>
<li><strong>Autorrealização</strong> (自己実現への欲求).</li>
<li><strong>Sentido e valor</strong> (意味と価値への欲求).</li>
</ol>

<p>Uma das sete, autorrealização, tem parentesco com o vocabulário do diagrama. As outras seis não. Nenhuma menciona competência técnica, mercado, demanda social ou pagamento.</p>

<h3>O trabalho de campo de Gordon Mathews</h3>

<p>A investigação etnográfica de referência em língua inglesa é de Gordon Mathews, antropólogo da Universidade Chinesa de Hong Kong. Em <em>What Makes Life Worth Living? How Japanese and Americans Make Sense of Their Worlds</em> (1996), ele comparou entrevistas longas com adultos japoneses e americanos, em torno de meia centena de cada lado, sobre o que sustentava suas vidas.<sup class="cit"><a href="#f9">9</a></sup></p>

<p>Dois termos organizam o material japonês, ambos emic, isto é, usados pelos próprios entrevistados:</p>

<ul>
<li><strong>Ittaikan</strong> (一体感), sensação de unidade com um grupo. O ikigai vem de ocupar um papel dentro de uma família, uma empresa, uma comunidade.</li>
<li><strong>Jiko jitsugen</strong> (自己実現), autorrealização. O termo é uma tradução japonesa do vocabulário psicológico americano, com Maslow ao fundo, e circula no Japão desde o pós-guerra.</li>
</ul>

<p>A tese de Mathews, desenvolvida também no artigo "The Stuff of Dreams, Fading", publicado em <em>Ethos</em> no mesmo ano, é que o ikigai de uma pessoa não é a expressão de uma essência cultural.<sup class="cit"><a href="#f10">10</a></sup> É uma negociação entre o que as instituições disponíveis oferecem e o que a pessoa consegue aceitar como razão de viver. Por isso é instável: muda com aposentadoria, com filhos que saem de casa, com a empresa que demite. Mathews registrou ainda que assalariados japoneses que colocavam todo o ikigai no emprego ficavam expostos, porque tinham deixado de cultivar vínculos fora dele.</p>

<p>Chikako Ozawa-de Silva documentou a diferença entre gerações: para os mais velhos, o ikigai correspondia a preencher o molde padrão de empresa e família; entre estudantes universitários, aparecia como projeção do que se poderia vir a ser.<sup class="cit"><a href="#f11">11</a></sup> Michiko Kumano, comparando termos dentro do próprio japonês, situou <em>shiawase</em> (felicidade) do lado hedônico do bem-estar e ikigai do lado eudaimônico, ligado a esforço, realização e sentido.<sup class="cit"><a href="#f12">12</a></sup> Shintaro Kono e Gordon Walker, com método misto entre estudantes japoneses, descreveram o ikigai como resultado de estratégias de engajamento em experiências valorizadas, de diversificação entre várias delas e de recuo temporário quando uma se torna pesada demais.<sup class="cit"><a href="#f13">13</a></sup> Em nenhum desses estudos a remuneração aparece como componente definidor.</p>

<h3>A evidência epidemiológica</h3>

<p>Existe um corpo de estudos japoneses que associa ikigai a desfechos de saúde. Antes dos números, três definições.</p>

<p>Um <strong>estudo de coorte prospectivo</strong> recruta pessoas saudáveis, mede uma exposição no começo e acompanha quem adoece ou morre ao longo de anos. O <strong>hazard ratio</strong> (HR) compara a taxa instantânea de ocorrência do desfecho entre dois grupos: HR 0,85 significa que, a cada instante do acompanhamento, o grupo exposto teve 85% da taxa do grupo de referência. Um <strong>confundidor</strong> é uma terceira variável associada tanto à exposição quanto ao desfecho, capaz de produzir uma associação sem que exista relação causal entre as duas primeiras.</p>

<div class="tabela-env">
<table>
<thead><tr><th>Estudo</th><th>Coorte e tamanho</th><th>Seguimento</th><th>Resultado principal</th></tr></thead>
<tbody>
<tr><td>Sone e cols., 2008<sup class="cit"><a href="#f14">14</a></sup></td><td>Ohsaki, 43.391 adultos de 40 a 79 anos</td><td>7 anos</td><td>Mortalidade por todas as causas: HR 1,5 (IC 95% 1,3 a 1,7) para quem respondeu "não" contra quem respondeu "sim"</td></tr>
<tr><td>Tanno e cols., 2009<sup class="cit"><a href="#f15">15</a></sup></td><td>JACC, 30.155 homens e 43.117 mulheres</td><td>12,5 anos em média, 10.021 óbitos</td><td>Mortalidade por todas as causas: HR 0,85 (0,80 a 0,90) em homens e 0,93 (0,86 a 1,00) em mulheres; causas externas 0,74 e 0,67</td></tr>
<tr><td>Miyazaki e cols., 2022<sup class="cit"><a href="#f16">16</a></sup></td><td>JACC, 29.517 homens e 41.984 mulheres</td><td>19,1 anos de mediana, 4.680 óbitos cardiovasculares</td><td>Associação inversa restrita a pessoas sem emprego; nenhuma associação entre empregados</td></tr>
<tr><td>Okuzono e cols., 2022<sup class="cit"><a href="#f17">17</a></sup></td><td>JAGES, idosos, duas bases com 6.441 e 8.041 participantes</td><td>3 anos</td><td>Incapacidade funcional: risco relativo 0,69 (0,58 a 0,82); demência: 0,64 (0,48 a 0,86)</td></tr>
</tbody>
</table>
</div>

<p>Nos estudos de Ohsaki e do JACC a exposição foi medida por uma única pergunta, do tipo "você tem ikigai na sua vida?", com três opções de resposta. Os modelos de Sone ajustaram para idade, sexo, estado civil, escolaridade, situação de trabalho, saúde autoavaliada, estresse mental percebido, dor, capacidade funcional, índice de massa corporal, tabagismo, consumo de álcool, tempo de caminhada, horas de sono e histórico de hipertensão, diabetes, doença renal, doença hepática, úlcera, artrite e osteoporose.<sup class="cit"><a href="#f14">14</a></sup></p>

<div class="marca controverso">
<span class="rot">A força dessa evidência é objeto de disputa</span>
<p>O padrão de associação é grande, replicado em coortes independentes e sobrevive a ajustes extensos. Isso não resolve a questão causal, por cinco motivos que os próprios autores registram.</p>
<p><strong>Causalidade reversa.</strong> Doença ainda não diagnosticada reduz o ânimo antes de matar. Tanno separou os cinco primeiros anos do resto do seguimento e Miyazaki excluiu óbitos precoces, o que atenua o problema sem eliminá-lo em condições de curso longo.</p>
<p><strong>Confundimento residual.</strong> Depressão é o candidato óbvio: reduz ikigai relatado e aumenta mortalidade. Sone registra como limitação a ausência de dados sobre prevalência de doença mental na coorte. Ajustar por saúde autoavaliada, por sua vez, é ambíguo, porque ela pode ser confundidor e mediador ao mesmo tempo.</p>
<p><strong>Medida única e estática.</strong> Uma pergunta, respondida uma vez. Sone aponta que não há informação sobre mudanças no ikigai durante o seguimento, e portanto nenhuma análise de exposição variável no tempo.</p>
<p><strong>Seleção.</strong> Em Ohsaki, os 2.939 participantes que não responderam à pergunta tinham indicadores de saúde piores no início.</p>
<p><strong>Modificação de efeito sem mecanismo claro.</strong> Okuzono encontrou associações mais fortes em homens e em pessoas de nível socioeconômico alto; Miyazaki encontrou o efeito apenas entre não empregados. Achados de subgrupo desse tipo pedem replicação antes de virarem explicação.</p>
<p>Um ponto separado, e que costuma se perder: nenhum desses estudos testou o diagrama. Todos mediram uma pergunta única de autorrelato sobre ter ou não ikigai. A evidência epidemiológica não sustenta a estrutura de quatro círculos, porque essa estrutura nunca foi a variável medida.</p>
</div>

<h3>Medir um conceito culturalmente específico</h3>

<p>Fora do Japão, a pergunta única deixa de funcionar, porque o entrevistado não conhece a palavra. Foram construídas escalas. A <strong>Ikigai-9</strong> tem nove itens e três fatores (emoções otimistas, atitude positiva diante do futuro, reconhecimento do sentido da própria existência) e ganhou versão em inglês validada em amostra britânica por Fido, Kotera e Asano.<sup class="cit"><a href="#f18">18</a></sup> Existem também escalas mais longas de quatro fatores, além de instrumentos ocidentais de propósito de vida usados como aproximação.</p>

<p>Três termos técnicos, traduzidos na primeira aparição:</p>

<ul>
<li><strong>Validade de construto</strong>: o grau em que o escore mede aquilo que se pretende medir, verificado por como ele se relaciona com outras medidas que deveriam ou não estar associadas.</li>
<li><strong>Invariância de medida</strong>: se o instrumento funciona do mesmo modo em grupos diferentes. Testa-se em níveis. A invariância configural exige que a mesma estrutura de fatores apareça nos dois grupos; a métrica exige que as cargas fatoriais sejam iguais, permitindo comparar associações; a escalar exige que os interceptos também sejam iguais, e só ela autoriza comparar médias entre países.</li>
<li><strong>Tradução reversa</strong>: procedimento em que o item é traduzido para a língua-alvo, retraduzido por outra pessoa e confrontado com o original, para detectar deslizes de sentido. Ela detecta erro de tradução, não diferença de conceito.</li>
</ul>

<div class="marca emergente">
<span class="rot">Área em construção</span>
<p>Adaptações da Ikigai-9 já mostram estrutura interna aceitável em amostras não japonesas, o que satisfaz o nível configural. O que ainda falta na literatura é um conjunto sólido de testes de invariância escalar entre Japão e países ocidentais com amostras grandes e comparáveis. Enquanto isso não existir, comparar níveis médios de ikigai entre países continua sem base, ainda que estudar associações dentro de cada país seja legítimo.</p>
</div>

<p>Há um problema anterior ao psicométrico. A pergunta japonesa funciona porque a palavra é de uso comum e o respondente já a aplica à própria vida. A pergunta inglesa equivalente, "você tem um propósito na vida?", chama outro campo semântico, mais solene e mais individual. Traduzir o instrumento não traduz o conceito. O alerta de Henrich, Heine e Norenzayan sobre amostras WEIRD, isto é, ocidentais, escolarizadas, industrializadas, ricas e democráticas, vale nas duas direções: tanto generalizar achados ocidentais para o mundo quanto importar um construto japonês supondo que ele signifique a mesma coisa aqui.<sup class="cit"><a href="#f19">19</a></sup></p>
` },

extensao: { minutos: 60, html: `
<h3>O que a estrutura do diagrama exige e o conceito não exige</h3>

<p>A diferença entre os dois objetos não é de ênfase, é de forma lógica. O diagrama define ikigai como uma <strong>conjunção</strong>: amar, ser bom, ser necessário e ser pago, tudo ao mesmo tempo. Conjunções têm uma propriedade desagradável: a interseção pode ser vazia, e quanto mais condições, mais provável que seja.</p>

<p>Kamiya define por <strong>enumeração aberta</strong>. Qualquer coisa que sustente o sentimento de que vale a pena viver conta, e as sete necessidades do capítulo 3 descrevem o que uma fonte de ikigai tende a satisfazer, sem exigir que satisfaça todas.<sup class="cit"><a href="#f6">6</a></sup> Uma pessoa pode ter três ikigai simultâneos e trocá-los ao longo da vida.</p>

<p>A consequência prática é assimétrica. Sob a definição aberta, quase todo mundo tem algum ikigai e o problema é notá-lo. Sob a definição por interseção, quase ninguém tem, e a busca vira um projeto de longo prazo com resultado incerto. O mesmo nome designa uma constatação e uma escassez.</p>

<h3>O círculo do dinheiro</h3>

<p>Entre os quatro círculos, "aquilo pelo que te pagam" é o único sem correspondência em nenhuma fonte japonesa examinada, e é também o que carrega o uso corporativo do diagrama.</p>

<p>O estudo de Miyazaki e colaboradores, dentro da coorte JACC, estratificou a associação entre ikigai e mortalidade cardiovascular por situação de trabalho. A associação inversa apareceu entre pessoas sem emprego, com HR entre 0,69 e 0,78 conforme sexo e nível de ikigai, e não apareceu entre empregados, incluindo trabalhadores de meio período, autônomos e donas de casa.<sup class="cit"><a href="#f16">16</a></sup></p>

<div class="marca controverso">
<span class="rot">Leitura em disputa</span>
<p>Esse achado não demonstra que ser pago prejudica o ikigai, e usá-lo assim seria repetir o erro que o documento inteiro descreve. Pelo menos quatro leituras competem. Primeira: entre empregados, o emprego já fornece estrutura, rotina e vínculo, de modo que o ikigai relatado acrescenta pouca informação e a associação se dilui. Segunda: entre não empregados existe mais variação real na exposição, o que aumenta o poder de detectar diferença. Terceira: quem está fora do mercado de trabalho por doença tem simultaneamente menos ikigai e maior risco, e o ajuste pode não ter removido isso. Quarta: é um achado de subgrupo em uma coorte, ainda sem replicação independente.</p>
<p>O que o resultado sustenta, com cautela, é uma afirmação negativa: não há evidência de que o vínculo entre ikigai e desfechos de saúde dependa de a fonte de sentido ser remunerada. Isso basta para tirar do círculo do dinheiro qualquer pretensão de estar apoiado na literatura.</p>
</div>

<h3>A cadeia de autoridade por trás do diagrama</h3>

<p>Vale seguir de onde o gráfico tira sua credibilidade. Winn chegou à palavra por uma palestra de Dan Buettner no TED, de 2009, sobre as regiões de longevidade excepcional que ele chamou de zonas azuis, entre elas Okinawa.<sup class="cit"><a href="#f20">20</a></sup> A autoridade do diagrama, portanto, se apoia numa afirmação demográfica sobre longevidade japonesa.</p>

<div class="marca controverso">
<span class="rot">A base demográfica das zonas azuis está sob contestação</span>
<p>O demógrafo Saul Newman argumenta que regiões com concentração anômala de idades extremas coincidem com regiões de registro civil ruim, e atribui parte dos recordes a erro de cadastro e a fraude previdenciária. O trabalho recebeu o Ig Nobel de demografia em 2024 e circula como preprint, sem revisão por pares concluída no repositório em que está depositado.<sup class="cit"><a href="#f21">21</a></sup><sup class="cit"><a href="#f22">22</a></sup> Demógrafos ligados ao projeto Blue Zones responderam publicamente contestando o argumento. O estado da questão é disputa aberta, não refutação estabelecida.</p>
<p>Para o assunto deste documento, a conclusão é modesta e suficiente: cada elo da cadeia que dá autoridade ao diagrama é mais fraco do que o elo seguinte supõe. Uma palestra de divulgação sustenta um post de blog, que sustenta um best-seller, que sustenta uma prática de recursos humanos, e o dado demográfico da ponta está em discussão.</p>
</div>

<h3>Três controvérsias abertas e o que resolveria cada uma</h3>

<p><strong>1. Ikigai causa saúde ou apenas a acompanha?</strong> A associação é consistente. O tamanho causal, não. O que faria diferença: coortes com medidas repetidas do ikigai, permitindo modelos de exposição variável no tempo e análise de mudança; análises de sensibilidade que informem quão forte precisaria ser um confundidor não medido para anular o resultado; desenhos com controle negativo, isto é, desfechos que não deveriam ter relação causal com ikigai e que, se aparecerem associados, denunciam viés; e ensaios randomizados de intervenções que elevam sentido de vida, com desfechos de saúde medidos, e não apenas escores de bem-estar.</p>

<p><strong>2. Ikigai é um conceito específico ou o nome japonês de algo universal?</strong> Kumano encontra uma separação interna coerente entre felicidade hedônica e ikigai eudaimônico no próprio japonês, o que sugere que o termo recorta algo real e não arbitrário.<sup class="cit"><a href="#f12">12</a></sup> Falta o teste comparativo. O que resolveria: testes formais de invariância de medida da Ikigai-9 entre amostras japonesa, britânica e de outros países, com relato explícito de qual nível foi atingido; e, antes disso, elicitação qualitativa livre em cada língua, pedindo aos participantes que listem o que faz a vida valer a pena antes de lhes apresentar qualquer item pronto, para verificar se o conteúdo emerge parecido.</p>

<p><strong>3. O diagrama alterou o uso japonês da palavra?</strong> Conceitos exportados às vezes retornam à cultura de origem já modificados. Se isso ocorreu com ikigai, seria um caso de manual.</p>

<div class="marca especulacao">
<span class="rot">Hipótese, sem dado que a sustente aqui</span>
<p>É plausível que a popularidade internacional do diagrama tenha empurrado parte do público japonês, sobretudo em contexto corporativo e editorial, a tratar ikigai como assunto de carreira. Plausível não é demonstrado, e este documento não localizou medição do fenômeno. O que resolveria: linguística de corpus sobre textos japoneses, comparando as colocações da palavra antes e depois de 2016; e pesquisas de opinião pedindo a japoneses que definam ikigai, com atenção à faixa etária e à exposição a material em inglês. Enquanto isso, o registro disponível é que a página oficial do governo japonês descreve o conceito de forma ampla, sem qualquer diagrama.<sup class="cit"><a href="#f5">5</a></sup></p>
</div>

<h3>Os limites do conceito quando exportado</h3>

<p><strong>Quem fica de fora.</strong> Já dito no núcleo e vale repetir com precisão: o critério de interseção exclui aposentados, desempregados, doentes crônicos, cuidadores em tempo integral e pessoas em trabalho necessário e mal pago. É a população de onde o conceito saiu.</p>

<p><strong>A singularização.</strong> O diagrama tem um centro, no singular. Mathews descreve pessoas com ikigai múltiplo e mutável, e observa que concentrar tudo no emprego era um fator de fragilidade entre assalariados japoneses, porque o resto da vida deixava de ser cultivado.<sup class="cit"><a href="#f9">9</a></sup> Kono e Walker descrevem diversificação entre atividades como estratégia deliberada.<sup class="cit"><a href="#f13">13</a></sup> A versão exportada inverte o conselho que sai da pesquisa.</p>

<p><strong>A transferência do ônus.</strong> Transformar uma descrição de como as pessoas encontram sentido em prescrição de carreira desloca para o indivíduo um problema que tem componente estrutural. Se alguém não encontra o centro dos quatro círculos, a leitura sugerida é que faltou autoconhecimento, e não que o mercado de trabalho disponível não oferece essa combinação para a maior parte das ocupações.</p>

<p><strong>A assimetria da tradução.</strong> O ponto de Asad se aplica ao caso quase como exemplo didático.<sup class="cit"><a href="#f8">8</a></sup> A palavra japonesa foi incorporada a um argumento ocidental sobre trabalho, ganhou uma forma visual que não tinha, e voltou ao mundo com autoridade emprestada de uma cultura que não a formulou assim. O prestígio corre no sentido de quem publica e vende, e o conceito é remodelado para caber na pergunta de quem compra.</p>

<h3>O que fazer com o diagrama</h3>

<p>Ele continua sendo um instrumento razoável para uma finalidade específica: organizar uma decisão de carreira listando quatro critérios que de fato competem entre si. Nesse uso, o nome correto é o que Zuzunaga deu, diagrama de propósito, e a atribuição correta é Barcelona, 2011. Usá-lo com esse nome e essa data custa nada e corrige tudo o que está errado.</p>

<div class="marca consenso">
<span class="rot">O que segurar</span>
<p>O diagrama de quatro círculos foi criado por Andrés Zuzunaga em 2011 com o rótulo "propósito", publicado em 2012 num livro espanhol, e renomeado como ikigai por Marc Winn em 2014. Não tem origem japonesa. O conceito japonês, formulado academicamente por Mieko Kamiya em 1966 a partir de entrevistas com pacientes de hanseníase, distingue o objeto que dá sentido do sentimento de que a vida tem sentido, é plural, é revisável e não menciona remuneração. As coortes japonesas mostram associação entre ikigai autorrelatado e menor mortalidade, mas mediram uma pergunta única e não o diagrama, e a interpretação causal permanece em aberto. O caso é útil como exemplo de tradução cultural assimétrica: uma pergunta ocidental sobre carreira ganhou selo japonês e passou a circular como tradição.</p>
</div>
` }
},

sintese: {
  definicoes: [
    { termo: "Ikigai (uso corrente)", def: "Palavra japonesa comum para aquilo que faz a vida valer a pena, aplicável a pessoas, atividades, hábitos e crenças." },
    { termo: "Ikigai (Kamiya, 1966)", def: "Conceito com duas faces: o objeto que dá sentido à vida e o ikigai-kan, o sentimento de que a vida tem sentido." },
    { termo: "Diagrama de propósito (Zuzunaga)", def: "Gráfico de quatro círculos criado em Barcelona em 2011 para explicar propósito de vida, com a palavra 'propósito' no centro." },
    { termo: "Emic e etic", def: "Descrição feita com as categorias de quem vive a prática, contra descrição feita com as categorias analíticas do observador." },
    { termo: "Invariância de medida", def: "Condição em que um questionário funciona do mesmo modo em grupos diferentes; sem invariância escalar, comparar médias entre países não tem base." },
    { termo: "Hazard ratio", def: "Razão entre as taxas instantâneas de ocorrência de um desfecho em dois grupos ao longo do acompanhamento." }
  ],
  lembrar: [
    "O diagrama de quatro círculos não é japonês: veio de Andrés Zuzunaga em 2011, com 'propósito' no centro, e foi renomeado por Marc Winn em 2014.",
    "Nenhuma fonte japonesa inclui remuneração na definição de ikigai.",
    "Kamiya formulou o conceito a partir de pessoas que tinham perdido saúde, liberdade e planos de vida, e não a partir de escolha profissional.",
    "As coortes japonesas mediram uma pergunta única de autorrelato, não a interseção dos quatro círculos; a evidência epidemiológica não valida o diagrama.",
    "A definição por interseção exclui aposentados, desempregados, doentes e cuidadores, que é exatamente a população de onde o conceito veio.",
    "A tradução entre culturas é assimétrica: a língua dominante reescreve o conceito importado nos termos da pergunta que ela já tinha."
  ],
  confusoes: [
    { erro: "Ikigai é uma filosofia japonesa milenar representada por quatro círculos.", correcao: "A palavra é antiga e corriqueira, o diagrama tem origem espanhola de 2011 e nunca existiu em fonte japonesa." },
    { erro: "Ter ikigai significa encontrar o trabalho que reúne paixão, talento, utilidade e salário.", correcao: "Essa é a formulação de Winn a partir de Zuzunaga. Em Kamiya e no uso japonês, ikigai é qualquer fonte de sentido, no plural e sem exigência de remuneração." },
    { erro: "Os estudos japoneses provam que o diagrama funciona.", correcao: "Os estudos mediram respostas a uma pergunta única sobre ter ou não ikigai. O diagrama nunca foi a variável medida." },
    { erro: "A associação entre ikigai e menor mortalidade é causal e está estabelecida.", correcao: "É consistente e sobrevive a ajustes extensos, mas convive com causalidade reversa, confundimento residual por depressão e medida única no tempo." },
    { erro: "Cada pessoa tem um ikigai, e a tarefa é descobri-lo.", correcao: "As descrições etnográficas e psicológicas japonesas mostram fontes múltiplas, que mudam ao longo da vida; concentrar tudo em uma só foi descrito por Mathews como fator de fragilidade." }
  ],
  numeros: [
    "Mieko Kamiya (1914-1979) publica Ikigai ni tsuite pela editora Misuzu Shobō em 1966, com base em entrevistas feitas em 1957 e 1958 no sanatório de Nagashima Aiseien.",
    "Andrés Zuzunaga cria o diagrama de propósito em 2011; ele é publicado em 2012 no livro de Borja Vilaseca.",
    "Marc Winn publica 'What is your Ikigai?' em 14 de maio de 2014; García e Miralles levam o diagrama ao livro de 2016.",
    "Estudo de Ohsaki (Sone e cols., 2008): 43.391 adultos, 7 anos de seguimento, HR 1,5 para mortalidade por todas as causas entre quem respondeu 'não'.",
    "JACC (Tanno e cols., 2009): 73.272 participantes, 12,5 anos em média, 10.021 óbitos, HR 0,85 em homens e 0,93 em mulheres."
  ]
},

flashcards: [
  { f: "Quem criou o diagrama de quatro círculos e o que estava escrito no centro?", v: "Andrés Zuzunaga, astrólogo baseado em Barcelona, em 2011. No centro estava 'propósito'. Foi publicado em 2012 no livro '¿Qué harías si no tuvieras miedo?', de Borja Vilaseca, sem qualquer menção ao Japão." },
  { f: "Como o diagrama passou a se chamar ikigai?", v: "Marc Winn, consultor britânico, publicou em 14 de maio de 2014 o post 'What is your Ikigai?' trocando a palavra do centro. Ele tinha visto a palestra de Dan Buettner no TED sobre longevidade em Okinawa. Em 2016 o gráfico entrou no livro de García e Miralles e viralizou." },
  { f: "O que significa a palavra ikigai em japonês?", v: "Junção de iki (viver) e kai (efeito, proveito, aquilo que compensa), sonorizado como gai. Aproximadamente 'aquilo que faz a vida valer a pena'. É palavra de uso corriqueiro, aplicável a um neto, uma horta, um passatempo." },
  { f: "Qual é a distinção central de Kamiya entre ikigai e ikigai-kan?", v: "Ikigai é o objeto ou fonte que dá sentido à vida. Ikigai-kan é o sentimento de que a vida tem sentido. Os dois podem se descolar: alguém pode ter muitas fontes e pouco sentimento." },
  { f: "Em que contexto Kamiya formulou o conceito?", v: "No sanatório de Nagashima Aiseien, entrevistando pessoas com hanseníase segregadas por lei, em 1957 e 1958. A pergunta do livro não é como escolher uma ocupação, mas como alguém que perdeu tudo reconstrói uma razão para continuar." },
  { f: "Quais são as sete necessidades listadas no capítulo 3 de Ikigai ni tsuite?", v: "Plenitude de existir, mudança, futuridade, reverberação (que os atos encontrem resposta), liberdade, autorrealização, sentido e valor. Nenhuma menciona competência técnica, mercado ou pagamento." },
  { f: "O que Gordon Mathews encontrou em campo sobre ikigai?", v: "Que ele não expressa uma essência cultural, mas resulta de negociação entre o que as instituições oferecem e o que a pessoa aceita como razão de viver. Dois termos organizam o material japonês: ittaikan (unidade com um grupo) e jiko jitsugen (autorrealização). Ele registra que concentrar todo o ikigai no emprego expunha os assalariados." },
  { f: "Qual é a diferença de forma lógica entre o diagrama e o conceito?", v: "O diagrama define por conjunção: exige as quatro condições ao mesmo tempo, e a interseção pode ser vazia. Kamiya define por enumeração aberta: qualquer fonte de sentido conta, várias ao mesmo tempo, e elas mudam ao longo da vida." },
  { f: "O que as coortes japonesas mostram sobre ikigai e mortalidade?", v: "Associação inversa consistente. Em Ohsaki, HR 1,5 para mortalidade por todas as causas entre quem respondeu 'não' a uma pergunta única. No JACC, HR 0,85 em homens e 0,93 em mulheres ao longo de 12,5 anos. Em idosos do JAGES, menor incidência de incapacidade funcional e demência em três anos." },
  { f: "Por que essa evidência não valida o diagrama?", v: "Porque a variável medida foi uma pergunta única de autorrelato sobre ter ou não ikigai. A estrutura de quatro círculos nunca foi medida em nenhum desses estudos." },
  { f: "Quais são as principais ameaças à interpretação causal dessas coortes?", v: "Causalidade reversa (doença não diagnosticada reduz o ânimo antes de matar), confundimento residual por depressão, medida única e estática da exposição, viés de seleção entre não respondentes e achados de subgrupo sem mecanismo claro." },
  { f: "O que Miyazaki e colaboradores encontraram ao estratificar por situação de trabalho?", v: "No JACC, a associação inversa entre ikigai e mortalidade cardiovascular apareceu apenas entre pessoas sem emprego, e não entre empregados, autônomos ou donas de casa. O achado é de subgrupo e admite várias leituras, mas retira do círculo do dinheiro qualquer apoio na literatura." },
  { f: "O que é invariância de medida e por que ela importa aqui?", v: "É a condição de um instrumento funcionar do mesmo modo em grupos diferentes. A invariância configural exige a mesma estrutura de fatores, a métrica exige cargas iguais e a escalar exige interceptos iguais. Sem invariância escalar entre Japão e países ocidentais, comparar médias de ikigai entre países não tem base." }
],

prova: [
  { camada: "nucleo",
    q: "Qual é a origem documentada do diagrama de quatro círculos associado ao ikigai?",
    alts: [
      "Um manual de gestão japonês dos anos 1980, traduzido para o inglês na década seguinte.",
      "Um gráfico sobre propósito criado por Andrés Zuzunaga em Barcelona em 2011, renomeado como ikigai por Marc Winn em 2014.",
      "Uma esquematização da obra de Mieko Kamiya feita por pesquisadores da Universidade de Tóquio.",
      "Uma síntese da tradição de Okinawa registrada por Dan Buettner durante o trabalho de campo das zonas azuis."
    ],
    correta: 1,
    porque: "A cadeia está registrada em fontes datadas, inclusive nas páginas dos próprios autores: Zuzunaga publica o gráfico com 'propósito' no centro em 2012, no livro de Vilaseca; Winn troca a palavra em maio de 2014. A alternativa sobre Buettner é a mais tentadora porque ele é de fato o elo que levou a palavra até Winn, mas ele falou de longevidade em Okinawa numa palestra e não desenhou nem divulgou diagrama algum." },

  { camada: "nucleo",
    q: "O que a palavra ikigai designa no uso japonês corrente?",
    alts: [
      "A interseção entre vocação, missão, profissão e paixão.",
      "Um estado de fluxo atingido durante o trabalho especializado.",
      "Aquilo que faz a vida valer a pena, podendo ser uma pessoa, uma atividade ou um hábito cotidiano.",
      "O dever de contribuir para a harmonia do grupo social."
    ],
    correta: 2,
    porque: "A composição iki mais kai dá algo próximo de 'aquilo que faz a vida valer a pena', e a palavra é aplicada corriqueiramente a um neto, uma horta, um coral. A última alternativa é a mais tentadora porque a dimensão de grupo existe de fato no material japonês, sob o termo ittaikan que Mathews descreve, mas ela é uma das formas de ikigai e não a definição da palavra." },

  { camada: "nucleo",
    q: "Em que contexto Mieko Kamiya desenvolveu a formulação acadêmica de ikigai?",
    alts: [
      "Estudando executivos japoneses em processo de aposentadoria compulsória.",
      "Entrevistando pessoas com hanseníase segregadas por lei no sanatório de Nagashima Aiseien, em 1957 e 1958.",
      "Analisando questionários aplicados a estudantes universitários de Tóquio.",
      "Acompanhando famílias de Okinawa durante um estudo de longevidade."
    ],
    correta: 1,
    porque: "O material do livro de 1966 saiu do trabalho clínico no sanatório, e a pergunta que o organiza é como alguém que perdeu saúde, liberdade e planos de vida reconstrói uma razão para continuar. A alternativa sobre Okinawa é tentadora porque associa Kamiya ao circuito da longevidade que o Ocidente conhece, mas esse circuito vem de Buettner, três décadas depois, e não tem relação com o livro." },

  { camada: "nucleo",
    q: "Qual é a diferença de estrutura lógica entre o diagrama e a definição de Kamiya?",
    alts: [
      "O diagrama é quantitativo e a definição de Kamiya é qualitativa.",
      "O diagrama trata de sentimento e Kamiya trata de comportamento observável.",
      "O diagrama exige quatro condições simultâneas, enquanto Kamiya define por enumeração aberta, admitindo fontes múltiplas e mutáveis.",
      "O diagrama é individual e a definição de Kamiya é coletiva."
    ],
    correta: 2,
    porque: "A conjunção do diagrama pode ter interseção vazia, e por isso torna o ikigai escasso e condicional; a enumeração aberta de Kamiya torna quase todo mundo portador de algum ikigai. A alternativa sobre individual contra coletivo é tentadora porque o material japonês tem forte componente relacional, mas Kamiya escreve sobre a experiência de cada pessoa, e a oposição correta é entre conjunção e lista aberta." },

  { camada: "aprofundamento",
    q: "Qual é a distinção que Kamiya introduz e que costuma se perder nas versões ocidentais?",
    alts: [
      "Entre ikigai de curto prazo e ikigai de longo prazo.",
      "Entre o objeto que dá sentido à vida e o ikigai-kan, o sentimento de que a vida tem sentido.",
      "Entre ikigai social, não social e antissocial.",
      "Entre ikigai herdado da família e ikigai escolhido pelo indivíduo."
    ],
    correta: 1,
    porque: "A distinção entre fonte e sentimento estrutura o livro e explica por que os dois podem se descolar: é possível ter muitos objetos e pouco ikigai-kan. A tricotomia social, não social e antissocial existe de verdade na literatura japonesa, mas é de Katsuya Inoue e não de Kamiya, o que torna essa alternativa a armadilha mais eficaz da questão." },

  { camada: "aprofundamento",
    q: "Nos termos que Gordon Mathews recolheu em campo, o que distingue ittaikan de jiko jitsugen?",
    alts: [
      "Ittaikan é o sentimento de unidade com um grupo; jiko jitsugen é autorrealização individual, com vocabulário importado da psicologia americana.",
      "Ittaikan é a satisfação com o salário; jiko jitsugen é a satisfação com o cargo.",
      "Ittaikan é um conceito budista; jiko jitsugen é um conceito xintoísta.",
      "Ittaikan é o ikigai dos idosos; jiko jitsugen é o ikigai dos jovens."
    ],
    correta: 0,
    porque: "São as duas orientações que Mathews encontrou entre os entrevistados japoneses, ambas categorias emic, usadas por eles próprios. A alternativa sobre faixa etária é a mais tentadora porque existe de fato diferença geracional documentada por Ozawa-de Silva, mas essa diferença descreve a distribuição das duas orientações e não a definição de cada uma." },

  { camada: "aprofundamento",
    q: "Por que os grandes estudos de coorte japoneses não sustentam o diagrama de quatro círculos?",
    alts: [
      "Porque foram feitos apenas com idosos e não se aplicam a adultos em idade produtiva.",
      "Porque a exposição medida foi uma pergunta única de autorrelato sobre ter ou não ikigai, e nunca a interseção dos quatro círculos.",
      "Porque as associações encontradas não foram estatisticamente significativas.",
      "Porque não ajustaram para variáveis de estilo de vida."
    ],
    correta: 1,
    porque: "A validade do achado epidemiológico e a validade do diagrama são questões separadas: os estudos mediram outra coisa. A alternativa sobre ajuste é tentadora porque confundimento residual é de fato uma limitação real dessas coortes, mas o ajuste feito foi extenso, incluindo tabagismo, álcool, sono, caminhada, escolaridade e histórico de doenças, de modo que a afirmação como está é falsa." },

  { camada: "aprofundamento",
    q: "Qual das seguintes NÃO é uma ameaça reconhecida à interpretação causal da associação entre ikigai e mortalidade nessas coortes?",
    alts: [
      "Causalidade reversa, com doença ainda não diagnosticada reduzindo o ikigai relatado.",
      "Confundimento residual por depressão não medida.",
      "Tamanho amostral insuficiente para detectar as associações relatadas.",
      "Medida única da exposição, sem informação sobre mudanças ao longo do seguimento."
    ],
    correta: 2,
    porque: "As coortes têm dezenas de milhares de participantes e milhares de óbitos, o que dá poder estatístico de sobra; o problema nunca foi esse. As outras três são limitações registradas pelos próprios autores, e a de causalidade reversa é a mais séria, tanto que Tanno separou os cinco primeiros anos e Miyazaki excluiu óbitos precoces para atenuá-la." },

  { camada: "extensao",
    q: "O que Miyazaki e colaboradores encontraram ao estratificar a associação entre ikigai e mortalidade cardiovascular por situação de trabalho?",
    alts: [
      "A associação inversa apareceu apenas entre pessoas empregadas em tempo integral.",
      "A associação inversa apareceu apenas entre pessoas sem emprego, e não entre empregados, autônomos ou donas de casa.",
      "A associação foi idêntica em todos os grupos, o que confirmou a robustez do achado.",
      "A associação se inverteu entre desempregados, com maior mortalidade entre quem relatou ikigai."
    ],
    correta: 1,
    porque: "Com mediana de 19,1 anos de seguimento, os HR entre não empregados ficaram entre 0,69 e 0,78 conforme sexo e nível de ikigai, e nenhuma associação apareceu entre empregados. É achado de subgrupo e admite várias leituras, inclusive confundimento por saúde que determina a situação de trabalho, e não demonstra que ser pago prejudique o ikigai. A primeira alternativa é o espelho tentador do resultado real." },

  { camada: "extensao",
    q: "Que problema o critério de interseção do diagrama cria em relação à origem do conceito?",
    alts: [
      "Exige conhecimento de japonês para ser aplicado corretamente.",
      "Torna o ikigai coletivo, ao contrário da formulação individual de Kamiya.",
      "Exclui aposentados, desempregados, doentes crônicos e cuidadores, que é a população a partir da qual Kamiya formulou o conceito.",
      "Impede que uma pessoa mude de ikigai ao longo da vida, o que contraria os dados de mortalidade."
    ],
    correta: 2,
    porque: "Exigir remuneração e demanda de mercado ao mesmo tempo elimina exatamente quem estava no sanatório de Nagashima. A quarta alternativa é a armadilha: a singularização do diagrama de fato conflita com a pluralidade descrita por Mathews e por Kono e Walker, mas nada nos dados de mortalidade trata de mudança de ikigai, já que a exposição foi medida uma única vez." }
],

fontes: [
  { n: 1, tipo: "fonte primária", ref: "Zuzunaga, A. 'Tu propósito vital, único e irrepetible'. Cosmograma, Barcelona. Nota do autor registrando a criação do gráfico em 2011 e sua publicação em 2012 no livro de Borja Vilaseca <em>¿Qué harías si no tuvieras miedo?</em>.", url: "https://www.cosmograma.com/proposito.php" },
  { n: 2, tipo: "fonte primária", ref: "Winn, M. 'What is your Ikigai?'. The View Inside Me, 14 de maio de 2014. Post original em que o diagrama de Zuzunaga aparece com a palavra ikigai no centro.", url: "https://theviewinside.me/what-is-your-ikigai" },
  { n: 3, tipo: "livro", ref: "García, H. &amp; Miralles, F. <em>Ikigai: The Japanese Secret to a Long and Happy Life</em>. Urano, 2016; Penguin, 2017. Livro que levou o diagrama ao público internacional.", url: "https://openlibrary.org/works/OL19714233W" },
  { n: 4, tipo: "reportagem", ref: "'What Japan makes of ikigai'. <em>The Economist</em>, 27 de outubro de 2022. Reportagem sobre a distância entre o uso japonês da palavra e a versão exportada.", url: "https://www.economist.com/asia/2022/10/27/what-japan-makes-of-ikigai" },
  { n: 5, tipo: "documento oficial", ref: "Government of Japan. 'Ikigai: The Japanese Secret to a Joyful Life'. JapanGov, 2022.", url: "https://www.japan.go.jp/kizuna/2022/03/ikigai_japanese_secret_to_a_joyful_life.html" },
  { n: 6, tipo: "fonte primária", ref: "Kamiya, M. <em>Ikigai ni tsuite</em> (生きがいについて). Misuzu Shobō, 1966; reedição de 2004, ISBN 978-4-622-08181-4. Página da editora com o sumário completo, incluindo as sete necessidades do capítulo 3.", url: "https://www.msz.co.jp/book/detail/08181/" },
  { n: 7, tipo: "livro", ref: "Geertz, C. 'Thick Description: Toward an Interpretive Theory of Culture'. Em <em>The Interpretation of Cultures</em>. Basic Books, 1973, p. 3-30.", url: "https://openlibrary.org/works/OL2622424W" },
  { n: 8, tipo: "capítulo", ref: "Asad, T. 'The Concept of Cultural Translation in British Social Anthropology'. Em Clifford, J. &amp; Marcus, G. (orgs.), <em>Writing Culture: The Poetics and Politics of Ethnography</em>. University of California Press, 1986, p. 141-164.", url: "https://www.ucpress.edu/books/writing-culture/paper" },
  { n: 9, tipo: "livro", ref: "Mathews, G. <em>What Makes Life Worth Living? How Japanese and Americans Make Sense of Their Worlds</em>. University of California Press, 1996. ISBN 978-0-520-20133-0.", url: "https://www.ucpress.edu/books/what-makes-life-worth-living/paper" },
  { n: 10, tipo: "artigo", ref: "Mathews, G. 'The Stuff of Dreams, Fading: Ikigai and \"the Japanese Self\"'. <em>Ethos</em> 24(4):718-747, 1996.", url: "https://doi.org/10.1525/eth.1996.24.4.02a00060" },
  { n: 11, tipo: "artigo", ref: "Ozawa-de Silva, C. 'In the eyes of others: Loneliness and relational meaning in life among Japanese college students'. <em>Transcultural Psychiatry</em> 57(5):623-634, 2020.", url: "https://doi.org/10.1177/1363461519899757" },
  { n: 12, tipo: "artigo", ref: "Kumano, M. 'On the Concept of Well-Being in Japan: Feeling Shiawase as Hedonic Well-Being and Feeling Ikigai as Eudaimonic Well-Being'. <em>Applied Research in Quality of Life</em> 13(2):419-433, 2018.", url: "https://doi.org/10.1007/s11482-017-9532-9" },
  { n: 13, tipo: "artigo", ref: "Kono, S. &amp; Walker, G. J. 'Theorizing Ikigai or Life Worth Living Among Japanese University Students: A Mixed-Methods Approach'. <em>Journal of Happiness Studies</em> 21(1):327-355, 2020.", url: "https://doi.org/10.1007/s10902-019-00086-x" },
  { n: 14, tipo: "artigo", ref: "Sone, T., Nakaya, N., Ohmori, K., Shimazu, T., Higashiguchi, M., Kakizaki, M., Kikuchi, N., Kuriyama, S. &amp; Tsuji, I. 'Sense of life worth living (ikigai) and mortality in Japan: Ohsaki Study'. <em>Psychosomatic Medicine</em> 70(6):709-715, 2008.", url: "https://doi.org/10.1097/PSY.0b013e31817e7e64" },
  { n: 15, tipo: "artigo", ref: "Tanno, K., Sakata, K., Ohsawa, M., Onoda, T., Itai, K., Yaegashi, Y. &amp; Tamakoshi, A. 'Associations of ikigai as a positive psychological factor with all-cause mortality and cause-specific mortality among middle-aged and elderly Japanese people: findings from the Japan Collaborative Cohort Study'. <em>Journal of Psychosomatic Research</em> 67(1):67-75, 2009.", url: "https://doi.org/10.1016/j.jpsychores.2008.10.018" },
  { n: 16, tipo: "artigo", ref: "Miyazaki, J., Shirai, K., Kimura, T., Ikehara, S., Tamakoshi, A. &amp; Iso, H. 'Purpose in life (Ikigai) and employment status in relation to cardiovascular mortality: the Japan Collaborative Cohort Study'. <em>BMJ Open</em> 12(10):e059725, 2022.", url: "https://doi.org/10.1136/bmjopen-2021-059725" },
  { n: 17, tipo: "artigo", ref: "Okuzono, S. S., Shiba, K., Kim, E. S., Shirai, K., Kondo, N., Fujiwara, T., Kondo, K., Lomas, T., Trudel-Fitzgerald, C., Kawachi, I. &amp; VanderWeele, T. J. 'Ikigai and subsequent health and wellbeing among Japanese older adults: Longitudinal outcome-wide analysis'. <em>The Lancet Regional Health Western Pacific</em> 21:100391, 2022.", url: "https://doi.org/10.1016/j.lanwpc.2022.100391" },
  { n: 18, tipo: "artigo", ref: "Fido, D., Kotera, Y. &amp; Asano, K. 'English Translation and Validation of the Ikigai-9 in a UK Sample'. <em>International Journal of Mental Health and Addiction</em> 18(5):1352-1359, 2020.", url: "https://doi.org/10.1007/s11469-019-00150-w" },
  { n: 19, tipo: "artigo", ref: "Henrich, J., Heine, S. J. &amp; Norenzayan, A. 'The weirdest people in the world?'. <em>Behavioral and Brain Sciences</em> 33(2-3):61-83, 2010.", url: "https://doi.org/10.1017/S0140525X0999152X" },
  { n: 20, tipo: "palestra", ref: "Buettner, D. 'How to live to be 100+'. TED, 2009. Palestra sobre as zonas azuis em que Marc Winn encontrou a palavra ikigai.", url: "https://www.ted.com/talks/dan_buettner_how_to_live_to_be_100" },
  { n: 21, tipo: "preprint", ref: "Newman, S. J. 'Supercentenarian and remarkable age records exhibit patterns indicative of clerical errors and pension fraud'. bioRxiv, 2019 a 2024. Preprint, sem revisão por pares concluída.", url: "https://doi.org/10.1101/704080" },
  { n: 22, tipo: "notícia institucional", ref: "University College London. 'UCL demographer's work debunking Blue Zone regions of exceptional lifespans wins Ig Nobel prize'. UCL Institute of Education, setembro de 2024.", url: "https://www.ucl.ac.uk/ioe/news/2024/sep/ucl-demographers-work-debunking-blue-zone-regions-exceptional-lifespans-wins-ig-nobel-prize" },
  { n: 23, tipo: "entrevista", ref: "Kemp, N. 'How the Andrés Zuzunaga Venn Diagram Became Ikigai'. The Ikigai Podcast, episódio 7. Entrevista com Zuzunaga sobre a criação e a apropriação do gráfico.", url: "https://ikigaitribe.com/ikigai/podcast07/" }
]
};
