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

export const GET_CONTINENTS_SEARCH = sql`
  guery GetContinentsSearch {
    continents {
      
    }
  }
`;
