import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';

import { render } from 'utils/test-utils';
import ContactForm from 'components/contact/ContactForm';

describe('ContactForm', () => {
  test('should render without errors', async () => {
    //Arrange
    render(<ContactForm />);

    const contactHeading = screen.getByText('Want to get in contact?');

    // Assert

    expect(contactHeading).toBeInTheDocument();
  });
});
