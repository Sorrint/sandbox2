// import httpService from './http.service'; // const goodsEndPoint = 'products/';
import axios from 'axios';

// const http = axios.create({
//     headers: {
//         'Content-Type': 'application/json',
//         Authorization: 'Bearer 387f24a2-c217-43ea-b8eb-2cf3089ea9ee'
//     }
// });
// axios.defaults.headers.common = {};
// axios.defaults.headers.common['Content-Type'] = 'application/json';
// axios.defaults.headers.common.Authorization = 'Bearer 387f24a2-c217-43ea-b8eb-2cf3089ea9ee';

const goodsService = {
    get: async () => {
        const { data } = await axios.get('https://kabinet.dreamkas.ru/api/products/', {
            headers: {
                Authorization: 'Bearer 387f24a2-c217-43ea-b8eb-2cf3089ea9ee',
                'Access-Control-Allow-Origin': '*'
            },
            data: {}
        });
        return data;
    }
};

export default goodsService;
