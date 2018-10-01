import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { from, throwError } from 'rxjs';

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: 'courgier.firebaseapp.com',
  databaseURL: 'https://courgier.firebaseio.com',
  messagingSenderId: '266937184578',
  projectId: 'courgier',
};

const firebaseApi = {
  initialize: () => {
    const app = firebase.initializeApp(config);

    app.auth().onAuthStateChanged((user) => {
      console.log(user);
    });
  },

  getItems: () => {
    const {currentUser} = firebase.auth();
    if (currentUser) {
      const uid = currentUser.uid;
      const path = '/' + uid;
      return from(firebase.database().ref(path).once('value'));
    } else {
      return throwError('current User is null');
    }
  },

  signUp: (email: string, password: string) => from(firebase.auth().createUserWithEmailAndPassword(email, password)),

  signIn: (email: string, password: string) => from(firebase.auth().signInWithEmailAndPassword(email, password)),

  signOut: () => from(firebase.auth().signOut()),
};

export default firebaseApi;