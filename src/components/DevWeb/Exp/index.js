// == Import npm
import PropTypes from 'prop-types';
import React from 'react';

import CardExp from 'src/components/DevWeb/Exp/CardExp';
import ExpStyled from './ExpStyled';

// == Composant
const Exp = ({ experiences, titleExp }) => (
  <ExpStyled>
    <h2> {titleExp} </h2>

    {experiences.map((exp) => (<CardExp key={experiences.id} {...exp} />))}
  </ExpStyled>
);

Exp.propTypes = {
  experiences: PropTypes.shape({
    id: PropTypes.number.isRequired,
    map: PropTypes.func.isRequired,
  }).isRequired,
  titleExp: PropTypes.string.isRequired,
};


// == DevWebort
export default Exp;
