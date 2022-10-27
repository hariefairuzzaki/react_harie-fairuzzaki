import { useMutation } from "@apollo/client";
import { UpdatePassenger } from "../graphql/mutations";

export default function useUpdateData() {
  const [updatePassenger] = useMutation(UpdatePassenger);
  return {
    updatePassenger,
  };
}
