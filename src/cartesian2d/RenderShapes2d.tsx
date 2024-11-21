import { UseCalculatorStore } from "@/store/calculadora";
import { Circle, Line } from "react-konva";

export const RenderShape2d = ({ width, height }: { width: number, height: number } ) => {
  
    const shapeSelected = UseCalculatorStore(state=> state.figureSelected)
    const centerX = width / 2; 
    const centerY = height / 2;
    const gridSpacing = 25;
    const metalGradient = {
      green: "#6ABF69",
      red: "#E74C3C",
      yellow: "#F4D03F",
      purple: "#8E44AD",
      stroke: "#2C3E50",
    };
    const gridLines = [];
    for (let i = 0; i <= Math.max(width, height); i += gridSpacing) {
      // Líneas verticales
      gridLines.push(
        <Line
          key={`v-${i}`}
          points={[i, 0, i, height]}
          stroke="#ccc"
          strokeWidth={0.5}
        />
      );
      // Líneas horizontales
      gridLines.push(
        <Line
          key={`h-${i}`}
          points={[0, i, width, i]}
          stroke="#ccc"
          strokeWidth={0.5}
        />
      );
    }


    switch (shapeSelected?.name) {
      case "Triángulo":
        return (
          <Line
            points={[
              centerX, centerY - 50, 
              centerX - 40, centerY + 30, 
              centerX + 40, centerY + 30, 
            ]}
            closed
            fillLinearGradientStartPoint={{ x: -50, y: -50 }}
            fillLinearGradientEndPoint={{ x: 50, y: 50 }}
            fillLinearGradientColorStops={[0, metalGradient.green, 1, "white"]}
            stroke={metalGradient.stroke}
            strokeWidth={2}
          />
        );
        case "Círculo":
        return (
          <Circle
            x={centerX}
            y={centerY}
            radius={40}
            fillLinearGradientStartPoint={{ x: -40, y: -40 }}
            fillLinearGradientEndPoint={{ x: 40, y: 40 }}
            fillLinearGradientColorStops={[0, metalGradient.red, 1, "white"]}
            stroke={metalGradient.stroke}
            strokeWidth={2}
          />
        );
        case "Rombo":
        return (
          <Line
            points={[
              centerX, centerY - 50, 
              centerX - 40, centerY, 
              centerX, centerY + 50, 
              centerX + 40, centerY, 
            ]}
            closed
            fillLinearGradientStartPoint={{ x: -50, y: -50 }}
            fillLinearGradientEndPoint={{ x: 50, y: 50 }}
            fillLinearGradientColorStops={[0, metalGradient.yellow, 1, "white"]}
            stroke={metalGradient.stroke}
            strokeWidth={2}
          />
        );
        case "Pentágono":
        { const radius = 50; 
        const sides = 5; 
        const angle = (2 * Math.PI) / sides; 
        const pentagonPoints = Array.from({ length: sides }, (_, i) => [
          centerX + radius * Math.cos(angle * i - Math.PI / 2),
          centerY + radius * Math.sin(angle * i - Math.PI / 2),
        ]).flat();

        return (
          <Line
            points={pentagonPoints}
            closed
            fillLinearGradientStartPoint={{ x: -50, y: -50 }}
            fillLinearGradientEndPoint={{ x: 50, y: 50 }}
            fillLinearGradientColorStops={[0, metalGradient.purple, 1, "white"]}
            stroke={metalGradient.stroke}
            strokeWidth={2}
          />
        ); }
      default:
      return null;
    }
  };