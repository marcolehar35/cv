// == Import npm
import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

import 'pure-react-carousel/dist/react-carousel.es.css';
// == Import
import Header from 'src/containers/Header';
import './reset.css';
import TopPage from 'src/containers/TopPage';
import Skills from 'src/components/Skills';
import Exp from 'src/components/Exp';
import Recommendation from 'src/components/Recommendation';
import Carole from 'src/assets/images/Carole-LOISEL-SOYER.jpeg';
import { ArrowLeft, ArrowRight } from 'react-feather';
import AppStyled from './AppStyled';



// == Composant
const App = () => (
  <AppStyled>
    <Header />
    <TopPage />
    <main>
      <Exp />
      <Skills />
    </main>
    <CarouselProvider
      naturalSlideWidth={1}
      naturalSlideHeight={1}
      interval={10000}
      isPlaying
      infinite
      totalSlides={2}
    >

      <Slider className="slider">
        <Slide index={0}>    <Recommendation img={Carole} name="Carole LOISEL-Soyer" job="Responsable de la communication" recommendationText="&quot;Marc a été parcticulièrement apprécié par l'ensemble des collègues et par la direction de notre école pour sa bonne humeure et sa capacité à s'adapter au groupe&quot;" /></Slide>
        <Slide index={1}>    <Recommendation img={Carole} name="Carole LOISEL-Soyer" job="Responsable de la communication" recommendationText="&quot;Marc a exercé ses fonctions avec une forte motivation, accompagnée par son dynamisme, tout en veillant à l'efficacité et aux résultats attendus&quot;" /></Slide>
      </Slider>
      <span id="buttonsContainer">
        <ButtonBack className="buttons"> <ArrowLeft /></ButtonBack>
        <ButtonNext className="buttons"><ArrowRight /></ButtonNext>
      </span>
    </CarouselProvider>

  </AppStyled>
);

// == Export
export default App;
