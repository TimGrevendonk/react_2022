import { FlatList, View, StyleSheet } from "react-native";
import { Text } from "react-native-elements";
import { useRecoilState } from "recoil";
import { recoilOrderlistState } from "../store";

import Separator from "./layout/seperator";
import OrderItem from "./order_item";

export default function ListOrder() {
  const [order, setOrder] = useRecoilState(recoilOrderlistState);

  return (
    <View style={styles.container}>
      <FlatList
        data={order}
        renderItem={({ item }) => <OrderItem item={item} />}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={Separator}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    padding: 8,
  },
});
