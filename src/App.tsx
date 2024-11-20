import './App.css'
import {Toaster} from 'sonner'
import MetallicShapes3D from './components/figures/Shapes'
import CartesianPlaneWithShapes from './cartesian2d/CartesianPlane'
import Aside from './Aside/Aside'
import { UseCalculatorStore } from './store/calculadora'
import MakeCalculations3d from './components/MakeCalculations3d'
import MakeCalculations2d from './components/MakeCalculations2d'
function App() {
  const mode = UseCalculatorStore(state=> state.mode)


  return (
    <div className='dark:bg-zinc-black flex min-h-screen grow flex-1 flex-col'>
      <div className='z-10'>
        <div className='duration-300 h-full grow  gap-4 flex flex-1 items-center justify-center flex-col mx-auto dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]  bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]'>
          <section className='lg:grid lg:grid-cols-[20%,1fr] grow lg:min-h-screen h-full gap-x-2 w-full'>
            <Aside/>  
            <main className='mt-[80px] lg:m-0 w-full h-full grid md:grid-cols-2 gap-2  rounded-md  relative '   >
              {
                mode === "2d" &&
                <MakeCalculations2d/>
              }
              {
                mode === "3d" &&
                <MakeCalculations3d/>
              }
              <div >
                {mode === "3d" &&
                <MetallicShapes3D/>
                }
                {mode === "2d" &&
                <CartesianPlaneWithShapes/>
                }
              </div>
            </main>
          </section>
        </div>
      </div>
      <Toaster richColors/>
    </div>
  )
}

export default App
