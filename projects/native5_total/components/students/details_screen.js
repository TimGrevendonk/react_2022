import { View, TextInput, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";

import { useState, useEffect } from "react";

import Fetching from "../layout/message_fetching";
import Error from "../layout/message_error";

import { useQuery, useMutation } from "@apollo/client";
import {
  GET_STUDENTS,
  GET_STUDENT,
  INSERT_STUDENT,
  UPDATE_STUDENT,
  DELETE_STUDENT,
} from "../../gql/students/queries";

export default function StudentsDetailsScreen({ route, navigation }) {
  // gets the route id (react does that for you).
  const { id } = route.params;
  const [student, setStudent] = useState({
    id: 0,
    firstname: "",
    lastname: "",
  });
  // does a query with the id of the router parameter. hook cannot be in an if statement! use skip instead.
  const { data, loading, error } = useQuery(GET_STUDENT, {
    variables: { id },
    // skip if the id is O.
    skip: id === 0,
  });

  // not the way, requery on every insert, update, delete (because data is chached).
  const [insertStudent] = useMutation(INSERT_STUDENT, {
    refetchQueries: [{ query: GET_STUDENTS }],
  });

  const [updateStudent] = useMutation(UPDATE_STUDENT, {
    refetchQueries: [{ query: GET_STUDENTS }],
  });

  const [deleteStudent] = useMutation(DELETE_STUDENT, {
    refetchQueries: [{ query: GET_STUDENTS }],
  });

  useEffect(() => {
    if (data) {
      setStudent(data.students_by_pk);
    }
    // dependancy that will check on only if the data has changed.
  }, [data]);

  function handleInsert() {
    insertStudent({
      variables: { firstname: student.firstname, lastname: student.lastname },
    });
    navigation.goBack();
  }

  function handleUpdate() {
    updateStudent({
      variables: {
        id: student.id,
        firstname: student.firstname,
        lastname: student.lastname,
      },
    });
    navigation.goBack();
  }

  function handleDelete() {
    deleteStudent({ variables: { id: student.id } });
    navigation.goBack();
  }

  if (loading) return <Fetching />;
  if (error) return <Error error={error} />;

  function handleChangeFirstname(value) {
    setStudent({ ...student, firstname: value });
  }

  function handleChangeLastname(value) {
    setStudent({ ...student, lastname: value });
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="First name"
        onChangeText={handleChangeFirstname}
        style={styles.input}
        value={student.firstname}
      />
      <TextInput
        placeholder="Last name"
        onChangeText={handleChangeLastname}
        style={styles.input}
        value={student.lastname}
      />
      {id !== 0 && (
        <>
          <Button
            title="Update"
            buttonStyle={styles.button}
            onPress={handleUpdate}
          />
          <Button
            title="Delete"
            type="outline"
            buttonStyle={styles.button}
            onPress={handleDelete}
          />
        </>
      )}
      {id === 0 && (
        <Button
          title="Add"
          buttonStyle={styles.button}
          onPress={handleInsert}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 15,
  },
  button: {
    marginBottom: 15,
  },
  input: {
    marginBottom: 15,
    borderWidth: 0.5,
    padding: 10,
  },
});
