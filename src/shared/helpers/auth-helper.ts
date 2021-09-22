import { TokenManager } from './token-manager';

export const logout = () => {
  TokenManager.removeToken();
};

export const isAuthenticated = () => {
  return !!TokenManager.getToken();
};
