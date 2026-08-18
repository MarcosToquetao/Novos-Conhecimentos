CONTEUDOS["linguas-de-sinais"] = {
termo: "Línguas de sinais",
area: "Linguística",
subtitulo: "Não é mímica, não é uma tradução gestual do português e não existe uma única língua de sinais mundial. É um dos casos mais bem documentados de que a linguagem humana não precisa de som para ter gramática completa.",
prerequisitos: [
  "Nenhum pré-requisito técnico. O texto explica cada termo de linguística na primeira vez que ele aparece.",
  "Ajuda ter em mente a distinção comum entre uma língua falada e sua forma escrita, porque a confusão equivalente aparece aqui entre língua de sinais e língua falada soletrada com as mãos."
],
conexoes: [
  { termo: "Sapir-Whorf", relacao: "Línguas de sinais são um bom teste de separação entre linguagem e modalidade: se a estrutura gramatical de línguas de sinais e faladas converge em tantos pontos apesar do canal físico completamente diferente, isso restringe quanto a forma do canal pode moldar o pensamento." },
  { termo: "Período crítico de aquisição de linguagem", relacao: "Crianças surdas sem exposição precoce a nenhuma língua, sinalizada ou falada, são o grupo humano que mais diretamente testa se existe uma janela biológica para adquirir uma primeira língua." },
  { termo: "Neuroplasticidade e localização de função", relacao: "Achar as mesmas áreas clássicas de linguagem ativas para uma língua sem som obriga a perguntar o que exatamente essas áreas processam: som, ou estrutura linguística abstrata." }
],

camadas: {

nucleo: { minutos: 15, html: `
<p class="abre">Em 1960, um professor de inglês chamado William Stokoe publicou um pequeno estudo sobre a língua de sinais americana (American Sign Language, ASL) que quase ninguém na linguística notou na hora.<sup class="cit"><a href="#f1">1</a></sup> Stokoe dava aula numa universidade para surdos, a Gallaudet, e reparou em algo que os próprios colegas ouvintes da instituição não levavam a sério: os sinais que os alunos trocavam entre si não eram gestos soltos imitando objetos. Eles se combinavam segundo regras. Trocar uma peça da combinação trocava o significado de um jeito sistemático, do mesmo modo que trocar um fonema muda uma palavra falada. Stokoe tratou a ASL como língua e descreveu sua estrutura interna. Hoje isso é tratado como o início da linguística das línguas de sinais como campo científico.</p>

<p>A tese que esse campo estabeleceu, e que hoje é consenso sólido entre linguistas, pode ser resumida assim: línguas de sinais são línguas naturais completas. Têm som zero, mas têm tudo o que uma língua falada tem: um inventário de unidades menores que se combinam (o equivalente aos fonemas), regras de formação de palavras (morfologia), regras de combinação de frases (sintaxe), e a capacidade de expressar qualquer coisa que uma língua falada expressa, do relatório meteorológico à poesia à demonstração matemática.</p>

<div class="marca consenso">
<span class="rot">O que é consenso científico</span>
<p>Línguas de sinais são línguas naturais, geneticamente independentes das línguas faladas do país em que surgem, com gramática própria em todos os níveis de organização. Essa conclusão está estabelecida na linguística desde o final dos anos 1960 e início dos anos 1970, sustentada por décadas de descrição gramatical detalhada de dezenas de línguas de sinais diferentes ao redor do mundo.</p>
</div>

<h3>Três mitos, e por que eles caem</h3>

<p><strong>Mito 1: existe uma língua de sinais universal.</strong> Não existe. Cada país, e às vezes cada comunidade surda dentro de um país, desenvolveu sua própria língua de sinais, com sua própria gramática e seu próprio vocabulário. A língua de sinais americana (ASL) e a língua de sinais britânica (BSL) são línguas diferentes e mutuamente ininteligíveis, apesar de o inglês falado ser o mesmo nos dois países ao redor delas. A língua brasileira de sinais, a Libras, tem gramática própria, diferente da do português, e diferente também da língua de sinais de Portugal, apesar de os dois países falarem a mesma língua majoritária.<sup class="cit"><a href="#f2">2</a></sup> Existe um sistema chamado Língua Gestual Internacional, usado em contextos como congressos internacionais de surdos, mas ele é um pidgin de contato, simplificado e sem comunidade de falantes nativos, não uma língua completa que substitua as línguas nacionais de sinais.</p>

<p><strong>Mito 2: língua de sinais é só gesticular, sem regra fixa.</strong> A evidência de que existe regra é a mesma evidência que se usa para qualquer língua: existem combinações possíveis e combinações impossíveis, e falantes nativos concordam sobre quais são quais, mesmo sem conseguir explicar por quê. Um sinal produzido com a configuração de mão errada para aquele item lexical específico, ou com a orientação de palma trocada, não soa "com sotaque": deixa de ser aquele sinal, ou vira outro sinal, ou vira algo sem sentido. Isso é exatamente o comportamento de um sistema fonológico, a camada de uma língua que organiza as menores unidades que combinam som (ou, aqui, forma) para construir significado.</p>

<p><strong>Mito 3: língua de sinais é uma versão simplificada, ou uma tradução literal, da língua falada do país.</strong> Também não. Existe, sim, um sistema separado chamado português sinalizado (e, para o inglês, Signed Exact English), inventado por educadores para representar palavra por palavra a língua falada usando as mãos, na mesma ordem de palavras do português. Esse sistema não é a língua natural da comunidade surda: é uma ferramenta pedagógica artificial, criada por ouvintes, sem comunidade de falantes nativos que a use espontaneamente em casa. A Libras tem ordem de palavras própria, tem construções gramaticais que o português não tem (como o uso do espaço para marcar quem faz o quê para quem, explicado adiante) e não tem construções que o português tem (como certas conjugações verbais). Confundir os dois sistemas é como confundir uma língua com um alfabeto cifrado que representa outra língua.</p>

<h3>Que tipo de evidência convence um linguista</h3>

<p>Vale parar aqui num ponto de método, porque ele generaliza bem além deste tema. A pergunta "isso é uma língua de verdade ou só um jeito de se comunicar?" não se resolve perguntando se parece fácil ou difícil para quem não sinaliza. "Ouvintes acham que dá para entender língua de sinais só de prestar atenção" não é evidência linguística de nada, é evidência de que ouvintes subestimam sistematicamente a complexidade daquilo que não aprenderam. O mesmo aconteceria se um falante de português avaliasse se o mandarim "tem gramática de verdade" batendo o olho sem estudar.</p>

<p>O que conta como evidência é outra coisa: (1) existe um conjunto finito de unidades formacionais que se recombinam de forma sistemática; (2) essas combinações têm restrições, isto é, nem tudo que é fisicamente possível de sinalizar é gramaticalmente aceitável para um sinalizante nativo; (3) crianças surdas expostas a uma língua de sinais desde cedo a adquirem espontaneamente, nos mesmos marcos de desenvolvimento que crianças ouvintes adquirem língua falada, sem instrução explícita; (4) a língua muda historicamente, tem dialetos regionais e sofre os mesmos processos de mudança linguística que qualquer língua falada. Línguas de sinais passam nos quatro testes. É esse tipo de evidência, e não a impressão de um observador de fora, que fez a linguística mudar de posição a partir do trabalho de Stokoe.</p>

<h3>Onde mora a gramática, se não há som</h3>

<p>Um sinal não é uma unidade indivisível: ele se decompõe em partes menores que combinam, do mesmo jeito que uma palavra falada se decompõe em fonemas. Stokoe identificou três desses componentes, chamados parâmetros formacionais: a configuração da mão (a forma que os dedos assumem), o local de articulação (onde no espaço ou no corpo o sinal é produzido) e o movimento (a trajetória que a mão percorre). Trabalhos posteriores acrescentaram um quarto parâmetro amplamente aceito, a orientação da palma, e um quinto, as expressões não manuais, sobre as quais falta mais adiante.</p>

<p>Mudar um único parâmetro, mantendo os outros fixos, costuma produzir um sinal diferente ou algo sem sentido, exatamente como trocar um único fonema muda "pato" para "gato". Isso é a fonologia de uma língua de sinais: uma gramática interna às próprias mãos, e não uma soletração da língua falada ao redor.</p>

<div class="marca consenso">
<span class="rot">Para fechar o núcleo</span>
<p>Línguas de sinais são línguas naturais completas, cada país ou comunidade surda tem a sua, elas não são derivadas nem simplificadas em relação às línguas faladas locais, e a evidência para isso é do mesmo tipo de evidência usada para classificar qualquer língua falada como língua: estrutura interna sistemática, restrições combinatórias e aquisição espontânea por crianças.</p>
</div>
` },

aprofundamento: { minutos: 30, html: `
<h3>Os parâmetros formacionais, com mais precisão</h3>

<p>Retomando o núcleo com vocabulário técnico. Um sinal lexical é descrito, na tradição que vem de Stokoe, por pelo menos quatro parâmetros formacionais que ocorrem simultaneamente, e não em sequência como os fonemas de uma palavra falada:</p>

<ul>
<li><strong>Configuração de mão (CM):</strong> a forma assumida pelos dedos e pela palma. As línguas de sinais têm um inventário limitado de configurações de mão possíveis, e esse inventário varia de língua para língua, do mesmo modo que o inventário de fonemas varia entre línguas faladas.</li>
<li><strong>Locação, ou ponto de articulação (PA):</strong> a região do espaço de sinalização, ou do corpo do sinalizante, onde o sinal ocorre.</li>
<li><strong>Movimento (M):</strong> a trajetória, direção e qualidade de deslocamento da mão durante a produção do sinal.</li>
<li><strong>Orientação da palma (O):</strong> para onde a palma da mão aponta durante a articulação.</li>
</ul>

<figure class="figura">[[FIG:sinais-parametros]]<figcaption>Os parâmetros formacionais que compõem um sinal lexical: configuração de mão, ponto de articulação, movimento, orientação da palma, produzidos de forma simultânea, mais a camada de expressão não manual sobreposta ao mesmo sinal.</figcaption></figure>

<p>Um par mínimo em língua de sinais é análogo a um par mínimo em língua falada, como "pata" e "bata": dois sinais que diferem em exatamente um parâmetro e têm significados diferentes. Encontrar pares mínimos em profusão numa língua de sinais foi parte do argumento original de Stokoe para tratá-la como sistema fonológico genuíno, e não como um repertório de pantomimas.</p>

<h3>Verbos concordantes e o uso gramatical do espaço</h3>

<p>Aqui está uma das diferenças estruturais mais estudadas entre línguas de sinais e línguas faladas, e uma das mais mal compreendidas por quem não sinaliza.</p>

<p>Muitas línguas de sinais, incluindo Libras e ASL, têm uma classe de verbos chamados <strong>verbos direcionais</strong> ou <strong>verbos concordantes</strong> (em inglês, <em>agreement verbs</em>). Esses verbos não são articulados num único lugar fixo: o sinalizante primeiro estabelece pontos no espaço à sua frente para representar referentes já mencionados (uma pessoa, um lugar), e depois o próprio verbo se move entre esses pontos para indicar quem é o sujeito e quem é o objeto da ação. O verbo "dar", por exemplo, sinalizado do ponto que representa "eu" até o ponto que representa "você", significa "eu dou a você"; sinalizado no sentido inverso, significa "você dá a mim". A direção do movimento do verbo carrega a mesma informação gramatical que, numa língua como o português, viria de pronomes e de concordância verbal de pessoa. Isso não é encenação nem pantomima de uma ação: é concordância gramatical formal, análoga a marcar sujeito e objeto por afixos numa língua falada com morfologia rica.<sup class="cit"><a href="#f2">2</a></sup></p>

<p>Verbos que não fazem esse tipo de concordância espacial (chamados verbos simples, como "gostar" ou "saber" em muitas línguas de sinais) são sinalizados sempre no mesmo lugar, e a língua usa outros recursos, como a ordem dos sinais ou pronomes apontados no espaço, para marcar quem faz o quê.</p>

<h3>Classificadores</h3>

<p>Outra estrutura gramatical central é o sistema de <strong>classificadores</strong>: configurações de mão que não representam uma palavra específica, mas uma categoria inteira de referentes (veículos, pessoas, objetos finos e compridos, superfícies planas), combinadas com movimento e posição no espaço para descrever como esse referente se move, onde está localizado, ou como interage com outro referente. Uma configuração de mão de classificador para "veículo", movida numa trajetória sinuosa, descreve um carro fazendo uma curva; a mesma configuração, deslocada para cima de outra configuração que representa uma superfície plana, descreve o carro estacionado em cima de algo. Classificadores permitem descrever eventos espaciais complexos com um nível de precisão geométrica para o qual línguas faladas em geral precisam de várias frases separadas. Não são "desenhos livres": o repertório de configurações de mão classificadoras é fechado e específico de cada língua de sinais, e seu uso segue regras gramaticais, não apenas iconicidade solta.</p>

<h3>Expressões não manuais: gramática na cara e no corpo</h3>

<p>O componente mais contraintuitivo para quem não sinaliza é o papel gramatical das <strong>expressões não manuais</strong>: o movimento das sobrancelhas, o inflar das bochechas, a inclinação da cabeça, o deslocamento do tronco, a posição da boca. Uma pessoa de fora tende a interpretar esses sinais faciais como expressão de emoção, do mesmo jeito que um sorriso ou uma testa franzida na fala. Em línguas de sinais, uma parte importante desses movimentos é gramática obrigatória, não expressão emocional opcional.</p>

<p>Alguns exemplos documentados em Libras e em outras línguas de sinais: sobrancelhas levantadas marcam perguntas de sim ou não; sobrancelhas franzidas marcam perguntas com pronome interrogativo (quem, o quê, onde); uma configuração facial específica marca orações condicionais ("se... então"), de forma equivalente à conjunção "se" numa língua falada; inclinar a cabeça e o corpo para frente pode marcar foco ou ênfase sobre um constituinte da frase. Retirar a marcação não manual obrigatória de uma frase que a exige produz uma sentença agramatical, não apenas uma sentença "sem emoção", exatamente como retirar o ponto de interrogação e a entonação de pergunta de uma frase falada produz uma leitura diferente, não neutra.<sup class="cit"><a href="#f2">2</a></sup></p>

<div class="marca consenso">
<span class="rot">Por que isso importa para a definição do que é gramática</span>
<p>O fato de que traços do rosto e do corpo, e não apenas as mãos, carregam informação sintática obrigatória é uma das razões pelas quais linguistas rejeitam a ideia de língua de sinais como "gesto ilustrativo acompanhando uma ideia". Um gesto opcional pode ser omitido sem quebrar a frase. Uma marcação não manual gramatical, não: sua ausência muda a estrutura sintática da sentença.</p>
</div>

<h3>Simultaneidade: a outra geometria da linguagem</h3>

<p>Línguas faladas são, na imensa maioria dos casos, fortemente lineares: um som depois do outro, ao longo do tempo, numa única cadeia (é possível empilhar entonação sobre segmentos, mas o grosso da estrutura é sequencial). Línguas de sinais exploram um canal com mais graus de liberdade simultâneos: duas mãos, cada uma podendo carregar informação diferente, mais a face, mais a postura do corpo, tudo articulado ao mesmo tempo. Isso permite formas de <strong>simultaneidade</strong> sem equivalente direto na fala: por exemplo, uma mão mantém um classificador representando a posição de um objeto enquanto a outra mão sinaliza uma ação sobre ele, ou a marcação não manual de uma pergunta se sobrepõe a uma frase inteira sinalizada pelas mãos. Isso não torna a língua de sinais "mais simples" nem "mais rica" que uma língua falada em termos absolutos: é uma organização estrutural diferente, adaptada às possibilidades e restrições do canal visuoespacial, do mesmo jeito que a fonologia falada é adaptada às possibilidades e restrições do canal oral-auditivo.</p>

<div class="marca emergente">
<span class="rot">Um ponto ainda em desenvolvimento na teoria</span>
<p>Como exatamente descrever formalmente a simultaneidade das línguas de sinais dentro dos mesmos modelos sintáticos desenvolvidos originalmente para línguas faladas lineares é uma área ativa de pesquisa em linguística teórica, sem um modelo único consensual. Isso é uma questão de melhor formalização, não uma dúvida sobre se a simultaneidade existe ou se carrega estrutura gramatical: os dois pontos são bem estabelecidos.</p>
</div>

<h3>A Libras, especificamente</h3>

<p>A Libras foi reconhecida legalmente como meio legal de comunicação e expressão da comunidade surda brasileira pela Lei 10.436, de 24 de abril de 2002, regulamentada pelo Decreto 5.626 de 2005.<sup class="cit"><a href="#f3">3</a></sup> Isso não criou a língua, que já existia e se desenvolvia na comunidade surda brasileira havia gerações: a lei deu status oficial a uma língua natural preexistente. A descrição linguística sistemática da Libras como língua com fonologia, morfologia e sintaxe próprias avançou principalmente a partir dos anos 1980 e 1990, com trabalhos como o de Ronice Müller de Quadros e Lodenir Becker Karnopp, que se tornou referência no campo.<sup class="cit"><a href="#f4">4</a></sup> A Libras tem os mesmos tipos de estrutura descritos acima (verbos direcionais, classificadores, marcação não manual, uso do espaço para referência), com detalhes formais próprios que a distinguem de ASL, de BSL e de qualquer outra língua de sinais nacional.</p>
` },

extensao: { minutos: 60, html: `
<h3>O caso da Língua de Sinais Nicaraguense</h3>

<p>Existe um episódio, muito bem documentado, que funciona quase como um experimento natural sobre a origem da gramática. Antes do final dos anos 1970, a Nicarágua não tinha uma comunidade surda organizada nem uma língua de sinais compartilhada: crianças surdas cresciam isoladas, cada uma com um sistema caseiro rudimentar de gestos combinados com a própria família, sistemas conhecidos na literatura como "home sign", sem gramática comparável à de uma língua plena.</p>

<p>Em 1977 abriu, no bairro de San Judas, em Manágua, um centro de educação especial para crianças surdas. A matrícula cresceu de cerca de cinquenta alunos em 1977 para mais de quatrocentos, em duas escolas, até 1983. O ensino era oralista, focado em português... na verdade em espanhol falado e em leitura labial, sem ensinar nenhuma língua de sinais estabelecida, porque não havia uma para ensinar. Só que reunir, pela primeira vez, um número grande de crianças surdas no mesmo pátio de recreio criou a condição que faltava: as crianças passaram a se comunicar entre si fora da sala de aula, misturando seus sistemas gestuais caseiros individuais. Desse contato surgiu um sistema comum, mais consistente que qualquer home sign individual, mas ainda relativamente simples gramaticalmente, chamado depois de Lenguaje de Signos Nicaragüense (LSN).<sup class="cit"><a href="#f5">5</a></sup></p>

<p>Em junho de 1986, o Ministério da Educação da Nicarágua pediu ajuda à linguista Judy Kegl, do MIT, para entender aquele sistema de comunicação, que os próprios educadores locais, sem formação em linguística de sinais, tinham inicialmente confundido com mímica.<sup class="cit"><a href="#f5">5</a></sup> Kegl, e depois Ann Senghas e outros colegas, documentaram algo notável: as crianças mais novas, que tinham sido expostas ao LSN desde cedo, não estavam apenas aprendendo o sistema dos alunos mais velhos. Estavam sistematizando esse sistema, tornando-o mais consistente e gramaticalmente mais complexo do que o de seus próprios "professores" informais, os alunos mais velhos que os cercavam. O resultado, várias gerações de estudantes depois, é uma língua bem mais rica gramaticalmente, chamada Idioma de Señas de Nicaragua (ISN), distinta do LSN original.</p>

<p>Um exemplo bem estudado por Senghas: o uso sistemático do espaço para marcar concordância verbal (o mesmo fenômeno de verbos direcionais descrito no aprofundamento) apareceu de forma mais consistente nas gerações mais novas de sinalizantes de ISN do que nos primeiros sinalizantes de LSN.<sup class="cit"><a href="#f6">6</a></sup> Os sinalizantes da primeira geração usavam recursos espaciais de forma mais esporádica e menos sistemática; crianças que aprenderam a língua a partir dessa base, já quando ela tinha mais estrutura para absorver, e principalmente crianças que a adquiriram desde muito cedo, converteram esse uso em regra gramatical estável, transmitida de forma consistente à geração seguinte.</p>

<div class="marca consenso">
<span class="rot">Por que este caso pesa tanto</span>
<p>Não havia, nesse episódio, uma língua de sinais adulta estabelecida para as crianças copiarem: elas não estavam aprendendo Libras, nem ASL, nem qualquer outra língua já pronta, importada de algum lugar. A complexidade gramatical emergiu de dentro do próprio grupo de aprendizes, ao longo de sucessivas gerações de crianças, na ausência de um modelo linguístico adulto completo para imitar. Isso é considerado por boa parte da linguística uma das evidências mais diretas disponíveis de que humanos têm uma capacidade cognitiva especializada para estruturar linguagem, que se ativa mesmo diante de um insumo (o termo técnico é <em>input</em>) fragmentado e incompleto.</p>
</div>

<h3>O que o caso da ISN tem a dizer sobre período crítico</h3>

<p>O linguista e neurologista Eric Lenneberg propôs, em 1967, a hipótese do período crítico: existiria uma janela biológica, aproximadamente até a puberdade, na qual a aquisição de uma primeira língua acontece de forma espontânea e completa, e depois da qual essa capacidade se reduz de forma importante.<sup class="cit"><a href="#f7">7</a></sup> Testar essa hipótese em seres humanos de forma ética é quase impossível com línguas faladas, porque privar deliberadamente uma criança de exposição a qualquer língua seria antiético, e casos de privação severa documentados (como o caso conhecido como "Genie", nos Estados Unidos) são raros, atípicos em múltiplos outros aspectos, além de terem gerado enorme controvérsia metodológica.</p>

<p>Crianças surdas nascidas de pais ouvintes que não sabem língua de sinais, e que não recebem exposição sistemática a uma língua de sinais estabelecida cedo, oferecem uma população natural, infelizmente comum antes de políticas mais recentes de identificação e intervenção precoces, para observar os efeitos de idade de exposição sobre a aquisição de uma primeira língua. A pesquisadora Rachel Mayberry e colegas mostraram, ao longo de várias décadas de trabalho, que a idade em que uma pessoa surda tem seu primeiro contato consistente com uma língua, seja ela sinalizada ou falada, prediz de forma forte o nível de proficiência que essa pessoa alcança quando adulta nessa língua, mesmo décadas depois e mesmo controlando o tempo total de exposição.<sup class="cit"><a href="#f8">8</a></sup> Isso é evidência a favor de uma janela sensível para a primeira aquisição de linguagem, e o efeito parece estar ligado à ausência de qualquer primeira língua adquirida cedo, não à modalidade sinalizada em si.</p>

<div class="marca emergente">
<span class="rot">Quão forte é essa evidência</span>
<p>A ideia de período crítico segue amplamente aceita em termos gerais, mas há debate ativo sobre os detalhes: se existe um limite etário abrupto ou um declínio gradual, se a janela é a mesma para diferentes componentes da língua (vocabulário, sintaxe, fonologia), e o quanto do efeito observado em surdos tardiamente expostos reflete privação de linguagem propriamente dita versus outros fatores associados, como isolamento social e cognitivo mais amplo durante a infância. Tratar o período crítico como um fato simples e fechado seria simplificar um debate ainda ativo.</p>
</div>

<h3>Achados de neurociência</h3>

<p>Se línguas de sinais são línguas no sentido pleno do termo, uma previsão testável segue: o cérebro deveria processá-las recrutando as mesmas áreas clássicas associadas à linguagem falada, como a área de Broca, no lobo frontal, tradicionalmente ligada à produção, e a área de Wernicke, no lobo temporal, tradicionalmente ligada à compreensão, e não áreas de processamento visuoespacial genérico, que seria a previsão se língua de sinais fosse "apenas" um sistema de gestos e imagens.</p>

<p>Duas linhas de evidência sustentam a primeira previsão. A primeira vem de estudos de lesão cerebral: Ursula Bellugi, Edward Klima, Howard Poizner e colegas documentaram, ao longo dos anos 1980, sinalizantes surdos com lesões no hemisfério esquerdo que desenvolveram padrões de afasia (perda ou comprometimento da capacidade de produzir ou compreender linguagem) notavelmente parecidos com os de falantes ouvintes com lesões equivalentes, incluindo casos de afasia mais próxima de Broca (produção mais afetada, com relativa preservação da compreensão) e de afasia mais próxima de Wernicke (compreensão mais afetada), enquanto capacidades visuoespaciais não linguísticas desses mesmos pacientes, testadas separadamente, continuavam relativamente preservadas.<sup class="cit"><a href="#f9">9</a></sup> Isso é uma dissociação importante: lesão no hemisfério esquerdo prejudicando linguagem sinalizada, mas não prejudicando cognição espacial de modo geral, é o padrão oposto do que se esperaria se língua de sinais fosse basicamente processamento espacial disfarçado.</p>

<p>A segunda linha vem de neuroimagem funcional em sinalizantes surdos sem lesão, sintetizada por Gregory Hickok, Ursula Bellugi e Edward Klima: tarefas de produção e compreensão de língua de sinais ativam de forma consistente regiões perisylvianas do hemisfério esquerdo, sobrepostas em boa parte às áreas clássicas de linguagem falada, junto com alguma participação adicional de regiões do hemisfério direito ligadas ao processamento espacial, plausivelmente por causa dos componentes espaciais próprios da gramática de línguas de sinais (uso referencial do espaço, classificadores) descritos no aprofundamento.<sup class="cit"><a href="#f10">10</a></sup></p>

<div class="marca consenso">
<span class="rot">O que essa linha de evidência sustenta</span>
<p>O cérebro processa língua de sinais recrutando fortemente a mesma rede clássica de linguagem usada para línguas faladas, e não um sistema separado dedicado a "gestos" ou a "imagens". Isso é evidência convergente, vinda de lesão e de neuroimagem, e é hoje posição consolidada em neurolinguística. O papel específico de regiões adicionais do hemisfério direito, ligado aos componentes espaciais da gramática de línguas de sinais, segue sendo detalhado por pesquisa em andamento.</p>
</div>

<h3>O debate entre oralismo e bimodalismo na educação de surdos</h3>

<p>Este é um ponto em que a ciência da linguagem e a política educacional se cruzam, e onde vale separar com cuidado o que é achado científico do que é posição de valor em disputa.</p>

<p>Historicamente, boa parte da educação formal de crianças surdas no Ocidente, a partir do final do século XIX, adotou o chamado <strong>oralismo</strong>: ensinar a criança surda a falar e a ler lábios na língua majoritária falada do país, e ativamente desencorajar ou proibir o uso de sinais em sala de aula, sob a ideia de que sinalizar atrapalharia o desenvolvimento da fala. Essa posição foi formalmente endossada por um congresso internacional de educadores de surdos realizado em Milão em 1880, cuja resolução pesou sobre políticas educacionais em vários países por décadas.<sup class="cit"><a href="#f11">11</a></sup> Um congresso internacional posterior, em 2010, aprovou formalmente uma repúdia à resolução de 1880, reconhecendo o dano causado pela supressão histórica das línguas de sinais na educação.<sup class="cit"><a href="#f12">12</a></sup></p>

<p>Do outro lado está a posição, hoje amplamente (mas não universalmente) adotada por linguistas e por boa parte das comunidades surdas organizadas, de que crianças surdas devem ter acesso, o mais cedo possível, a uma língua de sinais plena como primeira língua, independentemente de também receberem, se a família e a criança optarem, treino de fala e uso de tecnologias como aparelhos auditivos ou implantes cocleares. Essa posição é frequentemente chamada de abordagem bimodal ou bilíngue (língua de sinais mais língua falada/escrita), e se apoia diretamente nos achados sobre período crítico descritos acima: esperar para ver se a fala "vai funcionar" antes de expor a criança a uma língua de sinais carrega o risco de a criança passar justamente os anos mais sensíveis para aquisição de linguagem sem nenhuma primeira língua plenamente acessível.</p>

<div class="marca controverso">
<span class="rot">O que é debate de valores, não apenas de ciência</span>
<p>A camada científica desse debate, sobre o custo de atrasar a exposição a uma primeira língua acessível, está razoavelmente bem estabelecida pelas linhas de evidência de período crítico discutidas acima. Mas o debate público sobre oralismo e bimodalismo carrega, além disso, camadas de valor genuinamente em disputa e historicamente carregadas: quanto peso dar à preferência da família (majoritariamente ouvinte) por integração linguística e cultural na língua falada majoritária, quanto peso dar à autonomia da criança surda e ao acesso a uma comunidade e cultura surda própria, e como avaliar tecnologias como o implante coclear, que para alguns representam ampliação de possibilidades e para outros, dentro de parte do movimento surdo, representam uma continuação da lógica de que a surdez é um déficit a corrigir em vez de uma diferença a acomodar. Este texto descreve as posições envolvidas; não tem como função arbitrar esse desacordo de valores.</p>
</div>

<h3>Quantas línguas de sinais existem</h3>

<p>O catálogo Ethnologue listava, em edições recentes, mais de 130 línguas de sinais distintas identificadas e documentadas no mundo, enquanto pesquisadores da SIL, organização responsável pelo catálogo, estimam que o número real possa passar de 400, incluindo línguas de sinais de vilarejos pequenos e comunidades ainda pouco estudadas por linguistas.<sup class="cit"><a href="#f13">13</a></sup> A diferença entre os dois números por si só ilustra um ponto do núcleo: a quantidade de línguas de sinais genuinamente distintas no mundo é subestimada precisamente pela mesma razão histórica que atrasou o reconhecimento de qualquer uma delas como língua, a saber, décadas em que essas línguas não foram estudadas com o mesmo rigor documental aplicado a línguas faladas.</p>
` }
},

sintese: {
  definicoes: [
    { termo: "Parâmetros formacionais", def: "Os componentes que se combinam simultaneamente para formar um sinal: configuração de mão, ponto de articulação, movimento e orientação da palma, descritos originalmente por William Stokoe em 1960 como o equivalente à fonologia de uma língua falada." },
    { termo: "Verbo direcional ou concordante", def: "Classe de verbos, presente em Libras, ASL e muitas outras línguas de sinais, cujo movimento no espaço entre pontos previamente estabelecidos marca quem é o sujeito e quem é o objeto da ação, cumprindo o papel que concordância verbal ou pronomes cumprem numa língua falada." },
    { termo: "Classificador", def: "Configuração de mão que representa uma categoria de referentes (veículos, pessoas, objetos de certo formato), combinada com movimento e posição no espaço para descrever localização, deslocamento ou interação entre referentes, seguindo um repertório fechado e regras gramaticais específicas de cada língua." },
    { termo: "Marcação não manual", def: "Uso gramatical obrigatório de sobrancelhas, bochechas, cabeça e corpo para expressar informação sintática, como o tipo de pergunta, a presença de uma condicional ou o foco de uma sentença, e não apenas emoção." },
    { termo: "Simultaneidade", def: "Capacidade de línguas de sinais de expressar mais de uma unidade de informação gramatical ao mesmo tempo, usando as duas mãos e a face em paralelo, em contraste com a linearidade predominante da fala." },
    { termo: "Idioma de Señas de Nicaragua (ISN)", def: "Língua de sinais que emergiu espontaneamente entre crianças surdas reunidas numa escola em Manágua a partir do final dos anos 1970, tornando-se progressivamente mais gramaticalmente complexa a cada geração de novos alunos, sem exposição prévia a uma língua de sinais estabelecida." }
  ],
  lembrar: [
    "Não existe língua de sinais universal. Cada país ou comunidade surda tem a sua própria, com gramática própria; ASL e BSL, por exemplo, são línguas diferentes apesar do inglês falado em comum ao redor delas.",
    "Língua de sinais não é a língua falada soletrada com as mãos. Sistemas como o português sinalizado, que copiam a ordem de palavras da língua falada, são ferramentas pedagógicas artificiais, distintas da língua natural da comunidade surda.",
    "O trabalho de William Stokoe em 1960 sobre a ASL é considerado o marco inicial da linguística das línguas de sinais como campo científico.",
    "Verbos direcionais usam o movimento no espaço para marcar sujeito e objeto; classificadores usam configurações de mão fechadas em categoria para descrever posição e movimento de referentes; marcação não manual (sobrancelhas, cabeça, corpo) carrega informação gramatical obrigatória, não apenas emoção.",
    "O caso da Língua de Sinais Nicaraguense, documentado por Judy Kegl e Ann Senghas a partir de 1986, mostra a gramática se tornando mais complexa e sistemática a cada geração de crianças, sem língua de sinais adulta estabelecida disponível como modelo completo.",
    "Estudos de lesão cerebral e de neuroimagem mostram língua de sinais recrutando fortemente as mesmas áreas clássicas de linguagem falada, como a área de Broca e a área de Wernicke, e não um sistema à parte de processamento visuoespacial genérico.",
    "O debate entre oralismo e abordagens bimodais/bilíngues na educação de surdos tem uma camada científica razoavelmente estabelecida (o custo de atrasar a exposição a uma primeira língua acessível) e uma camada de valores históricos e políticos ainda em disputa."
  ],
  confusoes: [
    { erro: "Existe uma única língua de sinais, entendida por surdos do mundo inteiro", correcao: "Falso. Existem mais de 130 línguas de sinais catalogadas pelo Ethnologue, com estimativas de que o número real passe de 400. Cada uma tem gramática e vocabulário próprios, em geral mutuamente ininteligíveis com as demais." },
    { erro: "Língua de sinais é a língua falada do país, só que soletrada com as mãos", correcao: "Falso. Isso descreve sistemas artificiais como o português sinalizado, criados por educadores ouvintes. A língua de sinais natural de uma comunidade surda, como a Libras, tem gramática própria, com ordem de palavras, verbos direcionais e uso do espaço que o português não tem." },
    { erro: "Línguas de sinais são simplificações da língua falada, com menos regras", correcao: "Falso. Línguas de sinais têm fonologia, morfologia e sintaxe completas, incluindo estruturas sem equivalente direto na fala, como o uso gramatical do espaço e a simultaneidade de informação entre as duas mãos e a face." },
    { erro: "Expressões faciais em língua de sinais são só emoção, como numa conversa falada comum", correcao: "Parte delas é gramática obrigatória: sobrancelhas levantadas para perguntas de sim/não, sobrancelhas franzidas para perguntas com pronome interrogativo, configurações específicas para condicionais. Remover essa marcação de uma frase que a exige produz uma sentença agramatical, não apenas neutra." },
    { erro: "A criação da Língua de Sinais Nicaraguense prova que uma língua de sinais adulta guiou as crianças desde o início", correcao: "O oposto: não havia língua de sinais estabelecida disponível. A gramática emergiu de dentro do grupo de crianças, ao longo de gerações sucessivas de alunos, o que é o motivo pelo qual o caso é considerado evidência forte a favor de uma capacidade humana inata para estruturar linguagem." },
    { erro: "O cérebro processa língua de sinais com áreas de percepção visual e espacial, não com áreas de linguagem", correcao: "Estudos de lesão e de neuroimagem mostram forte recrutamento das áreas clássicas de linguagem, como Broca e Wernicke, no hemisfério esquerdo, com participação adicional, mas secundária, de regiões espaciais do hemisfério direito." }
  ],
  numeros: [
    "William Stokoe publicou 'Sign Language Structure', sobre a ASL, em 1960, considerado o marco inicial da linguística de línguas de sinais como disciplina.",
    "A escola de Manágua onde surgiu a Língua de Sinais Nicaraguense abriu em 1977; a linguista Judy Kegl foi chamada para estudar o sistema em 1986; Ann Senghas documentou o aumento de complexidade gramatical entre gerações de alunos a partir dos anos 1990.",
    "Eric Lenneberg propôs a hipótese do período crítico de aquisição de linguagem em 1967.",
    "O Congresso de Milão de 1880 formalizou o oralismo como política dominante na educação de surdos; um congresso internacional em 2010 repudiou formalmente essa resolução.",
    "A Libras foi reconhecida legalmente no Brasil pela Lei 10.436, de 24 de abril de 2002, regulamentada pelo Decreto 5.626 de 2005.",
    "O Ethnologue lista mais de 130 línguas de sinais distintas documentadas no mundo, com estimativa de que o total real ultrapasse 400."
  ]
},

flashcards: [
  { f: "Quem publicou, em 1960, o estudo considerado o marco inicial da linguística das línguas de sinais, e sobre qual língua?", v: "William Stokoe, sobre a língua de sinais americana (ASL), em 'Sign Language Structure'. Ele descreveu a ASL como um sistema com estrutura interna sistemática, e não como pantomima." },
  { f: "Por que 'existe uma língua de sinais universal' é falso?", v: "Porque cada país ou comunidade surda desenvolveu sua própria língua de sinais, com gramática e vocabulário próprios. ASL e BSL, por exemplo, são línguas diferentes e mutuamente ininteligíveis, mesmo com o inglês falado em comum ao redor de ambas." },
  { f: "Qual é a diferença entre a Libras e o 'português sinalizado'?", v: "A Libras é a língua natural da comunidade surda brasileira, com gramática própria (ordem de palavras, verbos direcionais, uso do espaço). O português sinalizado é um sistema artificial, criado por educadores, que representa palavra por palavra o português falado usando as mãos, sem ser a língua espontânea de nenhuma comunidade." },
  { f: "Quais são os parâmetros formacionais de um sinal, segundo a tradição de Stokoe?", v: "Configuração de mão, ponto de articulação (locação), movimento e orientação da palma, produzidos de forma simultânea. Mudar um único parâmetro costuma produzir um sinal diferente ou algo sem sentido, como trocar um fonema numa palavra falada." },
  { f: "O que é um verbo direcional ou concordante em língua de sinais?", v: "Um verbo cujo movimento no espaço, entre pontos estabelecidos previamente para representar referentes, marca quem é sujeito e quem é objeto da ação, cumprindo o papel de concordância verbal ou de pronomes numa língua falada." },
  { f: "O que é um classificador em língua de sinais, e por que não é 'gesto livre'?", v: "É uma configuração de mão que representa uma categoria de referentes (veículo, pessoa, objeto fino), combinada com movimento e posição para descrever localização ou deslocamento. O repertório de configurações classificadoras é fechado e específico de cada língua, e seu uso segue regras gramaticais." },
  { f: "Por que expressões faciais em língua de sinais não são apenas emoção?", v: "Parte delas é marcação não manual gramatical obrigatória: sobrancelhas levantadas marcam perguntas de sim/não, sobrancelhas franzidas marcam perguntas com pronome interrogativo, configurações específicas marcam condicionais. Removê-las de uma frase que as exige produz agramaticalidade, não neutralidade." },
  { f: "O que é simultaneidade em língua de sinais e como difere da linearidade da fala?", v: "É a capacidade de expressar mais de uma informação gramatical ao mesmo tempo, usando as duas mãos e a face em paralelo. A fala é majoritariamente linear, um som depois do outro; línguas de sinais exploram um canal com mais graus de liberdade simultâneos." },
  { f: "Onde e quando surgiu a Língua de Sinais Nicaraguense, e por que o caso é científicamente importante?", v: "Numa escola para crianças surdas em Manágua, a partir de 1977, sem língua de sinais estabelecida disponível como modelo. A gramática se tornou mais sistemática e complexa a cada geração de novos alunos, sendo considerada evidência forte de capacidade humana inata para estruturar linguagem mesmo com insumo incompleto." },
  { f: "O que Ann Senghas documentou especificamente sobre gerações de sinalizantes de ISN?", v: "Que o uso do espaço para marcar concordância verbal, esporádico e inconsistente nos primeiros sinalizantes (LSN), tornou-se sistemático e gramaticalmente regular nas gerações seguintes de crianças que adquiriram a língua desde cedo, a partir de uma base ainda incompleta." },
  { f: "O que a hipótese do período crítico, proposta por Lenneberg em 1967, afirma, e como o estudo de crianças surdas ajuda a testá-la?", v: "Que existe uma janela biológica, aproximadamente até a puberdade, para aquisição espontânea e completa de uma primeira língua. Crianças surdas sem exposição precoce a nenhuma língua sinalizada ou falada são uma população natural (não criada deliberadamente) em que a idade de primeiro contato com uma língua pode ser correlacionada com a proficiência final." },
  { f: "Que evidência de neurociência sustenta que língua de sinais é processada como linguagem, e não como percepção visuoespacial genérica?", v: "Estudos de lesão cerebral mostram sinalizantes surdos com dano no hemisfério esquerdo desenvolvendo afasias de sinais parecidas com afasias de fala, com capacidades visuoespaciais não linguísticas preservadas; estudos de neuroimagem mostram forte ativação das áreas clássicas de linguagem (Broca, Wernicke) durante produção e compreensão de língua de sinais." },
  { f: "Qual é a diferença entre a camada científica e a camada de valores no debate entre oralismo e abordagens bimodais na educação de surdos?", v: "A camada científica, razoavelmente estabelecida, é sobre o custo de atrasar a exposição da criança surda a uma primeira língua plenamente acessível. A camada de valores, ainda em disputa, envolve preferências familiares, autonomia da criança, acesso à cultura surda e avaliações divergentes de tecnologias como o implante coclear." },
  { f: "Quantas línguas de sinais distintas existem no mundo, aproximadamente?", v: "O Ethnologue lista mais de 130 línguas de sinais documentadas, com estimativa de pesquisadores da SIL de que o número real ultrapasse 400, incluindo línguas de vilarejos e comunidades pouco estudadas." }
],

prova: [
  { camada: "nucleo",
    q: "Uma pessoa ouvinte diz: 'língua de sinais deve ser fácil de entender, dá para captar boa parte só de prestar atenção aos gestos'. Do ponto de vista da linguística, o que há de errado nesse raciocínio?",
    alts: [
      "Nada, essa é justamente a evidência que os linguistas usam para confirmar que é uma língua natural.",
      "A impressão de um observador de fora sobre facilidade de compreensão não é evidência linguística válida; o que conta é estrutura interna sistemática, restrições combinatórias e aquisição espontânea por crianças.",
      "O erro é achar que existe mais de uma língua de sinais.",
      "O erro é achar que língua de sinais tem gramática, quando na verdade não tem."
    ],
    correta: 1,
    porque: "O texto trata explicitamente esse ponto de método: achar algo fácil de acompanhar de fora não é o tipo de evidência que decide se um sistema é uma língua. O que decide é evidência estrutural (parâmetros formacionais, restrições, verbos concordantes) e evidência de aquisição. A alternativa 1 inverte o raciocínio do texto." },

  { camada: "nucleo",
    q: "Qual das afirmações a seguir descreve corretamente a relação entre línguas de sinais de países diferentes que compartilham a mesma língua falada ao redor, como Estados Unidos e Reino Unido?",
    alts: [
      "ASL e BSL são a mesma língua, porque ambas se apoiam no inglês falado local.",
      "ASL e BSL são línguas diferentes e mutuamente ininteligíveis, apesar do inglês falado em comum ao redor delas.",
      "ASL é uma versão simplificada de BSL.",
      "Não existe língua de sinais no Reino Unido, apenas nos Estados Unidos."
    ],
    correta: 1,
    porque: "Línguas de sinais não derivam da língua falada majoritária do país: são línguas independentes, com histórias próprias. ASL e BSL, apesar do inglês falado em comum ao redor de ambas, são línguas de sinais distintas e não mutuamente inteligíveis." },

  { camada: "nucleo",
    q: "O que é o 'português sinalizado' (ou sistemas equivalentes como o inglês sinalizado exato), e por que ele é diferente da língua de sinais natural de uma comunidade surda?",
    alts: [
      "É outro nome para a Libras.",
      "É um sistema artificial, criado por educadores, que representa palavra por palavra a língua falada usando as mãos, na ordem de palavras da língua falada, sem ser a língua espontânea de nenhuma comunidade surda.",
      "É a variação regional da Libras falada no sul do Brasil.",
      "É o nome técnico da marcação não manual em Libras."
    ],
    correta: 1,
    porque: "O texto distingue com clareza a Libras, língua natural com gramática própria, de sistemas pedagógicos artificiais que soletram a língua falada com as mãos. Confundir os dois é um dos três mitos discutidos explicitamente no núcleo." },

  { camada: "aprofundamento",
    q: "Segundo a tradição iniciada por William Stokoe, quais são os parâmetros formacionais que compõem um sinal?",
    alts: [
      "Sujeito, verbo e objeto.",
      "Configuração de mão, ponto de articulação, movimento e orientação da palma, produzidos simultaneamente.",
      "Fonema, morfema e sintagma, produzidos em sequência.",
      "Velocidade, força e duração do movimento da mão."
    ],
    correta: 1,
    porque: "Esses são os componentes formacionais descritos como o equivalente à fonologia de uma língua de sinais: unidades menores que se combinam simultaneamente (não em sequência, como fonemas na fala) para formar um sinal com significado." },

  { camada: "aprofundamento",
    q: "O verbo 'dar', numa língua de sinais com verbos direcionais, é sinalizado do ponto estabelecido para 'eu' até o ponto estabelecido para 'você'. O que essa direção do movimento representa gramaticalmente?",
    alts: [
      "Uma ilustração pantomímica da ação de entregar algo, sem valor gramatical formal.",
      "Concordância verbal de sujeito e objeto, cumprindo o papel que pronomes e conjugação de pessoa cumprem numa língua falada.",
      "Marcação de tempo verbal, indicando que a ação já aconteceu.",
      "Ênfase emocional sobre a importância da ação de dar."
    ],
    correta: 1,
    porque: "Verbos direcionais ou concordantes usam a direção do movimento no espaço para marcar quem é o sujeito e quem é o objeto, de forma análoga à concordância verbal de pessoa numa língua falada com morfologia rica. Não é encenação: é gramática formal obrigatória para essa classe de verbos." },

  { camada: "aprofundamento",
    q: "Por que retirar a marcação não manual obrigatória (sobrancelhas, cabeça) de uma pergunta ou de uma condicional numa língua de sinais produz uma sentença agramatical, e não apenas 'sem emoção'?",
    alts: [
      "Porque a marcação não manual é apenas um reforço estético, sem consequência gramatical, e a alternativa está descrevendo um mito.",
      "Porque, nessas construções, a marcação não manual carrega informação sintática obrigatória (tipo de pergunta, presença de condicional, foco), não apenas expressão emocional opcional.",
      "Porque toda língua de sinais exige que o sinalizante sorria durante qualquer sentença.",
      "Porque a marcação não manual substitui inteiramente as mãos nessas construções."
    ],
    correta: 1,
    porque: "O texto argumenta que parte das expressões não manuais funciona como gramática obrigatória, análoga à entonação de pergunta ou à conjunção 'se' numa língua falada. Removê-la muda a estrutura sintática, não apenas o tom emocional." },

  { camada: "aprofundamento",
    q: "O que caracteriza um classificador em língua de sinais?",
    alts: [
      "Uma palavra específica emprestada da língua falada local para nomear objetos técnicos.",
      "Uma configuração de mão que representa uma categoria de referentes (veículos, pessoas, objetos de certo formato), combinada com movimento e posição para descrever localização, deslocamento ou interação, dentro de um repertório fechado e regrado.",
      "Um sinal usado exclusivamente para classificar substantivos como masculinos ou femininos.",
      "Um gesto livre, sem restrição gramatical, usado para ilustrar qualquer objeto à escolha do sinalizante."
    ],
    correta: 1,
    porque: "Classificadores não são gestos livres: o inventário de configurações de mão classificadoras é fechado e específico de cada língua, e combina com movimento e posição segundo regras gramaticais para descrever eventos espaciais com precisão." },

  { camada: "extensao",
    q: "Antes de 1977, por que a Nicarágua não tinha uma língua de sinais compartilhada por uma comunidade surda ampla?",
    alts: [
      "Porque o governo nicaraguense havia proibido explicitamente o uso de sinais.",
      "Porque crianças surdas cresciam majoritariamente isoladas umas das outras, cada uma com um sistema gestual caseiro rudimentar (home sign), sem uma comunidade surda reunida que permitisse convergência para um sistema comum.",
      "Porque a língua espanhola falada já cumpria essa função para os surdos do país.",
      "Porque uma língua de sinais nacional já existia, mas não era ensinada nas escolas."
    ],
    correta: 1,
    porque: "A ausência de uma comunidade surda reunida, e não uma proibição ou uma língua alternativa já existente, é a condição que o texto identifica como pano de fundo. A abertura da escola em Manágua, a partir de 1977, criou pela primeira vez a condição de contato entre muitas crianças surdas." },

  { camada: "extensao",
    q: "O que Ann Senghas e colegas documentaram ao comparar gerações sucessivas de sinalizantes de LSN/ISN na Nicarágua?",
    alts: [
      "Que a língua permaneceu idêntica de geração em geração, sem nenhuma mudança gramatical.",
      "Que crianças mais novas, expostas desde cedo ao sistema dos alunos mais velhos, sistematizaram e tornaram gramaticalmente mais complexo (por exemplo, no uso do espaço para concordância verbal) aquilo que receberam, superando a consistência gramatical de seus próprios modelos informais.",
      "Que a língua perdeu complexidade gramatical a cada geração, por erosão do sistema original.",
      "Que apenas os adultos ouvintes da escola foram capazes de sistematizar a gramática da língua."
    ],
    correta: 1,
    porque: "O achado central do caso ISN é justamente o oposto de estabilidade ou de erosão: houve aumento de sistematicidade e de complexidade gramatical geração após geração, gerado pelas próprias crianças aprendizes, sem um modelo linguístico adulto completo disponível." },

  { camada: "extensao",
    q: "Que tipo de evidência de neurociência apoia a tese de que línguas de sinais são processadas como linguagem, e não como processamento visuoespacial genérico?",
    alts: [
      "Sinalizantes surdos usam predominantemente o hemisfério direito para qualquer tarefa, incluindo tarefas não linguísticas.",
      "Lesões no hemisfério esquerdo produzem afasias de sinais parecidas com afasias de fala, com preservação relativa de capacidades visuoespaciais não linguísticas nos mesmos pacientes; estudos de neuroimagem mostram forte ativação de áreas clássicas de linguagem, como Broca e Wernicke, durante o uso de língua de sinais.",
      "Sinalizantes surdos não apresentam nenhum tipo de afasia após lesão cerebral, o que prova que a língua de sinais não depende do cérebro.",
      "A ausência total de qualquer ativação do hemisfério direito durante o uso de língua de sinais."
    ],
    correta: 1,
    porque: "A dissociação entre linguagem sinalizada prejudicada e cognição espacial preservada após lesão no hemisfério esquerdo, somada à ativação de áreas clássicas de linguagem em neuroimagem, é o padrão de evidência citado no texto, vindo do trabalho de Bellugi, Klima, Poizner e, depois, Hickok e colegas." },

  { camada: "extensao",
    q: "No debate entre oralismo e abordagens bimodais/bilíngues na educação de surdos, qual afirmação melhor reflete a distinção feita no texto entre camada científica e camada de valores?",
    alts: [
      "A ciência já decidiu completamente a favor de uma das posições, e o debate remanescente é apenas ideológico e sem substância.",
      "A camada científica, razoavelmente estabelecida, envolve o custo de atrasar o acesso da criança surda a uma primeira língua plenamente acessível; a camada de valores, ainda em disputa, envolve preferências familiares, autonomia da criança e avaliações divergentes de tecnologias como o implante coclear.",
      "Não há nenhum componente científico no debate, que é inteiramente uma questão de valores e política.",
      "O debate foi encerrado definitivamente pelo Congresso de Milão de 1880, e nada mudou desde então."
    ],
    correta: 1,
    porque: "O texto separa explicitamente as duas camadas: os achados sobre período crítico dão peso científico ao argumento de expor a criança cedo a uma língua acessível, mas isso não resolve sozinho as questões de valor sobre preferência familiar, autonomia da criança surda e avaliação de tecnologias, que seguem em disputa histórica e política." }
],

fontes: [
  { n: 1, tipo: "fonte primária", ref: "Stokoe, W. C. 'Sign Language Structure: An Outline of the Visual Communication Systems of the American Deaf'. <em>Studies in Linguistics, Occasional Papers</em> 8, University of Buffalo, 1960. Reeditado em <em>Journal of Deaf Studies and Deaf Education</em> 10(1):3–37, 2005. Marco inicial da linguística das línguas de sinais.", url: "https://academic.oup.com/jdsde/article-abstract/10/1/3/361306" },
  { n: 2, tipo: "referência", ref: "Sandler, W. &amp; Lillo-Martin, D. <em>Sign Language and Linguistic Universals</em>. Cambridge University Press, 2006. Tratamento de referência sobre fonologia, morfologia e sintaxe de línguas de sinais, incluindo verbos concordantes, classificadores e marcação não manual.", url: "https://www.cambridge.org/core/books/sign-language-and-linguistic-universals/" },
  { n: 3, tipo: "documento oficial", ref: "Brasil. Lei nº 10.436, de 24 de abril de 2002. Dispõe sobre a Língua Brasileira de Sinais (Libras) e dá outras providências. Regulamentada pelo Decreto nº 5.626, de 2005.", url: "https://www.planalto.gov.br/ccivil_03/leis/2002/l10436.htm" },
  { n: 4, tipo: "referência", ref: "Quadros, R. M. de &amp; Karnopp, L. B. <em>Língua de Sinais Brasileira: Estudos Linguísticos</em>. Porto Alegre: Artmed, 2004. Obra de referência na descrição linguística sistemática da Libras.", url: "https://www.amazon.com.br/L%C3%ADngua-Sinais-Brasileira-Estudos-Lingu%C3%ADsticos/dp/8536303085" },
  { n: 5, tipo: "reportagem/histórico", ref: "Senghas, R. J. &amp; Kegl, J. 'Social considerations in the emergence of Idioma de Signos Nicaragüense (Nicaraguan Sign Language)'. <em>Signpost</em> 7, 1994; ver também síntese histórica em Wikipedia, 'Nicaraguan Sign Language', consultada em 2026, com base nas fontes primárias de Kegl, Senghas e Coppola.", url: "https://en.wikipedia.org/wiki/Nicaraguan_Sign_Language" },
  { n: 6, tipo: "fonte primária", ref: "Senghas, A. &amp; Coppola, M. 'Children Creating Language: How Nicaraguan Sign Language Acquired a Spatial Grammar'. <em>Psychological Science</em> 12(4):323–328, 2001.", url: "https://journals.sagepub.com/doi/10.1111/1467-9280.00359" },
  { n: 7, tipo: "fonte primária", ref: "Lenneberg, E. H. <em>Biological Foundations of Language</em>. New York: Wiley, 1967. Formulação original da hipótese do período crítico para aquisição de linguagem.", url: "https://psycnet.apa.org/record/1968-01551-000" },
  { n: 8, tipo: "artigo", ref: "Mayberry, R. I. &amp; Kluender, R. 'Rethinking the critical period for language: New insights into an old question from American Sign Language'. <em>Bilingualism: Language and Cognition</em> 21(5):886–905, 2018.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6329394/" },
  { n: 9, tipo: "artigo", ref: "Poizner, H., Klima, E. S. &amp; Bellugi, U. <em>What the Hands Reveal about the Brain</em>. MIT Press, 1987. Estudos de afasia de sinais após lesão cerebral em sinalizantes surdos.", url: "https://cdhh.idaho.gov/library/book/what-the-hands-reveal-about-the-brain/" },
  { n: 10, tipo: "artigo", ref: "Hickok, G., Bellugi, U. &amp; Klima, E. S. 'The neurobiology of sign language and its implications for the neural basis of language'. <em>Nature</em> 381(6584):699–702, 1996.", url: "https://www.nature.com/articles/381699a0" },
  { n: 11, tipo: "histórico", ref: "Segundo Congresso Internacional sobre Educação de Surdos, Milão, 1880. Resolução que formalizou o oralismo como política dominante e restringiu o uso de línguas de sinais em salas de aula. Documentado como parte da 'Memory of the World' da UNESCO.", url: "https://www.unesco.org/en/memory-world/key-documents-deaf-communities-milan-congress-1880" },
  { n: 12, tipo: "histórico", ref: "21st International Congress on Education of the Deaf, Vancouver, 2010. Resolução formal de repúdio à resolução do Congresso de Milão de 1880.", url: "https://www.researchgate.net/publication/49664396_Partners_in_Progress_The_21st_International_Congress_on_Education_of_the_Deaf_and_the_Repudiation_of_the_1880_Congress_of_Milan" },
  { n: 13, tipo: "catálogo", ref: "SIL International. 'Ethnologue's newest edition reports vitality of sign languages worldwide'. Contagem de línguas de sinais documentadas e estimativa do total mundial.", url: "https://www.sil.org/about/news/ethnologue%E2%80%99s-newest-edition-reports-vitality-sign-languages-worldwide" },
  { n: 14, tipo: "referência", ref: "Emmorey, K. <em>Language, Cognition, and the Brain: Insights from Sign Language Research</em>. Lawrence Erlbaum Associates, 2002. Síntese de pesquisa em psicolinguística e neurolinguística de línguas de sinais.", url: "https://www.taylorfrancis.com/books/mono/10.4324/9781410603982/language-cognition-brain-karen-emmorey" },
  { n: 15, tipo: "artigo", ref: "Kegl, J., Senghas, A. &amp; Coppola, M. 'Creation through contact: Sign language emergence and sign language change in Nicaragua'. Em DeGraff, M. (org.), <em>Language Creation and Language Change: Creolization, Diachrony, and Development</em>. MIT Press, 1999.", url: "https://www.cato.org/free-society/fall-2025/spontaneous-emergence-nicaraguan-sign-language" },
  { n: 16, tipo: "referência", ref: "Wikipedia. 'Ann Senghas'. Biografia acadêmica e lista de trabalhos sobre a emergência da gramática espacial na Língua de Sinais Nicaraguense.", url: "https://en.wikipedia.org/wiki/Ann_Senghas" }
]
};
