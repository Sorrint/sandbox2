import React from 'react';
const FilterForm = ({ data, onFilter }) => {
    return (
        <>
            {data && (
                <ul className="filter__list">
                    {data.map((item) => (
                        <li className="filter__element" key={item} role="button" onClick={() => onFilter(item)}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </>
    );
};

export default FilterForm;
