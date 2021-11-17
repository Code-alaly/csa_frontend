import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/projects/";


const getProjects = (id) => {
    return axios.get(API_URL, {
        headers: authHeader(),
        id
    }).then((response) => {
        return response
    })
};

const createProject = (projectCode, projectName) => {
    return axios.post(API_URL, {
        projectName
    }, {headers: authHeader()}).then((response) => {
        return response
    })
}

const deleteProject = (id) => {
    return axios.delete(API_URL + id, {headers: authHeader()}).then((response) => {
        return response
    })
}

const viewProject = (id) => {

}


export default {
    getProjects,
    createProject,
    deleteProject
}