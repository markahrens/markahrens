import PropTypes from 'prop-types';
import React from 'react';

/**
 * The listing posts component
 */
const ListTrips = ({ _pages, _relativeURL, _ID , title}) => (
  <div>
    <h1>{ title }</h1>
    <ul className="posts">
      {
          Object.keys( _pages )
          .filter( page => _pages[ page ]._url.startsWith('/trips/') )
          .filter( page => _pages[ page ].type == 'trip' )
					.map( ( page, i ) =>
						<li key={ i }>
							<a href={ _relativeURL( _pages[ page ]._url, _ID ) }>{ _pages[ page ].title }</a>
						</li>
					)
			}
    </ul>
  </div>
);

export default ListTrips;