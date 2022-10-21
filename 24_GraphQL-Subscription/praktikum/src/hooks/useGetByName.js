import { useLazyQuery } from "@apollo/client";
import { GetPassengerByName } from "../graphql/queries";

export default function useGetByName() {
  const [getData, { loading: byNameLoading, error: byNameError, data: passengerByName }] =
    useLazyQuery(GetPassengerByName);
  return {
    getData,
    byNameLoading,
    byNameError,
    passengerByName,
  };
}
