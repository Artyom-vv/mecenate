import { apiClient } from '@shared/api';
import { GetFeedParams, GetFeedResponse } from '@features/feed/types';

export const getFeed = async (params: GetFeedParams): Promise<GetFeedResponse> => {
  const { data } = await apiClient.get<GetFeedResponse>('/posts', { params });
  return data;
};
