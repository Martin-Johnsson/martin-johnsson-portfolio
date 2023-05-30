import { Box, Flex, Menu } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { NavLink, Navigate, Outlet, useNavigate } from 'react-router-dom';
import {
  StyledHeaderMenuItem,
  StyledNavLink,
  BigHeading,
  HeaderName,
} from '../StyledComponents';

const HeaderLayout = () => {
  const navigate = useNavigate();

  return (
    <header>
      <Menu>
        <Flex justifyContent='space-evenly' mt='2.5vh'>
          <Box>
            <StyledNavLink to='/'>
              <StyledHeaderMenuItem>
                <HeaderName>MARTIN JOHNSSON</HeaderName>
              </StyledHeaderMenuItem>
            </StyledNavLink>
          </Box>
          <Box>
            <StyledNavLink to='/portfolio'>
              <StyledHeaderMenuItem>
                <HeaderName>Portfolio</HeaderName>
              </StyledHeaderMenuItem>
            </StyledNavLink>
          </Box>
          <Box>
            <StyledNavLink to='/test1'>
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
