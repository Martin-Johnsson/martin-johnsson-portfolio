import { useColorMode, ListItem, UnorderedList } from '@chakra-ui/react';
import { ITag } from 'shared/types/interfaces';

const ProjectTags = (props) => {
  const { colorMode } = useColorMode();
  return (
    <UnorderedList m='0' w='100%'>
      {props.tags.map((tag: ITag) => {
        return (
          <ListItem
            key={tag.id}
            borderRadius='0.6rem'
            color={`${colorMode}.accentureTextColor`}
            backgroundColor={`${colorMode}.backgrounds.accenture`}
            display='inline'
            fontSize='0.7em'
            margin='0 1% 2% 0'
            padding='0.15rem'
          >
            {tag.name}
          </ListItem>
        );
      })}
    </UnorderedList>
  );
};

export default ProjectTags;
