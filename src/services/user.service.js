import axios from 'axios';
import authHeader from './auth-header';

//this is where all of our auth things happen; we need the api_url to actually interact with the nodejs site.

//that's why we're getting all these no found the api test calls.

//so I'll have to rework this whole thing to be all about:
//Get all Projects
// Endpoint: GET http:.../projects

const API_URL = 'http://localhost:8080/projects'

// const API_URL = 'http://localhost:8080/api/test/'

class userAuth {
    getAuth() {
        return axios.get(API_URL)
    }
}

class UserService {
    getPublicContent() {
        return axios.get(API_URL + 'all');
    }
    //this
    getUserBoard() {
        return axios.get(API_URL + 'user', {headers: authHeader()});
    }
}

export default new UserService();
