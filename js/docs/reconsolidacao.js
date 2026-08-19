CONTEUDOS["reconsolidacao"] = {
termo: "Reconsolidação da memória",
area: "Neurociência",
subtitulo: "Por décadas, o modelo padrão dizia que uma memória, uma vez consolidada, ficava estável para sempre. A descoberta de que lembrar reabre uma janela de instabilidade mudou esse quadro e abriu uma linha de tratamento real para transtorno de estresse pós-traumático. A ideia de 'apagar' memórias traumáticas com um remédio, porém, é bem mais limitada do que a manchete costuma sugerir.",
prerequisitos: [
  "Nenhum pré-requisito técnico. Basta aceitar que memórias precisam de um processo biológico de 'fixação' para se tornarem duradouras.",
  "Para o aprofundamento: familiaridade básica com a ideia de que emoções fortes, como o medo, envolvem uma estrutura cerebral chamada amígdala."
],
conexoes: [
  { termo: "Memória falsa e o paradigma DRM", relacao: "Ambos os temas mostram que a memória humana não é um arquivo estático: ela pode ser alterada tanto no momento da própria formação (memória falsa) quanto no momento em que é relembrada (reconsolidação)." },
  { termo: "Cérebro dividido: o experimento e a releitura", relacao: "Outro caso de neurociência em que um modelo clássico, bem estabelecido, foi revisado décadas depois por uma linha de pesquisa que trouxe mais nuance sem derrubar o achado original." },
  { termo: "Neuroplasticidade: alcance e limites", relacao: "A reconsolidação é mais um exemplo de que estruturas cerebrais tidas como fixas (aqui, uma memória já consolidada) são, na prática, mais mutáveis do que a intuição sugere, mas dentro de limites reais." },
  { termo: "Crise de replicação", relacao: "A distância entre a manchete popular ('remédio apaga memórias') e o resultado real dos ensaios clínicos (redução do componente emocional, não da lembrança factual) é um exercício de leitura cuidadosa de evidência." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">O modelo clássico de memória, dominante por boa parte do século 20, descrevia um processo em duas etapas: uma memória nova é frágil e instável logo depois de formada, mas, em algumas horas, passa por um processo chamado <strong>consolidação</strong>, que a torna estável e duradoura, resistente a interferência. Uma vez consolidada, a ideia era que essa memória permanecia fixa, como um arquivo salvo, disponível para ser lida quantas vezes fosse necessário sem que a leitura em si a alterasse.</p>

<p>Em 2000, um estudo com ratos, conduzido por Karim Nader, Glenn Schafe e Joseph LeDoux, desafiou diretamente essa ideia.<sup class="cit"><a href="#f1">1</a></sup> Os pesquisadores treinaram ratos a associar um som a um choque leve (uma memória de medo clássica), esperaram a memória se consolidar por completo, e depois reativaram essa memória tocando o som de novo. Imediatamente após essa reativação, injetaram uma substância que bloqueia a síntese de proteínas na amígdala (a região do cérebro central para processamento de medo). O resultado: a memória de medo, mesmo já consolidada havia dias, praticamente desaparecia.<sup class="cit"><a href="#f1">1</a></sup> Se o mesmo bloqueio fosse feito sem reativar a memória primeiro, nada acontecia, ela permanecia intacta.</p>

<h3>O que isso revela: lembrar reabre uma janela</h3>

<p>A interpretação foi que o simples ato de lembrar não é uma leitura neutra de um arquivo salvo. Ele torna a memória temporariamente instável de novo, exigindo um novo processo de "re-fixação", chamado <strong>reconsolidação</strong>, para permanecer estável. Durante essa janela de instabilidade, que dura só algumas horas, a memória fica vulnerável a ser enfraquecida, fortalecida ou mesmo alterada em seu conteúdo, antes de "travar" de novo.<sup class="cit"><a href="#f1">1</a></sup></p>

<div class="marca consenso">
<span class="rot">O que é bem estabelecido</span>
<p>Que memórias, incluindo memórias de medo bem consolidadas, entram numa janela temporária de instabilidade quando são reativadas, e que intervenções farmacológicas ou comportamentais aplicadas durante essa janela específica podem enfraquecer a memória de um jeito que a mesma intervenção, aplicada sem reativação prévia, não consegue, é um achado bem replicado desde 2000, tanto em animais quanto, com adaptações, em humanos.</p>
</div>

<h3>Da bancada de laboratório ao consultório</h3>

<p>Essa descoberta abriu uma linha de pesquisa clínica real: em vez de bloquear totalmente a síntese de proteínas (algo inviável e perigoso em humanos), pesquisadores testaram um remédio já aprovado e seguro, o propranolol (um beta-bloqueador usado normalmente para pressão alta e ansiedade), administrado logo antes de a pessoa reativar deliberadamente uma memória traumática, em sessões terapêuticas estruturadas. A ideia: interferir especificamente na reconsolidação da carga emocional daquela memória, sem apagar o conteúdo factual dela.<sup class="cit"><a href="#f4">4</a></sup></p>

<div class="marca controverso">
<span class="rot">O que a mídia costuma exagerar</span>
<p>Manchetes sobre esse tipo de tratamento costumam usar a expressão "remédio que apaga memórias". Isso é impreciso de um jeito importante: as pessoas tratadas continuam lembrando dos fatos do que aconteceu. O que muda, segundo os próprios pesquisadores da área, é a intensidade da resposta emocional e fisiológica associada à lembrança (o medo, a angústia, os sintomas de ansiedade ao recordar), não a existência da lembrança factual em si.<sup class="cit"><a href="#f5">5</a></sup></p>
</div>
` },

aprofundamento: { minutos: 30, html: `
<h3>O desenho experimental original, com mais detalhe</h3>

<p>Nader, Schafe e LeDoux usaram o chamado condicionamento de medo pavloviano: ratos aprendem a associar um som neutro a um choque elétrico leve, e passam a "congelar" (parar de se mover, uma resposta de medo mensurável) só de ouvir o som, mesmo sem o choque. Depois de a memória estar consolidada, os pesquisadores injetavam anisomicina, um inibidor de síntese de proteínas, diretamente na amígdala basolateral, tanto em ratos que tinham acabado de ouvir o som de novo (reativação) quanto em ratos que não tinham. Só o primeiro grupo perdeu a resposta de medo condicionada.<sup class="cit"><a href="#f1">1</a></sup> Isso isolou, com bastante precisão, que era a combinação específica de reativação mais bloqueio de síntese proteica, e não qualquer um dos dois fatores isoladamente, que interferia na memória.</p>

<h3>Do bloqueio total de proteínas ao propranolol em humanos</h3>

<p>Nenhum inibidor de síntese proteica como o usado em ratos é seguro para uso em pessoas. A adaptação clínica usa o propranolol, que age num sistema diferente, mas relacionado: bloqueia receptores adrenérgicos envolvidos na consolidação (e reconsolidação) da carga emocional de memórias, um mecanismo já conhecido desde estudos mais antigos sobre como a adrenalina fortalece memórias emocionalmente intensas no momento em que são formadas.</p>

<p>Alain Brunet e colegas conduziram um ensaio clínico randomizado, duplo-cego e controlado por placebo, com 60 adultos com transtorno de estresse pós-traumático de longa duração, publicado no <em>American Journal of Psychiatry</em> em 2018.<sup class="cit"><a href="#f2">2</a></sup> Os participantes tomavam propranolol ou placebo cerca de 90 minutos antes de uma sessão semanal de reativação da memória traumática, por seis semanas seguidas. O grupo tratado com propranolol apresentou redução estatisticamente significativa nos sintomas de TEPT, medidos por uma escala clínica padronizada, comparado ao grupo placebo.<sup class="cit"><a href="#f2">2</a></sup></p>

<div class="tabela-env">
<table>
<thead><tr><th>Estudo</th><th>Método</th><th>Achado</th></tr></thead>
<tbody>
<tr><td>Nader, Schafe &amp; LeDoux (2000)</td><td>Bloqueio de síntese proteica na amígdala de ratos, após reativação de memória de medo</td><td>Memória de medo consolidada praticamente desapareceu, mas só quando reativada antes do bloqueio</td></tr>
<tr><td>Brunet et al. (2018)</td><td>Ensaio clínico randomizado, propranolol antes de reativação de memória traumática, 6 sessões semanais</td><td>Redução estatisticamente significativa de sintomas de TEPT, comparado a placebo</td></tr>
<tr><td>Meta-análises subsequentes</td><td>Agregação de múltiplos ensaios em amostras clínicas e saudáveis</td><td>Efeito real, mas de magnitude variável entre estudos, dependente de protocolo e momento exato da administração</td></tr>
</tbody>
</table>
</div>

<h3>O que o propranolol não faz</h3>

<p>É importante separar dois componentes de uma memória traumática: o conteúdo factual (o que aconteceu) e a carga emocional associada (o quanto lembrar disso provoca sofrimento físico e psicológico intenso). A evidência disponível indica que o propranolol, nesse protocolo, afeta principalmente a segunda, não a primeira: pacientes tratados continuam sabendo o que aconteceu, mas relatam menos sofrimento fisiológico ao lembrar.<sup class="cit"><a href="#f5">5</a></sup> Além disso, o efeito parece ser específico à memória reativada durante o tratamento, não uma supressão emocional geral que afetaria outras memórias ou a capacidade de sentir medo em novas situações.<sup class="cit"><a href="#f5">5</a></sup></p>
` },

extensao: { minutos: 60, html: `
<h3>A magnitude do efeito, com mais cautela</h3>

<p>Meta-análises que agregam múltiplos ensaios de bloqueio farmacológico de reconsolidação com propranolol, tanto em amostras clínicas (pacientes com TEPT) quanto em amostras saudáveis (memórias emocionais induzidas em laboratório), encontram um efeito real, mas nem sempre do mesmo tamanho, e sensível a detalhes do protocolo: o momento exato da administração do remédio em relação à reativação da memória, a intensidade e a forma como a memória é reativada, e características individuais dos participantes.<sup class="cit"><a href="#f3">3</a></sup> Alguns estudos independentes não conseguiram replicar efeitos tão fortes quanto os relatados nos primeiros trabalhos da área, um padrão de "encolhimento do efeito em réplicas" comum em muitas linhas de pesquisa biomédica, e não motivo, por si só, para descartar o fenômeno.</p>

<div class="marca emergente">
<span class="rot">Onde a pesquisa está hoje</span>
<p>O consenso que vem se formando é que o bloqueio de reconsolidação com propranolol é uma ferramenta real, com efeito modesto a moderado, mais confiável quando o protocolo de reativação e administração é seguido com precisão, e não uma "borracha de memórias" que funciona de forma garantida e ampla. Isso é consistente com o padrão geral da neurociência translacional: um mecanismo robusto em animais de laboratório, com controle experimental total, tende a produzir efeitos reais, porém mais variáveis e sensíveis a detalhes de protocolo, quando adaptado para humanos em condições clínicas reais.</p>
</div>

<h3>O debate ético: apagar sofrimento é sempre desejável?</h3>

<p>A possibilidade, mesmo que limitada, de reduzir farmacologicamente a carga emocional de uma memória gerou debate filosófico e ético real, discutido inclusive em publicações de associações médicas.<sup class="cit"><a href="#f6">6</a></sup> Argumentos contrários apontam que memórias, mesmo dolorosas, fazem parte da identidade e da história de uma pessoa, e que alterá-las farmacologicamente levanta questões sobre autenticidade e sobre o direito (ou dever) de lembrar, especialmente em contextos de trauma coletivo, como guerras ou genocídios, onde memória e testemunho têm também um papel social e histórico, não só individual. Argumentos a favor enfatizam o sofrimento real e incapacitante de quem vive com TEPT crônico, e o princípio médico geral de aliviar sofrimento quando isso é possível com segurança.</p>

<h3>Uma preocupação recorrente, e por que ela é mais limitada do que parece</h3>

<p>Uma pergunta levantada com frequência é se esse tipo de tratamento poderia ser usado de forma maliciosa, por exemplo, por alguém tentando reduzir a culpa associada à memória de um crime cometido. Pesquisadores que analisaram essa possibilidade com cuidado apontam limites práticos importantes: o protocolo exige reativação deliberada e repetida da memória específica sob supervisão clínica, ao longo de várias sessões, o efeito é predominantemente sobre a resposta emocional (não elimina o conhecimento factual, que continuaria disponível para investigação), e a literatura não sustenta a ideia de um "apagamento" rápido, discreto e sob demanda que corresponderia ao cenário de uso indevido temido.<sup class="cit"><a href="#f7">7</a></sup></p>

<h3>Fechando o quadro</h3>

<p>A reconsolidação da memória é um caso raro em neurociência: uma descoberta básica de laboratório, com um mecanismo bem caracterizado a partir de 2000, que efetivamente virou um tratamento real testado em ensaios clínicos randomizados menos de duas décadas depois. Isso não é comum na pesquisa biomédica, onde a maioria dos achados de bancada nunca chega perto de um protocolo clínico validado. Ao mesmo tempo, o caso ilustra bem por que a versão de manchete ("cientistas descobrem remédio que apaga memórias traumáticas") simplifica a ponto de distorcer: o que existe é uma ferramenta real, de efeito modesto a moderado, específica para a carga emocional de uma memória reativada sob protocolo clínico controlado, não um apagador universal e imediato de lembranças.</p>
` }
},

sintese: {
  definicoes: [
    { termo: "Consolidação da memória", def: "Processo biológico, que leva algumas horas, pelo qual uma memória recém-formada se torna estável e resistente a interferência, num modelo clássico anterior à descoberta da reconsolidação." },
    { termo: "Reconsolidação", def: "Processo pelo qual uma memória já consolidada, ao ser reativada (lembrada), entra numa janela temporária de instabilidade e precisa passar por uma nova 're-fixação' para permanecer estável, ficando vulnerável a alteração durante essa janela." },
    { termo: "Bloqueio de reconsolidação", def: "Intervenção farmacológica ou comportamental aplicada durante a janela de instabilidade que se segue à reativação de uma memória, capaz de enfraquecer especificamente essa memória de um jeito que a mesma intervenção, sem reativação prévia, não consegue." },
    { termo: "Propranolol", def: "Medicamento beta-bloqueador, normalmente usado para pressão alta e ansiedade, que em protocolos experimentais é administrado antes da reativação de uma memória traumática para interferir na reconsolidação de sua carga emocional." },
    { termo: "Transtorno de estresse pós-traumático (TEPT)", def: "Condição psiquiátrica caracterizada por sintomas persistentes de sofrimento intenso ao relembrar um evento traumático, alvo principal dos ensaios clínicos de bloqueio de reconsolidação com propranolol." }
  ],
  lembrar: [
    "Karim Nader, Glenn Schafe e Joseph LeDoux (2000) mostraram que bloquear a síntese de proteínas na amígdala de ratos, logo após a reativação de uma memória de medo já consolidada, praticamente apagava essa memória, algo que o mesmo bloqueio, sem reativação prévia, não fazia.",
    "Isso revisou o modelo clássico de que memórias consolidadas ficam fixas para sempre: lembrar reabre uma janela temporária de instabilidade, exigindo um novo processo de fixação (reconsolidação).",
    "A adaptação clínica em humanos usa o propranolol, um remédio já aprovado e seguro, administrado antes de sessões de reativação deliberada de uma memória traumática.",
    "Alain Brunet e colegas (2018) publicaram um ensaio clínico randomizado com 60 pacientes de TEPT, mostrando redução estatisticamente significativa de sintomas com esse protocolo, comparado a placebo.",
    "O tratamento não apaga o conteúdo factual da memória: pacientes continuam lembrando o que aconteceu, mas relatam menos sofrimento fisiológico e emocional ao recordar.",
    "Meta-análises encontram um efeito real, mas de magnitude variável entre estudos, sensível a detalhes do protocolo de administração e reativação.",
    "O debate ético em torno desse tipo de tratamento envolve perguntas sobre identidade, autenticidade da memória e o papel social de lembrar eventos traumáticos, especialmente coletivos."
  ],
  confusoes: [
    { erro: "O propranolol 'apaga' memórias traumáticas por completo", correcao: "Pacientes tratados continuam lembrando os fatos do que aconteceu. O que a evidência mostra é redução da carga emocional e da resposta fisiológica de sofrimento associada à lembrança, não eliminação do conteúdo factual." },
    { erro: "O modelo clássico de consolidação da memória (uma vez fixada, fica estável para sempre) foi completamente refutado", correcao: "A descoberta da reconsolidação revisou e complementou o modelo clássico, mostrando que a estabilidade não é permanente e incondicional, mas o conceito básico de um processo de fixação continua válido, só que agora entendido como algo que pode se repetir a cada reativação." },
    { erro: "Qualquer pessoa poderia usar esse tratamento discretamente para apagar a culpa de um crime cometido", correcao: "O protocolo exige reativação deliberada e repetida da memória sob supervisão clínica, ao longo de várias sessões, afeta predominantemente a resposta emocional (não o conhecimento factual), e não corresponde a um apagamento rápido e sob demanda." },
    { erro: "O efeito do bloqueio de reconsolidação em humanos é tão forte e consistente quanto o observado nos experimentos originais com ratos", correcao: "Meta-análises mostram efeito real, porém de magnitude variável entre estudos em humanos, sensível a detalhes de protocolo, um padrão comum quando um mecanismo de laboratório é adaptado para condições clínicas reais." },
    { erro: "A pesquisa sobre reconsolidação é puramente teórica, sem aplicação clínica real até hoje", correcao: "Ensaios clínicos randomizados, como o de Brunet e colegas (2018), já testaram esse mecanismo diretamente em pacientes com TEPT, com resultados publicados em periódicos médicos de referência." }
  ],
  numeros: [
    "Nader, K., Schafe, G. E. &amp; LeDoux, J. E. (2000), Nature 406:722-726: descoberta original da reconsolidação em memórias de medo de ratos.",
    "Brunet, A. et al. (2018), American Journal of Psychiatry 175(5):427-433: ensaio clínico randomizado com 60 adultos com TEPT, 6 semanas de tratamento semanal com propranolol antes de reativação da memória traumática.",
    "O protocolo de Brunet e colegas administrava propranolol cerca de 90 minutos antes de cada sessão de reativação da memória traumática.",
    "Meta-análises sobre bloqueio de reconsolidação com propranolol agregam dados de amostras clínicas e saudáveis, encontrando efeito real, mas de magnitude variável entre estudos."
  ]
},

flashcards: [
  { f: "Qual era o modelo clássico sobre estabilidade de memórias, antes da descoberta da reconsolidação?", v: "Que uma memória, depois de passar pelo processo de consolidação (algumas horas após ser formada), permanecia estável e fixa para sempre, disponível para ser 'lida' sem que isso a alterasse." },
  { f: "O que Nader, Schafe e LeDoux descobriram em 2000?", v: "Que bloquear a síntese de proteínas na amígdala de ratos, logo após a reativação de uma memória de medo já consolidada, praticamente apagava essa memória, algo que o mesmo bloqueio, sem reativação prévia, não fazia." },
  { f: "O que é reconsolidação, em termos simples?", v: "O processo pelo qual uma memória já consolidada, ao ser reativada (lembrada), entra numa janela temporária de instabilidade e precisa de uma nova 'fixação' para permanecer estável." },
  { f: "Que remédio é usado na adaptação clínica desse mecanismo em humanos, e por quê?", v: "O propranolol, um beta-bloqueador já aprovado e seguro, porque bloqueadores de síntese proteica como os usados em ratos não são seguros para uso em pessoas." },
  { f: "O que Brunet e colegas encontraram em seu ensaio clínico randomizado de 2018, publicado no American Journal of Psychiatry?", v: "Que 60 pacientes com TEPT, tratados com propranolol antes de sessões semanais de reativação da memória traumática por 6 semanas, tiveram redução estatisticamente significativa de sintomas, comparados a placebo." },
  { f: "O propranolol, nesse protocolo, apaga o conteúdo factual da memória traumática?", v: "Não. Pacientes continuam lembrando o que aconteceu. O que muda é a intensidade da resposta emocional e fisiológica de sofrimento ao recordar, não a existência da lembrança factual." },
  { f: "O que meta-análises mostram sobre a magnitude do efeito do bloqueio de reconsolidação em humanos?", v: "Um efeito real, mas de magnitude variável entre estudos, sensível a detalhes do protocolo, como o momento exato da administração do remédio em relação à reativação da memória." },
  { f: "Por que a preocupação de que criminosos possam usar esse tratamento para apagar a culpa de um crime é considerada exagerada pela literatura?", v: "Porque o protocolo exige reativação deliberada e repetida da memória sob supervisão clínica, afeta principalmente a resposta emocional (não o conhecimento factual, que continuaria disponível), e não corresponde a um apagamento rápido e discreto." },
  { f: "Quais são os dois lados do debate ético sobre bloqueio farmacológico de reconsolidação?", v: "Contrários apontam que memórias, mesmo dolorosas, fazem parte da identidade e têm papel social (em trauma coletivo, por exemplo). A favor enfatizam o sofrimento real de quem vive com TEPT crônico e o princípio médico de aliviar sofrimento com segurança." },
  { f: "Por que o caso da reconsolidação é considerado incomum na pesquisa biomédica?", v: "Porque uma descoberta básica de laboratório, caracterizada a partir de 2000, virou um tratamento testado em ensaios clínicos randomizados em humanos em menos de duas décadas, algo raro comparado à maioria dos achados de bancada." },
  { f: "Qual é a distinção mais importante para não exagerar o alcance desse tratamento?", v: "Separar o conteúdo factual de uma memória (o que aconteceu, que permanece) da sua carga emocional associada (o sofrimento ao lembrar, que pode ser reduzido pelo tratamento)." },
  { f: "O efeito do bloqueio de reconsolidação parece ser geral (afetando várias memórias e a capacidade de sentir medo em novas situações) ou específico?", v: "Específico à memória reativada durante o tratamento. Não há evidência de uma supressão emocional geral que afetaria outras memórias ou reações de medo em situações novas." }
],

prova: [
  { camada: "nucleo",
    q: "O que o modelo clássico de consolidação da memória, anterior à descoberta da reconsolidação, previa?",
    alts: [
      "Que memórias nunca se tornam estáveis, permanecendo frágeis para sempre.",
      "Que uma memória, depois de consolidada, permanece estável e fixa, disponível para ser lembrada sem que isso a altere.",
      "Que apenas memórias de medo passam por consolidação, nenhum outro tipo de memória.",
      "Que memórias são apagadas automaticamente após um ano, independente de qualquer intervenção."
    ],
    correta: 1,
    porque: "Esse era o modelo dominante antes de 2000: uma vez fixada, a memória seria estável, como um arquivo salvo que poderia ser lido repetidamente sem se alterar." },

  { camada: "nucleo",
    q: "O que Nader, Schafe e LeDoux descobriram em seu experimento com ratos, publicado em 2000?",
    alts: [
      "Que memórias nunca podem ser alteradas depois de formadas, sob nenhuma circunstância.",
      "Que bloquear a síntese de proteínas na amígdala, logo após reativar uma memória de medo já consolidada, praticamente apagava essa memória.",
      "Que ratos não têm capacidade nenhuma de formar memórias de medo.",
      "Que a amígdala não tem nenhuma relação com processamento de medo."
    ],
    correta: 1,
    porque: "O achado central é que a reativação (lembrar) torna a memória temporariamente vulnerável a interferência, algo que o bloqueio de síntese proteica sem reativação prévia não conseguia produzir." },

  { camada: "nucleo",
    q: "O que o propranolol, usado em protocolos clínicos de bloqueio de reconsolidação, realmente afeta, segundo a evidência disponível?",
    alts: [
      "Apaga completamente o conhecimento factual da memória traumática.",
      "Reduz principalmente a intensidade da resposta emocional e fisiológica de sofrimento associada à lembrança, sem eliminar o conteúdo factual.",
      "Não tem nenhum efeito mensurável sobre memórias traumáticas.",
      "Apaga todas as memórias da pessoa, não apenas a memória traumática específica."
    ],
    correta: 1,
    porque: "Pacientes tratados continuam sabendo o que aconteceu; o que muda é a carga emocional associada à lembrança, uma distinção central para entender corretamente o tratamento." },

  { camada: "aprofundamento",
    q: "No experimento original de Nader, Schafe e LeDoux, o que aconteceu com ratos que receberam o bloqueador de síntese proteica sem reativação prévia da memória?",
    alts: [
      "A memória de medo também foi apagada, exatamente como no grupo com reativação.",
      "Nada aconteceu: a memória permaneceu intacta, mostrando que o efeito depende especificamente da combinação de reativação mais bloqueio.",
      "Os ratos desenvolveram uma memória de medo ainda mais forte.",
      "Os ratos perderam completamente a capacidade de formar novas memórias."
    ],
    correta: 1,
    porque: "Esse resultado de controle foi essencial para isolar que era a reativação, e não o bloqueio de síntese proteica isoladamente, que criava a janela de vulnerabilidade da memória." },

  { camada: "aprofundamento",
    q: "Qual foi o desenho do ensaio clínico de Brunet e colegas, publicado no American Journal of Psychiatry em 2018?",
    alts: [
      "Um estudo observacional sem grupo controle, com relatos espontâneos de pacientes.",
      "Um ensaio randomizado, duplo-cego e controlado por placebo, com 60 adultos com TEPT, recebendo propranolol ou placebo antes de sessões semanais de reativação da memória traumática por 6 semanas.",
      "Um experimento realizado exclusivamente em animais, sem nenhum participante humano.",
      "Um estudo de caso único, com apenas um paciente acompanhado por vários anos."
    ],
    correta: 1,
    porque: "O rigor metodológico desse desenho (randomização, duplo-cego, placebo) é o que permite atribuir a redução de sintomas observada especificamente ao propranolol, e não a outros fatores." },

  { camada: "aprofundamento",
    q: "O que meta-análises sobre bloqueio de reconsolidação com propranolol em humanos mostram sobre a magnitude do efeito?",
    alts: [
      "Um efeito nulo, sem nenhuma diferença significativa entre tratamento e placebo em qualquer estudo.",
      "Um efeito real, mas de magnitude variável entre estudos, sensível a detalhes do protocolo, como o momento exato da administração em relação à reativação.",
      "Um efeito idêntico ao observado nos experimentos originais com ratos, sem nenhuma variação entre estudos.",
      "Um efeito que piora os sintomas de TEPT em praticamente todos os casos estudados."
    ],
    correta: 1,
    porque: "Esse padrão de efeito real, porém variável e sensível a protocolo, é comum quando um mecanismo bem controlado em laboratório é adaptado para condições clínicas reais em humanos." },

  { camada: "aprofundamento",
    q: "Por que pesquisadores argumentam que a preocupação de uso indevido do tratamento (por exemplo, para apagar a culpa de um crime) é mais limitada do que parece?",
    alts: [
      "Porque o tratamento nunca funciona em nenhuma circunstância, tornando a preocupação irrelevante.",
      "Porque o protocolo exige reativação deliberada e repetida da memória sob supervisão clínica ao longo de várias sessões, e afeta predominantemente a resposta emocional, não o conhecimento factual, que continuaria disponível.",
      "Porque o propranolol só pode ser administrado por policiais, nunca por médicos ou psicólogos.",
      "Porque não existe nenhuma memória associada a crimes que possa ser afetada por esse tipo de tratamento."
    ],
    correta: 1,
    porque: "A distância entre o cenário temido (apagamento rápido e discreto sob demanda) e o que o protocolo real exige (várias sessões supervisionadas, efeito predominantemente emocional) é significativa." },

  { camada: "extensao",
    q: "Segundo o documento, o que caracteriza a leitura mais atual e cautelosa sobre o bloqueio de reconsolidação com propranolol?",
    alts: [
      "Que é uma 'borracha de memórias' que funciona de forma garantida e ampla em qualquer paciente.",
      "Que é uma ferramenta real, com efeito modesto a moderado, mais confiável quando o protocolo de reativação e administração é seguido com precisão, não um apagador universal e imediato de lembranças.",
      "Que o efeito nunca foi replicado em nenhum estudo independente após o trabalho original de Brunet.",
      "Que o tratamento é considerado ineficaz por toda a comunidade científica atual."
    ],
    correta: 1,
    porque: "Essa leitura equilibrada reconhece tanto a realidade do efeito quanto suas limitações práticas, evitando tanto o exagero da manchete popular quanto o descarte completo do fenômeno." },

  { camada: "extensao",
    q: "Quais são os principais argumentos do debate ético sobre bloqueio farmacológico de reconsolidação, segundo o documento?",
    alts: [
      "Não existe nenhum debate ético sobre o tema, sendo uma questão puramente técnica.",
      "Contrários apontam que memórias, mesmo dolorosas, fazem parte da identidade e têm papel social em trauma coletivo; a favor enfatizam o sofrimento real de quem vive com TEPT crônico e o princípio médico de aliviar sofrimento com segurança.",
      "O debate se resume exclusivamente ao custo financeiro do tratamento para sistemas de saúde pública.",
      "Todos os especialistas concordam que o tratamento deveria ser proibido em qualquer circunstância."
    ],
    correta: 1,
    porque: "Esse debate reflete uma tensão real entre valorizar a autenticidade e o papel social da memória, especialmente em contextos coletivos, e reconhecer o sofrimento genuíno que motiva a busca por tratamento." },

  { camada: "extensao",
    q: "Por que o documento descreve o caso da reconsolidação como incomum na pesquisa biomédica?",
    alts: [
      "Porque é o único mecanismo de memória já estudado em toda a história da neurociência.",
      "Porque uma descoberta básica de laboratório com ratos, caracterizada a partir de 2000, virou um tratamento testado em ensaios clínicos randomizados em humanos em menos de duas décadas, um caminho raramente percorrido por completo na pesquisa biomédica.",
      "Porque nenhum outro mecanismo cerebral jamais foi replicado em animais e depois em humanos.",
      "Porque a descoberta foi feita sem nenhum financiamento público ou privado."
    ],
    correta: 1,
    porque: "A maioria dos achados básicos de laboratório nunca chega perto de um protocolo clínico validado por ensaio randomizado, o que torna o percurso da reconsolidação, de rato a ensaio clínico humano, particularmente notável." }
],

fontes: [
  { n: 1, tipo: "fonte primária", ref: "Nader, K., Schafe, G. E. &amp; LeDoux, J. E. 'Fear memories require protein synthesis in the amygdala for reconsolidation after retrieval'. <em>Nature</em> 406:722-726, 2000.", url: "https://www.nature.com/articles/35021052" },
  { n: 2, tipo: "fonte primária", ref: "Brunet, A., Saumier, D., Liu, A., Streiner, D. L., Tremblay, J. &amp; Pitman, R. K. 'Reduction of PTSD Symptoms With Pre-Reactivation Propranolol Therapy: A Randomized Controlled Trial'. <em>American Journal of Psychiatry</em> 175(5):427-433, 2018.", url: "https://psychiatryonline.org/ajp/doi/10.1176/appi.ajp.2017.17050481" },
  { n: 3, tipo: "meta-análise", ref: "'Impairing memory reconsolidation with propranolol in healthy and clinical samples: a meta-analysis'. <em>Journal of Psychiatry &amp; Neuroscience</em>.", url: "https://cdnsciencepub.com/doi/full/10.1503/jpn.210057" },
  { n: 4, tipo: "revisão acadêmica", ref: "Nader, K. &amp; Einarsson, E. Ö. 'The labile nature of consolidation theory'. <em>Nature Reviews Neuroscience</em>.", url: "https://www.nature.com/articles/35044580" },
  { n: 5, tipo: "reportagem científica", ref: "National Geographic. 'More on propranolol, the drug that doesn't erase memories', esclarecendo os limites reais do tratamento.", url: "https://www.nationalgeographic.com/science/article/more-on-propranolol-the-drug-that-doesnt-erase-memories" },
  { n: 6, tipo: "debate ético", ref: "American Medical Association Journal of Ethics. 'Preventing Bad Memories: Is It Ethical?'.", url: "https://journalofethics.ama-assn.org/article/preventing-bad-memories-it-ethical/2008-11" },
  { n: 7, tipo: "crítica", ref: "Elsey, J. &amp; Kindt, M. 'Can criminals use propranolol to erase crime-related memories? A response to McGorrery (2017)'. <em>Psychiatry, Psychology and Law</em>.", url: "https://journals.sagepub.com/doi/full/10.1177/1037969X18765204" },
  { n: 8, tipo: "fonte primária", ref: "Ensaio clínico randomizado sobre reativação de memória traumática com e sem propranolol, e sintomas comórbidos de depressão maior.", url: "https://www.nature.com/articles/s41386-021-00984-w" },
  { n: 9, tipo: "reportagem", ref: "National Geographic. 'Beta-blocker drug erases the emotion of fearful memories', cobertura acessível sobre o mecanismo do propranolol.", url: "https://www.nationalgeographic.com/science/article/beta-blocker-drug-erases-the-emotion-of-fearful-memories" },
  { n: 10, tipo: "divulgação", ref: "The Science Survey. 'The Drug That May Forever Change Fear: Propranolol'.", url: "https://thesciencesurvey.com/news/2024/06/20/the-drug-that-may-forever-change-fear-propranolol/" },
  { n: 11, tipo: "fonte primária", ref: "Ensaio clínico piloto comparando terapia de reconsolidação a paroxetina para estresse traumático em contexto de baixa renda, no Nepal.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC8417983/" },
  { n: 12, tipo: "revisão acadêmica", ref: "Journal of Neuroscience. 'Characterization of Fear Memory Reconsolidation', estudo de acompanhamento sobre os parâmetros temporais do processo.", url: "https://www.jneurosci.org/content/24/42/9269" },
  { n: 13, tipo: "fonte primária", ref: "Estudo sobre reconsolidação seletiva: memórias diretamente reativadas, mas não memórias associadas indiretamente, sofrem reconsolidação na amígdala.", url: "https://www.pnas.org/doi/10.1073/pnas.0507168103" },
  { n: 14, tipo: "reportagem", ref: "Psychiatric News (American Psychiatric Association). 'Propranolol Combined With Reactivation Therapy May Reduce PTSD Symptoms', cobertura do ensaio de Brunet e colegas para a comunidade psiquiátrica.", url: "https://psychiatryonline.org/doi/10.1176/appi.pn.2018.pp2a2" },
  { n: 15, tipo: "enciclopédia", ref: "MDPI Encyclopedia. Verbete sobre o uso de propranolol em transtorno de estresse pós-traumático, com resumo de mecanismos e evidência clínica.", url: "https://encyclopedia.pub/entry/26909" }
]
};

if (typeof module !== "undefined") { module.exports = { CONTEUDOS }; }
