import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
let auth;
let arrayData;
let myFirebase;

export let rerenderEntireTree = (arrayDataT, myFirebaseT, myAuthentication) => {
    if (myAuthentication != null) auth = myAuthentication;
    if (myFirebaseT != null) myFirebase = myFirebaseT;
    if (arrayDataT != null) arrayData = arrayDataT;
    debugger
    ReactDOM.render(
        <BrowserRouter>
            <React.StrictMode>
                <App data={arrayData} btn={myFirebase} auth={auth}/>
            </React.StrictMode>
        </BrowserRouter>,
        document.getElementById('root')
    );
}