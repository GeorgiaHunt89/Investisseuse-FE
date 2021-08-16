import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const SIGNUP = gql`
  mutation signup($firstName: String!, $lastName: String!, $email: String!, $password: String!, $role: Boolean!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, role: $role) {
      token
      user {
        _id
        firstName
        lastName
        email
        role
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $role: Boolean!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, role: $role) {
      token
      user {
        _id
        firstName
        lastName
        email
        role
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($firstName: String!, $lastName: String!, $email: String!, $password: String!, $role: Boolean!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password, role: $role) {
      token
      user {
        _id
        firstName
        lastName
        email
        role
      }
    }
  }
`;

export const ADD_BUSINESS = gql`
  mutation addBusiness(
    $companyName: String!
    $description: String!
    $website: String!
    $logo: String!
    $sharePrice: Int!
    $shareQuantity: Int!
    $pitchDeck: String!
    $category: String!
    $owner: User!
  ) {
    addBusiness(
      companyName: $companyName
      description: $description
      website: $website
      logo: $logo
      sharePrice: $sharePrice
      shareQuantity: $shareQuantity
      pitchDeck: $pitchDeck
      category: $category
    )
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

export const UPDATE_BUSINESS = gql`
  mutation updateBusiness(
    $companyName: String!
    $description: String!
    $website: String!
    $logo: String!
    $sharePrice: Int!
    $shareQuantity: Int!
    $pitchDeck: String!
    $category: String!
    $owner: User!
  ) {
    addBusiness(
      companyName: $companyName
      description: $description
      website: $website
      logo: $logo
      sharePrice: $sharePrice
      shareQuantity: $shareQuantity
      pitchDeck: $pitchDeck
      category: $category
    )
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

// export const ADD_INVESTMENT = gql`
//   mutation addInvestment( $shareNumber: Int!) {
//     shareNumber
//     investor {
//       _id
//       firstName
//       lastName
//       email
//     }
//     business {
//       _id
//       companyName
//     }
//   }
//   }
//   `;

// export const UPDATE_INVESTMENT = gql`
// mutation updateInvestment( $shareNumber: Int!){
//   shareNumber
//   investor{
//     _id
//     firstName
//     lastName
//     email
//   }
//   business {
//     _id
//     companyName
//   }
// }
// }
// `;
