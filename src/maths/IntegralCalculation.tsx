import { AnimatedCard } from "@/components/animations/AnimateCard";
import { FadeIn } from "@/components/animations/FadeIn";

import { calculateIntegral } from "@/hooks/useGenerateCalculation";
import { motion, AnimatePresence } from 'framer-motion';

interface IntegralCalculationProps {
    shapeType: string;
    size: number;
    altura: number
  }
  
export function IntegralCalculation({ shapeType, size, altura }: IntegralCalculationProps) {
    const { titulo, formula, calculation, result, description, aproximateResult } = calculateIntegral(shapeType,size,altura);
    return (
      <AnimatePresence mode="wait">
        <motion.div
          key={shapeType}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-900 to-black p-2 rounded-xl shadow-xl"
        >
          <FadeIn direction="down" className="mb-6">
            <h3 className="text-2xl font-bold text-white bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              {titulo}   
            </h3>
          </FadeIn>
  
          <div className="space-y-4">
            <AnimatedCard delay={0.1}>
              <h4 className="font-medium text-white ">Descripción</h4>
              <p className="text-gray-200">{description}</p>
            </AnimatedCard>
  
            <AnimatedCard delay={0.2}>
              <h4 className="font-medium text-white ">Fórmula</h4>
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                <span className="font-mono text-blue-600" dangerouslySetInnerHTML={{ __html: formula.replace(/\\/g, '\\') }}></span>
              </div>
            </AnimatedCard>
  
            <AnimatedCard delay={0.3}>
              <h4 className="font-medium text-gray-100 ">Cálculo</h4>
              <div className="bg-gray-50 p-3 rounded-lg border border-gray-100">
                <span className="font-mono text-purple-600" dangerouslySetInnerHTML={{ __html: calculation.replace(/\\/g, '\\') }}></span>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.4}>
              <h4 className="font-medium text-gray-100 mb-2">Resultado aproximado</h4>
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                <span className="font-mono text-blue-600 font-medium">{aproximateResult}</span>
              </div>
            </AnimatedCard>
            <AnimatedCard delay={0.4}>
              <h4 className="font-medium text-gray-100 mb-2">Resultado exacto</h4>
              <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                <span className="font-mono text-blue-600 font-medium">{result}</span>
              </div>
            </AnimatedCard>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }