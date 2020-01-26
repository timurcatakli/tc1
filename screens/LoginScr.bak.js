import React, { useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { Text, Button, Form } from 'native-base';
import { Formik, Field } from 'formik';
import {
  FlowImage,
  CustomModal,
  FlowWrapper,
  GoBack,
  Divider,
  TitleAndText,
} from 'shared/components';
import { FormikInput } from 'shared/formik';
import customStyles from 'shared/styles';

const LoginScr = () => {
  const { navigate } = useNavigation();
  const [isModalOpen, setModalOpen] = useState(false);
  const { body, form, button, buttonFooter } = customStyles;
  return (
    <FlowWrapper>
      <CustomModal open={isModalOpen}>PLEASE WAIT. LOGGING YOU IN.</CustomModal>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={() => {
          setModalOpen(true);
          setTimeout(() => {
            setModalOpen(false);
            navigate('Activation');
          }, 500);
        }}
        validateOnBlur={false}
        validateOnChange={false}
        validateOnMount={false}
      >
        {({ handleSubmit, values }) => {
          return (
            <>
              <GoBack />
              <View style={body}>
                <FlowImage image="login" />
                <Divider margin={20} />
                <TitleAndText title="Let's login">Lorem ipsum dolor sit amet.</TitleAndText>
                <Divider margin={20} />
                <Form bordered rounded regular style={form}>
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
                  <Divider margin={10} />
                  <Field
                    name="password"
                    label="Password"
                    component={FormikInput}
                    value={values.password}
                    autoCapitalize="none"
                    autoCompleteType="off"
                    autoCorrect={false}
                    autoFocus={false}
                    enablesReturnKeyAutomatically
                  />
                </Form>
              </View>

              <View style={buttonFooter}>
                <Button dark rounded block onPress={handleSubmit}>
                  <Text style={button}>Log in</Text>
                </Button>
                <Divider margin={10} />
                <Button transparent>
                  <Text style={{ color: 'blue' }}>Forgot your password?</Text>
                </Button>
              </View>
            </>
          );
        }}
      </Formik>
    </FlowWrapper>
  );
};

export default LoginScr;
