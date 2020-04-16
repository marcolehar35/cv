import styled from 'styled-components';

import theme from 'src/styles/theme';

const TopPageStyled = styled.section`
  text-align: center;
  padding-top: 2em;

  .nuage-1{
    position: relative;
    height: 4em;
    transform: translateX(40px) translateY(-100px);
    z-index: 0;
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
  z-index: 0;
}


.tooltip:hover .tooltiptext{
  visibility: visible;
  border: 10px solid ${theme.colors.primary},
}


.tooltiptext{
  position: absolute;
  display:inline-block;
  visibility: hidden;
  border-radius: 1em; 
  padding: 1em; 
  background-color: ${theme.colors.primary};
  color: white; 
  opacity: 0.9;
  font-weight: bold;
  font-size: ${theme.fontSize.m};
  text-justify: auto;
  line-break: strict;
  white-space: pre-line;
}

.triangle{
    border-top:20px solid transparent;
border-bottom:1px solid transparent;
border-right: 90px solid ${theme.colors.primary};
transform: rotate(-43deg);
position: absolute;
left: -59px;
top: 30px;
z-index: 99999;

  }
#title{
  color: white;
  font-size: ${theme.fontSize.l};
  padding-top: 1em;
  font-weight: bold;
}

h1{
  color: white;
  font-size: ${theme.fontSize.xl};
  padding-top: 1em;
  font-weight: bold;
 }

@media all and (min-width: 890px) {
   padding-top: 8em;
   
}

`;

export default TopPageStyled;
