### English README.md

---

# Polygon Area Calculator

This program defines a single function capable of calculating and returning the area of a polygon.

- The function will receive only ONE polygon at a time as a parameter.
- The supported polygons are Triangle, Square, and Rectangle.
- It prints the area calculation of one polygon of each type.

## Function

```javascript
class Triangle {
    // Constructor and methods...
}

class Square {
    // Constructor and methods...
}

class Rectangle {
    // Constructor and methods...
}

const calculatePolygonArea = (polygon) => {
    // Implementation...
}
```

## Usage

1. Define instances of the supported polygons: Triangle, Square, and Rectangle.
2. Call the `calculatePolygonArea` function with the polygon instance as a parameter to calculate its area.

## Program

```javascript
const triangle = new Triangle(40, 43, 20);
const square = new Square(40);
const rectangle = new Rectangle(12, 40);

console.log(calculatePolygonArea(triangle));   // Output: Calculated area of the triangle
console.log(calculatePolygonArea(square));     // Output: Calculated area of the square
console.log(calculatePolygonArea(rectangle));  // Output: Calculated area of the rectangle
```

---

### README.md en español

---

# Calculador de Área de Polígonos

Este programa define una única función capaz de calcular y devolver el área de un polígono.

- La función recibirá solo UN polígono a la vez como parámetro.
- Los polígonos admitidos son Triángulo, Cuadrado y Rectángulo.
- Imprime el cálculo del área de un polígono de cada tipo.

## Función

```javascript
class Triangulo {
    // Constructor y métodos...
}

class Cuadrado {
    // Constructor y métodos...
}

class Rectangulo {
    // Constructor y métodos...
}

const calcularAreaPoligono = (poligono) => {
    // Implementación...
}
```

## Uso

1. Define instancias de los polígonos admitidos: Triángulo, Cuadrado y Rectángulo.
2. Llama a la función `calcularAreaPoligono` con la instancia del polígono como parámetro para calcular su área.

## Programa

```javascript
const triangulo = new Triangulo(40, 43, 20);
const cuadrado = new Cuadrado(40);
const rectangulo = new Rectangulo(12, 40);

console.log(calcularAreaPoligono(triangulo));   // Salida: Área calculada del triángulo
console.log(calcularAreaPoligono(cuadrado));     // Salida: Área calculada del cuadrado
console.log(calcularAreaPoligono(rectangulo));  // Salida: Área calculada del rectángulo
```

