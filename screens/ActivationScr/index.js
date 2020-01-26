import React from 'react';
import { View, Text } from 'react-native';
import { Button, Form } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
import { useNavigation } from 'react-navigation-hooks';
import { FlowWrapper, FlowHero, GoBack, Divider } from 'shared/components';
import customStyles from 'shared/styles';
import { Formik, Field } from 'formik';
import { FormikInput } from 'shared/formik';

const ActivationScr = () => {
  const { button, buttonView, buttonRow, form } = customStyles;
  const { navigate } = useNavigation();

  return (
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
          <FlowWrapper>
            <GoBack />
            <Grid>
              <FlowHero
                image="activation"
                title="Confirm your email"
                text="Proin consectetur ac risus vel imperdiet."
              />
              <Row>
                <Form bordered rounded regular style={form}>
                  <Field
                    name="code"
                    component={FormikInput}
                    label="Activation Code"
                    maxLength={6}
                    value={values.code}
                    autoCapitalize="none"
                    autoCompleteType="off"
                    autoCorrect={false}
                    enablesReturnKeyAutomatically
                    keyboardType="number-pad"
                  />
                </Form>
              </Row>
              <Row style={buttonRow}>
                <View style={buttonView}>
                  <Button primary rounded block onPress={handleSubmit}>
                    <Text style={button}>Next</Text>
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

export default ActivationScr;
