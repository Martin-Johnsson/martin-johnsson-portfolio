import { IProjectsData } from '../types/interfaces';

export const projects: IProjectsData[] = [
  {
    image: '/public/images/Insights.png',
    name: 'Insights',
    description: '- Data analysis and management tool',
    about: `This project was about creating an data analysis and management tool. We were 4 colleagues responsible for the project. Me, another Frontend Devloper and two UX. There were two senior developers reviewing our code.`,
    tags: [
      'TypeScript',
      'React',
      'Redux',
      'Redux Saga',
      'Emotion.js',
      'ChakraUI',
      'date-fns',
      'React-select',
    ],
  },
  {
    image: '../../public/images/Insights.png',
    name: 'Times',
    description: '- Time management system',
    about:
      'This project was during my first intern period. It was an time management system which I further developed and maintained.',

    tags: ['AngularJS', 'C#', 'ASP.NET Core'],
  },
  {
    image: '../../public/images/eWallet.png',
    name: 'E-wallet',
    description: '- Digital Wallet',
    about: `This was a project during the course 'JavaScript - React'. The mission was to create an react app that was let the user store, create and delete credit cards.`,

    tags: ['React', 'Redux', 'Emotion.js', 'ChakraUI', 'date-fns'],
    links: {
      github: 'https://github.com/Martin-Johnsson/eWalletApp',
      liveExample: '',
    },
  },
];
