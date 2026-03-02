import React from 'react';

const Text = ({ children, className = '', size = 'base', color = 'secondary', ...props }) => {
    const sizes = {
        xs: 'text-xs',
        sm: 'text-sm',
        base: 'text-base',
        lg: 'text-lg',
        xl: 'text-xl',
    };

    const colors = {
        primary: 'text-white',
        secondary: 'text-[#E6E6E6]',
        muted: 'text-[#A9A9A9]',
        gold: 'text-[#D4AF37]',
        accent: 'text-[#F4C430]',
    };

    return (
        <p className={`${sizes[size]} ${colors[color]} leading-relaxed ${className}`} {...props}>
            {children}
        </p>
    );
};

export default Text;