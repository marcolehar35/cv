import styled from 'styled-components';

import theme from 'src/styles/theme';

const HeaderStyled = styled.header`
display: flex;
justify-content: space-between; 


img{
  border-radius: 80%;
  height: 5em;
}

nav{
  display: flex; 
  flex-direction: column; 
  justify-content: flex-end; 
  height: 10%;
  color: ${theme.colors.primary};
  font-size: ${theme.fontSize.l};
  text-align: left;

  .icons{
    display: none;
    height: 0.8em;
  }
  
  a{
    padding: 0.25em 0.65em;
    margin: 0.25em; 

    &:hover{
      color: ${theme.colors.activ};
      padding: 0.25em 0em;
      .icons{
        display: inline;
      }
    }
  }
}
 @media all and (min-width: 890px) {
   text-align: none;

   nav {
     flex-direction: row;
   }
 }
`;

export default HeaderStyled;
