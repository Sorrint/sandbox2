import React from 'react';
import getDriversCurrent from '../api/drivers';
import { useEffect } from 'react';

export const Drivers = (props) => {
    useEffect(() => {
        getDriversCurrent().then((data) => {
            console.log(data);
        });
    }, []);

    return (
        <>
            <div className="drivers">Пилоты</div>
        </>
    );
};
