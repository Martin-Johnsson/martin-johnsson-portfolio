import { Box, Flex, Menu } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import {
  StyledHeaderMenuItem,
  StyledNavLink,
  HeaderLayoutHomeNavigationTabText,
  HeaderLayoutSecondaryNavigationTabText,
} from '../globalStyles/GlobalStyledComponents';

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
              w='40vw'
            >
              <StyledHeaderMenuItem>
                <StyledNavLink
                  aria-roledescription='Navigation to home page'
                  to='/'
                  onClick={scrollToTop}
                >
                  <HeaderLayoutHomeNavigationTabText>
                    MARTIN JOHNSSON
                  </HeaderLayoutHomeNavigationTabText>
                </StyledNavLink>
              </StyledHeaderMenuItem>
            </Box>
            <Box w='30vw'>
              <StyledHeaderMenuItem>
                <StyledNavLink
                  aria-roledescription='Navigate to projects page'
                  to='/projects'
                  onClick={scrollToTop}
                >
                  <HeaderLayoutSecondaryNavigationTabText>
                    Projects
                  </HeaderLayoutSecondaryNavigationTabText>
                </StyledNavLink>
              </StyledHeaderMenuItem>
            </Box>
            <Box w='30vw'>
              <StyledHeaderMenuItem>
                <StyledNavLink
                  aria-roledescription='Navigate to Contact page'
                  to='/contact'
                  onClick={scrollToTop}
                >
                  <HeaderLayoutSecondaryNavigationTabText>
                    Contact
                  </HeaderLayoutSecondaryNavigationTabText>
                </StyledNavLink>
              </StyledHeaderMenuItem>
            </Box>
          </Flex>
        </Menu>
      </nav>
    </header>
  );
};

export default HeaderLayout;
