### English README.md

---

# Morse Code Converter

This program is capable of transforming natural text to Morse code and vice versa.

- It automatically detects the type of input and performs the conversion.
- Morse code supports dash "—", dot ".", a space " " between letters or symbols, and two spaces between words "  ".
- The supported Morse code alphabet will be as shown on [Wikipedia](https://en.wikipedia.org/wiki/Morse_code).

## Function

```javascript
const toMorse = (text) => {
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

    // Remove accents
    let textNoAccent = text.replace(/[áéíóúÁÉÍÓÚ]/g, function(match) {
        return "AEIOUaeiou"["áéíóúÁÉÍÓÚ".indexOf(match)];
    });

    const textUpper = textNoAccent.toUpperCase();
    const words = textUpper.split(/\W+/g);

    let result = words.join("  ");

    let final = "";
    for (let letter of result) {
        if (morse[letter]) {
            final += morse[letter] + " ";
        } else final += "  ";
    }

    return final;
}
```

## Usage

Call the `toMorse` function with the text as a parameter to convert it to Morse code.

```javascript
const text = "The Morse code is a code or communication system that allows telegraphic communication through the transmission of electric pulses of various lengths or by visual means, such as light, sound, or mechanical. This code consists of a series of dots, dashes, and spaces, which when combined can form words, numbers, and other symbols.";

console.log(toMorse(text)); 
```

---

### README.md en español

---

# Convertidor de Código Morse

Este programa es capaz de transformar texto natural a código Morse y viceversa.

- Detecta automáticamente el tipo de entrada y realiza la conversión.
- El código Morse admite raya "—", punto ".", un espacio " " entre letras o símbolos y dos espacios entre palabras "  ".
- El alfabeto Morse compatible será como se muestra en [Wikipedia](https://es.wikipedia.org/wiki/Código_morse).

## Función

```javascript
const toMorse = (texto) => {
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

    // Eliminar acentos
    let textoSinAcentos = texto.replace(/[áéíóúÁÉÍÓÚ]/g, function(match) {
        return "AEIOUaeiou"["áéíóúÁÉÍÓÚ".indexOf(match)];
    });

    const textoUpper = textoSinAcentos.toUpperCase();
    const palabras = textoUpper.split(/\W+/g);

    let resultado = palabras.join("  ");

    let final = "";
    for (let letra of resultado) {
        if (morse[letra]) {
            final += morse[letra] + " ";
        } else final += "  ";
    }

    return final;
}
```

## Uso

Llama a la función `toMorse` con el texto como parámetro para convertirlo a código Morse.

```javascript
const texto = "El código Morse es un código o sistema de comunicación que permite la comunicación telegráfica a través de la transmisión de impulsos eléctricos de longitudes diversas o por medios visuales, como luz, sonoros o mecánicos. Este código consta de una serie de puntos, rayas y espacios, que al ser combinados entre sí pueden formar palabras, números y otros símbolos.";

console.log(toMorse(texto)); 
```

