import { View, StyleSheet, Text, Pressable } from "react-native";
import { Button } from "@rneui/themed";

import Fetching from "./layout/message_fetching";
import Error from "./layout/message_error";
import Separator from "./layout/seperator";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../gql/queries";
import { useRecoilState } from "recoil";
import { recoilCategoryState } from "../store";

export default function ListCategories({ navigation }) {
  const { data, loading, error } = useQuery(GET_CATEGORIES);
  const [category, setCategory] = useRecoilState(recoilCategoryState);

  if (loading) return <Fetching />;
  if (error) return <Error error={error} />;

  return (
    <>
      <View style={styles.container}>
        {data.categories.map((category) => {
          return (
            <Button
              title={category.name}
              buttonStyle={styles.button}
              onPress={() => setCategory(category)}
            />
          );
        })}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    marginTop: 15,
    margin: 5,
  },
  name: {
    color: "white",
    fontSize: 20,
  },
});
