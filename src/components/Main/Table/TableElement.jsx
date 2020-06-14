import React from 'react';
import { NavLink } from 'react-router-dom'
import s from './Table.module.css';


const TableElement = (props) => {

    let obj = props.data;
    let type = props.type;

    return (
        <tr className={s.tr}>
            <td><NavLink className={s.item} to={`/${type}/${obj.id}`}>{obj.lastname}</NavLink></td>
            <td><NavLink className={s.item} to={`/${type}/${obj.id}`}>{obj.firstname}</NavLink></td>
            <td><NavLink className={s.item} to={`/${type}/${obj.id}`}>{obj.middlename}</NavLink></td>
            <td><NavLink className={s.item} to={`/${type}/${obj.id}`}>{obj.street}</NavLink></td>
            <td><NavLink className={s.item} to={`/${type}/${obj.id}`}>{obj.building}</NavLink></td>
            <td><NavLink className={s.item} to={`/${type}/${obj.id}`}>{obj.flat}</NavLink></td>
            <td><NavLink className={s.item} to={`/${type}/${obj.id}`}>{obj.phone}</NavLink></td>
            <td><NavLink className={s.item} to={`/${type}/${obj.id}`}>{obj.tarif}</NavLink></td>
            <td><NavLink className={s.item} to={`/${type}/${obj.id}`}>{obj.date}</NavLink></td>
        </tr>
    )
}

export default TableElement;