// == Import npm
import PropTypes from 'prop-types';
import React from 'react';
import ProjetStyled from './ProjetStyled';

// == Composant
const Projet = ({ name, gifSiteWeb }) => {
  return (
    <ProjetStyled className="width40">
      <h3><strong>{name}</strong></h3>
      <img src={gifSiteWeb} alt="" />

    </ProjetStyled>
  );
};

Projet.propTypes = {
  gifSiteWeb: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};


// == Projetort
export default Projet;
