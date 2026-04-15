import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacityProps,
  View,
} from 'react-native';

import { baseTheme } from '@theme';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  loading?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  loading = false,
  disabled = false,
  style,
  onPress,
  ...rest
}) => {
  const isDisabled = disabled || loading;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={isDisabled}
      onPress={onPress}
      style={[
        styles.button,
        isDisabled && styles.buttonDisabled,
        style,
      ]}
      {...rest}
    >
      {loading ? (
        <ActivityIndicator color={baseTheme.colors.white} />
      ) : (
        <Text style={styles.text}>{title}</Text>
      )}
    </TouchableOpacity>
  );
};

const theme = baseTheme;

const styles = StyleSheet.create({
  button: {
    minHeight: 38,
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.xxxl,
    borderRadius: theme.radii.button,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonDisabled: {
    backgroundColor: theme.colors.primaryDisabled,
  },
  text: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.md,
    lineHeight: theme.typography.lineHeights.sm,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.white,
  },
});
