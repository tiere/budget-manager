import * as actionTypes from "../actions/types";

const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
  case actionTypes.SIGN_IN_SUCCESS:
    return Object.assign({}, state, {token: action.token});
  default:
    return state;
  }
};

export default userReducer;
