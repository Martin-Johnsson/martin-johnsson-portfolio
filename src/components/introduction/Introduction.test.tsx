import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

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

  test(`should send user to Contact upon pressing "Let's get in touch`, async () => {
    //Arrange
    render(<Introduction />);

    const letsGetInTouchHeading = screen.getByText(`Let's get in touch!`);

    const contactHeadingText = screen.findByText('Want to get in contact?');

    // Act
    await userEvent.click(letsGetInTouchHeading);

    // Assert
    expect(contactHeadingText);
  });
});
