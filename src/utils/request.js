import axios from "axios";
import qs from 'qs'

const instance = axios.create({
    baseURL: 'http://bw.gsruiying.com.cn',
    timeout: 100000,
});

// Add a request interceptor
instance.interceptors.request.use(function (config) {

    if (config.data && !config.data instanceof FormData) {
        config.data = qs.stringify(config.data)
    }
    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(function (response) {
    // Do something with response data
    return response.status == 200 ? response.data : response;
}, function (error) {
    // Do something with response error
    return Promise.reject(error);
});

export default instance