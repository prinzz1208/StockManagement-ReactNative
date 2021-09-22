import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors } from '..';
import { Button } from './button';

type AddButtonProps = {
  onPress: () => void;
};
export const AddButton: React.FC<AddButtonProps> = ({ onPress }) => {
  return (
    <Button
      style={styles.addProductButton}
      text="+"
      textStyle={styles.textStyle}
      onPress={onPress}
    />
  );
};

const styles = StyleSheet.create({
  addProductButton: {
    backgroundColor: Colors.Primary,
    position: 'absolute',
    bottom: 25,
    right: 12,
    width: 50,
    height: 50,
    borderRadius: 100,
  },
  textStyle: {
    display: 'flex',
    fontSize: 20,
    fontWeight: '100',
  },
});
