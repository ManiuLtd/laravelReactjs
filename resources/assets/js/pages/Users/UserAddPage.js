import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as config from './../../constants/config';
import Validator from 'react-forms-validator';
import { connect } from 'react-redux';
import {actAddUserRequest, actEditUserRequest, actGetUserRequest} from './../../actions/index';
class UserAddPage extends Component {
    constructor(props){
		super(props);
		this.state = {
			id: '',
			username: '',
			firstname: '',
			lastname: '',
			email: '',
			address: '',
			phone: '',
			job: '',
			gender: config.GENDER_FEMALE,
			actived: config.DEACTIVED,
			isFormValidationErrors : true,
            submitted:false
		};
		this.onSave = this.onSave.bind(this);
		this.onChangeForm = this.onChangeForm.bind(this);
		this.isValidationError = this.isValidationError.bind(this);
        this.flag= true;
	}
	
	componentDidMount(){
		var {match} = this.props;
		if(match) {
			/*
			 * Get id from URL
			 */ 
			var id = match.params.id;
			this.props.getUserId(id);
		}
	}

	componentWillReceiveProps(nextprops){
		if(nextprops && nextprops.user){
			var {user} = nextprops;
			this.setState({
				id: user.id,
				username: user.username,
				firstname: user.firstname,
				lastname: user.lastname,
				email: user.email,
				address: user.address,
				phone: user.phone,
				job: user.job,
				gender: user.gender,
				actived: user.actived
			});
		}
	}

	isValidationError(flag){
		this.setState({isFormValidationErrors:flag});
   	}

	onChangeForm (event) {
		var target = event.target;
		var name = target.name;
		var value = target.type === 'checkbox'? target.checked:target.value;
		this.setState({
			[name]: value
		});
	}

