import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native';
import { Modify } from '../../utils/type-utils';
import { Colors } from '../colors';

export type InputProps = Modify<
  TextInputProps,
  { innerStyle?: StyleProp<TextStyle> }
>;
export const Input: React.FC<InputProps> = ({ style, innerStyle, ...rest }) => {
  return (
    <View style={[inputContainer.textInputContainer, style]}>
      <TextInput style={[inputContainer.textInput, innerStyle]} {...rest} />
    </View>
  );
};

const inputContainer = StyleSheet.create({
  textInputContainer: {
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderColor: Colors.Primary,
    borderRadius: 10,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  textInput: {
    height: 55,
    paddingHorizontal: 10,
  },
});
