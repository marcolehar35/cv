// == Import npm
import PropTypes from 'prop-types';
import React from 'react';

import TopPage from 'src/containers/DevWeb/TopPage';
import Skills from 'src/components/DevWeb/Skills';
import Exp from 'src/components/DevWeb/Exp';
import DevWebStyled from './DevWebStyled';

// == Composant
const DevWeb = ({ skills }) => (
  <DevWebStyled>
    <TopPage />
    <main>
      <Exp />
      <Skills skills={skills} />
    </main>
  </DevWebStyled>
);

DevWeb.propTypes = {
  skills: PropTypes.array.isRequired,
};


// == Export
export default DevWeb;
