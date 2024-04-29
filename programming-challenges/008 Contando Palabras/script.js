/*
 * Crea un programa que cuente cuantas veces se repite cada palabra
 * y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que
 *   lo resuelvan automáticamente.
 */

const cuentaPalabras = (texto) => {

    const textoUpper = texto.toUpperCase();

    const words = textoUpper.split(/\W+/g);
    // console.log(words);

    let cleanWords = [];

    let result = {};
    for (let i = 0; i < words.length - 1; i++) {

        cleanWords.push(words[i]);
        if (!result[`${words[i]}`]) {
            result[`${words[i]}`] = 1;
        } else {
            result[`${words[i]}`] += 1;
        }
    }

    // console.log(result);

    // Para ordenarlos pasamos el resultado a otro array donde cada elemento es otro array
    // [palabra, repeticiones]
    let sorted = [];
    // Para recorrer un objeto por sus keys usamos for in
    for (let word in result) {
        sorted.push([word, result[word]]);
    }

    sorted.sort((a, b) => {
        return a - b;
    });

    // console.log(sorted);
    return sorted;

}

console.log(cuentaPalabras("En un rincón del vasto universo, donde las estrellas bailan en la sinfonía del tiempo, se encuentra un pequeño planeta llamado Tierra. En este mundo azul, la vida florece en cada rincón, desde los profundos océanos hasta las altas montañas. Aquí, los seres humanos, con su ingenio y creatividad, han forjado civilizaciones y construido historias que perduran en el tejido del tiempo. Cada palabra susurrada, cada acción realizada, deja una huella en el lienzo de la existencia. En este cosmos de posibilidades infinitas, cada momento es único y precioso, un destello fugaz en la eternidad del universo"));
console.log(cuentaPalabras("Hola aasfdsf adfsdf asdf k, fasdf. afsdifj....a...as.d.fas.df..."));
