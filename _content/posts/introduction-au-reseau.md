---
title: Introduction au réseau
excerpt: Petite introduction de la notion de réseau informatique
date: "2021-05-12"
slug: introduction-au-reseau
status: published
---

# Introduction au réseau

Les réseaux permettent l’échange de données entre différents équipements informatiques.

Le service sur réseau intervient dans votre quotidien à toutes les échelles. En effet, quand vous envoyez un message à travers une application comme Whatsapp, vous envoyez une requête à une machine qui stocke vos mails et ceux d’autres personnes.

Cependant, ce message va parcourir différentes étapes. Avant d’arriver à destination, votre message va traverser des dizaines de câbles et équipements, être converti, amplifié, chiffré, atténué.

Toutes ses étapes sont possibles grâce au réseau qui permet de connecter les machines entre elle.

Les réseaux ont donc pour but de permettre la transmission d’informations.

# Visualisons un réseau

Mais à quoi ressemble un réseau :

![network](network.png)

C’est un réseau de type LAN. Regardons ensemble sa contenance.

Il y a les **équipements terminaux **: PC, téléphones, serveurs, imprimantes. Ces éléments peuvent avoir besoin de s’échanger des données.

Il y a les **équipements d’interconnexion **: switchs et routeurs. Ils relient les équipements entre eux.

Les traits représentent les **supports de communication**. Ce sont des câbles qui permettent de relier 2 équipements entre eux.

**Schéma physique / schéma logique**

Il est toujours intéressant de schématiser les réseaux pour mieux les comprendre.

Vous devez différentier les deux schémas suivant :

Le schéma logique pour concevoir, modéliser et configurer votre réseau. Il apporte des informations complémentaires : la localisation (ville/bâtiment/salle) ; le nombre de câbles utilisés ; le nombre exact de machines sur le réseau ; une vue détaillée des équipements d’interconnexion.

Le schéma physique pour déployer le réseau, installer et câbler le matériel.

Voici les deux schémas :

<p id="gdcalert2" ><span style="color: red; font-weight: bold">>>>>>  gd2md-html alert: inline image link here (to images/image2.png). Store image on your image server and adjust path/filename/extension if necessary. </span><br>(<a href="#">Back to top</a>)(<a href="#gdcalert3">Next alert</a>)<br><span style="color: red; font-weight: bold">>>>>> </span></p>

![alt_text](images/image2.png "image_tooltip")

**Card 4 - Switch et routeur ? **

Le switch Ethernet, aussi appelé “commutateur informatique”, est dotée de port Ethernet RJ45. Le switch assure la communication, la réception et la redistribution de messages entre les ordinateurs et serveurs d’un réseau. Le switch opte pour une répartition _« intelligente »_ de l’information. En se basant sur une table d’adressage _(adresse MAC et port)_, il va ainsi redistribuer l’information uniquement aux appareils informatiques concernés.

Qu’est-ce que le routeur ?

Le routeur est un appareil permettant **la communication entre un réseau local domestique et Internet**. Le réseau local domestique peut être par exemple un ordinateur personnel [ou un objet connecté](https://www.lebigdata.fr/iot-big-data). Le routeur est un périphérique faisant la liaison entre la connexion [Internet](https://www.futura-sciences.com/tech/definitions/internet-internet-3983/) et les terminaux rattachés à la connexion internet.

Il permet aussi de **protéger le réseau d’une éventuelle intrusion**. En activant un haut niveau de sécurité sur le routeur, il est possible de protéger l’ordinateur et les informations qu’il contient contre les cyberattaques.

Le routeur possède quatre principaux éléments :

- les ports d'entrée ;
- les ports de sortie ;
- la matrice de [commutation](https://www.futura-sciences.com/tech/definitions/tech-commutation-1170/) (gère la communication d’un port à un autre ainsi que son débit) ;
- le processeur de routage.
