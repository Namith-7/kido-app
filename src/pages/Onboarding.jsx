import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const steps = [
    {
        id: 1,
        title: "Learn through Play",
        description: "Explore a magical world where every game helps you grow smarter and kinder!",
        emoji: "🎨"
    },
    {
        id: 2,
        title: "Grow Offline Skills",
        description: "Complete fun real-world missions. Build forts, help friends, and be a hero!",
        emoji: "🌱"
    },
    {
        id: 3,
        title: "Parents Track Progress",
        description: "See your child's growth in emotional balance, focus, and kindness.",
        emoji: "📊"
    }
];

const Onboarding = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const navigate = useNavigate();

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            navigate('/auth/role-selection');
        }
    };

    return (
        <div className="flex flex-col h-screen p-6 relative">
            <div className="flex-1 flex-center flex-col">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentStep}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <div className="text-9xl mb-10 block animate-bounce-slow">
                            {steps[currentStep].emoji}
                        </div>
                        <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-4">
                            {steps[currentStep].title}
                        </h2>
                        <p className="text-lg text-[var(--color-text-light)] px-4 leading-relaxed">
                            {steps[currentStep].description}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Bottom Controls */}
            <div className="flex justify-between items-center mb-8">
                <button
                    onClick={() => navigate('/auth/role-selection')}
                    className="text-[var(--color-text-light)] font-medium px-4 py-2 tap-active"
                >
                    Skip
                </button>

                <div className="flex gap-2">
                    {steps.map((_, index) => (
                        <div
                            key={index}
                            className={`h-2.5 rounded-full transition-all duration-300 ${index === currentStep ? 'w-8 bg-[var(--color-action-red)]' : 'w-2.5 bg-[var(--color-bg-peach)]' // Using peach as inactive
                                } `}
                            style={{ backgroundColor: index === currentStep ? 'var(--color-action-red)' : '#E0E0E0' }}
                        />
                    ))}
                </div>

                <button
                    onClick={handleNext}
                    className="w-14 h-14 bg-[var(--color-nav-blue)] rounded-full flex-center shadow-soft text-white tap-active"
                >
                    <ChevronRight size={28} color="#FFF" />
                </button>
            </div>
        </div>
    );
};

export default Onboarding;
