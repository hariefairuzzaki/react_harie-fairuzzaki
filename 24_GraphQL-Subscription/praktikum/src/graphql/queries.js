import { gql } from "@apollo/client";

export const RetrievePassenger = gql`
  query MyQuery {
    passenger {
      id
      nama
      umur
      jenisKelamin
    }
  }
`;

export const GetPassengerByName = gql`
  query MyQuery($nama: String) {
    passenger(where: { nama: { _eq: $nama } }) {
      id
      jenisKelamin
      nama
      umur
    }
  }
`;
