import * as Types from './../constants/ActionType';
import * as config from './../constants/config';
var initialState = {
    id: '',
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    address: '',
    phone: '',
    job: 'Dev',
    gender: config.GENDER_MALE,
    actived: config.DEACTIVED
};

const user = (state = initialState, action) => {
    switch(action.type){
        case Types.GET_USER:
            state = {
                id: action.user.id,
                username: action.user.username,
                firstname: action.user.firstname,
                lastname: action.user.lastname,
                email: action.user.email,
                address: action.user.address,
                phone: action.user.phone,
                job: action.user.job,
                gender: action.user.gender === 1 ? config.GENDER_FEMALE : config.GENDER_MALE,
                actived: action.user.actived ? config.ACTIVED : config.DEACTIVED
            };
            return state;
        default: 
            return state;
    }
}

export default user;