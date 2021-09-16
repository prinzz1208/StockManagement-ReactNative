import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../design-system';
import { Input } from '../../design-system/components';

export const Login = () => {
  return (
    <View style={styles.loginContainer}>
      <Input placeholder={'User Name'} />
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    // width: 100,
    backgroundColor: Colors.Primary,
  },
});
