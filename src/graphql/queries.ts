import { gql } from '@apollo/client';

export const GET_USER_BASIC_INFO = gql`
  query GetUserBasicInfo($id: Int!) {
    user(id: $id) {
      id
      firstName
      fatherName
      grandfatherName
      familyName
      localizedName {
        firstName
        fatherName
        grandfatherName
        familyName
      }
      nationalId {
        idNumber
        expiryDate
      }
      nationalities {
        country {
          id
          name
        }
        countryId
      }
      maritalStatus {
        id
        name
      }
      dependants
    }
  }
`;
