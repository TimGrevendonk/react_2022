import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Student Administration</Text>
      <Button title="Sign in" buttonStyle={styles.button} onPress={() => navigation.navigate('Sign In')} />
      <Button title="Sign up" type="outline" buttonStyle={styles.button} onPress={() => navigation.navigate('Sign Up')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 25,
    fontSize: 20
  },
  button: {
    margin: 5
  }
});