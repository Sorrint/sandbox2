import React from 'react';

const TableHeader = ({ headers }) => {
    return (
        <>
            <div className="table-from-excel__headers">
                {Object.values(headers).map((item) => (
                    <div className="table-from-excel__header" key={item.id}>
                        <span>{item.text}</span>
                    </div>
                ))}
            </div>
        </>
    );
};

export default TableHeader;
