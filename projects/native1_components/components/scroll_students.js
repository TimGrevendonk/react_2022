import { TouchableOpacity, StyleSheet, View, Text } from "react-native";
import { ScrollView } from "react-native-web";

const students = [
  { name: "Ben", id: 1 },
  { name: "Susan", id: 2 },
  { name: "Robert", id: 3 },
  { name: "Mary", id: 4 },
  { name: "Daniel", id: 5 },
  { name: "Laura", id: 6 },
  { name: "John", id: 7 },
  { name: "Debra", id: 8 },
  { name: "Aron", id: 9 },
  { name: "Ann", id: 10 },
  { name: "Steve", id: 11 },
  { name: "Olivia", id: 12 },
];

export default function ScrollStudents() {
  function handleOnPress(name) {
    alert(`You clicked ${name}`);
  }

  return (
    <View style={styles.container}>
      <ScrollView>
        {students.map((student) => (
          <View key={student.id} style={styles.item}>
            <TouchableOpacity
              style={styles.button}
              //  ! function handeling with onPress
              onPress={() => handleOnPress(student.name)}
            >
              <Text style={styles.name}>{student.name}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    margin: 5,
  },
  button: {
    height: 100,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#64D9FC",
  },
  name: {
    color: "white",
    fontSize: 20,
  },
});
