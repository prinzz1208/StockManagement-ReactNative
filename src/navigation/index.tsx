import { createNativeStackNavigator } from '@react-navigation/native-stack';

export type RootStackParamList = {
  [NavigationRoutes.Login]: undefined;
  [NavigationRoutes.SignUp]: undefined;
  [NavigationRoutes.Categories]: undefined;
  [NavigationRoutes.CategoryAddition]: undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();

export enum NavigationRoutes {
  Login = 'Login',
  SignUp = 'SignUp',
  Categories = 'Categories',
  CategoryAddition = 'CategoryAddition',
}
