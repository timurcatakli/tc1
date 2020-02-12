import React from 'react';
import PropTypes from 'prop-types';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import Modal from 'react-native-modal';
import { Ionicons } from '@expo/vector-icons';
import { Text, Button } from 'native-base';
import config from 'shared/config';
import customStyles from 'shared/styles';
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
    fontFamily: 'Rubik-Medium',
    textTransform: 'uppercase',
    textAlign: 'center',
    lineHeight: 24,
  },
});

const CustomModal = ({ open, children, error, onPress }) => {
  const { buttonLabel } = customStyles;
  return (
    <Modal isVisible={open} backdropOpacity={0.9}>
      <View style={styles.view}>
        {!error && <ActivityIndicator size="large" color="white" />}
        {error && (
          <Ionicons name="ios-close-circle-outline" size={64} color={config.colors.error} />
        )}
        <Text style={[styles.text, { color: error ? config.colors.error : 'white' }]}>
          {children}
        </Text>
        {error && typeof onPress === 'function' && (
          <>
            <Divider margin={10} />
            <Button
              rounded
              block
              style={{ backgroundColor: config.colors.error }}
              onPress={onPress}
            >
              <Text style={buttonLabel}>CLOSE</Text>
            </Button>
          </>
        )}
      </View>
    </Modal>
  );
};

CustomModal.propTypes = {
  onPress: PropTypes.func,
  children: PropTypes.node.isRequired,
  open: PropTypes.bool.isRequired,
  error: PropTypes.bool,
};
CustomModal.defaultProps = {
  error: false,
  onPress: undefined,
};
export default CustomModal;
