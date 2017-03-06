function generator(caracteres, messages, nb_caractere_min, nb_caractere_max, nb_caractere_defaut) {
	/*
	Paramètre de la fonction
		caracteres : doit être un tableau, contenant au minimum 2 chaînes de caractère des caractères pouvant servir à faire un mot de passe
		messages : doit être un tableau, contenant les messages à afficher à l'utilisateur, 3 messages au minimum
		nb_caractere_min : doit être un nombre, servant de limite inférieure de nombre de caractère pour le mot de passe
		nb_caractere_max : doit être un nombre, servant de limite supérieure de nombre de caractère pour le mot de passe
		nb_caractere_defaut : doit être un nombre, servant de nombre par défaut pour la longueur du mot de passe
	
	Déclaration de la variable erreur
	*/
	var erreur = false;
	/*
	Début de vérification des paramètres de la fonction
		D'abord que caracteres soit bien un tableau et qu'il contient bien 2 chaines de caractère au minimum
		Ensuite que messages soit bien un tableau et qu'il contient bien 3 messages au minimum
		Puis que nb_caractere_min soit bien un nombre (ajout d'une exeption pour NaN qui est détecté comme un nombre par typeof), sinon nous mettrons une valeur par défaut
		Après que nb_caractere_max soit bien un nombre (ajout d'une exeption pour NaN qui est détecté comme un nombre par typeof) et pas inférieur ou égal au nombre de caractère minimum, sinon nous réinitialisons la variable
		Enfin que nb_caractere_defaut soit bien un nombre (ajout d'une exeption pour NaN qui est détecté comme un nombre par typeof), sinon nous réinitialisons la variable
	*/
	if (Array.isArray(caracteres) === true && caracteres.length > 1) {
		for (var i = 0; i < caracteres.length; i++) {
			if (typeof caracteres[i] !== "string") {
				alert("TabCar-NaS");
				erreur = true;
			}
			else if (caracteres[i] === "") {
				alert("TabCar-Emp");
				erreur = true;
			}
		}
	}
	else if (typeof caracteres === "undefined") {
		alert("TabCar-Und");
		erreur = true;
	}
	else if (caracteres.length <= 1) {
		alert("TabCar-Low");
		erreur = true;
	}
	else {
		alert("TabCar-NaA");
		erreur = true;
	}
	
	if (Array.isArray(messages) === true && messages.length > 2) {
		for (var i = 0; i < messages.length; i++) {
			if (typeof messages[i] !== "string") {
				alert("TabMes-NaS");
				erreur = true;
			}
			else if (messages[i] === "") {
				alert("TabMes-Emp");
				erreur = true;
			}
		}
	}
	else if (typeof messages === "undefined") {
		alert("TabMes-Und");
		erreur = true;
	}
	else if (messages.length <= 2) {
		alert("TabMes-Low");
		erreur = true;
	}
	else {
		alert("TabMes-NaA");
		erreur = true;
	}
	
	if (typeof nb_caractere_min !== "number" || Number.isNaN(nb_caractere_min) === true) {
		nb_caractere_min = 1; // Ainsi, il n'y aura pas de demande de mot de passe de 0 caractère
	}
	
	if (typeof nb_caractere_max !== "number" || Number.isNaN(nb_caractere_max) === true) {
		nb_caractere_max = ""; // Ainsi, il n'y a pas de nombre maximal
	}
	else if (nb_caractere_max < nb_caractere_min) {
		alert("NbCarMax-Low");
		erreur = true;
	}
	
	if (typeof nb_caractere_defaut !== "number" || Number.isNaN(nb_caractere_defaut) === true) {
		nb_caractere_defaut = ""; // Ainsi, elle ne mettra aucune valeur
	}
	/*
	Fin de vérification des paramètres de la fonction
	
	Si certains paramètres contiennent des erreurs, alors nous n'éxécutons pas le script
	*/
	if (erreur === false) {
		/*
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
		Génération du mot de passe
		*/
		var mot_de_passe = generer(caracteres, nb_caractere_mdp);
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
Fonction generer qui créé le mot de passe
	caracteres : un tableau contenant tous les caractères pouvant servir à créer le mot de passe
	nb_caractere_mdp : le nombre de caratère du mot de passe
La fonction retournera le mot de passe généré
*/
function generer(caracteres, nb_caractere_mdp) {
	/*
	Répartition du nombre de caractère du mot de passe équitable entre les différents types de caractère (entier, lettre minuscule et majuscule)
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
	Sélection de caractère de différent type
	*/
	var caracteres_mdp = [];
	for (var i = 0; i < caracteres.length; i++) {
		for (var j = 0; j < nb_chaque_caracteres[i]; j++) {
			caracteres_mdp.push(caractere_aleatoire(caracteres[i]));
		}
	}
	/*
	Création du mot de passe
	*/
	var mdp = "";
	while (caracteres_mdp.length > 0) {
		var nb = Math.floor(Math.random()*caracteres_mdp.length);
		mdp += caracteres_mdp[nb];
		var nouveau_caracteres_mdp = [];
		for (i = 0; i < caracteres_mdp.length; i++) {
			if (i !== nb) {
				nouveau_caracteres_mdp.push(caracteres_mdp[i]);
			}
		}
		caracteres_mdp = nouveau_caracteres_mdp;
	}
	/*
	Renvoi du mot de passe généré
	*/
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
