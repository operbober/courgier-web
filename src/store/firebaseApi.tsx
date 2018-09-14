import {User} from 'firebase';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { from, Observable, Observer } from 'rxjs';

// apiKey: "AIzaSyBba6qtWtSzNGGzRiAtbsxJ7VGGNOryLGI"

export default class FirebaseApi {

  private readonly options = {
    apiKey: 'AIzaSyBba6qtWtSzNGGzRiAtbsxJ7VGGNOryLGI',
    authDomain: 'courgier-web.firebaseapp.com',
    databaseURL: 'https://courgier-web.firebaseio.com',
    messagingSenderId: '21989264259',
    projectId: 'courgier-web',
    storageBucket: 'courgier-web.appspot.com',
  };

  private firebaseApp: firebase.app.App;

  constructor() {
    this.firebaseApp = firebase.initializeApp(this.options);
  }

  public signIn(): Observable<void> {
    return from(this.firebaseApp.auth().signOut());
  }

  public signOut(): Observable<void> {
    return from(this.firebaseApp.auth().signOut());
  }

  public subscribeOnAuthStateChanged(): Observable<User | null> {
    return Observable.create( (observer: Observer<User | any>) => {
      this.firebaseApp.auth().onAuthStateChanged((user) => {
        observer.next(user)
      });
    })
  }
}

//
// const firebaseApi = {
//   initialize: () => firebase.initializeApp(config),
//
//   signUp: (email: string, password: string) => from(firebase.auth().createUserWithEmailAndPassword(email, password)),
//
//   signIn: (email: string, password: string) => from(firebase.auth().signInWithEmailAndPassword(email, password)),
//
//   signOut: () => from(firebase.auth().signOut())
// };