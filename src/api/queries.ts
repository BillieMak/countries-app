import { gql } from '@apollo/client/core'

export const GET_COUNTRIES = gql`
  query {
    countries {
      name
      capital
      code
      emoji
      currencies
      languages {
        name
      }
      states {
        name
      }
      continent {
        name
      }
    }
  }
`

export const GET_BY_CONTINENTS = gql`
  query GetConuntriesByContinents($contientCodes: [String!]!) {
    continents(filter: { code: { in: $contientCodes } }) {
      countries {
        name
        capital
        code
        emoji
        currencies
        languages {
          name
        }
        states {
          name
        }
        continent {
          name
        }
      }
    }
  }
`

export const GET_COUNTRIES_BY_NAME = gql`
  query getCountriesByName($searhTerm: String!) {
    countries(filter: { name: { regex: $searhTerm } }) {
      name
      capital
      code
      emoji
      currencies
      states {
        name
      }
      languages {
        name
      }
      continent {
        name
      }
    }
  }
`

export const GET_COUNTRIES_BY_NAME_AND_COUNTRY = gql`
  query getCountriesByNameAndCountry($searhTerm: String!, $contientCodes: [String!]!) {
    countries(filter: { name: { regex: $searhTerm }, continent: { in: $contientCodes } }) {
      code
      name
      capital
      code
      emoji
      currencies
      states {
        name
      }
      languages {
        name
      }
      currencies
      continent {
        name
      }
    }
  }
`
