import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { render } from 'src/utils/test-utils';
import Introduction from './Introduction';

describe('Introduction', () => {
  test('should render without errors', async () => {
    //Arrange
    render(<Introduction />);

    const introduction = screen.getByText('Hi!');

    // Act

    // Assert

    expect(introduction).toBeInTheDocument();
  });
});
