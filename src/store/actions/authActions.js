import React from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {
    AUTH_SET_USER,
    AUTH_CLEAR,
    ENTERPRISE_CLEAR
} from "../actionsType";
import api from "../../services/api";
import {processRequestError} from "../helpers";

const setHeader = async (response) => {
    await AsyncStorage.setItem("client", response.headers["client"]);
    await AsyncStorage.setItem("token", response.headers["access-token"]);
    await AsyncStorage.setItem("uid", response.headers["uid"]);
    await AsyncStorage.setItem("investor", JSON.stringify(response.data.investor));
};

export const authLogin = (formValues, callback, fallback) => async dispatch => {
    await api.post("/users/auth/sign_in", formValues).then(response => {
        setHeader(response);
        dispatch({type: AUTH_SET_USER, payload: response.data});
        callback && callback(response.data);
    }).catch(reject => {
        fallback && fallback();
        processRequestError(reject, dispatch)
    });
};

export const authLogout = (callback, fallback) => async dispatch => {
    await removeItemValue(dispatch, callback, fallback);
};

async function removeItemValue(dispatch, callback, fallback) {
    try {
        dispatch({type: AUTH_CLEAR});
        dispatch({type: ENTERPRISE_CLEAR});
        callback && callback();
        return true;
    } catch (e) {
        fallback && fallback();
        return false;
    }
}
