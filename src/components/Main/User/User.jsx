import React from 'react';
import Table from '../Table/Table';

const User = (props) => {
    return (
        <div>
            <Table data={props.data} type="user"/>
        </div>)
}

export default User;