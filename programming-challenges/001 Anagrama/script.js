/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

const esAnagrama = function (word1, word2) {
    if (word1 == word2) return false;
    if (word1.length != word2.length) return false;
    let arrayW2 = word2.split("");
    console.log(word1);
    console.log(arrayW2);
    for (let i = 0; i < word1.length; i++) {
        console.log(i);
        if (arrayW2.includes(word1[i])) {
            arrayW2.splice(arrayW2.indexOf(word1[i]), 1);
        }
    }
    return arrayW2.length == 0 ? true : false;
}
console.log(esAnagrama("asda", "asdf"));
console.log(esAnagrama("asdfg", "gfdsa"));
console.log(esAnagrama("qw", "wq"));
console.log(esAnagrama("manola", "monalo"));
console.log(esAnagrama("hello", "world"));
console.log(esAnagrama("listen", "silent"));