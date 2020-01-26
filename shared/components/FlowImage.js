import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import config from 'shared/config';

const FlowImage = ({ image }) => {
  return (
    <View
      style={{
        alignItems: 'center',
        height: 146,
      }}
    >
      <Image source={config.images[image]} style={{ width: 100, height: 146, aspectRatio: 1.46 }} />
    </View>
  );
};

FlowImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default FlowImage;
