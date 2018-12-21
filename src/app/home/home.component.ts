import { Component, OnInit } from '@angular/core';
import TypeIt from 'typeit';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new TypeIt('#type-it', {
      strings: ["Softwares.", "Websites.", "Mobile apps."],
      speed: 200,
      loop: true,
      breakLines: false,
      autoStart: false     
    });
  }

}
