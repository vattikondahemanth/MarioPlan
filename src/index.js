import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {  createFirestoreInstance ,getFirestore } from 'redux-firestore';
import { ReactReduxFirebaseProvider ,  getFiresbase } from 'react-redux-firebase';
//import firebase from './config/fbConfig';
import firebase from  'firebase/app';
import createReduxStore from './store/createReduxStrore';
import 'firebase/firestore';
import 'firebase/auth';


// object containing Firebase config
var fbConfig = {
    apiKey: "AIzaSyCu7BJhGzbdlskxLlqWx5zjPS4QwEXKM3w",
    authDomain: "net-ninja-marioplan-8c14c.firebaseapp.com",
    databaseURL: "https://net-ninja-marioplan-8c14c.firebaseio.com",
    projectId: "net-ninja-marioplan-8c14c",
    storageBucket: "net-ninja-marioplan-8c14c.appspot.com",
    messagingSenderId: "882826259561"
  };
const rrfConfig = { userProfile: 'users' } // react-redux-firebase config


firebase.initializeApp(fbConfig)

const store = createReduxStore(rootReducer, 
    compose(
        applyMiddleware(thunk.withExtraArgument({}))
    )
);
console.log(store);
// Initialize firebase instance

//firebase.firestore();

const rrfProps = {
       firebase,
       config: rrfConfig,
       dispatch: store.dispatch,
       createFirestoreInstance 
     }

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
