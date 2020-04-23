// == Import npm
import PropTypes from "prop-types";
import React from 'react';

import CardSkills from 'src/components/DevWeb/Skills/CardSkills';
import SkillsStyled from './SkillsStyled';

// == Composant
const Skills = ({ skills }) => {

  return (
    <SkillsStyled>
      <h2> Compétences </h2>
      {skills.map((skill) => (<CardSkills key={skills.id} {...skill} />))}
    </SkillsStyled>
  );
};

Skills.propTypes = {
  skills: PropTypes.shape({
    id: PropTypes.number,
    map: PropTypes.func,
  }).isRequired,
};


// == Skillsort
export default Skills;
