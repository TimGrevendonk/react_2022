import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Game from "./components/game";

export default function App() {
  return <Game style={styles.container}></Game>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
