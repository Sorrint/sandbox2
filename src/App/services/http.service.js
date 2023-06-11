// import axios from 'axios';
// import configFile from '../../config.json';
// axios.defaults.headers.get['Content-Type'] = 'application/json';
// const http = axios.create({
//     baseURL: configFile.apiEndPoint
//     // headers: { 'Content-Type': 'application/json' }
// });

// http.interceptors.request.use(
//     async function (config) {
//         config.headers = {
//             ...config.headers,
//             Authorization: `Bearer 387f24a2-c217-43ea-b8eb-2cf3089ea9ee`,
//             'Content-Type': 'application/json'
//         };
//         console.log(config);
//         return config;
//     },
//     function (error) {
//         console.log(error);
//         return Promise.reject(error);
//     }
// );

// http.interceptors.response.use(
//     (res) => {
//         return res;
//     },
//     function (error) {
//         const expectedErrors = error.response && error.response.status >= 400 && error.response.status < 500;
//         if (!expectedErrors) {
//             console.log(error);
//         }
//         return Promise.reject(error);
//     }
// );

// const httpService = {
//     get: http.get,
//     post: http.post,
//     put: http.put,
//     delete: http.delete,
//     patch: http.patch
// };

// export default httpService;
