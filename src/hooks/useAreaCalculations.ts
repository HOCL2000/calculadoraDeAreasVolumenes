export const CalculateArea = (shapeType: string, size: number, altura: number = 0) => {
    if (shapeType === 'Círculo') {
      const area = Math.PI * Math.pow(size, 2);
      return {
        titulo: "Cálculo del área de un círculo",
        formula: `A = πr²`,
        calculation: `A = π × (${size.toFixed(2)})²`,
        result: `A = ${area.toFixed(2)} unidades cuadradas`,
        description: "Un círculo es una figura plana en la que todos los puntos están a la misma distancia del centro. Su área se calcula con la fórmula πr², donde r es el radio.",
      };
    } else if (shapeType === 'Rombo') {
      const diagonalMayor = altura;
      const diagonalMenor = size; 
      const area = (diagonalMayor * diagonalMenor) / 2;
      return {
        titulo: "Cálculo del área de un rombo",
        formula: `A = (D × d) / 2`,
        calculation: `A = (${diagonalMayor.toFixed(2)} × ${diagonalMenor.toFixed(2)}) / 2`,
        result: `A = ${area.toFixed(2)} unidades cuadradas`,
      };
    } else if (shapeType === 'Triángulo') {
      const base = size;
      const height = altura;
      const area = (base * height) / 2;
      return {
        titulo: "Cálculo del área de un triángulo",
        formula: `A = (b × h) / 2`,
        calculation: `A = (${base.toFixed(2)} × ${height.toFixed(2)}) / 2`,
        result: `A = ${area.toFixed(2)} unidades cuadradas`,
        description: "Un triángulo es una figura de tres lados y tres vértices. Su área se calcula multiplicando la base por la altura y dividiendo por 2.",
      };
    } else if (shapeType === 'Pentágono') {
      const lado = size;
      const apotema = altura;
      const perimetro = lado * 5;
      const area = (perimetro * apotema) / 2;
      return {
        titulo: "Cálculo del área de un pentágono",
        formula: `A = (P × a) / 2`,
        calculation: `A = (${perimetro.toFixed(2)} × ${apotema.toFixed(2)}) / 2`,
        result: `A = ${area.toFixed(2)} unidades cuadradas`,
        description: "Un pentágono es un polígono de cinco lados. Para un pentágono regular, el área se calcula con el producto del perímetro y el apotema dividido por 2.",
      };
    } else {
      return {
        formula: `A = ∫∫ dA`,
        calculation: `Área no implementada para la figura seleccionada`,
        result: `N/A`,
        description: "La figura seleccionada no tiene una fórmula específica implementada para el cálculo de área.",
      };
    }
  };
  