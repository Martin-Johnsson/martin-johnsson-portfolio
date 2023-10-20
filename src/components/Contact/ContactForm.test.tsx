import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { render } from 'src/utils/test-utils';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  test('should render without errors', async () => {
    //Arrange
    render(<ContactForm />);

    const contactHeading = screen.getByText('Want to get in contact?');

    // Assert

    expect(contactHeading).toBeInTheDocument();
  });
});
