import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { RenderOptions, render } from '@testing-library/react';

import store from 'src/redux/store';

const testWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <MemoryRouter>{children}</MemoryRouter>
    </Provider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: testWrapper, ...options });

export { customRender as render };
