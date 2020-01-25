import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { Text, Button, H3, Form } from 'native-base';
import { Formik, Field } from 'formik';
import { FormikInput } from '../../shared/formik';
import { FlowWrapper, GoBack, Divider, TitleAndText } from '../../shared/components';

const styles = StyleSheet.create({
  body: {
    width: '100%',
    justifyContent: 'center',
    flex: 1,
  },
  form: { paddingLeft: 20, paddingRight: 30 },
  button: { fontFamily: 'Rubik-Medium', textTransform: 'uppercase' },
  buttonFooter: {
    width: '100%',
    height: 90,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'flex-end',
  },
});

const RegisterScr = () => {
  const { navigate, goBack } = useNavigation();
  return (
    <FlowWrapper>
      <Formik
        initialValues={{ email: '' }}
        onSubmit={() => {
          navigate('Activation');
        }}
        validateOnBlur={false}
        validateOnChange={false}
        validateOnMount={false}
      >
        {({ handleSubmit, values }) => {
          return (
            <>
              <GoBack goBack={goBack} />
              <View style={styles.body}>
                <TitleAndText title="Let's get started">
                  What is your corporate email address?
                </TitleAndText>
                <Divider margin={20} />
                <Form bordered rounded regular style={styles.form}>
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

              <View style={styles.buttonFooter}>
                <Button primary rounded block onPress={handleSubmit}>
                  <Text style={styles.button}>Next</Text>
                </Button>
                <Divider margin={20} />
              </View>
            </>
          );
        }}
      </Formik>
    </FlowWrapper>
  );
};

export default RegisterScr;
