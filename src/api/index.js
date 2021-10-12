import axios from "../utils/request";
export function getLogin(val) {
    return axios({
        url: '/adminapi/login',
        method: 'post',
        data: val
    })
}