import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../design-system';
import { ProductCard, ProductType } from './components/product-card';

export const Products: React.FC = () => {
  return (
    <View style={styles.productsContainer}>
      <Text></Text>
      <ProductCard
        type={ProductType.Phone}
        count={0}
        dateIn={'24/Feb/2020'}
        brandsCount={24}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productsContainer: {
    flex: 1,
    backgroundColor: Colors.Tertiary,
    alignItems: 'center',
    padding: 2,
  },
});
