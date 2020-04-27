// == Import npm
import PropTypes from 'prop-types';
import React from 'react';

import addLineBreaks from 'src/utili/utilitaire';
import FormationCardStyled from './FormationCardStyled';
// == Composant
const FormationCard = ({
  name,
  place,
  period,
  description,
}) => (
  <FormationCardStyled>
    <h4>{period}</h4>
    <h3><strong> {name} </strong> {place} </h3>
    <p> {addLineBreaks(description)}</p>
  </FormationCardStyled>
);

FormationCard.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  period: PropTypes.number.isRequired,
  place: PropTypes.string.isRequired,
};


// == FormationCardort
export default FormationCard;
