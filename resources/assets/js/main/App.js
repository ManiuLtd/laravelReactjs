import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Menu from './../components/Menu/Menu';
import routes from './../routes';

class App extends Component {

	constructor(props){
		super(props);
		this.showContentMenu = this.showContentMenu.bind(this);
	}

	showContentMenu  (routes)  {
		var result = null;
		if(routes.length > 0){
			result = routes.map((route, index) => {
				return (
					<Route 
						key={index} 
						path={route.path} 
						exact={route.exact} 
						component={route.main} 
					/>
				);
			})
		}
		return result;
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Menu />
		
					<Switch>
						{this.showContentMenu(routes)}
					</Switch>
				</div>
			</Router>
		);
	}
	
}

export default App;
