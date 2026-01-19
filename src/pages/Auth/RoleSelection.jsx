import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, School } from 'lucide-react';

const RoleSelection = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col h-screen p-6 justify-center text-center">
            <motion.h2
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-3xl font-bold text-[var(--color-text-dark)] mb-2"
            >
                Who are you?
            </motion.h2>
            <p className="text-[var(--color-text-light)] mb-10">Select your role to get started</p>

            <div className="flex flex-col gap-6">
                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/auth/parent-signup')}
                    className="bg-white rounded-[var(--radius-card)] p-6 shadow-soft flex items-center gap-4 border-2 border-transparent hover:border-[var(--color-nav-blue)] transition-all"
                >
                    <div className="w-16 h-16 bg-[var(--color-nav-blue)] rounded-full flex-center text-white">
                        <Users size={32} />
                    </div>
                    <div className="text-left">
                        <h3 className="text-xl font-bold text-[var(--color-text-dark)]">Parent & Child</h3>
                        <p className="text-sm text-[var(--color-text-light)]">For home learning & fun</p>
                    </div>
                </motion.button>

                <motion.button
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate('/auth/school-signup')}
                    className="bg-white rounded-[var(--radius-card)] p-6 shadow-soft flex items-center gap-4 border-2 border-transparent hover:border-[var(--color-reward-yellow)] transition-all"
                >
                    <div className="w-16 h-16 bg-[var(--color-reward-yellow)] rounded-full flex-center text-[var(--color-text-dark)]">
                        <School size={32} />
                    </div>
                    <div className="text-left">
                        <h3 className="text-xl font-bold text-[var(--color-text-dark)]">School / Teacher</h3>
                        <p className="text-sm text-[var(--color-text-light)]">For classroom management</p>
                    </div>
                </motion.button>
            </div>
        </div>
    );
};

export default RoleSelection;
