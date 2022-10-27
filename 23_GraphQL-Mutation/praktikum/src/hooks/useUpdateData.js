import { useMutation } from "@apollo/client";
import { UpdatePassenger } from "../graphql/mutations";
import { RetrievePassenger } from "../graphql/queries";

export default function useUpdateData() {
  const [updatePassenger] = useMutation(UpdatePassenger, {
    refetchQueries: [RetrievePassenger],
  });
  return {
    updatePassenger,
  };
}
