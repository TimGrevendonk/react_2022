import { gql } from "@apollo/client";

export const GET_STUDENTS = gql`
  query GetStudents {
    students(order_by: { lastname: asc }) {
      id
      firstname
      lastname
    }
  }
`;

export const GET_STUDENT = gql`
  query GetStudent($id: Int!) {
    students_by_pk(id: $id) {
      id
      firstname
      lastname
    }
  }
`;

export const UPDATE_STUDENT = gql`
  mutation UpdateStudent($id: Int!, $firstname: String!, $lastname: String!) {
    update_students_by_pk(
      pk_columns: { id: $id }
      _set: { firstname: $firstname, lastname: $lastname }
    ) {
      id
    }
  }
`;

export const DELETE_STUDENT = gql`
  mutation DeleteStudent($id: Int!) {
    delete_students_by_pk(id: $id) {
      id
    }
  }
`;

export const INSERT_STUDENT = gql`
  mutation InsertStudent($firstname: String!, $lastname: String!) {
    insert_students(objects: [{ firstname: $firstname, lastname: $lastname }]) {
      returning {
        id
      }
    }
  }
`;
