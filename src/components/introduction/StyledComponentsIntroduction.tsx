import styled from '@emotion/styled';
import { theme } from '../../globalStyles/theme';

const { secondaryBackgroundColor, textColor, primaryAccentColor } = theme;

export const PortfolioHomeContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 15vh;
`;

export const ToProjectsButton = styled.button`
  background-color: ${secondaryBackgroundColor};
  color: #f5f0f0;
  border: 0.2vw solid ${textColor};
  text-align: center;
  margin-top: 1vh;
  padding: 8vh 4vw;
  font-size: 1.5rem;
  font-weight: 800;
  &:hover {
    border: none;
    background-color: ${secondaryBackgroundColor};
    color: ${primaryAccentColor};
    cursor: pointer;
  }
  &:active {
    border: none;
  }
`;
