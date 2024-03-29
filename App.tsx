import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Colors } from './src/design-system';
import { NavigationRoutes, Stack } from './src/navigation';
import {
  Login,
  SignUp,
  Categories,
  AddCategory,
  AddProduct,
  Products,
} from './src/screens';

const queryClient = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={NavigationRoutes.Login} component={Login} />
          <Stack.Screen name={NavigationRoutes.SignUp} component={SignUp} />
          <Stack.Group>
            <Stack.Screen
              name={NavigationRoutes.Categories}
              component={Categories}
            />
            <Stack.Screen
              name={NavigationRoutes.CategoryAddition}
              component={AddCategory}
            />
          </Stack.Group>
          <Stack.Group>
            <Stack.Screen
              name={NavigationRoutes.Products}
              component={Products}
            />
            <Stack.Screen
              name={NavigationRoutes.ProductAddition}
              component={AddProduct}
            />
          </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
    paddingTop: 20,
  },
});
