// == Import npm
import PropTypes from 'prop-types';
import React from 'react';

import TopPage from 'src/containers/TopPage';
import Skills from 'src/components/global/Skills';
import Exp from 'src/components/global/Exp';
import Formation from 'src/components/global/Formation';
import Portfolio from 'src/components/global/Portfolio';
import ChargeComStyled from './ChargeComStyled';

// == Composant
const ChargeComb = ({
  skills,
  experiences,
  titleSkills,
  titleExp,
  learning,
  titleFormation,
  titlePortfolio,
  projets,
  titleTopPage,
}) => (
  <ChargeComStyled>
    <TopPage titleTopPage={titleTopPage} />
    <main>
      <div className="width50">
        <Exp experiences={experiences} titleExp={titleExp} />
      </div>
      <div className="width50">
        <Skills skills={skills} titleSkills={titleSkills} />
        <Formation learning={learning} titleFormation={titleFormation} />
      </div>

      <Portfolio projets={projets} titlePortfolio={titlePortfolio} />

    </main>
  </ChargeComStyled>
);

ChargeComb.propTypes = {
  skills: PropTypes.array.isRequired,
  experiences: PropTypes.array.isRequired,
  learning: PropTypes.array.isRequired,
  projets: PropTypes.array.isRequired,
  titleTopPage: PropTypes.string.isRequired,
  titleSkills: PropTypes.string.isRequired,
  titleExp: PropTypes.string.isRequired,
  titleFormation: PropTypes.string.isRequired,
  titlePortfolio: PropTypes.string.isRequired,
};


// == Export
export default ChargeComb;
