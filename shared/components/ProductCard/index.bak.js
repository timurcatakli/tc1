import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Text, Badge } from 'native-base';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import config from 'shared/config';

const padding = 10;
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
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
  },
  imageWrapper: {
    backgroundColor: 'gray',
    width: wp('50%') - padding,
    height: wp('50%') - padding,
  },
  infoWrapper: { padding: 10, width: wp('50%') - padding },
  infoPrice: {
    fontFamily: 'Rubik-Medium',
    textTransform: 'uppercase',
    fontSize: 20,
    marginBottom: 6,
  },
  infoTitle: {
    fontFamily: 'Rubik-Light',
    fontSize: 14,
  },
  footerLabel: {
    color: config.colors.gray,
    fontSize: 12,
    marginTop: 6,
  },
});
// style={{ width: 100, height: 146, aspectRatio: 1.46 }}
// 2850 x 1900
const ProductCard = ({ item }) => {
  const { title, price, image } = item;
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <Image
            style={{ width: wp('50%') - padding, flex: 1 }}
            source={{ uri: image }}
            resizeMode="cover"
          />
          <View>
            <Badge>
              <Text>SR 500</Text>
            </Badge>
          </View>
        </View>
        <View style={styles.infoWrapper}>
          <Text style={styles.infoPrice}>{price}</Text>
          <Text style={styles.infoTitle}>{title}</Text>
          <Text style={styles.footerLabel}>2 hrs ago...</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

ProductCard.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
ProductCard.defaultProps = {};

export default ProductCard;
