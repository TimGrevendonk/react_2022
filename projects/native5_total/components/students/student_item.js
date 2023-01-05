import { Text, Pressable, StyleSheet } from "react-native";

export default function StudentItem({ student, onPress }) {
  return (
    <Pressable style={styles.container} onPress={() => onPress(student)}>
      <Text style={styles.circle}>
        {student.lastname.charAt(0).toUpperCase()}
      </Text>
      <Text style={styles.name}>
        {student.firstname} {student.lastname}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 8,
    alignContent: "center",
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    color: "white",
    textAlign: "center",
    textAlignVertical: "center",
    fontSize: 20,
    backgroundColor: "tomato",
    marginLeft: 10,
    marginRight: 20,
  },
  name: {
    fontSize: 15,
    height: 50,
    textAlignVertical: "center",
  },
});
