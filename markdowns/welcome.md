# JavaScript

## Exercice 1
Fait en sorte que la fonction __HelloWorld()__ retourne exactement la valeur `Hello World!`
@[Realise la fonction helloworld]({ "stubs": ["ex1.js"], "command": "node_modules/mocha/bin/mocha test_ex1.js --reporter list" })

## Exercice 2
Crée une fonction qui s'appelle __quiEstLeMeilleurProf()__. Elle doit retourner `Malashouille`
@[Realise la fonction quiEstLeMeilleurProf]({ "stubs": ["ex2.js"], "command": "node_modules/mocha/bin/mocha test_ex2.js --reporter list" })

## Exercice 3
Crée une fonction qui s'appelle __jeRetourneMonArgument()__. Exemple : arg = "abc" ==> Return `abc` arg = 123 ==> Return `123`
@[Realise la fonction jeRetourneMonArgument]({ "stubs": ["ex3.js"], "command": "node_modules/mocha/bin/mocha test_ex3.js --reporter list" })

## Exercice 4
Créer une fonction qui s'appelle __concatenation()__. Elle prendra deux arguments de type string (chaine de caractères). Elle devra retourner la concatenation des deux. Exemple : argument 1 = Steven et Argument 2 = Hanse => Resultat : `StevenHanse`
@[Realise la fonction concatenation]({ "stubs": ["ex4.js"], "command": "node_modules/mocha/bin/mocha test_ex4.js --reporter list" })

## Exercice 5
Crée une fonction from scratch qui s'appelle __concatenationAvecEspace()__. Elle prendra deux arguments de type string (chaine de caractères). Elle devra retourner la concatenation des deux. Exemple : argument 1 = Steven et Argument 2 = Hanse; Resultat : `Steven Hanse`
@[Realise la fonction concatenation avec espace]({ "stubs": ["ex5.js"], "command": "node_modules/mocha/bin/mocha test_ex5.js --reporter list" })

## Exercice 6
Crée une fonction qui s'appelle **somme()**. Elle prendra deux arguments de type int (nombre entier). Elle devra retourner la somme des deux. Exemple :
argument 1 = 5
Argument 2 = 5 ; Resultat : `10`
@[Realise la fonction somme]({ "stubs": ["ex6.js"], "command": "node_modules/mocha/bin/mocha test_ex6.js --reporter list" })

## Exercice 7
Crée une fonction qui s'appelle **soustraction()**. Elle prendra deux arguments de type int (nombre entier). Elle devra retourner la soustraction des deux. Exemple :
argument 1 = 5
Argument 2 = 5 ; Resultat : `0`
@[Realise la fonction soustraction]({ "stubs": ["ex7.js"], "command": "node_modules/mocha/bin/mocha test_ex7.js --reporter list" })

## Exercice 8
Crée une fonction qui s'appelle **multiplication()**. Elle prendra deux arguments de type int (nombre entier). Elle devra retourner la multiplication des deux. Exemple :
argument 1 = 5
Argument 2 = 5 ; Resultat : `25`
@[Realise la fonction multiplication]({ "stubs": ["ex8.js"], "command": "node_modules/mocha/bin/mocha test_ex8.js --reporter list" })

## Exercice 9
Créer une fonction qui s'appelle **estIlMajeure()**. Elle prendra un argument de type int. Elle devra retourner un boolean. Si age >= 18 elle doit retourner true, si age < 18 elle doit retourner false Exemple :
age = 5 ==> `false`
age = 34 ==> `true`
@[Realise la fonction estIlMajeure]({ "stubs": ["ex9.js"], "command": "node_modules/mocha/bin/mocha test_ex9.js --reporter list" })

## Exercice 10
Créer une fonction qui s'appelle **plusGrand()**. Elle prendra deux arguments de type int. Elle devra retourner le plus grand des deux.
@[Realise la fonction plusGrand]({ "stubs": ["ex10.js"], "command": "node_modules/mocha/bin/mocha test_ex10.js --reporter list" })

## Exercice 11
Créer une fonction qui s'appelle **plusPetit()**. Elle prendra deux arguments de type int. Elle devra retourner le plus petit des deux.
@[Realise la fonction plusPetit]({ "stubs": ["ex11.js"], "command": "node_modules/mocha/bin/mocha test_ex11.js --reporter list" })

## Exercice 12
Créer une fonction qui s'appelle **plusPetit()**. Elle prendra trois arguments de type int. Elle devra retourner le plus petit des trois.
@[Realise la fonction plusPetit]({ "stubs": ["ex12.js"], "command": "node_modules/mocha/bin/mocha test_ex12.js --reporter list" })

