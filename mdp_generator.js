function generateur(caracteres, messages, nb_caractere_min, nb_caractere_max, nb_caractere_defaut) {
	/*
	Paramètre de la fonction
		caracteres : doit être un tableau, contenant au minimum 2 autres tableaux des caractères pouvant servir à faire un mot de passe
		messages : doit être un tableau, contenant les messages à afficher à l'utilisateur, 3 messages au minimum
		nb_caractere_min : doit être un nombre, servant de limite inférieure de nombre de caractère pour le mot de passe
		nb_caractere_max : doit être un nombre, servant de limite supérieure de nombre de caractère pour le mot de passe
		nb_caractere_defaut : doit être un nombre, servant de nombre par défaut pour la longueur du mot de passe
	
	Début de déclaration des variables par défaut
		caracteres_defaut : tableau contenant
			- un tableau de tous les chiffres entier, de 0 à 9, pouvant servir à générer un mot de passe
			- un tableau de toutes les lettres minuscules, de l'alphabet latin, pouvant servir à générer un mot de passe
			- un tableau de toutes les lettres majuscules, de l'alphabet latin, pouvant servir à générer un mot de passe
		messages_defaut : tableau contenant les messages à afficher à l'utilisateur
	Ces variables seront utilisé si les paramètres entrés dans la fonction generateur sont erroné ou non défini
	*/
	var caracteres_defaut = [
		[0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
		["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
		["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
	];
	var messages_defaut = [
		"Entrez le nombre de caratère de votre mot de passe :",
		"Vous n'avez pas entré un nombre, \nVeuillez entrer le nombre de caratère de votre mot de passe :",
		"Vous avez entré un nombre inférieur ou égal à 0, \nVeuillez entrer le nombre de caratère de votre mot de passe :",
		"Vous avez entré un nombre de caractère trop grand, \nVeuillez entrer le nombre de caractère de votre mot de passe",
		"Nous vous conseillons de noter le mot de passe sur un papier pour ne pas l'oublier."
	];
	/*
	Fin de déclaration des variables par défaut
	
	Début de vérification des paramètres de la fonction
		D'abord que caracteres soit bien un tableau et qu'il contient bien 2 tableaux au minimum
		Ensuite que messages soit bien un tableau et qu'il contient bien 3 messages au minimum
		Puis que nb_caractere_min soit bien un nombre (ajout d'une exeption pour NaN qui est détecté comme un nombre par typeof), sinon nous mettrons une valeur par défaut
		Après que nb_caractere_max soit bien un nombre (ajout d'une exeption pour NaN qui est détecté comme un nombre par typeof) et pas inférieur ou égal au nombre de caractère minimum, sinon nous réinitialisons la variable
		Enfin que nb_caractere_defaut soit bien un nombre (ajout d'une exeption pour NaN qui est détecté comme un nombre par typeof), sinon nous réinitialisons la variable
	*/
	if (Array.isArray(caracteres) === true && caracteres.length > 1) {
		for (var i = 0; i < caracteres.length; i++) {
			if (Array.isArray(caracteres[i]) === false || caracteres[i].length === 0) {
				i = caracteres.length;
				caracteres = caracteres_defaut;
			}
		}
	}
	else {
		caracteres = caracteres_defaut;
	}
	
	if (Array.isArray(messages) === true && messages.length > 2) {
		for (var i = 0; i < messages.length; i++) {
			if (typeof messages[i] !== "string" || messages[i] === "") {
				messages[i] = messages_defaut[i];
			}
		}
	}
	else {
		messages = messages_defaut;
	}
	
	if (typeof nb_caractere_min !== "number" || Number.isNaN(nb_caractere_min) === true) {
		nb_caractere_min = 1; // Ainsi, il n'y aura pas de demande de mot de passe de 0 caractère
	}
	
	if (typeof nb_caractere_max !== "number" || Number.isNaN(nb_caractere_max) === true || nb_caractere_max <= nb_caractere_min) {
		nb_caractere_max = ""; // Ainsi, il n'y a pas de nombre maximal
	}
	
	if (typeof nb_caractere_defaut !== "number" || Number.isNaN(nb_caractere_defaut) === true) {
		nb_caractere_defaut = ""; // Ainsi, elle ne mettra aucune valeur
	}
	/*
	Fin de vérification des paramètres de la fonction
	
	Déclaration de la variable nb_caractere_mdp
		nb_caractere_mdp : variable qui contiendra un nombre donné par l'utilisateur, ce nombre servira à générer un mot de passe de cette longueur
	*/
	var nb_caractere_mdp = acquisition_nombre_caractere(messages[0], nb_caractere_defaut);
	/*
	Début de vérification de la variable nb_caractere_mdp
		nb_caractere_mdp : doit être un nombre, supérieur ou égal au nombre minimum de caractère et inférieur ou égal au nombre maximum de caractère, si il y a un nombre maximum de caractère
	*/
	while (Number.isNaN(nb_caractere_mdp) === true || nb_caractere_mdp < nb_caractere_min || (nb_caractere_max !== "" && nb_caractere_mdp > nb_caractere_max)) {
		if (Number.isNaN(nb_caractere_mdp) === true) {
			nb_caractere_mdp = acquisition_nombre_caractere(messages[1], nb_caractere_defaut);
		}
		else if (nb_caractere_mdp < nb_caractere_min) {
			nb_caractere_mdp = acquisition_nombre_caractere(messages[2], nb_caractere_defaut);
		}
		else if (nb_caractere_max !== "" && nb_caractere_mdp > nb_caractere_max) {
			nb_caractere_mdp = acquisition_nombre_caractere(messages[3], nb_caractere_defaut)
		}
	}
	/*
	Fin de vérification de la variable
	
	Début de répartition du nombre de caractère du mot de passe équitable entre les différents types de caractère (entier, lettre minuscule et majuscule)
	*/
	var nb_chaque_caractere = Math.trunc(nb_caractere_mdp / caracteres.length);
	var nb_chaque_caracteres = [];
	var quotient = nb_caractere_mdp % caracteres.length;
	for (var i = 0; i < caracteres.length; i++) {
		if (quotient !== 0) {
			nb_chaque_caracteres.push(nb_chaque_caractere + 1);
			quotient--;
		}
		else {
			nb_chaque_caracteres.push(nb_chaque_caractere);
		}
	}
	/*
	Fin de répartition du nombre de caractère
	
	Début de sélection de caractère de différent type
	*/
	var caracteres_mdp = [];
	for (var i = 0; i < caracteres.length; i++) {
		for (var j = 0; j < nb_chaque_caracteres[i]; j++) {
			caracteres_mdp.push(caractere_aleatoire(caracteres[i]));
		}
	}
	/*
	Fin de sélection des caractères
	
	Génération du mot de passe à partir des caractères sélectionnés
	*/
	var mot_de_passe = generer(caracteres_mdp);
	/*
	Retournes le mot de passe généré dans l'input du formulaire d'inscription
		window.document.NomDuFormulaire.NomDeInput.value
		NomDeInput correspond à la valeur de l'attribut name de l'input de votre mot de passe
		NomDuFormulaire correspond à la valeur de l'attribut name du formulaire contenant l'input de votre mot de passe
	*/
	window.document.exemple_formulaire.mdp.value = mot_de_passe;
	
	// Puis un message qui conseille de noter le mot de passe sur un papier, si celui est présent dans la variable messages
	if (messages.length === 5 && typeof messages[4] === "string") {
		alert(messages[4]);
	}
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
	message : message personnalisé du prompt
	valeur_defaut : valeur par défaut qui sera affiché dans le champ du prompt
La fonction retournera le nombre saisi par l'utilisateur
*/
function acquisition_nombre_caractere(message, valeur_defaut) {
	return Math.trunc(Number(prompt(message, valeur_defaut)));
}