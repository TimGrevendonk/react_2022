import { useEffect, useState } from "react";
import { Text, StyleSheet, View, Image, TouchableOpacity } from "react-native";
import { countries } from "../data";

// Game function:
function Game({ ...props }) {
  const allCountryFlags = countries;
  const [flags, setFlags] = useState([]);
  const [country, setCountry] = useState("");
  const [score, setScore] = useState(0);
  const [plays, setPlays] = useState(0);

  useEffect(() => {
    nextCountry();
  }, []);

  function checkAnswer(pressedFlag) {
    if (pressedFlag.name == country.name) {
      setScore(score + 1);
    }
    setPlays(plays + 1);
    nextCountry();
  }

  async function nextCountry() {
    const the3Countries = await pick3RandomCountries(allCountryFlags);
    setFlags(the3Countries);
    setCountry(pickRandomElement(the3Countries));
  }

  function pick3RandomCountries(allCountryFlags) {
    const allCountries = [...allCountryFlags];
    let the3Countries = [];

    for (let i = 0; i < 3; i++) {
      let randomPosition = Math.floor(allCountries.length * Math.random());
      let randomCountry = allCountries.splice(randomPosition, 1);
      the3Countries.push(...randomCountry);
    }

    return the3Countries;
  }

  function pickRandomElement(elementArray) {
    return elementArray[Math.floor(Math.random() * elementArray.length)];
  }

  const style = StyleSheet.create({
    // border: '1px solid red',
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "#000",
      alignItems: "center",
      color: "white",
    },
    smallText: {
      fontSize: 10,
      color: "white",
      margin: 20,
    },
    mediumText: {
      fontSize: 15,
      color: "white",
    },
    largeText: {
      fontSize: 40,
      color: "white",
      margin: 30,
    },
    image: {
      width: 100,
      height: 100,
      margin: 10,
    },
  });

  return (
    <View style={style.container}>
      <Text style={[style.smallText, { flex: 1 }]}>Choose the right flag!</Text>
      <Text style={style.largeText}>{country.name}</Text>
      <View style={{ flexDirection: "row" }}>
        {flags.map((flag) => {
          return (
            <TouchableOpacity onPress={() => checkAnswer(flag)}>
              <Image style={style.image} key={flag.name} source={flag.image} />
            </TouchableOpacity>
          );
        })}
      </View>
      <Text style={[style.largeText, { flex: 1 }]}>score: {score}</Text>
      <Text style={[style.mediumText, { flex: 1 }]}>plays: {plays}</Text>
    </View>
  );
}

export default Game;
