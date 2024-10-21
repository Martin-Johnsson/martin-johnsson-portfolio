import { RouteObject } from 'react-router-dom';

import 'shared/globalStyles/index.css';

import BaseLayout from 'shared/layouts/BaseLayout';
import Contact from 'routes/contact/Contact';
import Projects from 'routes/pages/projects/Projects';
import Landing from 'routes/landing/Landing';
import NotFound from 'routes/pages/notFound/NotFound';

export const routes: RouteObject[] = [
  {
    element: <BaseLayout />,
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
