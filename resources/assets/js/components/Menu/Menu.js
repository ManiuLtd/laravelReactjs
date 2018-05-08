import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

const menu = [
	{
		name: 'Home',
		to: '/',
		exact: true
	},
	{
		name: 'About',
		to: '/about',
		exact: false
	},
	{
		name: 'Products',
		to: '/products-list',
		exact: false
	},
	{
		name: 'Users',
		to: '/users',
		exact: true
	},
];


const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
	return (
		<Route 
			path={to} 
			exact={activeOnlyWhenExact} 
			children={({ match }) => {
				var active = (match && match !== null) ? 'active abc' : '';
				return (
					<li className={`class-default ${active}`}>
						<Link to={to} className="my-link">
							{label}
						</Link>
					</li>
				)
			}}
		/>
	)
}


class Menu extends Component {

	constructor(props) {
		super(props);
		this.showMenu = this.showMenu.bind(this);
	}

	showMenu (menus) {
		var result = null;
		if(menus.length > 0){
			result = menus.map((menu, index) => {
				return (<MenuLink label={menu.name} to={menu.to} activeOnlyWhenExact={menu.exact} key={index} />)
			});
		}
		return result;
	}

	render() {
		return (

			<nav className="navbar navbar-inverse">
				<ul className="nav navbar-nav">
					{ this.showMenu(menu) }
					<li> 
						<Link to="/dfasdfadfasdf" className="my-link">
							Not Found
						</Link>
					</li>
				</ul>
			</nav>
			
		);
	}
}

export default Menu;