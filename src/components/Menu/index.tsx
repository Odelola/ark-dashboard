import React, { FC } from 'react';
import MenuItem from '../MenuItem';
import "./Menu.css"

interface MenuProps {

}

const Menu: FC<MenuProps> = ({ }) => {
    return(
        <div id="menu">
            <MenuItem />
        </div>   
    )
};

export default Menu;