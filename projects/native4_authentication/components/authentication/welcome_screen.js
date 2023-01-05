import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';

export default function WelcomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.space}>Welcome !</Text>
      <Text style={styles.space}>UID: </Text>
      <Button title="Sign out" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  space: {
    margin: 5
  }
});