/*
Fonction pour générer un mot de passe
*/
function generer() {
	/*
	Déclaration des variables
	caracteres : tableau contenant tout les caractères pouvant servir à générer un mot de passe
	nb_caractere_mdp : variable qui contiendra un nombre donné par l'utilisateur, ce nombre servira à générer un mot de passe de cette longueur
	mdp : variable qui contiendra le mot de passe que l'on retournera à l'utilisateur
	*/
	var caracteres = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
	var nb_caractere_mdp;
	var mot_de_passe = "";
	
	//	Vérification que nb_caractere_mdp est bien un nombre et supérieur à 0 dans une boucle while
	do {
		if (Number.isNaN(nb_caractere_mdp) === true) {
			nb_caractere_mdp = acquisition_nombre_caractere("Vous n'avez pas entré un nombre, \nVeuillez entrer le nombre de caratère de votre mot de passe :");
		}
		else if (nb_caractere_mdp <= 0) {
			nb_caractere_mdp = acquisition_nombre_caractere("Vous avez entré un nombre inférieur ou égal à 0, \nVeuillez entrer le nombre de caratère de votre mot de passe :");
		}
		else {
			nb_caractere_mdp = acquisition_nombre_caractere("Entrez le nombre de caratère de votre mot de passe :");
		}
	} while (Number.isNaN(nb_caractere_mdp) === true || nb_caractere_mdp <= 0);
	
	// une fois que le nombre convient on passe à la fonction qui génére le mot de passe
	mot_de_passe = generer_mdp(caracteres, nb_caractere_mdp);
	
	/*
	Retournes le mot de passe généré dans l'input du formulaire d'inscription
	window.document.NomDuFormulaire.NomDeInput.value
	*/
	window.document.exemple_formulaire.mdp.value = mot_de_passe;
	
	// Puis un message qui conseille de noter le mot de passe sur un papier
	alert("Nous vous conseillons de noter le mot de passe sur un papier pour ne pas l'oublier.");
}

/*
Fonction generer_mdp qui génére un mot de passe avec comme paramètre :
tab : un tableau contenant tout les caractères servant à créer le mot de passe
nb_max : le nombre de caractère max du mot de passe
La fonction retournera le mot de passe généré
*/
function generer_mdp(tab,nb_max) {
	var tab_max = tab.length;
	var mdp = "";
	
	for (var i = 0; i < nb_max; i++) {
		var nb = Math.floor(Math.random()*tab_max);
		mdp += tab[nb];
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