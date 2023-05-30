import { Grid, GridItem } from '@chakra-ui/react';
import React from 'react';
import HeaderLayout from './HeaderLayout';
import { Outlet } from 'react-router-dom';

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
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
};

export default BaseLayout;
