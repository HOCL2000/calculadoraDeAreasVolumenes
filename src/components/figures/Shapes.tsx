import React, { useRef, useState } from 'react'
import { Canvas, extend, useThree } from '@react-three/fiber'
import { OrbitControls, Text, Environment, Cylinder, Sphere } from '@react-three/drei'
import * as THREE from 'three'
import { UseCalculatorStore } from '@/store/calculadora'
import { toast } from 'sonner'

extend({ OrbitControls })

function Axis({ color = "red", direction = [1, 0, 0] }) {
  return (
    <group>
      <arrowHelper args={[new THREE.Vector3(...direction), new THREE.Vector3(0, 0, 0), 10, color, 0.5, 0.3]} />
      <Text
        color={color}
        position={direction.map(d => d * 10.5) as [number, number, number]}
        fontSize={0.5}
      >
        {direction[0] === 1 ? 'X' : direction[1] === 1 ? 'Y' : 'Z'}
      </Text>
    </group>
  )
}

function AxisLabels() {
  const labels = []
  for (let i = -10; i <= 10; i++) {
    if (i !== 0) {
      labels.push(
        <React.Fragment key={`x${i}`}>
          <Text position={[i, 0, 0]} fontSize={0.3} color="red">{i}</Text>
          <Text position={[0, i, 0]} fontSize={0.3} color="green">{i}</Text>
          <Text position={[0, 0, i]} fontSize={0.3} color="blue">{i}</Text>
        </React.Fragment>
      )
    }
  }
  return <>{labels}</>
}

function CapsuleGeometry({ size }: { size: number }) {
  const radius = size / 4
  const height = size / 2

  return (
    <group>
      <Cylinder args={[radius, radius, height, 32]}>
        <meshStandardMaterial         
        color="#888888"
        metalness={0.9}
        roughness={0.1}
        envMapIntensity={1} />
      </Cylinder>
      <Sphere args={[radius, 32, 32]} position={[0, height / 2, 0]}>
        <meshStandardMaterial
        color="#888888"
        metalness={0.9}
        roughness={0.1}
        envMapIntensity={1} 
        />
      </Sphere>
      <Sphere args={[radius, 32, 32]} position={[0, -height / 2, 0]}>
        <meshStandardMaterial
        color="#888888"
        metalness={0.9}
        roughness={0.1}
        envMapIntensity={1} 
        />
      </Sphere>
    </group>
  )
}

interface ShapeProps {
  position: [number, number, number]
  size: number
  shapeType: string
}

function Shape({ position, size, shapeType }: ShapeProps) {
  const mesh = useRef<THREE.Mesh>(null!)
  let geometry
  switch (shapeType) {
    case 'Cubo':
      geometry = <boxGeometry args={[size, size, size]} />
      break
    case 'Esfera':
      geometry = <sphereGeometry args={[size / 2, 64, 64]} />
      break
    case 'Rombo':
      geometry = <octahedronGeometry args={[size / 2]} />
      break
    case 'Pirámide':
      geometry = <coneGeometry args={[size / 2, size, 4]} />
      break
    case 'Cápsula':
      return (
        <mesh ref={mesh} position={position}>
          <CapsuleGeometry size={size} />
        </mesh>
      )
      break
    default:
      geometry = <boxGeometry args={[size, size, size]} />
  }

  return (
    <mesh ref={mesh} position={position}>
      {geometry}
      <meshStandardMaterial
        color="#888888"
        metalness={0.9}
        roughness={0.1}
        envMapIntensity={1}
      />
    </mesh>
  )
}

function Scene({ shapePosition, shapeSize, shapeType  }: { shapePosition: [number, number, number], shapeSize: number, shapeType: string }) {
  const { scene } = useThree()
  scene.background = new THREE.Color(0x222222)

  return (
    <>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <Axis color="red" direction={[1, 0, 0]} />
      <Axis color="green" direction={[0, 1, 0]} />
      <Axis color="blue" direction={[0, 0, 1]} />
      <AxisLabels />
      <gridHelper args={[20, 20, 'gray', 'gray']} />
      <gridHelper args={[20, 20, 'gray', 'gray']} rotation={[Math.PI / 2, 0, 0]} />
      <gridHelper args={[20, 20, 'gray', 'gray']} rotation={[0, 0, Math.PI / 2]} />
      <Shape position={shapePosition} size={shapeSize} shapeType={shapeType} />
      <Environment preset="studio" />
    </>
  )
}


export default function MetallicShapes3D() {
  const [position, setPosition] = useState<[number, number, number]>([1, 1, 1])
  const size = 2
  const [inputPosition, setInputPosition] = useState<string>("1,1,1")
  const handlePositionChange = () => {
    const coords = inputPosition.split(',').map(Number)
    const rangeValidation = coords.every(coord => coord >= -10 && coord <= 10)
    if(!rangeValidation){
      toast.error("Por favor ingresa un rango de coordenadas validas, mínimo -10 máximo 10")
      return
    }
    if (coords.length === 3 && coords.every(coord => !isNaN(coord))) {
      setPosition(coords as [number, number, number])
    }
  }
  


  const shape = UseCalculatorStore(state=> state.figureSelected)
  return (
    <div className="w-full px-2  md:px-4 border bg-black rounded h-screen flex flex-col">
      <div className="p-4   rounded">
        <div className="w-full text-center mx-auto space-y-4  ">
          <h2 className="text-2xl font-bold text-white mb-4">Control de figura</h2>
          <div className="flex items-start justify-start w-full">
            <div className="space-y-2 w-full">
              <label htmlFor="position" className="flex w-full text-sm   font-medium text-gray-100">
                <span className='w-full flex'>
                    Posición de la figura (x,y,z)
                </span>
              </label>
              <div className="flex flex-col items-start w-full justify-start gap-2">
                <input
                  type="text"
                  id="position"
                  value={inputPosition}
                  onChange={(e) => setInputPosition(e.target.value)}
                  placeholder="1,1,1"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full"
                />
                <button
                  onClick={handlePositionChange}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 w-full
                  "
                >
                  Cambiar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-grow ">
        <Canvas camera={{ position: [15, 15, 15], fov: 60 }} className='max-h-[95%] bg-black px-4 h-auto w-full'>
            {shape?.name &&
                <Scene shapePosition={position} shapeSize={size} shapeType={shape?.name}  />
            }
            <OrbitControls />
        </Canvas>
      </div>
    </div>
  )
}