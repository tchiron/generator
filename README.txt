Générateur de mot de passe

Description :
	Ce programme Javascript permet la création d'un mot de passe par l'appui sur un bouton et l'insertion de celui ci dans un input d'un formulaire d'inscription.

Installation :
	- Placez le fichier .js dans votre dossier puis faites appel à lui grâce à la balise :
	<script type="text/javascript" src="Lien/Vers/LeFichier.js"></script>

Utilisation :
	- Pour faire appel à la fonction un bouton doit être créé avec l'attribut :
	onclick="generateur()"
	Le bouton peut être n'importe où dans le formulaire, la logique voudrait qu'il soit à côté de l'input du mot de passe.
	- Puis rechercher la ligne suivante dans le fichier .js :
	window.document.exemple_formulaire.mdp.value
		Remplacer "exemple_formulaire" par la valeur de l'attribut name de votre formulaire
		Remplacer "mdp" par la valeur de l'attribut name de votre input qui doit contenir le mot de passe