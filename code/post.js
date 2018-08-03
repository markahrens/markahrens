import PropTypes from 'prop-types';
import Moment from 'moment';
import React from 'react';


/**
 * The post component
 */
const Post = ({ title, image, date, _body }) => {
	const publishDate = Moment( date );

	return (
    <div className="post">
      <img className="post-photo" src={ image } />
      
      <div className="post-content">
        <h1 className="post-title">{ title  }</h1>
        <p className="post-meta">{ publishDate.format('MMM DD, YYYY') }</p>

        <article>
        { _body }
        </article>
      </div>
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