### English README.md

---

# Decimal to Binary Converter

This program converts a decimal number to binary without using built-in language functions that do it directly.

## Function

```javascript
const decToBin = (decimal) => {
    let resto = decimal;
    let binary = [];

    do {
        if (resto % 2 == 0) {
            resto = resto / 2;
            binary.unshift(0);
        } else {
            resto = (resto - 1) / 2;
            binary.unshift(1);
        }
    } while (resto >= 2);

    binary.unshift(resto);

    return binary;
}
```

## Usage

Call the `decToBin` function with the decimal number as a parameter to convert it to binary.

```javascript
console.log(decToBin(2));   // Output: [1, 0]
console.log(decToBin(4));   // Output: [1, 0, 0]
console.log(decToBin(6));   // Output: [1, 1, 0]
console.log(decToBin(7));   // Output: [1, 1, 1]
console.log(decToBin(8));   // Output: [1, 0, 0, 0]
console.log(decToBin(21));  // Output: [1, 0, 1, 0, 1]
console.log(decToBin(22));  // Output: [1, 0, 1, 1, 0]
console.log(decToBin(245)); // Output: [1, 1, 1, 1, 0, 0, 1]
```

---

### README.md en español

---

# Convertidor de Decimal a Binario

Este programa convierte un número decimal a binario sin utilizar funciones integradas del lenguaje que lo hagan directamente.

## Función

```javascript
const decToBin = (decimal) => {
    let resto = decimal;
    let binario = [];

    do {
        if (resto % 2 == 0) {
            resto = resto / 2;
            binario.unshift(0);
        } else {
            resto = (resto - 1) / 2;
            binario.unshift(1);
        }
    } while (resto >= 2);

    binario.unshift(resto);

    return binario;
}
```

## Uso

Llama a la función `decToBin` con el número decimal como parámetro para convertirlo a binario.

```javascript
console.log(decToBin(2));   // Salida: [1, 0]
console.log(decToBin(4));   // Salida: [1, 0, 0]
console.log(decToBin(6));   // Salida: [1, 1, 0]
console.log(decToBin(7));   // Salida: [1, 1, 1]
console.log(decToBin(8));   // Salida: [1, 0, 0, 0]
console.log(decToBin(21));  // Salida: [1, 0, 1, 0, 1]
console.log(decToBin(22));  // Salida: [1, 0, 1, 1, 0]
console.log(decToBin(245)); // Salida: [1, 1, 1, 1, 0, 0, 1]
```

