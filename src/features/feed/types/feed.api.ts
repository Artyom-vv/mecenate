import { Post } from './feed.model';
import { PaginatedResponse } from '../../../shared/types';

export interface GetFeedParams {
  cursor?: string;
  limit?: number;
  tier?: 'free' | 'paid';
  simulate_error?: boolean;
}

export type GetFeedResponse = PaginatedResponse<{ posts: Post[] }>;
