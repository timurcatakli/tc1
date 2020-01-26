import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Text } from 'native-base';
import config from 'shared/config';
import Divider from './Divider';

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: config.style.paddingLeft,
    paddingRight: config.style.paddingRight,
  },
  text: {
    color: 'white',
    fontFamily: 'Rubik-Medium',
    textTransform: 'uppercase',
    textAlign: 'center',
    lineHeight: 24,
  },
});

const CustomModal = ({ open, children }) => {
  return (
    <Modal isVisible={open} backdropOpacity={0.9}>
      <View style={styles.view}>
        <ActivityIndicator size="large" color="white" />
        <Divider margin={10} />
        <Text style={styles.text}>{children}</Text>
      </View>
    </Modal>
  );
};

CustomModal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
};
CustomModal.defaultProps = {};
export default CustomModal;
