import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  BigHeading,
  NavigateBackText,
  PortfolioHomeContainer,
} from '../../globalStyles/GlobalStyledComponents';
import { MediumHeading } from '../../globalStyles/GlobalStyledComponents';

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
