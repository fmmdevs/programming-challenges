/*
 * Crea una única función (importante que sólo sea una) que sea capaz
 * de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo UN polígono a la vez.
 * - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 * - Imprime el cálculo del área de un polígono de cada tipo.
 */

class Triangulo {
    lado1;
    lado2;
    lado3;
    constructor(lado1, lado2, lado3) {
        // Para que tres lados puedan formar un triangulo la suma de las longitudes
        // de dos de sus lados siempre debe ser mayor que la longitud del tercer lado
        if (lado1 + lado2 < lado3 || lado2 + lado3 < lado1 || lado1 + lado3 < lado2) {
            alert("No es un triangulo");
        } else {
            this.lado1 = lado1;
            this.lado2 = lado2;
            this.lado3 = lado3;
        }

    }
}

class Cuadrado {

    constructor(lado) {
        this.lado = lado;
    }
}

class Rectangulo {
    constructor(lado1, lado2) {
        this.lado1 = lado1;
        this.lado2 = lado2;
    }
}
const triangulo = new Triangulo(40, 43, 20);
const cuadrado = new Cuadrado(40);
const rectangulo = new Rectangulo(12, 40);

const areaPoligono = (poligono) => {
    if (poligono instanceof Triangulo) {
        // Si tenemos los 3 lados aplicamos la formaula de Herón:
        // 1. Calculamos semiperimetro del triangulo
        const semiperimetro = (poligono.lado1 + poligono.lado2 + poligono.lado3) / 2;
        console.log(semiperimetro);
        // 2. Aplicamos la formula
        return Math.sqrt(Math.abs(semiperimetro * (semiperimetro - poligono.lado1) * (semiperimetro - poligono.lado2) * (semiperimetro - poligono.lado3)));
    }

    if (poligono instanceof Cuadrado) {
        return poligono.lado * poligono.lado;
    }


    if (poligono instanceof Rectangulo) {
        return poligono.lado1 * poligono.lado2;
    }
}

console.log(areaPoligono(triangulo));
console.log(areaPoligono(cuadrado));
console.log(areaPoligono(rectangulo));