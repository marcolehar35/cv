export default {
  name: 'Marc Lehartel',
  picture: 'src/assets/images/avatar.jpg',
  location: 'Tahiti',
  contact: 'lehartel.com@gmail.com',
  jobs: [
    {
      job: 'Développeur web',
      cv: [
        {
          name: 'Expériences',
          experiences: [
            {
              id: 1,
              name: 'Développeur React',
              place: "Ecole O'clock - Téléprésentiel",
              period: '2020',
              description: "Apothéose : Création d'un projet en équipe.Période de brainstorming, de conception, de développement, et de recettage.",
            },
          ],
        },
        {
          name: 'Compétences',
          skills: [
            {
              id: 1,
              skill: 'rédaction',
              underSkills: [
                {
                  id: 1,
                  underSkill: 'Cahier des charges',
                  count: null,
                },
              ],
            },
            {
              id: 2,
              skill: 'organisation',
              underSkills: [
                {
                  id: 1,
                  underSkill: 'Gestion de projet',
                  count: null,
                },
              ],
            },
            {
              id: 3,
              skill: 'analytiques',
              underSkills: [
                {
                  id: 1,
                  underSkill: 'Veille technologique / Développement',
                  count: null,
                },
                {
                  id: 2,
                  underSkill: "Conceptualisation d'un site web",
                  count: null,
                },
              ],
            },
            {
              id: 4,
              skill: 'techniques',
              underSkills: [
                {
                  id: 1,
                  underSkill: 'React & Redux – ES6 – Hooks',
                  count: null,
                },
                {
                  id: 2,
                  underSkill: 'Javascript',
                  count: null,
                },
                {
                  id: 3,
                  underSkill: 'HTML / CSS',
                  count: null,
                },
                {
                  id: 4,
                  underSkill: 'PHP',
                  count: null,
                },
              ],
            },
          ],
        },
        {
          name: 'Formation',
          learning: [
            {
              id: 1,
              name: "O'Clock - spécialisation React",
              place: 'Téléprésentiel',
              period: 2020,
              description: "Titre Professionnel Développeur Web et Web Mobile Niveau III O'clock  -  Formation  en  Téléprésentiel  -  Labellisée Grande Ecole du Numérique D'Octobre à Mars +700h intensives -> 3 mois de Socle: HTML5/CSS3/PHP/Javascript -> 1 mois de spécialisation - React -> 1 mois de projet Apothéose:  O'quests (en cours) -> Certification Opquast (en cours)",
            },
          ],
        },
      ],
    },
    {
      job: 'Chargé de communication',
      cv: [],
    },
    {
      job: 'Community Manager',
      cv: [],
    },
  ],
};
