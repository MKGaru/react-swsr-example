import * as React from 'react';

export const Layout = ({children=void 0,title})=>
	<html>
		<head>
			<meta charSet="utf8"/>
			<title>{title}</title>
			<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css"/>
		</head>
		<body>
			{children}
			<script src="vendor.js"></script>
			<script src="pages.js"></script>
			<script src="client.js"></script>
		</body>
	</html>
