G�n�rateur de mot de passe

Description :
Ce programme Javascript permet la cr�ation d'un mot de passe par l'appui sur un bouton et l'insertion de celui ci dans un input d'un formulaire d'inscription.

Utilisation :
Pour faire appel � la fonction un bouton doit �tre cr�� avec l'attribut :
onclick="generer()"
Le bouton peut �tre n'importe o� dans le formulaire, la logique voudrait qu'il soit � c�t� de l'input du mot de passe.
Puis rechercher la ligne suivante :
window.document.exemple_formulaire.mdp.value
Remplacer "exemple_formulaire" par la valeur de l'attribut name de votre formulaire
Remplacer "mdp" par la valeur de l'attribut name de votre input qui doit contenir le mot de passe