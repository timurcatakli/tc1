import React from 'react';
import { View, Text, KeyboardAvoidingView, ScrollView } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Button, Form } from 'native-base';
import { useNavigation } from 'react-navigation-hooks';
import { FlowWrapper, TitleAndText, GoBack, Divider } from 'shared/components';
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
            <KeyboardAwareScrollView>
              <View style={{ minHeight: hp('100%') }}>
                <GoBack />
                <TitleAndText title="One final step" text="What is your corporate email address?" />
                <Divider margin={20} />
                <ScrollView style={{ width: '100%' }}>
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
                    />
                    <Divider margin={10} />
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
                    />
                    <Divider margin={10} />
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
                    />
                    <Divider margin={10} />
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
                    />
                  </Form>
                </ScrollView>
                {/* <Divider margin={20} /> */}
                <View style={buttonRow}>
                  <View style={buttonView}>
                    <Button primary rounded block onPress={handleSubmit}>
                      <Text style={button}>Submit</Text>
                    </Button>
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

export default PersonalInfoScr;
