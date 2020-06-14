import { rerenderEntireTree } from './rerenderEntireTree';

let myAuthentication = {
    checkAuth(){
                let realData = this.data;
        if (realData.login === "admin" & realData.password === "admin") {
            
            return true
        } else return false
        
    },
    authentication(newData) {
        debugger
        this.writeData(newData);
        this.checkAuth()
        rerenderEntireTree(null, null, null)
    },
    writeData(newData) {
        try {
            this.data = {
                login: newData.login,
                password: newData.password
            }
        } catch (e) { }
    },
    data: {
        login: "admin1",
        password: "admin"
    }
} 

export default myAuthentication;

window.myAuthentication = myAuthentication;