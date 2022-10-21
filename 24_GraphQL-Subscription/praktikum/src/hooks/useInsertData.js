import { useMutation } from "@apollo/client";
import { InsertPassenger } from "../graphql/mutations";
import { RetrievePassenger } from "../graphql/queries";

export default function useInsertData() {
  const [insertPassenger, { loading: insertLoading }] = useMutation(InsertPassenger, {
    refetchQueries: [RetrievePassenger],
  });
  return {
    insertPassenger,
    insertLoading,
  };
}
