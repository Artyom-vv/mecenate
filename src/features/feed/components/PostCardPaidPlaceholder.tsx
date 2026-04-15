import React from 'react';
import { View, StyleSheet } from 'react-native';

import { baseTheme } from '@theme';
import { Column } from '@shared/components';

export const PostCardPaidPlaceholder: React.FC = () => {
  return (
    <Column gap={theme.spacing.md} style={{ paddingTop: theme.spacing.md }}>
      <View style={[styles.skeleton, styles.titleSkeleton]} />
      <View style={[styles.skeleton, styles.actionsSkeleton]} />
    </Column>
  );
};

const theme = baseTheme;

const styles = StyleSheet.create({
  skeleton: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.radii.skeleton,
  },
  titleSkeleton: {
    width: 164,
    height: 26,
  },
  actionsSkeleton: {
    width: '100%',
    height: 40,
    borderRadius: theme.radii.pill,
  },
});
