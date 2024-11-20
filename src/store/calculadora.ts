import { Figure } from '@/types'
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

interface StateCalculator {
    figureSelected: Figure | null 
    setFigureSelected: (figure:Figure) => void
    figureToOperated: string | null
    mode: string
    setMode: (mode: string)=> void
}

export const UseCalculatorStore = create<StateCalculator>()(persist((set) => {
    return {
        figureSelected: null,
        mode: "3d",
        setMode(mode) {
            set({mode})
        },
        figureToOperated: null,
        setFigureSelected(figure) {
            set({ figureSelected: figure, figureToOperated: figure.name })
        },
    }
}, {
    name: 'calculator'
}))