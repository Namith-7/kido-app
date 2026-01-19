import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Star } from 'lucide-react';

const TeacherDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col min-h-screen p-6 bg-gray-50">
            <button
                onClick={() => navigate('/')}
                className="w-10 h-10 bg-white rounded-full flex-center shadow-soft text-[var(--color-text-dark)] tap-active mb-6"
            >
                <ArrowLeft size={20} />
            </button>

            <div className="mb-6">
                <h2 className="text-2xl font-bold text-[var(--color-text-dark)]">Classroom 2-B</h2>
                <p className="text-[var(--color-text-light)]">Sunshine Valley School</p>
            </div>

            <div className="bg-white p-6 rounded-[var(--radius-card)] shadow-soft mb-6 flex justify-between items-center">
                <div>
                    <p className="text-[var(--color-text-light)] text-sm font-bold">Total Students</p>
                    <p className="text-3xl font-bold text-[var(--color-text-dark)]">24</p>
                </div>
                <div className="w-12 h-12 bg-[var(--color-nav-blue)] rounded-full flex-center text-white">
                    <Users size={24} />
                </div>
            </div>

            <h3 className="text-lg font-bold text-[var(--color-text-dark)] mb-4">Top Performers</h3>

            <div className="flex flex-col gap-4">
                {[1, 2, 3].map(i => (
                    <div key={i} className="bg-white p-4 rounded-xl shadow-sm flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 bg-[var(--color-bg-peach)] rounded-full flex-center font-bold text-[var(--color-action-red)]">
                                {i}
                            </div>
                            <div>
                                <p className="font-bold text-[var(--color-text-dark)]">Student Name</p>
                                <p className="text-xs text-[var(--color-text-light)]">12 Missions Completed</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 text-[var(--color-reward-yellow-dark)]">
                            <Star size={16} fill="currentColor" />
                            <span className="font-bold">250</span>
                        </div>
                    </div>
                ))}
            </div>

            <button className="mt-8 w-full py-4 bg-[var(--color-nav-blue)] text-white font-bold rounded-[var(--radius-bubble)] shadow-pop tap-active">
                Assign New Activity
            </button>
        </div>
    );
};

export default TeacherDashboard;
