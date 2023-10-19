import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { render } from '../../utils/test-utils';
import Welcome from './Welcome';

describe('Welcome', () => {
  test('should render without errors', async () => {
    // Arrange
    render(<Welcome />);
    const WelcomeText = screen.getByRole('Heading');
    // Assert
    expect(WelcomeText).toBeTruthy();
  });
});
