import {
  BigHeading,
  BodyText,
  NavigateBackText,
  PortfolioHomeContainer,
} from '../..//styles/StyledComponents';
import { FC } from 'react';
import { MediumHeading } from '../../styles/StyledComponents';
import { useNavigate } from 'react-router-dom';
const NotFound: FC = () => {
  const navigate = useNavigate();

  const handleNavigateBack = () => {
    navigate(-1);
  };

  return (
    <PortfolioHomeContainer>
      <BigHeading>Ooooops...</BigHeading>
      <MediumHeading>The page was not found</MediumHeading>
      <NavigateBackText onClick={handleNavigateBack}>
        Get back safely
      </NavigateBackText>
    </PortfolioHomeContainer>
  );
};

export default NotFound;
