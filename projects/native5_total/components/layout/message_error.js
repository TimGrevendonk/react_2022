import { Text, StyleSheet  } from 'react-native';

export default function Error({ error }) {
  return (
    <Text style={styles.error}>Error! {error.message}</Text>
  );
};

const styles = StyleSheet.create({
  error: {
    fontSize: 15,
    padding: 8,
    color: 'darkred',
    fontWeight: 'bold'
  },
});