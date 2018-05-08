import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as config from './../../constants/config';
import callApi from './../../utils/apiCaller';

class UserAddPage extends Component {
    constructor(props){
		super(props);
		this.state = {
			id: '',
			txtName: '',
			txtEmail: '',
			txtPassword: '',
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
                var data = res.data;
				this.setState({
					id: data.id,
					txtName: data.name,
					txtEmail: data.email,
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
        var {id, txtName, txtEmail,txtPassword} = this.state;
		var data = {name: txtName, email: txtEmail, password: txtPassword};
		if(id) { //update
			callApi('PUT', config.APP_URL+'/update/'+ id, data).then( res => {
				history.push("/users");
			});
		} else { //create
			callApi('POST', config.APP_URL+'/store', data).then( res => {
				history.push("/users");
			});
		}
	}

	render() {
		return (
			<div>
				<div className="col-lg-6 col-sm-6 col-xs-6 col-md-6">
					<form onSubmit={this.onSave}>
						<legend>Form title</legend>
					
						<div className="form-group">
							<label>Name</label>
							<input 
								type="text" 
								className="form-control" 
								value={this.state.txtName} 
								onChange={this.onChangeFrom} 
								name="txtName" 
								placeholder="Name"/>
						</div>
						<div className="form-group">
							<label>Email</label>
							<input 
								type="text" 
								className="form-control" 
								value={this.state.txtEmail} 
								onChange={this.onChangeFrom} 
								name="txtEmail" 
								placeholder="Email"/>
						</div>
						<div className="form-group">
							<label>Password</label>
							<input 
								type="password" 
								className="form-control" 
								value={this.state.txtPassword} 
								onChange={this.onChangeFrom} 
								name="txtPassword" 
								placeholder="Password"/>
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

export default UserAddPage;