import axios from 'axios';

const api = axios.create({
    baseURL: "https://api.tvmaze.com/search/shows?q=",
});

// api.interceptors.request.use(async config => {
//     const token = " ";
//     if (token) {
//         config.headers.Authorization = "Bearer"+{token};
//     }
//     return config;
// });

export default api;