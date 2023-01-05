import { View, Text, FlatList } from "react-native";

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
  useQuery,
} from "@apollo/client";

import configData from "./config.json";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./components/screen_home";
import CountryScreen from "./components/screen_country";
import ContinentScreen from "./components/screen_continent";
import SearchScreen from "./components/search_screen";

import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const client = new ApolloClient({
  uri: configData.qlendpoint,
  headers: {
    "x-hasura-admin-secret": configData.qlkey,
  },
  cache: new InMemoryCache(),
});

const GET_CONTINENTS = gql`
  query GetContinents {
    continents {
      id
      code
      name
    }
  }
`;

function ListContinents() {
  const { data, loading } = useQuery(GET_CONTINENTS);

  if (loading) return <Text>Loading...</Text>;

  return (
    <FlatList
      data={data.continents}
      renderItem={({ item }) => <Text>{item.name}</Text>}
      keyExtractor={(item, index) => index}
    />
  );
}

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              switch (route.name) {
                case "Home":
                  iconName = focused ? "home-sharp" : "home-outline";
                  break;
                case "Countries":
                  iconName = focused ? "flag-sharp" : "flag-outline";
                  break;
                case "Continents":
                  iconName = focused ? "earth" : "earth-outline";
                  break;
                case "Search":
                  iconName = focused
                    ? "search-circle"
                    : "search-circle-outline";
                  break;
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "tomato",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Countries" component={CountryScreen} />
          <Tab.Screen name="Continents" component={ContinentScreen} />
          <Tab.Screen name="Search" component={SearchScreen} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}
