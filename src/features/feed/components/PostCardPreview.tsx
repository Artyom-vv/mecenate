import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { Column } from '@shared/components';
import { baseTheme } from '@theme';

interface PostCardPreviewProps {
  title: string;
  collapsedText: string;
  expandedText: string;
  isExpanded: boolean;
  canToggle: boolean;
  onToggleExpand: () => void;
}

export const PostCardPreview: React.FC<PostCardPreviewProps> = ({
  title,
  collapsedText,
  expandedText,
  isExpanded,
  canToggle,
  onToggleExpand,
}) => {
  return (
    <Column gap={theme.spacing.md}>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>

      {!!collapsedText && (
        <View style={styles.previewWrapper}>
          {!isExpanded ? (
            <>
              <Text style={styles.preview} numberOfLines={2}>
                {collapsedText}
              </Text>

              {canToggle && (
                <Pressable
                  onPress={onToggleExpand}
                  style={styles.showMoreButtonOverlay}
                >
                  <View style={styles.showMoreOverlayRow}>
                    <LinearGradient
                      colors={['rgba(255,255,255,0)', 'rgba(255,255,255,1)']}
                      start={{ x: 0, y: 0.5 }}
                      end={{ x: 1, y: 0.5 }}
                      style={styles.fadeZone}
                    />
                    <View style={styles.labelZone}>
                      <Text style={styles.showMoreText}>Показать ещё</Text>
                    </View>
                  </View>
                </Pressable>
              )}
            </>
          ) : (
            <>
              <Text style={styles.preview}>
                {expandedText}
              </Text>

              {canToggle && (
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={onToggleExpand}
                  style={styles.collapseButton}
                >
                  <Text style={styles.showMoreText}>Свернуть</Text>
                </TouchableOpacity>
              )}
            </>
          )}
        </View>
      )}
    </Column>
  );
};

const theme = baseTheme;

const styles = StyleSheet.create({
  title: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.xl,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.textPrimary,
  },
  previewWrapper: {
    position: 'relative',
  },
  preview: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.md,
    fontWeight: theme.typography.weights.medium,
    lineHeight: theme.typography.lineHeights.md,
    color: theme.colors.textPrimary,
  },
  showMoreButtonOverlay: {
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  showMoreOverlayRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fadeZone: {
    width: 20,
    height: theme.typography.lineHeights.md,
  },
  labelZone: {
    backgroundColor: theme.colors.cardBackground,
    justifyContent: 'center',
  },
  showMoreText: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.sm,
    lineHeight: theme.typography.lineHeights.md,
    fontWeight: theme.typography.weights.semiBold,
    color: theme.colors.primary,
    backgroundColor: theme.colors.cardBackground,
  },
  collapseButton: {
    marginTop: theme.spacing.xs,
    alignSelf: 'flex-start',
  },
});
