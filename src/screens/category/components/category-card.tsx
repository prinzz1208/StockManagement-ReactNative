import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Colors } from '../../../design-system';

export enum CategoryType {
  Phone = 'Phone',
  TV = 'TV',
}
type CategoryCardProps = {
  type: CategoryType;
  count: number;
  dateIn: string;
  brandsCount: number;
};
export const CategoryCard: React.FC<CategoryCardProps> = ({
  count,
  dateIn,
  brandsCount,
}) => {
  return (
    <View style={styles.categoryCard}>
      <View style={styles.col}>
        <Text>Image</Text>
      </View>
      <View style={styles.horizontalLine}></View>
      <View style={styles.col}>
        <Text style={styles.colHead}>Count</Text>
        <Text style={styles.colValue}>{count}</Text>
      </View>{' '}
      <View style={styles.col}>
        <Text style={styles.colHead}>Date In</Text>
        <Text style={[styles.colValue, styles.dateIn]}>
          {dateIn.split('/').join(' ').toString()}
        </Text>
      </View>{' '}
      <View style={styles.col}>
        <Text style={styles.colHead}>Brands</Text>
        <Text style={styles.colValue}>{brandsCount}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  categoryCard: {
    width: 334,
    height: 112,
    flexDirection: 'row',
    backgroundColor: Colors.Secondary,
    borderRadius: 10,
    margin: 10,
    padding: 20,
    justifyContent: 'space-evenly',
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
  colHead: {
    marginBottom: 20,
  },
  colValue: {
    width: 43,
    height: 43,
    fontSize: 24,
    marginHorizontal: 2,
    textAlign: 'center',
  },
  dateIn: {
    fontSize: 14,
  },
  horizontalLine: {
    backgroundColor: Colors.Black,
    width: 1,
    height: '100%',
    marginHorizontal: 20,
  },
});
