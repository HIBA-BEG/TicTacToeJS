# MediaGame Tic Tac Toe

MediaGame est une start-up de jeux en ligne axée sur l'amélioration de l'expérience utilisateur en introduisant de nouveaux jeux engageants. Ce projet implémente un jeu de Tic Tac Toe en 20x20 qui permet à deux joueurs de s'affronter, avec pour objectif d'aligner 5 de leurs symboles en ligne droite.

## Technologies Utilisées
- **Frontend** : HTML, CSS, JavaScript (manipulation du DOM)
- **Stockage des données** : Local Storage

## Installation

### Prérequis
- Un navigateur web supportant HTML, CSS, et JavaScript.

### Étapes pour Exécuter le Projet Localement :
1. **Cloner la repo** :  git clone https://github.com/HIBA-BEG/TicTacToeJS.git
2. **Naviguer dans le répertoire du projet** :  cd MediaGameTicTacToe

3. **Ouvrir index.html** :
   
## Fonctionnalités du Jeu

### Interface

- Le jeu affiche un plateau de 20x20 cases. Deux joueurs jouent à tour de rôle en cliquant sur des cases vides pour placer leur symbole (X ou O).
- Le tour du joueur actuel est affiché à l'écran.
- Le jeu est réactif et peut être joué sur des ordinateurs de bureau, des tablettes et des appareils mobiles.

## Mécanique du Jeu

- **Victoire** : Un joueur gagne en alignant 5 de ses symboles en ligne, en colonne ou en diagonale.
- **Match nul** : Si toutes les cases sont remplies sans qu'aucun joueur n'aligne 5 symboles, le jeu déclare un match nul.
- **Suivi des scores** : Le jeu garde une trace du score de chaque joueur au cours de plusieurs parties.
- **Redémarrer le jeu** : Un bouton "Rejouer" permet aux joueurs de commencer une nouvelle partie tout en conservant l'historique des scores.
- **Noms des joueurs** : Les joueurs peuvent entrer leurs noms avant de commencer la partie, et ces noms sont affichés pendant le jeu.

## Design et Réactivité

- Le jeu est conçu pour être visuellement attrayant et pleinement fonctionnel sur des appareils de différentes tailles d'écran.
