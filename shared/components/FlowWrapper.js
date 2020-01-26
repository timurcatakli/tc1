import React from 'react';
import PropTypes from 'prop-types';
import { StyleProvider, Container } from 'native-base';
import DismissKeyboard from './DismissKeyboard';
import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/platform';

const FlowWrapper = ({ children }) => {
  return (
    <StyleProvider style={getTheme(platform)}>
      <DismissKeyboard>
        <Container>{children}</Container>
      </DismissKeyboard>
    </StyleProvider>
  );
};

FlowWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

FlowWrapper.defaultProps = {};

export default FlowWrapper;
