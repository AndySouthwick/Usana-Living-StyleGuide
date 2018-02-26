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
      title: 'Modules',
      description: 'Html and CSS we use for our components',
      secondaryNav: [
        {
          link: '/angular-modules/button',
          linkText: 'Buttons'
        },
        {
          link: '/angular-modules/footer',
          linkText: 'Footer'
        },
        {
          link: '/angular-modules/card',
          linkText: 'Card'
        },
      ]
    }


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
