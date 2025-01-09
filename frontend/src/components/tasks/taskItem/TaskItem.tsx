import { ListItem } from '@chakra-ui/react';

const TaskItem = (props) => {
  return <ListItem>{props.taskName}</ListItem>;
};
export default TaskItem;
