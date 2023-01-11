import { View, StyleSheet } from "react-native";
import { FAB } from "react-native-elements";
import { useRecoilState } from "recoil";
import { recoilOrderlistState } from "../store";

import ListOrder from "./list_order";

export default function OrderScreen() {
  const [order, setOrder] = useRecoilState(recoilOrderlistState);

  return (
    <View style={styles.container}>
      <ListOrder />
      <FAB
        icon={{ name: "delete", color: "white" }}
        size="large"
        placement="right"
        color="firebrick"
        onPress={() => setOrder([])}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "white",
  },
});
