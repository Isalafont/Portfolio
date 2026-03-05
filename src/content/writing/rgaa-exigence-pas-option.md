---
title: "RGAA : l'accessibilité comme exigence, pas comme option"
description: "Retour d'expérience sur deux ans d'accessibilité dans un projet gouvernemental. Ce que les outils automatiques ne voient pas, et pourquoi ça compte vraiment."
date: "2026-03-05"
draft: false
---

C'était un audit de routine. J'avais lancé Axe DevTools sur la page de formulaire, comme d'habitude. Zéro erreur. Score parfait. Et pourtant, quand j'ai pris le clavier et essayé de naviguer sans souris, je me suis retrouvée bloquée au troisième champ.

Le label était là. Le contraste était bon. Axe ne voyait rien. Mais l'utilisateur, lui, était coincé.

C'est le moment où j'ai compris que l'accessibilité n'est pas un score. C'est une pratique.

---

## Ce que les outils automatiques ne voient pas

Les outils comme Axe, Lighthouse ou Wave sont indispensables. Ils attrapent les erreurs évidentes — images sans alt, contrastes insuffisants, formulaires sans label. Sur DataPass, ils font partie de notre CI depuis le début.

Mais ils couvrent environ 30% des critères RGAA.

Le reste, c'est du jugement humain. Est-ce que l'ordre de focus est logique ? Est-ce que le message d'erreur est compréhensible pour quelqu'un qui utilise un lecteur d'écran ? Est-ce que ce composant React se comporte correctement quand on le navigue au clavier après une mise à jour dynamique du DOM ?

Ces questions, aucun outil ne peut y répondre à ta place.

---

## Le piège de la conformité

Il y a une tentation dans les projets gouvernementaux de traiter le RGAA comme une checklist. On coche les cases, on génère le rapport, on publie la déclaration d'accessibilité. Mission accomplie.

Le problème, c'est que ça ne ressemble pas du tout à l'expérience d'un utilisateur aveugle qui essaie de déposer une demande d'habilitation API à 22h parce que c'est le seul moment où il a du temps.

Sur DataPass, on a fait un choix différent dès le départ : traiter l'accessibilité comme on traite la sécurité. Pas comme une feature qu'on ajoute à la fin. Comme une contrainte de conception qui influence chaque décision.

Concrètement, ça veut dire :
- Des revues d'accessibilité à chaque PR, pas seulement aux audits
- Des tests manuels au clavier sur les parcours critiques
- Des composants conçus pour être accessibles plutôt que rendus accessibles après coup

---

## Ce que ça change vraiment

La surprise, c'est que cette approche améliore l'expérience pour tout le monde.

Un formulaire bien structuré pour un lecteur d'écran est un formulaire plus clair pour n'importe qui. Un focus visible aide les utilisateurs à mobilité réduite, mais aussi celui qui vient de finir sa journée et qui clique à côté. Un message d'erreur explicite aide l'utilisateur NVDA autant que le développeur backend qui débogue en production.

L'accessibilité, quand elle est bien faite, n'est pas un compromis. C'est juste une meilleure conception.

---

## La vraie difficulté

Ce n'est pas technique. Les critères RGAA sont documentés, les patterns ARIA existent, les ressources sont disponibles.

La vraie difficulté, c'est culturelle. C'est de convaincre l'équipe que tester au clavier avant de merger, ce n'est pas du temps perdu. Que prendre 20 minutes pour comprendre comment NVDA annonce un composant dynamique, c'est un investissement.

Dans une administration qui sert des millions de personnes, dont un pourcentage non négligeable a un handicap, ce n'est pas une option. C'est une responsabilité.

Je n'ai pas toujours réussi à faire passer ce message. Mais je continue d'essayer — une PR à la fois.
