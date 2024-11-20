
export const calculateIntegral = (shapeType:string,size:number, altura: number ) => {
    if (shapeType === 'Cubo') {
      const volume = Math.pow(size, 3);
      return {
          titulo: "Cálculo del volumen de un cubo",  
          formula: `V = ∫∫∫ dxdydz = a³`,
          calculation: `V = ${size} × ${size} × ${size}`,
          result: `V = ${volume.toFixed(2)} unidades cúbicas`,
          description: "Un cubo es un sólido de seis caras cuadradas, todas con la misma longitud de lado. Su volumen se calcula elevando al cubo la longitud del lado (a³).",
      };
    } else if (shapeType === 'Esfera') {
      const volume = (4 / 3) * Math.PI * Math.pow(size, 3);
      return {
          titulo: "Cálculo del volumen de una esfera",  
          formula: `V = ∫∫∫ dxdydz = 4/3 π r³`,
          calculation: `V = 4/3 × π × (${size.toFixed(2)})³`,
          result: `V = ${volume.toFixed(2)} unidades cúbicas`,
          description: "Una esfera es una superficie redonda en tres dimensiones, donde todos los puntos en la superficie están a la misma distancia del centro. Su volumen se calcula con (4/3)πr³, siendo r el radio.",
      };
    } else if (shapeType === 'Pirámide') {
      const baseLength = size ;
      const height = altura;
      const volume = (1 / 3) * Math.pow(baseLength, 2) * height;
      return {
        titulo: "Cálculo del volumen de una pirámide",  
        formula: `V = ∫∫∫ dxdydz = 1/3 Bh`,
        calculation: `V = 1/3 × (${baseLength.toFixed(2)})² × ${height}`,
        result: `V = ${volume.toFixed(2)} unidades cúbicas`,
        description: "Una pirámide de base cuadrada tiene una base en forma de cuadrado y cuatro caras triangulares que se encuentran en un vértice común. Su volumen es (1/3) de la base cuadrada (B) multiplicado por su altura (h).",
      };
    } else if (shapeType === 'Cápsula') {
      const radius = size;
      const height = size * 2;
      const cylinderVolume = Math.PI * Math.pow(radius, 2) * height;
      const hemispheresVolume = (4 / 3) * Math.PI * Math.pow(radius, 3);
      const totalVolume = cylinderVolume + hemispheresVolume;

      return {
      titulo: "Cálculo del volumen de una cápsula",
      formula: `V = \\int\\int\\int dxdydz = \\pi r^2 h + \\frac{4}{3} \\pi r^3`,
      calculation: `V = \\pi (${radius})^2 (${height}) + \\frac{4}{3} \\pi (${radius})^3`,
      result: `V = ${totalVolume.toFixed(2)} unidades cúbicas`,
      description: "Una cápsula es una figura tridimensional formada por un cilindro con hemisferios en ambos extremos. Su volumen se calcula sumando el volumen del cilindro y el volumen de los dos hemisferios.",
      explanation: "El volumen de la cápsula se obtiene combinando las fórmulas de volumen del cilindro \\( \\pi r^2 h \\) y el volumen de una esfera \\( \\frac{4}{3} \\pi r^3 \\), considerando que los hemisferios forman una esfera completa."
      };
    }else {
      return {
        formula: `V = ∫∫∫ dxdydz`,
        calculation: `Volume calculation depends on specific shape dimensions`,
        result: `N/A`,
        description: "La figura seleccionada no tiene una fórmula específica implementada para el cálculo de volumen."
      };
    }
  };