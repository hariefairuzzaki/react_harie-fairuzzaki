import { useMutation } from "@apollo/client";
import { InsertPassenger } from "../graphql/mutations";

export default function useInsertData() {
  const [insertPassenger, { loading: insertLoading }] = useMutation(InsertPassenger);
  return {
    insertPassenger,
    insertLoading,
  };
}
