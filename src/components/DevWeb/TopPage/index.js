// == Import npm
import PropTypes from 'prop-types';
import React from 'react';
import { ThumbsUp } from 'react-feather';

import avatarDrawn from 'src/assets/images/avatarDrawn.png';
import nuage from 'src/assets/images/nuage2.png';
import addLineBreaks from 'src/utili/utilitaire';
import TopPageStyled from './TopPageStyled';

const dataHobbies = [
  'Bonjour, vous allez bien ? :)',
  'Vous êtes sur chrome et vous souhaitez voir mes emojis :eye: ? \n Chromoji fait des miracles :heart_eyes: !',
  'Ce week end, je vais faire un peu de musculation :weight_lifter:. \n Bon, je débute... :muscle:.',
  "Ce soir, on se fait une partie de :joker: poker :joker: :grinning_face_with_smiling_eyes:. \n  Ne t'inquiète pas, il m'arrive de perdre :dizzy_face:.",
  "On dit que le S..:underage: c'est bon, mais que le poker dure plus longtemps :winking_face_with_tongue:.",
  "Tous les ans, j'aime participer à la maraude :helmet_with_white_cross: :handshake: pour les SDF avec des amis. \n  Tu souhaites participer ?",
  "J'apprécie les jeux de réflexions :thinking_face: : les échecs :chess_pawn:, les jeux de plateau :game_die:, les jeux en ligne :trackball:, les jeux vidéos :video_game:, Code Combat, Coding Game... \n  Lequel tu préfères ?", "J'aime suivre l'actualité économique :chart_with_upwards_trend:, les innovations technologiques :bulb: et les découvertes scientifiques.",
  "Tu savais que l'on va certainement réussir à dompter l'énergie des étoiles dans les prochaines décénies :rocket: ?",
];


// == Composant
const TopPage = ({
  changeTooltipHobbyAction,
  hobby,
  count,
  changeCountAction,
}) => {
  const mouse = () => {
    const hobbyOrdered = dataHobbies[count];
    changeTooltipHobbyAction(hobbyOrdered);
    let setCount = count + 1;
    if (setCount < dataHobbies.length) {
      changeCountAction(setCount);
    }
    else {
      setCount = 0;
      changeCountAction(setCount);
    }
  };

  return (
    <TopPageStyled>
      <img src={nuage} alt="" className="nuage-1" />
      <span className="tooltip" onMouseEnter={mouse}>
        <img src={avatarDrawn} alt="Marc Lehartel" id="avatar" />
        <span className="tooltiptext"> <div className="triangle" /> {addLineBreaks(hobby)} </span>
      </span>
      <img src={nuage} alt="" className="nuage-2" />
      <p id="title"> <strong>Marc Lehartel</strong></p>
      <h1> Que la programmation soit avec nous ! <ThumbsUp /> </h1>
      <div className="pixelart-to-css" />
    </TopPageStyled>
  );
};

TopPage.propTypes = {
  changeCountAction: PropTypes.func.isRequired,
  changeTooltipHobbyAction: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
  hobby: PropTypes.string.isRequired,
};


// == Export
export default TopPage;
