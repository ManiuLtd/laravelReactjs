import * as Types from './../constants/ActionType';
import * as config from './../constants/config';
import callApi from './../utils/apiCaller';

export const actFetchUsersRequest = () => {
    return (dispatch) => {
        return callApi('GET', config.APP_URL, null).then( res => {
			dispatch(actFetchUsers(res.data));
		});
    }
}

export const actFetchUsers = (users) => {
    return {
        type: Types.FETCH_USERS,
        users
    }
}
    
export const actDeleteUserRequest = (id) => {
    return (dispatch) => {
        return callApi('DELETE', config.APP_URL+'/destroy/'+id, null).then( res => {
			dispatch(actDeleteUser(id));
		}); 
    }
}

export const actDeleteUser = (id) => {
    return {
        type: Types.DELETE_USERS,
        id
    }
}

export const actAddUser = (user, status, msg) => {
    return {
        type: Types.ADD_USERS,
        user, status, msg
    }
}

export const actAddUserRequest = (user) => {
    return (dispatch) => {
        return callApi('POST', config.APP_URL+'/store', user).then( res => {
                dispatch(actAddUser(user, true, null));
        });
    }
}
export const actError = (status, msg) => {
    return {
        type: Types.ERROR,
        status,
        msg
    }
}
export const actEditUser = (user, id) => {
    return {
        type: Types.UPDATE_USERS,
        user, id
    }
}

export const actEditUserRequest = (user, id) => {
    return (dispatch) => {        
        return callApi('PUT', config.APP_URL+'/update/'+ id, user).then( res => {            
            dispatch(actEditUser(user, id));
        });
    }
}

export const actGetUserRequest = id => {
    return (dispatch) => {
        return callApi('GET', config.APP_URL+'/edit/'+id, null).then(res => {
            dispatch(actGetUser(res.data));
        });
    }
}

export const actGetUser = (user) => {
    return {
        type: Types.GET_USER,
        user
    }
}