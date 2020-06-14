import React from 'react';
import { NavLink } from 'react-router-dom'
import s from './Add.module.css'


let AddBtn = (props) => {
    let add = () => props.btn()
    return (
        <button onClick={add} className="btn btn-primary">
            <NavLink className={s.btn} to="/admin">
                Добавить<span className="glyphicon glyphicon-send"></span>
            </NavLink>
        </button>
    )
}

export default AddBtn;