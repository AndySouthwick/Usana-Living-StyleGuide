import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';



@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.scss']
})
export class ModulesComponent implements OnInit {
  page: string;
  data: {};

  constructor(private route: ActivatedRoute) {}
  moduleSelect = () => {

    this.data = {
      title: 'UI COMPONENTS',
      description: 'Html and CSS we use for our components',
      secondaryNav: [
        {
          link: '/angular-modules/footer',
          linkText: 'Footer'
        },
        {
          link: '/angular-modules/card',
          linkText: 'Card'
        },
        {
          link: '/angular-modules/hero',
          linkText: 'Hero'
        },
        {
          link: '/angular-modules/hero-video',
          linkText: 'Hero Video'
        },
        {
          link: '/angular-modules/buttons',
          linkText: 'Buttons'
        },
        {
          link: '/angular-modules/tabs',
          linkText: 'Tabs'
        },
        {
          link: '/angular-modules/form-elements',
          linkText: 'Form Elements'
        },
      ]
    }


    this.route.params.subscribe(params => {
      this.page = params['id'];
    });
      }

   ngOnInit() {
     this.moduleSelect();
   }
}
