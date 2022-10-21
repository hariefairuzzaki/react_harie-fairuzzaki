import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://polite-flounder-94.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret": "tLMyPk1rN9VQUiEeDwP5StLDddHm3XTM9Pm7gXpQzkbwLGpvQokYgrE4a7ODfR3P",
  },
  cache: new InMemoryCache(),
});

export default client;
