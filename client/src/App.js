import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import Todo from './components/Todo';

const client = new ApolloClient({
  uri: 'http://localhost:3001/graphql',
  cache: new InMemoryCache()
});

const App = () => {  
  return (
   <ApolloProvider client={client}>
     <Todo />
   </ApolloProvider>
  );
}

export default App;
