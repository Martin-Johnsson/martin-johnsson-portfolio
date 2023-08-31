import { RouteObject } from 'react-router-dom';

import BaseLayout from '../layout/BaseLayout';
import Contact from '../components/ContactForm';
import Projects from '../components/previousProjects/PreviousProjects';
import Landing from './pages/Landing';

export const routes: RouteObject[] = [
  {
    element: [<BaseLayout />],
    children: [
      {
        path: '/',
        index: true,
        element: <Landing />,
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
