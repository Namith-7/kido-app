import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Splash = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/onboarding');
        }, 2500);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex-center flex-col full-screen">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, type: "spring" }}
                className="text-center"
            >
                {/* Placeholder for Mascot Logo */}
                <div className="w-40 h-40 bg-[var(--color-reward-yellow)] rounded-full mb-6 mx-auto flex-center shadow-soft">
                    <span className="text-4xl">🌟</span>
                </div>

                <h1 className="text-4xl font-bold text-[var(--color-action-red-dark)] mb-2" style={{ fontFamily: 'Bubblegum Sans, cursive' }}>
                    Twinklo
                </h1>
                <p className="text-lg text-[var(--color-text-light)]">Small steps. Bright futures.</p>
            </motion.div>
        </div>
    );
};

export default Splash;
