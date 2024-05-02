/*
 * Escribe una función que reciba un texto y retorne verdadero o
 * falso (Boolean) según sean o no palíndromos.
 * Un Palíndromo es una palabra o expresión que es igual si se lee
  * de izquierda a derecha que de derecha a izquierda.
 * NO se tienen en cuenta los espacios, signos de puntuación y tildes.
 * Ejemplo: Ana lleva al oso la avellana.
 */

const esPalindromo = (texto) => {

    const regex = /[a-zA-ZñÑ]/;

    // 1. Quitamos acentos y convertimos a mayusculas   
    let normalize = "";

    for (let char of texto) {
        if (char == "á" || char == "Á") { normalize += "A" }
        else if (char == "é" || char == "É") { normalize += "E"; }
        else if (char == "í" || char == "Í") { normalize += "I"; }
        else if (char == "ó" || char == "O") { normalize += "O"; }
        else if (char == "ú" || char == "Ú") { normalize += "U"; }
        else if (!regex.test(char)) {
            normalize += "";
        } else {
            {
                normalize += char;
            }
        }

    }



    normalize = normalize.toUpperCase();
    console.log(normalize);

    for (let i = 0, j = normalize.length - 1; i < normalize.length / 2; i++, j--) {
        if (normalize[i] != normalize[j]) return false;
    }

    return true;

}

console.log(esPalindromo("ásdfghjklñ     ....,,,.,.,.,.,aááéeeeéééíiii"));
console.log(esPalindromo("Ana lleva al oso la avellana."))

