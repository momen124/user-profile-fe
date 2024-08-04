import { gql } from "@apollo/client";

export const UPDATE_USER_BASIC_INFO = gql`
  mutation UpdateUserBasicInfo($id: ID!, $input: UpdateUserInput!) {
    updateUserBasicInfo(id: $id, input: $input) {
      id
      firstName
      fatherName
      grandfatherName
      familyName
      nationalId {
        idNumber
        expiryDate
      }
      nationalities {
        countryId
      }
      maritalStatus {
        id
        name
      }
      dependants
      email
      phone
      emergencyContactName
      emergencyContactPhone
      address
      drivingLicenseNumber
      drivingLicenseExpiry
      militaryStatus {
        name
      }
    }
  }
`;
