import { Component, OnInit } from '@angular/core';
import { AuthService } from "../../services/auth.service";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public isLogged = this.authSvc.isLogged;
  public userLogged = this.authSvc.getUserLogeed();

  constructor(private authSvc: AuthService) { }

  ngOnInit() {
  }

  Logout(){
    this.authSvc.logout().then(res => {
      console.log('Se cerro sesion de forma existosa: ', res);
    })
  }

}
