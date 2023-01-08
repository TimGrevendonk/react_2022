import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { useEffect } from "react";
import UsaDB from "./usa_db";

import ListPresidents from "./components/list_presidents";
import DetailsPresident from "./components/details_president";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Promises from "./components/promises";

function HomeScreen({ navigation }) {
  console.log("[debug home] here");

  return (
    <View style={styles.container}>
      <ListPresidents navigation={navigation} />
    </View>
  );
}
// need route to get parameters from the naviagtion.
function DetailsScreen({ route, navigation }) {
  console.log("[debug details] here");

  return (
    <View style={styles.container}>
      <DetailsPresident route={route} navigation={navigation} />
    </View>
  );
}

// the stack object, to give the routing structure of the programm.
const Stack = createNativeStackNavigator();

console.log("[debug  stack]");

export default function App() {
  useEffect(() => {
    // comment after first run!!!
    // UsaDB.initDb();
  }, []);

  console.log("[debug app] here");

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* if on home screen, use this component. */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // change the title of the default page name( Home => All presidents)
          options={{ title: "All presidents" }}
        />
        {/* if on details screen, use this component. */}
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
