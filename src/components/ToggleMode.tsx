import { UseCalculatorStore } from "@/store/calculadora"

const ToggleMode = () => {
    const setmode = UseCalculatorStore(state => state.setMode)
    const setmodesa = UseCalculatorStore(state => state.figureSelected)
    console.log(setmodesa);
    
    return (
      <section className="w-full flex flex-col z-[999999] boder mt-8 justify-center items-center text-white ">
        <div>
            <h2 className="">Selecciona el modo</h2>
        </div>
        <div className="gap-3 flex w-full items-center justify-center flex-wrap">

            <button className="bg-[#CCCCCC] rounded-md text-black border max-w-8 w-full" onClick={()=>{setmode("2d")}} >2D</button>
            <button className="bg-[#CCCCCC] rounded-md text-black border max-w-8 w-full" onClick={()=>{setmode("3d")}} >3D</button>
        </div>
      </section>
    )
}

export default ToggleMode