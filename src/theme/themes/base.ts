import { AppTheme } from '../types';

export const baseTheme: AppTheme = {
  colors: {
    primary: '#6115CD',
    primaryHover: '#4E11A4',
    primaryDisabled: '#D5C9FF',
    likeActive: '#FF2B75',
    likeDisabled: '#FFBAD2',
    likeOnText: '#FFEAF1',
    textPrimary: '#111416',
    textSecondary: '#57626F',
    surface: '#EFF2F7',
    border: '#E8ECEF',
    white: '#FFFFFF',
    screenBackground: '#F5F8FD',
    cardBackground: '#FFFFFF',
  },
  typography: {
    fontFamily: 'Manrope',
    sizes: {
      xs: 13,
      sm: 14,
      md: 15,
      xl: 18,
    },
    weights: {
      medium: '500',
      semiBold: '600',
      bold: '700',
    },
    lineHeights: {
      xs: 18,
      sm: 20,
      md: 26,
    },
  },
  spacing: {
    xs: 4,
    sm: 6,
    md: 8,
    lg: 10,
    xl: 12,
    xxl: 16,
    xxxl: 32,
  },
  radii: {
    sm: 8,
    button: 14,
    full: 9999,
    pill: 9999,
    card: 12,
    skeleton: 22,
  },
  animation: {
    duration: 200,
    easing: 'ease-in-out',
  },
};
