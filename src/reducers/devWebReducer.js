
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
      description: "Apothéose : Création d'un projet en équipe. \n Période de brainstorming, de conception, de développement, et de recettage.",
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
      name: "O'Clock - spécialisation React",
      place: 'Téléprésentiel',
      period: 2020,
      description: "Titre Professionnel Développeur Web et Web Mobile Niveau III O'clock  -  Formation  en  Téléprésentiel  -  Labellisée Grande Ecole du Numérique D'Octobre à Mars +700h intensives -> 3 mois de Socle: HTML5/CSS3/PHP/Javascript -> 1 mois de spécialisation - React -> 1 mois de projet Apothéose:  O'quests (en cours) -> Certification Opquast (en cours)",
    },
  ],
};

// Reducer
const devWebReducer = (state = initialState) => state;

export default devWebReducer;
