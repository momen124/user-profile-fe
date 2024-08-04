import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';
import UserProfile from './pages/UserProfile';
import FinancialInfo from './pages/FinancialInfo';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Ensure this is your correct GraphQL endpoint
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>
          <Route path="/user-profile" element={<UserProfile />} />
          <Route path="/financial-info" element={<FinancialInfo />} />
        </Routes>
      </Router>
    </ApolloProvider>
  );
};

export default App;
