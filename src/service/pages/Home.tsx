import * as React from 'react';
import {bindClassMethod} from '../utils/index';
import {Layout} from '../components/Layout';
import { Menu } from 'semantic-ui-react'

interface HomeProps{
}
interface HomeState{
	activeItem:string
}
export class Home extends React.Component<HomeProps,HomeState>{
	state = {
		activeItem:''
	};
	static defaultProps = {
	};
	constructor(props?:HomeProps){
		super(props);
		bindClassMethod(this);
	}
	setState(state){
		super.setState(state);
	}

	menu = [
		{name: 'home',label:'Home'},
		{name: 'work',label:'Work'}
	];

	handleItemClick(e){
		const {name} = arguments[1];
		return this.setState({
			activeItem: name
		})
	}

	render(){
		return (
			<Layout title="Home">
				<Menu>
					{this.menu.map(({name,label},index)=>
						<Menu.Item
							key={index}
							name={name}
							active={this.state.activeItem === name}
							onClick={this.handleItemClick}
						>
							{label}
						</Menu.Item>
					)}
				</Menu>
				<h1>WIP:{this.state.activeItem}</h1>
			</Layout>
		)
	}
}
