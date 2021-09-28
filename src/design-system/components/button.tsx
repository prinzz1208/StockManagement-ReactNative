import React, { ReactNode } from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableHighlight,
  TouchableHighlightProps,
} from 'react-native';
import { Colors } from '..';
import { Modify } from '../../utils/type-utils';

type ButtonProps = Modify<
  TouchableHighlightProps,
  { text: ReactNode; textStyle?: StyleProp<TextStyle> }
>;

export const Button: React.FC<ButtonProps> = ({
  text,
  textStyle,
  style,
  ...rest
}) => {
  return (
    <TouchableHighlight style={[customStyle.btn, style]} {...rest}>
      <Text style={[customStyle.btnText, textStyle]}>{text}</Text>
    </TouchableHighlight>
  );
};

const customStyle = StyleSheet.create({
  btn: {
    backgroundColor: Colors.Primary,
    margin: 10,
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 150,
  },
  btnText: {
    color: Colors.White,
  },
});
