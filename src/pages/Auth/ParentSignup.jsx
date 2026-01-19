import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

const ParentSignup = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        parentName: '',
        childName: '',
        childAge: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Placeholder for API call
        console.log("Signup Data:", formData);
        navigate('/home');
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
                <h2 className="text-3xl font-bold text-[var(--color-text-dark)] mb-2">Create Account</h2>
                <p className="text-[var(--color-text-light)]">Let's set up your safe learning world.</p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="bg-white p-6 rounded-[var(--radius-card)] shadow-soft flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-bold text-[var(--color-text-light)] mb-1">Parent Name</label>
                        <input
                            type="text"
                            name="parentName"
                            value={formData.parentName}
                            onChange={handleChange}
                            className="w-full p-3 bg-[var(--color-bg-cream)] rounded-xl border-none focus:ring-2 focus:ring-[var(--color-nav-blue)] outline-none"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-[var(--color-text-light)] mb-1">Phone Number</label>
                        <input
                            type="tel"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleChange}
                            className="w-full p-3 bg-[var(--color-bg-cream)] rounded-xl border-none focus:ring-2 focus:ring-[var(--color-nav-blue)] outline-none"
                            placeholder="Mobile number for OTP"
                            required
                        />
                    </div>
                </div>

                <div className="bg-white p-6 rounded-[var(--radius-card)] shadow-soft flex flex-col gap-4">
                    <div>
                        <label className="block text-sm font-bold text-[var(--color-text-light)] mb-1">Child's Name</label>
                        <input
                            type="text"
                            name="childName"
                            value={formData.childName}
                            onChange={handleChange}
                            className="w-full p-3 bg-[var(--color-bg-cream)] rounded-xl border-none focus:ring-2 focus:ring-[var(--color-action-red)] outline-none"
                            placeholder="Superstar's name"
                            required
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-bold text-[var(--color-text-light)] mb-1">Child's Age</label>
                        <select
                            name="childAge"
                            value={formData.childAge}
                            onChange={handleChange}
                            className="w-full p-3 bg-[var(--color-bg-cream)] rounded-xl border-none focus:ring-2 focus:ring-[var(--color-action-red)] outline-none"
                            required
                        >
                            <option value="">Select Age</option>
                            {[3, 4, 5, 6, 7, 8, 9, 10].map(age => (
                                <option key={age} value={age}>{age} years old</option>
                            ))}
                        </select>
                    </div>
                </div>

                <motion.button
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="mt-4 bg-[var(--color-action-red)] text-white font-bold py-4 rounded-[var(--radius-bubble)] shadow-pop tap-active"
                >
                    Start Adventure! 🚀
                </motion.button>
            </form>
        </div>
    );
};

export default ParentSignup;
