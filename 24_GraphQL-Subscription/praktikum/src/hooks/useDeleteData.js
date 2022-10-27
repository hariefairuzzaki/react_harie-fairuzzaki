import { useMutation } from "@apollo/client";
import { DeletePassenger } from "../graphql/mutations";

export default function useDeleteData() {
  const [deletePassenger, { loading: deleteLoading }] = useMutation(DeletePassenger);
  return {
    deletePassenger,
    deleteLoading,
  };
}
