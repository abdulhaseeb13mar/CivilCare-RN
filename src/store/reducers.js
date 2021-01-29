import {combineReducers} from 'redux';
import ActionTypes from './actionTypes';

let currentBuider = {
  id: '',
  buildersName: '',
  dis: '',
  rating: '',
};

let UserInfo = {
  firstname: '',
  lastname: '',
  email: '',
  phone: '',
  address: '',
};

const CurrentBuilderReducer = (state = currentBuider, action) => {
  switch (action.type) {
    case ActionTypes.SET_BUILDER_INFO:
      state = Object.assign({}, state, {...action.payload});
      return state;

    default:
      break;
  }
  return state;
};

const UserInfoReducer = (state = UserInfo, action) => {
  switch (action.type) {
    case ActionTypes.SET_USER_INFO:
      state = Object.assign({}, state, {...action.payload});
      return state;

    default:
      break;
  }
  return state;
};

export default combineReducers({CurrentBuilderReducer, UserInfoReducer});
