// == Import npm
import React from 'react';

import TopPage from 'src/containers/DevWeb/TopPage';
import Skills from 'src/components/Job/Skills';
import Exp from 'src/components/Job/Exp';
import JobStyled from './JobStyled';

// == Composant
const Job = () => (
  <JobStyled>
    <TopPage />
    <main>
      <Exp />
      <Skills />
    </main>
  </JobStyled>
);


// == Export
export default Job;
