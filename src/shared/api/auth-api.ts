import { useMutation } from 'react-query';
import api from './api';
import { ApiErrorResponse, ApiResponse } from './types';

export type LoginRequestPayload = {
  email: string;
  password: string;
};

export type LoginResponse = {
  access: string;
  type: string;
};

export const loginRequest = async (payload: LoginRequestPayload) =>
  await api.post('/users/login', payload);

export const useLoginRequest = () =>
  useMutation<any, ApiErrorResponse, any>(
    async (payload: LoginRequestPayload) => loginRequest(payload)
  );
