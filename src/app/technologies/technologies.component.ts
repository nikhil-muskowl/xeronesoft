import { Component, OnInit } from '@angular/core';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

library.add(fas, far);

import { faHtml5, faCss3, faJs, faPhp, faOpencart, faWordpress, faJoomla, faLaravel, faDrupal, faAngular } from '@fortawesome/free-brands-svg-icons';
library.add(faHtml5, faCss3, faJs, faPhp, faOpencart, faWordpress, faJoomla, faLaravel, faDrupal, faAngular);

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
