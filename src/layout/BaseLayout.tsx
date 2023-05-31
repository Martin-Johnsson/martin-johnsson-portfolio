import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import HeaderLayout from './HeaderLayout';
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
