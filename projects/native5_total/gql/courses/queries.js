import { gql } from "@apollo/client";

export const GET_COURSES = gql`
  query GetCourses {
    courses(order_by: { title: asc }) {
      id
      title
    }
  }
`;

export const GET_COURSE = gql`
  query GetCourse($id: Int!) {
    courses_by_pk(id: $id) {
      id
      title
    }
  }
`;

export const UPDATE_COURSE = gql`
  mutation UpdateCourse($id: Int!, $title: String!) {
    update_courses_by_pk(pk_columns: { id: $id }, _set: { title: $title }) {
      id
    }
  }
`;

export const DELETE_COURSE = gql`
  mutation DeleteCourse($id: Int!) {
    delete_courses_by_pk(id: $id) {
      id
    }
  }
`;

export const INSERT_COURSE = gql`
  mutation InsertCourse($title: String!) {
    insert_courses(objects: [{ title: $title }]) {
      returning {
        id
      }
    }
  }
`;
