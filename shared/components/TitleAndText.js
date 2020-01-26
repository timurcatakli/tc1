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
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const TitleAndText = ({ title, children }) => {
  return (
    <View style={styles.wrapper}>
      <H3>{title}</H3>
      <Divider margin={4} />
      <Text>{children}</Text>
    </View>
  );
};

TitleAndText.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
  title: PropTypes.string.isRequired,
};

TitleAndText.defaultProps = {};

export default TitleAndText;
