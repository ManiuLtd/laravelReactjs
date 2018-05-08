import React, { Component } from 'react';


class ProductList extends Component {
	render() {
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
								<th className="text-center">ID</th>
								<th className="text-center">FirstName</th>
								<th className="text-center">LastName</th>
								<th className="text-center">Avatar</th>
								{/* <th className="text-center">Status</th> */}
								<th className="text-center">Action</th>
							</tr>
						</thead>
						<tbody>
							{ children }
							
						</tbody>
					</table>
				</div>
			</div>
		);
	}
}

export default ProductList;
