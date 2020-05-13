import chatRoom from 'src/assets/images/devfolio/chatRoom.gif';
import recipes from 'src/assets/images/devfolio/recipes.gif';
import todoList from 'src/assets/images/devfolio/todoList.gif';
import cv from 'src/assets/images/devfolio/cvreact.gif';

// Initial State
const initialState = {
  name: 'Marc Lehartel',
  picture: 'src/assets/images/avatar.jpg',
  location: 'Tahiti',
  contact: 'lehartel.com@gmail.com',
  job: 'Développeur web',
  titleExp: 'Expériences',
  titleTopPage: 'Que la programmation soit avec nous',
  experiences: [
    {
      id: 0,
      name: 'Développeur React: ',
      place: " Ecole O'clock - Téléprésentiel",
      period: '2020',
      description: "Apothéose : Création d'un projet en équipe. \n Période de brainstorming, de conception, de développement, et de recettage. \n Technologies utilisées : \n ✨ React pour la partie Front. \n ✨ Symfony pour la partie Back. (API) \n ✨ Axios pour les requêtes API. \n ✨ React-router pour la navigation. \n ✨ Redux pour la gestion de state. \n ✨ React-router-pour les redirections. \n ✨ Classnames pour faciliter l'affichage CSS de certaines parties du site. \n ✨ Yarn en gestionnaire de paquet. \n ✨ Webpack en compileur. \n ✨ Prop-types pour la validation de donnée",
    },
  ],
  titleSkills: 'Compétences',
  skills: [
    {
      id: 0,
      titleSkill: 'Rédactionnelles',
      underSkills: [
        {
          id: 0,
          underSkill: 'Cahier des charges',
          count: 1,
        },
      ],
    },
    {
      id: 1,
      titleSkill: 'Organisationnelles',
      underSkills: [
        {
          id: 0,
          underSkill: 'Gestion de projet',
          count: 1,
        },
      ],
    },
    {
      id: 2,
      titleSkill: 'Analytiques',
      underSkills: [
        {
          id: 0,
          underSkill: 'Veille technologique / Développement',
          count: 1,
        },
        {
          id: 1,
          underSkill: "Conceptualisation d'un site web",
          count: 2,
        },
      ],
    },
    {
      id: 3,
      titleSkill: 'Techniques',
      underSkills: [
        {
          id: 0,
          underSkill: 'React & Redux',
          count: 3,
        },
        {
          id: 1,
          underSkill: 'React & Hooks',
          count: 3,
        },
        {
          id: 2,
          underSkill: 'Javascript',
          count: 2,
        },
        {
          id: 3,
          underSkill: 'jQuery',
          count: 2,
        },
        {
          id: 4,
          underSkill: 'HTML5',
          count: 2,
        },
        {
          id: 5,
          underSkill: 'CSS3',
          count: 2,
        },
        {
          id: 6,
          underSkill: 'PHP',
          count: 1,
        },
        {
          id: 7,
          underSkill: 'GitHub',
          count: 1,
        },
        {
          id: 8,
          underSkill: 'SQL',
          count: 1,
        },
        {
          id: 9,
          underSkill: 'Bootstrap',
          count: 1,
        },
        {
          id: 10,
          underSkill: 'UML',
          count: 1,
        },
      ],
    },
  ],
  titleFormation: 'Formation',
  learning: [
    {
      id: 0,
      name: "O'Clock - Spécialisation React:",
      place: ' Téléprésentiel',
      period: 2020,
      description: "Titre Professionnel Développeur Web et Web Mobile Niveau III O'clock \n Formation  en  Téléprésentiel \n  Labellisée Grande Ecole du Numérique +700h intensives  \n Octobre à Mars \n ✨ 3 mois de Socle: HTML5/CSS3/PHP/Javascript \n✨ 1 mois de Spécialisation - React \n✨ 1 mois de projet Apothéose:  O'quests \n✨ Certification Opquast (en cours)",
    },
  ],
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
};

// Reducer
const devWebReducer = (state = initialState) => state;

export default devWebReducer;
