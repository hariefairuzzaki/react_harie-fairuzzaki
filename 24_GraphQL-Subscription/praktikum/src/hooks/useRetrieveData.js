import { useQuery } from "@apollo/client";
import { RetrievePassenger } from "../graphql/queries";

export default function useRetrieveData() {
  const { loading: passengerLoading, error: passengerError, data: passengerData } = useQuery(RetrievePassenger);

  return { passengerLoading, passengerError, passengerData };
}
