import React, { useMemo, useState } from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

import { Card, Row } from '@shared/components';
import { baseTheme } from '@theme';
import type { Post } from '@features/feed/types';
import type { FeedStackParamList } from '@navigation/stacks/FeedStack';
import { ButtonAction } from '@features/feed/components/ButtonAction';
import { PostCardHeader } from '@features/feed/components/PostCardHeader';
import { PostCardMedia } from '@features/feed/components/PostCardMedia';
import { PostCardPreview } from '@features/feed/components/PostCardPreview';
import { PostCardPaidPlaceholder } from '@features/feed/components/PostCardPaidPlaceholder';

type NavigationProp = NativeStackNavigationProp<FeedStackParamList, 'Feed'>;

interface PostCardProps {
  post: Post;
}

export const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const navigation = useNavigation<NavigationProp>();
  const isPaid = post.tier === 'paid';

  const [isExpanded, setIsExpanded] = useState(false);
  const [liked, setLiked] = useState(post.isLiked);
  const [likesCount, setLikesCount] = useState(post.likesCount);

  const previewText = useMemo(() => post.preview?.trim() || '', [post.preview]);
  const bodyText = useMemo(() => post.body?.trim() || '', [post.body]);

  const collapsedText = previewText;
  const expandedText = bodyText || previewText;
  const canToggle = !isPaid && !!collapsedText;

  const handlePress = () => {
    navigation.navigate('PostDetail', { postId: post.id });
  };

  const handleToggleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  const handleToggleLike = () => {
    setLiked((prevLiked) => {
      const nextLiked = !prevLiked;

      setLikesCount((prevCount) => {
        if (nextLiked) {
          return prevCount + 1;
        }

        return Math.max(0, prevCount - 1);
      });

      return nextLiked;
    });
  };

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={handlePress}>
      <Card padded={false} style={styles.card}>
        <View style={styles.contentContainer}>
          <PostCardHeader author={post.author} />
        </View>

        <View style={styles.mediaContainer}>
          <PostCardMedia coverUrl={post.coverUrl} isPaid={isPaid} />
        </View>

        <View style={styles.contentContainer}>
          {isPaid ? (
            <PostCardPaidPlaceholder />
          ) : (
            <>
              <PostCardPreview
                title={post.title}
                collapsedText={collapsedText}
                expandedText={expandedText}
                isExpanded={isExpanded}
                canToggle={canToggle}
                onToggleExpand={handleToggleExpand}
              />

              <Row gap={theme.spacing.md} style={styles.actionsRow}>
                <ButtonAction
                  type="like"
                  label={likesCount}
                  active={liked}
                  onPress={handleToggleLike}
                />
                <ButtonAction
                  type="comment"
                  label={post.commentsCount}
                />
              </Row>
            </>
          )}
        </View>
      </Card>
    </TouchableOpacity>
  );
};

const theme = baseTheme;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    alignSelf: 'stretch',
  },
  contentContainer: {
    paddingVertical: theme.spacing.xl,
    paddingHorizontal: theme.spacing.xxl,
  },
  mediaContainer: {
    width: '100%',
  },
  actionsRow: {
    marginTop: theme.spacing.xxl,
  },
});
