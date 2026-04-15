import { Post } from '@features/feed/types/feed.model';
import { PaginatedResponse } from '@shared/types';

export interface GetFeedParams {
  cursor?: string;
  limit?: number;
  tier?: Post['tier'];
  simulate_error?: boolean;
}

export type GetFeedResponse = PaginatedResponse<{ posts: Post[] }>;
