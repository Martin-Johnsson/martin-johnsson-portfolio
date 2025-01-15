import { Box, Flex, Link } from '@chakra-ui/react';

interface ILinks {
  href: string;
  icon: string;
  id: string;
}

const SocialLinks = () => {
  const links: ILinks[] = [
    {
      href: 'https://github.com/Martin-Johnsson',
      icon: 'fa-brands fa-github',
      id: '1',
    },
    {
      href: 'https://www.linkedin.com/in/martin-ola-andreas-johnsson',
      icon: 'fa-brands fa-linkedin',
      id: '2',
    },
    {
      href: 'mailto:maartinjohnsson@gmail.com',
      icon: 'fa-regular fa-envelope',
      id: '3',
    },
  ];

  return (
    <Flex w='100%' h='10vh' m='1rem 0 0 0' gap='2rem'>
      {links.map((link) => (
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
