import styled from 'styled-components';

import theme from 'src/styles/theme';

const RecommendationStyled = styled.footer`
background-color: white;
width: 100%;
z-index: 10;
position: relative;
bottom: 0;
display: flex;
justify-content: center;
align-items: center;
padding: 1em;


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
  height: 6em;
  color: white; 
  font-weight: bold; 
  font-size: ${theme.fontSize.m};
  transform: translateX(-20px);

}

#triangle{

border-top:20px solid transparent;
border-bottom:20px solid transparent;
border-right: 55px solid ${theme.colors.primary};
position: relative;
transform: translateY(-15px) translateX(-20px);
 }

@media all and (min-width: 890px) {

  
 }
`;

export default RecommendationStyled;
