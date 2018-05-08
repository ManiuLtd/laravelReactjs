import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ProductItem extends Component {
	
	onDelete (id) {
		this.props.onDelete(id);
	}

	render() {
		var {product, index} = this.props;
		return (
			<tr>
				<td>{index+1}</td>
				<td>{product.id}</td>
				<td>{product.name}</td>
				<td>{product.email}</td>
				<td>{product.created_at}</td>
				<td>
					<Link to={`products/${product.id}/edit`} className="btn btn-success margin-right-10">
						Edit
					</Link>
					
					<button type="button" className="btn btn-danger" onClick={ () => this.onDelete(product.id)}>Delete</button>

				</td>
			</tr>
		);
	}
}

export default ProductItem;
