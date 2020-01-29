import React from 'react';
import { View, Text } from 'react-native';
import { Button, Form } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
import { useNavigation } from 'react-navigation-hooks';
import { FlowWrapper, TitleAndText, GoBack, Divider } from 'shared/components';
import customStyles from 'shared/styles';
import { Formik, Field } from 'formik';
import { FormikInput } from 'shared/formik';

const ActivationScr = () => {
  const { button, buttonView, buttonRow, form, bodyView } = customStyles;
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
            <View style={bodyView}>
              <TitleAndText
                title="Confirm your email"
                text="Proin consectetur ac risus vel imperdiet."
              />
              <Divider margin={20} />
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
            </View>
            <View style={buttonRow}>
              <View style={buttonView}>
                <Button primary rounded block onPress={handleSubmit}>
                  <Text style={button}>Next</Text>
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

export default ActivationScr;
