import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

const Divider = ({ margin }) => {
  return <View style={{ width: '100%', marginVertical: margin }} />;
};

Divider.propTypes = {
  margin: PropTypes.number,
};

Divider.defaultProps = {
  margin: 10,
};

export default Divider;
