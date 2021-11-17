import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/students/";

const getEntries = (id) => {
    return axios.get(API_URL + id, {
        headers: authHeader()
    }).then((response) => {
        return response
    })
}

export default {
    getEntries
}