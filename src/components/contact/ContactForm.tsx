import { FormEvent, RefObject, useRef, FC } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import { Form, Field } from 'react-final-form';
import emailjs from '@emailjs/browser';
import { useDispatch, useSelector } from 'react-redux';
import { Dispatch } from '@reduxjs/toolkit';

import { IContactState } from 'types/interfaces';
import { BigHeading, MediumHeading } from 'globalStyles/GlobalStyledComponents';
import {
  ContactSection,
  CustomInput,
  FormHeading,
} from 'components/contact/StyledContactComponents';

import { RootState } from 'redux/store';

const ContactForm: FC = () => {
  const form: RefObject<any> = useRef(null);
  const contactState: IContactState = useSelector(
    (state: RootState) => state.contact
  );

  const dispatch: Dispatch = useDispatch();

  const sendEmail = (e: FormEvent) => {
    dispatch({ type: 'contact/setEmailSubmitting', payload: true });
    e.preventDefault();

    emailjs
      .sendForm(
        'service_d50ilwq',
        'template_xi8lakz',
        form.current,
        'yMXVx3voDrb0mDPl6'
      )
      .then(
        () => {
          dispatch({ type: 'contact/setEmailSubmitted', payload: true });
          dispatch({ type: 'contact/setEmailSubmitting', payload: false });
        },
        (error) => {
          console.error(error);
        }
      );
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <ContactSection>
      <Box>
        {!contactState.emailSubmitting && !contactState.emailSubmitted && (
          <Box>
            <Box marginBottom='5vh'>
              <FormHeading>Want to get in contact?</FormHeading>
              <MediumHeading>
                Use the form below to send me an email
              </MediumHeading>
            </Box>
            <Form
              onSubmit={sendEmail}
              render={() => (
                <form ref={form} onSubmit={sendEmail}>
                  <Flex direction='column' gap='6vh' className='text-center'>
                    <Box>
                      <label htmlFor='name' />
                      <Field
                        name='user_name'
                        component='input'
                        type='text'
                        placeholder='Your Name'
                        required='true'
                      ></Field>
                    </Box>
                    <Box>
                      <label htmlFor='Test' />
                      <Field
                        name='user_email'
                        component='input'
                        type='email'
                        placeholder='someone@abc.com'
                        required='true'
                      ></Field>
                    </Box>
                    <Box resize='vertical'>
                      <label htmlFor='message' />
                      <Field
                        name='message'
                        component='textarea'
                        type='text'
                        placeholder="What's on your mind?"
                        style={{ width: '70vw', height: '30vh' }}
                        required='true'
                      ></Field>
                    </Box>
                    <Box>
                      <CustomInput type='submit' value='Send' />
                    </Box>
                  </Flex>
                </form>
              )}
            ></Form>
          </Box>
        )}
      </Box>

      {!contactState.emailSubmitting && contactState.emailSubmitted && (
        <Box marginTop='10vh'>
          <BigHeading>Thank you!</BigHeading>
          <BigHeading>I'll get back to you as soon as possible.</BigHeading>
        </Box>
      )}
      {contactState.emailSubmitting && <BigHeading>Sending...</BigHeading>}
    </ContactSection>
  );
};

export default ContactForm;
