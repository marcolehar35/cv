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
  font-size: ${theme.fontSize.xl};
  text-align: left;

  .icons{
    visibility: hidden;
    height: 0.8em;
  }
  
  li{
    padding: 0.25em 0.65em;
    margin: 0.25em; 

    &:hover{
      color: ${theme.colors.activ};
      .icons{
        visibility: visible;
      }
    }
  }
}

.activ{
      color: ${theme.colors.activ};
      .icons{
        visibility: visible;
      }
  }
 @media all and (min-width: 890px) {
   text-align: none;
    width: 100%;
    z-index: 10000;
    position:fixed;
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
