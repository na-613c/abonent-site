import React from 'react';
import Table from '../Table/Table';
import Registration from './Registration';


const Admin = (props) => {
    let content;
    if (props.auth.checkAuth()){
        content = <Table data={props.data} type="admin" />
    } else {
        content = <Registration auth={props.auth}/>
    }
    return (
        <div>
            {content}
        </div>
    )
}

export default Admin;