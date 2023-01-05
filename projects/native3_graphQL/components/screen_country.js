import { FlatList } from "react-native";
// appolo
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../gql/queries";

import Fetching from "./message_fetching";
import Error from "./message_error";
import Separator from "./seperator";

import CountryItem from "./item_country";

export default function CountryScreen() {
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  if (loading) return <Fetching />;
  if (error) return <Error error={error} />;
  return (
    <FlatList
      data={data.countries}
      renderItem={({ item }) => <CountryItem country={item} />}
      keyExtractor={(item, index) => index}
      ItemSeparatorComponent={Separator}
    />
  );
}
