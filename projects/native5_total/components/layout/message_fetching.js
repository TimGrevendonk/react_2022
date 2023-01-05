import { Text, StyleSheet  } from 'react-native';

export default function Fetching() {
  return (
    <Text style={styles.loading}>Fetching data...</Text>
  );
};

const styles = StyleSheet.create({
  loading: {
    fontSize: 15,
    padding: 8
  },
});