import React from 'react';
import { MessageCircle } from 'lucide-react';
import { colors, shadows } from '../../constants/colors';

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    onClick,
    href,
    className = '',
    icon: Icon,
    ...props
}) => {
    const baseClasses = 'font-semibold transition-all duration-300 flex items-center justify-center gap-2 rounded-lg';

    const variants = {
        primary: `bg-gradient-to-r from-[${colors.primary.goldBright}] to-[${colors.primary.gold}] text-[#0D0D0D] hover:shadow-lg active:scale-95`,
        secondary: `border-2 border-[${colors.primary.gold}] text-[${colors.primary.gold}] hover:bg-[${colors.primary.gold}] hover:text-[#0D0D0D]`,
        outline: `border border-[${colors.primary.gold}] text-[${colors.primary.gold}] hover:bg-[${colors.primary.gold}] hover:text-[#0D0D0D]`,
        ghost: `text-[${colors.primary.gold}] hover:text-[${colors.primary.goldBright}]`,
    };

    const sizes = {
        small: 'px-4 py-2 text-sm',
        medium: 'px-6 py-3 text-base',
        large: 'px-8 py-4 text-lg',
    };

    const combinedClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

    if (href) {
        return (
            <a href={href} className={combinedClasses} {...props}>
                {Icon && <Icon size={20} />}
                {children}
            </a>
        );
    }

    return (
        <button className={combinedClasses} onClick={onClick} {...props}>
            {Icon && <Icon size={20} />}
            {children}
        </button>
    );
};

export default Button;