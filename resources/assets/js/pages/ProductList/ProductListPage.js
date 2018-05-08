import React, { Component } from 'react';
import ProductsList from './../../components/Product/ProductsList';
import ProductItem from './../../components/Product/ProductItem';
import * as config from './../../constants/config';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import callApi from './../../utils/apiCaller';

class ProductList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			products : [] 
		}
		this.onDelete = this.onDelete.bind(this);
	}

	componentDidMount(){		
		callApi('GET', config.APP_URL, null).then( res => {
			this.setState({
				products: res.data
			});
		});
	}

	onDelete (id) {
		var {history} = this.props;
		var {products} = this.state;
		callApi('DELETE', config.APP_URL, id).then( res => {
			if (res.status === 200) {
				var index = this.findIndex(products, id);
				if(index !== -1) {
					products.splice(index, 1);
				}
			}
			history.push("/products-list");
		});
	}

	findIndex (products, id) {
		var result = -1;
		products.forEach((product, index) => {
			if(product.id === id) {
				result = index;
			}
		});
		return result;
	}

	render() {
		var {products} = this.state;
		return (
			<div className="ProductList col-lg-12 col-sm-12 col-xs-12 col-md-12">
				<Link to="/products/add" className="btn btn-primary">
					Add
				</Link>
				<br/><br/>
				<ProductsList>
					{this.showProduct(products)}
				</ProductsList>
			</div>
		);
	} // end render

	showProduct (products) {
		var result = null;
		if (products.length > 0) {
			result = products.map((product, index) => {
				return (<ProductItem key={index} product={product} index={index} onDelete={this.onDelete}/>);
			});
		}
		return result;
	}
}

const mapStateToProps = (state) => {
	return {
		products: state.products
	};
}

export default connect(mapStateToProps, null)(ProductList);
