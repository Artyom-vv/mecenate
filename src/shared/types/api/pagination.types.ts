export interface PaginatedData {
  nextCursor: string | null;
  hasMore: boolean;
}

export interface PaginatedResponse<T extends object> {
  ok: boolean;
  data: PaginatedData & T;
}
