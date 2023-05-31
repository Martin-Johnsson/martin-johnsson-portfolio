import Skills from '../components/Skills';
import Projects from '../components/Projects';
import '../styles/index.css';
import Contact from '../components/Contact';
import { Box, Flex, Link } from '@chakra-ui/react';
import { SmallBodyText, SmallLinksText } from '../styles/StyledComponents';
import Links from '../components/Links';
const Portfolio = () => {
  return (
    <>
      <main>
        <Skills />
        <Projects />
      </main>
    </>
  );
};

export default Portfolio;
