import { Box, Flex, Link } from '@chakra-ui/react';

import { SmallLinksText } from '../styles/StyledComponents';

const Links = () => {
  return (
    <>
      <Flex
        direction='column'
        zIndex='3'
        position='fixed'
        marginTop='60vh'
        marginLeft='0.1vw'
        border='0.1vw solid #000000'
        color='#f5f0f0'
        h='25vh'
      >
        <Link isExternal href='https://github.com/Martin-Johnsson'>
          <Box
            backgroundColor='#15181a'
            height='6.2vh'
            border='0.1vw solid #f5f0f0'
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
            height='6.2vh'
            border='0.1vw solid #f5f0f0'
          >
            <SmallLinksText>
              <i className='fa-brands fa-linkedin'></i> Linkedin
            </SmallLinksText>
          </Box>
        </Link>
        <Link download href='/files/Resume, Martin Johnsson.pdf'>
          <Box
            backgroundColor='#f79d14'
            height='6.2vh'
            border='0.1vw solid #f5f0f0'
          >
            <SmallLinksText>
              <i className='fa-regular fa-file'></i> (EN)Resume
            </SmallLinksText>
          </Box>
        </Link>
        <Link download href='/files/CV, Martin Johnsson.pdf'>
          <Box
            backgroundColor='#f79d14'
            height='6.2vh'
            border='0.1vw solid #f5f0f0'
          >
            <SmallLinksText>
              <i className='fa-regular fa-file'></i> (SV)Resume
            </SmallLinksText>
          </Box>
        </Link>
      </Flex>
    </>
  );
};

export default Links;
