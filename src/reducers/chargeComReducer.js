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
  titleTopPage: "Parler est un besoin, l'écoute est un talent",
  experiences: [
    {
      id: 0,
      name: 'Charg\u00e9 de communication via le CDG35 ',
      place: " \n Commune de Guipry-Messac \n Commune de Montfort-sur-Meu \n Ecole Nationale Sup\u00e9rieure d'Architecture de Bretagne - Rennes",
      period: '2018 - 2019',
      description: "Créer et rédiger des supports de communication (Magazines,...)\n Animer les sites web et les réseaux sociaux \n Améliorer la productivité des services : communication – secrétariat \n  Implanter de nouveaux outils : optimiser le temps de travail  \n Concevoir et mettre en œuvre des projets événementiels et digitaux (Portail famille, refonte du site web de la commune, cérémonie de fin d'année...) \n Participer au suivi budgétaire et administratif (Publipostage, montage des dossiers de subventions...) \n Accueil - remise des passeports et des cartes d\u2019identit\u00e9",
    },
    {
      id: 1,
      name: 'Charg\u00e9 de communication interne (Stagiaire)',
      place: '\n D\u00e9partement du Morbihan - Vannes',
      period: '2017',
      description: "Organiser et promouvoir les événementiels internes (la semaine du golfe (+1000 participants),...) \n Rédiger : Magazines internes / articles \n Animer l'intranet et réaliser la correction orthographique \n Conception de projets de communication interne (Vis mon métier,...)",
    },
    {
      id: 2,
      name: 'Charg\u00e9 de communication',
      place: '\n Direction de la sant\u00e9 de Polyn\u00e9sie - Tahiti',
      period: '2014 - 2015',
      description: "Veille et communication de crise (épidémie de chikungunya) \n Co-organiser des événements de promotion de la santé  (Défi Ea'ttitude: 0 - 5 - 30,...) \n Créer et rédiger des supports de communication (Newsletter,Brochures, Livret d'accueil,...) & Gérer les relations presse \n Rédiger des cahiers des charges de projets et de sites web \n Animer les réseaux sociaux",
    },
    {
      id: 3,
      name: 'Community Manager',
      place: '\n Prox-i Marketing Services - Tahiti',
      period: '2013',
      description: 'Gérer un "bad-bzz" (+ de 1000 nouveaux abonnées)',
    },
    {
      id: 4,
      name: 'Assistant de communication (Bénévole)',
      place: '\n Association SOS Suicide de Polynésie – Tahiti',
      period: '2011 - 2018',
      description: '"Concours quiz" facebook pour lutter contre les préjugés \n Intervenir en radio (Radio 1) et en plateau télé (fare maohi) \n Co-auteur  "Suicide à Tahiti : le paradoxe du suicide au paradis"',
    },
    {
      id: 5,
      name: 'Chargé de projets de communication (Stagiaire)',
      place: '\n Prox-i marketing Services – Tahiti',
      period: '2011 - 2012',
      description: "Campagne de dons + de 8 000 euros pour l'association SOS Village d'enfants de Polynésie \n Campagne de prévention + de 600 appels par an pour l'association SOS Suicide de Polynésie",
    },
    {
      id: 6,
      name: 'Assistant de communication (Stagiaire)',
      place: "\n Institut Sup\u00e9rieur de l'Enseignement Priv\u00e9 de Polyn\u00e9sie (ISEPP) - Tahiti",
      period: '2011',
      description: "G\u00e9rer la partie communication et technique du colloque plurilinguistique avec le responsable informatique et audio-visuel de l'ISEPP Andr\u00e9 Chuong.",
    },
    {
      id: 7,
      name: 'Assistant de communication (Stagiaire)',
      place: '\n Association SOS Suicide de Polyn\u00e9sie - Tahiti',
      period: '2011',
      description: 'Co-organiser et promouvoir le Colloque International de psychiatrie de Polyn\u00e9sie Fran\u00e7aise et de la Soir\u00e9e de Gala SOS Suicide avec son Pr\u00e9sident St\u00e9phane Amadeo.',
    },
    {
      id: 8,
      name: 'Charg\u00e9 de communication (Stagiaire)',
      place: '\n Minist\u00e8re de la jeunesse et des sports - Tahiti',
      period: '2011 - 2010',
      description: 'Participer à la promotion du festival de la jeunesse avec la charg\u00e9e de communication Soumia Handachy. (Strat\u00e9gie de communication, Communiqu\u00e9 de presse, Plan m\u00e9dia, Dossier de presse, Interview, Photo /vid\u00e9o...)',
    },
    {
      id: 9,
      name: 'Journaliste / reporter (Stagiaire)',
      place: '\n Cr\u00e9aprint - Tahiti',
      period: '2010',
      description: "Interview et rédaction d'articles pour la \"News Letter\" du Festival International du Film documentaire Oc\u00e9anien (FIFO) avec la directrice Dominique Morvan.",
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
          underSkill: 'Articles',
          count: 3,
        },
        {
          id: 1,
          underSkill: 'Charte éditoriale',
          count: 3,
        },
        {
          id: 2,
          underSkill: 'Dossiers de presse',
          count: 3,
        },
        {
          id: 3,
          underSkill: 'Communiqués de presse',
          count: 1,
        },
        {
          id: 4,
          underSkill: 'Briefs créatifs',
          count: 2,
        },
        {
          id: 5,
          underSkill: 'Bilans',
          count: 3,
        },
        {
          id: 6,
          underSkill: 'Comptes-rendus',
          count: 1,
        },
        {
          id: 7,
          underSkill: 'Notes au directeur',
          count: 1,
        },
        {
          id: 8,
          underSkill: 'Discours',
          count: 2,
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
          count: 2,
        },
        {
          id: 1,
          underSkill: 'Organisation événementielle',
          count: 2,
        },
        {
          id: 2,
          underSkill: 'Coordination des prestataires',
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
          underSkill: 'Analyse des risques et opportunités (SWOT)',
          count: 3,
        },
        {
          id: 2,
          underSkill: "Veille d'E-réputation / Marketing",
          count: 3,
        },
        {
          id: 3,
          underSkill: 'Stratégie de contenu et stratégie de communication',
          count: 3,
        },
        {
          id: 4,
          underSkill: "Campagne d'e-mailing avec MailChimp",
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
          underSkill: 'Montage vidéo',
          count: 3,
        },
        {
          id: 1,
          underSkill: 'Prezi / Power point',
          count: 3,
        },
        {
          id: 2,
          underSkill: 'Publication assistée par ordinateur (PAO)',
          count: 2,
        },
        {
          id: 3,
          underSkill: 'SEO',
          count: 1,
        },
        {
          id: 4,
          underSkill: 'HTML5',
          count: 1,
        },
        {
          id: 5,
          underSkill: 'CSS3',
          count: 1,
        },
        {
          id: 6,
          underSkill: 'CMS',
          count: 1,
        },
      ],
    },
    {
      id: 3,
      titleSkill: 'Digitales',
      underSkills: [
        {
          id: 0,
          underSkill: 'Community Management',
          count: 3,
        },
        {
          id: 1,
          underSkill: 'Twitter',
          count: 2,
        },
        {
          id: 2,
          underSkill: 'Facebook',
          count: 2,
        },
        {
          id: 3,
          underSkill: 'tweetDeck',
          count: 1,
        },
        {
          id: 4,
          underSkill: 'HootSuite',
          count: 1,
        },
      ],
    },
  ],
  titleFormation: 'Formation',
  learning: [
    {
      id: 0,
      name: 'Master 2 Information - Communication (MICO) parcours (RISCO), Mention bien',
      place: '\n Universit\u00e9 Rennes 2',
      period: 2017,
      description: "Réalisation d'un mémoire: \"Les stratégies de communication comportementale préventive : quelle est la place de l'engagement\"",
    },
    {
      id: 1,
      name: 'Master 1 Information - Communication',
      place: '\n Universit\u00e9 Rennes 2',
      period: 2016,
      description: "Réalisation d'un mémoire collectif : \"La communication de crise et les politiques RH.\" \n Réalisation d'un audit et d'une stratégie de communication pour l'association de danses polynésiennes (Tiare Tahiti)",
    },
    {
      id: 2,
      name: 'Webschool (183h)',
      place: "\n Universit\u00e9 Catholique de l'Ouest (Angers) - ISEPP (campus en Polyn\u00e9sie)",
      period: 2013,
      description: 'Community Management',
    },
    {
      id: 3,
      name: 'Licence information et communication',
      place: "\n Universit\u00e9 Catholique de l'Ouest (Angers) - ISEPP (campus en Polyn\u00e9sie)",
      period: 2012,
      description: "Réalisation d'un webmagazine et d'articles de presse.",
    },
  ],
  titlePorfolio: 'ComFolio',
  projets: [
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
