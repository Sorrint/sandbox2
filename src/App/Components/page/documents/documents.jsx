import React from 'react';
import { useEffect, useState } from 'react';
import { read, utils } from 'xlsx';
import AppRibbon from '../../common/appHeader/appRibbon.jsx';
import Order from '../../ui/order/order.jsx';
import Ordering from '../../ui/ordering/ordering.jsx';
import Distribution from '../../ui/distribution/distribution.jsx';
import { Route, Switch, Redirect } from 'react-router-dom';
import api from '../../../api';
import { getGoodsObject, getHeadersObject } from '../../../utils/modifiedExcelObjects.js';
import * as XLSX from 'xlsx/xlsx.mjs';

const Documents = () => {
    const buttonsObject = {
        order: {
            path: '/documents/order',
            component: () => <Order goods={goods} headers={tableHeaders} />,
            title: 'Заказ'
        },
        ordering: {
            path: '/documents/ordering',
            component: () => <Ordering goods={goods} headers={tableHeaders} />,
            title: 'Порядовка'
        },
        distribution: {
            path: '/documents/distribution',
            component: Distribution,
            title: 'Распаллетовка'
        }
    };

    const [tableHeaders, setTableHeaders] = useState();
    const [ribbonButtons, setRibbonButtons] = useState({ order: { ...buttonsObject.order } });
    const [goods, setGoods] = useState();

    const handleChange = (e) => {
        e.preventDefault();
        api.headers
            .fetchAll()
            .then((data) => {
                return data;
            })
            .then(async (dataBaseHeaders) => {
                const file = e.target.files[0];
                const data = await file.arrayBuffer();
                const wb = XLSX.read(data, { WTF: 1 });
                const order = utils.sheet_to_json(wb.Sheets[wb.SheetNames[0]], { header: 'A' });

                const firstTableRow = order.find((item) => Object.values(item).find((item) => item === '№'));
                const startTableIndex = Object.keys(firstTableRow).find((item) => firstTableRow[item] === '№');

                const goodsArray = [];
                Object.keys(order).filter((key) => {
                    if (typeof order[key][startTableIndex] === 'number') goodsArray.push(order[key]);
                });

                const modifiedHeaders = getHeadersObject(firstTableRow, dataBaseHeaders);
                const modifiedGoods = goodsArray.map((item) => getGoodsObject(item, modifiedHeaders));

                setTableHeaders({ ...modifiedHeaders });
                setGoods({ ...modifiedGoods });
            });
    };

    useEffect(() => {
        setRibbonButtons({ ...buttonsObject });
    }, [goods]);

    return (
        <>
            <div className="app__header">
                <div className="app__container">
                    <div className="app__header_grid">
                        <div className="app__title">Заказ покупателя</div>
                        <div className="app__ribbon">
                            {goods ? <AppRibbon links={ribbonButtons} /> : <div className="app__button">Заказ</div>}
                        </div>
                    </div>
                </div>
            </div>
            <div className="app__body">
                <form>
                    <input type="file" onChange={(e) => handleChange(e)} />
                </form>
                <Switch>
                    {Object.keys(buttonsObject).map((link) => (
                        <Route
                            key={link}
                            path={buttonsObject[link].path}
                            component={
                                typeof buttonsObject[link].component === 'function'
                                    ? () => buttonsObject[link].component()
                                    : buttonsObject[link].component
                            }
                        />
                    ))}
                    <Redirect to="/documents/order" />
                </Switch>
            </div>
        </>
    );
};

export default Documents;
