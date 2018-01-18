/*
Ecrivons une fonction qui inverse les mots d'une chaîne donnée. Un mot peut
également contenir une chaîne vide. Si ce n'est pas assez clair, voici quelques
exemples:
    reverse('Hello World') === 'World Hello' ;
    reverse('Bonjour. Toi') === Toi. Bonjour' ;
Comme l'entrée peut avoir des espaces de fin, vous devrez également ignorer les
espaces inutiles
*/
function reverse(string) {
    var original = string;
    var rev = original.split(' ').reverse().join(' ');
    return rev;
}

//===========================================================================================