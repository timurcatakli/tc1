import React from 'react';
import PropTypes from 'prop-types';
import { View, Image } from 'react-native';
import config from 'shared/config';

const FlowImage = ({ image }) => {
  return (
    <View
      style={{
        alignItems: 'center',
      }}
    >
      <Image source={config.images[image]} style={{ width: 160, height: 160, aspectRatio: 1.46 }} />
    </View>
  );
};

FlowImage.propTypes = {
  image: PropTypes.string.isRequired,
};

export default FlowImage;
