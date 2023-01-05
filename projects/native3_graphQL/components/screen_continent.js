import { SectionList } from "react-native";

// appolo
import { useQuery } from "@apollo/client";
import { GET_CONTINENTS_COUNTRIES } from "../gql/queries";

import Fetching from "./message_fetching";
import Error from "./message_error";
import Separator from "./seperator";

import CountryItem from "./item_country";
import ContinentHeader from "./header_continent";

export default function ContinentScreen() {
  const { data, loading, error } = useQuery(GET_CONTINENTS_COUNTRIES);

  if (loading) return <Fetching />;
  if (error) return <Error error={error} />;

  return (
    <SectionList
      // sectionlist is gebruikt voor groeperingen.
      sections={data.continents}
      keyExtractor={(item, index) => item + index}
      // renderimte is done for each item. (countryitem).
      renderItem={({ item }) => <CountryItem country={item} />}
      ItemSeparatorComponent={Separator}
      // done for each header.
      renderSectionHeader={({ section }) => (
        <ContinentHeader continent={section} />
      )}
    />
  );
}
