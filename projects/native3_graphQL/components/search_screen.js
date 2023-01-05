import { TextInput, View, StyleSheet } from 'react-native';

import { useState } from 'react';

export default function SearchScreen() {
  const [searchFilter, setSearchFilter] = useState('');
  
  function handleChangeFilter(value) {
    setSearchFilter(value);
  }

  return (
    <View>
      <TextInput
        placeholder='-- enter some letters --'
        onChangeText={handleChangeFilter}
        style={styles.input}
        value={searchFilter}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: 'black',
    borderWidth: 0.5,
    padding: 10,
    margin: 10,
  },
});