import React, {FC, useEffect} from 'react';
import firebase from "firebase/app";
import 'firebase/auth';
import 'firebase/firestore';
import {createContext} from "react";

const firebaseConfig = {
    apiKey: "AIzaSyBlcGCniD2VBfiefqBx1-0dtCFwcufF12U",
    authDomain: "reacttest-90172.firebaseapp.com",
    projectId: "reacttest-90172",
    storageBucket: "reacttest-90172.appspot.com",
    messagingSenderId: "495147475288",
    appId: "1:495147475288:web:710cc519df864a86ad852d"
};

interface IFirebaseContext{
    firebase: any,
    auth: any,
    firestore: any
}

export const FireContext = createContext<IFirebaseContext | null>(null)

firebase.initializeApp(firebaseConfig);

const FirebaseContext:FC = ({children}) => {

    useEffect(()=>{
        if(firebase.app.length === 0){
            firebase.initializeApp(firebaseConfig);
        }
    }, [])

    const auth = firebase.auth()
    const firestore = firebase.firestore()
    return (
        <FireContext.Provider value={{firebase, auth, firestore}}>
            {children}
        </FireContext.Provider>
    );
};

export default FirebaseContext;