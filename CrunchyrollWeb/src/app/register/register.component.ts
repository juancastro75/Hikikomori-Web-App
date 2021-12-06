import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register!: FormGroup;

  constructor(private authSvc: AuthService) { }

  ngOnInit() {
    this.register = new FormGroup({
      username: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required]
      }),
      email: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required, Validators.email]
      }),
      password: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required]
      }),
      cpassword: new FormControl(null, {
        updateOn: 'blur', validators: [Validators.required]
      })
    });
  }

  Registrar(){
    if (this.register.valid) {
      if(this.validarContraseña(this.register.value.password, this.register.value.cpassword)) {
        const {email, password} = this.register.value;
        this.authSvc.register(email, password).then(res => {
          console.log('Registro con correo existoso: ', res);
        })
        this.register.reset();
      }
      else {
        alert('Confirma tu contraseña');
      }
    }
  }

  validarContraseña(contraseña: string, confirmContraseña: string){
    if (contraseña != confirmContraseña) {
      return false;
    } else {
      return true;
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
