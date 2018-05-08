import React, { Component } from 'react';
import UsersList from './../../components/Users/UsersList';
import UserSpec from './../../components/Users/UserSpec';
import * as config from './../../constants/config';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import callApi from './../../utils/apiCaller';

class UsersPage extends Component {

	constructor(props) {
		super(props);
		this.state = {
			users : [] 
		}
		this.onDelete = this.onDelete.bind(this);
	}

	componentDidMount(){
		callApi('GET', config.APP_URL, null).then( res => {
			this.setState({
				users: res.data
			});
		});
	}

	onDelete (id) {
		var {history} = this.props;
		var {users} = this.state;
		callApi('DELETE', config.APP_URL+'/destroy/'+id, null).then( res => {
			
			// if (res.status === 200) {
				var index = this.findIndex(users, id);
				if(index !== -1) {
					users.splice(index, 1);
				}
			// }
			history.push("/users");
		});
	}

	findIndex (users, id) {
		var result = -1;
		users.forEach((user, index) => {
			if(user.id === id) {
				result = index;
			}
		});
		return result;
	}

	render() {
		var {users} = this.state;
		return (
			<div className="UsersPage col-lg-12 col-sm-12 col-xs-12 col-md-12">
				<Link to="/users/add" className="btn btn-primary">
					Add
				</Link>
				<br/><br/>
				<UsersList>
                    { this.showUser(users) }
				</UsersList>
			</div>
		);
	} // end render

	showUser (users) {
		var result = null;
		if (users.length > 0) {
			result = users.map((user, index) => {
				return (<UserSpec key={index} user={user} index={index} onDelete={this.onDelete}/>);
			});
		}
		return result;
	}
}



export default connect(null, null)(UsersPage);
