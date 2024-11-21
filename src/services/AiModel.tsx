import {GoogleGenerativeAI} from "@google/generative-ai"
const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};
  
export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {text: "Hola, eso¿toy creando una aplicacion que calcule por medio de integrales el volumen de una fugura la figura va cambiando está entre cubo, esfera y una pirámide, lo que quiero hacer es que se muestre la explicacion bueno la generes cada vez que haga la solicitud\n"},
      ],
    },
    {
      role: "model",
      parts: [
        {text: "## ¡Genial! Aquí te ayudo a generar las explicaciones para tu aplicación que calcula volúmenes con integrales.\n\n**Estructura de la explicación:**\n\n1. **Introducción:** Describe brevemente el concepto de volumen y cómo se relaciona con las integrales.\n2. **Descripción de la figura:**  Menciona la forma geométrica específica que el usuario ha seleccionado (cubo, esfera o pirámide).\n3. **Fórmula de volumen:** Muestra la fórmula general del volumen para la figura seleccionada.\n4. **Integración:** Explica cómo se utiliza la integral para calcular el volumen de la figura. Incluye:\n    * **Descripción de la integral:** Define la integral definida y cómo se utiliza para obtener el volumen.\n    * **Límites de integración:** Explica cómo se determinan los límites de integración para la figura específica.\n    * **Función integrando:**  Describe la función que se integra para obtener el volumen.\n5. **Ejemplo:**  Si es posible, incluye un ejemplo sencillo para ilustrar el proceso de cálculo del volumen con integrales.\n6. **Resultados:** Presenta el volumen calculado para la figura específica.\n\n**Ejemplos de explicaciones:**\n\n**Cubo:**\n\n1. **Introducción:** El volumen de un cuerpo tridimensional se refiere al espacio que ocupa. Las integrales nos permiten calcular el volumen de figuras irregulares dividiéndolas en secciones infinitesimales y sumando sus volúmenes.\n2. **Descripción:** Has seleccionado un cubo, un sólido geométrico con seis caras cuadradas congruentes.\n3. **Fórmula:** El volumen de un cubo se calcula con la fórmula V = lado³, donde \"lado\" es la longitud de una de sus aristas.\n4. **Integración:** Para calcular el volumen del cubo utilizando la integración, se puede dividir el cubo en infinitos planos paralelos a una de sus caras. Cada plano sería una sección cuadrada con área igual a lado². Integrando la función lado² desde 0 hasta el lado del cubo, se obtiene el volumen total:\n\n   ∫(lado²) dx = lado³ | de 0 a lado = lado³ - 0 = lado³\n\n5. **Ejemplo:**  Si el lado del cubo es 5 unidades, su volumen es 5³ = 125 unidades cúbicas.\n6. **Resultados:** El volumen del cubo es [volumen calculado].\n\n**Esfera:**\n\n1. **Introducción:** Las integrales nos permiten calcular el volumen de figuras tridimensionales mediante la suma de infinitesimales.\n2. **Descripción:** Has elegido una esfera, un cuerpo geométrico tridimensional con todos sus puntos equidistantes a un punto central llamado centro.\n3. **Fórmula:** El volumen de una esfera se calcula con la fórmula V = (4/3)πr³, donde \"r\" es el radio de la esfera.\n4. **Integración:** Para calcular el volumen de la esfera, se puede dividirla en infinidad de discos circulares con radios que varían desde 0 hasta \"r\". Cada disco tiene un volumen dado por πr²dx, donde \"r\" es el radio del disco y \"dx\" es su espesor infinitesimal.  Integrando la función πr²dx desde 0 hasta \"r\", se obtiene el volumen total:\n\n   ∫(πr²) dx = (4/3)πr³ | de 0 a r = (4/3)πr³ - 0 = (4/3)πr³\n\n5. **Ejemplo:** Si el radio de la esfera es 3 unidades, su volumen es (4/3)π(3³) = 36π unidades cúbicas.\n6. **Resultados:** El volumen de la esfera es [volumen calculado].\n\n**Pirámide:**\n\n1. **Introducción:**  Las integrales nos permiten calcular el volumen de figuras tridimensionales mediante la suma de infinitesimales.\n2. **Descripción:** Has seleccionado una pirámide, un sólido geométrico con una base poligonal y caras triangulares que se encuentran en un punto común llamado vértice.\n3. **Fórmula:** El volumen de una pirámide se calcula con la fórmula V = (1/3)Ab*h, donde \"Ab\" es el área de la base y \"h\" es la altura de la pirámide.\n4. **Integración:** Para calcular el volumen de la pirámide, se puede dividirla en infinidad de secciones con áreas que varían desde 0 hasta el área de la base.  La integral de la función del área de cada sección, desde 0 hasta la altura de la pirámide, nos dará el volumen total:\n\n   ∫(Ab(x)) dx = (1/3)Ab*h | de 0 a h = (1/3)Ab*h - 0 = (1/3)Ab*h\n\n5. **Ejemplo:** Si el área de la base de la pirámide es 10 unidades cuadradas y su altura es 5 unidades, su volumen es (1/3)*10*5 = 16.67 unidades cúbicas.\n6. **Resultados:** El volumen de la pirámide es [volumen calculado].\n\n**Recuerda:**\n\n* Adapta estas explicaciones a las necesidades específicas de tu aplicación.\n* Utiliza lenguaje claro y conciso.\n* Incluir imágenes o gráficos puede mejorar la comprensión.\n* Puedes añadir más detalles sobre la integración o la geometría de las figuras, si es necesario.\n\nEspero que esta información te sea útil para desarrollar tu aplicación. ¡Mucha suerte! \n"},
      ],
    },
  ],
});

