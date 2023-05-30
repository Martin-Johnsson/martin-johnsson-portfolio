import HeaderLayout from '../layout/HeaderLayout';
import Splash from './Splash';
import BaseLayout from '../layout/BaseLayout';
import Portfolio from './Portfolio';

export const routes = [
  {
    element: <BaseLayout />,
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
    ],
  },
];
