import { Component, OnInit } from '@angular/core';
import 'owl.carousel';
declare var jQuery: any;
declare var $: any;
import TypeIt from 'typeit';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    new TypeIt('.typed', {
      strings: ["Softwares.", "Websites.", "Mobile apps."],
      speed: 200,
      loop: true,
      breakLines: false,
      autoStart: false
  });
    $('.owl-carousel').owlCarousel({
      loop: false,
      autoplay: true,
      margin: 20,
      nav: true,
      dots: false,
      navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        600: {
          items: 1
        },
        1000: {
          items: 1
        }
      }
    });
  }
}
