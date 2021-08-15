import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      email
      role
    }
  }
`;

export const QUERY_BUSINESS = gql`
  {
    business {
      _id
      companyName
      description
      website
      logo
      sharePrice
      shareQuantity
      pitchDeck
      category
      owner {
        _id
        firstName
      }
    }
  }
`;
