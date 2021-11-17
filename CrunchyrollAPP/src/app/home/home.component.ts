import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  Prev() {
    let slide;
    var content = document.querySelectorAll("input");
    var counter;
    for (var i = 0; i <content.length; i++) {
      if(content[i].checked){
        counter = parseInt(content[i].id.charAt(1));
        counter--;
        if(counter < 1){
          counter = 5;
        }
      }
    }
    slide = <HTMLInputElement> document.getElementById('s' + counter);
    slide.checked = true;
  }

  Next() {
    let slide;
    var content = document.querySelectorAll("input");
    var counter;
    for (var i = 0; i <content.length; i++) {
      if(content[i].checked){
        counter = parseInt(content[i].id.charAt(1));
        counter++;
        if(counter > 5){
          counter = 1;
        }
      }
    }
    slide = <HTMLInputElement> document.getElementById('s' + counter);
    slide.checked = true;
  }

  Circulo(counter) {
    let slide;
    console.log(counter);
    slide = <HTMLInputElement> document.getElementById('s' + counter);
    slide.checked = true;
  }

}
