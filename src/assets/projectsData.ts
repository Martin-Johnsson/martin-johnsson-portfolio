import { IProjectsData } from '../types/interfaces';

export const projects: IProjectsData[] = [
  {
    frontImage: 'images/smartrefill.jfif',
    modalImage: 'images/insights.png',
    name: 'Insights',
    description: '- Data analysis and management tool',
    about: `Project during my second internship at Smart Refill. The aim of the project was to create an data analysis and management tool. We were mulitple colleagues responsible for the project. My team consisted of: another frontend developer, two UX, a Teach Lead, one senior frontend developer, one scrum master and a product owner.`,
    tags: [
      'TypeScript',
      'React',
      'Redux',
      'Chakra UI',
      'Redux Saga',
      'Unit testing',
      'RESTful API',
      'Scrum',
      'Git',
      'Emotion.js',
    ],
    links: {},
  },
  {
    frontImage: 'images/knowit.png',
    modalImage: 'images/timesModal.png',
    name: 'Times',
    description: '- Time management system',
    about: `I maintained and further developed a time management system during my first intern period at Knowit. I increased efficiency through functions and UX focused UI to new feature.`,
    tags: ['Angular', 'JavaScript', 'CSS', 'Scrum', 'C#', 'PostGreSQL'],
  },
  {
    frontImage: 'images/eWallet.png',
    modalImage: 'images/eWalletModal.png',
    name: 'E-wallet',
    description:
      '- An digital wallet for credit cards (In progress to be migrated to Vite, TypeScript, React-router v.6, improve Redux structure and use emotion.js)',
    about: `The end goal was to let the user store, create and delete credit cards.`,
    tags: ['React', 'JavaScript', 'Redux'],
    links: {
      github: 'https://github.com/Martin-Johnsson/eWalletApp',
    },
  },
];
