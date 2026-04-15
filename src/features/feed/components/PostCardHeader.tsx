import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { Row, Avatar } from '@shared/components';
import { baseTheme } from '@theme';
import type { Post } from '@features/feed/types';

interface PostCardHeaderProps {
  author: Post['author'];
}

export const PostCardHeader: React.FC<PostCardHeaderProps> = ({ author }) => {
  return (
    <Row gap={theme.spacing.lg} align="center">
      <Avatar uri={author.avatarUrl} size={40} />

      <Text style={styles.authorName} numberOfLines={1}>
        {author.displayName || author.username}
      </Text>
    </Row>
  );
};

const theme = baseTheme;

const styles = StyleSheet.create({
  authorName: {
    flex: 1,
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.md,
    lineHeight: theme.typography.lineHeights.sm,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.textPrimary,
  },
});
