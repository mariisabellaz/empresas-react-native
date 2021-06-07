import {combineReducers} from "redux";

import AuthReducer from './authReducer';
import EnterpriseReducer from './enterpriseReducer';

export default combineReducers({
  auth: AuthReducer,
  enterprise: EnterpriseReducer,
})
