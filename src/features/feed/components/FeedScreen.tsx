import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useFeed } from '@features/feed/hooks';
import { PostCard } from '@features/feed/components/PostCard';
import { baseTheme } from '@theme';
import { Button, Column } from '@shared/components';

export const FeedScreen: React.FC = () => {
  const {
    data,
    isLoading,
    isError,
    refetch,
    fetchNextPage,
    isFetchingNextPage,
    isRefetching,
  } = useFeed();

  const theme = baseTheme;

  const posts = data?.pages.flatMap((page) => page.data.posts) ?? [];

  const handleEndReached = () => {
    if (!isFetchingNextPage && data?.pages[data.pages.length - 1]?.data.hasMore) {
      fetchNextPage();
    }
  };

  const handleRetry = () => {
    refetch();
  };

  const content = () => {
    if (isLoading && posts.length === 0) {
      return (
        <View style={styles.centered}>
          <ActivityIndicator color={theme.colors.primary} />
        </View>
      );
    }

    if (isError && posts.length === 0) {
      return (
        <Column gap={theme.spacing.xxl} style={styles.centered}>
          <Text style={styles.errorText}>Не удалось загрузить публикации</Text>

          <Button
            style={{width: '100%'}}
            title="Повторить"
            onPress={handleRetry}
            loading={isRefetching}
          />
        </Column>
      );
    }

    return (
      <FlatList
        contentContainerStyle={styles.listContent}
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <PostCard post={item} />}
        onEndReached={handleEndReached}
        onEndReachedThreshold={0.4}
        refreshing={isRefetching && !isFetchingNextPage}
        onRefresh={refetch}
        ListFooterComponent={
          isFetchingNextPage ? (
            <View style={styles.footer}>
              <ActivityIndicator color={theme.colors.primary} />
            </View>
          ) : null
        }
      />
    );
  };

  return (
    <SafeAreaView style={styles.screen} edges={['top']}>
      {content()}
    </SafeAreaView>
  );
};

const theme = baseTheme;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: theme.colors.screenBackground,
  },
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.xxl,
  },
  listContent: {
    paddingVertical: theme.spacing.xxl,
    gap: theme.spacing.xxl,
  },
  footer: {
    paddingVertical: theme.spacing.xxl,
  },
  errorText: {
    fontFamily: theme.typography.fontFamily,
    fontSize: theme.typography.sizes.xl,
    lineHeight: theme.typography.lineHeights.md,
    fontWeight: theme.typography.weights.bold,
    color: theme.colors.textPrimary,
    textAlign: 'center',
  }
});
