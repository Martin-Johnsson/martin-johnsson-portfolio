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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header>
      <nav>
        <Menu>
          <Flex alignItems={'center'} h='12vh'>
            <Box
              onClick={() => {
                navigate('/');
                scrollToTop();
              }}
              cursor='pointer'
            >
              <NavLink to='/'>
                <NameHeader>MARTIN JOHNSSON</NameHeader>
              </NavLink>
            </Box>
            <Box marginLeft='10vw'>
              <StyledNavLink to='/portfolio'>
                <StyledHeaderMenuItem onClick={scrollToTop}>
                  <HeaderName>Portfolio</HeaderName>
                </StyledHeaderMenuItem>
              </StyledNavLink>
            </Box>
            <Box marginLeft='10vw'>
              <StyledNavLink to='/contact'>
                <StyledHeaderMenuItem onClick={scrollToTop}>
                  <HeaderName>Contact</HeaderName>
                </StyledHeaderMenuItem>
              </StyledNavLink>
            </Box>
          </Flex>
        </Menu>
      </nav>
    </header>
  );
};

export default HeaderLayout;
