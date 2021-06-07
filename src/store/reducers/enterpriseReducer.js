import {ENTERPRISE_CLEAR, ENTERPRISES_FETCH} from "../actionsType";
import _ from "lodash";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action = null) => {

  switch (action.type) {
    case ENTERPRISES_FETCH :
      return _.mapKeys(action.payload, 'id');
    case ENTERPRISE_CLEAR :
      return {};
    default:
      return state;
  }
}