	onSave (event) {
		event.preventDefault();
		this.setState( { submitted:true } );
		var {history} = this.props;
        var {id, username, firstname, lastname, email, job, phone, address, actived, gender} = this.state;
		var data = { username: username, firstname: firstname, lastname: lastname, email: email, job: job, phone: phone, address: address, gender: gender, actived: actived? config.ACTIVED : config.DEACTIVED };
		
		this.setState( { submitted:true } );
        let { isFormValidationErrors } = this.state;
        if ( !isFormValidationErrors ){
			if(id) { //update
				this.props.onEditUser(data, id);
				history.goBack();
			} else { //create
				this.props.onAddUser(data);
				history.goBack();
			}
        }
	}
//
	render() {
		
		return (
			<div>
				<div className="col-lg-6 col-sm-6 col-xs-6 col-md-6">
					<form noValidate onSubmit={this.onSave}>
						<legend>Form title</legend>

						<div className="form-group">
							<label>UserName</label>
							<input 
								type="text" 
								className="form-control" 
								value={this.state.username} 
								onChange={this.onChangeForm} 
								name="username" 
								placeholder="UserName"/>
							<Validator 
                                isValidationError={this.isValidationError}
                                isFormSubmitted={this.state.submitted} 
                                reference={{username : this.state.username}}
                                validationRules={{required:true, minLength: 5,maxLength:10}} 
                                validationMessages={{ required: "This field is required", minLength: "Not a valid Min length: 5 ",maxLength: "Not a valid Max length: 10 "}}/>
						</div>
						<div className="form-group">
							<label>FirstName</label>
							<input 
								type="text" 
								className="form-control" 
								value={this.state.firstname} 
								onChange={this.onChangeForm} 
								name="firstname" 
								placeholder="FirstName"/>
							<Validator 
                                isValidationError={this.isValidationError}
                                isFormSubmitted={this.state.submitted} 
                                reference={{firstname : this.state.firstname}}
                                validationRules={{required:true, maxLength:50}} 
                                validationMessages={{ required: "This field is required", maxLength: "Not a valid Max length: 10 "}}/>
						</div>
						<div className="form-group">
							<label>LastName</label>
							<input 
								type="text" 
								className="form-control" 
								value={this.state.lastname} 
								onChange={this.onChangeForm} 
								name="lastname" 
								placeholder="LastName"/>
							<Validator 
                                isValidationError={this.isValidationError}
                                isFormSubmitted={this.state.submitted} 
                                reference={{lastname : this.state.lastname}}
                                validationRules={{required:true, maxLength:50}} 
                                validationMessages={{ required: "This field is required", maxLength: "Not a valid Max length: 10 "}}/>
							
						</div>
						<div className="form-group">
							<label>Email</label>
							<input 
								type="text" 
								className="form-control" 
								value={this.state.email} 
								onChange={this.onChangeForm} 
								name="email" 
								placeholder="Email"/>
							<Validator 
                                isValidationError={this.isValidationError}
                                isFormSubmitted={this.state.submitted} 
                                reference={{email : this.state.email}}
                                validationRules={{required:true, email:true}} 
                                validationMessages={{ required: "This field is required", email: "Not a valid email"}}/>
							
						</div>
						<div className="form-group">
							<label>Phone</label>
							<input 
								type="Phone" 
								className="form-control" 
								value={this.state.phone} 
								onChange={this.onChangeForm} 
								name="phone" 
								placeholder="Phone"/>
							<Validator 
                                isValidationError={this.isValidationError}
                                isFormSubmitted={this.state.submitted} 
                                reference={{phone : this.state.phone}}
                                validationRules={{required:true, number:true, minLength: 10,maxLength:11}} 
                                validationMessages={{ required: "This field is required", number: "Not a valid number", maxLength: "Not a valid Max length: 11 character", minLength: "Not a vaild min length is 10 character"}}/>
							
						</div>
						<div className="form-group">
							<label>Address</label>
							<input 
								type="Address" 
								className="form-control" 
								value={this.state.address} 
								onChange={this.onChangeForm} 
								name="address" 
								placeholder="Address"/>
							<Validator 
                                isValidationError={this.isValidationError}
                                isFormSubmitted={this.state.submitted} 
                                reference={{address : this.state.address}}
                                validationRules={{required:true, maxLength:50}} 
                                validationMessages={{ required: "This field is required", maxLength: "Not a valid Max length: 10 "}}/>
						</div>
						<div className="form-group">
							<div className="Job">
								<label>Job</label>
								<select
									className="form-control"
									name="job"
									value={this.state.job}
									onChange={this.onChangeForm}
								>
									<option value=''>--Select One--</option>
									<option value='Dev'>Dev</option>
									<option value='Doctor'>Doctor</option>
									<option value='Driver'>Driver</option>
								</select>
								<Validator 
									isValidationError={this.isValidationError}
									isFormSubmitted={this.state.submitted} 
									reference={{job : this.state.job}}
									validationRules={{required:true, }} 
									validationMessages={{ required: "This field is required"}}/>
								
							</div>
						</div>
						<div className="form-group">
							<div className="checkbox">
								<label>
									<input 
										type="checkbox" 
										value={this.state.actived} 
										checked={this.state.actived}
										onChange={this.onChangeForm} 
										name="actived"/>
									Active 
								</label>
							</div>
						</div>
						<div className="form-group">
							<div className="Radio">
								<label>									
								</label>
								<br/>
								<input type="radio" 
									name="gender" 
									value="0"
									checked={this.state.gender === "0"} 
									onChange={this.onChangeForm} /> Male
       						 	<br />
									
								<input type="radio"
									name="gender"
									value="1" 
									checked={this.state.gender === "1"} 
									onChange={this.onChangeForm} /> Female
								<Validator 
									isValidationError={this.isValidationError}
									isFormSubmitted={this.state.submitted} 
									reference={{gender : this.state.gender}}
									validationRules={{required:true, }} 
									validationMessages={{ required: "This field is required"}}/>
								
							</div>
						</div>

						<button type="submit" className="btn btn-primary margin-right-10">Save</button>
						<Link to="/users" className="btn btn-success">
								Back
						</Link>
					</form>
				</div>
			</div>
		);
	} // end render
	
}

const mapStateToProps = state => {
	
	return {
		user: state.user,
		users: state.users,
		errors: state.errors
	}
}

const mapDispatchToProps = (dispatch, props) => {
	return {
		onAddUser : (user) => {
			dispatch(actAddUserRequest(user));
		}, 
		onEditUser : (user, id) => {
			dispatch(actEditUserRequest(user, id));
		},
		getUserId : (id) => {
			dispatch(actGetUserRequest(id));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAddPage);