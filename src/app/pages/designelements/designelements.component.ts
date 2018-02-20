import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-designelements',
  templateUrl: './designelements.component.html',
  styleUrls: ['./designelements.component.scss']
})
export class DesignelementsComponent implements OnInit {
data: {};
  constructor() { }

  ngOnInit() {
    this.data = {
      title: 'Design Elements',
      description: 'Our parameters for usana.com are very specific. Character counts for sections, width and height for images are just a few.'
    };
  }

}
