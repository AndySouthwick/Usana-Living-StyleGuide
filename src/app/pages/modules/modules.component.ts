import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Apollo } from 'apollo-angular';


@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {
  page: string;

  constructor(private route: ActivatedRoute) {}
  moduleSelect = () => {
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
