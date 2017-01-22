export function bindClassMethod(instance):void{
	Object.keys(Object.getPrototypeOf(instance))
		.filter(key=>[
			'getInitialState',
			'getDefaultProps',
			'componentWillMount',
			'omponentDidMount',
			'componentWillReceiveProps',
			'shouldComponentUpdate',
			'componentWillUpdate',
			'componentDidUpdate',
			'componentWillUnmount',
			'render'
		].indexOf(key)==-1)
		.filter(key=>typeof instance[key]=='function')
		.forEach((key:string)=>instance[key] = instance[key].bind(instance));
}
