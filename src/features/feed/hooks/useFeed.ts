import { useInfiniteQuery } from '@tanstack/react-query';
import { feedStore } from '@features/feed/store/feedStore';
import { getFeed } from '@features/feed/api/feed.api';
import { GetFeedParams } from '@features/feed/types';

export const useFeed = () => {
  const filter = feedStore.filter;

  return useInfiniteQuery({
    queryKey: ['feed', filter],
    queryFn: ({ pageParam }: { pageParam: string | undefined }) => {
      const params: GetFeedParams = {
        cursor: pageParam,
        limit: 10,
        ...(filter !== 'all' && { tier: filter }),
      };
      return getFeed(params);
    },
    initialPageParam: undefined as string | undefined,
    getNextPageParam: (lastPage) =>
      lastPage.data.hasMore ? lastPage.data.nextCursor ?? undefined : undefined,
  });
};
