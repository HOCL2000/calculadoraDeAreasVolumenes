import { UseCalculatorStore } from "@/store/calculadora"
import React, { useEffect, useRef, useState } from "react";
import { IntegralCalculation } from "@/maths/IntegralCalculation";
import { chatSession } from "@/services/AiModel";
import { AnimatedCard } from "./animations/AnimateCard";
import { TypewriterText } from "./animations/TypeWriter";
import { AnimatePresence } from "framer-motion";
import {motion} from 'framer-motion'

const MakeCalculations3d = () => {
    const [volume,setVolume] = useState<number >(0)
    const [altura,setAltura] = useState<number >(0)
    const shape = UseCalculatorStore(state=> state.figureSelected)
    const [explanation,setExplanation] = useState<string> ()
    const prompt = "hola, genera la explicación detallada de cómo se calcula el volumen de un {figura} por medio de integrales"
    async function calculateAreaOfCube(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault()
        const valuesFromForm = Object.fromEntries(new FormData(event.currentTarget))
        let finalOptions = ``
        let finalPrompt = ``
        if (shape?.name) {
            if(shape.name == 'Cubo'){
                const lado = Number(valuesFromForm.lado);
                finalOptions = ` La longitud del lado es ${lado}`
                setVolume(lado)
            }else if(shape.name == 'Esfera'){
                const radio = Number(valuesFromForm.radio);
                setVolume(radio)

                finalOptions = ` La longitud del radio es ${radio}`
            }else if(shape.name == "Pirámide"){
                const altura = Number(valuesFromForm.altura);
                const lado = Number(valuesFromForm.lado);
                setVolume(lado)
                setAltura(altura)
                finalOptions = ` La altura ${altura} y la base es ${lado} `
            }
            finalPrompt = prompt.replace("{figura}", shape?.name).concat(finalOptions)
            const request = await chatSession.sendMessage(finalPrompt)
            const responseJson = JSON.parse(request.response.text());
            
            setExplanation(responseJson.explicacion);
        }
    }  

    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(()=>{
        setVolume(0)
        setAltura(0)
        setExplanation("")
    },[shape])
    
    return (
    <section ref={contentRef} className="max-h-screen h-full w-full flex flex-col items-start overflow-y-scroll overflow-auto border rounded px-4 gap-4" > 
        {shape ?
        <>
        <div className="w-full flex items-center justify-center">
            <form className="flex flex-col items-center  justify-center  w-full" onSubmit={calculateAreaOfCube}>
                <h1 className="text-white font-bold text-start text-2xl my-4">Obtener volumen por integrales</h1>
                {shape.name === "Cubo" &&
                <label 
                htmlFor="lado" className="w-full">
                    <input type="text" name="lado" id="lado" placeholder="Ingresa la longitud del lado" className="p-2 rounded w-full"/>
                </label>
                }
                {shape.name === "Esfera" &&
                <label 
                htmlFor="radio" className="w-full">
                    <input type="text" name="radio" id="radio" placeholder="Ingresa la longitud del radio" className="p-2 rounded w-full"/>
                </label>
                }
                {shape.name === "Pirámide" &&
                <div 
                className="w-full flex flex-col gap-2">
                <label htmlFor="altura" className="w-full">
                    <input type="text" name="altura" id="altura" placeholder="Ingresa la altura de la pirámide" className="p-2 rounded w-full"/>
                </label>
                <label htmlFor="lado" className="w-full">
                    <input type="text" name="lado" id="lado" placeholder="Ingresa la longitud del lado de la base" className="p-2 rounded w-full"/>
                </label>
                </div>
                }
                {shape.name === "Cápsula" &&
                <div 
                className="w-full flex flex-col gap-2">
                <label htmlFor="altura" className="w-full">
                    <input type="text" name="altura" id="altura" placeholder="Ingresa la altura de la pirámide" className="p-2 rounded w-full"/>
                </label>
                <label htmlFor="lado" className="w-full">
                    <input type="text" name="lado" id="lado" placeholder="Ingresa la longitud del lado de la base" className="p-2 rounded w-full"/>
                </label>
                </div>
                }
                <button type="submit" className="px-6 py-2 mt-2 border-zinc-700 border rounded-md relative radial-gradient-btn w-full">
                    <span className="text-neutral-50 tracking-wide font-light h-full w-full block relative  z-2">
                        Calcular
                    </span>
                </button>
            </form>
        </div>
        {shape?.name &&
            <section className=" w-full">
                <IntegralCalculation shapeType={shape?.name} size={volume} altura={altura} />
            </section>
        }
        </>
            :
            <div className="w-full h-full flex items-center justify-center text-white text-2xl font-bold">
                <h1> Selecciona una figura</h1>
            </div>
        }
        <AnimatePresence mode="wait">
        <AnimatedCard delay={0.5}>
            <motion.div className="flex items-center gap-2 mb-3">
              <h4 className="font-medium text-white">Explicación</h4>
            </motion.div>
            <motion.div className="bg-gradient-to-r black p-4 rounded-lg border w-full border-blue-100">
                {explanation ?
                    <TypewriterText text={explanation} delay={0.6} />
                    :
                    <h1  className="font-medium text-white">Esperando por un cálculo</h1>
                }
            </motion.div>
        </AnimatedCard>
        </AnimatePresence>
    </section>
  )
}

export default MakeCalculations3d