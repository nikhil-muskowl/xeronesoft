import { Component, OnInit } from '@angular/core';
import { fancybox } from "@fancyapps/fancybox";
declare var jQuery: any;
declare var $: any;
import "@fancyapps/fancybox/dist/jquery.fancybox.min.css";
import "@fancyapps/fancybox/dist/jquery.fancybox.min.js";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $('[data-fancybox="gallery"]').fancybox();
  }

}
