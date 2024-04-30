### English README.md

---

# Balanced Expression Checker

This program checks if the parentheses, braces, and brackets in an expression are balanced.

- Balanced means that these delimiters open and close in order and correctly.
- Parentheses, braces, and brackets have equal priority. There is no one more important than the other.
- Balanced expression: { [ a * ( c + d ) ] - 5 }
- Unbalanced expression: { a * ( c + d ) ] - 5 }

## Function

```javascript
const regex = /[\(\)\[\]\{\}]/g;

const counters = {
    "{": 0,
    "}": 0,
    "[": 0,
    "]": 0,
    "(": 0,
    ")": 0
};

const equilibrium = (exp) => {

    for (let i = 0; i < exp.length; i++) {
        if (regex.test(exp.charAt(i))) {
            counters[exp.charAt(i)]++;
        }
    }

    let result = "";
    do {
        if (counters["{"] != counters["}"]) {
            if (counters["{"] < counters["}"]) {
                result = exp.replace("[", "{[");
                counters["{"]++;
            } else {
                result = exp.replace("]", "]}");
                counters["}"]++;
            }
        }

        if (counters["["] != counters["]"]) {
            if (counters["["] < counters["]"]) {
                result = exp.replace("{", "{ [");
                counters["["]++;
            } else {
                result = exp.replace(")", ") ]");
                counters["]"]++;
            }
        }

        if (counters["("] != counters[")"]) {
            if (counters["("] < counters[")"]) {
                result = exp.replace("[", "[ (");
                counters["("]++;
            } else {
                result = exp.replace("]", ") ]");
                counters[")"]++;
            }
        }

    } while (counters["["] != counters["]"] || counters["{"] != counters["}"] || counters["("] != counters[")"]);

    return result;
}
```

## Usage

Call the `equilibrium` function with the expression as a parameter to check if it's balanced.

```javascript
const exp = "[ a + b * ( c - d )";
console.log(equilibrium(exp)); // Output: "{ [ a + b * ( c - d ) ]"
```

---

### README.md en español

---

# Comprobador de Expresiones Balanceadas

Este programa comprueba si los paréntesis, llaves y corchetes en una expresión están equilibrados.

- Equilibrado significa que estos delimitadores se abren y cierran en orden y de forma correcta.
- Paréntesis, llaves y corchetes tienen igual prioridad. No hay uno más importante que el otro.
- Expresión balanceada: { [ a * ( c + d ) ] - 5 }
- Expresión no balanceada: { a * ( c + d ) ] - 5 }

## Función

```javascript
const regex = /[\(\)\[\]\{\}]/g;

const counters = {
    "{": 0,
    "}": 0,
    "[": 0,
    "]": 0,
    "(": 0,
    ")": 0
};

const equilibrium = (exp) => {

    for (let i = 0; i < exp.length; i++) {
        if (regex.test(exp.charAt(i))) {
            counters[exp.charAt(i)]++;
        }
    }

    let result = "";
    do {
        if (counters["{"] != counters["}"]) {
            if (counters["{"] < counters["}"]) {
                result = exp.replace("[", "{[");
                counters["{"]++;
            } else {
                result = exp.replace("]", "]}");
                counters["}"]++;
            }
        }

        if (counters["["] != counters["]"]) {
            if (counters["["] < counters["]"]) {
                result = exp.replace("{", "{ [");
                counters["["]++;
            } else {
                result = exp.replace(")", ") ]");
                counters["]"]++;
            }
        }

        if (counters["("] != counters[")"]) {
            if (counters["("] < counters[")"]) {
                result = exp.replace("[", "[ (");
                counters["("]++;
            } else {
                result = exp.replace("]", ") ]");
                counters[")"]++;
            }
        }

    } while (counters["["] != counters["]"] || counters["{"] != counters["}"] || counters["("] != counters[")"]);

    return result;
}
```

## Uso

Llama a la función `equilibrium` con la expresión como parámetro para comprobar si está equilibrada.

```javascript
const exp = "[ a + b * ( c - d )";
console.log(equilibrium(exp)); // Salida: "{ [ a + b * ( c - d ) ]"
```

