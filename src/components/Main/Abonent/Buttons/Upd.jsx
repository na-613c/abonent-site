import React from 'react';
import { NavLink } from 'react-router-dom'
import s from './Add.module.css'


let UpdBtn = (props) => {
    let upd = () => props.btn()
    return (
        <button onClick={upd} className="btn btn-success">
            <NavLink className={s.btn} to="/admin">
                Обновить<span className="glyphicon glyphicon-send"></span>
            </NavLink>
        </button>
    )
}

export default UpdBtn;