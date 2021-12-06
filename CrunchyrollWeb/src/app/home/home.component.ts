import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authSvc: AuthService) { }

  ngOnInit() {
  }

  Logout(){
    this.authSvc.logout().then(res => {
      console.log('Se cerro sesion de forma existosa: ', res);
    })
  }

}
