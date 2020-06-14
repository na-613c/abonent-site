import React from 'react';
import './Bootstrap.css'

const AbonentUser = (props) => {
    let abonentInfo = props.data;
    return (
        <div>
            <div className="container py-3 my-5 backgroung-opacity ">
                <div className="row justify-content-md-center">
                    <div className="secret-id">
                        <input type="text" className="col-10 offset-1 form-control" aria-describedby="emailHelp"
                            placeholder="ID - Обязательно заполнять при редактировании"
                            required pattern="^[0-9]+$" readonly />
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
                                    <div className="form-control">{abonentInfo.lastname}</div>
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
                                    <div className="form-control">{abonentInfo.firstname}</div>
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
                                    <div className="form-control">{abonentInfo.middlename}</div>
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
                                    <div className="form-control">{abonentInfo.street}</div>
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
                                    <div className="form-control">{abonentInfo.building}</div>
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
                                    <div className="form-control">{abonentInfo.flat}</div>
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
                                    <div className="form-control">{abonentInfo.phone} </div>
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
                                    <div className="form-control">{abonentInfo.tarif}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AbonentUser;