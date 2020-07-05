import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo"; //gets data from apollo client and injects it to application / react component

//components
import BookList from "./components/BookList";

//apollo client setup - registering query endpoint to this application
const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="main">
        <h1>Ninja's Reading List</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}

export default App;
