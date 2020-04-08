import styled from 'styled-components';

import theme from 'src/styles/theme';

const TopPageStyled = styled.section`
  text-align: center;

  .nuage-1{
    position: relative;
    height: 4em;
    transform: translateX(40px) translateY(-100px);
    z-index: 1;
    animation-duration: 15s;
    animation-timing-function: linear;
    animation-name: nuage1;
    animation-iteration-count: infinite;
  }

  @keyframes nuage1{

from {
  transform: translateX(40px) translateY(-100px)
}

50% {
  transform: translateX(0px) translateY(-100px)
}

to {
  transform: translateX(40px) translateY(-100px)
}

}

  .nuage-2{
    position: relative;
    height: 4em;
    transform: translateX(-40px);
    z-index: 3;
    animation-duration: 15s;
    animation-timing-function: linear;
    animation-name: nuage2;
    animation-iteration-count: infinite;
  }

  @keyframes nuage2{

  from {
    transform: translateX(0px) 
  }

 50% {
    transform: translateX(-40px)
  }

  to {
    transform: translateX(0px)
  }

}


@media (prefers-reduced-motion: reduce) {
  .nuage-2{
  animation: none;
  }
  .nuage-1{
  animation: none;
  }
}

 #avatar{
  position: relative;
  margin-top: 1em;
  border-radius: 80%;
  height: 10em;
  margin-right: 0.5em;
  z-index: 2;
}
h1{
  color: white;
  font-size: ${theme.fontSize.xl};
  padding-bottom: 1em;
 }

@media all and (min-width: 890px) {
   padding-top: 6em;
 
}
`;

export default TopPageStyled;
