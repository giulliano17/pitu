import axios from 'axios'; 

const baseApi = (baseUrl) => {
    const api = axios.create({
        baseUrl, 
    })
    return api;
}

export default baseApi; 
