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
        gridTemplateRows='2vw'
        gridTemplateColumns=''
      >
        <GridItem
          bg='#242424'
          area='header'
          position='fixed'
          zIndex='1'
          width='100vw'
          height='10.5vh'
        >
          <HeaderLayout />
        </GridItem>

        <GridItem className='main' area='main' bg='#231F20'>
          <Outlet />
        </GridItem>
      </Grid>
    </>
  );
};

export default BaseLayout;
