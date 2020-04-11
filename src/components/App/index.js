// == Import npm
import React from 'react';

// == Import
import Header from 'src/containers/Header';
import './reset.css';
import TopPage from 'src/components/TopPage';
import Skills from 'src/components/Skills';
import Exp from 'src/components/Exp';
import AppStyled from './AppStyled';

// == Composant
const App = () => (
  <AppStyled>
    <Header />
    <TopPage />
    <main>
      <Exp />
      <Skills />
    </main>
  </AppStyled>
);

// == Export
export default App;
