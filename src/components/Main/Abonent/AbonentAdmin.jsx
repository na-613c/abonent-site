import React from 'react';
import './Bootstrap.css'
import AddBtn from './Buttons/Add';
import UpdBtn from './Buttons/Upd';
import DelBtn from './Buttons/Del';


const AbonentAdmin = (props) => {
    let abonentInfo = props.data;

    let lastname = React.createRef();
    let firstname = React.createRef();
    let middlename = React.createRef();
    let street = React.createRef();
    let building = React.createRef();
    let flat = React.createRef();
    let phone = React.createRef();
    let tarif = React.createRef();

    let add = () => {
        let newData = {
            lastname: lastname.current.value,
            firstname: firstname.current.value,
            middlename: middlename.current.value,
            street: street.current.value,
            building: building.current.value,
            flat: flat.current.value,
            phone: phone.current.value,
            tarif: tarif.current.value
        };
        props.btn.addInFirebase(newData);
    }


    let upd = () => {
        let newData = {
            key: abonentInfo.id,
            lastname: lastname.current.value,
            firstname: firstname.current.value,
            middlename: middlename.current.value,
            street: street.current.value,
            building: building.current.value,
            flat: flat.current.value,
            phone: phone.current.value,
            tarif: tarif.current.value
        };
        props.btn.updInFirebase(newData);
    }
    let del = () => {
        let key = abonentInfo.id
        props.btn.delInFirebase(key);
    }


    let addBtn = <AddBtn btn={add} />
    let updBtn = <UpdBtn btn={upd} />
    let delBtn = <DelBtn btn={del} />


    return (
        <div>
            <div className="container py-3 my-5 backgroung-opacity ">
                <div className="row justify-content-md-center">
                    <div className="secret-id">
                        <input type="text" className="col-10 offset-1 form-control" aria-describedby="emailHelp"
                            placeholder="ID - Обязательно заполнять при редактировании"
                            required pattern="^[0-9]+$" />
                    </div>
                    <div className="col-5">
                        <div className="form-group">
                            <label className="col-md-10 control-label">Фамилия</label>
                            <div className="col-md-10 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon">
                                        <i className="glyphicon glyphicon-user">
                                            <svg className="bi bi-person-fill" width="1em" height="1em" viewBox="0 0 16 16"
                                                fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd"
                                                    d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z"
                                                    clip-rule="evenodd" />
                                            </svg>
                                        </i>
                                    </span>
                                    <input ref={lastname} name="lastname" placeholder="Фамилия" className="form-control" type="text"
                                        required pattern="^[А-Яа-яЁё\s]+$" defaultValue={abonentInfo.lastname} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="form-group">
                            <label className="col-md-10 control-label">Имя</label>
                            <div className="col-md-10 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"><svg
                                        className="bi bi-person-fill" width="1em" height="1em" viewBox="0 0 16 16"
                                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z"
                                            clip-rule="evenodd" />
                                    </svg></i></span>
                                    <input name="firstname" ref={firstname} placeholder="Имя" className="form-control" type="text"
                                        required pattern="^[А-Яа-яЁё\s]+$" defaultValue={abonentInfo.firstname} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center  ">
                    <div className="col-5">
                        <div className="form-group">
                            <label className="col-md-10 control-label">Отчество</label>
                            <div className="col-md-10 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"><svg
                                        className="bi bi-person-fill" width="1em" height="1em" viewBox="0 0 16 16"
                                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 100-6 3 3 0 000 6z"
                                            clip-rule="evenodd" />
                                    </svg></i></span>
                                    <input ref={middlename} name="middlename" placeholder="Отчество" className="form-control"
                                        type="text" required pattern="^[А-Яа-яЁё\s]+$" defaultValue={abonentInfo.middlename}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="form-group">
                            <label className="col-md-10 control-label">Улица</label>
                            <div className="col-md-10 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"><svg
                                        className="bi bi-house-door-fill" width="1em" height="1em" viewBox="0 0 16 16"
                                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.5 10.995V14.5a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5v-7a.5.5 0 01.146-.354l6-6a.5.5 0 01.708 0l6 6a.5.5 0 01.146.354v7a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z" />
                                        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z"
                                            clip-rule="evenodd" />
                                    </svg></i></span>
                                    <input ref={street} name="street" placeholder="Улица" className="form-control" type="text" defaultValue={abonentInfo.street}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center  ">
                    <div className="col-5">
                        <div className="form-group">
                            <label className="col-md-10 control-label">Дом</label>
                            <div className="col-md-10 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"><svg
                                        className="bi bi-house-door-fill" width="1em" height="1em" viewBox="0 0 16 16"
                                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.5 10.995V14.5a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5v-7a.5.5 0 01.146-.354l6-6a.5.5 0 01.708 0l6 6a.5.5 0 01.146.354v7a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z" />
                                        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z"
                                            clip-rule="evenodd" />
                                    </svg></i></span>
                                    <input ref={building} name="building" placeholder="Дом" className="form-control" type="number"
                                        required pattern="^[0-9]+$" defaultValue={abonentInfo.building}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="form-group">
                            <label className="col-md-10 control-label">Квартира</label>
                            <div className="col-md-10 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"><svg
                                        className="bi bi-house-door-fill" width="1em" height="1em" viewBox="0 0 16 16"
                                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6.5 10.995V14.5a.5.5 0 01-.5.5H2a.5.5 0 01-.5-.5v-7a.5.5 0 01.146-.354l6-6a.5.5 0 01.708 0l6 6a.5.5 0 01.146.354v7a.5.5 0 01-.5.5h-4a.5.5 0 01-.5-.5V11c0-.25-.25-.5-.5-.5H7c-.25 0-.5.25-.5.495z" />
                                        <path fill-rule="evenodd" d="M13 2.5V6l-2-2V2.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5z"
                                            clip-rule="evenodd" />
                                    </svg></i></span>
                                    <input ref={flat} name="flat" placeholder="Квартира" className="form-control" type="number"
                                        required pattern="^[0-9]+$" defaultValue={abonentInfo.flat}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-md-center  ">
                    <div className="col-5">
                        <div className="form-group">
                            <label className="col-md-10 control-label">Телефон</label>
                            <div className="col-md-10 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"><svg
                                        className="bi bi-phone" width="1em" height="1em" viewBox="0 0 16 16"
                                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd"
                                            d="M11 1H5a1 1 0 00-1 1v12a1 1 0 001 1h6a1 1 0 001-1V2a1 1 0 00-1-1zM5 0a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V2a2 2 0 00-2-2H5z"
                                            clip-rule="evenodd" />
                                        <path fill-rule="evenodd" d="M8 14a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                                    </svg></i></span>
                                    <input ref={phone} name="phone" placeholder="Телефон" className="form-control" type="number"
                                        required pattern="([0-9]{11})$" defaultValue={abonentInfo.phone}></input>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="form-group">
                            <label className="col-md-10 control-label">Тариф</label>
                            <div className="col-md-10 inputGroupContainer">
                                <div className="input-group">
                                    <span className="input-group-addon"><i className="glyphicon glyphicon-user"><svg
                                        className="bi bi-pencil-square" width="1em" height="1em" viewBox="0 0 16 16"
                                        fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M15.502 1.94a.5.5 0 010 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 01.707 0l1.293 1.293zm-1.75 2.456l-2-2L4.939 9.21a.5.5 0 00-.121.196l-.805 2.414a.25.25 0 00.316.316l2.414-.805a.5.5 0 00.196-.12l6.813-6.814z" />
                                        <path fill-rule="evenodd"
                                            d="M1 13.5A1.5 1.5 0 002.5 15h11a1.5 1.5 0 001.5-1.5v-6a.5.5 0 00-1 0v6a.5.5 0 01-.5.5h-11a.5.5 0 01-.5-.5v-11a.5.5 0 01.5-.5H9a.5.5 0 000-1H2.5A1.5 1.5 0 001 2.5v11z"
                                            clip-rule="evenodd" />
                                    </svg></i></span>
                                    <input ref={tarif} list="cocktail" name="tarif" placeholder="Тариф" className="form-control"
                                        type="text" defaultValue={abonentInfo.tarif}></input>
                                    <datalist id="cocktail">
                                        <option>Безлимитище</option>
                                        <option>Отличный</option>
                                        <option>Maxi</option>
                                        <option>Безлимитище 2.0</option>
                                    </datalist>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                <div className="row justify-content-md-center  ">
                    <div className="col-5">
                        <div className="form-group">
                            <div className="col-md-10 inputGroupContainer">
                                <div className="input-group">
                                    <div className="btn-group" role="group" aria-label="Basic example">
                                        {addBtn}
                                        {updBtn}
                                        {delBtn}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="form-group">
                            <div className="col-md-10 inputGroupContainer">
                                <div className="input-group">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AbonentAdmin;