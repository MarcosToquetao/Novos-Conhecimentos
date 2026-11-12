---
name: produzir
description: Produz lições do Novos Conhecimentos com a família de agentes (roteirista, conferente, juiz). Use quando o usuário pedir para produzir, gerar ou reescrever lições. Argumentos, ids de conceitos ou um número N para pegar os N próximos da fila.
---

# Produzir lições

Você é o despachante. Seu trabalho é passar ids aos agentes e ler respostas de uma linha. **Nunca leia** documento, candidata ou lição: isso é dos agentes, e cada leitura sua gasta o modelo mais caro da sessão. Rode esta skill com a sessão em Sonnet.

## Quais conceitos

- Com ids nos argumentos: use esses.
- Com um número N: `python pipeline/gerar.py proximos N`.
- Sem argumentos: N = 3.

Trabalhe em lotes de até 3 conceitos ao mesmo tempo.

## Sequência de cada conceito

Regra de modelos (três níveis, do RuFlo): o que é determinístico roda em código, o simples em Haiku, escrita em Sonnet, julgamento em Opus. O modelo de cada agente já está no cabeçalho dele.

1. **Escrita.** Dois agentes `roteirista` em paralelo, um com «`<id>`, versão a» e outro com «`<id>`, versão b». Cada um responde `<id>.<v>: ok` ou `falhou`.
2. **Conferência.** Para cada versão `ok`, um agente `conferente` com «`<id>`, versão `<v>`», em paralelo. Se a resposta trouxer N maior que zero, um `roteirista` em correção: «`<id>`, versão `<v>`, corrija pelas notas em `pipeline/candidatas/<id>.<v>.fatos.json`». Uma rodada só.
3. **Julgamento.** Um agente `juiz` com «`<id>`». Ele responde `<id>: a`, `<id>: b` ou `<id>: nenhuma`.
4. **Se nenhuma:** um `roteirista` em correção com as notas de `pipeline/candidatas/<id>.juiz.json`, só na versão que o juiz apontar como base (se ele não apontar, a de maior nota em `slop`), depois o `juiz` de novo. Se der nenhuma outra vez, pare neste conceito: ele fica para o editor.
5. **Com vencedora:** rode `python pipeline/gerar.py destino <id>`.
   - `publicar`: `python pipeline/gerar.py publicar <id> pipeline/candidatas/<id>.<v>.json`.
   - `humano`: não publique. O par aparece na tela de revisão (`python pipeline/revisar.py`) para o editor escolher.

Se uma versão falhou na escrita e a outra passou, siga com uma só: o juiz sabe julgar versão única.

## Se um tipo de agente não existir na sessão

Os agentes de `.claude/agents/` carregam no início da sessão. Se `roteirista`, `conferente` ou `juiz` não aparecerem como tipo de agente, use o agente de uso geral com o modelo do cabeçalho (sonnet, haiku, opus) e comece o pedido com «Siga à risca as instruções de `.claude/agents/<nome>.md`.»

## No fim do lote

1. `node build.js --checar`.
2. Commit e push do que mudou (`js/docs`, `dados`, `sw.js`, `pipeline/candidatas`).
3. Relate uma linha por conceito: vencedora, se foi publicada ou ficou para o editor, e quantas rodadas de correção houve. Diga quantos pares esperam o editor.
