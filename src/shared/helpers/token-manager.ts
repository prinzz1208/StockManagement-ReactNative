import AsyncStorage from '@react-native-async-storage/async-storage';

export const TokenManager = {
  getToken: async () => {
    try {
      return await AsyncStorage.getItem('token');
    } catch (e) {
      console.log(e);
    }
  },

  saveToken: async (token: string): Promise<void> => {
    try {
      await AsyncStorage.setItem('token', token);
    } catch (e) {
      console.log(e);
    }
  },

  removeToken: async (): Promise<void> => {
    try {
      await AsyncStorage.removeItem('token');
    } catch (e) {
      console.log(e);
    }
  },
};
