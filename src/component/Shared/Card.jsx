import React from 'react';

const Card = ({
    children,
    className = '',
    hover = true,
    ...props
}) => {
    const baseClasses = 'bg-[#1A1A1A] border border-[#333333] rounded-lg   shadow-md';
    const hoverClasses = hover ? 'hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300' : '';

    return (
        <div className={`${baseClasses} ${hoverClasses} ${className}`} {...props}>
            {children}
        </div>
    );
};

export default Card;