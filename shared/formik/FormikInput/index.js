import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import { View, StyleSheet } from 'react-native';
import { Input, Item, Text, Label } from 'native-base';
import config from 'shared/config.js';

const styles = StyleSheet.create({
  errorTextWrapper: {
    marginLeft: 16,
    marginTop: 4,
  },
  errorText: {
    fontFamily: 'Rubik-Medium',
    textTransform: 'uppercase',
    fontSize: 12,
    color: config.colors.errorColor,
  },
  labelText: {
    fontFamily: 'Rubik-Medium',
    textTransform: 'uppercase',
    color: 'black',
  },
});

const FormikInput = props => {
  const { form, field, label } = props;
  const { name } = field;
  const error = getIn(form.errors, name);
  const isError = Boolean(error);
  const { handleChange, handleBlur } = form;

  return (
    <View>
      <Item error={isError} stackedLabel>
        <Label style={styles.labelText}>{label}</Label>
        <Input onChangeText={handleChange(name)} onBlur={handleBlur(name)} {...props} />
      </Item>
      {isError && (
        <View style={styles.errorTextWrapper}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}
    </View>
  );
};

FormikInput.propTypes = {
  field: PropTypes.shape({
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  }).isRequired,
  form: PropTypes.shape({
    errors: PropTypes.shape({}).isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    touched: PropTypes.shape({}).isRequired,
    values: PropTypes.shape({}).isRequired,
  }).isRequired,
  label: PropTypes.string.isRequired,
};

export default FormikInput;
