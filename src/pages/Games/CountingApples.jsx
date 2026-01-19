import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, RefreshCw } from 'lucide-react';
import confetti from 'canvas-confetti';

const CountingApples = () => {
    const navigate = useNavigate();
    const [apples, setApples] = useState([]);
    const [score, setScore] = useState(0);
    const target = 5;

    useEffect(() => {
        // Initialize apples
        const initialApples = Array.from({ length: target }, (_, i) => ({
            id: i,
            x: Math.random() * 80 + 10, // Random x position 10-90%
            delay: i * 0.2,
            clicked: false
        }));
        setApples(initialApples);
    }, []);

    const handleAppleClick = (id) => {
        setApples(apples.map(a => a.id === id ? { ...a, clicked: true } : a));
        setScore(prev => {
            const newScore = prev + 1;
            if (newScore === target) {
                // Game Won
                triggerConfetti();
                setTimeout(() => {
                    navigate('/offline-mission');
                }, 2000);
            }
            return newScore;
        });
    };

    const triggerConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
        });
    };

    return (
        <div className="flex flex-col h-screen relative bg-blue-100 overflow-hidden">
            <button
                onClick={() => navigate('/home')}
                className="absolute top-6 left-6 w-10 h-10 bg-white rounded-full flex-center shadow-soft text-[var(--color-text-dark)] tap-active z-10"
            >
                <ArrowLeft size={20} />
            </button>

            <div className="text-center mt-10 z-10">
                <h2 className="text-3xl font-bold text-[var(--color-text-dark)]">Count {target} Apples!</h2>
                <div className="text-xl mt-2 text-[var(--color-action-red-dark)]">
                    Collected: {score} / {target}
                </div>
            </div>

            {/* Tree Background (Abstract) */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[150%] h-3/4 bg-[var(--color-forest-green)] rounded-t-full shadow-lg" />

            <div className="relative w-full h-full">
                <AnimatePresence>
                    {apples.map((apple) => (
                        !apple.clicked && (
                            <motion.div
                                key={apple.id}
                                initial={{ y: -50, opacity: 0 }}
                                animate={{ y: 200, opacity: 1 }} // Fall down to "tree" level
                                exit={{ scale: 0, opacity: 0 }}
                                transition={{ duration: 1, delay: apple.delay, type: 'spring' }}
                                style={{ left: `${apple.x}%`, top: '10%' }}
                                className="absolute cursor-pointer tap-active"
                                onClick={() => handleAppleClick(apple.id)}
                            >
                                <div className="text-5xl drop-shadow-md">🍎</div>
                            </motion.div>
                        )
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default CountingApples;
