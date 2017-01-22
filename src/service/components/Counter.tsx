import * as React from 'react';
import {bindClassMethod} from '../utils/index';

interface CounterProps{
	start:number,
	min?:number,
	max?:number
}
interface CounterState{
	count:number
}
export class Counter extends React.Component<CounterProps,CounterState>{
	state = {
		count: 0
	};
	static defaultProps = {
		min: 0
	};
	constructor(props?:CounterProps){
		super(props);
		bindClassMethod(this);
		this.state.count = props.start;
	}
	setState(state:any){
		if(this.props.max!==void 0 && state.count > this.props.max) state.count = this.props.max;
		if(this.props.min!==void 0 && state.count < this.props.min) state.count = this.props.min;
		super.setState(state);
	}
	increment(){
		this.setState({
			count: this.state.count + 1
		})
	}
	decrement(){
		this.setState({
			count: this.state.count - 1
		})
	}
	render(){
		return (
			<div>
				<button onClick={this.decrement}>Count down...</button>
				&nbsp;
				<button onClick={this.increment}>Count up!</button>
				<h1>Count: {this.state.count}</h1>
			</div>
		)
	}
}
