import { makeAutoObservable } from 'mobx';
import { FeedFilter } from '@features/feed/types';

class FeedStore {
  filter: FeedFilter = 'all';

  constructor() {
    makeAutoObservable(this);
  }

  setFilter(filter: FeedFilter) {
    this.filter = filter;
  }
}

export const feedStore = new FeedStore();
