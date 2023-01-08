// import { useFocusEffect } from "@react-navigation/native";
// FAB == floating action button.
import { StatusBar } from "expo-status-bar";
import { FAB } from "react-native-elements";

import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Text,
} from "react-native";

import { useState, useEffect } from "react";
import { useFocusEffect } from "@react-navigation/native";

import UsaDB from "../usa_db";

export default function ListPresidents({ navigation }) {
  const [data, setData] = useState([]);

  async function getPresidents() {
    const result = await UsaDB.getPresidents();
    setData(result);
  }

  useEffect(() => {
    //getPresidents();
  }, []);

  // load the component when changes happend and the element is already on screen.
  useFocusEffect(() => {
    getPresidents();
  });

  function handleOnPress(id) {
    console.log("[debug onpress]");

    navigation.navigate("Details", { id: id });
  }

  function handleInsert() {
    console.log("[debug insert]");
    navigation.navigate("Details", { id: 0 });
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.item}
            onPress={() => handleOnPress(item.id)}
          >
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.term}>
              {item.term} ({item.party})
            </Text>
          </TouchableOpacity>
        )}
      />
      <FAB
        icon={{ name: "add", color: "white" }}
        size="large"
        placement="right"
        color="#206587"
        onPress={handleInsert}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  item: {
    backgroundColor: "#cceeff",
    padding: 20,
    marginVertical: 4,
    marginHorizontal: 8,
  },
  name: {
    fontSize: 20,
  },
  term: {
    fontSize: 10,
  },
});
