import React, { Component } from 'react';

class UsersList extends Component {
	render() {
		//children
		var { children } = this.props;
		return (
			<div className="panel panel-primary">
				<div className="panel-heading">
					<h3 className="panel-title">Panel title</h3>
				</div>
				<div className="panel-body">
					<table className="table table-hover table-bordered">
						<thead>
							<tr>
								<th className="text-center">STT</th>
								<th className="text-center">UserName</th>
								<th className="text-center">FirstName</th>
								<th className="text-center">LastName</th>
								<th className="text-center">Email</th>
								<th className="text-center">Job</th>
								<th className="text-center">Phone</th>
								<th className="text-center">Address</th>
								<th className="text-center">Gender</th>
								<th className="text-center">Actived</th>
							
								<th className="text-center">Action</th>
							</tr>
						</thead>
						<tbody>
							
							{children}

						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default UsersList;
