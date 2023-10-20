import { RouteObject } from 'react-router-dom';

import BaseLayout from 'src/layout/BaseLayout';
import Contact from 'srccomponents/contact/ContactForm';
import Projects from 'src/components/previousProjects/PreviousProjects';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';

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
      {
        path: '*',
        index: true,
        element: <NotFound />,
      },
    ],
  },
];
