export interface ThemeColors {
  primary: string;
  primaryHover: string;
  primaryDisabled: string;
  likeActive: string;
  likeDisabled: string;
  likeOnText: string;
  textPrimary: string;
  textSecondary: string;
  surface: string;
  border: string;
  white: string;
  screenBackground: string;
  cardBackground: string;
}

export interface ThemeTypography {
  fontFamily: string;
  sizes: {
    xs: number;
    sm: number;
    md: number;
    xl: number;
  };
  weights: {
    medium: '500';
    semiBold: '600';
    bold: '700';
  };
  lineHeights: {
    xs: number;
    sm: number;
    md: number;
  };
}

export interface ThemeSpacing {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
  xxxl: number;
}

export interface ThemeRadii {
  sm: number;
  button: number;
  full: number;
  pill: number;
  card: number;
  skeleton: number;
}

export interface ThemeAnimation {
  duration: number;
  easing: string;
}

export interface AppTheme {
  colors: ThemeColors;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  radii: ThemeRadii;
  animation: ThemeAnimation;
}
