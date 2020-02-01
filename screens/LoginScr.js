import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Form } from 'native-base';
import { useNavigation } from 'react-navigation-hooks';
import { FlowWrapper, TitleAndText, GoBack, Divider, CustomModal } from 'shared/components';
import customStyles from 'shared/styles';
import { Formik, Field } from 'formik';
import { FormikInput } from 'shared/formik';

const LoginScr = () => {
  const { button, buttonView, buttonRow, form, bodyView } = customStyles;
  const { navigate } = useNavigation();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      onSubmit={() => {
        setModalOpen(true);
        setTimeout(() => {
          setModalOpen(false);
          navigate('Home');
        }, 500);
      }}
      validateOnBlur={false}
      validateOnChange={false}
      validateOnMount={false}
    >
      {({ handleSubmit, values }) => {
        return (
          <FlowWrapper>
            <GoBack />
            <View style={bodyView}>
              <TitleAndText title="Let's login" text="Lorem ipsum dolor sit amet." />
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
            <View style={buttonRow}>
              <View style={buttonView}>
                <Button dark rounded block onPress={handleSubmit}>
                  <Text style={button}>Log in</Text>
                </Button>
                <Divider margin={10} />
                <Button transparent>
                  <Text style={{ color: 'blue' }}>Forgot your password?</Text>
                </Button>
                <Divider margin={10} />
              </View>
            </View>
          </FlowWrapper>
        );
      }}
    </Formik>
  );
};

export default LoginScr;
