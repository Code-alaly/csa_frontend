import axios from "axios";

//this one is for the version that bianca done made.
const API_URL = "http://localhost:8080/user/";

const register = (fname, lname, email, password) => {
    // return axios.post(API_URL + 'register', {
    //     fname,
    //     lname,
    //     email,
    //     password,
    // });
};

const login = (email, password) => {
    return axios
        .post(API_URL + "login", {
            email,
            password,
        })
        .then((response) => {
            //need something called access token here.
            if (response.headers['auth-token']) {
                //going ot add the access token to the data object that gets set to local storage.
                response.data['accessToken'] = response.headers['auth-token']
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

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    register,
    login,
    logout,
    getCurrentUser,
};
