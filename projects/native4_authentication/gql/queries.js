import { gql } from "@apollo/client";

export const GET_CONTINENTS = gql`
  query GetContinents {
    continents {
      id
      code
      name
    }
  }
`;

export const GET_USER_COUNTRIES = gql`
  query GetCountries($uid: String) {
    visits(where: { uid: { _eq: $uid } }) {
      uid
      country {
        name
        capital
        emoji
        continent {
          name
        }
      }
    }
  }
`;

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries(order_by: { name: asc }) {
      name
      capital
      emoji
      continent {
        name
      }
    }
  }
`;

// data is aliased because sectionist wants the name to be "data".
export const GET_CONTINENTS_COUNTRIES = gql`
  query GetContinentsCountries {
    continents {
      id
      code
      name
      data: countries {
        code
        name
        capital
        emoji
        continent {
          name
        }
      }
    }
  }
`;

export const GET_CONTINENTS_SEARCH = gql`
  query GetContinentsSearch {
    continents {
      id
      code
      name
    }
  }
`;

export const GET_FILTERED_COUNTRIES = gql`
  query getFilteredCountries($search: String) {
    countries(where: { name: { _like: $search } }, order_by: { name: asc }) {
      name
      capital
      emoji
      continent {
        name
      }
    }
  }
`;
