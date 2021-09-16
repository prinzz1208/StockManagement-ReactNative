import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';
import { Colors } from '../colors';

export type InputProps = TextInputProps;
export const Input: React.FC<InputProps> = ({ style, ...rest }) => {
  return (
    <View style={inputContainer.textInput}>
      <TextInput style={style} {...rest} />
    </View>
  );
};

const inputContainer = StyleSheet.create({
  textInput: {
    height: 55,
    backgroundColor: Colors.White,
    borderWidth: 10,
    borderColor: Colors.Primary,
    borderRadius: 3,
    marginHorizontal: 10,
  },
});
