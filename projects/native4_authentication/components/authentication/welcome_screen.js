import { FlatList, StyleSheet, Text, View } from "react-native";
import { Button } from "@rneui/themed";
import { getAuth, signOut } from "firebase/auth";
import "../../config/firebase";
import { useAuthentication } from "../../hooks/use_authentication";
import { FAB } from "react-native-elements";
import { useQuery } from "@apollo/client";
import { GET_USER_COUNTRIES } from "../../gql/queries";
import Fetching from "../fatlist/message_fetching";
import Error from "../fatlist/message_error";
import CountryItem from "../fatlist/item_country";
import Separator from "../fatlist/seperator";
const auth = getAuth();

export default function WelcomeScreen() {
  const { user } = useAuthentication();

  const { data, loading, error } = useQuery(GET_USER_COUNTRIES, {
    variables: { uid: user?.uid },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.space}>Welcome {user?.email}!</Text>
      <Text style={styles.space}>UID: {user?.uid}</Text>
      {data && (
        <>
          <View>
            <FlatList
              data={data.visits}
              renderItem={({ item }) => <CountryItem country={item.country} />}
              keyExtractor={(item, index) => index}
              ItemSeparatorComponent={Separator}
            />
          </View>
          {/* <Text>{data.visits[0].country.name}</Text> */}
        </>
      )}
      {loading && (
        <View>
          <Fetching></Fetching>
        </View>
      )}
      {error && (
        <View>
          <Error error={error} />
        </View>
      )}
      <FAB
        icon={{ name: "logout", color: "white" }}
        size="large"
        placement="right"
        onPress={() => signOut(auth)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    alignContent: "center",
    backgroundColor: "#fff",
  },
  space: {
    margin: 5,
  },
});
