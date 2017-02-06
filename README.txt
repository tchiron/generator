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
		La fonction peut avoir 5 arguments :
			Le premier argument doit être un tableau contenant 2 autres tableaux au minimum. Ceux-ci doit contenir les caracteres utiles à la création d'un mot de passe.
				Exemple :
					MonTableauDeCaractères = [
						[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
						["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
						["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
					];
				Par défaut, celui affiché en exemple sera utilisé.
			Le deuxième argument doit être un tableau contenant 3 messages au minimum.
				Le premier message sera adressé à l'utilisateur lorsqu'on lui demandera d'entrer un nombre pour la longueur du mot de passe.
				Le deuxième message sera adressé à l'utilisateur lorsque le nombre entré s'avère ne pas être un nombre et on lui redemande de bien mettre un nombre.
				Le troisième message sera adressé à l'utilisateur lorsqu'il aura entré un nombre inférieur au nombre de caractère minimum du mot de passe, ou par défaut inférieur ou égal à 0.
				Le quatrième message sera adressé à l'utilisateur lorsqu'il aura entré un nombre supérieur au nombre de caractère maximum du mot de passe.
				le cinquième message sera adressé à l'utilisateur à la fin du programme pour lui suggèrer de noter le mot de passe afin de ne pas l'oublier, ce message n'est pas obligatoire.
				Exemple :
					MesMessagesPersonnalisés = [
						"Entrez le nombre de caratère de votre mot de passe :",
						"Vous n'avez pas entré un nombre, \nVeuillez entrer le nombre de caratère de votre mot de passe :",
						"Vous avez entré un nombre inférieur ou égal à 0, \nVeuillez entrer le nombre de caratère de votre mot de passe :",
						"Vous avez entré un nombre de caractère trop grand, \nVeuillez entrer le nombre de caractère de votre mot de passe",
						"Nous vous conseillons de noter le mot de passe sur un papier pour ne pas l'oublier."
					];
				Par défaut, celui affiché en exemple sera utilisé.
			Le troisième argument doit être un nombre. Il définira le nombre de caractère minimum du mot de passe.
				Exemple :
					NombreMinimumDeCaractère = 1;
				Par défaut, celui affiché en exemple sera utilisé. Ainsi, il ne peut avoir de demande de mot de passe de zéro caractère.
			Le quatrième argument doit être un nombre. Il définira le nombre de caractère maximum du mot de passe.
				Par défaut, il n'y a pas de nombre de caractère maximum.
			Le cinquième argument doit être un nombre. Il définira le nombre de caractère qui s'affichera comme texte par défaut lorsque nous demanderons à l'utilisateur d'entrer un nombre pour la longueur de son mot de passe.
				Par défaut, rien de s'affiche.
			Si aucun des arguments n'est passé en paramètre ou si ceux-ci sont erroné, les valeurs par défaut citées seront alors utilisé.
	- Puis rechercher la ligne suivante dans le fichier .js :
		window.document.exemple_formulaire.mdp.value
		Remplacer "exemple_formulaire" par la valeur de l'attribut name de votre formulaire
		Remplacer "mdp" par la valeur de l'attribut name de votre input qui doit contenir le mot de passe