import React from 'react';
import { Image, View, Text, StyleSheet } from 'react-native';
import { BlurView } from 'expo-blur';

import { Button } from '@shared/components';
import { baseTheme } from '@theme';
import { DonateIcon } from '@shared/icons';

interface PostCardMediaProps {
  coverUrl?: string | null;
  isPaid: boolean;
}

export const PostCardMedia: React.FC<PostCardMediaProps> = ({
  coverUrl,
  isPaid,
}) => {
  return (
    <View style={styles.coverContainer}>
      {coverUrl ? (
        <Image source={{ uri: coverUrl }} style={styles.coverImage} />
      ) : (
        <View style={styles.coverPlaceholder} />
      )}

      {isPaid && (
        <View style={styles.paidOverlay}>
          <BlurView intensity={40} tint="dark" style={StyleSheet.absoluteFillObject} />
          <View style={styles.paidOverlayDim} />

          <View style={styles.paidMessageContainer}>
            <View style={styles.paidMessageCard}>
              <View style={styles.paidTopContent}>
                <View style={styles.paidTextIconBlock}>
                  <View style={styles.paidIconBox}>
                    <DonateIcon width={30} height={30} />
                  </View>

                  <Text style={styles.paidOverlayText}>
                    Контент скрыт пользователем.{'\n'}
                    Доступ откроется после доната
                  </Text>
                </View>
              </View>

              <Button style={styles.donateButton} title="Отправить донат" />
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

const theme = baseTheme;

const styles = StyleSheet.create({
  coverContainer: {
    width: '100%',
    aspectRatio: 1,
    backgroundColor: theme.colors.surface,
    position: 'relative',
    overflow: 'hidden',
  },
  coverImage: {
    width: '100%',
    height: '100%',
  },
  coverPlaceholder: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
  paidOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paidOverlayDim: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.28)',
  },
  paidMessageContainer: {
    width: '100%',
    paddingHorizontal: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paidMessageCard: {
    width: 240,
    gap: 1,
    alignItems: 'center',
  },
  paidTopContent: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paidTextIconBlock: {
    width: '100%',
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paidIconBox: {
    width: 42,
    height: 42,
    borderRadius: 10,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paidOverlayText: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.md,
    lineHeight: theme.typography.lineHeights.sm,
    fontWeight: theme.typography.weights.semiBold,
    color: theme.colors.white,
    textAlign: 'center',
  },
  donateButton: {
    width: '100%',
  },
});
