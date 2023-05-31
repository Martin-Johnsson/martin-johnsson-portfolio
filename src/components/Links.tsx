import { Box, Flex, Link } from '@chakra-ui/react';

import { SmallLinksText } from '../styles/StyledComponents';

const Links = () => {
  return (
    <>
      <Flex
        direction='column'
        zIndex='3'
        position='fixed'
        marginTop='40vh'
        marginLeft='0.1vw'
        border='0.1vw solid #ffff'
        color='#ffff'
      >
        <Link isExternal href='https://github.com/Martin-Johnsson'>
          <Box
            backgroundColor='#15181a'
            height='10vh'
            border='0.1vw solid #ffff'
          >
            <SmallLinksText>
              <i className='fa-brands fa-github'></i> GitHub
            </SmallLinksText>
          </Box>
        </Link>
        <Link
          isExternal
          href='https://www.linkedin.com/in/martin-ola-andreas-johnsson/'
        >
          <Box
            backgroundColor='#0073b1'
            height='10vh'
            border='0.1vw solid #ffff'
          >
            <SmallLinksText>
              <i className='fa-brands fa-linkedin'></i> Linkedin
            </SmallLinksText>
          </Box>
        </Link>
        <Link download href='/files/Resume, Martin Johnsson.pdf'>
          <Box
            backgroundColor='#34eb7a'
            height='10vh'
            border='0.1vw solid #ffff'
          >
            <SmallLinksText>
              <i className='fa-regular fa-file'></i> Resume
            </SmallLinksText>
          </Box>
        </Link>
      </Flex>
    </>
  );
};

export default Links;
