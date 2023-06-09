import Splash from './Splash';
import BaseLayout from '../layout/BaseLayout';
import Contact from '../components/Contact';
import Projects from '../components/Projects';

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
