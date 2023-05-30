import React from 'react';
import { BigHeading, ContactSection, FormHeading } from '../StyledComponents';
import { Box, Flex } from '@chakra-ui/react';
import { Form, Field } from 'react-final-form';

const Contact = () => {
  const onSubmit = () => {
    console.log('test');
  };

  return (
    <ContactSection>
      <Box>
        <FormHeading>Contact</FormHeading>
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit }) => (
            <form>
              <Flex direction='column' gap='6vh' className='text-center'>
                <Box>
                  <label htmlFor='name' />
                  <Field
                    name='name'
                    component='input'
                    type='text'
                    placeholder='Your Name'
                    required='true'
                  ></Field>
                </Box>

                <Box>
                  <label htmlFor='Test' />
                  <Field
                    name='email'
                    component='input'
                    type='email'
                    placeholder='Your Email'
                    required='true'
                  ></Field>
                </Box>
                <Box>
                  <label htmlFor='title' />
                  <Field
                    name='title'
                    component='input'
                    type='text'
                    placeholder='Title'
                    required='true'
                  ></Field>
                </Box>
                <Box resize='vertical'>
                  <label htmlFor='userInput' />
                  <Field
                    name='name'
                    component='textarea'
                    type='text'
                    placeholder='What´s on your mind?'
                    style={{ width: '70vw', height: '30vh' }}
                    required='true'
                  ></Field>
                </Box>
                <button>SUBMIT</button>
              </Flex>
            </form>
          )}
        ></Form>
      </Box>
    </ContactSection>
  );
};

export default Contact;
