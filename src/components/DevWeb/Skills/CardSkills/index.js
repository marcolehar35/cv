// == Import npm
import PropTypes from 'prop-types';
import React from 'react';

import { TagCloud } from 'react-tagcloud';
import CardSkillsStyled from './CardSkillsStyled';

// == Composant
const CardSkills = ({ titleSkill, underSkills }) => {
  /* CSS:
@keyframes blinker {
  50% { opacity: 0.0; }
}
*/

  // custom renderer is function which has tag, computed font size and
  // color as arguments, and returns react component which represents tag
  const customRenderer = (tag, size, color) => (
    <span
      key={tag.underSkill}
      style={{
        animation: 'blinker 3s linear infinite',
        animationDelay: `${Math.random() * 2}s`,
        fontSize: `${size / 2}em`,
        'border-radius': '16px',
        border: `2px solid ${color}`,
        margin: '5px',
        padding: '10px',
        display: 'inline-block',
        color: '#1985A1',
      }}
    >
      {tag.underSkill}
    </span>
  );
  return (
    <CardSkillsStyled>
      <h3><strong>{titleSkill}</strong></h3>
      <TagCloud
        id="tag-cloud"
        minSize={3}
        maxSize={5}
        tags={underSkills}
        renderer={customRenderer}
      />

    </CardSkillsStyled>
  );
};

CardSkills.propTypes = {
  titleSkill: PropTypes.string.isRequired,
  underSkills: PropTypes.array.isRequired,
};


// == CardSkillsort
export default CardSkills;
