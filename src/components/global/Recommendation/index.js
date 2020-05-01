// == Import npm
import PropTypes from 'prop-types';
import React from 'react';

// == Import

import RecommendationStyled from './RecommendationStyled';
// == Composant
const Recommendation = ({
  img,
  name,
  job,
  recommendationText,
}) => (
  <RecommendationStyled>
    <div className="card-name">
      <img src={img} alt="Carole LOISEL-Soyer" />
      <a href="https://www.linkedin.com/in/carole-loisel-soyer-31a17a105/?originalSubdomain=fr">
        <em>{name}  <br />{job} </em>
      </a>
    </div>
    <div id="triangle"> </div>
    <p> {recommendationText}</p>

  </RecommendationStyled>
);

Recommendation.propTypes = {
  job: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  recommendationText: PropTypes.string.isRequired,
};

// == Export
export default Recommendation;
