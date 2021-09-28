import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Input } from '../../../design-system/components';

export const SearchBar = () => {
  return (
    <View style={styles.searchBarContainer}>
      <Text>O</Text>
      <Input
        style={styles.searchBarInput}
        innerContainerStyle={styles.innerInputContainer}
      ></Input>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
  },
  searchBarInput: {
    width: '100%',
  },
  innerInputContainer: {
    borderRadius: 50,
  },
});
