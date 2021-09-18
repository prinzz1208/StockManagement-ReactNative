import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Colors } from '../design-system';
import { Input } from '../design-system/components';

export const SignUp: React.FC = () => {
  return (
    <View style={styles.signupContainer}>
      <Input style={styles.input} label={'First Name'} required />
      <Input style={styles.input} label={'Last Name'} />
      <Input style={styles.input} label={'Email'} required />
      <Text style={styles.orText}>OR</Text>
      <Input style={styles.input} label={'Mobile No.'} required />
    </View>
  );
};

const styles = StyleSheet.create({
  signupContainer: {
    flex: 1,
    backgroundColor: Colors.Tertiary,
    alignItems: 'center',
  },
  input: {
    width: '72%',
    marginTop: 45,
  },
  orText: {
    margin: 50,
  },
});
