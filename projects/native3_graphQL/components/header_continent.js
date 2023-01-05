import { View, Text, StyleSheet } from 'react-native'

export default function ContinentHeader({ continent }) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{continent.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  name: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'tomato',
  },
});