import styled from 'styled-components';

import theme from 'src/styles/theme';

const ExpStyled = styled.section`
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

  
`;

export default ExpStyled;
