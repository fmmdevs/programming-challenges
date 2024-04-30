/*
 * Crea un programa que comprueba si los paréntesis, llaves y corchetes
 * de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran
 *   en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios.
 *   No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 */

const regex = /[\(\)\[\]\{\}]/g;

const counters = {
    "{": 0,
    "}": 0,
    "[": 0,
    "]": 0,
    "(": 0,
    ")": 0
};

const exp1 = "{ a * ( c + d ) ] - 5 }";
const exp2 = "[ a + b * ( c - d )";

const equilibrium = (exp) => {

    for (let i = 0; i < exp.length; i++) {
        if (regex.test(exp.charAt(i))) {
            counters[exp.charAt(i)]++;
        }
    }

    // console.log(counters);



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
// console.log(equilibrium(exp1));
// equilibrium(exp2);
console.log(equilibrium(exp2));
// equilibrium(exp4);
// equilibrium(exp5);
// equilibrium(exp6);
// 1. Contar apariciones de cada uno

// 2. Balancear