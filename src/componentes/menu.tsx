import React from "react";
import {NavLink} from "react-router-dom";

const Menu = () => {
    return (
        <nav className="menu">
            <ul>
                <li><NavLink to={"/"} className={(navData) => (navData.isActive ? 'activo' : '')}>diario</NavLink></li>
                <li><NavLink to={"/especial"}
                             className={(navData) => (navData.isActive ? 'activo' : '')}>especial</NavLink></li>
                <li><NavLink to={"/conozcame"}
                             className={(navData) => (navData.isActive ? 'activo' : '')}>conózcame</NavLink></li>
                <li><NavLink to={"/archivo"}
                             className={(navData) => (navData.isActive ? 'activo' : '')}>archivo</NavLink></li>
            </ul>
        </nav>
    )
}

export default Menu;