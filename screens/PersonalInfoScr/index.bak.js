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

const PersonalInfoScr = () => {
  const { navigate } = useNavigation();
  const [isModalOpen, setModalOpen] = useState(false);
  const { body, form, button, buttonFooter } = customStyles;

  return (
    <FlowWrapper>
      <CustomModal open={isModalOpen}>PLEASE WAIT. CHECKING YOUR EMAIL.</CustomModal>
      <Formik
        initialValues={{ email: '' }}
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
                <FlowImage image="personalInfo" />
                <Divider margin={20} />
                <TitleAndText title="One last step...">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </TitleAndText>
                <Divider margin={20} />
                <Form bordered rounded regular style={form}>
                  <Field
                    name="email"
                    label="First Name"
                    component={FormikInput}
                    value={values.email}
                    autoCapitalize="none"
                    autoCompleteType="off"
                    autoCorrect={false}
                    autoFocus={false}
                    enablesReturnKeyAutomatically
                    keyboardType="email-address"
                  />
                  <Field
                    name="email"
                    label="Last Name"
                    component={FormikInput}
                    value={values.email}
                    autoCapitalize="none"
                    autoCompleteType="off"
                    autoCorrect={false}
                    autoFocus={false}
                    enablesReturnKeyAutomatically
                    keyboardType="email-address"
                  />
                  <Field
                    name="email"
                    label="Title"
                    component={FormikInput}
                    value={values.email}
                    autoCapitalize="none"
                    autoCompleteType="off"
                    autoCorrect={false}
                    autoFocus={false}
                    enablesReturnKeyAutomatically
                    keyboardType="email-address"
                  />
                  <Field
                    name="email"
                    label="Describe how they can find you"
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

              <View style={buttonFooter}>
                <Button primary rounded block onPress={handleSubmit}>
                  <Text style={button}>Register</Text>
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

export default PersonalInfoScr;
