import { useNavigation } from '@react-navigation/core';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../design-system';
import { Button, Input } from '../design-system/components';
import { NavigationRoutes, RootStackParamList } from '../navigation';

type LoginProps = NativeStackScreenProps<
  RootStackParamList,
  NavigationRoutes.Login
>;

export const Login: React.FC<LoginProps> = ({ navigation }) => {
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
      <Button
        textStyle={styles.btnText}
        text="Login"
        onPress={() => navigation.navigate(NavigationRoutes.Categories)}
      />
      <Button
        style={styles.signupBtn}
        textStyle={styles.btnText}
        text="Sign Up"
        onPress={() => navigation.navigate(NavigationRoutes.SignUp)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: Colors.Tertiary,
    alignItems: 'center',
  },
  input: {
    width: '72%',
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
  signupBtn: {
    marginTop: 80,
  },
});
