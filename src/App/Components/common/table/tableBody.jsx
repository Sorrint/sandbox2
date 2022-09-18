import React from 'react';
const TableBody = ({ goods, headers }) => {
    // Object.keys(goods).map((item) => {
    //     Object.keys(headers).map((headline) => console.log(goods[item][headline]));
    // });
    // console.log(goods);
    const alignColumnName = (text) => {
        return text.length > 8 ? 'table-from-excel__column_left' : 'table-from-excel__column';
    };
    return (
        <>
            <div className="table-from-excel__body">
                {Object.keys(goods).map((item) => (
                    <div key={item} className="table-from-excel__item">
                        {Object.keys(headers).map((headline) => (
                            <div className={alignColumnName(goods[item][headline])} key={headline}>
                                <div>{goods[item][headline]}</div>
                            </div>
                        ))}
                    </div>
                ))}
            </div>
        </>
    );
};

export default TableBody;
