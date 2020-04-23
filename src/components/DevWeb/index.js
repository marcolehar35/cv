// == Import npm
import PropTypes from 'prop-types';
import React from 'react';

import TopPage from 'src/containers/DevWeb/TopPage';
import Skills from 'src/components/DevWeb/Skills';
import Exp from 'src/components/DevWeb/Exp';
import DevWebStyled from './DevWebStyled';

// == Composant
const DevWeb = ({
  skills,
  experiences,
  titleSkills,
  titleExp,
}) => (
  <DevWebStyled>
    <TopPage />
    <main>
      <Exp experiences={experiences} titleExp={titleExp} />
      <Skills skills={skills} titleSkills={titleSkills} />
    </main>
  </DevWebStyled>
);

DevWeb.propTypes = {
  skills: PropTypes.array.isRequired,
  experiences: PropTypes.array.isRequired,
  titleSkills: PropTypes.string.isRequired,
  titleExp: PropTypes.string.isRequired,
};


// == Export
export default DevWeb;
