export type WebSocketEventType = 'like_updated' | 'comment_added';

export interface WebSocketEvent<T> {
  type: WebSocketEventType;
  payload: T;
}
