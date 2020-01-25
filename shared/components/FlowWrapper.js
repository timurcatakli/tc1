import React from 'react';
import PropTypes from 'prop-types';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StyleProvider } from 'native-base';
import DismissKeyboard from './DismissKeyboard';
import getTheme from '../../native-base-theme/components';
import platform from '../../native-base-theme/variables/platform';

const styles = StyleSheet.create({
  safeAreaView: { width: '100%', height: '100%' },
});

const FlowWrapper = ({ children }) => {
  return (
    <StyleProvider style={getTheme(platform)}>
      <DismissKeyboard>
        <SafeAreaView style={styles.safeAreaView}>{children}</SafeAreaView>
      </DismissKeyboard>
    </StyleProvider>
  );
};

FlowWrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

FlowWrapper.defaultProps = {};

export default FlowWrapper;
