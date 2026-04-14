import { Author } from '../../../shared/types';

export interface Comment {
  id: string;
  postId: string;
  author: Author;
  text: string;
  createdAt: string;
}
