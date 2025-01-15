import styled from '@emotion/styled';
import theme from 'shared/styles/theme/theme';

export const ViewProjectsButton = styled.button`
  background-color: ${theme.colors.shared.buttons.confirmButton
    .backgroundColor};
  color: #f5f0f0;
  border: 0.2vw solid ${theme.colors.shared.buttons.confirmButton.borderColor};
  margin-top: 1vh;
  padding: 1.5rem 2rem;
  font-size: 1rem;
  font-weight: 800;
  border-radius: 40px;
  &:hover {
    border: none;
    cursor: pointer;
  }
  &:active {
    border: none;
  }
`;

//Mobile

export const ProjectsHeader = styled.h4`
  font-size: 1rem;
  font-weight: 700;
  margin: 2rem 0;
`;
