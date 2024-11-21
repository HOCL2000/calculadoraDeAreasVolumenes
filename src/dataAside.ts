import { Figure } from "./types";

export const data3d: Figure[] = [
    {   
        "id": "1",
        "name": "Cubo",
        "image": "/src/assets/images/cubo.webp",
        "description": "Calcula el área superficial de un cubo usando la longitud de sus aristas. Ideal para calcular el área total de los seis lados de un cubo."
    }, 
    {
        "id": "2",
        "name": "Pirámide",
        "image": "/src/assets/images/piramide.webp",
        "description": "Calcula el área de un triángulo proporcionando su base y altura. Ideal para triángulos equiláteros, isósceles o escalenos."
    },
    {
        "id": "3",
        "name": "Esfera",
        "image": "/src/assets/images/esfera.webp",
        "description": "Obtén el área de un círculo introduciendo el valor de su radio. Utiliza esta fórmula para resolver problemas relacionados con circunferencias.  "
    },
    {
        "id": "4",
        "name": "Cápsula",
        "image": "/src/assets/images/capsula.webp",
        "description": "Calcula el volumen y área de una cápsula introduciendo los valores de su radio y altura. Usa esta fórmula para resolver problemas relacionados con formas tridimensionales combinadas de cilindros y hemisferios."
    }  
] as const

export const data2d: Figure[] = [
    {   
        "id": "5",
        "name": "Triángulo",
        "image": "/src/assets/images/triangulo.webp",  
        "description": "Calcula el área de un triángulo proporcionando su base y altura. La fórmula es área = (base * altura) / 2."
    }, 
    {
        "id": "6",
        "name": "Rombo",
        "image": "/src/assets/images/rombo.webp",  
        "description": "Para calcular el área de un rombo, multiplica la longitud de sus diagonales y divide entre dos. Fórmula: área = (d1 * d2) / 2."
    },
    {
        "id": "7",
        "name": "Círculo",
        "image": "/src/assets/images/circulo.webp", 
        "description": "Calcula el área de un círculo usando el radio. La fórmula es área = π * radio²."
    },
    {
        "id": "8",
        "name": "Hexágono",
        "image": "/src/assets/images/pentagono.webp",
        "description": "Calcula el área de un pentágono regular multiplicando el perímetro por la apotema y dividiendo entre dos. Fórmula: área = (perímetro * apotema) / 2."
    }  
] as const;