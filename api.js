import axios from 'axios';
import { getToken } from './service/auth';

const token = ' '
const api = axios.create({
    baseURL: 'http://10.0.2.2:8080/api',
    headers: {
        'Authorization': `Bearer ${token}`
    }
});

// api.interceptors.request.use(async config => {
//     const token = await getToken();
//     if (token) {
//         config.headers.Authorization = `Bearer ${token}`;
//         console.log("Api: "+token)
//     }
//     return config;
// });

api.interceptors.request.use(
    config => {
      return getToken()
        .then(token => {
          token = JSON.parse(token)
          if (token)
            config.headers.Authorization = `Bearer ${token}`
          return Promise.resolve(config)
        })
        .catch(error => {
          console.log(error)
          return Promise.resolve(config)
        })
    },
    error => {
      return Promise.reject(error)
    },
  )

export default api;


// import axios from 'axios'
// import { Alert } from 'react-native'
// import { getUser, navigate, deleteUser } from './service/auth'

// const api = axios.create({
//   baseURL: 'http://10.0.3.2:3000',
//   headers: {
//     'Content-Type': 'application/json',
//     Accept: 'application/json',
//   },
// })

// api.interceptors.response.use(
//   response => {

//     // Do something with response data

//     return response
//   },
//   error => {

//     // Do something with response error

//     // You can even test for a response code
//     // and try a new request before rejecting the promise

//     if (
//       error.request._hasError === true &&
//       error.request._response.includes('connect')
//     ) {
//       Alert.alert(
//         'Aviso',
//         'Não foi possível conectar aos nossos servidores, sem conexão a internet',
//         [ { text: 'OK' } ],
//         { cancelable: false },
//       )
//     }

//     if (error.response.status === 401) {
//       const requestConfig = error.config

//       // O token JWT expirou

//       deleteUser().then(() => {
//         navigate('AuthLoading', {})
//       })

//       return axios(requestConfig)
//     }

//     return Promise.reject(error)
//   },
// )

// api.interceptors.request.use(
//   config => {
//     return getUser()
//       .then(user => {
//         user = JSON.parse(user)
//         if (user && user.token)
//           config.headers.Authorization = `Bearer ${user.token}`
//         return Promise.resolve(config)
//       })
//       .catch(error => {
//         console.log(error)
//         return Promise.resolve(config)
//       })
//   },
//   error => {
//     return Promise.reject(error)
//   },
// )

// export default api