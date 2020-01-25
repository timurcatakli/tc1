import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Text, H3 } from 'native-base';

const styles = StyleSheet.create({
  wrapper: { width: '100%', paddingLeft: 30, paddingRight: 30 },
});

const TitleAndText = ({ title, children }) => {
  return (
    <View style={styles.wrapper}>
      <H3>{title}</H3>
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
