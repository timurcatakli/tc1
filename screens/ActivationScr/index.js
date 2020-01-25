import React from 'react';
import { View, SafeAreaView, Image, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from 'react-navigation-hooks';
import { Text, Button, StyleProvider, H1, H2, H3, Form, Item, Label, Input } from 'native-base';
import { Formik, Field } from 'formik';
import { FormikInput } from '../../shared/formik';
import { DismissKeyboard, GoBack } from '../../shared/components';
import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/platform';

const styles = StyleSheet.create({
  wrapper: {
    height: '100%',
    width: '100%',
  },
  safeAreaView: { width: '100%', height: '100%' },
  paddedView: { width: '100%', paddingLeft: 30, paddingRight: 30 },
  body: {
    width: '100%',
    justifyContent: 'center',
    flex: 1,
  },
  content: {
    width: '100%',
    justifyContent: 'center',
    paddingLeft: 30,
    paddingRight: 30,
  },
  divider20: { width: '100%', marginVertical: 20 },
  divider10: { width: '100%', marginVertical: 10 },
  h1: { fontFamily: 'Rubik-Medium', color: '#5F6368' },
  centerContent: { width: '100%', alignItems: 'center' },
  text: { fontFamily: 'Rubik-Regular', color: '#5F6368' },
  button: { fontFamily: 'Rubik-Medium', textTransform: 'uppercase' },
  buttonSecondary: { backgroundColor: '#5F6368' },
  buttonFooter: {
    width: '100%',
    height: 90,
    paddingLeft: 30,
    paddingRight: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  form: { width: '100%', paddingLeft: 20, paddingRight: 30 },
});

const ActivationScr = () => {
  const { navigate, goBack } = useNavigation();
  return (
    <StyleProvider style={getTheme(platform)}>
      <DismissKeyboard>
        <View style={styles.wrapper}>
          <SafeAreaView style={styles.safeAreaView}>
            <Formik
              initialValues={{ code: '' }}
              onSubmit={() => {
                navigate('Buildings');
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
                      <View style={styles.content}>
                        <H3 style={styles.h1}>Confirm your email</H3>
                        <Text style={styles.text}>Proin consectetur ac risus vel imperdiet.</Text>
                      </View>
                      <View style={styles.divider20} />
                      <Form bordered rounded regular style={styles.form}>
                        <Field
                          name="code"
                          component={FormikInput}
                          label="Activation Code"
                          maxLength={6}
                          value={values.code}
                          autoCapitalize="none"
                          autoCompleteType="off"
                          autoCorrect={false}
                          autoFocus
                          enablesReturnKeyAutomatically
                          keyboardType="number-pad"
                        />
                      </Form>
                      <View style={styles.divider20} />
                    </View>

                    <View style={styles.buttonFooter}>
                      <Button warning small rounded transparent>
                        <Text style={{ color: 'blue' }}>
                          RESEND CONFIRMATION EMAIL - alert pops up, clicking on next spinner modal
                          pops up
                        </Text>
                      </Button>
                      <View style={styles.divider10} />
                      <Button primary rounded block onPress={handleSubmit}>
                        <Text style={styles.button}>Next</Text>
                      </Button>
                      <View style={styles.divider20} />
                    </View>
                  </>
                );
              }}
            </Formik>
          </SafeAreaView>
        </View>
      </DismissKeyboard>
    </StyleProvider>
  );
};

ActivationScr.propTypes = {};

ActivationScr.defaultProps = {};

export default ActivationScr;
