import { View, StyleSheet } from 'react-native'

import ListCategories from './list_categories';
import ListBeverages from './list_beverages';

export default function BeveragesScreen() {

  return (
    <View style={styles.container}>
      <ListCategories />
      <ListBeverages />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    backgroundColor: 'white'
  },
});