import React, { Component } from 'react';


class Home extends Component {

	constructor(props){
		super(props);
		this.state = {
			test: 'old',
			test2: true
		};
		console.log('contrucstor'); // 1
		this.onTest = this.onTest.bind(this);
	}

	componentWillMount(){
		console.log('componentWillMount'); // 2
	}

	componentDidMount(){
		console.log('componentDidMount'); // 4
	}

	// ****** //


	shouldComponentUpdate(nextProps, nextState){
		// 1.2
		console.log('shouldComponentUpdate');
		// console.log(nextProps);
		console.log(nextState);
		return true;
	}

	componentWillUpdate(nextProps, nextState){
		// 1.3
		console.log('componentWillUpdate');
		// console.log(nextProps);
		console.log(nextState);
	}

	componentDidUpdate(prevProps, prevState, snapshot){
		// 1.5
		console.log('componentDidUpdate');
		// console.log(prevProps);
		console.log(prevState);
		// console.log(this.state);
	}

	// ****** //

	componentWillUnmount(){
		console.log('componentWillUnmount');
	}
	componentWillReceiveProps(nextprops){
		console.log('componentWillReceiveProps')
	}
	onTest() {
		// 1.1 
		console.log('test');
		this.setState({
			test: 'new'
		});
		
	}

	//Case 1:  1. contrucstor 2. componentWillMount 3. render 4. componentDidMount
	//Case 2:  1. func: test 2. shouldComponentUpdate 3. ComponentWillUpdate 4. render 5. componentDidUpdate
	render() {
		console.log('render'); // 3 | 1.4
		return (
			<div className="Home">
				<h5> </h5>
				
				<button type="button" onClick={this.onTest} className="btn btn-default">button</button>
				
			</div>
		);
	}
}

export default Home;
