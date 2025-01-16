import { Grid, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Footer from 'shared/components/Footer/Footer';
import HeaderLayout from 'shared/layouts/HeaderLayout/HeaderLayout';
import { useState } from 'react';

const BaseLayout = () => {
  const [showNavigation, setShowNavigation] = useState(false);

  const onScroll = () => {
    setShowNavigation(false);
  };

  window.addEventListener('scroll', onScroll);

  const onHeaderButtonClick = () => {
    setShowNavigation(!showNavigation);
  };

  return (
    <Grid
      templateAreas={`"header"
                  "main"
                  "footer"
                  `}
      gridTemplateColumns='1fr'
      position='relative'
      minH='100%'
      overflow='hidden'
    >
      <GridItem area='header' position='fixed' zIndex='1' minW='100%' h='10%'>
        <HeaderLayout
          showNavigation={showNavigation}
          onHeaderButtonClick={onHeaderButtonClick}
        />
      </GridItem>
      <GridItem
        area='main'
        position='relative'
        margin={{ base: 'inherit', md: '0 auto 5% auto' }}
      >
        <main>
          <Outlet />
        </main>
      </GridItem>
      <GridItem
        area='footer'
        position='relative'
        margin={{ base: 'inherit', md: '0 auto 5% auto' }}
      >
        <Footer />
      </GridItem>
    </Grid>
  );
};

export default BaseLayout;
