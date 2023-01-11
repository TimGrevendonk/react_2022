import {
  Image,
  TouchableOpacity,
  View,
  Text,
  Pressable,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { beverages } from "../images/beverages";
import "../images/beverages";
import { FAB } from "react-native-elements";
import { useRecoilState } from "recoil";
import { recoilOrderlistState } from "../store";

export default function BeverageItem({ beverage }) {
  const [order, setOrder] = useRecoilState(recoilOrderlistState);

  function addToOrder() {
    // console.log("[debug] order", order);
    // // if (order.some((obj) => obj.hasOwnProperty(beverage.name))) {
    // if (beverage in order) {
    //   console.log("[debug] adding");
    //   // setOrder([...order, { ...beverage, count: +1 }]);
    //   setOrder([
    //     ...order,
    //     { ...beverage, count: count++ },
    //     // order.map((item) => {
    //     //   if (item.name === beverage) {
    //     //     item.count++;
    //     //   }
    //     //   return item;
    //     // }),
    //   ]);
    // } else {
    //   console.log("[debug] additional");
    //   setOrder([...order, { ...beverage, count: 3 }]);
    // }
    // console.log("[debug] urd", order);

    const index = order.findIndex((drink) => drink.drink === beverage);
    if (index != -1) {
      const count = order[index].count;
      // console.log("[debug] index", index);
      const newList = [
        ...order.slice(0, index),
        {
          drink: beverage,
          count: count + 1,
        },
        ...order.slice(index + 1),
      ];
      setOrder(newList);
    } else {
      const newList = [
        ...order,
        {
          drink: beverage,
          count: 1,
        },
      ];
      setOrder(newList);
    }
  }
  return (
    <Pressable style={styles.container}>
      <Image
        style={styles.image}
        source={beverages.find((drink) => drink.name === beverage.name).image}
      />
      <View style={styles.column}>
        <Text style={styles.name}>
          {beverage.name}{" "}
          <Text style={styles.small}>{beverage.plus18 ? "(18+)" : ""}</Text>
        </Text>
        <Text style={styles.price}>€{beverage.price}</Text>
      </View>
      <FAB
        style={styles.circle}
        icon={{ name: "add", color: "white" }}
        size="large"
        placement="right"
        color="tomato"
        onPress={addToOrder}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    padding: 8,
  },
  column: {
    flex: 1,
    justifyContent: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  price: {
    fontSize: 15,
  },
  small: {
    fontSize: 10,
    fontWeight: "normal",
  },
  image: {
    width: 50,
    height: 50,
    margin: 10,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    backgroundColor: "firebrick",
    justifyContent: "center",
    alignItems: "center",
    margin: 10,
  },
  plus: {
    color: "white",
    textAlign: "center",
    fontSize: 25,
  },
});
