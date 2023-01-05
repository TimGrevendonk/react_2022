import { View } from "react-native";

export function FixedDimensions() {
  return (
    <View>
      <View
        style={{
          flex: 1,
          width: 50,
          height: 50,
          backgroundColor: "powderblue",
        }}
      />
      <View
        style={{
          flex: 2,
          width: 100,
          height: 100,
          backgroundColor: "skyblue",
        }}
      />
      <View
        style={{
          flex: 3,
          width: 150,
          height: 150,
          backgroundColor: "steelblue",
        }}
      />
    </View>
  );
}

export function FlexDimensions() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ flex: 1, backgroundColor: "powderblue" }} />
      <View style={{ flex: 2, backgroundColor: "skyblue" }} />
      <View style={{ flex: 3, backgroundColor: "steelblue" }} />
    </View>
  );
}

export function PercentageDimensions() {
  return (
    <View style={{ height: "100%" }}>
      <View
        style={{
          height: "15%",
          backgroundColor: "powderblue",
        }}
      />
      <View
        style={{
          width: "66%",
          height: "35%",
          backgroundColor: "skyblue",
        }}
      />
      <View
        style={{
          width: "33%",
          height: "50%",
          backgroundColor: "steelblue",
        }}
      />
    </View>
  );
}
