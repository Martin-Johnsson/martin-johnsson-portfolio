import { Box, Flex, Menu } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import {
  StyledHeaderMenuItem,
  StyledNavLink,
  HeaderName,
} from '../styles/StyledComponents';

const HeaderLayout = () => {
  const navigate = useNavigate();

  return (
    <header>
      <Menu>
        <Flex>
          <Box
            onClick={() => {
              navigate('/');
            }}
            cursor='pointer'
            marginLeft='2vw'
          >
            <StyledNavLink>
              <HeaderName>MARTIN JOHNSSON</HeaderName>
            </StyledNavLink>
          </Box>
          <Box marginLeft='10vw'>
            <StyledNavLink to='/portfolio'>
              <StyledHeaderMenuItem>
                <HeaderName>Portfolio</HeaderName>
              </StyledHeaderMenuItem>
            </StyledNavLink>
          </Box>
          <Box marginLeft='10vw'>
            <StyledNavLink to='/contact'>
              <StyledHeaderMenuItem>
                <HeaderName>Contact</HeaderName>
              </StyledHeaderMenuItem>
            </StyledNavLink>
          </Box>
        </Flex>
      </Menu>
    </header>
  );
};

export default HeaderLayout;
