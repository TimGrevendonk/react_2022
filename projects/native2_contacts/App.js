import { StyleSheet, View } from "react-native";
import { useEffect } from "react";

import ContactForm from "./components/contact_form";

import ContactsDB from "./contacts_db";

export default function App() {
  useEffect(() => {
    // ContactsDB.initDb(); // comment after first time
  }, []);

  return (
    <View style={styles.container}>
      <ContactForm />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
