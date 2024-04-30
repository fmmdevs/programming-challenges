### English README.md

---

# Fibonacci Sequence

This program prints the first 50 numbers of the Fibonacci sequence starting from 0.

- The Fibonacci series consists of a sequence of numbers in which the next number is always the sum of the two previous ones.
  Example: 0, 1, 1, 2, 3, 5, 8, 13...

## Usage

Simply run the program and observe the console output, which will display the first 50 numbers of the Fibonacci sequence.

## Program

```javascript
let ant = 0;
let act = 0;
let n = 0;
for (let i = 0; i < 50; i++) {
    if (i == 1) {
        n = 1;
        ant = 0;
        act = 1;
    } else {
        n = ant + act;
        ant = act;
        act = n;
    }
    console.log(n);
}
```

---

### README.md en español

---

# Secuencia Fibonacci

Este programa imprime los primeros 50 números de la secuencia de Fibonacci comenzando desde 0.

- La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
  Ejemplo: 0, 1, 1, 2, 3, 5, 8, 13...

## Uso

Simplemente ejecuta el programa y observa la salida en la consola, que mostrará los primeros 50 números de la secuencia de Fibonacci.

## Programa

```javascript
let ant = 0;
let act = 0;
let n = 0;
for (let i = 0; i < 50; i++) {
    if (i == 1) {
        n = 1;
        ant = 0;
        act = 1;
    } else {
        n = ant + act;
        ant = act;
        act = n;
    }
    console.log(n);
}
```
