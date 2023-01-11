import { gql } from "@apollo/client";

export const GET_CATEGORIES = gql`
  query GET_CATEGORIES {
    categories(order_by: { name: asc }) {
      id
      name
    }
  }
`;

export const GET_FILTERED_BEVERAGES = gql`
  query GET_FILTERED_BEVERAGES($id: Int) {
    beverages(order_by: { name: asc }, where: { category_id: { _eq: $id } }) {
      id
      name
      price
      plus18
      category_id
    }
  }
`;
