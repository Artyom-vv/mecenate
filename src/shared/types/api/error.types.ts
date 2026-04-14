export interface ApiError {
  code: string;
  message: string;
}

export interface ErrorResponse {
  ok: false;
  error: ApiError;
}
