import axios from 'axios';

const token = ' '
const api = axios.create({
    baseURL: 'http://10.0.2.2:8080/api',
    headers: {
        'Authorization': `Bearer ${token}`
    }
});

// api.interceptors.request.use(async config => {
//     const token = " ";
//     if (token) {
//         config.headers.Authorization = "Bearer"+{token};
//     }
//     return config;
// });

export default api;