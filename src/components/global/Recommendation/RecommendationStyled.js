import styled from 'styled-components';

import theme from 'src/styles/theme';

const RecommendationStyled = styled.footer`
background-color: white;
width: 100%;
z-index: 10;
position: relative;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2em 2em 0em 2em;


.card-name{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transform: translateX(20px);

  img{
  border-radius: 80%;
  height: 5em;
  width: 5em;
  margin-right: 0.5em;
}

  a{
  display: block;
  text-align: center;
  width: 10em;
}

}

p{
  border: 1px solid ${theme.colors.primary}; 
  border-radius: 1em;
  background-color: ${theme.colors.primary}; 
  padding: 1em;
  color: white; 
  height: 14em;
  font-weight: bold; 
  font-size: ${theme.fontSize.m};
}

@media all and (min-width: 425px) {

 p{
  height: 9em;
}
  
 }


@media all and (min-width: 890px) {
  flex-direction: row;

  #triangle{

border-top:20px solid transparent;
border-bottom:20px solid transparent;
border-right: 55px solid ${theme.colors.primary};
position: relative;
transform: translateY(-15px) translateX(-20px);
 }

 p{
  transform: translateX(-20px);
  height: 8em;
}
  
 }
`;

export default RecommendationStyled;
