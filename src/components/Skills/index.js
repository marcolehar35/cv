// == Import npm
import React from 'react';

import { TagCloud } from 'react-tagcloud';
import SkillsStyled from './SkillsStyled';

const data = [
  { value: 'JavaScript', count: 37 },
  { value: 'React & Redux', count: 38 },
  { value: 'React & Hooks', count: 38 },
  { value: 'HTML5', count: 37 },
  { value: 'CSS3', count: 37 },
  { value: 'PHP', count: 36 },
];

// == Composant
const Skills = () => {
  /* CSS:
@keyframes blinker {
  50% { opacity: 0.0; }
}
*/

  // custom renderer is function which has tag, computed font size and
  // color as arguments, and returns react component which represents tag
  const customRenderer = (tag, size, color) => (
    <span
      key={tag.value}
      style={{
        animation: 'blinker 3s linear infinite',
        animationDelay: `${Math.random() * 2}s`,
        fontSize: `${size / 2}em`,
        'border-radius': '1em',
        border: `2px solid ${color}`,
        margin: '5px',
        padding: '10px',
        display: 'inline-block',
        color: '#1985A1',
      }}
    >
      {tag.value}
    </span>
  )
  return (
    <SkillsStyled>
      <h2> Compétences </h2>
      <div className="cards-skills">
        <h3><strong>Techniques</strong></h3>
        <TagCloud
          id="tag-cloud"
          minSize={3}
          maxSize={5}
          tags={data}
          renderer={customRenderer}
        />
      </div>
    </SkillsStyled>
  );
};


// == Skillsort
export default Skills;
