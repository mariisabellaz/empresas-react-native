import {
  AUTH_CLEAR,
  AUTH_LOGIN,
  AUTH_LOGOUT,
  AUTH_SET_USER,
} from "../actionsType";

const INITIAL_STATE = {
  authenticated: false,
  errorMessage: null,
};

export default (state = INITIAL_STATE, action) => {

  switch (action.type) {
    case AUTH_LOGIN :
      return { ...state, authenticated: true, errorMessage: {} };
    case AUTH_LOGOUT :
      return { ...state, authenticated: false, errorMessage: {} };
    case AUTH_SET_USER :
      return { ...state, user: action.payload };
    case AUTH_CLEAR :
      return INITIAL_STATE;
    default:
      return state;
  }
};
