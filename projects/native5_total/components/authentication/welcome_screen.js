import { StyleSheet, Text, View } from 'react-native';
import { Button } from '@rneui/themed';

import { getAuth, signOut } from 'firebase/auth';

import '../../config/firebase';

import { useAuthentication } from '../../hooks/use_authentication';

const auth = getAuth();

export default function WelcomeScreen() {
  const { user } = useAuthentication();
  return (
    <View style={styles.container}>
      <Text style={styles.space}>Welcome {user?.email}!</Text>
      <Text style={styles.space}>UID: {user?.uid}</Text>
      <Button title="Sign out" onPress={() => signOut(auth)} />
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
  }
});