import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../design-system';
import { Button, Input } from '../../design-system/components';
import { NavigationRoutes, RootStackParamList } from '../../navigation';

type AddCategoryProps = NativeStackScreenProps<
  RootStackParamList,
  NavigationRoutes.CategoryAddition
>;

export const AddCategory: React.FC<AddCategoryProps> = ({ navigation }) => {
  return (
    <View style={styles.addCategoryContainer}>
      <Input label="Category Type" style={styles.addCategoryInput} required />
      <Button
        text="Add Category"
        style={styles.addCategoryBtn}
        onPress={() => navigation.navigate(NavigationRoutes.Categories)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addCategoryContainer: {
    flex: 1,
    backgroundColor: Colors.Tertiary,
    alignItems: 'center',
  },
  addCategoryInput: {
    marginTop: 63,
  },
  addCategoryBtn: {
    position: 'absolute',
    bottom: 97,
  },
});
