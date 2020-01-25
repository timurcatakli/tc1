import React from 'react';
import PropTypes from 'prop-types';
import { TouchableWithoutFeedback, Keyboard } from 'react-native';

const DismissKeyboard = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

DismissKeyboard.propTypes = {
  children: PropTypes.node.isRequired,
};
DismissKeyboard.defaultProps = {};
export default DismissKeyboard;
