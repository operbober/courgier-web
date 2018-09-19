import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { from } from 'rxjs';

// apiKey: "AIzaSyBba6qtWtSzNGGzRiAtbsxJ7VGGNOryLGI"

const config = {
  apiKey: 'AIzaSyBba6qtWtSzNGGzRiAtbsxJ7VGGNOryLGI',
  authDomain: 'courgier-web.firebaseapp.com',
  databaseURL: 'https://courgier-web.firebaseio.com',
  messagingSenderId: '21989264259',
  projectId: 'courgier-web',
  storageBucket: 'courgier-web.appspot.com',
};

const firebaseApi = {
  initialize: () => firebase.initializeApp(config),

  signUp: (email: string, password: string) => from(firebase.auth().createUserWithEmailAndPassword(email, password)),

  signIn: (email: string, password: string) => from(firebase.auth().signInWithEmailAndPassword(email, password)),

  signOut: () => from(firebase.auth().signOut()),
};

export default firebaseApi;