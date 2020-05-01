import chatRoom from 'src/assets/images/devfolio/chatRoom.gif';
import recipes from 'src/assets/images/devfolio/recipes.gif';
import todoList from 'src/assets/images/devfolio/todoList.gif';
import cv from 'src/assets/images/devfolio/cvreact.gif';
import tiareTahiti from 'src/assets/images/comfolio/affiche-Tiare-Tahiti.jpg';
import carteInvitation from 'src/assets/images/comfolio/carte-invitation.jpg';
import magInterne from 'src/assets/images/comfolio/magazine-interne.jpg';
import publicationSos from 'src/assets/images/comfolio/publication-co-auteur.jpg';
import quizFace from 'src/assets/images/comfolio/sos-affiche-A3.jpg';

// Initial State
const initialState = {
  name: 'Marc Lehartel',
  picture: 'src/assets/images/avatar.jpg',
  location: 'Tahiti',
  contact: 'lehartel.com@gmail.com',
  job: 'Développeur web',
  titleExp: 'Expériences',
  titleTopPage: "La construction­ c'est fait pour tenir, l’architecture pour émouvoir",
  titlePorfolio: 'DevFolio',
  projets: [
    {
      id: 0,
      name: 'Todolist avec React / JS',
      projet: todoList,
      link: 'https://github.com/marcolehar35/todolist-react',
    },
    {
      id: 1,
      name: 'ChatRoom avec React',
      projet: chatRoom,
      link: 'https://github.com/marcolehar35/chatroom ',
    },
    {
      id: 2,
      name: 'Recipe avec React',
      projet: recipes,
      link: 'https://github.com/marcolehar35/recipe ',
    },
    {
      id: 3,
      name: 'CV avec React',
      projet: cv,
      link: 'https://github.com/marcolehar35/cv',
    },
  ],
  titleComPorfolio: 'ComFolio',
  projetsCom: [
    {
      id: 0,
      name: "Réalisation d'une affiche",
      projet: tiareTahiti,
      link: 'https://drive.google.com/file/d/1SpRDeQJymkjne4nO8fAmR9YwCA2xWaqk/view?usp=sharing',
    },
    {
      id: 1,
      name: "Réalisation d'une carte d'invitation",
      projet: carteInvitation,
      link: 'https://drive.google.com/file/d/1TB6VSV0XD9EK_udDLTyGQRen_hbIuh7E/view?usp=sharing',
    },
    {
      id: 2,
      name: "Rédaction d'articles",
      projet: magInterne,
      link: 'https://drive.google.com/file/d/0B0lcDIHApiLJaXFydEc5bkRZbDQ/view?usp=sharing',
    },
    {
      id: 3,
      name: 'Co-auteur: "Suicide à Tahiti: Le paradoxe du suicide au paradis" ',
      projet: publicationSos,
      link: 'https://drive.google.com/open?id=0B0lcDIHApiLJSUJCc0ZqU0dEQTg',
    },
    {
      id: 4,
      name: 'Concours Quiz Facebook',
      projet: quizFace,
      link: 'https://drive.google.com/open?id=0B0lcDIHApiLJNmx0eUVxMGhmOEk',
    },
  ],
};

// Reducer
const devWebReducer = (state = initialState) => state;

export default devWebReducer;
