# Termos do catálogo — avaliação e estado

Catálogo agora com **347 conceitos** em 29 áreas. Este arquivo registra o que entrou nas duas últimas levas e, principalmente, **o que foi recusado e por quê**.

---

## Leva 2: avaliação da sua tabela de 24 áreas

Entraram **66 dos ~120 itens** propostos. Os cortes se dividem em três categorias.

### Recusados por já existirem no catálogo (38 itens)

Dissonância cognitiva · Efeito placebo · Cegueira por desatenção · Fenomenologia · Navio de Teseu · Véu da ignorância · Endossimbiose · Seleção de parentesco · Entropia · Emaranhamento quântico · Efeito Casimir · Quiralidade · Catálise · Peste Negra · Placas tectônicas · Correntes oceânicas · Tragédia dos comuns · P vs NP · Criptografia assimétrica · Hipótese Sapir-Whorf · Ready-made · Bauhaus · Harmônicos · Círculo das quintas · Contraponto · Polirritmia · Atonalidade · Separação dos poderes · Espécies invasoras · Monty Hall · Paradoxo de Simpson · Quarto chinês · Neuroplasticidade · CRISPR · Infinito de Cantor · Teorema de Gödel · Teoria do caos · Fractais · Viés de confirmação

Vale notar que sua própria tabela repetia seis itens em áreas diferentes (Tragédia dos comuns em Economia e Ecologia; Quorum sensing em Biologia e Microbiologia; Monty Hall em Paradoxos e Matemática; Paradoxo de Fermi em Astronomia e Paradoxos; Placebo em Psicologia e Neurociência; Paradoxo do mentiroso em Paradoxos e Cognição). Isso não é descuido: é sintoma do problema de taxonomia descrito abaixo.

### Recusados por serem tópico, não conceito

- **Etimologia** — é um campo inteiro, não um conceito com tese. Um documento sobre "etimologia" não teria pergunta central. Entrou **Gramaticalização** no lugar, que é um mecanismo específico e testável.
- **Cidades subterrâneas** — é uma lista de curiosidades, não um conceito. Não há o que marcar como consenso ou controvérsia.
- **Conurbação** — é uma definição de duas linhas. Já está coberta por *Cidades primazes e concentração urbana*.
- **Sisu** — comparado a ikigai, wabi-sabi, ubuntu e wu wei, tem literatura acadêmica muito mais rala e circula sobretudo em livro de autoajuda. Fora.
- **Radiação Hawking** entrou, mas há sobreposição real com *Termodinâmica de buracos negros*, que já existia. Se você escrever os dois, precisam ser escritos como par, dividindo o escopo explicitamente.

### Recusa da taxonomia: "Paradoxos", "Experimentos mentais" e "Ciência estranha"

Essas três não entraram **como áreas**, e essa foi a decisão mais substantiva que tomei contra a sua proposta.

O catálogo organiza por campo do conhecimento. "Paradoxo" e "experimento mental" são *formas de argumento*, não campos — Monty Hall é matemática, o gato de Schrödinger é física, o cérebro numa cuba é filosofia. Misturar os dois eixos numa mesma lista de áreas produz exatamente as duplicatas que apareceram na sua tabela, e faria o sorteio ter chance desigual de cair no mesmo conceito por dois caminhos.

"Ciência estranha" tem um problema adicional: é um critério de curiosidade, não de conhecimento. Os itens listados ali são todos biologia, e o rótulo puxa o catálogo na direção do factoide — o oposto do que o app se propõe com marcação epistêmica e citação.

Os itens em si eram bons e **entraram todos, alocados no campo correto**. Se você quiser navegar por "paradoxos" mesmo assim, a solução correta é um campo `tags` separado no catálogo, ortogonal a `area` — dá para implementar, mas é mudança de estrutura de dados e preferi não fazer sem você decidir.

### O que entrou (66 itens)

**Astronomia (6 — área nova, o catálogo não tinha nenhuma entrada):** Paradoxo de Fermi e o Grande Filtro (fundi os dois, que são a mesma discussão) · Lentes gravitacionais · Estrelas de nêutrons · Radiação Hawking · Energia escura · Escada de distâncias cósmicas

**Psicologia (4):** Efeito Dunning-Kruger · Memória falsa e o paradigma DRM · Falácia do custo afundado · Teoria da mente

**Filosofia e lógica (6):** Problema do bonde · Absurdismo · Cérebro numa cuba · Paradoxo do mentiroso · Navalha de Ockham · Demônio de Laplace

**Física (4):** Tunelamento quântico · Paradoxo dos gêmeos · Gato de Schrödinger · Demônio de Maxwell

**Química (3):** Efeito hidrofóbico · Princípio de Le Chatelier · Química prebiótica

**Biologia (10):** Evo-devo · Quorum sensing · Plasticidade fenotípica · Transferência horizontal de genes · Bacteriófagos · Biofilmes · Tardígrados · Fungos que manipulam insetos · Senescência negligenciável · Regeneração de órgãos

**Neurociência (3):** Cérebro dividido · Homúnculo cortical · Reconsolidação da memória

**Economia (5):** Seleção adversa · Problema agente-principal · Doença holandesa · Armadilha da liquidez · Efeito Cantillon

**Computação (3):** Máquina de Turing · Provas de conhecimento zero · Teorema CAP

**Linguística (3):** Gramaticalização · Línguas de sinais · Diglossia

**Artes (3):** Chiaroscuro · Dadaísmo e surrealismo (fundidos) · Trompe-l'œil

**Arquitetura (4):** Brutalismo · Cidade-jardim · Arquitetura vernacular · Metabolismo japonês

**Ciência Política (3):** Teorema do eleitor mediano · Soft power · Tirania da maioria

