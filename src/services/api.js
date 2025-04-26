import axios from 'axios';

const api = axios.create({
    baseURL: "https://gatnr5qfub.us-east-1.awsapprunner.com/api/v1/",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    },
});
  
export default api;