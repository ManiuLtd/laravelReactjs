import React, { Component } from 'react';
import UsersList from './../../components/Users/UsersList';
import UserSpec from './../../components/Users/UserSpec';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {actFetchUsersRequest, actDeleteUserRequest} from './../../actions/index';


class UsersPage extends Component {

	constructor(props) {
		super(props);
		this.onDelete = this.onDelete.bind(this);
	}

	componentDidMount(){
		this.props.getUsers();
	}

	onDelete (id) {
		this.props.onDeleteUser(id)
	}

	render() {
		var {users} = this.props;
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

const mpaStateToProps = state => {
	
	return {
		users: state.users
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		getUsers : () => {
			dispatch(actFetchUsersRequest());
		},
		onDeleteUser : (id) => {
			dispatch(actDeleteUserRequest(id));
		}
	}
}

export default connect(mpaStateToProps, mapDispatchToProps)(UsersPage);
