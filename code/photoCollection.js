import PropTypes from 'prop-types';
import React from 'react';

/**
 * The listing posts component
 */
const PhotoCollection = ({ photos }) => (
  <div className="photo-collection">
    { 
      photos.map( (p) => 
        <div className="photo">
          <img src={ p.image } />
          <p>{ p.caption } </p>
        </div>
      )
    }
  </div>
);

export default PhotoCollection;