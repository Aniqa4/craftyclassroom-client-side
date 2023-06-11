import React from 'react'
import { NavLink } from 'react-router-dom';

function ActiveRoute({ to, children }) {
    return (
        <NavLink to={to}
            className={({ isActive }) => isActive ? "underline bg-gray-200 px-2 rounded" : ""}
        >
            {children}
        </NavLink>
    )
}

export default ActiveRoute;