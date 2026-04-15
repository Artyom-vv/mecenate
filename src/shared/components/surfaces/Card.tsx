import React from 'react';
import { View, ViewProps, StyleSheet } from 'react-native';
import { baseTheme } from '@theme';

type CardProps = ViewProps & {
  padded?: boolean;
};

export const Card: React.FC<CardProps> = ({ padded = true, style, children, ...rest }) => {
  const paddingStyles = padded
    ? {
        paddingVertical: baseTheme.spacing.xl,
        paddingHorizontal: baseTheme.spacing.xxl,
      }
    : null;

  return (
    <View
      style={[
        styles.card,
        paddingStyles,
        style,
      ]}
      {...rest}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: baseTheme.colors.cardBackground,
    borderRadius: baseTheme.radii.card,
  },
});
