import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import HeaderLayout from 'layout/HeaderLayout';
import Links from 'components/SocialLinks/SocialLinks';

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
          h='12vh'
        >
          <HeaderLayout />
        </GridItem>
        <GridItem className='main' area='main' bg='#15181a' minHeight='100vh'>
          <main>
            <Links />
            <Outlet />
          </main>
        </GridItem>
      </Grid>
    </>
  );
};

export default BaseLayout;
