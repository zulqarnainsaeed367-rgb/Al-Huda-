/**
 * Professional Color Palette for Al-Huda Academy
 * Designed for accessibility, contrast, and professional appearance
 */

export const colors = {
  // Primary Brand Colors
  primary: {
    gold: '#D4AF37',
    goldBright: '#F4C430',
    goldDark: '#8C6B1F',
    goldLight: '#F8E7A1',
  },

  // Background Colors
  background: {
    dark: '#0D0D0D',
    darker: '#000000',
    card: '#1A1A1A',
    hover: '#252525',
  },

  // Text Colors
  text: {
    primary: '#FFFFFF',
    secondary: '#E6E6E6',
    muted: '#A9A9A9',
    light: '#F0F0F0',
  },

  // Accent Colors
  accent: {
    emerald: '#1E5631',
    emeraldLight: '#2D7A4F',
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',
  },

  // Borders & Dividers
  border: {
    light: '#333333',
    medium: '#404040',
    dark: '#1F1F1F',
  },

  // Semantic Colors
  semantic: {
    success: '#10B981',
    error: '#EF4444',
    warning: '#F59E0B',
    info: '#3B82F6',
  },
};

export const gradients = {
  primaryButton: `linear-gradient(135deg, ${colors.primary.goldBright}, ${colors.primary.gold}, ${colors.primary.goldDark})`,
  background: `linear-gradient(180deg, ${colors.background.darker}, ${colors.background.card})`,
  goldGlow: `linear-gradient(145deg, ${colors.primary.goldBright}, ${colors.primary.gold})`,
  cardHover: `linear-gradient(135deg, ${colors.background.card}, ${colors.background.hover})`,
};

export const shadows = {
  sm: '0 1px 2px rgba(212, 175, 55, 0.1)',
  md: '0 4px 6px rgba(212, 175, 55, 0.15)',
  lg: '0 10px 25px rgba(212, 175, 55, 0.2)',
  xl: '0 20px 40px rgba(212, 175, 55, 0.25)',
  glow: '0 0 20px rgba(244, 196, 48, 0.3)',
  glowLarge: '0 0 40px rgba(244, 196, 48, 0.4)',
};