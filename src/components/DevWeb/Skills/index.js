// == Import npm
import PropTypes from 'prop-types';
import React from 'react';

import CardSkills from 'src/components/DevWeb/Skills/CardSkills';
import SkillsStyled from './SkillsStyled';

// == Composant
const Skills = ({ skills, titleSkills }) => (
  <SkillsStyled>
    <h2> {titleSkills} </h2>
    {skills.map((skill) => (<CardSkills key={skills.id} {...skill} />))}
  </SkillsStyled>
);

Skills.propTypes = {
  skills: PropTypes.shape({
    id: PropTypes.number.isRequired,
    map: PropTypes.func.isRequired,
  }).isRequired,
  titleSkills: PropTypes.string.isRequired,
};


// == Skillsort
export default Skills;
