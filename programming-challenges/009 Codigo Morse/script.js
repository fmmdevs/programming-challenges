/*
 * Crea un programa que sea capaz de transformar texto natural a código
 * morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar
 *   la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras
 *   o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en
 *   https://es.wikipedia.org/wiki/Código_morse.
 */




const toMorse = (texto) => {
    console.log(texto);
    const morse = {
        A: ".-",
        B: "-...",
        C: "-.-.",
        D: "-..",
        E: ".",
        F: "..-.",
        G: "--.",
        H: "....",
        I: "..",
        J: ".---",
        K: "-.-",
        L: ".-..",
        M: "--",
        N: "-.",
        O: "---",
        P: ".--.",
        Q: "--.-",
        R: ".-.",
        S: "...",
        T: "-",
        U: "..-",
        V: "...-",
        W: ".--",
        X: "-..-",
        Y: "-.--",
        Z: "--..",
        1: ".----",
        2: "..---",
        3: "...--",
        4: "....-",
        5: ".....",
        6: "-....",
        7: "--...",
        8: "---..",
        9: "----.",
        0: "-----"
    }
    // Creo nueva cadena para quitar acentos
    let texto1 = "";
    for (let i = 0; i < texto.length; i++) {
        // Contruyo la texto1 a partir de texto, y si tiene acento le asigno la vocal sin acento 
        if (texto[i] === "á" || texto[i] === "Á") {
            texto1 += "A";
        } else if (texto[i] === "é" || texto[i] === "É") {
            texto1 += "E";
        } else if (texto[i] === "í" || texto[i] === "Í") {
            texto1 += "I";
        } else if (texto[i] === "ó" || texto[i] === "Ó") {
            texto1 += "O";
        } else if (texto[i] === "ú" || texto[i] === "Ú") {
            texto1 += "U";
        } else {
            // y si no la dejo igual
            texto1 += texto[i];
        }
    }

    // console.log(texto1);
    const textoUpper = texto1.toUpperCase();

    const words = textoUpper.split(/\W+/g);

    let result = words.join("  ");
    // console.log(result);

    let final = "";
    for (let letra of result) {
        if (morse[letra]) {

            final += morse[letra] + " ";
        } else final += "  ";
    }
    // console.log(final);

    return final;
}

const texto1 = "El código Morse es un código o sistema de comunicación que permite la comunicación telegráfica a través de la transmisión de impulsos eléctricos de longitudes diversas o por medios visuales, como luz, sonoros o mecánicos. Este código consta de una serie de puntos, rayas y espacios, que al ser combinados entre si pueden formar palabras, números y otros símbolos.";

console.log(toMorse(texto1));