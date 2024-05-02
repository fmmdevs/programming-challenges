### English README.md

---

# String Comparator

This program creates a function that takes two strings as parameters (str1, str2) and prints two other strings as output (out1, out2).
- out1 will contain all the characters present in str1 but NOT present in str2.
- out2 will contain all the characters present in str2 but NOT present in str1.

## Function

```javascript
const comparador = (str1, str2) => {

    let out1 = "";
    let out2 = "";

    for (let char of str2) {
        if (!str1.includes(char)) {
            out1 += char;
        }
    }

    for (let char of str1) {
        if (!str2.includes(char)) {
            out2 += char;
        }
    }

    console.log(str1, str2);
    console.log(out1, out2);
};
```

## Usage

Call the `comparador` function with two strings to compare and print out the characters unique to each string.

```javascript
comparador("asdfñqZZZZZ", "aaaaaaddddddddddddkkkljhgñsdfppp");
```

---

### README.md en español

---

# Comparador de Cadenas

Este programa crea una función que recibe dos cadenas como parámetros (str1, str2) e imprime otras dos cadenas como salida (out1, out2).
- out1 contendrá todos los caracteres presentes en str1 pero NO estén presentes en str2.
- out2 contendrá todos los caracteres presentes en str2 pero NO estén presentes en str1.

## Función

```javascript
const comparador = (str1, str2) => {

    let out1 = "";
    let out2 = "";

    for (let char of str2) {
        if (!str1.includes(char)) {
            out1 += char;
        }
    }

    for (let char of str1) {
        if (!str2.includes(char)) {
            out2 += char;
        }
    }

    console.log(str1, str2);
    console.log(out1, out2);
};
```

## Uso

Llama a la función `comparador` con dos cadenas para comparar e imprimir los caracteres únicos de cada cadena.

```javascript
comparador("asdfñqZZZZZ", "aaaaaaddddddddddddkkkljhgñsdfppp");
```
