// == Import npm
import PropTypes from 'prop-types';
import React from 'react';
import ProjetStyled from './ProjetStyled';

// == Composant
const Projet = ({ name, projet, link }) => {
  return (
    <ProjetStyled className="width40">
      <h3><strong>{name}</strong></h3>
      <a href={link}> <img src={projet} alt="" /> </a>

    </ProjetStyled>
  );
};

Projet.propTypes = {
  projet: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};


// == Projetort
export default Projet;
