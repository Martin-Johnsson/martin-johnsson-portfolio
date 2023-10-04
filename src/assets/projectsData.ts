import { IProject } from '../types/interfaces';

export const projects: IProject[] = [
  {
    id: 1,
    frontImage: 'images/smartrefill.jfif',
    modalImage: 'images/insights.png',
    name: 'Insights',
    description: '- Data analysis and management tool',
    about: `Project during my second internship at Smart Refill. The aim of the project was to create an data analysis and management tool. We were mulitple colleagues responsible for the project. My team consisted of: another frontend developer, two UX, a Teach Lead, one senior frontend developer, one scrum master and a product owner.`,
    tags: [
      { id: 1, tag: 'TypeScript' },
      { id: 2, tag: 'React' },
      { id: 3, tag: 'Redux' },
      { id: 4, tag: 'Chakra UI' },
      { id: 5, tag: 'Redux Saga' },
      { id: 6, tag: 'Unit testing' },
      { id: 7, tag: 'RESTful API' },
      { id: 8, tag: 'Scrum' },
      { id: 9, tag: 'Git' },
      { id: 9, tag: 'Emotion.js' },
    ],
    links: {},
  },
  {
    id: 2,
    frontImage: 'images/knowit.png',
    modalImage: 'images/timesModal.png',
    name: 'Times',
    description: '- Time management system',
    about: `I maintained and further developed a time management system during my first intern period at Knowit. I increased efficiency through functions and UX focused UI to new feature.`,
    tags: [
      { id: 1, tag: 'Angular' },
      { id: 2, tag: 'JavaScript' },
      { id: 3, tag: 'Redux' },
      { id: 4, tag: 'CSS' },
      { id: 5, tag: 'Scrum' },
      { id: 6, tag: 'C#' },
      { id: 7, tag: 'PostGreSQL' },
    ],
  },
  {
    id: 3,
    frontImage: 'images/eWallet.png',
    modalImage: 'images/eWalletModal.png',
    name: 'E-wallet',
    description:
      '- An digital wallet for credit cards (In progress to be migrated to Vite, TypeScript, React-router v.6, improve Redux structure and use emotion.js)',
    about: `The end goal was to let the user store, create and delete credit cards.`,
    tags: [
      { id: 1, tag: 'React' },
      { id: 2, tag: 'JavaScript' },
      {
        id: 3,
        tag: 'Redux',
      },
    ],
    links: {
      github: 'https://github.com/Martin-Johnsson/eWalletApp',
    },
  },
];
