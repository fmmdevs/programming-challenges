### English README.md

---

# String Reversal Program

This program reverses the order of a given string without using built-in language functions that do it automatically.

- If we pass "Hello world" as input, it would return "dlrow olleH".

## Function

```javascript
const reverseString = (string) => {
    let reversed = "";
    for (let i = string.length - 1; i >= 0; i--) {
        reversed += string[i];
    }
    return reversed;
}
```

## Usage

Call the `reverseString` function with the string to be reversed as a parameter.

```javascript
console.log(reverseString("Hello world")); // Output: dlrow olleH
```

---

### README.md en español

---

# Programa de Inversión de Cadena de Texto

Este programa invierte el orden de una cadena de texto dada sin utilizar funciones integradas del lenguaje que lo hagan automáticamente.

- Si pasamos "Hola mundo" como entrada, devolvería "odnum aloH".

## Función

```javascript
const invertirCadena = (cadena) => {
    let invertida = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        invertida += cadena[i];
    }
    return invertida;
}
```

## Uso

Llama a la función `invertirCadena` con la cadena de texto que deseas invertir como parámetro.

```javascript
console.log(invertirCadena("Hola mundo")); // Salida: odnum aloH
```

