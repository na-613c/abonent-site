import * as firebase from 'firebase';
import { rerenderEntireTree } from './rerenderEntireTree';

var firebaseConfig = {
    apiKey: "AIzaSyB113E0I4acn3ZALp8H9ggaG61l8hVDPQs",
    authDomain: "database-525b7.firebaseapp.com",
    databaseURL: "https://database-525b7.firebaseio.com",
    projectId: "database-525b7",
    storageBucket: "database-525b7.appspot.com",
    messagingSenderId: "688730230610",
    appId: "1:688730230610:web:ded09e178d97fd3569348b",
    measurementId: "G-MS3JK4911R"
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();


export let myFirebase = {
    readFromFirebase() {
        let arrayData = [];

        firebase.database().ref().orderByValue().on('value', snapshot => {
            const keyArr = Object.keys(snapshot.val());
            let obj = snapshot.val()
            let strJSON = JSON.stringify(obj)
            for (let i = 0; i < keyArr.length; i++) {
                let keyData = "" + keyArr[i];

                let oneAbonentInfo;

                JSON.parse(strJSON, (key, value) => {

                    if (key === keyData) {
                        value.id = key
                        return oneAbonentInfo = value;
                    }
                    return value;
                });
                arrayData.unshift(oneAbonentInfo);
            }
            debugger
            rerenderEntireTree(arrayData, myFirebase, null);
            arrayData = [];
            return null;

        });
    },

    addInFirebase(data) {

        let info = {
            lastname: data.lastname,
            firstname: data.firstname,
            middlename: data.middlename,
            street: data.street,
            building: data.building,
            flat: data.flat,
            phone: data.phone,
            tarif: data.tarif,
            date: this.addDate()
        }

        firebase.database().ref().push().set(info);
    },

    updInFirebase(data) {
        let myKey = data.key;
        let info = {
            lastname: data.lastname,
            firstname: data.firstname,
            middlename: data.middlename,
            street: data.street,
            building: data.building,
            flat: data.flat,
            phone: data.phone,
            tarif: data.tarif,
            date: this.addDate()
        }

        firebase.database().ref().child(myKey).set(info);
    },

    delInFirebase(key) {
        firebase.database().ref().child(key).remove();
    },

    addDate() {
        let monthNames = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь"];

        const date = new Date();
        const year = date.getFullYear()
        const month = date.getMonth()
        const day = date.getDate()

        const dateRegistration = `${day} ${monthNames[month]} ${year}`;
        return dateRegistration
    }
}