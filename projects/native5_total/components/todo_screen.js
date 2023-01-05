import { StyleSheet, Text, View } from 'react-native';

export default function TodoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.space}>TO DO</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  space: {
    margin: 5
  },
});