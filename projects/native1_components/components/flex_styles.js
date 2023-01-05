import { StyleSheet, View } from "react-native";

export default function FlexStyles() {
  return (
    <View style={styles.container}>
      <View style={styles.powderblue} />
      <View style={styles.skyblue} />
      <View style={styles.steelblue} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    // flexDirection: "row-reverse",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "stretch",
  },
  powderblue: {
    width: 60,
    height: 60,
    // flex: 1,
    // flexDirection: "column",
    flexDirection: "row",
    // height: 60,
    backgroundColor: "powderblue",
  },
  skyblue: {
    width: 60,
    height: 60,
    backgroundColor: "skyblue",
  },
  steelblue: {
    width: 60,
    height: 60,
    backgroundColor: "steelblue",
  },
});
