/*
 * Crea un programa se encargue de transformar un número
 * decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 */

const decToBin = (decimal) => {

    let resto = decimal;
    let bin = [];


    do {

        if (resto % 2 == 0) {
            resto = resto / 2;
            bin.unshift(0);
        } else {
            resto = (resto - 1) / 2;
            bin.unshift(1);
        }



    } while (resto >= 2);

    bin.unshift(resto);

    console.log("----------------");
    return bin;
}

console.log(decToBin(2), 2);
console.log(decToBin(4), 4);
console.log(decToBin(6), 6);
console.log(decToBin(7), 7);

console.log(decToBin(8), 8);
console.log(decToBin(21), 21);
console.log(decToBin(22), 22);
console.log(decToBin(245), 245);