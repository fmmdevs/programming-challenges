### English README.md

---

# Prime Number Checker and Printer

This program checks whether a number is prime or not. Once this is done, it prints the prime numbers between 1 and 100.

## Function

```javascript
const isPrime = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
};
```

## Usage

Run the program and observe the console output, which will display the prime numbers between 1 and 100.

## Program

```javascript
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}
```

---

### README.md en español

---

# Comprobador e Impresor de Números Primos

Este programa verifica si un número es primo o no. Una vez hecho esto, imprime los números primos entre 1 y 100.

## Función

```javascript
const esPrimo = (n) => {
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
};
```

## Uso

Ejecuta el programa y observa la salida en la consola, que mostrará los números primos entre 1 y 100.

## Programa

```javascript
for (let i = 1; i <= 100; i++) {
    if (esPrimo(i)) {
        console.log(i);
    }
}
```

