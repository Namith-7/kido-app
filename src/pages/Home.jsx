import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Mascot from '../components/Mascot/Mascot';
import { Ghost, TreeDeciduous, Castle, Tent, Building2, TicketCheck, CloudSun } from 'lucide-react';

const WorldNode = ({ icon: Icon, title, color, onClick, isLocked, side = 'left' }) => {
    return (
        <motion.div
            whileTap={!isLocked ? { scale: 0.9 } : {}}
            onClick={!isLocked ? onClick : null}
            className={`flex items-center gap-4 mb-24 w-full relative ${side === 'right' ? 'flex-row-reverse text-right' : 'text-left'}`}
        >
            {/* Path Connector - Simplified visual connector */}
            <div className={`absolute top-20 ${side === 'left' ? 'left-10' : 'right-10'} w-1 h-24 border-l-4 border-dashed border-[var(--color-text-light)] opacity-30 -z-10`} />

            <div className={`w-20 h-20 rounded-full flex-center shadow-pop border-4 border-white z-10 ${isLocked ? 'bg-gray-200 grayscale' : ''}`} style={{ backgroundColor: color }}>
                <Icon size={32} color="#FFF" />
            </div>

            <div className="flex-1">
                <h3 className="text-xl font-bold text-[var(--color-text-dark)]">{title}</h3>
                <span className={`text-xs px-2 py-1 rounded-full ${isLocked ? 'bg-gray-200 text-gray-400' : 'bg-white text-[var(--color-text-light)] shadow-sm'}`}>
                    {isLocked ? 'Locked 🔒' : 'Open ✨'}
                </span>
            </div>
        </motion.div>
    );
};

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen relative overflow-scroll hide-scrollbar pb-20">
            {/* Background Decor */}
            <div className="fixed top-10 left-10 opacity-50 animate-pulse"><CloudSun size={64} color="var(--color-nav-blue)" /></div>

            {/* Header */}
            <div className="p-6 flex justify-between items-center sticky top-0 bg-opacity-90 bg-[var(--color-bg-cream)] z-50 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[var(--color-forest-green)] rounded-full flex-center border-2 border-white">
                        <span className="text-lg">🦁</span>
                    </div>
                    <div>
                        <h2 className="text-sm font-bold text-[var(--color-text-dark)]">Namith</h2>
                        <div className="w-20 h-2 bg-gray-200 rounded-full mt-1">
                            <div className="w-2/3 h-full bg-[var(--color-action-red)] rounded-full" />
                        </div>
                    </div>
                </div>
                <div
                    onClick={() => navigate('/parent-dashboard')}
                    className="w-10 h-10 bg-white rounded-full flex-center shadow-soft tap-active"
                >
                    <TicketCheck size={20} color="var(--color-reward-yellow-dark)" />
                </div>
            </div>

            {/* Map Container */}
            <div className="flex-1 px-8 py-10 relative">
                {/* Mascot Floating */}
                <div className="fixed bottom-10 right-10 z-50">
                    <Mascot mood="wave" size="small" />
                </div>

                <div className="flex flex-col items-center">
                    <WorldNode
                        icon={TreeDeciduous}
                        title="Magic Forest"
                        color="var(--color-forest-green)"
                        side="left"
                        onClick={() => navigate('/games/counting-apples')}
                    />
                    <WorldNode
                        icon={Tent}
                        title="Friendly Village"
                        color="var(--color-nav-blue)"
                        side="right"
                        isLocked={true}
                    />
                    <WorldNode
                        icon={Ghost}
                        title="Animal Valley"
                        color="var(--color-action-red)"
                        side="left"
                        isLocked={true}
                    />
                    <WorldNode
                        icon={Castle}
                        title="Helping Town"
                        color="var(--color-reward-yellow)"
                        side="right"
                        isLocked={true}
                    />
                    <WorldNode
                        icon={Building2}
                        title="Dream City"
                        color="#C8C8F8"
                        side="left"
                        isLocked={true}
                    />
                </div>
            </div>
        </div>
    );
};

export default Home;