**Sustentabilidade/Ecologia (3):** Cascata trófica · Micorrizas · Biomagnificação

**Antropologia (4):** Ikigai · Wabi-sabi · Ubuntu · Wu wei

**História (4):** Revolução Haitiana · Liga Hanseática · Crise do século III · Império do Mali

**Geografia (1):** El Niño e a Oscilação Sul

**Matemática (1):** Paradoxo de Banach-Tarski

### Os cinco melhores da leva, e por quê

O app foi desenhado em torno de marcação epistêmica — consenso, emergente, controverso, especulação. Os melhores candidatos são aqueles em que **a versão popular do conceito está documentadamente errada**, porque aí a marcação faz trabalho real em vez de decorar:

1. **Ikigai** — o diagrama de quatro círculos que circula no Ocidente não é japonês e não corresponde ao conceito de Mieko Kamiya. É um caso limpo de invenção ocidental atribuída a outra cultura.
2. **Micorrizas / "wood wide web"** — a simbiose é consenso sólido; a narrativa de árvores conversando por rede subterrânea levou uma revisão dura em 2023 (Karst, Jones e Hoeksema, *Nature Ecology & Evolution*).
3. **Efeito Dunning-Kruger** — o gráfico viral é em boa parte artefato de autocorrelação. Sobra um efeito real e bem menor.
4. **Cérebro dividido** — a leitura clássica de "duas consciências num crânio" foi contestada em 2017 com os mesmos pacientes.
5. **Efeito hidrofóbico** — a explicação escolar ("óleo e água se repelem") está errada; o fenômeno é dirigido pela entropia da água.

**Cascata trófica** merece menção: o caso dos lobos de Yellowstone é o exemplo mais citado da ecologia popular e um dos mais contestados na literatura. Se você escrever esse documento, ele precisa ser escrito com o ceticismo em primeiro plano, não como anedota.

### Um item que exige cuidado se virar documento

**Efeito Cantillon** entrou, mas com ressalva: a tese de que dinheiro novo beneficia quem o recebe primeiro tem base, e efeitos distributivos de expansão monetária são estudados a sério. O rótulo "efeito Cantillon", porém, circula sobretudo em ambiente da escola austríaca, e a magnitude do efeito é disputada. Se virar documento, o marcador tem que ser *controverso*, não *consenso* — e o texto precisa dizer de onde vem o enquadramento.

---

## Leva 1: as 5 áreas anteriores (75 termos)

Continuam pendentes da sua revisão item a item. Um ajuste que fiz agora: *Gerrymandering e geografia eleitoral*, que eu tinha posto em Geografia, duplicava *Gerrymandering e geometria eleitoral* já existente em Ciência Política. Substituí por **Problema da unidade de área modificável**, que é o conceito geográfico subjacente e não repete nada.

### Sustentabilidade (15)
Pegada de carbono e os três escopos · Economia circular · Limites planetários · Sucessão ecológica · Serviços ecossistêmicos · Espécies invasoras · Curva de Kuznets ambiental · Pegada hídrica · Economia donut · Acidificação dos oceanos · Capacidade de suporte · Efeito estufa: mecanismo físico · Antropoceno · Limites termodinâmicos da reciclagem · Greenwashing

### Direito (15)
Habeas corpus · Legalidade penal · In dubio pro reo · Coisa julgada · Devido processo legal · Contraditório e ampla defesa · Dolo e culpa · Boa-fé objetiva · Prescrição e decadência · Precedente e stare decisis · Responsabilidade civil objetiva · Personalidade jurídica · Princípio da insignificância · Soft law · Ônus da prova no processo civil

### Teoria musical (15, dentro da área Música)
Modos gregos · Contraponto · Cadências harmônicas · Círculo das quintas · Forma sonata · Microtonalidade · Polirritmia · Cânone e fuga · História da notação · Consonância e dissonância · Harmonia estendida no jazz · Modulação tonal · Batimentos acústicos · Escalas pentatônicas · Leitmotiv

### História (15)
Queda do Império Romano · Feudalismo · Cruzadas · Renascimento italiano · Explorações marítimas · Revolução Francesa · Independências latino-americanas · Impérios pré-colombianos · Revolução Russa · Causas da Primeira Guerra · Holocausto: intenção e processo · Direitos civis nos EUA · Queda do Muro · Império mongol · Tráfico atlântico

### Geografia (15)
Tectônica de placas · Köppen · Cidades primazes · Fronteiras naturais e traçadas · Desertificação · Circulação termohalina · Biomas · Transição demográfica · **Problema da unidade de área modificável** (substituiu gerrymandering) · Rios internacionais · Ilhas de calor · Monções · Projeções cartográficas · Push-pull · Maldição dos recursos

---

## Onde o catálogo está agora

347 conceitos, 21 com documento escrito (os 20 já registrados acima mais Cascata trófica, escrito depois deste arquivo ser redigido). O sorteio continua caindo só nos que têm documento, então acrescentar termos não afeta o uso: é reservatório para escrever depois.

Distribuição por área: História 33 · Filosofia 24 · Biologia 22 · Música 21 · Economia 20 · Física 19 · Direito 19 · Sustentabilidade 18 · Matemática 16 · Geografia 16 · Química 13 · Psicologia 12 · Ciência Política 11 · Linguística 11 · Arquitetura 10 · Computação 10 · Nutrição 8 · Estatística 8 · Neurociência 7 · Sociologia 7 · Antropologia 7 · Design 7 · Marketing 6 · Astronomia 6 · Artes 5 · Negócios 4 · IA 3 · Literatura 2 · Medicina 2.

As áreas mais rasas são **Literatura (2)** e **Medicina (2)**, e ambas comportariam expansão antes de qualquer outra coisa.
