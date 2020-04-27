// == Import npm
import PropTypes from 'prop-types';
import React from 'react';

import Projet from 'src/components/DevWeb/Portfolio/Projet';
import PortfolioStyled from './PortfolioStyled';

// == Composant
const Portfolio = ({ projets, titlePortfolio }) => (
  <PortfolioStyled>
    <h2> {titlePortfolio} </h2>
    <div className="wrap">
      {projets.map((projet) => (<Projet key={projets.id} {...projet} />))}
    </div>
  </PortfolioStyled>
);

Portfolio.propTypes = {
  projets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      gifSiteWeb: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    }),
  ).isRequired,
  titlePortfolio: PropTypes.string.isRequired,
};


// == Portfolioort
export default Portfolio;
