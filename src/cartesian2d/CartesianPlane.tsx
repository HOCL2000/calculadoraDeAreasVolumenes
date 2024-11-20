import  { useState, useEffect, useRef } from "react";
import { Stage, Layer, Line, Text } from "react-konva";
import { RenderShape2d } from "./RenderShapes2d";

const CartesianPlaneWithShapes = () => {
  const containerRef = useRef<HTMLDivElement>(null); 
  const [dimensions, setDimensions] = useState({ width: 300, height: 400 }); 
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const { width, height } = dimensions;
  const centerX = width / 2; 
  const centerY = height / 2; 
  const gridSpacing = 25; 

  const gridLines = [];
  for (let i = 0; i <= Math.max(width, height); i += gridSpacing) {
    gridLines.push(
      <Line
        key={`v-${i}`}
        points={[i, 0, i, height]}
        stroke="#ccc"
        strokeWidth={0.5}
      />
    );
    gridLines.push(
      <Line
        key={`h-${i}`}
        points={[0, i, width, i]}
        stroke="#ccc"
        strokeWidth={0.5}
      />
    );
  }

  return (
    <div
      ref={containerRef}
      className="w-[99%] flex h-[80%] mt-10 max-h-screen"
    >
      
      <div className="w-full ">
      <Stage width={width} height={height}>
        <Layer>
          {gridLines}
          <Line
            points={[0, centerY, width, centerY]}
            stroke="white"
            strokeWidth={1.5}
          />
          <Line
            points={[centerX, 0, centerX, height]}
            stroke="white"
            strokeWidth={1.5}
          />
          <Text text="X" x={width - 20} y={centerY - 20} fontSize={25} fill={"#fff"}/>
          <Text text="Y" x={centerX + 10} y={10} fontSize={25} fill={"#fff"} />
          <RenderShape2d height={dimensions.height} width={dimensions.width} />
        </Layer>
      </Stage>
      </div>
    </div>
  );
};

export default CartesianPlaneWithShapes;
