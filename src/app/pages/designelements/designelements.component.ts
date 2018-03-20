import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-designelements',
  templateUrl: './designelements.component.html',
  styleUrls: ['./designelements.component.scss']
})
export class DesignelementsComponent implements OnInit {

  page: string;
  data: {};
  constructor(private route: ActivatedRoute) {}
  moduleSelect = () => {
    this.data = {
      title: 'DESIGN ELEMENTS',
      description: 'Our parameters for usana.com are very specific. Character counts for sections, width and height for images are just a few.',
      secondaryNav: [
        {
          link: '/design-elements/colors',
          linkText: 'Colors'
        },
        {
          link: '/design-elements/type',
          linkText: 'Typography'
        },
        {
          link: '/design-elements/icons',
          linkText: 'Iconogrpahy'
        },
    ]
    };

    this.route.params.subscribe(params => {
      const id = params['id'];
      this.page = id;
      console.log('id in constructor', id);
    });
  }


  ngOnInit() {
    this.moduleSelect();
  }

}
