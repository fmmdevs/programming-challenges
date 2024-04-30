### English README.md

---

# Anagram Checker

This function checks whether two words are anagrams or not.

- An anagram is formed by rearranging ALL the letters of one initial word.
- It is not necessary to check whether both words exist.
- Two exactly identical words are not considered anagrams.

## Function

```javascript
const isAnagram = function (word1, word2) {
    if (word1 == word2) return false;
    if (word1.length != word2.length) return false;
    let arrayW2 = word2.split("");
    for (let i = 0; i < word1.length; i++) {
        if (arrayW2.includes(word1[i])) {
            arrayW2.splice(arrayW2.indexOf(word1[i]), 1);
        }
    }
    return arrayW2.length == 0 ? true : false;
}
```

## Usage

Call the `isAnagram` function with two words as parameters to check if they are anagrams. The function returns `true` if they are anagrams, and `false` otherwise.

```javascript
console.log(isAnagram("hello", "world")); // Output: false
console.log(isAnagram("listen", "silent")); // Output: true
```

---

### README.md en español

---

# Comprobador de Anagramas

Esta función verifica si dos palabras son anagramas o no.

- Un anagrama se forma reorganizando TODAS las letras de una palabra inicial.
- No es necesario comprobar si ambas palabras existen.
- Dos palabras exactamente idénticas no se consideran anagramas.

## Función

```javascript
const esAnagrama = function (palabra1, palabra2) {
    if (palabra1 == palabra2) return false;
    if (palabra1.length != palabra2.length) return false;
    let arrayP2 = palabra2.split("");
    for (let i = 0; i < palabra1.length; i++) {
        if (arrayP2.includes(palabra1[i])) {
            arrayP2.splice(arrayP2.indexOf(palabra1[i]), 1);
        }
    }
    return arrayP2.length == 0 ? true : false;
}
```

## Uso

Llama a la función `esAnagrama` con dos palabras como parámetros para verificar si son anagramas. La función devuelve `true` si son anagramas y `false` en caso contrario.

```javascript
console.log(esAnagrama("hola", "aloh")); // Salida: true
console.log(esAnagrama("hello", "world")); // Salida: false
```

---

Esto proporciona información sobre la función, cómo usarla y ejemplos de su funcionamiento tanto en inglés como en español. ¡Espero que sea útil! Si necesitas algo más, házmelo saber.