import React from 'react';
import MenuLink from './menuLink.jsx';

const MenuItem = ({ item, ...rest }) => {
    return item.wrapperClassName ? (
        <div className={item.wrapperClassName}>
            <MenuLink item={item} {...rest} />
        </div>
    ) : (
        <MenuLink item={item} {...rest} />
    );
};

export default MenuItem;
