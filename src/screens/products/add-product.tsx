import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors } from '../../design-system';
import { Button, Input } from '../../design-system/components';
import { NavigationRoutes, RootStackParamList } from '../../navigation';

type AddProductProps = NativeStackScreenProps<
  RootStackParamList,
  NavigationRoutes.ProductAddition
>;

export const AddProduct: React.FC<AddProductProps> = ({ navigation }) => {
  return (
    <View style={styles.addProductContainer}>
      <Input label="Brand" style={styles.AddProductInput} required />
      <Input label="Quantity" style={styles.AddProductInput} required />
      <Input label="Cost per piece" style={styles.AddProductInput} required />
      <Button
        text="Add Product"
        style={styles.AddProductBtn}
        onPress={() => navigation.navigate(NavigationRoutes.Products)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  addProductContainer: {
    flex: 1,
    backgroundColor: Colors.Tertiary,
    alignItems: 'center',
    paddingTop: 63,
  },
  AddProductInput: {
    marginBottom: 10,
    width: '85%',
  },
  AddProductBtn: {
    position: 'absolute',
    bottom: 97,
  },
});
