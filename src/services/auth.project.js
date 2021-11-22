import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/projects/";

const getProjects = () => {
    return axios.get(API_URL, {
        headers: authHeader()
    }).then((response) => {
        return response
    })
};

const getProject = (id) => {
    return axios.get(API_URL + '/' + id, {
        headers: authHeader()
    }).then((response) => {
        return response
    })
}

const createProject = (projectName, description, subject) => {
    return axios.post(API_URL, {
        projectName, description, subject
    }, {headers: authHeader()}).then((response) => {
        return response
    })
}

const deleteProject = (id) => {
    return axios.delete(API_URL + id, {headers: authHeader()}).then((response) => {
        return response
    })
}

const editProject = (projectName, description, subject, id) => {
    return axios.patch(API_URL + id, {
        projectName, description, subject
    }, {headers: authHeader()}).then((response) => {
        return response
    })
}


export default {
    getProjects,
    createProject,
    deleteProject,
    getProject,
    editProject
}