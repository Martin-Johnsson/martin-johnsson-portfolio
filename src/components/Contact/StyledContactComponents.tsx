import styled from '@emotion/styled';

import { theme } from '../../globalStyles/theme.ts';

const { textColor, primaryAccentColor, secondaryBackgroundColor } = theme;

export const ContactSection = styled.section`
  text-align: center;
  height: 100vh;
  margin-top: 15vh;
  margin-bottom: 10vh;
  width: 100vw;
`;

export const FormHeading = styled.h1`
  font-size: 3rem;
  display: block;
  margin-top: 4vh;
  margin-bottom: 4vh;
  font-weight: 800;
  color: ${textColor};
`;

export const CustomInput = styled.input`
  background-color: #313031;
  color: ${textColor};
  border: 0.2vw solid ${textColor};
  text-align: center;
  padding: 2vh 10vw;
  font-size: 2vw;
  font-weight: 800;
  &:hover {
    border: none;
    background-color: ${secondaryBackgroundColor};
    color: ${primaryAccentColor};
    cursor: pointer;
  }
  &:active {
    background-color: ${secondaryBackgroundColor};
    border: none;
  }
`;
