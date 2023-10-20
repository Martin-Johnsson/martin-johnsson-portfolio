import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { render } from 'src/utils/test-utils';
import ContactForm from './ContactForm';

describe('Contact Form', () => {
  test('should render without errors', async () => {
    //Arrange
    render(<ContactForm />);

    const introduction = screen.getByText('Want to get in contact?');

    // Assert

    expect(introduction).toBeInTheDocument();
  });
});
