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
    <h1> Que la programmation soit avec vous ! <ThumbsUp /> </h1>
  </TopPageStyled>
);


// == Export
export default TopPage;
