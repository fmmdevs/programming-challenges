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
    for (let i = 0, j = word1.length - 1; i <= word1.length; i++, j--) {
        if (word1[i] != word2[j]) return false;
    }
    return true;
}

console.log(esAnagrama("asdfg", "gfdsa"));
console.log(esAnagrama("qw", "wq"));
console.log(esAnagrama("manola", "monalo"));
console.log(esAnagrama("hello", "world"));
console.log(esAnagrama("listen", "silent"));