/**
 * Global Tailwind CSS Classes
 */

export const buttonClasses = {
  primary: 'bg-gradient-to-r from-[#F4C430] to-[#D4AF37] text-[#0D0D0D] hover:shadow-lg transition-all duration-300 font-semibold',
  secondary: 'border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300 font-semibold',
  outline: 'border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#0D0D0D] transition-all duration-300',
  small: 'px-4 py-2 rounded-lg text-sm',
  medium: 'px-6 py-3 rounded-lg text-base',
  large: 'px-8 py-4 rounded-lg text-lg',
};

export const cardClasses = 'bg-[#1A1A1A] border border-[#333333] rounded-lg p-6 hover:border-[#D4AF37] transition-all duration-300 shadow-md';

export const containerClasses = 'container mx-auto px-4 md:px-6 lg:px-8';

export const sectionClasses = 'py-20 px-4 md:px-6 lg:px-8';

export const headingClasses = {
  h1: 'text-4xl md:text-5xl lg:text-6xl font-bold text-[#F4C430] leading-tight',
  h2: 'text-3xl md:text-4xl font-bold text-[#F4C430] leading-tight',
  h3: 'text-2xl md:text-3xl font-semibold text-[#D4AF37]',
  h4: 'text-xl md:text-2xl font-semibold text-[#D4AF37]',
};

export const textClasses = {
  body: 'text-[#E6E6E6] leading-relaxed',
  bodyLarge: 'text-lg text-[#E6E6E6] leading-relaxed',
  small: 'text-sm text-[#A9A9A9]',
  muted: 'text-[#A9A9A9]',
};