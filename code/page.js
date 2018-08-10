import PropTypes from 'prop-types';
import React from 'react';


/**
 * The page layout component
 */
const Page = ({ title, stylesheet, primaryimage, main, script, _relativeURL, _ID }) => (
	<html>
	<head>
		<title>{ title } - Mark Ahrens</title>
		<meta charSet="utf-8" />
		<meta httpEquiv="x-ua-compatible" content="ie=edge" />
		<meta name="viewport" content="width=device-width, initial-scale=1" />

		<link rel="stylesheet" href={ _relativeURL( `/assets/css/style.css`, _ID ) } />
		{
			stylesheet != undefined
				? ( <link rel="stylesheet" href={ _relativeURL( `/assets/css/${ stylesheet }.css`, _ID ) } /> )
				: null
		}
	</head>
	<body>
		<header>
			<p><a href="/">Mark Ahrens</a></p>
			<nav>
				<ul>
					<li><a href="/posts">Posts</a></li>
					<li><a href="/trips">Trips</a></li>
				</ul>
			</nav>
		</header>
		{ primaryimage }
		<main>
			{ main }
		</main>

		<footer>
			Copyright Mark Ahrens
		</footer>

		{
			script != undefined
				? ( <script src={ _relativeURL( `/assets/js/${ script }.js`, _ID ) } /> )
				: null
		}
	</body>
	</html>
);

Page.propTypes = {
/**
	 * title: Homepage
	 */
	title: PropTypes.string.isRequired,

	/**
	 * main: (partials)(5)
	 */
	main: PropTypes.node.isRequired,

};

Page.defaultProps = {};

export default Page;
