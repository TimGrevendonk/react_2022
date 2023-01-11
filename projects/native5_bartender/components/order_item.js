import { Image, View, Text, StyleSheet } from "react-native";

import { beverages } from "../images/beverages";

export default function OrderItem({ item }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={
          beverages.find((beverage) => beverage.name === item.drink.name).image
        }
      />
      <View style={styles.column}>
        <Text style={styles.name}>
          {item.drink.name}{" "}
          {[...Array(item.count)].map(() => {
            return "|";
          })}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 8,
  },
  column: {
    justifyContent: "center",
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 5,
  },
});
