// == Import npm
import PropTypes from 'prop-types';
import React from 'react';

import CardSkills from 'src/components/global/Skills/CardSkills';
import SkillsStyled from './SkillsStyled';

// == Composant
const Skills = ({ skills, titleSkills }) => (
  <SkillsStyled>
    <h2> {titleSkills} </h2>
    {skills.map((skill) => (<CardSkills key={skills.id} {...skill} />))}
  </SkillsStyled>
);

Skills.propTypes = {
  skills: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      titleSkill: PropTypes.string.isRequired,
      underSkills: PropTypes.array.isRequired,
    }),
  ).isRequired,
  titleSkills: PropTypes.string.isRequired,
};


// == Skillsort
export default Skills;
