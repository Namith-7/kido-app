import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BarChart2, Calendar, Activity } from 'lucide-react';

const StatCard = ({ title, value, color, icon: Icon }) => (
    <div className="bg-white p-4 rounded-[var(--radius-card)] shadow-soft flex items-center gap-4">
        <div className={`w-12 h-12 rounded-full flex-center`} style={{ backgroundColor: color + '30', color: color }}>
            <Icon size={24} />
        </div>
        <div>
            <p className="text-xs text-[var(--color-text-light)] font-bold">{title}</p>
            <p className="text-xl font-bold text-[var(--color-text-dark)]">{value}</p>
        </div>
    </div>
);

const ParentDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen relative p-6 bg-gray-50">
            <button
                onClick={() => navigate('/home')}
                className="absolute top-6 left-6 w-10 h-10 bg-white rounded-full flex-center shadow-soft text-[var(--color-text-dark)] tap-active z-10"
            >
                <ArrowLeft size={20} />
            </button>

            <div className="mt-16 mb-8 text-center">
                <h2 className="text-2xl font-bold text-[var(--color-text-dark)]">Parent Insights</h2>
                <p className="text-[var(--color-text-light)]">Weekly growth overview</p>
            </div>

            {/* Horizon Meter (Simulated) */}
            <div className="bg-white p-6 rounded-[var(--radius-card)] shadow-soft mb-6 flex flex-col items-center">
                <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-4">Horizon Meter</h3>
                <div className="w-48 h-48 relative flex-center">
                    {/* Outer Circle */}
                    <svg className="w-full h-full transform -rotate-90">
                        <circle cx="96" cy="96" r="80" stroke="#eee" strokeWidth="15" fill="none" />
                        <circle
                            cx="96" cy="96" r="80"
                            stroke="var(--color-nav-blue)" strokeWidth="15" fill="none"
                            strokeDasharray="502" strokeDashoffset="125" /* 75% filled */
                            strokeLinecap="round"
                        />
                    </svg>
                    <div className="absolute text-center">
                        <span className="text-3xl font-bold text-[var(--color-text-dark)]">75%</span>
                        <p className="text-xs text-[var(--color-text-light)]">Balance Score</p>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-20">
                <StatCard title="Screen Time" value="45m" color="var(--color-action-red)" icon={BarChart2} />
                <StatCard title="Offline Play" value="1h 20m" color="var(--color-forest-green)" icon={Activity} />
                <StatCard title="Days Active" value="5 Days" color="var(--color-reward-yellow-dark)" icon={Calendar} />
            </div>

            <div className="bg-white p-6 rounded-[var(--radius-card)] shadow-soft">
                <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-2">AI Suggestion 🤖</h3>
                <p className="text-[var(--color-text-light)] italic">
                    "Namith seems to enjoy counting games. Suggest a real-world counting activity like counting steps or toys!"
                </p>
            </div>
        </div>
    );
};

export default ParentDashboard;
