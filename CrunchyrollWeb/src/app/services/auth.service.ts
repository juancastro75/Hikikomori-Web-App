import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from "firebase/compat/app";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public isLogged = false;

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

   async login(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.isLogged = true;
      this.router.navigate(['/home']);
    }
    catch (error) {
      console.log('Eror en Login: '+ error);
    }
  }

  async Googlelogin() {
    try {
      await this.afAuth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
      this.isLogged = true;
      this.router.navigate(['/home']);
    }
    catch (error) {
      console.log('Eror en Login con Google: '+ error);
    }
  }

  async Facebooklogin() {
    try {
      await this.afAuth.signInWithPopup( new firebase.auth.FacebookAuthProvider());
      this.isLogged = true;
      this.router.navigate(['/home']);
    }
    catch (error) {
      console.log('Eror en Login con Facebook: '+ error);
    }
  }

  getUserLogeed() {
    return this.afAuth.authState;
  }

  async register(email: string, password: string) {
    try {
      await this.afAuth.createUserWithEmailAndPassword(email, password);
      this.isLogged = true;
      this.router.navigate(['/home']);
    }
    catch (error) {
      console.log('Error en Register: ' + error);
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      this.isLogged = false;
      this.router.navigate(['/login']);
    }
    catch (error) {
      console.log('Error en Logout: ' + error);
    }
  }

}
