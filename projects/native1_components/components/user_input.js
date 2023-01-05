import { StyleSheet, TextInput, View, Button } from "react-native";
import { useState } from "react";

export default function UserInput() {
  const [firstname, setFirstname] = useState("");
  const [zipcode, setZipcode] = useState("");

  function handleOnPress() {
    alert("Hello " + firstname + " " + zipcode);
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter your firstname"
        onChangeText={setFirstname}
        style={styles.input}
        value={firstname}
      />
      <TextInput
        // ! keyboard types
        keyboardType="numeric"
        placeholder="Enter your zipcode"
        onChangeText={setZipcode}
        style={styles.input}
        value={zipcode}
      />
      <Button title="Show" onPress={handleOnPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 25,
    justifyContent: "flex-start",
  },
  input: {
    marginBottom: 15,
    borderWidth: 0.5,
    padding: 10,
  },
});
