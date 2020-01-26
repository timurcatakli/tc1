import React from 'react';
import { View } from 'react-native';
import { useNavigation } from 'react-navigation-hooks';
import { Text, Button, Form } from 'native-base';
import { Formik, Field } from 'formik';
import { FlowImage, FlowWrapper, GoBack, Divider, TitleAndText } from 'shared/components';
import { FormikInput } from 'shared/formik';
import customStyles from 'shared/styles';

const ActivationScr = () => {
  const { navigate } = useNavigation();
  const { body, form, button, buttonFooter } = customStyles;
  return (
    <FlowWrapper>
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
              <GoBack />
              <View style={body}>
                <FlowImage image="activation" />
                <Divider margin={20} />

                <TitleAndText title="Confirm your email">
                  Proin consectetur ac risus vel imperdiet.
                </TitleAndText>
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

              <View style={buttonFooter}>
                <Button transparent>
                  <Text style={{ color: 'blue' }}>RESEND CONFIRMATION EMAIL</Text>
                </Button>
                <Divider margin={10} />
                <Button primary rounded block onPress={handleSubmit}>
                  <Text style={button}>Next</Text>
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

export default ActivationScr;
