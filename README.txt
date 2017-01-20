Générateur de mot de passe

Description :
Ce programme Javascript permet la création d'un mot de passe par l'appui sur un bouton et l'insertion de celui ci dans un input d'un formulaire d'inscription.

Utilisation :
Pour faire appel à la fonction un bouton doit être créé avec l'attribut :
onclick="generer()"
Le bouton peut être n'importe où dans le formulaire, la logique voudrait qu'il soit à côté de l'input du mot de passe.
Puis modifier la ligne 35 en fonction de votre formulaire :
window.document.NomDuFormulaire.NomDeInput.value
Remplacer NomDuFormulaire par la valeur de l'attribut name de votre formulaire
Remplacer NomDeInput par la valeur de l'attribut name de votre input qui doit contenir le mot de passe