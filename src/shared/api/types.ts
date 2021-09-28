export type ApiResponse<T = any> = {
  meta: any;
  data: T;
};

export type ApiErrorResponse<T = any> = {
  meta: ApiError;
  data: T;
};

export type ApiError = {
  status_code: number;
  type: ApiErrorType;
  message?: string;
  details?: string[];
};

export enum ApiErrorType {
  Authorization = 'authorization',
  ValidationError = 'ValidationError',
}
