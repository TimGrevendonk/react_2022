import axios from "axios";
import { Text, View, StyleSheet } from "react-native";

import configData from "../config.json";

const weatherBaseUrl = configData.weatherapi + "api/weather";

function action() {
  return new Promise((resolve, reject) => {
    // do some action, i.e. a database transaction
    setTimeout(() => resolve("RESULT"), 3000);
    // setTimeout(() => reject("ERROR"), 3000);
  });
}

function version1() {
  console.log("before action");

  var promise = action();

  promise.then(
    function (response) {
      console.log("Response from the endpoint: " + response);
    },
    function (error) {
      console.log("An error occurred: " + error);
    }
  );

  console.log("after action");
}

// the promise is not filled with data when the code tries to read it (need await).
// function version2() {
async function version2() {
  console.log("before action");

  let response = await action();
  // let response = action();

  console.log("Response from the endpoint");
  console.log(response);

  console.log("after action");
}

// Try catch will give the error on catch. with promise awaiting.
async function version3() {
  console.log("before action");

  try {
    let response = await action();
    console.log("Response from the endpoint: " + response);
  } catch (error) {
    console.log("An error occurred: " + error);
  }

  console.log("after action");
}

function weatherapi() {
  console.log("before action");

  var promise = axios.get(weatherBaseUrl + "?type=error&city=Antwerp");
  promise.then(
    function (response) {
      console.log("Response from the endpoint: " + response);
    },
    function (error) {
      console.log("An error occurred: " + error);
    }
  );

  console.log("after action");
}

export default function Promises() {
  // weatherapi();
  // version1();
  // version2();
  version3();

  return (
    <View style={styles.container}>
      <Text style={styles.center}>What are promises?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  center: {
    textAlign: "center",
  },
});
