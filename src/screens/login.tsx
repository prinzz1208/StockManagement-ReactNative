import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../design-system';
import { Button, Input } from '../design-system/components';
import { NavigationRoutes, RootStackParamList } from '../navigation';
import { useLoginRequest } from '../shared/api/auth-api';
import { TokenManager } from '../shared/helpers/token-manager';

type LoginProps = NativeStackScreenProps<
  RootStackParamList,
  NavigationRoutes.Login
>;

export const Login: React.FC<LoginProps> = ({ navigation }) => {
  // Hooks.
  const {
    mutate: sendLoginRequest,
    isLoading,
    isSuccess,
    data,
  } = useLoginRequest();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // UseEffects.
  useEffect(() => {
    TokenManager.getToken().then((token) => {
      if (token) {
        navigation.navigate(NavigationRoutes.Categories);
      }
    });
  }, []);

  useEffect(() => {
    if (isSuccess && data) {
      TokenManager.saveToken(data.access_token).then(() => {
        navigation.navigate(NavigationRoutes.Categories);
      });
    }
  }, [isSuccess, data]);

  // Handlers.
  const onLogin = () => {
    sendLoginRequest({ email, password });
  };

  return (
    <View style={styles.loginContainer}>
      <Input
        style={[styles.input, styles.inputUsername]}
        placeholder={'Username'}
        value={email}
        onChangeText={setEmail}
      />
      <Input
        style={[styles.input, styles.inputPassword]}
        placeholder={'Password'}
        value={password}
        onChangeText={setPassword}
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
