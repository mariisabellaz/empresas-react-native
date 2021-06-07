import {ENTERPRISES_FETCH} from '../actionsType'
import api from "../../services/api";
import {processRequestError} from "../helpers";

export const getEnterprises = (callback, failBack) => async (dispatch) => {
    await api.get("/enterprises" ).then(response => {
        dispatch({type: ENTERPRISES_FETCH, payload: response.data.enterprises});
        callback && callback(response.data.enterprises);
    }).catch(reject => {
        failBack && failBack();
        processRequestError(reject, dispatch)
    });
};
