// == Import npm
import React from 'react';

// == Import
import Header from 'src/containers/Header';
import './reset.css';
import TopPage from 'src/components/TopPage';
import Exp from 'src/components/Exp';
import AppStyled from './AppStyled';

// == Composant
const App = () => (
  <AppStyled>
    <Header />
    <TopPage />
    <Exp />
  </AppStyled>
);

// == Export
export default App;
