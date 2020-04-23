// == Import npm
import PropTypes from 'prop-types';
import React from 'react';

import addLineBreaks from 'src/utili/utilitaire';
import CardExpStyled from './CardExpStyled';
// == Composant
const CardExp = ({
  name,
  place,
  period,
  description,
}) => (
  <CardExpStyled>
    <h4>{period}</h4>
    <h3><strong> {name} </strong> {place} </h3>
    <p> {addLineBreaks(description)}</p>
  </CardExpStyled>
);

CardExp.propTypes = {
  description: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  place: PropTypes.string.isRequired,
};


// == CardExport
export default CardExp;
