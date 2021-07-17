import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Forms/Button';

const LoadMore = ({ onLoadMoreEvent = () => {} }) => (
  <Button onClick={() => onLoadMoreEvent()}>Load More</Button>
);

LoadMore.propTypes = {
  onLoadMoreEvent: PropTypes.func.isRequired,
};

export default LoadMore;
