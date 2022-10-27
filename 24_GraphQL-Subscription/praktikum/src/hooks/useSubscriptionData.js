import { useSubscription } from "@apollo/client";
import { SubscriptionPassenger } from "../graphql/subscriptions";

export default function useSubscriptionData() {
  const {
    data: subscriptionData,
    loading: loadingPassenger,
    error: errorPassenger,
  } = useSubscription(SubscriptionPassenger);

  return {
    subscriptionData,
    loadingPassenger,
    errorPassenger,
  };
}
