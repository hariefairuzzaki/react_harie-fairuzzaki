import { useMutation } from "@apollo/client";
import { DeletePassenger } from "../graphql/mutations";
import { RetrievePassenger } from "../graphql/queries";

export default function useDeleteData() {
  const [deletePassenger, { loading: deleteLoading }] = useMutation(DeletePassenger, {
    refetchQueries: [RetrievePassenger],
  });
  return {
    deletePassenger,
    deleteLoading,
  };
}
