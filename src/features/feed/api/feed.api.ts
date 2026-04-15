import { apiClient } from '@shared/api';
import { GetFeedParams, GetFeedResponse } from '@features/feed/types';

const SIMULATE_ERROR =
  process.env.EXPO_PUBLIC_SIMULATE_ERROR === 'true';

export const getFeed = async (
  params: GetFeedParams,
): Promise<GetFeedResponse> => {
  const queryParams: Record<string, unknown> = {
    ...params,
  };

  if (SIMULATE_ERROR) {
    queryParams.simulate_error = true;
  }

  const { data } = await apiClient.get<GetFeedResponse>('/posts', {
    params: queryParams,
  });

  return data;
};