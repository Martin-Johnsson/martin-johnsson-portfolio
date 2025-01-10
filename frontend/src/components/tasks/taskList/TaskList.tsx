import { OrderedList } from '@chakra-ui/react';

import TaskItem from 'components/tasks/taskItem/TaskItem';

const TaskList = (props) => {
  return (
    <OrderedList listStyleType='circle' fontSize='0.9rem' ml='10%'>
      {props.loadedTasks ? (
        props.loadedTasks.map((task) => (
          <TaskItem
            taskName={task.taskName}
            description={task.description}
            key={task.id}
          />
        ))
      ) : (
        <TaskItem taskName='No current tasks.' />
      )}
    </OrderedList>
  );
};

export default TaskList;
