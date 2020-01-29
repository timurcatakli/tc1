import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Form } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
import { useNavigation } from 'react-navigation-hooks';
import { FlowWrapper, FlowHero, GoBack, Divider, CustomModal } from 'shared/components';
import customStyles from 'shared/styles';
import { Formik, Field } from 'formik';
import { FormikInput } from 'shared/formik';

const ForgotPasswordScr = () => {
  const { button, buttonView, buttonRow, form } = customStyles;
  const { navigate } = useNavigation();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Formik
      initialValues={{ email: '' }}
      onSubmit={() => {
        setModalOpen(true);
        setTimeout(() => {
          setModalOpen(false);
          navigate('Activation');
        }, 3000);
      }}
      validateOnBlur={false}
      validateOnChange={false}
      validateOnMount={false}
    >
      {({ handleSubmit, values }) => {
        return (
          <FlowWrapper>
            <CustomModal open={isModalOpen}>PLEASE WAIT. CHECKING YOUR EMAIL.</CustomModal>

            <GoBack />
            <Grid>
              <FlowHero
                image="login"
                title="Forgot Password?"
                text="Enter your work email and we will send a temporary password to your account."
              />
              <Row>
                <Form bordered rounded regular style={form}>
                  <Field
                    name="email"
                    label="Work Email"
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
              </Row>
              <Row style={buttonRow}>
                <View style={buttonView}>
                  <Button dark rounded block onPress={handleSubmit}>
                    <Text style={button}>Send Email</Text>
                  </Button>
                  <Divider margin={20} />
                </View>
              </Row>
            </Grid>
          </FlowWrapper>
        );
      }}
    </Formik>
  );
};

export default ForgotPasswordScr;
