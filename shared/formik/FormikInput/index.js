import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import { View, StyleSheet } from 'react-native';
import { Input, Item, Icon, Text } from 'native-base';

const styles = StyleSheet.create({
  errorView: {
    paddingLeft: 16,
    paddingTop: 10,
  },
  errorText: {
    fontSize: 14,
    color: 'red',
  },
});

const FormikInput = props => {
  const { form, field } = props;
  const { name } = field;
  const error = getIn(form.errors, name);
  const isError = Boolean(error);
  const { handleChange, handleBlur } = form;

  return (
    <View>
      <Item error={isError}>
        <Input onChangeText={handleChange(name)} onBlur={handleBlur(name)} {...props} />
        {isError && <Icon name="close-circle" />}
      </Item>
      {isError && (
        <View style={styles.errorView}>
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
};

export default FormikInput;
