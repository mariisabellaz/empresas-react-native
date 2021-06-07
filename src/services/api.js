import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({
    baseURL: 'https://empresas.ioasys.com.br/api/v1',
    headers: {
        'Content-Type': 'application/json',
    }
});

api.interceptors.request.use(async function (config) {

    const client = await AsyncStorage.getItem("client");
    const accessToken = await AsyncStorage.getItem("token");
    const uid = await AsyncStorage.getItem("uid");

    if (client) {
        config.headers["client"] = client;
    }
    if (accessToken) {
        config.headers["access-token"] = accessToken;
    }
    if (uid) {
        config.headers["uid"] = uid;
    }
    config.headers["Content-Type"] = "application/json";

    return config;
}, function (error) {
    return Promise.reject(error);
});

api.interceptors.response.use(function (response){
    return response;
});

export default api;
