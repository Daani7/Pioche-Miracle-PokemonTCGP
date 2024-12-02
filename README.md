# Simulateur de Pioche Miracle - Pokémon TCG

Ce projet est un simulateur qui permet de reproduire la "pioche miracle" du jeu Pokémon TCG. Il utilise les probabilités indiquées pour déterminer la position finale d'une carte choisie aléatoirement après un mélange probabiliste. L'objectif est de retrouver la carte voulue parmi 5 cartes initiales.

---

## Fonctionnalités
- Sélectionnez une carte de départ parmi 5 positions.
- Simulez les déplacements probabilistes des cartes selon un système prédéfini.
- Affichez la position finale de la carte souhaitée.

---

## Structure du projet
Le projet est organisé en trois fichiers principaux :
- **`index.html`** : La structure de la page web (HTML).
- **`css/main.css`** : Le style visuel de l'application (CSS).
- **`js/main.js`** : La logique de simulation (JavaScript).

---

## Prérequis
Pour exécuter ce projet, vous avez besoin de :
- Un navigateur moderne (Chrome, Firefox, Safari, etc.).
- Un éditeur de texte pour modifier le code si nécessaire (Visual Studio Code, Sublime Text, etc.).

---

## Installation et utilisation

### Méthode 1 : Serveur local
1. Téléchargez les fichiers du projet.
2. Placez-les dans un répertoire sur votre ordinateur ou votre téléphone.
3. Lancez un serveur local (par exemple, avec une application comme [KSWEB](https://play.google.com/store/apps/details?id=ru.kslabs.ksweb) sur mobile ou Python sur ordinateur).
4. Accédez à l'application via votre navigateur à l'adresse `http://127.0.0.1:<port>`.

### Méthode 2 : Hébergement en ligne
1. Téléversez les fichiers sur une plateforme comme [GitHub Pages](https://pages.github.com/) ou [Netlify](https://www.netlify.com/).
2. Utilisez l'URL générée pour accéder à votre application depuis n'importe quel appareil.

---

## Comment jouer ?
1. Ouvrez l'application dans un navigateur.
2. Sélectionnez une carte de départ (1 à 5) dans le menu déroulant.
3. Cliquez sur **"Simuler"** pour voir où la carte choisie finit après le mélange.
4. Observez la position finale affichée à l'écran.

---

## Probabilités des déplacements
Les probabilités de déplacement sont basées sur l'image fournie :  
- Exemple pour la **carte 1** :
  - 30% de chance d'aller à la position 2.
  - 30% de chance d'aller à la position 4.
  - 10% de chance d'aller à la position 3 ou 5.

Ces probabilités sont définies dans le fichier **`main.js`**.

---

## Personnalisation
Vous pouvez facilement modifier les probabilités ou ajouter de nouvelles fonctionnalités :
- Changez les valeurs dans l'objet `probabilities` de **`main.js`**.
- Ajoutez des styles dans **`main.css`** pour personnaliser l'apparence.
- Ajoutez plus de cartes ou des règles avancées selon vos besoins.

---

## Capture d'écran
Voici une capture d'écran de l'application en fonctionnement :

_(Ajoutez une image ici si nécessaire, par exemple un screenshot de l'interface utilisateur.)_

---

## Contribuer
Les contributions sont les bienvenues ! Pour toute suggestion ou amélioration, n'hésitez pas à :
1. Cloner ce dépôt.
2. Créer une branche avec vos modifications.
3. Faire une Pull Request.

---

## Licence
Ce projet est sous licence MIT. Vous êtes libre de l'utiliser et le partager.
