import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  Text,
  TextProps,
  ViewStyle,
} from 'react-native';
import { Modify } from '../../utils/type-utils';
import { Colors } from '../colors';

type InputProps = Modify<
  TextInputProps,
  {
    innerContainerStyle?: StyleProp<ViewStyle>;
    innerStyle?: StyleProp<TextStyle>;
    label?: string;
    required?: boolean;
  }
>;

export const Input: React.FC<InputProps> & {
  Label: React.FC<TextProps>;
} = ({ style, innerStyle, label, required, innerContainerStyle, ...rest }) => {
  return (
    <View style={[inputStyles.inputContainer, style]}>
      {label && (
        <Input.Label style={inputStyles.label}>
          <Text>{label}</Text>
          {required && <Text style={inputStyles.required}>*</Text>}
        </Input.Label>
      )}
      <View style={[inputStyles.textInputContainer, innerContainerStyle]}>
        <TextInput style={[inputStyles.textInput, innerStyle]} {...rest} />
      </View>
    </View>
  );
};

const inputStyles = StyleSheet.create({
  inputContainer: {},
  label: {
    flexDirection: 'row',
    marginLeft: 2,
    marginBottom: 2,
  },
  required: {
    marginLeft: 2,
    color: Colors.Red,
    alignItems: 'center',
  },
  textInputContainer: {
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderColor: Colors.Primary,
    borderRadius: 10,
    textAlign: 'center',
  },
  textInput: {
    height: 55,
    paddingHorizontal: 10,
  },
});

Input.Label = ({ children, ...rest }) => <Text {...rest}>{children}</Text>;
