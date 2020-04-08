import styled from 'styled-components';

import theme from 'src/styles/theme';

const HeaderStyled = styled.header`
display: flex;
justify-content: space-between; 
background-color: white;
padding: 0.5em;


img{
  border-radius: 80%;
  height: 5em;
  margin-right: 0.5em;
}

ul{
  display: flex; 
  flex-direction: column; 
  justify-content: flex-end; 
  color: ${theme.colors.primary};
  font-size: ${theme.fontSize.l};
  text-align: left;

  .icons{
    display: none;
    height: 0.8em;
  }
  
  li{
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

.activ{
      color: ${theme.colors.activ};
      padding: 0.25em 0em;
      .icons{
        display: inline;
      }
  }
 @media all and (min-width: 890px) {
   text-align: none;
    position: fixed;
    width: 100%;
    nav{
      display: flex; 
      align-items: center;

      ul {
     flex-direction: row;
      }
    }
  
 }
`;

export default HeaderStyled;
