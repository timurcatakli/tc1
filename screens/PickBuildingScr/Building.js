import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableHighlight, StyleSheet } from 'react-native';
import { Text } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import config from '/shared/config';
import { Divider } from '/shared/components';

const styles = StyleSheet.create({
  cardWrapper: {
    marginBottom: 6,
    backgroundColor: 'white',
    minHeight: 70,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: config.colors.lightGray,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 12,
    paddingRight: 12,
    shadowColor: config.colors.lightGray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.4,
    shadowRadius: 0.8,
    elevation: 2,
  },
  cardViewWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper: { flex: 1 },
  streetLabel: {
    fontFamily: 'Rubik-Medium',
    textTransform: 'uppercase',
    fontSize: 16,
  },
  countryLabel: {
    fontFamily: 'Rubik-Light',
    textTransform: 'uppercase',
    color: config.colors.gray,
    fontSize: 12,
  },
});

const Building = ({ data }) => {
  const { id, label, city, state, country } = data;
  return (
    <TouchableHighlight
      underlayColor={config.colors.lightGray}
      onPress={() => {}}
      style={styles.cardWrapper}
      key={id}
    >
      <View style={styles.cardViewWrapper}>
        <View style={styles.titleWrapper}>
          <Text style={styles.streetLabel}>{label}</Text>
          <Divider margin={2} />
          <Text style={styles.countryLabel}>
            {city}, {state && `${state}, `}
            {country}
          </Text>
        </View>
        <View>
          <Ionicons name="md-arrow-round-forward" size={28} color={config.colors.lightGray} />
        </View>
      </View>
    </TouchableHighlight>
  );
};

Building.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    state: PropTypes.string,
    country: PropTypes.string.isRequired,
  }),
};

Building.defaultProps = {
  data: {
    state: null,
  },
};

export default Building;
