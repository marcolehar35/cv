// == Import npm
import React from 'react';

// == Import
import Header from 'src/containers/Header';
import './reset.css';
import TopPage from 'src/components/TopPage';
import AppStyled from './AppStyled';

// == Composant
const App = () => (
  <AppStyled>
    <Header />
    <TopPage />
  </AppStyled>
);

// == Export
export default App;
