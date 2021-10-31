import axios from "axios";

const API_URL = "http://localhost:8080/projects/";


const getProjects = (id, auth) => {
    return axios.get(API_URL, {
        id
    }).then((response) => {
        return response
    })
};


export default {
    getProjects
}