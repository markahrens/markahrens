import PropTypes from 'prop-types';
import React from 'react';

/**
 * The listing posts component
 */
const PullImage = ({ image, direction, caption }) => (
  <div className={ direction + ' pull-image' }>
    <img src={ image } />
    <p>{ caption }</p>
  </div>
);

export default PullImage;