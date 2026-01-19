import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const SchoolSignup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        schoolName: '',
        adminEmail: '',
        contactNumber: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for API call
        console.log("School Signup Data:", formData);
        navigate('/teacher-dashboard');
    };

    return (
        <div className="flex flex-col min-h-screen p-6 relative">
            <button
                onClick={() => navigate(-1)}
                className="absolute top-6 left-6 w-10 h-10 bg-white rounded-full flex-center shadow-soft text-[var(--color-text-dark)] tap-active z-10"
            >
                <ArrowLeft size={20} />
            </button>

            <div className="mt-16 mb-6">
                <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-2">School Partner</h2>
                <p className="text-[var(--color-text-light)]">Empower your classroom with Twinklo.</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="bg-white p-6 rounded-[var(--radius-card)] shadow-soft flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-bold text-[var(--color-text-light)] mb-1">School Name</label>
                        <input
                            type="text"
                            name="schoolName"
                            value={formData.schoolName}
                            onChange={handleChange}
                            className="w-full p-3 bg-[var(--color-bg-cream)] rounded-xl border-none focus:ring-2 focus:ring-[var(--color-reward-yellow)] outline-none"
                            placeholder="Institution Name"
                            required
                        />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-[var(--radius-card)] shadow-soft flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-bold text-[var(--color-text-light)] mb-1">Admin Email</label>
                        <input
                            type="email"
                            name="adminEmail"
                            value={formData.adminEmail}
                            onChange={handleChange}
                            className="w-full p-3 bg-[var(--color-bg-cream)] rounded-xl border-none focus:ring-2 focus:ring-[var(--color-reward-yellow)] outline-none"
                            placeholder="admin@school.com"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-[var(--color-text-light)] mb-1">Contact Number</label>
                        <input
                            type="tel"
                            name="contactNumber"
                            value={formData.contactNumber}
                            onChange={handleChange}
                            className="w-full p-3 bg-[var(--color-bg-cream)] rounded-xl border-none focus:ring-2 focus:ring-[var(--color-reward-yellow)] outline-none"
                            placeholder="Office phone"
                            required
                        />
                    </div>
                </div>

                <motion.button
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="mt-4 bg-[var(--color-reward-yellow)] text-[var(--color-text-dark)] font-bold py-4 rounded-[var(--radius-bubble)] shadow-pop tap-active"
                >
                    Create Classroom 🏫
                </motion.button>
            </form>
        </div>
    );
};

export default SchoolSignup;
