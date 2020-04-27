import chatRoom from 'src/assets/images/portfolio/chatRoom.gif';
import recipes from 'src/assets/images/portfolio/recipes.gif';
import todoList from 'src/assets/images/portfolio/todoList.gif';

// Initial State
const initialState = {
  name: 'Marc Lehartel',
  picture: 'src/assets/images/avatar.jpg',
  location: 'Tahiti',
  contact: 'lehartel.com@gmail.com',
  job: 'Développeur web',
  titleExp: 'Expériences',
  experiences: [
    {
      id: 1,
      name: 'Développeur React: ',
      place: " Ecole O'clock - Téléprésentiel",
      period: '2020',
      description: "Apothéose : Création d'un projet en équipe. \n Période de brainstorming, de conception, de développement, et de recettage. \n Technologies utilisées : \n ✨ React pour la partie Front. \n ✨ Symfony pour la partie Back. (API) \n ✨ Axios pour les requêtes API. \n ✨ React-router pour la navigation. \n ✨ Redux pour la gestion de state. \n ✨ React-router-pour les redirections. \n ✨ Classnames pour faciliter l'affichage CSS de certaines parties du site. \n ✨ Yarn en gestionnaire de paquet. \n ✨ Webpack en compileur. \n ✨ Prop-types pour la validation de donnée",
    },
  ],
  titleSkills: 'Compétences',
  skills: [
    {
      id: 1,
      titleSkill: 'Rédactionnelles',
      underSkills: [
        {
          id: 1,
          underSkill: 'Cahier des charges',
          count: 1,
        },
      ],
    },
    {
      id: 2,
      titleSkill: 'Organisationnelles',
      underSkills: [
        {
          id: 1,
          underSkill: 'Gestion de projet',
          count: 1,
        },
      ],
    },
    {
      id: 3,
      titleSkill: 'Analytiques',
      underSkills: [
        {
          id: 1,
          underSkill: 'Veille technologique / Développement',
          count: 1,
        },
        {
          id: 2,
          underSkill: "Conceptualisation d'un site web",
          count: 2,
        },
      ],
    },
    {
      id: 4,
      titleSkill: 'Techniques',
      underSkills: [
        {
          id: 1,
          underSkill: 'React & Redux',
          count: 3,
        },
        {
          id: 2,
          underSkill: 'React & Hooks',
          count: 3,
        },
        {
          id: 3,
          underSkill: 'Javascript',
          count: 2,
        },
        {
          id: 4,
          underSkill: 'jQuery',
          count: 2,
        },
        {
          id: 5,
          underSkill: 'HTML5',
          count: 2,
        },
        {
          id: 6,
          underSkill: 'CSS3',
          count: 2,
        },
        {
          id: 7,
          underSkill: 'PHP',
          count: 1,
        },
      ],
    },
  ],
  titleFormation: 'Formation',
  learning: [
    {
      id: 1,
      name: "O'Clock - Spécialisation React:",
      place: ' Téléprésentiel',
      period: 2020,
      description: "Titre Professionnel Développeur Web et Web Mobile Niveau III O'clock \n Formation  en  Téléprésentiel \n  Labellisée Grande Ecole du Numérique +700h intensives  \n Octobre à Mars \n ✨ 3 mois de Socle: HTML5/CSS3/PHP/Javascript \n✨ 1 mois de Spécialisation - React \n✨ 1 mois de projet Apothéose:  O'quests \n✨ Certification Opquast (en cours)",
    },
  ],
  titlePorfolio: 'Mon Portfolio',
  projets: [
    {
      id: 1,
      name: 'Todolist avec React / JS',
      gifSiteWeb: todoList,
    },
    {
      id: 2,
      name: 'ChatRoom avec React',
      gifSiteWeb: chatRoom,
    },
    {
      id: 3,
      name: 'Recipe avec React',
      gifSiteWeb: recipes,
    },
    {
      id: 4,
      name: 'CV avec React',
      gifSiteWeb: '',
    },
  ],
};

// Reducer
const devWebReducer = (state = initialState) => state;

export default devWebReducer;
