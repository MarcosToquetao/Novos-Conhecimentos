CONTEUDOS["homunculo-cortical"] = {
termo: "Homúnculo cortical",
area: "Neurociência",
subtitulo: "A figura do 'homenzinho' distorcido, com mãos e lábios enormes e costas minúsculas, está em praticamente todo livro introdutório de neurociência há quase um século. O mapa básico que ela representa é real. A ideia de que cada parte do corpo tem uma casinha fixa e organizada nessa faixa do cérebro, porém, foi bastante revisada em pesquisas recentes, incluindo um estudo publicado em 2026.",
prerequisitos: [
  "Nenhum pré-requisito técnico. Basta aceitar que diferentes partes do corpo são controladas por diferentes regiões do cérebro.",
  "Para o aprofundamento: familiaridade básica com a ideia de que o córtex cerebral (a camada externa enrugada do cérebro) tem áreas especializadas em funções específicas."
],
conexoes: [
  { termo: "Cérebro dividido: o experimento e a releitura", relacao: "Os dois casos mostram como um modelo clássico e influente de organização cerebral, aceito por décadas, pode ser revisado de forma substancial quando técnicas de imagem e registro mais precisas ficam disponíveis." },
  { termo: "Neuroplasticidade: alcance e limites", relacao: "A descoberta de que o córtex motor mistura representações do corpo com uma rede de controle de ação mais abstrata ajuda a explicar por que a reorganização cortical após lesões é mais flexível do que o mapa clássico do homúnculo sugeria." },
  { termo: "Reconsolidação da memória", relacao: "Ambos são casos em que uma estrutura cerebral, antes vista como fixa e estática (um mapa gravado, uma memória consolidada), se revelou mais dinâmica e reorganizável do que a descrição inicial sugeria." },
  { termo: "Crise de replicação", relacao: "O ajuste do modelo do homúnculo não veio de uma refutação total, mas de uma revisão baseada em métodos mais precisos, um padrão comum quando a ciência revisita um achado clássico décadas depois." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Nos anos 1930 e 1940, o neurocirurgião canadense Wilder Penfield operava pacientes com epilepsia grave que precisavam ficar acordados durante a cirurgia, para que a equipe pudesse identificar com precisão quais áreas do cérebro eram seguras para remover. Aproveitando essa janela rara, Penfield estimulava eletricamente pontos específicos da superfície do cérebro exposto e anotava o que o paciente sentia ou qual músculo se contraía.<sup class="cit"><a href="#f2">2</a></sup> Repetindo isso em centenas de pacientes, ele mapeou, com um nível de detalhe inédito para a época, quais pontos de uma faixa estreita do córtex (o córtex motor primário, numa faixa que passa por cima da cabeça de orelha a orelha) correspondiam a qual parte do corpo.</p>

<p>O resultado ficou famoso como o <strong>homúnculo cortical</strong>: um desenho de um corpo humano distorcido, esticado sobre essa faixa do cérebro, com mãos, lábios e língua enormes (porque ocupam uma área desproporcionalmente grande do mapa, refletindo o controle fino e preciso que temos sobre elas) e tronco, pernas e costas minúsculos (porque exigem controle motor bem menos refinado).<sup class="cit"><a href="#f1">1</a></sup> A imagem apareceu no livro de Penfield e Theodore Rasmussen, <em>The Cerebral Cortex of Man</em>, publicado em 1950, e desde então é reproduzida em praticamente todo livro introdutório de neurociência.</p>

<div class="marca consenso">
<span class="rot">O que continua sólido</span>
<p>Que diferentes partes do corpo são representadas por diferentes regiões do córtex motor e sensorial, e que essa representação é desproporcional ao tamanho físico da parte do corpo (refletindo a precisão do controle motor ou a densidade de receptores sensoriais, não o tamanho anatômico), é um achado bem estabelecido e amplamente replicado desde o trabalho original de Penfield. Isso não mudou.</p>
</div>

<h3>O que mudou: o mapa é bem mais bagunçado do que o desenho sugere</h3>

<p>O desenho clássico do homúnculo sugere um mapa organizado, contínuo e limpo: uma sequência ordenada, da cabeça aos pés, sem sobreposição. Pesquisas recentes, usando ressonância magnética funcional de altíssima precisão em indivíduos estudados repetidamente ao longo de muitas sessões, mostraram algo mais complicado: intercaladas entre as regiões que controlam mão, pé e boca, existem faixas de córtex que não controlam nenhum movimento específico de uma única parte do corpo, mas parecem estar envolvidas em coordenar ações que exigem o corpo inteiro, ou em processos mais gerais de controle e regulação (como estado de alerta e resposta a erro).<sup class="cit"><a href="#f3">3</a></sup> Essa descoberta, publicada na revista <em>Nature</em> em 2023, recebeu o nome de rede de ação somato-cognitiva (SCAN, na sigla em inglês).</p>

<h3>E ficou ainda mais detalhado em 2026</h3>

<p>Um estudo publicado na <em>Nature</em> em junho de 2026, usando eletrodos implantados que registram a atividade de neurônios individuais em pacientes com paralisia (participantes de ensaios clínicos de interfaces cérebro-computador), foi além: descobriu que, em cada ponto amostrado dessa faixa do córtex motor, existe informação sobre o corpo inteiro misturada junto, não apenas sobre a parte "designada" pelo mapa clássico.<sup class="cit"><a href="#f4">4</a></sup> A intensidade relativa dessa informação ainda segue, de modo geral, o padrão clássico (mais informação sobre a mão numa região "de mão"), mas a organização real é descrita pelos autores como um mosaico de zonas, cada uma com sua própria representação do corpo inteiro, e não como um mapa único, ordenado e exclusivo, do jeito que o desenho de Penfield sugere à primeira vista.</p>

<div class="marca emergente">
<span class="rot">Como encaixar as duas descobertas</span>
<p>As descobertas de 2023 e 2026 não jogam fora o trabalho de Penfield. Elas refinam algo que já era conhecido de forma aproximada (que regiões diferentes do córtex controlam partes diferentes do corpo, com áreas maiores para partes de controle mais fino) com uma resolução que a tecnologia dos anos 1930 e 1940 simplesmente não permitia alcançar. A imagem de um "homenzinho" deitado, esticado e ordenado sobre o córtex continua sendo uma simplificação didática útil para uma primeira aula, mas hoje sabemos que ela esconde uma organização real bem mais entrelaçada, com zonas de controle geral do corpo intercaladas entre as regiões específicas.</p>
</div>
` },

aprofundamento: { minutos: 30, html: `
<h3>O método original de Penfield, com mais precisão</h3>

<p>Penfield e seu colaborador Edwin Boldrey publicaram o primeiro mapeamento sistemático em 1937, baseado em estimulação elétrica direta do córtex exposto de mais de 400 pacientes ao longo de vários anos de cirurgias.<sup class="cit"><a href="#f1">1</a></sup> Cada ponto do mapa representava a resposta relatada por um ou poucos pacientes, sob condições de cirurgia (paciente sedado localmente, mas consciente, sob estresse, com tempo limitado para testar cada ponto). O desenho icônico do homúnculo, publicado depois no livro de 1950 com Rasmussen, é uma síntese visual e estilizada dessas centenas de pontos individuais, não uma medição direta e contínua de uma única pessoa.</p>

<h3>Por que essa metodologia deixava zonas cegas</h3>

<p>Um mapa construído ponto a ponto, em condições cirúrgicas, com número limitado de estimulações por paciente, tem uma resolução espacial necessariamente grosseira comparada às técnicas de imagem funcional de hoje. Isso ajuda a explicar por que padrões mais sutis, como a rede de ação somato-cognitiva intercalada entre as regiões de efetor específico, não apareceram no mapa original: exigiam medir a mesma pessoa repetidamente, com muito mais pontos de amostragem e maior sensibilidade estatística, algo que só ficou tecnicamente viável décadas depois, com ressonância magnética funcional de "amostragem densa" (muitas sessões da mesma pessoa, em vez de uma amostra grande de pessoas diferentes medidas poucas vezes).</p>

<div class="tabela-env">
<table>
<thead><tr><th>Estudo</th><th>Método</th><th>O que revisou no mapa clássico</th></tr></thead>
<tbody>
<tr><td>Penfield &amp; Boldrey (1937); Penfield &amp; Rasmussen (1950)</td><td>Estimulação elétrica direta durante cirurgia, centenas de pacientes</td><td>Estabeleceu o mapa básico e sua desproporção (mãos e boca ocupando área maior que tronco)</td></tr>
<tr><td>Gordon et al. (2023), Nature</td><td>Ressonância magnética funcional de amostragem densa, mesmos indivíduos em múltiplas sessões</td><td>Encontrou a rede de ação somato-cognitiva (SCAN), intercalada entre as regiões de efetor específico</td></tr>
<tr><td>Estudo de 2026, Nature</td><td>Registro de neurônios individuais via eletrodos implantados, pacientes de ensaios de interface cérebro-computador</td><td>Mostrou que cada zona do córtex motor contém informação sobre o corpo inteiro, organizada como um mosaico, não um mapa único e exclusivo</td></tr>
</tbody>
</table>
</div>

<h3>O que é, precisamente, a rede de ação somato-cognitiva</h3>

<p>A descoberta de 2023 identificou regiões intercaladas entre as áreas clássicas de mão, pé e boca que têm conectividade forte com redes cerebrais associadas a controle cognitivo geral, estado de alerta, processamento de erro e regulação fisiológica (como frequência cardíaca e pressão arterial), não apenas com movimento de uma parte específica do corpo.<sup class="cit"><a href="#f3">3</a></sup> A interpretação proposta pelos autores é que essas zonas ajudam a integrar e coordenar ações que envolvem o corpo inteiro (como se levantar, ou reagir de forma coordenada a algo inesperado), servindo de ponte entre planejamento cognitivo mais abstrato e execução motora específica de uma parte do corpo.</p>

<h3>Relevância prática, além da curiosidade acadêmica</h3>

<p>Essa revisão do mapa clássico não é só um ajuste teórico: interfaces cérebro-computador, usadas para ajudar pessoas com paralisia a controlar próteses ou cursores de computador com a atividade cerebral, dependem diretamente de saber com precisão qual região do córtex motor decodificar para qual tipo de movimento pretendido. Um mapa mais preciso, que reconhece a mistura de informação sobre o corpo inteiro em cada zona, em vez de uma divisão limpa e exclusiva por parte do corpo, tem implicações diretas para como esses dispositivos são projetados e calibrados.<sup class="cit"><a href="#f4">4</a></sup></p>
` },

extensao: { minutos: 60, html: `
<h3>Por que um modelo "errado em detalhe" sobreviveu tão bem por tanto tempo</h3>

<p>Vale refletir sobre por que o desenho de Penfield permaneceu como imagem de referência por quase noventa anos, mesmo com uma resolução que hoje sabemos ser grosseira. Primeiro, porque a estrutura básica (desproporção de área cortical, ordem geral de cabeça aos pés) continua correta e é pedagogicamente poderosa: é uma forma vívida e memorável de ensinar que "mais precisão de movimento equivale a mais espaço cerebral dedicado", uma ideia real e importante mesmo com os detalhes finos revisados. Segundo, porque testar a hipótese alternativa (uma organização mais entrelaçada e distribuída) exigia tecnologia de imagem e registro neural que simplesmente não existia até recentemente. Um modelo simplificado, mas parcialmente correto e didaticamente útil, tende a durar até que a tecnologia necessária para testá-lo com mais rigor apareça, não até que alguém pense em questioná-lo.</p>

<h3>O padrão se repete: de mapa estático para sistema dinâmico</h3>

<p>Esse é um padrão recorrente na história da neurociência: um primeiro mapeamento, feito com a melhor tecnologia disponível numa época, tende a retratar uma estrutura como mais fixa, discreta e ordenada do que ela realmente é. Trabalhos posteriores, com métodos mais sensíveis, quase sempre revelam mais sobreposição, mais dinamismo e mais dependência de contexto do que o mapa original sugeria. Isso não é peculiar ao homúnculo cortical: é a mesma lógica por trás de revisões em outras áreas da neurociência, da localização de funções de linguagem à compreensão de como memórias são armazenadas e reativadas.</p>

<div class="marca controverso">
<span class="rot">O que ainda não está fechado</span>
<p>A extensão exata da rede de ação somato-cognitiva, sua relação causal com controle motor voluntário versus regulação fisiológica automática, e até que ponto o "mosaico" descrito em 2026 se generaliza para outras regiões do córtex além da faixa motora primária são questões ainda ativas de pesquisa, sem uma síntese teórica final aceita amplamente. O que existe hoje é uma correção empírica bem estabelecida ao mapa clássico, não ainda uma teoria unificada e completa que substitua o modelo de Penfield por igual poder explicativo e pedagógico.</p>
</div>

<h3>Como reescrever a lição sem jogar fora a imagem</h3>

<p>A forma mais honesta de ensinar o homúnculo cortical hoje combina as duas camadas: usar a imagem clássica para transmitir a ideia central (representação cortical desproporcional ao tamanho físico do corpo, proporcional à precisão de controle exigida), e explicitamente qualificar que o mapa real é mais parecido com um mosaico de zonas interligadas do que com um desenho único, limpo e contínuo. Essa é, aliás, uma boa prática geral ao lidar com qualquer diagrama clássico de livro didático: perguntar se ele descreve a estrutura básica corretamente (aqui, sim) ou se a simplicidade visual do desenho esconde uma complexidade real que só ficou visível com tecnologia posterior (aqui, também sim).</p>
` }
},

sintese: {
  definicoes: [
    { termo: "Homúnculo cortical", def: "Representação visual, criada a partir do mapeamento de Wilder Penfield, de um corpo humano distorcido e esticado sobre o córtex motor ou sensorial, com partes do corpo desenhadas proporcionalmente à área cortical que ocupam, não ao seu tamanho físico real." },
    { termo: "Córtex motor primário", def: "Faixa estreita do córtex cerebral, que passa de orelha a orelha por cima da cabeça, envolvida na geração de comandos para movimentos voluntários específicos do corpo." },
    { termo: "Rede de ação somato-cognitiva (SCAN)", def: "Conjunto de regiões, descoberto em 2023, intercaladas entre as áreas clássicas de efetor específico (mão, pé, boca) no córtex motor, com forte conectividade a redes de controle cognitivo geral, estado de alerta e regulação fisiológica." },
    { termo: "Mosaico de representações corporais", def: "Modelo proposto em 2026, com base em registro de neurônios individuais, segundo o qual cada zona amostrada do córtex motor contém informação sobre o corpo inteiro, não apenas sobre a parte de efetor 'designada' pelo mapa clássico." },
    { termo: "Amostragem densa (dense sampling)", def: "Técnica de neuroimagem que estuda repetidamente os mesmos poucos indivíduos, em muitas sessões, em vez de uma amostra grande de pessoas medidas poucas vezes, permitindo detectar padrões sutis invisíveis em estudos tradicionais de grupo." }
  ],
  lembrar: [
    "Wilder Penfield mapeou o córtex motor e sensorial de centenas de pacientes de epilepsia durante cirurgias nos anos 1930 e 1940, usando estimulação elétrica direta do cérebro exposto.",
    "O desenho icônico do homúnculo, publicado com Theodore Rasmussen em 1950, mostra partes do corpo com área cortical proporcional à precisão de controle exigida (mãos e boca grandes, tronco pequeno), não ao tamanho físico real.",
    "A desproporção básica do mapa continua bem estabelecida e não foi contestada pelas pesquisas recentes.",
    "Em 2023, um estudo na revista Nature (Gordon e colegas) descobriu a rede de ação somato-cognitiva (SCAN), regiões intercaladas entre as áreas clássicas, ligadas a controle cognitivo geral e regulação fisiológica, não a movimento de uma parte específica do corpo.",
    "Em junho de 2026, outro estudo na Nature, usando registro de neurônios individuais em pacientes de ensaios de interface cérebro-computador, mostrou que cada zona do córtex motor contém informação sobre o corpo inteiro, organizada como um mosaico de representações sobrepostas.",
    "Essas descobertas recentes revisam o detalhe fino do mapa clássico (organização limpa e exclusiva por parte do corpo), sem invalidar sua estrutura básica (desproporção cortical ligada à precisão de controle).",
    "A revisão do mapa tem implicações práticas diretas para o projeto de interfaces cérebro-computador usadas por pessoas com paralisia."
  ],
  confusoes: [
    { erro: "As pesquisas recentes provaram que o mapa de Penfield estava completamente errado", correcao: "A estrutura básica do mapa (desproporção de área cortical ligada à precisão de controle motor, não ao tamanho físico da parte do corpo) continua bem estabelecida. O que foi revisado foi a organização fina, mais entrelaçada e menos exclusiva do que o desenho clássico sugere." },
    { erro: "O desenho do homúnculo representa uma medição direta e contínua de uma única pessoa", correcao: "É uma síntese visual e estilizada de centenas de pontos de estimulação coletados em muitos pacientes diferentes, sob condições cirúrgicas, não um mapa contínuo medido numa única pessoa com alta resolução." },
    { erro: "A rede de ação somato-cognitiva (SCAN), descoberta em 2023, controla movimentos específicos de uma parte do corpo, como mão ou pé", correcao: "Ao contrário das regiões clássicas de efetor específico, a SCAN está mais ligada a coordenação de ações do corpo inteiro e a processos gerais como estado de alerta e regulação fisiológica, não ao controle fino de uma parte isolada." },
    { erro: "O estudo de 2026 mostrou que o mapa clássico do homúnculo não tem nenhuma relação com a organização real do córtex motor", correcao: "O estudo encontrou que a intensidade relativa de informação sobre cada parte do corpo ainda segue, de modo geral, o padrão clássico (mais informação sobre a mão em regiões 'de mão'), mas organizada como um mosaico com informação sobre o corpo inteiro presente em cada zona, não como divisões exclusivas e limpas." },
    { erro: "Essa revisão do mapa cortical é só uma curiosidade acadêmica sem aplicação prática", correcao: "Interfaces cérebro-computador para pessoas com paralisia dependem diretamente de mapas precisos do córtex motor para decodificar a intenção de movimento, então essas descobertas têm implicações diretas para o projeto e a calibração desses dispositivos." }
  ],
  numeros: [
    "Penfield, W. &amp; Boldrey, E. (1937), Brain 60(4):389-443: primeiro mapeamento sistemático publicado, baseado em estimulação elétrica de mais de 400 pacientes.",
    "Penfield, W. &amp; Rasmussen, T. The Cerebral Cortex of Man, 1950: livro que popularizou o desenho icônico do homúnculo cortical.",
    "Gordon, E. M. et al. (2023), Nature 617:351-359: descoberta da rede de ação somato-cognitiva (SCAN), verificada nos três maiores conjuntos de dados de ressonância funcional disponíveis.",
    "Estudo de junho de 2026, Nature: mapeamento por registro de neurônios individuais em 20 arranjos de eletrodos, 8 indivíduos com paralisia por lesão medular, ELA ou AVC de tronco encefálico, revelando organização em mosaico."
  ]
},

flashcards: [
  { f: "Como Wilder Penfield mapeou originalmente o córtex motor e sensorial, nos anos 1930 e 1940?", v: "Estimulando eletricamente pontos específicos do cérebro exposto durante cirurgias de epilepsia em pacientes acordados, e anotando a resposta relatada, ao longo de centenas de pacientes." },
  { f: "O que a área ocupada por cada parte do corpo no desenho do homúnculo representa?", v: "A precisão do controle motor ou a densidade de receptores sensoriais daquela parte, não seu tamanho físico real. Por isso mãos e lábios aparecem enormes e o tronco, minúsculo." },
  { f: "Em que livro e ano o desenho icônico do homúnculo foi publicado?", v: "No livro The Cerebral Cortex of Man, de Wilder Penfield e Theodore Rasmussen, em 1950." },
  { f: "O que continua bem estabelecido, sem disputa, sobre o mapa cortical do corpo?", v: "Que diferentes partes do corpo são representadas por diferentes regiões corticais, e que essa representação é desproporcional ao tamanho físico, refletindo a precisão de controle exigida." },
  { f: "O que a descoberta de 2023, publicada na Nature por Gordon e colegas, encontrou?", v: "A rede de ação somato-cognitiva (SCAN): regiões intercaladas entre as áreas clássicas de mão, pé e boca, com forte conectividade a redes de controle cognitivo geral, estado de alerta e regulação fisiológica." },
  { f: "Que tipo de dado essa descoberta de 2023 usou, e por que isso foi importante?", v: "Ressonância magnética funcional de amostragem densa (muitas sessões dos mesmos indivíduos), o que permite detectar padrões sutis invisíveis em estudos tradicionais com muitos indivíduos medidos poucas vezes." },
  { f: "O que o estudo de junho de 2026, também publicado na Nature, descobriu usando registro de neurônios individuais?", v: "Que cada zona amostrada do córtex motor contém informação sobre o corpo inteiro, organizada como um mosaico de representações sobrepostas, não como divisões exclusivas e limpas por parte do corpo." },
  { f: "As descobertas de 2023 e 2026 invalidam o trabalho original de Penfield?", v: "Não. Elas refinam, com tecnologia muito mais precisa, um achado básico que já era conhecido de forma aproximada, sem contradizer a desproporção cortical fundamental que Penfield documentou." },
  { f: "Por que o desenho clássico do homúnculo permaneceu como imagem de referência por quase noventa anos?", v: "Porque sua estrutura básica continua correta e é pedagogicamente poderosa, e porque testar a hipótese de uma organização mais entrelaçada exigia tecnologia de imagem e registro neural que só ficou disponível recentemente." },
  { f: "Qual é a relevância prática, além da curiosidade acadêmica, dessa revisão do mapa cortical?", v: "Interfaces cérebro-computador usadas por pessoas com paralisia dependem de mapas precisos do córtex motor para decodificar a intenção de movimento, então um modelo mais preciso tem implicações diretas para o projeto desses dispositivos." },
  { f: "O que ainda não está totalmente resolvido sobre a rede de ação somato-cognitiva e o modelo de mosaico?", v: "A extensão exata da rede, sua relação causal com controle motor voluntário versus regulação fisiológica automática, e até que ponto o modelo de mosaico se generaliza para outras regiões do córtex além da faixa motora primária." },
  { f: "Qual é a forma mais honesta de ensinar o homúnculo cortical hoje, segundo o documento?", v: "Usar a imagem clássica para transmitir a ideia central de desproporção cortical, mas qualificar explicitamente que o mapa real é mais parecido com um mosaico de zonas interligadas do que com um desenho único, limpo e contínuo." }
],

prova: [
  { camada: "nucleo",
    q: "O que o desenho clássico do homúnculo cortical representa?",
    alts: [
      "O tamanho físico real de cada parte do corpo humano.",
      "A área do córtex motor ou sensorial dedicada a cada parte do corpo, proporcional à precisão de controle exigida, não ao tamanho físico real.",
      "A quantidade de neurônios totais existentes em cada parte do corpo.",
      "Um mapa da evolução do corpo humano ao longo de milhões de anos."
    ],
    correta: 1,
    porque: "É por isso que mãos e lábios, que exigem controle muito fino e preciso, aparecem enormes no desenho, enquanto o tronco, que exige controle motor menos refinado, aparece minúsculo." },

  { camada: "nucleo",
    q: "Como Wilder Penfield coletou os dados originais para o mapeamento do córtex, nos anos 1930 e 1940?",
    alts: [
      "Usando ressonância magnética funcional em voluntários saudáveis.",
      "Estimulando eletricamente pontos do cérebro exposto de pacientes de epilepsia durante cirurgia, e anotando a resposta relatada.",
      "Analisando autópsias de cérebros de pessoas com diferentes tipos de lesão.",
      "Usando questionários de autoavaliação sobre habilidades motoras."
    ],
    correta: 1,
    porque: "O mapa clássico é uma síntese de centenas de pontos de estimulação elétrica direta, coletados durante cirurgias em que os pacientes precisavam estar conscientes por razões médicas." },

  { camada: "nucleo",
    q: "O que continua bem estabelecido hoje sobre a organização do corpo no córtex, sem disputa?",
    alts: [
      "Que cada parte do corpo tem exatamente a mesma quantidade de área cortical dedicada, sem nenhuma diferença.",
      "Que diferentes partes do corpo são representadas por diferentes regiões corticais, com área desproporcional ao tamanho físico, refletindo a precisão de controle exigida.",
      "Que o córtex motor não tem nenhuma relação com o controle do corpo.",
      "Que apenas a mão tem representação cortical, nenhuma outra parte do corpo."
    ],
    correta: 1,
    porque: "Esse princípio básico, estabelecido por Penfield e nunca contestado pelas pesquisas mais recentes, é a base do que continua sendo ensinado sobre o homúnculo cortical." },

  { camada: "aprofundamento",
    q: "O que a descoberta da rede de ação somato-cognitiva (SCAN), publicada por Gordon e colegas na Nature em 2023, encontrou?",
    alts: [
      "Que o córtex motor não existe e foi um erro de Penfield.",
      "Regiões intercaladas entre as áreas clássicas de mão, pé e boca, com forte conectividade a redes de controle cognitivo geral, estado de alerta e regulação fisiológica.",
      "Que apenas macacos e outros primatas têm representação cortical do corpo, não humanos.",
      "Que o mapa de Penfield estava invertido, com mãos representando pés e vice-versa."
    ],
    correta: 1,
    porque: "A SCAN não substitui as regiões de efetor específico do mapa clássico, mas revela zonas adicionais, intercaladas entre elas, ligadas a processos mais gerais de coordenação e regulação do corpo." },

  { camada: "aprofundamento",
    q: "Que tipo de técnica de neuroimagem foi essencial para a descoberta de 2023, e por que ela permitiu ver algo que estudos anteriores não viam?",
    alts: [
      "Tomografia computadorizada de raio-X, usada pela primeira vez em neurociência.",
      "Ressonância magnética funcional de amostragem densa, que estuda repetidamente os mesmos indivíduos em muitas sessões, permitindo detectar padrões sutis invisíveis em estudos tradicionais de grupo.",
      "Eletroencefalograma de superfície, sem nenhuma relação com ressonância magnética.",
      "Biópsias cerebrais realizadas post-mortem em doadores de órgãos."
    ],
    correta: 1,
    porque: "Amostragem densa aumenta muito a sensibilidade estatística para detectar padrões que ficariam obscurecidos numa amostra tradicional de muitas pessoas medidas poucas vezes cada uma." },

  { camada: "aprofundamento",
    q: "O que o estudo publicado na Nature em junho de 2026, usando registro de neurônios individuais, descobriu sobre a organização do córtex motor?",
    alts: [
      "Que cada zona do córtex motor controla exclusivamente uma única parte do corpo, sem nenhuma sobreposição.",
      "Que cada zona amostrada do córtex motor contém informação sobre o corpo inteiro, organizada como um mosaico de representações sobrepostas, embora a intensidade relativa ainda siga, de modo geral, o padrão clássico.",
      "Que o córtex motor não processa nenhuma informação relacionada a movimento voluntário.",
      "Que apenas pacientes com paralisia têm uma organização cortical em mosaico, diferente de pessoas sem lesão."
    ],
    correta: 1,
    porque: "O estudo, usando dados de eletrodos implantados em pacientes de ensaios de interface cérebro-computador, mostrou uma organização mais entrelaçada que o mapa clássico sugeria, sem eliminar completamente o padrão geral de desproporção por parte do corpo." },

  { camada: "aprofundamento",
    q: "Por que a metodologia original de Penfield, apesar de pioneira, deixava zonas cegas na resolução do mapa?",
    alts: [
      "Porque Penfield não tinha formação médica adequada para conduzir o estudo.",
      "Porque o mapa era construído ponto a ponto, em condições cirúrgicas, com número limitado de estimulações por paciente, resultando numa resolução espacial necessariamente grosseira comparada às técnicas atuais.",
      "Porque Penfield se recusou a publicar os dados brutos de seus experimentos.",
      "Porque todos os pacientes estudados por Penfield tinham o mesmo tipo exato de epilepsia."
    ],
    correta: 1,
    porque: "Detectar padrões sutis, como a rede de ação somato-cognitiva, exigia muito mais pontos de amostragem e maior sensibilidade estatística do que o método de estimulação cirúrgica direta permitia na época de Penfield." },

  { camada: "extensao",
    q: "Segundo o documento, por que o desenho clássico do homúnculo permaneceu como imagem de referência por quase noventa anos, mesmo com uma resolução hoje considerada grosseira?",
    alts: [
      "Porque nenhum outro neurocientista jamais tentou revisar ou testar o modelo original.",
      "Porque sua estrutura básica continua correta e é pedagogicamente poderosa, e porque testar uma organização mais entrelaçada exigia tecnologia de imagem e registro neural que só ficou disponível recentemente.",
      "Porque leis internacionais de direitos autorais protegeram o desenho original de qualquer modificação.",
      "Porque o desenho nunca foi realmente testado ou questionado por nenhuma pesquisa até 2023."
    ],
    correta: 1,
    porque: "Um modelo simplificado, mas parcialmente correto e didaticamente útil, tende a durar até que a tecnologia necessária para testá-lo com mais rigor apareça, e essa tecnologia só amadureceu recentemente." },

  { camada: "extensao",
    q: "O que o documento aponta como ainda não totalmente resolvido sobre a rede de ação somato-cognitiva e o modelo de mosaico de 2026?",
    alts: [
      "Se o córtex motor existe de fato, questão considerada ainda em aberto.",
      "A extensão exata da rede, sua relação causal com controle motor voluntário versus regulação fisiológica automática, e até que ponto o modelo de mosaico se generaliza para outras regiões do córtex.",
      "Se pacientes com paralisia têm cérebros fundamentalmente diferentes de pessoas sem lesão.",
      "Se Wilder Penfield realmente existiu como pesquisador histórico."
    ],
    correta: 1,
    porque: "Existe hoje uma correção empírica bem estabelecida ao mapa clássico, mas ainda não uma teoria unificada e completa que explique todos os aspectos da nova organização descoberta, com perguntas de pesquisa genuinamente em aberto." },

  { camada: "extensao",
    q: "Qual é a forma mais honesta de ensinar o homúnculo cortical hoje, segundo a conclusão do documento?",
    alts: [
      "Parar de usar o desenho clássico completamente, por ser cientificamente inválido.",
      "Usar a imagem clássica para transmitir a ideia central de desproporção cortical ligada à precisão de controle, qualificando explicitamente que a organização real é mais parecida com um mosaico entrelaçado do que com um mapa único e limpo.",
      "Ensinar apenas o modelo de 2026, ignorando completamente o trabalho histórico de Penfield.",
      "Evitar mencionar qualquer descoberta posterior a 1950, para não confundir estudantes iniciantes."
    ],
    correta: 1,
    porque: "Essa abordagem preserva o valor pedagógico real do desenho clássico (a ideia central de desproporção cortical) enquanto reconhece explicitamente as descobertas mais recentes sobre a organização entrelaçada do córtex motor." }
],

fontes: [
  { n: 1, tipo: "fonte primária", ref: "Penfield, W. &amp; Boldrey, E. 'Somatic motor and sensory representation in the cerebral cortex of man as studied by electrical stimulation'. <em>Brain</em> 60(4):389-443, 1937.", url: "https://academic.oup.com/brain/article-abstract/60/4/389/354655" },
  { n: 2, tipo: "fonte primária", ref: "Penfield, W. &amp; Rasmussen, T. <em>The Cerebral Cortex of Man: A Clinical Study of Localization of Function</em>. New York: Macmillan, 1950.", url: "https://archive.org/details/cerebralcortexof0000penf" },
  { n: 3, tipo: "fonte primária", ref: "Gordon, E. M. et al. 'A somato-cognitive action network alternates with effector regions in motor cortex'. <em>Nature</em> 617:351-359, 2023.", url: "https://www.nature.com/articles/s41586-023-05964-2" },
  { n: 4, tipo: "fonte primária", ref: "'A mosaic of whole-body representations on the human precentral gyrus'. <em>Nature</em>, 17 de junho de 2026.", url: "https://www.nature.com/articles/s41586-026-10653-x" },
  { n: 5, tipo: "reportagem científica", ref: "Nature News. 'Famous \"homunculus\" brain map redrawn to include complex movements'.", url: "https://www.nature.com/articles/d41586-023-01312-6" },
  { n: 6, tipo: "divulgação", ref: "Knowing Neurons. 'Redefining Movement: The SCAN Revolution'.", url: "https://knowingneurons.com/redefining_movement_scan/" },
  { n: 7, tipo: "revisão acadêmica", ref: "Diedrichsen Lab. Revisão aberta ('open review') do artigo de Gordon et al. (2023) sobre a rede de ação somato-cognitiva.", url: "https://www.diedrichsenlab.org/BrainDataScience/or_gordon2023/index.htm" },
  { n: 8, tipo: "reportagem", ref: "Tech Times. 'Motor Homunculus Overturned: Single-Neuron Data from Stanford Reshapes BCI Targeting', cobertura do estudo de 2026.", url: "https://www.techtimes.com/articles/318645/20260618/motor-homunculus-overturned-single-neuron-data-stanford-reshapes-bci-targeting.htm" },
  { n: 9, tipo: "fonte primária", ref: "Versão de preprint do estudo de mosaico de representações corporais no córtex motor humano, com detalhes metodológicos completos.", url: "https://www.biorxiv.org/content/10.1101/2024.09.14.613041v1.full" },
  { n: 10, tipo: "divulgação", ref: "Reportagem sobre implicações da revisão do mapa cortical para reabilitação e tratamento de lesões motoras.", url: "https://acupuncturesyracuse.com/why-the-homunculus-lied-rethinking-the-motor-cortex-and-what-it-means-for-injury-rehab/" },
  { n: 11, tipo: "fonte primária", ref: "Versão de acesso livre (PMC) do artigo de Gordon et al. (2023) sobre a rede de ação somato-cognitiva.", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10172144/" },
  { n: 12, tipo: "fonte primária", ref: "Registro do estudo de 2026 sobre representações em mosaico no giro pré-central humano na base PubMed.", url: "https://pubmed.ncbi.nlm.nih.gov/42310450/" },
  { n: 13, tipo: "enciclopédia", ref: "Wikipedia. Verbete 'Cortical homunculus', com histórico do desenho e revisões posteriores.", url: "https://en.wikipedia.org/wiki/Cortical_homunculus" },
  { n: 14, tipo: "reportagem científica", ref: "Sciety. Cobertura e avaliações públicas do preprint 'A mosaic of whole-body representations in human motor cortex'.", url: "https://sciety.org/articles/activity/10.1101/2024.09.14.613041" },
  { n: 15, tipo: "reportagem", ref: "Cobertura sobre reconstrução da organização somatotópica do trato corticoespinhal com técnicas modernas de tractografia.", url: "https://arxiv.org/pdf/2306.05623" }
]
};

if (typeof module !== "undefined") { module.exports = { CONTEUDOS }; }
