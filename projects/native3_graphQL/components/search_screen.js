import { TextInput, View, StyleSheet, FlatList } from "react-native";

import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_FILTERED_COUNTRIES } from "../gql/queries";
import Fetching from "./message_fetching";
import Error from "./message_error";
import Separator from "./seperator";
import CountryItem from "./item_country";

export default function SearchScreen() {
  const [searchFilter, setSearchFilter] = useState("");
  // lazyLoad only triggers when specifically done, not on page render.
  const [getFilteredCountries, { loading, error, data }] = useLazyQuery(
    GET_FILTERED_COUNTRIES,
    // the query works with a _like and thr % must be concatenated in the variable.
    { variables: { search: searchFilter + "%" } }
  );

  function handleChangeFilter(value) {
    setSearchFilter(value);
    getFilteredCountries();
  }
  // the error and loading is shown below the textinput, on return it will ovewrite the input field.

  return (
    <>
      <View>
        <TextInput
          placeholder="-- enter some letters --"
          onChangeText={handleChangeFilter}
          style={styles.input}
          value={searchFilter}
        />
      </View>

      {data && (
        <View>
          <FlatList
            data={data.countries}
            renderItem={({ item }) => <CountryItem country={item} />}
            keyExtractor={(item, index) => index}
            ItemSeparatorComponent={Separator}
          />
        </View>
      )}

      {loading && (
        <View>
          <Fetching />
        </View>
      )}
      {error && (
        <View>
          <Error error={error} />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: "black",
    borderWidth: 0.5,
    padding: 10,
    margin: 10,
  },
});
