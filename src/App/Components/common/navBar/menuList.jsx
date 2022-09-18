import React from 'react';
import MenuItem from './menuItem.jsx';

const MenuList = ({ menuItems, ...rest }) => {
    const renderMenuItem = (menuItems) => {
        const menuItemsKeys = Object.keys(menuItems);
        return menuItemsKeys.map(
            (item) =>
                item !== 'wrapperClassName' && <MenuItem key={menuItems[item].id} item={menuItems[item]} {...rest} />
        );
    };
    return menuItems.wrapperClassName ? (
        <div className={menuItems.wrapperClassName}>{renderMenuItem(menuItems)}</div>
    ) : (
        <>{renderMenuItem(menuItems)}</>
    );
};

export default MenuList;
