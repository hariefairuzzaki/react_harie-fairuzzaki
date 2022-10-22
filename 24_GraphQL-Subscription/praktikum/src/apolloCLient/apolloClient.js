import { ApolloClient, InMemoryCache } from "@apollo/client";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const httpLink = new HttpLink({
  uri: "https://polite-flounder-94.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret": "tLMyPk1rN9VQUiEeDwP5StLDddHm3XTM9Pm7gXpQzkbwLGpvQokYgrE4a7ODfR3P",
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "ws://polite-flounder-94.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret": "tLMyPk1rN9VQUiEeDwP5StLDddHm3XTM9Pm7gXpQzkbwLGpvQokYgrE4a7ODfR3P",
      },
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
