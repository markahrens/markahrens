import PropTypes from 'prop-types';
import React from 'react';

/**
 * The listing posts component
 */
const ListTrip = ({ _pages, _relativeURL, _ID, title }) => (
  <div>
    <h1>{ title }</h1>
    <ul className="posts">
      {
          Object.keys( _pages )
          .filter( page => _pages[ page ]._url.startsWith('/'+_ID+'/') )
          .sort((a,b) => _pages[ a ].date > _pages[ b ].date)
					.map( ( page, i ) =>
						<li key={ i }>
							<a href={ _relativeURL( _pages[ page ]._url, _ID ) }>{ _pages[ page ].title }</a>
						</li>
          )
			}
    </ul>
  </div>
);

export default ListTrip;