import { StatusBar, StyleSheet, View } from "react-native";
import LotsOfStyles from "./components/lots_of_styles";
import {
  FixedDimensions,
  FlexDimensions,
  PercentageDimensions,
} from "./components/height_and_width";
import FlexStyles from "./components/flex_styles";
import Buttons from "./components/buttons";
import UserInput from "./components/user_input";
import ScrollStudents from "./components/scroll_students";
import Images from "./components/images";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <PercentageDimensions /> */}
      {/* <FlexStyles /> */}
      {/* <LotsOfStyles /> */}
      {/* <Buttons /> */}
      {/* <UserInput></UserInput> */}
      {/* <ScrollStudents></ScrollStudents> */}
      <Images></Images>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center", // horizontal alignment
    // justifyContent: "flex-end", // vertical alignment at bottom
  },
});
