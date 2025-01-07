import { RouteObject } from 'react-router-dom';

import 'shared/styles/globalStyles/index.css';

import BaseLayout from 'shared/layouts/BaseLayout/BaseLayout';
import Contact from 'routes/contact/Contact';
import Projects from 'routes/projects/Projects';
import Home from 'routes/home/Home';
import NotFound from 'routes/notFound/NotFound';

export const routes: RouteObject[] = [
  {
    element: <BaseLayout />,
    children: [
      {
        path: '/',
        index: true,
        element: <Home />,
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
