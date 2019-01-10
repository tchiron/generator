let defaut_caracteres = [
	"0123456789",
	"abcdefghijklmnopqrstuvwxyz",
	"ABCDEFGHIJKLMNOPQRSTUVWXYZ"
];

/**
 * La fonction generator retourne une chaîne de caractère construit aléatoirement avec les caractères soumis par le biais du tableau de caractère. La longueur de la chaîne de caractère est équivalent à la taille passé en paramètre
 * @param  integer  taille     Taille de la chaîne de caratère que l'on doit retourner.
 * @param  array    caracteres Tableau contenant les listes de caractère utilisé pour générer une chaîne. (Optionnal)
 * @return string	           Return a string or false if something went wrong.
 */
function generator(taille, caracteres) {

	if (typeof taille !== "number" || Number.isNaN(taille)) {
		return false;
	}
	
	if (!caracteres) {
		return false;
	}
	else if (caracteres.length < 1) {
		return false;
	}
	else if (Array.isArray(caracteres)) {
		for (let i = 0; i < caracteres.length; i++) {
			if (!caracteres[i] || typeof caracteres[i] !== "string") {
				return false;
			}
		}
	}
	else {
		return false;
	}

	return generer(taille, caracteres);
}

/**
 * Fonction caractere_aleatoire qui choisi aléatoirement un caractère dans un tableau de caractère
 * 	tab : un tableau contenant tous les caractères pouvant servir à créer un mot de passe
 * 	La fonction retournera le caractère sélectionné
 */
function caractere_aleatoire(tab) {
	let nb = Math.floor(Math.random()*tab.length);
	return tab[nb];
}

/**
 * Fonction generer qui créé le mot de passe
 *  caracteres : un tableau contenant tous les caractères pouvant servir à créer le mot de passe
 *  nb_caractere_mdp : le nombre de caratère du mot de passe
 *  La fonction retournera le mot de passe généré
 */
function generer(nb_caractere_mdp, caracteres) {
	/**
	 * Répartition du nombre de caractère du mot de passe équitable entre les différents types de caractère (entier, lettre minuscule et majuscule)
	 */
	let nb_chaque_caractere = Math.trunc(nb_caractere_mdp / caracteres.length);
	let nb_chaque_caracteres = [];
	let quotient = nb_caractere_mdp % caracteres.length;
	for (let i = 0; i < caracteres.length; i++) {
		if (quotient !== 0) {
			nb_chaque_caracteres.push(nb_chaque_caractere + 1);
			quotient--;
		}
		else {
			nb_chaque_caracteres.push(nb_chaque_caractere);
		}
	}
	/**
	 * Sélection de caractère de différent type
	 */
	let caracteres_mdp = [];
	for (let i = 0; i < caracteres.length; i++) {
		for (let j = 0; j < nb_chaque_caracteres[i]; j++) {
			caracteres_mdp.push(caractere_aleatoire(caracteres[i]));
		}
	}
	/**
	 * Création du mot de passe
	 */
	let mdp = "";
	while (caracteres_mdp.length > 1) {
		let nb = Math.floor(Math.random()*caracteres_mdp.length);
		mdp += caracteres_mdp[nb];
		caracteres_mdp.splice(nb, 1);
	}
	mdp += caracteres_mdp[0];

	return mdp;
}

/**
 * Fonction acquisition_nombre_caractere qui permettra d'envoyer une boite de dialogue avec un message personnalisé pour récupérer le nombre de caractère maximum du mot de passe que l'on doit générer
 * 	message : message personnalisé du prompt
 *  valeur_defaut : valeur par défaut qui sera affiché dans le champ du prompt
 *  La fonction retournera le nombre saisi par l'utilisateur
 */
function acquisition_nombre_caractere(message, valeur_defaut) {
	return Math.trunc(Number(prompt(message, valeur_defaut)));
}
