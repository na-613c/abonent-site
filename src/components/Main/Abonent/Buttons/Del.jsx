import React from 'react';
import { NavLink } from 'react-router-dom'
import s from './Add.module.css'


let DelBtn = (props) => {
    debugger
    let del = () => props.btn()
    return (
        <button onClick={del} className="btn btn-danger">
            <NavLink className={s.btn} to="/admin">
                Удалить<span className="glyphicon glyphicon-send"></span>
            </NavLink>
        </button>
    )
}

export default DelBtn;