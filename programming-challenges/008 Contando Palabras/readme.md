### English README.md

---

# Word Counter Program

This program counts how many times each word repeats and shows the final count of all words.

- Punctuation marks are not part of the word.
- A word is the same even if it appears in uppercase and lowercase.
- Built-in language functions that automatically solve this problem are not used.

## Function

```javascript
const wordCounter = (text) => {
    const words = text.toUpperCase().split(/\W+/g);
    let result = {};

    for (let i = 0; i < words.length - 1; i++) {
        if (!result[words[i]]) {
            result[words[i]] = 1;
        } else {
            result[words[i]] += 1;
        }
    }

    let sorted = [];
    for (let word in result) {
        sorted.push([word, result[word]]);
    }

    sorted.sort((a, b) => {
        return b[1] - a[1];
    });

    return sorted;
}
```

## Usage

Call the `wordCounter` function with the text as a parameter to count the occurrences of each word.

```javascript
console.log(wordCounter("In a corner of the vast universe, where the stars dance in the symphony of time, there is a small planet called Earth. On this blue world, life flourishes in every corner, from the deep oceans to the high mountains. Here, humans, with their wit and creativity, have forged civilizations and built stories that endure in the fabric of time. Every whispered word, every action taken, leaves a trace on the canvas of existence. In this cosmos of infinite possibilities, every moment is unique and precious, a fleeting spark in the eternity of the universe."));
console.log(wordCounter("Hello aasfdsf adfsdf asdf k, fasdf. afsdifj....a...as.d.fas.df..."));
```

---

### README.md en español

---

# Programa Contador de Palabras

Este programa cuenta cuántas veces se repite cada palabra y muestra el recuento final de todas ellas.

- Los signos de puntuación no forman parte de la palabra.
- Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
- No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.

## Función

```javascript
const cuentaPalabras = (texto) => {
    const textoUpper = texto.toUpperCase();
    const words = textoUpper.split(/\W+/g);
    let result = {};

    for (let i = 0; i < words.length - 1; i++) {
        if (!result[words[i]]) {
            result[words[i]] = 1;
        } else {
            result[words[i]] += 1;
        }
    }

    let sorted = [];
    for (let word in result) {
        sorted.push([word, result[word]]);
    }

    sorted.sort((a, b) => {
        return b[1] - a[1];
    });

    return sorted;
}
```

## Uso

Llama a la función `cuentaPalabras` con el texto como parámetro para contar las ocurrencias de cada palabra.

```javascript
console.log(cuentaPalabras("En un rincón del vasto universo, donde las estrellas bailan en la sinfonía del tiempo, se encuentra un pequeño planeta llamado Tierra. En este mundo azul, la vida florece en cada rincón, desde los profundos océanos hasta las altas montañas. Aquí, los seres humanos, con su ingenio y creatividad, han forjado civilizaciones y construido historias que perduran en el tejido del tiempo. Cada palabra susurrada, cada acción realizada, deja una huella en el lienzo de la existencia. En este cosmos de posibilidades infinitas, cada momento es único y precioso, un destello fugaz en la eternidad del universo"));
console.log(cuentaPalabras("Hola aasfdsf adfsdf asdf k, fasdf. afsdifj....a...as.d.fas.df..."));
```

