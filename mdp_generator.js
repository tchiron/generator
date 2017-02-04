/*
Fonction pour générer un mot de passe
*/
function generateur() {
	/*
	Déclaration des variables
	caracteres : tableau contenant
	- un tableau de tous les chiffres entier, de 0 à 9, pouvant servir à générer un mot de passe
	- un tableau de toutes les lettres minuscules, de l'alphabet latin, pouvant servir à générer un mot de passe
	- un tableau de toutes les lettres majuscules, de l'alphabet latin, pouvant servir à générer un mot de passe
	mot_de_passe : variable qui contiendra le mot de passe final que l'on retournera dans le formulaire
	messages : tableau contenant les messages à afficher à l'utilisateur
	nb_caractere_mdp : variable qui contiendra un nombre donné par l'utilisateur, ce nombre servira à générer un mot de passe de cette longueur
	*/
	var caracteres = [
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
		["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
	];
	var mot_de_passe = "";
	var messages = [
		"Entrez le nombre de caratère de votre mot de passe :",
		"Vous n'avez pas entré un nombre, \nVeuillez entrer le nombre de caratère de votre mot de passe :",
		"Vous avez entré un nombre inférieur ou égal à 0, \nVeuillez entrer le nombre de caratère de votre mot de passe :",
		"Nous vous conseillons de noter le mot de passe sur un papier pour ne pas l'oublier."
	];
	var nb_caractere_mdp = acquisition_nombre_caractere(messages[0]);
	
	//	Vérification que nb_caractere_mdp est bien un nombre et supérieur à 0
	while (Number.isNaN(nb_caractere_mdp) === true || nb_caractere_mdp <= 0) {
		if (Number.isNaN(nb_caractere_mdp) === true) {
			nb_caractere_mdp = acquisition_nombre_caractere(messages[1]);
		}
		else if (nb_caractere_mdp <= 0) {
			nb_caractere_mdp = acquisition_nombre_caractere(messages[2]);
		}
	}
	
	// Répartition du nombre de caractère du mot de passe équitable entre les différents types de caractère (entier, lettre minuscule et majuscule)
	var nb_chaque_caractere = Math.trunc(nb_caractere_mdp / caracteres.length);
	var caracteres_mdp = [];
	var nb_chaque_caracteres = [];
	switch (nb_caractere_mdp % caracteres.length) {
		case 0 :
			nb_chaque_caracteres = [nb_chaque_caractere, nb_chaque_caractere, nb_chaque_caractere];
			break;
		case 1 :
			nb_chaque_caracteres = [nb_chaque_caractere + 1, nb_chaque_caractere, nb_chaque_caractere];
		break;
		case 2 :
			nb_chaque_caracteres = [nb_chaque_caractere + 1, nb_chaque_caractere + 1, nb_chaque_caractere];
		break;
	}
	
	// Sélection de caractère de différent type
	for (var i = 0; i < caracteres.length; i++) {
		for (var j = 0; j < nb_chaque_caracteres[i]; j++) {
			caracteres_mdp.push(caractere_aleatoire(caracteres[i]));
		}
	}
	
	// Génération du mot de passe à partir des caractères sélectionnés
	mot_de_passe = generer(caracteres_mdp);
	
	/*
	Retournes le mot de passe généré dans l'input du formulaire d'inscription
	window.document.NomDuFormulaire.NomDeInput.value
	NomDeInput correspond à la valeur de l'attribut name de l'input de votre mot de passe
	NomDuFormulaire correspond à la valeur de l'attribut name du formulaire contenant l'input de votre mot de passe
	*/
	window.document.exemple_formulaire.mdp.value = mot_de_passe;
	
	// Puis un message qui conseille de noter le mot de passe sur un papier
	alert(messages[3]);
}

/*
Fonction caractere_aleatoire qui choisi aléatoirement un caractère dans un tableau de caractère
tab : un tableau contenant tous les caractères pouvant servir à créer un mot de passe
La fonction retournera le caractère sélectionné
*/
function caractere_aleatoire(tab) {
	var nb = Math.floor(Math.random()*tab.length);
	return tab[nb];
}

/*
Fonction generer qui mélange les caractères pour en faire un mot de passe
tab : un tableau contenant tous les caractères servant à créer le mot de passe
La fonction retournera le mot de passe généré
*/
function generer(tab) {
	var mdp = "";
	
	while (tab.length > 0) {
		var nb = Math.floor(Math.random()*tab.length);
		mdp += tab[nb];
		var nouveau_tab = [];
		for (i = 0; i < tab.length; i++) {
			if (i !== nb) {
				nouveau_tab.push(tab[i]);
			}
		}
		tab = nouveau_tab;
	}
	return mdp;
}

/*
Fonction acquisition_nombre_caractere qui permettra d'envoyer une boite de dialogue avec un message personnalisé pour récupérer le nombre de caractère maximum du mot de passe que l'on doit générer
Le message personnalisé sera renseigné en paramètre de la fonction
La fonction retournera le nombre saisi par l'utilisateur
*/
function acquisition_nombre_caractere(message) {
	return Math.trunc(Number(prompt(message)));
}