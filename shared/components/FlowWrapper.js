import React from 'react';
import PropTypes from 'prop-types';
import { LinearGradient } from 'expo-linear-gradient';
import { StyleProvider, Container } from 'native-base';
import DismissKeyboard from './DismissKeyboard';
import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/platform';

const FlowWrapper = ({ children }) => {
  return (
    <StyleProvider style={getTheme(platform)}>
      <DismissKeyboard>
        <Container style={{ backgroundColor: 'transparent' }}>
          <LinearGradient colors={['#5CD89F', '#FFD36E']} style={{ flex: 1, width: '100%' }}>
            {children}
          </LinearGradient>
        </Container>
      </DismissKeyboard>
    </StyleProvider>
  );
};

FlowWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

FlowWrapper.defaultProps = {};

export default FlowWrapper;
