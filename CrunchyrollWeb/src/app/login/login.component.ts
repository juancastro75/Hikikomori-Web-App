import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login!: FormGroup;

  constructor(private authSvc: AuthService) { }

  ngOnInit() {
    this.login = new FormGroup({
      email: new FormControl(null, {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required]
      }),
    });
  }

  onLogin(){
    if(this.login.valid) {
      const {email, password} = this.login.value;
      this.authSvc.login(email, password).then(res => {
        console.log('Login con correo existoso: ', res);
      })
      this.login.reset();
    }
  }

  GoogleLogin(){
    this.authSvc.Googlelogin().then(res => {
      console.log('Login con Google existoso: ', res);
    })
  }

  FacebookLogin(){
    this.authSvc.Facebooklogin().then(res => {
      console.log('Login con Facebook existoso: ', res);
    })
  }
}
