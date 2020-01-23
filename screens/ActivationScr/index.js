import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet } from 'react-native';
import { Formik, Field } from 'formik';
import { Container, Content, Button, Text, Form } from 'native-base';
import { FormikInput } from '../../shared/formik';

const styles = StyleSheet.create({
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
    height: '100%',
  },
  form: { width: '100%' },
  button: { marginTop: 20 },
});

const ActivationScr = props => {
  const { navigation } = props;
  return (
    <Container>
      <Content contentContainerStyle={styles.content}>
        <Formik
          initialValues={{ code: '' }}
          // validationSchema={ActivationScrValidationSchema}
          onSubmit={() => {
            navigation.navigate('Buildings');
          }}
          validateOnBlur={false}
          validateOnChange={false}
          validateOnMount={false}
        >
          {({ handleSubmit, values }) => {
            return (
              <Form bordered rounded regular style={styles.form}>
                <Field
                  name="code"
                  component={FormikInput}
                  placeholder="6 digit activation code"
                  value={values.code}
                  autoCapitalize="none"
                  autoCompleteType="off"
                  autoCorrect={false}
                  autoFocus
                  enablesReturnKeyAutomatically
                  keyboardType="number-pad"
                />
                <Button dark block onPress={handleSubmit} style={styles.button}>
                  <Text> Next </Text>
                </Button>
              </Form>
            );
          }}
        </Formik>
      </Content>
    </Container>
  );
};

ActivationScr.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    popToTop: PropTypes.func.isRequired,
  }).isRequired,
};

export default ActivationScr;
