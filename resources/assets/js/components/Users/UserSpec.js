import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UserSpec extends Component {
	
	onDelete (id) {
		this.props.onDelete(id);
	}

	render() {
		var {user, index} = this.props;
		return (
			<tr className="text-center">
				<td>{index+1}</td>
				<td>{user.id}</td>
				<td>{user.name}</td>
				<td>{user.email}</td>
				<td>{user.created_at}</td>
				<td>
					<Link to={`users/${user.id}/edit`} className="btn btn-success margin-right-10">
						Edit
					</Link>
					
					<button type="button" className="btn btn-danger" onClick={ () => this.onDelete(user.id)}>Delete</button>

				</td>
			</tr>
		);
	}
}

export default UserSpec;
