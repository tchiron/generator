# Générateur de mot de passe

## Description :

Ce programme Javascript permet la création d'un mot de passe par l'appui sur un bouton et l'insertion de celui ci dans un input d'un formulaire d'inscription.

## Installation :

Placez le fichier `password_generator.js` dans votre dossier puis faites appel à lui grâce à la balise :

```javascript  
<script type="text/javascript" src="Lien/Vers/LeFichier.js"></script>  
```

## Utilisation :

1. Pour faire appel à la fonction un bouton doit être créé avec l'attribut :

	```javascript  
	onclick="generator()"  
	```
	Le bouton peut être n'importe où dans le formulaire, la logique voudrait qu'il soit à côté de l'input du mot de passe.  

2. La fonction peut avoir *5 arguments* :

	* Le premier argument doit être un tableau contenant 2 chaînes de caractère au minimum. Ceux-ci doivent contenir les caractères utilent à la création d'un mot de passe. **Il ne peut être _non-défini_**.
	
		Exemple :
		
		```javascript  
		MonTableauDeCaractères = [  
			"0123456789",  
			"abcdefghijklmnopqrstuvwxyz",  
			"ABCDEFGHIJKLMNOPQRSTUVWXYZ"  
		];  
		```

	* Le deuxième argument doit être un tableau contenant 3 messages au minimum. **Il ne peut être _non-défini_**.
	
		* Le premier message sera adressé à l'utilisateur lorsqu'on lui demandera d'entrer un nombre pour la longueur du mot de passe.  
		* Le deuxième message sera adressé à l'utilisateur lorsque le nombre entré s'avère ne pas être un nombre et on lui redemande de bien mettre un nombre.  
		* Le troisième message sera adressé à l'utilisateur lorsqu'il aura entré un nombre inférieur au nombre de caractère minimum du mot de passe, ou par défaut inférieur ou égal à 0.  
		* Le quatrième message sera adressé à l'utilisateur lorsqu'il aura entré un nombre supérieur au nombre de caractère maximum du mot de passe.  
		* Le cinquième message sera adressé à l'utilisateur à la fin du programme pour lui suggèrer de noter le mot de passe afin de ne pas l'oublier, ce message n'est pas obligatoire.
		
		Exemple :
		
		```javascript  
		MesMessagesPersonnalisés = [  
			"Entrez le nombre de caratère de votre mot de passe :",  
			"Vous n'avez pas entré un nombre, \nVeuillez entrer le nombre de caratère de votre mot de passe :",  
			"Vous avez entré un nombre inférieur ou égal à 0, \nVeuillez entrer le nombre de caratère de votre mot de passe :",  
			"Vous avez entré un nombre de caractère trop grand, \nVeuillez entrer le nombre de caractère de votre mot de passe",  
			"Nous vous conseillons de noter le mot de passe sur un papier pour ne pas l'oublier."  
		];  
		```

	* Le troisième argument doit être un nombre. Il définira le nombre de caractère minimum du mot de passe. Il peut être non-défini (**_non recommandé_**).
	
		Exemple :  
			> NombreMinimumDeCaractère = 1;
			
		Si la variable est non-défini le nombre minimum sera de 1.

	* Le quatrième argument doit être un nombre. Il définira le nombre de caractère maximum du mot de passe. Il peut être non-défini (**_non recommandé_**).

	* Le cinquième argument doit être un nombre. Il définira le nombre de caractère qui s'affichera comme texte par défaut lorsque nous demanderons à l'utilisateur d'entrer un nombre pour la longueur de son mot de passe. Il peut être _non-défini_.

	Si des arguments ne sont pas passé en paramètre ou si ceux-ci sont erroné, des messages d'erreur s'afficheront. Si tel est le cas, reportez-vous à [la liste des erreurs](ERROR.md).

3. Puis rechercher la ligne suivante dans le fichier .js :

	```javascript  
	window.document.exemple_formulaire.mdp.value  
	```  
	Remplacer "exemple_formulaire" par la valeur de l'attribut name de votre formulaire  
	Remplacer "mdp" par la valeur de l'attribut name de votre input qui doit contenir le mot de passe
	
## Messages d'erreur :

La liste des messages d'erreur est présente dans [le fichier ERROR.md](ERROR.md).
