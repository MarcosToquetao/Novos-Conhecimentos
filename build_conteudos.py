#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
build_conteudos.py — junta js/docs/*.js em js/conteudos.js

Cada arquivo em js/docs/ define um documento no formato:
    CONTEUDOS["id-do-conceito"] = { ... };

Para acrescentar um conceito novo: crie o arquivo, rode este script,
faça o commit. Nada mais precisa ser alterado.

Rodar:  python3 build_conteudos.py
"""
import os, glob, sys

RAIZ = os.path.dirname(os.path.abspath(__file__))
DOCS = sorted(glob.glob(os.path.join(RAIZ, "js", "docs", "*.js")))
SAIDA = os.path.join(RAIZ, "js", "conteudos.js")

CABECALHO = """/* =========================================================================
   conteudos.js — GERADO por build_conteudos.py a partir de js/docs/*.js
   Não editar este arquivo à mão: as alterações serão perdidas.

   Estrutura de cada documento:
     termo, area, subtitulo, prerequisitos[], conexoes[]
     camadas: { nucleo, aprofundamento, extensao }  -> { minutos, html }
     flashcards[]  -> { f, v }
     prova[]       -> { camada, q, alts[], correta, porque }
     fontes[]      -> { n, tipo, ref, url }
   ========================================================================= */

const CONTEUDOS = {};

"""

if not DOCS:
    sys.exit("Nenhum documento encontrado em js/docs/")

partes = [CABECALHO]
for caminho in DOCS:
    with open(caminho, encoding="utf-8") as f:
        partes.append(f"/* ── {os.path.basename(caminho)} " + "─" * max(0, 56 - len(os.path.basename(caminho))) + " */\n")
        partes.append(f.read().rstrip() + "\n\n")

partes.append('if (typeof module !== "undefined") { module.exports = { CONTEUDOS }; }\n')

with open(SAIDA, "w", encoding="utf-8") as f:
    f.write("".join(partes))

print(f"{len(DOCS)} documento(s) -> js/conteudos.js ({os.path.getsize(SAIDA)/1024:.0f} KB)")
for d in DOCS:
    print("  •", os.path.basename(d))
