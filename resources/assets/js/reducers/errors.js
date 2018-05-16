import * as Types from './../constants/ActionType';

var initialState = {
    status: true,
    msg: '',
};

const errors = (state = initialState, action) => {
    switch(action.type){
        case Types.ERROR:
        
            state = {
                status : action.status, 
                msg: action.msg
            };

           return state;
        default: 
        return state;
    }
}

export default errors;