import axios, { AxiosError } from 'axios';
import { logout } from '../helpers/auth-helper';
import { TokenManager } from '../helpers/token-manager';
import { ApiErrorResponse, ApiErrorType } from './types';

const api = axios.create({
  baseURL: 'http://localhost:8000',
});

api.interceptors.request.use(async (req) => {
  if (await TokenManager.getToken()) {
    req.headers['Authorization'] = `Bearer ${TokenManager.getToken()}`;
  }
  return req;
});

api.interceptors.response.use(
  (res) => res.data,
  (error) => {
    // let err: any;

    // if (isCustomError(error)) {
    //   err = error.response.data;
    //   if (err.meta.type === ApiErrorType.Authorization) {
    //     if (!TokenManager.getToken()) {
    //       logout();
    //     }
    //   }
    // } else {
    //   err = {
    //     meta: {
    //       type: ApiErrorType.Authorization,
    //       status_code: 400,
    //       message: 'System Error',
    //       details: [],
    //     },
    //     data: {},
    //   };
    // }
    return Promise.reject(error);
  }
);
export default api;

// const isCustomError = (error: AxiosError<ApiErrorResponse>) =>
//   !!error.response?.data.meta.type;
