import PropTypes from 'prop-types';
import Moment from 'moment';
import React from 'react';


/**
 * The post component
 */
const Post = ({ title, _body, _pages, _ID}) => {
	const publishDate = Moment( _pages[_ID].date );
	return (
    <div>
      <h1 className="post-title">{ _pages[_ID].title  }</h1>
      <p className="post-meta">{ publishDate.format('MMM DD, YYYY') }</p>
      { _body }
    </div>
	);
};

Post.propTypes = {
	/**
	 * _body: (text)(5)
	 */
	_body: PropTypes.node.isRequired,
};

Post.defaultProps = {};

export default Post;