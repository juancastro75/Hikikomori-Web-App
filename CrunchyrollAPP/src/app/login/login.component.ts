import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
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
  login: FormGroup

  constructor(private router: Router) { }

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

  Ingresar(){
    if(this.login.valid) {
      this.login.reset();
      this.router.navigate(['/home']);
    }
  }



}
