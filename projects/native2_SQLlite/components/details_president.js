import {
  TouchableOpacity,
  View,
  Text,
  TextInput,
  StyleSheet,
} from "react-native";
import { useState, useEffect } from "react";
import UsaDB from "../usa_db";

export default function DetailsPresident({ route, navigation }) {
  // { id } fishes out the id parameter out of the object.
  // alternative: route.id gives only the id not the whole opject.
  const { id } = route.params;

  const [president, setPresident] = useState({ id: 0, name: "", term: "" });

  function handleChangeName(value) {
    setPresident({ ...president, name: value });
  }

  function handleChangeTerm(value) {
    setPresident({ ...president, term: value });
  }

  async function getPresidentById(id) {
    const result = await UsaDB.getPresidentById(id);
    setPresident(result);
  }

  function handleOnPress() {
    updatePresident(president);
    navigation.goBack();
  }
  async function updatePresident(president) {
    await UsaDB.updatePresident(president);
  }

  function handleDelete() {
    deletePresident(president.id);
    navigation.goBack();
  }
  async function deletePresident(id) {
    await UsaDB.deletePresident(id);
  }

  function handleInsert() {
    insertPresident(president);
    navigation.goBack();
  }
  async function insertPresident(president) {
    await UsaDB.insertPresident(president);
  }

  useEffect(() => {
    if (id !== 0) {
      getPresidentById(id);
    }
  }, []);

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={handleChangeName}
        style={styles.input}
        value={president.name}
        placeholder="Enter name"
      />
      <TextInput
        onChangeText={handleChangeTerm}
        style={styles.input}
        value={president.term}
        keyboardType="numeric"
        placeholder="Enter term"
      />
      {id !== 0 && (
        <>
          <TouchableOpacity style={styles.button} onPress={handleOnPress}>
            <Text style={styles.name}>Update</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleDelete}>
            <Text style={styles.name}>Delete</Text>
          </TouchableOpacity>
        </>
      )}
      {id === 0 && (
        <>
          <TouchableOpacity style={styles.button} onPress={handleInsert}>
            <Text style={styles.name}>Insert</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  button: {
    backgroundColor: "#cceeff",
    padding: 20,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
  },
  input: {
    marginBottom: 15,
    borderWidth: 0.5,
    padding: 10,
  },
});
