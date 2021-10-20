import axios from "axios";

// const API_URL = "http://localhost:8080/api/auth/";
//this one is for the version that bianca done made.
const API_URL = "http://localhost:8080/user/";

const register = (fname, lname, email, password) => {
    return axios.post(API_URL + 'register', {
        fname,
        lname,
        email,
        password,
    });
};

const login = (username, password) => {
    return axios
        .post(API_URL + "signin", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.accessToken) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};

export default {
    register,
    login,
    logout,
    getCurrentUser,
};
