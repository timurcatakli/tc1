import React from 'react';
import PropTypes from 'prop-types';

import { View } from 'react-native';
import { Text } from 'native-base';
import config from '/shared/config';

const DomainFoundMessage = ({ title }) => {
  return (
    <View
      style={{
        paddingLeft: config.style.paddingLeft,
        paddingRight: config.style.paddingRight,
      }}
    >
      <View>
        <Text style={{ color: '#005D68', fontSize: 20, marginBottom: 4 }}>Good News</Text>
      </View>
      <View>
        <Text
          style={{
            textTransform: 'uppercase',
            fontFamily: 'Rubik-Medium',
          }}
        >
          {title}
        </Text>
      </View>
      <View>
        <Text style={{ color: '#005D68', fontSize: 20, marginTop: 4 }}>is in our database</Text>
      </View>
    </View>
  );
};

DomainFoundMessage.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DomainFoundMessage;
