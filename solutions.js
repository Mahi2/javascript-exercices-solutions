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

/**
Cette fois pas d'histoire, pas de théorie. Les exemples ci-dessous vous montrent
comment écrire la fonction accum:
accum("abcd"); // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt"); // "C-Ww-Aaa-Tttt"
NB : Le paramètre de accum est une chaîne qui inclut uniquement les lettres de a..z
et A..Z
 */
function accum(str) {
    var res = [];
    for (var i = 0; i < str.length; i++) {
        var row = '';
        for (var j = 0; j < i + 1; j++) {
            row += j === 0 ? str[i].toUpperCase() : str[i].toLowerCase();
        }
        res.push(row);
    }
    return res.join('-');
}

//============================================================================================

/**
Une fonction qui renvoi le nombre (nombre) de voyelles dans la chaîne donnée.
Nous considérerons a, e, i, o, et u comme des voyelles pour cet exercice.
La chaîne d'entrée sera composée uniquement de lettres minuscules et / ou
d'espaces.
 */
function getCount(str) {
    for (var n = 0, i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i)
        if (c === 97 || c === 101 || c === 105 || c === 111 || c === 117) n++
    }

    return n
}

//============================================================================================

/**
Dans cet exercice, nous devons créer une fonction qui quand vous recevez une
chaîne de nombres séparés par des espaces, doit renvoyer le nombre le plus grand et
le plus petit.
highAndLow("1 2 3 4 5"); // return "5 1"
highAndLow("1 2 -3 4 5"); // return "5 -3"
highAndLow("1 9 3 4 -5"); // return "9 -5"
 */
function highAndLow(numbers) {
    numbers = numbers.split(' ');

    return Math.max(...numbers) + ' ' + Math.min(...numbers);
}

//============================================================================================

/**
lorsque vous achetez quelque chose, on vous demande si votre
numéro de carte de crédit, votre numéro de téléphone ou votre réponse à votre
question la plus secrète est toujours correct. Cependant, puisque quelqu'un pourrait
regarder par-dessus votre épaule, vous ne voulez pas que cela s'affiche sur votre
écran. Au lieu de cela, nous le masquons.
Notre tâche consiste à écrire une fonction masquer, qui change tous sauf les quatre
derniers caractères par le caractère ‘#’
Exemple :
maskify("4556364607935616") == "############5616"
maskify( "64607935616") == "#######5616"
maskify( "1") == "1"
maskify( "") == ""
 */
function maskify(cc) {
    cc = cc.split("");
    for (var i = 0; i < cc.length - 4; i++) {
        cc[i] = "#";
    }

    cc = cc.join("");
    return cc
}

//============================================================================================

/**
Vous allez recevoir un mot. Votre travail consiste à retourner le caractère central du
mot. Si la longueur du mot est impair, retournez le caractère du milieu. Si la longueur
du mot est paire, renvoyez les 2 caractères du milieu.
Exemple :
getMiddle("test") doit retourner "es"
getMiddle("testing") doit retourner "t"
getMiddle("middle") doit retourner "dd"
getMiddle("A") doit retourner "A"
 */
function getMiddle(string) {
    var middleIndex = string.length / 2;
    if (string.length % 2 == 0) {
        return string.slice(middleIndex - 1, middleIndex + 1);
    } else {
        return string.charAt(middleIndex);
    }
}

//=============================================================================================

/**
Implémentez une méthode qui accepte 3 valeurs entières a, b, c. La méthode devrait
renvoyer true si un triangle peut être construit avec les côtés de longueur donnée et
false dans tous les autres cas.
(Dans ce cas, tous les triangles doivent avoir une surface supérieure à 0 pour être
acceptés).
 */
function isTriangle(a, b, c) {
    if (a > 0 && b > 0 && c > 0) {
        if (a < b + c && b < a + c && c < a + b) {
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
}