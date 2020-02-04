import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Badge } from 'native-base';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import config from 'shared/config';

const padding = 10;
const styles = StyleSheet.create({
  classifiedWrapper: {
    backgroundColor: 'white',
    padding: 10,
    width: wp('50%') - padding,
    margin: 6,
    borderColor: config.colors.primaryColor,
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    justifyContent: 'center',
  },
  classifiedTitle: {
    fontFamily: 'Rubik-Medium',
    fontSize: 16,
    textTransform: 'uppercase',
    lineHeight: 26,
  },
  headerView: {
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    marginBottom: 20,
  },
  contentView: {
    flex: 1,
  },
  footerView: {
    justifyContent: 'flex-start',
    marginTop: 10,
  },
  footerLabel: {
    color: config.colors.gray,
    fontSize: 12,
    fontFamily: 'Rubik-Light',
  },
});

const ListingCard = ({ item }) => {
  const { title } = item;
  return (
    <TouchableOpacity style={styles.classifiedWrapper}>
      <View style={styles.headerView}>
        <View>
          <Badge style={{ backgroundColor: '#FFD36E' }}>
            <Text style={{ color: config.colors.gray, fontFamily: 'Rubik-Light' }}>SR 500</Text>
          </Badge>
        </View>
      </View>
      <View style={styles.contentView}>
        <Text style={styles.classifiedTitle}>{title}</Text>
      </View>
      <View style={styles.footerView}>
        <Text style={styles.footerLabel}>2 hrs ago...</Text>
      </View>
    </TouchableOpacity>
  );
};

ListingCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

ListingCard.defaultProps = {};

export default ListingCard;
