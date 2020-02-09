import React from 'react';
import PropTypes from 'prop-types';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet } from 'react-native';
import { Text, H3 } from 'native-base';
import config from 'shared/config';
import Divider from './Divider';

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    paddingLeft: config.style.paddingLeft,
    paddingRight: config.style.paddingRight,
  },
  title: {
    letterSpacing: -1,
    textTransform: 'uppercase',
  },
});

const TitleAndText = ({ title, text, error }) => {
  return (
    <View style={styles.wrapper}>
      {error && <Ionicons name="ios-close-circle-outline" size={70} color="red" />}
      <H3 style={(styles.title, { color: error ? 'red' : 'black' })}>{title}</H3>
      <Divider margin={4} />
      <Text>{text}</Text>
    </View>
  );
};

TitleAndText.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  error: PropTypes.bool,
};

TitleAndText.defaultProps = {
  error: false,
};

export default TitleAndText;
