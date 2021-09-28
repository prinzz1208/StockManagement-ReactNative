import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { Colors } from '../../../design-system';

type ProductCardProps = {
  quantity: number;
  dateIn: string;
  brand: string;
  cost: string;
};
export const ProductCard: React.FC<ProductCardProps> = ({
  quantity,
  dateIn,
  brand,
  cost,
}) => {
  return (
    <View style={styles.productCard} onStartShouldSetResponder={() => true}>
      <View style={styles.col}>
        <Text style={[styles.colValue, styles.dateIn]}>
          {dateIn.split('/').join(' ').toString()}
        </Text>
      </View>
      <View style={styles.col}>
        <Text style={[styles.colValue, styles.quantity]}>{quantity}</Text>
      </View>
      <View style={styles.col}>
        <Text style={[styles.colValue, styles.brand]}>{brand}</Text>
      </View>
      <View style={styles.col}>
        <Text style={styles.colValue}>{cost}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  productCard: {
    width: '100%',
    height: 112,
    flexDirection: 'row',
    backgroundColor: Colors.Secondary,
    borderRadius: 10,
    margin: 10,
    justifyContent: 'space-around',
    // Shadow.
    shadowColor: Colors.Black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  col: {
    display: 'flex',
    marginHorizontal: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  colValue: {
    width: 43,
    height: 43,
    // fontSize: 24,
    // marginHorizontal: 2,
    textAlign: 'center',
  },
  brand: {
    color: Colors.Primary,
  },
  dateIn: {
    fontSize: 14,
  },
  quantity: {
    // marginLeft: 10,
    fontSize: 24,
  },
});
