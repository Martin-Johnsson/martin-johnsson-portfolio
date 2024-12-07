import {
  MobileScreenHeader,
  StyledNavLink,
} from 'shared/layouts/headerLayout/StyledComponentsHeaderLayout';
import { StyledHeaderMenuItem } from 'shared/styles/GlobalStyledComponents';

import { useNavigate } from 'react-router-dom';
import { Box, Flex, Menu, useBreakpointValue } from '@chakra-ui/react';

const HeaderLayout = () => {
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const isMobileScreenSize = useBreakpointValue({ base: true, lg: false });

  return (
    <MobileScreenHeader>
      <nav aria-label='In-page jump links'>
        <Menu>
          <Flex>
            <Box
              onClick={() => {
                navigate('/');
                scrollToTop();
              }}
              cursor='pointer'
            >
              <StyledHeaderMenuItem>
                <StyledNavLink
                  aria-label='Navigation to home page'
                  to='/'
                  onClick={scrollToTop}
                >
                  Home
                </StyledNavLink>
              </StyledHeaderMenuItem>
            </Box>
            <Box>
              <StyledHeaderMenuItem>
                <StyledNavLink
                  aria-roledescription='Navigate to projects page'
                  to='/projects'
                  onClick={scrollToTop}
                >
                  Projects
                </StyledNavLink>
              </StyledHeaderMenuItem>
            </Box>
            <Box>
              <StyledHeaderMenuItem>
                <StyledNavLink
                  aria-roledescription='Navigate to Contact page'
                  to='/contact'
                  onClick={scrollToTop}
                >
                  Contact
                </StyledNavLink>
              </StyledHeaderMenuItem>
            </Box>
          </Flex>
        </Menu>
      </nav>
    </MobileScreenHeader>
  );
};

export default HeaderLayout;
