import React from 'react';
import { motion } from 'framer-motion';

const Mascot = ({ mood = 'idle', size = 'normal' }) => {
    // Moods: idle, wave, walk, happy

    // Placeholder SVG Mascot
    // In a real app, this would be a Lottie animation or complex SVG
    const getMascotSVG = () => {
        return (
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
                {/* Body */}
                <circle cx="50" cy="50" r="40" fill="var(--color-bg-cream)" stroke="var(--color-action-red-dark)" strokeWidth="3" />
                {/* Eyes */}
                <circle cx="35" cy="45" r="5" fill="#333" />
                <circle cx="65" cy="45" r="5" fill="#333" />

                {/* Cheeks */}
                <circle cx="30" cy="55" r="5" fill="var(--color-action-red)" opacity="0.5" />
                <circle cx="70" cy="55" r="5" fill="var(--color-action-red)" opacity="0.5" />

                {/* Smile */}
                <path d="M 35 65 Q 50 75 65 65" stroke="#333" strokeWidth="3" fill="none" strokeLinecap="round" />

                {/* Antenna */}
                <path d="M 50 10 Q 50 -10 60 -5" stroke="var(--color-action-red-dark)" strokeWidth="3" fill="none" />
                <circle cx="60" cy="-5" r="4" fill="var(--color-reward-yellow)" />
            </svg>
        );
    };

    const variants = {
        idle: {
            y: [0, -5, 0],
            transition: { repeat: Infinity, duration: 2, ease: "easeInOut" }
        },
        wave: {
            rotate: [0, 10, -10, 0],
            transition: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        },
        walk: {
            x: [-2, 2, -2],
            rotate: [-2, 2, -2],
            transition: { repeat: Infinity, duration: 0.5, ease: "linear" }
        }
    };

    const sizeClasses = size === 'small' ? 'w-12 h-12' : size === 'large' ? 'w-32 h-32' : 'w-24 h-24';

    return (
        <motion.div
            className={`${sizeClasses} relative z-20`}
            variants={variants}
            animate={mood}
        >
            {getMascotSVG()}
        </motion.div>
    );
};

export default Mascot;
