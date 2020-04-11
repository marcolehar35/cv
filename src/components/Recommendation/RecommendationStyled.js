import styled from 'styled-components';

import theme from 'src/styles/theme';

const RecommendationStyled = styled.footer`
background-color: white;
display: flex;
padding: 1em 3em;
position: relative;
bottom: 0;
z-index: 10;
width: 100%;

.card-name{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
padding: 0 1em;
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
}

#triangle{

border-top:20px solid transparent;
border-bottom:20px solid transparent;
border-right: 55px solid ${theme.colors.primary};
position: absolute;
z-index:5000;
     left: 9.7em;

 }

@media all and (min-width: 890px) {
  position: fixed;
  
 }
`;

export default RecommendationStyled;
