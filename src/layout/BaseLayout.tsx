import { Box, Grid, GridItem, Flex } from '@chakra-ui/react';
import React from 'react';
import HeaderLayout from './HeaderLayout';
import { Link, Outlet } from 'react-router-dom';
import { SmallLinksText } from '../styles/StyledComponents';
import Links from '../components/Links';

const BaseLayout = () => {
  return (
    <>
      <Grid
        templateAreas={`"header"
                  "main"
                  `}
        gridTemplateColumns='100vw'
      >
        <GridItem
          bg='#242424'
          area='header'
          position='fixed'
          zIndex='1'
          width='100vw'
        >
          <HeaderLayout />
        </GridItem>

        <GridItem className='main' area='main' bg='#15181a' minHeight='95vh'>
          <Links />
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
};

export default BaseLayout;
