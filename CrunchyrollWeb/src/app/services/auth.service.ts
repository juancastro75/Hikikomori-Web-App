import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from "firebase/compat/app";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router, private afAuth: AngularFireAuth) { }

   async login(email: string, password: string) {
    try {
      await this.afAuth.signInWithEmailAndPassword(email, password);
      this.router.navigate(['/home']);
    }
    catch (error) {
      console.log('Eror en Login: '+ error);
    }
  }

  async Googlelogin() {
    try {
      await this.afAuth.signInWithPopup( new firebase.auth.GoogleAuthProvider());
      this.router.navigate(['/home']);
    }
    catch (error) {
      console.log('Eror en Login con Google: '+ error);
    }
  }

  async Facebooklogin() {
    try {
      await this.afAuth.signInWithPopup( new firebase.auth.FacebookAuthProvider());
      this.router.navigate(['/home']);
    }
    catch (error) {
      console.log('Eror en Login con Facebook: '+ error);
    }
  }

  async register(email: string, password: string) {
    try {
      await this.afAuth.createUserWithEmailAndPassword(email, password);
      this.router.navigate(['/home']);
    }
    catch (error) {
      console.log('Error en Register: ' + error);
    }
  }

  async logout() {
    try {
      await this.afAuth.signOut();
      this.router.navigate(['/login']);
    }
    catch (error) {
      console.log('Error en Logout: ' + error);
    }
  }

}
