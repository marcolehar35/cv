import styled from 'styled-components';

import theme from 'src/styles/theme';

const AppStyled = styled.div`
background-color: white;
line-height: 1.4em;


main{
  background-color: ${theme.colors.back};
}


.slider{
    height: 11em;
    
  }

#buttonsContainer{
  display: flex;
  justify-content: space-between;
  transform: translateY(-100px);

.buttons{
  background-color: white;
  border: none;
  font-size: ${theme.fontSize.xl};
}

.buttons:hover{
  color: ${theme.colors.primary};
}

}




@media all and (min-width: 890px) {
   
  main{
  display: flex; 

  section{
    width: 50%;
  }

}
  
  
  
 }
`;

export default AppStyled;
