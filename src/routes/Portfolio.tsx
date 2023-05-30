import Skills from '../components/Skills';
import Projects from '../components/Projects';
import '../styles/index.css';
import Contact from '../components/Contact';
import { Box, Flex } from '@chakra-ui/react';
const Portfolio = () => {
  return (
    <main>
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
};

export default Portfolio;
