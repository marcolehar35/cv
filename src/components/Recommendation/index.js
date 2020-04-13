// == Import npm
import React from 'react';

// == Import
import Carole from 'src/assets/images/Carole-LOISEL-SOYER.jpeg';
import RecommendationStyled from './RecommendationStyled';
// == Composant
const Recommendation = () => (
  <RecommendationStyled>
    <div className="card-name">
      <img src={Carole} alt="Carole LOISEL-Soyer" />
      <a href="https://www.linkedin.com/in/carole-loisel-soyer">
        <em>Carole LOISEL-Soyer  <br />Responsable de la communication  </em>
      </a>
    </div>
    <div id="triangle"> </div>
    <p> "Marc a été parcticulièrement apprécié par l'ensemble des collègues et par la direction de notre école, pour sa bonne humeure et sa capacité à s'adapter au groupe"</p>

  </RecommendationStyled>
);

// == Export
export default Recommendation;
