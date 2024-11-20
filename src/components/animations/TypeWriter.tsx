import  { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface TypewriterTextProps {
  text: string;
  delay?: number;
}

export function TypewriterText({ text, delay = 0 }: TypewriterTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  console.log(text);
  
  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 5);

      return () => clearTimeout(timeout);
    } else {
      setIsComplete(true);
    }
  }, [currentIndex, text]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setDisplayedText('');
      setCurrentIndex(0);
      setIsComplete(false);
    }, delay * 50);

    return () => clearTimeout(timeout);
  }, [text, delay]);

  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div ref={contentRef}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay * 0.1 }}
      className="font-mono"
    >
      {displayedText}
      {!isComplete && (
        <motion.span
          animate={{ opacity: [0, 1] }}
          transition={{ repeat: Infinity, duration: 0.5 }}
          className="inline-block w-0.5 h-4 bg-blue-500 ml-1"
        />
      )}
    </motion.div>
  );
}