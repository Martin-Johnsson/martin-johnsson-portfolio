import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import { PortfolioHomeContainer } from 'src/components/introduction/StyledComponentsIntroduction';
import {
  BigHeading,
  MediumHeading,
  NavigateBackText,
} from '../../globalStyles/GlobalStyledComponents';

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
