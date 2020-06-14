import React from 'react';
import { Route } from "react-router-dom"
import Admin from './Admin/Admin';
import User from './User/User';
import AbonentAdmin from './Abonent/AbonentAdmin';
import AbonentUser from './Abonent/AbonentUser';
import Registration from './Admin/Registration';

const Main = (props) => {
    let abonentElementAdmin, abonentElementUser;

    let checkAdmin = () => {
        if (props.auth.checkAuth()) {
            abonentElementAdmin = props.data.map((d) => <Route path={"/admin/" + d.id} render={() => <AbonentAdmin data={d} btn={props.btn} type="admin" auth={props.auth} />} />)
        } else {
            abonentElementAdmin = props.data.map((d) => <Route path={"/admin/" + d.id} render={() => <Registration auth={props.auth} />} />)
        }
    }

    if (props.data != null) {
        checkAdmin();
        abonentElementUser = props.data.map((d) => <Route path={"/user/" + d.id} render={() => <AbonentUser data={d} type="user" />} />)
    } else {
        abonentElementAdmin = abonentElementUser = "";
    }




    return (
        <div>
            {abonentElementAdmin}
            {abonentElementUser}
            <Route exact path="/admin"
                render={() => <Admin data={props.data} auth={props.auth} />} />
            <Route path="/main"
                render={() => <User data={props.data} />} />

        </div>)
}

export default Main;