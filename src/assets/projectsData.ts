import { IProjectsData } from '../types/interfaces';

export const projects: IProjectsData[] = [
  {
    frontImage: 'images/smartrefill.jfif',
    modalImage: 'images/insights.png',
    name: 'Insights',
    description: '- Data analysis and management tool',
    about: `Project during my second internship at Smart Refill. The aim of the project was to create an data analysis and management tool. We were mulitple colleagues responsible for the project. My team consisted of: another frontend developer, two UX, a Teach Lead, one senior frontend developer, one scrum master and a product owner. Me and the other front end developer was responsible for writing all code and the seniors was reviewing.`,
    tags: [
      'TypeScript',
      'React',
      'Redux',
      'Vite',
      'Rest Api',
      'Redux Saga',
      'Emotion.js',
      'ChakraUI',
      'date-fns',
      'React-select',
      'Insomnia',
      'Jira',
      'GitLab',
      'Figma',
      'React-testing Library',
      'Vitest',
      'Scrum',
      'REST API',
    ],
    links: {},
  },
  {
    frontImage: 'images/eWallet.png',
    modalImage: 'images/eWalletModal.png',
    name: 'E-wallet',
    description:
      '- An digital wallet for credit cards (In progress to be migrated to Vite, TypeScript, React-router v.6, improve Redux structure and use emotion.js)',
    about: `The end goal was to create an react app that let the user store, create and delete credit cards.`,
    tags: ['React', 'JavaScript', 'Redux'],
    links: {
      github: 'https://github.com/Martin-Johnsson/eWalletApp',
    },
  },
  {
    frontImage: 'images/highscore.jpg',
    modalImage: 'images/highscoreModal-highscoreApi.png',
    name: 'Highscore',
    description: '- Highscore overview using dB',
    about: `This project aimed to utilize Node.js, PostgreSQL and Insomnia.`,
    tags: ['Node.js', 'Insomnia', 'SQL', 'PostgreSQL', 'Docker', 'Api'],
    links: {
      github: 'https://github.com/Martin-Johnsson/highscoreApp',
    },
  },
  {
    frontImage: 'images/knowit.png',
    modalImage: 'images/timesModal.png',
    name: 'Times',
    description: '- Time management system',
    about: `I worked on this project during my first intern period at Knowit. It's an time management system which I further developed and maintained.`,
    tags: ['AngularJS', 'C#', 'Scrum', 'CSS', 'Entity framework'],
  },
];
