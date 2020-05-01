// == Import npm
import PropTypes from 'prop-types';
import React from 'react';

import TopPage from 'src/containers/TopPage';
import Portfolio from 'src/components/global/Portfolio';
import PortFolioStyled from './PortFolioStyled';

// == Composant
const PortFolioPage = ({
  titlePortfolio,
  titleComPortfolio,
  projets,
  projetsCom,
  titleTopPage,
}) => (
  <PortFolioStyled>
    <TopPage titleTopPage={titleTopPage} />
    <main>
      <Portfolio projets={projets} titlePortfolio={titlePortfolio} />
      <Portfolio projets={projetsCom} titlePortfolio={titleComPortfolio} />
    </main>
  </PortFolioStyled>
);

PortFolioPage.propTypes = {
  projets: PropTypes.array.isRequired,
  projetsCom: PropTypes.array.isRequired,
  titleTopPage: PropTypes.string.isRequired,
  titlePortfolio: PropTypes.string.isRequired,
  titleComPortfolio: PropTypes.string.isRequired,
};


// == Export
export default PortFolioPage;
