import React, { useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { View, Text } from 'react-native';
import { Button, Form } from 'native-base';
import { FlowWrapper, TitleAndText, GoBack, Divider, CustomModal } from 'shared/components';
import customStyles from 'shared/styles';
import app from 'shared/firebase';
import { Formik, Field } from 'formik';
import { FormikInput } from 'shared/formik';
import ValidationSchema from './ValidationSchema';

const LoginScr = () => {
  const {
    viewContentFooterWrapper,
    viewContentWrapper,
    viewFooterWrapper,
    formWrapper,
    buttonLabel,
  } = customStyles;
  const [isModalOpen, setModalOpen] = useState(false);
  const [isError, setError] = useState(false);
  const [modalMessage, setModalMessage] = useState('Logging you in');

  return (
    <Formik
      initialValues={{ email: 'tcatakli@splunk.com', password: '123456' }}
      validationSchema={ValidationSchema}
      onSubmit={({ email, password }) => {
        setModalOpen(true);
        app
          .auth()
          .signInWithEmailAndPassword(email, password)
          .then()
          .catch(error => {
            setError(true);
            setModalMessage(error.message);
          });
      }}
      validateOnBlur={false}
      validateOnChange={false}
      validateOnMount={false}
    >
      {({ handleSubmit, values }) => {
        return (
          <FlowWrapper>
            <KeyboardAwareScrollView>
              <CustomModal error={isError} open={isModalOpen} onPress={() => setModalOpen(false)}>
                {modalMessage}
              </CustomModal>
              <View style={{ minHeight: hp('100%') }}>
                <GoBack />
                <View style={viewContentFooterWrapper}>
                  <View style={viewContentWrapper} test-id="view-content-wrapper">
                    <Divider margin={20} />
                    <TitleAndText
                      title="Login"
                      text="Forgot password linkini ve keyboardhide unutma"
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
                      <Divider margin={20} />
                      <Field
                        secureTextEntry
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
                  <View test-id="view-footer-wrapper">
                    <View style={viewFooterWrapper}>
                      <Button primary rounded block onPress={handleSubmit}>
                        <Text style={buttonLabel}>Next</Text>
                      </Button>
                      <Divider margin={10} />
                      <Text style={buttonLabel}>FORGOT PASSWORD?</Text>
                      <Divider margin={20} />
                    </View>
                  </View>
                </View>
              </View>
            </KeyboardAwareScrollView>
          </FlowWrapper>
        );
      }}
    </Formik>
  );
};

export default LoginScr;
