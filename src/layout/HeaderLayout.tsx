import { Box, Flex, Menu } from '@chakra-ui/react';
import { NavLink, useNavigate } from 'react-router-dom';

import {
  StyledHeaderMenuItem,
  StyledNavLink,
  HeaderName,
  NameHeader,
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
            <NavLink to='/'>
              <NameHeader>MARTIN JOHNSSON</NameHeader>
            </NavLink>
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
