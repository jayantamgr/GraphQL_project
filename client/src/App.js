import React from 'react';
//components
import BookList from './components/BookList';
import AddBook from  './components/AddBook';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

const client = new ApolloClient({
  uri:'http://localhost:4000/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>My Reading Lists</h1>
        <BookList/>
        <AddBook/>
      </div>
    </ApolloProvider>
  );
}

export default App;
