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
  Formationeriences: PropTypes.shape({
    id: PropTypes.number.isRequired,
    map: PropTypes.func.isRequired,
  }).isRequired,
  titleFormation: PropTypes.string.isRequired,
};


// == DevWebort
export default Formation;
