import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { Login } from './src/screens/login';
import { Colors } from './src/design-system';

export default function App() {
  return (
    <View style={styles.container}>
      <Login />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.Secondary,
    paddingTop: 20,
  },
});
