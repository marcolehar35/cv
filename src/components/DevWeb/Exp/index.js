// == Import npm
import React from 'react';

import CardExp from 'src/components/DevWeb/Exp/CardExp';
import ExpStyled from './ExpStyled';

// == Composant
const Exp = () => (
  <ExpStyled>
    <h2> Expériences </h2>
    <CardExp />
  </ExpStyled>
);


// == DevWebort
export default Exp;
