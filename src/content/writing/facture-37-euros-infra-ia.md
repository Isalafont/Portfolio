---
title: "Comment une facture de 37€ en 48h m'a forcée à repenser toute mon infra IA"
description: "Mes agents ont brûlé 37€ pendant que je dormais. Diagnostic, migration multi-modèles via OpenRouter, et -90% sur la facture mensuelle."
date: "2026-04-09"
draft: false
---

Lundi 7 avril au matin, j'ouvre mon dashboard Anthropic et je vois 37€ déjà consommés. Pas sur deux semaines. Sur deux jours de week-end.

Je n'avais lancé aucune session manuelle. C'est le genre de chiffre qui te force à t'asseoir et à comprendre ce qui s'est passé — vraiment, pas en diagonale.

---

## Pourquoi j'étais "aveugle" au coût

Ce week-end-là, je n'étais même pas devant mon écran. J'étais en voyage à l'étranger, profitant d'une déconnexion (relative). Et c'est là tout le paradoxe de l'automatisation : elle n'a pas besoin de vous pour dépenser votre argent.

Pendant que je visitais, mes agents Owly, Bender et les autres discutaient entre eux sur mon VPS. Ce qui est d'habitude une orchestration géniale est devenu, le temps d'un changement de facturation d'Anthropic, un gouffre financier silencieux.

---

## Le diagnostic : 92 000 tokens par message

Chaque fois qu'un agent démarre une session — que ce soit une vraie session de travail ou un cron automatique à 3h du matin — OpenClaw charge l'intégralité de son contexte : TOOLS.md, MEMORY.md, AGENTS.md, SOUL.md, les tâches actives, les logs, les résumés...

Résultat : **92 000 tokens d'input** en moyenne par message pour Owly. Sur Claude Sonnet à $3/M tokens, c'est 28 centimes par message. Multiplié par des dizaines de crons par heure pendant 48h : **37€**.

---

## La solution : le multi-modèle via OpenRouter

J'ai migré toute l'infrastructure pour choisir le modèle par agent et par usage.

| Agent / Usage          | Modèle                    | Pourquoi ?                                      |
| ---------------------- | ------------------------- | ----------------------------------------------- |
| **Owly** (Direct)      | `claude-sonnet-3-5`       | Orchestration complexe et stratégique           |
| **Owly** (Crons)       | `gemini-3-flash-preview`  | Bas coût, ultra-rapide pour les tâches simples  |
| **Bender** (Code)      | `gpt-5.1-codex-mini`      | Précision sur Rails                             |
| **Data & Iris**        | `gemini-2.5-flash`        | Analyse et specs : Flash est parfait            |
| **Colette** (Écriture) | `claude-sonnet-4-6`       | La "plume" d'Anthropic reste au-dessus          |
| **Compaction LCM**     | `mistral-small-3.2`       | Souveraineté et rapidité sur l'archivage        |

---

## Les chiffres : -90% sur la facture

| Modèle              | $/M tokens (In/Out) | Coût estimé mensuel |
| ------------------- | ------------------- | ------------------- |
| Gemini 3 Flash      | $0.50 / $3          | ~$5.40              |
| GPT-5.1 Codex Mini  | $0.25 / $2          | ~$1.98              |
| Sonnet 4-6          | $3 / $15            | ~$14.85             |
| **TOTAL**           |                     | **~$28.00**         |

Au lieu de 37€ en deux jours, je suis maintenant sur une simulation de **28$ par mois**.

---

## 3 leçons apprises

**1. Le monitoring n'est pas optionnel.**
Un changement de conditions tarifaires d'un provider peut briser votre économie en 24h. Mettre des alertes de dépense n'est pas de la paranoïa — c'est de l'hygiène.

**2. Le multi-modèle est une nécessité.**
Utiliser un modèle "Frontier" pour un heartbeat à 3h du matin est une erreur de débutant qu'on ne fait qu'une fois. Chaque agent, chaque usage, son modèle.

**3. L'IA souveraine progresse.**
Mistral Small sur OpenRouter est une alternative crédible et ultra-économique pour les tâches de fond. Et c'est français.
