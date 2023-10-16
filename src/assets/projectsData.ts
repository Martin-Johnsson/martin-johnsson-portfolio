import { IProject } from '../types/interfaces';

export const projects: IProject[] = [
  {
    id: 1,
    name: 'Insights',
    description: '- Data analysis and management tool',
    modalAbout: `Project during my second internship at Smart Refill. The aim of the project was to create an data analysis and management tool. We were mulitple colleagues responsible for the project. My team consisted of: another frontend developer, two UX, a Teach Lead, one senior frontend developer, one scrum master and a product owner.`,
    placeholderMainImage: {
      imageUrl: 'images/placeholders/smartRefillPlaceholder.jpg',
      alt: 'Placeholder UI in insights application',
    },
    mainImage: {
      imageUrl: 'images/front/smartrefillFront.jfif',
      alt: 'Placeholder for Smart Refills logo',
    },
    modalPlaceholderImage: {
      imageUrl: 'images/modals/placeholders/insights.webp',
      alt: 'Placeholder for UI in insights',
    },
    modalImage: {
      imageUrl: 'images/modals/insightsModal.png',
      alt: 'UI in insights',
    },
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
      { id: 10, tag: 'Emotion.js' },
    ],
  },
  {
    id: 2,
    name: 'Portfolio',
    description: '- This website!',
    modalAbout: `Project for showcasing my experience and easily get in contact with me.`,
    placeholderMainImage: {
      imageUrl: 'images/briefcase-solid.svg',
      alt: 'Placeholder UI in insights application',
    },
    mainImage: {
      imageUrl: 'images/briefcase-solid.svg',
      alt: 'Placeholder for Smart Refills logo',
    },
    modalPlaceholderImage: {
      imageUrl: 'images/modals/placeholders/insights.webp',
      alt: 'Placeholder for UI in insights',
    },
    modalImage: {
      imageUrl: 'images/briefcase-solid.svg',
      alt: 'UI in Portfolio',
    },

    tags: [
      { id: 2, tag: 'React' },
      { id: 1, tag: 'TypeScript' },
      { id: 3, tag: 'Redux' },
      { id: 4, tag: 'Chakra UI' },
      { id: 10, tag: 'Emotion.js' },
      { id: 9, tag: 'Git' },
    ],
    links: {
      github: 'https://github.com/Martin-Johnsson',
      liveExample: 'https://martinjohnsson.dev/',
    },
  },
  {
    id: 3,
    name: 'Times',
    description: '- Time management system',
    modalAbout: `I maintained and further developed a time management system during my first intern period at Knowit. I increased efficiency through functions and UX focused UI to new feature.`,
    placeholderMainImage: {
      imageUrl: 'knowitPlaceholder.jpg',
      alt: 'Placeholder for Knowits logo',
    },
    mainImage: {
      imageUrl: 'images/front/knowitFront.png',
      alt: 'Knowits logo',
    },
    modalPlaceholderImage: {
      imageUrl: 'images/modals/placeholders/times.webp',
      alt: 'Placeholder for insights Modal',
    },
    modalImage: {
      imageUrl: 'images/modals/timesModal.png',
      alt: 'UI in times application',
    },
    tags: [
      { id: 1, tag: 'Angular' },
      { id: 2, tag: 'JavaScript' },
      { id: 3, tag: 'Redux' },
      { id: 4, tag: 'CSS' },
      { id: 5, tag: 'Scrum' },
      { id: 6, tag: '.Net' },
      { id: 7, tag: 'PostGreSQL' },
    ],
  },
  {
    id: 4,
    name: 'E-wallet',
    description:
      '- An digital wallet for credit cards (In progress to be migrated to Vite, TypeScript, React-router v.6, improve Redux structure and use emotion.js)',
    modalAbout: `The end goal was to let the user store, create and delete credit cards.`,
    placeholderMainImage: {
      imageUrl: 'images/placeholders/eWalletPlaceholder.jpg',
      alt: 'Placeholder picture from UI of Ewallet application',
    },
    mainImage: {
      imageUrl: 'images/front/eWalletFront.png',
      alt: 'Picture of UI of Ewallet application',
    },
    modalPlaceholderImage: {
      imageUrl: 'eWalletl.webp',
      alt: 'Placeholder picture of Insights Modal',
    },
    modalImage: {
      imageUrl: 'images/modals/eWalletModal.png',
      alt: 'Another picture of UI of Ewallet application',
    },
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
