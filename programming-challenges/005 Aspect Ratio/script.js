/*
 * Crea un programa que se encargue de calcular el aspect ratio de una
 * imagen a partir de una url.
 * - Url de ejemplo:
 *   https://raw.githubusercontent.com/mouredevmouredev/master/mouredev_github_profile.png
 * - Por ratio hacemos referencia por ejemplo a los "16:9" de una
 *   imagen de 1920*1080px.
 */

const esPrimo = (n) => {

    for (let i = 2; i < n; i++) {
        if (n % i == 0) return false;
    }
    return true;
};

const primos = [];
for (let i = 2; i <= 1000; i++) {
    if (esPrimo(i)) {
        primos.push(i);
    }
}

// console.log(primos);



const descomponerNumero = (n) => {
    let resto = n;
    let result = [];

    do {

        if (esPrimo(resto)) {
            result.push(resto);
            return result;
        }

        for (let primo of primos) {
            if (resto % primo == 0) {
                resto = resto / primo;
                result.push(primo);
                break;
            }
        }
    } while (resto != 1);

    return result;
}



const simplificarFraccion1 = (num, den) => {
    console.log(num);
    console.log(den);
    const factoresNum = descomponerNumero(num);
    const factoresDen = descomponerNumero(den);
    console.log(factoresNum);
    console.log(factoresDen);
    let simpNum = [];
    let simpDen = [];
    let i = 0;
    let j = 0;

    do {
        if (factoresNum[i] == factoresDen[j]) {
            i++;
            j++;
        } else if (factoresNum[i] < factoresDen[j]) {
            simpNum.push(factoresNum[i]);
            i++;
        } else if (factoresDen[j] < factoresNum[i]) {
            simpDen.push(factoresDen[j]);
            j++;
        }

        // Si terminamos de recorrer un array nos quedamos con todos los elementos del otro y salimos del bucle
        if (i == factoresNum.length) {

            do {
                simpDen.push(factoresDen[j]);
                j++
            } while (j < simpDen.length);

        } else if (j == factoresDen.length) {
            do {
                simpNum.push(factoresNum[i]);
                i++
            } while (i < simpNum.length);
        }
        console.log("simpNum: ", simpNum, i);
        console.log("simpDen", simpDen, j);

    } while (j <= factoresDen.length && i <= factoresNum.length);



    let multNum = 1;
    for (let factor of simpNum) {
        if (factor != undefined) {

            multNum *= factor;
        }
    }

    let multDen = 1;
    for (let factor of simpDen) {
        if (factor != undefined) {

            multDen *= factor;
        }
    }

    return [multNum, multDen];


};

console.log(simplificarFraccion1(368, 469));
console.log("----------------------------------------");
console.log(simplificarFraccion1(1920, 1080));
console.log("----------------------------------------");
console.log(simplificarFraccion1(500, 250));
console.log("----------------------------------------");
console.log(simplificarFraccion1(4000, 400));
console.log("----------------------------------------");



const aspectRatio = (url) => {
    // TO-DO: Probar con fetch
    const img = new Image();
    img.src = url;

    return simplificarFraccion1(img.width, img.height);

}

console.log(aspectRatio("https://imgs.search.brave.com/-eKlEpCIYIHDb3DYsh2JkhjX7sk1orPVoKdfS2B3qX4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMjA0/MDg4MTQxNS9waG90/by9sb3Vpc2UtNi1p/bWdfNTM1MS53ZWJw/P2I9MSZzPTE3MDY2/N2Emdz0wJms9MjAm/Yz0wY3lSa3dXMUE4/UW9vcTFzaXYwbEp1/d3VZbTRkWElQel9q/WHRUcnRWR0lzPQ"));