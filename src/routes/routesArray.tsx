import { RouteObject } from 'react-router-dom';

import 'globalStyles/index.css';
import BaseLayout from 'layout/BaseLayout';
import Contact from 'routes/pages/Contact';
import Projects from 'routes/pages/Projects';
import Landing from 'routes/pages/Landing';
import NotFound from 'routes/pages/NotFound';

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
