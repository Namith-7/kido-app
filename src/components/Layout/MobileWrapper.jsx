import React from 'react';

const MobileWrapper = ({ children }) => {
    return (
        <div className="w-full max-w-md min-h-screen bg-transparent relative mx-auto shadow-2xl overflow-hidden">
            {/* Background gradient applied to body, this wrapper just limits width */}
            <div className="w-full h-full absolute inset-0 bg-gradient-to-b from-[var(--color-bg-cream)] to-[var(--color-bg-peach)] -z-10" />
            {children}
        </div>
    );
};

export default MobileWrapper;
