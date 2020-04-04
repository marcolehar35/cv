// == Import npm<Code /> Développeur web</a>
import React from 'react';

// == Import
import avatar from 'src/assets/images/avatar.jpg';
import {
  MessageSquare,
  Code,
  MessageCircle,
  Mail,
} from 'react-feather';
import HeaderStyled from './HeaderStyled';

// == Composant
const Header = () => (
  <HeaderStyled>
    <img src={avatar} alt="Marc Lehartel" />
    <nav>
      <a href="">  <Code className="icons" /> Développeur web</a>
      <a href=""> <MessageSquare className="icons" /> Chargé de communication</a>
      <a href=""> <MessageCircle className="icons" /> Community Manager</a>
      <a href=""> <Mail className="icons" /> Contact</a>
    </nav>
  </HeaderStyled>
);

// == Export
export default Header;
