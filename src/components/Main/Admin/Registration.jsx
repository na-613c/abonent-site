import React from 'react';
import './Reg.css';

const Registration = (props) => {

    let login = React.createRef();
    let password = React.createRef();
    
    let auth = () => {

        let data = {
            login: login.current.value,
            password: password.current.value
        }
        
        props.auth.authentication(data)
    }
    
    return (
        <form className="form-signin backgroung-opacity py-3 my-5">
            <h1 className="h3 mb-3 font-weight-normal">Аутентификация</h1>
            <label for="inputEmail" className="sr-only">Логин</label>
            <input ref={login} type="text" id="inputEmail" className="form-control" placeholder="Логин" required="" autofocus="" />
            <label for="inputPassword" className="sr-only">Пароль</label>
            <input ref={password} type="password" id="inputPassword" className="form-control" placeholder="Пароль" required="" />
            <div className="checkbox mb-3">
                <label className="pt-2">Нажмите кнопку чтобы войти</label>
            </div>
            <div onClick={auth} className="btn btn-lg btn-primary btn-block" >Sign in</div>
            <label className="pt-2"> После входа Вы получите права администратора </label>
        </form>
    )
}

export default Registration;