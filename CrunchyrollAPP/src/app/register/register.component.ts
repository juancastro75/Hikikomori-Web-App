import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  register:FormGroup

  constructor(private router: Router) { }

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
        this.register.reset();
        this.router.navigate(['/home']);
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

}
