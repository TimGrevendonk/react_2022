import { View, Text, StyleSheet } from "react-native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import BeveragesScreen from "./components/beverages_screen";
import OrderScreen from "./components/order_screen";
import { RecoilRoot } from "recoil";

import configData from "./config/graphql.json";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createTheme, ThemeProvider } from "@rneui/themed";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const theme = createTheme({
  lightColors: {
    primary: "firebrick",
  },
  darkColors: {
    primary: "#000",
  },
});

const client = new ApolloClient({
  uri: configData.qlendpoint,
  headers: {
    "x-hasura-admin-secret": configData.qlkey,
  },
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    // --- added recoilRoot, appoloProvider, and themeProvider ---
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <NavigationContainer>
            {/* <View style={styles.dummy}>
            <Text>you can get rid of this</Text>
          </View> */}
            <Tab.Navigator
              screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;

                  switch (route.name) {
                    case "Beverages":
                      iconName = focused ? "md-beer" : "md-beer-outline";
                      break;
                    case "Order a drink":
                      iconName = focused
                        ? "hand-right-sharp"
                        : "hand-right-outline";
                      break;
                  }

                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: "firebrick",
                tabBarInactiveTintColor: "gray",
              })}
            >
              <Tab.Screen name="Beverages" component={BeveragesScreen} />
              <Tab.Screen name="Order a drink" component={OrderScreen} />
            </Tab.Navigator>
          </NavigationContainer>
        </ApolloProvider>
      </ThemeProvider>
    </RecoilRoot>
  );
}

const styles = StyleSheet.create({
  dummy: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
