import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as config from './../../constants/config';
import callApi from './../../utils/apiCaller';
class ProductActionPage extends Component {

	constructor(props){
		super(props);
		this.state = {
			id: '',
			txtFirstName: '',
			txtLastName: '',
			txtAvatar: '',
			txtchbox: false
			
		};
		this.onSave = this.onSave.bind(this);
		this.onChangeFrom = this.onChangeFrom.bind(this);
	}

	componentDidMount(){
		var {match} = this.props;
		if(match) {
			var id = match.params.id;
			callApi('GET', config.APP_URL+'/'+id, null).then(res => {
				var data = res.data.data;
				this.setState({
					id: data.id,
					txtFirstName: data.first_name,
					txtLastName: data.last_name,
					txtAvatar: data.avatar
				});
			});
		}
	}

	onChangeFrom (event) {
		var target = event.target;
		var name = target.name;
		var value = target.type === 'checkbox'? target.checked:target.value;
		this.setState({
			[name]: value
		});
	
	}

	onSave (event) {
		event.preventDefault();

		var {history} = this.props;
		var {id, txtFirstName, txtLastName,txtAvatar} = this.state;
		if(id) { //update
			var data = {txtFirstName: txtFirstName, txtLastName: txtLastName, txtAvatar: txtAvatar};
			callApi('PUT', config.APP_URL+'/'+ id, data).then( res => {
				history.push("/products-list");
			});
		} else { //create
			callApi('POST', config.APP_URL, {
				txtFirstName: txtFirstName,
				txtLastName: txtLastName,
				txtAvatar: txtAvatar
			}).then( res => {
				//C1 // history.push("/products-list");
				history.push("/");
				//C2: redirect 
				// history.goBack();
			});
		}
	}

	render() {
		return (
			<div>
				<div className="col-lg-3 col-sm-3 col-xs-3 col-md-3">
				</div>
				<div className="col-lg-6 col-sm-6 col-xs-6 col-md-6">
					
					<form onSubmit={this.onSave}>
						<legend>Form title</legend>
					
						<div className="form-group">
							<label>FirstName</label>
							<input 
								type="text" 
								className="form-control" 
								value={this.state.txtFirstName} 
								onChange={this.onChangeFrom} 
								name="txtFirstName" 
								placeholder="FirstName"/>
						</div>
						<div className="form-group">
							<label>LastName</label>
							<input 
								type="text" 
								className="form-control" 
								value={this.state.txtLastName} 
								onChange={this.onChangeFrom} 
								name="txtLastName" 
								placeholder="LastName"/>
						</div>
						<div className="form-group">
							<label>Avatar</label>
							<input 
								type="text" 
								className="form-control" 
								value={this.state.txtAvatar} 
								onChange={this.onChangeFrom} 
								name="txtAvatar" 
								placeholder="Avatar"/>
						</div>
						<div className="form-group">
							<label>Status</label>
							
							<div className="checkbox">
								<label>
									<input 
										type="checkbox" 
										value={this.state.txtchbox} 
										// checked 
										onChange={this.onChangeFrom} 
										name="txtchbox"/>
									Con hang
								</label>
							</div>
							
						</div>
						
						<button type="submit" className="btn btn-primary margin-right-10">Save</button>
						<Link to="/products-list" className="btn btn-success">
								Back
						</Link>
					</form>
				</div>
			</div>
		);
	} // end render

	
}

export default ProductActionPage;
