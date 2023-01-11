import { View, TextInput, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";

import { useState, useEffect } from "react";

import Fetching from "../layout/message_fetching";
import Error from "../layout/message_error";

import { useQuery, useMutation } from "@apollo/client";
import {
  GET_COURSES,
  GET_COURSE,
  INSERT_COURSE,
  UPDATE_COURSE,
  DELETE_COURSE,
} from "../../gql/courses/queries";

export default function CourseDetailsScreen({ route, navigation }) {
  // gets the route id (react does that for you).
  const { id } = route.params;

  // Controlled component:
  const [course, setCourse] = useState({
    id: 0,
    title: "",
  });

  // --- initial course load (data changes so the useEffect will be triggered) ---
  // does a query with the id of the router parameter. hook cannot be in an if statement! use skip instead.
  const { data, loading, error } = useQuery(GET_COURSE, {
    variables: { id },
    // skip if the id is O.
    skip: id === 0,
  });

  // --- insert ---
  const [insertCourse] = useMutation(INSERT_COURSE, {
    refetchQueries: [{ query: GET_COURSES }],
  });

  function handleInsert() {
    console.log("[debug]", course);

    insertCourse({
      variables: { title: course.title },
    });
    navigation.goBack();
  }

  // --- update ---
  const [updateCourse] = useMutation(UPDATE_COURSE, {
    refetchQueries: [{ query: GET_COURSES }],
  });

  function handleUpdate() {
    updateCourse({
      variables: {
        id: course.id,
        title: course.title,
      },
    });
    navigation.goBack();
  }

  // --- delete ---
  const [deleteCourse] = useMutation(DELETE_COURSE, {
    refetchQueries: [{ query: GET_COURSES }],
  });

  async function handleDelete() {
    try {
      await deleteCourse({ variables: { id: course.id } });
      navigation.goBack();
    } catch (error) {
      console.log("[debug] error", error);
      alert("this course has enrollments");
    }
  }

  // --- set course on any change ---
  useEffect(() => {
    if (data) {
      setCourse(data.courses_by_pk);
      // console.log("[debug]", data.courses_by_pk);
    }
    // dependency that will check on only if the data has changed.
  }, [data]);

  // --- change the input field ---
  function handleChangeTitle(titeValue) {
    setCourse({
      // * Unpack the whole course object.
      ...course,
      // * Change the title to the current value.
      title: titeValue,
    });
  }

  if (loading) return <Fetching />;
  if (error) return <Error error={error} />;

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="title"
        onChangeText={handleChangeTitle}
        style={styles.input}
        value={course.title}
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