## Exercice 13
Créer une fonction qui s'appelle **premierElementTableau()**. Elle prendra un argument de type array (un tableau). Elle devra retourner le premier élement du tableau.
Si l'array est vide, il faudra retourner `null`;
@[Realise la fonction premierElementTableau]({ "stubs": ["ex13.js"], "command": "node_modules/mocha/bin/mocha test_ex13.js --reporter list" })

## Exercice 14
Créer une fonction qui s'appelle **dernierElementTableau()**. Elle prendra un argument de type array (un tableau). Elle devra retourner le dernier élement du tableau.
Si l'array est vide, il faudra retourner `null`;
@[Realise la fonction dernierElementTableau]({ "stubs": ["ex14.js"], "command": "node_modules/mocha/bin/mocha test_ex14.js --reporter list" })

## Exercice 15
Créer une fonction qui s'appelle **plusGrand()**. Elle prendra un argument de type array (un tableau). Elle devra retourner le plus grand des élements présent dans l'array.
Si l'array est vide, il faudra retourner null;
@[Realise la fonction plusGrand]({ "stubs": ["ex15.js"], "command": "node_modules/mocha/bin/mocha test_ex15.js --reporter list" })

## Exercice 16
Créer une fonction qui s'appelle **plusPetit()**. Elle prendra un argument de type array. Elle devra retourner le plus petit des élements présent dans l'array.
Si l'array est vide, il faudra retourner null;
@[Realise la fonction plusPetit]({ "stubs": ["ex16.js"], "command": "node_modules/mocha/bin/mocha test_ex16.js --reporter list" })

## Exercice 17
Créer une fonction qui s'appelle **verificationPassword()**. Elle prendra un argument de type string. Elle devra retourner un boolean qui vaut `true` si le password fait au moins 8 caractères et `false` si moins.
@[Realise la fonction verificationPassword]({ "stubs": ["ex17.js"], "command": "node_modules/mocha/bin/mocha test_ex17.js --reporter list" })

## Exercice 19
Créer une fonction qui s'appelle **capital()**. Elle prendra un argument de type string. Elle devra retourner le nom de la capitale des pays suivants :
1. France ==> `Paris`
2. Allemagne ==> `Berlin`
3. Italie ==> `Rome`
4. Maroc ==> `Rabat`
5. Espagne ==> `Madrid`
6. Portugal ==> `Lisbonne`
7. Angleterre ==> `Londres`
8. Tout autre pays ==> `Inconnu`

Tu peux certes le faire avec les if mais je voudrai que tu te serves du **SWITCH** pour cet exercice.
@[Realise la fonction capital]({ "stubs": ["ex19.js"], "command": "node_modules/mocha/bin/mocha test_ex19.js --reporter list" })




## Exercice 20
Créer une fonction qui s'appelle **listHTML()**. Elle prendra deux arguments :
1. Un string représentant le nom de la liste
2. Un array représentant les élements de cette liste

Elle devra retourner une liste HTML. Chaque element de cette liste viendra du tableau passé en paramètre.

Exemple :
Paramètre :
Titre : **Capitale**
Liste : ["Paris", "Berlin", "Moscou"]
Résultat : `<h3>Capitale</h3><ul><li>Paris</li><li>Berlin</li><li>Moscou</li></ul>`

Comme tu peux le voir il n'y a **pas** d'espace ni de retour à la ligne entre les élements de la liste.
Pas d'espace non plus entre le titre et la liste.

Si le titre est null et vide il faut que la fonction retourne null.
Si l'array est vide, il faut que la fonction retourne null.
@[Realise la fonction listHTML]({ "stubs": ["ex20.js"], "command": "node_modules/mocha/bin/mocha test_ex20.js --reporter list" })

## Exercice 21
Créer une fonction qui s'appelle **remplacerLesLettres()**. Elle prendra un argument de type string. Elle devra retourner cette même string mais en remplacant les e par des 3, les i par des 1 et les o par des 0
Exemple :
1. input : "Bonjour les amis" ==> Output : `B0nj0ur l3s am1s`
1. input : "Les cours de programmation Web sont trops cools" ==> Output : `L3s c0urs d3 pr0grammat10n W3b s0nt tr0ps c00ls`
@[Realise la fonction remplacerLesLettres]({ "stubs": ["ex21.js"], "command": "node_modules/mocha/bin/mocha test_ex21.js --reporter list" })