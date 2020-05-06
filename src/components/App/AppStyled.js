import styled from 'styled-components';

import theme from 'src/styles/theme';

const AppStyled = styled.div`
background-color: white;
line-height: 2em;


main{
  background-color: ${theme.colors.back};
}


.slider{
    height: 27rem;
    
  }

#buttonsContainer{
  display: flex;
  justify-content: space-between;
  transform: translateY(-250px);

.buttons{
  background-color: white;
  border: none;
  font-size: ${theme.fontSize.xl};
}

.buttons:hover{
  color: ${theme.colors.primary};
}

}

@media all and (min-width: 425px) {

  .slider{
    height: 24rem;
    
  }
 
}



@media all and (min-width: 890px) {
   
  main{
  display: flex; 
  flex-wrap: wrap;

  .width50{
    width: 50%;
  }

}
.slider{
    height: 13rem;
    
  }

  #buttonsContainer{
  transform: translateY(-100px);

}
  
 }
`;

export default AppStyled;
