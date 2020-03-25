# Loup Garou

Ce code reprend le jeu du loup garou pour la dernière séance de cours avec les L2 de l'UGA.

## Déroulement de la séance

- Etant donné que le serveur Discord principal n'a pas de salon pour React, je vous invite sur un [autre serveur](https://discord.gg/qk3TzeV).
- Je suis également disponible toute la journée sur skype -- mon identifiant est pl.guhur.
- Pendant la séance, nous allons travailler sur Material UI et Styled components
- Puis un TP noté va reprendre l'ensemble des notions vues en cours.
- Pensez à cloner ce repo et à répondre aux questions en modifiant directement ce README.

## Sass

Au cas où vous avez un trou de mémoire sur Sass, voici un [rappel de la syntaxe](https://devhints.io/sass).

## Material UI

Je vous invite à regarder la vidéo de [Human Talks Paris](https://www.youtube.com/watch?v=D3tB_DGgICE).


Quelques petites questions :

- Résumer en une phrase l'intérêt de Material UI
Material UI propose des composants React pour un développement web plus rapide et plus simple. On peut confectionner son propre thème graphique.
- Comment importer `material-ui` dans un fichier ?
On importe ses composants: import Button from '@material-ui/core/Button';
import { MuiThemeProvider, createMuiTheme, withStyles } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue'
- Comment une application peut utiliser un thème à travers l'ensemble d'un projet ?
 En encapsulant notre application dans un thème provider
- A quoi sert `createMuiTheme` ?
Créer un theme graphique personnalisé pour l'application.
- A quoi correspond `palette` ?
C'est l'attribut qui sert à définir les couleurs.
- Comment re-définir des propriétés ?
Pour redefinir des propriétés on utilise overrides
 - A quoi vous fait penser `withStyle` ? Comment l'utiliser ?
Cela ressemble à un   HOC, il faut importer une feuille de style à l'application: export default withStyles(styles)(Start);
- Reproduire les deux boutons rouge et bleu présentées dans la vidéo.
import React, {Component}  from "react";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from "@material-ui/core/styles";

import blue from "@material-ui/core/colors/blue";
import Button from "@material-ui/core/Button";

class App extends Component {
  render() {
    return(
      <MuiThemeProvider theme={theme}>
        <div>
          <Button className={this.props.classes.myLeftButton}>Bleu</Button>
          <Button>Rouge</Button>
        </div>
      </MuiThemeProvider>
      );
  }
}


const styles = {
  myLeftButton: {
    backgroundColor: 'blue'
  }
};

const theme = createMuiTheme({
  palette: {
    primary:blue
  },
  typography: {
    fontSize:15,
    fontFamily:"Arial"
  },
  overrides: {
    MuiButton : {
      root : {
        backgroundColor: "red",
        "&:hover": { backgroundColor : "yellow" }
      }
    }
  }
})




export default withStyles(styles)(App);



## Styled Components

De la même manière, voici une [vidéo](https://www.youtube.com/watch?v=mS0UKNBh-Ig) pour introduire le sujet.

Quelques petites questions :

- Qu'est-ce que le CSS-in-JS ?
Ensemble des librairies pour imbriquer du css dans d'autres fichiers JS, il gère des scopes.
- Qu'est-ce que sont les tagged templates (délimitées par des backticks) ?
 Ce sont des chaînes de caractères permettant d'intégrer des expressions.
- Donner un exemple d'un bouton personnalisé avec et sans les tagged templates ?
 sans tagged templates
btn(['btn1'])
avec tagged templates
btn`btn2`
- Comment utilise-t-on les props dans cette librarie ?
${props=> props.disable ? 'red' : 'green'};
- Reprendre l'exemple du Material UI avec styled-components; l'écrire avec la composition et avec l'héritage.
import React, {Component} from 'react';
import styled from 'styled-components'


class App extends Component {
  render() {
    return(
      
        <div>
          <Button disabled={true}>Bleu</Button>
          <Button>Rouge</Button>
        </div>
      
      );
  }
}

const Button = styled.button`
  color:white;
  
  ${props => `
  background-color : ${props.disabled ? 'blue' : 'red'};
  `};
  `
  export default App;
- Quelles sont les fonctions du contexte de styled-components ?
Il permet la gestion d'un thème. On peut surcharger le theme.
On peut combiner les components react avec styled components


## Mise en place du design

Pour mettre en pratique ces notions, je vous propose de designer une application reprenant le principe de jeu du loup garou.

Cette plateforme est entièrement numérique, ce qui permet de s'affranchir d'un maître du jeu, et donc d'avoir un joueur supplémentaire.

A l'initialisation de la partie, un joueur démarre une partie. Un court identifiant est alors communiqué aux autres joueurs, qui doivent rejoindre la partie.
Lorsque tous les joueurs ont rejoint la partie, la partie peut démarrer. Chaque joueur joue à tour de rôle depuis son téléphone.

Une contrainte importante est la synchronisation des joueurs : chaque joueur utilise son propre téléphone. Il reçoit un message lorsque c'est à son tour de jouer, ou attend autrement. Pour résoudre techniquement cette contrainte, tout en évitant d'écrire une application en backend, on utilise Firebase. Firebase permet d'utiliser des observateurs, qui réagissent lors d'un appel extérieur, ce qui donne une impression de temps réel.

Une partie du code vous est fournie, afin de faciliter la mise en place de Firebase et des context providers. Il vous est demandé d'explorer le code, d'y apporter un design responsive, et de compléter l'application pour ajouter les différentes étapes de jeu.

Copier .env dans .env.local et remplir de dernier à l'aide de ses identifiants Firebase.
Activer l'authentification anonyme dans la console de Firebase.

### Découverte du code

- Le code utilise des fonctions plutôt que des classes. Ecrire un bouton sous la forme d'une classe et d'une fonction. Retrouver les équivalences entre les méthodes des composants (telles que setState) et celles des fonctions ?

Bouton sous la forme d'une fonction : 

const Bouton = props => (
  <div>
    <button>Toto, {props.name}</button>
  </div>
);


Bouton sous la forme d'une classe :

class Bouton extends Component {
  constructor(props){
    super(props);
    this.state = {
      myState: true;
    }
  }
  
  render() {
    return (
      <div>
        <h1>Toto</h1>
      </div>
    );
  }
}
export default Bouton;

- Comment récupérer les props dans une fonction ?
En les passant dans les paramètres const function = (props) => {}
- Dans `App.js`, identifier les différents producteurs de données. Retrouver leur définition. Quelles données partagent-ils à l'ensemble de l'application ?
Les différents de données sont Game et User qui partagent les données de firebase
- Identifier les différentes pages de l'application. Décrire à l'aide d'une phrase le rôle de chacune d'entre elles.
StartPage : Menu principal où l'on peut choisir entre créer une nouvelle partie ou en rejoindre une
EndPage : Page de fin, affichage des vainqueurs
CreatePage : Page de création de la partie où on peut ajouter et inviter nos amis, et lancer la partie.
NightPage : Page de la nuit
ResultPage : Page après la nuit affichant les morts
CodePage : Page pour créer un code à envoyer à nos amis pour qu'ils rejoignent
CastPage : Page pour voter contre les autres joueurs
AlivePage : Les personnes vivantes
SpellPage : Page pour la sorcière, utilisation de ses potions
DeadPage : Page qu'un joueur voit lorsqu'il meurt
- Pourquoi voit-on sur plusieurs pages "Chargement du master game en cours" ?
Parce qu'on demande à l'afficher dans Game.js et GameMaster.js
- Avec les classes, nous utilisions `withMyContext` pour s'inscrire aux données d'un provider. Identifier dans services/Game.js la fonction qui joue désormais ce rôle.
const {children} = props;
  return (
    <gameContext.Provider value={{game}}>
      {children}
    </gameContext.Provider>
  );
};
- Dans `CodePage`, rappeler comment un formulaire gère les champs de remplissage des données.
onChange={e => setName(e.target.value)}

### Reprise du design

- En utilisant styled-components, reprendre le design du composant Button.
- Votre nouveau bouton peut alors être utilisé pour améliorer l'affichage de la page `StartPage`.
- Ajouter un header et un footer sur toutes les pages de l'application. 
- Réaliser le design du formulaire de de `CodePage`, utilisé pour rejoindre l'application.
- Faire de même avec `CreatePage`.


### Utilisation de Firebase

- Dans 'User.js', comment fait-on pour garder une trace persistente de l'application, même lorsqu'on rafraichit la page ? Comment reconnait-on l'utilisateur lorsqu'il revient dans l'application ?
On garde en props le contexte de la session. On reconnait l'utilisateur gra^ce à const doc
- Dans Firebase, nous ne pouvons pas ajouter des champs à un utilisateur. Par conséquent, nous devons créer une collection 
d'utilisateurs et synchroniser les utilisateurs avec cette table. Expliquer où est-ce que cette synchronisation a lieu.
Cette synchronisation a lieu dans useUser. On récupère l'utilisateur connecté et on lui donne un ID.
- A votre avis, à quoi sert useEffect ?
UseEffect effectu des actions avant que le code soit chargé entièrement par le navigateur.
- A quoi sert la fonction `unsubscribe` utilisée dans les `useEffect` de `User.js` ?
Elle permet de stoper la recherche de mise à jour de firebase.
- Décrire les trois valeurs de retour de `UseUser`.
error: donne les informations sur l'erreur si une erreur s'est produite
    loading: indique si les informations sont encore en cours de chargement ou non
    user: l'objet user
- Combien de collections dans Firebase pouvez-vous identifier ? A quoi correspondent les `doc` ?
Il y en a deux  'users' et'game'. Un document égal une valeur d'une collection. Soit un utilisateur dans la collection user par exemple.

### Contribuer à l'application

- Lors du lancement du jeu, ajouter l'attribution des rôles à chaque joueur : loup-garou, villageois, petite fille ou sorcier. Le nombre de loup-garou est calculé en fonction du nombre de joueurs.
- Chaque joueur reçoit alors une image de son rôle. Partager cette information depuis /wait.
- Lorsque la nuit tombe, la liste des joueurs encore vivants est proposée aux  loups garous, qui doivent se mettre d'accord. Réaliser cette fonction.
- Lorsque le jour arrive, tous les joueurs reçoivent une notification indiquant la cible des loups garous. Cette dernière est redirigée vers DeadPage.
- Les joueurs vivant votent pour éliminer un joueur, suspecté d'être un loup garou. Réaliser cette fonction.

### Rapport

Rédiger un court rapport -- inférieur à une page, expliquant les modifications apportées au projet. Motiver ses choix. Expliquer les difficultés rencontrées.

