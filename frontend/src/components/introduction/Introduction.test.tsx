import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { render } from 'utils/test-utils';
import Introduction from 'components/introduction//Introduction';

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
  test(`should send user to Projects upon pressing "View my projects`, async () => {
    //Arrange
    render(<Introduction />);

    const viewMyProjectsButton = screen.getByRole('button');

    const InsightsProjectHeading = screen.findByText('Insights');

    // Act
    await userEvent.click(viewMyProjectsButton);

    // Asser
    expect(InsightsProjectHeading);
  });
});
