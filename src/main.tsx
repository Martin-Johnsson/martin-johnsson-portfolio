import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/index.css';
import { ChakraProvider } from '@chakra-ui/react';
import { routes } from './routes/routesArray';
import { Provider } from 'react-redux';
import store from './redux/store';

const router = createBrowserRouter(routes, {
  basename: '/martin-johnsson-portfolio/',
});
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider>
        <RouterProvider router={router} />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
