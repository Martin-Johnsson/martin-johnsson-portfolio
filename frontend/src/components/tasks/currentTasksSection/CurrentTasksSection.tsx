import { useColorMode, Box, Heading } from '@chakra-ui/react';

import TaskList from 'components/tasks/taskList/TaskList';
import LoadingSpinner from 'shared/components/LoadingSpinner/LoadingSpinner';

import { MobileSmallBodyText } from 'shared/styles/GlobalStyledComponents';

const CurrentTasksSection = (props) => {
  const { colorMode } = useColorMode();

  return (
    <section>
      <Box
        borderRadius='15px'
        w='80vw'
        backgroundColor={`${colorMode}.backgrounds.accenture`}
        mb='4vh'
        p='2vh 4vw 2vh 0vw'
      >
        <Box>
          {props.isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              {!props.loadedTasks || props.loadedTasks.length === 0 ? (
                <Heading as='h4' fontSize='0.9rem' color='shared.text.warning'>
                  Trying to load tasks failed, please try again.
                </Heading>
              ) : (
                <>
                  <Box>
                    <Box
                      as='i'
                      className='fa-solid fa-bullhorn'
                      color='#d59046'
                      fontSize='1.1rem'
                    />{' '}
                    <Heading
                      as='h4'
                      display='inline'
                      fontSize='0.9rem'
                      fontWeight='900'
                    >
                      CURRENT TASK PIPELINE
                    </Heading>
                  </Box>
                  <TaskList
                    loadedTasks={props.loadedTasks}
                    isLoading={props.isLoading}
                  />
                  <Box />
                </>
              )}
            </>
          )}
        </Box>
      </Box>
    </section>
  );
};

export default CurrentTasksSection;
