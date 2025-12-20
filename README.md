# FestiSoif Website
Repo pour la partie Web de notre module CAI à l'ENIB.  
Nous sommes le **Groupe-02**.  
On choisit de développer pour un affichage optimal sur **IPhone 12 Pro**

## Contributeurs, roles et distribution des pages

| Contributeur        | Role      | Pages  |
| ------------------ | --------- | ------ |
| Ayyoub Boulahri    | Chef de projet | accueil + RA + NotFound |
| Yassine El Mesbahy |  | détails + splash|
| Sofiya Debois      |  | profil + oups |
| Ilias Reguig       |  | register + connexion |
| Zakaria Boumline   |  | login |  

## Technologies
* HTML/CSS
* Framework: React / Tailwind CSS

## Cahier des charges

### Page d'accueil
#### Affichage
* Le logo de l'application est visible à l'écran.  
* Un bouton `Commencer` apparaît à l'écran.  
#### Interactions 
* Cliquer sur le bouton `Commencer` permet d'accéder à la page de login.  

### Page login (choix)
#### Affichage 
* Le logo de l'application apparaît en haut de l'écran.  
* Deux boutons de connexion par des applications tierces `Google` et `Facebook` apparaîssent en-dessous.  
* Un bouton `Se Connecter` apparaît en-dessous.  
* Un bouton `Créer un compte` apparaît en-dessous.  
* Un bouton `Scanner mon QR code de billet` apparaît en-dessous.  
* Un bouton `Continuer en tant qu'invité` apparaît en-dessous.  
#### Interactions 
* Cliquer sur le bouton `Se Connecter` permet d'accéder à la page de connexion (à un compte existant).  
* Cliquer sur le bouton `Créer un compte` permet d'accéder à la page de création de compte.  
* Cliquer sur le bouton `Continuer en tant qu'invité` permet d'accéder à la carte (page map) sans s'identifier.  

### Page se connecter (à son compte)
#### Affichage 
* L'intitulé de la page ("Se conecter") apparaît en haut de l'écran.  
* Une section `Email` avec un champ de remplissage de texte apparaît en-dessous.  
* Une section `Mot de passe` avec un champ de remplissage de texte apparaît en-dessous.  
* Un petit lien `Mot de passe oublié?` figure en-dessous.  
* Un bouton `Se connecter` apparaît en-dessous.  
* Une section `Social login` figure en-dessous, avec:  
  * Un bouton `Continuer avec Google`,  
  * Un bouton `Continuer avec Facebook`.
* En bas de l'écran, apparaît le texte "Pas de compte ?" suivi d'un lien `Créer un compte`.  
#### Interactions 
* L'utilisateur peut renseigner son e-mail dans le champ `Email`.  
* L'utilisateur peut renseigner son mot de passe dans le champ `Mot de passe`.  
* Une fois que cela est fait, cliquer sur le bouton `Se connecter` permet d'accéder à la carte (page map).  
* S'il ne possède pas de compte, l'utilisateur peut cliquer sur le bouton `créer un compte` pour accéder à la page de création de compte.  

### Page créer un compte
#### Affichage 
* L'intitulé de la page ("Créer un compte") apparaît en haut de l'écran.
* Des champs de remplissage textuels `Nom Complet`, `Email`, `le mot de passe`, `Confirmer le mot de passe` figurent en-dessous.
* Un bouton `Créer un compte` figure en-dessous.
* En bas de l'écran, apparaît le texte "J'ai déjà un compte -" suivi d'un lien `Se connecter`.  
#### Interactions 
* L'utilisateur peut renseigner les champs `Nom Complet`, `Email`, `le mot de passe`, `Confirmer le mot de passe`.  
* Une fois que cela est fait, l'utilisateur peut cliquer sur le bouton `Creer mon compte` pour accéder à la carte (page map).  
* S'il s'est trompé précédemment, l'utilisateur peut cliquer sur le bouton `Se connecter` pour se connecter à un compte déjà existant.

