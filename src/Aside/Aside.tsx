import { UseCalculatorStore } from "@/store/calculadora"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import {  data3d, data2d } from "@/dataAside"
import ToggleMode from "@/ToogleMode"

const Aside = () => {
  const selectedFigure = UseCalculatorStore(state => state.figureSelected)
  const changeSelectedFigure = UseCalculatorStore(state => state.setFigureSelected)
  const mode = UseCalculatorStore(state => state.mode)
  
  const [isOpen, setIsOpen] = useState(false)

  const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" }
    },
    closed: {
      y: 100,
      opacity: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  const variantsUl = {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 }
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 }
    }
  };


  return (
    <section className="min-h-[80px] bg-black  fixed lg:static z-20 flex lg:h-auto  flex-col items-center justify-center lg:justify-start border w-full px-2 rounded-md">
      <div className="lg:hidden flex w-full items-center justify-between">
      <button onClick={() => setIsOpen(isOpen => !isOpen)} className="lg:hidden bg-white rounded text-black p-4">
          <AnimatePresence mode="wait" initial={false}>
            {isOpen ? (
              <motion.svg
                key="close"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-x-lg"
                viewBox="0 0 16 16"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </motion.svg>
            ) : (
              <motion.svg
                key="open"
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
                initial={{ opacity: 0, rotate: -90 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 90 }}
                transition={{ duration: 0.3 }}
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </motion.svg>
            )}
          </AnimatePresence>
        </button>
        <AnimatePresence>
          {isOpen &&
            <motion.h1 
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.5 }}
            className="  text-base lg:text-2xl font-bold text-white">Selecciona una figura</motion.h1>
          }
        </AnimatePresence>
      </div>
      
      <h1 className="hidden lg:flex my-4 text-2xl font-bold text-white">Selecciona una figura</h1>
      <div className="hidden lg:flex flex-col gap-4">
        <AnimatePresence>
        {mode === "3d" &&
          <>
            {data3d.map(figure => (
              <article key={figure.id} className={`flex w-full items-center rounded cursor-pointer transition-all duration-300 ${selectedFigure?.id === figure.id ? "border border-zinc-50 cursor-auto" : "border border-zinc-700 hover:border-zinc-500"} group`} onClick={() => changeSelectedFigure(figure)}>
                <div className="w-full max-w-[30%] p-1">
                  <figure className="flex items-center justify-center relative">
                    <img src={figure.image} alt={`imagen ${figure.name}`} className="object-cover w-full aspect-square rounded shadow-lg" />
                    <img src={figure.image} alt={`imagen ${figure.name}`} className="absolute contrast-125 transform-gpu blur-lg -z-10 block object-cover w-full aspect-square transition bg-white rounded-[10px]" />
                  </figure>
                </div>
                <main className="flex flex-col w-full px-2">
                  <h2 className="text-zinc-100 text-lg font-semibold">{figure.name}</h2>
                </main>
              </article>
            ))}
          </>
        }
        {mode === "2d" &&
          <>
            {data2d.map(figure => (
              <article key={figure.id} className={`flex w-full items-center rounded cursor-pointer transition-all duration-300 ${selectedFigure?.id === figure.id ? "border border-zinc-50 cursor-auto" : "border border-zinc-700 hover:border-zinc-500"} group`} onClick={() => changeSelectedFigure(figure)}>
                <div className="w-full max-w-[30%] p-1">
                  <figure className="flex items-center justify-center relative">
                    <img src={figure.image} alt={`imagen ${figure.name}`} className="object-cover w-full aspect-square rounded shadow-lg" />
                    <img src={figure.image} alt={`imagen ${figure.name}`} className="absolute contrast-125 transform-gpu blur-lg -z-10 block object-cover w-full aspect-square transition bg-white rounded-[10px]" />
                  </figure>
                </div>
                <main className="flex flex-col w-full px-2">
                  <h2 className="text-zinc-100 text-lg font-semibold">{figure.name}</h2>
                </main>
              </article>
            ))}
          </>
        }
        </AnimatePresence>
      </div>
        <motion.nav
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          className={`flex mt-[80px] fixed flex-col gap-4 lg:hidden h-full top-0 left-0 w-full items-start bg-black shadow-lg z-20 border rounded justify-center ${isOpen ? "block" : "hidden"} lg:hidden lg:overflow-hidden`}
        >

          <motion.ul variants={variantsUl} className="h-full gap-8 w-full flex flex-col items-center justify-start mt-2">
            {
              mode === "3d" &&
              <>
                {data3d.map(figure => (
                  <motion.li 
                  variants={variants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  key={figure.id} className={`flex w-[70%] items-center  rounded cursor-pointer transition-all duration-300 ${selectedFigure?.id === figure.id ? "border border-zinc-50 cursor-auto" : "border border-zinc-700 hover:border-zinc-500"} group`} onClick={() => { changeSelectedFigure(figure); setIsOpen(false)}}>
                    <div className="w-full max-w-[20%] p-1">
                      <figure className="flex items-center justify-center relative">
                        <img src={figure.image} alt={`imagen ${figure.name}`} className="object-contain w-full  aspect-[2/3] rounded shadow-lg max-h-[150px] " />
                        <img src={figure.image} alt={`imagen ${figure.name}`} className="absolute contrast-125 transform-gpu blur-lg -z-10 block object-cover w-full aspect-square transition bg-white rounded-[10px] group:hover:scale-110" />
                      </figure>
                    </div>
                    <main className="flex flex-col w-full px-2">
                      <h2 className="text-zinc-100 text-lg font-semibold">{figure.name}</h2>
                    </main>
                  </motion.li>
                ))}
                <ToggleMode/>
              </>
            }
            {
              mode === "2d" &&
              <>
                {data2d.map(figure => (
                  <motion.li 
                  variants={variants}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  key={figure.id} className={`flex w-[80%] items-center  rounded cursor-pointer transition-all duration-300 ${selectedFigure?.id === figure.id ? "border border-zinc-50 cursor-auto" : "border border-zinc-700 hover:border-zinc-500"} group`} onClick={() => { changeSelectedFigure(figure); setIsOpen(false)}}>
                    <div className="w-full max-w-[30%] p-1">
                      <figure className="flex items-center justify-center relative">
                        <img src={figure.image} alt={`imagen ${figure.name}`} className="object-contain w-full  aspect-[2/3] rounded shadow-lg max-h-[150px] " />
                        <img src={figure.image} alt={`imagen ${figure.name}`} className="absolute contrast-125 transform-gpu blur-lg -z-10 block object-cover w-full aspect-square transition bg-white rounded-[10px] group:hover:scale-110" />
                      </figure>
                    </div>
                    <main className="flex flex-col w-full px-2">
                      <h2 className="text-zinc-100 text-lg font-semibold">{figure.name}</h2>
                    </main>
                  </motion.li>
                ))}
              </>
            }
          </motion.ul>
        </motion.nav>
        <ToggleMode/>
    </section>
  )
}

export default Aside
