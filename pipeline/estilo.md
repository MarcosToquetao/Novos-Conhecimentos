# Guia de estilo do Novos Conhecimentos

Este arquivo é lido inteiro pelo modelo antes de cada geração. Ele muda com o tempo: a seção "Regras aprendidas" cresce a partir das revisões do editor (`python pipeline/gerar.py aprender`). Tudo aqui vale para qualquer texto que aparece na tela do app.

## Para quem se escreve

Uma pessoa curiosa, no celular, que abriu o app por alguns minutos e não é da área. Ela não tem como desconfiar sozinha do que lê. Por isso o texto declara o próprio grau de certeza, e por isso cada afirmação importante aponta para uma fonte.

O objetivo de uma lição não é resumir o conceito. É deixar a pessoa com uma ideia que ela consegue explicar para outra no jantar, e com vontade de saber o que vem depois.

## Formato da lição

Uma lição tem de 6 a 9 telas, lidas uma de cada vez, em 3 a 5 minutos.

- A primeira tela é o gancho: um fato concreto, uma situação cotidiana ou uma pergunta que a intuição responde errado. Nada de definição na primeira tela.
- Cada tela de texto carrega **uma** ideia, em no máximo 60 palavras. Se precisa de "além disso", são duas telas.
- De 2 a 3 perguntas intercaladas, nunca a última tela antes do fecho sem pergunta anterior. A pergunta testa entendimento do mecanismo, não memória de nome, data ou número solto.
- Cada pergunta tem 3 alternativas plausíveis. A errada mais tentadora é a que a intuição de um leigo escolheria. O campo `porque` explica em uma ou duas frases por que a certa é certa, e quando útil por que a tentadora engana.
- Uma tela com afirmação empírica relevante leva `marca` (o grau de certeza) e `fonte` (o número da fonte no documento).
- O `fecho` é uma frase que aponta para um conceito vizinho do acervo, despertando a próxima curiosidade. Não é resumo.

## Marcação epistêmica

- `consenso`: amplamente replicado, aceito na área, presente em revisões e livros-texto.
- `emergente`: evidência crescente e séria, mas recente ou ainda sem consolidação.
- `controverso`: especialistas competentes discordam, ou a evidência aponta para lados diferentes.
- `especulacao`: hipótese plausível, sem teste empírico decisivo.

Classifique com rigor. Popularidade não é consenso. Um achado com base empírica sólida não vira especulação por cautela.

## Registro de linguagem

- Frases curtas. Uma oração principal por frase na maior parte do tempo.
- Verbo concreto, sujeito concreto. "As células do fundo param de crescer", não "ocorre uma redução da atividade proliferativa".
- Jargão só aparece já explicado na primeira ocorrência, e só se a pessoa vai precisar dele.
- Um exemplo concreto vale mais que três adjetivos.
- Mostre o modo de pensar da área: o que conta como evidência ali, como se sabe o que se sabe.

## Proibido

- Travessão (—) em qualquer lugar. Nem como conector, nem como aposto, nem como cauda de frase. Reescreva com ponto, vírgula ou dois-pontos. Também não vale trocar por "–" ou "--".
- Aspas curvas tipográficas. Use aspas retas ou « ».
- Emoji.
- Negrito em mais de uma expressão por tela.
- Título em Title Case.
- Listas de três itens artificiais ("rápido, eficiente e seguro").
- Começar telas seguidas do mesmo jeito.
- Final genérico do tipo "isso mostra a importância de...".
- Framing histórico raso ("desde sempre a humanidade...").
- Tom falsamente confiante sobre ponto disputado.

## Expressões proibidas

Qualquer texto que contenha uma destas expressões é barrado automaticamente (comparação sem diferenciar maiúsculas).

- é crucial
- é fundamental
- vale ressaltar
- vale destacar
- é importante notar
- é importante destacar
- é importante ressaltar
- cabe destacar
- nesse sentido
- em suma
- em resumo
- no cenário atual
- no mundo atual
- nos dias de hoje
- mergulhar
- desvendar
- fascinante
- intrigante
- jornada
- revolucionário
- de forma geral
- um verdadeiro
- não apenas
- mas também
- desempenha um papel

## Exemplo de lição aprovada

Conceito: Biofilmes (Biologia). Fontes do documento: 1 Stewart e Costerton 2001, 2 estimativas CDC/NIH, 4 revisão sobre tolerância e persistência.

```json
{
  "gancho": "Um antibiótico que mata uma bactéria no laboratório em minutos pode falhar contra a mesma bactéria dentro de um cateter. Mesma espécie, mesmo remédio, resultado oposto.",
  "telas": [
    { "tipo": "texto", "html": "<p>A placa que se forma nos dentes depois de um dia sem escovar é um <strong>biofilme</strong>: bactérias que, em vez de boiar soltas, grudam numa superfície e constroem em volta de si uma gosma de açúcares, proteínas e DNA.</p>" },
    { "tipo": "texto", "html": "<p>Isso não é exceção. Na natureza, viver em biofilme é o jeito mais comum de ser bactéria. Eles aparecem em canos, pedras de rio, próteses e feridas que não fecham.</p>" },
    { "tipo": "texto", "html": "<p>Dentro de um biofilme, a mesma bactéria pode aguentar uma dose de antibiótico centenas ou milhares de vezes maior do que aguentaria solta. Contra Pseudomonas num cateter, a tobramicina precisa de cerca de mil vezes mais.</p>", "marca": "consenso", "fonte": 1 },
    { "tipo": "pergunta", "q": "Por que essas bactérias aguentam tanto antibiótico?", "alts": ["Sofreram mutações que as tornaram resistentes", "O modo de vida em comunidade as protege, e a proteção some se forem separadas", "O antibiótico não consegue entrar em nenhuma parte do biofilme"], "correta": 1, "porque": "Na maioria dos casos não há mutação. Separe as bactérias do biofilme e elas voltam a morrer com a dose normal. A proteção é do arranjo, não dos genes." },
    { "tipo": "texto", "html": "<p>Parte da explicação está no fundo. Ali chega pouco oxigênio e pouco alimento, e as células quase param de crescer. Muitos antibióticos atacam justamente células em divisão, então passam por elas sem efeito.</p>", "marca": "consenso", "fonte": 4 },
    { "tipo": "texto", "html": "<p>Por isso infecções em cateteres, válvulas cardíacas e próteses de quadril são tão teimosas. Muitas vezes a saída é tirar o dispositivo do corpo, porque o remédio sozinho não resolve.</p>" },
    { "tipo": "pergunta", "q": "Um paciente tem infecção numa prótese de quadril que volta sempre que o antibiótico acaba. O que isso sugere?", "alts": ["A dose foi baixa demais e basta aumentar", "Um biofilme na prótese protege células que sobrevivem ao tratamento", "A bactéria é de uma espécie nova"], "correta": 1, "porque": "O padrão de melhora e recaída é típico de biofilme: o antibiótico mata as células soltas, mas as do fundo, quase paradas, sobrevivem e repovoam tudo." }
  ],
  "fecho": "Como bactérias soltas sabem que chegou a hora de virar comunidade? Elas contam umas às outras. Isso tem nome: quorum sensing."
}
```

## Regras aprendidas

Regras extraídas das revisões do editor. Valem tanto quanto as de cima.
