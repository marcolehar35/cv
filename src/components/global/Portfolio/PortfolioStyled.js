import styled from 'styled-components';

import theme from 'src/styles/theme';

const PortfolioStyled = styled.section`
  text-align: center;
  padding: 1em;

  h2{
    background-color: ${theme.colors.primary};
    color: white;
    font-size: ${theme.fontSize.xl};
    font-weight: bold;
    padding: 1em;
    border-radius: 1em;
    margin: 1em; 
  }

  .wrap{
    display: flex; 
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }

  
  @media all and (min-width: 1150px) {
    .width40{
    width: 47%;
  }

  }
`;

export default PortfolioStyled;
