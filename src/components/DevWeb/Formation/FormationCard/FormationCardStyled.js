import styled from 'styled-components';

import theme from 'src/styles/theme';

const FormationCardStyled = styled.div`
    background-color: ${theme.colors.card};
    text-align: left;
    padding: 1em; 
    margin: 1em;
    border-radius: 1em;

  h4{
    font-size: ${theme.fontSize.l};
    color: ${theme.colors.primary};
    font-weight: 550;
  }

  h3{
    font-size: ${theme.fontSize.l};
    padding: 1em 1em 1em 2em;

    strong{
      font-weight: bold;
    }
  }
  
  p{
    font-size: ${theme.fontSize.m};
  }
`;

export default FormationCardStyled;
