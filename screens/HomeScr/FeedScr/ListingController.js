import React from 'react';
import PropTypes from 'prop-types';
import { ProductCard, ListingCard } from 'shared/components';

const ListingController = props => {
  const { listing } = props.item;
  if (listing === 'sale') {
    return <ProductCard {...props} />;
  }
  return <ListingCard {...props} />;
};

ListingController.propTypes = {
  item: PropTypes.shape({
    listing: PropTypes.string.isRequired,
  }).isRequired,
};

ListingController.defaultProps = {};

export default ListingController;
