import { IProjectsData } from '../types/interfaces';

export const projects: IProjectsData[] = [
  {
    image: 'images/Insights.png',
    name: 'Insights',
    description: '- Data analysis and management tool.',
    about: `This project was about creating an data analysis and management tool. We were 4 colleagues responsible for the project. Me, another Frontend Devloper and two UX. There were two senior developers reviewing our code.`,
    tags: [
      'TypeScript',
      'React',
      'Redux',
      'Vite',
      'Redux Saga',
      'Emotion.js',
      'ChakraUI',
      'date-fns',
      'React-select',
    ],
    links: {
      github: null,
    },
  },
  {
    image: 'images/eWallet.png',
    name: 'E-wallet',
    description:
      '- An digital wallet for credit cards. (In progress to be migrated to Vite, TypeScript, React-router v.6 and improve Redux structure)',
    about: `This was a project during the course 'JavaScript - React'. The mission was to create an react app that let the user store, create and delete credit cards.`,
    tags: ['React', 'JavaScript', 'Redux'],
    links: {
      github: 'https://github.com/Martin-Johnsson/eWalletApp',
      liveExample: 'test',
    },
  },
  {
    image: 'images/eWallet.png',
    name: 'Highscore',
    description: '- Highscore overview using dB.',
    about: `This project aimed to utilize Node.js and SQL. `,
    tags: ['Node.js', 'SQL'],
    links: {
      github: 'https://github.com/Martin-Johnsson/eWalletApp',
      liveExample: 'test',
    },
  },
  {
    image: 'images/eWallet.png',
    name: 'Times',
    description: '- Time management system.',
    about:
      'This project was during my first intern period. It was an time management system which I further developed and maintained.',
    tags: ['AngularJS', 'C#'],
    links: {},
  },
];
