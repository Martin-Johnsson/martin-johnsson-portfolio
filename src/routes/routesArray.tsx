import { RouteObject } from 'react-router-dom';

import Splash from './pages/Splash';
import BaseLayout from '../layout/BaseLayout';
import Contact from '../components/Contact';
import Projects from '../components/Projects';

export const routes: RouteObject[] = [
  {
    element: [<BaseLayout />],
    children: [
      {
        path: '/',
        index: true,
        element: <Splash />,
      },
      {
        path: 'projects',
        index: true,
        element: <Projects />,
      },
      {
        path: 'contact',
        index: true,
        element: <Contact />,
      },
    ],
  },
];
