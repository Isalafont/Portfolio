---
title: "Passer une certif RGAA quand on l'applique déjà depuis 2 ans"
description: "J'applique le RGAA sur DataPass depuis deux ans. Alors pourquoi passer une certification ? Ce que la pratique m'a appris — et ce qu'elle ne m'a pas appris."
date: "2026-05-11"
draft: true
---

J'applique le RGAA sur DataPass depuis deux ans. Tests clavier, revues PR, composants conçus accessibles dès le départ. Alors pourquoi passer une certification ?

La question honnête, c'est : est-ce que je certifie ce que je sais déjà, ou est-ce que je vais apprendre quelque chose ?

Je ne sais pas encore. Je passe la certif le 22 mai.

---

## Ce que la pratique m'a appris

Deux ans sur un projet gouvernemental qui sert des milliers d'utilisateurs, dont une partie non négligeable a un handicap. L'accessibilité n'est pas optionnelle chez BetaGouv — c'est une exigence légale avec des amendes réelles.

Ça m'a appris des choses que les tutoriels n'enseignent pas.

Que les outils automatiques (Axe, Lighthouse) couvrent environ 30% des critères RGAA. Que le reste, c'est du jugement. Que "zéro erreur Axe" ne veut pas dire accessible — j'en ai un exemple précis dans [cet article](/writing/rgaa-exigence-pas-option).

Que l'accessibilité se conçoit, elle ne se rajoute pas. Qu'un composant React dynamique peut passer tous les audits et être inutilisable avec NVDA après une mise à jour du DOM.

Que le vrai problème est culturel : convaincre l'équipe que tester au clavier avant de merger n'est pas du temps perdu.

---

## Ce que la pratique ne m'a pas appris

La pratique m'a rendu compétente sur ce que je rencontre. Sur les patterns que DataPass utilise, sur les composants qu'on a construits, sur les cas limites qu'on a déjà vus.

Mais le RGAA a 106 critères. J'en applique régulièrement peut-être 40 ou 50. Les autres, je les connais de nom, pas d'expérience.

La certification, c'est ça : formaliser ce que je sais, et découvrir les angles morts.

Il y a aussi quelque chose de structurel. La pratique sans cadre théorique solide, ça crée des habitudes parfois arbitraires. Pourquoi j'utilise role="alert" ici et pas aria-live="polite" là ? Est-ce que je saurais défendre le choix en audit ? Est-ce que c'est le bon choix, ou juste celui que j'ai appris à faire ?

---

## Ce que j'attends vraiment

Pas le diplôme. Je m'en fous un peu.

Ce que j'attends, c'est de revenir avec une vision plus complète. De savoir ce que je ne sais pas. De pouvoir contribuer à une conversation sur l'accessibilité avec un cadre rigoureux, pas juste de l'expérience terrain.

Et aussi, honnêtement : de pouvoir mettre un mot dessus quand je parle de mon travail. "Je travaille sur l'accessibilité depuis deux ans" c'est difficilement vérifiable. "Je suis certifiée Access42" c'est un raccourci qui ferme moins de portes.

Ce n'est pas très glamour comme motivation. Mais c'est honnête.

---

Je mettrai à jour ici après le 22 mai.
