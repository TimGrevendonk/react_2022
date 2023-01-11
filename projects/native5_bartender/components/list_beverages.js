import { FlatList, View, StyleSheet } from "react-native";

import Fetching from "./layout/message_fetching";
import Error from "./layout/message_error";
import Separator from "./layout/seperator";

import BeverageItem from "./beverage_item";
import { useQuery } from "@apollo/client";
import { GET_FILTERED_BEVERAGES } from "../gql/queries";
import { useRecoilState } from "recoil";
import { recoilCategoryState } from "../store";

export default function ListBeverages() {
  const [category, setCategory] = useRecoilState(recoilCategoryState);
  const { data, loading, error } = useQuery(GET_FILTERED_BEVERAGES, {
    variables: { id: category.id },
  });

  if (loading) return <Fetching />;
  if (error) return <Error error={error} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={data.beverages}
        renderItem={({ item }) => <BeverageItem beverage={item} />}
        keyExtractor={(item, index) => index}
        ItemSeparatorComponent={Separator}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
});
