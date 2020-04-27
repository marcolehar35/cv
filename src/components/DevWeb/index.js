// == Import npm
import PropTypes from 'prop-types';
import React from 'react';

import TopPage from 'src/containers/DevWeb/TopPage';
import Skills from 'src/components/DevWeb/Skills';
import Exp from 'src/components/DevWeb/Exp';
import Formation from 'src/components/DevWeb/Formation';
import Portfolio from 'src/components/DevWeb/Portfolio';
import DevWebStyled from './DevWebStyled';

// == Composant
const DevWeb = ({
  skills,
  experiences,
  titleSkills,
  titleExp,
  learning,
  titleFormation,
  titlePortfolio,
  projets,
}) => (
    <DevWebStyled>
      <TopPage />
      <main>
        <div className="width50">
          <Exp experiences={experiences} titleExp={titleExp} /> <Formation learning={learning} titleFormation={titleFormation} />
        </div>

        <Skills skills={skills} titleSkills={titleSkills} />
        <Portfolio projets={projets} titlePortfolio={titlePortfolio} />

      </main>
    </DevWebStyled>
  );

DevWeb.propTypes = {
  skills: PropTypes.array.isRequired,
  experiences: PropTypes.array.isRequired,
  learning: PropTypes.array.isRequired,
  projets: PropTypes.array.isRequired,
  titleSkills: PropTypes.string.isRequired,
  titleExp: PropTypes.string.isRequired,
  titleFormation: PropTypes.string.isRequired,
  titlePortfolio: PropTypes.string.isRequired,
};


// == Export
export default DevWeb;
