import { Text, Pressable, StyleSheet } from 'react-native';

export default function ContinentItem({ continent }) {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.name}>{continent.name}</Text>
      <Text style={styles.small}>{continent.code}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  small: {
    fontSize: 10,
    fontWeight: 'normal',
  },
});