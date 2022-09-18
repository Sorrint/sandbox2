import React from 'react';
import getDriversCurrent from '../../../api/drivers';
import { useEffect } from 'react';

export const Drivers = (props) => {
    useEffect(() => {
        getDriversCurrent().then((data) => {});
    }, []);

    return (
        <>
            <div className="drivers">Турнирная таблица</div>
        </>
    );
};
