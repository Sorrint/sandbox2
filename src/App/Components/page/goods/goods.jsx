import React, { useEffect } from 'react';
import axios from 'axios';

const getGoods = async () => {
    const { data } = await axios.get('http://localhost:3000/dreamkass');
    console.log(data[0]);
    // return data;
};

const Goods = () => {
    useEffect(() => {
        getGoods();
    }, []);

    return <h1>goods</h1>;
};

export default Goods;
