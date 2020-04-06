// == Import npm
import PropTypes from "prop-types";
import React, { useState } from 'react';

// == Import
import avatar from 'src/assets/images/avatar.jpg';
import {
  MessageSquare,
  Code,
  MessageCircle,
  Mail,
} from 'react-feather';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import HeaderStyled from './HeaderStyled';

// == Composant
const Header = (
  {
    activCssDevWebPage,
    activCssCommunicationPage,
    activCssCMPage,
    activCssContactPage,
    selectedDevWebPageAction,
    selectedComPageAction,
    selectedCMPageAction,
    selectedContactPagAction,
  },
) => {
  const classCssDevWebPage = classNames({
    activ: activCssDevWebPage,
  });
  const classCssCommunicationPage = classNames({
    activ: activCssCommunicationPage,
  });
  const classCssCMPage = classNames({
    activ: activCssCMPage,
  });
  const classCssContactPage = classNames({
    activ: activCssContactPage,
  });

  return (
    <HeaderStyled>
      <img src={avatar} alt="Marc Lehartel" />
      <nav>
        <ul>

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

          <li className={classCssCMPage} onClick={() => selectedCMPageAction()}>
            <Link to="/community-manager">
              <MessageCircle className="icons" /> Community Manager
            </Link>
          </li>

          <li className={classCssContactPage} onClick={() => selectedContactPagAction()}>
            <Link to="/contact">
              <Mail className="icons" /> Contact
            </Link>
          </li>

        </ul>
      </nav>
    </HeaderStyled>
  );
};

Header.propTypes = {
  activCssCMPage: PropTypes.bool.isRequired,
  activCssCommunicationPage: PropTypes.bool.isRequired,
  activCssContactPage: PropTypes.bool.isRequired,
  activCssDevWebPage: PropTypes.bool.isRequired,
  selectedCMPageAction: PropTypes.func.isRequired,
  selectedComPageAction: PropTypes.func.isRequired,
  selectedContactPagAction: PropTypes.func.isRequired,
  selectedDevWebPageAction: PropTypes.func.isRequired,
};

// == Export
export default Header;
