// == Import npm
import React from 'react';

import TopPage from 'src/containers/DevWeb/TopPage';
import Skills from 'src/components/DevWeb/Skills';
import Exp from 'src/components/DevWeb/Exp';
import DevWebStyled from './DevWebStyled';

// == Composant
const DevWeb = () => (
  <DevWebStyled>
    <TopPage />
    <main>
      <Exp />
      <Skills />
    </main>
  </DevWebStyled>
);


// == Export
export default DevWeb;
