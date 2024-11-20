import { motion, AnimatePresence } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedItemsProps {
  children: ReactNode;
  isVisible: boolean;
  direction?: number;
}

export function AnimatedItems({ children, isVisible, direction = 1 }: AnimatedItemsProps) {
  return (
    <AnimatePresence mode="wait">
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, x: 50 * direction }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 * direction }}
          transition={{
            duration: 0.3,
            ease: "easeInOut"
          }}
          className="absolute w-full h-full"
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}