import { Box } from '@chakra-ui/react';
import theme from 'shared/styles/theme/theme';

const Footer = () => {
  const { primaryTextColor } = theme;

  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Box color={primaryTextColor}>
        <small>&copy; Martin Johnsson {currentYear}</small>
      </Box>
    </footer>
  );
};

export default Footer;
