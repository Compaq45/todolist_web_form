import React from "react";
import {NavLink} from "react-router-dom";

export const NavBar = () => (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
        <div className="navbar-brand">
            ToDoList
        </div>
        <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" to="/">Задачи</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/About">Запаска</NavLink>
            </li>
        </ul>
    </nav>
)