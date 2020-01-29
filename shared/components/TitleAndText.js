import React from 'react';
import PropTypes from 'prop-types';
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

const TitleAndText = ({ title, text }) => {
  return (
    <View style={styles.wrapper}>
      <H3 style={styles.title}>{title}</H3>
      <Divider margin={4} />
      <Text>{text}</Text>
    </View>
  );
};

TitleAndText.propTypes = {
  text: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

TitleAndText.defaultProps = {};

export default TitleAndText;
