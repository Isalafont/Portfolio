---
title: "Ce que Rails m'a appris sur l'architecture par convention"
description: "Convention over Configuration, ce n'est pas une limitation. C'est une décision d'architecture — et comprendre pourquoi change tout."
date: "2026-03-05"
draft: false
---

J'ai passé des années à bidouiller le web avant de vraiment apprendre à coder. Depuis 1995, en fait — l'époque du HTML à la main, des forums, de Dreamweaver. Geek dans l'âme, mais jamais vraiment dev.

En 2020, j'ai fait Le Wagon. Reconversion complète — j'étais assistante caméra dans l'audiovisuel avant ça.

La première semaine sur Rails, j'ai trouvé ça presque offensant. Où sont les fichiers de config ? Pourquoi tout est dans `app/` ? Qui a décidé que les modèles allaient là et pas ailleurs ?

Personne. Et tout le monde en même temps.

C'est ça, Convention over Configuration. La programmation orientée objet était déjà un concept à apprivoiser — mais une fois que Rails s'est mis en place dans ma tête, c'est devenu la chose la plus logique du monde. Et comprendre *pourquoi* — pas juste l'accepter — a changé ma façon de concevoir des applications.

---

## La convention comme contrat d'équipe

Quand DHH a posé les bases de Rails, il a fait un pari : que la plupart des décisions d'architecture que les équipes prennent sont les mêmes. Même nom pour les tables, même structure de dossiers, même façon de nommer les routes.

Au lieu de laisser chaque équipe réinventer ça, Rails a dit : voilà la réponse. Passons à autre chose.

Ce que ça change concrètement : quand j'arrive sur un projet Rails que je n'ai jamais vu, je sais déjà où chercher. Le modèle `User` est dans `app/models/user.rb`. Le controller pour les articles est dans `app/controllers/articles_controller.rb`. Les migrations sont dans `db/migrate/`.

Je n'ai pas à lire une doc d'architecture interne pour commencer à être utile. La convention est la doc.

---

## Où ça devient vraiment intéressant : la métaprogrammation

Rails ne se contente pas d'organiser les fichiers. Il génère du comportement à partir des conventions.

Quand tu définis `belongs_to :user` dans un modèle, Rails ne trouve pas juste la clé étrangère dans ta table. Il génère des méthodes (`user`, `user=`, `user_id`), il ajoute des validations de présence selon ta version, il infère le nom de la table depuis le nom de la classe.

Tout ça, sans que tu écrives une ligne de config.

Sur DataPass, on pousse ça plus loin avec des classes générées dynamiquement pour gérer les types d'habilitation. Au lieu de dupliquer la logique pour chaque type d'API gouvernementale, on génère des classes à partir d'une définition partagée. La convention détermine le comportement. Le code est écrit une fois.

C'est là que j'ai compris que Convention over Configuration n'est pas une limitation de Rails. C'est son architecture principale.

---

## Le contre-argument honnête

Il y a un vrai revers.

Quand quelque chose ne marche pas comme prévu, le débogage peut être opaque. Pourquoi cette callback se déclenche-t-elle deux fois ? D'où vient cette méthode sur mon modèle ? La magie est pratique jusqu'à ce qu'elle ne le soit plus.

Et pour les architectures vraiment non-standard, Rails peut résister. Si tu veux faire quelque chose que le framework n'a pas anticipé, tu passes du temps à contourner des conventions qui ne s'appliquent pas à ton cas.

Ce n'est pas un défaut. C'est un trade-off. Rails optimise pour le cas courant, pas pour tous les cas.

---

## Ce que j'en retiens

La vraie leçon de Rails, c'est qu'une bonne architecture n'essaie pas de tout prévoir. Elle établit des conventions claires pour les cas fréquents, et laisse de l'espace pour les exceptions.

Ça s'applique au-delà de Rails. Quand je conçois un composant, je me demande : quelle est la convention par défaut ? Qu'est-ce qu'un développeur s'attendrait à trouver ici sans avoir à lire de documentation ?

Le code le plus maintenable n'est pas le plus flexible. C'est le plus prévisible.

Rails m'a mis du temps à apprendre ça. Maintenant je ne peux plus m'en passer.