### Page map (homepage)
#### Affichage 
* Une carte des environs de l'utilisateur s'affiche à l'écran.  
* Une barre de recherche figure en haut de l'écran, contenant le prompt `Rechercher un point d'intérêt...`.  
* Les boutons `Point d'eau`, `Toilettes`, `Resto` et `Scène` figurent juste en-dessous.  
* Des icônes manifestant l'emplacement des points d'intérêt s'affichent sur la carte à des endroits précis.  
* Une petite légende figure en bas à droite de l'écran pour préciser le sens des icônes s'affichant sur la carte.  
* Un menu figure en bas de l'écran, avec trois boutons: `Home`, `Mode RA` et `Profil`.  
* Un petit bouton de changement de style d'affichage figure juste au-dessus du menu, à gauche.  
#### Interactions 
* L'utilisateur peut filtrer les points d'intérêt qu'il veut afficher, entre `Point d'eau`, `Toilettes`, `Resto` ou `Scène`.  
* L'utilisateur peut saisir du texte dans la barre de recherche pour chercher un point d'intérêt spécifique.
* L'utilisateur peut cliquer sur l'icône d'un point d'intérêt pour accéder à la page de détails du point d'intérêt.
* L'utilisateur peut cliquer sur le bouton `Mode RA` pour accéder à la page RA. (En théorie, se connecter à ses lunettes RA.)
* L'utilisateur peut cliquer sur le bouton `Profil` pour accéder à la page de profil.  
* L'utilisateur peut cliquer sur le bouton de changement de style d'affichage pour changer le style de la carte (light, dark, satellite, topographie...)  

### Page RA
#### Affichage 
* Un bouton flèche de retour apparaît en haut à gauche de l'écran.  
* Le nom du point d'intérêt vers lequel l'application nous mène s'affiche en haut de l'écran.  
* L'affichage de la caméra d'affiche à l'écran, permettant d'afficher les éléments de réalité augmentée par-dessus.  
* En bas de l'écran, les boutons `Utiliser mes lunettes RA` et `Quitter la RA` apparaîssent.  
#### Interactions 
* L'utilisateur peut cliquer sur l'icône de son profil pour accéder à la page de profil.  
* L'utilisateur peut cliquer sur la flèche de retour pour retourner à la page précédente, depuis laquelle il est arrivé.  
* ~~L'utilisateur peut cliquer sur le bouton `Utiliser mes lunettes RA` pour accéder à la page RA~~ -> Nous y sommes déjà, ce bouton ne sert à rien...  
* L'utilisateur peut cliquer sur le bouton `Quitter la RA` pour retourner à la page précédente, depuis laquelle il est arrivé.  

### Page détails (du point d'intérêt)
#### Affichage 
* Un widget avec le nom du point d'intérêt et une icône associée s'affiche en haut de l'écran.  
* En-dessous se trouve un second widget avec la distance à l'utilisateur, l'affluence (Faible, Moyenne, Elevée), et une courte description de l'emplacement.  
* Les boutons `Y aller` et `Commencer sur Lunettes RA` se trouvent en-dessous.  
#### Interactions 
* L'utilisateur peut cliquer sur le bouton `Y aller` pour accéder à la page RA. (Réel accès à la page RA cette fois.)  
* L'utilisateur peut cliquer sur le bouton `Commencer sur Lunettes RA` pour accéder à la page RA. (En théorie, se connecter à ses lunettes RA.)  

### Page mon profil
#### Affichage 
* En haut à gauche de l'écran se trouve un bouton `Retour`. 
* Une icône avec la photo de profil de l'utilisateur apparaît en haut à gauche de l'écran, suivie du nom de l'utilisateur.  
* En-dessous se trouve un libellé "Mode Offline" suivi d'un petit slider (bouton à 2 états).  
* En-dessous se trouvent en disposition verticale une liste de sections:  
  * Favoris,  
  * Langue,  
  * Thème,  
  * Accessibilité,  
  * A propos,  
  * Aide,  
  * Déconnexion.   
#### Interactions 
* L'utilisateur peut cliquer sur le bouton `Retour` pour retourner à la page précédente, depuis laquelle il est arrivé.
