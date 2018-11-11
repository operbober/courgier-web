import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import {from, Observable, Observer} from 'rxjs';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: 'courgier.firebaseapp.com',
    databaseURL: 'https://courgier.firebaseio.com',
    messagingSenderId: '266937184578',
    projectId: 'courgier',
};

const getCurrentUser = (): firebase.User => {
    const {currentUser} = firebase.auth();
    if (currentUser) {
        return currentUser;
    } else {
        throw new Error('current User is null');
    }
};

const firebaseApi = {
    initialize: () => {
        firebase.initializeApp(config);
    },

    getDevices: () => {
        const currentUser = getCurrentUser();
        const uid = currentUser.uid;
        const path = `${uid}/devices`;
        return from(firebase.database().ref(path).once('value'));
    },

    getMetrics: (deviceId: string) => {
        const currentUser = getCurrentUser();
        const uid = currentUser.uid;
        const path = `${uid}/metrics/${deviceId}/`;
        return from(firebase.database().ref(path).orderByChild('timestamp').once('value'));
    },

    getPools: (deviceId: string) => {
        const currentUser = getCurrentUser();
        const uid = currentUser.uid;
        const path = `${uid}/pools/${deviceId}/`;
        return from(firebase.database().ref(path).orderByChild('timestamp').once('value'));
    },

    signUp: (email: string, password: string) => from(firebase.auth().createUserWithEmailAndPassword(email, password)),

    signIn: (email: string, password: string) => from(firebase.auth().signInWithEmailAndPassword(email, password)),

    signOut: () => from(firebase.auth().signOut()),

    subscribeOnAuthStateChanged: (): Observable<any> => {
        return Observable.create((observer: Observer<any>) => {
            firebase.auth().onAuthStateChanged((user) => {
                observer.next(user)
            });
        })
    },
};

export default firebaseApi;
