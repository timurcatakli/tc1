import React from 'react';
import PropTypes from 'prop-types';
import { getIn } from 'formik';
import { View, StyleSheet } from 'react-native';
import { Input, Item, Icon, Text, Label } from 'native-base';

const styles = StyleSheet.create({});

const FormikInput = props => {
  const { form, field, label } = props;
  const { name } = field;
  const error = getIn(form.errors, name);
  const isError = true;
  // const isError = Boolean(error);
  const { handleChange, handleBlur } = form;

  return (
    <View>
      <Item
        error={isError}
        stackedLabel
        style={{ backgroundColor: 'aqua', justifyContent: 'center', alignItems: 'center' }}
      >
        <Label style={(styles.label, { backgroundColor: 'brown' })}>{label}</Label>
        <Input onChangeText={handleChange(name)} onBlur={handleBlur(name)} {...props} />
        {isError && <Icon name="close-circle" style={{ backgroundColor: 'gold' }} />}
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
  label: PropTypes.string.isRequired,
};

export default FormikInput;
