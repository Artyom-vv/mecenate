export const baseTheme = {
  colors: {
    // Backgrounds
    background: '#F5F5F5',
    surface: '#FFFFFF',

    // Text
    textPrimary: '#1A1A1A',
    textSecondary: '#757575',
    textInverse: '#FFFFFF',

    // Accent
    primary: '#8B5CF6',
    primaryLight: '#EDE9FE',

    // States
    error: '#EF4444',
    success: '#22C55E',

    // UI
    border: '#E5E5E5',
    divider: '#F0F0F0',
    overlay: 'rgba(0, 0, 0, 0.4)',

    // Tier
    paid: '#F59E0B',
    free: '#22C55E',
  },

  typography: {
    sizeXs: 11,
    sizeSm: 13,
    sizeBase: 15,
    sizeLg: 17,
    sizeXl: 20,
    sizeXxl: 24,

    weightRegular: '400' as const,
    weightMedium: '500' as const,
    weightSemibold: '600' as const,
    weightBold: '700' as const,

    lineHeightSm: 18,
    lineHeightBase: 22,
    lineHeightLg: 26,
  },

  spacing: {
    xs: 4,
    sm: 8,
    md: 12,
    lg: 16,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },

  radius: {
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    full: 9999,
  },

  shadows: {
    card: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 1 },
      shadowOpacity: 0.08,
      shadowRadius: 4,
      elevation: 2,
    },
  },
};
