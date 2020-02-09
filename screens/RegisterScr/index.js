import React, { useState } from 'react';
import axios from 'axios';
import { View, Text } from 'react-native';
import { Button, Form } from 'native-base';
import { useNavigation } from 'react-navigation-hooks';
import { FlowWrapper, TitleAndText, GoBack, Divider, CustomModal } from 'shared/components';
import customStyles from 'shared/styles';
import { Formik, Field } from 'formik';
import { FormikInput } from 'shared/formik';
import ValidationSchema from './ValidationSchema';
import config from '/shared/config';
import { generateRandomNumber } from '/shared/utilities';

const domainFoundScr = 'DomainFound';

const RegisterScr = () => {
  const {
    viewContentFooterWrapper,
    viewContentWrapper,
    viewFooterWrapper,
    formWrapper,
    buttonLabel,
  } = customStyles;
  const { navigate } = useNavigation();
  const [isModalOpen, setModalOpen] = useState(false);
  const [isError, setError] = useState(false);
  const [modalMessage, setModalMessage] = useState('Validating your email');

  return (
    <Formik
      initialValues={{ email: `${generateRandomNumber()}@splunk.com` }}
      validationSchema={ValidationSchema}
      onSubmit={({ email }) => {
        setModalOpen(true);
        // ////////////////////////////////////
        axios
          .post(`${config.api}/validateUser`, {
            email,
          })
          .then(response => {
            if (response.status === 200) {
              const { title } = response.data.company;
              setModalOpen(false);
              setError(false);
              navigate(domainFoundScr, { title });
            } else {
              setModalMessage(config.errors.msg1);
              setError(true);
            }
          })
          .catch(error => {
            console.log(error.message);
            console.log(error.code);
            setModalMessage(config.errors.msg1);
            setError(true);
          });
        // ////////////////////////////////////
      }}
      validateOnBlur={false}
      validateOnChange={false}
      validateOnMount={false}
    >
      {({ handleSubmit, values }) => {
        return (
          <FlowWrapper>
            <CustomModal error={isError} open={isModalOpen} onPress={() => setModalOpen(false)}>
              {modalMessage}
            </CustomModal>
            <GoBack />
            <View style={viewContentFooterWrapper}>
              <View style={viewContentWrapper} test-id="view-content-wrapper">
                <Divider margin={20} />
                <TitleAndText
                  title="Let's get started"
                  text="What is your corporate email address?"
                />
                <Divider margin={20} />
                <Form bordered rounded regular style={formWrapper}>
                  <Field
                    name="email"
                    label="Corporate Email"
                    component={FormikInput}
                    value={values.email}
                    autoCapitalize="none"
                    autoCompleteType="off"
                    autoCorrect={false}
                    autoFocus={false}
                    enablesReturnKeyAutomatically
                    keyboardType="email-address"
                  />
                </Form>
              </View>
              <View style={viewFooterWrapper}>
                <Button primary rounded block onPress={handleSubmit}>
                  <Text style={buttonLabel}>Next</Text>
                </Button>
                <Divider margin={20} />
              </View>
            </View>
          </FlowWrapper>
        );
      }}
    </Formik>
  );
};

export default RegisterScr;
