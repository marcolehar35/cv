// == Import npm
import PropTypes from 'prop-types';
import React from 'react';

import TopPage from 'src/containers/DevWeb/TopPage';
import Skills from 'src/components/DevWeb/Skills';
import Exp from 'src/components/DevWeb/Exp';
import Formation from 'src/components/DevWeb/Formation';
import DevWebStyled from './DevWebStyled';

// == Composant
const DevWeb = ({
  skills,
  experiences,
  titleSkills,
  titleExp,
  learning,
  titleFormation,
}) => (
    <DevWebStyled>
      <TopPage />
      <main>
        <div className="width50">
          <Exp experiences={experiences} titleExp={titleExp} /> <Formation learning={learning} titleFormation={titleFormation} />
        </div>

        <Skills skills={skills} titleSkills={titleSkills} />

      </main>
    </DevWebStyled>
  );

DevWeb.propTypes = {
  skills: PropTypes.array.isRequired,
  experiences: PropTypes.array.isRequired,
  learning: PropTypes.array.isRequired,
  titleSkills: PropTypes.string.isRequired,
  titleExp: PropTypes.string.isRequired,
  titleFormation: PropTypes.string.isRequired,
};


// == Export
export default DevWeb;
