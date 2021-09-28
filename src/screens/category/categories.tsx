import { useNavigation } from '@react-navigation/core';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../../design-system';
import { AddButton } from '../../design-system/components';
import { NavigationRoutes, RootStackParamList } from '../../navigation';
import { CategoryCard, CategoryType } from './components/category-card';
import { SearchBar } from './components/search-bar';
type CategoriesProps = NativeStackScreenProps<
  RootStackParamList,
  NavigationRoutes.Categories
>;

export const Categories: React.FC<CategoriesProps> = ({ navigation }) => {
  const onPress = () => {
    navigation.navigate(NavigationRoutes.CategoryAddition);
  };

  const onCategoryClicked = () => {
    navigation.navigate(NavigationRoutes.Products);
  };
  return (
    <View style={styles.categoryContainer}>
      <SearchBar />
      <CategoryCard
        type={CategoryType.Phone}
        count={0}
        dateIn={'24/Feb/2020'}
        brandsCount={24}
        onPress={onCategoryClicked}
      />
      <AddButton onPress={onPress} />
    </View>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    flex: 1,
    backgroundColor: Colors.Tertiary,
    alignItems: 'center',
    padding: 2,
  },
});
