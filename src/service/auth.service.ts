import * as firebase from 'firebase';

export class AuthService {

    signUpUser(email : string, password: string){
        return new Promise((res, rejec) => {
            firebase.auth().createUserWithEmailAndPassword(email,password).then( (user ) => {
                res(user);
            }).catch(error=> {
                rejec(error)
            })
        })
    }

    signInUser(email : string, password: string){
        return new Promise((res, rejec) => {
            firebase.auth().signInWithEmailAndPassword(email,password).then( (user ) => {
                res(user);
            }).catch(error=> {
                rejec(error)
            })
        })
    }

    signOut() {
        firebase.auth().signOut();
    }
}