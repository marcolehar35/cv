// == Import npm
import React from 'react';
import { ThumbsUp } from 'react-feather';

import avatarDrawn from 'src/assets/images/avatarDrawn.png';
import nuage from 'src/assets/images/nuage.webp';
import TopPageStyled from './TopPageStyled';
// == Composant
const TopPage = () => (
  <TopPageStyled>
    <img src={nuage} alt="" className="nuage-1" />
    <img src={avatarDrawn} alt="Marc Lehartel" id="avatar" />
    <img src={nuage} alt="" className="nuage-2" />
    <p id="title"> <strong>Marc Lehartel</strong></p>
    <h1> Que la programmation soit avec nous ! <ThumbsUp /> </h1>
    <div className="pixelart-to-css" />
  </TopPageStyled>
);


// == Export
export default TopPage;
