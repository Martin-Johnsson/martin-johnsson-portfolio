import { Box, Flex, Link } from '@chakra-ui/react';
import { ILinks } from 'shared/types/interfaces';

interface ISocialLinksProps {
  links: ILinks[];
}

const SocialLinks = (props: ISocialLinksProps) => {
  return (
    <Flex w='100%' h='10vh' m='1rem 0 0 0' gap='2rem'>
      {props.links.map((link) => (
        <Box key={parseInt(link.id)}>
          <Link isExternal href={link.href}>
            <Box as='i' fontSize='2.5rem'>
              <i className={link.icon} />
            </Box>
          </Link>
        </Box>
      ))}
    </Flex>
  );
};

export default SocialLinks;
