/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */
let ant = 0;
let act = 0;
let n = 0;
for (let i = 0; i < 50; i++) {

    if (i == 0) {
    }
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