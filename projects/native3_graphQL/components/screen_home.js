import { FlatList } from "react-native";
// appolo queries.
import { useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "../gql/queries";

import Fetching from "./message_fetching";
import Error from "./message_error";
import Separator from "./seperator";

import ContinentItem from "./item_continent";

export default function HomeScreen() {
  const { data, loading, error } = useQuery(GET_CONTINENTS);

  if (loading) return <Fetching />;

  if (error) return <Error error={error} />;

  return (
    <FlatList
      data={data.continents}
      renderItem={({ item }) => <ContinentItem continent={item} />}
      // the key for each item.
      keyExtractor={(item, index) => index}
      ItemSeparatorComponent={Separator}
    />
  );
}
