import { StyleSheet, View, TextInput, Text } from "react-native";
import { useState, useEffect } from "react";

import call from "react-native-phone-call";
import { Picker } from "@react-native-picker/picker";

import Buttons from "./buttons";
import ContactsDB from "../contacts_db";

export default function ContactForm() {
  const [index, setIndex] = useState(0); // index of current contact
  const [contacts, setContacts] = useState([]); // all contacts
  const [categories, setCategories] = useState([]); // all categories

  // Alt way to write a fucntion with the ES6 functionality automatically implemented (such as this.)
  const getContacts = async () => {
    console.log("[debug] rerendered contacts");

    const result = await ContactsDB.getContacts();
    setContacts(result);
  };

  async function getCategories() {
    const result = await ContactsDB.getCategories();
    setCategories(result);
  }

  function handleNameChange(value) {
    // update name in contacts, do not mutate array!
    // console.log("[debug] before", contacts);
    // console.log("[debug] the contact", contacts[index]);
    // console.log("[debug] the contact spreaded", { ...contacts[index] });
    const newContactList = [
      ...contacts.slice(0, index),
      // ! take the index of the (spreded inside curly brackets) contact and change value.
      {
        ...contacts[index],
        name: value,
      },
      ...contacts.slice(index + 1),
    ];
    // console.log("[debug] after", newContactList);
    console.log("[debug name] the contact (after)", newContactList[index]);
    setContacts(newContactList);
  }

  function handleCategoryidChange(value) {
    // update category in contacts, do not mutate array!
    const newContactList = [
      ...contacts.slice(0, index),
      // ! take the index of the (spreded inside curly brackets) contact and change value.
      {
        ...contacts[index],
        categoryid: value,
      },
      ...contacts.slice(index + 1),
    ];
    console.log("[debug category] the contact (after)", newContactList[index]);
    setContacts(newContactList);
  }

  function handleTelChange(value) {
    // update tel in contacts, do not mutate array!
    const newContactList = [
      ...contacts.slice(0, index),
      // ! take the index of the (spreded inside curly brackets) contact and change value.
      {
        ...contacts[index],
        tel: value,
      },
      ...contacts.slice(index + 1),
    ];
    console.log("[debug tel] the contact (after)", newContactList[index]);
    setContacts(newContactList);
  }

  function handlePrevious() {
    // scroll to previous contact (if not first), use index
    if (index !== 0) {
      setIndex(index - 1);
    }
  }

  function handlePhone() {
    // make a call to contact
    const args = {
      number: contacts[index].tel,
      prompt: true,
    };
    call(args).catch(console.error);
  }

  function handleNext() {
    // scroll to next contact (if any left), use index (lengt is -1 because we use index count from 0)
    if (index != contacts.length - 1) {
      setIndex(index + 1);
    }
  }

  async function handleAdd() {
    // insert a new empty contact in db
    await ContactsDB.insertContact({
      categortyid: 1,
      name: "insert, name",
      tel: "",
    });
    getContacts();
  }

  function handleUpdate() {
    // update current contact in db
    console.log("[debug] update", contacts[index]);
    ContactsDB.updateContact(contacts[index]);
  }

  async function handleDelete() {
    // delete current contact from db, need to get the id of the current contact to delete.
    console.log("[debug] delete", contacts[index]);
    console.log("[debug] index", index);

    await ContactsDB.deleteContact(contacts[index].id);
    setIndex(0);
    getContacts();
  }

  useEffect(() => {
    // read all contacts and categories
    getContacts();
    getCategories();
    setIndex(0);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.titletext}>My Contacts</Text>
      </View>
      {contacts.length == 0 && (
        <View style={styles.content}>
          <Text style={styles.titletext}>No contacts...</Text>
        </View>
      )}
      {contacts.length != 0 && (
        <View style={styles.content}>
          <Text style={styles.text}>Name</Text>
          <TextInput
            onChangeText={handleNameChange}
            style={styles.input}
            value={contacts[index].name}
          />
          <Text style={styles.text}>Category</Text>
          <View style={{ borderColor: "gray", borderWidth: 0.5 }}>
            <Picker
              selectedValue={contacts[index].categoryid}
              onValueChange={handleCategoryidChange}
              style={styles.input}
            >
              {categories.map((category) => (
                <Picker.Item
                  key={category.id}
                  label={category.name.toUpperCase()}
                  value={category.id}
                />
              ))}
            </Picker>
          </View>
          <Text style={styles.text}>Phone</Text>
          <TextInput
            onChangeText={handleTelChange}
            style={styles.input}
            value={contacts[index].tel}
            keyboardType="numeric"
          />
        </View>
      )}
      <View style={styles.buttons}>
        <Buttons
          handlePrevious={handlePrevious}
          handlePhone={handlePhone}
          handleNext={handleNext}
          handleAdd={handleAdd}
          handleUpdate={handleUpdate}
          handleDelete={handleDelete}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
  },
  input: {
    borderWidth: 0.5,
    borderColor: "gray",
    paddingHorizontal: 10,
    padding: 10,
  },
  text: {
    marginBottom: 5,
    marginTop: 10,
    marginLeft: 10,
    fontWeight: "bold",
  },
  title: {
    flex: 2,
    justifyContent: "center",
  },
  titletext: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    flex: 4,
    justifyContent: "center",
  },
  buttons: {
    flex: 3,
    justifyContent: "center",
  },
});
