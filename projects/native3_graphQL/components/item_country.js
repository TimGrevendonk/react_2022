import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function CountryItem({ country }) {
  return (
    <Pressable style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.name}>{country.name} <Text style={styles.small}>({country.continent.name})</Text></Text>
        <Text style={styles.capital}>{country.capital}</Text>
      </View>
      <Text style={styles.emoji}>{country.emoji}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 8,
  },
  column: {
    flex: 1,
    justifyContent: 'center',
  },
  emoji: {
    fontSize: 50,
    textAlign: 'center',
    marginRight: 5,
    justifyContent: 'center',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  capital: {
    fontSize: 15,
  },
  small: {
    fontSize: 10,
    fontWeight: 'normal',
  },
});