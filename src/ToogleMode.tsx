import { UseCalculatorStore } from "./store/calculadora"

const ToogleMode = () => {
  const setmode = UseCalculatorStore(state=> state.setMode)
  const mode = UseCalculatorStore(state=> state.mode)
  
  return (
    <section className="w-full hidden lg:flex flex-col mt-8 text-center">
      <div>
        <h2 className="text-white">Seleccionar modo</h2>
      </div>
      <div className="w-full gap-3 justify-center items-center flex">
        <button className={` rounded-md w-full ${mode === "2d" ? 'bg-white': 'bg-[#CCC]'}` }onClick={()=> {setmode("2d")} }>2D</button>
        <button onClick={()=> {setmode("3d")} } className={` rounded-md w-full ${mode === "3d" ? 'bg-white': 'bg-[#CCC]'}`}>3D</button>
      </div>
    </section>
  )
}

export default ToogleMode