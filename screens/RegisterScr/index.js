import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Button, Form } from 'native-base';
import { useNavigation } from 'react-navigation-hooks';
import { FlowWrapper, TitleAndText, GoBack, Divider, CustomModal } from 'shared/components';
import customStyles from 'shared/styles';
import { Formik, Field } from 'formik';
import { FormikInput } from 'shared/formik';
import ValidationSchema from './ValidationSchema';

const RegisterScr = () => {
  const { button, buttonView, buttonRow, form, bodyView } = customStyles;
  const { navigate } = useNavigation();
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={ValidationSchema}
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
          <FlowWrapper>
            <CustomModal open={isModalOpen}>PLEASE WAIT. CHECKING YOUR EMAIL.</CustomModal>
            <GoBack />
            <View style={bodyView}>
              <TitleAndText
                title="Let's get started"
                text="What is your corporate email address?"
              />
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

export default RegisterScr;
