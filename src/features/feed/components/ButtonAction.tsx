import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import * as Haptics from 'expo-haptics';

import { baseTheme } from '@theme';
import { LikeIcon, LikeFilledIcon, CommentIcon } from '@icons';

type ButtonActionType = 'like' | 'comment';

interface ButtonActionProps {
  type: ButtonActionType;
  label: string | number;
  active?: boolean;
  disabled?: boolean;
  onPress?: () => void;
}

export const ButtonAction: React.FC<ButtonActionProps> = ({
  type,
  label,
  active = false,
  disabled = false,
  onPress,
}) => {
  const theme = baseTheme;
  const isLike = type === 'like';

  const backgroundColor =
    disabled && active
      ? theme.colors.likeDisabled
      : active
        ? theme.colors.likeActive
        : theme.colors.surface;

  const contentColor = active
    ? theme.colors.likeOnText
    : theme.colors.textSecondary;

  const handlePress = async () => {
    if (disabled) return;

    if (isLike) {
      // лёгкий impact под клик по лайку
      await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    }

    onPress?.();
  };

  const renderIcon = () => {
    if (isLike) {
      const IconComponent = active ? LikeFilledIcon : LikeIcon;

      return (
        <IconComponent
          width={24}
          height={24}
          color={contentColor}
        />
      );
    }

    return (
      <CommentIcon
        width={24}
        height={24}
        color={theme.colors.textSecondary}
      />
    );
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      disabled={disabled}
      onPress={handlePress}
      style={[
        styles.button,
        { backgroundColor, opacity: disabled ? 0.6 : 1 },
      ]}
    >
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          {renderIcon()}
        </View>

        <Text style={[styles.label, { color: contentColor }]}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const theme = baseTheme;

const styles = StyleSheet.create({
  button: {
    height: 36,
    minHeight: 36,
    borderRadius: theme.radii.pill,
    justifyContent: 'center',
  },
  content: {
    height: 36,
    minHeight: 36,
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: theme.spacing.sm,
    paddingBottom: theme.spacing.sm,
    paddingLeft: theme.spacing.sm,
    paddingRight: theme.spacing.xl,
    columnGap: theme.spacing.xs,
  },
  iconContainer: {
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  label: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.xs,
    lineHeight: theme.typography.lineHeights.xs,
    fontWeight: theme.typography.weights.bold,
  },
});