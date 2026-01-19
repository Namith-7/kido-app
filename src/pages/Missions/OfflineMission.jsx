import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Camera } from 'lucide-react';
import Mascot from '../../components/Mascot/Mascot';

const OfflineMission = () => {
    const navigate = useNavigate();
    const [completed, setCompleted] = useState(false);

    const handleComplete = () => {
        setCompleted(true);
        setTimeout(() => {
            navigate('/home');
        }, 1500);
    };

    return (
        <div className="flex flex-col h-screen p-6 relative flex-center">
            {completed ? (
                <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center"
                >
                    <div className="text-6xl mb-4">🌟</div>
                    <h2 className="text-3xl font-bold text-[var(--color-text-dark)]">Amazing Job!</h2>
                    <p className="text-[var(--color-text-light)]">You earned a Helper Badge!</p>
                </motion.div>
            ) : (
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="w-full bg-white rounded-[var(--radius-card)] p-6 shadow-pop border-2 border-[var(--color-nav-blue)]"
                >
                    <div className="flex justify-center -mt-16 mb-4">
                        <div className="w-24 h-24 bg-[var(--color-bg-cream)] rounded-full border-4 border-white flex-center shadow-sm">
                            <Mascot mood="happy" size="small" />
                        </div>
                    </div>

                    <div className="text-center mb-6">
                        <h3 className="text-xl font-bold text-[var(--color-text-light)] uppercase tracking-wide mb-2">Real World Mission</h3>
                        <h2 className="text-2xl font-bold text-[var(--color-text-dark)] leading-tight">
                            Build a Fort with Pillows!
                        </h2>
                        <p className="mt-4 text-[var(--color-text-light)]">
                            Grab 3 pillows and a blanket. <br /> Make a secret base in the living room!
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        <button className="flex items-center justify-center gap-2 w-full py-3 border-2 border-dashed border-gray-300 rounded-xl text-gray-400 font-bold">
                            <Camera size={20} />
                            Take a Photo (Optional)
                        </button>

                        <button
                            onClick={handleComplete}
                            className="bg-[var(--color-forest-green)] text-white w-full py-4 rounded-[var(--radius-bubble)] font-bold text-lg shadow-md tap-active flex items-center justify-center gap-2"
                        >
                            <Check size={24} />
                            Mission Complete!
                        </button>

                        <button
                            onClick={() => navigate('/home')}
                            className="text-[var(--color-text-light)] font-medium py-2"
                        >
                            Maybe Later
                        </button>
                    </div>
                </motion.div>
            )}
        </div>
    );
};

export default OfflineMission;
