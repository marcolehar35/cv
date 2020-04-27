// == Import npm
import PropTypes from 'prop-types';
import React from 'react';

import CardFormation from 'src/components/DevWeb/Formation/FormationCard';
import FormationStyled from './FormationStyled';

// == Composant
const Formation = ({ learning, titleFormation }) => (
  <FormationStyled>
    <h2> {titleFormation} </h2>

    {learning.map((formation) => (<CardFormation key={learning.id} {...formation} />))}
  </FormationStyled>
);

Formation.propTypes = {
  learning: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      period: PropTypes.number.isRequired,
      place: PropTypes.string.isRequired,
    }),
  ).isRequired,
  titleFormation: PropTypes.string.isRequired,
};


// == DevWebort
export default Formation;
