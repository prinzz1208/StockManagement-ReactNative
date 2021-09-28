import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../design-system';
import { AddButton } from '../../design-system/components';
import { NavigationRoutes, RootStackParamList } from '../../navigation';
import { ProductCard } from './components/product-card';

type ProductsProps = NativeStackScreenProps<
  RootStackParamList,
  NavigationRoutes.Products
>;
export const Products: React.FC<ProductsProps> = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate(NavigationRoutes.ProductAddition);
  };

  return (
    <View style={styles.productsContainer}>
      <View style={styles.calculationContainer}>
        <View>
          <Text style={styles.calculationText}>Total Count</Text>
          <Text style={styles.calculationText}>24</Text>
        </View>
        <View>
          <Text style={styles.calculationText}>Total Cost</Text>
          <Text style={styles.calculationText}>Rs 2.4 cr</Text>
        </View>
      </View>
      <View style={styles.columns}>
        <Text style={styles.colText}>Date in</Text>
        <Text style={styles.colText}>Quantity</Text>
        <Text style={styles.colText}>Brand</Text>
        <Text style={styles.colText}>Cost</Text>
      </View>
      <ProductCard
        quantity={0}
        dateIn={'24/Feb/2020'}
        brand={'apple'}
        cost={'24 lakhs'}
      />
      <AddButton onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  productsContainer: {
    flex: 1,
    backgroundColor: Colors.Tertiary,
    alignItems: 'center',
    padding: 21,
  },
  calculationContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  calculationText: {
    textAlign: 'center',
  },
  columns: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginTop: 20,
    paddingVertical: 10,
  },
  colText: {
    fontSize: 18,
  },
});
