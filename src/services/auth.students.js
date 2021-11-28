import axios from "axios";
import authHeader from "./auth-header";
import {resetFirstInputPolyfill} from "web-vitals/dist/modules/lib/polyfills/firstInputPolyfill";

const API_URL = "http://localhost:8080/students/";

const getEntries = (id) => {
    return axios.get(API_URL + id, {
        headers: authHeader()
    }).then((response) => {
        return response
    })
}

const delEntry = (id, name) => {
    return axios.delete(API_URL + id + '/' + name, {
        headers: authHeader()
    }).then((response) => {
        return response
    })
}

export default {
    getEntries,
    delEntry
}