// == Import npm
import React from 'react';

// == Import
import avatar from 'src/assets/images/avatar.jpg';
import {
  MessageSquare,
  Code,
  MessageCircle,
  Mail,
} from 'react-feather';
import { Link } from 'react-router-dom';
import HeaderStyled from './HeaderStyled';

// == Composant
const Header = () => (
  <HeaderStyled>
    <img src={avatar} alt="Marc Lehartel" />
    <nav>
      <ul>
        <li> <Link to="/developpeurweb"><Code className="icons" /> Développeur web</Link></li>
        <li><Link to="/chargedecommunication"><MessageSquare className="icons" /> Chargé de communication</Link></li>
        <li><Link to="/communitymanager"><MessageCircle className="icons" /> Community Manager</Link></li>
        <li><Link to="/contact"> <Mail className="icons" /> Contact</Link></li>
      </ul>
    </nav>
  </HeaderStyled>
);

// == Export
export default Header;
