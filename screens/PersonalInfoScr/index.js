import React from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import { Button, Form } from 'native-base';
import { Row, Grid } from 'react-native-easy-grid';
import { useNavigation } from 'react-navigation-hooks';
import { FlowWrapper, FlowHero, GoBack, Divider } from 'shared/components';
import customStyles from 'shared/styles';
import { Formik, Field } from 'formik';
import { FormikInput } from 'shared/formik';

const PersonalInfoScr = () => {
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
            <KeyboardAvoidingView
              behavior="position"
              contentContainerStyle={{ height: '100%' }}
              enabled
            >
              <GoBack />
              <Grid>
                <FlowHero
                  image="personalInfo"
                  title="One final step"
                  text="Proin consectetur ac risus vel imperdiet."
                />
                <ScrollView style={{ width: '100%' }}>
                  <Row>
                    <Form bordered rounded regular style={form}>
                      <Field
                        name="code"
                        component={FormikInput}
                        label="First Name"
                        maxLength={6}
                        value={values.code}
                        autoCapitalize="none"
                        autoCompleteType="off"
                        autoCorrect={false}
                        enablesReturnKeyAutomatically
                        keyboardType="number-pad"
                      />
                      <Field
                        name="code"
                        component={FormikInput}
                        label="Last Name"
                        maxLength={6}
                        value={values.code}
                        autoCapitalize="none"
                        autoCompleteType="off"
                        autoCorrect={false}
                        enablesReturnKeyAutomatically
                        keyboardType="number-pad"
                      />
                      <Field
                        name="code"
                        component={FormikInput}
                        label="Title"
                        maxLength={6}
                        value={values.code}
                        autoCapitalize="none"
                        autoCompleteType="off"
                        autoCorrect={false}
                        enablesReturnKeyAutomatically
                        keyboardType="number-pad"
                      />
                      <Field
                        name="code"
                        component={FormikInput}
                        label="How can they find you (tooltip)"
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
                </ScrollView>
                <Row style={buttonRow}>
                  <View style={buttonView}>
                    <Button primary rounded block onPress={handleSubmit}>
                      <Text style={button}>Submit</Text>
                    </Button>
                    <Divider margin={20} />
                  </View>
                </Row>
              </Grid>
            </KeyboardAvoidingView>
          </FlowWrapper>
        );
      }}
    </Formik>
  );
};

export default PersonalInfoScr;
