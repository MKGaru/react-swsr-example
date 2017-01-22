import * as React from 'react';
import {Layout} from '../components/Layout';
import {Counter} from '../components/Counter'

export const App = ({})=>
	<Layout title="Title">
		<h1>Hello</h1>
		<Counter start={1} max={10}/>
	</Layout>
