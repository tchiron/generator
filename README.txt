G�n�rateur de mot de passe

Description :
Ce programme Javascript permet la cr�ation d'un mot de passe par l'appui sur un bouton et l'insertion de celui ci dans un input d'un formulaire d'inscription.

Utilisation :
Pour faire appel � la fonction un bouton doit �tre cr�� avec l'attribut :
onclick="generer()"
Le bouton peut �tre n'importe o� dans le formulaire, la logique voudrait qu'il soit � c�t� de l'input du mot de passe.
Puis modifier la ligne 35 en fonction de votre formulaire :
window.document.NomDuFormulaire.NomDeInput.value
Remplacer NomDuFormulaire par la valeur de l'attribut name de votre formulaire
Remplacer NomDeInput par la valeur de l'attribut name de votre input qui doit contenir le mot de passe