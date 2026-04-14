import { FeedFilter } from './feed.model';

export type FeedStatus = 'idle' | 'loading' | 'error' | 'success';

export interface FeedState {
  filter: FeedFilter;
  isRefreshing: boolean;
  status: FeedStatus;
}
