import axios from 'axios';

// Return an instance of axios which is configurable by passing base url and request timeout 
const request = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: process.env.REACT_APP_API_TIMEOUT,
});

export default request;
