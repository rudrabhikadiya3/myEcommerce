import React from 'react';
import { NavLink} from 'react-router-dom';

function DashMenu(props) {
    return (
        <ul className="list-inline dashboard-menu text-center">
            <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            <li><NavLink to="/order" classname="active">Orders</NavLink></li>
            <li><NavLink to="/address">Address</NavLink></li>
            <li><NavLink to="/profile">Profile</NavLink></li>
        </ul>
    );
}
export default DashMenu;