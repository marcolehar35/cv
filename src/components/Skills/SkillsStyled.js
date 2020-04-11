import styled from 'styled-components';

import theme from 'src/styles/theme';

const SkillsStyled = styled.section`
  text-align: center;
  padding: 1em;

  h2{
    background-color: ${theme.colors.primary};
    color: white;
    font-size: ${theme.fontSize.l};
    font-weight: bold;
    padding: 1em;
    border-radius: 1em;
    margin: 1em; 
  }

  .cards-skills{
    background-color: ${theme.colors.card};
    text-align: left;
    padding: 1em; 
    margin: 1em;
    border-radius: 1em;
  }

  h3{
    font-size: ${theme.fontSize.l};
    padding: 1em 1em 1em 2em;

    strong{
      font-weight: bold;
    }
  }
  
  #tag-cloud{
    text-align: center;
    }

    @keyframes blinker {
  50% { opacity: 0.0; }
}
`;

export default SkillsStyled;
