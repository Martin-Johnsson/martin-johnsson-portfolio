import { Heading, ListItem, Text, useColorMode } from '@chakra-ui/react';

const TaskItem = (props) => {
  const { colorMode } = useColorMode();

  return (
    <ListItem>
      <Heading as='h6' fontSize='0.95rem'>
        {props.taskName}
      </Heading>
      <Text color={`${colorMode}.secondaryTextColor`} ml='2%'>
        {props.description}
      </Text>
    </ListItem>
  );
};
export default TaskItem;
