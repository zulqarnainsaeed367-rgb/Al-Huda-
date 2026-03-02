import React from 'react';

const Container = ({ children, className = '', size = 'lg' }) => {
    const sizes = {
        sm: 'max-w-3xl',
        md: 'max-w-4xl',
        lg: 'max-w-6xl',
        xl: 'max-w-7xl',
    };

    return (
        <div className={`container mx-auto px-4 md:px-6 lg:px-8 ${sizes[size]} ${className}`}>
            {children}
        </div>
    );
};

export default Container;