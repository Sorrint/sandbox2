import React from 'react';
import { useEffect, useState } from 'react';
import { read, utils } from 'xlsx';
import TableBody from '../../common/table/tableBody.jsx';
import TableHeader from '../../common/table/tableHeader.jsx';

const Order = ({ goods, headers }) => {
    return (
        <>
            {goods ? (
                <div className="app__body">
                    <div className="app__container">
                        <TableHeader headers={headers} />
                        <TableBody goods={goods} headers={headers} />
                    </div>
                </div>
            ) : (
                'Не выбран заказ'
            )}
        </>
    );
};

export default Order;
