import "./App.css";
import Home from "./component/Home";
import { ApolloProvider } from "@apollo/client";
import client from "./apolloCLient/apolloClient";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Home />
      </div>
    </ApolloProvider>
  );
}

export default App;
