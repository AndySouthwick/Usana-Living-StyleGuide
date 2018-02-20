import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iconography',
  templateUrl: './iconography.component.html',
  styleUrls: ['./iconography.component.scss']
})
export class IconographyComponent implements OnInit {
data: {};

  constructor() { }

  ngOnInit() {
    this.data = {
      title: 'Iconography',
      description: 'How we use icons tells our users where to go, gives additional meaning to text, and ' +
      'provides a powerful resource to communicate more with less.'
    };
  }

}
