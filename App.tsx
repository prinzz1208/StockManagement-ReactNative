import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from './src/design-system';
import { NavigationRoutes, Stack } from './src/navigation';
import { Login, SignUp, Categories, AddCategory } from './src/screens';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={NavigationRoutes.Login} component={Login} />
        <Stack.Screen name={NavigationRoutes.SignUp} component={SignUp} />
        <Stack.Screen
          name={NavigationRoutes.Categories}
          component={Categories}
        />
        <Stack.Screen
          name={NavigationRoutes.CategoryAddition}
          component={AddCategory}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
    paddingTop: 20,
  },
});
