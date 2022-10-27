import { gql } from "@apollo/client";

export const InsertPassenger = gql`
  mutation MyMutation($nama: String, $umur: Int, $jenisKelamin: String) {
    insert_passenger(objects: { nama: $nama, umur: $umur, jenisKelamin: $jenisKelamin }) {
      returning {
        id
        nama
        umur
        jenisKelamin
      }
    }
  }
`;

export const UpdatePassenger = gql`
  mutation MyMutation($id: Int, $nama: String, $umur: Int, $jenisKelamin: String) {
    update_passenger(where: { id: { _eq: $id } }, _set: { nama: $nama, umur: $umur, jenisKelamin: $jenisKelamin }) {
      returning {
        id
        nama
        umur
        jenisKelamin
      }
    }
  }
`;

export const DeletePassenger = gql`
  mutation MyMutation($id: Int!) {
    delete_passenger_by_pk(id: $id) {
      id
      nama
      umur
      jenisKelamin
    }
  }
`;
