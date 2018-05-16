import { combineReducers } from 'redux';
// import products from './products';
import users from './users';
import user from './user';
// import errors from './errors';
const appReducers = combineReducers({
    // products,
    users,
    user,
    // errors
});

export default appReducers;