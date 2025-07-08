import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const rotatingWords = [
    "Connect",
    "Collaborate",
    "Showcase",
];

export default function RotatingRiWord() {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % rotatingWords.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <h2 className="text-3xl md:text-4xl font-md text-center flex justify-center gap-2" style={{ fontFamily: "'Helvetica Neue', Arial, sans-serif"}}>
            <span className="text-white">Research & Innovation:</span>
            <span className="relative w-[12ch] h-[1.4em] overflow-hidden align-baseline">
                <AnimatePresence mode="wait">
                    <motion.span
                        key={rotatingWords[index]}
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -16 }}
                        transition={{ duration: 0.6 }}
                        className="absolute left-0 top-0 w-full text-left bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent"
                    >
                        {rotatingWords[index]}
                    </motion.span>
                </AnimatePresence>
            </span>
        </h2>
    );
}