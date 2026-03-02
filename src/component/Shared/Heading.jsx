import React from 'react';

const Heading = ({ children, level = 'h2', className = '', color = 'gold' }) => {
    const baseClasses = 'font-bold leading-tight font-semibold';

    const levels = {
        h1: 'text-4xl md:text-5xl lg:text-6xl',
        h2: 'text-3xl md:text-4xl lg:text-5xl',
        h3: 'text-2xl md:text-3xl',
        h4: 'text-xl md:text-2xl',
        h5: 'text-lg md:text-xl',
    };

    const colors = {
        gold: 'text-[#F4C430]',
        goldDim: 'text-[#D4AF37]',
        white: 'text-white',
    };

    const Tag = level;

    return (
        <Tag className={`${baseClasses} ${levels[level]} ${colors[color]} ${className}`}>
            {children}
        </Tag>
    );
};

export default Heading;