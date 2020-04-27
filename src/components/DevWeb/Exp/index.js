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
  experiences: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      period: PropTypes.string.isRequired,
      place: PropTypes.string.isRequired,
    }),
  ).isRequired,
  titleExp: PropTypes.string.isRequired,
};


// == DevWebort
export default Exp;
