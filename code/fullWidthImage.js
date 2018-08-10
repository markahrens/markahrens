import PropTypes from 'prop-types';
import React from 'react';

/**
 * The listing posts component
 */
const FullWidthImage = ({ image }) => (
  <div className="full-width-image">
    <img src={ image } />
  </div>
);

export default FullWidthImage;