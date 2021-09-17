import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../design-system';
import { Button, Input } from '../../design-system/components';

export const Login = () => {
  return (
    <View style={styles.loginContainer}>
      <Input
        style={[styles.input, styles.inputUsername]}
        placeholder={'Username'}
      />
      <Input
        style={[styles.input, styles.inputPassword]}
        placeholder={'Password'}
      />
      <Button textStyle={styles.btnText} text="Login" />
      <Button textStyle={styles.btnText} text="Sign Up" />
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    // width: 100,
    backgroundColor: Colors.Secondary,
    alignItems: 'center',
  },
  input: {
    marginTop: 45,
  },
  inputUsername: {
    marginTop: 129,
  },
  inputPassword: {
    marginBottom: 90,
  },
  btnText: {
    textTransform: 'uppercase',
  },
  loginBtn: {},
});
