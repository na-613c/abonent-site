import React from 'react';
import TableElement from './TableElement';

const Table = (props) => {
    let tableElement;
    if (props.data != null) {
        tableElement = props.data.map((d) => <TableElement data={d} type={props.type} btn={props.btn} />)
    } else {
        tableElement = "";
    }

    return (
        <section>
            <h1>Таблица абонентов</h1>
            <br/>
            <div className="tbl-header">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <thead>
                        <tr>
                            <th>Фамилия</th>
                            <th>Имя</th>
                            <th>Отчество</th>
                            <th>Улица</th>
                            <th>Дом</th>
                            <th>Квартира</th>
                            <th>Телефон</th>
                            <th>Тариф</th>
                            <th>Дата</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="tbl-content">
                <table cellPadding="0" cellSpacing="0" border="0">
                    <tbody>
                        {tableElement}
                    </tbody>
                </table>
            </div>
        </section>
    )
}

export default Table;