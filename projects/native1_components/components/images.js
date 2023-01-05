import { TouchableOpacity, StyleSheet, View, Image } from "react-native";

export default function Images() {
  function handleOnPress() {
    let i = 0;
    for (let k = 0; k < 10; k++) {
      // Debug in (PC) terminal.
      console.log(i);
      i = i + 1;
    }
    // Debug on phone.
    alert(i);
  }

  return (
    <View style={styles.container}>
      {/* always use require with images, for static images. */}
      <Image
        source={require("../images/react-logo.png")}
        style={styles.smalllogo}
      />
      {/* Clickable image */}
      <TouchableOpacity onPress={handleOnPress}>
        <Image
          source={require("../images/react-logo.png")}
          style={styles.biglogo}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
  },
  smalllogo: {
    width: 150,
    height: 150,
  },
  biglogo: {
    width: 300,
    height: 300,
  },
});
