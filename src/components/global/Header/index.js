// == Import npm
import PropTypes from 'prop-types';
import React from 'react';

// == Import
import avatar from 'src/assets/images/avatar.jpg';
import {
  MessageSquare,
  Code,
  Linkedin,
  Smile,
} from 'react-feather';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import HeaderStyled from './HeaderStyled';

// == Composant
const Header = (
  {
    activCssFolioPage,
    activCssDevWebPage,
    activCssCommunicationPage,
    selectedFolioPageAction,
    selectedDevWebPageAction,
    selectedComPageAction,
  },
) => {
  const classCssFolioPage = classNames({
    activ: activCssFolioPage,
  });
  const classCssDevWebPage = classNames({
    activ: activCssDevWebPage,
  });
  const classCssCommunicationPage = classNames({
    activ: activCssCommunicationPage,
  });
  return (
    <HeaderStyled>
      <img src={avatar} alt="Marc Lehartel" />
      <nav>
        <ul>

          <li className={classCssFolioPage} onClick={() => selectedFolioPageAction()}>
            <Link to="/portfolio">
              <Smile className="icons" /> Mon portFolio
            </Link>
          </li>

          <li className={classCssDevWebPage} onClick={() => selectedDevWebPageAction()}>
            <Link to="/developpeur-web">
              <Code className="icons" /> Développeur web
            </Link>
          </li>

          <li className={classCssCommunicationPage} onClick={() => selectedComPageAction()}>
            <Link to="/charge-de-communication">
              <MessageSquare className="icons" /> Chargé de communication
            </Link>
          </li>

          <li>
            <a href="http://linkedin.com/in/marc-lehartel/"> <Linkedin className="icons" /> Linkedin</a>
          </li>

        </ul>
      </nav>
    </HeaderStyled>
  );
};

Header.propTypes = {
  activCssCommunicationPage: PropTypes.bool.isRequired,
  activCssFolioPage: PropTypes.bool.isRequired,
  activCssContactPage: PropTypes.bool.isRequired,
  activCssDevWebPage: PropTypes.bool.isRequired,
  selectedComPageAction: PropTypes.func.isRequired,
  selectedContactPageAction: PropTypes.func.isRequired,
  selectedDevWebPageAction: PropTypes.func.isRequired,
  selectedFolioPageAction: PropTypes.func.isRequired,
};

// == Export
export default Header;
