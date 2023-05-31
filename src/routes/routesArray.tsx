import Splash from './Splash';
import BaseLayout from '../layout/BaseLayout';
import Portfolio from './Portfolio';
import Contact from '../components/Contact';

export const routes = [
  {
    element: [<BaseLayout />],
    children: [
      {
        path: '/',
        index: true,
        element: <Splash />,
      },
      {
        path: 'portfolio',
        index: true,
        element: <Portfolio />,
      },
      {
        path: 'contact',
        index: true,
        element: <Contact />,
      },
    ],
  },
];
