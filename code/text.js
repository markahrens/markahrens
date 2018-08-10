import PropTypes from 'prop-types';
import React from 'react';


/**
 * The post component
 */
const Text = ({ _body}) => {
	return (

      <div>
      { _body }
      </div>

	);
};

Text.propTypes = {
	/**
	 * _body: (text)(5)
	 */
	_body: PropTypes.node.isRequired,
};

Text.defaultProps = {};

export default Text;