import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from '../screens/login';

export type RootStackParamList = {
  [NavigationRoutes.Login]: undefined;
  [NavigationRoutes.SignUp]: undefined;
  [NavigationRoutes.Products]: undefined;
};

export const Stack = createNativeStackNavigator<RootStackParamList>();

export enum NavigationRoutes {
  Login = 'Login',
  SignUp = 'SignUp',
  Products = 'Products',
}
