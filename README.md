# Générateur de mot de passe

## Description :

Ce programme Javascript permet la génération d'une chaîne de caractère pouvant servir de mot de passe.

## Installation :

Placez le fichier `generator.js` dans votre dossier puis faites appel à lui grâce à la balise :

```javascript  
<script type="text/javascript" src="Lien/Vers/LeFichier.js"></script>  
```

## Utilisation :

1. Pour faire appel à la fonction un bouton doit être créé avec l'attribut :

	```javascript  
	onclick="generator()"  
	```
	Le bouton peut être n'importe où dans le formulaire, la logique voudrait qu'il soit à côté de l'input du mot de passe.  

2. La fonction peut avoir *2 arguments* :

	* Le premier argument doit être un nombre définissant la taille de la chaîne de caractère à générer. **Il ne peut être _non-défini_**.

	* Le deuxième argument doit être un tableau contenant 2 chaînes de caractère au minimum. Ceux-ci doivent contenir les caractères utilent à la création d'un mot de passe. Il peut être non-défini (**_non recommandé_**).
	
		Exemple :
		
		```javascript  
		MonTableauDeCaractères = [  
			"0123456789",  
			"abcdefghijklmnopqrstuvwxyz",  
			"ABCDEFGHIJKLMNOPQRSTUVWXYZ"  
		];  
		```

	Si il manque des arguments ou si ceux-ci sont erroné, la fonction renverra false.