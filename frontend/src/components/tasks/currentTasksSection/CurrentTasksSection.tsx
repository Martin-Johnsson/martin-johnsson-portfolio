import { useColorMode, Box, Heading } from '@chakra-ui/react';

import TaskList from 'components/tasks/taskList/TaskList';

const CurrentTasksSection = (props) => {
  const { colorMode } = useColorMode();

  return (
    <section>
      <Box
        borderRadius='15px'
        w='80vw'
        backgroundColor={`${colorMode}.backgrounds.accenture`}
        mb='4vh'
      >
        <Box textAlign='center' p='2vh'>
          {!props.loadedTaskss || props.loadedTasks.length === 0 ? (
            <Heading as='h4' fontSize='0.7rem' color='shared.text.warning'>
              Trying to load tasks failed, please try again.
            </Heading>
          ) : (
            <>
              <Box as='i' color='#d59046' className='fa-solid fa-bullhorn' />
              <Heading
                as='h4'
                display='inline'
                fontSize='1rem'
                fontWeight='1000'
              >
                {' '}
                Currently in Task Pipeline
              </Heading>
              <TaskList loadedTasks={props.loadedTasks} />
              <Box />
            </>
          )}
        </Box>
      </Box>
    </section>
  );
};

export default CurrentTasksSection;
