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
              <NavLink to='/' onClick={scrollToTop}>
                <NameHeader>MARTIN JOHNSSON</NameHeader>
              </NavLink>
            </Box>
            <Box marginLeft='10vw'>
              <StyledNavLink to='/portfolio' onClick={scrollToTop}>
                <StyledHeaderMenuItem>
                  <HeaderName>Portfolio</HeaderName>
                </StyledHeaderMenuItem>
              </StyledNavLink>
            </Box>
            <Box marginLeft='10vw'>
              <StyledNavLink to='/contact' onClick={scrollToTop}>
                <StyledHeaderMenuItem>
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
